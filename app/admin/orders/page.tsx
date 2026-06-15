'use client';

import { useEffect, useMemo, useState } from 'react';

interface LineItem {
  product: string;
  qty: number;
  notes?: string;
}

interface Order {
  id: number;
  order_number: string;
  customer_name: string;
  customer_company: string | null;
  customer_email: string;
  customer_phone: string | null;
  ship_to: string | null;
  line_items: LineItem[];
  notes: string | null;
  source: string;
  status: 'new' | 'confirmed' | 'fulfilled' | 'cancelled';
  created_at: string;
}

const STATUS_OPTIONS: Order['status'][] = ['new', 'confirmed', 'fulfilled', 'cancelled'];

function statusBadgeClasses(s: Order['status']): string {
  switch (s) {
    case 'new':
      return 'bg-blue-100 text-blue-800 border border-blue-200';
    case 'confirmed':
      return 'bg-yellow-100 text-yellow-800 border border-yellow-200';
    case 'fulfilled':
      return 'bg-green-100 text-green-800 border border-green-200';
    case 'cancelled':
      return 'bg-gray-100 text-gray-700 border border-gray-200';
  }
}

export default function OrdersAdmin() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | Order['status']>('all');
  const [search, setSearch] = useState('');
  const [working, setWorking] = useState<number | null>(null);
  const [error, setError] = useState('');

  async function load() {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/admin/orders');
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      setOrders(data.rows ?? []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return orders.filter((o) => {
      if (filter !== 'all' && o.status !== filter) return false;
      if (!q) return true;
      return (
        o.order_number.toLowerCase().includes(q) ||
        o.customer_name.toLowerCase().includes(q) ||
        o.customer_email.toLowerCase().includes(q) ||
        (o.customer_company?.toLowerCase().includes(q) ?? false) ||
        o.line_items.some((l) => l.product.toLowerCase().includes(q))
      );
    });
  }, [orders, filter, search]);

  async function setStatus(id: number, status: Order['status']) {
    setWorking(id);
    try {
      const res = await fetch('/api/admin/orders', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status }),
      });
      if (!res.ok) throw new Error('Update failed');
      setOrders((prev) => prev.map((o) => (o.id === id ? { ...o, status } : o)));
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Failed to update');
    } finally {
      setWorking(null);
    }
  }

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: orders.length, new: 0, confirmed: 0, fulfilled: 0, cancelled: 0 };
    for (const o of orders) c[o.status] = (c[o.status] ?? 0) + 1;
    return c;
  }, [orders]);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-[#1a1a1a] text-white px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-bold">BuyGeogrid Admin</h1>
          <nav className="flex gap-3 text-sm text-gray-300">
            <a href="/admin" className="hover:text-white">Signups</a>
            <a href="/admin/orders" className="text-white font-semibold">Orders</a>
            <a href="/admin/chats" className="hover:text-white">Chats</a>
            <a href="/admin/broadcast" className="hover:text-white">Broadcast</a>
          </nav>
        </div>
        <a href="/" className="text-sm text-gray-300 hover:text-white">← Site</a>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Orders</h2>
            <p className="text-sm text-gray-500 mt-0.5">
              {filtered.length} of {orders.length} shown
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

        {/* Status filter pills */}
        <div className="flex flex-wrap gap-2 mb-4">
          {(['all', ...STATUS_OPTIONS] as const).map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`px-3 py-1.5 text-sm rounded-full border ${
                filter === s
                  ? 'bg-[#00c97e] text-white border-[#00c97e]'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-[#00c97e]'
              }`}
            >
              {s === 'all' ? 'All' : s.charAt(0).toUpperCase() + s.slice(1)}{' '}
              <span className="opacity-70 ml-1">{counts[s] ?? 0}</span>
            </button>
          ))}
          <div className="flex-1 min-w-[200px]">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name, email, order#, product..."
              className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded focus:border-[#00c97e] focus:outline-none"
            />
          </div>
        </div>

        {loading && <div className="text-gray-500 py-8 text-center">Loading orders...</div>}
        {!loading && filtered.length === 0 && (
          <div className="bg-white border border-gray-200 rounded-lg p-12 text-center text-gray-500">
            {orders.length === 0 ? 'No orders yet.' : 'No orders match your filters.'}
          </div>
        )}

        <div className="space-y-3">
          {filtered.map((o) => {
            const total = o.line_items.reduce((s, l) => s + (Number(l.qty) || 0), 0);
            return (
              <div key={o.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-50 border-b border-gray-200 px-4 py-3 flex items-start justify-between gap-3 flex-wrap">
                  <div className="min-w-[200px]">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-mono text-sm font-bold text-gray-900">
                        {o.order_number}
                      </span>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full font-semibold ${statusBadgeClasses(o.status)}`}
                      >
                        {o.status}
                      </span>
                    </div>
                    <div className="text-base font-semibold text-gray-900 mt-1">
                      {o.customer_name}
                      {o.customer_company && (
                        <span className="text-gray-500 font-normal"> · {o.customer_company}</span>
                      )}
                    </div>
                    <div className="text-xs text-gray-500 mt-0.5">
                      <a href={`mailto:${o.customer_email}`} className="hover:underline">
                        {o.customer_email}
                      </a>
                      {o.customer_phone && (
                        <>
                          {' '}·{' '}
                          <a href={`tel:${o.customer_phone}`} className="hover:underline">
                            {o.customer_phone}
                          </a>
                        </>
                      )}
                    </div>
                    <div className="text-xs text-gray-400 mt-1">
                      {new Date(o.created_at).toLocaleString()} · {o.source}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <select
                      value={o.status}
                      onChange={(e) => setStatus(o.id, e.target.value as Order['status'])}
                      disabled={working === o.id}
                      className="px-2 py-1.5 text-sm border border-gray-300 rounded bg-white focus:border-[#00c97e] focus:outline-none"
                    >
                      {STATUS_OPTIONS.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <table className="w-full text-sm">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr className="text-left text-gray-600 text-xs uppercase tracking-wide">
                        <th className="px-4 py-2 font-semibold">Product</th>
                        <th className="px-4 py-2 font-semibold text-right">Qty</th>
                        <th className="px-4 py-2 font-semibold">Line notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {o.line_items.map((l, i) => (
                        <tr key={i} className="border-b border-gray-100 last:border-0">
                          <td className="px-4 py-2 text-gray-900 font-medium">{l.product}</td>
                          <td className="px-4 py-2 text-right text-gray-900 font-bold">{l.qty}</td>
                          <td className="px-4 py-2 text-gray-500 text-xs">{l.notes || ''}</td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-2 text-xs text-gray-500 uppercase tracking-wide">
                          {o.line_items.length} line{o.line_items.length === 1 ? '' : 's'}
                        </td>
                        <td className="px-4 py-2 text-right text-sm font-bold text-gray-900">{total}</td>
                        <td />
                      </tr>
                    </tfoot>
                  </table>
                  {(o.ship_to || o.notes) && (
                    <div className="px-4 py-3 bg-gray-50 border-t border-gray-200 text-sm space-y-1">
                      {o.ship_to && (
                        <div>
                          <span className="text-xs text-gray-500 uppercase tracking-wide">Ship to:</span>{' '}
                          <span className="text-gray-800">{o.ship_to}</span>
                        </div>
                      )}
                      {o.notes && (
                        <div>
                          <span className="text-xs text-gray-500 uppercase tracking-wide">Notes:</span>{' '}
                          <span className="text-gray-800">{o.notes}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
