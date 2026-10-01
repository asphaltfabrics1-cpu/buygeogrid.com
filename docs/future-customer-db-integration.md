# Future: Customer DB + Admin UI + iTracker integration for /open-account

> Status: **parked**. Scoped and planned on 2026-10-01, shipped the
> email-only version first. Pick this back up when the email-only flow
> starts to show pain points (lost submissions, no record for lookup,
> iTracker customer dropdown becomes a priority).

## Problem

The `/open-account` form currently emails Renee, Kellie, and Josh via Resend
and does nothing else. Renee reports she doesn't reliably receive emails
Josh sends her — email-only means AFS can silently lose customer
applications. There's also no durable record to search, no way to accept
paper submissions through the same funnel, and no customer picker in
iTracker's inventory check-out / reservation flows (currently a free-text
field in `reservations.customer`).

## Four goals

1. Durable, searchable customer records — nothing lost
2. Accept paper submissions (Josh keys them in manually) and still fire the
   same AP notification email
3. In iTracker, pick a customer from a dropdown during check-out /
   reservation instead of typing free text
4. Hide the public PDF link so most customers use the online form, but keep
   the file reachable for Josh to share privately (**already done** in the
   shipped version)

## Recommended architecture

**One source of truth: `customers` table in iTracker's Supabase**
(project ref `nkpejqnqdrteylnbxsoa`). Admin UI lives in BuyGeogrid — where
submissions originate and Josh is used to managing orders + signups.
iTracker just *reads* the table to populate its customer dropdown.

Why Supabase and not BuyGeogrid's Postgres: iTracker is the consumer that
needs read access, and its stack is Supabase-everywhere. BuyGeogrid writes
via the Supabase service-role key (same security model as the existing
`RESEND_API_KEY` env var).

## Phase 1 — Durable DB

**Add `customers` table to iTracker's Supabase**

Typed columns (not a JSON blob) so admin UI + iTracker dropdown don't need
to spelunk:

- `id` uuid pk, `created_at`, `updated_at`
- `status` enum: `active | pending_credit_review | inactive`
  - default `active` for check-pay, `pending_credit_review` for Net 30
- `source` enum: `web | paper` (default `web`)
- `entered_by` text — null for web; admin email for paper submissions
- **Business:** `company`, `dba`, `entity_type`, `ein`, `years_in_business`,
  `cust_type`, `website`, `company_phone`
- **Contact:** `contact_first`, `contact_last`, `contact_title`,
  `contact_email`, `contact_phone`
- **AP:** `ap_name`, `ap_email`, `ap_phone`, `statement_method`, `buyers`
- **Billing address:** `bill_street`, `bill_city`, `bill_state`, `bill_zip`
- **Tax/payment:** `tax_exempt` bool, `tax_reason`, `tax_cert`, `po_required`
  bool, `payment_pref`
- **Credit refs** (Net 30 only): `bank_name/contact/phone`,
  `ref1_company/contact/phone`, `ref2_*`, `ref3_*`
- **Signature:** `sig_name`, `sig_title`, `signed_at`
- **Admin:** `notes`, `internal_notes` (admin-only extra field)

**RLS:**
- `select` for `authenticated` (iTracker users can read all)
- `insert / update / delete` requires service role (buygeogrid-only)

**Update `/api/open-account` on BuyGeogrid**
1. Install `@supabase/supabase-js`
2. Add `lib/supabase/admin.ts` factory (service-role client)
3. Route INSERTs into `customers` first, captures the `id`
4. Then sends the Resend email as today, with a link to
   `/admin/customers/<id>` so Renee/Kellie/Josh can jump to the record
5. If DB insert fails, still send email (log the DB error) so a Supabase
   outage doesn't swallow the submission

**Env vars to add to BuyGeogrid Vercel (asphalt team)**
- `SUPABASE_URL` — iTracker project URL
- `SUPABASE_SERVICE_ROLE_KEY` — iTracker service role
- Existing `RESEND_API_KEY`, `ADMIN_PASSWORD` stay as-is

## Phase 2 — Admin UI in BuyGeogrid

Mirror the existing `/admin/orders` pattern. No new auth needed — the
basic-auth middleware (`middleware.ts` lines 4–31) already covers
`/admin/*` and `/api/admin/*` via `ADMIN_PASSWORD`.

**New routes**
- `app/admin/customers/page.tsx` — list view: company, contact, email,
  phone, status, source, created date. Client-side search box across
  company/contact/email.
- `app/admin/customers/[id]/page.tsx` — detail view grouped by section
  (same QBO ordering as the email). Status change buttons + internal-notes
  textarea.
- `app/admin/new-customer/page.tsx` — paper-form intake. Reuses
  `components/OpenAccountForm.tsx` with an `adminMode` prop that hides the
  honeypot and skips the "I'm authorized" certification wording (the admin
  enters it on the customer's behalf; store the paper signature as
  `sig_name` / `sig_title`).
- `app/api/admin/customers/route.ts` — `GET` list
- `app/api/admin/customers/[id]/route.ts` — `GET` detail, `PATCH`
  status/notes
