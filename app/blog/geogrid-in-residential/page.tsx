import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Top 5 Uses for Tensar Geogrid in Residential Projects | BuyGeogrid Ohio',
  description: 'Discover the top 5 residential applications for Tensar Geogrid including driveways, retaining walls, patios, walkways, and foundations. Expert guide from Ohio.',
  keywords: ['Tensar Geogrid', 'residential Geogrid Ohio', 'driveway reinforcement Northern Ohio', 'retaining wall support Cleveland', 'Tensar residential applications'],
  openGraph: {
    title: 'Top 5 Tensar Geogrid Uses in Residential Projects | Ohio',
    description: 'Top 5 residential applications for Tensar Geogrid. Expert guide from Northern Ohio distributor.',
    type: 'article',
    publishedTime: '2025-06-30',
    authors: ['Asphalt Fabrics & Supply'],
    images: ['/images/tensar-geogrid-residential-uses-ohio.png'],
  },
};

export default function GeogridInResidential() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <PageHero
          title="Top 5 Uses for Tensar Geogrid in Residential Projects"
          description="Explore the most common residential applications of Tensar Geogrid and why contractors and homeowners prefer it for lasting results."
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
                  <img
                    src="/images/tensar-geogrid-residential-uses-ohio.png"
                    alt="Top 5 Uses for Tensar Geogrid in Residential Projects Northern Ohio"
                    className="w-full rounded border border-gray-200"
                  />
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Driveway Reinforcement</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Geogrid helps distribute vehicle loads evenly, minimize settlement, and reduce the need for
                  frequent maintenance. This produces driveways with reduced cracking and gravel migration,
                  saving homeowners money on repairs and ensuring a smooth, durable surface for years.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">2. Retaining Wall Support</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Installing Geogrid increases wall stability and lifespan by improving drainage and movement
                  resistance. Whether you're building a new retaining wall or reinforcing an existing one,
                  Geogrid provides the structural support needed to prevent failure and extend the wall's life.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">3. Patio and Outdoor Living Areas</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Placing Geogrid beneath pavers prevents settling and shifting caused by freeze-thaw cycles
                  or heavy foot traffic, maintaining a level surface over time. This is especially important
                  for creating beautiful, long-lasting outdoor spaces that can withstand seasonal changes and
                  regular use.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">4. Walkways and Garden Paths</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  The material stabilizes bases and reduces the need for thick subgrades, saving money and
                  installation time. Geogrid provides a stable foundation for walkways and garden paths,
                  preventing uneven settling and reducing maintenance requirements over the life of the project.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">5. Garage Slab or Shed Foundation Support</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Geogrid improves subgrade strength beneath concrete slabs, reducing cracking and providing
                  cost-effective foundation support. This is particularly valuable for garage floors and shed
                  foundations where soil conditions may not be ideal, helping to prevent costly foundation
                  repairs down the road.
                </p>

                <div className="mt-12 bg-blue-50 border-2 border-blue-300 rounded p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Why Tensar?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Tensar's proprietary grid design provides unmatched interlock and load distribution,
                    positioning it as a premium choice for long-term residential construction value. As an
                    authorized distributor, we provide genuine Tensar products with expert support.
                  </p>
                </div>

                <div className="mt-8 bg-green-50 border-2 border-[#00c97e] rounded p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Ready for Your Residential Project?</h3>
                  <p className="text-gray-700 mb-4">
                    Contact us for expert consultation, free DCP testing, and competitive pricing on Tensar Geogrids.
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
