# Familiars — what they are, how they grow, which ones earn their slot

> Run-agnostic, class-agnostic. Sourced from the official wiki (*Familiar*, *Familiar weight/experience*,
> *Familiars by type*, *Familiars by availability*, *Mosquito*) unless marked ✅ verified in-game.
> **Which familiars this account owns, and which is equipped, is run state → `CURRENT_ASCENSION.md`.**
> Operational endpoints (take one along, api fields) live in `HANDOFF.md` § Familiars.

## What a familiar is

A pet that fights beside you and acts on its own every round or at the end of a fight — attacking, healing,
restoring MP, boosting meat/item drops, adding stat gains, blocking attacks, and so on.

- **You need a Familiar-Gro™ Terrarium** at the campsite. Using a **hatchling** item
  puts that familiar into the terrarium **permanently**.
- **One of each type per account, forever.** Once a hatchling of a type has been used you can't use another of the
  same type. Familiars can't be traded, sold or discarded once hatched.
- **Only one familiar accompanies you at a time.**
- 🔁 **Familiars survive ascension** — they stay in the terrarium through the reset (except on Bad Moon and the
  Avatar paths). ⇒ **A new run inherits every familiar ever hatched; check the terrarium on day one.**

## Weight = the one number that matters

A familiar's power scales with its **weight** (pounds).

- **Experience:** normally **+1 per combat won** with it as your active familiar (items/effects can add more; the
  arena also grants some).
- **Base weight = √experience**, from **1 lb (0 exp)** to **20 lb (400 exp)**. Pound thresholds:
  | lb | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 15 | 20 |
  |---|---|---|---|---|---|---|---|---|---|---|
  | exp | 4 | 9 | 16 | 25 | 36 | 64 | 100 | 144 | 225 | 400 |
  ⇒ **The first pounds are cheap** (5 lb after 25 wins) and the last are slow (20 lb needs 400).
- **Effective weight** adds on top of base: familiar equipment, *tiny plastic* accessories, the *Empathy* effect,
  Turtle Tamer *Amphibian Sympathy*, Pastamancer *Leash of Linguini* (+5).
- ✅ **Observed: a familiar can show `1-pound … (0 exp, 9,568 kills)`** — the terrarium's lifetime kill count and
  its current experience are separate numbers, so a veteran familiar may still be starting from 1 lb this run.
  Don't assume an old familiar arrives heavy.

## Types that earn a slot (formulas, wt = weight)

Pick by what the day actually needs. All of these are **readily available** (hatchlings obtainable by anyone).

| Job | Familiar (hatchling) | Formula / behaviour |
|---|---|---|
| **+Item drop** ("fairy") | Baby Gravy Fairy (*pregnant mushroom*) | **+(√(55·wt) + wt − 3)% items**, every fight |
| **+Meat drop** ("leprechaun") | Leprechaun (*leprechaun hatchling*) | **+(2·wt + √(220·wt) − 6)% meat**, every fight |
| **Stat gain** ("volleyball") | Blood-Faced Volleyball (*blood-faced volleyball*) · **Smiling Rat** (*smiling rat*) | **+2 + wt/5 substats** after every fight — the Smiling Rat uses the identical formula |
| **Stat gain** ("sombrero") | Hovering Sombrero (*hovering sombrero*) | **+(ML/4)·(0.1 + 0.005·wt)** substats — beats the volleyball only in high-ML zones |
| **Restores MP** | Ghuol Whelp (*fertilized ghuol egg*) | 50% of fights end with **(wt+5)/2 to wt+5 MP** |
| **Restores HP / damage** | Mosquito (*mosquito larva*) | ~25–30% of rounds: damage **⌈wt/2⌉+1 to wt+3**, heals you **≈2× that** |
| **Blocks enemy attacks** | Levitating Potato (*potato sprout*) | **1.5·wt% chance** per round to block (max 90%) |
| **Initiative** | Oily Woim (*woim*) | **+2·wt% initiative**, passive. The hatchling comes from an *oily boid* (3 bubblin' crude via `multiuse.php`, see `orc-chasm-and-highlands.md`) — but ⚠️ a boid is a **combat item**, and throwing one has only **~15% chance** to yield the woim (otherwise it's a one-round stun). Budget several boids. |
| **Elemental resistance** | Exotic Parrot | +1 all-element resistance per 4 lb |
| **Weakens the enemy** | Barrrnacle, Ghost Pickle, Misshapen Animal Skeleton… | delevels (Barrrnacle: 4.5·wt% chance, wt/2 levels at start) |
| **Fewer combats** | Disgeist, Peace Turkey | −⌊wt/7.5⌋% / −⌊wt/5⌋% combat frequency (max −10%) |

