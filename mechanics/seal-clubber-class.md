# Seal Clubber (Muscle) — class specifics

> Run-agnostic. Companion to `pastamancer-class.md`. Covers the guild, the skill tree, the class resource,
> and the early combat standard. Current-run skill/meat state lives in `CURRENT_ASCENSION.md`.

## 🥊 The class resource is FURY, not MP

🚨 **This is the single biggest difference from a caster and it is easy to misdiagnose.** A fresh Seal Clubber
has **max MP 1** (Mysticality 1), and it stays tiny — at Level 3 with base Mus 14 it was still only **MP 4**.
Do **not** read that as "MP-starved"; the class simply doesn't run on MP.

- `api.php?what=status` exposes a **`fury`** field (Pastamancers have `pastathrall` in the same slot-ish role).
  Fury is built in combat and spent on the class's big attacks.
- ⇒ **Do not port the caster MP-economy playbook here.** The whole `topMP` ladder, "keep MP topped", and
  "Mortar → Cannelloni" combat standard in `HANDOFF.md` are Mysticality-class advice and **do not apply**.
- ⇒ **A permed `Cannelloni Cocoon` (20 MP) is unusable for the first several levels** on this class even
  though it carries over. Plan HP recovery around **items** early on.

## The guild: The Brotherhood of the Smackdown

`guild.php` → **Gunther, Lord of the Smackdown**. Locked until you pass the challenge, same as every class.

### ✅ The membership challenge — the sausage-measuring competition
> *"Our usual test of manhood is a sausage-measuring competition. The Knob Goblins of the Nearby Plains are
> the Kingdom's premier sausage-makers… find the biggest sausage you can."*

- Adventure in **The Outskirts of Cobb's Knob = `adventure.php?snarfblat=114`** (reached via
  `place.php?whichplace=plains`). ⚠️ **Not 118** — that snarfblat returns an empty page.
- The sausage arrives as **choice 543**, whose only option is *"Grab the sausage, so to speak. I mean…
  literally."* ✅ Fired within ~7 turns of entering the zone.
- Return to **`guild.php?place=challenge`** — no form to submit, just visiting hands it over. An **11-inch**
  sausage was accepted enthusiastically; the size appears to be flavour, not a gate.

### Guild NPCs / links
| Link | Who |
|---|---|
| `guild.php?place=trainer` | **Torg the Trainer** — buy skills |
| `guild.php?place=scg` | Grignr, the Seal Clubber (later tasks) |
| `guild.php?place=ocg` | Terri, the Turtle Tamer |
| `guild.php?place=paco` | Olaf the Janitor — the guild **Meatcar** |

## ⭐ Guild stores are split by STAT GROUP (reusable across all six classes)

`shop.php?whichshop=guildstoreN` — visiting the wrong one returns
*"Uh Oh! Only <classes> may shop here."*

| Shop | Serves |
|---|---|
| `guildstore1` | **Moxie** — Disco Bandit, Accordion Thief |
| `guildstore2` | **Mysticality** — Pastamancer, Sauceror |
| **`guildstore3`** | **Muscle** — Seal Clubber, Turtle Tamer (**"The Smacketeria"**) |

✅ **NPC guild stores deliver straight to inventory and are NOT subject to the Ronin 1-per-day pull limit** —
in Ronin they are the real supply line (see `ronin-softcore-rules.md`).

### The Smacketeria stock (`whichshop=guildstore3`)
| Row | Item | Meat |
|---|---|---|
| **536** | **Medicinal Herb's medicinal herbs** (item 1274) — HP restore | **100** ⭐ the early HP battery |
| 537 | cheap wind-up clock | 200 |
| 535 | blood of the Wereseal | 500 |
| 534 | enchanted brass knuckles (off-hand) | 1,000 |
| 539 | seal-blubber candle | 100 |
| 540 / 541 / 542 / 543 | figurine &c. | 150 / 250 / 500 / 500 |
| 538 | — | 50 |

## Buying skills

POST `guild.php` with `action=buyskill` + **`skillid=<SHORT id>`** — the short id, not the 4-digit skill id
(Lunge Smack is `whichskill=1004` in its description link but **`skillid=4`** in the purchase form).
Scrape both from the trainer page together:
```js
/whichskill=(\d+)[\s\S]{0,300}?>([A-Z][^<]{2,40})<\/a>[\s\S]{0,300}?name=skillid value=(\d+)/g
```
✅ **Measured costs: Level 1 skills 125 meat · Level 2 250 · Level 3 500.** Cheap — buy every skill as it
unlocks; re-visit the trainer **every level** (this was a documented blind spot for the Pastamancer too).

### The skill tree (from the trainer page)
| Lvl | Skills |
|---|---|
| 1 | Lunge Smack · Fortitude of the Muskox |
| 2 | Hibernate · Audacity of the Otter |
| 3 | Cold Shoulder · Blubber Up |
| 4 | Wrath of the Wolverine · Thrust-Smack |
| 5 | Buoyancy of the Beluga · Super-Advanced Meatsmithing |
| 6 | Scowl of the Auk · Thirst of the Weasel |
| 7 | Hide of the Walrus · Furious Wallop |
| 8 | Claws of the Walrus · Club Foot |
| 9 | Tongue of the Walrus · Seething of the Snow Leopard |
| 10 | Ire of the Orca · Lunging Thrust-Smack |
| 11 | Rage of the Reindeer · Batter Up! |
| 12 | Double-Fiste… |

## Early combat standard

✅ **Plain `fight.php?action=attack` is enough through the early Knob zones** — **43 wins / 0 losses** across
Levels 2–3 in snarf 114 with an **astral bludgeon**, needing **zero heals**. A Muscle class is markedly
sturdier at this stage than a caster (whose max HP ≈ base Muscle + 3 and who loses fights to initiative).

⚠️ **The astral bludgeon is TWO-HANDED** — it blocks off-hand items, so the Smacketeria's *enchanted brass
knuckles* cannot be worn alongside it. Pick one.

## Food & booze at low level (class-independent but bites hardest here)

- The **general store** (`shop.php?whichshop=generalstore`) sells 1-fullness / ~1-adventure fillers at ~40
  meat: **cup of lukewarm tea (row 644, item 7033)**, **pickled egg (row 646, item 7032)**, fortune cookie
  (item 61). *bowl of cottage cheese* (item 49) is 2 fullness / 2 adv. ✅ Unlimited — NPC shop.
- ⚠️ At Level 2–3 almost everything better is **level-gated**, so expect a ~1 adv/fullness day-1 meter.
  Filling 15 fullness this way costs ~600 meat and yields ~15 adventures — still worth it.
