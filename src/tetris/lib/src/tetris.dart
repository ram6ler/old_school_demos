import 'dart:async' show Timer;

import 'tetronimo_container.dart';
import 'tetronimo_type.dart';
import 'square.dart';
import 'position.dart';
import 'rotation.dart';

/// The container of a Tetris game.
class Tetris {
  /// The number of rows in the tetrion: 20 rows plus 3
  /// hidden at the top plus 1 edge row at the bottom.
  static const _rows = 24;

  /// The number of columns in the tetrion: 10 rows plus 1
  /// for each edge column on the left and right.
  static const _columns = 12;

  /// The number of pieces after which the level increases.
  static const _linesPerLevel = 10;

  /// The initial number of timer calls per tick.
  static const _startTimerCallsPerTick = 10;

  /// The maximum number of timer refreshes per falling tetronimo.
  static const _maxTimerRefreshes = 16;

  Tetris({
    required this.onGameEnd,
    required this.onNextTetronimoRelease,
    required this.onScoreChange,
    required this.onLevelChange,
    required this.onLinesCompleteChange,
    required this.onScreenRefresh,
    required this.onLinesCleared,
    required this.onBoardCleared,
    required this.clearActiveTetronimo,
    required this.clearDisplayTetronimo,
    required this.drawActiveTetronimo,
    required this.drawDisplayTetronimo,
  }) {
    Timer.periodic(Duration(milliseconds: 100), (_) => _tickCheck());
  }

  /// Called when the game ends.
  void Function() onGameEnd;

  /// Called when the next tetronimo is released.
  void Function() onNextTetronimoRelease;

  /// Called when the score is updated.
  void Function(int score) onScoreChange;

  /// Called when the level changes.
  void Function(int level) onLevelChange;

  /// Called when the lines completed for a level changes.
  void Function(int completed) onLinesCompleteChange;

  /// Called when the board needs to be refreshed.
  void Function(Board board) onScreenRefresh;

  /// Called when lines are cleared.
  void Function(int lines) onLinesCleared;

  /// Called when the board is cleared.
  void Function() onBoardCleared;

  /// Called when the active tetronimo needs to be cleared.
  void Function(Positions positions) clearActiveTetronimo;

  /// Called when the active tetronimo needs to be drawn.
  void Function(Positions positions, String color) drawActiveTetronimo;

  /// Called when the display tetronimo needs to be cleared.
  void Function(Positions positions) clearDisplayTetronimo;

  /// Called when the display tetronimo needs to be drawn.
  void Function(Positions positions, String color) drawDisplayTetronimo;

  /// The container for the active tetronimo.
  final _active = TetronimoContainer();

  /// The container for the display of the next tetronimo.
  final _display = TetronimoContainer();

  /// The bag of tetronimos.
  final _bag = <TetronimoType>[];

  /// The board of squares.
  final Board _board = [
    for (var r = 0; r < _rows; r++)
      [for (var c = 0; c < _columns; c++) Square()],
  ];

  /// The number of lines cleared.
  var _lines = 0;

  /// The current level.
  var _level = 0;

  /// The current score.
  var _score = 0;

  /// Whether the game is accepting input.
  var _isActive = false;

  ///
  var _timerCallsPerTick = 10;
  var _timerCalls = 0;
  var _timerRefreshes = 0;

