import 'rotation.dart';

enum TetronimoState {
  spawned,
  right,
  inverted,
  left;

  /// Transition to next or previous state.
  TetronimoState transition(Rotation move) => switch (move) {
    .clockwise => values[(values.indexOf(this) + 1) % 4],
    .counterClockwise => values[(values.indexOf(this) - 1) % 4],
  };
}
