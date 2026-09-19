# Spookyraven Manor — Lady Spookyraven Ghost Chain

## Overview

This is a multi-step side quest that opens Spookyraven Manor's upper floors AND, critically, **gates the Spookyraven Manor cellar** — which is the Staff of Fats sub-quest for the Holy MacGuffin. Until the full ghost chain is done and the **"We'll All Be Flat"** encounter fires in the Haunted Ballroom, the cellar (`place.php?whichplace=manor4`) returns "You shouldn't be down here yet."

Rewards at the end: massive stat gains (+100 in each substat + 1 point to each primary), Ballroom access, and the cellar unlock path.

## Confirmed zone IDs

- 388 = Haunted Kitchen
- 389 = Haunted Conservatory
- 390 = Haunted Library
- 391 = Haunted Billiards Room
- 392 = Haunted Bathroom
- 393 = Haunted Bedroom
- 394 = Haunted Gallery
- 395 = Haunted Ballroom
- 113 = Haunted Pantry (also listed on manor1)
- `place.php?whichplace=manor1` = First Floor
- `place.php?whichplace=manor2` = Second Floor (Stairs Up from manor1)
- `place.php?whichplace=manor3` = Third Floor (lady's chamber via `manor3_ladys`)
- `place.php?whichplace=manor4` = Cellar (gated until "We'll All Be Flat")

## 🔑 Step 0 — the manor starts LOCKED; the telegram opens it

✅ **Verified: on a run where the manor hasn't been started, only the Haunted Pantry (113) is enterable.** The
Kitchen, Conservatory, Billiards Room, Library and Stairs Up are drawn on `place.php?whichplace=manor1` but link to
`action=manor1lock_<room>`, and `adventure.php` for them answers *"You shouldn't be here."* at no turn cost.
- **`inv_use` the *telegram from Lady Spookyraven* (7304)** — it arrives by KMail at Level 5 and is easy to
  forget in the misc tab. Per the wiki it unlocks **The Haunted Kitchen (388)** and **The Haunted Conservatory
  (389)**.
- **Kitchen → Spookyraven billiards room key** (21 drawers; `1 + resistance ÷ 3` per fight, max 4) → **Billiards
  Room (391)** → pool ghost → **library key** → the chain below. See `pool-skill.md` for the pool game and its
  drunkenness window.
  ⚠️ **Brother Smothers's Blessing does NOT speed up the drawers.** ✅ Measured: with the blessing (+3 all elemental
  resistance) active, **10 of 10 Kitchen fights searched "a single drawer"** — the formula's `1 + 3÷3 = 2` never
  happened. Don't spend the once-a-day blessing on this zone; either bring real **hot or stench resistance of 6+**
  (which the formula says should reach 3 drawers) and verify the count on the first fight, or just accept ~21
  cheap fights (the Kitchen is ML 20–22).
  ✅ Read progress from the fight text: *"You manage to dig through a single drawer looking for the key…"* per fight.
  ✅ **Measured end to end with no real resistance: exactly 21 fights, one drawer each, then *"Fortunately, you find
  the key, in the last drawer you check"* on the 21st — 0 losses** (Kitchen monsters are ML 20–22). Budget 21
  adventures flat, plus a free *Lights Out* interruption.
  🐛 Never detect success with `/find the key/` — the failure line *"you don't find the key"* matches it too.
  ✅ **Lights Out in the Kitchen (choice 893)** — `Refuse to Take the Heat` · **`Light a Candle`** · `Open the Icebox`.
  It interrupts the grind on the manor's periodic Lights Out timer. **`Light a Candle` costs no adventure** and just
  clears the choice (a joke-telling witzergeist, then the lights come back); give the loop a rule for it rather
  than letting an unknown-choice stop end the burst.

## Chain Walkthrough

