import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import ProductDetail from '@/components/ProductDetail';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tensar HX165 Geogrid Ohio | Base Reinforcement',
  description: 'Tensar H-Series HX165 Geogrid for base reinforcement and subgrade stabilization. Optimized geometry at economical pricing. Cleveland, Akron, Toledo distributor.',
  keywords: ['Tensar HX165 Ohio', 'H-Series HX165 Cleveland', 'base reinforcement Geogrid Northern Ohio', 'subgrade stabilization Akron', 'Tensar geogrid Ohio', 'road stabilization Cleveland'],
  alternates: {
    canonical: 'https://www.buygeogrid.com/geogrid/hx165',
  },
  openGraph: {
    title: 'Tensar HX165 Geogrid Ohio | Base Reinforcement',
    description: 'Tensar HX165 for base reinforcement and subgrade stabilization. Ohio distributor.',
    images: ['/images/products/h-series.png'],
  },
};

export default function HX165() {
  const features = [
    { text: 'Optimized geometry for base reinforcement' },
    { text: 'Higher tensile strength in H-Series line' },
    { text: 'More economical than InterAx' },
    { text: 'Excellent subgrade stabilization' },
  ];

  const applications = [
    { text: 'Soft subgrade stabilization' },
    { text: 'Access road construction' },
    { text: 'Pavement improvement' },
    { text: 'Working platforms over weak soils' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <PageHero
          title="Tensar H-Series™ HX165™ Geogrid"
          description="Base reinforcement geogrid with optimized geometry for stabilizing soft subgrades and improving pavement performance. A cost-effective alternative to InterAx for demanding applications."
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
              The Tensar H-Series HX165 is a geogrid manufactured from a coextruded polymer sheet that is punched and oriented. It features optimized geometry that enhances the interlock of fill materials, creating an efficient stabilized layer for base reinforcement applications.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The H-Series was designed to provide the benefits of advanced geogrid geometry at a more economical cost than InterAx. The HX165 is the higher-strength option in the H-Series line, ideal for stabilizing soft subgrades, constructing access roads, and improving pavement performance. It is manufactured by Tensar and tested in a GAI-LAP accredited laboratory.
            </p>
          </div>
        </section>

        {/* Performance Benefits Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Performance Benefits</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The HX165&apos;s optimized aperture geometry provides better geogrid-fill compatibility, creating an effective stabilized layer with less fill material. This can reduce project costs and construction time while building higher performing trafficked surfaces.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The broader range of aperture shapes and sizes allows for better compatibility between the geogrid and multiple fill materials, improving particle confinement under compaction and repetitive loading. This makes it suitable for projects where soil conditions vary.
            </p>
          </div>
        </section>

        {/* Product Durability Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Product Durability</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Tensar geogrids are 100% UV resistant and will not rust, leach, or degrade in direct sunlight. The HX165 provides chemical resistance when subjected to aggressive environments, making it suitable for a variety of soil conditions.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The geogrid can withstand the rigors of construction, including being routinely excavated through and punched through for guardrail posts, bridge piers, and underground utilities without losing its reinforcement capability.
            </p>
          </div>
        </section>

        {/* Roll Sizes Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Roll Sizes and Coverage</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The HX165 comes in rolls measuring 12.5 feet wide by 328 feet long, providing 4,100 square feet of coverage per roll.
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
              Choose the HX165 when you need reliable base reinforcement performance at an economical price point. It&apos;s ideal for soft subgrade stabilization, access road construction, and pavement improvement projects where InterAx may be more than what the project requires.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The H-Series is fully compatible with Tensar&apos;s design software, Tensar+, which can help optimize your design and ensure reliable results. Contact us to discuss your project requirements and we can help determine whether H-Series or InterAx is most appropriate for your application.
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
