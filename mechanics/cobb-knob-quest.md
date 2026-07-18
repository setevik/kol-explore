# Cobb's Knob Quest — Reaching the Goblin King

## 0. Opening the Knob (verified run #2, Day 5)

1. **Council** (`council.php`) gives the quest at **Level 5** + the **Cobb's Knob map (item 2442)**.
2. Adventure **The Outskirts of Cobb's Knob (snarfblat 114, ML 1–2, safe at any level)** until the one-time
   "Code Red" non-combat drops the **Knob Goblin encryption key (item 2441)** (~11 turns).
3. **Use the map** (`inv_use.php?which=3&whichitem=2442&pwd=`) with the key in inventory → **Cobb's Knob opens**
   (`cobbsknob.php`).

**Zones:** **257 Barracks · 258 Kitchens · 259 Harem · 260 Treasury** (all **ML 25–30, Recom Stat 25**).

⚠️ **THE STAT GATE — and the Beaten Up trap.** These zones require **base mainstat ≥ 25**. Below it you get:
> "The Knob Goblin Harem Guards at the Harem door brandish their swords at you… and tell you to bugger off."

This **consumes no adventure**, so a loop will spin forever doing nothing. **`Beaten Up` debuffs your base stats**,
which silently drops you under 25 and locks you out of a zone you could enter minutes earlier. **Always clear
Beaten Up (`campground.php?action=rest`) before re-entering**, and treat "brandish their swords" as *stat gate*,
not a disguise requirement.

## Outfit shortcut (Ronin-friendly)

The disguise pieces are **cheap and tradeable**: **harem veil 306** (hat, also +1 stench res) · **harem pants 305**
(pants) · **Knob Goblin perfume 307** (potion, effect lasts **1 adventure**). They are **three DIFFERENT items**, so
the Ronin "1 pull per item per day" rule does **not** block buying the whole disguise in one day (~100 meat each in
the mall → pull 1 of each). Perfume also drops reasonably often in the Harem (2 in 8 turns).

⚠️ **The disguise is BAD armor** (veil/pants are Power 10). Wear it only for the Treasury payoff and the throne
room; **swap back to real gear to grind**.

## Getting Past the Throne Room Door

The **Knob Goblin King** (`cobbsknob.php?action=throneroom`) refuses entry unless you match one of two disguises. First attempt response:

> "You are neither a guard with a cake, nor one of my harem girls."

So you need either:
1. **Knob Goblin Elite Guard Uniform** + a **Knob cake** in inventory
2. **Knob Goblin Harem Girl Disguise** + **Knob Goblin Perfume** effect active (1 adv)

Without either: you take 10 damage and get tossed out.

## Path A — Harem Girl Disguise

### Outfit pieces (drop from Cobb's Knob Harem enemies, snarfblat 259):
- **Knob Goblin harem veil** (hat)
- **Knob Goblin harem pants** (pants)

Once both are in inventory, the game treats "Knob Goblin Harem Girl Disguise" as a selectable **outfit** in the equipment page dropdown. Equipping it auto-equips both pieces.

### Perfume:
- **Knob Goblin perfume** drops from Harem zone enemies (rare-ish). Using it grants the effect **Knob Goblin Perfume (1 adventure)** — so use it *immediately* before approaching the throne room.

Second attempt response without perfume:
> "You look like one of my harem girls, but you don't smell like one."

## Path B — Guard Uniform + Cake (recommended for higher HP)

### Outfit pieces (drop from Cobb's Knob Barracks enemies, snarfblat 257):
- **Knob Goblin elite helm** (hat, 60 power)
- **Knob Goblin elite polearm** (weapon, 6-12 damage 2h)
- **Knob Goblin elite pants** (pants)

Wearing the full uniform gives the **"Knob Goblin Elite Guard Uniform"** outfit bonus. This path also boosts Muscle/HP significantly relative to the harem outfit, enough to survive accidental hits.

### Getting a Knob cake

While wearing the Guard Uniform, adventure in **Cobb's Knob Kitchens** (snarfblat 258). You'll trigger the disguise-specific non-combat:

