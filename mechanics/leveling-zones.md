# Leveling zones by level — where to actually grind (measured, not guessed)

> Idempotent. Measured in-run; rates are **raw mainstat per adventure** for a Mysticality class.
> Current-run level/stat state lives in `CURRENT_ASCENSION.md`.

## 🚨 THE #1 RULE: pick zones by WIN RATE, not by ML (measured)

A monster you lose to is worth **zero** — and it costs you the turn *plus* a campground rest. So **net** stat/turn
is dominated by win rate, not by the zone's ML. Measured back-to-back at Level 7, same character, same day:

| Zone | ML | Record | raw mainstat/turn |
|---|---|---|---|
| Haunted Gallery (394) | high | **3W / 22L** | **1.2** |
| Haunted Ballroom (395) | **65** | 14W / 24L | ~6.7 (but bleeding rests) |
| **Haunted Kitchen (388)** | 20–22 | **45W / 3L** | **5.0** ⭐ |

The Kitchen's monsters are worth far *less* each, and it still won by 4× because nearly every fight landed.
**Do not "graduate" from a zone just because it feels beneath your level** — measure, then choose.

⚠️ **Before blaming a zone, check your MP.** Both bad rows above were really **MMJ exhaustion**: at 0 MP you
"twiddle your thumbs" and lose fights you would otherwise win in 2 rounds. **Buy 15–20 magical mystery juice
(guild store row 527, 100 meat) EVERY day** — it is the cheapest stat/turn upgrade available.

## The rule: a zone you've outlevelled is a trap

Substat gain scales with the monster's ML. A zone that carried you at Level 3 gives almost nothing at Level 5,
and it is easy to keep grinding it out of habit. **Measure your rate** (`rawmysticality` before/after N turns)
and move on when it collapses. Measured in-game:

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

Base mainstat for level N = **(N-1)² + 4**; raw substats = base². (Matches every level hit so far.)
L5 = base 20 (raw 400) · **L6 = base 29 (raw 841)** · L7 = base 40 (raw 1600) · L8 = base 53 (raw 2809) ·
**L9 = base 68 (raw 4624)** · **L10 = base 85 (raw 7225)** · L11 = base 104 (raw 10816).
⚠️ **The gaps are BRUTAL up here** — L9→L10 alone is ~2,600 raw (≈ a base 68→85 climb). At ~5 raw/turn in the
Kitchen that's 500+ turns; even at ~14/turn in a high-ML zone it's ~180 turns. **Plan L10 as a multi-day push**,
and don't trust a single "almost there" reading. (⚠️ An earlier note wrongly said "L10 = raw 5,625" — verified WRONG:
still Level 9 at base 78 / raw 6,113.)


## 🤍 Whitey's Grove (snarf 100) — unlocked by accepting the guild's White Citadel errand

⭐ **Unlocked for free just by ACCEPTING Olaf's White Citadel quest** at the Muscle guild (`guild.php?place=paco`,
choice 930 → "Yeah, okay.") — no turns required to open it.
✅ **Measured (Seal Clubber L8, Muscle ~90): 35W / 0L**, good stat gains and ~450 meat per 26 turns.
Monsters: white chocolate golem · whitesnake · Knight in White Satin · white lion.

**Its three noncombats each offer stats OR items — pick by what you need** (all verified on the wiki):

| Choice | Stats option | Item option | Item option |
|---|---|---|---|
| **73** *Don't Fence Me In* | Whitewash the fence → **20–30 Muscle** | Steal the fence → white picket fence | Jump the fence → wedding cake + white rice |
| **74** *The Only Thing About Him…* | Show him some moves → 20–30 Moxie | Show him a good time → **3 boxes of wine** 🍷 | steal his stuff → mullet wig |
| **75** *Rapido!* | Steer for the cave → 21–30 Myst | Steer for the trees → **3 jars of white lightning** 🍷 | laundromat → white collar |

🍷 **Note choices 74 and 75 pay BOOZE in threes** — a genuinely good source of drink-step material for a
character still filling a 14 cap off single daily pulls.
