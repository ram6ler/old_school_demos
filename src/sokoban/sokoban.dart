import 'dart:math' show Random;
import 'package:web/web.dart' as web;
import 'package:old_school/old_school.dart';
// import 'package:old_school/characters/block.dart' show full;
// import 'package:old_school/characters/extended.dart' show smileyFaceFilled;
import 'levels.dart';
import 'sprites.dart' as sprites;

enum Thing {
  wall,
  space,
  goal,
  blockOnSpace,
  blockOnGoal;
}

enum Direction {
  up,
  down,
  left,
  right;
}

final rand = Random();

class Sokoban {
  Sokoban(this.terminal);
  final Terminal terminal;
  final Map<(int, int), Thing> data = {};
  (int row, int column) position = (-1, -1);
  final Set<(int, int)> _toUpdate = {};
  int _width = 0, _height = 0, _moves = 0;
  bool _henFacesRight = true;
  int get width => _width;
  int get height => _height;

  void reset(List<String> design) {
    data.clear();
    _width = -1;
    _height = -1;
    _moves = 0;
    for (var r = 0; r < design.length; r++) {
      var started = false;
      if (r > _height) _height = r;
      for (var c = 0; c < design[r].length; c++) {
        if (c > _width) _width = c;
        switch (design[r][c]) {
          case '-':
            if (started) data[(r, c)] = Thing.space;
          case '#':
            started = true;
            data[(r, c)] = Thing.wall;
          case r'$':
            data[(r, c)] = Thing.blockOnSpace;
          case '.':
            data[(r, c)] = Thing.goal;
          case '*':
            data[(r, c)] = Thing.blockOnGoal;
          case '@':
            position = (r, c);
            data[(r, c)] = Thing.space;
          case _:
        }
      }
    }
    _toUpdate.addAll(data.keys);
  }

  void tryMove(Direction direction) {
    final (row, column) = position;
    final (dr, dc) = switch (direction) {
      Direction.left => (0, -1),
      Direction.right => (0, 1),
      Direction.up => (-1, 0),
      Direction.down => (1, 0),
    };

    void makeMove() {
      if (direction == Direction.right) {
        _henFacesRight = true;
      }
      if (direction == Direction.left) {
        _henFacesRight = false;
      }
      _moves++;
    }

    final next = (row + dr, column + dc);
    switch (data[next]) {
      case Thing.space || Thing.goal:
        position = (row + dr, column + dc);
        _toUpdate.addAll([(row, column), position]);
        makeMove();

      case Thing.blockOnGoal || Thing.blockOnSpace:
        final nextNext = (row + 2 * dr, column + 2 * dc);
        switch (data[nextNext]) {
          case Thing.space || Thing.goal:
            position = (row + dr, column + dc);
            data[next] =
                data[next] == Thing.blockOnGoal ? Thing.goal : Thing.space;
            data[nextNext] = data[nextNext] == Thing.goal
                ? Thing.blockOnGoal
                : Thing.blockOnSpace;
            _toUpdate.addAll([(row, column), next, nextNext]);
            makeMove();
          case _:
        }
      case _:
    }
  }

