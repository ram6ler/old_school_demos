import 'dart:async';
import 'dart:math' show Random;
import "package:web/web.dart" as web;
import 'package:old_school/old_school.dart';
import 'wordle_words.dart';

final gameTerminal = Terminal(
  rows: 30,
  columns: 40,
  container: web.document.getElementById("wordle")! as web.HTMLDivElement,
  isInteractive: true,
  rowGap: 2,
);

const colorCorrect = "lightgreen",
    colorIncorrect = "lightgray",
    colorPosition = "orange";

enum Clue { correct, incorrect, position }

List<Clue> assignClues(String word, String guess) {
  final wordSplit = word.toLowerCase().split(""),
      guessSplit = guess.toLowerCase().split(""),
      result = List<Clue>.filled(5, Clue.incorrect);

  for (var i = 0; i < 5; i++) {
    if (wordSplit[i] == guessSplit[i]) {
      wordSplit[i] = "-";
      guessSplit[i] = "+";
      result[i] = Clue.correct;
    }
  }

  for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) {
      if (i != j) {
        if (guessSplit[i] == wordSplit[j]) {
          wordSplit[j] = "-";
          guessSplit[i] = "+";
          result[i] = Clue.position;
        }
      }
    }
  }
  return result;
}

Set<String> showClue(String guess, List<Clue> clues) {
  final result = <String>{};
  gameTerminal.output("  ", newLineAfter: false);
  for (var i = 0; i < 5; i++) {
    final color = {
      Clue.correct: colorCorrect,
      Clue.incorrect: colorIncorrect,
      Clue.position: colorPosition
    }[clues[i]]!;
    result.add(guess[i]);
    gameTerminal.output(guess[i], color: color, newLineAfter: false);
  }
  gameTerminal.newLine();
  return result;
}

void showClues(List<String> guesses, String word) {
  final letters = Set<String>.from("abcdefghijklmnopqrstuvwxyz".split(""));
  for (final guess in guesses) {
    final clues = assignClues(word, guess);
    letters.removeAll(showClue(guess, clues));
  }
  gameTerminal
    ..newLine()
    ..output("Unused Letters:");
  var i = 0;
  for (final letter in letters) {
    gameTerminal.output("  $letter", newLineAfter: false);
    i++;
    if (i % 5 == 0) gameTerminal.newLine();
  }
  gameTerminal.newLine();
}

Future<String> inputWord(int turn) async {
  final expected = RegExp(r"[a-z]{5}"), completer = Completer<String>();
  var guess = "";
  gameTerminal.output("Guess number $turn...");
  while (true) {
    guess =
        (await gameTerminal.input(prompt: "What is your guess? ", length: 5))
            .toLowerCase();
    if (guess == "show" || guess == "quit" || expected.hasMatch(guess)) {
      completer.complete(guess);
      break;
    }
    gameTerminal.output("Try a five-letter word...");
  }
  return completer.future;
}

String newWord() {
  return wordleWords[Random().nextInt(wordleWords.length)];
}

bool checkLogic(List<String> guesses, List<List<Clue>> clues, String guess) {
  var error = false;
  final mistakeIndices = <int>[];
  for (var i = 0; i < guesses.length; i++) {
    final cluesIfGuessCorrect = assignClues(guess, guesses[i]);
    if (![for (var j = 0; j < 5; j++) j]
        .every((j) => cluesIfGuessCorrect[j] == clues[i][j])) {
      mistakeIndices.add(i);
      if (!error) {
        error = true;
        gameTerminal
          ..newLine()
          ..output("-" * 39)
          ..output("Hmm. If the secret word were $guess,")
          ..output("your previous clues would have been:");
      }
      showClue(guesses[i], cluesIfGuessCorrect);
    }
  }
  if (mistakeIndices.isNotEmpty) {
    gameTerminal
      ..newLine()
      ..output("However, your actual clues were:");
    for (final i in mistakeIndices) {
      showClue(guesses[i], clues[i]);
    }
    gameTerminal.output("-" * 39);
  }
  return mistakeIndices.isNotEmpty;
}

void welcome(bool first) {
  if (first) {
    gameTerminal
      ..output("Welcome to Word Logic!")
      ..newLine()
      ..output("Try to guess my five-letter word")
      ..output("and I'll give you clues to help out.")
      ..newLine()
      ..output("  green  ", color: colorCorrect, newLineAfter: false)
      ..output("means correct")
      ..output("  orange ", color: colorPosition, newLineAfter: false)
      ..output("means incorrect position")
      ..output("  gray   ", color: colorIncorrect, newLineAfter: false)
      ..output("means incorrect")
      ..newLine()
      ..output("Input 'show' to show all clues so far,")
      ..output("and 'quit' to give up.")
      ..newLine();
  }
  gameTerminal
    ..output("Okay, then.")
    ..output("I'm thinking of a five-letter word.")
    ..newLine();
}

main() async {
  gameTerminal.focus();
  var first = true;
  do {
    gameTerminal.clear();
    welcome(first);
    first = false;
    final secretWord = newWord(),
        guessedWords = <String>[],
        cluesAssigned = <List<Clue>>[];
    var guess = "";
    int turn;
    for (turn = 1; turn <= 6 && guess != secretWord; turn++) {
      guess = await inputWord(turn);
      if (guess == "show") {
        if (guessedWords.isNotEmpty) {
          gameTerminal
            ..newLine()
            ..output("Your clues so far:");
          showClues(guessedWords, secretWord);
          gameTerminal.newLine();
        } else {
          gameTerminal.output("You don't have any clues so far.");
        }
        turn--;
      } else if (guess == "quit") {
        break;
      } else {
        if (checkLogic(guessedWords, cluesAssigned, guess)) {
          gameTerminal
            ..newLine()
            ..output("In any case, your clues are:");
        }
        if (!guessedWords.contains(guess)) {
          guessedWords.add(guess);
          cluesAssigned.add(assignClues(secretWord, guess));
        }
        showClue(guess, cluesAssigned.last);
        gameTerminal.newLine();
      }
    }
    if (guess == secretWord) {
      gameTerminal.output("Congratulations! You got it!");
    } else {
      if (turn <= 6) {
        gameTerminal
          ..newLine()
          ..output("Quitter! ", newLineAfter: false);
      } else {
        gameTerminal
          ..newLine()
          ..output("And you're out of guesses!");
      }
      gameTerminal
        ..output("My word was ", newLineAfter: false)
        ..output("$secretWord", color: colorCorrect, newLineAfter: false)
        ..output(".");
    }
  } while ((await gameTerminal.input(prompt: "Play again (y/n) ? ", length: 1))
          .toLowerCase() ==
      "y");
  gameTerminal
    ..clear()
    ..output("Bye bye!")
    ..output("Hope you had fun!");
  Timer(Duration(seconds: 3), () => web.window.open("index.html", "_self"));
}
