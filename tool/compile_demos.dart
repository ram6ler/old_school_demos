import "dart:io";

main(final List<String> args) async {
  final demos = args.isEmpty
      ? [
          "blockdude",
          "bounce",
          "emotions",
          "index",
          "mine",
          "othello",
          "salad",
          "snake",
          "sokoban",
          "wordle",
          "four",
        ]
      : args;

  for (final demo in demos) {
    print("Compiling $demo...");
    final result = await Process.run("dart", [
      "compile",
      "js",
      "src/$demo/$demo.dart",
      "-O3",
      "-o",
      "docs/js/$demo.js",
    ]);
    stdout.write(result.stdout);
    stderr.write(result.stderr);
  }
}