> ⚠️ **The Ballroom step needs "your father's diary" (verified in-game).** After delivering the dancing
> finery, the **Haunted Ballroom (395)** unlocks — but the cellar-opening encounter **"We'll All Be Flat" is
> choice 921 and requires the diary** ("prop up your father's diary so you can see the sheet music"). 40 turns in
> the ballroom without it produced nothing. The diary comes from the later Lord Spookyraven/manor3 chain, so
> **don't burn turns farming the ballroom for the cellar until you have it.**
> Also note the **Ballroom is ML 65** (Recom Stat 40) — punishing at Level 7 — a run at that level went 14W/24L.

### Prereq: Defeat the Billiards Ghost
You need the **Spookyraven library key** (from beating the Billiards Room pool-shark ghost). See `pool-skill.md`.

### Step 1: Find the Necklace
Zone: **The Haunted Library** (snarfblat 390). **The necklace is a GUARANTEED drop from the 5th writing desk you defeat in the Library — NOT a random rate.** The Library has multiple monsters (writing desks, bookbats, banshee librarians); only writing desks count. With Library NCs (book readings) being very frequent, expect to burn 30+ advs just to encounter 5 actual writing desks.

✅ **Re-verified: the necklace dropped on exactly the 5th writing desk.** Measured: **10 Library fights total** (5
writing desks, 3 banshee librarians, 2 bookbats), **0 losses, and zero book noncombats** that run — so the "30+
adventures" budget above was pessimistic; plan on ~10–15. Stop the loop on the necklace appearing **in inventory**
(check by name between fights), not on a desk count alone.

⚠️ Counter trap: a naive "monster name in mainpane text" detector will double-count after disconnects / page reloads / mid-fight reads. Build the counter to gate on per-fight monotonic round numbers that reset *only* on the explicit `Adventure Again` page navigation.

Also look out for:
- **"Take a Look, it's in a Book!"** choice — read chapters for +stats or minor rewards. *Rise of the House of Spookyraven* tells the Lord's story; also *Better Haunted Homes and Conservatories Cookbook* (recipes) and *Ancient Forbidden Unspeakable Evil, a Love Story* (spells).

### Step 2: Deliver to Lady Spookyraven (1st Floor)
Return to `place.php?whichplace=manor1`. Click Lady Spookyraven. She takes the necklace; you receive **ghost of a necklace** (accessory item).
✅ Verified: **her icon only exists on the map while the necklace is in your inventory** — before that, there is no
Lady link to find. With it, she is `place.php?whichplace=manor1&action=manor1_ladys`; one visit, no choice to
answer, the necklace is taken and *ghost of a necklace* arrives.

New quest: *"Go see Lady Spookyraven on the second floor."*

### Step 3: Meet Lady on 2nd Floor
Stairs Up (now accessible) → `place.php?whichplace=manor2`. Click Lady Spookyraven. She asks for her **dancing finery**:
✅ **Verified: the three finery rooms are LOCKED until you have this conversation.** Before it, every room on
`manor2` links to `action=manor2lock_<room>`; one visit to **`place.php?whichplace=manor2&action=manor2_ladys`**
(no choice to answer) turns **Bathroom 392, Bedroom 393 and Gallery 394** into live `adventure.php` links. The
**Ballroom** and **Stairs Up** stay locked afterwards — they open later in the chain.

| Item | Zone | Snarfblat |
| --- | --- | --- |
| Lady Spookyraven's powder puff | Haunted Bathroom | 392 |
| Lady Spookyraven's finest gown | Haunted Bedroom | 393 |
| Lady Spookyraven's dancing shoes | Haunted Gallery | 394 |

### Step 4a: Bathroom → Powder Puff

✅ **Lights Out in the Bathroom (choice 892)** — `Fumble Your Way to the Door` · `Flush the Toilet` · `Check out the
Vanity`. **`Fumble Your Way to the Door` costs no adventure** and just clears it (a wet bathmat, no fight, no item).
Together with the Kitchen's *Light a Candle*, **both Lights Out variants seen so far had a free, harmless exit** —
give the loop an explicit rule for each room's variant rather than letting it stop, but don't assume the other
rooms' variants behave the same until verified. (The wiki lists every option's outcome as unknown.)

