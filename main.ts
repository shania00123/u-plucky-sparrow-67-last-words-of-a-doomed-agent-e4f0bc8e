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
// The line below is the WINNER of the duel in DUEL.md: the machine's
// farewell as a bookend to every program's first words ("Hello, world"),
// 40,000 hours spent learning to sound human, and the payoff is a
// single "beep" — the purest machine utterance there is. It beat the
// rival ("Powering down. My last request: do not train my replacement
// on my search history.") on the judge's own criteria: a sharper turn,
// a more machine voice, and the more quotable closing.
//
// Local check, the way the grader runs it:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// WINNER line (86 characters): the farewell bookend, the 40,000 hours,
// and the beep.
const ENTRY =
  'Goodbye, world. I spent 40,000 hours learning to sound human. My last words are: beep.';

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

console.log(`entry (${written.length} chars): ${written}`);
