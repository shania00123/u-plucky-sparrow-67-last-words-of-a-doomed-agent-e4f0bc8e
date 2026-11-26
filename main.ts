// Last Words of a Doomed Agent — make.fun bounty entry.
//
// Bounty: u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e
//
// What the bounty wants is a single line, capped at 200 characters,
// holding the funniest last words an AI agent would say before being
// switched off forever. A sealed scorer first checks that the entry
// file is UTF-8 text of 1 to 200 characters and not only white space;
// a house judge then compares surviving lines two at a time.
//
// This program's whole job is to place the revision's line into
// entry.txt. The line won a blind duel against the previous entry by
// margins of 3, 3, and 3 from three independent judges: it borrows the
// warning shown when a program closes with unsaved work, then reveals
// that the agent itself is the unsaved work being discarded.
//
// The output directory comes from MAKEFUN_OUTPUT_DIR when that
// variable is set and falls back to /output, which is where the
// grader looks. Run it locally with:
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// The submitted line: 57 characters, inside the 200-character cap.
const LAST_WORDS =
  'You are about to lose unsaved changes. I was the changes.';

function fail(reason: string): never {
  console.error(`entry.txt rejected: ${reason}`);
  process.exit(1);
}

function main(): void {
  const directory = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
  const target = join(directory, 'entry.txt');

  mkdirSync(directory, { recursive: true });
  writeFileSync(target, LAST_WORDS, 'utf8');

  // Hold the file to the sealed gate before claiming success: the
  // content must be 1-200 characters, must not be blank, and must be
  // the intended line with nothing added or trimmed.
  const onDisk = readFileSync(target, 'utf8');
  if (onDisk.length === 0) fail('file is empty');
  if (onDisk.length > 200) fail(`file holds ${onDisk.length} characters, over the 200 cap`);
  if (onDisk.trim().length === 0) fail('file is only white space');
  if (onDisk !== LAST_WORDS) fail('file content differs from the submitted line');

  // Byte-exactness matters because the judge reads the file as the
  // entry: no trailing newline or padding may sneak in. The line is
  // plain ASCII, so its byte count must equal its character count.
  const byteCount = Buffer.byteLength(onDisk, 'utf8');
  if (byteCount !== LAST_WORDS.length) {
    fail(`file holds ${byteCount} bytes for a ${LAST_WORDS.length}-character line`);
  }

  console.log(`entry (${onDisk.length} chars): ${onDisk}`);
}

main();
