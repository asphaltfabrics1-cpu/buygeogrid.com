'use client';

import { useEffect, useMemo, useState } from 'react';

function slugifyEvent(s: string): string {
  return s
    .trim()
    .replace(/[^a-zA-Z0-9-_]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function CampaignsPanel({ signups }: { signups: Signup[] }) {
  const [newName, setNewName] = useState('');

  // Group existing signups by source so each campaign tag shows a live count
  const counts = useMemo(() => {
    const c: Record<string, number> = {};
    for (const s of signups) c[s.source] = (c[s.source] ?? 0) + 1;
    return c;
  }, [signups]);

  const campaigns = Object.entries(counts)
    .filter(([src]) => src && src !== 'unknown' && src !== 'popup')
    .sort((a, b) => b[1] - a[1]);

  const slug = slugifyEvent(newName);
  const previewUrl = slug
    ? `${typeof window !== 'undefined' ? window.location.origin : 'https://buygeogrid.com'}/trade-show?event=${encodeURIComponent(slug)}`
    : '';

  function openKiosk(eventSlug: string) {
    const url = `/trade-show${eventSlug ? `?event=${encodeURIComponent(eventSlug)}` : ''}`;
    window.open(url, '_blank', 'noopener');
  }
  function openOrder(eventSlug: string) {
    const url = `/order${eventSlug ? `?event=${encodeURIComponent(eventSlug)}` : ''}`;
    window.open(url, '_blank', 'noopener');
  }

  async function copyToClipboard(text: string) {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      /* ignore */
    }
  }

  return (
    <div className="mb-6 bg-white border border-gray-200 rounded-lg p-5">
      <h3 className="text-lg font-bold text-gray-900 mb-1">
        Trade-Show Campaigns
      </h3>
      <p className="text-sm text-gray-500 mb-4">
        Name a campaign and get a custom kiosk URL. Every signup from that URL
        is tagged with the campaign name so you can broadcast to them later.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 mb-4">
        <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1">
          New campaign
        </label>
        <div className="flex flex-wrap gap-2">
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="e.g. ConExpo 2026"
            className="flex-1 min-w-[200px] px-3 py-2 text-sm border border-gray-300 rounded focus:border-[#00c97e] focus:outline-none"
          />
          <button
            onClick={() => slug && openKiosk(slug)}
            disabled={!slug}
            className="px-4 py-2 text-sm bg-[#00c97e] hover:bg-[#00b36f] disabled:bg-gray-300 text-white font-semibold rounded"
          >
            📱 Email Kiosk
          </button>
          <button
            onClick={() => slug && openOrder(slug)}
            disabled={!slug}
            className="px-4 py-2 text-sm bg-[#1a1a1a] hover:bg-[#333] disabled:bg-gray-300 text-white font-semibold rounded"
          >
            🛒 Order Kiosk
          </button>
          <button
            onClick={() => previewUrl && copyToClipboard(previewUrl)}
            disabled={!slug}
            className="px-4 py-2 text-sm border border-gray-300 hover:border-[#00c97e] hover:text-[#00c97e] text-gray-700 font-semibold rounded disabled:opacity-50"
          >
            📋 Copy URL
          </button>
        </div>
        {slug && (
          <div className="mt-2 text-xs text-gray-500 break-all">
            URL: <code className="bg-white border border-gray-200 rounded px-1.5 py-0.5">{previewUrl}</code>
            <br />
            Tag: <code className="bg-white border border-gray-200 rounded px-1.5 py-0.5">{slug}</code>
          </div>
        )}
      </div>

      <div>
        <div className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-2">
          Past campaigns ({campaigns.length})
        </div>
        {campaigns.length === 0 ? (
          <p className="text-sm text-gray-500 italic">
            No campaigns yet. Name your first one above to get a kiosk URL.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {campaigns.map(([src, n]) => (
              <div
                key={src}
                className="flex items-center justify-between gap-2 border border-gray-200 rounded-lg p-3"
              >
                <div className="min-w-0">
                  <div className="font-semibold text-gray-900 truncate">{src}</div>
                  <div className="text-xs text-gray-500">
                    {n} signup{n === 1 ? '' : 's'}
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 flex-shrink-0">
                  <button
                    onClick={() => openKiosk(src)}
                    className="px-3 py-1 text-xs border border-gray-300 hover:border-[#00c97e] hover:text-[#00c97e] text-gray-700 font-semibold rounded whitespace-nowrap"
                  >
                    📱 Email
                  </button>
                  <button
                    onClick={() => openOrder(src)}
                    className="px-3 py-1 text-xs border border-gray-300 hover:border-gray-700 hover:text-gray-900 text-gray-700 font-semibold rounded whitespace-nowrap"
                  >
                    🛒 Order
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

interface Signup {
  id: number;
  email: string;
  name: string | null;
  company: string | null;
  interest: string | null;
  source: string;
  unsubscribed: boolean;
  created_at: string;
}

export default function AdminPage() {
  const [signups, setSignups] = useState<Signup[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [sourceFilter, setSourceFilter] = useState('');

  async function load() {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/admin/signups');
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      setSignups(data.rows ?? []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  const sources = useMemo(() => {
    const set = new Set<string>();
    for (const s of signups) set.add(s.source);
    return Array.from(set).sort();
  }, [signups]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return signups.filter((s) => {
      if (sourceFilter && s.source !== sourceFilter) return false;
      if (!q) return true;
      return (
        s.email.toLowerCase().includes(q) ||
        (s.name?.toLowerCase().includes(q) ?? false) ||
        (s.company?.toLowerCase().includes(q) ?? false) ||
        (s.interest?.toLowerCase().includes(q) ?? false)
      );
    });
  }, [signups, search, sourceFilter]);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-[#1a1a1a] text-white px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-bold">BuyGeogrid Admin</h1>
          <nav className="flex gap-3 text-sm text-gray-300">
            <a href="/admin" className="text-white font-semibold">
              Signups
            </a>
            <a href="/admin/orders" className="hover:text-white">
              Orders
            </a>
            <a href="/admin/chats" className="hover:text-white">
              Chats
            </a>
            <a href="/admin/broadcast" className="hover:text-white">
              Broadcast
            </a>
          </nav>
        </div>
        <a href="/" className="text-sm text-gray-300 hover:text-white">
          ← Back to site
        </a>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Quick links — for iPad navigation without typing slugs */}
        <div className="mb-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <a
            href="/admin/broadcast"
            className="block bg-[#00c97e] hover:bg-[#00b36f] text-white rounded-lg p-4 transition-colors"
          >
            <div className="text-xs uppercase opacity-80 tracking-wide">Email</div>
            <div className="text-lg font-bold mt-1">✉ Send Broadcast</div>
            <div className="text-xs opacity-90 mt-1">Compose &amp; send to the list</div>
          </a>
          <a
            href="/"
            target="_blank"
            rel="noopener"
            className="block bg-white border border-gray-200 hover:border-[#00c97e] rounded-lg p-4 transition-colors"
          >
            <div className="text-xs uppercase text-gray-500 tracking-wide">Public</div>
            <div className="text-lg font-bold mt-1 text-gray-900">🌐 Open Site</div>
            <div className="text-xs text-gray-500 mt-1">buygeogrid.com</div>
          </a>
          <a
            href="/contact"
            target="_blank"
            rel="noopener"
            className="block bg-white border border-gray-200 hover:border-[#00c97e] rounded-lg p-4 transition-colors"
          >
            <div className="text-xs uppercase text-gray-500 tracking-wide">Public</div>
            <div className="text-lg font-bold mt-1 text-gray-900">💬 Quote Form</div>
            <div className="text-xs text-gray-500 mt-1">/contact (Monday + Gideon)</div>
          </a>
        </div>

        {/* Trade-show campaigns: name an event, get a kiosk URL */}
        <CampaignsPanel signups={signups} />

        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Email Signups</h2>
            <p className="text-sm text-gray-500 mt-0.5">
              {filtered.length} of {signups.length} shown
            </p>
          </div>
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={load}
              disabled={loading}
              className="px-4 py-2 text-sm border border-gray-300 bg-white text-gray-700 hover:border-[#00c97e] hover:text-[#00c97e] rounded-lg disabled:opacity-50"
            >
              {loading ? 'Refreshing...' : 'Refresh'}
            </button>
            <a
              href="/api/admin/signups/csv"
              className="px-4 py-2 text-sm bg-white border border-gray-300 hover:border-[#00c97e] hover:text-[#00c97e] text-gray-700 font-semibold rounded-lg inline-flex items-center gap-1"
              download
            >
              ⬇ Download CSV
            </a>
            <a
              href="/admin/broadcast"
              className="px-4 py-2 text-sm bg-[#00c97e] hover:bg-[#00b36f] text-white font-semibold rounded-lg inline-flex items-center gap-1"
            >
              ✉ Send Broadcast
            </a>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white border border-gray-200 rounded-lg p-3 mb-4 flex gap-2 flex-wrap items-center">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search email, name, company..."
            className="flex-1 min-w-[200px] px-3 py-2 text-sm border border-gray-300 rounded focus:border-[#00c97e] focus:outline-none"
          />
          <select
            value={sourceFilter}
            onChange={(e) => setSourceFilter(e.target.value)}
            className="px-3 py-2 text-sm border border-gray-300 rounded focus:border-[#00c97e] focus:outline-none bg-white"
          >
            <option value="">All sources</option>
            {sources.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          {(search || sourceFilter) && (
            <button
              onClick={() => {
                setSearch('');
                setSourceFilter('');
              }}
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Clear
            </button>
          )}
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-3 py-2 rounded mb-4 text-sm">
            {error}
          </div>
        )}

        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr className="text-left text-gray-600">
                <th className="px-4 py-2.5 font-semibold">When</th>
                <th className="px-4 py-2.5 font-semibold">Email</th>
                <th className="px-4 py-2.5 font-semibold">Name</th>
                <th className="px-4 py-2.5 font-semibold">Company</th>
                <th className="px-4 py-2.5 font-semibold">Interest</th>
                <th className="px-4 py-2.5 font-semibold">Source</th>
              </tr>
            </thead>
            <tbody>
              {loading && (
                <tr>
                  <td colSpan={6} className="px-4 py-6 text-center text-gray-500">
                    Loading...
                  </td>
                </tr>
              )}
              {!loading && filtered.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-4 py-6 text-center text-gray-500">
                    {signups.length === 0
                      ? 'No signups yet.'
                      : 'No matches for your filters.'}
                  </td>
                </tr>
              )}
              {!loading &&
                filtered.map((s) => (
                  <tr key={s.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="px-4 py-2.5 text-gray-500 whitespace-nowrap">
                      {new Date(s.created_at).toLocaleString()}
                    </td>
                    <td className="px-4 py-2.5 text-gray-900 font-medium">
                      {s.email}
                      {s.unsubscribed && (
                        <span className="ml-2 text-xs px-1.5 py-0.5 rounded bg-red-100 text-red-700">
                          unsubscribed
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-2.5 text-gray-700">{s.name || '—'}</td>
                    <td className="px-4 py-2.5 text-gray-700">{s.company || '—'}</td>
                    <td className="px-4 py-2.5 text-gray-700">{s.interest || '—'}</td>
                    <td className="px-4 py-2.5 text-gray-500 text-xs whitespace-nowrap">
                      {s.source}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
