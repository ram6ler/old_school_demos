enum Player {
  cross,
  naught;

  Player get next => switch (this) {
        cross => naught,
        naught => cross,
      };

  String get symbol => switch (this) {
        cross => 'X',
        naught => 'O',
      };
}
