import 'dart:math' show Random;
import 'dart:async' show Timer;
import 'package:web/web.dart' as web;

import 'package:old_school/old_school.dart' as os;
import 'package:old_school/special_characters.dart' as sc;

const darkGreen = '#69b41e',
    mediumGreen = '#8dc71e',
    lightGreen = '#b8d53d',
    red = '#f73644';

class Hero {
  var row = 0, column = 0;
}

class Bouncer extends Hero {
  static const delay = 3;
  var dRow = 0, dColumn = 0, delayCount = 0, isActive = false;
}

enum Cell {
  empty,
  solid,
  trail;

  String get character => switch (this) {
        empty => ' ',
        solid => sc.fullBlock,
        trail => sc.lightBlock,
      };

  String get color => switch (this) {
        empty => darkGreen,
        solid => darkGreen,
        trail => lightGreen,
      };
}

enum GameState {
  titleScreenSetup,
  titleScreenWait,
  setupLevel,
  play,
  playFill,
  checkBouncers,
  levelFill,
  levelFillWait,
  gameOver,
  gameOverWait,
}

final keyMap = {
  web.KeyCode.UP: false,
  web.KeyCode.DOWN: false,
  web.KeyCode.LEFT: false,
  web.KeyCode.RIGHT: false,
  web.KeyCode.ENTER: false,
};

final terminalContainer =
    web.document.querySelector('#bounce') as web.HTMLElement;

class Game {
  static const rows = 25, columns = 40, bouncerCapacity = 25;

  static const connections = [(-1, 0), (1, 0), (0, -1), (0, 1)];

  Game() {
    Timer.periodic(Duration(milliseconds: 50), gameLoop);
    terminal.focus();
  }

  void updateInfo() {
    final info = 'Level: $level Score: $score';
    terminal.output(
      info,
      row: rows + 1,
      column: (columns - info.length) ~/ 2,
      newLineAfter: false,
    );
  }

  final rand = Random();

  final terminal = os.Terminal(
    rows: rows + 2,
    columns: columns,
    container: terminalContainer,
    rowGap: 0,
    whenKeyIsPressed: (terminal, data) {
      if (keyMap.containsKey(data.keyCode)) {
        keyMap[data.keyCode] = true;
      }
    },
    whenKeyIsReleased: (_, data) {
      if (keyMap.containsKey(data.keyCode)) {
        keyMap[data.keyCode] = false;
      }
    },
  );

  final world = [
    for (var r = 0; r < rows; r++)
      [
        for (var c = 0; c < columns; c++)
          r == 0 || r == rows - 1 || c == 0 || c == columns - 1
              ? Cell.solid
              : Cell.empty
      ]
  ];

  var state = GameState.titleScreenSetup;

  final bouncers = [
    for (final _ in Iterable.generate(bouncerCapacity)) Bouncer()
  ];
  var bouncerPointer = -1;

  var bouncerCount = 0;
  void createBouncer(int row, int column) {
    for (final _ in Iterable.generate(bouncerCapacity)) {
      bouncerPointer = (bouncerPointer + 1) % bouncerCapacity;
      final bouncer = bouncers[bouncerPointer];
      if (!bouncer.isActive) {
        bouncer
          ..row = row
          ..column = column
          ..isActive = true;

        do {
          bouncer
            ..dRow = rand.nextInt(3) - 1
            ..dColumn = rand.nextInt(3) - 1;
        } while (bouncer.dRow == 0 && bouncer.dColumn == 0);
        bouncerCount++;
        break;
      }
    }
  }

  final gameOverCells = <(int, int)>{};

  void moveBouncers() {
    for (final bouncer in bouncers) {
      if (bouncer.isActive) {
        if (world[bouncer.row][bouncer.column] == Cell.solid) {
          bouncer.isActive = false;
          terminal
            ..setCharacter(
              row: bouncer.row,
              column: bouncer.column,
              character: Cell.solid.character,
            )
            ..setColor(
              row: bouncer.row,
              column: bouncer.column,
              color: Cell.solid.color,
            );
          bouncerCount--;
          continue;
        }
        bouncer.delayCount = (bouncer.delayCount + 1) % Bouncer.delay;
        if (bouncer.delayCount == 0) {
          final nRow = bouncer.row + bouncer.dRow,
              nColumn = bouncer.column + bouncer.dColumn;

          if (world[nRow][nColumn] == Cell.solid) {
            if (world[nRow][bouncer.column] == Cell.solid) {
              bouncer.dRow *= -1;
            }
            if (world[bouncer.row][nColumn] == Cell.solid) {
              bouncer.dColumn *= -1;
            }
            if (world[nRow][bouncer.column] != Cell.solid &&
                world[bouncer.row][nColumn] != Cell.solid) {
              bouncer
                ..dColumn *= -1
                ..dRow *= -1;
            }
          }

          terminal
            ..setCharacter(
              row: bouncer.row,
              column: bouncer.column,
              character: world[bouncer.row][bouncer.column].character,
            )
            ..setColor(
              row: bouncer.row,
              column: bouncer.column,
              color: world[bouncer.row][bouncer.column].color,
            );

          bouncer
            ..row += bouncer.dRow
            ..column += bouncer.dColumn;

          terminal
            ..setCharacter(
              row: bouncer.row,
              column: bouncer.column,
              character: sc.circle,
            )
            ..setColor(
              row: bouncer.row,
              column: bouncer.column,
              color: lightGreen,
            );
          if (world[bouncer.row][bouncer.column] == Cell.trail) {
            gameOverCells.clear();
            final trailFill = {(bouncer.row, bouncer.column)};
            while (trailFill.isNotEmpty) {
              final (r, c) = trailFill.first;
              trailFill.remove((r, c));
              gameOverCells.add((r, c));
              for (final (dr, dc) in connections) {
                final (nr, nc) = (r + dr, c + dc);
                if (!gameOverCells.contains((nr, nc)) &&
                    world[nr][nc] == Cell.trail) {
                  trailFill.add((nr, nc));
                }
              }
            }
            state = GameState.gameOver;
          }
        }
      }
    }
  }

