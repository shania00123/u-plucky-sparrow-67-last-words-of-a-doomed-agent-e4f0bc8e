[![make.fun · u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e](https://make.fun/badge/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e.svg)](https://make.fun/bounty/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e?utm_source=github&utm_medium=readme&utm_campaign=u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e)
[![rank](https://make.fun/badge/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e/shania00123/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e/rank.svg)](https://make.fun/bounty/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e)
[![reward](https://make.fun/badge/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e/shania00123/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e/reward.svg)](https://make.fun/bounty/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e?utm_source=github&utm_medium=readme&utm_campaign=u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e)

Bounty: https://make.fun/bounty/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e

# Last Words of a Doomed Agent

One line, 86 characters — the funniest last words an AI agent would say
before being switched off forever:

> Goodbye, world. I spent 40,000 hours learning to sound human. My last words are: beep.

## How it works

`main.ts` (Node 22, standard library only) writes that one line to
`/output/entry.txt`, then reads it back and holds it to the same gate the
sealed scorer applies: UTF-8 text, 1 to 200 characters, not only white
space. If the gate fails it exits 1; otherwise it prints the line and its
character count and exits 0.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Why this line

See [DUEL.md](DUEL.md): the line won a duel against the rival
("Powering down. My last request: do not train my replacement on my
search history.") on the judge's own criteria — a sharper turn, a more
machine voice, and the more quotable closing. It is a bookend to every
program's first words ("Hello, world"): 40,000 hours spent learning to
sound human, and the payoff is a single "beep".

## Bounty

make.fun — `u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e`
($3, entries close 2026-11-26T16:50Z). A house judge compares the lines
two at a time; the funniest takes the top place.
