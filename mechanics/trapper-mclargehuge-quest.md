# The Trapper / Mt. McLargeHuge Quest (Level 8 Council quest) — verified in-game

Council → talk to **John the Trapper** (`place.php?whichplace=mclargehuge&action=trappercabin`).

## Phase 1 — ore + cheese

- Needs **3 asbestos ore** (or linoleum/chrome — he names one) + **3 goat cheese (322)**.
- ⚠️ **VERIFY THE ORE ITEM ID: asbestos ore = 364** (linoleum 363 · chrome 365). He names ONE type; only that
  one counts. A wrong id in your notes reads as "I already have 8 of these" and wastes the trip.
- Ore: equip **Mining Gear outfit** (`inv_equip.php` POST `which=2&action=outfit&whichoutfit=8`), then dig via
  `mining.php?mine=1&which=<sq>` (~1 adv/dig; also yields diamonds/stones of eXtreme power ≈ meat).
- Cheese: **the Goatlet (271, ML ~68)** — drops from **dairy goats**, ~1 in 4. ✅ Measured: **3 cheese in 13
  fights, 13W/0L** at L9 Muscle 101.

### 🪨 NO MINING GEAR? The mine hands you the whole outfit — you do NOT need Degrassi Knoll

🚨 **If you took the hostile/bugbear Knoll path, its store does not exist and you cannot buy miner's gear** —
and in Ronin the mall is no help either (it sells into Hagnk's, paid from Hagnk's meat, 1 pull/item/day).
✅ **Farm the gear from the mine's own encounters (undisguised).** Verified live — the full set in ~14 turns:

| Source | Gives |
|---|---|
| **dopey 7-Foot Dwarf** (fight) | miner's helmet (**360**) |
| **sleepy 7-Foot Dwarf** (fight) | miner's pants (**361**) |
| **grumpy 7-Foot Dwarf** (fight) | 7-Foot Dwarven mattock (**362**) |
| **choice 556** *More Locker Than Morlock* → **"Open the locka'"** | one random piece (helmet / pants / mattock / safety vest) |
| **choice 20** *See You Next Fall* → **"Give 'im the stick"** = helmet · **"DOOOOON…"** = **mattock** · "Negotiate for a reward" | pick whichever piece you still lack |
| **choice 19** *100% Legal* → **"Ask for ore"** | ore if the dwarf has any, else **miner's pants** as consolation |

⚠️ Match these choices by **label text** — button order is randomized (see HANDOFF).

### ⛏️ Reading the mine grid

`mining.php?mine=1` renders a grid. **Only squares wrapped in `<a href='mining.php?mine=1&which=N…'>` are
diggable**, and the image tells you what's inside:
- `wall1111.gif` = *Rocky Wall* — plain, usually nothing
- **`wallsparkle4.gif` = *Promising Chunk of Wall*** — ore/gems ⭐ always prefer these

```js
const opts = [...m.matchAll(/<a href='mining\.php\?mine=1&which=(\d+)[^']*'><img src='[^']*\/([a-z0-9_]+\.gif)'/g)]
  .map(x => ({sq:x[1], img:x[2]}));
const target = opts.find(o => /sparkle/i.test(o.img)) || opts[0];
```
✅ Measured yield over **23 promising digs**: 3 asbestos · 4 chrome · 3 linoleum · 3 diamonds · 2 stones of
eXtreme power · 1 loadstone. ⇒ **Budget ~8–12 digs per specific ore type** (the type is random per dig).
- Turn both in at the cabin → he starts fixing the ski lift and says get warm clothes.

## Phase 2 — eXtreme Cold-Weather Gear

- Outfit = **eXtreme scarf (355, HAT) + snowboarder pants (356, PANTS) + eXtreme mittens (399, ACCESSORY)**.
  ✅ **Check Hagnk's first** — a previous ascension's estate may already hold all three. Equip in one shot:
  `inv_equip.php?action=outfit&whichoutfit=7` (7 = eXtreme Cold-Weather Gear).
- Without the pieces: farm them at **the eXtreme Slope (273, ML 73–75, rec stat 70)** — drops:
  scarf ← cross-country hippy, pants ← Orcish snowboarder, mittens ← sk8 gnome; several choice
  adventures also award pieces (meat option ~200 if you have them all).
- 🚨 **THE OUTFIT ALONE MAY BE THE WHOLE GATE — CHECK THE MAP BEFORE FARMING FOR NONCOMBATS.**
  The quest line reads *"Get Superhuman (5) cold resistance"*; the **eXtreme Cold-Weather Gear by itself gives
  `Cold Protection: High (5)`** (see it on `charsheet.php`), which **satisfies the (5) requirement**, and
  **The Mist-Shrouded Icy Peak appears on `place.php?whichplace=mclargehuge` immediately.**
  ⚠️ Verified the hard way: 27 slope turns hunting a noncombat chain that was not required — the peak had been
  unlocked the whole time. ✅ **After equipping the outfit, re-list the zones and look for the peak** before
  spending a single turn on the slope.
