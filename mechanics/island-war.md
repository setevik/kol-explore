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
🚨 **CORRECTION: several side quests are GATED BEHIND BATTLEFIELD PROGRESS.** At
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

### 📊 The Man — stat block (wiki)

**HP 2,000 · Attack 250 · Defense 225 · No-Hit 269 · Initiative 60 · Phylum dude · Element sleaze · no resistance.**
Drops the **really dense meat stack** (autosells ~5,000).
🚨 **You cannot enter the fight while drunk** — *"You're too drunk to go there. So don't go there."* ⇒ **fight the
boss BEFORE the evening drink step**, not after. (A day that fills the liver first cannot finish the war.)
⚔️ **Defense 225 is an accuracy gate** for a melee class whose buffed Muscle is below it — open with the
Defense-lowering skill (Seal Clubber: **Club Foot**) before spending rounds on damage, or the damage column
comes back blank (see `combat-and-initiative.md`).

📦 **War combat items, measured off the wiki** (all one round each, so they are a *backup*, not a plan, against
2,000 HP): **beer bomb 55–75 physical** · **water pipe bomb 55–75 physical** · **patchouli oil bomb 65–80 stench**
· **sake bomb 45–60 physical + weakens the enemy** · fire of unknown origin 35–45 hot + 35–45 spooky ·
photoprotoneutron torpedo 30–40 physical. The battlefield drops beer/sake bombs steadily, so a stack of 15+ is
normal by the time the front clears — worth ~1,000 damage in total if the fight goes badly.

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

### ✅ VERIFIED KILL #2 — a MUSCLE class, 7 rounds, two hits taken

**Level 14 Seal Clubber, base Muscle 211 (below his Defense 225), dual-wielding black sword + Hammer of Smiting.**
Entry: **376/376 HP, 165/205 MP**, no buffs at all, no familiar contribution worth noting.
**Line that won it: `Club Foot` ×2 (rounds 0–1), then `Lunging Thrust-Smack` every round.** He landed exactly two
blows (68 and 74) and died on round 7 at 262/376 HP. No healing item was needed, no bombs were thrown.
⇒ **The Defense gate is the whole fight for a melee class:** two casts of the Defense-lowering skill turn a
Muscle-211 character into someone who hits a Defense-225 boss every round. Don't open with damage.
⇒ The ramp never started — consistent with the Pastamancer note below: **kill him inside ~10 rounds and the
ramping damage is irrelevant.** Budget ~110 MP (16 for Club Foot + ~8/round).
💰 Drop: **really dense meat stack** (autosell 5,000, `sellstuff_ugly.php` with `mode=3`/`item2829=2829`).

### ✅ VERIFIED KILL — **5 rounds, no damage taken after round 4**
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
✅ Measured with 2 side quests done (4x kills): the reward was the **Blue Diamond of Honesty**.

💰 **Autoselling the boss drop — use the right endpoint.** `sellstuff.php` is only the *display* page; posting
to it silently does nothing (meat unchanged, no error). The real target is **`sellstuff_ugly.php`** with
`pwd`, `action=sell`, `mode=3`, `quantity=N`, and a field named **`item<id>=<id>`** (e.g. `item2829=2829`).
Success text: *"You sell your … to a crushed dwarf with a pair of pliers for 5,000 Meat."*

## General boss-fight takeaway (reusable)
"The Man" is the canonical **ramping boss** — for the general "race it, don't turtle" lesson that applies to any
high-HP boss that hits harder over time, see the boss note in `HANDOFF.md`.


## Getting to the island & starting the war from scratch (verified in-game)

1. **You need a boat.** `island.php` requires a **dingy dinghy**: **dinghy plans** cost **3 Shore Inc.
   Ship Trip Scrip** (`shop.php?whichshop=shore`, row **176**) - one scrip per Shore vacation
   (snarf **355**, choice 793, ~500 meat + 3 adv each) - plus **dingy planks** (mall, item 140, ~340
   meat). `inv_use` the plans with planks in inventory -> **dingy dinghy** -> `island.php` opens.
   ✅ **Choice 793's labels** (each *"Costs 3 Adventures and 500 Meat"*, each gives 1 scrip + substats):
   `Distant Lands Dude Ranch Adventure` (Muscle) · `Tropical Paradise Island Getaway` (Mysticality) ·
   `Large Donkey Mountain Ski Resort` (Moxie) — pick your main stat's. Opening the menu costs nothing.
   ⚠️ **Neither the dinghy, the plans nor the scrip is sold in the mall** (verified: no listings) — only the planks.
   ⭐ **Check storage first:** scrip is kept across ascensions, and ✅ a previous run's Hagnk's held **1 spare scrip**
   plus **both complete war outfits** (War Hippy Fatigues ×9+ of each piece, Frat Warrior Fatigues ×3+) — which
   skips step 2 below entirely.
