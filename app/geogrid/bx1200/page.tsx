import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import ProductDetail from '@/components/ProductDetail';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BX1200 Biaxial Geogrid Ohio | Cost-Effective',
  description: 'BX1200 biaxial Geogrid for roads, parking lots and commercial projects. Cost-effective base reinforcement. Free DCP testing. Cleveland, Akron, Toledo.',
  keywords: ['BX1200 Geogrid Ohio', 'biaxial Geogrid Cleveland', 'BX1200 Northern Ohio', 'cost-effective Geogrid Akron', 'budget Geogrid Ohio'],
  alternates: {
    canonical: 'https://buygeogrid.com/geogrid/bx1200',
  },
  openGraph: {
    title: 'BX1200 Biaxial Geogrid Ohio',
    description: 'BX1200 for roads and parking lots. Ohio distributor.',
    images: ['/images/products/solution-biaxial.png'],
  },
};

export default function BX1200() {
  const features = [
    { text: 'Biaxial geogrid construction' },
    { text: 'Equal strength in both directions' },
    { text: 'Cost-effective reinforcement' },
    { text: 'Easy installation' },
  ];

  const applications = [
    { text: 'Roads and parking lots' },
    { text: 'Base course stabilization' },
    { text: 'Subgrade improvement' },
    { text: 'Unpaved roads' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <PageHero
          title="BX1200 Biaxial Geogrid"
          description="Cost-effective biaxial Geogrid for base reinforcement in roads and parking lots. Provides equal strength in both directions for reliable performance."
          ctaText="Request a Quote"
          ctaLink="/contact"
          secondaryCtaText="Download Spec Sheet"
          secondaryCtaLink="/specs/BX1200_SPEC.pdf"
          image="/images/products/solution-biax.png"
          imageAlt="BX1200 Biaxial Geogrid"
        />

        <Section background="gray">
          <ProductDetail features={features} applications={applications} />
        </Section>

        {/* What Is the BX1200 Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">What Is the BX1200?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The Tensar BX1200 is an integrally formed biaxial geogrid manufactured from polypropylene. The rectangular apertures measure 25mm (1.0 inch) in the machine direction and 33mm (1.3 inches) in the cross-machine direction. This tight aperture spacing provides effective interlock with smaller aggregate particles.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The load transfer mechanism relies on positive mechanical interlock between the geogrid and aggregate. When compacted, aggregate particles lock into the apertures and resist lateral movement under load. This product is manufactured in the USA and tested in a GAI-LAP accredited laboratory.
            </p>
          </div>
        </section>

        {/* Structural Properties Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Structural Properties</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The BX1200 has a rib thickness of 1.27mm (0.05 inches) with junction efficiency of 93%, meaning nearly all tensile load transfers through the nodes. The overall flexural rigidity of 750,000 mg-cm provides stiffness for bridging soft spots while remaining flexible enough for installation.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Aperture stability measures 0.65 m-N/deg, indicating good resistance to in-plane rotational movement. This helps the grid maintain its shape during aggregate placement and compaction, ensuring consistent performance throughout the installed area.
            </p>
          </div>
        </section>

        {/* Product Durability Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Product Durability</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The BX1200 offers 100% resistance to long-term chemical degradation when subjected to aggressive soil environments. It provides 98% resistance to UV degradation based on 500 hours of ultraviolet light and weathering exposure testing—higher than many geogrid products.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The polypropylene construction is designed for soil stabilization applications. Once installed and covered with aggregate, the product is protected from UV exposure and maintains its structural properties for the life of the installation.
            </p>
          </div>
        </section>

        {/* Roll Sizes Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Roll Sizes and Coverage</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The BX1200 comes in rolls measuring 12.5 feet wide by 246 feet long. Each roll is individually identified for quality control purposes. The longer roll length compared to the BX1300 makes the BX1200 efficient for covering larger areas with fewer roll changes.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Contact us for current availability and delivery lead times. We can coordinate shipments throughout Northern Ohio and arrange for direct delivery to your jobsite.
            </p>
          </div>
        </section>

        {/* BX1200 vs BX1300 Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">BX1200 vs BX1300</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The BX1200 has tighter apertures (1.0" x 1.3") compared to the BX1300 (1.8" x 2.5"). This makes the BX1200 better suited for smaller aggregate sizes, while the BX1300 works better with larger stone. The BX1200 also has higher flexural rigidity for improved bridging over soft spots.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Both products share the same junction efficiency and durability characteristics. The choice between them depends primarily on your aggregate size and project requirements. Contact us to discuss which product best fits your application.
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