- `app/api/admin/new-customer/route.ts` — `POST` manual intake. Writes to
  Supabase with `source='paper'` + `entered_by=<admin email from basic
  auth>`, then fires the **same** Resend email to Renee/Kellie/Josh so
  QuickBooks setup still gets triggered (subject tagged
  `[entered from paper]`).

## Phase 3 — iTracker integration

- In `src/components/inventory/reserve-multiple.tsx` and `take-multiple.tsx`,
  replace free-text `customer` with a searchable combobox fed by
  `supabase.from('customers').select('id, company').eq('status', 'active')`
- Add `customer_id` column to `reservations` (keep existing free-text
  `customer` for legacy rows and backward compat)
- Logs/POs: optional `customer_id` reference for new entries

## Phase 4 — Email deliverability (ops, parallel to code work)

- Verify Resend sender domain (`buygeogrid.com`) for proper SPF/DKIM so
  Renee's inbox is more likely to accept it. If `asphaltfabrics.com` domain
  isn't verified in Resend, verify that too.
- Add a secondary notification channel so a dropped email can't swallow a
  submission silently. Lowest-friction: a Slack webhook to a `#afs-leads`
  channel Josh checks. Alternative: SMS to Josh's 384-1897 via Twilio.
- Have Renee check spam folder + add `info@buygeogrid.com` to safe senders

## Files to add / modify

**iTracker (new)**
- `db/migrations/<DATE>_customers.sql` — table + RLS policies

**BuyGeogrid (new)**
- `lib/supabase/admin.ts` — service-role client factory
- `lib/open-account/email.ts` — extracted email body builder (shared between
  the two intake routes)
- `app/api/admin/customers/route.ts`
- `app/api/admin/customers/[id]/route.ts`
- `app/api/admin/new-customer/route.ts`
- `app/admin/customers/page.tsx`
- `app/admin/customers/[id]/page.tsx`
- `app/admin/new-customer/page.tsx`

**BuyGeogrid (modified)**
- `app/api/open-account/route.ts` — Supabase insert before Resend send; add
  record link to the email body
- `components/OpenAccountForm.tsx` — accept optional `adminMode` prop
- `app/admin/page.tsx` — add Customers card/link to the admin landing
- `package.json` — add `@supabase/supabase-js`

**No changes to**
- Existing `/admin/orders`, `/admin/signups`, `/admin/chats`, `/admin/broadcast`
- Existing Postgres tables (customers lives in Supabase, not Postgres)
- iTracker's `account_applications` table (kept for backward compat; future
  improvement is a `customer_id` FK on approved applications)

## Reused existing code

- Basic-auth middleware: `middleware.ts` lines 4–31
- Admin UI pattern: `app/admin/orders/*` + `app/api/admin/orders/route.ts`
- Email section helpers in `app/api/open-account/route.ts` (`line()`,
  `section()`, `emailBody()`) — move to `lib/open-account/email.ts`
- Form component: `components/OpenAccountForm.tsx` — extend, don't duplicate
- iTracker Supabase client pattern: `src/lib/supabase/admin.ts` already does
  the service-role factory; mirror it on BuyGeogrid

## Open design decisions (sensible defaults listed)

- **Table name:** `customers` (QBO term + matches the form title). Josh
  called them "clients" in conversation; interchangeable.
- **Admin UI home:** BuyGeogrid admin. iTracker stays focused on inventory
  and only *reads* customers for its dropdown.
- **Paper submissions trigger email too:** Yes — Renee/Kellie still need to
  set up the QBO record. Subject tagged `[entered from paper]` so they
  know Josh keyed it in.
- **PDF visibility:** already handled in the shipped version. File at
  `/docs/AFS-New-Customer-Account-Form.pdf` is reachable by URL but not
  linked from `/open-account`.

## Verification plan when picking this back up

1. **DB:** Submit `/open-account` locally with Supabase env set → row
   appears in `customers`; section grouping matches the email body
2. **Email:** Resend dashboard shows send to all three recipients; body
   includes `/admin/customers/<id>` link
3. **Admin list:** `/admin/customers` renders submission; search finds it by
   company name, contact name, or email
4. **Paper flow:** `/admin/new-customer` → row created with `source='paper'`,
   `entered_by=<admin>`; same Resend email fires with
   `[entered from paper]` tag
5. **PDF:** `/open-account` doesn't show download block;
   `/docs/AFS-New-Customer-Account-Form.pdf` still returns the file
   (**already true**)
6. **Failover:** Force Supabase to error (bad env var) → email still sends;
   DB error logged; client gets success response so they don't resubmit
7. **iTracker read access:** From an authenticated iTracker user,
   `supabase.from('customers').select('*')` returns rows (RLS allows
   select)
8. **Typecheck + build:** `npx tsc --noEmit` clean, `npx next build`
   successful

## Why we deferred

Email-only ships value today without new infrastructure. The DB + admin
flow is a real upgrade but adds a new service dependency (Supabase from
BuyGeogrid), an env var, a package, and a new UI surface. Reasonable to
wait until (a) we actually lose a submission to email, or (b) iTracker's
customer-picker becomes the critical path for inventory check-out.
