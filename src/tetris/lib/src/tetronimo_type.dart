import 'dart:math' show Random;

import 'position.dart';
import 'tetronimo_state.dart';
import 'data.dart';

final random = Random();

/// The type of tetronimo: I, J, L, O, S, T or Z.
enum TetronimoType {
  I,
  J,
  L,
  O,
  S,
  T,
  Z;

  /// A shuffled bag containing one of each tetronimo type.
  static List<TetronimoType> get randomBag =>
      [for (final t in values) t]
        ..sort((a, b) => random.nextDouble() > 0.5 ? 1 : -1);

  /// The sequence of collision test offset positions for
  /// transitioning from state [from] to state [to].
  List<Position> wallKickChecks(TetronimoState from, TetronimoState to) =>
      switch (this) {
        J || S || L || T || Z => tJSLTZChecks[(from, to)]!,
        I => tIChecks[(from, to)]!,
        O => tOChecks[(from, to)]!,
      };
}
