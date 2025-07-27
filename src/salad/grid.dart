import 'dart:math' show Random;
import 'words.dart' show Word, randomWord;

const debug = true,
    empty = '.',
    letters = 'abcdefghijklmnopqrstuvwxyz',
    gridWidth = 9,
    wordsPerWorm = 5,
    attempts = 100;

final rand = Random();

enum Direction {
  north,
  east,
  south,
  west,
  none;

  (int, int) get move => switch (this) {
        north => (-1, 0),
        east => (0, 1),
        south => (1, 0),
        west => (0, -1),
        none => (0, 0),
      };

  Direction get reverse => switch (this) {
        north => south,
        east => west,
        south => north,
        west => east,
        none => none,
      };

  String get name => switch (this) {
        north => 'N',
        east => 'E',
        south => 'S',
        west => 'W',
        none => '.',
      };
}

class Letter {
  /// The individual letter contained.
  var letter = empty;

  /// A partial word containing the letters so far.
  var partial = '';

  /// The direction to the next letter in the sequence.
  var next = Direction.none;

  /// A pointer to a word;
  Word? word;

  void clear() {
    letter = empty;
    partial = '';
    next = Direction.none;
    word = null;
  }

  void update(Word word, int index, Direction next) {
    letter = word.word[index];
    final part = word.word.substring(0, index + 1);
    partial = part + '-' * (word.word.length - part.length);
    this
      ..next = next
      ..word = word;
  }

  bool get isAvailable => letter == empty;

  @override
  String toString() => letter;
}

class Position {
  int row = 0, column = 0;
  void recenter() {
    row = column = gridWidth ~/ 2;
  }

  (int, int) get tuple => (row, column);

  void moveInDirection(Direction d) {
    final (dr, dc) = d.move;
    row = (row + dr) % gridWidth;
    column = (column + dc) % gridWidth;
  }

  @override
  String toString() => '($row $column)';
}

class Grid {
  final List<List<Letter>> data;
  final words = <Word>[];
  final currentPosition = Position();

  Grid()
      : data = [
          for (var r = 0; r < gridWidth; r++)
            [for (var c = 0; c < gridWidth; c++) Letter()],
        ];

  void clearData() {
    for (final row in data) {
      for (final letter in row) {
        letter.clear();
      }
    }
  }

  int get size => gridWidth;

  Letter get currentLetter => data[currentPosition.row][currentPosition.column];

  Direction get currentDirection => currentLetter.next;

  /// Whether the current word has been completed.
  bool get currentWordIsComplete =>
      currentLetter.word!.word == currentLetter.partial;

  /// Returns the letter at row, column.
  String peek(int row, int column) =>
      data[row % gridWidth][column % gridWidth].letter;

  /// Refreshes the grid with a new set of words. Returns whether successful
  /// (a full set of new words exists).
  void refresh() {
    words.clear();

    for (var i = 0; i < wordsPerWorm; i++) {
      final word = randomWord();
      words.add(word);
    }

    var lastDirection = Direction.none;

    bool tryFill() {
      lastDirection = Direction.none;
      clearData();
      currentPosition.recenter();
      for (final word in words) {
        for (var i = 0; i < word.word.length; i++) {
          final possibleDirections = <Direction>[];
          for (final d in Direction.values.where((d) => d != Direction.none)) {
            final (dr, dc) = d.move;
            final (nr, nc) = (
              (currentPosition.row + dr) % gridWidth,
              (currentPosition.column + dc) % gridWidth,
            );
            if (data[nr][nc].isAvailable) {
              possibleDirections.add(d);
            }
          }
          if (possibleDirections.isEmpty) {
            if (debug) {
              print('*** ABORTING!\n');
            }
            return false;
          }

          final chosenDirection =
              possibleDirections[rand.nextInt(possibleDirections.length)];

          if (debug) {
            print(
              'Placing ${word.word}[$i] = ${word.word[i]} at $currentPosition.',
            );
            print('Chosen Direction: ${chosenDirection.name}.');
          }
          currentLetter.update(word, i, chosenDirection);
          currentPosition.moveInDirection(chosenDirection);
          if (debug) {
            print('  Moved to $currentPosition.');
          }
          lastDirection = chosenDirection;
        }
      }
      if (debug) {
        print('*** SUCCESS!\n');
      }
      return true;
    }

    var i = 0;
    for (i = 0; i < attempts; i++) {
      if (tryFill()) break;
    }
    if (i == attempts) {
      throw Exception('Failed to position words in $attempts attempts.');
    }

    // Remove transition from last cell.
    currentPosition.moveInDirection(lastDirection.reverse);
    currentLetter.next = Direction.none;

    currentPosition.recenter();

    // Fill remaining cells with random letters.
    for (final row in data) {
      for (final cell in row) {
        if (cell.isAvailable) {
          cell
            ..letter = letters[rand.nextInt(letters.length)]
            ..next = Direction.none;
        }
      }
    }
  }

  /// Moves to next cell if possible; returns whether there are more words.
  bool moveToNextCell() {
    final d = currentLetter.next;
    if (d == Direction.none) {
      return false;
    }
    currentPosition.moveInDirection(d);
    return true;
  }

  List<(int, int)> get coordinates => [
        for (var r = 0; r < gridWidth; r++)
          for (var c = 0; c < gridWidth; c++) (r, c),
      ];

  void debugShow() => print([for (final row in data) row.join(' ')].join('\n'));
}

void main() {
  final grid = Grid()
    ..refresh()
    ..debugShow();
  print('');
  void showInfo(Letter letter) => print(
        '${grid.currentPosition} $letter '
        '${letter.partial} ${letter.next.name}',
      );
  showInfo(grid.currentLetter);
  while (grid.moveToNextCell()) {
    showInfo(grid.currentLetter);
  }
}
