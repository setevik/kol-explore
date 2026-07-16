# CURRENT ASCENSION — live run state

> **This is the ONLY file that holds current-run state** (character state, quest progress, next
> priorities, session log). Reusable know-how lives elsewhere and must stay run-agnostic:
> - `HANDOFF.md` — idempotent operational manual (engine, rules, item refs, gotchas).
> - `mechanics/*.md` — idempotent game mechanics / walkthroughs.
> - `NEW_SESSION_PROMPT.md` — idempotent session-start prompt.
> Prior completed runs are archived in `runs/` (e.g. `runs/ascension-01-pastamancer.md`).

**Character:** ClaudeCode — **Ascension #2 (the SECOND run)**, a **Level 1 Pastamancer**, Softcore/Normal.
**Started:** Day 86 / 2026-07-13 (immediately after winning + ascending run #1).

---

## 🎉 We ASCENDED (2026-07-13)

Run #1 is WON and archived (`runs/ascension-01-pastamancer.md`): beat the Naughty Sorceress (all 3 forms,
via the Wand of Nagamar) + freed King Ralph XI, then stepped through the astral gash and reincarnated.

**This new run's ascension choices (Softcore, per the plan in `mechanics/ascension.md`):**
- **Lifestyle: Normal (Softcore)** — in **Ronin for the first 1,000 turns** (may pull ≤20 items OR 20,000 meat/day
  from **Hagnk's** during Ronin; last run's whole inventory is sitting in Hagnk's). Earns **111 karma** on completion.
- **Class: Pastamancer** (kept — synergy with permed Pastamastery).
- **Moon Sign: The Opossum** (+10% Mysticality gains; unlocks Little Canadia). Good for a Mys caster.
- **Path: Standard** (2026 yearly path; **+50 bonus karma**, reward angelbone chopsticks; note: pre-2024
  limited-time content disallowed — irrelevant to our basic playstyle).
- **Permed: Pastamastery** (now available every non-Hardcore run forever — daily dry-noodle food summon).
- **Astral pet:** bought the **astral chapeau** (caster hat; equip it early).
- Karma left over: ~1 (banks). Familiars stay in the terrarium; permed skills + account unlocks carry over.

---

## 📊 Character state (run #2 — end of Day 89 / 2026-07-16)

- **Level 5 Pastamancer.** Base Mys **23** (raw 565) · base Muscle **10** · Moxie ~6. **HP 13 max** (⚠️ the binding
  constraint), MP ~46. **Meat ~1,505. adv 15 banked.** full 15, drunk 15 (both meters filled ✅). Ronin ~850.
- **Equipped:** astral chapeau (5030) · pasta spoon (5) · old sweatpants (4711) · **Baron von Ratsworth's monocle
  (1312, +item)** · **Pine-Fresh air freshener (556, acc2, +1 stench res)** · **familiar = Marcellus the Mosquito**.
- ✅ **FULL MEMBER of the League of Chef-Magi** (Day 89 — tamed the poltersandwich). **Guild fully unlocked.**
- **Known combat skills:** **Cannelloni Cannon (3005, 8 MP — main nuke)** · **Entangling Noodles (3004, stun)** ·
  **Lasagna Bandages (3009, 6 MP heal — works out of combat via `runskillz.php`)** · Spaghetti Spear (3020, 0 MP —
  the MP-free workhorse) · Manicotti Meditation (3000) · permed Pastamastery.
- **Buyable next at Brie** (`guild.php?place=trainer`, price = 125/250/500/750 by skill level):
  **Springy Fusilli (3015, +init) at Level 6** ← the fix for the Bat Hole · Ravioli Shurikens (3003, 125, 4 MP nuke) ·
  Transcendent Al Dente (3026, 250) · Bind Vermincelli (L5).
- **Consumables:** 3 MMJ (518), 9 dry noodles, ~4 oranges (242), whiskey/Willer/swill for booze. No tiny houses (592)
  or healing scrolls (595) in inventory — **Lasagna Bandages is now the heal**; campground rest clears Beaten Up.
- **In Hagnk's** (⚠️ **only 1 of each item per day** — see `mechanics/ronin-softcore-rules.md`): **121 stolen sushi**
  (unlocks at Level 6), **3 insanely spicy bean burritos (316)**, **8 sonars (563)**, 3 air fresheners (556),
  22 MMJ (518), + last run's 400+ item types. Also a **telegram from Lady Spookyraven** (Manor quest later).
  **Hagnk's meat ≈ 1,149** (a *separate purse* — mall buys spend this, not inventory meat).

---

## 🔜 Next-session priorities (ordered)

✅ Done: Toot Oriole → L3 (Day 86); mosquito larva + L4 (Day 87); **Typical Tavern rat problem + Baron's monocle**
(Day 88); **guild membership + Cannelloni/Noodles/Bandages + Level 5 + first full food meter** (Day 89).
Council still points to the **Boss Bat**.

> 🧱 **THE ONE BLOCKER: max HP 13.** The Bat Hole one-shots us *before we act* ("gets the jump on you", `rounds=0`).
> This is a **body** problem, not a skills problem. For a Mys class **max HP ≈ base Muscle + 3**. Everything below
> is aimed at fixing that. Detail: `mechanics/bat-hole-boss-bat.md`.

1. **EAT first (the pattern that works):** pull **1 burrito (316)** from Hagnk's (3 fullness, **+27–32 Muscle → +max HP**,
   Level 4) + top up with 1-fullness filler already in inventory → full 15. At **Level 5 the Mys twin (319)** is also
   legal; **prefer the Muscle one (316) while HP is the blocker**. Cast Pastamastery. Buy filler from **NPC shops**
   (guild store `shop.php?whichshop=guildstore2` — Gouda) since **the mall can't stock food in Ronin**.
