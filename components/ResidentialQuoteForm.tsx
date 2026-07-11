'use client';

import { useState } from 'react';

export default function ResidentialQuoteForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [zip, setZip] = useState('');
  const [sqft, setSqft] = useState('');
  const [project, setProject] = useState('driveway');
  const [notes, setNotes] = useState('');
  const [website, setWebsite] = useState(''); // honeypot
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (submitting) return;
    setError('');
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email.');
      return;
    }
    if (!sqft) {
      setError('Square footage helps us quote same-day.');
      return;
    }
    setSubmitting(true);
    try {
      const interest = [
        `Project: ${project}`,
        `Sq ft: ${sqft}`,
        phone ? `Phone: ${phone}` : null,
        zip ? `Zip: ${zip}` : null,
        notes ? `Notes: ${notes}` : null,
      ]
        .filter(Boolean)
        .join(' | ');

      const res = await fetch('/api/email-signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim() || undefined,
          email: email.trim(),
          interest,
          source: 'residential-quote',
          website,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Could not send quote request');
      }
      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setSubmitting(false);
    }
  }

  if (success) {
    return (
      <div className="bg-white border border-gray-200 rounded p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">Got it — quote coming your way.</h3>
        <p className="text-gray-700 mb-2">
          You&apos;ll hear back the same day with pricing and pickup or delivery options for your{' '}
          {sqft} sq ft {project}.
        </p>
        <p className="text-gray-700">
          Need it sooner? Text Josh direct:{' '}
          <a href="tel:4403841897" className="text-[#00c97e] font-semibold hover:underline">
            (440) 384-1897
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded p-6 space-y-4" autoComplete="off">
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
        <label htmlFor="residential-website">Website</label>
        <input
          type="text"
          id="residential-website"
          name="website"
          tabIndex={-1}
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          autoComplete="off"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="rq-name" className="block text-sm font-semibold text-gray-800 mb-1">
            Name
          </label>
          <input
            id="rq-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-[#00c97e]"
          />
        </div>
        <div>
          <label htmlFor="rq-phone" className="block text-sm font-semibold text-gray-800 mb-1">
            Phone (text ok)
          </label>
          <input
            id="rq-phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-[#00c97e]"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="rq-email" className="block text-sm font-semibold text-gray-800 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="rq-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-[#00c97e]"
          />
        </div>
        <div>
          <label htmlFor="rq-zip" className="block text-sm font-semibold text-gray-800 mb-1">
            Zip
          </label>
          <input
            id="rq-zip"
            type="text"
            inputMode="numeric"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-[#00c97e]"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="rq-project" className="block text-sm font-semibold text-gray-800 mb-1">
            Project type
          </label>
          <select
            id="rq-project"
            value={project}
            onChange={(e) => setProject(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-[#00c97e] bg-white"
          >
            <option value="driveway">Driveway</option>
            <option value="patio">Patio / paver base</option>
            <option value="walkway">Walkway</option>
            <option value="parking pad">Parking pad</option>
            <option value="shed pad">Shed / outbuilding pad</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="rq-sqft" className="block text-sm font-semibold text-gray-800 mb-1">
            Square footage <span className="text-red-500">*</span>
          </label>
          <input
            id="rq-sqft"
            type="text"
            inputMode="numeric"
            required
            placeholder="e.g. 800"
            value={sqft}
            onChange={(e) => setSqft(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-[#00c97e]"
          />
        </div>
      </div>

      <div>
        <label htmlFor="rq-notes" className="block text-sm font-semibold text-gray-800 mb-1">
          What&apos;s going on? (soft spot, mud, ruts, etc.)
        </label>
        <textarea
          id="rq-notes"
          rows={3}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-[#00c97e]"
        />
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={submitting}
        className="w-full inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-[#00c97e] hover:bg-[#00b36f] rounded transition-colors duration-200 disabled:opacity-60"
      >
        {submitting ? 'Sending…' : 'Get a same-day quote'}
      </button>

      <p className="text-xs text-gray-500 text-center">
        Prefer to talk? Call or text Josh at{' '}
        <a href="tel:4403841897" className="text-[#00c97e] font-semibold hover:underline">
          (440) 384-1897
        </a>
        .
      </p>
    </form>
  );
}
