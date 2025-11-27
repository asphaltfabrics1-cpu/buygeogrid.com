import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import ProductDetail from '@/components/ProductDetail';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tensar NX750 Geogrid Ohio | InterAx',
  description: 'Tensar InterAx NX750 Geogrid for driveways and light commercial projects. Ideal for residential applications. Free DCP testing. Cleveland, Akron.',
  keywords: ['Tensar NX750 Ohio', 'InterAx NX750 Cleveland', 'NX750 residential driveway', 'Tensar NX750 Akron', 'Geogrid driveway Northern Ohio', 'NX750 Toledo', 'residential Geogrid Cleveland'],
  alternates: {
    canonical: 'https://buygeogrid.com/geogrid/nx750',
  },
  openGraph: {
    title: 'Tensar NX750 Geogrid Ohio | InterAx',
    description: 'Tensar NX750 for driveways and light commercial. Ohio distributor.',
    images: ['/images/products/solution-interax.png'],
  },
};

export default function NX750() {
  const features = [
    { text: 'Medium-duty base reinforcement' },
    { text: 'Reduces aggregate requirements up to 35%' },
    { text: 'Could help extend pavement life 2x' },
    { text: 'Multi-axial structure for optimal performance' },
  ];

  const applications = [
    { text: 'Residential driveways' },
    { text: 'Light commercial paving' },
    { text: 'Parking areas' },
    { text: 'Low-volume roads' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <PageHero
          title="Tensar InterAx® NX750™ Geogrid"
          description="Medium-duty base reinforcement Geogrid for residential driveways, light commercial paving, and parking areas. Reduce aggregate requirements and improve performance."
          ctaText="Request a Quote"
          ctaLink="/contact"
          secondaryCtaText="Download Spec Sheet"
          secondaryCtaLink="/specs/NX750_SPEC.pdf"
          image="/images/products/solution-interax.png"
          imageAlt="Tensar InterAx NX750 Geogrid"
        />

        <Section background="gray">
          <ProductDetail features={features} applications={applications} />
        </Section>

        {/* What Is the NX750 Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">What Is the NX750?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The Tensar InterAx NX750 is manufactured from a coextruded composite polymer sheet that is punched and oriented to create a multi-aperture structure. Like all InterAx products, it features three distinct aperture geometries—hexagonal, trapezoidal, and triangular—along with an unimpeded suspended hexagon that allows aggregate to interlock from both sides.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The NX750 has rectangular ribs with a node thickness of 0.14 inches (3.5mm) and a continuous parallel rib pitch of 3.2 inches (80mm). It comes in a white/black/white color pattern for easy identification. This is the medium-duty option in the InterAx line, positioned between the lighter NX650 and the heavy-duty NX850.
            </p>
          </div>
        </section>

        {/* Product Durability Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Product Durability</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The NX750 is engineered for long-term performance in buried applications. It offers 100% resistance to chemical degradation when subjected to aggressive environments, and 90% resistance to ultraviolet light and weathering. Once installed and covered with aggregate, the product is protected from UV exposure and maintains its structural properties for decades.
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
              The NX750 comes in two roll sizes. Standard rolls measure 12.5 feet wide by 197 feet long, covering approximately 274 square yards at about 154 lbs per roll. Wide rolls measure 15 feet wide by 197 feet long, covering approximately 328 square yards at about 185 lbs per roll.
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
              In Northern Ohio, the NX750 is commonly used for residential driveways, small parking lots, and light commercial applications. Contractors choose this product for projects where the NX650 may not provide enough reinforcement but the heavy-duty NX850 would be more than necessary.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Common applications include paved and gravel driveways that see regular passenger vehicle traffic, church and retail parking lots, and access roads for farms and rural properties. The NX750 provides a good balance of performance and value for moderate-traffic applications in residential and light commercial settings.
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
