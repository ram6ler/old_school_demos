import 'package:web/web.dart' as web;
import 'package:old_school/old_school.dart';

void main() async {
  const outputColor = 'lightgreen', errorColor = 'orange';
  final terminal = Terminal(
        rows: 35,
        columns: 60,
        container: web.document.getElementById('index')! as web.HTMLElement,
      )
        ..blur()
        ..focus(),
      demos = {
        'blockdude': [
          'Block Dude is a game by Brandon Sterner and',
          'Detached Solutions for the Texas Instruments family',
          'of graphic display calculators. The graphics data for',
          'this demo was pinched directly from the Z80 assembly',
          'code for the calculator game.',
        ],
        'bounce': [
          'Capture the bouncing balls by enclosing them',
          'with your trail.',
        ],
        'emotions': [
          'Mixed Emotions is a little twist on the classic sliding',
          'tiles game to demonstrate mouse support for the terminal.',
          'Click on tiles to slide them to their correct positions,',
          'but you only get to see the correct positions by sliding',
          'the tiles!',
        ],
        'four': [
          'This is the classic game of connect-four. The computer',
          'uses background Monte Carlo simulations to play a fairly',
          'intelligent game.',
        ],
        'mine': [
          'A minesweep clone.',
        ],
        'othello': [
          'The game of Othello (Reversi).',
        ],
        'poker': [
          'Poker squares. The computer uses background simulations',
          'to make decisions using only the same information',
          'available to the player.',
        ],
        'salad': ['Given definitions, find the words in a grid', 'of letters.'],
        'snake': [
          'Snake is version of the infamous snake game that',
          'demonstrates non interrupting keyboard input.',
        ],
        'sokoban': [
          'Mother Hen is a Sokoban clone that demonstrates poking',
          'simple sprite data into the terminal graphics memory.',
        ],
        'wordle': [
          'Word Logic is a Wordle clone that demonstrates a fairly',
          'complex program running in the terminal.',
        ],
      },
      rInfo = RegExp(r'^ *info +(.+) *$'),
      rLoad = RegExp(r'^ *load +(.+) *$');

  void reset() {
    terminal.clear();
    for (final line in [
      ' ',
      '  _____ _   _    _____     _           _',
      ' :     : :_: :  :   __:___: :_ ___ ___: :',
      ' :  :  : : . :  :__   :  _:   : . : . : :',
      ' :_____:_:___:  :_____:___:_:_:___:___:_:',
      ' ',
      ' Welcome to Old School, a library for adding',
      ' old school terminals to your html documents.',
      ' ',
      " Input 'help' for help.",
      ' ',
    ]) {
      terminal.output(line, color: outputColor);
    }
  }

  void help() {
    for (final line in [
      ' ',
      ' Commands',
      ' --------',
      ' ',
      ' reset        Resets this demo.',
      ' help         Shows this information.',
      ' list         Lists the demos available.',
      ' info [demo]  Gives a description of [demo].',
      ' load [demo]  Loads [demo] into this page.',
      ' ',
    ]) {
      terminal.output(line, color: outputColor);
    }
  }

  void list() {
    for (final line in [
      ' ',
      ' Demos',
      ' -----',
      ' ',
      ...[for (final demo in demos.keys) ' - $demo'],
      ' ',
    ]) {
      terminal.output(line, color: outputColor);
    }
  }

  void info(String key) {
    if (demos.keys.contains(key)) {
      for (final line in [
        ' ',
        ...[for (final line in demos[key]!) ' $line'],
        ' ',
      ]) {
        terminal.output(line, color: outputColor);
      }
    } else {
      terminal
        ..newLine()
        ..output(" No demo called '$key' found.", color: errorColor)
        ..output(' Input `list` to see available demos.')
        ..newLine();
    }
  }

  void load(String key) {
    if (demos.keys.contains(key)) {
      web.window.open('$key.html', '_self');
    } else {
      terminal
        ..newLine()
        ..output(" No demo called '$key' found.", color: errorColor)
        ..output(' Input `list` to see available demos.')
        ..newLine();
    }
  }

  reset();
  list();
  while (true) {
    terminal.output(' > ', color: outputColor, newLineAfter: false);
    final command = await terminal.input(length: terminal.columns - 4);
    switch (command.trim()) {
      case 'reset':
        reset();
      case 'help':
        help();
      case 'list':
        list();
      case _:
        if (rInfo.hasMatch(command)) {
          info(rInfo.firstMatch(command)!.group(1)!);
        } else if (rLoad.hasMatch(command)) {
          load(rLoad.firstMatch(command)!.group(1)!);
        } else {
          terminal
            ..newLine()
            ..output(" Not understood. Type 'help' for help.",
                color: errorColor)
            ..newLine();
        }
    }
  }
}
