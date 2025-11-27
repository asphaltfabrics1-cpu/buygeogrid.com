import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import ProductDetail from '@/components/ProductDetail';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tensar NXL Geogrid Ohio | Large Roll',
  description: 'Tensar InterAx NXL Geogrid large roll format for highways and major construction projects. Faster installation. Free DCP testing. Cleveland, Akron.',
  keywords: ['Tensar NXL Ohio', 'InterAx NXL Cleveland', 'large roll Geogrid Northern Ohio', 'Tensar NXL Akron', 'efficient Geogrid installation Ohio'],
  alternates: {
    canonical: 'https://buygeogrid.com/geogrid/nxl',
  },
  openGraph: {
    title: 'Tensar NXL Geogrid Ohio | Large Roll',
    description: 'Tensar NXL for large-scale projects. Ohio distributor.',
    images: ['/images/products/solution-interax.png'],
  },
};

export default function NXL() {
  const features = [
    { text: 'Large roll format for efficiency' },
    { text: 'Reduces installation time' },
    { text: 'Same performance as standard NX products' },
    { text: 'Ideal for large-scale projects' },
  ];

  const applications = [
    { text: 'Large parking lots' },
    { text: 'Highway projects' },
    { text: 'Industrial sites' },
    { text: 'Commercial developments' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <PageHero
          title="Tensar InterAx™ NXL™ Geogrid"
          description="Large roll format base reinforcement Geogrid for efficient installation on large-scale projects. Reduce installation time while maintaining performance."
          ctaText="Request a Quote"
          ctaLink="/contact"
          secondaryCtaText="Download Spec Sheet"
          secondaryCtaLink="/specs/NXL_SPEC.pdf"
          image="/images/products/nxl.png"
          imageAlt="Tensar InterAx NXL Geogrid"
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

        {/* What Is the NXL Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">What Is the NXL?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The Tensar InterAx NXL is a heavy-duty multi-axial geogrid manufactured from a coextruded, composite polymer sheet that is then punched and oriented. The resulting structure consists of continuous and non-continuous ribs forming three aperture geometries: hexagon, trapezoid, and triangle, with an unimpeded suspended hexagon.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The NXL features a distinctive white/black/white layered appearance from its coextruded construction. This product is designed for heavy-duty base reinforcement applications and shares the same multi-directional load distribution capability as other InterAx products. It is manufactured by Tensar and tested in a GAI-LAP accredited laboratory, with its EPD certified by UL Environment.
            </p>
          </div>
        </section>

        {/* Structural Properties Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Structural Properties</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The NXL has a node thickness of 0.19 inches (4.75mm), making it the thickest option in the InterAx line. The continuous parallel rib pitch measures 4.7 inches (120mm)—larger than the standard NX series—with a rib aspect ratio greater than 1.0. This larger aperture geometry is designed for heavy-duty applications with larger aggregate sizes.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The coextruded and integrally formed structure provides consistent material properties throughout the product. The rectangular rib shape and multi-geometry apertures enable load distribution in multiple directions, providing mechanical stabilization regardless of loading direction.
            </p>
          </div>
        </section>

        {/* Product Durability Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Product Durability</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The NXL provides 100% resistance to chemical degradation when subjected to chemically aggressive environments in accordance with EPA 9090 immersion testing. This makes it suitable for a variety of soil and environmental conditions without concern for chemical attack on the polymer structure.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              UV resistance is rated at 90% after 500 hours of ultraviolet light and aggressive weathering exposure per ASTM D4355. The white outer layers of the coextruded structure help reflect sunlight during installation, and once buried, the geogrid maintains its structural properties for the design life of the installation.
            </p>
          </div>
        </section>

        {/* Roll Sizes Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Roll Sizes and Coverage</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The NXL comes in rolls measuring 12.5 feet wide by 164 feet long, covering approximately 228 square yards per roll. Each roll weighs approximately 145 lbs with a roll diameter of about 18 inches. The shorter roll length compared to standard NX products helps manage the weight while providing the thicker, heavy-duty material.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Contact us for current availability and delivery throughout Northern Ohio.
            </p>
          </div>
        </section>

        {/* When to Choose NXL Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">When to Choose NXL</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Choose the NXL for heavy-duty base reinforcement applications such as industrial yards, container storage areas, and heavy vehicle access roads where maximum load distribution is required. The thicker node structure and larger aperture geometry are designed to work with larger aggregate particles and handle higher loads.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              For standard roadway and parking lot applications, the NX650, NX750, or NX850 may be more appropriate depending on soil conditions and traffic loads. Contact us to discuss your project requirements and we can help determine which InterAx product best fits your application.
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
