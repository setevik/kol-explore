# Nemesis Quest (Class-Specific)

## ✅ VERIFIED WALKTHROUGH PART 2 (Day 75, 2026-06-30) — the cave & boss, Pastamancer

After forging the Legendary Epic Weapon (Part 1 below), Asiago points you to a **cave in the Big Mountains**. Done live, start to finish, in ~22 turns:

1. **Enter the cave.** `place.php?whichplace=mountains` → before clearing it's action **`mts_caveblocked`**. Click it →
   **choice 1087** (the secret-door wall, engraved with knotted noodle-lines + finger-holes). For Pastamancer:
   **option 3 = "Entangle the wall with noodles"** (Entangling Noodles) opens it, then **option 1 = "Enter the doorway."**
   0 adv. After this the cave becomes its own place: **`place.php?whichplace=nemesiscave`**.
2. **Get 6 fizzing spore pods.** Inside, adventure **The Fungal Nethers = snarfblat 452**. Monster: **angry mushroom guy**
   (weak — dies to a couple weapon attacks / one Cannelloni). Drops **fizzing spore pod** at ~**45%** (took ~13 fights for 6).
3. **Blast the rubble.** In `whichplace=nemesiscave`, the **rubble = action `nmcave_rubble` → choice 1088 →
   option 1** ("Blast the tunnel clear with fizzing spore pods"). Consumes all 6 pods, opens the boss room. 0 adv.
4. **THE FINAL (?) SHOWDOWN = action `nmcave_boss`.** Monster: **Spaghetti Elemental (~220 HP, 170 atk, 153 def).**
   - **Equip the Greek Pasta Spoon of Peril (item 2561)** first (the Legendary Epic Weapon — its display name is
     "Greek Pasta **Spoon** of Peril").
   - **⚠️ Do NOT add Mysticality buffs** — the monster scales off your Myst. Base gear is fine (257 base Myst worked).
   - **Combat: Stuffed Mortar Shell (skill 3007) round 1, then Cannelloni Cannon (3005) each round.** It died in **3
     rounds and never landed a hit.** (Heal w/ Lasagna Bandages 3009 / Entangling Noodles 3004 to stun if it's hurting you.)
   - **Reward: Colander of Em-er'il** — epic hat, +11 Myst, **Regen 2-6 MP/adv (Pastamancer only)**, part of the
     4-piece "Legendary Regalia of the Pasta Master." No +item bonus.
5. **Turn in at Asiago (`guild.php?place=scg`).** Twist: the Colander is **NOT** the stolen artifact — the Nemesis only
   sent the Elemental as a guardian and fled to his **actual lair**. Quest log → *"waiting for your guild's scouts to find
   out where your Nemesis went."*
6. **⏳ LAIR-SEARCH / BOUNTY PHASE (gated).** The lair does **NOT** open by re-visiting Asiago — it's a **delay** ("we will
   alert you"). Meanwhile the Nemesis puts a **bounty on you**: "disreputable" wandering monsters (e.g. **Mob Penguin
   hitman**) attack you while adventuring anywhere. Keep adventuring + **check Asiago each session** until the lair appears.
   - **NEXT (unverified, from research):** the inner Nemesis' Lair stage = collect ~**5 cult memos**, decode them, defeat a
     cultist for a **spaghetti cult robe** (disguise), equip it to enter, then the final confrontation. Research exact steps
     when the lair opens.

**Pastamancer combat skill IDs (confirmed in-fight):** Spaghetti Spear 3020 (0 MP), Utensil Twist 3025 (1), Ravioli
Shurikens 3003 (4), Entangling Noodles 3004 (3), Lasagna Bandages 3009 (6), Cannelloni Cannon 3005 (8), Stuffed Mortar
Shell 3007 (8). Act via `fight.php` POST `action=skill&whichskill=ID&pwd=` (or `action=attack`).

---

## ✅ VERIFIED WALKTHROUGH (Day 74, 2026-06-29) — Pastamancer, first half done in ONE session

