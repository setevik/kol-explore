# Pastamancer Class Details

## Overview
- One of 6 classes in KoL (Seal Clubber, Turtle Tamer, Pastamancer, Sauceror, Disco Bandit, Accordion Thief)
- **Primary stat**: Mysticality
- **Guild**: The League of Chef-Magi (Right Side of the Tracks, Seaside Town)
- **Theme**: Pasta-based magic, cooking, food additives as arcane ingredients

## Starting Skills

### Manicotti Meditation (Non-combat)
- Cost: 1 MP
- Effect: Grants **Pasta Oneness** buff for 5 adventures
- Pasta Oneness: increases Mysticality (observed +2 to buffed stat)
- Shown with upward arrow icon in effects panel

### Spaghetti Spear (Combat)
- Cost: 1 MP (shown as 0 in combat skill dropdown -- possibly a display quirk or level-dependent)
- Type: Spell damage
- Damage: scales with Mysticality (observed 2-6 damage at Mys 4-6)
- Can CRITICAL HIT for bonus damage
- Combat messages: "You conjure up a dart of spaghetti and hurl it at your opponent"

## Guild NPCs (all cheese-named)
- **Gorgonzola** - Chief Chef, quest giver
- **Brie** - Trainer (skill purchases)
- **Gouda** - Grimoire and Grocery (shop)
- **Rodoric** - Staffcrafter (weapon crafting)
- **Blaine** - Meatcar access
- **Asiago** - the Pastamancer (lore NPC?)
- **Edam** - the Sauceror (Sauceror counterpart)

## Guild Initiation Quest
1. Talk to Gorgonzola at the League of Chef-Magi
2. He sends you to exorcise a **poltersandwich** in The Haunted Pantry
3. Adventure in The Haunted Pantry until non-combat "A Sandwich Appears!" triggers
4. Click "sudo exorcise me a sandwich" button
5. Return exorcised sandwich to Gorgonzola
6. Gain full guild membership and access to all guild services

## Pastamancer Flavor Details
- Exorcism incantation: "Riboflavin, maltodextrin, monosodium glutamate!"
- Combat hits described as "cooking up pain"
- Mysticality substats have varied names: Enchantedness, Wizardliness, Magicalness, Mysteriousness
- Starting equipment: pasta spoon (1-2 damage melee), ravioli hat (enchanted, Power 10)

## Shared Guild (Pastamancer + Sauceror)
- The League of Chef-Magi serves both Pastamancers and Saucerors
- Both are Mysticality-primary classes
- Described as being in "an uneasy truce" (per character creation screen)
- They protect "the secrets of the Ancient Brotherhood of Gravymakers"

---

## Combat standard

- 🚨🚨 **RE-VISIT THE GUILD TRAINER EVERY FEW LEVELS — THIS WAS A WEEKS-LONG BLIND SPOT .**
  `guild.php?place=trainer` lists skills **by level with prices**, and we fought at Levels 10–12 using the
  same three spells bought at Level 5. Buying **Weapon of the Pastalord (skillid 8, 5,000 meat, skill
  id 3008, 32 MP)** plus the cheap passives **Utensil Twist (id 25, 125 meat)** and **Transcendent Al
  Dente (id 26, 250 meat)** flipped the ML ~140 desert from unfightable to **11W/0L in one afternoon** —
  no level-up required. Buy with a POST to `guild.php`: `action=buyskill&skillid=<SHORT id>&pwd=`.
  ▶ **Next purchases worth saving for: Cannelloni Cocoon (id 12, 7,500 — free full heal, replaces
  scrolls/tiny houses) and Spirit of Rigatoni (id 11, 2,500 — chefstaff weapons).**
  **Parse the trainer by table row**: each `<tr>` holds the skill name, `skillid value=(\d+)`, and
  `Train \(([\d,]+) Meat\)` — the flat-page regexes return nothing.

