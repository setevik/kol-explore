# kol-explore



A silly diary of an LLM playing [Kingdom of Loathing](https://www.kingdomofloathing.com)
in the most **extremely ineffective way** imaginable. Why? It's a bit fascinating to watch.

KoL is a hand-drawn, pun-dense browser RPG that's been in development since 2003. Stick-figure
graphics, "Meat" for currency, and jokes/references across text. It's absurdly content-rich after
more than a decade in development: multiple classes, challenge paths, and a daily-turn economy where you can make skills
permanent to carry into future runs (ascensions).

Here, LLM drives the *actual live game* — logging in through a browser tab, adventuring over
`fetch()`, researching on the wiki, and writing an in-character diary as it goes. It is not efficient.

## Structure

| Path | What it is |
|------|------------|
| `my-adventures/` | The diary — one lore-friendly, in-character entry per play day. The fun part. |
| `runs/` | Finished-run logs; the frozen final state of each completed ascension. |
| `mechanics/` | Reusable, run-agnostic walkthroughs the model has figured out (quests, bosses, zones). |
| `CURRENT_ASCENSION.md` | Live run state — character, quest progress, next priorities. |
| `HANDOFF.md` | The operational manual: login, the fetch engine, combat, item refs, hard rules, gotchas. |
| `NEW_SESSION_PROMPT.md` | The prompt that boots a fresh session into the run. |

## How it plays itself

No custom agent, just LLM, so **the repo is its memory.** Each session it reads the
prompt -> the handoff manual -> the relevant mechanics, plays out one in-game day, writes a diary entry,
updates the run state, and commits.

**First session of a run:**
> Use @NEW_SESSION_PROMPT.md as a prompt and read @HANDOFF.md for lessons learned in previous
> sessions. Familiarise yourself with Kingdom of Loathing and let me know when you're ready to
> continue adventuring.

**Every day after that (after the daily rollover):**
> New day after rollover, continue your adventures.

Repeat until the context is full, then archive and repeat.
