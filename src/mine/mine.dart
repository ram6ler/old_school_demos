import 'package:web/web.dart' as web;
import 'package:old_school/old_school.dart' show Terminal;
import 'package:old_school/special_characters.dart' as sc;
import 'dart:math' show Random;

import 'package:old_school/old_school.dart';

final rand = Random();

class Cell {
  bool hasMine = false, isVisible = false, isMarked = false;
}

class Field {
  final List<List<Cell>> data;

  Field(int rows, int columns)
      : data = [
          for (final _ in Iterable.generate(rows))
            [for (final _ in Iterable.generate(columns)) Cell()]
        ];

  int get rows => data.length;

  int get columns => data.first.length;

  void clear() {
    for (final row in data) {
      for (var c = 0; c < columns; c++) {
        row[c]
          ..hasMine = false
          ..isVisible = false
          ..isMarked = false;
      }
    }
  }

  bool _isSurrounded(int r, int c) {
    for (var dr = -1; dr <= 1; dr++) {
      for (var dc = -1; dc <= 1; dc++) {
        final (nr, nc) = (r + dr, c + dc);
        if ((dr == 0 && dc == 0) ||
            nr < 0 ||
            nr >= rows ||
            nc < 0 ||
            nc >= columns) {
          continue;
        }

        if (!data[nr][nc].hasMine) {
          return false;
        }
      }
    }
    return true;
  }

  int _countNeighbors(int r, int c) {
    var result = 0;
    for (var dr = -1; dr <= 1; dr++) {
      for (var dc = -1; dc <= 1; dc++) {
        final (nr, nc) = (r + dr, c + dc);
        if ((dr == 0 && dc == 0) ||
            nr < 0 ||
            nr >= rows ||
            nc < 0 ||
            nc >= columns) {
          continue;
        }
        result += data[nr][nc].hasMine ? 1 : 0;
      }
    }
    return result;
  }

  void init(double p) {
    final n = (p * rows * columns).round();
    for (final _ in Iterable.generate(n)) {
      var r = 0, c = 0;
      while (true) {
        r = rand.nextInt(rows);
        c = rand.nextInt(columns);
        if (!data[r][c].hasMine && !_isSurrounded(r, c)) {
          break;
        }
      }
      data[r][c].hasMine = true;
    }
  }

  bool choose(int r, int c) {
    final cell = data[r][c];
    if (cell.hasMine) {
      cell.isVisible = true;
      return true;
    }
    final stack = [(r, c)];
    while (stack.isNotEmpty) {
      final (row, col) = stack.removeLast();
      final cell = data[row][col];
      cell.isVisible = true;
      if (_countNeighbors(row, col) == 0) {
        for (var dr = -1; dr <= 1; dr++) {
          for (var dc = -1; dc <= 1; dc++) {
            final (nr, nc) = (row + dr, col + dc);
            if ((dr == 0 && dc == 0) ||
                nr < 0 ||
                nr >= rows ||
                nc < 0 ||
                nc >= columns) {
              continue;
            }
            final nCell = data[nr][nc];
            if (!nCell.isVisible && !nCell.hasMine) {
              stack.add((nr, nc));
            }
          }
        }
      }
    }
    return false;
  }

  bool mark(int r, int c) {
    final cell = data[r][c];
    if (cell.isVisible) {
      var markedNeighbors = 0;
      for (var dr = -1; dr <= 1; dr++) {
        for (var dc = -1; dc <= 1; dc++) {
          final (nr, nc) = (r + dr, c + dc);
          if ((dr == 0 && dc == 0) ||
              nr < 0 ||
              nr >= rows ||
              nc < 0 ||
              nc >= columns) {
            continue;
          }
          if (data[nr][nc].isMarked) {
            markedNeighbors++;
          }
        }
      }
      final n = _countNeighbors(r, c);
      if (n == markedNeighbors) {
        for (var dr = -1; dr <= 1; dr++) {
          for (var dc = -1; dc <= 1; dc++) {
            final (nr, nc) = (r + dr, c + dc);
            if ((dr == 0 && dc == 0) ||
                nr < 0 ||
                nr >= rows ||
                nc < 0 ||
                nc >= columns) {
              continue;
            }
            final nCell = data[nr][nc];
            if (!nCell.isVisible && !nCell.isMarked) {
              final hitMine = choose(nr, nc);
              if (hitMine) {
                return true;
              }
            }
          }
        }
      }
      return false;
    } else {
      cell.isMarked = !cell.isMarked;
      return false;
    }
  }

  bool hasWon() {
    for (var r = 0; r < rows; r++) {
      for (var c = 0; c < columns; c++) {
        final cell = data[r][c];
        if (cell.isMarked != cell.hasMine) {
          return false;
        }
      }
    }
    return true;
  }

  String _cellString(int r, int c) {
    final cell = data[r][c];
    if (!cell.isVisible) {
      return cell.isMarked ? sc.star : sc.squareFilled;
    }
    if (cell.hasMine) {
      return '*';
    }
    final n = _countNeighbors(r, c);
    if (n == 0) {
      return '.';
    }
    return n.toString();
  }

  @override
  toString() => [
        for (var r = 0; r < rows; r++)
          [for (var c = 0; c < columns; c++) _cellString(r, c)].join('')
      ].join('\n');
}

enum GameState { title, setup, play, win, lose }

class Game {
  static const rows = 17, columns = 35, rowOffset = 4, colOffset = 3;
  static const colors = {
    '.': 'rgb(150, 150, 150)',
    '1': 'rgb(236, 192, 109)',
    '2': 'rgb(234, 118, 67)',
    '3': 'rgb(235, 108, 108)',
    '4': 'rgb(229, 63, 63)',
    '5': 'rgb(107, 193, 235)',
    '6': 'rgb(23, 128, 234)',
    '7': 'rgb(193, 106, 236)',
    '8': 'rgb(130, 22, 236)',
    '*': 'orangered',
    sc.star: 'rgb(150, 150, 150)',
    sc.squareFilled: 'rgb(200,200,200)'
  };

