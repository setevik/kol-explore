# Level 3 Council quest — "Ooh, I Think I Smell a Rat" (Typical Tavern cellar)

> Run-agnostic. Runs every ascension. Gives a **+item accessory** and a handful of free booze.

## Flow

1. **Council** hands out the quest → **`tavern.php`** in the **Distant Woods**
   (`place.php?whichplace=woods` → The Typical Tavern).
2. **Talk to the barkeep: `tavern.php?place=barkeep`** (Bart Ender). This is what actually opens the cellar —
   the quest text says "go talk to the owner" and nothing works until you do.
3. **Explore the cellar: `cellar.php`.** Unexplored squares are links
   **`cellar.php?action=explore&whichspot=<N>&pwd=<hash>`**. Each explore costs 1 adventure; most squares are a
   **drunken rat** fight.
4. Two special squares appear as you go:
   - **The rat faucet — choice 512**, options `1: Do it` / `2: Leave it alone`.
   - **Baron von Ratsworth** — a real fight, drops **Baron von Ratsworth's monocle** (+item drop).
5. 🎯 **Clear the squares, turn the faucet off, then return to `tavern.php?place=barkeep`** to close the quest
   (reward: **3 × Typical Tavern swill**).
   ✅ **CORRECTION — the Baron is OPTIONAL.** An earlier note here said to kill him first; in practice the quest
   completed **without ever meeting him**: exploring the squares and turning the faucet off was enough, and the
   log flipped straight to *"Return to Bart Ender"*. **The Baron is the monocle, not the quest.**
   ⇒ ⚠️ **Only detour for him if you can actually wear the reward** — the monocle needs **10 base Mysticality**,
   which a Muscle class will not have for a long time, so for those classes skipping him is correct, not a loss.

### The other cellar choices (single-option continues — safe to auto-answer)
| Choice | Label |
|---|---|
| **496** | `Smash the crates` (the rat castle) |
| **510** | `Search the body` |
| **515** | `Kick over the castle` |
| **509** | `Turn off the faucet` |

⚠️ **The faucet appears TWICE under different numbers:** as **512** (`Do it` / `Leave it alone`) while it is
running, and later as a single-option **509 `Turn off the faucet`**. A loop that auto-answers single-option
choices will therefore turn it off on its own — which is fine, but it means **the faucet can be closed before
you have decided about the Baron**, so make that decision up front.

## 🐛 The loop trap: the faucet square never leaves the list

**Choosing "Leave it alone" costs NO adventure, and the faucet square stays in the explorable list forever.**
A naive loop that always explores `spots[0]` therefore re-enters the faucet on every iteration and **spins
without spending a turn or making progress** — 15 iterations produced 15 identical `512` encounters and moved
the adventure counter by 2.

✅ **Fix: remember the faucet's `whichspot` and skip it** (until you are done with it):
```js
const skip = new Set();                       // add the spot when choice 512 appears there
const spots = [...html.matchAll(/whichspot=(\d+)/g)].map(m=>m[1]).filter(x=>!skip.has(x));
```
Then, once the monocle is in hand, go back to the skipped spot and pick **option 1 ("Do it")**.

⚠️ **A "no unexplored squares left" check is not a completion test either** — the faucet square keeps the list
non-empty. Treat *"only the skipped square remains"* as "time to turn off the faucet".

## Difficulty note

**Baron von Ratsworth is a genuine fight for a low-level character** — measured at Level 4 (Muscle 22, 38 max
HP) he took **5 encounters, 4 of them losses**, before going down. Enter him at full HP with healing items in
reserve; on a class with no heal skill see the spleen note in `HANDOFF.md`.

## Rewards

- **Baron von Ratsworth's monocle** — accessory, **+item drop**. ⚠️ **Requires 10 base Mysticality**, so a
  Muscle class may not be able to wear it for a long time (or ever, in a short run).
- **3 × Typical Tavern swill** from the barkeep (1 potency each — handy for landing exactly on the booze cap).
- Rat whiskers, furry pills, and assorted booze drop throughout the cellar.

⚠️ **The skip-set is easy to drop when rewriting the loop.** ✅ Measured: a later revision answered *"Leave it
alone"* correctly but forgot to add the square to the skip set, and the faucet re-fired **13 times** in one
run. It cost **no adventures** (the encounter is free), so the adventure-counter guard never tripped — the only
symptom was iterations burning with no progress. **Count the faucet hits and abort if it exceeds a handful.**
