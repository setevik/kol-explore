# Seal Clubber (Muscle) — class specifics

> Run-agnostic. Companion to `pastamancer-class.md`. Covers the guild, the skill tree, the class resource,
> and the early combat standard. Current-run skill/meat state lives in `CURRENT_ASCENSION.md`.

## 🥊 The class resource: "Muscularity Points" (+ Fury) — NOT a caster's MP pool

🚨 **This is the single biggest difference from a caster and it is easy to misdiagnose.** A fresh Seal Clubber
has **max MP 1** (Mysticality 1) and it stays tiny — **MP 7 at Level 4**. Do **not** read that as "MP-starved".

✅ **Refinement (read the combat page, not the charpane):** the fight screen labels the pool
**"Muscularity Points"**, and Seal Clubber skills are priced to match — measured:
**Clobber 0 MP · Lunge Smack 1 · Thrust-Smack 3.** So the class *does* spend MP; the costs are simply an order
of magnitude smaller than a caster's, which is why a 7-point pool is fine. `api.php?what=status` also exposes a
**`fury`** field that fills during combat and feeds the higher-tier skills.

- `api.php?what=status` exposes a **`fury`** field (Pastamancers have `pastathrall` in the same slot-ish role).
  Fury is built in combat and spent on the class's big attacks.
- ⇒ **Do not port the caster MP-economy playbook here.** The whole `topMP` ladder, "keep MP topped", and
  "Mortar → Cannelloni" combat standard in `HANDOFF.md` are Mysticality-class advice and **do not apply**.
  The Muscle equivalent of "keep MP topped" is **keep HP topped** — see the spleen note below.
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

Costs scraped live from Torg's rack (they rise steeply — budget ahead):
`1,750 · 2,500 · 3,250 · 4,000 · 5,000 · 6,250 · 7,500 · 10,000 · 12,500 · 15,000` meat as you climb the tiers.

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

⚠️ **Mysticality-gated gear is dead weight on this class.** *Baron von Ratsworth's monocle* (the Tavern-cellar
reward, +item drop) needs **10 base Mysticality**; a Seal Clubber at Level 4 has **7** and gains Mys very slowly.
Check an item's stat requirement before planning around it.

## ⚠️ Zone difficulty is spikier than a caster's at the same level

Measured at **Level 5, base Mus 27, 45 max HP**, on plain weapon attacks:

| Zone | Result |
|---|---|
| Outskirts of Cobb's Knob (114) | **14W/0L**, no healing needed |
| Cobb's Knob Treasury (260) | **20W/0L** |
| Bat Hole — Batrat Burrow (32) | **15W/1L** |
| **Cobb's Knob Harem (259)** | **9W/9L** ⚠️ |
| **Cobb's Knob Barracks (257)** | **36W/2L** ⭐ — best zone at this level; drops the guard uniform and feeds **Moxie** |
| Cobb's Knob Kitchens (258) | **11W/7L** ⚠️ (without the guard uniform) |

The Harem's **Knob Goblin Harem Guards** are far above the rest of the Knob at this level. It still has to be
farmed for the disguise (veil + pants + perfume all dropped in 18 turns), but **budget healing for a ~50% loss
rate and get out once the outfit is complete** — don't use it as a leveling zone. This is
`leveling-zones.md`'s "pick by WIN RATE, not ML" rule biting on a Muscle class.

## 🔌 MP is a narrow resource on this class (but see the PASSIVE section above — it matters less than it looks)

Max MP is tiny (**22 at Level 6**) and there is **no working MP restorative in reach**:
- **Mana curds (6416)** — `inv_use.php` says *"not implemented yet"*, and the spleen route consumed one
  without restoring MP. Not an MP source.
- **Hibernate does not restore MP.** The guild store (guildstore3) sells no MP item.
- ⚠️ **`Pastamastery` (a permed carry-over) costs 10 MP** — casting it in the morning routine leaves a Level 6
  Seal Clubber with ~1 MP for the whole day, which silently disables **Thrust-Smack (3 MP)**, the class's best
  early attack. **Skip Pastamastery on a boss day**, or accept plain attacks only.

⇒ Treat MP as a **once-per-day budget**, not a renewable pool, and spend it on attacks rather than buffs.

## 👑 The Knob Goblin King — BOTH disguise paths are stat-gated for this class

The King is **Init 100 · Attack 53**, and he opens by hitting for **~45**. Measured at Level 5 (Muscle 30,
**50 max HP**, Seal Clubbing Frenzy + Blubber Up up): **50 HP → 5 in round one, dead in round two.**
He acts first essentially always, and this class has **no initiative buff** (the caster's Springy Fusilli
answer does not exist here).

Both documented entry paths then hit a *second* wall:

| Path | Requirement | Muscle-class problem |
|---|---|---|
| **A — Harem disguise + perfume** | Knob Goblin perfume, **lasts 1 adventure** | Single-use; farmed in the **Harem (259), a 9W/9L zone at L5.** And it only gets you *in* — the King still one-shots you. |
| **B — Elite Guard Uniform + Knob cake** | elite helm + pants | ⚠️ **Both need 15 base MOXIE.** A Seal Clubber has ~7 at Level 5 and gains Moxie very slowly. |

