import 'dart:math' show Random;
import "package:web/web.dart" as web;
import 'package:old_school/old_school.dart';
import 'graphics.dart';

final rand = Random(),
    terminal = Terminal(
      rows: 24,
      columns: 20,
      container: web.document.getElementById("emotions")! as web.HTMLElement,
      isInteractive: true,
      rowGap: 0,
      pixelWidth: 3,
      pixelHeight: 3,
      defaultColor: "lightgray",
    )..output(
        "Mixed Emotions!",
        row: 2,
        column: 3,
      );

void main() async {
  terminal.focus();
  final board = Board();
  while (true) {
    board.shuffle();
    while (!board.isSolved()) {
      board.display();
      final d = await terminal.inputMouseClick(),
          row = (d.row - rowOffset) ~/ 4,
          column = (d.column - columnOffset) ~/ 4;
      if (row >= 0 && column >= 0) {
        board.slide(row, column);
      }
    }
    board.display();
    terminal.output(
      "Congratulations!",
      row: -3,
      column: 2,
    );

    await terminal.inputMouseClick();
    terminal.output(
      " " * 16,
      row: -3,
      column: 2,
    );
  }
}

List<int> randomPieces() {
  final s = <int>{};
  while (s.length < 15) {
    final p = rand.nextInt(faces.length);
    if (p != 0) s.add(p);
  }
  return [...s]..insert(rand.nextInt(15), 0);
}

void swap(List<int> pieces, int i, int j) {
  final temp = pieces[i];
  pieces[i] = pieces[j];
  pieces[j] = temp;
}

void drawFace(
  int index,
  int row,
  int column,
  bool onTile,
  bool isCorrect,
) {
  final r = rowOffset + 4 * row,
      c = columnOffset + 4 * column,
      tileColor = isCorrect ? correctTile : incorrectTile,
      faceColor =
          onTile ? (isCorrect ? correctFace : incorrectFace) : backgroundFace;

  if (onTile) {
    terminal
      ..pokeCharacter(
        row: r,
        column: c,
        data: edges[bottomRight],
        color: tileColor,
      )
      ..pokeCharacter(
        row: r,
        column: c + 1,
        data: edges[bottomLeft | bottomRight],
        color: tileColor,
      )
      ..pokeCharacter(
        row: r,
        column: c + 2,
        data: edges[bottomLeft | bottomRight],
        color: tileColor,
      )
      ..pokeCharacter(
        row: r,
        column: c + 3,
        data: edges[bottomLeft],
        color: tileColor,
      )
      ..pokeCharacter(
        row: r + 1,
        column: c,
        data: edges[topRight | bottomRight],
        color: tileColor,
      )
      ..pokeCharacter(
        row: r + 1,
        column: c + 1,
        data: edges[topRight | bottomRight | topLeft | bottomLeft],
        color: tileColor,
      )
      ..pokeCharacter(
        row: r + 1,
        column: c + 2,
        data: edges[topRight | bottomRight | topLeft | bottomLeft],
        color: tileColor,
      )
      ..pokeCharacter(
        row: r + 2,
        column: c,
        data: edges[topRight | bottomRight],
        color: tileColor,
      )
      ..pokeCharacter(
        row: r + 1,
        column: c + 3,
        data: edges[topLeft | bottomLeft],
        color: tileColor,
      )
      ..pokeCharacter(
        row: r + 2,
        column: c + 3,
        data: edges[topLeft | bottomLeft],
        color: tileColor,
      )
      ..pokeCharacter(
        row: r + 2,
        column: c + 1,
        data: edges[topRight | bottomRight | topLeft | bottomLeft],
        color: tileColor,
      )
      ..pokeCharacter(
        row: r + 2,
        column: c + 2,
        data: edges[topRight | bottomRight | topLeft | bottomLeft],
        color: tileColor,
      )
      ..pokeCharacter(
        row: r + 3,
        column: c,
        data: edges[topRight],
        color: tileColor,
      )
      ..pokeCharacter(
        row: r + 3,
        column: c + 1,
        data: edges[topLeft | topRight],
        color: tileColor,
      )
      ..pokeCharacter(
        row: r + 3,
        column: c + 2,
        data: edges[topLeft | topRight],
        color: tileColor,
      )
      ..pokeCharacter(
        row: r + 3,
        column: c + 3,
        data: edges[topLeft],
        color: tileColor,
      );
  } else {
    for (var i = 0; i < 4; i++) {
      for (var j = 0; j < 4; j++) {
        terminal.pokeCharacter(
          row: (r + i),
          column: (c + j),
          data: edges[0],
        );
      }
    }
  }

  terminal.screen.poke16Bit(
    position: ((r + 1) * 8, (c + 1) * 8),
    data: faces[index],
    mode: Mode.over,
    color: faceColor,
  );
}

class Board {
  Board()
      : positions = randomPieces(),
        pieces = [for (var _ = 0; _ < 16; _++) 0],
        zeroRow = 0,
        zeroColumn = 0 {
    for (var i = 0; i < 16; i++) {
      pieces[i] = positions[i];
      if (pieces[i] == 0) {
        zeroRow = i ~/ 4;
        zeroColumn = i % 4;
      }
    }
  }

  List<int> positions, pieces;
  int zeroRow, zeroColumn;

  void slide(int row, int column) {
    if (row == zeroRow || column == zeroColumn) {
      if (row < 0 || row > 3 || column < 0 || column > 3) return;
      if (row == zeroRow) {
        var c = zeroColumn, dc = c > column ? -1 : 1;
        while (c != column) {
          swap(pieces, row * 4 + c, row * 4 + c + dc);
          c += dc;
        }
      } else if (column == zeroColumn) {
        var r = zeroRow, dr = r > row ? -1 : 1;
        while (r != row) {
          swap(pieces, r * 4 + column, (r + dr) * 4 + column);
          r += dr;
        }
      }
      zeroRow = row;
      zeroColumn = column;
    }
  }

  void shuffle() {
    for (var _ = 0; _ < 250; _++) {
      var r = -1, c = -1;
      while (r != zeroRow && c != zeroColumn) {
        r = rand.nextInt(4);
        c = rand.nextInt(4);
      }
      slide(r, c);
    }
  }

  bool isSolved() {
    for (var i = 0; i < 16; i++) {
      if (pieces[i] != positions[i]) {
        return false;
      }
    }
    return true;
  }

  void display() {
    for (var i = 0; i < 16; i++) {
      final r = i ~/ 4, c = i % 4;
      if (r == zeroRow && c == zeroColumn) {
        drawFace(
          positions[i],
          r,
          c,
          false,
          pieces[i] == positions[i],
        );
      } else {
        drawFace(
          pieces[i],
          r,
          c,
          true,
          pieces[i] == positions[i],
        );
      }
    }
  }
}
