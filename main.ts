// The Long Roast: Lawmakers and the File They Cannot Convert
// One satirical sentence, written to /output/entry.txt with no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "He wants to regulate artificial intelligence, cryptocurrency, and the entire internet, yet his office still emails the intern asking how to turn a Word document into a PDF, which tells you everything about the law he is about to write.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
