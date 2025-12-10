import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import ProductDetail from '@/components/ProductDetail';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tensar TX Type 2 Geogrid Ohio | TriAx',
  description: 'Tensar TriAx TX Type 2 heavy-duty Geogrid for airports, ports and industrial paving. Maximum load capacity. Free DCP soil testing. Cleveland, Akron.',
  keywords: ['Tensar TX Type 2 Ohio', 'TriAx Type 2 Cleveland', 'airport Geogrid Northern Ohio', 'industrial paving Geogrid Akron', 'heavy-duty TriAx Ohio', 'port Geogrid Cleveland'],
  alternates: {
    canonical: 'https://www.buygeogrid.com/geogrid/tx-type-2',
  },
  openGraph: {
    title: 'Tensar TX Type 2 Geogrid Ohio | TriAx',
    description: 'Tensar TX Type 2 for airports and industrial paving. Ohio distributor.',
    images: ['/images/products/solution-triax.png'],
  },
};

export default function TXType2() {
  const features = [
    { text: 'Heavy-duty TriAx technology' },
    { text: 'Maximum aggregate interlock' },
    { text: 'Reduces aggregate requirements significantly' },
    { text: 'Long-term performance reliability' },
  ];

  const applications = [
    { text: 'Heavy traffic roads' },
    { text: 'Airport pavements' },
    { text: 'Container yards' },
    { text: 'Heavy industrial paving' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <PageHero
          title="Tensar TriAx® TX Type 2 Geogrid"
          description="Heavy-duty TriAx Geogrid with triangular aperture technology for demanding applications. Provides maximum aggregate interlock and performance."
          ctaText="Request a Quote"
          ctaLink="/contact"
          secondaryCtaText="Download Spec Sheet"
          secondaryCtaLink="/specs/TX_TYPE2_SPEC.pdf"
          image="/images/products/solution-triax.png"
          imageAlt="Tensar TriAx TX Type 2 Geogrid"
        />

        <Section background="gray">
          <ProductDetail features={features} applications={applications} />
        </Section>

        {/* What Is the TX Type 2 Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">What Is the TX Type 2?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The Tensar TriAx TX Type 2 is manufactured from a punched polypropylene sheet that is oriented in three substantially equilateral directions. This process creates ribs with a high degree of molecular orientation that continues through the integral nodes, providing exceptional structural integrity for demanding applications.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The TX Type 2 features triangular apertures with a tighter rib pitch of 33mm (1.30 inches) compared to other TriAx products. This denser grid pattern provides enhanced aggregate interlock and is designed for heavy-duty applications where maximum reinforcement is required.
            </p>
          </div>
        </section>

        {/* Structural Performance Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Structural Performance</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The TX Type 2 achieves a junction efficiency of 93%, meaning nearly all the tensile strength transfers effectively through the grid nodes. The product has an isotropic stiffness ratio of 0.6, indicating consistent performance across different loading directions.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The rectangular ribs have an aspect ratio greater than 1.0, providing optimal geometry for aggregate interlock. The tighter 33mm aperture pitch creates more contact points between the grid and aggregate particles, resulting in enhanced mechanical stabilization for heavy traffic applications.
            </p>
          </div>
        </section>

        {/* Product Durability Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Product Durability</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The TX Type 2 offers 100% resistance to chemical degradation when subjected to aggressive environments, making it suitable for industrial sites where soil contamination may be present. It provides 70% resistance to ultraviolet light and weathering based on 500 hours of exposure testing.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Once installed and covered with aggregate, the product is protected from UV exposure and will maintain its structural properties throughout the pavement's service life. The polypropylene construction resists degradation from fuels, oils, and other chemicals commonly encountered in industrial applications.
            </p>
          </div>
        </section>

        {/* Typical Applications Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Typical Applications</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The TX Type 2 is specified for the most demanding applications where standard geogrids may not provide adequate reinforcement. Common uses include airport taxiways and aprons, container handling yards, heavy industrial facilities, and truck terminals where loaded semi-trailers create concentrated point loads.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              In Northern Ohio, contractors specify TX Type 2 for projects involving heavy equipment traffic, such as quarry access roads, manufacturing facilities, and distribution centers. The denser aperture pattern helps prevent aggregate migration and surface deformation under repeated heavy loads.
            </p>
          </div>
        </section>

        {/* Comparing TriAx Products Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Comparing TriAx Products</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Tensar offers multiple TriAx products for different applications. The TX190L has a 60mm rib pitch suitable for general road and parking lot applications. The TX Type 2 has a tighter 33mm pitch for heavy-duty industrial use. Both share the same triangular aperture geometry and manufacturing process.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Not sure which product fits your project? Contact us for a consultation. We can review your traffic loads, soil conditions, and project requirements to recommend the most cost-effective solution.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 bg-[#1a1a1a] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Order?</h2>
            <p className="text-lg text-gray-300 mb-6">Get competitive pricing and expert support from your Northern Ohio distributor</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-[#00c97e] hover:bg-[#00b36f] rounded transition-colors duration-200">
                Request a Quote
              </Link>
              <Link href="tel:4403681420" className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white border-2 border-white/30 hover:border-white/50 rounded transition-colors duration-200">
                (440) 368-1420
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
