import 'package:web/web.dart' as web;
import 'package:poker_simulations/poker_simulations.dart';
import 'package:old_school/old_school.dart' as os;
import 'package:old_school/special_characters.dart' as sc;
import 'grid.dart';

final terminal = os.Terminal(
      rows: 25,
      columns: 46,
      container: web.document.getElementById('poker') as web.HTMLElement,
      rowGap: 0,
      backgroundColor: 'black',
      defaultColor: 'white',
    )..focus(),
    deck = Deck(),
    humanGrid = Grid(),
    humanRowOffset = 6,
    humanColumnOffset = 2,
    computerGrid = Grid(),
    computerRowOffset = 6,
    computerColumnOffset = 26;

Card nextCard = Card.fromIndex(0);
var scoringSystemSetting = american;
var simulationsSetting = 5_000;
Future<void> main() async {
  while (true) {
    await titleScreen();
    await game();
  }
}

Future<void> titleScreen() async {
  terminal
    ..clear()
    ..output('             ╔═╗┌─┐┬┌─┌─┐┬─┐')
    ..output('             ╠═╝│ │├┴┐├┤ ├┬┘')
    ..output('             ╩  └─┘┴ ┴└─┘┴└─')
    ..output('          ╔═╗┌─┐ ┬ ┬┌─┐┬─┐┌─┐┌─┐')
    ..output('          ╚═╗│─┼┐│ │├─┤├┬┘├┤ └─┐')
    ..output('          ╚═╝└─┘└└─┘┴ ┴┴└─└─┘└─┘')
    ..newLine()
    ..output('     Select a scoring system:')
    ..newLine()
    ..output('      Hand          American  English')
    ..newLine()
    ..output('      Royal Flush     100       30')
    ..output('      Straight Flush  75        30')
    ..output('      Four of a Kind  50        16')
    ..output('      Flush           20        20')
    ..output('      Straight        15         5')
    ..output('      Three of a Kind 10        12')
    ..output('      Two Pairs        5         6')
    ..output('      Pair             2         3')
    ..output('      Nothing          0         1')
    ..newLine();

  {
    final response = await terminal.input(
      prompt: '   Choose (a) American or (e) English: ',
      length: 1,
    );
    scoringSystemSetting = response.toLowerCase() == 'a' ? american : english;
  }

  terminal
    ..newLine()
    ..output('          Press any key to start!');
  await terminal.inputKey();
}

void updateScreen() {
  const c = 20;
  terminal
    ..clear()
    ..output(
      '${sc.downRight}${sc.horizontal * 2}${sc.downLeft}',
      row: 1,
      column: c,
    )
    ..output(
      '${sc.vertical}$nextCard${sc.vertical}',
      row: 2,
      column: c,
    )
    ..output(
      '${sc.upRight}${sc.horizontal * 2}${sc.upLeft}',
      row: 3,
      column: c,
    )
    ..output(
      'Human',
      row: humanRowOffset - 1,
      column: humanColumnOffset,
    )
    ..output(
      'Computer',
      row: computerRowOffset - 1,
      column: computerColumnOffset,
    );
  draw(humanGrid, humanRowOffset, humanColumnOffset);
  draw(computerGrid, computerRowOffset, computerColumnOffset);
}

Future<void> game() async {
  deck.shuffle();
  humanGrid.reset();
  computerGrid.reset();
  for (final _ in Iterable.generate(25)) {
    nextCard = deck.take(1).first;
    updateScreen();
    terminal.output('Your turn...', row: 20, column: 17);
    await getHumanMove();
    updateScreen();
    terminal.output('Thinking... ', row: 20, column: 17);
    await computerMove();
  }
  updateScreen();
  switch (humanGrid.scoreBoard().compareTo(computerGrid.scoreBoard())) {
    case < 0:
      terminal.output('Computer wins!', row: 20, column: 17);
    case > 0:
      terminal.output('You win!      ', row: 20, column: 17);
    case _:
      terminal.output('A tie!        ', row: 20, column: 17);
  }
  terminal.output('Press any key to continue!', row: 22, column: 12);
  await terminal.inputKey();
}

Future<void> getHumanMove() async {
  while (true) {
    final mc = await terminal.inputMouseClick();
    if (placeCardAtMouseClick(
      humanGrid,
      mc.row,
      mc.column,
      nextCard,
      humanRowOffset,
      humanColumnOffset,
    )) {
      break;
    }
  }
}

