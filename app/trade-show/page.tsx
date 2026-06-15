'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const INTEREST_OPTIONS = [
  'Petrotac (paving interlayer)',
  'Patch Packs (cold asphalt repair)',
  'Tensar Geogrid',
  'Mirafi Geotextile',
  'Free DCP Testing',
  'Just looking',
] as const;

export default function TradeShowPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [interest, setInterest] = useState('');
  const [website, setWebsite] = useState(''); // honeypot
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const nameRef = useRef<HTMLInputElement>(null);

  // Tag the signup with today's date so multiple shows are distinguishable
  // in the dashboard later.
  const sourceTag = `trade-show-${new Date().toISOString().slice(0, 10)}`;

  // After a successful submit, hold the success screen briefly then reset
  // the form so the next person can sign up.
  useEffect(() => {
    if (!success) return;
    const t = setTimeout(() => {
      setSuccess(false);
      setName('');
      setEmail('');
      setCompany('');
      setInterest('');
      setError('');
      nameRef.current?.focus();
    }, 3500);
    return () => clearTimeout(t);
  }, [success]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (submitting) return;
    setError('');

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.');
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
          company: company.trim() || undefined,
          interest: interest || undefined,
          source: sourceTag,
          website, // honeypot
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Submission failed');
      }
      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex flex-col">
      <main className="flex-1 px-6 py-10 flex flex-col items-center justify-center">
        <div className="w-full max-w-xl">
          <div className="flex justify-center mb-6">
            <Image
              src="/images/logos/afsupplylogo_transparent.png"
              alt="Asphalt Fabrics & Supply"
              width={140}
              height={140}
              priority
            />
          </div>

          {success ? (
            <div className="bg-[#00c97e] text-white rounded-2xl p-10 text-center shadow-lg">
              <div className="text-7xl mb-3">✓</div>
              <h2 className="text-3xl font-bold mb-2">You&apos;re on the list!</h2>
              <p className="text-white/90 text-lg">
                Thanks{name ? `, ${name.split(' ')[0]}` : ''} — we&apos;ll be in touch.
              </p>
              <p className="text-white/70 text-sm mt-6">
                Ready for the next person...
              </p>
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <h1 className="text-3xl font-bold text-gray-900 text-center mb-2">
                Stay Up to Date
              </h1>
              <p className="text-gray-600 text-center mb-8 text-lg">
                New product updates, arrivals, and occasional discounts on
                Petrotac and Patch Packs.
              </p>

              {error && (
                <div className="mb-5 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5" autoComplete="off">
                {/* Honeypot — invisible to humans, bots fill it */}
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
                  <label htmlFor="website">Website (leave blank)</label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </div>

                <div>
                  <label
                    htmlFor="ts-name"
                    className="block text-base font-semibold text-gray-700 mb-2"
                  >
                    Name
                  </label>
                  <input
                    ref={nameRef}
                    id="ts-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="words"
                    disabled={submitting}
                    className="w-full px-4 py-4 text-lg border-2 border-gray-300 rounded-lg focus:border-[#00c97e] focus:ring-0 focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="ts-email"
                    className="block text-base font-semibold text-gray-700 mb-2"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="ts-email"
                    type="email"
                    inputMode="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck={false}
                    disabled={submitting}
                    className="w-full px-4 py-4 text-lg border-2 border-gray-300 rounded-lg focus:border-[#00c97e] focus:ring-0 focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="ts-company"
                    className="block text-base font-semibold text-gray-700 mb-2"
                  >
                    Company
                  </label>
                  <input
                    id="ts-company"
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="words"
                    disabled={submitting}
                    className="w-full px-4 py-4 text-lg border-2 border-gray-300 rounded-lg focus:border-[#00c97e] focus:ring-0 focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="ts-interest"
                    className="block text-base font-semibold text-gray-700 mb-2"
                  >
                    What caught your eye?
                  </label>
                  <select
                    id="ts-interest"
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    disabled={submitting}
                    className="w-full px-4 py-4 text-lg border-2 border-gray-300 rounded-lg focus:border-[#00c97e] focus:ring-0 focus:outline-none bg-white"
                  >
                    <option value="">— Select (optional) —</option>
                    {INTEREST_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-[#00c97e] hover:bg-[#00b36f] disabled:bg-gray-400 text-white text-xl font-bold py-5 rounded-lg transition-colors touch-manipulation"
                >
                  {submitting ? 'Submitting...' : 'Sign Me Up'}
                </button>
              </form>

              <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                <p className="text-gray-600 mb-3">Need a quote on a specific product?</p>
                <Link
                  href="/contact"
                  className="inline-block bg-white border-2 border-gray-300 hover:border-[#00c97e] text-gray-700 hover:text-[#00c97e] font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  Request a Quote →
                </Link>
              </div>
            </div>
          )}

          <p className="text-center text-xs text-gray-400 mt-6">
            Source: {sourceTag}
          </p>
        </div>
      </main>
    </div>
  );
}
