# Ascension Mechanics (KoL endgame / replay system)

> Researched Day 75 (2026-06-30) from the KoL wiki via WebSearch snippets (WebFetch 403s on
> wiki.kingdomofloathing.com; coldfront mirror redirects). **Verify exact numbers in-game when actually ascending** —
> some figures below are from summaries and KoL tweaks them over time. ClaudeCode is **not ready to ascend yet** (still
> finishing the main questline — see "Relevance" at bottom). This is forward-planning reference.

## ✅ Verified in-game flow (Day 86 — first ascension executed)
1. **Free King Ralph** (break the prism, `nstower&action=ns_11_prism`) → the **Astral Gash** appears (`ascend.php`).
2. **Step through the gash:** `ascend.php` form — check both `confirm`+`confirm2` boxes, submit "Ascend" → you're in
   **Valhalla ("Beyond the Pale")**, a Level ∞ Astral Spirit. ⚠️ Direct-navigating `ascend.php` redirects; drive the
   **mainpane frame** (or the visible UI). Frame DOM reads can be flaky — use screenshots for the irreversible clicks.
3. **The Mini-Pearly Gates** (`afterlife.php?action=pearlygates`) → the Gatekeeper grants your **karma** (111 for a Normal win).
   Four shops open: **Permery** (`?place=permery`), **Deli** (`?place=deli`, consumables), **Pet Heaven / armory**
   (`?place=armory`, astral gear-pets), **Bureau of Reincarnation** (`?place=reincarnate`).
4. **Permery FIRST:** each known skill has a **"Make Permanent (100 Karma)"** button — click the one next to the skill you
   want (Day 86: **Pastamastery**). Screenshot to map buttons→skills (DOM introspection returned empty).
5. **Astral pet (armory):** each "pet" = a piece of **equipment** for the new run, **10 karma** each. For a Mys caster the
   **astral chapeau** is the pick. (Deli consumables cost more karma; skip if broke.)
6. **Bureau of Reincarnation:** one form with selects **`asctype`** (1 Casual/2 Normal/3 Hardcore), **`whichclass`**
   (3 = Pastamancer), **`gender`**, **`whichsign`** (moon sign) + a **path** radio (Standard vs Thrifty vs older).
   **Moon signs → stat:** 1 Mongoose/2 Wallaby/3 Vole grouping; **4 Platypus = +Muscle, 5 Opossum = +Mysticality,
   6 Marmot = +Moxie**; 7/8/9 = Wombat/Blender/Packrat; 10 Bad Moon. Pick **Opossum (5)** for a Pastamancer.
   **Standard path** gives **+50 bonus karma** (2026 yearly). Submit "Once More Unto the Breach!" → a confirmation page
   (check the "yes, skip the Deli" box if broke) → "…for Real!" → reborn at **Level 1**.

## What ascension is
"Beating" KoL = defeating the **Naughty Sorceress** and freeing **King Ralph XI**. Instead of the game ending, you may
step through an **astral gash** into **Valhalla** ("Beyond the Pale") and **start a brand-new life from Level 1** — resetting
stats, level, and most of your inventory — but carrying forward a few permanent perks (permed skills, familiars, account
unlocks). This is the core replay loop: each ascension you can pick a new class, new path, and bank one more permanent skill.

## Prerequisites to ascend
- Complete **all Council of Loathing quests**, which unlocks the final **Naughty Sorceress Quest** at **Level 13**.
- Climb the **Naughty Sorceress' Tower**. The tower door needs **six keys**: Boris's key, Jarlsberg's key, Sneaky Pete's
  key, Richard's star key, a **skeleton key**, and a **digital key**. Multiple tower floors/guardians, then the NS herself.
- **Free King Ralph** (break the prism) after beating her. *Then* the astral gash opens.
- You may go **Beyond the Pale only once per day** (since 2023-01-30).

