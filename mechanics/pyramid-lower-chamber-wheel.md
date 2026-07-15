# The Ancient Buried Pyramid — Lower Chamber Wheel

The wheel is **not** "parked at the vending machine," and you do **not** interact with a
*centre* room between the two named rooms. Here is the verified mechanic.

## How rotation works

- **Control Room** = `place.php?whichplace=pyramid&action=pyramid_control` → choice **929
  "Control Freak"**. Options (only those you have items for appear):
  - **opt 1 "Use a wheel on the peg"** = rotate **+5**, consumes 1 **crumbling wooden
    wheel**. FREE (no adventure).
  - **opt 2 "Use a ratchet on the peg"** = rotate **+1**, consumes 1 **tomb ratchet**.
    FREE (no adventure). (Only shows when you hold ≥1 ratchet.)
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
- Drop rate is swingy — expect stretches of ~1–2 ratchets per ~30 fights. Equip max +item
  gear before grinding (e.g. **Baron von Ratsworth's monocle**, +10% item, item 1312).
  Consider an item-drop familiar too.

## Full finale checklist (from a fresh day)

1. Day-open: restock **MMJ + tiny houses** FIRST (running them to 0 mid-grind forces
   resting for MP at 1 adv each = death spiral). Equip the monocle (1312).
2. Grind 407 for ratchets (cure poison!). You need enough to land on #4 then #2.
3. Rotate-and-watch to **#4** → opt 5 with token → **ANCIENT BOMB**.
4. Rotate-and-watch to **#2** → opt 5 with bomb → **Ed's burial chamber opens**.
5. **Ed the Undying** — 7-life boss (7 fights). Full HP each entry; lead Cannelloni, queue
   Mortar, 9 torpedoes (item 630) in reserve.
6. **HOLY MACGUFFIN** → Council turn-in → spine quest COMPLETE.
