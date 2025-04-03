// Data cribbed from Blockdude TI-89/V200 source code:
// See https://www.ticalc.org/archives/files/fileinfo/206/20668.html.

import "package:web/web.dart" as web;

enum Direction { left, right }

enum Action { turn, stepForward, stepUp, stepDown, pickUp, putDown, reset }

const passwords = [
  "tcP",
  "ARo",
  "CKs",
  "daN",
  "BAH",
  "Ion",
  "Twe",
  "nTy",
  "iRC",
  "JmK",
  "wTF"
];

const _paddingRows = 5, _paddingColumns = 5;

class Display {
  final List<List<String>> data;
  final int moves;
  final bool hasWon, openLeft, openRight, openTop, openBottom;
  Display(
    this.data,
    this.moves,
    this.hasWon,
    this.openLeft,
    this.openRight,
    this.openTop,
    this.openBottom,
  );
}

class Level {
  final List<String> design;

  int cameraRow = 0,
      cameraColumn = 0,
      heroRow = 0,
      heroColumn = 0,
      doorRow = 0,
      doorColumn = 0,
      moves = 0;

  Direction heroDirection = Direction.left;

  bool heroIsCarrying = false;

  List<List<String>> data;

  int get rows => data.length;
  int get columns => data.first.length;

  int get dc => heroDirection == Direction.left ? -1 : 1;

  Level(this.design)
      : data = [
          for (final row in design) [for (var _ = 0; _ < row.length; _++) " "]
        ] {
    reset();
  }

  void reset() {
    heroDirection = Direction.left;
    heroIsCarrying = false;
    moves = 0;

    for (var row = 0; row < design.length; row++) {
      for (var column = 0; column < design[row].length; column++) {
        final c = design[row][column];
        switch (c) {
          case "M":
            heroRow = row;
            heroColumn = column;
            data[row][column] = " ";
          case "D":
            doorRow = row;
            doorColumn = column;
            data[row][column] = " ";
          case _:
            data[row][column] = c;
        }
      }
    }
    moveCameraToHero();
  }

  void _limitCamera() {
    if (cameraRow < _paddingRows) {
      cameraRow = _paddingRows;
    }
    if (cameraRow > rows - _paddingRows) {
      cameraRow = rows - _paddingRows;
    }
    if (cameraColumn < _paddingColumns) {
      cameraColumn = _paddingColumns;
    }
    if (cameraColumn > columns - _paddingColumns) {
      cameraColumn = columns - _paddingColumns;
    }
  }

  void moveCamera(int dRow, int dColumn) {
    cameraRow += dRow;
    cameraColumn += dColumn;
    _limitCamera();
  }

  void moveCameraToHero() {
    cameraRow = heroRow;
    cameraColumn = heroColumn;
    _limitCamera();
  }

  bool canPerform(Action action) {
    var result = false;
    final upUp = data[heroRow - 2][heroColumn + dc],
        up = data[heroRow - 1][heroColumn + dc],
        above = data[heroRow - 1][heroColumn],
        front = data[heroRow][heroColumn + dc],
        down = data[heroRow + 1][heroColumn + dc];
    switch (action) {
      case Action.reset:
        result = true;
      case Action.stepForward:
        result = (!heroIsCarrying || up == " ") && front == " " && down != " ";
      case Action.stepDown:
        result = (!heroIsCarrying || up == " ") && front == " " && down == " ";
      case Action.stepUp:
        result = (!heroIsCarrying || upUp == " ") && up == " " && front != " ";
      case Action.pickUp:
        result = !heroIsCarrying && front == "O" && up == " " && above == " ";
      case Action.putDown:
        result = heroIsCarrying && up == " ";
      case Action.turn:
        result = true;
        break;
    }
    return result;
  }

  bool perform(Action action) {
    final result = canPerform(action);
    if (result) {
      switch (action) {
        case Action.reset:
          reset();
        case Action.stepForward:
          heroColumn += dc;
        case Action.stepDown:
          heroColumn += dc;
          var restRow = heroRow + 1;
          while (data[restRow + 1][heroColumn] == " ") {
            restRow++;
          }
          heroRow = restRow;
        case Action.stepUp:
          heroColumn += dc;
          heroRow -= 1;
        case Action.pickUp:
          data[heroRow][heroColumn + dc] = " ";
          heroIsCarrying = true;
        case Action.putDown:
          heroIsCarrying = false;
          var restRow = heroRow - 1;
          while (
              restRow + 1 < rows && data[restRow + 1][heroColumn + dc] == " ") {
            restRow++;
          }
          data[restRow][heroColumn + dc] = "O";
        case Action.turn:
          heroDirection = heroDirection == Direction.left
              ? Direction.right
              : Direction.left;
      }
    }
    return result;
  }

