# Guild membership & buying skills (Pastamancer / League of Chef-Magi)

> Idempotent. Do this **as early as possible in every new run** — it is the single biggest early-game power
> spike available, and it is cheap. Current-run skill/meat state lives in `CURRENT_ASCENSION.md`.

## The gate: "not a full member of the League of Chef-Magi"

A fresh character can reach the guild but the **trainer, store, and Meatcar are all locked** until you pass the
guild challenge. The blocking message is *"you are not a full member…"*. This is **not** level-gated — it's a
one-shot quest, doable at Level 1–4.

- `guild.php` → link **`guild.php?place=challenge`** → **Gorgonzola, the Chief Chef** sets the challenge.
- **The challenge (Pastamancer):** find and tame the **poltersandwich** in **The Haunted Pantry (snarfblat 113)**.
- The Haunted Pantry is **ML 1–2** — completely safe at any level, ~81% combat.
- Adventure there until the choice adventure **544 "A Sandwich Appears!"** fires (took ~5 turns).
  Resolve it with **`choice.php?whichchoice=544&option=1&pwd=`** ("sudo exorcise me a sandwich").
- Return to **`guild.php?place=challenge`** → Gorgonzola makes you a member. **Unlocks all guild sections.**

## What unlocks

| NPC | Link | What it gives |
|---|---|---|
| **Brie, the Trainer** | `guild.php?place=trainer` | Buy class skills with **meat** (see below) |
| **Gouda** | `shop.php?whichshop=guildstore2` | Provisions (NPC shop → delivers to **inventory**, not storage — big deal in Ronin) |
| **Blaine** | `guild.php?place=paco`(?) | **Borrow the guild Meatcar** — worth investigating; normally you must build a bitchin' meatcar |
| staffmaker | `guild.php?place=staffmaker` | Chefstaves (needs Spirit of Rigatoni, L7) |

## Buying skills from Brie

- Skills **cost meat** and are gated by **character level** (you may buy anything at or below your level).
- **Form:** POST to `guild.php` with `action=buyskill`, `skillid=<SHORT id>`, `pwd=<hash>`.
  ⚠️ **`skillid` is the SHORT id, not the 4-digit skill id** — Cannelloni Cannon is skill **3005** but
  `skillid=5`; Lasagna Bandages 3009 → `skillid=9`; Entangling Noodles 3004 → `skillid=4`.
- **Price scales with the skill's level:** L1 = 125 · L2 = 250 · L3 = 500 · L4 = 750 meat (≈ level² pattern).
- Verify with a real signal — the response contains "You learn…"; check `meat` afterwards.

### Pastamancer skill tree at Brie (level → skills)

| Lvl | Skills |
|---|---|
| 1 | Ravioli Shurikens (3003, 4 MP nuke) · Utensil Twist (3025, 1 MP) |
| 2 | **Entangling Noodles (3004 — stun)** · Transcendent Al Dente (3026, noncombat, costs 1 adv) |
| 3 | **Lasagna Bandages (3009 — heal, 6 MP)** · Bind Vampieroghi (3027) |
| 4 | **Cannelloni Cannon (3005 — main nuke, 8 MP)** · Arched Eyebrow of the Archmage (3028) |
| 5 | Bind Vermincelli | 6 | Springy Fusilli (+init) · Bringing Up the Rear |
| 7 | Spirit of Rigatoni (chefstaves) · Bind Angel Hair Wisp |
| 8 | **Stuffed Mortar Shell (3007)** · Shield of the Pastalord |
| 9 | Bind Undead Elbow Macaroni · Spirit of Ravioli |
| 10 | Weapon of the Pastalord · Thrall Unit Tactics |
| 11 | Leash of Linguini · Bind Penne Dreadful |
| 12 | Cannelloni Cocoon · Subtle and Quick to Anger |
| 13 | Tolerance of the Kitchen · Bind Lasagmbie |
| 14 | Flavour of Magic · Wizard Squint |
| 15 | **Transcendental Noodlecraft** (hi meins) · Bind Spice Ghost |

### Buy priority on a fresh run (tight meat)

1. **Cannelloni Cannon (750)** — the main nuke; everything dies ~1 round.
2. **Entangling Noodles (250)** — stun.
3. **Lasagna Bandages (500)** — heal; out of combat via `runskillz.php?...whichskill=3009`.
4. Then Ravioli Shurikens (125) as an MP-cheap (4 MP) alternative nuke, and L6 **Springy Fusilli (+init)**
   — see the initiative problem in `combat-and-initiative.md`.

**MP costs (verified via `desc_skill.php?whichskill=<id>&self=true`, which prints "MP Cost"):**
Spaghetti Spear 0 · Utensil Twist 1 · Ravioli Shurikens 4 · Lasagna Bandages 6 · Cannelloni Cannon 8.
