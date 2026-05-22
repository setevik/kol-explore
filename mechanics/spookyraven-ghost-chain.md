# Spookyraven Manor — Lady Spookyraven Ghost Chain

## Overview

This is a multi-step side quest that opens Spookyraven Manor's upper floors AND, critically, **gates the Spookyraven Manor cellar** — which is the Staff of Fats sub-quest for the Holy MacGuffin. Until the full ghost chain is done and the **"We'll All Be Flat"** encounter fires in the Haunted Ballroom, the cellar (`place.php?whichplace=manor4`) returns "You shouldn't be down here yet."

Rewards at the end: massive stat gains (+100 in each substat + 1 point to each primary), Ballroom access, and the cellar unlock path.

## Confirmed zone IDs (verified Day 35)

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

## Chain Walkthrough

### Prereq: Defeat the Billiards Ghost
You need the **Spookyraven library key** (from beating the Billiards Room pool-shark ghost). See `pool-skill.md`.

### Step 1: Find the Necklace
Zone: **The Haunted Library** (snarfblat 390). **CONFIRMED via wiki Day 35: the necklace is a GUARANTEED drop from the 5th writing desk you defeat in the Library — NOT a random rate.** The Library has multiple monsters (writing desks, bookbats, banshee librarians); only writing desks count. With Library NCs (book readings) being very frequent, expect to burn 30+ advs just to encounter 5 actual writing desks.

⚠️ Counter trap (learned Day 35): a naive "monster name in mainpane text" detector will double-count after disconnects / page reloads / mid-fight reads. Build the counter to gate on per-fight monotonic round numbers that reset *only* on the explicit `Adventure Again` page navigation.

Also look out for:
- **"Take a Look, it's in a Book!"** choice — read chapters for +stats or minor rewards. *Rise of the House of Spookyraven* tells the Lord's story; also *Better Haunted Homes and Conservatories Cookbook* (recipes) and *Ancient Forbidden Unspeakable Evil, a Love Story* (spells).

### Step 2: Deliver to Lady Spookyraven (1st Floor)
Return to `place.php?whichplace=manor1`. Click Lady Spookyraven. She takes the necklace; you receive **ghost of a necklace** (accessory item).

New quest: *"Go see Lady Spookyraven on the second floor."*

### Step 3: Meet Lady on 2nd Floor
Stairs Up (now accessible) → `place.php?whichplace=manor2`. Click Lady Spookyraven. She asks for her **dancing finery**:

| Item | Zone | Snarfblat |
| --- | --- | --- |
| Lady Spookyraven's powder puff | Haunted Bathroom | 392 |
| Lady Spookyraven's finest gown | Haunted Bedroom | 393 |
| Lady Spookyraven's dancing shoes | Haunted Gallery | 394 |

### Step 4a: Bathroom → Powder Puff

Bathroom monsters are tissue-paper constructs (physical damage, easy). Keep grinding until the **"Never Gonna Make You Up"** choice: open an ornate monogrammed makeup case that's bouncing like a possessed spirit. This triggers a **cosmetics wraith** boss fight.

Boss opens with ~33 damage (gets the jump). Standard Pastamancer combo (Entangling Noodles → Ravioli Shurikens burst) clears it. Drops:
- **Lady Spookyraven's powder puff** ✓
- old eyebrow pencil, old rosewater cream, old bronzer (flavor items)

Also expect a semi-rare **"Lights Out in the Bathroom"** (clock strikes 13, pick from toilet/vanity/door). Flavor only.

### Step 4b: Bedroom → Gown

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
   - Eventually you pick the right stair direction (I picked "southeast" after Dalí) and arrive in a **Degas ballerina studio**
   - Steal shoes from a girl whose feet match Lady Spookyraven's size: **Lady Spookyraven's dancing shoes** ✓

Note: the Escher maze may require multiple tries; if you pick wrong you pop back out to the Gallery.

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

### Step 6: Third Floor (pending)

After the dance, Stairs Up on manor2 still gives: *"You hear a terrifying moaning and wailing from upstairs, and you lose your nerve by the fifth step."*

Unclear what unlocks it — possibly a quest item from the Ballroom, or more Ballroom grinding, or a specific outfit. TBD.

### Step 7: Cellar Unlock — "We'll All Be Flat" (Holy MacGuffin gate)

After the dance, continue adventuring in the **Haunted Ballroom (395)**. The **"We'll All Be Flat"** noncombat fires → **opens the Spookyraven Manor Cellar** (`place.php?whichplace=manor4`).

**VERIFIED Day 36**: On a character that already finished the Lady chain in a prior playthrough, manor2 is already open and the Ballroom NC fires within a few turns — no need to re-do necklace/finery/dance. **Always probe `manor2` directly first** to see if the chain is already done before grinding the Library for the necklace.

### Step 8: Staff of Fats — dissolve the Suspicious Masonry (MODERN mechanic, VERIFIED Day 36)

NOT a wine bomb (that's older lore). The cellar's **Suspicious Masonry** wall
(`place.php?whichplace=manor4&action=manor4_chamberwall`) is dissolved with a
**mortar-dissolving solution**, crafted from 6 room-specific ingredients (each a normal
combat drop, ~1 per 6-7 fights):

| Ingredient | Room | snarfblat |
| --- | --- | --- |
| loosening powder | Haunted Kitchen | 388 |
| powdered castoreum | Haunted Conservatory | 389 |
| drain dissolver | Haunted Bathroom | 392 |
| triple-distilled turpentine | Haunted Gallery | 394 |
| detartrated anhydrous sublicalc | "Lab" (locate — maybe Boiler Room 399?) | ? |
| triatomaceous dust | "Storage Room" (locate — maybe Laundry 400?) | ? |

- Recipe item: **"recipe: mortar-dissolving solution"** (id 7495), dropped by first
  clicking the wall; [use] it to learn the recipe.
- Cellar room snarfblats: **Boiler Room 399, Laundry Room 400, Wine Cellar 401.**
- Once all 6 held → craft the solution → use on the Suspicious Masonry → reach the
  Summoning Chamber → **Staff of Fats** (one of 3 Staff of Ed parts).
- **The Wine Cellar (401) grind for "Chateau de Vinegar" was a dead end** — that's the old
  wine-bomb path and is NOT how the current quest works. Ignore wine racks / vinegar.

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