  void input(int keyCode) {
    void step() {
      if (canPerform(Action.stepUp)) {
        perform(Action.stepUp);
        moves++;
      } else if (canPerform(Action.stepDown)) {
        perform(Action.stepDown);
        moves++;
      } else if (canPerform(Action.stepForward)) {
        perform(Action.stepForward);
        moves++;
      }
    }

    switch (keyCode) {
      case web.KeyCode.LEFT:
        if (heroDirection == Direction.right) {
          perform(Action.turn);
          moveCameraToHero();
        } else {
          step();
          moveCameraToHero();
        }
      case web.KeyCode.RIGHT:
        if (heroDirection == Direction.left) {
          perform(Action.turn);
          moveCameraToHero();
        } else {
          step();
          moveCameraToHero();
        }
      case web.KeyCode.SPACE:
        if (canPerform(Action.pickUp)) {
          perform(Action.pickUp);
          moveCameraToHero();
          moves++;
        } else if (canPerform(Action.putDown)) {
          perform(Action.putDown);
          moveCameraToHero();
          moves++;
        }
      case web.KeyCode.R:
        if (canPerform(Action.reset)) {
          perform(Action.reset);
          moveCameraToHero();
        }
      case web.KeyCode.A:
        moveCamera(0, -1);
      case web.KeyCode.D:
        moveCamera(0, 1);
      case web.KeyCode.S:
        moveCameraToHero();
      case web.KeyCode.W:
        moveCamera(-1, 0);
      case web.KeyCode.X:
        moveCamera(1, 0);
    }
  }

  Display draw() {
    final rf = cameraRow - _paddingRows,
        rt = cameraRow + _paddingRows,
        cf = cameraColumn - _paddingColumns,
        ct = cameraColumn + _paddingColumns;
    String character(int row, int column) {
      var result = data[row][column];
      if (row == heroRow - 1 && column == heroColumn && heroIsCarrying) {
        result = "O";
      } else if (row == doorRow && column == doorColumn) {
        result = "D";
      } else if (row == heroRow && column == heroColumn) {
        result = heroDirection == Direction.left ? "<" : ">";
      }
      return result;
    }

    final displayData = [
      for (var r = rf; r < rt; r++)
        [for (var c = cf; c < ct; c++) character(r, c)]
    ];
    return Display(
      displayData,
      moves,
      heroRow == doorRow && heroColumn == doorColumn,
      cameraColumn > _paddingColumns,
      cameraColumn < columns - _paddingColumns,
      cameraRow > _paddingRows,
      cameraRow < rows - _paddingRows,
    );
  }
}

