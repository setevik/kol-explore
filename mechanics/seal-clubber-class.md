# Seal Clubber (Muscle) — class specifics

> Run-agnostic. Companion to `pastamancer-class.md`. Covers the guild, the skill tree, the class resource,
> and the early combat standard. Current-run skill/meat state lives in `CURRENT_ASCENSION.md`.

## 🔥 FURY IS THE CLASS'S REAL BURST — and it is easy to leave at zero all run

**Fury is a Seal-Clubber-only resource, measured in gallons and shown on the charpane between the drunkenness and
HP meters** (hidden while it is 0, which is why it is easy to forget). `api.php?what=status` exposes it as
**`fury`**.

- **You gain 1 gallon for every monster you defeat**, and only with **Wrath of the Wolverine** learned.
  ✅ Measured exactly: **5 ordinary wins took the meter 0 → 5** (one gallon per kill, no exceptions), and
  `api.php`'s `fury` field tracked it every step — so **a full meter costs five trash fights**, which is nothing
  next to a boss attempt.
- **Cap: 3 gallons · 5 with Ire of the Orca** (a *legendary seal-clubbing club* adds one more).
- 🚨 **You lose ALL of it when you lose a fight** (including a 30-round timeout), and when you cast **Hibernate**,
  **Batter Up!** or **Cavalcade of Fury**. It also **resets at rollover** — so it cannot be banked overnight.
- **Spenders:** **Furious Wallop** (1 gallon, Combat, *guaranteed critical hit*) · **Cavalcade of Fury**
  (Combat, 15 MP, *"consumes all of your Fury and performs multiple savage attacks"*).
- **Multiplier:** **Batter Up!** is a passive that adds *bonus damage from Fury*.
- 💥 **Why it matters for a hard fight:** a critical hit **doubles the weapon-damage component** — **tripled with
  Audacity of the Otter** — and Thrust-Smack-family attacks multiply on top of that. ⇒ **Against a boss you must
  kill in two rounds, arrive with a full Fury meter and open with the Fury spenders**, not with the everyday
  attack skill.
- ⚠️ **Losing repeatedly to the same boss is self-defeating twice over**: each loss also empties the meter, so the
  next attempt starts weaker than the last. **Build Fury on trash fights immediately before the attempt.**
- 🚨 **FURY CANNOT BE EXPORTED BY PERMING IT.** The wiki is explicit: *"Only Seal Clubbers with the Wrath of the
  Wolverine skill can build up Fury. Other classes are unable to do so, **even if Wrath of the Wolverine has been
  made permanent**."* ⇒ **Do not spend ascension karma on Wrath of the Wolverine, Ire of the Orca, Cavalcade of
  Fury, Furious Wallop or Batter Up!** — the karma is wasted and the skills never fire again. The class's best
  combo is **rented, not owned**. Perm the class-agnostic passives instead (see `mechanics/ascension.md`
  § "Which skill to perm").

### 💎 WORTH PERMING out of a Seal Clubber run (framework: `mechanics/ascension.md` § "Which skill to perm")