  /// Starts a new game.
  void startNewGame() {
    for (var r = 0; r < _rows; r++) {
      for (var c = 0; c < _columns; c++) {
        _board[r][c].color = (r == _rows - 1) || (c == 0) || (c == _columns - 1)
            ? Square.border
            : Square.defaultColor;
      }
    }

    _bag
      ..clear()
      ..addAll(TetronimoType.randomBag);

    clearActiveTetronimo(_active.squarePositions);

    _active
      ..tetronimo.type = _bag.removeLast()
      ..tetronimo.state = .spawned
      ..row = 3
      ..column = 4;

    clearDisplayTetronimo(_display.squarePositions);

    _display
      ..tetronimo.type = _bag.removeLast()
      ..tetronimo.state = .spawned
      ..row = 3
      ..column = 14;

    _lines = 0;
    _level = 1;
    _score = 0;
    _isActive = true;
    _timerCallsPerTick = _startTimerCallsPerTick;
    _timerCalls = 0;

    onScreenRefresh(_board);
    drawDisplayTetronimo(_display.squarePositions, _display.tetronimo.color);
    drawActiveTetronimo(_active.squarePositions, _active.tetronimo.color);
    onScoreChange(_score);
    onLevelChange(_level);
    onLinesCompleteChange(_lines);
    onNextTetronimoRelease();
  }

  void endGame() {
    _isActive = false;
  }

  Future<void> _tickCheck() async {
    _timerCalls++;
    if (_timerCalls >= _timerCallsPerTick) {
      _timerCalls = 0;
      final _ = _tick();
    }
  }

  /// Whether any of the positions in [positions] are blocked.
  bool _anyBlocks(List<Position> positions) => positions.any((t) {
    final (r, c) = t;
    return r < 0 || r >= _rows || c < 0 || c >= _columns || _board[r][c].blocks;
  });

  /// Releases the next tetronimo.
  void _nextTetronimo() {
    if (_bag.isEmpty) {
      _bag
        ..clear()
        ..addAll(TetronimoType.randomBag);
    }

    _active
      ..tetronimo.type = _display.tetronimo.type
      ..tetronimo.state = .spawned
      ..row = switch (_active.tetronimo.type) {
        .I => 2,
        _ => 3,
      }
      ..column = 4;

    onScreenRefresh(_board);

    _timerCalls = 0;
    _timerRefreshes = 0;

    final gameOver = _anyBlocks(_active.squarePositions);
    if (gameOver) {
      _isActive = false;
      onGameEnd();
    } else {
      clearDisplayTetronimo(_display.squarePositions);
      _display.tetronimo.type = _bag.removeLast();
      onNextTetronimoRelease();
      drawActiveTetronimo(_active.squarePositions, _active.tetronimo.color);
      drawDisplayTetronimo(_display.squarePositions, _display.tetronimo.color);
    }
  }

  /// Places the active tetronimo on the board; returns the
  /// number of rows cleared.
  void _place() {
    for (final (r, c) in _active.squarePositions) {
      _board[r][c].color = _active.tetronimo.color;
    }
    final (linesCleared, boardCleared) = _clear();
    if (linesCleared > 0) {
      switch (linesCleared) {
        case 1:
          _score += (boardCleared ? 800 : 100) * _level;
        case 2:
          _score += (boardCleared ? 1200 : 300) * _level;
        case 3:
          _score += (boardCleared ? 1800 : 500) * _level;
        case 4:
          _score += (boardCleared ? 2000 : 800) * _level;
      }
      onScoreChange(_score);
      onLinesCleared(linesCleared);
      if (boardCleared) {
        onBoardCleared();
      }
      _lines += linesCleared;
      if (_lines > _linesPerLevel) {
        _lines = 0;
        _levelUp();
      }
      onLinesCompleteChange(_lines);
    }
    _nextTetronimo();
  }

  void _levelUp() {
    _level++;
    _timerCallsPerTick -= 1;
    if (_timerCallsPerTick <= 0) {
      _timerCallsPerTick = 1;
    }
    onLevelChange(_level);
  }

  /// Clears all complete rows on the board; returns the number of rows
  /// cleared and whether the board has been cleared.
  ///
  (int, bool) _clear() {
    var lines = 0, squares = 0;
    for (var r = _rows - 2; r >= 0; r--) {
      var complete = true;
      for (var c = 1; c < _columns - 1; c++) {
        if (!_board[r][c].blocks) {
          complete = false;
          break;
        }
      }
      if (complete) {
        lines++;
        for (var i = r; i > 0; i--) {
          for (var j = 1; j < _columns - 1; j++) {
            _board[i][j].color = _board[i - 1][j].color;
          }
        }
        for (var j = 1; j < _columns - 1; j++) {
          _board[0][j].color = Square.defaultColor;
        }
        r++;
      }
    }
    for (var r = 3; r < _rows - 1; r++) {
      for (var c = 1; c < _columns - 1; c++) {
        if (_board[r][c].blocks) {
          squares++;
        }
      }
    }

    onScreenRefresh(_board);

    return (lines, squares == 0);
  }

