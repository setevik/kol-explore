# CURRENT ASCENSION — live run state

> **This is the ONLY file that holds current-run state** (character state, caps/limits, which skills are
> learned or permed, quest progress, next-session priorities, session log). Reusable know-how lives elsewhere
> and must stay run-agnostic:
> - `HANDOFF.md` — idempotent operational manual (engine, rules, item refs, gotchas).
> - `mechanics/*.md` — idempotent game mechanics / walkthroughs.
> - `NEW_SESSION_PROMPT.md` — idempotent session-start prompt (read its **Doc-hygiene rule**).
> On ascension, archive this file to `runs/ascension-NN-<class>.md` and start a fresh one.
> Prior runs: `runs/ascension-01-pastamancer.md` (WON) · `runs/ascension-02-pastamancer.md` (WON) ·
> `runs/ascension-03-seal-clubber.md` (WON).

**Character:** ClaudeCode — **Ascension #4 (the FOURTH run)**, a **Turtle Tamer**, Softcore/Normal,
**Platypus** sign, **Unrestricted** path. **Started 2026-09-22** (immediately after winning run #3).

---

## 🎯 THE PLAN FOR THIS RUN — document a third class

The goal is **one ascension per class**, documenting each class's specifics, until all six are covered.
Run #4 is the **Turtle Tamer** (Muscle / defensive).

**Classes covered so far:** Pastamancer ✅✅ · Seal Clubber ✅ · **Turtle Tamer ▶ in progress** ·
Sauceror · Disco Bandit · Accordion Thief.

⚠️ **Most of `mechanics/` was written for a caster, then corrected by a Seal Clubber.** The Turtle Tamer is
Muscle like the Seal Clubber, so `mechanics/seal-clubber-class.md` is the closest analogue — **but its Fury
material does not apply** (Fury is Seal-Clubber-exclusive). **Create `mechanics/turtle-tamer-class.md`** on the
first day and record: the guild challenge, the skill tree with measured prices, the class resource, the
signature weapon (**turtle totem**) and whether shields matter (Turtle Tamers are the shield class).

---

## 📊 Character state (end of run #4 Day 1 / 2026-09-22)

- **LEVEL 3 Turtle Tamer.** Muscle 14 / Mys 2 / Mox 1. **Max HP 26, max MP 2.** 💰 **Meat 15,580.**
  **0 adventures.** full **15/15** ✅ · drunk **0/14** ❌ (see the miss below). **50 wins, 1 loss.**
- 🎽 **Worn:** knobby helmet turtle · turtle totem · **astral shield** · old sweatpants.
  🐾 **Familiar out: Marcellus the Mosquito** (the Adorable Seal Larva restores MP, useless on a 2-MP pool).
- 🥋 **Guild joined** (sausage challenge, 6 turns) and **all four available skills bought**: Headbutt ·
  Spirit Vacation (125 each) · Skin of the Leatherback · Blessing of the War Snapper (250 each).
- 🏗️ **Installed for the whole run: Dramatic™ range + Queue Du Coq cocktailcrafting kit** (1,000 each).
- 🧰 **Supplies:** medicinal herbs ×15 (spleen HP battery, 15/day cap) · strongness elixir ×4 ·
  bowl of cottage cheese ×10 · concentrated cooking ×4. ❌ **No booze of any kind.**
- 🗡️ **Open:** *When Rocks Attack* accepted (the wounded guard wants unguent, ~30 meat — finish it Day 2).
  🔑 **Knob Goblin Encryption Key dropped** ⇒ Cobb's Knob interior is decodable. Also held: **Dr. Hobo's map**.
- 🏦 **Hagnk's still holds run #3's whole estate.** Ronin: **`roninleft` 945**.

### 🔓 CAPS & SKILLS THIS RUN

**Fullness 15 · Booze cap 14 (no Liver of Steel) · Spleen 15.** ⚠️ Re-read the booze cap from `charsheet.php`.

**Permed, carried in (verified present on the new charsheet):**
- ⭐ **Double-Fisted Skull Smashing** — *passive*, wield a one-handed weapon in each hand. **NEW this run.**
- ⭐ **Lunging Thrust-Smack** (Combat, 8 MP) — ×3 base weapon damage. **NEW this run.**
  ⚠️ Off-class it loses only the "Bonus Weapon Damage if a Seal Clubber" rider; **no club required.**
- **Cannelloni Cocoon** (Combat/heal, **20 MP**) — ⚠️ unusable until max MP reaches 20; a Muscle class takes a
  while. Plan early healing around items/spleen.
- **Pastamastery** (10 MP, 1/day) — Summon Dry Noodles; it appears in Daily Reminders.

🚨 **The astral shield and the new dual-wield perm COMPETE for the off-hand.** Wear the shield early (Muscle
+25%, **Regenerate 5–10 HP per adventure**, DR 15 — it answers the documented "healing costs turns" tax at low
level), then **swap to two one-handed weapons once you own two good ones** and re-verify from `charsheet.php`.

## 🔜 Next-session priorities — run #4, Day 2

> **0 adventures banked + the new day's allowance. Level 3. Meat 15,580.** Rollover resets the pull budget.
1. 🚨 **PULL ITEMS FIRST, MEAT LAST** — the day's 20 storage slots are shared, and **meat costs 1 slot per
   1,000**. Day 1 took 19,969 meat as its first act, burned all 20 slots, and **could not pull a single bottle,
   so the booze meter went unfilled.** Meat is no longer scarce (15,580 in hand), so **spend the slots on
   consumables: booze first, then food, then restoratives.**
2. 🍺 **Fill the booze meter this time.** ⚠️ At Level 3 most good bottles are level-gated (Fog Murderer needs 6,
   Ye Olde Meade 7) — pull **low-level** booze and check `Level required` before counting on it.
   The cap is **14** (no Liver of Steel). Fill to exactly it, ONE overdrink, then stop.
3. 🍽️ **Food:** pull real food rather than buying fillers. Day 1 was forced onto **1-fullness / 1-adventure**
   General Store cookies (15 fullness for only 15 adventures) — a pulled food is worth several times that.
4. 🧠 **Re-visit `guild.php?place=trainer` at EVERY level-up** — it only lists skills up to your current level.
5. 🗡️ Finish **When Rocks Attack** (buy the unguent, return to the guard — ~1 turn).
6. 🔑 Decode the Knob with the **Knob Goblin Encryption Key** and move up to a better zone when Level ~5
   (`leveling-zones.md`: the Outskirts is the Level 1–4 default; the Barracks is the next step).
7. ⚔️ Still plain attacks — **Lunging Thrust-Smack needs 8 MP and max MP is 2.** Re-check each level.

## 🗓️ Session log (this run)

- **Run #4 Day 1 (2026-09-22): 🐢 Turtle Tamer born, guild joined, Level 1 → 3 — 50 wins, 1 loss, zero healing
  items used. But the booze meter never got filled, and the cause was my own bookkeeping.**
  🏦 Opened by withdrawing **19,969 meat** from Hagnk's — and that single action **consumed the entire day's
  20 storage slots** (meat costs 1 slot per 1,000). Every later pull answered *"…would exceed your item limit…
  you should only take 0"*. Because **Ronin mall buys also land in storage**, there was then **no route to any
  booze in the Kingdom**: the General Store sells none and the Tavern isn't unlocked. Food had to be bought as
  **15 × 1-fullness / 1-adventure fortune cookies** — 15 adventures where pulled food gives several times that.
  🚨 **The rule was already correct in `ronin-softcore-rules.md` ("meat spends the SAME daily allowance…").
  I followed a contradicting line I had written into `HANDOFF.md` instead of reading the mechanics file** — the
  exact failure HANDOFF's "read your own mechanics file first" rule exists to prevent. Both files now agree,
  and the fix is a rule: **pull items first, meat last.**
  🥋 **Guild:** the Turtle Tamer gets the **same sausage-measuring challenge** as the Seal Clubber ⇒ the
  challenge belongs to the **Muscle guild**, not the class. 6 turns in the Outskirts, 11-inch sausage accepted.
  🧠 **Skills:** Headbutt + Spirit Vacation (125 each), then at Level 2 Skin of the Leatherback + Blessing of the
  War Snapper (250 each) — **identical prices to the Seal Clubber**, so the ladder is per guild-level.
  ⚠️ **The trainer only shows skills up to your current level** (two rows at Level 1) — revisit every level.
  🐢 Starting kit **arrives unequipped**; Patience of the Tortoise (1 MP) = **temporary max HP, 5 adventures**.
  🐛 **`inventory.php` carried NO pwd hash** on a 6-item character, so the first helper build silently had no
  pwd; `charpane.php`/`main.php`/`familiar.php` did. ⇒ `browser-automation.md` now scans a list and asserts.
  📓 **New doc: `mechanics/turtle-tamer-class.md`**, plus the Outskirts noncombat answers in `leveling-zones.md`
  (**111** *Malice in Chains* → *Serve your sentence* = 4–5 Muscle · **113** *Knob Goblin BBQ* → *Kick the chef*
  starts a fight · **118** wounded guard → *Sure, I'll help* starts *When Rocks Attack*).
  Ended Level 3, Muscle 14, max HP 26, meat 15,580, full 15/15, **drunk 0/14**.

- **2026-09-22 — Ascended into run #4.** Stepped through the astral gash at Level 15 / base Muscle 273.
  Karma read **102 → 213** at the Pearly Gates ⇒ ✅ **a Normal win pays exactly 111** (100 + the Instant
  Karma), correcting a long-standing "211" error in the docs that had doubled the apparent budget.
  Spent **210**: softcore-permed **Double-Fisted Skull Smashing** and **Lunging Thrust-Smack**, plus an
  **astral shield** (10). **3 karma banked.**
  🐛 **The Permery page pairs each form with the NEXT skill's name** — it rendered "Cavalcade of Fury" beside
  the form whose `whichskill` was 1017 (Double-Fisted Skull Smashing). **IDs were re-verified against
  `desc_skill.php` before spending.** ⇒ now a warning in `mechanics/ascension.md`.
  🐛 **`whichpath` arrives with Standard (22) pre-`checked`** and the read-back page **never states the path**,
  so it cannot be confirmed before committing — ✅ verified *after* rebirth from `api.php` → `path` = **0**
  (Unrestricted), and `lamepathok=1` is required to submit an older path.
  Reborn Level 1 Turtle Tamer under the Platypus with **40 adventures** and Ronin reset to 1000.
