# Recovery & Buff Items (Mid-Game Pastamancer)

> For the basic MP/HP items (tiny house 592, scroll of drastic healing 595, Lasagna Bandages 3009, campground rest,
> torpedoes 630, Mountain Stream soda 357), **HANDOFF.md is the canonical short reference** — don't contradict it.
> This file's unique value is the spleen/combat-item tables and the tier framework below.

## Tier S — Save for emergencies

### tiny house (item 592)
- **Effect**: **PARTIAL** HP/MP restore (~21 HP + ~23 MP, NOT full) + **clears Beaten Up**
- **Cost**: Does NOT cost an adventure
- **Source**: Drops in Penultimate Fantasy Airship (HIGH drop rate)
- **Use case**: Primarily for Beaten Up clear. The +21 HP is a bonus; pair with scroll of drastic healing if you need full HP.

### phonics down (item)
- **Effect**: +98 HP, +99 MP, +**Tingly Wrists** (3 turns, +Mys), +**Tingly Elbows** (3 turns, +Mys/Mox)
- **Cost**: 1 use per item, no adv cost
- **Source**: Player letters / wedding favors — **UNOBTAINABLE during Softcore Ronin** (no player gifts in the first 1000 turns).
- **Use case**: Pre-boss buff (the Tingly stack noticeably boosts Mys), or recovery after a long grind.

### scroll of drastic healing (item 595)
- **Effect**: Full HP and MP restore
- **Caveat**: Does NOT clear Beaten Up
- **Source**: Various drops
- **Use case**: When you're alive and just need topup. Tiny house is strictly better when BU is involved.

### Mountain Stream soda (item 357)
- **Effect**: Restores ~37 MP
- **Cost**: No adv cost
- **Source**: Tradeable (buy from mall, ~440 meat) — the cheap tradeable MP battery for combat days.
- **Use case**: MP top-up when you're out of tiny houses and don't want to burn adventures resting.

## Tier A — Use freely, plentiful

### Lasagna Bandages (Pastamancer skill, ID 3009)
- **Cost**: 6 MP per cast
- **Heal**: ~12-21 HP per cast (scales with Mys?)
- **Use**: Out of combat to top up between adventures, or in-combat via `fight.php?action=skill&whichskill=3009` as emergency heal

### Campground rest
- **URL**: `campground.php?action=rest`
- **Effect**: +8 HP, +10 MP
- **Cost**: 1 adventure per rest (with no IOTM bedding upgrade)
- **Caveat**: Inefficient — only worth it if you have NO other recovery options. Lasagna at 6 MP is way more efficient.

## Tier B — Spleen items (limit 15 spleen/day, resets on rollover)

Verified effects:
- **sparkling orb** → **Latently Energized** (+30 HP cap, +30 MP cap, 30 turns)
- **hardening cream** → **Really Hard** (DR 50, 50 turns) — load-bearing buff for any tough zone
- **strongness elixir** (12) — +Strongness (= Muscle XP per fight)
- **concentrated cooking** → **Cooking Concentrate** (+50% adv from food, ~5-10 turns; use BEFORE eating)
- **dieting pill** → **Cooking Concentrate** OR reduces fullness for one food (observed giving Cooking Concentrate effect ~10 turns — may duplicate concentrated cooking)
- **pool shark hair oil** (1) — temporary +Pool Skill (for Haunted Billiards Room!) — untested

**Spleen cap = 15/day, resets at rollover.** Use 3-4 buff items per day max to save room.

## Tier C — Combat items (may bypass spell disruption mechanics)

For bosses that disrupt skills (Bonerdagon's wing-flap):
- **smut orc keepsake box** (3) — combat item
- **dried face** (2) — combat item
- **hellion cube** (1) — combat item
- **spooky shrunken head** (2) — combat item
- **bunny liver** (3) — combat item

These should fire damage even when spells are disrupted.

## Effect summary table

| Effect | Source | Duration | Bonus |
|--------|--------|----------|-------|
| Pasta Oneness | Manicotti Meditation (1 MP) | 5 turns | +2 Mys |
| Springy Fusilli | Springy Fusilli skill (10 MP) | 10 turns | +20% initiative |
| Sugar Rush | candy/something (carries over) | ~varies | +Moxie |
| Tingly Wrists | phonics down | 3 turns | +Mys |
| Tingly Elbows | phonics down | 3 turns | +Mys/Mox |
| Beaten Up | failed combat | 3 turns | -stats, HP cap 75%, blocks adventures |

## 🫀 Stat-elixir items are SPLEEN items, and they give SUBSTATS (not a buff)

**`strongness elixir` (15) / `extra-strength strongness elixir` (277) / moxie weed / jug-o-magicalness** are
consumed via **`inv_spleen.php?pwd=<hash>&which=1&whichitem=<id>`** — `inv_use.php` answers *"This item is not
implemented yet"* (the same trap as Medicinal Herb's medicinal herbs).
⚠️ **They award substats** (*"You gain 3 Fortitude"*), **not a temporary stat buff** — so they do **not** help
you clear a same-fight accuracy gate. They cost 1 spleen each (cap 15). Use them for slow levelling, never as
boss prep.

## ⭐ ONCE HAGNK'S IS OPEN, ITEM HEALS REPLACE ADVENTURE HEALS — worth ~30% of a day

For a class whose healing costs a **turn** (Seal Clubber's `Hibernate`), the single biggest post-Ronin upgrade
is a stack of healing items, because they cost **no adventure at all**:

| Heal | Cost | Amount |
|---|---|---|
| **filthy poultice** (2369) | **0 adventures** | **~87 HP** ✅ measured |
| gauze garter (2402) | 0 adventures | smaller top-up |
| Cannelloni Cocoon | 20 MP | heals to full |
| `Hibernate` | **1 ADVENTURE** | full HP + clears Beaten Up |

✅ **Measured before/after on the same character:** a day of grinding with Hibernate spent **22 adventures on
healing**; the next day, with ~50 pulled poultices/garters, **112 fights cost 0 healing adventures.**
🎯 **The moment `roninleft` hits 0, pull every healing item you own** and demote Hibernate to the fallback.
⚠️ Poultices/garters work **in combat as well as out** — unlike `Monstar energy beverage`, which is
out-of-combat only and will stall a fight loop (see HANDOFF).
