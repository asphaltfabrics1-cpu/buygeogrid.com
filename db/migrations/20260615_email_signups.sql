-- Email list signups captured from the website (popup, /signup page,
-- /trade-show kiosk, etc.). Single table; source field distinguishes
-- where the signup came from for filtering and reporting.

CREATE TABLE IF NOT EXISTS email_signups (
  id           bigserial PRIMARY KEY,
  email        text        NOT NULL,
  name         text,
  company      text,
  interest     text,
  source       text        NOT NULL DEFAULT 'unknown',
  ip           text,
  user_agent   text,
  unsubscribed boolean     NOT NULL DEFAULT false,
  created_at   timestamptz NOT NULL DEFAULT now(),

  -- Email is the unique identifier — re-signups update the existing row
  -- so we don't end up with dupes when the same person fills it out twice.
  CONSTRAINT email_signups_email_unique UNIQUE (email)
);

CREATE INDEX IF NOT EXISTS idx_email_signups_created_at
  ON email_signups (created_at DESC);

CREATE INDEX IF NOT EXISTS idx_email_signups_source
  ON email_signups (source);
