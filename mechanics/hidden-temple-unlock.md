# Hidden Temple — unlock paths

## Status (end of Day 38)

- Hidden Temple = **snarfblat 280**. Verified locked by adventuring it →
  *"You don't know nothin' 'bout no hidden temples."*
- The Temple is the gateway to the **Hidden City** (needed for the **ancient amulet**,
  one of the 3 Staff of Ed components — see `staff-of-ed-quest.md`).
- Two known unlock paths:
  1. **Dakota Fanning** (Distant Woods) — fetch quest, 3 items from 3 zones.
  2. **Spooky Forest sapling chain** — get 3 items via Arboreal Respite sub-NCs,
     `use` the Spooky Temple Map → Hidden Temple revealed.

## Path A — "Dakota" Fanning

`place.php?whichplace=woods&action=woods_dakota_anim` — meet Dr. Henry "Dakota" Fanning.

He wants:
- **bendy soda straw** — from a **Fallen Archfiend** (Pandemonium / demon zones).
- **very powerful, high-octane plant food** — from the **Haunted Conservatory** (389).
- **sewing needle** — Hippy Camp filthy hippies, Frat House orcs, or vending machines.

Bring all three back → he climbs up, and you can follow → Hidden Temple unlocked.

## Path B — Spooky Forest Arboreal Respite (preferred)

Adventure in **Spooky Forest (15)** until **Arboreal Respite** NC fires (~1 in 6 advs).

### VERIFIED CHOICE TREE (Day 39)

```
Arboreal Respite (choice 502)  [~1 in 6 advs in Spooky Forest 15]
  opt 1 "Follow the old road"  → Road Less Traveled (503)
       opt 1 Follow the ruts
       opt 2 Knock on the cottage door  → Footprints (27) → Corpse in the Copse (seal gear, IGNORE)
       opt 3 Talk to the hunter         → Tree's Last Stand (504)
                                            opt 1/2 Sell bar skin(s)
                                            opt 3 Buy a tree (100 Meat) → 🌱 spooky sapling
                                            opt 4 Take your leave
  opt 2 "Explore the stream"   → Consciousness of a Stream (505)
       opt 1 March to the marsh      → random (Fairy Gravy Ring → mushrooms)
       opt 2 Squeeze into the cave   → Chester Meatpot → +300 Meat + 🪙 tree-holed coin
       opt 3 Go further upstream     → vampire encounter (choice 46)
  opt 3 "Brave the dark thicket" → Through Thicket and Thinnet (506)
       opt 1 Follow the even darker path  → A Three-Tined Fork (26, zone unlock — IGNORE for Temple)
       opt 2 Investigate the dense foliage → 🌿 Spooky-Gro Fertilizer
       opt 3 Follow the coin  [appears with tree-holed coin]  → O Lith, Mon (507)
                                                                  opt 1 Insert coin → 🗺️ Spooky Temple map
       opt 4 Give up and go back
```

### Needed items (all 3 to unlock Temple)

1. **Spooky Sapling** — Arboreal opt 1 → Road Less Traveled **opt 3 (Talk to the hunter)** → Tree's Last Stand opt 3 (Buy a tree for 100 Meat). **NOT** opt 2 "Knock on the cottage door" (Day 38's mistake — that's a flavor dead end).
2. **Spooky-Gro Fertilizer** — Arboreal opt 3 → Through Thicket and Thinnet opt 2 (Investigate the dense foliage). Single-step.
3. **tree-holed coin** — Arboreal opt 2 → Consciousness of a Stream opt 2 (Squeeze into the cave). Also yields +300 Meat from Chester Meatpot's corpse.
4. **Spooky Temple map** — with tree-holed coin in inventory: Arboreal opt 3 → Through Thicket and Thinnet opt 3 (Follow the coin — only appears with the coin) → O Lith, Mon opt 1 (Insert coin).

### Final step

Once Sapling + Fertilizer + Map are held, `inv_use.php?which=3&whichitem=74&pwd=…` (map id 74) → "You plant your Spooky Sapling… spray Spooky-Gro Fertilizer… grows to 20 feet… you can easily climb the branches" → `adventure.php?snarfblat=280` (The Hidden Temple) is now adventureable.

### Backup: buy spooky sapling for 100 meat from the Hermit

