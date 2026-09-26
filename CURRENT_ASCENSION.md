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

## 📊 Character state (end of run #4 Day 5 / 2026-09-26)

- **LEVEL 8 Turtle Tamer.** base Muscle 61 / base Moxie 38. **Max HP 140, max MP 44.**
  💰 **Meat 10,084.** **5 adventures banked.** full **15/15** ✅ · drunk **17** (14 + ONE overdrink) ✅ · spleen 9.
  **~415 wins, 2 losses** for the run (115–0 today).
- 🎽 **Worn:** Crown of the Goblin King · scorpion whip · astral shield · old sweatpants · ring of half-assed
  regeneration · batskin belt. 🐾 Marcellus the Mosquito.
  **Held for quests:** **coffin lid** (off-hand, Slight Spooky Resistance — for the Bonerdagon) · **eXtreme scarf +
  snowboarder pants** (need the **eXtreme mittens** pull tomorrow) · mining outfit (helmet, pants, mattock) ·
  white sword · harem outfit · 8 perfume.
- 🧠 **Skills bought: all through Level 8** (Level 8 = Empathy of the Newt + Butts of Steel, **3,250 each**).
- ✅ **Council: larva · rat · Boss Bat · Goblin King · Friars — DONE.**
  💀 **Cyrpt: all four rooms CLEARED** — Evilometer reads **999 / Haert 999**. ▶ **Only the Bonerdagon remains.**
  🏔️ **Trapper: phase 1 DONE** (3 chrome ore + 3 goat cheese turned in, ski lift fixed). ▶ Phase 2: cold gear.
- 🧰 **Supplies:** 12 medicinal herbs · 3 goat cheese · Imp Ale ×13 · cocktails (margarita, whiskey and soda, wine
  spritzer, tequila sunrise, salty dog ×2, screwdriver ×3, swill ×3) · bottles of whiskey ×8, tequila ×4, gin ·
  imitation White Russian (NOT booze) · 15 ten-leaf clovers. **No MP restoratives in the bag.**
- 🏦 Ronin: **`roninleft` 433**.

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

## 🔜 Next-session priorities — run #4, Day 6

> **5 adventures banked. Level 8. Meat 10,084.** Pull items first (20 slots, 1 per item per day).
1. 🏦 **Pulls:** **eXtreme mittens** · **phonics down + ancient Magi-Wipes** (Bonerdagon MP) · food (guolash, herbal
   stuffing, cactus fruit, + 1-fullness fillers — ⚠️ **no centipede eggs before the Bonerdagon**: they poison you for
   10 adventures; eat them after the boss or skip them) · booze (**open sauce** 13, **Flamin'
   Whatshisname** 7, a 2-potency lander) — the inventory's cocktails fill the rest of the 14.
2. 🐉 **Bonerdagon FIRST** (HP 120, Att 90, Def 81, Init 90, spooky, wing-flap disrupts skills/items 25%).
   Prep, in order: herbs to full HP · **use an irradiated turtle (4 held: +4–5 MP/adventure for 15)** ·
   phonics/Magi-Wipes to full MP · **coffin lid in the off-hand** (replacing
   the astral shield) · Tenacity + Ghostly Shell + Patience · **Brother Smothers's Blessing LAST** ·
   `crypt.php?action=heart` → answer the entry choice → `Shell Up` then `Lunging Thrust-Smack` every round.
   Buffed Muscle ~90 vs Def 81. Then **report to the Council** and use the chest (+3,000 meat).
3. 🏔️ **Trapper phase 2:** wear the eXtreme Cold-Weather Gear outfit, then **scrape the peak's action from
   `place.php?whichplace=mclargehuge`** (`cloudypeak2` once the gear is on) — yetis then **Groar** (HP 250,
   weak to hot/spooky). Read `trapper-mclargehuge-quest.md` § Groar first.
4. 🧠 **Level 9 → trainer**, and the Level 9 Council quest (the Orc Chasm) — `orc-chasm-and-highlands.md`.

## 🗓️ Session log (this run)

