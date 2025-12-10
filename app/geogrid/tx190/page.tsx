import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import ProductDetail from '@/components/ProductDetail';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tensar TX190L Geogrid Ohio | TriAx',
  description: 'Tensar TriAx TX190L Geogrid with triangular apertures for roads and heavy traffic areas. Superior load distribution. Free DCP testing. Cleveland.',
  keywords: ['Tensar TX190L Ohio', 'TriAx TX190L Cleveland', 'TX190 Geogrid Northern Ohio', 'Tensar TriAx Akron', 'heavy traffic Geogrid Ohio', 'triangular aperture Geogrid Cleveland'],
  alternates: {
    canonical: 'https://www.buygeogrid.com/geogrid/tx190',
  },
  openGraph: {
    title: 'Tensar TX190L Geogrid Ohio | TriAx',
    description: 'Tensar TX190L for roads and heavy traffic. Ohio distributor.',
    images: ['/images/products/solution-triax.png'],
  },
};

export default function TX190() {
  const features = [
    { text: 'Advanced TriAx technology with triangular apertures' },
    { text: 'Superior aggregate interlock' },
    { text: 'Reduces aggregate requirements up to 50%' },
    { text: 'Could help extend pavement life significantly' },
  ];

  const applications = [
    { text: 'Roads and highways' },
    { text: 'Heavy traffic areas' },
    { text: 'Industrial paving' },
    { text: 'Port and rail facilities' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <PageHero
          title="Tensar TriAx® TX190L Geogrid"
          description="Advanced TriAx Geogrid with triangular aperture technology for superior base reinforcement. Maximize aggregate interlock and pavement performance."
          ctaText="Request a Quote"
          ctaLink="/contact"
          secondaryCtaText="Download Spec Sheet"
          secondaryCtaLink="/specs/TX190L_SPEC.pdf"
          image="/images/products/solution-triax.png"
          imageAlt="Tensar TriAx TX190L Geogrid"
        />

        <Section background="gray">
          <ProductDetail features={features} applications={applications} />
        </Section>

        {/* What Is the TX190L Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">What Is the TX190L?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The Tensar TriAx TX190L is manufactured from a punched polypropylene sheet that is oriented in three substantially equilateral directions. This process creates ribs with a high degree of molecular orientation that continues through the integral nodes, resulting in exceptional structural integrity.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The TX190L features triangular apertures with a rib pitch of 60mm (2.40 inches) and rectangular ribs. This triangular geometry distributes loads in multiple directions simultaneously, providing superior performance compared to traditional biaxial grids in applications where traffic approaches from varying angles.
            </p>
          </div>
        </section>

        {/* Structural Performance Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Structural Performance</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The TX190L achieves a junction efficiency of 93%, meaning nearly all the tensile strength transfers effectively through the grid nodes. The product has an isotropic stiffness ratio of 0.6, indicating consistent performance across different loading directions. The radial stiffness at low strain (0.5%) measures 350 kN/m.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The overall flexural rigidity of 1,500,000 mg-cm gives the TX190L enough stiffness to bridge over soft spots during installation while remaining flexible enough to conform to subgrade variations. This balance makes installation straightforward even on imperfect surfaces.
            </p>
          </div>
        </section>

        {/* Product Durability Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Product Durability</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The TX190L offers 100% resistance to chemical degradation when subjected to aggressive environments, making it suitable for a wide range of soil conditions. It provides 70% resistance to ultraviolet light and weathering based on 500 hours of exposure testing.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Once installed and covered with aggregate, the product is protected from UV exposure and will maintain its structural properties for the life of the pavement. The polypropylene construction resists degradation from acids, alkalis, and other chemicals commonly found in soil environments.
            </p>
          </div>
        </section>

        {/* Roll Sizes Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Roll Sizes and Coverage</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The TX190L comes in rolls measuring 12.5 feet wide by 164 feet long. Each roll is individually identified and labeled for quality control purposes. The triangular aperture pattern allows for efficient coverage without concerns about roll orientation during installation.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Contact us for current availability and delivery lead times. We can coordinate shipments throughout Northern Ohio and arrange for direct delivery to your jobsite.
            </p>
          </div>
        </section>

        {/* TriAx vs Biaxial Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">TriAx vs Biaxial Geogrids</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Traditional biaxial geogrids have rectangular apertures that provide strength in two perpendicular directions. The TriAx design with triangular apertures provides strength in six directions (three primary axes plus three intermediate directions), making it more effective when traffic loads approach from varying angles.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              For parking lots, intersections, and other areas where vehicles turn and traffic patterns vary, the TriAx geometry provides more consistent reinforcement than biaxial alternatives. For straight roadways with predictable traffic patterns, biaxial products may be equally effective at lower cost.
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