final levels = [
  for (final design in [
    [
      "                    ",
      "B                  B",
      "B                  B",
      "B                  B",
      "B                  B",
      "B                  B",
      "B   B       B      B",
      "BD  B   B O B O M  B",
      "BBBBBBBBBBBBBBBBBBBB",
      "                    ",
    ],
    [
      " B    BB        BB    ",
      " B                B   ",
      "BB                 B  ",
      "BD                  B ",
      "BB                   B",
      " B           B  O    B",
      " B           BO OOM  B",
      " BBBBB   BBBBBBBBBBBBB",
      "     B  OB            ",
      "     BBBBB            ",
    ],
    [
      " B                 ",
      " B   BBBBBBBBBBBBB ",
      "B B B             B",
      "B  B              B",
      "B                OB",
      "B               OOB",
      "B BBB    M   BO BB ",
      "B B B    B  BBBBB  ",
      "B B BOO BB  B      ",
      "BDB BBBBBB BB      ",
      "BBB BB   BBB       ",
    ],
    [
      "                  B     ",
      "                 B B    ",
      "       B        B   B   ",
      "      B B      B     B  ",
      "   BBB   B    B       B ",
      "  B       B  B         B",
      " B         BB          B",
      " B                    OB",
      " B                   OOB",
      " B               M   BBB",
      "BB    B          B   B  ",
      "BD    B O        BBBBB  ",
      "BBBBB B O   O  BBB      ",
      "    B B O B BO B        ",
      "    B BBBBBBBBBB        ",
      "    BBB                 ",
    ],
    [
      "     BBB    BBBBBBBBB ",
      " BBBB   BBBB         B",
      "B                    B",
      "B                    B",
      "B                    B",
      "B     B              B",
      "B     B              B",
      "B     BOOOO          B",
      "BD   BBBBBBBM        B",
      "BB BBB     BB B     OB",
      " B B        B BB   OOB",
      " B B        B BB  OOOB",
      " BBB        B BBBBBBBB",
      "            BBB       ",
    ],
    [
      " BBB             BBBB",
      " B  BBBBBBBBBBBBB   B",
      "BB                  B",
      "BD                  B",
      "BB                  B",
      " B                OOB",
      " BOO        B  O  BBB",
      " BOOO       BMOOO B  ",
      " BOOOO      BBBBB B  ",
      " BBBBB    BBB   BBB  ",
      "     B   OB          ",
      "     BB BBB          ",
      "      BBB            ",
    ],
    [
      "  B   BBBBB   BB   BBB  ",
      " B B B     B B  B B   B ",
      " B  BB      BB   BB    B",
      " B   B       B    B    B",
      " B                    OB",
      " B                    OB",
      "BB                   OOB",
      "BD   O               BBB",
      "BB   B O     B    BB B  ",
      " B   B O    BB O MBBBB  ",
      " BB  B OOO  BB OOOB     ",
      "  B  BBBBBB BBBBBBB     ",
      "  BB B    BBB           ",
      "   BBB                  ",
    ],
    [
      " BBB       BBBB   BBBBBBB  ",
      "B   B     B    B B       B ",
      "B    B   B     BB         B",
      "BO    BBB    B B     BBB  B",
      "BOO         BB      BB B  B",
      "BBBB       BB          BD B",
      "   BB            BB    BB B",
      "  B    O B      B  B      B",
      "  B    OB B    B   B      B",
      " B   BBB   B    B  B     OB",
      " B      B B      BB     OOB",
      "B        B           BBBBBB",
      "B            O            B",
      "B    O      BBB          OB",
      "B   BBB                 OOB",
      "B        O       O  M  OOOB",
      "BBBBBBBBBBBBBBBBBBBBBBBBBBB",
    ],
    [
      "        BBB         ",
      "       B   B        ",
      "      B     B  BBBBB",
      "     B       BB    B",
      "    B     O        B",
      "   B      OO      OB",
      "  B       BBB    OOB",
      " B            M BBBB",
      "B             O    B",
      "BD           BBB   B",
      "BB    BB   B      OB",
      " B    BBO  BB   BBBB",
      " B    BBBBBBB  BB   ",
      " BBB  B     B BB    ",
      "   B BB     BBB     ",
      "   BBB              ",
    ],
    [
      "   BBBBBBBBBBBBBBBBBBBBB   ",
      " BB           B         B  ",
      "BBBBO       OOBO   OOO OBB ",
      "B  BB  B   BBBBB  OBBB BB B",
      "B   B  BB        BBB BBB  B",
      "B   BB  BBOOOO            B",
      "BD       BBBBBBB          B",
      "BB        B   BBB        BB",
      " B     O   B B  BB        B",
      " B     B    B    BB       B",
      " BBBB  BB             BBBBB",
      "   BBBBB      M           B",
      "   B          B           B",
      "   B         BB    BBBBBBBB",
      "   B        BB           B ",
      "   B          O         OB ",
      "   BO    BBBBBBBBBBB   OOB ",
      "   BOO  BB         BB OOOB ",
      "   BBBBBB           BBBBBB ",
    ],
    [
      "BBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
      "B  B   B                    B",
      "B     OBOO            BBBBB B",
      "BO   BBB OBB     O  BB  D B B",
      "BOO    BBB   M  O       B B B",
      "BBB  OOB     B O          B B",
      "B   BBBB      B  BBB   BBB  B",
      "BO            B B      B  O B",
      "BOO       BBB B BO    B  BBBB",
      "BBBB O   BBB  B BBO  B O B  B",
      "B           O BBB  OB   B   B",
      "B   O     OO B   BBBB       B",
      "B    BBBBBBBBB        BBBBB B",
      "B              O   OBB    B B",
      "BBBB           O   B    OOB B",
      "BOBB   B    B          BBBB B",
      "BBOBBB B    B   OOO O       B",
      "BOBOBOBB    B        OOO    B",
      "BBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
    ]
  ])
    Level(design)
];