The quest "Me and My Nemesis: Retrieve the Epic Weapon" → Legendary Epic Weapon, step by step (all confirmed live):

1. **Tomb of the Unknown Pastamancer** (get the epic weapon). The riddle-NC fires in **The Unquiet Garves
   (snarf 21)** ONLY the first time (long ago for us). After that — **the Tomb is a DIRECT-ACCESS zone**:
   `place.php?whichplace=cemetery&action=cem_advtomb` (The Misspelled Cemetary = `place.php?whichplace=cemetery`,
   reached from `whichplace=plains`). **Do NOT grind the Garves** (we burned 81 fights getting 0 NCs).
   - Inside: the plinth puzzle = **choice 1049**. Option 1 = "Check your pack" → then option 1 again = "Switch."
     → swaps a spare **basic pasta spoon (item 5, mall ~100 meat, un-equipped)** for the **Pasta Spoon of Peril
     (item 68)**. Costs 0 adventures (entered via the place link, not adventure.php).
2. **Show it off:** visit guildmaster **Asiago** — `guild.php?place=scg`. Quest → "Find Beelzebozo in The Fun House."
3. **The "Fun" House = snarf 20** (appears in `whichplace=plains` only AFTER you have the epic weapon). To reach
   **Beelzebozo's sanctum you must be 100% Clowny = wear 4 clown items (4 "clownosity")**. We bought/equipped:
   clown wig (hat, **2475**) + bloody clown pants (pants, **432**) + clown shoes (acc, **431**) + big red clown
   nose (acc, **449**) — all mall ~100-120 meat. (⚠️ Beaten-Up risk: clowns hit hard; enter at full HP. We got
   beaten up once mid-grind.) With 4 clownosity, grinding snarf 20 fires NC151→NC152 (the door) then the
   **Clownlord Beelzebozo** boss — killed by normal combat (Cannelloni + torpedoes). He drops the missing piece.
4. **Inform the guild** (visit Asiago again) → quest = "Meatsmith the two parts ... need a tenderizing hammer."
5. **Meatsmith the Legendary Epic Weapon:** buy a **tenderizing hammer** (mall, **item 338**). Then SMITH
   (`craft.php?mode=smith&action=craft&a=68&b=2555&qty=1` — costs **1 adventure**): **Pasta Spoon of Peril (68) +
   high-octane olive oil (2555 = the "GREEK" pun) → Greek Pasta of Peril (item 2561 = the Legendary Epic Weapon).**
   (Clown skin 2474 / long skinny balloon 433 were RED HERRINGS — failed smiths cost 0 adv, so brute-forcing is safe.)
6. **Take it to the guild** (Asiago) → he marks the **Nemesis's lair: a cave in the Big Mountains** on the map.
7. **FINAL (next session): confront the Nemesis in the Big Mountains cave** (traps/guards; Pastamancer fights
   Spaghetti Elemental → Spaghetti Demon; equip the Greek Pasta of Peril 2561). Needs a fresh day of adventures.

---

> ⛔ **CORRECTION (Day 73, 2026-06-28): the "adventure the Garves until the Tomb NC fires" claim below is WRONG / insufficient for the current game.** Tested empirically: **81 fights in The Unquiet Garves (snarf 21) produced ZERO noncombats**, including ~10 fights fully naked (all gear off) — so it is NOT +combat-gear suppression. The Tomb of the Unknown {Class} does **not** appear by blind grinding. **Do NOT repeat that grind.** The real 2015+ trigger is still unknown — research it (WebSearch "Tomb of the Unknown Your Class Here" / "Legendary Epic Weapon Quest"; WebFetch 403s on the wiki) BEFORE spending turns. Candidates: a required item/key (grave robbing shovel?), a separate place/door click in the Misspelled Cemetary, re-talking to guildmaster Asiago, or a +noncombat requirement. A spare basic **pasta spoon** (mall, 100 meat, un-equipped) IS still needed for the plinth-swap puzzle — already bought.


