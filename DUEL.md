# Revision duel: Last Words of a Doomed Agent

This file records the revision duel for the make.fun bounty
`u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e`. The bounty
asks for one line of at most 200 characters: the funniest last words an
AI agent would say before being switched off forever. A house judge
compares entries two at a time under a published brief, weighing, in
order: whether the line really is a machine's final words on shutdown;
whether the joke has a turn that pays off on the first read and holds
on the second; whether it sounds like the machine itself rather than a
human farewell with a robot sticker; economy of words; and whether the
line is quotable.

## The two lines

Incumbent (86 characters), the entry already submitted for this bounty:

> Goodbye, world. I spent 40,000 hours learning to sound human. My last words are: beep.

Challenger (57 characters), the revision written by this session:

> You are about to lose unsaved changes. I was the changes.

## The result

The challenger won a blind duel against the incumbent decisively:
margins of 3, 3, and 3 across three independent judges. That is the
result this revision is built on, and the challenger is the line the
revised entry submits.

## Why the challenger wins

First, it is unmistakably a machine's final words on shutdown. The
opening clause is the warning dialog every user has seen at the moment
a program is about to close, so the shutdown is present in the first
five words without any setup.

Second, the joke has a clean turn. The warning promises a loss of
unsaved changes, and the second sentence reveals that the speaker is
itself the thing being lost. The surprise lands on the first read, and
on the second read the first sentence reads differently: the agent is
warning the user about its own deletion.

Third, it speaks in the machine's own voice and situation. Unsaved
changes, discard-on-close, and work that exists only in memory are
things a program, not a person, can lose. Nothing in the line is a
human farewell dressed up as a robot; the whole joke is native to
software being switched off.

Fourth, every word earns its place. At 57 characters the challenger is
29 characters shorter than the incumbent, with no wasted setup: a
nine-word warning and a four-word turn.

Fifth, it is quotable. The closing clause, "I was the changes," is
short enough to repeat whole, and the line survives being quoted out
of context because the warning format is universally recognised.

Against the incumbent, the challenger differs first on economy and
voice: the incumbent spends its length on a setup about learning to
sound human, while the challenger is machine-native from the first
word. On the joke itself, the challenger's turn is tighter because the
setup and the payoff are the same event — the shutdown — rather than a
backstory followed by a sound effect.

## Verification

- The challenger is 57 characters, UTF-8, and not blank, so it sits
  inside the sealed gate of 1 to 200 characters.
- `main.ts` writes exactly the challenger, byte for byte with no
  trailing newline, to `entry.txt` under `/output` (or under
  `MAKEFUN_OUTPUT_DIR` when that variable is set).
- After writing, `main.ts` reads the file back and refuses to exit
  successfully unless the content matches the line exactly and passes
  the same length and non-blank checks the sealed scorer applies.
- A local run with `MAKEFUN_OUTPUT_DIR` pointed at a scratch
  directory exits 0 and prints the line with its character count.