⭐ **The pick: Double-Fisted Skull Smashing (1017, Level 12, Passive)** — *"allows you to wield a one-handed
weapon in each of your hands."*
- **Passive** ⇒ free forever: no MP, no turn, no decision.
- **Works for every class, not just Muscle.** The off-hand may be any one-handed weapon *of the same type*
  (melee/**Mysticality**, or ranged); the only rule is you cannot mix a melee/Myst weapon with a ranged one.
- **Two benefits, not one:** extra damage worth **10–20% of the off-hand's power**, **plus the off-hand's
  enchantments and damage bonus** — effectively a permanent extra enchantment slot, useful even to a class that
  never swings a weapon.
- **Irreplaceable** — no item or buff grants dual-wielding.
- ✅ Measured: replacing a shield with a second weapon gave **+11 Muscle** and held **1.00 rounds/fight at
  0 losses** over 34 castle giants.

**Runner-up: Lunging Thrust-Smack (1005, Combat, 8 MP)** — triples **base** weapon damage, and ⚠️ its text reads
*"…and also Bonus Weapon Damage **if a Seal Clubber**"*, so off-class you keep the triple (the large part) and
lose only the rider. **No club is required** — the Smack family reads *"with your weapon"*. ✅ Measured, same
character/zone/day: **plain attack = 3 rounds, ~120 damage taken, 3 losses in ~10 fights** vs **Lunging
Thrust-Smack opener = 1 round, ~40 often 0, 0 losses in ~60 fights.** ⚠️ Active ⇒ re-imposes an MP budget.

**Not worth karma** (evaluated against the four tests):
| Skill | Why not |
|---|---|
| **Fury package** (Wrath of the Wolverine · Ire of the Orca · Cavalcade of Fury · Furious Wallop · Batter Up!) | 🚫 **Fury cannot be built off-class even when permed** — see the Fury section above. |
| **Hibernate** (1027) | Costs **1 Adventure** per cast — a heal paid for in the same currency as progress. Any MP-cost full heal beats it. |
| **Audacity of the Otter** (1009, crits ×3) | Its *guaranteed*-crit partner is Fury, which doesn't carry; random crits alone are too rare to buy. |
| **Fortitude of the Muskox** (1008, regen 1–2 HP/adv) | Real but tiny; cheap items cover the same gap. |
| **Hide of the Walrus** (1011, DA +50) · **Claws of the Walrus** (1012, Weapon Damage +7) | Small flat passives that fade as monsters scale. |
| **Northern Explosion** (1038, 16 MP, cold) | A genuine answer to physically-immune monsters, but **items already solve that** (fires of unknown origin, an oil lamp). |
| **Pulverize** (1016) · **Super-Advanced Meatsmithing** (1006) | Crafting access only; a storage audit already raises tens of thousands of meat with no skill at all. |
| **Rage of the Reindeer** (1015, Noncombat 10 MP) | A situational buff (stronger "against guys with beards"). |

### ✅ Verified skill IDs (read from `desc_skill.php` / the wiki, not guessed)
**Passives:** Fortitude of the Muskox **1008** · Audacity of the Otter **1009** (crits ×3) ·
Hide of the Walrus **1011** (DA +50) · Claws of the Walrus **1012** (Weapon Damage +7) ·
Seething of the Snow Leopard **1034** · Ire of the Orca **1035** (Fury cap 5) ·
**Double-Fisted Skull Smashing 1017** (dual-wield) · Pulverize **1016** · Northern Exposure **1018** ·
Precision of the Penguin **1039** · Super-Advanced Meatsmithing **1006**.
**Combat:** Thrust-Smack **1003** (×2 base weapon damage) · Lunging Thrust-Smack **1005** (×3) ·
**Furious Wallop 1032** (1 gallon → guaranteed crit) · Club Foot **1033** (−enemy Defense) ·
Cavalcade of Fury **1037** · **Northern Explosion 1038** (16 MP, cold).
**Noncombat:** Hibernate **1027** (costs 1 *Adventure*) · Rage of the Reindeer **1015** ·
Musk of the Moose **1019** (+encounter rate) · Pride of the Puffin **1040** (+5 Muscle / 10 adv).
⚠️ **1017 is Double-Fisted Skull Smashing, NOT Furious Wallop** — an easy mis-pairing, and the two behave
nothing alike. **Neither the Smack family nor Northern Explosion requires a club** ("*with your weapon*"), but
the Smack skills' *Bonus* Weapon Damage rider applies **only to a Seal Clubber**.

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
🎯 **It is the MUSCLE GUILD's challenge, not the Seal Clubber's** — ✅ verified: a **Turtle Tamer** is given the
identical sausage-measuring test by the same Gunther. Expect challenges to be shared by stat group
(see `turtle-tamer-class.md`).
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

Costs rise steeply with the tier — the full priced ladder is in § "The whole rack, priced" below.

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
| 12 | Double-Fisted Skull Smashing · Cavalcade of Fury |
| 13 | **Northern Explosion** (Combat, 16 MP — *"a powerful Smack that deals Cold Damage"*) · **Northern Exposure** (Passive, So-So Cold Resistance +2) |
| 14 | Precision of the Penguin · Musk of the Moose |
| 15 | Pulverize · Pride of the Puffin |

✅ **What the upper-tier skills actually are** (read from `desc_skill.php`, since the names give nothing away):
**Northern Explosion** Combat, 16 MP, *"a powerful Smack that deals Cold Damage"* — the class's only elemental
attack, so it is the answer to a physically-immune monster · **Northern Exposure** Passive, So-So Cold Resistance
(+2) · **Precision of the Penguin** Passive · **Musk of the Moose** Noncombat, 10 MP, **raises** encounter
frequency (useful only when hunting a monster, harmful when hunting noncombats) · **Pulverize** Passive, smashes
equipment into essences with a tenderizing hammer (crafting, not combat) · **Pride of the Puffin** Noncombat,
30 MP, 10-adventure buff.
⇒ Of the Level 13–15 rack, only **Northern Explosion** adds a new way to deal damage; the rest are passives,
utility or crafting. Don't expect this tier to solve a damage wall on its own.

### 💰 THE WHOLE RACK, PRICED — measured to the last skill

✅ **The price is set by the skill's LEVEL, not by the skill** — both Level 13 skills cost 10,000, both Level 14
cost 12,500, both Level 15 cost 15,000. Measured across a run that bought the tree out completely (the trainer
page then reported **0 skills remaining**):

| Tier | Price |
|---|---|
| Level 1 / 2 / 3 skills | **125 · 250 · 500** |
| mid rack | **1,750 · 2,500 · 3,250 · 4,000 · 5,000 · 6,250 · 7,500** |
| **Level 13** Northern Explosion · Northern Exposure | **10,000** |
| **Level 14** Precision of the Penguin · Musk of the Moose | **12,500** |
| **Level 15** Pulverize · Pride of the Puffin | **15,000** |

⇒ **Budget ~52,500 meat for the last four skills alone** (Northern Exposure 10,000 · Musk of the Moose 12,500 ·
Pulverize 15,000 · Pride of the Puffin 15,000). A purchase you cannot afford is refused outright with *"You
can't afford to train that skill."* — no meat moves, so it is safe to just try.
🔎 **Read what's left from the trainer page rather than tracking it by hand** — the purchase forms are the
authoritative list: `[...tr.matchAll(/name=skillid value=(\d+)/g)]`. Zero matches ⇒ the class is fully trained.

### ✅ What the top-tier skills actually DO (measured in play, not guessed from names)

- **Pride of the Puffin** (Noncombat, **30 MP**, 10 adventures) = **+5 Muscle while active.** ✅ Verified by the
  stat falling 278 → 273 the moment it expired. Cheap, but 10 adventures is short — **take it immediately
  before a boss, never at day-open** (HANDOFF HARD RULE 3's duration-buff trap).
- **Musk of the Moose** (Noncombat, **10 MP**, 10 adventures) = **raises the encounter rate.** 🚨 **This is a
  liability, not a bonus, whenever the thing you want is a NONCOMBAT** (a quest choice, a library book). Use it
  only when hunting a *monster* or a monster's drop.
- **Northern Exposure** (Passive) = So-So Cold Resistance (+2). Pure defence.
- **Pulverize** (Passive) = smashes equipment into essences with a tenderizing hammer. **Crafting, not combat** —
  it will not help a damage wall.
⇒ **Of the entire Level 13–15 tier, only *Northern Explosion* adds a way to deal damage.** Do not expect this
tier to solve a fight; buy it for completeness and for the +5 Muscle burst.

⚠️ The trainer page prints **no price** — read each cost from the meat delta of the purchase itself.
⭐ **Fund the top of the rack with a storage audit, not with farming** — ✅ measured at **20,569** and **68,100**
meat for **zero adventures** on two different runs. ⚠️ Some deep stacks (ten-leaf clovers, class rings)
**cannot be sold at all**. Method: `HANDOFF.md` § "Audit your own junk drawer".
💡 *Northern Explosion* is the class's **elemental** attack — the answer to physically-immune monsters (the Hidden
City spirits, A-boo's ghosts) that otherwise need fires of unknown origin or an oil lamp.

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

## 🚨 ONCE YOU OWN **Lunging Thrust-Smack**, THE ABOVE STOPS BEING TRUE — MP BECOMES LOAD-BEARING

**Lunging Thrust-Smack (Combat, 8 MP, TRIPLE weapon damage)** changes the class's whole resource picture. The
"low max MP is fine, this class is passive" conclusion above is correct *only while you have nothing worth
spending MP on*.

✅ **Measured on the same character, in the same zone, on the same day** (Castle in the Clouds, ~150 HP giants
that hit for 40–60/round, base Muscle ~110):

| Opening move | Rounds per fight | Damage taken | Result |
|---|---|---|---|
| plain `fight.php?action=attack` | **3** | ~120 | **3 losses in ~10 fights** |
| **Lunging Thrust-Smack round 1** | **1** | ~40, often 0 | **0 losses in ~60 fights** |

⇒ **The skill is not a boss-only luxury; at 8 MP it is the trash-clearing default**, and the day's real
constraint becomes *how many MP restoratives you can afford*. A fight that yields ~110 meat and consumes ~75
meat of restorative is still comfortably meat-positive, so **the loop pays for its own MP**.

⚠️ **The failure mode is silent and fast.** When the restorative stack hits 0 the loop keeps running, quietly
reverts to 3-round fights, and starts losing — which then triggers Beaten Up and the death spiral. ✅ **Make
"top MP to at least one cast" a precondition of entering a fight**, exactly as you would a healing check, and
**stop the burst when the restoratives run out** rather than fighting on without them.

🎯 **General form for any class:** re-open the "is MP a dead resource here?" question **every time you buy a
damage multiplier.** The answer is a property of your current skill list, not of the class.

## 🐺 A Seal-Clubber-only skill hides in the Haunted Gallery

✅ **Standard route verified in-game (Level 12, ~11 Bedroom turns, 0 losses):** Bedroom (393) → the first
**animated ornate nightstand (choice 878)** → `Look behind the nightstand` → *Lord Spookyraven's spectacles*
(2nd turn) → **equip them** (accessory; `inv_equip.php … &slot=3` replaces acc3 and names what it displaced) →
keep fighting nightstands, `Ignore it` on every other drawer menu (876/878/879/880) → the first **animated
mahogany nightstand (choice 877)** → `Look under the nightstand` → *tattered wolf standard* (8th turn after the
spectacles). ⭐ **While you're wearing them, re-read the *recipe: mortar-dissolving solution*** if the cellar is
open — the spectacles also unlock the wine-bomb shortcut through the Suspicious Masonry
(`spookyraven-ghost-chain.md`).

The Haunted Gallery's *Out in the Garden* noncombat offers **"The first knight"**, which normally starts a fight with
a wolf knight — but **a Seal Clubber carrying a *tattered wolf standard* instead gains the skill *Snarl of the
Timberwolf***. (The second knight is the Turtle Tamer equivalent: *tattered snake standard* → *Spectral Snapper*.)
Worth checking storage for the standard before the Gallery step of the Spookyraven chain, and recording what the
skill actually does once acquired.
⚑ **Where the standard comes from (wiki, re-checked):** the **Haunted Bedroom (393)** — the **animated mahogany
nightstand**'s drawer menu (**choice 877**) offers **`Look under the nightstand`**, which yields the *tattered wolf
standard* for a Seal Clubber (*snake* standard for a Turtle Tamer) — 🚨 **but only while *Lord Spookyraven's
spectacles* are EQUIPPED**, and only **once per ascension**. The spectacles themselves come from another Bedroom
nightstand's `Look behind the nightstand` option.
✅ **Verified failure without them:** a Bedroom grind that picked `Look under the nightstand` whenever it was offered,
with no spectacles on, found **no standard in 20 fights**. ⇒ **Order: spectacles → equip → mahogany → look under.**
⚠️ Avoid the mahogany nightstand's `Check the bottom drawer` — it just deals damage.

## ⚔️ Double-Fisted Skull Smashing (L12) — dual-wield one-handers; the Hammer of Smiting is the obvious off-hand

**Passive: wield a one-handed weapon in each hand.** Equip the second weapon with
`inv_equip.php?which=2&action=dualwield&whichitem=<id>&pwd=<hash>` — ⚠️ plain `action=equip` would replace the
main hand. The response names what it displaced (`Item unequipped: black shield`).

✅ **Measured with the black sword main-hand + Hammer of Smiting off-hand** (the Nemesis epic weapon, which a
Seal Clubber is carrying anyway): **Muscle 169 → 180** (the Hammer carries Muscle), max HP 278 → 275 (the
shield's +20 HP is gone). Then **34 Castle Top Floor giants: 1.00 rounds per fight, ~7 HP lost per fight, 0
losses**, opening with Lunging Thrust-Smack. The +11 Muscle also lifts you clear of Defense-160 bosses'
accuracy gate.
⇒ **Prefer a second one-hander over a shield once fights are already one round** — damage absorption only
matters when you're getting hit, and a one-round kill mostly isn't. Revisit if you start taking multi-round
fights against something that hits hard.

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
| Super-Advanced Meatsmithing · Fortitude of the Muskox · Audacity of the Otter · **Hide of the Walrus (Damage Absorption +50)** · Cold Shoulder · Wrath of the Wolverine · Buoyancy of the Beluga · Thirst of the Weasel · Claws of the Walrus (Weapon Damage +7) · Seething of the Snow Leopard · **Ire of the Orca** | **Seal Clubbing Frenzy (1 MP!)** · Blubber Up (7) · Scowl of the Auk (10) · **Tongue of the Walrus (10, heals 30–40)** · *Cannelloni Cocoon (20)* | Clobber (1) · Lunge Smack (1) · Thrust-Smack (3) · **Club Foot (8, lowers enemy Defense)** · **Lunging Thrust-Smack (8, TRIPLE weapon damage)** · **Furious Wallop (1 Gal. Fury — guaranteed critical hit)** |

⭐ **The two that change how you fight bosses**, both on the upper tiers of Torg's rack:
- **Club Foot** — *lowers the enemy's Defense.* This is the answer to an **accuracy gate** (a boss whose damage
  column comes back blank). ⇒ **Lower theirs before raising yours**; see `combat-and-initiative.md`.
- **Lunging Thrust-Smack** — *Combat, 8 MP, **triple weapon damage** if it connects.* The first skill on this
  class that meaningfully multiplies a boss burst rather than shaving a round off a trash fight. ⚠️ It is
  **damage, not accuracy** — against a Defense gate it still misses, so Club Foot comes first.

💰 **Revisit Torg on every level-up, and check your meat first.** The rack refills as you level and the tiers
climb steeply (the Level-10 pair cost **5,000 each**). A single boss's drop can fund a whole tier, so **do the
trainer check right after a boss dies**, not at the following morning's login — a run has repeatedly recorded
"Torg's rack is empty" as if it were a permanent state when it only meant *at that level*.

⚠️ **Never try to "cast" Hide of the Walrus as a grind-loop preamble.** That call does nothing —
`runskillz.php` on a passive returns the skills page and spends no MP. The damage-reduction benefit is real but
it starts at **purchase**, not at cast.

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