- **Run #4 Day 5 (2026-09-26): 🐢 Level 7 → 8. The whole Cyrpt cleared except the Bonerdagon; Trapper phase 1 done — 115 wins, 0 losses.**
  🍽️ **Food 15/15 = +54** (guolash 19 · herbal stuffing 17 · cactus fruit 7 · centipede eggs 6 · crudités 3 + 2).
  🍺 **14 = +33** (open sauce 13 · Flamin' Whatshisname 7 · martini 5 · whiskey sour 5 · Merlot 3), spent, then
  **ONE vodka martini overdrink (+5) → drunk 17.** ⚠️ The pulled imitation White Russian turned out **not to be booze**.
  ☠️ **Somewhat Poisoned** silently took buffed Muscle 75 → 45 right before the Nook boss — spotted, cured with a
  pulled antidote (effect id 283). **Cause: the centipede eggs eaten at breakfast.**
  💀 **Learned the boss trigger is evil ≤ 13, not 25** — the Nook served ordinary skeletons at 16/15/14.
  Nook boss (giant skeelton) → **Cranny**: 25–0 + 3 whelp swarms, boss (huge ghuol) → **Niche**: the second urn held a
  **plus-sized phylactery**, which one-shot the gargantulihc. **Evilometer 999 — only the Haert left.**
  Bonerdagon deferred: Smothers's blessing already spent on the Nook, and no MP items left.
  🧠 **Level 8 skills 3,250 each.** 🏔️ **Trapper** wanted **chrome** ore: pulled 1, mined 2 in 14 digs (mining stalls
  silently at low HP — *"too beaten up to mine"*); **3 goat cheese in 24 Goatlet fights**. Turned in → lift fixed.
  Pulled a **coffin lid** (spooky res) and 2 of 3 cold-weather pieces for tomorrow. Goatlet XP for the last 33 turns.

- **Run #4 Day 4 (2026-09-25): 🐢 Level 6 → 7. Goblin King dead, Friars cleansed, Cyrpt started — 107 wins, 1 loss.**
  🍽️ **Food 15/15 = +49** (guolash 19 · yams 9 · 4 × Knob nuts from the Harem · donut · snowcone · crudités, 3 each).
  🍺 **Filled to exactly 14 = +35** (Fog Murderer 14 · Zinfandel 7 · limoncello 6 · painting 3 · margarita 5), spent,
  then **ONE Green Manalishi overdrink (+8) → drunk 17.** 14 pulls + 1 tiny house.
  👑 **Goblin King: 2 rounds.** Strongness elixirs → buffed Muscle 53; phonics down + Magi-Wipes for MP; Tenacity,
  Ghostly Shell, Patience; harem veil + pants + perfume; **Shell Up** bounced his first hit, **Lunging Thrust-Smack
  hit for 66**. Crown of the Goblin King dropped — became wearable at day end (base Moxie 30).
  ⛪ **Friars: 60 turns, 48–0.** ⚠️ Spent 16 Neck fights waiting for a "drop" before learning the items come from
  the **4th of a fixed chain of noncombats** in each grove — `friars-blessings.md` corrected.
  🧠 **Level 7 skills 2,500 each.** The Council handed over the **Cyrpt at Level 7**, straight after the ritual.
  💀 **Cyrpt:** Nook 26–0 + 2 evil eyes (50 → 16); Alcove ground to 11 then **LOST to the conjoined zmombie** (the
  room boss) mid-grind at part HP → pulled a tiny house for Beaten Up, herbs to full, Shell Up + 2 × Thrust-Smack
  → **Alcove 0**. Cranny 50 → 44. Recorded the answers for choices 153 / 155 / 523.

- **Run #4 Day 3 (2026-09-24): 🐢 Level 5 → 6, Boss Bat dead, Hidden Temple open, Cobb's Knob open — 102 wins, 0 losses.**
  🍽️ **Food 15/15 = +52 adventures** (guolash 18 · tofurkey leg 12 · candied yams 10 · crudités 4 · donut 3 ·
  snowcone 3 · alien salad 2). 🍺 **Filled to exactly 14 = +38** (bourbon 5 · Marsala 6 · Zinfandel 7 · Green
  Manalishi 8 · backwoods screwdriver 7 · martini 5), spent all 38, then **ONE margarita overdrink (+6) → drunk 17**.
  🏦 18 pulls on consumables/gear/sonar/restoratives, the last 2 on the harem veil + pants.
  🔧 **Found the cocktail kit and Dramatic range unused in inventory — installed both**; mixed a martini, whiskey and
  soda, wine spritzer, tequila sunrise, and discovered **tequila + lemon → margarita**.
  🗡️ **Scorpion whip pulled from storage replaced the turtle totem** — every fight today was a plain attack.
  🦇 **Boss Bat:** 2 sonars → Beanbat Chamber (11 turns; a **screambat knocked the third wall down** by itself, so the
  sonar that also dropped was spared; also an enchanted bean) → Lair: 5 bodyguards then the Boss Bat, killed with
  plain swings. Drops: dense meat stack + **batskin belt** (worn).
  🌳 **Spooky sapling** bought via 502 → 503 → 504 — ⚠️ **504 re-served after the purchase and the chain bought 4**
  (−400 meat). Map used ⇒ **Hidden Temple unlocked.**
  🗡️ **15 Outskirts turns chasing the wounded guard were wasted on a quest already finished** — its reward is the ring
  I was already wearing. Lesson moved to HANDOFF.
  👑 **Council now: the Goblin King.** Map decoded → Knob open. At base Muscle 25 the **Harem went 98–0** and dropped
  **9 perfumes, 8 veils, 7 pants** and the **lab key**. King not attempted: Def 47 vs buffed Muscle 37 at the time.
  🧠 **Level 5 skills 1,250, Level 6 skills 1,750** (the doc's guess of 1,750 at Level 5 was one rung off).

- **Run #4 Day 2 (2026-09-23): 🐢 Level 3 → 5, two Council quests closed, and BOTH meters filled — 91 wins, 1 loss.**
  🏦 **Day 1's mistake fixed by inverting the order: items first, meat last.** With 15,580 meat already in hand,
  **all 20 storage slots went to consumables** (17 used, 3 spare). The storage page states the budget in plain
  English — *"You may take 20 more items or 20,000 more Meat out of storage today"* — so it never needed guessing.
  🍽️ **Breakfast: 47 adventures off 15 fullness**, against Day 1's 15. Built by pricing storage food on
  **adventures-per-fullness** first: ghuol guolash (5/17.5) + Mornington roll (3/8.5) + pestopiary (2/6) and four
  1-fullness items at 2.5–3.5. ⚠️ Level gates did the choosing as much as ratio did — candied yams, centipede
  eggs, herbal stuffing and stolen sushi were all still locked at Level 3.
  ✅ **Toot Oriole** (never visited on Day 1) → letter → **goodies sack → 5 gems autosold for 2,500**.
  ✅ **Larva quest** — and the real lesson: **the mosquito larva is NOT a monster drop.** 15 fights in the Spooky
  Forest produced nothing; it is choice **502 `Explore the stream` → 505 `March to the marsh`**, which delivered
  it in **4 turns**. ⇒ *if a "zone item" is not dropping, check whether it is a choice branch before grinding.*
  ✅ **Rat quest DONE** → Bart Ender paid 3 × Typical Tavern swill. 🚨 **Correction to my own doc: the Baron is
  OPTIONAL** — clearing the squares and turning off the faucet finished the quest without ever meeting him, and
  his monocle needs 10 base Mysticality anyway. Also re-met the documented **faucet trap**: a rewritten loop
  dropped the skip-set and the faucet re-fired **13 times for zero adventures** — free encounters, so the
  adventure-counter guard never noticed.
  🗺️ **Two of three Hidden Temple items picked up in passing** (tree-holed coin → **Spooky Temple map**, plus
  Spooky-Gro fertilizer); only the sapling is left. Captured the **exact labels** for choices 502/505/506/507 —
  the doc had only option numbers, which my own rules call unreliable.
  🧠 **Skill ladder measured: 125 · 250 · 500 · 750 for Levels 1–4**, both skills at a level costing the same.
  **Ghostly Shell (6 MP) arrives at Level 4**, right as max MP reaches ~9.
  🍺 **Filled to exactly 14** (martini, vodka martini, strawberry wine, daiquiri, popskull = **+25 adv**), spent
  every one, then **ONE white lightning overdrink → drunk 17, +5 banked.** ⚠️ White lightning measured **5 adv**,
  not the wiki's 7.5. Ended Level 5, Muscle 25, max HP 42, meat 17,173.

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
