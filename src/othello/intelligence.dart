import "dart:math" show Random;

import "player.dart" show Player;
import "othello_state.dart" show OthelloState;
import "mode.dart" show Mode;

({int white, int black}) randomMoveScores(OthelloState othello, [int? seed]) {
  final rand = Random(seed);
  while (true) {
    final moves = othello.legalMoves;
    if (moves.isEmpty) {
      break;
    }
    final (row, column) = moves[rand.nextInt(moves.length)];
    othello.moveTo(row, column);
  }
  return (white: othello.naughtScore, black: othello.crossScore);
}

/// Uses background Monte Carlo simulations to choose a
/// move. With simulations set to zero, the first available
/// move encountered is chosen. With simulations set to around
/// 10, the move selected is roughly random. With simulations
/// set to > 500, the computer plays a pretty good game.
Future<(int row, int column)> getBestMove(
  OthelloState othello,
  Mode mode,
) async {
  final moves = othello.legalMoves,
      differences = {for (final move in moves) move: 0.0};

  for (var i = 0; i < mode.simulations ~/ moves.length; i++) {
    for (final (row, column) in moves) {
      final (:white, :black) = randomMoveScores(
        OthelloState.from(othello)..moveTo(row, column),
      );
      differences[(row, column)] = differences[(row, column)]! +
          (switch (othello.player) {
                Player.naught => white - black,
                Player.cross => black - white,
              }) /
              mode.simulations;
    }
  }

  var bestMove = differences.keys.first;
  for (final MapEntry(key: move, value: meanDifference)
      in differences.entries) {
    if (meanDifference > differences[bestMove]!) {
      bestMove = move;
    }
  }

  return bestMove;
}
