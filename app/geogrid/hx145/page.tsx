import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import ProductDetail from '@/components/ProductDetail';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tensar HX145 Geogrid Ohio | Base Reinforcement',
  description: 'Tensar H-Series HX145 Geogrid for base reinforcement and subgrade stabilization. Cost-effective solution with optimized geometry. Cleveland, Akron distributor.',
  keywords: ['Tensar HX145', 'H-Series HX145', 'Geogrid Ohio', 'base reinforcement Geogrid', 'subgrade stabilization', 'Cleveland', 'Akron'],
  alternates: {
    canonical: 'https://buygeogrid.com/geogrid/hx145',
  },
  openGraph: {
    title: 'Tensar HX145 Geogrid Ohio | Base Reinforcement',
    description: 'Cost-effective Geogrid for base reinforcement. Ohio distributor.',
    images: ['/images/products/h-series.png'],
  },
};

export default function HX145() {
  const features = [
    { text: 'Optimized geometry for base reinforcement' },
    { text: 'Cost-effective alternative to InterAx' },
    { text: 'Excellent fill material interlock' },
    { text: 'Reduces aggregate requirements' },
  ];

  const applications = [
    { text: 'Soft subgrade stabilization' },
    { text: 'Access road construction' },
    { text: 'Pavement improvement' },
    { text: 'Working platforms' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <PageHero
          title="Tensar H-Series™ HX145™ Geogrid"
          description="Cost-effective base reinforcement geogrid with optimized geometry for stabilizing soft subgrades and improving pavement performance. Economical solution for road construction and access roads."
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
              The Tensar H-Series HX145 is a geogrid manufactured from a coextruded polymer sheet that is punched and oriented. It features optimized geometry that enhances the interlock of fill materials, creating an efficient stabilized layer for base reinforcement applications.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The H-Series was designed to provide the benefits of advanced geogrid geometry at a more economical cost than InterAx. The HX145 is ideal for stabilizing soft subgrades, constructing access roads, and improving pavement performance where maximum strength is not required. It is manufactured by Tensar and tested in a GAI-LAP accredited laboratory.
            </p>
          </div>
        </section>

        {/* Performance Benefits Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Performance Benefits</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Better geogrid-fill compatibility provides an effective stabilized layer with less fill material, reducing project costs and construction time. The HX145 helps build higher performing trafficked surfaces that can withstand severe weather and challenging environmental conditions.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The broader range of aperture shapes and sizes allows for better compatibility between the geogrid and multiple fill materials, improving particle confinement under compaction and repetitive loading.
            </p>
          </div>
        </section>

        {/* Product Durability Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Product Durability</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Tensar geogrids are 100% UV resistant and will not rust, leach, or degrade in direct sunlight. The HX145 provides chemical resistance when subjected to aggressive environments, making it suitable for a wide range of soil conditions.
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
              The HX145 comes in rolls measuring 12.5 feet wide by 328 feet long, providing 4,100 square feet of coverage per roll.
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
              The HX145 is appropriate for soft subgrade stabilization, access road construction, and pavement improvement projects where you need reliable performance at an economical price. It offers a cost-effective solution compared to both InterAx and the higher-strength HX165.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              For more demanding applications or weaker subgrade conditions, consider the HX165 or InterAx products. The H-Series is fully compatible with Tensar&apos;s design software, Tensar+. Contact us to discuss your project requirements and we can help determine which product is most appropriate for your application.
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
