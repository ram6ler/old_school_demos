import 'dart:math' show Random;

import 'package:web/web.dart' as web;
import 'package:old_school/old_school.dart' as os;

import 'levels.dart';
import 'sprites.dart' as sprites;

typedef Position = (int, int);

extension Plus on Position {
  Position operator +(Position other) =>
      (this.$1 + other.$1, this.$2 + other.$2);
  Position operator -(Position other) =>
      (this.$1 - other.$1, this.$2 - other.$2);
  Position operator *(int f) => (f * this.$1, f * this.$2);
}

enum Entity {
  wall,
  space,
  goal,
  blockOnSpace,
  blockOnGoal;

  os.Sprite get sprite => switch (this) {
    wall => sprites.wall,
    space => sprites.space,
    goal => sprites.goal,
    blockOnSpace => sprites.egg,
    blockOnGoal => sprites.chick,
  };
}

enum Direction {
  none,
  left,
  right,
  up,
  down;

  Direction get opposite => switch (this) {
    none => none,
    left => right,
    right => left,
    up => down,
    down => up,
  };

  Position get change => switch (this) {
    none => (0, 0),
    left => (0, -1),
    right => (0, 1),
    up => (-1, 0),
    down => (1, 0),
  };

  Action get move => switch (this) {
    none => .none,
    left => .moveLeft,
    right => .moveRight,
    up => .moveUp,
    down => .moveDown,
  };

  Action get push => switch (this) {
    none => .none,
    left => .pushLeft,
    right => .pushRight,
    up => .pushUp,
    down => .pushDown,
  };
}

enum Action {
  none,
  moveLeft,
  pushLeft,
  moveRight,
  pushRight,
  moveUp,
  pushUp,
  moveDown,
  pushDown;

  String get character => switch (this) {
    none => '',
    moveLeft => 'l',
    pushLeft => 'L',
    moveRight => 'r',
    pushRight => 'R',
    moveUp => 'u',
    pushUp => 'U',
    moveDown => 'd',
    pushDown => 'D',
  };

  Direction get direction => switch (this) {
    none => .none,
    moveLeft || pushLeft => .left,
    moveRight || pushRight => .right,
    moveUp || pushUp => .up,
    moveDown || pushDown => .down,
  };

  bool get isPush => switch (this) {
    none || moveLeft || moveRight || moveUp || moveDown => false,
    pushLeft || pushRight || pushUp || pushDown => true,
  };
}

enum GameState { playGame, playRecording }

final rand = Random();

class Sokoban {
  static final hen = sprites.hen;
  static const historyLength = 5_000;

  Sokoban(this.terminal);

  /// Which levels are already solved.
  final solved = [for (final _ in levels) false];

  /// Level data.
  final data = <Position, Entity>{};

  /// Which keys in data to update.
  final toUpdate = <Position>{};

  final os.Terminal terminal;

  var henFacesRight = true;

  /// Hero position.
  var position = (-1, -1);

  var width = -1, height = -1;

  /// Number of moves hero has made.
  var moves = 0;

  /// Number of pushes hero has made.
  var pushes = 0;

  /// History of actions taken so far.
  final history = <Action>[];

  int get pixelRowOffSet => (terminal.screen.heightInPixels - 16 * height) ~/ 2;

  int get pixelColumnOffSet =>
      (terminal.screen.widthInPixels - 16 * width) ~/ 2;

  Position cellAtPixel(int pixelRow, int pixelColum) => (
    (pixelRow - pixelRowOffSet) ~/ 16,
    (pixelColum - pixelColumnOffSet) ~/ 16,
  );

  void reset(List<String> level) {
    width = 0;
    height = 0;
    moves = 0;
    pushes = 0;
    history.clear();
    data.clear();

    Entity updateHeroPosition(Position p) {
      position = p;
      return .space;
    }

    for (final (r, row) in level.indexed) {
      height++;
      for (final (c, cell) in row.split('').indexed) {
        if (c > width) width = c;
        if (cell != ' ') {
          data[(r, c)] = switch (cell) {
            '-' => .space,
            '#' => .wall,
            r'$' => .blockOnSpace,
            '.' => .goal,
            '*' => .blockOnGoal,
            '@' => updateHeroPosition((r, c)),
            _ => throw Error(),
          };
        }
      }
    }

    toUpdate
      ..clear()
      ..addAll(data.keys);
  }

