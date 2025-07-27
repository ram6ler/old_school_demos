import 'package:poker_simulations/poker_simulations.dart';

const american = {
      HandType.royalFlush: 100,
      HandType.straightFlush: 75,
      HandType.fourOfAKind: 50,
      HandType.fullHouse: 25,
      HandType.flush: 20,
      HandType.straight: 15,
      HandType.threeOfAKind: 10,
      HandType.twoPair: 5,
      HandType.pair: 2,
      HandType.nothing: 0,
    },
    english = {
      HandType.royalFlush: 30,
      HandType.straightFlush: 30,
      HandType.fourOfAKind: 16,
      HandType.fullHouse: 10,
      HandType.flush: 20,
      HandType.straight: 5,
      HandType.threeOfAKind: 12,
      HandType.twoPair: 6,
      HandType.pair: 3,
      HandType.nothing: 1,
    };

class Grid {
  final cells = <Card>[
        for (final _ in Iterable.generate(25)) Card.fromIndex(0)
      ],
      rowScores = [for (final _ in Iterable.generate(5)) 0],
      columnScores = [for (final _ in Iterable.generate(5)) 0];

  var cardField = 0;

  Grid();

  factory Grid.from(Grid grid, Map<HandType, int> scoring) {
    final newGrid = Grid();
    for (var r = 0; r < 5; r++) {
      newGrid
        ..rowScores[r] = grid.rowScores[r]
        ..columnScores[r] = grid.columnScores[r];
      for (var c = 0; c < 5; c++) {
        if (grid.cardIsPlacedAt(r, c)) {
          newGrid.placeCardAt(
            r,
            c,
            grid.cardAt(r, c)!,
            scoring,
          );
        }
      }
    }
    return newGrid;
  }

  void reset() {
    for (var i = 0; i < 5; i++) {
      rowScores[i] = columnScores[i] = 0;
    }
    cardField = 0;
  }

  int _index(int r, int c) => r * 5 + c;
  int _bit(int r, int c) => 1 << _index(r, c);

  bool cardIsPlacedAt(int r, int c) => cardField & _bit(r, c) > 0;

  bool isFull() => cardField == 0x1FFFFFF;

  bool placeCardAt(int r, int c, Card card, Map<HandType, int> scoring) {
    final index = _index(r, c), bit = _bit(r, c);
    if (cardIsPlacedAt(r, c)) {
      return false;
    }
    cardField |= bit;
    cells[index] = card;
    var rowComplete = true, columnComplete = true;
    for (var i = 0; i < 5; i++) {
      if (!cardIsPlacedAt(i, c)) {
        columnComplete = false;
      }
      if (!cardIsPlacedAt(r, i)) {
        rowComplete = false;
      }
    }
    if (rowComplete) {
      rowScores[r] = scoreRow(r, scoring);
    }
    if (columnComplete) {
      columnScores[c] = scoreColumn(c, scoring);
    }
    return true;
  }

  Card? cardAt(int r, int c) {
    if (cardIsPlacedAt(r, c)) {
      return cells[_index(r, c)];
    }
    return null;
  }

  int scoreRow(int r, Map<HandType, int> scoring) {
    if ([for (var c = 0; c < 5; c++) cardIsPlacedAt(r, c)].any((r) => !r)) {
      return 0;
    }
    final cards = [for (var c = 0; c < 5; c++) cardAt(r, c)!],
        hand = Hand(cards);
    return scoring[hand.handType]!;
  }

  int scoreColumn(int c, Map<HandType, int> scoring) {
    if ([for (var r = 0; r < 5; r++) cardIsPlacedAt(r, c)].any((r) => !r)) {
      return 0;
    }
    final cards = [for (var r = 0; r < 5; r++) cardAt(r, c)!],
        hand = Hand(cards);
    return scoring[hand.handType]!;
  }

  int scoreBoard() => [...rowScores, ...columnScores].fold(0, (a, b) => a + b);
}
