import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resources | Geogrid & Geotextile Information | BuyGeogrid.com',
  description: 'Access our comprehensive resources including FAQ, blog articles, project gallery, and technical information about geogrids, geotextiles, and civil engineering solutions in Ohio.',
  keywords: ['geogrid resources', 'geotextile information', 'civil engineering resources', 'geogrid FAQ', 'geotextile blog', 'project gallery', 'Ohio geogrid information'],
  openGraph: {
    title: 'Resources | Geogrid & Geotextile Information',
    description: 'Access FAQ, blog articles, project gallery, and technical information about geogrids and geotextiles.',
  },
};

export default function Resources() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <PageHero
          title="Resources & Information"
          description="Everything you need to know about geogrids, geotextiles, and geosynthetic solutions. Browse our FAQ, read expert articles, and view project examples."
          ctaText="Contact Us"
          ctaLink="/contact"
          secondaryCtaText="Call (440) 368-1420"
          secondaryCtaLink="tel:4403681420"
        />

        {/* Resources Grid */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

              {/* FAQ Card */}
              <Link href="/faq" className="group">
                <div className="bg-white rounded-lg border-2 border-gray-200 p-8 h-full hover:border-[#00c97e] transition-colors">
                  <div className="w-16 h-16 bg-[#00c97e] rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-[#00c97e] transition-colors">FAQ</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Common questions about geogrids, geotextiles, installation, and applications. Get quick answers to technical questions.
                  </p>
                  <span className="text-[#00c97e] font-semibold group-hover:underline">
                    View FAQ →
                  </span>
                </div>
              </Link>

              {/* Blog Card */}
              <Link href="/blog" className="group">
                <div className="bg-white rounded-lg border-2 border-gray-200 p-8 h-full hover:border-[#00c97e] transition-colors">
                  <div className="w-16 h-16 bg-[#00c97e] rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-[#00c97e] transition-colors">Blog</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Expert articles, industry insights, and project case studies. Learn about the latest in geosynthetic technology and applications.
                  </p>
                  <span className="text-[#00c97e] font-semibold group-hover:underline">
                    Read Blog →
                  </span>
                </div>
              </Link>

              {/* Gallery Card */}
              <Link href="/gallery" className="group">
                <div className="bg-white rounded-lg border-2 border-gray-200 p-8 h-full hover:border-[#00c97e] transition-colors">
                  <div className="w-16 h-16 bg-[#00c97e] rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-[#00c97e] transition-colors">Gallery</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    View real-world applications and project photos. See geogrids and geotextiles in action across various construction projects.
                  </p>
                  <span className="text-[#00c97e] font-semibold group-hover:underline">
                    View Gallery →
                  </span>
                </div>
              </Link>

              {/* Lunch & Learn Card */}
              <Link href="/lunch-and-learn" className="group">
                <div className="bg-white rounded-lg border-2 border-gray-200 p-8 h-full hover:border-[#00c97e] transition-colors">
                  <div className="w-16 h-16 bg-[#00c97e] rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-[#00c97e] transition-colors">Lunch & Learn</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Schedule a free training session with lunch and PDH credits. Expert presentations on geogrids and geotextiles for your team.
                  </p>
                  <span className="text-[#00c97e] font-semibold group-hover:underline">
                    Schedule Session →
                  </span>
                </div>
              </Link>

            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 text-center">Technical Information</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Product Spec Sheets</h3>
                <p className="text-gray-700 mb-4">
                  Download detailed technical specifications for all Tensar geogrids and Solmax Mirafi fabrics.
                </p>
                <Link href="/geogrid" className="text-[#00c97e] font-semibold hover:underline">
                  Browse Products →
                </Link>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Free DCP Testing</h3>
                <p className="text-gray-700 mb-4">
                  Request free soil analysis to determine the right geogrid solution for your project.
                </p>
                <Link href="/contact" className="text-[#00c97e] font-semibold hover:underline">
                  Request Testing →
                </Link>
              </div>
            </div>

            <div className="bg-green-50 border-2 border-[#00c97e] rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Need Expert Guidance?</h3>
              <p className="text-gray-700 mb-6 text-lg">
                Our team is here to help with product selection, installation guidance, and technical support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-[#00c97e] hover:bg-[#00b36f] rounded transition-colors duration-200"
                >
                  Contact Us
                </Link>
                <Link
                  href="tel:4403681420"
                  className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-gray-900 border-2 border-gray-900 hover:bg-gray-900 hover:text-white rounded transition-colors duration-200"
                >
                  (440) 368-1420
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
