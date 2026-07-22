'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const FACILITY_TYPES = [
  'Loading dock',
  'Warehouse',
  'Manufacturing plant',
  'Distribution center',
  'Commercial parking',
  'Municipal',
  'Other',
];

const TIMELINE_OPTIONS = [
  'ASAP — production is affected',
  'Within 2 weeks',
  'Within a month',
  'Planning for next quarter',
  'Just gathering info',
];

const CONTACT_METHODS = ['Call', 'Text', 'Email', 'No preference'];

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function ConcreteRepairForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    city: '',
    facilityType: '',
    damagedArea: '',
    timeline: '',
    contactMethod: '',
    details: '',
    website: '', // honeypot
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/concrete-crack-sealing', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Failed to submit form');

      // Fire Google Ads / GA conversion event before redirect
      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag('event', 'generate_lead', {
          event_category: 'form',
          event_label: 'concrete_crack_sealing',
          value: 1,
        });
      }

      router.push('/concrete-crack-sealing/thank-you');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white rounded border border-gray-200 p-6 md:p-8 shadow-sm">
      <div className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: '#B08A00' }}>Request an assessment</div>
      <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900 leading-tight tracking-tight">
        Tell us about the concrete
      </h2>
      <p className="text-gray-600 text-sm mb-6">
        Free estimates within 24 hours. Text project photos to{' '}
        <a href="sms:+14403841897" className="font-semibold hover:underline" style={{ color: '#B08A00' }}>
          (440) 384-1897
        </a>{' '}
        for the fastest turnaround.
      </p>

      {error && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded text-red-700 text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
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
          <label htmlFor="website">Website (leave blank)</label>
          <input
            type="text"
            id="website"
            name="website"
            value={formData.website}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#F5C518] focus:ring-1 focus:ring-[#F5C518]"
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-1">Company</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#F5C518] focus:ring-1 focus:ring-[#F5C518]"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#F5C518] focus:ring-1 focus:ring-[#F5C518]"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">Phone *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#F5C518] focus:ring-1 focus:ring-[#F5C518]"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="city" className="block text-sm font-semibold text-gray-700 mb-1">Project City *</label>
            <input
              type="text"
              id="city"
              name="city"
              required
              value={formData.city}
              onChange={handleChange}
              placeholder="Cleveland, Akron, etc."
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#F5C518] focus:ring-1 focus:ring-[#F5C518]"
            />
          </div>
          <div>
            <label htmlFor="facilityType" className="block text-sm font-semibold text-gray-700 mb-1">Facility Type</label>
            <select
              id="facilityType"
              name="facilityType"
              value={formData.facilityType}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#F5C518] focus:ring-1 focus:ring-[#F5C518] bg-white"
            >
              <option value="">Select…</option>
              {FACILITY_TYPES.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="damagedArea" className="block text-sm font-semibold text-gray-700 mb-1">Approximate Damaged Area</label>
            <input
              type="text"
              id="damagedArea"
              name="damagedArea"
              value={formData.damagedArea}
              onChange={handleChange}
              placeholder="e.g. 200 linear ft of joint, 500 sq ft"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#F5C518] focus:ring-1 focus:ring-[#F5C518]"
            />
          </div>
          <div>
            <label htmlFor="timeline" className="block text-sm font-semibold text-gray-700 mb-1">Timeline</label>
            <select
              id="timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#F5C518] focus:ring-1 focus:ring-[#F5C518] bg-white"
            >
              <option value="">Select…</option>
              {TIMELINE_OPTIONS.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="contactMethod" className="block text-sm font-semibold text-gray-700 mb-1">
            Best way to reach you
          </label>
          <div className="flex flex-wrap gap-2">
            {CONTACT_METHODS.map((m) => (
              <label
                key={m}
                className={`inline-flex items-center gap-2 px-3 py-2 rounded border cursor-pointer text-sm transition-colors ${
                  formData.contactMethod === m
                    ? 'border-[#F5C518] bg-[#F5C518]/10 text-gray-900 font-semibold'
                    : 'border-gray-300 text-gray-700 hover:border-gray-400'
                }`}
              >
                <input
                  type="radio"
                  name="contactMethod"
                  value={m}
                  checked={formData.contactMethod === m}
                  onChange={handleChange}
                  className="sr-only"
                />
                {m}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="details" className="block text-sm font-semibold text-gray-700 mb-1">
            Details (optional)
          </label>
          <textarea
            id="details"
            name="details"
            rows={4}
            value={formData.details}
            onChange={handleChange}
            placeholder="Describe the concrete condition — cracked joints, failed sections, high-traffic area, downtime constraints, etc."
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#F5C518] focus:ring-1 focus:ring-[#F5C518]"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold disabled:opacity-50 disabled:cursor-not-allowed rounded transition-opacity hover:opacity-90 group"
          style={{ backgroundColor: '#F5C518', color: '#1a1a1a' }}
        >
          {isSubmitting ? 'Submitting…' : 'Request Assessment'}
          {!isSubmitting && <span className="transition-transform group-hover:translate-x-1">→</span>}
        </button>

        <p className="text-xs text-gray-500 text-center leading-relaxed">
          Free estimate · No obligation · We&apos;ll reach out within 24 hours.<br />
          By submitting, you agree to our{' '}
          <a href="/privacy-policy" className="underline hover:text-gray-700">Privacy Policy</a>.
        </p>
      </form>
    </div>
  );
}
