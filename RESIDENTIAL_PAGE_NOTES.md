# Residential landing page + cost calculator — build notes

Session date: 2026-07-10 → 2026-07-11

## What we shipped

### New pages / components
- **`/residential`** — new SEO + AEO landing page targeting residential contractors and homeowners.
  - Search intent covered: soft-clay driveways, gravel RV/boat/trailer parking pads, patios, shed pads, contractor lay-down yards, "driveway sinking," "mud driveway."
  - Not linked from nav (owner-safe — flip on when ready).
  - Reachable via sitemap, direct URL, and internal cross-link from the trust bar.

- **`components/ResidentialQuoteForm.tsx`** — client-side quote form.
  - Fields: name, phone, email, zip, project type (driveway / patio / walkway / parking pad / shed pad / other), sq ft (required), notes.
  - Posts to existing `/api/email-signup` with `source: 'residential-quote'`. Interest field stuffed with project + sq ft + phone + zip + notes so the whole lead is visible at `/admin`.
  - Honeypot on the hidden `website` field.

- **`components/DrivewayCostCalculator.tsx`** — client-side residential Tensar+ style calculator.
  - Inputs: project type, length (ft), width (ft), subgrade condition, editable stone $/ton + excavation $/cy defaults.
  - Outputs: side-by-side traditional vs. NX850 grid-reinforced, dollar itemized (excavation, stone, grid = "get quote"), big green **stone + excavation savings** callout in dollars + percentage.
  - Roll math: computes strips needed based on 12.5-ft-wide roll geometry and prescribes exactly which partial roll(s) to buy.

### AEO / SEO structure
- 3 JSON-LD schema blocks emit on the page: `FAQPage` (12 Q&As), `Product` (NX850 partial rolls), `Service` (residential geogrid supply across Northern Ohio).
- Direct-answer paragraph at top of body for AI-answer-engine lift.
- Service area explicit in schema: Cleveland, Akron, Toledo, Youngstown, Canton, Ohio.
- FAQ questions written to match how homeowners and contractors actually search ("Can geogrid fix a soft driveway?", "Can I use geogrid under a gravel RV parking pad?", "How thick does the stone need to be?", etc.).

### Sitemap
- `/residential` added to `app/sitemap.ts` at priority 0.9.

## Per-spec numbers (Tensar 2025 Subgrade Pocket Card)

The calculator's depths match the same source used in `/cost-calculator`:

| Subgrade | Description | CBR | Traditional over-excavation | With NX850 |
|---|---|---|---|---|
| Severe | boots sink 3" (soupy clay) | 0.5% | 48" | 24" |
| Moderate | boots leave 1" prints | 1.0% | 36" | 12" |
| Mild | pickup leaves 1" ruts | 2.0% | 24" | 4–6" |

Stone volume converted at 1.5 tons/cy (#57/#304 limestone). Defaults are Northern Ohio ballpark: $35/ton stone, $15/cy excavation (dig + haul + tip).

## Roll geometry rules used

- NX850 rolls are **12.5 ft wide**.
- Roll lengths: **quarter 49.25 ft**, **half 98.5 ft**, **full 197 ft**.
- Strip math: `strips = ceil(width / 12.5)` running along the length. Total linear feet = `strips × length`.
- No edge overlap in the current math — most residential widths (10, 20, 24 ft) are still correct without it. Edge cases (25 ft wide) technically need +1 strip for a proper 12" overlap.

Static roll-coverage copy was corrected: the old "quarter roll covers a two-car driveway" claim was geometrically wrong (49-ft-long roll can't fit two 40-ft strips). Now reads:
- Half roll → two-car driveway up to ~20 × 40 (two strips).
- Quarter roll → single-car driveway ~12 × 49 (one strip), patio, or shed base.

## Pricing rules honored

- **No dollar amounts for the geogrid appear anywhere on the site.** Owner's rule respected.
- Calculator shows stone + excavation savings *before* subtracting grid cost, then anchors with: "NX850 partial-roll cost for a job this size runs a fraction of these savings — text (440) 384-1897."
- All CTA phone numbers on this page use Josh's work cell **(440) 384-1897** (not the main office 368-1420, not the FB-ad personal 216-463-2648).

## Sample calculator output — 20×40 two-car driveway on CBR 1.0 clay

- Traditional (36" excavate + backfill): ~$6,000
- With NX850 (12" base): ~$2,000 stone + excavation
- **Savings shown: ~$4,000 (67%)**
- Roll: **1 half roll** (2 strips × 40 ft = 80 linear ft, fits in 98.5 ft roll, ~18.5 ft leftover)

## Email captures baseline (before this build)

Pulled from `email_signups` via `/api/admin/signups`:
- 5 total signups
- 3 from NOSDA trade show (Charles Steimle @ University Heights Service; Kirk Walker @ Munson Twp; a Josh test)
- 2 from popup — both Josh testing his own accounts
- **Zero organic homepage popup captures.** New `/residential` quote form tags leads as `source: 'residential-quote'` so we can measure lift.

## Files touched

New:
- `app/residential/page.tsx`
- `components/ResidentialQuoteForm.tsx`
- `components/DrivewayCostCalculator.tsx`
- `RESIDENTIAL_PAGE_NOTES.md` (this file)

Modified:
- `app/sitemap.ts` (added `/residential`)

## To-do / open items for next pass

- Nav link — currently reachable only by URL/sitemap. Ready to add when the owner says go.
- Add 12" overlap to the strip math for tight widths (~25 ft) so the roll recommendation is exact on every size.
- Optional: promote to its own top-level `/driveway-cost-calculator` slug for direct calculator-query ranking.
- Add Meta/Facebook social share image variant showing the calculator output.
- Sister page for `/interlayers` residential angle (crack sealing DIY? probably out of scope).
