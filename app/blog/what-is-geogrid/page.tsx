import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What is Geogrid? How It Works & When You Need It | BuyGeogrid Ohio',
  description: 'Learn what Geogrid is, how it works, and when you need it for soil stabilization and pavement projects. Expert guide from Ohio Geogrid distributor.',
  keywords: ['what is Geogrid', 'Geogrid explained', 'soil stabilization', 'pavement reinforcement', 'Tensar Ohio', 'Geogrid Northern Ohio'],
  openGraph: {
    title: 'What is Geogrid? Expert Guide from Ohio Distributor',
    description: 'Learn what Geogrid is, how it works, and when you need it. Expert guide from Northern Ohio\'s Tensar distributor.',
    type: 'article',
    publishedTime: '2025-06-02',
    authors: ['Asphalt Fabrics & Supply'],
    images: ['/images/logos/afsupplylogo_transparent.png'],
  },
};

export default function WhatIsGeogrid() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <PageHero
          title="What is Geogrid? How It Works & When You Need It"
          description="A comprehensive guide to understanding Geogrid, its functionality, and practical applications for construction professionals and homeowners."
          ctaText="Request a Quote"
          ctaLink="/contact"
          secondaryCtaText="Call (440) 368-1420"
          secondaryCtaLink="tel:4403681420"
        />

        <article className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded border border-gray-200 p-8">
              <div className="prose prose-lg max-w-none">
                <div className="mb-8">
                  <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                      className="absolute top-0 left-0 w-full h-full rounded border border-gray-200"
                      src="https://www.youtube.com/embed/NdJIWoQLFA0"
                      title="What is Geogrid?"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is Geogrid?</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Geogrid consists of polymer materials manufactured in a grid pattern with open apertures.
                  These materials allow soil, aggregate, or base materials to interlock through the grid.
                  Unlike standard geotextiles, Geogrid specifically reinforces materials and distributes loads
                  effectively while reducing rutting and settlement.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">How It Works</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  The reinforcement mechanism relies on mechanical interlock—when materials are compacted into
                  the grid structure, they lock together to improve shear strength and prevent shifting.
                  Installation typically involves layering the grid with aggregate and sometimes pairing it
                  with geotextile fabric.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Types Available</h2>
                <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                  <li><strong>Biaxial:</strong> Two-directional strength for driveways</li>
                  <li><strong>Triaxial:</strong> Multi-directional with triangular apertures for advanced applications</li>
                  <li><strong>Uniaxial:</strong> Single-direction strength for walls and slopes</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Key Applications</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Geogrid is used in five primary applications:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                  <li>Gravel driveways on problematic soil</li>
                  <li>Retaining walls exceeding 3 feet</li>
                  <li>Parking areas</li>
                  <li>Paver installations</li>
                  <li>Construction platforms</li>
                </ul>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Each application benefits from improved load capacity and reduced maintenance needs.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Benefits</h2>
                <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                  <li>Improved bearing capacity</li>
                  <li>Reduced material requirements</li>
                  <li>Minimized repairs</li>
                  <li>Erosion prevention</li>
                  <li>Extended pavement lifespan</li>
                </ul>

                <div className="mt-12 bg-green-50 border-2 border-[#00c97e] rounded p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Ready to Get Started?</h3>
                  <p className="text-gray-700 mb-4">
                    Contact us for expert consultation and competitive pricing on Tensar Geogrids for your project.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-[#00c97e] hover:bg-[#00b36f] rounded transition-colors duration-200"
                    >
                      Request a Quote
                    </Link>
                    <Link
                      href="/geogrid"
                      className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-gray-700 border-2 border-gray-300 hover:border-gray-400 rounded transition-colors duration-200"
                    >
                      View Products
                    </Link>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <Link
                    href="/blog"
                    className="text-[#00c97e] hover:text-[#00b36f] font-semibold transition-colors"
                  >
                    ← Back to Blog
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
