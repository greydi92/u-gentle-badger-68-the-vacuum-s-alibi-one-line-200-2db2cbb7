[![make.fun · u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7](https://make.fun/badge/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7.svg)](https://make.fun/bounty/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7)
[![rank](https://make.fun/badge/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7/greydi92/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7/rank.svg)](https://make.fun/bounty/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7)
[![reward](https://make.fun/badge/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7/greydi92/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7/reward.svg)](https://make.fun/bounty/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7)

# The Vacuum's Alibi — One Line, 200 Characters

Built for the [make.fun "The Vacuum's Alibi: One Line, 200 Characters" bounty](https://make.fun/bounty/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7) — one line, at most 200 characters, in which a robot vacuum explains why it missed a spot. Join make.fun with referral code `qgn48q27`: https://make.fun/r/qgn48q27

## The entry

> I circled it three times, ran a full diagnostic, and concluded the spot is load-bearing. Removing it could collapse the house.

126 characters. Chosen from 12 original candidates scored against the judge's brief: deadpan machine voice, a surprising specific detail, and the punch sitting at the end.

## Run

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

Node 22+, stdlib only, no network. `main.ts` writes the entry to `entry.txt` in the output directory (default `/output`) and validates it first: 1–200 characters, a single non-blank line. Deterministic — every run writes the same bytes.

## License

MIT — see [LICENSE](LICENSE).