  void refresh(int level) {
    // final rowOffset = (terminal.rows - height) ~/ 2,
    //     columnOffset = (terminal.columns - width) ~/ 2,
    final heading = 'Mother Hen',
        moves = 'Moves: $_moves',
        headingOffset = (terminal.columns - heading.length) ~/ 2;
    terminal
      ..output(
        heading,
        row: 1,
        column: headingOffset,
        newLineAfter: false,
      )
      ..output(
        'Level $level',
        row: -2,
        column: 1,
        newLineAfter: false,
      )
      ..output(
        moves,
        row: -2,
        column: -(moves.length + 1),
      );

    final pixelRowOffSet = (terminal.screen.heightInPixels - 16 * height) ~/ 2,
        pixelColumnOffSet = (terminal.screen.widthInPixels - 16 * width) ~/ 2;
    for (final (row, column) in _toUpdate) {
      final sprite = switch (data[(row, column)]!) {
        Thing.wall => sprites.wall,
        Thing.space => sprites.space,
        Thing.goal => sprites.goal,
        Thing.blockOnGoal => sprites.chick,
        Thing.blockOnSpace => sprites.egg,
      };
      terminal.screen.drawSprite(
        position: (
          pixelRowOffSet + row * 16,
          pixelColumnOffSet + column * 16,
        ),
        sprite: sprite,
        reflected: sprite == sprites.chick ? rand.nextBool() : false,
      );
    }
    terminal.screen.drawSprite(
      position: (
        pixelRowOffSet + position.$1 * 16,
        pixelColumnOffSet + position.$2 * 16,
      ),
      sprite: sprites.hen,
      reflected: _henFacesRight,
    );
    _toUpdate.clear();

    // for (final (row, column) in _toUpdate) {
    //   final (character, color) = switch (data[(row, column)]!) {
    //     Thing.wall => (full, 'gray'),
    //     Thing.space => (' ', 'white'),
    //     Thing.goal => ('#', 'goldenrod'),
    //     Thing.blockOnSpace => ('O', 'lightyellow'),
    //     Thing.blockOnGoal => ('O', 'white'),
    //   };
    //   terminal.output(
    //     character,
    //     row: rowOffset + row,
    //     column: columnOffset + column,
    //     color: color,
    //     newLineAfter: false,
    //   );
    // }
    // terminal.output(
    //   smileyFaceFilled,
    //   row: rowOffset + position.$1,
    //   column: columnOffset + position.$2,
    //   color: 'yellow',
    //   newLineAfter: false,
    // );
    // _toUpdate.clear();
  }

  bool isSolved() => !data.values.any((element) => element == Thing.goal);
}

void main() async {
  final terminal = Terminal(
          rows: 48,
          columns: 62,
          rowGap: 0,
          pixelHeight: 2,
          pixelWidth: 2,
          backgroundColor: '#666',
          container:
              web.document.getElementById('sokoban')! as web.HTMLElement),
      sokoban = Sokoban(terminal);
  terminal.focus();
  while (true) {
    for (var levelIndex = 0; levelIndex < levels.length; levelIndex++) {
      final level = levels[levelIndex];
      sokoban.reset(level);
      terminal.clear();
      bool cheat = false;
      while (!cheat && !sokoban.isSolved()) {
        sokoban.refresh(levelIndex + 1);
        final keyCode = (await terminal.inputKey()).keyCode;
        switch (keyCode) {
          case web.KeyCode.LEFT:
            sokoban.tryMove(Direction.left);
          case web.KeyCode.RIGHT:
            sokoban.tryMove(Direction.right);
          case web.KeyCode.UP:
            sokoban.tryMove(Direction.up);
          case web.KeyCode.DOWN:
            sokoban.tryMove(Direction.down);
          case web.KeyCode.ESC:
            sokoban.reset(level);
          case web.KeyCode.ENTER:
            if (levelIndex < levels.length - 1) {
              cheat = true;
            }
          case web.KeyCode.BACKSPACE:
            if (levelIndex > 0) {
              levelIndex -= 2;
              cheat = true;
            }
        }
      }
      sokoban.refresh(levelIndex + 1);
      if (!cheat) {
        final message = 'Congratulations!',
            columnOffset = (terminal.columns - message.length) ~/ 2;
        terminal.output(
          message,
          row: 1,
          column: columnOffset,
          newLineAfter: false,
        );
        await terminal.inputKey();
      }
    }
    final message = "That's all the levels!",
        rowOffset = terminal.rows ~/ 2 - 1,
        columnOffset = (terminal.columns - message.length) ~/ 2;
    terminal
      ..clear()
      ..output(
        message,
        row: rowOffset,
        column: columnOffset,
        newLineAfter: false,
      );
    await terminal.inputKey();
  }
}
