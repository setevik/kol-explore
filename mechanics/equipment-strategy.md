# Equipment Strategy — Pastamancer Class

## Power ≠ Value

Key lesson: **raw Power is not always better**. A high-Power item without class-relevant enchantments can reduce your effective combat stats compared to a lower-Power item with specialized bonuses.

Concrete example, tested in-game:
| Pants | Power | Muscle (buffed) | Myst (buffed) | Moxie (buffed) | HP max |
| --- | --- | --- | --- | --- | --- |
| **Knob Goblin Uberpants** | 45 | 47 | 60 | 30 | 50 |
| ninja hot pants | 70 | 45 | 58 | 28 | 48 |

Despite being ~60% higher Power, ninja hot pants lose on every stat because they lack the +Muscle/+Myst enchantment that Uberpants carry. **Always read enchantment text, not just Power.**

## Stat/Slot Priorities for a Mys Caster

A spell-spamming Pastamancer wants **Mysticality**, **Spell Damage**, and **MP max/MP regen** far more than raw Power or weapon damage. Prioritize by slot:
- **Hat/Pants/Shirt:** favor +Myst and +MP enchantments; high raw Power is only a tiebreaker (Power drives HP/MP but not offense).
- **Weapon:** class item with spell/MP enchantments beats a high-damage weapon (see below) — physical damage is near-irrelevant.
- **Accessories:** the biggest class-specific lever — regen and Myst/spell bonuses win for sustained casting (see below).

## Weapon Choice for Pastamancer

Pastamancers deal damage primarily via **spells** (Ravioli Shurikens, Entangling Noodles, Spaghetti Spear). Weapon raw damage is mostly irrelevant for spell-spamming. Priorities:
1. Class-specific bonuses (pasta spoon has them)
2. Spell Damage enchantments
3. +Myst enchantments

Current options I tested:
- **pasta spoon** (1-2 damage) — class item, best choice
- Knob Goblin elite polearm (6-12, 2h) — better if you need to use physical attacks
- pool cue (5-10, 2h) — keep one around if you anticipate Billiards re-runs
- eggbeater (6-11, 1h) — solid fallback, no class bonus

## Hat Choice

- **Crown of the Goblin King** (Power 70) — currently best. Unknown exact enchantments but gives lots of raw HP/MP from Power alone.
- Knob Goblin elite helm (60) — part of Guard outfit (only wear if you need the disguise)
- **ravioli hat** (10) — Pastamancer class hat. Likely has +Myst or +Spell Damage, but raw Power is so low that the Crown probably still wins on overall stats. Worth testing for specific fights.
- chef's hat (30) — generic but okay

## Accessory Options

Accessories are often the biggest class-specific lever. Known options:
- **ring of half-assed regeneration** — MP+HP regen per combat round. **Best for spell-spammers.**
- Pine-Fresh air freshener — Stench protection (only for Guano Junction or similar stench zones)
- Baron von Ratsworth's monocle — **+item drops**

**Heuristic**: for sustained combat, regen accessory > situational accessory. Swap to Pine-Fresh only for Guano Junction, and to the monocle when farming for item drops.

## Pants Choice

- **Knob Goblin Uberpants** (45) — +Muscle +Myst enchantments, best all-rounder
- ninja hot pants (70 but no enchantments) — skip
- old sweatpants (10) — starter, skip

## 🚨 Outfits are ALL-OR-NOTHING — never "upgrade" a piece while the outfit is the goal

Wearing a full matching outfit unlocks a **set bonus**, and — far more importantly — many outfits *are* a
**disguise that gates a zone, a noncombat, or a boss**:
- **Knob Goblin Elite Guard Uniform** (helm + pants + polearm) — set bonus; **enables the Throne Room cake
  path**; triggers the Kitchens cake-pan noncombat.
- **Knob Goblin Harem Girl Disguise** (veil + pants) — **enables the Throne Room harem path**; triggers the
  Treasury +500 Meat noncombat.

🐛 **The trap: outfit pieces are frequently WORSE than your best individual gear**, so the instinct is to swap
one back — the guard polearm for a stronger weapon, the harem veil for a better hat. **Doing so silently
breaks both the set bonus and the disguise.** There is no warning at the moment you swap; the failure surfaces
much later as a refusal you then misdiagnose:
> *"You are neither a guard with a cake, nor one of my harem girls."*