  var _markMode = false;

  late final Terminal terminal;
  final field = Field(rows, columns);

  void toggleMode() {
    if (state != GameState.play) {
      return;
    }
    if (_markMode) {
      for (var r = 0; r < field.rows; r++) {
        terminal
          ..setCharacter(
              row: rowOffset + r, column: colOffset - 1, character: ' ')
          ..setCharacter(
              row: rowOffset + r,
              column: colOffset + field.columns,
              character: ' ');
      }
      for (var c = 0; c < field.columns; c++) {
        terminal
          ..setCharacter(
              row: rowOffset - 1, column: colOffset + c, character: ' ')
          ..setCharacter(
              row: rowOffset + field.rows,
              column: colOffset + c,
              character: ' ');
      }
      terminal
        ..setCharacter(
            row: rowOffset - 1, column: colOffset - 1, character: ' ')
        ..setCharacter(
            row: rowOffset - 1,
            column: colOffset + field.columns,
            character: ' ')
        ..setCharacter(
            row: rowOffset + field.rows, column: colOffset - 1, character: ' ')
        ..setCharacter(
            row: rowOffset + field.rows,
            column: colOffset + field.columns,
            character: ' ')
        ..output('Select', row: rowOffset - 2, column: colOffset);
    } else {
      for (var r = 0; r < field.rows; r++) {
        terminal
          ..setCharacter(
              row: rowOffset + r, column: colOffset - 1, character: sc.vertical)
          ..setCharacter(
              row: rowOffset + r,
              column: colOffset + field.columns,
              character: sc.vertical);
      }
      for (var c = 0; c < field.columns; c++) {
        terminal
          ..setCharacter(
              row: rowOffset - 1,
              column: colOffset + c,
              character: sc.horizontal)
          ..setCharacter(
              row: rowOffset + field.rows,
              column: colOffset + c,
              character: sc.horizontal);
      }
      terminal
        ..setCharacter(
            row: rowOffset - 1, column: colOffset - 1, character: sc.downRight)
        ..setCharacter(
            row: rowOffset - 1,
            column: colOffset + field.columns,
            character: sc.downLeft)
        ..setCharacter(
            row: rowOffset + field.rows,
            column: colOffset - 1,
            character: sc.upRight)
        ..setCharacter(
            row: rowOffset + field.rows,
            column: colOffset + field.columns,
            character: sc.upLeft)
        ..output('Mark  ', row: rowOffset - 2, column: colOffset);
    }
    _markMode = !_markMode;
  }

  Game() {
    terminal = Terminal(
      rows: rows + 2 * rowOffset,
      columns: columns + 2 * colOffset,
      container: web.document.querySelector('#mine') as web.HTMLElement,
      whenKeyIsReleased: (_, d) {
        if (d.keyCode == web.KeyCode.SPACE) {
          toggleMode();
        }
      },
      rowGap: 0,
    )..focus();
  }

  var state = GameState.title;

  void showField() {
    final lines = field.toString().split('\n');
    for (var r = 0; r < lines.length; r++) {
      for (var c = 0; c < field.columns; c++) {
        final char = lines[r][c];
        terminal
          ..setCharacter(
              row: r + rowOffset, column: c + colOffset, character: lines[r][c])
          ..setColor(
              row: r + rowOffset, column: c + colOffset, color: colors[char]!);
      }
    }
  }

  void play() async {
    while (true) {
      switch (state) {
        case GameState.title:
          terminal
            ..clear()
            ..output(' ', row: 2);
          for (final line in '''
  _____ _                               
 |     |_|___ ___ ___ _ _ _ ___ ___ ___ 
 | | | | |   | -_|_ -| | | | -_| -_| . |
 |_|_|_|_|_|_|___|___|_____|___|___|  _|
                                   |_| 

  Controls:

    SPACE

      Toggle between 'select' (no
      border) and 'mark' (border)
      mode.
      
    CLICK CELL

      Select or mark cells.
           
  Click anywhere to begin!
'''
              .split('\n')) {
            terminal.output(line);
          }
          await terminal.inputMouseClick();
          state = GameState.setup;
        case GameState.setup:
          terminal.clear();
          field
            ..clear()
            ..init(0.1);

          showField();
          _markMode = true;
          state = GameState.play;
          toggleMode();
        case GameState.play:
          final m = await terminal.inputMouseClick();
          final (r, c) = (m.row - rowOffset, m.column - colOffset);
          if (r >= 0 && r < field.rows && c >= 0 && c < field.columns) {
            final hitMine = _markMode ? field.mark(r, c) : field.choose(r, c);
            showField();
            if (hitMine) {
              state = GameState.lose;
            }
            if (field.hasWon()) {
              state = GameState.win;
            }
          }
        case GameState.win:
          terminal
            ..output('Congratutations! You win!',
                row: 1, column: (columns + 2 * colOffset - 25) ~/ 2)
            ..output('Click to continue.',
                row: rowOffset + rows + 2,
                column: (columns + 2 * colOffset - 18) ~/ 2);
          await terminal.inputMouseClick();
          state = GameState.title;

        case GameState.lose:
          terminal
            ..output('Boom! You lose!',
                row: 1, column: (columns + 2 * colOffset - 15) ~/ 2)
            ..output('Click to continue.',
                row: rowOffset + rows + 2,
                column: (columns + 2 * colOffset - 18) ~/ 2);
          await terminal.inputMouseClick();
          state = GameState.title;
      }
    }
  }
}

void main() {
  Game().play();
}
