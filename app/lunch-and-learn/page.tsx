import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Lunch & Learn Sessions | Geogrid Training with PDH Credits | Ohio',
  description: 'Schedule a free lunch and learn session on Tensar geogrids and geotextiles. We provide lunch, expert training, and PDH credits for engineers in Cleveland, Akron, Columbus, and throughout Ohio.',
  keywords: [
    'free lunch and learn Ohio',
    'geogrid training',
    'PDH credits Cleveland',
    'civil engineering continuing education',
    'Tensar training Ohio',
    'lunch and learn Akron',
    'geotextile presentation',
    'free engineering training',
    'professional development hours',
    'Ohio civil engineering PDH'
  ],
  openGraph: {
    title: 'Free Lunch & Learn Sessions | Geogrid Training with PDH Credits',
    description: 'Free lunch, expert training on geogrids and geotextiles, plus PDH credits for engineers in Ohio.',
    images: ['/images/lunch-and-learn/lunch-and-learn-hero.jpg'],
  },
};

export default function LunchAndLearn() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <PageHero
          title="Free Lunch & Learn Sessions"
          description="Expert training on Tensar geogrids, geotextiles, and paving interlayers. We provide lunch, professional development hours (PDH credits), and the latest product knowledge—completely free for your team."
          ctaText="Schedule Your Session"
          ctaLink="/contact"
          secondaryCtaText="Call (440) 368-1420"
          secondaryCtaLink="tel:4403681420"
        />

        {/* What's Included Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 text-center">
              What's Included in Your Free Lunch & Learn
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-16 h-16 bg-[#00c97e] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Free Lunch</h3>
                <p className="text-gray-700 leading-relaxed">
                  We buy lunch for your entire team—individual orders from wherever you want. Breakfast, lunch, or snacks—your choice!
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-16 h-16 bg-[#00c97e] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">PDH Credits</h3>
                <p className="text-gray-700 leading-relaxed">
                  Earn Professional Development Hours (PDH credits) for engineers who need continuing education credits.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-16 h-16 bg-[#00c97e] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Expert Training</h3>
                <p className="text-gray-700 leading-relaxed">
                  1-hour presentation covering the latest Tensar geogrid products, interlayer technology, and real-world applications.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Topics Covered Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 text-center">
              Topics We Cover
            </h2>

            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <ul className="grid md:grid-cols-2 gap-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#00c97e] mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Latest Tensar geogrid innovations (InterAx®, TriAx®, H-Series™)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#00c97e] mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Solmax Mirafi geotextile applications</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#00c97e] mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Paving interlayer technology (Petrotac)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#00c97e] mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Soil stabilization best practices</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#00c97e] mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Cost savings and aggregate reduction strategies</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#00c97e] mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Installation techniques and common mistakes</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#00c97e] mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Real-world case studies from Ohio projects</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#00c97e] mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Q&A with geosynthetic experts</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Photo Gallery Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 text-center">
              Past Lunch & Learn Sessions
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-lg overflow-hidden h-64">
                <img
                  src="/images/lunch-and-learn/IMG_0158.jpeg"
                  alt="Lunch & Learn Session"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden h-64">
                <img
                  src="/images/lunch-and-learn/IMG_0161.jpeg"
                  alt="Lunch & Learn Presentation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden h-64">
                <img
                  src="/images/lunch-and-learn/IMG_0162.jpeg"
                  alt="Lunch & Learn Training"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 bg-[#1a1a1a] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Schedule Your Free Lunch & Learn?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Perfect for engineering firms, construction companies, municipal departments, and project teams. We come to you—anywhere in Ohio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-[#00c97e] hover:bg-[#00b36f] rounded transition-colors duration-200"
              >
                Schedule Your Session
              </Link>
              <Link
                href="tel:4403681420"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white border-2 border-white/30 hover:border-white/50 rounded transition-colors duration-200"
              >
                (440) 368-1420
              </Link>
            </div>

            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-gray-400 text-sm">
                <strong className="text-white">Serving:</strong> Cleveland, Akron, Columbus, Cincinnati, Toledo, Youngstown, Dayton, and all of Ohio
              </p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
