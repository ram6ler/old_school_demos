enum Direction {
  n,
  e,
  s,
  w,
  ne,
  nw,
  se,
  sw;

  (int, int) get move => switch (this) {
    n => (-1, 0),
    e => (0, 1),
    s => (1, 0),
    w => (0, -1),
    ne => (-1, 1),
    nw => (-1, -1),
    se => (1, 1),
    sw => (1, -1),
  };
}