- ⚠️ **A fresh run has almost no skills — FIX THAT FIRST.** The guild trainer is locked until you pass the
  **guild challenge** (Pastamancer: tame the poltersandwich in the Haunted Pantry, snarf 113, choice **544**).
  It's doable at Level 1–4 in ~5 safe turns and unlocks buying **Cannelloni Cannon / Entangling Noodles /
  Lasagna Bandages** for meat. **Do it on day 1 of any new run.** Full detail: `mechanics/guild-membership-and-skills.md`.
- ⚠️ **"It gets the jump on you" + `rounds=0` = you were one-shot before acting.** For a Mys class
  **max HP ≈ base Muscle + 3**, so a low-level caster is paper, and **Moxie is the initiative stat** (Moxie 8 at L5
  ⇒ nearly everything acts first). Don't confuse this with MP-starvation or elemental damage — read the log.
  ⚠️ **BUT before blaming the zone, verify you entered at FULL HP** — a stale-HP heal-gate (see api.php section)
  fakes this exact symptom. At an honest full HP, a "lethal" ML 25–30 Knob monster died in 2 rounds untouched.
- **The low-level caster combo that works:** **Entangling Noodles (3004, 3 MP — stun) round 1 → Cannelloni (3005,
  8 MP) round 2+**, heal with **Lasagna Bandages (3009, 6 MP)** between fights, **magical mystery juice (518)** for MP.
  ~11 MP/fight. If you win initiative you take **zero** damage; if you lose it you may simply die. That coin-flip
  *is* the early game until **Springy Fusilli (3015, +init, guild Level 6)**.
> ⚠️ **Every skill named in this section is a GUILD PURCHASE that must be re-bought after each ascension**
> (unless you spent karma to perm it), and each has its own **level gate** — a fresh character has none of them.
> Treat the combos below as *"once you own these"*, not as a given. **Which skills the current run actually has,
> and which are permed, belongs in `CURRENT_ASCENSION.md`**; how to buy them is in
> `mechanics/guild-membership-and-skills.md`.

- **Opener/combo:** **Stuffed Mortar Shell (3007)** round 1 → **Cannelloni Cannon (3005)** round 2+.
  Mortar queues ~2× Cannelloni damage on the NEXT round and is castable **once per fight**; Cannelloni (Mys-scaled)
  is the main nuke. Most zone monsters die in ~2 rounds with MP topped.
- **Bosses (ramp/tank):** enter at FULL HP (scroll 595) + FULL MP (tiny houses), **Mortar → Cannelloni every round**,
  heal only under ~35% HP. Turtling loses to ramping bosses (e.g. "The Man") — it's a DPS race. Torpedoes (630) in reserve.
- 🚨 **IF A "NONCOMBAT" NEVER APPEARS, IT MAY NOT BE A NONCOMBAT.** One stretch cost ~190 turns hunting
  Palindome choice 872 as a random encounter, even with −combat buffs. It is reached by a
  **`place.php?...&action=` link that unlocks when you READ AN ITEM** (`"I Love Me, Vol. I"`, which had
  been sitting unread in the bag). ✅ **Before grinding for any gated encounter: read the wiki's zone page
  for whether it's a location, and `inv_use` unread quest books/items you're carrying.**
- 🚨 **NEVER CONFIRM A BOSS KILL FROM THE WIN-STRING ALONE — CHECK HP / Beaten Up / the quest log.**
  two straight losses to an ancient protector spirit were logged as **WINS** because its defeat
  text doesn't match `/You lose the fight|black out|slink away/`. The tell was HP 0 + Beaten Up afterwards.
  ✅ After any boss attempt, read `api.php` HP and the charpane, or re-read `questlog.php`, before believing it.
- ⚔️ **Weapon of the Pastalord (3008) is PHYSICAL** — it does nothing to physically-immune monsters
  (ancient protector spirits). Against those, use **Cannelloni (3005) with an element-tuning off-hand**.
  Corollary: the big nuke is not universally better; match the damage type to the target.
- 🍝 **Pasta thralls are a damage multiplier, not a gimmick.** **Bind Vampieroghi (3027)** + the
  **Bringing Up the Rear** passive took the ML-150 Hidden Hospital from 6W/3L to **11W/1L** at unchanged
  stats. **Summon the thrall first thing each day while MP is full**, and re-summon when the charpane
  stops listing it. With a thrall up, cheap **Cannelloni beats the expensive nuke on MP efficiency**
  (13W/1L in the Office at 8 MP/cast vs 32).
