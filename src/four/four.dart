import 'dart:math' show Random;
import 'package:web/web.dart' as web;
import 'package:old_school/old_school.dart' show Terminal;

const rows = 6, columns = 7;

final rand = Random();

final terminal = Terminal(
  rows: 15,
  columns: 31,
  container: web.document.getElementById('four')! as web.HTMLElement,
  backgroundColor: '#1f1f1f',
)..focus();

enum Position {
  o,
  x,
  empty;

  @override
  String toString() => switch (this) {
        o => 'O',
        x => 'X',
        empty => '.',
      };

  String color() {
    if (this == o) return 'violet';
    if (this == x) return 'lightgreen';
    return 'gray';
  }
}

class Node {
  final state = [
    for (final _ in Iterable.generate(rows))
      [for (final _ in Iterable.generate(columns)) Position.empty]
  ];

  Position player = Position.o;

  bool canMove(int column) => state[0][column] == Position.empty;

  List<int> get validMoves => [
        for (var i = 0; i < columns; i++)
          if (canMove(i)) i
      ];

  int _finalRow(int column) {
    if (canMove(column)) {
      var row = 0;
      while (row + 1 < rows && state[row + 1][column] == Position.empty) {
        row++;
      }
      return row;
    }
    return -1;
  }

  bool wouldWin(int column) {
    final row = _finalRow(column);
    if (row == -1) throw 'Cannot move $column...';

    bool helper(int dr, int dc) {
      var r = row, c = column, s = 1;
      while (r + dr >= 0 &&
          r + dr < rows &&
          c + dc >= 0 &&
          c + dc < columns &&
          state[r + dr][c + dc] == player) {
        s++;
        r += dr;
        c += dc;
      }
      r = row;
      c = column;
      while (r - dr >= 0 &&
          r - dr < rows &&
          c - dc >= 0 &&
          c - dc < columns &&
          state[r - dr][c - dc] == player) {
        s++;
        r -= dr;
        c -= dc;
      }
      return s == 4;
    }

    // Check row.
    if (helper(0, 1)) {
      return true;
    }
    // Check column;
    if (helper(1, 0)) {
      return true;
    }
    // Check diagonal \.
    if (helper(1, 1)) {
      return true;
    }
    if (helper(-1, 1)) {
      return true;
    }

    return false;
  }

  bool move(int column) {
    if (canMove(column)) {
      final row = _finalRow(column), result = wouldWin(column);
      state[row][column] = player;
      return result;
    }
    throw 'Cannot make move: $column';
  }

  Node copy() {
    final result = Node();
    for (var r = 0; r < rows; r++) {
      for (var c = 0; c < columns; c++) {
        result.state[r][c] = state[r][c];
      }
    }
    result.player = player;
    return result;
  }

  void switchPlayers() {
    player = player == Position.o ? Position.x : Position.o;
  }

  Position randomGameWinner() {
    final game = copy();
    while (true) {
      final moves = game.validMoves;
      if (moves.isEmpty) {
        break;
      }
      // Winner
      if (game.move(moves[rand.nextInt(moves.length)])) {
        return game.player;
      } else {
        game.switchPlayers();
      }
    }
    // Tie

    return Position.empty;
  }

  int monteCarloMove([int n = 1000]) {
    final simData = {for (final m in validMoves) m: 0};
    for (final m in validMoves) {
      final game = copy(), hasWon = game.move(m);
      if (hasWon) {
        return m;
      }
      for (final _ in Iterable.generate(n)) {
        final winner = game.randomGameWinner();
        if (winner == player) {
          simData[m] = simData[m]! + 1;
        }
      }
    }
    return simData.keys.fold<int>(
        simData.keys.first, (a, b) => simData[a]! > simData[b]! ? a : b);
  }

  @override
  String toString() {
    final sb = StringBuffer();
    for (var r = 0; r < rows; r++) {
      for (var c = 0; c < columns; c++) {
        sb.write(state[r][c]);
      }
      sb.write('\n');
    }
    return sb.toString();
  }
}

Future<void> animate(Node game, int move, [bool show = true]) async {
  final columnOffset = (terminal.columns - columns * 2) ~/ 2, rowOffset = 2;
  var r = 0;
  for (; r < rows; r++) {
    if (game.state[r][move] == Position.empty) {
      if (show) {
        terminal.output(game.player.toString(),
            row: rowOffset + r,
            column: columnOffset + move * 2,
            color: game.player.color());

        await Future.delayed(Duration(milliseconds: 200));
      }

      terminal.output(Position.empty.toString(),
          row: rowOffset + r,
          column: columnOffset + move * 2,
          color: Position.empty.color());
    } else {
      break;
    }
  }
  if (show) {
    terminal.output(game.player.toString(),
        row: rowOffset + r,
        column: columnOffset + move * 2,
        color: game.player.color());
  }

  terminal.output('${move + 1}',
      row: rowOffset + rows, column: columnOffset + move * 2);
}

void center(String message, int row) {
  final column = (terminal.columns - message.length) ~/ 2;
  terminal.output(message, row: row, column: column);
}

Future<bool> getHumanFirst() async {
  terminal.clear();
  center('Four-In-A-Line', 0);
  final question = 'Move first (y/n) ?';
  center(question, 2);
  var input = '';
  do {
    input = (await terminal.inputKey()).key;
  } while (!'ynYN'.contains(input));
  center(' ' * question.length, 2);
  return input.toLowerCase() == 'y';
}

enum GameResult {
  human,
  computer,
  tie;
}

Future<GameResult> newGame() async {
  final humanFirst = await getHumanFirst();

  final game = Node();
  var firstMove = true;

  for (var m = 0; m < columns; m++) {
    animate(game, m, false);
  }

  while (true) {
    if (game.validMoves.isEmpty) {
      return GameResult.tie;
    }

    var okay = false, hasWon = false;
    if (!firstMove || (firstMove && humanFirst)) {
      center('Your move (${game.player}).', 10);
      while (!okay) {
        final key = (await terminal.inputKey()).key, m = '1234567'.indexOf(key);
        if (game.validMoves.contains(m)) {
          okay = true;
          hasWon = game.move(m);
          await animate(game, m);
          game.switchPlayers();
        }
      }
      center(' ' * 14, 10);
      if (hasWon) {
        return GameResult.human;
      }
    }

    firstMove = false;

    if (game.validMoves.isEmpty) {
      return GameResult.tie;
    }

    final computerMove = game.monteCarloMove(1000);

    hasWon = game.move(computerMove);
    center('I choose ${computerMove + 1}.', 10);
    await animate(game, computerMove);
    center(' ' * 11, 10);
    if (hasWon) {
      return GameResult.computer;
    }

    game.switchPlayers();
  }
}

Future<void> main() async {
  while (true) {
    final gameResult = await newGame();
    switch (gameResult) {
      case GameResult.computer:
        center('Computer wins!', 10);
        break;
      case GameResult.human:
        center('You win!', 10);
        break;
      case GameResult.tie:
        center('A tie!', 10);
    }

    center('Press any key to', 12);
    center('play again!', 13);
    await terminal.inputKey();
  }
}