Future<void> computerMove() async {
  const chunkSize = 10;
  final record = {
        for (var r = 0; r < 5; r++)
          for (var c = 0; c < 5; c++)
            if (!computerGrid.cardIsPlacedAt(r, c)) (r, c): 0.0
      },
      simulationsPerSquare = simulationsSetting ~/ record.length,
      virtualDeck = Deck.withCardsRemoved(deck.cardsRemoved);
  for (final (r, c) in record.keys) {
    for (final i in Iterable.generate(simulationsPerSquare)) {
      if (i % chunkSize == 0) await Future.delayed(Duration.zero);
      final virtualGrid = Grid.from(computerGrid, scoringSystemSetting)
        ..placeCardAt(r, c, nextCard, scoringSystemSetting);
      virtualDeck.shuffle();
      for (final (vR, vC) in record.keys) {
        if (vR == r && vC == c) {
          continue;
        }
        virtualGrid.placeCardAt(
            vR, vC, virtualDeck.take(1).first, scoringSystemSetting);
      }
      record[(r, c)] =
          record[(r, c)]! + virtualGrid.scoreBoard() / simulationsPerSquare;
    }
  }
  var bestScore = -1.0, bestR = 0, bestC = 0;
  for (final MapEntry(key: (r, c), :value) in record.entries) {
    if (value > bestScore) {
      bestScore = value;
      bestR = r;
      bestC = c;
    }
  }

  computerGrid.placeCardAt(bestR, bestC, nextCard, scoringSystemSetting);
}

void draw(Grid grid, int rowOffset, int columnOffset) {
  String h(String left, String middle, String right) => '$left'
      '${[
        for (final _ in Iterable.generate(5)) sc.horizontal * 2
      ].join(middle)}'
      '$right';
  final e = '${sc.vertical}'
      '${[for (final _ in Iterable.generate(5)) '  '].join(sc.vertical)}'
      '${sc.vertical}';
  terminal
    ..output(
      h(sc.downRight, sc.downHorizontal, sc.downLeft),
      row: rowOffset,
      column: columnOffset,
    )
    ..output(e, row: rowOffset + 1, column: columnOffset);
  for (var i = 0; i < 4; i++) {
    terminal
      ..output(
        h(sc.verticalRight, sc.verticalHorizontal, sc.verticalLeft),
        row: rowOffset + i * 2 + 2,
        column: columnOffset,
      )
      ..output(e, row: rowOffset + i * 2 + 3, column: columnOffset);
  }
  terminal.output(
    h(sc.upRight, sc.upHorizontal, sc.upLeft),
    row: rowOffset + 10,
    column: columnOffset,
  );

  for (var r = 0; r < 5; r++) {
    for (var c = 0; c < 5; c++) {
      if (grid.cardIsPlacedAt(r, c)) {
        final card = grid.cardAt(r, c)!;
        terminal.output(
          card.toString(),
          row: rowOffset + 2 * r + 1,
          column: columnOffset + 3 * c + 1,
          color: card.suit == Suit.hearts || card.suit == Suit.diamonds
              ? 'red'
              : 'gray',
        );
      } else {
        terminal.output(
          sc.mediumBlock * 2,
          row: rowOffset + 2 * r + 1,
          column: columnOffset + 3 * c + 1,
        );
      }
    }
  }

  for (var i = 0; i < 5; i++) {
    if (grid.rowScores[i] > 0) {
      terminal.output(
        '${grid.rowScores[i]}',
        row: rowOffset + i * 2 + 1,
        column: columnOffset + 16,
      );
    }
    if (grid.columnScores[i] > 0) {
      terminal.output(
        '${grid.columnScores[i]}',
        row: rowOffset + 11,
        column: columnOffset + i * 3 + 1,
      );
    }
  }

  terminal.output(
    '${grid.scoreBoard()}',
    row: rowOffset + 11,
    column: columnOffset + 16,
  );
}

bool placeCardAtMouseClick(
  Grid grid,
  int r,
  int c,
  Card card,
  int rowOffset,
  int columnOffset,
) {
  // .--.--.--.--.--.
  // |  |  |  |  |  |
  // :--+--+--+--+--:
  // |  |  |  |  |  |
  // :--+--+--+--+--:
  final row = (r - rowOffset) ~/ 2, column = (c - columnOffset) ~/ 3;
  if (row < 0 ||
      row > 4 ||
      column < 0 ||
      column > 4 ||
      grid.cardIsPlacedAt(row, column)) {
    return false;
  }
  grid.placeCardAt(row, column, card, scoringSystemSetting);
  return true;
}
