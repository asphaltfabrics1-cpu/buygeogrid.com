import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Geogrid vs Cement Stabilization: Which Is Better? | BuyGeogrid Ohio',
  description: 'Compare Geogrid vs cement stabilization for soil reinforcement. Learn the pros, cons, cost, and best applications for each method from Ohio experts.',
  keywords: ['Geogrid vs cement', 'soil stabilization comparison', 'cement stabilization', 'Tensar Geogrid benefits', 'Ohio soil stabilization'],
  openGraph: {
    title: 'Geogrid vs Cement Stabilization | Expert Comparison Ohio',
    description: 'Compare Geogrid vs cement stabilization. Expert analysis from Northern Ohio\'s Tensar distributor.',
    type: 'article',
    publishedTime: '2025-06-16',
    authors: ['Asphalt Fabrics & Supply'],
    images: ['/images/logos/afsupplylogo_transparent.png'],
  },
};

export default function GeogridVsCement() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <PageHero
          title="Geogrid vs Cement Stabilization: Which Is Better for Soil Reinforcement?"
          description="A detailed comparison of two popular soil stabilization methods to help you choose the right solution for your construction project."
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
                      src="https://www.youtube.com/embed/qj9Gjgz73LE"
                      title="Geogrid vs Cement Stabilization"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Cement Stabilization</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Cement stabilization involves mixing Portland cement into soil. This approach requires mixing,
                  equipment, and curing time and carries a high carbon footprint due to cement production.
                  It provides permanent, rigid support ideal for heavy-duty applications.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Geogrid Reinforcement</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Geogrid reinforcement uses geosynthetic grids placed under aggregate materials. It's ideal
                  for gravel driveways, patios, roads, and parking areas with fast installation and minimal labor.
                  This method is more eco-friendly and offers flexible, long-lasting reinforcement.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Key Comparison Points</h2>

                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full border border-gray-300">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-900">Factor</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-900">Geogrid</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-900">Cement Stabilization</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">Installation</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-700">Fast installation with minimal labor</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-700">Requires mixing, equipment, and curing time</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">Weather Resistance</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-700">Flexible, adapts to freeze-thaw cycles</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-700">Rigid, can crack in extreme conditions</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">Load Distribution</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-700">Excellent lateral load distribution</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-700">Provides vertical support</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">Environmental Impact</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-700">Low carbon footprint, eco-friendly</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-700">High carbon footprint due to cement</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">Cost</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-700">Lower installation and material costs</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-700">Higher due to cement and labor</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">When to Choose Each Method</h2>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Choose Geogrid For:</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Faster installation with no curing time</li>
                    <li>Lower costs and reduced environmental impact</li>
                    <li>Flexible applications like driveways, patios, and parking areas</li>
                    <li>Projects requiring adaptability to soil movement</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Choose Cement Stabilization For:</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Permanent, rigid support for heavy-duty applications</li>
                    <li>Highways, airports, and industrial facilities</li>
                    <li>Projects where maximum vertical load capacity is critical</li>
                  </ul>
                </div>

                <div className="mt-12 bg-green-50 border-2 border-[#00c97e] rounded p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Need Help Choosing?</h3>
                  <p className="text-gray-700 mb-4">
                    Contact our experts for a free consultation and DCP testing to determine the best solution for your project.
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