### ✅ SOLVED — win with the HAREM disguise, because it leaves your weapon slot free

**The Elite Guard Uniform occupies the weapon slot and forces the elite polearm; the harem disguise is hat +
pants only.** For a Muscle class whose entire damage output is its weapon, that is the whole fight:

| Loadout | Attempts | Result |
|---|---|---|
| Elite Guard Uniform (forced polearm) | 7 | **7 losses**, 2–3 rounds |
| **Harem veil + pants + astral bludgeon + perfume** | 1 | ✅ **WON in 2 rounds** — 35 damage a swing |

⚠️ **Knob Goblin firecrackers do 4 damage** — worthless here. Measure a combat item before planning around it.
🎁 **Drops the Crown of the Goblin King**, which is a large upgrade for this class: **max HP 83 → 98,
Muscle 52 → 62** on equipping. Re-derive the whole loadout the moment he dies.

### ⚔️ Measured: the disguise is NOT the hard part — the DPS race is

With the gate solved (Moxie 21, Muscle 47, **75 max HP**, complete uniform, cake in hand) the fight is a
genuine combat and still **7 losses out of 7 attempts**:

| Config | Entry HP | Rounds survived | Result |
|---|---|---|---|
| Harem + perfume, astral bludgeon | 56 | 1 | lost |
| Elite Guard Uniform + cake | 72–79 | **2–3** | lost ×6 |