  /// Refreshes the timer if allowed.
  void _refreshTimer() {
    if (++_timerRefreshes <= _maxTimerRefreshes) {
      _timerCalls = 0;
    }
  }

  /// Performs a tick; returns true if the tetronimo moves down.
  bool _tick() {
    if (!_isActive) {
      return false;
    }

    final nextPositions = [
      for (final (r, c) in _active.squarePositions) (r + 1, c),
    ];
    if (!_anyBlocks(nextPositions)) {
      clearActiveTetronimo(_active.squarePositions);
      _active.row++;
      drawActiveTetronimo(nextPositions, _active.tetronimo.color);
      return true;
    }
    _place();
    return false;
  }

  /// Requests a left shift; returns whether the shift is carried out.
  bool shiftLeft() => _isActive ? _shift(-1) : false;

  /// Requests a right shift; returns whether the shift is carried out.
  bool shiftRight() => _isActive ? _shift(1) : false;

  /// Attempts a horizontal shift; returns whether the attempt
  /// is successful.
  ///
  bool _shift(int dC) {
    final nextPositions = [
      for (final (r, c) in _active.squarePositions) (r, c + dC),
    ];
    if (!_anyBlocks(nextPositions)) {
      _refreshTimer();
      clearActiveTetronimo(_active.squarePositions);
      _active.column += dC;
      drawActiveTetronimo(nextPositions, _active.tetronimo.color);
      return true;
    }
    return false;
  }

  /// Requests a soft drop; returns whether successful.
  bool softDrop() {
    if (!_isActive) {
      return false;
    }
    final movesDown = _tick();
    if (movesDown) {
      _refreshTimer();
      _score++;
      onScoreChange(_score);
    }
    return movesDown;
  }

  /// Requests a hard drop; returns whether successful.
  bool hardDrop() {
    if (!_isActive) {
      return false;
    }

    var linesDropped = 0;
    while (true) {
      final positions = [
        for (final (r, c) in _active.squarePositions) (r + 1, c),
      ];
      if (_anyBlocks(positions)) {
        break;
      }
      _active.row++;
      linesDropped++;
    }
    if (linesDropped > 0) {
      _score += 2 * linesDropped;
      _refreshTimer();
      onScoreChange(_score);
    }
    _place();
    return linesDropped > 0;
  }

  /// Requests a clockwise rotation; returns successful
  bool rotateClockwise() => _isActive ? _rotate(.clockwise) : false;

  /// Requests a counter-clockwise rotation; returns whether successful.
  bool rotateCounterClockwise() => _rotate(.counterClockwise);

  /// Attempts a rotation; returns whether successful.
  bool _rotate(Rotation rotation) {
    final t = _active.tetronimo,
        currentState = t.state,
        nextState = t.state.transition(rotation);
    for (final (dr, dc) in t.type.wallKickChecks(currentState, nextState)) {
      final container = TetronimoContainer()
        ..row = _active.row
        ..column = _active.column;
      container.tetronimo
        ..type = _active.tetronimo.type
        ..state = nextState;
      final nextPositions = [
        for (final (r, c) in container.squarePositions) (r + dr, c + dc),
      ];
      if (!_anyBlocks(nextPositions)) {
        clearActiveTetronimo(_active.squarePositions);
        _active
          ..row += dr
          ..column += dc;
        t.state = nextState;
        drawActiveTetronimo(_active.squarePositions, _active.tetronimo.color);
        _refreshTimer();
        return true;
      }
    }
    return false;
  }
}
