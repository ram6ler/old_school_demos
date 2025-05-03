enum Mode {
  easy(10),
  medium(100),
  hard(500),
  expert(1_500);

  final int simulations;
  const Mode(this.simulations);
}
