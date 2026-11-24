// The Long Roast: Lawmakers and the File They Cannot Convert
// One satirical sentence, written to /output/entry.txt with no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "He wants to regulate artificial intelligence, cryptocurrency, and the entire internet, yet his office still emails the intern asking how to turn a Word document into a PDF, which tells you everything about the law he is about to write.";

// Guard: one sentence, 1-320 chars, non-blank, exactly one sentence-ending period.
if (ENTRY.trim().length === 0) throw new Error("entry must not be blank");
if (ENTRY.length < 1 || ENTRY.length > 320)
  throw new Error(`entry must be 1-320 characters, got ${ENTRY.length}`);
const periods = [...ENTRY].filter((ch) => ch === ".").length;
if (periods !== 1) throw new Error(`entry must be exactly one sentence, found ${periods} periods`);
if (!ENTRY.endsWith(".")) throw new Error("entry must end with a period");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
