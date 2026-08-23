# The Mysterious Island War ("Make War, Not... Oh, Wait")

The Level 12 war quest. Pick a side (Hippy or Frat), wipe the opposing army (1001 enemies/side) on the
battlefield + complete side quests, then beat the side's final boss to win.

## Choosing a side & starting the war
- Wear the **War Fatigues** of your side (NOT the infiltration "Ensemble" disguise — that only triggers sabotage
  yurt NCs, not the war-start) and adventure in the **opposing** camp until the war-start NC fires:
  - **Hippy side:** War Hippy Fatigues (outfit) → adventure **Orcish Frat House (snarf 27)** → NC **"Fratacombs"**
    → choose **"Screw this, head to the roof."**
  - **Frat side:** Frat Warrior Fatigues → adventure **Hippy Camp (snarf 26)** → NC "Blockin' Out the Scenery"
    → choose "The Lookout Tower."
- This flips `bigisland.php` to wartime and opens the side-quest zones.

## ⭐ The side-quest doubling mechanic (THE key to winning)
- Each completed side quest **DOUBLES the enemies your comrades kill per battlefield fight:**
  `0 done = 1/fight · 1 = 2 · 2 = 4 · 3 = 8 · 4 = 16 · 5 = 32 · 6 = 64.`
- Raw battlefield grinding at 1–2 kills/fight is hopeless (1001 enemies). **WIN PATH: do the side quests FIRST**
  to crank the multiplier, then mop up the battlefield fast (which also unlocks gated quests/zones deeper in).
🚨 **CORRECTION (Day 123): several side quests are GATED BEHIND BATTLEFIELD PROGRESS.** At
**Image #0** both **The Lighthouse** and **Sonofa Beach (136)** refuse entry -
*"You can't fight your way through the frat boys to get to the lighthouse"* / *"Can't get here."*
So the "do side quests first" advice is only half true: **you must push the battlefield far enough to
open the flanks before the Lighthouse/Sonofa gunpowder farm is even reachable.** Budget battlefield
turns first, then re-check `bigisland.php?place=lighthouse`.

- **Prioritize the FASTEST side quests** — any quest gives the same doubling:
  - **Lighthouse** — farm **Sonofa Beach (snarf 136)** lobsterfrogmen for **barrel of gunpowder (2403)**, collect 5,
    give to the keeper (click The Lighthouse building) → big army cut. Lobsterfrogmen hit hard — fight at full MP.
  - **Orchard** (chambers 127→130, gland-gated) — also a ~62 meat/fight mine, but the royal-guard gland drop is
    brutally RNG; bring max +item. Often not worth it.
  - **Nunnery** (Themthar Hills, **snarf 126**) — recover 100,000 meat from brigands; pure combat, no RNG, but
    SLOW without +Meat% (recovered meat does NOT go to you → meat-negative).
  - **Arena/Junkyard/Farm** — gated behind battlefield progress; unlock deeper in.