The wiki claims the Hermit (Mountains) sells Spooky Saplings for 100 meat — but the
Hermit requires a **Hermit Permit** I don't currently have. So this isn't a true
shortcut. Skip.

## Day 39 attack plan

1. Adventure Spooky Forest until Arboreal Respite fires.
2. **Manually pause** at each sub-NC level (don't rely on auto-handler):
   - Arboreal Respite: read top-level option labels, pick opt 1.
   - Road Less Traveled: read labels, pick opt 2 "Knock on cottage door".
   - **Resulting sub-screen** (Tree's Last Stand or similar): read options carefully
     and pick the one that mentions "buy", "sapling", "100 meat", or "tree".
3. Document the exact verified labels back into this file.
4. Repeat for fertilizer (opt 3 → Thicket and Thinnet) and tree-holed coin
   (opt 2 → Stream) and map (opt 3 with coin → "Follow the coin" → O Lith, Mon).
5. Use the map → Hidden Temple unlocks.

## Inside the Hidden Temple — verified Days 39–40 (snarfblat 280)

Combat monsters include **craven carven raven** (Poe-themed), **baa-relief sheep**, **stone temple pirate**. Drops include shiny stones; stone wool NOT seen on these monsters in ~5 fights each.

### Choice NCs

- **Such Great Heights** (choice 579) — high-ledge ridge:
  - opt 1 "Sidle along the ledge"
  - **opt 2 "Climb down some vines"** → **Nostril of the Serpent** (Hidden City key) ✅ ONE-SHOT (Day 40)
  - opt 3 "Head towards the top of the temple"
- **Such Great Depths** (choice 581) — three-way junction:
  - opt 1 "The glowing" — unverified (likely fungus)
  - opt 2 "The glowering" → underground lake of magic water → **Hidden Power effect** (stat buff, no item)
  - opt 3 "The growling" — unverified (likely combat)
- **Hidden Heart of the Hidden Temple** (choice 580) — central junction with **RNG door decoration**:
  - opt 1 "Go through the door" — door decoration is **randomized per fire**:
    - "carved stone hemisphere" → accepts **Nostril of the Serpent** → Hidden City entry (Day 39 saw this variant; didn't have key yet)
    - "tongue-wagging stone gargoyle" → does NOT accept Nostril; pulling tongue gives +100 MP flavor (Day 40)
    - other variants likely exist
  - opt 2 "Go down the stairs" → **Confusing Buttons** (583): "Press a button at random" → ejects you from temple. Per wiki, **stone wool (Stone-Faced effect)** lets you pick a specific NC at this junction.
  - opt 3 "Go back the way you came".

### ✅ VERIFIED Hidden City entry (Day 42) — the door RNG was a RED HERRING

The hemisphere/gargoyle door grind is WRONG. The real, deterministic path with the Nostril:

1. At **Hidden Heart (580)** → **opt 2 "Go down the stairs"** (NOT the door). With the
   Nostril in inventory, it clicks into a framework and the room becomes
   **Unconfusing Buttons (choice 584)**.
2. **Unconfusing Buttons (584)** → press **opt 4 "the cute little lightning-tailed guy"**
   (Pikachutlotal). The temple rearranges and the Hidden Heart door becomes the
   lightning-tailed (Pikachutlotal) variant permanently.
3. Back at **Hidden Heart (580)** → door is now Pikachutlotal → **opt 1 "Go through the
   door" (costs 3 Adventures)**.
4. **Trap gauntlet** (memorize — wrong answers = death/Beaten Up):
   - **At Least It's Not Full Of Trash (123, closing walls)** → **opt 2 "Raise your hands
     up toward the heavens"**. (opt 3 kneel = -145 HP/Beaten Up; opt 1 weapon = also wrong.)
   - **Spelling tiles** → spell **BANANAS** (one tile/row; tile letter = image filename
     `tileX.gif` → X). Wrong tile = instant death.
   - **No Visible Means of Support (125)** → **opt 3 "Do nothing"** → roof → Hidden City.

Reaching Hidden Heart (580) is itself a low-rate temple NC; **stone wool → Stone-Faced →
"Fitting In" (582) → opt 2 "ground floor"** forces a Hidden Heart visit for 1 adv (stone
wool drops from temple monsters, ~1/15-20). Once you've pressed the lightning button once,
the door stays Pikachutlotal, so subsequent visits just need opt 1.

### Hidden City layout + REAL mechanic (CORRECTED & verified Day 43)

The earlier "fight liana → protector → sphere in the same shrine" model was WRONG. The
current game is **building-based**. The four "Altars" on the map are **Overgrown Shrines**
(dense liana zones) that act as *doorways*: adventuring grinds dense lianas (~200 HP) until
a god-altar NC fires; **"Place your head in the impression"** grants a vision that
**unlocks the adjacent building** (costs ~62 HP, no other downside).

| Shrine | snarfblat | God (element) | Unlocks (snarfblat) |
|---|---|---|---|
| Altar 1 (SW) | 347 | Squirtlcthulli (water) | **Hidden Hospital** (342) |
| Altar 2 (NE) | 346 | Bulbazinalli (plants/earth) | **Hidden Apartment Building** (341) |
| Altar 3 | 349 | Charcoatl (fire/war) | **Hidden Bowling Alley** (344) |
| Altar 4 | 348 | Pikachutlotal (lightning) | **Hidden Office Building** (343) |

Other zones: **Hidden Park = 345**, **A Massive Ziggurat = 350**.

**Per-building protector triggers** (each building hides one ancient protector spirit):
- **Hospital (342)**: "You, M.D." superlikely; needs **surgical gear EQUIPPED**
  (+10%/unique piece, cap 50%). Gear = half-size scalpel, head mirror, surgical mask,
  surgical apron (needs Torso Awareness), bloodied surgical dungarees. Source: **pygmy
  witch surgeon** (rare; drops 1 piece/kill, picks one you lack) OR the **Hidden Park
  dumpster**. NB: ordinary pygmy orderlies/janitors/witch nurses do NOT drop gear.
- **Bowling Alley (344)**: ✅ VERIFIED Day 43. Pygmy bowlers drop **bowling balls**; the
  **"Life is Like a Cherry of Bowls"** NC fires whenever you hold a ball → **opt 1 "Let's
  roll"** consumes it. The **5th roll summons the protector.**
- **Apartment (341)**: ✅ VERIFIED Day 45. Need **Thrice-Cursed** effect → "Action
  Elevator" NC (on 9th in-zone turn, then every 8th) → opt 1 **Thrice-Cursed Penthouse**
  → protector spirit. ⚠️ Zone has a **Mysticality warning** at entry — bypass via the
  "brave or foolish" submit button. Curse sources (each cursing advances Once→Twice→
  Thrice): (a) start of combat with **pygmy shaman**, (b) Action Elevator opt 2 "Go to
  the mezzanine", (c) drinking **Cursed Punch** from the **Hidden Tavern**.
  **⚠️ DURATION TRAP:** "10 Adventures" effect duration ≈ **combat-rounds, not
  zone-clicks** — curses die inside 2-3 fights. **PROVEN PATH:** buy 3+ Cursed Punch
  from the Hidden Tavern (500 Meat each, 1 drunkenness each), drink them all in one
  burst at a clean post-fight state (mid-choice drinks are silently blocked) →
  Thrice-Cursed (10 turns) → IMMEDIATELY race to Apartment. The Action Elevator usually
  fires before the curse expires across ~2 fights. Apartment protector is **squishy
  (~120 HP)**, dies in 2 Cannellonis. Drops **moss-covered stone sphere** (earth) →
  Bulbazinalli's earth shrine (346) → triangle.
- **Office (343)**: ✅ VERIFIED Day 44. Pygmy **witch accountants** drop **McClusky file
  pages 1–5** (~1 per kill, RNG-gated). The **Working Holiday** superlikely offers:
  opt 1 "Knock on the boss's office door", opt 2 "Raid the supply cabinet"
  (→ **boring binder clip**), opt 3 cubicle drone combat, opt 6 take the day off.
  With all 5 pages + the clip, **use** the binder clip → **McClusky file (complete)**.
  Next Working Holiday → opt 1 → **ancient protector spirit** (≈250 HP, tankier than
  Bowling's ~220 — same Mortar+Cannelloni 3-round burst works, but enter at FULL HP).
  Drops **crackling stone sphere** (lightning) → Pikachutlotal's air shrine (348) → triangle.

**Protector fight (✅ VERIFIED Day 43 on the Bowling protector):**
- Physical-immune. **Ned (Vampieroghi) + Marcellus (Mosquito) deal ~1 dmg — useless.**
- **Cannelloni Cannon (COLD/elemental spell) WORKS: 55–59 dmg/cast.** Mortar also works.
- Protector hits ~**98/round** — squishy danger. ENTER AT FULL HP, then **Mortar (R1, queues
  ~110) + Cannelloni (R2, ~59) = ~165 burst** kills it before the 2nd big hit.
- Drops an **element-matched sphere** (Bowling/fire → **scorched stone sphere**).

**Sphere → triangle:** return to the MATCHING shrine; with the sphere in inventory the
altar NC adds **"Place the [X] sphere in the impression"** → "a niche opens… odd triangular
stone" → **stone triangle**. (Scorched sphere → fire shrine 349 → triangle. ✅ Day 43.)

**Endgame ✅ VERIFIED Day 45:** With all 4 stone triangles, adventure at A Massive
Ziggurat (350). Grind through dense liana guards → **"Legend of the Temple in the Hidden
City"** NC → opt 1 **"Open the door"** → **Protector Spectre** fight (physical immune,
~220 HP; Cannelloni + Mortar burst from full HP kills in 3 rounds; lead with Cannelloni).
**Drops: ancient amulet + spectre scepter.** Done with the Hidden City. The 4 triangles
are consumed by the door.

**Crafting next:** at meat-paste combiner (craft.php?mode=combine), **ancient amulet +
Eye of Ed → headpiece of the Staff of Ed** (item **2323**, stored in a quest-items area
that does NOT appear in standard inventory.php?which=2 or =3 — only via api.php item
lookup). That's Staff of Ed components 2/3 fused. Then +Staff of Fats (Palindome →
Dr. Awkward) → Staff of Ed → pyramid socket → Ed the Undying → Holy MacGuffin.

**Hidden Tavern access (Day 45):** unlocked by *using* a **book of matches** (item
**6683**, drops from pygmy janitors). The Tavern lives at `shop.php?whichshop=hiddentavern`
(NOT place.php?whichplace=hiddentavern). Sells **Cursed Punch** at 500 Meat each — the
key to the Apartment Thrice-Cursed mechanic, and also gives +3 advs and 1 drunkenness
per drink as a side benefit.

**Hidden City progress:** Day 43 — 4 buildings unlocked + Bowling triangle; Day 44 —
Office triangle (McClusky path); Day 45 — Hospital + Apartment triangles + Ziggurat +
ancient amulet + crafted headpiece. **HIDDEN CITY COMPLETE.**

> Park dumpster note: ground the Hidden Park (345, boaraffe monsters) ~25 advs and its
> dumpster/antique-machete NC never fired — may be rare or counter-gated. Surgical gear may
> have to come from pygmy witch surgeons. Verify before sinking advs into the Hospital.

## After unlock: Hidden Temple → Hidden City → ancient amulet

Once Hidden Temple is open (snarfblat 280):
- Adventure until **"Such Great Heights"** → climb down vines → **Nostril of the Serpent**
  (key to enter Hidden City). (Done — Hidden City unlocked Day 42.)
- Hidden City mechanic: see **"Hidden City layout + REAL mechanic (CORRECTED & verified
  Day 43)"** above. Short version: 4 shrines unlock 4 buildings; each building's protector
  has its own trigger; protector → element sphere → matching shrine → stone triangle; 4
  triangles → Massive Ziggurat (350) → Protector Spectre → **ancient amulet**.
- ✅ Confirmed Day 43: **Cannelloni Cannon (cold spell) damages the physical-immune
  protectors (55–59/cast)** — the pasta build is NOT blocked. Companions are useless on them.

## References

- [Spooky Temple Map Quest — Coldfront](https://kol.coldfront.net/thekolwiki/index.php/Spooky_Temple_Map_Quest)
- [Arboreal Respite — Coldfront](https://kol.coldfront.net/thekolwiki/index.php/Arboreal_Respite)
- [O Lith, Mon — KoL Wiki](https://wiki.kingdomofloathing.com/O_Lith,_Mon)
- [The Hidden Temple — Coldfront](https://kol.coldfront.net/thekolwiki/index.php/The_Hidden_Temple)
- [The Hidden City — Coldfront](https://kol.coldfront.net/thekolwiki/index.php/The_Hidden_City)