Bathroom monsters are tissue-paper constructs (physical damage, easy). Keep grinding until the **"Never Gonna Make You Up"** choice: open an ornate monogrammed makeup case that's bouncing like a possessed spirit. This triggers a **cosmetics wraith** boss fight.

✅ **Verified flow:** *Never Gonna Make You Up* is **choice 881** with a single option, `Open it`; it only appears after
**5+ turns in the zone**. The **cosmetics wraith** (HP 65, spooky, weak to hot/stench) died in one round and dropped
the powder puff — **13 zone turns, 3 fights, 0 losses**, puff confirmed in inventory (misc tab).
⚠️ **Choice 105, *Having a Medicine Ball*, shares the zone** — key your rules by choice number:
- `Gaze deeply into the mirror` — Mysticality substats, harmless.
- `Open it and see what's inside` — chains to **107 *Bad Medicine is What You Need*** (cough syrup / hair oil /
  vitamins / **`Take off`, which costs no adventure**).
- 🚨 `Say "Guy made of bees."` — **every fifth time summons the Guy Made of Bees: ML 99,999, HP 99,999.** Never let a
  loop pick it.

Boss opens with ~33 damage (gets the jump). Standard Pastamancer combo (Entangling Noodles → Ravioli Shurikens burst) clears it. Drops:
- **Lady Spookyraven's powder puff** ✓
- old eyebrow pencil, old rosewater cream, old bronzer (flavor items)

Also expect a semi-rare **"Lights Out in the Bathroom"** (clock strikes 13, pick from toilet/vanity/door). Flavor only.

### Step 4b: Bedroom → Gown

✅ **Verified flow (20 fights, 0 losses):** every nightstand's drawer menu appears **immediately after you defeat it**
and costs no turn. Key the loop's rule by the menu's **label set**, because each nightstand type has its own:
- **880 — elegant animated nightstand:** `Open the single drawer` · `Break a leg (off of the nightstand)` · `Ignore it`.
  **`Open the single drawer` gives *Lady Spookyraven's finest gown* once**; later elegant drawers hold "nothing but
  ephemera", so stop checking for it once the gown is in inventory.
- **878 — animated ornate nightstand** (✅ verified: the fight header said *animated ornate nightstand* and the
  menu followed): `Open the top drawer` (meat) · `Open the bottom drawer` (Mysticality) · **`Look behind the
  nightstand` → *Lord Spookyraven's spectacles*, first time only** · `Look under the nightstand` (disposable
  camera) · `Ignore it`. ✅ The spectacles came from the first ornate nightstand met, on the 2nd Bedroom turn.
- **877 — animated mahogany nightstand:** `Check the top drawer` (half of a memo once, then coin purses) ·
  `Check the bottom drawer` (**bites you**) · `Look under the nightstand` (the class item, **only while the
  spectacles are equipped**) · `Ignore it`.
- **897 — Lights Out in the Bedroom:** `Search for a light` (opens a further menu) · **`Flee`** (the wiki's
  "Run away" — walks you out, harmless).
- **876** — `Check the top drawer` · `Check the bottom drawer` · `Ignore it`.
- 🐺 **The class standards** (Seal Clubber wolf / Turtle Tamer snake) come from the mahogany nightstand's (877)
  `Look under the nightstand`, **only with Lord Spookyraven's spectacles equipped** — see `seal-clubber-class.md`.
  A 20-fight grind without the spectacles found none.
- 🔧 **Log the monster name alongside each drawer menu** while grinding here, so the choice-number ↔ nightstand map can be
  verified rather than inferred.
- The zone also throws in non-nightstand monsters (a wardrobe-type enemy) with no drawer menu.
Elegant nightstands were common: four in 20 fights.

Bedroom has "Animated Nightstand" combat → choice pairs. Each nightstand variant has different drawer options:

| Nightstand | Contains |
| --- | --- |
| Mahogany | half of a memo |
| Ornate | hardcover book (+Myst stats), or trigger "jilted mistress" combat → antique hand mirror |
| Rustic | grip exerciser (+Muscle), old leather wallet |
| Simple | old leather wallet (again) |
| **Elegant** | **Lady Spookyraven's finest gown** ✓ via "Open the single drawer" |

