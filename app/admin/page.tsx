'use client';

import { useEffect, useMemo, useState } from 'react';

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
        <h1 className="text-xl font-bold">BuyGeogrid Admin</h1>
        <a href="/" className="text-sm text-gray-300 hover:text-white">
          ← Back to site
        </a>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
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
              className="px-4 py-2 text-sm bg-[#00c97e] hover:bg-[#00b36f] text-white font-semibold rounded-lg inline-flex items-center gap-1"
              download
            >
              ⬇ Download CSV
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