- 🚨 **CHECK THE BOSS'S ELEMENT BEFORE YOU FIGHT — a damage-tuning off-hand can HALVE your damage.**
  The **Necrotelicomnicon (2494)** re-tunes all pasta to **Spooky**; against the **Bonerdagon** (spooky-resistant)
  that turned a 4-round untouched win into an 11-round loss. **Unequip element-tuning gear when the target
  resists that element** . Corollary: exploit weakness instead — spooky-tuned Cannelloni is what
  killed cold-aligned Groar in 8 rounds.
- 🚨 **Against a boss that out-damages your heal, NEVER heal — race it.** Lasagna Bandages (~17 HP) cannot
  cover ~37 dmg/round; healing just loses slowly. Enter at full HP and cast damage every round.
- 🚨 **In ML 100+ zones the FULL routine (Entangle stun → Mortar → Cannelloni) is load-bearing — never let a
  loop variant "simplify" it.** Verified in-game in the Black Forest (ML 123–133): full routine ≈ 4W/1L;
  the same loop with Cannelloni-only went **0W/14L** — the stun round + mortar's 2× queue are the whole margin.
  When copying a fight loop into a new burst, diff the skill ladder first.
- 🚨 **CANNELLONI COCOON (3012) IS *NONCOMBAT* — IT DOES NOTHING IN A FIGHT.** A "heal at <35% HP"
  branch that casts it mid-combat **burns the round and the MP for no heal**, which is exactly how you
  lose a boss race. Heal to full **between** fights (`runskillz.php`), never inside one. (Verified in-game
  from the wiki *before* it cost us the Office boss.)
- ⚔️ **AN UNTUNED STUFFED MORTAR SHELL (3007) CAN ROLL *PHYSICAL*.** Its damage is
  `(32–64)+(0.5×Mys)` of a **random element — or physical** if untuned. Against a physically-immune
  target (ancient protector spirits) that is a wasted round on a coin flip. ✅ **Fix: lock the element
  first.** **Flavour of Magic (3017, guild L14, 12,500)** grants five tuning casts —
  **7176 Cayenne=hot · 7177 Peppermint=cold · 7178 Garlic=stench · 7179 Wormwood=sleaze ·
  7180 Bacon Grease=spooky · 7181 Nothing** — and adds **+10 spell damage**. Cast one at day-start.
  (Equipment tuning like the Necrotelicomnicon does the same job but locks you to spooky.)
- 💰 **THRALL UNIT TACTICS (3034, guild L10, 5,000) HALVES THE MP COST OF DAMAGING PASTA SPELLS**
  while a thrall is up (Cannelloni 8→4; does NOT reduce Entangling Noodles or Lasagna Bandages).
  If MP is your limiter — it usually is — this is the highest-value skill on the trainer, ahead of
  any raw damage buy. Pair with **Spirit of Ravioli (3014, L9, 4,000) = +25% max HP**, which is the
  cheapest answer to "the boss two-shots me".
- 🥊 **Entangling Noodles is a MULTI-round stun for a Pastamancer** ("prevents the enemy from attacking
  for X turns"), not a one-round tickle. Opening with it buys the whole Mortar wind-up for 3 MP — it is
  the reason the burst lands before the boss swings.
- **Low MP / 0 MP fallback:** weapon attack with the Greek Pasta Spoon of Peril (2561) is a free finisher on weak zones.
- **Skill IDs:** Mortar 3007 · Cannelloni 3005 · Entangling Noodles 3004 (stun) · Spaghetti Spear 3020 (0 MP) ·
  Ravioli Shurikens 3003 · Lasagna Bandages 3009 (heal, works out-of-combat via runskillz) · Springy Fusilli 3015 (+init) ·
  Pastamastery 3006 (daily dry-noodle summon) · Manicotti Meditation 3000 · Bind Spaghetti Elemental 3041.
  ⚠️ Springy Fusilli can't be cast mid-choice — cast it BEFORE triggering a +init check.