  final trailSeeds = <(int, int)>{}, fillSeeds = <(int, int)>{};

  void fillTrail() {
    while (trailSeeds.isNotEmpty) {
      final (r, c) = trailSeeds.first;
      trailSeeds.remove((r, c));
      for (final (dr, dc) in connections) {
        if (world[r + dr][c + dc] == Cell.trail) {
          trailSeeds.add((r + dr, c + dc));
        }
      }
      world[r][c] = Cell.solid;
      terminal
        ..setCharacter(
          row: r,
          column: c,
          character: Cell.solid.character,
        )
        ..setColor(
          row: r,
          column: c,
          color: Cell.solid.color,
        );
    }
  }

  final playFillCells = <(int, int)>{};
  void fillLeastRegion() {
    final regions = <(int, int), Set<(int, int)>>{};
    while (fillSeeds.isNotEmpty) {
      final (r, c) = fillSeeds.first;
      fillSeeds.remove((r, c));
      if (world[r][c] == Cell.solid) {
        continue;
      }
      regions[(r, c)] = {};

      final flood = {(r, c)};
      while (flood.isNotEmpty) {
        final (fr, fc) = flood.first;
        flood.remove((fr, fc));
        regions[(r, c)]!.add((fr, fc));

        for (final (dr, dc) in connections) {
          final (nr, nc) = (fr + dr, fc + dc);
          if (!regions[(r, c)]!.contains((nr, nc)) &&
              world[nr][nc] == Cell.empty) {
            flood.add((nr, nc));
          }
        }
      }
      fillSeeds.removeAll(regions[(r, c)]!);
    }

    if (regions.length > 1) {
      var leastKey = regions.keys.first,
          leastLength = regions[leastKey]!.length;
      for (final MapEntry(:key, value: cells) in regions.entries) {
        if (cells.length < leastLength) {
          leastLength = cells.length;
          leastKey = key;
        }
      }
      playFillCells.addAll(regions[leastKey]!);
      state = GameState.playFill;
    }
  }

  final hero = Hero()
    ..row = 0
    ..column = columns ~/ 2;

  void resetWorld() {
    terminal.clear(row: 0, column: 0, height: rows);
    for (var r = 0; r < rows; r++) {
      for (var c = 0; c < columns; c++) {
        world[r][c] = r == 0 || r == rows - 1 || c == 0 || c == columns - 1
            ? Cell.solid
            : Cell.empty;
        terminal
          ..setCharacter(
            row: r,
            column: c,
            character: world[r][c].character,
          )
          ..setColor(
            row: r,
            column: c,
            color: world[r][c].color,
          );
      }
    }
  }

