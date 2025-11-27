import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import ProductDetail from '@/components/ProductDetail';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tensar HX145 Geogrid Ohio | Retaining Walls',
  description: 'Tensar H-Series HX145 medium-strength uniaxial Geogrid for retaining walls and MSE structures. Cost-effective option. Free DCP testing. Cleveland.',
  keywords: ['Tensar HX145', 'H-Series HX145', 'Geogrid Ohio', 'retaining wall Geogrid', 'MSE wall', 'Cleveland', 'Akron'],
  alternates: {
    canonical: 'https://buygeogrid.com/geogrid/hx145',
  },
  openGraph: {
    title: 'Tensar HX145 Geogrid Ohio | Retaining Walls',
    description: 'Medium-strength Geogrid for retaining walls. Ohio distributor.',
    images: ['/images/products/h-series.png'],
  },
};

export default function HX145() {
  const features = [
    { text: 'Medium-strength uniaxial Geogrid' },
    { text: 'Ultimate tensile strength of 145 kN/m' },
    { text: 'Ideal for medium-height retaining walls' },
    { text: 'Cost-effective reinforcement' },
  ];

  const applications = [
    { text: 'Medium-height retaining walls' },
    { text: 'MSE structures' },
    { text: 'Slope stabilization' },
    { text: 'Embankment reinforcement' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <PageHero
          title="Tensar H-Series™ HX145™ Geogrid"
          description="Medium-strength uniaxial Geogrid for retaining walls and MSE structures. Cost-effective solution for medium-height applications."
          ctaText="Request a Quote"
          ctaLink="/contact"
          secondaryCtaText="Download Spec Sheet"
          secondaryCtaLink="/specs/HX145_SPEC.pdf"
          image="/images/products/h-series.png"
          imageAlt="Tensar H-Series HX145 Geogrid"
        />

        <Section background="gray">
          <ProductDetail features={features} applications={applications} />
        </Section>

        <Section background="white">
          <div className="bg-green-50 border-2 border-[#00c97e] rounded p-6 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold mb-3 text-gray-900">Free DCP Testing Available</h3>
            <p className="text-gray-700">
              Not sure which Geogrid is right for your project? We offer free Dynamic Cone Penetrometer (DCP)
              testing to analyze your soil conditions and recommend the optimal solution.
            </p>
          </div>
        </Section>

        {/* What Is the HX145 Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">What Is the HX145?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The Tensar H-Series HX145 is a uniaxial geogrid manufactured from a polypropylene sheet that is punched and oriented. The resulting structure consists of continuous and non-continuous ribs forming three aperture geometries: hexagon, trapezoid, and triangle, with an unimpeded suspended hexagon.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              This geogrid is part of the H-Series line designed specifically for retaining wall and MSE (Mechanically Stabilized Earth) structure applications. The HX145 provides a cost-effective solution for medium-height retaining walls where maximum strength is not required. It is manufactured by Tensar and tested in a GAI-LAP accredited laboratory.
            </p>
          </div>
        </section>

        {/* Structural Properties Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Structural Properties</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The HX145 has a node thickness of 0.11 inches (2.75mm), making it the lighter-duty option in the H-Series line compared to the HX165. The continuous parallel rib pitch measures 3.2 inches (80mm) with a rib aspect ratio greater than 1.0, ensuring proper load distribution through the structure.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The rectangular rib shape and multi-geometry apertures allow for effective soil interlock and load transfer within the reinforced soil mass. The black color identification makes it easily distinguishable during installation.
            </p>
          </div>
        </section>

        {/* Product Durability Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Product Durability</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The HX145 provides 100% resistance to chemical degradation when subjected to chemically aggressive environments in accordance with EPA 9090 immersion testing. This makes it suitable for a wide range of soil conditions without concern for chemical attack.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              UV resistance is rated at 90% after 500 hours of ultraviolet light and aggressive weathering exposure per ASTM D4355. While retaining walls are typically buried, this UV stability provides protection during storage and installation when the product may be exposed to sunlight.
            </p>
          </div>
        </section>

        {/* Roll Sizes Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Roll Sizes and Coverage</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The HX145 comes in rolls measuring 12.5 feet wide by 328 feet long, covering approximately 456 square yards per roll. Each roll weighs approximately 196 lbs and has a roll diameter of about 19.5 inches.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Contact us for current availability and delivery throughout Northern Ohio.
            </p>
          </div>
        </section>

        {/* When to Choose HX145 Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">When to Choose HX145</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The HX145 is appropriate for medium-height retaining walls, slope stabilization, and embankment reinforcement where the design loads do not require the higher strength of the HX165. It offers a cost-effective solution for projects where the additional node thickness of the HX165 is not necessary.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              For taller walls or higher load applications, consider the HX165 with its 0.13-inch node thickness. Contact us to discuss your project requirements and we can help determine which H-Series product is most appropriate for your specific application.
            </p>
          </div>
        </section>

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
