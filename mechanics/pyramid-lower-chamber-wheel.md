# The Ancient Buried Pyramid — Lower Chamber Wheel

The wheel is **not** "parked at the vending machine," and you do **not** interact with a
*centre* room between the two named rooms. Here is the verified mechanic.

## How rotation works

- **Control Room** = `place.php?whichplace=pyramid&action=pyramid_control` → choice **929
  "Control Freak"**. Options (only those you have items for appear):
  - **opt 1 "Use a wheel on the peg"** = rotate **one step**, consumes 1 **crumbling wooden
    wheel**. FREE (no adventure).
  - **opt 2 "Use a ratchet on the peg"** = rotate **one step**, consumes 1 **tomb ratchet**.
    FREE (no adventure). (Only shows when you hold ≥1 ratchet.)
  - 🚨 **A wheel and a ratchet are the SAME one-step turn, and the ring has exactly 5 positions** (the #1–#5
    table below). The wiki gives both items the identical *"turns the wheel anti-clockwise"* text, and ✅ one wheel
    moved the label exactly one step (*nothing on the left, rubble on the right* → *rats on left, basket on right*).
    ⚠️ **Don't plan around a wheel being worth several steps, or around extra unmapped positions** — neither
    exists, and both assumptions overshoot the alignment you meant to descend on.
  - ⭐ **The whole job is 10 turns from the starting position** (*nothing on the left, rubble on the right*), per
    the wiki: **3 → basket (token) · +4 → vending machine (bomb) · +3 → rubble (blow it open)**, plus three
    1-adventure descents. Count your wheels + ratchets against 10 before starting.
  - ✅ **`choice.php` keeps reporting 929 after `Leave` — and that is harmless.** Neither a GET nor a POST of
    `Leave` made `choice.php` stop showing 929, but ✅ the pyramid place page and a shop page both loaded
    normally with it "open", unlike a genuinely blocking choice. So **don't gate a loop on 929 clearing** —
    test for blocking by loading a place/shop page instead — and re-fetch
    `place.php?whichplace=pyramid&action=pyramid_control` right before each option, as below.
  - 🧮 **Read the next position off the #1–#5 table; don't reason about it.** Measured mistake: at #3 (*rats on
    left, basket on right*) one turn was expected to reach the basket, and it reached **#4** (*rubble on left,
    vending machine on right*) — exactly as the table says. The basket (#5) was one turn further. Nothing is
    lost by overshooting (the ring comes round), but the turn you meant to descend on is gone.
  - **opt 5 "Head down to the Lower Chambers"** = **COSTS 1 ADVENTURE**. This is the only
    way to actually *do* anything (grab token / buy bomb / light bomb). After it resolves
    you bounce back to the control room.
  - **opt 6** = leave.
- Rotation is **forward-only** (one direction). You cannot rotate backward; to "back up"
  you go all the way around.
- ⚠️ **You must ACTIVATE the choice before submitting an option.** Fighting/adventuring
  de-activates choice 929. Always `fetch place.php?...action=pyramid_control` (or load it
  in mainpane) **immediately before** POSTing `choice.php` with `whichchoice=929&option=N`.
  A POST to an inactive choice is silently ignored (label won't change).

## The wheel is NOT a 5-ring — it's ~9 positions

A `crumbling wooden wheel` rotates +5 and **does change the alignment** (verified: a wheel
took label #5 → #1). So the ring length is **not** 5; it is ~9 (pos4 + 5 = pos9 ≡ pos0).
**Wheels are useful** for big +5 jumps. Hoard them (5 tomb ratchets paste into 1 wheel).

## The 5 named alignment labels (verified, forward single-step order)

The "Lower Chambers (N) (LEFT on left, RIGHT on right)" label (shown on
`place.php?whichplace=pyramid`) names two rooms. Single ratchet steps advance the window:

| # | Label | Descend here (opt 5) does… |
|---|-------|----------------------------|
| #1 | **vending machine on left, rats on right** | NOTHING (empty-center) — descending here wastes an adv |
| #2 | **nothing on the left, rubble on the right** | **RUBBLE** → with a bomb, light it → opens Ed's chamber |
| #3 | **rats on left, basket on right** | (untested; likely rats fight or nothing) |
| #4 | **rubble on left, vending machine on right** | **VENDING** → with the bronze token, get the **ANCIENT BOMB** |
| #5 | **basket on left, nothing on right** | **BASKET** → gives the **ancient bronze token** (nothing useful if you already hold one) |

Forward single-step order: **#1 → #2 → #3 → #4 → #5 → (4 unknown/empty positions) → #1**.

### ⭐ The rule that actually matters
**Match the wiki's named alignment, then descend. Do NOT trust a "center room" model.**
- **VENDING (token → bomb):** rotate until the label is exactly
  **"rubble on left, vending machine on right"** (#4), then opt 5.
- **RUBBLE (bomb → open Ed):** rotate until the label is exactly
  **"nothing on the left, rubble on the right"** (#2), then opt 5.
- **Rotate-and-watch:** after each rotation, re-read the label; descend ONLY when it
  matches the target. This is robust against any position-counting error (over-relying on
  math can overshoot #4 → #5, wasting a ratchet and the bomb).

## Grinding tomb ratchets (the wall)

- Ratchets drop only from **tomb rats / tomb rat kings** in the **Middle Chamber
  (snarfblat 407)**. Confirmed ~4/5 encounters there *are* tomb rats; the rest are tomb
  servants / tomb asps.
- ⚠️ **Tomb asps inflict "Really Quite Poisoned"** — caps max HP and crashes Mys, which
  silently wrecks combat. Cure immediately with the soft green echo eyedrop antidote (see
  HANDOFF's antidote line). The combat loop should check effects each turn and cure on sight.
  ✅ **Measured failure on a Muscle class too:** a loop that only *logged* the poison ran 5 more fights with max HP
  **330 → 156** and lost to an ordinary **tomb servant** — the day's only loss, costing a Hibernate. ✅ **Cure that
  works:** read the effect from `api.php?what=status` → `effects` (each value is `[name, turns, icon, …, effectId]`;
  *Really Quite Poisoned* is **284**), then GET
  `uneffect.php?using=Yep.&whichitem=588&whicheffect=<effectId>&pwd=<hash>` and re-read `effects` to confirm it's
  gone. Put that in the loop's pre-fight step, and stop the loop if the cure fails or the antidotes run out.
- Drop rate is swingy — expect stretches of ~1–2 ratchets per ~30 fights. Equip max +item
  gear before grinding (e.g. **Baron von Ratsworth's monocle**, +10% item, item 1312).
  Consider an item-drop familiar too.
  ✅ **Re-measured, with +20% item:** **25 Middle Chamber turns → 6 tomb rats → 1 ratchet** (13 of the 25 were
  tomb asps). At that rate the 8 turns still needed would cost ~175 adventures.
  💰 ✅ **Tomb ratchets are sold in the mall** (~666 meat each, several stores) — **buy the missing turns** once
  Ronin is over: 7 ratchets cost ~4,700 meat against ~150 adventures of farming at the measured rate.
  *Crumbling wooden wheels* had **no** mall listings.
  ⭐ **Otherwise prefer the Upper Chamber's wheels:** *A Wheel -- How Fortunate!* is **scheduled** — the 3rd and 8th Upper
  Chamber turns, then every 7th (15, 22, 29…) — and a wheel turns the ring exactly as far as a ratchet. That is
  ~1 turn of progress per 7 adventures, guaranteed, in a zone with **no poisoning asps**.
  🚨 **A pre-fight poison cure is not enough in the Middle Chamber:** an asp can poison you *during* the fight,
  halving max HP mid-combat. ✅ Measured: the second loss of a day came from exactly that, one fight after the
  loop had cured the first poisoning.

## 🗝️ Opening the chambers — the schedule is fixed (wiki)

| Zone | Turn in that zone | Noncombat | Unlocks / gives |
|---|---|---|---|
| **Upper Chamber (406)** | 3rd, 8th, then every 7th | *A Wheel -- How Fortunate!* | a **crumbling wooden wheel** |
| Upper Chamber (406) | **6th** (one-time, superlikely) | *Down Dooby-Doo Down Down* | **the Middle Chamber (407)** |
| **Middle Chamber (407)** | **6th** (one-time) | *Further Down Dooby-Doo Down Down* | **the Lower Chambers** |
| Middle Chamber (407) | **10th** (one-time) | *Under Control* | **the Control Room** |

⇒ **~16 turns open everything**, and the Upper Chamber has already handed you a wheel on the way. The Staff of
Ed going into the Desert Beach socket is what opens the Upper Chamber.
**Lower Chambers without a token** show the basket room and give the **ancient bronze token**; **with the ancient
bomb** in inventory they blow the rubble and open Ed's chamber (wiki).

## ✅ The finale as actually walked (verified end to end)

Starting at #4 (*rubble on left, vending machine on right*) with 8 ratchets in hand. **Every label below was read
off `place.php?whichplace=pyramid` after one ratchet** — this is the ring, in order:

`basket on left, nothing on right` (#5) → `vending machine on left, rats on right` (#1) → `nothing on the left,
rubble on the right` (#2) → `rats on left, basket on right` (#3) → `rubble on left, vending machine on right` (#4) → …

1. **#5 → descend** → *"a stone basket of tokens… Huzzah!"* → **ancient bronze token**. 1 adventure, no fight.
2. **+4 → #4 → descend** → the vending machine takes the token → **ancient bomb**. 1 adventure, no fight.
3. **+3 → #2 → descend** → *"light your bomb… the stairs lead up into a dark hole in the ceiling"*. 1 adventure.
4. The Lower Chambers label becomes **`passageway to tomb`**, and the pyramid page gains
   **`action=pyramid_state1a`** — that is Ed's entrance.

Descend with POST `choice.php` `whichchoice=929&option=<Head down…>` after re-fetching `pyramid_control`, and use
each ratchet the same way, one at a time, re-reading the label between them.

## Full finale checklist (from a fresh day)

1. Day-open: restock **MMJ + tiny houses** FIRST (running them to 0 mid-grind forces
   resting for MP at 1 adv each = death spiral). Equip the monocle (1312).
2. Grind 407 for ratchets (cure poison!). You need enough to land on #4 then #2.
3. Rotate-and-watch to **#4** → opt 5 with token → **ANCIENT BOMB**.
4. Rotate-and-watch to **#2** → opt 5 with bomb → **Ed's burial chamber opens**.
5. **Ed the Undying** — 7-life boss (7 fights). Full HP each entry; lead Cannelloni, queue
   Mortar, 9 torpedoes (item 630) in reserve.
   📊 **Stats (wiki):** HP **256 → 256 → 128 → 64 → 32 → 16 → 8** across the seven forms · Attack 180 ·
   **Defense 162** · Initiative 0 · no element. ⚠️ It is **one connected series of 7 combats costing 7 adventures**;
   the game refuses to start it with **fewer than 7 adventures left**, and **losing or running restarts it from
   form 1** — so heal between forms and carry in-combat heals rather than hoping. Class doctrine is separate:
   a Muscle class should open each form with its Defense-lowering skill (Defense 162) — see its class file.
   **Zones to get there (wiki):** Upper Chamber **406** (ML 160–175, recommended stat 150) → its noncombat opens
   the Middle Chamber **407** (ML 160–170, recommended 165; tomb asps poison).
   ✅ **Measured (Level 12 Seal Clubber, Muscle ~189, dual-wield, full HP 327 / MP 88 at entry):** all seven forms
   won, **0 losses, HP never below ~80%**, rounds per form 2 · 3 · 2 · 2 · 2 · 1 · 1. Enter via
   `place.php?whichplace=pyramid&action=pyramid_state1a`; ✅ **each won form's page links straight to `fight.php`
   for the next form** — follow that, don't re-enter the pyramid. Using a poultice between forms did not break the
   series. ⚠️ **MP budget:** Defense-lowering skill + damage skill cost ~16 MP per form, and the stack was **empty
   by form 5** — the last two (16 and 8 HP) fell to plain attacks, but bring ~110 MP or an in-combat MP item for a
   weaker character. The final form's page links to `pyramid.php`, and the **Holy MacGuffin** is in inventory.
6. **HOLY MACGUFFIN** → Council turn-in → spine quest COMPLETE.
