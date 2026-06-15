'use client';

import { useEffect, useMemo, useState } from 'react';

interface Msg {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  createdAt: string;
}

interface Session {
  id: string;
  visitorId: string;
  visitorName: string | null;
  visitorEmail: string | null;
  visitorPhone: string | null;
  visitorAddress: string | null;
  jobType: string | null;
  jobDetails: string | null;
  urgency: string | null;
  preferredTime: string | null;
  summary: string | null;
  createdAt: string;
  updatedAt: string;
  messageCount: number;
  messages: Msg[];
}

export default function ChatsAdmin() {
  const [sessions, setSessions] = useState<Session[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [search, setSearch] = useState('');

  async function load() {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/admin/chats?limit=200');
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || `HTTP ${res.status}`);
      }
      const data = await res.json();
      setSessions(data.sessions ?? []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load chats');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return sessions;
    return sessions.filter((s) => {
      return (
        (s.visitorName?.toLowerCase().includes(q) ?? false) ||
        (s.visitorEmail?.toLowerCase().includes(q) ?? false) ||
        (s.visitorPhone?.toLowerCase().includes(q) ?? false) ||
        (s.summary?.toLowerCase().includes(q) ?? false) ||
        s.messages.some((m) => m.content.toLowerCase().includes(q))
      );
    });
  }, [sessions, search]);

  const selected = useMemo(
    () => filtered.find((s) => s.id === selectedId) || filtered[0] || null,
    [filtered, selectedId]
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-[#1a1a1a] text-white px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-bold">BuyGeogrid Admin</h1>
          <nav className="flex gap-3 text-sm text-gray-300">
            <a href="/admin" className="hover:text-white">Signups</a>
            <a href="/admin/orders" className="hover:text-white">Orders</a>
            <a href="/admin/chats" className="text-white font-semibold">Chats</a>
            <a href="/admin/broadcast" className="hover:text-white">Broadcast</a>
          </nav>
        </div>
        <a href="/" className="text-sm text-gray-300 hover:text-white">← Site</a>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Chat Conversations</h2>
            <p className="text-sm text-gray-500 mt-0.5">
              {filtered.length} of {sessions.length} shown
            </p>
          </div>
          <button
            onClick={load}
            disabled={loading}
            className="px-4 py-2 text-sm border border-gray-300 bg-white text-gray-700 hover:border-[#00c97e] hover:text-[#00c97e] rounded-lg disabled:opacity-50"
          >
            {loading ? 'Refreshing...' : 'Refresh'}
          </button>
        </div>

        {error && (
          <div className="mb-4 px-3 py-2 bg-red-50 border border-red-200 text-red-700 rounded text-sm">
            {error}
          </div>
        )}

        <div className="mb-4">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search visitor name, email, phone, message text..."
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:border-[#00c97e] focus:outline-none"
          />
        </div>

        {loading && (
          <div className="text-gray-500 py-8 text-center">Loading conversations...</div>
        )}

        {!loading && filtered.length === 0 && (
          <div className="bg-white border border-gray-200 rounded-lg p-12 text-center text-gray-500">
            {sessions.length === 0 ? 'No chats yet.' : 'No chats match your search.'}
          </div>
        )}

        {!loading && filtered.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-4">
            {/* Session list */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <ul className="max-h-[600px] overflow-y-auto divide-y divide-gray-100">
                {filtered.map((s) => {
                  const isActive = selected?.id === s.id;
                  const label =
                    s.visitorName ||
                    s.visitorEmail ||
                    s.visitorPhone ||
                    `Anon ${s.visitorId.slice(0, 6)}`;
                  return (
                    <li key={s.id}>
                      <button
                        onClick={() => setSelectedId(s.id)}
                        className={`w-full text-left p-3 hover:bg-gray-50 transition-colors ${
                          isActive ? 'bg-green-50 border-l-4 border-[#00c97e]' : ''
                        }`}
                      >
                        <div className="text-sm font-semibold text-gray-900 truncate">
                          {label}
                        </div>
                        <div className="text-xs text-gray-500 truncate mt-0.5">
                          {s.summary || s.jobDetails || '(no summary)'}
                        </div>
                        <div className="text-xs text-gray-400 mt-1 flex items-center gap-2">
                          <span>{new Date(s.updatedAt).toLocaleString()}</span>
                          <span>·</span>
                          <span>{s.messageCount} msg</span>
                          {s.urgency && (
                            <>
                              <span>·</span>
                              <span className="px-1.5 py-0.5 rounded bg-yellow-100 text-yellow-800">
                                {s.urgency}
                              </span>
                            </>
                          )}
                        </div>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Conversation detail */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              {selected ? (
                <>
                  <div className="bg-gray-50 border-b border-gray-200 px-4 py-3">
                    <div className="text-base font-semibold text-gray-900">
                      {selected.visitorName || 'Anonymous visitor'}
                    </div>
                    <div className="text-xs text-gray-500 mt-0.5 flex flex-wrap gap-x-3 gap-y-0.5">
                      {selected.visitorEmail && (
                        <a
                          href={`mailto:${selected.visitorEmail}`}
                          className="hover:underline"
                        >
                          ✉ {selected.visitorEmail}
                        </a>
                      )}
                      {selected.visitorPhone && (
                        <a
                          href={`tel:${selected.visitorPhone}`}
                          className="hover:underline"
                        >
                          📞 {selected.visitorPhone}
                        </a>
                      )}
                      {selected.visitorAddress && <span>📍 {selected.visitorAddress}</span>}
                    </div>
                    {(selected.jobType || selected.jobDetails || selected.urgency) && (
                      <div className="text-xs text-gray-600 mt-1.5 bg-white border border-gray-200 rounded p-2">
                        {selected.jobType && (
                          <div>
                            <strong>Job:</strong> {selected.jobType}
                          </div>
                        )}
                        {selected.jobDetails && (
                          <div>
                            <strong>Details:</strong> {selected.jobDetails}
                          </div>
                        )}
                        {selected.urgency && (
                          <div>
                            <strong>Urgency:</strong> {selected.urgency}
                          </div>
                        )}
                        {selected.preferredTime && (
                          <div>
                            <strong>Preferred time:</strong> {selected.preferredTime}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                  <div className="p-4 max-h-[560px] overflow-y-auto space-y-3">
                    {selected.messages.length === 0 && (
                      <div className="text-sm text-gray-500 text-center py-8">
                        No messages in this session yet.
                      </div>
                    )}
                    {selected.messages.map((m) => (
                      <div
                        key={m.id}
                        className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm ${
                            m.role === 'user'
                              ? 'bg-[#00c97e] text-white rounded-br-sm'
                              : m.role === 'system'
                              ? 'bg-gray-100 text-gray-500 italic text-xs'
                              : 'bg-gray-100 text-gray-800 rounded-bl-sm'
                          }`}
                        >
                          <div className="whitespace-pre-wrap">{m.content}</div>
                          <div
                            className={`text-[10px] mt-0.5 opacity-70 ${
                              m.role === 'user' ? 'text-right' : ''
                            }`}
                          >
                            {new Date(m.createdAt).toLocaleTimeString()}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="p-12 text-center text-gray-500">
                  Select a conversation to view it.
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