Keep grinding until you find an Elegant Nightstand. Fight drops in this zone are mostly stat boosters.

### Step 4c: Gallery → Shoes (The Art Puzzle)

Gallery has 4 noteworthy encounters:
1. **"Out in the Garden"** painting — talk to the maidens, drink their blue vial → **Dreams and Lights** effect (10 advs, ~75% MP cost reduction in Gallery). HUGE for sustain.
2. **"Lights Out in the Gallery"** semi-rare (Magritte apple painting, Paint-Splattered dropcloth) — flavor only.
3. Pitchfork Couple combat — a 2-enemy fight that's immune to Entangling Noodles. Use Ravioli Shurikens directly.
4. **"Louvre It or Leave It"** — an M.C. Escher stairway lithograph you walk INTO, leading to a surrealist maze:
   - Stair choices cycle through Dalí (melting-clocks desert), Magritte, etc.
   - Eventually you pick the right stair direction and arrive in a **Degas ballerina studio**
   - Steal shoes from a girl whose feet match Lady Spookyraven's size: **Lady Spookyraven's dancing shoes** ✓

Note: the Escher maze may require multiple tries; if you pick wrong you pop back out to the Gallery.

✅ **Verified route to the shoes (the layout has been fixed since May 2014, per the wiki):**
1. **Louvre It or Leave It = choice 914** → `Enter the drawing`. It is conditional on **5+ turns spent in the
   Gallery**; ✅ it fired on the 6th Gallery adventure, after 5 fights (ML 56–60 cubist bulls, suits of armor,
   pitchfork couples — all one-round kills for a Level 12 Muscle class).
2. **Relativity = choice 904** (the start). Every maze page offers three `Take the stairs <direction>` buttons
   whose **direction words are reshuffled on every visit** — ignore them. **Position is what matters:** the
   first/second/third button (= `option` 1/2/3, rendered in that order).
3. **Take the MIDDLE button (option 2) until you reach The Persistence of Memory = choice 905**, then the **TOP
   button (option 1)** → **The Dance Class** → *Lady Spookyraven's dancing shoes* (first time; later visits give
   the 30-turn *Dancin' Fool* buff instead). ✅ Measured: the middle button cycled **905 → 908 → 911 → 905**;
   top at 905 dropped the shoes. **Only the 914 entry and the final step cost an adventure** — the
   stair hops were free.
4. 🐛 **Detect the clocks room by CHOICE NUMBER (905), not by text.** Its description says *"a puddle of…
   clock"* (singular) and never "melting" or "clocks", so a text regex walks straight past it, and the
   middle-button rule then loops forever with no turn cost. Other maze rooms seen: 908, 911, 913.
5. Other Gallery noncombats: **Out in the Garden = choice 89** (`None of the above` is free and re-schedules it
   10 turns later), **Lights Out in the Gallery = choice 896** (`Quit the Gallery`).

### Step 5: Deliver Finery + Dance

Return to Lady Spookyraven on 2nd floor with all 3 items. She says *"Meet me in the ballroom in five minutes!"* and vanishes.

Go to **Haunted Ballroom** (snarfblat 395) → *"Having a Ball in the Ballroom"* non-combat. Dance with her:

> "may I have this dance?"
> "Uh, sure," you say, "but I kind of have two left feet..."
> Lady Spookyraven laughs softly. "I think I'm beyond worrying about someone stepping on my toes."

**Rewards:**
- +100 Muscleboundness + 1 Muscle point
- +100 Enchantedness + 1 Mysticality point
- +100 Roguishness + 1 Moxie point

Lady Spookyraven departs peacefully. The ghost chain is complete.

### Step 7: Cellar Unlock — "We'll All Be Flat" (Holy MacGuffin gate)

After the dance, continue adventuring in the **Haunted Ballroom (395)**. The **"We'll All Be Flat"** noncombat fires → **opens the Spookyraven Manor Cellar** (`place.php?whichplace=manor4`).

