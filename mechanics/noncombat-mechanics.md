# Encounter selection — how the game picks what happens when you adventure

> Run-agnostic, class-agnostic. Sourced from the official wiki (*Encounter, Combat Frequency, Combat-Noncombat
> Selection, Adventure Queue, Superlikely, Conditional Adventures, Lucky!/Lucky Adventures, Wandering monsters*) unless
> marked ✅ verified in-game. Fight rules and formulas are in **`combat-mechanics.md`**. How to *answer* a choice
> adventure safely (randomised buttons, labels that render but refuse, free exits) is in **`HANDOFF.md`**.

## 1. The order of checks — the first one you qualify for wins

Every time you spend an adventure in an ordinary `adventure.php` zone, the game goes down this list and **stops at the
first encounter type you qualify for**:

1. **Drunken Stupor** — past your drunkenness cap the zone is effectively replaced, and every turn is wasted.
   (*Bloated and Nauseous* works the same way; stupor wins if both apply.)
2. **Hard-coded adventures** — rare one-offs.
3. **Wandering monsters** — due on a turn-count timer (§6).
4. **Flashbacks**, then **Welcome Back!** — rare.
5. **Lucky adventures** — you are *Lucky!* and the zone has one (§5).
6. **Superlikelies** — conditional encounters checked on every adventure (§4).
7. **Free combats** from some familiars.
8. **The combat/noncombat roll** (§2), then **which** combat or noncombat (§3).

⇒ **A superlikely or Lucky adventure pre-empts the combat roll entirely** — no amount of +combat stops it, and it
doesn't use up the zone's normal noncombat rate.

## 2. Combat or noncombat?

Every zone has a **combat percentage** (usually a multiple of 5). The game rolls **1D100: at or below the modified rate
you get a combat, above it a noncombat.** **−combat** and **+combat** modifiers shift that rate directly.

- **Sneaks** (force the next noncombat) persist until an *eligible* noncombat is actually encountered.
- **Some zones force a noncombat after N turns without one**, skipping the roll. The wiki names Cobb's Knob Barracks,
  Infernal Rackets Backstage and The Laugh Floor. Several zone pages express the same idea as a **noncombat cap**
  (e.g. *"Non-combats in this zone have a cap of 9 turns between occurrences"*, or a `forcenoncombat` value of 5 on The
  Hidden Office Building).
- 🚨 **A guaranteed noncombat is not a guaranteed *specific* noncombat.** The cap promises *some* noncombat. Which one
  you get is a separate roll (§3). ✅ Measured on the Giant Castle Top Floor: about 60 turns produced two room
  noncombats, and never the one the quest needed (`giant-castle-quest.md`).