## Trigger

Talk to your **class trainer / guildmaster** at the guild. For Pastamancers, that's **Asiago** at `guild.php?place=scg`. The Nemesis quest activates around **Level 7** (or possibly when you reach the right level + complete prereqs).

The guildmaster reveals:
- An ancient artifact has been stolen from the guild
- Your **Nemesis** (a class-specific antagonist) is the thief
- You need to reconstruct the **Legendary Epic Weapon** to defeat them
- The Epic Weapon has 2 components:
  1. **Epic Weapon** itself — kept in the **Tomb of the Unknown {Class Here}** in the Misspelled Cemetary
  2. A **second component** — also stolen, addressed later in the quest chain

A new zone unlocks: **The Unquiet Garves** (snarfblat 21) inside the Misspelled Cemetary.

## Pastamancer's Tomb (Tomb of the Unknown Pastamancer)

### Trigger

Adventure in **The Unquiet Garves** (snarfblat 21). Among normal combats (skleletons, zmobies, grave robers, lihcs), a **non-combat encounter** fires periodically. The encounter is the entrance to the Tomb.

### Trial 1 — The Riddle

A 4-line poem ending with "But what is your power that everyone fears?" Three answer choices appear; only one is correct. For Pastamancer:

| Option | Correct? |
| --- | --- |
| "Binding pasta thralls." | ✓ |
| "Unlimited breadsticks." | ✗ |
| "Spaghetti breakfast." | ✗ |

Other classes likely have analogous riddles tied to their signature mechanic.

### Trial 2 — Fight the Ghost

You meet the **Ghost of the Unknown {Class Here}**. She declares you a fully-fledged Pastamancer, then announces a fight. Standard combat — Entangling Noodles → Ravioli Shurikens combo handles her in a few rounds.

### Trial 3 — The Pressure-Plate Puzzle

Behind a hidden wall is a stone plinth holding the **Pasta Spoon of Peril** (the Epic Weapon). The plinth has a hairline pressure-plate; if you simply pick up the spoon, the trap triggers.

You must **swap** the Pasta Spoon of Peril for an item of identical weight. The game accepts a **regular pasta spoon from your inventory** (NOT the equipped one).

> "You root around in your pack for a while, but can't find a spare pasta spoon. Rats."

If your only pasta spoon is equipped, the puzzle rejects you and you must come back with a spare in your pack.

### Where to Get a Spare Pasta Spoon
- Drops from various enemies (low rate)
- Likely available from the **guild Staffcrafter (Rodoric)** if you bring him an appropriate raw staff (TBD)
- Could be purchased from the mall (if you have a multiplayer-enabled account)

## Items Picked Up Along the Way

While grinding the Garves, you also collect:
- **grave robbing shovel** — quest item, no [use] action visible (likely auto-triggered later)
- **coffin lid** — combat item or trade material
- Various Meat drops

## Useful Tips

- **Have a spare pasta spoon BEFORE going to the Tomb.** This avoids wasting adventures re-triggering the non-combat.
- The Tomb non-combat seems to be a once-per-day or rare drop encounter; persistence is required.
- The Ghost fight is moderate difficulty — full HP/MP recommended before triggering.

## Class Variations (TBD via testing)

Each class has its own Nemesis, Tomb, and Epic Weapon:
| Class | Tomb | Epic Weapon (likely) | Riddle answer keyword |
| --- | --- | --- | --- |
| Pastamancer | Unknown Pastamancer | Pasta Spoon of Peril | binding pasta thralls |
| Sauceror | Unknown Sauceror | Saucepan? | sauce-related |
| Seal Clubber | Unknown Seal Clubber | Club? | clubbing? |
| Turtle Tamer | Unknown Turtle Tamer | Turtle staff? | shells? |
| Disco Bandit | Unknown Disco Bandit | Disco-themed | dance? |
| Accordion Thief | Unknown Accordion Thief | Accordion? | music? |
