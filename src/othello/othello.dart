import "dart:isolate";

import "package:web/web.dart" as web;
import "package:old_school/old_school.dart" as os;
import "package:old_school/special_characters.dart" as sc;

import "banner.dart";
import "othello_state.dart" show OthelloState;
import "player.dart" show Player;
import "mode.dart" show Mode;
import "intelligence.dart" show getBestMove;

class Game {
  static const rowOffset = 3, columnOffset = 3;
  static int fR(int row) => row * 3 + rowOffset;
  static int gR(int row) => (row - rowOffset) ~/ 3;
  static int fC(int column) => column * 3 + columnOffset;
  static int gC(int column) => (column - columnOffset) ~/ 3;

  final terminal = os.Terminal(
    rows: 29,
    columns: 50,
    container: web.document.getElementById("othello") as web.HTMLElement,
    backgroundColor: "black",
    defaultColor: "white",
    scrolls: false,
  );

  final othello = OthelloState(Player.naught);

  void drawPiece(Player player, int row, int column) {
    terminal.output(
      player.symbol,
      row: fR(row),
      column: fC(column),
      color: switch (player) {
        Player.naught => "orange",
        Player.cross => "mediumorchid",
      },
    );
  }

  void drawBoard([(int, int)? marked]) {
    terminal.clear(
      row: fR(0) - 1,
      column: fC(0) - 1,
      width: fR(7) - fR(0) + 3,
      height: fC(7) - fC(0) + 3,
    );
    for (var r = 0; r < 8; r++) {
      for (var c = 0; c < 8; c++) {
        if (othello.cellIsOccupiedByNaught(r, c)) {
          drawPiece(Player.naught, r, c);
        } else if (othello.cellIsOccupiedByCross(r, c)) {
          drawPiece(Player.cross, r, c);
        } else {
          terminal.output(sc.dot,
              row: fR(r), column: fC(c), color: "lightgray");
        }
      }
    }

    if (marked != null) {
      final (markedRow, markedColumn) = marked;
      terminal
        ..output(
          sc.downRight,
          row: fR(markedRow) - 1,
          column: fC(markedColumn) - 1,
        )
        ..output(
          sc.downLeft,
          row: fR(markedRow) - 1,
          column: fC(markedColumn) + 1,
        )
        ..output(
          sc.upRight,
          row: fR(markedRow) + 1,
          column: fC(markedColumn) - 1,
        )
        ..output(
          sc.upLeft,
          row: fR(markedRow) + 1,
          column: fC(markedColumn) + 1,
        );
    }
  }

  void showBanner() {
    terminal.clear();
    for (final (r, line)
        in banner.split("\n").where((line) => line.isNotEmpty).indexed) {
      terminal.output(line, row: r + 3, column: 8, color: "lightgreen");
    }
  }

  Future<Mode> inputDifficulty() async {
    Mode? result;
    showBanner();
    terminal
      ..output("Select a difficulty level:", row: 10, column: 10)
      ..output("(A) Easy", row: 12, column: 12)
      ..output("(B) Medium", column: 12)
      ..output("(C) Hard", column: 12)
      ..output("(D) Expert", column: 12);
    while (result == null) {
      final key = await terminal.inputKey();
      result = switch (key.key.toLowerCase()) {
        "a" => Mode.easy,
        "b" => Mode.medium,
        "c" => Mode.hard,
        "d" => Mode.expert,
        _ => null,
      };
    }
    return result;
  }

  Future<Player> inputPlayer() async {
    Player? result;
    showBanner();
    terminal
      ..output("Select your token:", row: 10, column: 10)
      ..output("(A) Naught (Move First)", row: 12, column: 12)
      ..output("(B) Cross (Move Second)", column: 12);
    while (result == null) {
      final key = await terminal.inputKey();
      result = switch (key.key.toLowerCase()) {
        "a" => Player.naught,
        "b" => Player.cross,
        _ => null,
      };
    }
    return result;
  }

  Future<(int row, int column)> inputMove() async {
    final legalMoves = othello.legalMoves;
    var row = -1, column = -1;
    while (!legalMoves.contains((row, column))) {
      final mouse = await terminal.inputMouseClick();
      row = gR(mouse.row);
      column = gC(mouse.column);
    }
    return (row, column);
  }

  Future<void> gameOver(Player human) async {
    terminal.output("Game Over!", row: 15, column: 30);
    if (othello.naughtScore == 0 || othello.crossScore == 0) {
      terminal.output("Othello!", column: 30, color: "yellow");
    }
    if (othello.naughtScore == othello.crossScore) {
      terminal.output("A tie!", column: 30);
    } else {
      switch (human) {
        case Player.naught:
          if (othello.naughtScore > othello.crossScore) {
            terminal.output("You win!", column: 30);
          } else {
            terminal.output("Computer wins!", column: 30);
          }
        case Player.cross:
          if (othello.naughtScore > othello.crossScore) {
            terminal.output("Computer wins!", column: 30);
          } else {
            terminal.output("You win!", column: 30);
          }
      }
    }
    terminal.output("Press any key!", column: 30);

    await terminal.inputKey();
  }

  void updateScore(Player human) {
    final computer = human.next;
    terminal
      ..output("Score", row: 3, column: 30)
      ..output(
        "  Human (${human.symbol}):    ${switch (human) {
          Player.cross => othello.crossScore,
          Player.naught => othello.naughtScore,
        }} ",
        row: 5,
        column: 30,
      )
      ..output(
        "  Computer (${computer.symbol}): ${switch (computer) {
          Player.cross => othello.crossScore,
          Player.naught => othello.naughtScore,
        }} ",
        column: 30,
      );
  }

  Future<void> play() async {
    while (true) {
      final mode = await inputDifficulty(), human = await inputPlayer();
      terminal.clear();
      othello.reset();
      drawBoard();
      updateScore(human);
      var skipped = false;
      while (true) {
        if (othello.moveIsAvailable) {
          skipped = false;
          if (othello.player == human) {
            terminal.output("Your move...", row: fR(8), column: fC(0));
          } else {
            terminal.output("Thinking...", row: fR(8), column: fC(0));
          }
          await Future.delayed(Duration(milliseconds: 100));
          final (r, c) = othello.player == human
              ? await inputMove()
              : await getBestMove(othello, mode);
          terminal.output("              ", row: fR(8), column: fC(0));
          othello.moveTo(r, c);
          if (othello.player == human) {
            drawBoard((r, c));
          } else {
            drawBoard();
          }
          updateScore(human);
        } else {
          if (skipped) {
            break;
          }
          skipped = true;
          othello.player = othello.player.next;
        }
      }
      await gameOver(human);
    }
  }
}

Future<void> main() => (Game()..terminal.focus()).play();
