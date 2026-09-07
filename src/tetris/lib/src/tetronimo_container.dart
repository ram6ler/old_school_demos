import 'tetronimo.dart';
import 'position.dart';
import 'data.dart';

/// A tetronimo container.
class TetronimoContainer {
  /// The contained tetronimo.
  final tetronimo = Tetronimo();

  /// The row of the top left corner of the container.
  var row = 0;

  /// The row of the top left corner of the container.
  var column = 0;

  /// The positions of the squares making up the tetronimo.
  List<Position> get squarePositions => [
    for (final (dr, dc)
        in defaultBlockOffsets[tetronimo.type]![tetronimo.state]!)
      (row + dr, column + dc),
  ];
}
