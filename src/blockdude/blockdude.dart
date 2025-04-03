import "package:web/web.dart" as web;
import 'package:old_school/old_school.dart';
import 'package:old_school/special_characters.dart' as Character;
import 'patterns.dart' show patterns, PatternKey;
import 'levels.dart' show levels, passwords;

final terminal = Terminal(
  rows: 16,
  columns: 14,
  container: web.document.getElementById("blockdude")! as web.HTMLElement,
  defaultColor: "#121",
  backgroundColor: "rgb(158,172,135)",
  pixelWidth: 3,
  pixelHeight: 3,
  isInteractive: true,
  rowGap: 0,
);

bool drawLevel(final int levelIndex) {
  const row = 2, column = 1;
  final levelData = levels[levelIndex].draw(),
      width = levelData.data.first.length,
      height = levelData.data.length;

  terminal
    ..clear(row: row, column: column, width: width, height: height)
    ..output(
      "Level ${levelIndex + 1}",
      row: row + 1,
      column: column + width + 3,
    )
    ..output(
      "Password: ${passwords[levelIndex]}",
      row: row + 2,
      column: column + width + 3,
    )
    ..output(
      "Moves: ${levelData.moves}",
      row: row + 3,
      column: column + width + 3,
    );

  {
    int getIndex(bool p, bool q) => (p ? 1 : 0) + 2 * (q ? 1 : 0);
    final topLeft = [
          Character.downRight,
          Character.downHorizontal,
          Character.verticalRight,
          Character.verticalHorizontal
        ][getIndex(levelData.openLeft, levelData.openTop)],
        topRight = [
          Character.downLeft,
          Character.downHorizontal,
          Character.verticalLeft,
          Character.verticalHorizontal
        ][getIndex(levelData.openRight, levelData.openTop)],
        bottomLeft = [
          Character.upRight,
          Character.upHorizontal,
          Character.verticalRight,
          Character.verticalHorizontal
        ][getIndex(levelData.openLeft, levelData.openBottom)],
        bottomRight = [
          Character.upLeft,
          Character.upHorizontal,
          Character.verticalLeft,
          Character.verticalHorizontal
        ][getIndex(levelData.openRight, levelData.openBottom)],
        top = levelData.openTop
            ? Character.doubleHorizontal
            : Character.horizontal,
        bottom = levelData.openBottom
            ? Character.doubleHorizontal
            : Character.horizontal,
        left =
            levelData.openLeft ? Character.doubleVertical : Character.vertical,
        right =
            levelData.openRight ? Character.doubleVertical : Character.vertical;
    terminal
      ..clear()
      ..output("L${levelIndex + 1}", row: row - 1, column: column + 1)
      ..output(passwords[levelIndex], row: row - 1, column: column + width - 2)
      ..output("${levelData.moves}", row: row + width + 2, column: column + 1);
    if (levelData.openTop) {
      terminal.output("▲", row: row - 1, column: column + width ~/ 2 + 1);
    } else {
      terminal.output(" ", row: row - 1, column: column + width ~/ 2 + 1);
    }
    if (levelData.openBottom) {
      terminal.output("▼",
          row: row + width + 2, column: column + width ~/ 2 + 1);
    } else {
      terminal.output(" ",
          row: row + width + 2, column: column + width ~/ 2 + 1);
    }
    if (levelData.openLeft) {
      terminal.output("◄", row: row + width ~/ 2, column: column - 1);
    } else {
      terminal.output(" ", row: row + width ~/ 2, column: column - 1);
    }
    if (levelData.openRight) {
      terminal.output("►", row: row + width ~/ 2, column: column + width + 2);
    } else {
      terminal.output(" ", row: row + width ~/ 2, column: column + width + 2);
    }
    terminal.output(
      "$topLeft${top * width}$topRight",
      row: row,
      column: column,
    );
    for (var r = 1; r <= height; r++) {
      terminal.output(
        "$left${" " * width}$right",
        row: row + r,
        column: column,
      );
    }
    terminal.output(
      "$bottomLeft${bottom * width}$bottomRight",
      row: row + height + 1,
      column: column,
    );
  }

  final rOffset = 1, cOffset = 1;

  void putSprite(int r, int c, List<int> data) {
    terminal.pokeCharacter(
      row: row + r + rOffset,
      column: column + c + cOffset,
      data: data,
    );
  }

  for (var r = 0; r < height; r++) {
    final line = levelData.data[r];
    for (var c = 0; c < width; c++) {
      final character = line[c];
      switch (character) {
        case "B":
          putSprite(r, c, patterns[PatternKey.brick]!);
        case "O":
          putSprite(r, c, patterns[PatternKey.block]!);
        case "D":
          putSprite(r, c, patterns[PatternKey.door]!);
        case "<":
          putSprite(r, c, patterns[PatternKey.heroLeft]!);
        case ">":
          putSprite(r, c, patterns[PatternKey.heroRight]!);
        case _:
          putSprite(r, c, patterns[PatternKey.blank]!);
      }
    }
  }

  return levelData.hasWon;
}

void centerMessage(String message, int row) {
  final padding = (terminal.columns - message.length) ~/ 2;
  terminal.output(message, row: row, column: padding);
}

void line(int row) {
  terminal.output(Character.horizontal * terminal.columns,
      row: row, column: 0, newLineAfter: false);
}

void showTitle() {
  centerMessage("Welcome to", 3);
  centerMessage("Block Dude!", 5);
  line(2);
  line(6);
  centerMessage("Press", 8);
  centerMessage("any key!", 10);
}

Future<int> getPassword() async {
  terminal.clear();
  centerMessage("Input", 5);
  centerMessage("Password:", 6);
  final offset = (terminal.columns - 9) ~/ 2;
  final password = await terminal.input(length: 3, row: 8, column: offset),
      index = passwords.indexOf(password);

  if (index == -1) {
    centerMessage("Bad Password!", 10);
    centerMessage("Press any key", 11);
    centerMessage("to continue.", 12);
    await terminal.inputKey();
  }
  return index;
}

void showComplete(int levelIndex, int moves) {
  final banner = [
    "Level ${levelIndex + 1}",
    "Complete!",
    "",
    "Moves: $moves",
    "",
    "Press",
    "any key!",
  ];
  terminal.clear();
  var row = 3;
  for (final layer in banner) {
    centerMessage(layer, row);
    row++;
  }
}

main() async {
  var level = 0;
  showTitle();
  terminal.focus();
  await terminal.inputKey();

  drawLevel(level);

  while (true) {
    final keyCode = (await terminal.inputKey()).keyCode;
    if (keyCode == web.KeyCode.ESC) {
      final index = await getPassword();
      if (index == -1) {
        drawLevel(level);
      } else {
        level = index;
        levels[level].reset();
        terminal.clear();
        drawLevel(level);
      }
    } else {
      levels[level].input(keyCode);
      final hasWon = drawLevel(level);
      if (hasWon) {
        showComplete(level, levels[level].moves);
        await terminal.inputKey();

        level++;
        if (level == levels.length) {
          break;
        }

        levels[level].reset();
        drawLevel(level);
      }
    }
  }
}
