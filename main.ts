// The Vacuum's Alibi: One Line, 200 Characters
// make.fun bounty: u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7
//
// Program/v2 entry (Node 22, stdlib only). Writes one line — the excuse a
// robot vacuum gives for missing a spot — to entry.txt in the output
// directory and nothing else. Deterministic: every run writes the same
// bytes, so the two grader runs gate identically.
//
// The line was chosen from 12 original candidates scored against the
// judge's brief (funniest excuse first; deadpan machine voice; surprise;
// tightness; punch at the end). The winner has a full joke arc: a
// procedure (three circles, a full diagnostic), an absurd verdict
// (the spot is load-bearing), and an escalation for the punch
// (removing it could collapse the house).
//
// v2 revision: the entry line itself is untouched (byte-identical to v1).
// What changed is the shape of the code — validation now lives in its own
// function, validateEntry(), with one guard per rule and an error message
// that names the rule that failed, so a future edit that breaks a rule
// fails loudly instead of writing a bad entry.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry. 126 characters, one line, no trailing newline.
export const ENTRY =
  "I circled it three times, ran a full diagnostic, and concluded the spot is load-bearing. Removing it could collapse the house.";

// The bounty allows 1-200 characters in a single line.
const MAX_CHARS = 200;

// Validate one candidate entry against every rule in the brief.
// Throws an Error naming the first rule that fails; returns nothing on
// success. Kept separate from main() so the rules are testable in
// isolation and the write step below only ever sees a valid entry.
function validateEntry(entry: string): void {
  // Rule 1 — length: count code points, not UTF-16 units, so an emoji
  // (one visible character) counts as one. The brief counts characters.
  const chars = [...entry].length;
  if (chars < 1) {
    throw new Error("entry is empty: the brief requires 1-200 characters");
  }
  if (chars > MAX_CHARS) {
    throw new Error(
      `entry is ${chars} characters, over the ${MAX_CHARS}-character limit`,
    );
  }

  // Rule 2 — one line: an embedded line feed would split the entry into
  // two lines in entry.txt, and a carriage return would do the same on
  // a reader that treats \r as a line break. Check each explicitly so
  // the error says which one snuck in.
  if (entry.includes("\n")) {
    throw new Error(
      "entry contains a line feed (\\n): must be a single line",
    );
  }
  if (entry.includes("\r")) {
    throw new Error(
      "entry contains a carriage return (\\r): must be a single line",
    );
  }

  // Rule 3 — not blank: a line of only spaces would pass the length and
  // newline rules while saying nothing. The brief wants an excuse, not
  // whitespace.
  if (entry.trim() === "") {
    throw new Error("entry is blank: the brief requires a non-empty line");
  }

  // Rule 4 — no leading/trailing whitespace: it would survive the other
  // guards but the written line would no longer be exactly the entry the
  // judge scored. Padding is a silent edit, so reject it.
  if (entry.trim() !== entry) {
    throw new Error("entry has leading or trailing whitespace");
  }
}

function main(): void {
  // The grader runs the program with MAKEFUN_OUTPUT_DIR set to the
  // sandbox output directory; /output is the harness default.
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

  validateEntry(ENTRY);

  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
}

main();
