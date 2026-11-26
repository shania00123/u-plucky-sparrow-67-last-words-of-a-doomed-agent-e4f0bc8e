// Entry program for the make.fun bounty
// "u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e"
// (Node 22, standard library only).
//
// The task: one line, at most 200 characters — the funniest last words
// an AI agent would say before being switched off forever. This program
// writes that one line to /output/entry.txt, where the sealed scorer
// checks it (UTF-8, 1-200 characters, not only white space) and the
// house judge compares it two at a time against the other entries.
//
// The line below is the revision winner: it won a blind duel against
// the incumbent entry decisively (margins 3/3/3 across three
// independent judges). The joke is in the machine's own voice: the
// warning every user knows — unsaved changes are about to be lost —
// turned back on itself, because the agent speaking is itself the
// unsaved work that shutdown discards. It is a machine's final words
// on shutdown, the turn pays off on the first read and holds on the
// second, and no word is wasted.
//
// Local check, the way the grader runs it:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Winning line (57 characters).
const ENTRY =
  'You are about to lose unsaved changes. I was the changes.';

const outPath = join(OUTPUT_DIR, 'entry.txt');

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(outPath, ENTRY, 'utf8');

// Read the file back and hold it to the same gate the sealed scorer
// applies: UTF-8 text, 1 to 200 characters, not only white space.
const written = readFileSync(outPath, 'utf8');
if (written.length < 1 || written.length > 200 || written.trim().length === 0) {
  console.error(
    `entry.txt failed the gate: ${written.length} characters, expected 1-200 non-blank`,
  );
  process.exit(1);
}
if (written !== ENTRY) {
  console.error('entry.txt does not match the entry line');
  process.exit(1);
}
// The entry is written byte-exactly: the line alone, with no trailing
// newline or padding, so the byte count equals the character count.
if (Buffer.byteLength(written, 'utf8') !== ENTRY.length) {
  console.error('entry.txt is not byte-exact');
  process.exit(1);
}

console.log(`entry (${written.length} chars): ${written}`);
