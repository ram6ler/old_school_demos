/// A board of squares.
typedef Board = List<List<Square>>;

/// A square that makes up the board.
class Square {
  /// The default color, for a square that doesn't block.
  static const defaultColor = 'black';

  /// The color of the edge squares.
  static const border = 'white';

  /// The color of the square.
  String color = defaultColor;

  /// Whether a square blocks a tetronimo.
  bool get blocks => color != defaultColor;
}
