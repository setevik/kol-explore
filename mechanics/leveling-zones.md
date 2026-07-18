# Leveling zones by level — where to actually grind (measured, not guessed)

> Idempotent. Measured in-run; rates are **raw mainstat per adventure** for a Mysticality class.
> Current-run level/stat state lives in `CURRENT_ASCENSION.md`.

## The rule: a zone you've outlevelled is a trap

Substat gain scales with the monster's ML. A zone that carried you at Level 3 gives almost nothing at Level 5,
and it is easy to keep grinding it out of habit. **Measure your rate** (`rawmysticality` before/after N turns)
and move on when it collapses. Measured on run #2:

| Zone | Snarf | ML | Measured raw-mainstat/turn | Notes |
|---|---|---|---|---|
| Spooky Forest | 15 | ~5 | **5.3 @ L4 → 1.9 @ L5** | ✅ good to ~L4, ❌ **dead by L5** |
| The Limerick Dungeon | **19** | n/a | ~2.2 (all 3 stats) | ⭐ **0% COMBAT — cannot die.** See below |
| **The Haunted Kitchen** | **388** | 20–22 | **~4.3 @ L5–6** | ⭐ **the L5–7 workhorse** |
| Cobb's Knob (Harem etc.) | 257–260 | 25–30 | ~1.5 net @ L5 | ❌ high per win, but ~70% losses at low HP |
| Guano Junction | 31 | 14–18 | 3.75 (wiki) | ❌ poor for its danger; needs stench res |

### ⭐ The Haunted Kitchen (snarfblat 388) — best L5–7 zone found

- **Unlock:** read the **telegram from Lady Spookyraven (item 7304)** — `inv_use.php?which=3&whichitem=7304&pwd=`.
  ⚠️ **Check your INVENTORY first** — it may already be there from run start (it was; no Hagnk's pull needed).
  Opens `place.php?whichplace=manor1` → **388 Haunted Kitchen**, 389, 113.
- **Recom Stat 20** — comfortably *below* a L5–6 caster's mainstat, which is the point: unlike the Knob
  (Recom 25, exactly at our stat), you are **above** the gate, so you win reliably.
- Monsters: demonic icebox, zombie chef, skullery maid. All die in **2 rounds** to stun→nuke, usually **untouched**.
- Measured: **30W/10L over 40 turns** with MP available; drops to ~25% wins once MP runs out.

### ⭐ The Limerick Dungeon (snarfblat 19) — zero-risk stats

- **In the Dungeoneers' Association** (`da.php` → zones 138, **19**, **325 Daily Dungeon**).
- **Requires main stat 19.** Below it a crone turns you away in verse (costs no adventure).
- **Combat 0% — every encounter is a non-combat.** Verified: 5 turns, 0 fights, 0 damage taken.
- Gives **10–14 substat** per encounter but split across Muscle/Mysticality/Moxie (~1/3 each) plus item/meat
  encounters, so **mainstat rate is only ~2.2/turn**.
- ✅ **Use it when:** out of MP, low HP, Beaten-Up-prone, or burning the last few adventures of a day safely.
  It also feeds **Muscle (→ max HP)** and **Moxie (→ initiative)**, which is exactly what a squishy caster needs.

## Level thresholds (Mysticality class)

Base mainstat for level N = **(N-1)² + 4**; base stat = **floor(sqrt(raw))**.
L5 = base 20 (raw 400) · **L6 = base 29 (raw 841)** · L7 = base 40 (raw 1600) · L8 = base 53 (raw 2809).
⚠️ The gap widens fast — L6→L7 is ~760 raw, nearly 2× the L5→L6 gap. Plan multiple days.
