import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Request Access | BuyGeogrid.com',
  description: 'Request access to premium features and resources from Asphalt Fabrics & Supply.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function RequestAccessPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Request Access
            </h1>
            <p className="text-xl text-gray-300">
              Get access to exclusive resources, pricing, and technical documentation
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto">

            {/* Information Box */}
            <div className="bg-green-50 border-2 border-[#00c97e] rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                What You'll Get Access To:
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#00c97e] mr-3 text-xl">✓</span>
                  <span>Technical specification sheets for all products</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00c97e] mr-3 text-xl">✓</span>
                  <span>Contractor pricing and volume discounts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00c97e] mr-3 text-xl">✓</span>
                  <span>Installation guides and best practices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00c97e] mr-3 text-xl">✓</span>
                  <span>Project estimation tools</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00c97e] mr-3 text-xl">✓</span>
                  <span>Direct support from our technical team</span>
                </li>
              </ul>
            </div>

            {/* Request Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Submit Your Request
              </h2>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00c97e] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00c97e] focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00c97e] focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00c97e] focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00c97e] focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Role *
                  </label>
                  <select
                    id="role"
                    name="role"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00c97e] focus:border-transparent"
                  >
                    <option value="">Select your role...</option>
                    <option value="contractor">Contractor</option>
                    <option value="engineer">Civil Engineer</option>
                    <option value="architect">Architect</option>
                    <option value="developer">Developer/Builder</option>
                    <option value="procurement">Procurement/Purchasing</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    What resources are you interested in? *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell us about your project or what you're looking for..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00c97e] focus:border-transparent"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#00c97e] hover:bg-[#00b36f] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg hover:shadow-xl"
                >
                  Submit Request
                </button>
              </form>

              <p className="text-sm text-gray-600 mt-6 text-center">
                We typically respond within 1 business day. For immediate assistance, call us at{' '}
                <a href="tel:4403681420" className="text-[#00c97e] hover:underline font-semibold">
                  (440) 368-1420
                </a>
              </p>
            </div>

            {/* Alternative Contact */}
            <div className="mt-8 text-center">
              <p className="text-gray-700 mb-4">
                Prefer to speak with someone directly?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-gray-900 bg-white hover:bg-gray-100 border-2 border-gray-900 rounded transition-colors duration-200"
                >
                  Contact Us
                </Link>
                <a
                  href="tel:4403681420"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-gray-900 hover:bg-gray-800 rounded transition-colors duration-200"
                >
                  Call (440) 368-1420
                </a>
              </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
