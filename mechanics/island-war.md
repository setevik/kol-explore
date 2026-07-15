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

### Reward
Visiting `council.php` after the kill auto-completes the war → war-hero medal (the specific reward varies by
number of side quests completed). The war quest leaves the log.

## General boss-fight takeaway (reusable)
"The Man" is the canonical **ramping boss** — for the general "race it, don't turtle" lesson that applies to any
high-HP boss that hits harder over time, see the boss note in `HANDOFF.md`.