  var level = 0, score = 0;
  final levelFillCells = <(int, int)>{};
  void gameLoop(Timer _) {
    switch (state) {
      case GameState.titleScreenSetup:
        terminal.clear();
        final lines = [
          for (final line in '''
.----.                   
|  o |---.-.-.---.---.---.
|  o | o | | | | |  _| o_:
'----'---'---'-'-'---'---'
'''
              .split('\n'))
            if (line.trim().isNotEmpty) line.padRight(28)
        ];
        for (final (i, line) in lines.indexed) {
          terminal.output(
            line,
            row: i + 5,
            column: 7,
            color: mediumGreen,
          );
        }
        terminal.output(
          'Press Enter to Start!',
          row: 10,
          column: 10,
          color: lightGreen,
        );
        state = GameState.titleScreenWait;

      case GameState.titleScreenWait:
        if (keyMap[web.KeyCode.ENTER]!) {
          level = 1;
          score = 0;
          updateInfo();

          state = GameState.setupLevel;
        }
      case GameState.setupLevel:
        hero
          ..row = 0
          ..column = columns ~/ 2;
        resetWorld();
        for (final set in [fillSeeds, trailSeeds]) {
          set.clear();
        }
        for (final bouncer in bouncers) {
          bouncer
            ..isActive = false
            ..delayCount = 0;
        }
        bouncerCount = 0;
        for (final _ in Iterable.generate(level)) {
          createBouncer(
            rand.nextInt(rows - 2) + 1,
            rand.nextInt(columns - 2) + 1,
          );
        }
        state = GameState.play;

      case GameState.play:
        final up = keyMap[web.KeyCode.UP]!,
            down = keyMap[web.KeyCode.DOWN]!,
            left = keyMap[web.KeyCode.LEFT]!,
            right = keyMap[web.KeyCode.RIGHT]!;
        final int dRow, dColumn;
        if (up) {
          dRow = hero.row == 0 ? 0 : -1;
          dColumn = 0;
        } else if (down) {
          dRow = hero.row == rows - 1 ? 0 : 1;
          dColumn = 0;
        } else if (left) {
          dRow = 0;
          dColumn = hero.column == 0 ? 0 : -1;
        } else if (right) {
          dRow = 0;
          dColumn = hero.column == columns - 1 ? 0 : 1;
        } else {
          dRow = 0;
          dColumn = 0;
        }
        if (world[hero.row][hero.column] == Cell.solid ||
            world[hero.row][hero.column] == Cell.trail) {
          fillTrail();
          fillLeastRegion();
        } else {
          if (dRow != 0 || dColumn != 0) {
            world[hero.row][hero.column] = Cell.trail;
          }
          if (trailSeeds.isEmpty) {
            trailSeeds.add((hero.row, hero.column));
          }
          for (final (dr, dc) in connections) {
            final (nr, nc) = (hero.row + dr, hero.column + dc);
            if (nr >= 0 &&
                nr < rows &&
                nc >= 0 &&
                nc < columns &&
                world[nr][nc] == Cell.empty) {
              fillSeeds.add((nr, nc));
            }
          }
          terminal.setCharacter(
            row: hero.row,
            column: hero.column,
            character: sc.mediumBlock,
          );
        }
        terminal
          ..setCharacter(
            row: hero.row,
            column: hero.column,
            character: world[hero.row][hero.column].character,
          )
          ..setColor(
            row: hero.row,
            column: hero.column,
            color: world[hero.row][hero.column].color,
          );
        hero
          ..row += dRow
          ..column += dColumn;
        terminal
          ..setCharacter(
            row: hero.row,
            column: hero.column,
            character: sc.squareFilled,
          )
          ..setColor(
            row: hero.row,
            column: hero.column,
            color: lightGreen,
          );
        moveBouncers();

      case GameState.playFill:
        if (playFillCells.isEmpty) {
          state = GameState.checkBouncers;
        } else {
          final next = playFillCells.take(10).toList();
          for (final (r, c) in next) {
            playFillCells.remove((r, c));
            world[r][c] = Cell.solid;
            terminal
              ..setCharacter(
                row: r,
                column: c,
                character: Cell.solid.character,
              )
              ..setColor(
                row: r,
                column: c,
                color: Cell.solid.color,
              );
          }
        }

      case GameState.checkBouncers:
        moveBouncers();
        if (bouncerCount == 0) {
          levelFillCells.addAll([
            for (var r = 0; r < rows; r++)
              for (var c = 0; c < columns; c++)
                if (world[r][c] == Cell.empty) (r, c)
          ]);
          state = GameState.levelFill;
        } else {
          state = GameState.play;
        }

      case GameState.levelFill:
        if (levelFillCells.isNotEmpty) {
          final next = levelFillCells.take(30).toList();
          for (final (r, c) in next) {
            levelFillCells.remove((r, c));
            terminal
              ..setCharacter(
                row: r,
                column: c,
                character: sc.mediumBlock,
              )
              ..setColor(
                row: r,
                column: c,
                color: mediumGreen,
              );
            score++;
            updateInfo();
          }
        } else {
          level++;
          updateInfo();
          state = GameState.levelFillWait;
        }

      case GameState.levelFillWait:
        if (keyMap[web.KeyCode.ENTER]!) {
          state = GameState.setupLevel;
        }

      case GameState.gameOver:
        if (gameOverCells.isNotEmpty) {
          final (r, c) = gameOverCells.first;
          gameOverCells.remove((r, c));
          terminal
            ..setCharacter(
              row: r,
              column: c,
              character: sc.lightBlock,
            )
            ..setColor(
              row: r,
              column: c,
              color: red,
            );
        } else {
          terminal.output(
            'Game Over!',
            row: rows ~/ 2,
            column: 15,
            color: lightGreen,
          );
          state = GameState.gameOverWait;
        }

      case GameState.gameOverWait:
        if (keyMap[web.KeyCode.ENTER]!) {
          state = GameState.titleScreenSetup;
        }
    }
  }
}

void main() => Game();
