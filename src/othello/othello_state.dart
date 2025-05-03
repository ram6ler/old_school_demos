import "direction.dart";
import "player.dart";

class OthelloState {
  /// The bit index associated with cell at (row, column).
  static int bitOffset(int row, int column) => row * 8 + column;

  /// Whether (row, column) is a legal coordinate pair.
  static bool isWithinBounds(int row, int column) =>
      row >= 0 && row < 8 && column >= 0 && column < 8;

  /// A bit field with all bits set.
  static final allBits = BigInt.parse("FFFFFFFFFFFFFFFF", radix: 16);

  /// Bit field representing cells occupied by nought tokens.
  var noughtTokens = BigInt.zero;

  /// Bit field representing cells occupied by cross tokens.
  var crossTokens = BigInt.zero;

  BigInt get allTokens => noughtTokens | crossTokens;

  /// The current player.
  Player player;

  /// The current number of nought tokens.
  var naughtScore = 0;

  /// The current number of cross tokens.
  var crossScore = 0;

  /// A bit field representing the current opponent's tokens.
  BigInt get playerTokens => switch (player) {
        Player.naught => noughtTokens,
        Player.cross => crossTokens,
      };

  /// A bit field representing the current opponent's tokens.
  BigInt get opponentTokens => switch (player) {
        Player.naught => crossTokens,
        Player.cross => noughtTokens,
      };

  /// Places specified player's token at (row column) and updates the scores.
  void placeAt(Player player, int row, int column) {
    final bit = BigInt.one << bitOffset(row, column);
    switch (player) {
      case Player.naught:
        noughtTokens |= bit;
        naughtScore++;
        if (crossTokens & bit > BigInt.zero) {
          crossScore--;
          crossTokens &= (allBits ^ bit);
        }
      case Player.cross:
        crossTokens |= bit;
        crossScore++;
        if (noughtTokens & bit > BigInt.zero) {
          naughtScore--;
          noughtTokens &= (allBits ^ bit);
        }
    }
  }

  /// Whether cell at (row column) is occupied by either player.
  bool cellIsOccupied(int row, int column) =>
      allTokens & (BigInt.one << bitOffset(row, column)) > BigInt.zero;

  /// Whether cell at (row column) is occupied by noughts player.
  bool cellIsOccupiedByNaught(int row, int column) =>
      noughtTokens & (BigInt.one << bitOffset(row, column)) > BigInt.zero;

  /// Whether cell at (row column) is occupied by cross player.
  bool cellIsOccupiedByCross(int row, int column) =>
      crossTokens & (BigInt.one << bitOffset(row, column)) > BigInt.zero;

  /// Whether cell at (row column) is occupied by the current opponent.
  bool cellIsOccupiedByOpponent(int row, int column) =>
      opponentTokens & (BigInt.one << bitOffset(row, column)) > BigInt.zero;

  /// Whether cell at (row column) is occupied by the current player.
  bool cellIsOccupiedByPlayer(int row, int column) =>
      playerTokens & (BigInt.one << bitOffset(row, column)) > BigInt.zero;

  bool get moveIsAvailable => legalMoves.isNotEmpty;

  /// A list of legal moves for the current player.
  List<(int row, int column)> get legalMoves {
    final result = <(int, int)>[];
    for (var row = 0; row < 8; row++) {
      for (var column = 0; column < 8; column++) {
        if (!cellIsOccupied(row, column)) {
          var totalFlips = 0;
          for (final d in Direction.values) {
            final (dr, dc) = d.move;
            var flips = 0, r = row + dr, c = column + dc;
            while (isWithinBounds(r, c) && cellIsOccupiedByOpponent(r, c)) {
              flips++;
              r += dr;
              c += dc;
            }

            if (flips > 0 &&
                isWithinBounds(r, c) &&
                cellIsOccupiedByPlayer(r, c)) {
              totalFlips += flips;
            }
          }
          if (totalFlips > 0) {
            result.add((row, column));
          }
        }
      }
    }
    return result;
  }

  /// Makes a move to (row, column) and switched the player.
  ///
  /// Assumes that (row, column) is a legal move.
  ///
  /// Returns a list of the cell coordinates set to the player's pieces.
  void moveTo(int row, int column) {
    placeAt(player, row, column);
    for (final d in Direction.values) {
      final (dr, dc) = d.move;
      var flips = 0, r = row + dr, c = column + dc;
      while (isWithinBounds(r, c) && cellIsOccupiedByOpponent(r, c)) {
        flips++;
        r += dr;
        c += dc;
      }
      if (flips > 0 && isWithinBounds(r, c) && cellIsOccupiedByPlayer(r, c)) {
        r = row + dr;
        c = column + dc;
        while (isWithinBounds(r, c) && cellIsOccupiedByOpponent(r, c)) {
          placeAt(player, r, c);
          r += dr;
          c += dc;
        }
      }
    }

    player = player.next;
  }

  @override
  String toString() {
    final sb = StringBuffer(
      "  ${[for (var c = 0; c < 8; c++) c.toString()].join(" ")}\n",
    );

    for (var r = 0; r < 8; r++) {
      sb.write("$r ");
      for (var c = 0; c < 8; c++) {
        final i = bitOffset(r, c);
        if (noughtTokens & (BigInt.one << i) > BigInt.zero) {
          sb.write("o ");
        } else if (crossTokens & (BigInt.one << i) > BigInt.zero) {
          sb.write("x ");
        } else {
          sb.write(". ");
        }
      }
      sb.write("\n");
    }
    return sb.toString();
  }

  void reset() {
    noughtTokens = crossTokens = BigInt.zero;
    naughtScore = crossScore = 0;
    placeAt(Player.naught, 3, 3);
    placeAt(Player.naught, 4, 4);
    placeAt(Player.cross, 3, 4);
    placeAt(Player.cross, 4, 3);
    player = Player.naught;
  }

  OthelloState(this.player);

  /// A copy of an Othello state.
  factory OthelloState.from(OthelloState that) => OthelloState(that.player)
    ..naughtScore = that.naughtScore
    ..noughtTokens = that.noughtTokens
    ..crossScore = that.crossScore
    ..crossTokens = that.crossTokens;
}
