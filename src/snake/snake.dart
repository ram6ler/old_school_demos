import 'dart:math' show Random, Point;
import 'dart:async' show Timer;
import 'package:web/web.dart' as web;
import 'package:old_school/old_school.dart' show Terminal;

enum Value { nothing, apple, up, down, left, right, brick }

enum GameState { titleScreen, wait, play, gameOver }

final random = Random();

class Snake {
  Snake(
    this.rows,
    this.columns,
    web.HTMLElement container,
  ) : values = [
          for (final _ in Iterable.generate(rows))
            [for (final _ in Iterable.generate(columns)) Value.nothing]
        ] {
    terminal = Terminal(
      rows: rows + 1,
      columns: columns,
      rowGap: 0,
      scrolls: false,
      container: container,
      whenKeyIsPressed: (_, data) {
        bool allow(int r, int c) => [Value.apple, Value.brick, Value.nothing]
            .contains(values[r % rows][c % columns]);
        switch (state) {
          case GameState.gameOver || GameState.titleScreen:
            break;
          case GameState.wait:
            terminal.clear();
            newGame();
          case GameState.play:
            switch (data.keyCode) {
              case web.KeyCode.UP:
                if (inputDirection != Value.down &&
                    inputDirection != Value.up &&
                    allow(headRow - 1, headColumn)) {
                  inputDirection = Value.up;
                  appleValue -= 1;
                }
              case web.KeyCode.DOWN:
                if (inputDirection != Value.up &&
                    inputDirection != Value.down &&
                    allow(headRow + 1, headColumn)) {
                  inputDirection = Value.down;
                  appleValue -= 1;
                }
              case web.KeyCode.LEFT:
                if (inputDirection != Value.right &&
                    inputDirection != Value.left &&
                    allow(headRow, headColumn - 1)) {
                  inputDirection = Value.left;
                  appleValue -= 1;
                }
              case web.KeyCode.RIGHT:
                if (inputDirection != Value.left &&
                    inputDirection != Value.right &&
                    allow(headRow, headColumn + 1)) {
                  inputDirection = Value.right;
                  appleValue -= 1;
                }
            }

            if (appleValue == 0) {
              delay = bonusOn ? 0 : 1;
              terminal.output(' ', row: appleRow, column: appleColumn);
              values[appleRow][appleColumn] = Value.nothing;
              if (!bonusOn) {
                addBarrier();
              }
              updateApple();
            } else {
              drawApple();
            }
            break;
        }
      },
      isInteractive: true,
    );
    Timer.periodic(Duration(milliseconds: 100), (timer) {
      if (terminal.hasFocus) {
        gameLoop();
      }
    });
    terminal.focus();
  }

  static const nothing = ' ',
      snake = '#',
      skin = '+',
      apple = 'o',
      bonus = 'P',
      barrier = 'x';

  final int rows, columns;
  final trail = <Point<int>>[];
  final List<List<Value>> values;
  late final Terminal terminal;
  int headRow = 0,
      headColumn = 0,
      tailRow = 0,
      tailColumn = 0,
      appleRow = 0,
      appleColumn = 0,
      appleValue = 0,
      score = 0;
  late Value direction, inputDirection;
  var state = GameState.titleScreen;
  var delay = 0, appleCount = 0, bonusOn = false;

  void gameLoop() {
    switch (state) {
      case GameState.titleScreen:
        title(['Snake!', '', 'Press any key to start!']);
        state = GameState.wait;
      case GameState.gameOver:
        terminal.output(snake, row: headRow, column: headColumn, color: 'red');
        title([' Game Over! ', '', ' Press any key to ', ' play again! ']);
        state = GameState.wait;
      case GameState.play:
        if (trail.isNotEmpty) {
          final p = trail.first;
          trail.remove(p);
          if (p.x == appleRow && p.y == appleColumn) {
            drawApple();
          } else {
            terminal.output(nothing, row: p.x, column: p.y);
          }
        }
        direction = inputDirection;
        values[headRow][headColumn] = direction;
        if (delay > 0) {
          delay--;
        } else {
          tailFollow(false);
        }
        headFollow();
        values[headRow][headColumn] = direction;
        terminal.output(
          snake,
          row: headRow,
          column: headColumn,
          color: 'lightgreen',
        );
      case GameState.wait:
        break;
    }
  }

