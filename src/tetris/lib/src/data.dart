import 'tetronimo_type.dart';
import 'tetronimo_state.dart';

/// The offset square positions for each piece and state.
///
/// See https://tetris.wiki/Super_Rotation_System.
///
const defaultBlockOffsets =
    <TetronimoType, Map<TetronimoState, List<(int, int)>>>{
      .I: {
        .spawned: [(1, 0), (1, 1), (1, 2), (1, 3)],
        .right: [(0, 2), (1, 2), (2, 2), (3, 2)],
        .inverted: [(2, 0), (2, 1), (2, 2), (2, 3)],
        .left: [(0, 1), (1, 1), (2, 1), (3, 1)],
      },
      .J: {
        .spawned: [(0, 0), (1, 0), (1, 1), (1, 2)],
        .right: [(0, 1), (0, 2), (1, 1), (2, 1)],
        .inverted: [(1, 0), (1, 1), (1, 2), (2, 2)],
        .left: [(0, 1), (1, 1), (2, 0), (2, 1)],
      },
      .L: {
        .spawned: [(0, 2), (1, 0), (1, 1), (1, 2)],
        .right: [(0, 1), (1, 1), (2, 1), (2, 2)],
        .inverted: [(1, 0), (1, 1), (1, 2), (2, 0)],
        .left: [(0, 0), (0, 1), (1, 1), (2, 1)],
      },
      .O: {
        .spawned: [(0, 1), (0, 2), (1, 1), (1, 2)],
        .right: [(0, 1), (0, 2), (1, 1), (1, 2)],
        .inverted: [(0, 1), (0, 2), (1, 1), (1, 2)],
        .left: [(0, 1), (0, 2), (1, 1), (1, 2)],
      },
      .S: {
        .spawned: [(0, 1), (0, 2), (1, 0), (1, 1)],
        .right: [(0, 1), (1, 1), (1, 2), (2, 2)],
        .inverted: [(1, 1), (1, 2), (2, 0), (2, 1)],
        .left: [(0, 0), (1, 0), (1, 1), (2, 1)],
      },
      .T: {
        .spawned: [(0, 1), (1, 0), (1, 1), (1, 2)],
        .right: [(0, 1), (1, 1), (1, 2), (2, 1)],
        .inverted: [(1, 0), (1, 1), (1, 2), (2, 1)],
        .left: [(0, 1), (1, 0), (1, 1), (2, 1)],
      },
      .Z: {
        .spawned: [(0, 0), (0, 1), (1, 1), (1, 2)],
        .right: [(0, 2), (1, 1), (1, 2), (2, 1)],
        .inverted: [(1, 0), (1, 1), (2, 1), (2, 2)],
        .left: [(0, 1), (1, 0), (1, 1), (2, 0)],
      },
    };

/// The sequence of each tetronimo container offset positions
/// to check for an attempted transition from one state to
/// another.
///
/// See https://tetris.wiki/Super_Rotation_System.
///
const Map<(TetronimoState, TetronimoState), List<(int, int)>> tJSLTZChecks = {
      (.spawned, .right): [(0, 0), (0, -1), (1, -1), (2, 0), (2, -1)],
      (.right, .spawned): [(0, 0), (0, 1), (1, 1), (-2, 0), (-2, 1)],
      (.right, .inverted): [(0, 0), (0, 1), (1, 1), (-2, 0), (-2, 1)],
      (.inverted, .right): [(0, 0), (0, -1), (-1, -1), (2, 0), (2, -1)],
      (.inverted, .left): [(0, 0), (0, 1), (-1, 1), (2, 0), (2, 1)],
      (.left, .inverted): [(0, 0), (0, -1), (1, -1), (-2, 0), (-2, -1)],
      (.left, .spawned): [(0, 0), (0, -1), (1, -1), (-2, 0), (-2, -1)],
      (.spawned, .left): [(0, 0), (0, 1), (-1, 1), (2, 0), (2, 1)],
    },
    tIChecks = {
      (.spawned, .right): [(0, 0), (0, -2), (0, 1), (1, -2), (-2, 1)],
      (.right, .spawned): [(0, 0), (0, 2), (0, -1), (-1, 2), (2, -1)],
      (.right, .inverted): [(0, 0), (0, -1), (0, 2), (-2, -1), (1, 2)],
      (.inverted, .right): [(0, 0), (0, 1), (0, -2), (1, 1), (-1, -2)],
      (.inverted, .left): [(0, 0), (0, 2), (0, -1), (-1, 2), (2, -1)],
      (.left, .inverted): [(0, 0), (0, -2), (0, 1), (1, -2), (-2, 1)],
      (.left, .spawned): [(0, 0), (0, 1), (0, -2), (2, 1), (-1, -2)],
      (.spawned, .left): [(0, 0), (0, -1), (0, 2), (-2, -1), (1, 2)],
    },
    tOChecks = {
      (.spawned, .right): [(0, 0)],
      (.right, .spawned): [(0, 0)],
      (.right, .inverted): [(0, 0)],
      (.inverted, .right): [(0, 0)],
      (.inverted, .left): [(0, 0)],
      (.left, .inverted): [(0, 0)],
      (.left, .spawned): [(0, 0)],
      (.spawned, .left): [(0, 0)],
    };
