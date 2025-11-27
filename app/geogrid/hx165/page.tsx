import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import ProductDetail from '@/components/ProductDetail';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tensar HX165 Geogrid Ohio | Retaining Walls',
  description: 'Tensar H-Series HX165 high-strength uniaxial Geogrid for retaining walls and MSE structures. Superior tensile strength. Cleveland, Akron, Toledo.',
  keywords: ['Tensar HX165 Ohio', 'H-Series HX165 Cleveland', 'retaining wall Geogrid Northern Ohio', 'MSE wall geogrid Akron', 'Tensar retaining wall Ohio', 'uniaxial Geogrid Cleveland'],
  alternates: {
    canonical: 'https://buygeogrid.com/geogrid/hx165',
  },
  openGraph: {
    title: 'Tensar HX165 Geogrid Ohio | Retaining Walls',
    description: 'Tensar HX165 for retaining walls and MSE structures. Ohio distributor.',
    images: ['/images/products/solution-biaxial.png'],
  },
};

export default function HX165() {
  const features = [
    { text: 'High-strength uniaxial Geogrid' },
    { text: 'Ultimate tensile strength of 165 kN/m' },
    { text: 'Ideal for tall retaining walls' },
    { text: 'Long-term design strength' },
  ];

  const applications = [
    { text: 'Mechanically Stabilized Earth (MSE) walls' },
    { text: 'Tall retaining walls' },
    { text: 'Bridge abutments' },
    { text: 'Steep slope reinforcement' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <PageHero
          title="Tensar H-Series™ HX165™ Geogrid"
          description="High-strength uniaxial Geogrid for tall retaining walls and MSE structures. Provides reliable long-term performance for critical applications."
          ctaText="Request a Quote"
          ctaLink="/contact"
          secondaryCtaText="Download Spec Sheet"
          secondaryCtaLink="/specs/HX165_SPEC.pdf"
          image="/images/products/h-series.png"
          imageAlt="Tensar H-Series HX165 Geogrid"
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

        {/* What Is the HX165 Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">What Is the HX165?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The Tensar H-Series HX165 is a high-strength uniaxial geogrid manufactured from a polypropylene sheet that is punched and oriented. The resulting structure consists of continuous and non-continuous ribs forming three aperture geometries: hexagon, trapezoid, and triangle, with an unimpeded suspended hexagon.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The HX165 is the heavy-duty option in the H-Series line, designed for tall retaining walls, bridge abutments, and other demanding MSE (Mechanically Stabilized Earth) applications where higher strength is required. It is manufactured by Tensar and tested in a GAI-LAP accredited laboratory, with its EPD certified by UL Environment.
            </p>
          </div>
        </section>

        {/* Structural Properties Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Structural Properties</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The HX165 has a node thickness of 0.13 inches (3.25mm), approximately 18% thicker than the HX145. This increased material at the nodes provides greater long-term design strength for demanding applications. The continuous parallel rib pitch measures 3.2 inches (80mm) with a rib aspect ratio greater than 1.0.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The rectangular rib shape and multi-geometry apertures (hexagonal, trapezoidal, and triangular) allow for effective soil interlock throughout the reinforced earth mass. The black color identification makes it easily distinguishable during installation.
            </p>
          </div>
        </section>

        {/* Product Durability Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Product Durability</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The HX165 provides 100% resistance to chemical degradation when subjected to chemically aggressive environments in accordance with EPA 9090 immersion testing. This makes it suitable for a variety of soil conditions including those with potentially corrosive properties.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              UV resistance is rated at 90% after 500 hours of ultraviolet light and aggressive weathering exposure per ASTM D4355. While the geogrid will be buried in its final application, this UV stability provides protection during the construction phase when the product may be exposed to sunlight.
            </p>
          </div>
        </section>

        {/* Roll Sizes Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Roll Sizes and Coverage</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The HX165 comes in two roll sizes. Standard width rolls measure 12.5 feet wide by 328 feet long, covering approximately 456 square yards per roll at about 233 lbs. Wide width rolls measure 15.5 feet wide by 328 feet long, covering approximately 565 square yards per roll at about 290 lbs.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Contact us for current availability and delivery throughout Northern Ohio.
            </p>
          </div>
        </section>

        {/* When to Choose HX165 Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">When to Choose HX165</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Choose the HX165 for tall retaining walls, bridge abutments, steep slope reinforcement, and other demanding MSE applications where maximum long-term strength is required. The thicker node structure provides greater reliability for critical infrastructure projects.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              For medium-height walls or less demanding applications, the HX145 may provide sufficient strength at a lower cost. Contact us to discuss your project requirements and we can help determine which H-Series product is most appropriate for your specific design loads.
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