- Battlefield = **snarf 140** (as a hippy you fight frat boys). Progress is the **"Image #N"** number on the
  `bigisland.php` zone links (#0→#32), NOT the map sprite count (sprites look full even when nearly cleared).

## ⚠️ The war is MEAT-NEGATIVE
Enemies drop little/no meat; combat + healing burns MP (= meat). **Build a meat war chest + MP supply
(tiny houses) BEFORE grinding.** Sustainable loop: Airship-farm (snarf 81, ~100+ meat/fight net) → spend on war → refarm.

## 🏁 Final boss

### Reaching the boss (hippy side — "The Man")
After the battlefield is cleared (*"no Frat soldiers left — the way to their house is clear!"*), the pre-war
snarf 27 is dead (*"you shouldn't be here"*). Instead **click "The Orcish Frat House" building on the rendered
`bigisland.php` map** (~x503,y320) → **"Commence the Sense-Knocking"** link → boss fight.
(Frat side's boss is **The Big Wisniewski**, reached analogously via the Hippy Camp building.)

### ⭐⭐ Beating "The Man" — DPS RACE, do NOT turtle
- **He RAMPS UP damage every round.** Sleaze paddle ~55–59 early, climbing to ~70–100+ by round ~25.
- **Attrition/turtling LOSES** — the longer the fight, the harder he hits; you out-heal him early but eventually
  can't, and you run out of MP. His ramp will outrun heal+companions in a drawn-out fight.
- **WIN = pure DPS race.** Enter at FULL HP + FULL MP. **Open with the biggest nuke** (Pastamancer: Stuffed Mortar
  Shell 3007), then **spam your highest single-target attack EVERY round** (Pastamancer: Cannelloni Cannon 3005,
  scales with Mysticality), **heal ONLY at HP <35%.** A clean DPS race kills him in ~12 rounds.
- **Generic Damage Reduction barely helps** — "Really Hard" (DR 50 from hardening cream, item 11331, mall ~100 meat)
  extended survival (10→45 rounds) but does NOT win and hardly dents his sleaze. His attack is **sleaze elemental**;
  generic flat DR is largely ineffective vs it (sleaze RESISTANCE would be the real mitigation, but the race makes
  mitigation unnecessary). **Don't waste time stacking DR — just out-DPS him.**
- **Torpedo-first / heal-heavy = lower DPS = drags into his lethal ramp = loss.** Lead with your strongest spell.
- **Boss attempts cost 0 adventures.** Only the Beaten-Up recovery rest costs 1 adv. Retries are cheap:
  lose → `campground.php?action=rest` (clears Beaten Up) → scroll(595) full HP + tiny houses(592) full MP →
  re-click frat house → retry.

### ✅ VERIFIED KILL — Day 127, run #2: **5 rounds, no damage taken after round 4**
The doctrine above is confirmed, and can be tightened:
- **Entry state:** 303/305 HP, 393/402 MP, Buffy's **Ghostly Shell + Astral Shell**, **Vampieroghi thrall up**.
- **Every round: `Weapon of the Pastalord` (3008, 32 MP).** Five casts, no opener swap, no heals, no items.
  HP track 303 → 246 → 244 → 212 → 177, then he died. He never got into his lethal ramp band.
- ⚠️ **This refines the "open with Stuffed Mortar Shell 3007, then Cannelloni 3005" advice above:** once your
  MP pool is deep enough to afford 32 MP *every* round, **the Pastalord is simply the better spell every round**
  and the fight ends before ramp matters. Cannelloni (3005, 8 MP) is the fallback for a shallow MP pool.
  (Pastalord is **physical** — fine here; it is useless vs the physically-immune spirits, see `HANDOFF.md`.)
- **Prep that made it a 5-round fight:** `campground.php?action=rest` → `topMP` ladder to ~full → `healUp` →
  confirm thrall in the charpane. All of that is free; only the rest costs an adventure.
- **Entry point sanity check:** `bigisland.php?place=camp&whichcamp=2` flips from the refusal text to narrative
  prose once the way is clear, and the page then exposes **`bigisland.php?action=bossfight&pwd=<hash>`** — you
  can GET that directly instead of hunting the map pixel.
- **Drop:** *really dense meat stack* (**autosells for 5,000 meat** — see the sell endpoint note below), plus a
  stat point. That single item funded the whole evening's shopping.

### Reward
Visiting `council.php` after the kill auto-completes the war → war-hero medal (the specific reward varies by
number of side quests completed). The war quest leaves the log.
✅ Day 127 (2 side quests done, 4x kills): reward was the **Blue Diamond of Honesty**.

💰 **Autoselling the boss drop — use the right endpoint.** `sellstuff.php` is only the *display* page; posting
to it silently does nothing (meat unchanged, no error). The real target is **`sellstuff_ugly.php`** with
`pwd`, `action=sell`, `mode=3`, `quantity=N`, and a field named **`item<id>=<id>`** (e.g. `item2829=2829`).
Success text: *"You sell your … to a crushed dwarf with a pair of pliers for 5,000 Meat."*

## General boss-fight takeaway (reusable)
"The Man" is the canonical **ramping boss** — for the general "race it, don't turtle" lesson that applies to any
high-HP boss that hits harder over time, see the boss note in `HANDOFF.md`.


## Getting to the island & starting the war from scratch (verified Day 123)

1. **You need a boat.** `island.php` requires a **dingy dinghy**: **dinghy plans** cost **3 Shore Inc.
   Ship Trip Scrip** (`shop.php?whichshop=shore`, row **176**) - one scrip per Shore vacation
   (snarf **355**, choice 793, ~500 meat + 3 adv each) - plus **dingy planks** (mall, item 140, ~340
   meat). `inv_use` the plans with planks in inventory -> **dingy dinghy** -> `island.php` opens.
2. **Camp outfits come from the camps themselves, mostly via NONCOMBATS.**
   - **Orcish Frat House (27)** handed over the whole **Frat Boy Ensemble** (Orcish baseball cap 239,
     Orcish frat-paddle 241, Orcish cargo shorts 240) in ~14 turns of noncombats, no disguise needed.
   - Then **wear the frat outfit and farm the Hippy Camp (26)** - it turns hostile and the war hippies
     drop the **War Hippy Fatigues**: reinforced beaded headband (2337), bullet-proof corduroys (2032),
     round purple sunglasses (2033). Took ~29 wins; Fat Leon's helped the last piece.
   - ⚠️ **The sunglasses are an ACCESSORY** - free a slot first (we had Mega Gem / talisman / etc.).
3. **Wear the full War Hippy Fatigues -> adventure the Orcish Frat House (27)** -> choice **146**
   -> **"Screw this, head to the roof"** -> **the war starts** and `bigisland.php` goes live.
4. Battlefield = **snarf 140**; progress is the **"Image #N"** in the zone link (0 -> 32).
   At 0 side quests it moves ~1 image per 9-10 wins (37 wins took us #0 -> #4).


## Verified war numbers (Day 124)

- **The Lighthouse road opens at about Image #7.** Grind the battlefield until
  `bigisland.php?place=lighthouse` stops saying *"You can't fight your way through the frat boys"* -
  re-test it every ~10 wins rather than assuming a fixed threshold.
- **Sonofa Beach (136)** then works: **lobsterfrogmen drop a barrel of gunpowder at roughly 1 per kill**
  (5 needed). The zone is noncombat-heavy, so budget ~3 turns per barrel.
- **Hand the barrels in at `bigisland.php?place=lighthouse&action=pyro`** (the plain `place=lighthouse`
  page has no button - the `action=pyro` link is the turn-in).
- **Measured value of the x2 multiplier:** 37 battlefield wins moved the front **4 images** at 0 side
  quests; **54 wins moved 9 images** with the Lighthouse done. Each further side quest doubles again.


## The Farm side quest (verified Day 125) - the cheapest second doubling

- Opens once the front is ~**Image #13** (Farm / Nunnery / Orchard were all reachable then; the
  **Junkyard was still gated**).
- **Accept it at `bigisland.php?place=farm&action=farmer`** ("Ach! Me farm, it's overrun! Dooks all
  over it!").
- **The farm page then lists its own duck zones - snarfs 142, 144, 147.** Clear each (~10 wins);
  **a cleared zone disappears from the farm page**, which is the progress gauge.
  🚨 **snarf 137 is NOT part of this quest** - adventuring there returns unrelated noncombats and wastes
  turns (cost us 7).
- **Talk to the farmer again** when all three are gone -> he plants soybeans -> **side quest complete**.
- No RNG, no items to collect - purely combat, which makes it the best second pick after the Lighthouse.

## Observed pace with multipliers (hippy side, base Mys ~225)
| Multiplier | Wins | Images gained |
|---|---|---|
| 1x (no side quests) | 37 | 4 |
| 2x (Lighthouse) | 54 | 9 |
| 4x (Lighthouse + Farm) | 71 | 8 (deeper images, #13 -> #21) |

⚠️ **The war is MP-hungry as well as meat-negative** - we hit 0 MP twice on Day 125 mid-advance.
Buy ~25 MMJ before starting and expect to restock mid-day.


## The Junkyard side quest - know the cost before you commit (Day 126)

- Opens later than Farm/Nunnery/Orchard (still gated at Image #13; **open by #21**).
- **`bigisland.php?action=junkman`** = Yossarian, who hands over the **molybdenum magnet (2497)** for free.
- The four tools are then taken from **tool-carrying gremlins** in snarfs **182 / 183 / 184 / 185** by
  **using the magnet as a combat item** (`fight.php?action=useitem&whichitem=2497`) on the right gremlin.
- 🚨 **The tool gremlins are rare: 12 fights in one zone produced none.** Do the arithmetic before
  committing - at 4x the front moves ~9 wins per image, so the remaining images have a known cost, while
  the Junkyard's is open-ended. On Day 126 we **skipped the 8x** and pushed the battlefield instead,
  which was the right call with ~11 images left.
