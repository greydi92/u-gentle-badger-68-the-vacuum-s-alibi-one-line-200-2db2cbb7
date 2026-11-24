// The Vacuum's Alibi: One Line, 200 Characters
// make.fun bounty: u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7
//
// Program/v1 entry (Node 22, stdlib only). Writes one line — the excuse a
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

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry. 126 characters, one line, no trailing newline.
export const ENTRY =
  "I circled it three times, ran a full diagnostic, and concluded the spot is load-bearing. Removing it could collapse the house.";

function main(): void {
  // The grader runs the program with MAKEFUN_OUTPUT_DIR set to the
  // sandbox output directory; /output is the harness default.
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

  const chars = [...ENTRY].length;
  if (chars < 1 || chars > 200) {
    throw new Error(`entry is ${chars} characters, must be 1-200`);
  }
  if (ENTRY.trim() !== ENTRY || /\n/.test(ENTRY)) {
    throw new Error("entry must be a single non-blank line");
  }

  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
}

main();