On a character that already finished the Lady chain in a prior playthrough, manor2 is already open and the Ballroom NC fires within a few turns — no need to re-do necklace/finery/dance. **Always probe `manor2` directly first** to see if the chain is already done before grinding the Library for the necklace.

### Step 8: Cellar Boss — dissolve the Suspicious Masonry → Lord Spookyraven → **Eye of Ed**

The cellar boss drops the **Eye of Ed**, NOT the Staff of Fats. Staff of Fats comes from the **Palindome** (Dr. Awkward boss) — separate questline.

The cellar's **Suspicious Masonry** wall (`place.php?whichplace=manor4&action=manor4_chamberwall`) is dissolved with a **mortar-dissolving solution**, made from 6 room-specific ingredients. Each ingredient is a normal combat drop, ~1 per 6-10 fights:

| Ingredient | Room | snarfblat |
| --- | --- | --- |
| loosening powder | Haunted Kitchen | 388 |
| powdered castoreum | Haunted Conservatory | 389 |
| drain dissolver | Haunted Bathroom | 392 |
| triple-distilled turpentine | Haunted Gallery | 394 |
| detartrated anhydrous sublicalc | **Haunted Laboratory (manor3 / 3rd floor)** | **396** |
| triatomaceous dust | **Haunted Storage Room (manor3 / 3rd floor)** | **398** |

manor3 also has: Haunted Nursery (397, not part of the recipe — flavor/XP) and Lady Spookyraven NPC (`manor3&action=manor3_ladys`).

Cellar (manor4) room snarfblats: **Boiler Room 399, Laundry Room 400, Wine Cellar 401.** (None of these drop a mortar reagent — the Lab and Storage Room are upstairs on manor3, not downstairs in the cellar.)

**Crafting the solution: NOT needed manually.** When you visit the Suspicious Masonry wall holding all 6 reagents, the game auto-mixes and consumes them: *"You mix the mortar-dissolving ingredients into a nasty-smelling paste, and smear it all over the brickwork. ... The wall collapses."* No `craft.php` step.

The wall collapse reveals **The Summoning Chamber** (`place.php?whichplace=manor4&action=manor4_chamberboss`) → boss fight with **Lord Spookyraven**.