## Valhalla / Beyond the Pale (the reward room)
In Valhalla you **cannot** access inventory, receive items/buffs from others, or adventure. You talk to NPCs (e.g. "Al")
and spend **Karma**. Choices made here set up your *next* run:
- **Change class** (or keep Pastamancer) — each class has its own guild skills & quest flavor.
- **Pick a Moon Sign** — affects starting stat/skill leanings, which gear-shop/guild perks you get, and some zone access
  (e.g. Gnomish Gnomad Camp wants a Wombat/Blender/Packrat sign — relevant to our long-dead cocktailcrafting goal).
- **Pick a difficulty** and optionally a **challenge path** (below).
- **Perm a skill** at **Jermery's Permery**, and buy an **astral pet** (a familiar) + an **astral consumables pack** for the
  new run.

## Difficulty types (sets how much of your old stuff you can use)
On ascending, your inventory + closet are dumped into **Hagnk's Ancestral Mini-Storage**. How much you can pull back:
- **Casual** — keep **full free access** to all your stuff. BUT: **no leaderboard eligibility** and **not enough karma to
  perm a skill**. (Easy mode; bad for progression.)
- **Normal (a.k.a. Softcore)** — you're in **Ronin** for the first **1,000 adventures**. During Ronin you may pull at most
  **20 items OR 20,000 meat per day** from Hagnk's (mixable: each item pulled costs 1,000 of your meat allowance, and vice
  versa). After 1,000 turns Ronin ends and Hagnk's opens fully. Leaderboard-eligible, earns karma.
- **Hardcore** — **no outside access at all** (no Hagnk's except items flagged **"free pull"**, no mall, no stash, no
  player gifts/buffs) until you **free King Ralph**. Most restrictive, most karma.

## Karma (the perm currency)
**Earning** (spent in Valhalla): base per completion = **11 Casual / 111 Normal / 211 Hardcore.**
- ⭐ **KARMA BANKS across ascensions** — unspent karma persists and is available at future Valhalla visits. So you can
  **save up and perm multiple skills at once** (or stockpile for expensive Hardcore perms). This is what makes "farm karma"
  a real strategy: each finished run adds to a running total.
- **+11 karma per Instant Karma discarded** at ascension. You **always** get an Instant Karma for beating the final boss
  **at Level 13** (any difficulty), plus an extra one if the run is leaderboard-qualifying. Some optional/skippable bosses
  also drop Instant Karma items (~9 instant karmas ≈ one softcore perm, since 9×11≈100).
- **Special challenge path** (if started while "current"): **+50 (Normal)** / **+100 (Hardcore)**.

**Spending:**
- **100 karma → make a skill Permanent** for future **Casual/Normal** runs.
- **200 karma total → make it Hardcore Permanent** (kept even in Hardcore). You can pay **100 now** (softcore perm), then
  **+100 later** to upgrade. **A Hardcore perm is just a karma cost — you do NOT need to be in a Hardcore run to buy one**;
  Hardcore runs are simply the most karma-efficient way to *earn* the karma (211 vs 111).
- Astral pet + astral consumables pack cost a small remainder each. So one Normal run (111) ≈ one softcore perm + pet +
  pack; one Hardcore run (211) ≈ one HC perm + pet + pack. **Roughly ONE perm's worth of karma per ascension** — but since
  karma banks, you can also skip perming for a run and save toward a bigger purchase.

## Perming skills (Jermery's Permery)
- ~390 skills can be permed total. **Softcore perm** = available in Normal/Casual runs; **Hardcore perm** = also available
  in Hardcore (costs the extra 100). A few skills come **auto-Hardcore-Permanent** when learned (no karma needed).
- You perm at most ~1/ascension, so **order matters** — perm the highest-leverage, always-useful skills first (combat/econ/
  utility that every future run benefits from), not class-specific niche skills.

## Challenge paths (all mutually exclusive with each other)
- **Standard** — normal restrictions (the default competitive path; the "current" Standard year is leaderboard-relevant).
- **Dietary paths:** **Teetotaler** (food + soft drinks, no booze) · **Boozetafarian** (booze only, no food/soft drinks) ·
  **Oxygenarian** (no food AND no booze — the hardest of the three; effectively both at once).
