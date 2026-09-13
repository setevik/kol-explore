# Combat mechanics — the rules and formulas

> Run-agnostic, class-agnostic. Sourced from the official wiki's *Game Mechanics* pages (*Combat Tree, Hit Chance,
> Weapon Damage, Monsters, Critical hit, Fumble, Damage Absorption, Damage Reduction, Elemental Resistance, Monster
> Level, Combat Initiative, Stunning, Run Away, Free fights, Banishing, Items/Meat from Monsters, Beaten Up*) unless
> marked ✅ verified in-game. How the game picks *which* encounter you get is in **`noncombat-mechanics.md`**.
> Verified field notes (accuracy gates, defense debuffs, no-op combat items) are in **`combat-and-initiative.md`**;
> per-class doctrine is in **`<class>-class.md`**.

## 1. What happens in a fight, in order

**Start:** initiative is decided → start-of-combat familiars act (e.g. delevelers) → the winner of initiative acts
first. If the monster wins, it attacks before the round loop begins.

**Each round:**
1. If the round count passes the cap (**30 for most fights**), combat ends as *took too long*.
2. **You act:** weapon attack (may fumble, crit or hit) · skill · combat item · run away.
3. **Familiar acts** (attack, block, steal, heal, delevel…).
4. **Monster acts** unless blocked, stunned or staggered; passive/ongoing damage ticks.
5. Anyone at 0 HP → combat resolves. Otherwise the round count increases and the loop repeats.

**End — you win:** meat → items → stats (each with its familiar hooks) → **one adventure consumed**.
**End — you lose:** **4 turns of Beaten Up** (so 3 left after the turn is spent) and an adventure consumed.
**End — you ran away:** no meat, items or stats; an adventure consumed unless it was a free runaway.

## 2. Will your attack land? — Hit chance

**Your Attack stat:** Muscle for melee (and Mysticality weapons), **Moxie for ranged**, Muscle if unarmed.
**Your Defense is your Moxie.** Monsters have plain Attack and Defense numbers.

**Base hit rate = (6 + Attack − Defense) / 11**, clamped to 0–100%, then scaled by your non-fumble chance.

| Attack − Defense | ≤ −6 | −5 | 0 | +3 | ≥ +5 |
|---|---|---|---|---|---|
| Chance to hit (before fumbles) | **0%** | 9% | **54.5%** | 82% | **100%** |

- **Every point of Attack over Defense is worth +9.1% to hit.** At −6 you can never land a normal hit.
- Above **200 monster Defense** extra randomness appears (variation cap R = 5 + ⌊(Def − 200)/20⌋), so you need
  progressively *more* surplus Attack to hit reliably.
- A **critical hit always hits** — even a glancing blow that crits becomes a normal hit.
- *Regular attacks can't miss* effects (e.g. **Chalked Weapon** from a cube of billiard chalk, **Comic Violence**, the
  **Red Fox glove**) skip the hit comparison entirely. They do **not** stop fumbles.
- ✅ **In practice a blank damage column means you are under this gate**, not short on damage — see
  `combat-and-initiative.md`. **Lowering the monster's Defense** (deleveling, *Club Foot*-type skills) moves the same
  number as raising your stat.

**Fumbles:** a plain weapon attack (not a skill) fumbles **1 time in 22**, hurting you for 1 up to 10% of your weapons'
combined power. **Monsters fumble 6% of rounds and crit 6% of rounds.**

**Critical hits:** base **9%** for weapon attacks. A crit multiplies the *weapon-power* part of the damage by **2**
(**3 with Audacity of the Otter**, 4 with Legendary Luck).

## 3. How much damage you deal — Weapon damage

**Melee:**
```
( floor(Muscle × M) − Monster Defense   [min 0]
  + WeaponDamage × Crit × T
  + flat bonus weapon damage )
× (1 + %bonus weapon damage)
+ off-hand weapon damage   (if dual-wielding)
+ elemental bonus weapon damage
```
- **WeaponDamage per hit ≈ 10–20% of the weapon's power, + 0–1** (1 if unarmed). Ranges are *triangular* — the middle
  is far more common than the edges.
