import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import ProductDetail from '@/components/ProductDetail';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BX1300 Biaxial Geogrid Ohio | Heavy-Duty',
  description: 'BX1300 heavy-duty biaxial Geogrid for roads, industrial sites and commercial paving. Higher load capacity. Free DCP soil testing. Cleveland, Akron.',
  keywords: ['BX1300 geogrid', 'biaxial Geogrid', 'Geogrid Ohio', 'heavy-duty Geogrid', 'Cleveland', 'Akron'],
  alternates: {
    canonical: 'https://buygeogrid.com/geogrid/bx1300',
  },
  openGraph: {
    title: 'BX1300 Biaxial Geogrid Ohio | Heavy-Duty',
    description: 'Heavy-duty base reinforcement for roads and industrial. Ohio distributor.',
    images: ['/images/products/solution-biax.png'],
  },
};

export default function BX1300() {
  const features = [
    { text: 'Heavy-duty biaxial Geogrid' },
    { text: 'Higher tensile strength' },
    { text: 'Superior load distribution' },
    { text: 'Long-term durability' },
  ];

  const applications = [
    { text: 'Heavy traffic roads' },
    { text: 'Industrial paving' },
    { text: 'Base course reinforcement' },
    { text: 'Load support platforms' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <PageHero
          title="BX1300 Biaxial Geogrid"
          description="Heavy-duty biaxial Geogrid for demanding applications. Provides superior load distribution and long-term performance for roads and industrial paving."
          ctaText="Request a Quote"
          ctaLink="/contact"
          secondaryCtaText="Download Spec Sheet"
          secondaryCtaLink="/specs/BX1300_SPEC.pdf"
          image="/images/products/solution-biax.png"
          imageAlt="BX1300 Biaxial Geogrid"
        />

        <Section background="gray">
          <ProductDetail features={features} applications={applications} />
        </Section>

        {/* What Is the BX1300 Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">What Is the BX1300?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The Tensar BX1300 is an integrally formed biaxial geogrid manufactured from polypropylene. The rectangular apertures measure 46mm (1.8 inches) in the machine direction and 64mm (2.5 inches) in the cross-machine direction. These larger openings are designed for effective interlock with coarser aggregate materials.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The load transfer mechanism relies on positive mechanical interlock between the geogrid and aggregate. The larger aperture size allows bigger stone particles to penetrate and lock into the grid structure. This product is manufactured in the USA and tested in a GAI-LAP accredited laboratory.
            </p>
          </div>
        </section>

        {/* Structural Properties Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Structural Properties</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The BX1300 has a rib thickness of 1.27mm (0.05 inches) with junction efficiency of 93%, meaning nearly all tensile load transfers through the nodes. The overall flexural rigidity of 450,000 mg-cm provides flexibility that allows the grid to conform to subgrade variations.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Aperture stability measures 0.58 m-N/deg, indicating good resistance to in-plane rotational movement during aggregate placement and compaction. The larger aperture openings accommodate aggregate particles up to approximately 2 inches in diameter.
            </p>
          </div>
        </section>

        {/* Product Durability Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Product Durability</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The BX1300 offers 100% resistance to long-term chemical degradation when subjected to aggressive soil environments. It provides 98% resistance to UV degradation based on 500 hours of ultraviolet light and weathering exposure testing—higher than many geogrid products.
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
              The BX1300 comes in rolls measuring 12.5 feet wide by 164 feet long. Each roll is individually identified for quality control purposes. The roll dimensions are well-suited for typical road and parking lot applications.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Contact us for current availability and delivery lead times. We can coordinate shipments throughout Northern Ohio and arrange for direct delivery to your jobsite.
            </p>
          </div>
        </section>

        {/* When to Choose BX1300 Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">When to Choose BX1300</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Choose the BX1300 when your project uses larger aggregate sizes. The 1.8" x 2.5" apertures accommodate coarser stone that would not interlock effectively with tighter-aperture products like the BX1200. Common applications include unpaved roads, working platforms, and base courses using larger crushed stone.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              For projects using finer aggregate (under 1.5" nominal size), the BX1200 with its tighter apertures may provide better mechanical interlock. Contact us to discuss your aggregate specifications and we can recommend the best product for your application.
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