- *(Previously observed chain, may fire but is not the gate:* *Discovering Your Extremity* → *2 eXXtreme 4 U* →
  *3 eXXXtreme 4ever 6pack*, seen at slope turns 1, 9, 17 on a different run.*)*
- ⚠️ **The peak link is `action=cloudypeak2` once the gear step is done.** Before it, the map shows
  **`cloudypeak`** — and that pre-gear name **silently no-ops afterwards** (returns a bare page, no fight, no
  error, no turn spent). ✅ **Always scrape the action from `place.php?whichplace=mclargehuge` rather than
  hard-coding either name**, and keep a "did an adventure actually get spent?" guard in the loop — that guard
  is what catches this instantly.
- The slope is also a **fine leveling zone** at L9–10 (≈18 substats/win, near-100% win with MP up).

## Phase 3 — the Mist-Shrouded Peak & Groar

- ⚠️ The peak link is `place.php?whichplace=mclargehuge&action=cloudypeak2` **(cloudypeak2, not cloudypeak —
  the pre-gear action name silently no-ops after the gear chain)**. Outfit must still be worn to climb.
- Sequence: **3 panicking Knott Yetis** (ML 105, HP 90, drop yeti fur, 160–240 meat) → **Groar**
  (ML 120, HP 250, cold-aligned, **weak to HOT and SPOOKY** — Necrotelicomnicon spooky-tuned Cannelloni
  is ideal). After a loss you **re-enter straight at Groar** (no yeti re-clear).
### ✅ GROAR SOLVED — beat the accuracy gate with a DEFENSE DEBUFF, not with levels

🎯 **The cheap answer: weaken his Defense from inside the fight.** At attack stat **106 vs his Defense 108** a
straight swing still landed nothing; **two casts of a defense-weakening combat skill** (Seal Clubber's
`Club Foot`, 8 MP) flipped the same fight to a win in ~9 rounds. Two days of levelling for the "required"
~121 stat turned out to be unnecessary.

**Winning kit (Seal Clubber, L9, attack stat 106):** eXtreme Cold-Weather Gear (mandatory, set bonus) ·
Hammer of Smiting · **keg shield** off-hand (DR 11) · giant motorcycle boots + eXtreme mittens ·
**filthy poultices as in-fight heals** (87 HP, no adventure) · **Mountain Stream soda** for in-fight MP.
⚠️ **Monstar energy beverage is NOT combat-usable** — it stalls the fight loop; use the soda.
**Measured:** he deals **30–37 cold damage/round** through Cold Protection (5) and never misses.
Drops: **Groar's fur** → the Trapper → **fuzzy busby** (hat, Power 130, Muscle req 50) + quest complete,
plus **8 dense meat stacks = 8,000 meat autosell**.

⚠️ **The stat-gated-accessory trap:** the obvious fix is a big +Muscle accessory, but the good ones are
**Mysticality-gated** (headhunter necktie +15 needs base Myst 65) and **requirements read BASE stats**, so
lending yourself Myst with a keg shield does not unlock them. See HANDOFF.

### 🚨 Groar's numbers — why it is an ACCURACY gate first

| HP | Attack | Defense | No-Hit | Initiative | Element |
|---|---|---|---|---|---|
| **250** | 120 | **108** | **∞ (he NEVER misses)** | 50 | **Cold** |

🎯 **You must exceed Defense 108 with your main stat, WHILE WEARING the cold outfit.** Measured failure
(Seal Clubber L9): 9 rounds, **zero damage dealt** — every attack line blank, the game saying *"out of your
league!"* — while he dealt **43–56 cold damage every single round** through `Cold Protection: High (5)`.
Spooky-damage off-hands, healing items and resistance are all **worthless below the accuracy gate**.

🚨 **The outfit is the trap.** `Cold Protection (5)` is an **outfit SET bonus** — none of the three pieces
carries cold resistance alone, so you cannot wear two and keep your stat hat. The outfit cost **13 Muscle**
(111 → 98), so the real requirement is:

> **buffed main stat ≥ monster Defense + outfit cost ≈ 108 + 13 = ~121, measured while dressed to fight.**

✅ **Check it for free before climbing:** equip the outfit, read `muscle` from `api.php?what=status`, swap back.
Panicking Knott Yetis (HP 90, Def 92) are beatable well below that, so **clearing the yetis proves nothing
about Groar** — measure separately.

- **Groar one-shot us at 53 max HP on attempt 1.** Winning prep (attempt 2, 8 rounds, never dropped low):
  1. kmail **Buffy** for **Ghostly Shell + Astral Shell** (free, ~160 damage absorption + 1 all-res);
  2. full HP (scroll 595) + ~120 MP (tiny houses) + **fresh Springy Fusilli**;
  3. buy a **red pixel potion (464, ~750 meat — combat item, ~110 HP)** as the emergency heal;
  4. fight: **Entangling Noodles → Stuffed Mortar Shell → Cannelloni every round**, potion if HP ≤ 35.
- Drops: **Groar's fur** (quest) + **5 dense meat stacks (258) = 5,000 meat autosell**.
- Deliver the fur at the cabin → **fuzzy earmuffs** + quest complete. Trapper then trades yeti furs.
