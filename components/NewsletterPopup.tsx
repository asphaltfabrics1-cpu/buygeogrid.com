'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const DISMISS_KEY = 'bg_newsletter_popup_dismissed_at';
const SUBMITTED_KEY = 'bg_newsletter_submitted_at';
const DISMISS_TTL_DAYS = 30;
const TIME_TRIGGER_MS = 30_000; // show after 30s
const SCROLL_TRIGGER = 0.5; // or after scrolling past 50% of page

// Routes the popup should NEVER appear on
const HIDDEN_PATHS = ['/admin', '/trade-show', '/unsubscribe'];

export default function NewsletterPopup() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [website, setWebsite] = useState(''); // honeypot

  // Decide whether to even arm the triggers
  useEffect(() => {
    if (!pathname) return;
    if (HIDDEN_PATHS.some((p) => pathname.startsWith(p))) return;

    // Already submitted before? Don't show again.
    try {
      if (localStorage.getItem(SUBMITTED_KEY)) return;
    } catch {
      /* localStorage may be blocked — fall through */
    }

    // Recently dismissed? Honor the cooldown.
    try {
      const dismissedAtRaw = localStorage.getItem(DISMISS_KEY);
      if (dismissedAtRaw) {
        const dismissedAt = parseInt(dismissedAtRaw, 10);
        const ageMs = Date.now() - dismissedAt;
        const ttlMs = DISMISS_TTL_DAYS * 24 * 60 * 60 * 1000;
        if (ageMs < ttlMs) return;
      }
    } catch {
      /* ignore */
    }

    const timer = setTimeout(() => setOpen(true), TIME_TRIGGER_MS);

    function onScroll() {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const ratio = scrollY / docHeight;
      if (ratio >= SCROLL_TRIGGER) {
        setOpen(true);
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', onScroll);
    };
  }, [pathname]);

  function handleDismiss() {
    setOpen(false);
    try {
      localStorage.setItem(DISMISS_KEY, String(Date.now()));
    } catch {
      /* ignore */
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (submitting) return;
    setError('');
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email.');
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch('/api/email-signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim() || undefined,
          email: email.trim(),
          source: 'popup',
          website, // honeypot
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Could not save');
      }
      setSuccess(true);
      try {
        localStorage.setItem(SUBMITTED_KEY, String(Date.now()));
      } catch {
        /* ignore */
      }
      setTimeout(() => setOpen(false), 2500);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setSubmitting(false);
    }
  }

  if (!open) return null;
  // Last-line guard against the popup leaking into hidden routes
  if (pathname && HIDDEN_PATHS.some((p) => pathname.startsWith(p))) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="bg-newsletter-title"
      className="fixed bottom-4 right-4 z-[100] w-[min(360px,calc(100vw-2rem))] bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden"
      style={{ animation: 'bg-pop-in 240ms ease-out' }}
    >
      <style jsx>{`
        @keyframes bg-pop-in {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>

      <button
        onClick={handleDismiss}
        aria-label="Dismiss"
        className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-xl leading-none w-7 h-7 flex items-center justify-center rounded"
      >
        ×
      </button>

      {success ? (
        <div className="p-6 text-center">
          <div className="text-5xl mb-2">✓</div>
          <h2 className="text-lg font-bold text-gray-900 mb-1">
            You&apos;re on the list
          </h2>
          <p className="text-sm text-gray-600">Thanks — we&apos;ll be in touch.</p>
        </div>
      ) : (
        <div className="p-5">
          <h2
            id="bg-newsletter-title"
            className="text-lg font-bold text-gray-900 mb-1"
          >
            Stay up to date
          </h2>
          <p className="text-sm text-gray-600 mb-4 leading-snug">
            New product updates, arrivals, and the occasional discount on Petrotac
            and Patch Packs.
          </p>

          {error && (
            <div className="mb-3 p-2 bg-red-50 border border-red-200 rounded text-red-700 text-xs">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-2" autoComplete="off">
            {/* honeypot */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                left: '-9999px',
                width: '1px',
                height: '1px',
                overflow: 'hidden',
              }}
            >
              <label htmlFor="bg-newsletter-website">Website</label>
              <input
                type="text"
                id="bg-newsletter-website"
                name="website"
                tabIndex={-1}
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                autoComplete="off"
              />
            </div>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name (optional)"
              autoComplete="name"
              disabled={submitting}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:border-[#00c97e] focus:outline-none"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              autoComplete="email"
              required
              disabled={submitting}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:border-[#00c97e] focus:outline-none"
            />
            <div className="flex gap-2 pt-1">
              <button
                type="button"
                onClick={handleDismiss}
                className="px-3 py-2 text-sm text-gray-600 hover:text-gray-900"
              >
                Maybe later
              </button>
              <button
                type="submit"
                disabled={submitting}
                className="flex-1 px-4 py-2 text-sm font-semibold bg-[#00c97e] hover:bg-[#00b36f] disabled:bg-gray-400 text-white rounded"
              >
                {submitting ? 'Saving...' : 'Sign Me Up'}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