- **Bad Moon** — a special **Hardcore-only** moon-sign path (shows on charsheet/history).
- **Many seasonal "special challenge paths"** rotate as "current," e.g. Bees Hate You, Way of the Surprising Fist, Avatar
  of Boris / Jarlsberg / Sneaky Pete, Zombie Slayer, Class Act, Trendy, Heavy Rains, Community Service, etc. Each rewrites
  the rules and gives bonus karma if run while current.

## What carries across ascensions
- **Permed skills** (per the rules above).
- **Familiars** stay in your **terrarium** (not lost to the reset).
- **Account-wide unlocks:** Mr. Store / IOTM items, tattoos, trophies, achievements, and **Hagnk's storage** contents
  (retrievable per your difficulty's pull rules).
- **Reset each run:** level, stats, most equipped/inventory items (→ Hagnk's), quest progress, campground state largely.

## Leaderboards
Ranked by **fewest DAYS first**, then **fewest turns (adventures) spent** as the tiebreaker. So speed-ascension is about
minimizing real days, then turn-efficiency within those days.

## 🎯 STRATEGY: Hardcore + Hardcore-perm karma farming (per user directive, Day 75)
**Goal (user-set):** prioritize **Hardcore ascensions** and **Hardcore perms** to farm karma. Valid — HC = 211 karma/run
(≈2× Normal's 111) and karma banks, so over several runs you accumulate enough to perm many skills (incl. HC perms at 200).

**Reality / sequencing (important):**
1. **You can't go Hardcore mid-run.** Difficulty is chosen **at the next ascension, in Valhalla.** This character is already
   mid-run, so the *only* way to reach that choice is to **FINISH the current run**: remaining Council quests → free King
   Ralph via the **NS Tower** (six keys). **⇒ Twin Peak, Nemesis, and the tower are the on-ramp — they stay near-term
   priorities and do NOT conflict with the hardcore goal.**
2. **Hardcore forbids the mall, Hagnk's pulls (except free pulls), clan stash, and all player buffs/gifts until you free the
   King.** Our whole playstyle is mall/buffbot-dependent (we BUY jerky, sodas, Fog Murderers, gear; the Twin Peak plan needs
   a buffbot). A cold jump to HC would be brutal and slow.
3. **Recommended ramp: do the FIRST ascension Softcore (Normal), not Hardcore.** It still banks 111 karma, is far survivable,
   and lets us perm the **survival/economy skills** first. Then escalate to Hardcore once self-sufficient. HC perms can still
   be bought from Softcore runs (it's just karma) — so we lose nothing by ramping.
   - **Why Pastamancer makes this clean:** **Pastamastery** (summon dry noodles → self-made food) is exactly the kind of
     self-sufficiency a no-mall Hardcore run needs. Perm it early.

**Perm priority (first → later), general-purpose / Pastamancer-relevant** (verify vs the wiki's *Hardcore Skill Analysis* /
ASS tier list at perm time — tiers shift):
1. **Pastamastery** — daily food summon; huge for no-mall HC self-sufficiency and speeds every run.
2. **Meat/econ skills** — e.g. **Nimble Fingers**, **The Polka of Plenty** (more Meat from monsters).
3. **Sauce/utility** — **Impetuous Sauciness** / **The Way of Sauce** (more Reagent-potion use), other always-on utility.
4. **Then** broader combat/quality-of-life perms and class-specific niche skills.
Perm **general skills that help every future run before class-locked niche ones.** Save karma if nothing high-tier is
affordable yet rather than wasting it on a low-value perm.

**Other notes for the eventual ascension:**
- Go **Softcore first, never Casual** (Casual gives only 11 karma — no perm).
- A fresh ascension also re-rolls the **Moon Sign** (could grant Gnomad Camp access — but cocktailcrafting is class-locked,
  so low value). See [[kol-drinks-strategy]].
- Future runs: finishing the final boss **at Level 13** grants a bonus Instant Karma (+11) — a reason to NOT over-level on
  speed runs. (Our *current* run is already Level 16, so we miss that bonus this time.)