  /// Tries to move hen in [direction].
  void tryMove(Direction direction) {
    final nextPosition = position + direction.change;

    void makeMove() {
      if (direction == .right) henFacesRight = true;
      if (direction == .left) henFacesRight = false;
      toUpdate.addAll([position, nextPosition]);
      position = nextPosition;
    }

    void addToHistory(Action action) {
      if (history.length > historyLength) {
        history.removeAt(0);
      }
      history.add(action);
    }

    switch (data[nextPosition]) {
      case .space || .goal:
        addToHistory(direction.move);
        moves++;
        makeMove();
      case .blockOnGoal || .blockOnSpace:
        final nextNextPosition = position + direction.change * 2;
        switch (data[nextNextPosition]) {
          case .space || .goal:
            data[nextPosition] = data[nextPosition] == .blockOnGoal
                ? .goal
                : .space;
            data[nextNextPosition] = data[nextNextPosition] == .goal
                ? .blockOnGoal
                : .blockOnSpace;
            toUpdate.add(nextNextPosition);
            pushes++;
            addToHistory(direction.push);
            makeMove();
          case _:
        }
      case _:
    }
  }

  /// Undoes a move.
  void undo() {
    if (history.isNotEmpty) {
      final action = history.removeLast();
      final previous = position + action.direction.opposite.change;
      if (action.direction == .left) henFacesRight = false;
      if (action.direction == .right) henFacesRight = true;
      if (action.isPush) {
        final block = position + action.direction.change;

        data[block] = data[block] == .blockOnSpace ? .space : .goal;
        data[position] = data[position] == .space
            ? .blockOnSpace
            : .blockOnGoal;
        pushes--;
        toUpdate.add(block);
      } else {
        moves--;
      }
      toUpdate.addAll([position, previous]);

      position = previous;
    }
  }

  /// Updates the affected cells in the terminal.
  void update(int levelNumber) {
    final levelDisplay = ' Level: $levelNumber ',
        movesDisplay = ' Moves: $moves ',
        pushesDisplay = ' Pushes: $pushes ';

    terminal
      ..output('Mother Hen', row: 1, column: 1, newLineAfter: false)
      ..output(levelDisplay, row: -2, column: 1, newLineAfter: false)
      ..output(
        movesDisplay,
        row: -2,
        column: (terminal.columns - movesDisplay.length) ~/ 2,
        newLineAfter: false,
      )
      ..output(
        pushesDisplay,
        row: -2,
        column: terminal.columns - pushesDisplay.length - 1,
        newLineAfter: false,
      );
    if (solved[levelNumber - 1]) {
      terminal.output(
        'Solved!',
        row: 1,
        column: (terminal.columns - 8),
        newLineAfter: false,
      );
    }

    for (final position in toUpdate) {
      final (r, c) = position;
      final entity = data[position]!;
      terminal.screen.drawSprite(
        position: (pixelRowOffSet + r * 16, pixelColumnOffSet + c * 16),
        sprite: entity.sprite,
        reflected: entity == .blockOnGoal ? rand.nextBool() : false,
      );
    }

    toUpdate.clear();

    final (r, c) = position;
    terminal.screen.drawSprite(
      position: (pixelRowOffSet + r * 16, pixelColumnOffSet + c * 16),
      sprite: hen,
      reflected: henFacesRight,
    );
  }

  bool isSolved(int levelIndex) {
    final result = !data.values.any((entity) => entity == .goal);
    if (!solved[levelIndex]) solved[levelIndex] = result;
    return result;
  }
}