- ✅ **When a quest step is a noncombat, the bottleneck is encounter rate, not damage** — winning fights faster does
  nothing. Bring −combat or a forced-noncombat source (HANDOFF's noncombat rule; `palindome-quest.md`).

## 3. Which combat or noncombat? — the list, the delay, the queue

**Building the list:** the game keeps only the encounters whose **conditions** you currently meet. Conditions include
a **delay** (turns spent in the zone), **turns since the encounter last appeared**, a **die roll** to be eligible at all,
a quest state, or an item or effect you hold.

**Picking:** it rolls among the survivors, then applies the **adventure queue**:
- Each zone keeps a **5-long queue of recent combats and a separate one of recent noncombats**.
- If the pick is already in its queue, it is **rejected 75% of the time** and re-rolled among the same type.
- **Olfacted** monsters add extra copies to the combat list and skip the queue; **banished** monsters are removed.
- If the combat list is empty after banishes, banishing is ignored. If it's truly empty, you fight a tumbleweed.

⇒ The queue is why **the same encounter rarely repeats back-to-back**, and why a zone with few encounters of a type
feels streaky.

## 4. Superlikelies and conditional (delayed) adventures

**Superlikely:** an encounter whose condition is checked **on every adventure, before the combat roll**. If you qualify
you get it. If you qualify for several, one is picked at random. Some are still affected by ±combat, and some can't be
forced by sneaks.

Quest-relevant superlikelies (wiki examples, ✅ where this repo has seen them):
- **Code Red** (Outskirts of Cobb's Knob) — always on the **11th turn** in the zone → Knob Goblin encryption key.
- **A Man in Black** (The Black Forest) — a 25% roll affected by ±combat, or **certain on the 12th turn**.
- ✅ **Fitting In** (The Hidden Temple) — **100% while Stone-Faced** (`hidden-temple-unlock.md`).
- ✅ **You, M. D.** (The Hidden Hospital) — 10% per piece of surgical gear worn (`macguffin-quest.md`).

**Delays:** many encounters can't appear until N adventures have been spent in the zone.
- ⚠️ **What counts toward a delay:** *everything except free noncombats* — **including free fights, free kills and free
  runaways**. A turn that cost nothing can still count down the delay.
- ⚠️ **The count is cumulative for the character** (per ascension), not per session. If you've adventured there before,
  the delay may already be spent (HANDOFF's "N turns until X" corollary).

| Zone | Encounter | Delay |
|---|---|---|
| The Spooky Forest | Arboreal Respite | 5 |
| The Unquiet Garves | Tomb of the Unknown *Class* | 5 (and the epic-weapon quest must be started) |
| The Haunted Bathroom / Gallery / Ballroom | Never Gonna Make You Up / Louvre It or Leave It / We'll All Be Flat | 5 each |
| The Haunted Bedroom | elegant animated nightstand | 6 |
| An Oasis | All Across the Sands | 6 (after meeting Gnasir) |
| Cobb's Knob Harem · The "Fun" House | A Stalker in the Locker · Adventurer, $1.99 | 10 |
| The Boss Bat's Lair · Copperhead snakes | Boss Bat · Copperhead | 4–6 (variable) |
| The Penultimate Fantasy Airship | the four *Spirit* noncombats + *F-F-Fantastic!* | 5, 10, 15, 20, 25 — cumulative, no cooldown between them |
| The Copperhead Club | Shen's four meetings | 4 / 9 / 14 (50%, certain one turn later) |

## 5. Lucky! and Lucky adventures

- **Lucky!** is an intrinsic effect (e.g. from an **11-leaf clover**) that **persists over rollover** and is **consumed
  only when you get a Lucky adventure**. The next zone you adventure in that *has* one gives it to you. Adventuring
  somewhere without one leaves it untouched.
- Since 2022, **Lucky adventures replace both the old clover adventures and semi-rares** — semi-rare counters no longer
  exist.
- ⚑ A long-lived account's storage may hold the older item *ten-leaf clover*. Confirm in-game whether using one
  grants *Lucky!* before relying on it.
- Quest-useful Lucky adventures:
  - **The Copperhead Club** → *Where There's Smoke…* → **3 Flamin' Whatshisnames** (each clears 10 Zeppelin protesters
    instead of 3).
  - **The Haunted Billiards Room** → *A Shark's Chum* → a **permanent pool-skill bonus** that carries across
    ascensions, or *Chalked Weapon* (regular attacks can't miss).
  - **The Smut Orc Logging Camp** → *S&M 4-EVER* → 3 lumber + 3 fasteners.
  - The Haunted Library → spooky resistance · The Haunted Kitchen → +50 cold damage · The Haunted Pantry → tasty tarts.

## 6. Wandering monsters

- Holiday and event monsters, **Nemesis assassins**, *badly romantic arrow* targets and similar arrive on a **timer**:
  the game sets a due turn (current turn + a window, e.g. 15–25 or 25–35), and the monster appears on your first
  eligible adventure past it.
- They only appear in **`adventure.php` zones**. Turns spent elsewhere run down the timer without triggering it.
- **Free fights and free runaways don't advance the timer.**
- They **override normal combats and noncombats**, but **not** Lucky adventures or superlikelies.

## 7. Practical rules this implies

- ✅ **Read a zone's own wiki page before grinding a noncombat.** It lists the delay, any cap, and whether the target
  is a superlikely. Grinding for an encounter that first needs a condition (a delay already spent, an item to hold, an
  effect to wear) produces nothing, however long it runs.
- **Don't try to "make" a superlikely with ±combat** unless its page says it's affected. Meet the condition instead.
- **Take Lucky! before walking into the zone you want it for**, since the next Lucky-capable zone consumes it. Plan the
  route so the first such zone *is* the target.
- **Free encounters that repeat** (declined choices, room-hops, locked-zone bounces) cost no turn and advance no
  timer. A loop needs a free-encounter guard — see HANDOFF.