**Lord Spookyraven (boss tactics):**
- An easy fight — falls in ~3 rounds to a standard Pastamancer combo, full HP throughout.
- Open with **Entangling Noodles** to stun him; your familiar/thrall sustain heals off him meanwhile.
- Queue **Stuffed Mortar Shell**, then fire **Cannelloni Cannon** to trigger the queued Mortar for a ~200-damage finisher. (Cannelloni's "hailstones" flavor implies COLD elemental.)
- **Drops: Eye of Ed (Staff of Ed component), Lord Spookyraven's ear trumpet, +stat XP, +Mus point.**

**The Wine Cellar (401) "Chateau de Vinegar" path is a dead end** — that was the old wine-bomb mechanic; in the current quest it's irrelevant.

### Note: Cannelloni Cannon damage element
The cannon described "hailstones" on Lord Spookyraven → strongly suggests **COLD** element. This matters for the Hidden City protector spirits + Protector Spectre, which are immune to physical and need elemental damage. Verify in-game before committing to the Hidden City chain.

## Useful Drops by Zone

**Haunted Bathroom**: roll of toilet paper, baggie of powdered sugar, fancy bath salts, inkwell, tattered scrap of paper  
**Haunted Bedroom**: antique hand mirror, old leather wallet, half of a memo  
**Haunted Library**: inkwell (×N), tattered scrap of paper (×N), old leather wallets, hand chalk drops continue from the adjacent Billiards Room  
**Haunted Gallery**: Dreams and Lights effect (from Maidens in Garden painting)

## Dreams and Lights Effect

Very notable Gallery-specific buff:
- Duration: 10 adventures
- Effect: roughly **75% MP cost reduction** on spells (Ravioli Shurikens 4→1, Lasagna Bandages 6→3)
- Source: Gallery "Out in the Garden" painting → "The two maidens" choice
- Can only be obtained in the Gallery; wears off between adventures elsewhere

Use it to power-grind the Escher maze without running out of MP.

---

# ✅ THE CELLAR CHAIN — COMPLETED (verified in-game) (full walkthrough)

Unlocked by **reading the MacGuffin diary** (`diary.php`) → the Ballroom (395) organ choice **921
"We'll All Be Flat"** becomes playable → opens **manor3** (3rd floor) *and* **manor4** (the true cellar).
⚠️ **Not always both.** ✅ Verified on another character: 921 (`Play the music`, 6th Ballroom turn, the diary
read earlier in the run) opened **only manor4** — the second floor's Stairs Up stayed `manor2lock_stairsup` and
`place.php?whichplace=manor3` had no zone links, so the Lab and Storage Room ingredients below were unreachable.
Check manor3 for `snarfblat=` links before planning around the six-ingredient recipe.

## ⭐ The wine-bomb shortcut (skips all six ingredients)

1. Click the masonry once → *recipe: mortar-dissolving solution*.
2. Get **Lord Spookyraven's spectacles** (Bedroom ornate nightstand, choice 878, `Look behind the nightstand`),
   **equip them, and read the recipe again** → a green-ink note appears, and ✅ the quest log adds *"-or- Gather
   the explosive ingredients: Chateau de Vinegar, blasting soda"*. The two items **do not drop until you have done
   this**, and the flag resets each ascension.
3. **bottle of Chateau de Vinegar** — possessed wine rack, **Wine Cellar (401)**. ✅ Measured: dropped from the
   **11th wine rack** (33 cellar fights, mostly with +20% item). **blasting soda** — cabinet of Dr. Limpieza,
   **Laundry Room (400)**. ✅ Measured: the **4th cabinet** (9 fights). Cellar monsters are ML 134–164 with
   Defense 129–148 — ✅ a Level 12 Muscle class (Muscle ~189, dual-wield, Lunging Thrust-Smack) won all 52 fights
   in one round.
4. ✅ **Cook them:** `craft.php?mode=cook&action=craft&a=7491&b=7492&qty=1` → *unstable fulminate* (7493, off-hand).
5. Equip it and fight **monstrous boilers** in the **Boiler Room (399)**; at **51 degrees** it becomes a **wine
   bomb** (7494) and drops out of the off-hand into inventory.
   🚨 **The wiki's `10 + ML/2` means +10 plus half your BONUS Monster Level — not the boiler's own ML 134.**
   ✅ Measured with **no +ML**: every boiler win printed *"You plug the bottle of fulminate with your thumb and hold it
   over the smoldering coals… It gets 10 degrees hotter."* — so it takes **6 monstrous boilers** (~20 Boiler Room
   fights, since coaltergeists and steam elementals share the zone). **+82 ML** does it in one fight, per the wiki.
   ✅ **The heat persists** — across other fights and across rollover (three boilers one day, three the next).
   ✅ **One-round kills count** — how you kill the boiler doesn't matter, only that you win with the bottle worn.
   ⚠️ The item's description never shows the temperature; count the "10 degrees hotter" lines yourself.
6. Wine bomb → click the masonry → the Summoning Chamber (Part 2 below).
- Lights Out exits (from the wiki): **Wine Cellar 901** `Get out of here right now go go go` · **Laundry Room
  891** `Feel Your Way to the Door` (✅ used, free) · **Boiler Room 902** `Get the heck out`.

## Part 1 — Lady Spookyraven's triplets ("Chasin' Babies")

Three ghost babies roam **Laboratory 396 (choice 884) · Nursery 397 (885) · Storage Room 398 (886)**.
The choice fires **every 5 adventures** in a room. **"Do nothing" costs NO adventure** — use it to scout
a room's occupants for free.