void main() async {
  final terminal = os.Terminal(
        rows: 48,
        columns: 62,
        rowGap: 0,
        pixelWidth: 2,
        pixelHeight: 2,
        backgroundColor: '#666',
        containerId: 'sokoban',
      )..focus(),
      sokoban = Sokoban(terminal);

  var levelIndex = 0;
  terminal.whenMouseIsClicked = (terminal, mouseData) {
    final destination = sokoban.cellAtPixel(
      mouseData.pixelRow,
      mouseData.pixelColumn,
    );
    if (destination == (sokoban.position) ||
        (sokoban.data.containsKey(destination) &&
            !(sokoban.data[destination] == .space ||
                sokoban.data[destination] == .goal))) {
      return;
    }
    final stack = [(destination, 0)],
        distances = <Position, int>{destination: 0};
    while (stack.isNotEmpty) {
      final (p, steps) = stack.removeLast();
      for (final d in Direction.values) {
        final nextP = p + d.change;
        if (sokoban.data.containsKey(nextP) &&
            (sokoban.data[nextP]! == .space || sokoban.data[nextP]! == .goal)) {
          if (!distances.containsKey(nextP)) {
            distances[nextP] = 10_000;
          }
          if (distances[nextP]! > steps + 1) {
            distances[nextP] = steps + 1;
            stack.add((nextP, steps + 1));
          }
        }
      }
    }
    if (distances.containsKey(sokoban.position)) {
      var p = sokoban.position;
      while (p != destination) {
        var minDirection = Direction.none, minMoves = 10_000;
        for (final d in Direction.values) {
          final nextP = p + d.change;
          if (distances.containsKey(nextP) && distances[nextP]! < minMoves) {
            minDirection = d;
            minMoves = distances[nextP]!;
          }
        }
        sokoban.tryMove(minDirection);
        p += minDirection.change;
        print('Moving to $p...');
      }
      sokoban.update(levelIndex + 1);
    }
  };

  {
    final startScreen = r'''





         __  __     _   _              _  _          
        |  \/  |___| |_| |_  ___ _ _  | || |___ _ _  
        | |\/| / _ \  _| ' \/ -_) '_| | __ / -_) ' \ 
        |_|  |_\___/\__|_||_\___|_|   |_||_\___|_||_|
             ___      _       _
            / __| ___| |_ __ | |__  __ _ _ _         
            \__ \/ _ \ / / _ \ '_ \/ _` | ' \        
            |___/\___/_\_\___/_.__/\__,_|_||_|       

  
            Goal: Push the eggs over the nests.


                         ->



            Controls:


              Arrow Keys: Control Mother Hen
      
              U:          Undo the last move
              
              ESC:        Restart the level
              
              ENTER:      Move to next level
              
              BACKSPACE:  Move to previous level
  

            (You can also click a cell to move there

            if no pushes are involved.)
  

            Press any key to start!
''';
    for (final line in startScreen.split('\n')) {
      terminal.output(line);
    }
    const row = 17 * 8 + 4;
    terminal.screen
      ..drawSprite(position: (row, 16 * 8), sprite: sprites.space)
      ..drawSprite(
        position: (row, 18 * 8),
        sprite: sprites.hen,
        reflected: true,
      )
      ..drawSprite(position: (row, 20 * 8), sprite: sprites.egg)
      ..drawSprite(position: (row, 22 * 8), sprite: sprites.goal)
      ..drawSprite(position: (row, 28 * 8), sprite: sprites.space)
      ..drawSprite(position: (row, 30 * 8), sprite: sprites.space)
      ..drawSprite(
        position: (row, 32 * 8),
        sprite: sprites.hen,
        reflected: true,
      )
      ..drawSprite(position: (row, 34 * 8), sprite: sprites.chick);
  }

  await terminal.inputKey();

  while (true) {
    for (levelIndex = 0; levelIndex < levels.length; levelIndex++) {
      final level = levels[levelIndex];
      sokoban.reset(level);
      terminal.clear();
      var completed = true;

      out:
      while (!sokoban.isSolved(levelIndex)) {
        sokoban.update(levelIndex + 1);
        switch ((await terminal.inputKey()).keyCode) {
          case web.KeyCode.LEFT:
            sokoban.tryMove(.left);
          case web.KeyCode.RIGHT:
            sokoban.tryMove(.right);
          case web.KeyCode.UP:
            sokoban.tryMove(.up);
          case web.KeyCode.DOWN:
            sokoban.tryMove(.down);
          case web.KeyCode.ESC:
            sokoban.reset(level);
          case web.KeyCode.U:
            sokoban.undo();
          case web.KeyCode.BACKSPACE:
            if (levelIndex > 0) {
              completed = false;
              levelIndex -= 2;
              break out;
            }
          case web.KeyCode.ENTER:
            if (levelIndex < levels.length - 1) {
              completed = false;
              break out;
            }
        }
      }

      if (completed) {
        web.window.navigator.clipboard.writeText(
          'Level $levelIndex\n'
          '${sokoban.history.map((action) => action.character).join('')}',
        );
        final message = ' Record pasted to the clipboard! ';
        terminal.output(
          message,
          row: 3,
          column: (terminal.columns - message.length) ~/ 2,
        );
        if (levelIndex < levels.length - 1) {
          sokoban.update(levelIndex + 1);
          terminal.output(
            'Congratulations!',
            row: 2,
            column: (terminal.columns - 16) ~/ 2,
            newLineAfter: false,
          );
          await terminal.inputKey();
        }
      }
    }

    terminal
      ..clear()
      ..output(
        "That's all the levels!",
        row: terminal.rows ~/ 2 - 1,
        column: (terminal.columns - 22) ~/ 2,
        newLineAfter: false,
      );
    await terminal.inputKey();
  }
}