He deals **~30–37 per round** (less with the uniform's absorption) and has **50 HP**; plain weapon attacks at
Muscle 47 do not remove 50 HP in three rounds. **Retries are cheap — neither the cake nor the uniform is
consumed on a loss**, so only the adventure and a Hibernate are spent — but repeating the same loadout does
not converge.

⇒ **What actually needs to change:** more levels/Muscle, or **combat items as supplementary damage**
(Knob Goblin firecrackers drop constantly in the Knob). A Path A retry additionally costs **a fresh perfume**
(~28 turns of Harem farming), so **Path B is the right platform for repeated attempts.**

🎯 **The answer to both is the Barracks (snarfblat 257).** It drops the **whole uniform** (helm, pants,
polearm — all three inside ~18 turns), runs **18W/0L at Level 5**, and — the important part — **its monsters
feed MOXIE**: base Moxie went **7 → 13 in ~38 turns** there. Grind it until Moxie ≥ 15, wear the uniform, then
go for the cake and the King with real armour on.

🚨 **Do NOT swap the polearm out for a better weapon while you need the uniform.** The Elite Guard Uniform is
an **outfit**: the set bonus *and* the disguise the throne room checks for both require **all three pieces worn
at once**. The elite polearm is a statistical downgrade next to an astral bludgeon, and swapping it back
**silently breaks the disguise** — the King then greets you with *"You are neither a guard with a cake, nor one
of my harem girls"* and the scripted one-shot. **Wear the whole set, accept the worse weapon, until the King is
dead.** Only then re-open the loadout question — see `equipment-strategy.md` § "Outfits are all-or-nothing".

## 🚫 A disguise gates zones BOTH ways

Wearing the **harem disguise** and walking into the **Barracks (257)** returns **"No Girls Allowed"** —
a noncombat that **costs no adventure and repeats forever**, so a farm loop pointed there spins.
(This was the third instance of that trap in three days; see `HANDOFF.md` § "A loop MUST verify the adventure
counter actually moved".) **Unequip a quest disguise the moment you leave the zone it belongs to.**

## Early quest notes (Muscle-class specifics)

- **Degrassi Knoll arrives as `place.php?whichplace=knoll_hostile`** — bugbear-occupied, with four zones
  (Restroom 351 · Bakery 352 · Gym 353 · Garage 354) instead of friendly shops. Which version you get is
  **moon-sign dependent**, so a run under a different sign may see the peaceful Knoll.
- ✅ **The meatcar can be built in ZERO adventures out of Hagnk's**, if a previous run left parts there — pull
  a **meat engine (126)** and **tires (136)**, buy **sweet rims (135)** from the General Store for 300 meat,
  and craft twice. See `meatcar-build.md`.
- ⚠️ **Baron von Ratsworth is a real fight at Level 4** — 5 encounters, 4 of them losses, before he dropped the
  monocle. Enter him at full HP with spleen herbs in reserve.

## ⭐ Hibernate (skill 1027) is the class's real healer — buy it at Level 2

**`Hibernate` — Noncombat, costs 1 ADVENTURE (not MP), fully restores HP and removes Beaten Up.**
⚠️ **It does NOT restore MP** (measured: HP full, MP still 1/22 afterwards).
✅ Measured: 2/33 HP → full, Beaten Up cleared, 1 adventure spent, **no MP and no spleen**.

🎯 **It strictly dominates `campground.php?action=rest`**, which costs the same 1 adventure and returns only
~10 HP. **Any heal-fallback in a loop should call Hibernate, never campground rest** — a burst that rested 11
times to stay alive would have spent the same 11 adventures for ~10× the healing.

⇒ **The healing ladder for this class:**
1. **Medicinal Herb's medicinal herbs** (spleen, free of adventures) — use while spleen lasts;
2. **Hibernate** (1 adventure, full heal) — once spleen is capped, or before a boss;
3. campground rest — never, if Hibernate is known.

## ⭐ MOST SEAL CLUBBER SKILLS ARE **PASSIVE** — there is nothing to cast, and that reframes the class

🚨 **Verified against `desc_skill.php?whichskill=<id>&self=true` for every known skill.** The "of the [animal]"
skills are almost all **Type: Passive, MP Cost: N/A** — permanently on from the moment of purchase:

| Passive (always on, no MP, nothing to cast) | Noncombat buff (costs MP) | Combat |
|---|---|---|
| Super-Advanced Meatsmithing · Fortitude of the Muskox · Audacity of the Otter · **Hide of the Walrus (Damage Absorption +50)** · Cold Shoulder · Wrath of the Wolverine · Buoyancy of the Beluga · Thirst of the Weasel | **Seal Clubbing Frenzy (1 MP!)** · Blubber Up (7) · Scowl of the Auk (10) · *Cannelloni Cocoon (20)* | Clobber (1) · Lunge Smack (1) · Thrust-Smack (3) · **Furious Wallop (1 Gal. Fury — guaranteed critical hit)** |

⚠️ **This corrects an earlier note here** that told you to "cast Hide of the Walrus in every grind loop's
preamble." That call does nothing — `runskillz.php` on a passive returns the skills page and spends no MP. The
damage-reduction benefit is real but it starts at **purchase**, not at cast.

🎯 **The strategic consequence: low max MP is a much smaller problem than it looks.** This class's power budget
is overwhelmingly passive, so "MP is a dead resource" (an earlier conclusion here) overstated it — you are not
missing damage by having no mana, you are only missing three cheap buffs. Notably **Seal Clubbing Frenzy costs
1 MP** for a Muscle buff and is affordable at literally any time; cast it at the top of every loop.

✅ **How to check any skill in one call** — never infer castability from the name:
```js
(await G('/desc_skill.php?whichskill='+id+'&self=true')).match(/Type:\s*(\w+)\s+MP Cost:\s*(\S+)/)
```

## 🛡️ `Hide of the Walrus` (L7, 2,500 meat) = Damage Absorption +50, passive — buy it the moment you can

Because this class heals with **adventures** (Hibernate), damage reduction converts directly into turns.
Measured across two Cyrpt rooms (note the confound: a level-up landed between them, so treat this as
indicative rather than clean):

| | Alcove (before purchase) | Cranny / Niche / Nook (after) |
|---|---|---|
| Fights | 24 | 30 / 21 / 42 |
| Losses | 2 | 0 / 0 / 0 |
| **Adventures burned on Hibernate** | **8** | **2 / 2 / 2** |

⇒ Roughly **6 adventures saved per 25 fights**; the 2,500-meat skill repaid itself inside a day's grind.
✅ **General rule for a Muscle class: prefer flat damage reduction over raw damage** once fights are already
1–2 rounds — shorter fights don't save turns, but not needing to heal does.
⚠️ **Damage Absorption did NOT save me from the Bonerdagon's ~46 *spooky* damage per round** — absorption and
*elemental resistance* are different axes. For elemental bosses you need resistance (see the Friar blessing).

## 🩹 The spleen route (use it first — it costs no adventures)

A low-level Muscle class has **no heal skill and no MP to cast one**, so HP is restored with **items**, and the
staple is a **spleen** item:
**Medicinal Herb's medicinal herbs (item 1274)**, guildstore3 row 536, **100 meat**, heals **~22 HP for 1 spleen**
(≈ a full heal at Level 4). 🐛 **It is used with `inv_spleen.php`, NOT `inv_use.php`** — the latter answers
*"This item is not implemented yet"*, which looks like a broken item. See `HANDOFF.md` § spleen.

⚠️ **Set the heal threshold HIGH (~60–70% of max HP), not the caster's 35%.** With no in-combat heal, a lost
fight costs the turn *and* leaves you Beaten Up. A cellar run at a 45% threshold went 12W/**2L**; the same zone
at 60–70% with working herbs went 15W/**0L**.
⚠️ **Never build a heal loop that falls back to `campground.php?action=rest`** — resting costs an adventure and
only returns ~10 HP, so an unbounded "heal until healthy" loop quietly eats the day. Bound the attempts and use
items only.

## Food & booze at low level (class-independent but bites hardest here)

- The **general store** (`shop.php?whichshop=generalstore`) sells 1-fullness / ~1-adventure fillers at ~40
  meat: **cup of lukewarm tea (row 644, item 7033)**, **pickled egg (row 646, item 7032)**, fortune cookie
  (item 61). *bowl of cottage cheese* (item 49) is 2 fullness / 2 adv. ✅ Unlimited — NPC shop.
- ⚠️ At Level 2–3 almost everything better is **level-gated**, so expect a ~1 adv/fullness day-1 meter.
  Filling 15 fullness this way costs ~600 meat and yields ~15 adventures — still worth it.
