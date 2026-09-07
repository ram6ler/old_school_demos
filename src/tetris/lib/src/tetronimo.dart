import 'tetronimo_type.dart';
import 'tetronimo_state.dart';

/// A tetronimo.
class Tetronimo {
  /// The tetronimo type.
  var type = TetronimoType.O;

  /// The tetronimo state.
  var state = TetronimoState.spawned;

  /// The color of the tetronimo.
  String get color => switch (type) {
    .I => 'turquoise',
    .J => 'blue',
    .L => 'orange',
    .O => 'yellow',
    .S => 'limegreen',
    .T => 'purple',
    .Z => 'red',
  };
}
