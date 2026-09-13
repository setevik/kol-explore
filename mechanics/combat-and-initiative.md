# Combat — verified field notes

> **The rules and formulas now live elsewhere:**
> - **`combat-mechanics.md`** — round order, hit chance, damage dealt and taken, crits and fumbles, DA/DR and
>   elemental resistance, initiative and running away, Monster Level, stun vs stagger, drops, free fights, Beaten Up.
> - **`noncombat-mechanics.md`** — how the game picks an encounter: the combat roll, delays, queue, superlikelies, Lucky!.
> - **`familiars.md`** — what familiars do in a fight.
> - **Per-class doctrine** — `<class>-class.md`.

## Combat messages decoded

| Message | Meaning |
|---|---|
| *"gets the jump on you"* / *"You get the jump on him"* | the monster / you won initiative and act first |
| *"You twiddle your thumbs"* | the round was wasted — usually a skill cast at too little MP, or nothing selected. ⚠️ Stagger-immune monsters get a free attack on a wasted round. |
| *"…out of your league!"* with no damage number | an **accuracy gate** — see below |
| *"Unfazed, your opponent attacks you anyway!"* | the monster is stagger-immune |
| *"STUN RESISTED!"* | the monster shrugged off your stun this round |
| *"You lose. You slink away, dejected and defeated."* | you lost; Beaten Up applied |
| *"Adventure Again (Zone Name)"* | the fight is over and you can continue |

## Combat page structure (for scripts)

- `select[name="whichitem"]` — combat items · `select[name="whichskill"]` — combat skills (each shows `(X MP)`).
- ✅ The most reliable "am I in a fight?" test is the presence of `<form name=attack` (HANDOFF § `inFight()`).
- ✅ Some fights end on their **intro page**, with no combat form at all (e.g. a *dense liana* against a machete). Treat
  *"You win the fight!"* on the adventure page itself as a completed fight.

---

## 🎯 A DASH IN THE DAMAGE COLUMN MEANS *ACCURACY*, NOT DAMAGE — check Defense vs your attack stat

✅ **Measured (Seal Clubber vs Groar):** nine rounds in which **zero damage was dealt — not low damage, none** —
while spooky resistance, off-hand items and healing potions were all being carefully optimised. The game says so
in plain words:

> *"...out of your league!"*

**Groar's Defense is 108; the attacking Muscle was 98.** It was never a DPS race — no attack could connect.

✅ **Log damage-dealt every round, and treat a run of blanks as a HARD STOP, not bad luck:**
```js
const dmg  = (p.match(/for (\d+) damage/)||[])[1];      // undefined => you did not hit
const took = (p.match(/You lose (\d+) hit points/i)||[])[1];
log.push('R'+r+' dealt '+(dmg||'-')+' took '+(took||'-'));
// 2-3 consecutive '-' dealt => abort: this is an ACCURACY gate, not a damage gate
```
🎯 **The rule: your MAIN STAT must exceed the monster's Defense to land hits reliably.** Before any boss, read
**Defense** from the wiki alongside HP, and compare it to your *buffed, as-you-will-actually-be-dressed* stat.
⚠️ Phrases to recognise as accuracy failures (not damage failures): *"out of your league"*, and any round where
your attack line reports no number at all.
⚠️ Corollary: **+damage gear, elemental resistance and healing items are all worthless below the accuracy
gate.** Fix accuracy first; everything else is wasted preparation.

## ⬇️ CAN'T RAISE YOUR STAT? LOWER THEIRS — defense-debuffs beat the accuracy gate

The companion to the accuracy rule below. When your attack stat sits under a monster's Defense, there are
**two** ways to close the gap, and the second is usually far cheaper:

| | |
|---|---|
| Raise your stat | levelling, gear, buffs — slow, and a required outfit may claw it straight back |
| **Lower their Defense** | **one combat skill, immediately, from inside the fight** |

✅ **Measured:** at attack stat **106 vs Defense 108** the first attempt still landed nothing. Casting a
defense-weakening combat skill **twice** (Seal Clubber's `Club Foot`, 8 MP — *"Weakens enemy defense"*) turned
the same fight into a win. **Two days had gone into trying to out-level the wall.**

🎯 **Before grinding levels for a boss, read your own combat skill list for anything that says *weakens*,
*sunders*, *shatters* or *-Defense*.** Most classes have one and it is usually cheap. Check with
`desc_skill.php?whichskill=<id>&self=true`.
⚠️ It also stacks with being *close* — a 2-point deficit is a very different animal from a 10-point one; a debuff
finishes a near-miss but will not rescue a rout.

## 🔤 ACTION NAMES CAN ENCODE PROGRESS — scrape the link, never hard-code it

`place.php` actions sometimes carry state in the name, and **the stale name silently returns an empty page** —
no error, no turn spent, no clue:

| Thing | Action while incomplete | After progress |
|---|---|---|
| Orc Chasm bridge | `bridge0` | **`bridge5`, `bridge12`, … (the number is your current progress)** |
| Mist-Shrouded Icy Peak | `cloudypeak` | **`cloudypeak2`** (after the gear step) |

❌ A tally-checking loop hard-coded to `bridge0` reported "no lumber, no fasteners" for 40+ turns while **37
lumber and 31 fasteners** sat in the pack — the bridge finished instantly once the right link was clicked.
✅ **Always resolve the action from the place page:**
```js
const pl  = await G('/place.php?whichplace=orc_chasm');
const act = (pl.match(/action=(bridge\d+)/)||[])[1];        // or /action=(\w*peak\w*)/ etc.
await G('/place.php?whichplace=orc_chasm&action='+act);
```

## 🧪 NOT EVERY ITEM WORKS IN COMBAT — and a no-op item spins the fight loop forever

`Monstar energy beverage` restores MP **out of combat only**; in a fight it answers *"that can't be used in
combat"* — **the round does not advance**. A loop that keeps choosing it burns iterations indefinitely while HP,
MP and the adventure count all sit still. (Verified in-combat MP restore: **Mountain Stream soda**.)

✅ **Guard every in-fight item use, and blacklist on refusal:**
```js
const banned = new Set();
…
p = await G('/fight.php?action=useitem&whichitem='+item);
if (/can't be used in combat/i.test(p)) { banned.add(item); r--; continue; }   // retry the round differently
```
⚠️ Same family as the free-encounter guard: **any action that leaves state unchanged must be detected and
retired**, not repeated.
