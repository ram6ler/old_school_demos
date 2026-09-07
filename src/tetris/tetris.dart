import 'dart:async' show Timer;

import 'package:old_school/old_school.dart' as os;
import 'package:old_school/special_characters.dart' as sc;
import 'package:web/web.dart' as web;

import 'lib/tetris_lib.dart';

enum GameState { titleScreen, game, gameOver }

const rowOffset = 2,
    columnOffset = 3,
    gridColor = '#333',
    additionalDisplayRowOffset = 13,
    infoColumnOffset = 17,
    infoColor = 'white';

final terminal = os.Terminal(
  rows: 28,
  columns: 35,
  container: web.document.querySelector('#tetris') as web.HTMLDivElement,
  rowGap: 0,
  pixelHeight: 3,
  pixelWidth: 3,
)..focus();

GameState gameState = .titleScreen;

var bannerColumn = 0, bannerMessage = '';

void setBanner(String message) {
  if (bannerMessage.isNotEmpty) {
    bannerMessage = '$message${' ' * bannerColumn}$bannerMessage';
    bannerColumn = -message.length;
  } else {
    bannerColumn = -message.length - 1;
    bannerMessage = message;
  }
}

void main() {
  Timer.periodic(Duration(milliseconds: 100), (_) {
    if (bannerMessage.isNotEmpty) {
      for (var i = -1; i < bannerMessage.length; i++) {
        final c = bannerColumn + i, ch = i == -1 ? ' ' : bannerMessage[i];
        if (c >= 0 && c < terminal.columns) {
          terminal.output(ch, row: 2, column: c, color: infoColor);
        }
      }
      bannerColumn++;
      if (bannerColumn > terminal.columns) {
        bannerMessage = '';
      }
    }
  });
  final tetris = Tetris(
    onGameEnd: onGameEnd,
    onNextTetronimoRelease: onNextTetronimoRelease,
    onScoreChange: onScoreChange,
    onLevelChange: onLevelChange,
    onLinesCompleteChange: onLinesCompleteChange,
    onScreenRefresh: onScreenRefresh,
    onLinesCleared: onLinesCleared,
    onBoardCleared: onBoardCleared,
    clearActiveTetronimo: clearActiveTetronimo,
    clearDisplayTetronimo: clearDisplayTetronimo,
    drawActiveTetronimo: drawActiveTetronimo,
    drawDisplayTetronimo: drawDisplayTetronimo,
  );

  web.window.onKeyDown.listen((web.KeyboardEvent e) {
    if (!terminal.hasFocus) {
      return;
    }
    switch (gameState) {
      case .titleScreen:
        switch (e.keyCode) {
          case web.KeyCode.ENTER:
            terminal.clear();
            prepareGameScreen();
            tetris.startNewGame();
            gameState = .game;
        }
      case .game:
        switch (e.keyCode) {
          case web.KeyCode.LEFT:
            if (tetris.shiftLeft()) {}
          case web.KeyCode.RIGHT:
            if (tetris.shiftRight()) {}
          case web.KeyCode.DOWN:
            if (tetris.softDrop()) {}
          case web.KeyCode.C:
            if (tetris.hardDrop()) {}
          case web.KeyCode.Z:
            if (tetris.rotateCounterClockwise()) {}
          case web.KeyCode.X:
            if (tetris.rotateClockwise()) {}
        }
      case .gameOver:
        switch (e.keyCode) {
          case web.KeyCode.ENTER:
            prepareTitleScreen();
            gameState = .titleScreen;
        }
    }
  });
  prepareTitleScreen();
}

void prepareTitleScreen() {
  terminal.clear();

  final banner =
      r'''  _____    _       _    _ 
 |_   _|__| |_ _ _(_)__| |
   | |/ -_)  _| '_| (_-<_|
   |_|\___|\__|_| |_/__(_)
   
'''
          .split('\n');
  for (final (i, line) in banner.indexed) {
    terminal.output(line, row: i + 4, column: 3);
  }
  terminal
    ..output('Controls:', column: 4)
    ..newLine()
    ..output('${sc.leftArrow} Shift left', column: 6)
    ..output('${sc.rightArrow} Shift right', column: 6)
    ..output('${sc.downArrow} Soft drop', column: 6)
    ..output('Z Rotate counter clockwise', column: 6)
    ..output('X Rotate clockwise', column: 6)
    ..output('C Hard drop', column: 6)
    ..newLine()
    ..output('Press enter to begin!', column: 6);
}