2. **Reach Level 6 → then buy `Springy Fusilli (3015, +init)` at Brie.** Winning initiative is the real Bat Hole key:
   act first → **Entangling Noodles (stun)** → **Cannelloni** → never get hit. Level 6 = **raw mys 841** (we're at 565).
   Level 6 *also* unlocks **stolen sushi (121 in storage!)** and gnocchetti — food stops being a problem forever.
3. **Grind Level 6 in the Spooky Forest (snarf 15)** — proven safe at 13 HP with the loop below; ~5 raw mys/turn,
   and it pays ~20 meat/turn.
4. **Then the Boss Bat:** wall 1 is **already down** (Batrat & Ratbat Burrow, snarf 32, is open). Need **2 more walls**
   — pull 1 sonar/day from storage (8 there) and/or farm sonars off bats. Then Boss Bat's Lair = **snarf 34**.
5. **Then the L5+ Council chain:** Cobb's Knob, Friars, Cyrpt/Bonerdagon… — re-use the run-#1 walkthroughs in `mechanics/`.
6. **Investigate Blaine at the guild — he lends out the guild Meatcar** (would skip the bitchin' meatcar build).
7. **DRINK** vodka (238) → tequila (1004) → whiskey (328)/Willer (81)/swill (3831), ~3 drunk each, to 14.
   ❌ The **Hidden Tavern is NOT unlocked** by the Typical Tavern quest (it's the L11 Hidden City) — no Fog Murderers this run yet.
8. **Long-term:** finish this Softcore run (→ 111 karma, perm a meat/econ skill next), then escalate toward Hardcore.

### The working farm loop (Spooky Forest, 13 HP)
Heal to ≥60% with **Lasagna Bandages** before each turn → `adventure.php?snarfblat=15` → resolve any choice
(502/503 → option 1) → fight: **Spaghetti Spear (0 MP) round 1; Cannelloni (3005) rounds 2+ while MP ≥ 8** →
on "way too beaten up", `campground.php?action=rest` and continue. Survived ~60 turns with zero deaths.

⚠️ **Softcore/Ronin reminders:** no player buffs/gifts; **mall buys land in Hagnk's and cost Hagnk's meat**;
**only 1 of each item can be pulled per day** (20/day cap); **check storage before buying** (we wasted ~520 meat on
duplicates we already owned). After 1,000 turns Hagnk's opens fully. See `mechanics/ronin-softcore-rules.md`.

---

## 🗓️ Session log (this run)

- **Day 89 (2026-07-16):** 🎉 **GUILD CRACKED + first full food meter + Level 5.** Found the long-standing "not a full
  member" blocker was a **one-shot quest, not a level gate**: Gorgonzola (`guild.php?place=challenge`) → tame the
  **poltersandwich** in the **Haunted Pantry (snarf 113, choice 544, ~5 safe turns)** → **full membership**. Bought
  **Cannelloni Cannon + Entangling Noodles + Lasagna Bandages** (1,500 meat) from Brie — combat is transformed.
  **EAT solved:** 1 insanely spicy bean burrito (316) + 12 oranges = **full 15** (adv 53 → 78). Ground the Spooky
  Forest → **Level 5** (raw mys 565), meat 322 → 1,505, all adventures spent, drunk 15. ⚠️ **Bat Hole failed twice**
  (Guano Junction 31 + Batrat Burrow 32): bats **get the jump and one-shot us at 13 HP before round 1** — a max-HP /
  initiative wall, not a skills wall. Wall 1 is down (snarf 32 open). Discovered the **Ronin mall/pull rules**
  (buys → Hagnk's, 1 pull per item per day) and wasted ~520 meat on duplicates already in storage.
  New docs: `mechanics/guild-membership-and-skills.md`, `mechanics/bat-hole-boss-bat.md`, `mechanics/ronin-softcore-rules.md`.
- **Day 88 (2026-07-15):** **Typical Tavern rat problem COMPLETE.** Talked to bartender Ear'l Ender → explored the 5×5
  **Tavern Cellar** grid. ⚠️ Mechanic: the **1st special square = the rat faucet** (choice 512 — LEAVE it alone), the **2nd =
  Baron von Ratsworth** (defeat him → **Baron's monocle, item 1312, +item!**), THEN turn off the faucet (512 opt 1) and
  **report to the bartender** to close the quest. Council now points to the **Boss Bat**. Leveled toward 5, equipped the
  monocle, DRANK vodka (drunk 12). ⚠️ EAT under-filled (full 3 — food shortage, see char state). ADV/DRINK done.
- **Day 87 (2026-07-14):** EAT solved (oranges/lemons — sushi is level-gated), equipped **Marcellus the Mosquito**,
  **completed the mosquito larva quest** (Spooky Forest → Arboreal Respite choice 502 opt 2 "Explore the stream" → 505 opt 1
  → larva → Council, +~550 meat), leveled **3 → 4** in the Spooky Forest, DRANK 4 vodka (drunk 12). Council now points to the
  Typical Tavern (Rat Problem). EAT/ADV/DRINK all done.
- **Day 86 (2026-07-13) — 🏆 WON run #1 & ASCENDED.** Restocked (60 MMJ), then cracked **NS form 2** using the fixed engine
  (varying `for=` HP reads + full-maxHP entry + Entangle stun + Cannelloni + aggressive heals). Reached **form 3**, lost to it
  → unlocked the **Bear Verb Orgy** at The VERY Unquiet Garves (snarf 58) → got the **Wand of Nagamar** (9 fights). Re-fought
  the NS with the wand → **beat all 3 forms**, **broke King Ralph's prism** → quest complete → astral gash. **Ascended
  Softcore** (Pastamancer / Opossum / Standard; permed Pastamastery; astral chapeau).
  **Then opened run #2:** Toot Oriole starter package (letter from King Ralph → pork elf goodies sack = jewels),
  equipped gear, ground the **Dire Warren (240)** to **Level 3** (Council quest = mosquito larva now active). EAT/DRINK
  couldn't be filled (finicky sushi-eat + flaky connection; no booze source unlocked yet).
  *(Run #1's full session log Days 28–86 is archived in `runs/ascension-01-pastamancer.md`.)*