- **M** (stat multiplier) is 1 normally, **1.25 for Lunging Thrust-Smack (1.3 when a Seal Clubber casts it)**, 1.4 for
  Bashing Slam Smash. **Ranged** uses `floor(Moxie × M × 0.75)`; **unarmed** uses `floor(Muscle × M × 0.25)`.
- **T** (weapon multiplier) is **2 for Thrust-Smack, 3 for Lunging Thrust-Smack**, 5 for Bashing Slam Smash / Cleave.
  ⚠️ Only the **main-hand** weapon's damage is multiplied — except that **for a Seal Clubber the multiplier also applies
  to flat and *elemental* bonus weapon damage** (so a class passive like *Cold Shoulder*'s +5 cold on Smacks is tripled
  by Lunging Thrust-Smack).
- The first term is why **your stat must beat the monster's Defense to deal real damage**: every point of Defense
  subtracts a point of damage before anything else counts.
- Percentage bonuses apply to the first block only — **not** to off-hand weapon or elemental damage.
- **Negative Monster Level makes monsters take more damage** (see §6).

## 4. How much damage you take — Monster damage

```
( max(0, Monster Attack − your Moxie) + 20–25% of Monster Attack − Damage Reduction )
× (1 − Absorb fraction) × (1 − Elemental fraction)
```

**Safe Moxie:** with **Moxie ≥ monster Attack + 10**, only the monster's critical hits (6% of rounds) can land.

**Damage Reduction (DR)** is subtracted first, as a flat number.

**Damage Absorption (DA)** then removes a percentage: **% absorbed = √(DA × 10) − 10**, capped at **90% (DA 1000)**.

| DA | 10 | 40 | 90 | 160 | 250 | 360 | 490 | 640 | 810 | 1000 |
|---|---|---|---|---|---|---|---|---|---|---|
| Absorbed | 0% | 10% | 20% | 30% | 40% | 50% | 60% | 70% | 80% | 90% |

The **power of your hat, pants and shirt counts as DA**, alongside explicit DA bonuses.

**Elemental resistance** (hot, cold, spooky, stench, sleaze) then removes its own percentage. Mysticality classes have
an innate +5%.

| Level | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|
| Reduction | 10% | 20% | 30% | 40% | 48.3% | 55.3% | 61.1% | 65.9% | 69.9% | 73.3% |

- ⚠️ **Small hits are treated as 30 for the percentage**: 1 level of resistance (10%) against a 5-damage hot hit removes
  3 (10% of 30), leaving 2.
- *Slime, Shadow, Supercold* and *bad spelling* look elemental but are **not** reduced by "all elements" resistance.
- ✅ **DA and elemental resistance are different axes** — heavy absorption did nothing against a boss's spooky damage
  (see `seal-clubber-class.md`).

## 5. Initiative and running away

**Initiative % = 100 + your initiative modifiers − monster's base initiative
                + max(0, your UNBUFFED mainstat − adjusted monster Attack) − Monster Level penalty**