2. **Camp outfits come from the camps themselves, mostly via NONCOMBATS.**
   - **Orcish Frat House (27)** handed over the whole **Frat Boy Ensemble** (Orcish baseball cap 239,
     Orcish frat-paddle 241, Orcish cargo shorts 240) in ~14 turns of noncombats, no disguise needed.
   - Then **wear the frat outfit and farm the Hippy Camp (26)** - it turns hostile and the war hippies
     drop the **War Hippy Fatigues**: reinforced beaded headband (2337), bullet-proof corduroys (2032),
     round purple sunglasses (2033). Took ~29 wins; Fat Leon's helped the last piece.
   - ⚠️ **The sunglasses are an ACCESSORY** - free an accessory slot first.
3. **Wear the full War Hippy Fatigues -> adventure the Orcish Frat House (27)** -> choice **146**
   -> **"Screw this, head to the roof"** -> **the war starts** and `bigisland.php` goes live.
   ✅ Re-verified on a Level 13 Muscle class: 146 arrived on the **7th** Frat House turn (6 War Pledge / drill
   sergeant fights, all one round), labels `Wander this way` · `Wander that way` · `Screw this, head to the roof`.
   The island page then shows **`The Battlefield [Image #0]`** and the quest log flips to *"You've managed to get
   the war… started"*.
   ⚠️ **The battlefield zone is tied to the outfit:** snarf **140** is *"The Battlefield (War Hippy Fatigues)"*
   (the frat side's is **132**), recommended main stat **180**, ML 170–210. Keep the whole outfit on while you
   grind it.
4. Battlefield = **snarf 140**; progress is the **"Image #N"** in the zone link (0 -> 32).
   At 0 side quests it moves ~1 image per 9-10 wins (37 wins took us #0 -> #4).


## Verified war numbers

- **The Lighthouse road opens at about Image #7.** Grind the battlefield until
  `bigisland.php?place=lighthouse` stops saying *"You can't fight your way through the frat boys"* -
  re-test it every ~10 wins rather than assuming a fixed threshold.
  ✅ **Re-verified exactly at Image #7** (closed at #6, open on the win that reached #7). The wiki gives the real
  rule: as a hippy the Lighthouse opens once **64+ frat warriors** have been killed on the battlefield.
- **Sonofa Beach (136)** then works: **lobsterfrogmen drop a barrel of gunpowder at roughly 1 per kill**
  (5 needed). The zone is noncombat-heavy, so budget ~3 turns per barrel.
  ✅ **Measured: 26 turns → 5 lobsterfrogmen → 5 barrels, 0 losses** (21 of the 26 were noncombats; the zone is
  **10% combat**, and every lobsterfrogman drops a barrel, so the turns go on finding them, not on drops).
  ML 171, Defense 152, 190 HP — one round each for a Level 13 Muscle class.
  🚨 **The turn-in link needs the pwd: `bigisland.php?place=lighthouse&action=pyro&pwd=<hash>`.**
  ✅ Measured failure and fix: the same URL **without** `&pwd` returned a normal 200 whose text was just
  *"The Lighthouse — Back to the Main Map"* — no keeper, no error — and the barrels stayed in inventory; the next
  40 battlefield wins were therefore spent at 1x. With the pwd: *"My gunpowder! Big boom! … My bombs for you,
  bumpty-bumpty-bump!"*, the 5 barrels are consumed and he vanishes inside.
  ⚠️ **The plain `place=lighthouse` page has no visible button** — scrape the page's own links and you will find the
  `action=pyro` one already carrying a pwd. **Visit `action=pyro` once more afterwards** for the leftovers
  (*patchouli oil bomb*, 2 × *exploding hackensack* on the hippy side).
  📊 **Pace after this first doubling, measured on the same character:** 40 wins moved the front **#9 → #13**
  (~10 wins per image) — the *same* wins-per-image as 1x earlier in the day (#0 → #6). ⇒ **deeper images cost
  more kills**, so the multiplier keeps the pace roughly flat rather than visibly halving the grind. Judge
  progress by images gained per day, not by expecting the wins-per-image number to drop.
- **Hand the barrels in at `bigisland.php?place=lighthouse&action=pyro`** (the plain `place=lighthouse`
  page has no button - the `action=pyro` link is the turn-in).
- **Measured value of the x2 multiplier:** 37 battlefield wins moved the front **4 images** at 0 side
  quests; **54 wins moved 9 images** with the Lighthouse done. Each further side quest doubles again.


## The Farm side quest (verified in-game) - the cheapest second doubling

- Opens once the front is ~**Image #13** (Farm / Nunnery / Orchard were all reachable then; the
  **Junkyard was still gated**).
- **Accept it at `bigisland.php?place=farm&action=farmer&pwd=<hash>`** ("Ach! Me farm, it's overrun! Dooks all
  over it!"). ⚠️ Include the **pwd** — without it the page renders and nothing happens.
- 🚨 **CORRECTION — the quest STARTS in the Barn, snarf 137.** An older note here said "137 is NOT part of this
  quest"; ✅ verified otherwise: after the farmer accepts, **the Barn is the only live `snarfblat=` link on the farm
  page**, and it serves *generic ducks*.
- ✅ **How the other zones open (wiki + verified):** the Barn has **three one-time noncombats spread over its first
  ~10 adventures** (combat frequency does not affect them, and free runaways still count). Each shoos part of the
  flock into a different zone, and **the Barn closes for good after the third**:
  | Noncombat | Options → zone opened |
  |---|---|
  | **Cornered!** (choice **147**) | `Grab the pitchfork and wave it around` → **Granary** (rotund ducks) · `Bang on the cowbell` → **Bog** (stench) · `Make a fence out of the barbed wire` → **Pond** (cold) |
  | **Cornered Again!** | `Knock over the lantern` → **Back 40** (hot) · `Try to catch them in the beartrap` → **Family Plot** (spooky) |
  | **How Many Corners Does this Stupid Barn Have!?** | `Grab the shotgun and start firing` → **Shady Thicket** · `Dump out the drum` → **Other Back 40** |
  ⇒ You end with **three duck zones**, one per noncombat; clear each (~10 wins), then talk to the farmer again.
  **A cleared zone disappears from the farm page**, which is the progress gauge.
  💡 The duck types are elemental (cold/hot/stench/spooky), so a physical-damage class can take whichever options
  it likes; a caster should pick zones its element beats.
- **Talk to the farmer again** when all three are gone (again **with `&pwd`**) -> *"Ach, the dooks are gone! Thank
  ye."* -> he plants soybeans -> **side quest complete**.
- No RNG, no items to collect - purely combat, which makes it the best second pick after the Lighthouse.
- ✅ **Measured end to end on a Level 14 Muscle class: 32 adventures, 0 losses** — 4 Barn turns to fire all three
  shoo noncombats, then **9 + 10 + 9** turns to empty the three zones. The snarfs match the monsters:
  **142 = hot ducks** (scorched / fire-breathing — the *Back 40*), **144 = rotund ducks** (the *Granary*),
  **147 = drunk ducks** (the *Shady Thicket*). Which three you get depends on the shoo options you pick, so read
  the farm page's live `snarfblat=` links rather than assuming these numbers.
- ⚠️ **The zone list is the progress gauge**: each zone vanishes from the farm page the moment its ducks are gone,
  and when the list is empty the farmer is ready. Don't count kills.

## Observed pace with multipliers (hippy side, base Mys ~225)
| Multiplier | Wins | Images gained |
|---|---|---|
| 1x (no side quests) | 37 | 4 |
| 2x (Lighthouse) | 54 | 9 |
| 4x (Lighthouse + Farm) | 71 | 8 (deeper images, #13 -> #21) |
| 1x, **Level 13 Seal Clubber** (Muscle ~221, dual-wield, Lunging Thrust-Smack) | 44 | 5 (#0 -> #5), **0 losses** |
| 2x (Lighthouse), same character | 40 | 4 (#9 -> #13), 0 losses |
| **4x (Lighthouse + Farm)**, same character at Level 14 | 45 | 5 (#16 -> #21), 0 losses |

🚨 **The wins-per-image number barely moves as the multiplier climbs** — ~9–10 wins per image at 1x, 2x *and* 4x
on the same character. Deeper images simply need more kills, so each doubling roughly cancels the increase.
⇒ **Budget the war in images per day, not in "the next side quest halves the grind".** The side quests are still
worth doing (without them the later images would crawl), but expect ~4–5 images per 45 turns either way.

✅ The Muscle-class run confirms the 1x rate is **~9 wins per image** regardless of class, and that a Level 13
melee character handles the ML 170–210 frat soldiers in one round with MP from **phonics down (+46–50 MP each)**.

⚠️ **The war is MP-hungry as well as meat-negative** - it is easy to hit 0 MP mid-advance.
Buy ~25 MMJ before starting and expect to restock mid-day.


## The Junkyard side quest - know the cost before you commit

- Opens later than Farm/Nunnery/Orchard (still gated at Image #13; **open by #21**).
- **`bigisland.php?action=junkman`** = Yossarian, who hands over the **molybdenum magnet (2497)** for free.
- The four tools are then taken from **tool-carrying gremlins** in snarfs **182 / 183 / 184 / 185** by
  **using the magnet as a combat item** (`fight.php?action=useitem&whichitem=2497`) on the right gremlin.
- 🚨 **The tool gremlins are rare: 12 fights in one zone produced none.** Do the arithmetic before
  committing - at 4x the front moves ~9 wins per image, so the remaining images have a known cost, while
  the Junkyard's is open-ended. With ~11 images left it was correct to **skip the 8x** and push the
  battlefield instead.
