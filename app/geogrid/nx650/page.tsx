import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import ProductDetail from '@/components/ProductDetail';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tensar NX650 Geogrid Ohio | InterAx',
  description: 'Tensar InterAx NX650 light-duty Geogrid for residential driveways, walkways and patios. Budget-friendly option. Free DCP testing. Cleveland, Akron.',
  keywords: ['Tensar NX650 Ohio', 'InterAx NX650 Cleveland', 'NX650 driveway Ohio', 'Tensar NX650 Akron', 'patio Geogrid Northern Ohio', 'walkway reinforcement Cleveland'],
  alternates: {
    canonical: 'https://www.buygeogrid.com/geogrid/nx650',
  },
  openGraph: {
    title: 'Tensar NX650 Geogrid Ohio | InterAx',
    description: 'Tensar NX650 for driveways and patios. Ohio distributor.',
    images: ['/images/products/solution-interax.png'],
  },
};

export default function NX650() {
  const features = [
    { text: 'Light-duty base reinforcement' },
    { text: 'Reduces aggregate requirements up to 30%' },
    { text: 'Improves pavement performance' },
    { text: 'Multi-axial structure' },
  ];

  const applications = [
    { text: 'Residential driveways' },
    { text: 'Walkways and paths' },
    { text: 'Light traffic areas' },
    { text: 'Patios and outdoor spaces' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <PageHero
          title="Tensar InterAx® NX650™ Geogrid"
          description="Light-duty base reinforcement Geogrid for residential driveways, walkways, and light traffic areas. Reduce aggregate requirements and improve performance."
          ctaText="Request a Quote"
          ctaLink="/contact"
          secondaryCtaText="Download Spec Sheet"
          secondaryCtaLink="/specs/NX650_SPEC.pdf"
          image="/images/products/solution-interax.png"
          imageAlt="Tensar InterAx NX650 Geogrid"
        />

        <Section background="gray">
          <ProductDetail features={features} applications={applications} />
        </Section>

        {/* What Is the NX650 Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">What Is the NX650?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The Tensar InterAx NX650 is manufactured from a coextruded composite polymer sheet that is punched and oriented to create a multi-aperture structure. Like all InterAx products, it features three distinct aperture geometries—hexagonal, trapezoidal, and triangular—along with an unimpeded suspended hexagon that allows aggregate to interlock from both sides.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The NX650 has rectangular ribs with a node thickness of 0.13 inches (3.25mm) and a continuous parallel rib pitch of 3.2 inches (80mm). It comes in a white/black/white color pattern for easy identification. This is the light-duty option in the InterAx line, designed for residential applications and light traffic areas.
            </p>
          </div>
        </section>

        {/* Product Durability Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Product Durability</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The NX650 is engineered for long-term performance in buried applications. It offers 100% resistance to chemical degradation when subjected to aggressive environments, and 90% resistance to ultraviolet light and weathering. Once installed and covered with aggregate, the product is protected from UV exposure and maintains its structural properties for decades.
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
              The NX650 comes in two roll sizes. Standard rolls measure 12.5 feet wide by 262 feet long, covering approximately 364 square yards at about 187 lbs per roll. Wide rolls measure 15 feet wide by 262 feet long, covering approximately 437 square yards at about 224 lbs per roll.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Contact us for current availability and delivery throughout Northern Ohio.
            </p>
          </div>
        </section>

        {/* Typical Projects Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Typical Projects</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              In Northern Ohio, the NX650 is commonly used for residential driveways, walkways, patios, and other light-traffic applications. Homeowners and contractors choose this product when reinforcement is needed but heavy loads are not expected.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Common applications include gravel driveways for single-family homes, paver patio installations, garden paths, and backyard hardscaping projects. The NX650 is also used under permeable paver systems and decorative stone installations where base stability is important but heavy vehicle traffic is not anticipated.
            </p>
          </div>
        </section>

        {/* Comparing InterAx Products Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Comparing InterAx Products</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The InterAx line includes three main products: the NX650, NX750, and NX850. All share the same multi-aperture geometry and coextruded construction, but differ in their rib profiles and node thickness. The NX650 handles light-duty applications, the NX750 suits moderate conditions, and the NX850 is designed for heavy-duty demanding projects.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Not sure which product fits your project? We offer free DCP testing throughout Northern Ohio to measure your subgrade conditions and help you select the right product. Contact us for a site visit and recommendation based on your specific soil and traffic requirements.
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