void prepareGameScreen() {
  terminal.clear();
  terminal.output(
    '${sc.downRight}${sc.downHorizontal * 10}${sc.downLeft}',
    row: rowOffset + 2,
    column: columnOffset,
    color: gridColor,
    newLineAfter: false,
  );
  for (var r = 0; r < 20; r++) {
    terminal
      ..setColor(row: r + rowOffset + 3, column: columnOffset, color: gridColor)
      ..setCharacter(
        row: r + rowOffset + 3,
        column: columnOffset,
        character: sc.verticalRight,
      )
      ..setColor(
        row: r + rowOffset + 3,
        column: columnOffset + 11,
        color: gridColor,
      )
      ..setCharacter(
        row: r + rowOffset + 3,
        column: columnOffset + 11,
        character: sc.verticalLeft,
      );
  }
  terminal
    ..output('TETRIS!', row: 1, column: 15, color: infoColor)
    ..output(
      '${sc.upRight}${sc.upHorizontal * 10}${sc.upLeft}',
      row: 20 + rowOffset + 3,
      column: columnOffset,
      color: gridColor,
      newLineAfter: false,
    )
    ..output('Next:', row: 15, column: infoColumnOffset, color: infoColor);
}

void onGameEnd() {
  gameState = .gameOver;
  terminal
    ..output('Game Over!', row: 21, column: infoColumnOffset, color: infoColor)
    ..output(
      'Press enter!',
      row: 23,
      column: infoColumnOffset,
      color: infoColor,
    );
}

void onNextTetronimoRelease() {
  // setBanner('Next...');
}

void onScoreChange(int score) {
  var s = score;
  final millions = s ~/ 1000000;
  s %= 1000000;
  final thousands = s ~/ 1000;
  s %= 1000;
  final output = [
    if (millions > 0) '$millions',
    if (thousands > 0) '$thousands',
    '$s',
  ].join(',');

  terminal
    ..output('Score:', row: 11, column: infoColumnOffset, color: infoColor)
    ..output(output, row: 13, column: infoColumnOffset, color: infoColor);
}

void onLevelChange(int level) {
  terminal.output(
    'Level $level',
    row: 7,
    column: infoColumnOffset,
    color: infoColor,
  );
  if (level != 1) {
    setBanner(' -: Level up! :- ');
  }
}

void onLinesCompleteChange(int lines) {
  terminal.output(
    '[${sc.fullBlock * lines}${sc.mediumBlock * (10 - lines)}]',
    row: 9,
    column: infoColumnOffset,
    color: infoColor,
  );
}

void onScreenRefresh(Board board) {
  for (var r = 3; r < board.length - 1; r++) {
    for (var c = 1; c < board[r].length - 1; c++) {
      terminal
        ..setColor(
          row: r + rowOffset,
          column: c + columnOffset,
          color: board[r][c].blocks ? board[r][c].color : gridColor,
        )
        ..setCharacter(
          row: r + rowOffset,
          column: c + columnOffset,
          character: board[r][c].blocks
              ? sc.mediumBlock
              : sc.verticalHorizontal,
        );
    }
  }
}

void onLinesCleared(int lines) {
  if (lines == 4) {
    setBanner(' -: Tetris! :- ');
  } else {
    setBanner(' -: x$lines :-');
  }
}

void onBoardCleared() {
  setBanner(' -: Board cleared! :- ');
}

void clear(Positions positions, String character, [int dR = 0]) {
  for (final (r, c) in positions) {
    if (r >= 3) {
      terminal
        ..setColor(
          row: r + rowOffset + dR,
          column: c + columnOffset,
          color: gridColor,
        )
        ..setCharacter(
          row: r + rowOffset + dR,
          column: c + columnOffset,
          character: character,
        );
    }
  }
}

void clearActiveTetronimo(Positions positions) =>
    clear(positions, sc.verticalHorizontal);

void clearDisplayTetronimo(Positions positions) =>
    clear(positions, ' ', additionalDisplayRowOffset);

void draw(Positions positions, String color, [int dR = 0]) {
  for (final (r, c) in positions) {
    if (r >= 3) {
      terminal
        ..setColor(
          row: r + rowOffset + dR,
          column: c + columnOffset,
          color: color,
        )
        ..setCharacter(
          row: r + rowOffset + dR,
          column: c + columnOffset,
          character: sc.fullBlock,
        );
    }
  }
}

void drawActiveTetronimo(Positions positions, String color) =>
    draw(positions, color);

void drawDisplayTetronimo(Positions positions, String color) =>
    draw(positions, color, additionalDisplayRowOffset);