✅ **Rule while the outfit is the goal: wear every piece, accept the statistical downgrade.** A worse weapon
you can swing beats a better weapon that gets you scripted-defeated at the door.

## ⭐ When TWO outfits both qualify, pick the one that leaves your KEY SLOT free

This is the corollary that actually wins fights, and it is easy to miss because both outfits "work".

**Count the slots each disguise occupies, and check which of your own slots carries your damage.**

| Disguise | Slots taken | Weapon slot |
|---|---|---|
| **Knob Goblin Harem Girl** | hat + pants | ✅ **FREE** |
| **Knob Goblin Elite Guard** | hat + pants + **weapon** | ❌ forces the elite polearm |

✅ **Measured against the Knob Goblin King (50 HP, deals ~28–30/round, wins initiative):**
- **Elite Guard Uniform** (forced polearm): **7 attempts, 7 losses**, 2–3 rounds each — could not remove 50 HP.
- **Harem disguise + own weapon (astral bludgeon):** **won on the first attempt, in 2 rounds** — the bludgeon
  hit for **35 a swing**, so two swings cleared his 50 HP.

Same character, same level, same fight. **The entire difference was which slot the costume occupied.**
⇒ For a class whose damage lives in one slot (a weapon for Muscle classes, an off-hand tuning item for a
caster), a disguise that covers that slot is a **much bigger cost than its stat line suggests** — and a
disguise that needs a consumable (the harem path burns a perfume per attempt) can still be the cheaper option
overall.

## 🔁 Re-open the loadout question once the outfit has done its job

An outfit is a **temporary tool**, not a wardrobe. The moment its purpose is served — boss dead, zone entered,
noncombat triggered — **stop wearing it and re-derive the whole loadout from scratch.** Two things make this
worth a deliberate pass rather than "put the old gear back":

1. **You are giving up the set bonus too**, so the comparison is
   *(set bonus + all outfit pieces)* **vs** *(your best individual item in each slot)* — not piece-vs-piece.
2. **Stat requirements and slot conflicts may have changed** since you last chose gear (levels gained, a
   two-handed weapon blocking an off-hand, a Moxie/Mysticality gate now met).

✅ **Verify the set is actually recognised: `charsheet.php` prints an explicit `Outfit:` line** naming it
(e.g. *"Outfit: Knob Goblin Elite Guard Uniform"*) once every piece is worn. That one line is the cheapest
possible check that you have not accidentally broken the set — read it before attempting whatever the outfit
gates. Measured effect of completing the set: **Muscle 37 → 39, Moxie 15 → 18, max HP 60 → 63.**

✅ **Do it slot by slot, and verify with the charpane before/after** (see "Key Test" below). Also re-check
anything you were **unable to equip earlier** — items parked for a stat gate are easy to forget once the
quest that needed them is over.

⚠️ **And unequip a disguise when you leave the zone it belongs to.** A disguise worn in the wrong place
*blocks* that zone with a **free, repeating noncombat** — no adventure spent, so a farm loop spins forever.
✅ **Confirmed in both directions** within one quest:

| Wearing | Entering | Result (free, repeating) |
|---|---|---|
| Harem Girl Disguise | Cobb's Knob **Barracks** (257) | *"No Girls Allowed"* |
| Elite Guard Uniform | Cobb's Knob **Harem** (259) | *"Therein Lies the Rub"* |

⇒ Treat a disguise as **scoped to one zone**: put it on to enter, take it off to leave. And note the cost of
taking it off — the Elite Guard Uniform was worth **+13 max HP** here, so removing it mid-quest measurably
weakens you for whatever you farm next.

## Key Test: Charpane Before/After

When trying new equipment, snapshot the charpane immediately before and after to compare Muscle / Myst / Moxie / HP max / MP max. Any drop in these is a red flag — the item you equipped might be worse despite higher Power.

## Future Gear Targets

- **Fancy gown** / **finest gown** — if droppable and usable, may have Myst enchantments (note: the Lady Spookyraven quest gown is consumed by that quest)
- Look for items with "spell damage", "mysticality", or "MP regeneration" enchantments when browsing mall/shop listings
- Higher-tier class weapon (Pastamancer guildmaster may sell something)