> "You! The Goblin King requires a cake pan!"

Grants a **Knob cake pan** (quest item). You also need:
- **Knob batter** (drops from Kitchens enemies)
- **Knob frosting** (drops from Kitchens enemies)

Then craft at the cooking bench:
1. `Knob cake pan + Knob batter` → **unfrosted Knob cake**
2. `unfrosted Knob cake + Knob frosting` → **Knob cake**

Keep the cake in inventory (don't eat it!) and approach the throne room while wearing the Guard Uniform.

## The Goblin King Fight

**Stats (wiki):** **HP 50 · Attack 53 · Defense 47 · No-Hit 63 · Initiative 100 · phylum goblin.**
Drops: 2× dense meat stack, **Crown of the Goblin King** (or Glass Balls / Codpiece), + **Cobb's Knob lab key**.

🧱 **⚠️ CORRECT PREP IS NOT ENOUGH IF YOU'RE SQUISHY (verified run #2, Day 5 — we lost).** With the **full Harem
disguise AND the perfume effect active**, the entry text was right ("You sashay into… he looks up, distracted"),
and he still **one-shot us before round 1**: his **Initiative 100** vs our **Moxie 8** means he acts first, and
**Attack 53 vs 15 max HP** is instant death. `rounds=0`, no spell cast.

✅ **SOLVED (run #2, Day 6) — the fix is INITIATIVE, and it is decisive.** Same disguise, same perfume, but with
**Springy Fusilli (3015, +init, guild Level 6, 10 MP, lasts 10 adventures)** cast beforehand and 19 max HP:
**won in 3 rounds — Entangling Noodles (stun) → Cannelloni → Cannelloni — taking zero damage.**
The disguise gets you *in the room*; **Springy Fusilli is what lets you act**. Nothing else changed.

**Winning recipe:** full HP + ~33 MP → equip veil 306 + pants 305 → **cast Springy Fusilli (3015)** →
**use perfume (307) LAST** (it lasts only 1 adventure) → `cobbsknob.php?action=throneroom` →
**3004 stun, then 3005 every round.**
⚠️ Cast Fusilli **before** entering — it can't be cast mid-choice/mid-fight.

When prep AND body are right, you enter a **real combat** (no scripted defeat). The King has modest HP:
- Pastamancer combo: **Entangling Noodles** (stun) → **Ravioli Shurikens** x2–3 kills him
- Ned the Vampieroghi thrall's blood-drain keeps you topped up during the fight

**Rewards (verified run #2):**
- **Crown of the Goblin King (item 313)** — hat, 70 power. ⚠️ **Requires 20 BASE MOXIE to equip** — a Mys caster
  will likely be unable to wear it for a long time (we had 14). Don't count on it as an immediate upgrade.
- **2 × dense meat stack (item 258)** — ⚠️ **NOT usable** ("This item is not implemented yet"); it's a
  **meatsmithing component**. **Autosell them** — ~850 meat each (≈1,700 for the pair).
- **Cobb's Knob lab key (item 339)** — opens the Knob laboratory.
- Council quest complete → Council points to the **Deep Fat Friars** next.

## Warning: Scripted First-Hit Defeat Without Prep

If you try the throne room with **only the Harem outfit (no perfume)** or **only the Guard outfit (no cake)**, it's not a real fight — the King gets the scripted jump, one-shots you for **37 damage**, and you lose regardless of stats/buffs. Even Springy Fusilli (+40% init) doesn't bypass this scripted defeat. You MUST have the correct disguise+item combo.

## Treasury Disguise Exploits (bonus finding)

Wearing the Harem outfit in **Cobb's Knob Treasury** (snarfblat 260) triggers a disguise-specific non-combat:

> "It's nice to see you, baby, but couldn't you have waited until I was finished counting?"

Grants **+500 Meat** ("a harem girl's salary"). This appears to be **once per day** — subsequent visits in disguise give a flavor fail ("you've already been paid once today") and the regular Treasury encounters.

Similar exploits may exist in other Knob zones with both disguises — worth testing.
