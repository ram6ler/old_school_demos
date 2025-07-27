import 'dart:math' show Random;
import 'package:web/web.dart' as web;
import 'package:old_school/old_school.dart' as os;
import 'package:old_school/special_characters.dart' as sc;
import 'grid.dart';

web.HTMLElement find(String id) =>
    web.document.getElementById(id) as web.HTMLElement;

final rand = Random(),
    grid = Grid(),
    board = os.Terminal(
      rows: (grid.size + 1) * 2 + 1,
      columns: (grid.size + 1) * 2 + 1,
      container: find('salad'),
      rowGap: 0,
      pixelWidth: 3,
      pixelHeight: 3,
      scrolls: false,
      defaultColor: 'lightgreen',
    ),
    info = os.Terminal(
      rows: 17,
      columns: 40,
      container: find('salad_info'),
      pixelWidth: 2,
      pixelHeight: 3,
      scrolls: false,
      isInteractive: false,
      defaultColor: 'lightgreen',
    );

enum GameState { titleScreen, playing, wordFound, gameOver }

class Game {
  static int transform(int coordinate) => 2 * (coordinate % grid.size) + 2;

  final cellCoordinates = <(int, int)>[];
  var state = GameState.titleScreen;

  void showTitleScreen() {
    board.clear();
    info.clear();
    for (final line in r'''
  __      __          _  
  \ \    / /__ _ _ __| | 
   \ \/\/ / _ \ '_/ _` | 
   _\_/\_/\___/_| \__,_| 
  / __| __ _| |__ _ __| |
  \__ \/ _` | / _` / _` |
  |___/\__,_|_\__,_\__,_|                      
  
  Press any key to start! 
   '''
        .split('\n')) {
      if (line.isNotEmpty) {
        info.output(line);
      }
    }
  }

  void showGameOver() {
    board.clear();
    info
      ..clear()
      ..output('Game Over!');
  }

  void updatePartial(String partial, String color) {
    info.output(
      partial,
      row: 3,
      column: (info.columns - partial.length) ~/ 2,
      color: color,
    );
  }

  void updateDefinitions() {
    final letter = grid.currentLetter, definitions = letter.word!.definitions;
    info.clear();

    updatePartial(grid.currentLetter.partial, 'white');

    info
      ..output(
        definitions.values.any((defs) => defs.length > 1)
            ? 'Definitions:'
            : 'Definition:',
        row: 5,
      )
      ..newLine();

    for (final MapEntry(key: wordType, value: defs) in definitions.entries) {
      info.output('$wordType.');
      final sb = StringBuffer(' ${sc.dot}');
      for (final def in defs) {
        final split = def.split(' ');
        for (final text in split) {
          if (('${sb.toString()} $text').length > 37) {
            info.output(sb.toString());
            sb
              ..clear()
              ..write('  ');
          }
          sb.write(' $text');
        }
        info.output(sb.toString());
        sb
          ..clear()
          ..write(' ${sc.dot}');
      }
    }
  }

  void message(String text, String color) => info.output(
        text,
        row: info.rows - 2,
        //column: (info.columns - text.length) ~/ 2,
        color: color,
      );

  Future<void> fillTiles() async {
    info.clear();
    board
      ..clear()
      ..output(
        ' ${sc.downRight}'
        '${(sc.horizontal * grid.size).split('').join(sc.downHorizontal)}'
        '${sc.downLeft}',
        row: 1,
        color: 'gray',
      );
    for (var i = 0; i < grid.size; i++) {
      board.output(
        ' ${sc.vertical}'
        '${(' ' * grid.size).split('').join(sc.vertical)}'
        '${sc.vertical}',
        color: 'gray',
      );
      if (i < grid.size - 1) {
        board.output(
          ' ${sc.verticalRight}'
          '${(sc.horizontal * grid.size).split('').join(sc.verticalHorizontal)}'
          '${sc.verticalLeft}',
          color: 'gray',
        );
      } else {
        board.output(
          ' ${sc.upRight}'
          '${(sc.horizontal * grid.size).split('').join(sc.upHorizontal)}'
          '${sc.upLeft}',
          color: 'gray',
        );
      }
    }

    cellCoordinates.addAll(grid.coordinates);
    while (cellCoordinates.isNotEmpty) {
      final (row, column) = cellCoordinates.removeAt(
        rand.nextInt(cellCoordinates.length),
      );
      board.output(
        grid.peek(row, column),
        row: transform(row),
        column: transform(column),
        color: 'gray',
      );
      await Future.delayed(Duration(milliseconds: 25));
    }

    updateDefinitions();
    final (row, column) = grid.currentPosition.tuple;
    markCurrent(row, column);
  }

  void markCurrent(int row, int column) => board.setColor(
        row: transform(row),
        column: transform(column),
        color: 'yellow',
      );

  void markVisited(int row, int column) => board.setColor(
        row: transform(row),
        column: transform(column),
        color: 'limegreen',
      );

  void markWrong(int row, int column) => board.setColor(
        row: transform(row),
        column: transform(column),
        color: 'orangered',
      );
}

Future<void> main() async {
  final game = Game();
  board.focus();
  game.showTitleScreen();
  while (true) {
    final key = await board.inputKey();
    switch (game.state) {
      case GameState.titleScreen:
        grid.refresh();
        await game.fillTiles();
        final (row, column) = grid.currentPosition.tuple;
        game
          ..markCurrent(row, column)
          ..state = GameState.playing;

      case GameState.playing:
        final (row, column) = grid.currentPosition.tuple;
        final (dr, dc) = grid.currentDirection.move;
        final letter = key.key.toLowerCase(),
            correctRow = row + dr,
            correctColumn = column + dc,
            correctLetter = grid.peek(correctRow, correctColumn);

        if (letter.isNotEmpty && letters.contains(letter)) {
          if (correctLetter == letter) {
            grid.moveToNextCell();
            game
              ..markVisited(row, column)
              ..markCurrent(correctRow, correctColumn)
              ..updatePartial(grid.currentLetter.partial, 'white');

            if (grid.currentWordIsComplete) {
              game
                ..message('Good job! Press enter to continue!', 'lightgreen')
                ..markVisited(correctRow, correctColumn)
                ..state = GameState.wordFound;
            }
          } else {
            game
              ..message('Too bad! Press enter to continue!', 'orangered')
              ..updatePartial(grid.currentLetter.word!.word, 'orangered')
              ..state = GameState.gameOver;
          }
        }

      case GameState.wordFound:
        if (key.keyCode == web.KeyCode.ENTER) {
          final moreWords = grid.moveToNextCell();
          if (moreWords) {
            final (row, column) = grid.currentPosition.tuple;
            game
              ..updateDefinitions()
              ..markCurrent(row, column)
              ..state = GameState.playing;
          } else {
            grid.refresh();
            await game.fillTiles();
            game
              ..updateDefinitions()
              ..state = GameState.playing;
          }
        }

      case GameState.gameOver:
        if (key.keyCode == web.KeyCode.ENTER) {
          game
            ..showTitleScreen()
            ..state = GameState.titleScreen;
        }
    }
  }
}