  void tailFollow(bool leaveTrail) {
    final value = values[tailRow][tailColumn];
    values[tailRow][tailColumn] = Value.nothing;
    if (leaveTrail) {
      terminal.output(skin, row: tailRow, column: tailColumn, color: 'red');
      trail.add(Point(tailRow, tailColumn));
    } else {
      terminal.output(nothing, row: tailRow, column: tailColumn);
    }

    switch (value) {
      case Value.up:
        tailRow = (tailRow - 1) % rows;
      case Value.down:
        tailRow = (tailRow + 1) % rows;
      case Value.left:
        tailColumn = (tailColumn - 1) % columns;
      case Value.right:
        tailColumn = (tailColumn + 1) % columns;
      case _:
        break;
    }
  }

  void headFollow() {
    switch (direction) {
      case Value.up:
        headRow = (headRow - 1) % rows;
      case Value.down:
        headRow = (headRow + 1) % rows;
      case Value.left:
        headColumn = (headColumn - 1) % columns;
      case Value.right:
        headColumn = (headColumn + 1) % columns;
      case _:
        break;
    }

    switch (values[headRow][headColumn]) {
      case Value.apple:
        if (bonusOn) {
          score += 30;
          for (final _ in Iterable.generate(5)) {
            tailFollow(true);
          }
        } else {
          score += (appleValue < 10 ? appleValue : 20);
          delay += 1;
        }
        updateApple();
      case Value.brick:
        delay += 3;
      //terminal.setBackgroundAt(headRow, headColumn, 'black');
      case Value.nothing:
        break;
      case _:
        state = GameState.gameOver;
    }
  }

  void title(List<String> messages) async {
    var row = (rows - messages.length) ~/ 2;
    for (final message in messages) {
      terminal.output(
        message,
        row: row,
        column: (columns - message.length) ~/ 2,
        color: 'white', /*background: 'black'*/
      );
      row++;
    }
  }

  void newGame() {
    headRow = rows ~/ 2;
    headColumn = columns ~/ 2;
    tailRow = headRow;
    tailColumn = headColumn;
    score = 0;
    appleCount = 0;
    bonusOn = false;

    for (var r = 0; r < rows; r++) {
      for (var c = 0; c < columns; c++) {
        values[r][c] = Value.nothing;
      }
    }

    direction =
        [Value.up, Value.down, Value.left, Value.right][random.nextInt(4)];

    inputDirection = direction;

    values[headRow][headColumn] = direction;

    updateApple();
    state = GameState.play;
  }

  void addBarrier() {
    int row, column;
    do {
      row = random.nextInt(rows);
      column = random.nextInt(columns);
    } while (values[row][column] != Value.nothing &&
        (row - headRow).abs() + (column - headColumn).abs() < 10);

    for (final d in [
      [-1, 0],
      [1, 0],
      [0, 0],
      [0, -1],
      [0, 1]
    ]) {
      final r = (row + d.first) % rows, c = (column + d.last) % columns;
      if (values[r][c] == Value.nothing) {
        if (r == row || c == column) {
          // || random.nextBool()) {
          values[r][c] = Value.brick;
          terminal
            ..setCharacter(
              row: r,
              column: c,
              character: barrier,
            )
            ..setColor(
              row: r,
              column: c,
              color: 'red',
            );
        }
      }
    }
  }

  void drawApple() {
    if (bonusOn) {
      terminal.output(bonus, row: appleRow, column: appleColumn, color: 'gold');
    } else {
      terminal.output(appleValue < 10 ? '$appleValue' : apple,
          row: appleRow, column: appleColumn, color: 'gold');
    }
  }

  void updateApple() {
    final scoreMessage = 'Score: $score',
        columnMessage = (columns - scoreMessage.length) ~/ 2;
    terminal.output(
        (' ' * columnMessage) +
            scoreMessage +
            (' ' * (columns - scoreMessage.length - columnMessage)),
        row: rows,
        column: 0,
        color: 'white');
    do {
      appleRow = random.nextInt(rows);
      appleColumn = random.nextInt(columns);
    } while (values[appleRow][appleColumn] != Value.nothing);
    values[appleRow][appleColumn] = Value.apple;
    appleCount++;
    if (appleCount % 10 == 0) {
      bonusOn = true;
      appleValue = 3;
      drawApple();
    } else {
      bonusOn = false;
      appleValue = 11;
      drawApple();
    }
    if (appleCount % 13 == 0) {
      addBarrier();
    }
  }
}

void main() => Snake(
      30,
      30,
      web.document.getElementById('snake')! as web.HTMLElement,
    );
