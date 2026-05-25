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

## Inside the Hidden Temple — verified Day 39 (snarfblat 280)

- Combat monsters include **craven carven raven** (Poe-themed flavor).
- **Hidden Heart of the Hidden Temple** (choice 580) — central junction:
  - opt 1 "Go through the door" — door has a "carved stone hemisphere" — likely needs **Nostril of the Serpent** key (probably from "Such Great Heights" NC, not yet observed).
  - opt 2 "Go down the stairs" → **Confusing Buttons** (583): "Press a button at random" — random press **ejects you from the temple** (wastes the adventure). Per wiki, **stone wool (Stone-Faced effect)** lets you pick a specific NC option here — invest in stone wool first if grinding the temple.
  - opt 3 "Go back the way you came".
- Need to find **"Such Great Heights"** NC → climb down vines → **Nostril of the Serpent** (Hidden City key). Verify next session.

## After unlock: Hidden Temple → Hidden City → ancient amulet

Once Hidden Temple is open (snarfblat 280):
- Adventure until **"Such Great Heights"** → climb down vines → **Nostril of the Serpent**
  (key to enter Hidden City).
- Hidden City: 4 buildings — Hidden Hospital, Bowling Alley, Apartment Building, Office
  Building — each has an **ancient protector spirit** (immune to physical, needs
  **elemental damage**). Cannelloni Cannon landed "hailstones" on Lord Spookyraven
  (Day 37) → likely **COLD** — should work.
- Each spirit drops a **sphere** → trade at overgrown shrines for a **stone triangle**.
- All 4 stone triangles → enter **A Massive Ziggurat** → defeat **Protector Spectre**
  (also physical-immune) → **ancient amulet**.

## References

- [Spooky Temple Map Quest — Coldfront](https://kol.coldfront.net/thekolwiki/index.php/Spooky_Temple_Map_Quest)
- [Arboreal Respite — Coldfront](https://kol.coldfront.net/thekolwiki/index.php/Arboreal_Respite)
- [O Lith, Mon — KoL Wiki](https://wiki.kingdomofloathing.com/O_Lith,_Mon)
- [The Hidden Temple — Coldfront](https://kol.coldfront.net/thekolwiki/index.php/The_Hidden_Temple)
- [The Hidden City — Coldfront](https://kol.coldfront.net/thekolwiki/index.php/The_Hidden_City)
