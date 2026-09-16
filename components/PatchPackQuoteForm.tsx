'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const BUYER_TYPES = [
  'Contractor',
  'Property or facility manager',
  'Municipality or public works',
  'Commercial or industrial business',
  'School, church, or nonprofit',
  'Other',
] as const;

type BuyerType = typeof BUYER_TYPES[number] | '';
type ProductInterest = 'Standard Patch Packs' | 'Flex Patch Packs' | 'Not sure' | '';
type DeliveryPref = 'Yes' | 'No' | 'Not sure' | '';

type Mode = 'quote' | 'demo';

interface PatchPackQuoteFormProps {
  mode?: Mode;
  id?: string;
}

export default function PatchPackQuoteForm({ mode = 'quote', id }: PatchPackQuoteFormProps) {
  const isDemo = mode === 'demo';
  const router = useRouter();
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [buyerType, setBuyerType] = useState<BuyerType>('');
  const [repairCount, setRepairCount] = useState('');
  const [productInterest, setProductInterest] = useState<ProductInterest>('');
  const [needDelivery, setNeedDelivery] = useState<DeliveryPref>('');
  const [preferredDate, setPreferredDate] = useState('');
  const [message, setMessage] = useState('');
  const [website, setWebsite] = useState(''); // honeypot
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (submitting) return;
    setError('');

    if (!name.trim() || !email.trim() || !phone.trim()) {
      setError('Name, phone, and email are required.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email.');
      return;
    }

    setSubmitting(true);

    // Pack extra fields into the message so /api/contact captures them
    // in Monday.com + Gideon Dashboard without an API schema change.
    const detailLines = [
      isDemo ? 'Request type: Schedule a demonstration' : 'Request type: Quote request',
      company ? `Company/organization: ${company}` : null,
      buyerType ? `Buyer type: ${buyerType}` : null,
      repairCount ? `Approximate repair count: ${repairCount}` : null,
      productInterest ? `Product interest: ${productInterest}` : null,
      isDemo && preferredDate ? `Preferred demo date: ${preferredDate}` : null,
      !isDemo && needDelivery ? `Needs delivery: ${needDelivery}` : null,
      message ? `\nNotes:\n${message}` : null,
    ].filter(Boolean);

    const heading = isDemo ? 'Patch Packs demo request' : 'Patch Packs quote request';
    const packedMessage = `${heading}\n\n${detailLines.join('\n')}`.trim();
    const productLabel = isDemo
      ? `Patch Packs — Demo request${productInterest ? ` (${productInterest})` : ''}`
      : productInterest
        ? `Patch Packs — ${productInterest}`
        : 'Patch Packs';

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          cityState: location.trim(),
          product: productLabel,
          message: packedMessage,
          website,
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit request');
      }

      router.push(isDemo ? '/contact/success?type=demo' : '/contact/success');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
      setSubmitting(false);
    }
  }

  const inputClass =
    'w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-[#00c97e] focus:border-[#00c97e] transition-all disabled:bg-gray-100 text-base text-gray-900 placeholder:text-gray-400';

  const title = isDemo ? 'Schedule a Free On-Site Demonstration' : 'Request Patch Pack Pricing';
  const subtitle = isDemo
    ? 'Josh will follow up to confirm the location, availability, and a demonstration time. Submissions are subject to qualification and scheduling — an appointment is not automatically guaranteed.'
    : "No advertised pricing or online checkout. We'll review your repair needs and contact you with the appropriate product and quote.";
  const submitLabel = isDemo ? 'Schedule a Free Demo' : 'Get Patch Pack Pricing';

  return (
    <div id={id} className="bg-white rounded border border-gray-200 p-6 md:p-8 shadow-sm scroll-mt-24">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{title}</h2>
      <p className="text-sm text-gray-600 mb-6">{subtitle}</p>

      {error && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded text-red-700 text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5" autoComplete="off">
        {/* Honeypot */}
        <div
          aria-hidden="true"
          style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}
        >
          <label htmlFor={`pp-website-${mode}`}>Website (leave blank)</label>
          <input
            type="text"
            id={`pp-website-${mode}`}
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor={`pp-name-${mode}`} className="block text-sm font-semibold text-gray-800 mb-2">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              id={`pp-name-${mode}`}
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={submitting}
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor={`pp-company-${mode}`} className="block text-sm font-semibold text-gray-800 mb-2">
              Company or organization
            </label>
            <input
              id={`pp-company-${mode}`}
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              disabled={submitting}
              className={inputClass}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor={`pp-phone-${mode}`} className="block text-sm font-semibold text-gray-800 mb-2">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              id={`pp-phone-${mode}`}
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              disabled={submitting}
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor={`pp-email-${mode}`} className="block text-sm font-semibold text-gray-800 mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id={`pp-email-${mode}`}
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={submitting}
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label htmlFor={`pp-location-${mode}`} className="block text-sm font-semibold text-gray-800 mb-2">
            {isDemo ? 'Property address' : 'Project or property location'}
          </label>
          <input
            id={`pp-location-${mode}`}
            type="text"
            placeholder={isDemo ? 'Street, city, ZIP' : 'City, township, or facility address'}
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            disabled={submitting}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor={`pp-buyer-${mode}`} className="block text-sm font-semibold text-gray-800 mb-2">
            Buyer or organization type
          </label>
          <select
            id={`pp-buyer-${mode}`}
            value={buyerType}
            onChange={(e) => setBuyerType(e.target.value as BuyerType)}
            disabled={submitting}
            className={`${inputClass} bg-white`}
          >
            <option value="">Select one</option>
            {BUYER_TYPES.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor={`pp-count-${mode}`} className="block text-sm font-semibold text-gray-800 mb-2">
              Approximate number of potholes or repair areas
            </label>
            <input
              id={`pp-count-${mode}`}
              type="text"
              inputMode="numeric"
              placeholder="e.g. 12"
              value={repairCount}
              onChange={(e) => setRepairCount(e.target.value)}
              disabled={submitting}
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor={`pp-product-${mode}`} className="block text-sm font-semibold text-gray-800 mb-2">
              Product interest
            </label>
            <select
              id={`pp-product-${mode}`}
              value={productInterest}
              onChange={(e) => setProductInterest(e.target.value as ProductInterest)}
              disabled={submitting}
              className={`${inputClass} bg-white`}
            >
              <option value="">Select one</option>
              <option value="Standard Patch Packs">Standard Patch Packs</option>
              <option value="Flex Patch Packs">Flex Patch Packs</option>
              <option value="Not sure">Not sure</option>
            </select>
          </div>
        </div>

        {isDemo ? (
          <div>
            <label htmlFor={`pp-date-${mode}`} className="block text-sm font-semibold text-gray-800 mb-2">
              Preferred demonstration date
            </label>
            <input
              id={`pp-date-${mode}`}
              type="date"
              value={preferredDate}
              onChange={(e) => setPreferredDate(e.target.value)}
              disabled={submitting}
              className={inputClass}
            />
            <p className="text-xs text-gray-500 mt-2">
              We&apos;ll follow up to confirm a time that works for both teams.
            </p>
          </div>
        ) : (
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              Need delivery?
            </label>
            <div className="flex flex-wrap gap-4">
              {(['Yes', 'No', 'Not sure'] as const).map((opt) => (
                <label key={opt} className="inline-flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name={`needDelivery-${mode}`}
                    value={opt}
                    checked={needDelivery === opt}
                    onChange={() => setNeedDelivery(opt)}
                    disabled={submitting}
                    className="h-4 w-4 text-[#00c97e] border-gray-300 focus:ring-[#00c97e]"
                  />
                  <span className="text-gray-800">{opt}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        <div>
          <label htmlFor={`pp-message-${mode}`} className="block text-sm font-semibold text-gray-800 mb-2">
            Message
          </label>
          <textarea
            id={`pp-message-${mode}`}
            rows={4}
            placeholder={
              isDemo
                ? 'Tell us about the location, access, and the damaged area you want to see repaired.'
                : 'Anything else we should know about the repair areas, timing, or site access.'
            }
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            disabled={submitting}
            className={inputClass}
          />
          <p className="text-xs text-gray-500 mt-2">
            Have photos? Text them to{' '}
            <a href="sms:+14403681420" className="text-[#00c97e] font-semibold hover:underline">
              440-368-1420
            </a>{' '}
            or email{' '}
            <a href="mailto:jstone@asphaltfabrics.com" className="text-[#00c97e] font-semibold hover:underline">
              jstone@asphaltfabrics.com
            </a>
            .
          </p>
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="w-full inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-[#00c97e] hover:bg-[#00b36f] rounded transition-colors duration-200 disabled:opacity-60"
        >
          {submitting ? 'Sending…' : submitLabel}
        </button>

        {isDemo && (
          <p className="text-xs text-gray-500 text-center">
            After you submit, Josh will contact you to confirm the location and schedule a demonstration time.
          </p>
        )}
      </form>
    </div>
  );
}
