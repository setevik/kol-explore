# Pool Skill (Haunted Billiards Room)

## Context

To defeat the ghostly pool-shark in **The Haunted Billiards Room** (snarfblat 391) encounter **"Welcome To Our ool Table"** and earn the **Spookyraven library key**, you must win a game of pool. The game compares your total **Pool Skill** against a secret die roll from **14 to 18**. You win if `Pool Skill >= roll`, so:
- 14 skill: ~20% win chance (win if roll is 14)
- 16 skill: ~60% win chance
- 18 skill: 100% win chance

## ✅ Verified working recipe (run #2, Day 94) — beat the ghost with zero luck

1. **Find the encounter:** adventure **snarfblat 391** (Haunted Billiards Room) until **choice 875
   "Welcome To Our ool Table"** fires (~10 turns each time). Options: **1 = Hustle the ghost**,
   **2 = practice** (+1–4 permanent, costs 1 adv), **3 = leave**.
2. **Read your CURRENT skill** from the quest log: `questlog.php?which=3` →
   *"You have achieved a skill level of N at shooting pool"*. ⚠️ This number includes the **cue** and
   **practice** but **NOT drunkenness**. (It only displays before you beat the ghost.)
3. **Equip a pool cue (item 1793, +3)** — check **Hagnk's first**, we already owned 2 from run #1.
   Mall price is ~130 meat, but ⚠️ Ronin mall buys need meat in *Hagnk's* purse.
4. **Drink to EXACTLY 10** for **+10** (see the drunkenness trap below).
5. **Practice until displayed skill ≥ 8**, i.e. `8 + 10 drunk = 18` → **guaranteed win** (ghost rolls 14–18).
   Practice gave only **+1 each** in our run (range is 1–4), so budget ~4 practices × ~11 turns each.
6. **Hustle.** Reward: **Spookyraven library key (7302)** → the Haunted Library (390).

## 🚨 The drunkenness trap (verified on the wiki)

**+1 skill per point of drunkenness up to 10 — then −2 per point beyond it.**
So 11 drunk = +8, **14 drunk = only +2**, 19 drunk = −8.
⇒ **Play pool at exactly 10 drunk, and do the day's normal DRINK step AFTER winning.** Topping to the
usual 14 before the game would gut your skill by 8 points.

## Ways to Increase Pool Skill

| Source | Bonus | Duration |
| --- | --- | --- |
| **Pool cue** (equipped weapon) | +3 | while equipped |
| **Chalky Hand** effect (from `handful of hand chalk`) | +3 | ~5 adventures, decays |
| **Practicing** at "the other table" in the ghost choice encounter | +1 or +2 | **permanent** (stacks) |
| **Drunkenness** | **+1 per point, up to 10** (max +10) | persists until rollover |
| **Drunkenness past 10** | **−2 per point** | avoid overshooting |

### Practice Tip
Each "Hustle over to the other table and practice" costs 1 adventure but gives permanent Pool Skill. Practice while Chalky Hand is active (doesn't change the practice bonus but lets you accurately see your skill in the charpane). With ~5 practices you can get to Pool Skill 10 base, then just need a few more bonuses.

### Drunkenness Plan
To hit exactly 10 drunkenness without overshooting:
- `bottle of rum` = 3 drunk
- `bottle of tequila` = 3 drunk
- `bottle of vodka` = 3 drunk
- `Imp Ale` = 1 drunk

So **3 × 3-drunk bottles + 1 × Imp Ale = exactly 10.** Drinking also grants adventures.

## The Ghost Fight Choice

When you land on **"Welcome To Our ool Table"** (a choice encounter, not combat), you see three options:

1. **Hustle the ghost** — play him now. Win or lose based on Pool Skill vs roll.
2. **Hustle over to the other table and practice** — +1–2 Pool Skill, 1 adv. Use this to ramp up if you're not ready.
3. **Hustle away** — abandon the encounter; will reroll next visit.

## Verified Formula Walkthrough

Worked example:
- Practiced 5 times → base Pool Skill 10 (shown in charpane quest description)
- Equipped pool cue: +3
- Used hand chalk (Chalky Hand): +3
- Drank to 10 drunk: +10
- **Total: ~26 Pool Skill** (overkill, guaranteed win)

Charpane displays only the *base* permanent Pool Skill (from practice) — the dynamic bonuses from cue/chalk/drunk aren't shown there but ARE applied when hustling the ghost.

## Useful Drops

- **Chalkdust wraiths** in Billiards Room drop `handful of hand chalk` — self-sustaining supply. They have high spook resistance though; Spaghetti Spear only does ~1 damage per hit. Use Ravioli Shurikens or Knob Goblin firecrackers.
