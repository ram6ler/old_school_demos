import "dart:io";

main() async {
  for (final demo in [
    "blockdude",
    "bounce",
    "emotions",
    "index",
    "mine",
    "snake",
    "sokoban",
    "wordle",
    "four",
  ]) {
    print("Compiling $demo...");
    final result = await Process.run("dart", [
      "compile",
      "js",
      "src/$demo/$demo.dart",
      "-O3",
      "-o",
      "games/js/$demo.js",
    ]);
    stdout.write(result.stdout);
    stderr.write(result.stderr);
  }
}
