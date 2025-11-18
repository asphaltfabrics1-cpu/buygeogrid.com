'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ContactForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cityState: '',
    product: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form');
      }

      // Redirect to success page
      router.push('/contact/success');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white rounded border border-gray-200 p-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Request a Quote</h2>

      {error && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded text-red-700">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#00c97e] focus:border-[#00c97e] transition-all disabled:bg-gray-100"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#00c97e] focus:border-[#00c97e] transition-all disabled:bg-gray-100"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#00c97e] focus:border-[#00c97e] transition-all disabled:bg-gray-100"
          />
        </div>

        <div>
          <label htmlFor="cityState" className="block text-sm font-semibold text-gray-700 mb-2">
            City/State
          </label>
          <input
            type="text"
            id="cityState"
            name="cityState"
            placeholder="e.g., Cleveland, OH"
            value={formData.cityState}
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#00c97e] focus:border-[#00c97e] transition-all disabled:bg-gray-100"
          />
        </div>

        <div>
          <label htmlFor="product" className="block text-sm font-semibold text-gray-700 mb-2">
            Product Interest
          </label>
          <select
            id="product"
            name="product"
            value={formData.product}
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#00c97e] focus:border-[#00c97e] transition-all disabled:bg-gray-100"
          >
            <option value="">Select a product</option>
            <option value="Geogrids">Geogrids</option>
            <option value="Woven Fabrics">Woven Fabrics</option>
            <option value="Non-Woven Fabrics">Non-Woven Fabrics</option>
            <option value="Interlayers">Interlayers</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
            Tell Us About Your Project *
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            placeholder="What type of project are you working on? What products are you interested in?"
            value={formData.message}
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#00c97e] focus:border-[#00c97e] transition-all disabled:bg-gray-100"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#00c97e] hover:bg-[#00b36f] text-white px-8 py-3 rounded font-semibold transition-colors duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send Request'}
        </button>
      </form>
    </div>
  );
}
