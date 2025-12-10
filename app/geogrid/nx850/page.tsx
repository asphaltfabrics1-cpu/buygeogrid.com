import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import ProductDetail from '@/components/ProductDetail';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tensar NX850 Geogrid Ohio | InterAx',
  description: 'Tensar InterAx NX850 heavy-duty Geogrid for roads and parking lots. Reduces aggregate up to 40%. Free DCP soil testing. Cleveland, Akron, Toledo.',
  keywords: ['Tensar NX850 Ohio', 'InterAx NX850 Cleveland', 'NX850 Geogrid Northern Ohio', 'Tensar NX850 Akron', 'NX850 Toledo', 'buy Tensar Geogrid Ohio', 'NX850 distributor Cleveland', 'Tensar NX850 Youngstown', 'heavy-duty Geogrid Northern Ohio'],
  alternates: {
    canonical: 'https://www.buygeogrid.com/geogrid/nx850',
  },
  openGraph: {
    title: 'Tensar NX850 Geogrid Ohio | InterAx',
    description: 'Tensar NX850 in Ohio. Free DCP testing. Cleveland, Akron, Toledo.',
    images: ['/images/products/solution-interax.png'],
  },
};

export default function NX850() {
  const features = [
    { text: 'Heavy-duty base reinforcement' },
    { text: 'Reduces aggregate requirements up to 40%' },
    { text: 'Could help extend pavement life 2-3x' },
    { text: 'Multi-axial structure for optimal performance' },
  ];

  const applications = [
    { text: 'Roads and highways' },
    { text: 'Parking lots and commercial paving' },
    { text: 'Industrial facilities' },
    { text: 'Working platforms' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <PageHero
          title="Tensar InterAx® NX850™ Geogrid"
          description="Heavy-duty base reinforcement Geogrid for roads, parking lots, and industrial applications. Reduce aggregate requirements and could help extend pavement life."
          ctaText="Request a Quote"
          ctaLink="/contact"
          secondaryCtaText="Download Spec Sheet"
          secondaryCtaLink="/specs/NX850_SPEC.pdf"
          image="/images/products/solution-interax.png"
          imageAlt="Tensar InterAx NX850 Geogrid"
        />

        <Section background="gray">
          <ProductDetail features={features} applications={applications} />
        </Section>

        {/* What Is the NX850 Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">What Is the NX850?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The Tensar InterAx NX850 is manufactured from a coextruded composite polymer sheet that is punched and oriented to create a unique multi-aperture structure. The resulting grid features three distinct aperture geometries—hexagonal, trapezoidal, and triangular—along with an unimpeded suspended hexagon that allows aggregate to interlock from both sides.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The NX850 has rectangular ribs with a node thickness of 0.18 inches (4.5mm) and a continuous parallel rib pitch of 3.2 inches (80mm). It comes in a white/black/white color pattern for easy identification on the jobsite. This is the heavy-duty option in the InterAx line, designed for demanding applications.
            </p>
          </div>
        </section>

        {/* Product Durability Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Product Durability</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The NX850 is engineered for long-term performance in buried applications. It offers 100% resistance to chemical degradation when subjected to aggressive environments, and 90% resistance to ultraviolet light and weathering. Once installed and covered with aggregate, the product is protected from UV exposure and will maintain its structural properties for decades.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The coextruded polymer construction provides consistent quality throughout the product. Each roll is tested in a GAI-LAP accredited laboratory and carries an Environmental Product Declaration (EPD) certified by UL Environment, verifying its environmental impact data.
            </p>
          </div>
        </section>

        {/* Roll Sizes and Coverage Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Roll Sizes and Coverage</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The NX850 comes in two roll sizes. Standard rolls measure 12.5 feet wide by 197 feet long, covering approximately 274 square yards at about 183 lbs per roll. Wide rolls measure 15 feet wide by 197 feet long, covering approximately 328 square yards at about 219 lbs per roll.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Contact us for current availability and delivery throughout Northern Ohio.
            </p>
          </div>
        </section>

        {/* Comparing InterAx Products Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Comparing InterAx Products</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The InterAx line includes three main products: the NX850, NX750, and NX650. All share the same multi-aperture geometry and coextruded construction, but differ in their rib profiles and intended applications. The NX850 is the heavy-duty option for demanding projects, while the NX750 suits moderate conditions and the NX650 handles lighter-duty applications.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Not sure which product fits your project? We offer free DCP testing throughout Northern Ohio to measure your subgrade conditions and help you select the right product. Contact us for a site visit and recommendation based on your specific soil and traffic requirements.
            </p>
          </div>
        </section>

        {/* Typical Projects Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Typical Projects</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              In Northern Ohio, the NX850 is commonly used for truck terminals, distribution centers, and heavy commercial parking lots where trailer traffic and loaded trucks are common. Municipal projects like bus depots, fire stations, and public works yards also benefit from the NX850's heavy-duty performance.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Industrial applications include manufacturing facilities, container yards, and equipment storage areas where forklifts and heavy machinery operate. The NX850 is also specified for temporary haul roads and working platforms during construction, providing a stable surface that holds up under repeated heavy equipment traffic.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 bg-[#1a1a1a] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Order?
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              Get competitive pricing and expert support from your Northern Ohio distributor
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-[#00c97e] hover:bg-[#00b36f] rounded transition-colors duration-200"
              >
                Request a Quote
              </Link>
              <Link
                href="tel:4403681420"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white border-2 border-white/30 hover:border-white/50 rounded transition-colors duration-200"
              >
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
