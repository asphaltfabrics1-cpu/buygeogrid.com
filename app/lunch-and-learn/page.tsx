import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Lunch & Learn | Geogrid Training Ohio',
  description: 'Free lunch & learn sessions on geogrids. PDH credits for engineers. Cleveland, Akron, Columbus.',
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
  alternates: {
    canonical: 'https://www.buygeogrid.com/lunch-and-learn',
  },
  openGraph: {
    title: 'Free Lunch & Learn | Geogrid Training Ohio',
    description: 'Free lunch, expert training on geogrids, plus PDH credits for engineers.',
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
        <section className="py-20 md:py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <Reveal className="mb-12 text-center">
              <div className="text-[#00c97e] text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3">What's included</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight tracking-tight">
                What's Included in Your Free Lunch & Learn
              </h2>
            </Reveal>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Reveal delay={120}>
                <div className="bg-gray-50 rounded-lg p-8 border border-gray-200 h-full">
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
              </Reveal>

              <Reveal delay={240}>
                <div className="bg-gray-50 rounded-lg p-8 border border-gray-200 h-full">
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
              </Reveal>

              <Reveal delay={360}>
                <div className="bg-gray-50 rounded-lg p-8 border border-gray-200 h-full">
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
              </Reveal>
            </div>
          </div>
        </section>

        {/* Who Is This For Section */}
        <section className="py-20 md:py-24 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <Reveal className="text-center">
              <div className="text-[#00c97e] text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3">Who it's for</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 leading-tight tracking-tight">
                Who Is This For?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our Lunch & Learn sessions are designed for engineering firms, civil contractors, municipal public works departments, and project teams who work with pavement, site development, or earthwork. Whether you&apos;re specifying geosynthetics for the first time or looking to stay current on the latest products, we tailor the presentation to your team&apos;s experience level and project needs.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-20 md:py-24 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <Reveal>
            <figure className="bg-gray-50 border border-gray-200 rounded p-8 md:p-10">
              <div className="flex items-center mb-4" aria-label="5 out of 5 stars">
                {[0,1,2,3,4].map((i) => (
                  <svg key={i} className="w-6 h-6 text-[#f5a623]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.367 2.446a1 1 0 00-.364 1.118l1.286 3.957c.3.922-.755 1.688-1.54 1.118l-3.367-2.446a1 1 0 00-1.176 0l-3.367 2.446c-.784.57-1.838-.196-1.539-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.098 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-lg text-gray-800 leading-relaxed mb-6">
                &ldquo;We also appreciate their lunch-and-learn sessions. They are always well-organized, informative, and a great opportunity to earn CE credits.&rdquo;
              </blockquote>
              <figcaption className="text-gray-700 font-semibold">
                — <a href="https://engineeredtechnicalsolutions.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#00c97e] underline decoration-gray-300 hover:decoration-[#00c97e] underline-offset-4">Engineered Technical Solutions</a>
                <span className="block text-sm text-gray-500 font-normal mt-1">Google Review</span>
              </figcaption>
            </figure>
            </Reveal>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 md:py-24 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <Reveal className="text-center">
              <div className="text-[#00c97e] text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3">How it works</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 leading-tight tracking-tight">
                How It Works
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Scheduling is simple. Contact us with your preferred date, time, and location—we come to your office anywhere in Northern Ohio. Let us know your team size and any specific topics you&apos;d like covered. We handle the rest: ordering lunch, preparing the presentation, and providing PDH documentation for engineers who need continuing education credits.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Why We Offer This Free Section */}
        <section className="py-20 md:py-24 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <Reveal className="text-center">
              <div className="text-[#00c97e] text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3">Why free</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 leading-tight tracking-tight">
                Why We Offer This Free
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We believe in building long-term partnerships, not just making sales. When your team understands how geosynthetics work and when to use them, you make better decisions for your projects—and that benefits everyone. Our Lunch & Learn program is an investment in education that pays off through stronger relationships, better project outcomes, and fewer costly mistakes in the field. No sales pitch, just practical knowledge you can apply immediately.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Topics Covered Section */}
        <section className="py-20 md:py-24 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <Reveal className="mb-8 text-center">
              <div className="text-[#00c97e] text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3">Topics</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight tracking-tight">
                Topics We Cover
              </h2>
            </Reveal>

            <Reveal delay={120}>
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
            </Reveal>
          </div>
        </section>

        {/* Photo Gallery Section */}
        <section className="py-20 md:py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <Reveal className="mb-8 text-center">
              <div className="text-[#00c97e] text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3">Photos</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight tracking-tight">
                Past Lunch & Learn Sessions
              </h2>
            </Reveal>

            <div className="grid md:grid-cols-3 gap-6">
              <Reveal delay={120}>
                <div className="rounded-lg overflow-hidden h-64">
                  <img
                    src="/images/lunch-and-learn/IMG_0158.jpeg"
                    alt="Lunch & Learn Session"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Reveal>
              <Reveal delay={240}>
                <div className="rounded-lg overflow-hidden h-64">
                  <img
                    src="/images/lunch-and-learn/IMG_0161.jpeg"
                    alt="Lunch & Learn Presentation"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Reveal>
              <Reveal delay={360}>
                <div className="rounded-lg overflow-hidden h-64">
                  <img
                    src="/images/lunch-and-learn/IMG_0162.jpeg"
                    alt="Lunch & Learn Training"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-24 px-6 bg-[#1a1a1a] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight tracking-tight">
                Ready to Schedule Your Free Lunch & Learn?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Perfect for engineering firms, construction companies, municipal departments, and project teams. We come to you—anywhere in Ohio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center sm:items-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-[#00c97e] hover:bg-[#00b36f] rounded transition-colors duration-200 group"
                >
                  Schedule Your Session
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
                <Link
                  href="tel:4403681420"
                  className="inline-flex items-center gap-2 text-base font-semibold text-white hover:text-[#00c97e] transition-colors group"
                >
                  <span>(440) 368-1420</span>
                  <span className="opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
                </Link>
              </div>

              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-gray-400 text-sm">
                  <strong className="text-white">Serving:</strong> Cleveland, Akron, Columbus, Cincinnati, Toledo, Youngstown, Dayton, and all of Ohio
                </p>
              </div>
            </Reveal>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
