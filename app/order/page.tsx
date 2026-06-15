'use client';

import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';

const PRODUCT_CATALOG = [
  // Petrotac
  'Petrotac 1ft Roll',
  'Petrotac 1.5ft Roll',
  'Petrotac 4ft Roll',
  // Patch Packs
  'Patch Packs - Standard',
  'Patch Packs - Flex',
  // Tensar Geogrid
  'Tensar NX850',
  'Tensar NX750',
  'Tensar NX650',
  'Tensar HX165',
  'Tensar HX145',
  'Tensar TX190',
  'Tensar TX-Type 2',
  'Tensar BX1200',
  'Tensar BX1300',
  'Tensar SQ2020',
  'Tensar NXL',
  // Mirafi Geotextile
  'Mirafi 500X (Woven)',
  'Mirafi 600X (Woven)',
  'Mirafi 135N (Nonwoven)',
  'Mirafi 140N (Nonwoven)',
  'Mirafi 180N (Nonwoven)',
  // Other
  'Other (specify in notes)',
] as const;

interface LineItem {
  product: string;
  qty: string;
  notes: string;
}

function newLine(): LineItem {
  return { product: '', qty: '', notes: '' };
}

export default function OrderPage() {
  const searchParams = useSearchParams();
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [shipTo, setShipTo] = useState('');
  const [lines, setLines] = useState<LineItem[]>([newLine()]);
  const [notes, setNotes] = useState('');
  const [website, setWebsite] = useState(''); // honeypot
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<{ orderNumber: string } | null>(null);
  const [error, setError] = useState('');
  const nameRef = useRef<HTMLInputElement>(null);

  // Source: ?event= param if present, otherwise dated trade-show tag
  const rawEvent = searchParams?.get('event')?.trim() || '';
  const eventSlug = rawEvent
    ? rawEvent.replace(/[^a-zA-Z0-9-_]+/g, '-').replace(/^-+|-+$/g, '')
    : '';
  const sourceTag = eventSlug
    ? eventSlug
    : `trade-show-order-${new Date().toISOString().slice(0, 10)}`;

  // Auto-reset after success so the next person at the booth can use it
  useEffect(() => {
    if (!success) return;
    const t = setTimeout(() => {
      setSuccess(null);
      setName('');
      setCompany('');
      setEmail('');
      setPhone('');
      setShipTo('');
      setLines([newLine()]);
      setNotes('');
      setError('');
      nameRef.current?.focus();
    }, 5000);
    return () => clearTimeout(t);
  }, [success]);

  function updateLine(i: number, patch: Partial<LineItem>) {
    setLines((prev) => prev.map((l, idx) => (idx === i ? { ...l, ...patch } : l)));
  }
  function addLine() {
    setLines((prev) => [...prev, newLine()]);
  }
  function removeLine(i: number) {
    setLines((prev) => (prev.length <= 1 ? [newLine()] : prev.filter((_, idx) => idx !== i)));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (submitting) return;
    setError('');

    if (!name.trim()) {
      setError('Name is required.');
      return;
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    const validLines = lines
      .filter((l) => l.product.trim() && parseFloat(l.qty) > 0)
      .map((l) => ({
        product: l.product.trim(),
        qty: Math.round(parseFloat(l.qty)),
        notes: l.notes.trim() || undefined,
      }));
    if (validLines.length === 0) {
      setError('Add at least one product with a quantity.');
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch('/api/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customer_name: name.trim(),
          customer_company: company.trim() || undefined,
          customer_email: email.trim(),
          customer_phone: phone.trim() || undefined,
          ship_to: shipTo.trim() || undefined,
          line_items: validLines,
          notes: notes.trim() || undefined,
          source: sourceTag,
          website,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Submission failed');
      setSuccess({ orderNumber: data.order_number });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex flex-col">
      <main className="flex-1 px-6 py-8 flex flex-col items-center">
        <div className="w-full max-w-2xl">
          <div className="flex justify-center mb-4">
            <Image
              src="/images/logos/afsupplylogo_transparent.png"
              alt="Asphalt Fabrics & Supply"
              width={100}
              height={100}
              priority
            />
          </div>

          {success ? (
            <div className="bg-[#00c97e] text-white rounded-2xl p-10 text-center shadow-lg">
              <div className="text-7xl mb-3">✓</div>
              <h2 className="text-3xl font-bold mb-2">Order received!</h2>
              <p className="text-white/95 text-lg mb-2">
                Order number:{' '}
                <strong className="bg-black/20 px-3 py-1 rounded">
                  {success.orderNumber}
                </strong>
              </p>
              <p className="text-white/90 text-base mt-4">
                Confirmation email{name ? ` to ${name.split(' ')[0]}` : ''} is on
                its way. We&apos;ll follow up shortly to confirm pricing &amp;
                delivery.
              </p>
              <p className="text-white/70 text-sm mt-6">
                Ready for the next person...
              </p>
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-200">
              <h1 className="text-3xl font-bold text-gray-900 text-center mb-1">
                Place an Order
              </h1>
              <p className="text-gray-600 text-center mb-6 text-base">
                Tell us what you need — we&apos;ll follow up to confirm pricing
                and delivery.
              </p>

              {error && (
                <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5" autoComplete="off">
                {/* Honeypot */}
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
                  <label htmlFor="order-website">Website (leave blank)</label>
                  <input
                    type="text"
                    id="order-website"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </div>

                {/* Customer info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      ref={nameRef}
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      autoComplete="off"
                      autoCapitalize="words"
                      disabled={submitting}
                      className="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-lg focus:border-[#00c97e] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Company
                    </label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      autoComplete="off"
                      autoCapitalize="words"
                      disabled={submitting}
                      className="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-lg focus:border-[#00c97e] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      inputMode="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      autoComplete="off"
                      autoCorrect="off"
                      autoCapitalize="off"
                      spellCheck={false}
                      disabled={submitting}
                      className="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-lg focus:border-[#00c97e] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      inputMode="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      autoComplete="off"
                      disabled={submitting}
                      className="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-lg focus:border-[#00c97e] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Delivery / ship-to address
                  </label>
                  <input
                    type="text"
                    value={shipTo}
                    onChange={(e) => setShipTo(e.target.value)}
                    placeholder="Job site or company address"
                    autoComplete="off"
                    disabled={submitting}
                    className="w-full px-4 py-3 text-base border-2 border-gray-300 rounded-lg focus:border-[#00c97e] focus:outline-none"
                  />
                </div>

                {/* Line items */}
                <div className="border-t border-gray-200 pt-5">
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-base font-semibold text-gray-700">
                      Products
                    </label>
                    <button
                      type="button"
                      onClick={addLine}
                      disabled={submitting}
                      className="px-3 py-1.5 text-sm border border-gray-300 hover:border-[#00c97e] hover:text-[#00c97e] text-gray-700 rounded font-semibold"
                    >
                      + Add Line
                    </button>
                  </div>
                  <div className="space-y-3">
                    {lines.map((line, i) => (
                      <div key={i} className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                        <div className="grid grid-cols-12 gap-2 items-end">
                          <div className="col-span-12 sm:col-span-7">
                            <label className="block text-xs text-gray-600 mb-1">Product</label>
                            <select
                              value={line.product}
                              onChange={(e) => updateLine(i, { product: e.target.value })}
                              disabled={submitting}
                              className="w-full px-3 py-3 text-base border-2 border-gray-300 rounded-lg focus:border-[#00c97e] focus:outline-none bg-white"
                            >
                              <option value="">— Select —</option>
                              {PRODUCT_CATALOG.map((p) => (
                                <option key={p} value={p}>{p}</option>
                              ))}
                            </select>
                          </div>
                          <div className="col-span-8 sm:col-span-3">
                            <label className="block text-xs text-gray-600 mb-1">Quantity</label>
                            <input
                              type="number"
                              inputMode="numeric"
                              min="1"
                              value={line.qty}
                              onChange={(e) => updateLine(i, { qty: e.target.value })}
                              disabled={submitting}
                              className="w-full px-3 py-3 text-base border-2 border-gray-300 rounded-lg focus:border-[#00c97e] focus:outline-none"
                            />
                          </div>
                          <div className="col-span-4 sm:col-span-2 flex justify-end">
                            <button
                              type="button"
                              onClick={() => removeLine(i)}
                              disabled={submitting}
                              aria-label={`Remove line ${i + 1}`}
                              className="px-3 py-3 text-sm border border-gray-300 hover:border-red-400 hover:text-red-600 text-gray-500 rounded font-bold"
                            >
                              ×
                            </button>
                          </div>
                          <div className="col-span-12">
                            <input
                              type="text"
                              value={line.notes}
                              onChange={(e) => updateLine(i, { notes: e.target.value })}
                              placeholder="Line notes (color, size, special instructions)"
                              autoComplete="off"
                              disabled={submitting}
                              className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:border-[#00c97e] focus:outline-none"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Order notes
                  </label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={3}
                    placeholder="Anything else we should know — timing, deadlines, etc."
                    disabled={submitting}
                    className="w-full px-4 py-3 text-base border-2 border-gray-300 rounded-lg focus:border-[#00c97e] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-[#00c97e] hover:bg-[#00b36f] disabled:bg-gray-400 text-white text-xl font-bold py-5 rounded-lg transition-colors touch-manipulation"
                >
                  {submitting ? 'Submitting...' : 'Place Order'}
                </button>

                <p className="text-center text-xs text-gray-500">
                  This is a request — we&apos;ll follow up to confirm pricing
                  &amp; delivery before anything ships.
                </p>
              </form>
            </div>
          )}

          <p className="text-center text-xs text-gray-400 mt-4">
            Campaign: {sourceTag}
          </p>
        </div>
      </main>
    </div>
  );
}