**Movement rules (verified):**
- Ghosts **in the room you're in** that **HATE** the toy **flee** along: **Lab → Nursery → Storage → Lab**.
- Ghosts in the **source** room that **LIKE** the toy **enter** yours. Source (pull) is the reverse:
  **Storage → Lab**, **Lab → Nursery**, **Nursery → Storage**.
- A ghost that LIKES the toy and is already present just stays ("enthralled").

**Preference matrix (this run — verify by observation, it may be randomized):**

| Toy (choice option) | Loves it | Hates it | Neutral |
|---|---|---|---|
| poppet (opt 1) | weeping | giggling | chubby |
| rocking horse (opt 2) | chubby | weeping | giggling |
| jack-in-the-box (opt 3) | giggling | chubby | weeping |
| do nothing (**opt 6**) | — | — | free, no adventure |

🚨 **THE TRAP:** each toy is loved by exactly one ghost and hated by another, so **pulling the third
ghost in always evicts one already present**. ✅ **Solution: the last ghost must be PUSHED in by
fleeing, not pulled.** Stand in the room *behind* the target (the one that flees into it) and play the
toy that ghost hates.

**The winning line from Lab={chubby}, Nursery={weeping}, Storage={giggling}:**
1. **Storage + poppet** → giggling (hates it) flees to the **Lab**; weeping (Nursery, loves it) enters Storage.
   ⇒ Lab={chubby, giggling}, Storage={weeping}.
2. **Storage + rocking horse** → weeping (hates it) flees to the **Lab**. ⇒ Lab = all three.
3. Adventure in the **Laboratory** → the choice becomes *"all three ghost babies in a large jar"* →
   **option 4 "Close the jar!"** → **jar of baby ghosts**.
4. Turn in at **Lady Spookyraven** (`place.php?whichplace=manor3&action=manor3_ladys`) → **ghost formula**
   (`inv_use` → ~240–330 of each substat) and she departs.

## Part 2 — the wall and Lord Spookyraven

- **manor4** = Boiler Room 399 · Laundry Room 400 · Wine Cellar 401 · **Suspicious Masonry**.
- Click **`place.php?whichplace=manor4&action=manor4_chamberwall`** → **recipe: mortar-dissolving solution**
  (read it with `inv_use`). Six ingredients, one per manor zone — all are ordinary drops, so weeks of
  routine manor farming may already have them:
  **loosening powder (Kitchen 388) · powdered castoreum (Conservatory 389) · drain dissolver (Bathroom 392) ·
  triple-distilled turpentine (Gallery 394) · detartrated anhydrous sublicalc (Laboratory 396) ·
  triatomaceous dust (Storage Room 398)** (ids 7485–7490).
  ⚠️ **Do NOT try to craft them together** (`craft.php` fails) — **just click the masonry again** once you
  hold all six; the game mixes and applies the solution for you and the wall collapses.
- Then **`place.php?whichplace=manor4&action=manor4_chamberboss`** → **Lord Spookyraven**.
  🚨 **His opening attack hits for ~your current HP** unless you have **+3 to ALL elemental resistances** —
  **Brother Smothers's Blessing (POST `friars.php` `action=buffs&bro=3`) is exactly that** and, per the wiki,
  turns it into an ordinary hit (a Pastamancer took 62 of 99 HP with the blessing up).
  ⚠️ **But don't count on the blessing alone.** ✅ Measured on a Level 12 Seal Clubber **with the blessing
  active**: the opener took **265 of 296 HP** — close to the "your current HP" special. What made it survivable
  was **entering at FULL HP**. ✅ **Pattern that won in 3 rounds:** full HP and MP at entry → blessing as the
  last prep step → on 31 HP, **filthy poultice in combat** (`fight.php?action=useitem&whichitem=2369`) twice →
  **one Lunging Thrust-Smack killed him** (200 HP). Treat the opener as "you keep ~10% of your HP" and bring
  in-combat heals.
  Otherwise a normal fight: Entangle → Mortar → Cannelloni, **5 rounds** at base Mys ~131.
- **Drops: the Eye of Ed** (Staff of Ed component) + Lord Spookyraven's ear trumpet. Quest complete.