- ⚠️ **Buffing your mainstat does not help initiative** — only the unbuffed value counts.
- Above 100% you always win initiative; below it, it's a roll.
- **ML penalty** (on top of the monster's higher Attack): 0–20 ML: none · 21–40: `ML−20` · 41–60: `20 + 2(ML−40)` ·
  61–80: `60 + 3(ML−60)` · 81–100: `120 + 4(ML−80)` · 101+: `200 + 5(ML−100)`.

**Run away %: 100 + your initiative modifiers − monster initiative** (your stats don't matter here).
- A **failed** attempt gives the monster a free attack, and your familiar doesn't act that round.
- A **successful** escape forfeits the fight's stats, items and **any meat gained during the fight**; items taken
  earlier (e.g. pickpocketed) are kept. It costs the adventure unless it's a *free runaway*.

## 6. Monster Level (ML)

Each point of +ML gives the monster **+1 Attack, +1 Defense, +1 HP** and more initiative.

- **Stat gains per fight = (monster Attack + variation) / 4 + (ML modifiers) / 3.** +ML is the main lever for faster
  levelling; *Stat Gains from Fights* bonuses (e.g. a volleyball familiar) add stats **without** making fights harder.
- **Variance:** Attack, Defense and HP each vary by ±5% of base (capped at ±5, triangular). There's no variance for
  monsters under 20, bosses or scaling monsters.
- **High +ML adds abilities:**
  - monsters gain **physical and elemental damage resistance of 0.4% per ML** (max 50%);
  - **+26 ML:** elementally aligned monsters hit you with their element as you approach;
  - **+51 ML:** stun resistance of (ML − 50)%;
  - **+151 ML:** stagger immunity.
- **Negative ML** increases the damage monsters take, by the same 0.4% per point, with no cap.
- **Deleveling** is different: it lowers a monster's Attack and Defense **during** the fight and doesn't change stat
  gains.

## 7. Stopping the monster from acting

| Mechanic | Effect | Beaten by |
|---|---|---|
| **Stagger** | the monster doesn't attack **this round** | *stagger immunity* ("Unfazed, your opponent attacks you anyway!"), +151 ML |
| **Stun** | the monster doesn't attack for **X rounds**; stuns stack | *stun resistance* (a % chance per round, "STUN RESISTED!"), +51 ML |
| **Quick-cast** | a skill that doesn't advance the round — nothing else happens | monsters with stagger immunity |
| **Block** | cancels the damage you'd take; the rest of the round proceeds | — |

⚠️ Monsters with stagger immunity **also get a free attack when you waste a round** — e.g. using a skill with nothing
selected, or *"You twiddle your thumbs"* at 0 MP.

## 8. Spoils: items, meat, stats

- **Item drop:** final rate = **base rate × (1 + total item-drop bonus %)**, capped at 100%. Bonuses add together before
  multiplying. A 100%-base drop always drops, even with a negative bonus. Some drops are *conditional* — no bonus
  helps until the condition is met.
- **Meat drop:** each monster has a base value (Mval) and drops **⌊0.8×Mval⌋ to ⌈1.2×Mval⌉** (triangular) before the
  multiplier `(1 + total meat bonus %)`.
- **Stats:** see §6. Fractional stat gains round up or down at random, weighted by the fraction.

## 9. Free fights, free kills, banishing

**Free fight/kill** = a fight that doesn't consume an adventure. Common class-agnostic ones:
- **dense liana with a machete equipped** — ends instantly (15 per ascension). ✅ Verified: four Hidden City shrines
  cost only their 4 altar noncombats.
- **drunk pygmy with a Bowl of Scorpions in inventory** — ends instantly (11 per day).
- **lynyrd** from a *lynyrd snare* (3 per day).
- ⚠️ Free fights **still count toward a zone's noncombat delays** but **don't advance wandering-monster timers** — see
  `noncombat-mechanics.md`.

**Banishing** removes a monster from every zone's encounter list for a duration. Banishes that cost a turn run out one
turn early, because the banishing turn itself counts.
- **Batter Up!** (Seal Clubber, 5 Fury) — banishes **until rollover**, kills the monster and gives its stats but **no
  meat or items**.

## 10. Beaten Up

- Reaching **0 HP** gives **4 turns of Beaten Up**, 3 left after the turn is spent. **Muscle, Mysticality and Moxie are
  all −50%**, which lowers hit chance, damage and max HP together.
- **Being beaten up again doesn't extend it.**
- **Cures:** resting at the campsite (**costs an adventure**), Seal Clubber **Hibernate** or **Tongue of the Walrus**,
  **tiny house**, **Space Tours Tripple**, CSA all-purpose soap, aspirin, sewing kit, forest tears, a clan VIP hot
  tub, or waiting out the turns / rollover.
- ✅ **It does not stop you adventuring**, which is exactly why it compounds: a character at half stats loses the next
  fight faster. Clear it before the next fight — see HANDOFF's death-spiral rule.
