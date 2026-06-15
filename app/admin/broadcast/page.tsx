'use client';

import { useEffect, useMemo, useState } from 'react';

interface Signup {
  source: string;
  unsubscribed: boolean;
}

export default function BroadcastPage() {
  const [subject, setSubject] = useState('');
  const [bodyHtml, setBodyHtml] = useState('');
  const [bodyText, setBodyText] = useState('');
  const [sourceFilter, setSourceFilter] = useState('');
  const [testTo, setTestTo] = useState('');
  const [signups, setSignups] = useState<Signup[]>([]);
  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState<{ kind: 'ok' | 'err'; text: string } | null>(null);

  useEffect(() => {
    fetch('/api/admin/signups')
      .then((r) => r.json())
      .then((d) => setSignups(d.rows ?? []))
      .catch(() => {});
  }, []);

  const sources = useMemo(() => {
    const set = new Set<string>();
    for (const s of signups) set.add(s.source);
    return Array.from(set).sort();
  }, [signups]);

  const recipientCount = useMemo(() => {
    return signups.filter(
      (s) =>
        !s.unsubscribed && (sourceFilter ? s.source === sourceFilter : true)
    ).length;
  }, [signups, sourceFilter]);

  async function doSend(mode: 'test' | 'real') {
    setMsg(null);
    if (!subject.trim() || !bodyHtml.trim()) {
      setMsg({ kind: 'err', text: 'Subject and body are required.' });
      return;
    }
    if (mode === 'test' && !testTo.trim()) {
      setMsg({ kind: 'err', text: 'Test email address required.' });
      return;
    }
    if (mode === 'real') {
      if (
        !window.confirm(
          `Send broadcast to ${recipientCount} recipient${recipientCount === 1 ? '' : 's'}?\n\nSubject: ${subject}\n\nThis can't be undone.`
        )
      )
        return;
    }

    setSending(true);
    try {
      const res = await fetch('/api/admin/broadcast', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          subject: subject.trim(),
          body_html: bodyHtml.trim(),
          body_text: bodyText.trim() || undefined,
          source_filter: sourceFilter || undefined,
          test_to: mode === 'test' ? testTo.trim() : undefined,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || `HTTP ${res.status}`);
      if (mode === 'test') {
        setMsg({ kind: 'ok', text: `Test sent to ${testTo}.` });
      } else {
        setMsg({
          kind: 'ok',
          text: `Broadcast sent. ${data.sent} delivered, ${data.failed || 0} failed.`,
        });
      }
    } catch (err) {
      setMsg({
        kind: 'err',
        text: err instanceof Error ? err.message : 'Failed to send',
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-[#1a1a1a] text-white px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-bold">BuyGeogrid Admin</h1>
          <nav className="flex gap-3 text-sm text-gray-300">
            <a href="/admin" className="hover:text-white">
              Signups
            </a>
            <a href="/admin/orders" className="hover:text-white">
              Orders
            </a>
            <a href="/admin/broadcast" className="text-white font-semibold">
              Broadcast
            </a>
          </nav>
        </div>
        <a href="/" className="text-sm text-gray-300 hover:text-white">
          ← Site
        </a>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-1">Send a Broadcast</h2>
        <p className="text-sm text-gray-500 mb-6">
          From: <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs">
            BuyGeogrid &lt;info@buygeogrid.com&gt;
          </code>{' '}
          • Reply-To:{' '}
          <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs">
            josh@asphaltfabrics.com
          </code>
        </p>

        {msg && (
          <div
            className={`mb-4 px-4 py-3 rounded-lg text-sm ${
              msg.kind === 'ok'
                ? 'bg-green-50 border border-green-200 text-green-700'
                : 'bg-red-50 border border-red-200 text-red-700'
            }`}
          >
            {msg.text}
          </div>
        )}

        <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Subject *
            </label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="e.g. New Petrotac 4ft now in stock"
              disabled={sending}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:border-[#00c97e] focus:outline-none disabled:bg-gray-100"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Body (HTML) *
            </label>
            <textarea
              value={bodyHtml}
              onChange={(e) => setBodyHtml(e.target.value)}
              rows={10}
              placeholder="<p>Hey,</p><p>Quick update — we just got the Petrotac 4ft rolls in stock...</p>"
              disabled={sending}
              className="w-full px-3 py-2 border border-gray-300 rounded font-mono text-sm focus:border-[#00c97e] focus:outline-none disabled:bg-gray-100"
            />
            <p className="text-xs text-gray-500 mt-1">
              HTML is fine. Unsubscribe footer is auto-appended to every send.
            </p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Plain-text fallback (optional)
            </label>
            <textarea
              value={bodyText}
              onChange={(e) => setBodyText(e.target.value)}
              rows={4}
              placeholder="Same content as above but plain text — for clients that don't render HTML."
              disabled={sending}
              className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:border-[#00c97e] focus:outline-none disabled:bg-gray-100"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Audience
            </label>
            <select
              value={sourceFilter}
              onChange={(e) => setSourceFilter(e.target.value)}
              disabled={sending}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:border-[#00c97e] focus:outline-none bg-white disabled:bg-gray-100"
            >
              <option value="">All sources</option>
              {sources.map((s) => (
                <option key={s} value={s}>
                  Only {s}
                </option>
              ))}
            </select>
            <p className="text-xs text-gray-500 mt-1">
              Will send to <strong>{recipientCount}</strong> recipient
              {recipientCount === 1 ? '' : 's'} (excludes unsubscribed).
            </p>
          </div>

          <hr className="border-gray-200" />

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Test send (optional but recommended)
            </label>
            <div className="flex gap-2">
              <input
                type="email"
                value={testTo}
                onChange={(e) => setTestTo(e.target.value)}
                placeholder="josh@asphaltfabrics.com"
                disabled={sending}
                className="flex-1 px-3 py-2 border border-gray-300 rounded focus:border-[#00c97e] focus:outline-none disabled:bg-gray-100"
              />
              <button
                onClick={() => doSend('test')}
                disabled={sending}
                className="px-4 py-2 border border-gray-300 bg-white hover:border-[#00c97e] hover:text-[#00c97e] text-gray-700 rounded text-sm font-semibold disabled:opacity-50"
              >
                Send Test
              </button>
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <button
              onClick={() => doSend('real')}
              disabled={sending || recipientCount === 0}
              className="px-6 py-2.5 bg-[#00c97e] hover:bg-[#00b36f] disabled:bg-gray-400 text-white font-semibold rounded"
            >
              {sending
                ? 'Sending...'
                : `Send to ${recipientCount} Recipient${recipientCount === 1 ? '' : 's'}`}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
