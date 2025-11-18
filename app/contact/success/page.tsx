import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Thank You | Contact Form Submitted | BuyGeogrid.com',
  description: 'Thank you for contacting us. We will get back to you shortly with a quote.',
};

export default function ContactSuccess() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-3xl mx-auto text-center">
            {/* Success Icon */}
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-[#00c97e] rounded-full">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>

            {/* Success Message */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Thank You!
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              We've received your quote request and will get back to you shortly.
            </p>

            {/* What's Next Box */}
            <div className="bg-white border border-gray-200 rounded p-8 mb-8 text-left">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What Happens Next?</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#00c97e] text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">We Review Your Request</h3>
                    <p className="text-gray-700">Our team will review your project requirements and prepare a detailed quote.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#00c97e] text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">We Contact You</h3>
                    <p className="text-gray-700">Expect to hear from us within 24 hours (usually much sooner during business hours).</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#00c97e] text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Expert Consultation</h3>
                    <p className="text-gray-700">We'll discuss your project needs, recommend the right products, and provide pricing.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Need Help Faster Box */}
            <div className="bg-green-50 border-2 border-[#00c97e] rounded p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Need Help Faster?</h3>
              <p className="text-gray-700 mb-4">
                For immediate assistance or urgent projects, give us a call:
              </p>
              <a
                href="tel:4403681420"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-[#00c97e] hover:bg-[#00b36f] rounded transition-colors duration-200"
              >
                Call (440) 368-1420
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-[#1a1a1a] hover:bg-gray-800 rounded transition-colors duration-200"
              >
                Back to Home
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-gray-900 border-2 border-gray-300 hover:border-gray-400 rounded transition-colors duration-200"
              >
                Read Our Blog
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
