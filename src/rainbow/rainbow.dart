import 'dart:math' show Random;

import 'package:old_school/old_school.dart' as os;
import 'package:old_school/special_characters.dart' as sc;

class Board {
  static final rand = Random(),
      colors = 'ABCDEF'.split(''),
      colorMap = {
        for (final (i, c) in colors.indexed)
          c: [
            '#ff3311',
            '#ff9933',
            '#d0c310',
            '#69d025',
            '#4444dd',
            '#12bdb9',
          ][i],
      },
      keys = "abcdefg".split(''),
      movePattern = RegExp(
        r'^\s*(?<source>[a-gA-G])\s*'
        r'(?<index>\d)\s*'
        r'(?<destination>[a-gA-G])\s*$',
      );

  Board() {
    reset();
  }

  final _columns = {for (final key in keys) key: <String>[]};

  String get randomKey => keys.sublist(1)[rand.nextInt(_columns.length - 1)];

  void reset() {
    for (final key in keys) {
      _columns[key]!.clear();
    }

    final pieces = [
      for (final _ in Iterable.generate(9))
        for (final c in colors) c,
    ]..sort((a, b) => 1.compareTo(rand.nextInt(2)));
    for (final piece in pieces) {
      while (true) {
        final key = randomKey;
        if (_columns[key]!.length < 9) {
          _columns[key]!.add(piece);
          break;
        }
      }
    }
  }

  String makeMove(String move) {
    final m = movePattern.firstMatch(move);
    if (m != null) {
      final source = m.namedGroup('source')!,
          sourceColumn = _columns[source]!,
          index = int.parse(m.namedGroup('index')!),
          destination = m.namedGroup('destination')!,
          destinationColumn = _columns[destination]!,
          pieces = sourceColumn.length - index;

      if (pieces > 0 &&
          sourceColumn.length >= pieces &&
          destinationColumn.length <= 10 - pieces &&
          //sourceColumn.sublist(index).toSet().length == 1 &&
          (destinationColumn.isEmpty ||
              sourceColumn[index] == destinationColumn.last)) {
        for (var i = 0; i < pieces; i++) {
          destinationColumn.add(sourceColumn.removeAt(index));
        }
        return '';
      } else {
        return 'Bad move...';
      }
    } else {
      return 'Not understood...';
    }
  }

  bool get isSolved {
    final lengths = [for (final key in keys) _columns[key]!.toSet().length];
    return lengths.every((w) => w <= 1) && lengths.any((w) => w == 0);
  }

  void draw(os.Terminal t, int rowOffset, int columnOffset) {
    t.output(
      '${sc.downRight} ${keys.join(' ')} ${sc.downLeft}',
      row: rowOffset + 1,
      column: columnOffset,
      color: 'white',
    );
    for (var i = 9; i >= 0; i--) {
      print(i);
      final r = rowOffset + 11 - i;
      t
        ..output(
          '$i',
          row: r,
          column: columnOffset,
          color: 'white',
          newLineAfter: false,
        )
        ..output(
          '$i',
          row: r,
          column: columnOffset + 16,
          color: 'white',
          newLineAfter: false,
        );
      for (final (j, key) in keys.indexed) {
        final c = columnOffset + (j + 1) * 2;
        if (i < _columns[key]!.length) {
          t.output(
            sc.fullBlock, //_columns[key]![i],
            row: r,
            column: c,
            color: colorMap[_columns[key]![i]]!,
            newLineAfter: false,
          );
        } else {
          t.output('.', row: r, column: c, newLineAfter: false);
        }
      }
    }
    t.output(
      '${sc.upRight} ${keys.join(' ')} ${sc.upLeft}',
      row: rowOffset + 12,
      column: columnOffset,
      color: 'white',
    );
  }
}

Future<void> main() async {
  final terminal = os.Terminal(rows: 20, columns: 20, containerId: 'rainbow')
        ..output('Rainbow!', column: 6, row: 1)
        ..focus(),
      board = Board();

  while (true) {
    board.draw(terminal, 2, 2);

    terminal
      ..output(' ' * 19, row: 16, column: 1)
      ..output(' ' * 19, row: 17, column: 1);

    final move = await terminal.input(
      prompt: 'Move: ',
      length: 6,
      row: 16,
      column: 1,
      color: 'white',
    );

    switch (move.toLowerCase().trim()) {
      case 'reset':
        board.reset();
      case _:
        final result = board.makeMove(move);
        if (result.isNotEmpty) {
          terminal.output(result, row: 17, column: 1, color: 'orangered');
          await terminal.inputKey();
        } else {
          if (board.isSolved) {
            board.draw(terminal, 2, 2);
            terminal.output(
              'Congratulations!',
              row: 17,
              column: 1,
              color: 'white',
            );
            await terminal.inputKey();
            board.reset();
          }
        }
    }
  }
}
