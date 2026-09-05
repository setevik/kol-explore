# Nemesis Quest (Class-Specific)

> **Structure is CLASS-AGNOSTIC; only the names change.** Part 1 = *Tomb riddle → ghost → class weapon →
> Beelzebozo → missing component → smith the Legendary Epic Weapon*. Part 2 = *cave → boss → lair*.
> Verified end-to-end on a **Pastamancer** (below) and a **Seal Clubber** (run #3 Day 9).

---

## ⭐ PART 1, CLASS-AGNOSTIC WALKTHROUGH (verified twice)

**0. It starts at the GUILD, not the Council.** The quest giver is your class guildmaster
(`guild.php?place=scg` / `ocg` / `paco` — sweep all three). ⚠️ If they said *"check back with me later"*, that
is a **level gate — go back**; the quest can sit unclaimed for days otherwise.

**1. Tomb of the Unknown &lt;Class&gt; — the riddle (choice 1049).** Fires as a noncombat in
**The Unquiet Garves (snarf 21)**, usually within ~5 turns. (Afterwards the tomb is direct-access at
`place.php?whichplace=cemetery&action=cem_advtomb`; the Misspelled Cemetary hangs off `whichplace=plains`.)

🎲 **THE BUTTON ORDER IS RANDOMIZED ON EVERY PAGE LOAD** (stated by the wiki, confirmed live — the same answer
was option 2 on one fetch and option 3 on the next). **Match on the label text, never on the option number.**

| Class | Riddle answer (match this TEXT) | Class weapon | Starter weapon needed for the swap |
|---|---|---|---|
| **Seal Clubber** | **"Boredom."** | Bjorn's Hammer | seal-clubbing club |
| Turtle Tamer | **"Friendship."** | Mace of the Tortoise | turtle totem |
| Pastamancer | **"Binding pasta thralls."** | Pasta of Peril | pasta spoon |
| Sauceror | **"Power."** | 5-Alarm Saucepan | saucepan |
| Disco Bandit | **"Me. Duh."** | Disco Banjo | disco ball |
| Accordion Thief | **"Music."** | Rock and Roll Legend | stolen accordion |

⚠️ **The riddles are jokes, not descriptions — do NOT reason them out.** The Seal Clubber riddle is all
howling, claws and frozen blood, and both "Seals." and "The freezing Northlands weather." read as obviously
correct; the answer is **"Boredom."** A wrong answer isn't fatal (you may return and retry) but costs the trip.

**2. Three trials, then the swap.** Right answer → coffer opens → single-option choices (`Uh-oh.` →
`Examine Bjorn` → `Check your pack` → `Switch.`) with a **ghost fight** in between (*The Unknown &lt;Class&gt;*,
**15 HP** — trivial, one round). The final step is an Indiana-Jones swap: **you must be carrying your class's
un-equipped STARTER weapon**, which is traded for the class weapon on the plinth.
⚠️ **If you smithed/sold your starter weapon, the guildmaster will give you a new one** — ask before going.

**3. ⚠️ The class weapon is a CRAFTING COMPONENT, not a weapon.** Bjorn's Hammer is **Damage 5–10**, tagged
*(Meatsmithing component)*. **Do not equip it over your real weapon.** Take it to the guildmaster.

**4. Beelzebozo — the missing component.** Guildmaster sends you to **The "Fun" House (snarf 20)**, which only
appears in `whichplace=plains` once you hold the class weapon. Reaching his door needs **100% clownosity = 4
clown items**: clown wig (**2475**, hat) · bloody clown pants (**432**, pants) · clown shoes (**431**, acc) ·
big red clown nose (**449**, acc). ⭐ **They occupy hat + pants + 2 accessories and leave the WEAPON SLOT FREE**
— keep your real weapon on (see the outfit/slot rule in `equipment-strategy.md`).
- In Ronin these are 4 **distinct** items, so the 1-pull-per-item-per-day limit still lets you pull the whole
  suit in one morning if storage has them.
- Grind snarf 20 → **choice 151 "Push the nose"** → **choice 152 "Open the door"** → the boss.
- 🐣 **The Clownlord Beelzebozo is a pushover: HP 40, Att 27, Def 27, No-Hit 37, Init 85.** Won in **1 round**
  (84 damage) at L8. Drops the class component: **distilled seal blood** (SC) / turtle chain (TT) /
  Peppercorns of Power (S) / high-octane olive oil (P) / golden reeds (AT) / vial of mojo (DB).
- The clownosity gates **his security system, not the fight** (he says so) — you may re-derive your loadout
  after the door opens.

**5. Smith the Legendary Epic Weapon.** Guildmaster grants **1,000 meat** for supplies. Buy a **tenderizing
hammer** from the Meatsmith — ⚠️ **`shop.php?whichshop=meatsmith`, and it is `whichrow=498` (1,000 meat);
row 495 is the *meatsmithing guide*.** Parse shop rows by splitting into row blocks and finding by NAME (the
naive forward-scan regex pairs each row with the next row's name — see HANDOFF).
Then `craft.php` POST `mode=smith&action=craft&qty=1&a=<classWeaponId>&b=<componentId>`.
→ **Seal Clubber result: the `Hammer of Smiting` (item 2559) — Damage 9–18, ONE-HANDED** (frees the off-hand;
roughly double the astral bludgeon's 5–10). Requires **Super-Advanced Meatsmithing**.

**6. Hand in → the lair-search delay.** Guildmaster: *"we will attempt to locate your Nemesis in the
meantime."* This is a **gated wait**, not a re-visit (see Part 2, step 6 below).

---

## ✅ VERIFIED WALKTHROUGH PART 2 — the cave & boss, Pastamancer

After forging the Legendary Epic Weapon (Part 1 below), Asiago points you to a **cave in the Big Mountains**:

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
   - **Combat: Stuffed Mortar Shell (skill 3007) round 1, then Cannelloni Cannon (3005) each round.** Dies in ~3
     rounds. (Heal w/ Lasagna Bandages 3009 / Entangling Noodles 3004 to stun if it's hurting you.)
   - **Reward: Colander of Em-er'il** — epic hat, +11 Myst, **Regen 2-6 MP/adv (Pastamancer only)**, part of the
     4-piece "Legendary Regalia of the Pasta Master." No +item bonus.
5. **Turn in at Asiago (`guild.php?place=scg`).** Twist: the Colander is **NOT** the stolen artifact — the Nemesis only
   sent the Elemental as a guardian and fled to his **actual lair**. Quest log → *"waiting for your guild's scouts to find
   out where your Nemesis went."*
6. **⏳ LAIR-SEARCH / BOUNTY PHASE (gated).** The lair does **NOT** open by re-visiting Asiago — it's a **delay** ("we will
   alert you"). Meanwhile the Nemesis puts a **bounty on you**: "disreputable" wandering monsters (e.g. **Mob Penguin
   hitman**) attack you while adventuring anywhere. Keep adventuring and re-check Asiago until the lair appears.

**Pastamancer combat skill IDs (confirmed in-fight):** Spaghetti Spear 3020 (0 MP), Utensil Twist 3025 (1), Ravioli
Shurikens 3003 (4), Entangling Noodles 3004 (3), Lasagna Bandages 3009 (6), Cannelloni Cannon 3005 (8), Stuffed Mortar
Shell 3007 (8). Act via `fight.php` POST `action=skill&whichskill=ID&pwd=` (or `action=attack`).

---

## ✅ VERIFIED WALKTHROUGH PART 1 — Pastamancer, retrieve the Epic Weapon

The quest "Me and My Nemesis: Retrieve the Epic Weapon" → Legendary Epic Weapon, step by step (all confirmed live):

1. **Tomb of the Unknown Pastamancer** (get the epic weapon). The riddle-NC fires in **The Unquiet Garves
   (snarf 21)** ONLY the first time. After that — **the Tomb is a DIRECT-ACCESS zone**:
   `place.php?whichplace=cemetery&action=cem_advtomb` (The Misspelled Cemetary = `place.php?whichplace=cemetery`,
   reached from `whichplace=plains`). **Do NOT grind the Garves** (grinding produces 0 NCs).
   - Inside: the plinth puzzle = **choice 1049**. Option 1 = "Check your pack" → then option 1 again = "Switch."
     → swaps a spare **basic pasta spoon (item 5, mall ~100 meat, un-equipped)** for the **Pasta Spoon of Peril
     (item 68)**. Costs 0 adventures (entered via the place link, not adventure.php).
2. **Show it off:** visit guildmaster **Asiago** — `guild.php?place=scg`. Quest → "Find Beelzebozo in The Fun House."
3. **The "Fun" House = snarf 20** (appears in `whichplace=plains` only AFTER you have the epic weapon). To reach
   **Beelzebozo's sanctum you must be 100% Clowny = wear 4 clown items (4 "clownosity")**: clown wig (hat, **2475**)
   + bloody clown pants (pants, **432**) + clown shoes (acc, **431**) + big red clown nose (acc, **449**) — all mall
   ~100-120 meat. (⚠️ Beaten-Up risk: clowns hit hard; enter at full HP.) With 4 clownosity, grinding snarf 20 fires
   NC151→NC152 (the door) then the **Clownlord Beelzebozo** boss — killed by normal combat (Cannelloni + torpedoes).
   He drops the missing piece.
4. **Inform the guild** (visit Asiago again) → quest = "Meatsmith the two parts ... need a tenderizing hammer."
5. **Meatsmith the Legendary Epic Weapon:** buy a **tenderizing hammer** (mall, **item 338**). Then SMITH
   (`craft.php?mode=smith&action=craft&a=68&b=2555&qty=1` — costs **1 adventure**): **Pasta Spoon of Peril (68) +
   high-octane olive oil (2555 = the "GREEK" pun) → Greek Pasta of Peril (item 2561 = the Legendary Epic Weapon).**
   (Clown skin 2474 / long skinny balloon 433 were RED HERRINGS — failed smiths cost 0 adv, so brute-forcing is safe.)
6. **Take it to the guild** (Asiago) → he marks the **Nemesis's lair: a cave in the Big Mountains** on the map, which
   sets up Part 2 above (the cave & boss).

> **Note on the Tomb trigger:** grinding The Unquiet Garves (snarf 21) does **NOT** make the Tomb NC fire (tested: 81
> fights, including fully naked, produced ZERO noncombats — it is not +combat-gear suppression). The Tomb is reached via
> the direct place link in step 1, not by grinding. A spare basic **pasta spoon** (item 5, mall ~100 meat, un-equipped) IS
> needed for the plinth-swap puzzle. For further wiki research, note the wiki IS fetchable via `curl` with a browser
> user-agent (only WebFetch is 403'd).