⚠️ **Some quest gates ignore familiar bonuses.** Twin Peak's +50% item check counts gear and food/potion effects
only — **familiars don't count** (see `orc-chasm-and-highlands.md`). Don't plan a gate around a fairy.

⚠️ **Short fights starve active familiars.** A familiar that acts *during* combat (Mosquito, attackers, blockers)
gets few chances when you one-round everything. **End-of-fight** familiars (volleyball, fairy, leprechaun, ghuol
whelp, and the Topiary Skunk's heal) pay out regardless of fight length — prefer those once kills are routine.

## Class-specific familiars — one per ascension from the Nemesis quest

The Nemesis quest hands each class its own familiar:

| Class | Familiar | Note |
|---|---|---|
| **Seal Clubber** | **Adorable Seal Larva** | Restores MP 25% of rounds, **1 to (wt + min(20, 2·level))/2** for a Seal Clubber — i.e. it acts heavier by up to +20 lb at level 10+ |
| Turtle Tamer | Untamed Turtle | Blocks attacks; +min(20, 2·level) effective weight for a Turtle Tamer |
| Pastamancer | Animated Macaroni Duck | Attacks and **restores MP like a Star Starfish**; with *farfalle bow tie* also acts as a 10-lb Barrrnacle (45% chance to delevel 5). Hatchling: *macaroni duck* (untradeable) |
| Sauceror | Pet Cheezling | MP at end of fight, +min(20, 2·level) weight for a Sauceror |
| Disco Bandit | Autonomous Disco Ball | — |
| Accordion Thief | Mariachi Chihuahua | Attacks, +min(20, 2·level) weight for an Accordion Thief |

⭐ **The class bonus is the reason to care:** "+min(20, 2·level)" means a *1-lb* class familiar behaves like a
*21-lb* one at level 10 for its owning class. Check the Nemesis steps in `nemesis-quest.md` for when it's granted.

## Other hatchling sources

- **Topiary Skunk** — crafted from **15 topiary nugglets** (use the nugglet stack; it offers a recipe menu). The
  nugglets drop in the Naughty Sorceress' tower **Hedge Maze**, are tradable, and at most eight drop per ascension, so
  a stack in storage from earlier runs is the practical source.
  ⭐ **Deals occasional stench damage AND restores HP after each combat.** Because the heal comes *after* the fight, a
  class that kills in one round still collects it every time — unlike the Mosquito, whose heal only fires during
  combat rounds. Familiar-specific equipment: *topiary noseplugs*.
- **Smiling Rat** — its hatchling, the *smiling rat*, drops in **The Tavern Cellar** (the *1984 Had Nothing on This
  Cellar* adventure), is **tradable**, and hatches a **volleyball-formula** stat-gain familiar.
  An end-of-fight familiar, so it pays out every fight however short. Familiar-specific equipment: *rat tooth polish*.
  ⇒ A long-lived account often has spares in storage from Tavern quests on earlier runs.
- **Reassembled blackbird** — assembled from Black Forest drops; its ability is *finding the Black Market* for the
  MacGuffin quest (see `macguffin-quest.md`), otherwise minor.
- The *Familiars by availability* page lists moon-sign familiars (Degrassi Knoll gravy fairies, Little Canadia
  maple leaf, Gnomad Camp mechanicals) and path-specific ones.

## Mosquito (the classic starter) — details

- Hatchling: **mosquito larva**, the Spooky Forest quest item the Council tells you to hatch early on.
- Ability: sucks HP from the enemy and injects it into you — **damage ⌈wt/2⌉+1 to wt+3; heal ≈ 2×damage**
  (triangular around the mean).
- Familiar-specific equipment: *hypodermic needle*.
- Best early, when fights last several rounds and every HP matters; its value falls off once kills are one round.
