import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import ProductDetail from '@/components/ProductDetail';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Petrotac 1ft Roll Ohio | Paving Interlayer',
  description: 'Propex Petrotac 1ft roll paving interlayer for crack prevention in asphalt overlays. Moisture barrier and stress relief. Cleveland, Akron, Toledo.',
  keywords: ['Petrotac', 'paving interlayer', 'crack prevention', 'asphalt overlay', 'Cleveland', 'Akron'],
  alternates: {
    canonical: 'https://buygeogrid.com/petrotac-1ft',
  },
  openGraph: {
    title: 'Petrotac 1ft Roll Ohio | Paving Interlayer',
    description: 'Prevent reflective cracking in asphalt overlays. Ohio distributor.',
    images: ['/images/products/petrotac.jpg'],
  },
};

export default function Petrotac1ft() {
  const features = [
    { text: 'Could help prevent reflective cracking' },
    { text: '1-foot wide rolls for easy installation' },
    { text: 'Self-adhesive backing' },
    { text: 'Waterproofing properties' },
  ];

  const applications = [
    { text: 'Asphalt overlay projects' },
    { text: 'Crack and joint sealing' },
    { text: 'Pavement rehabilitation' },
    { text: 'Bridge deck waterproofing' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <PageHero
          title="Petrotac 1ft Roll Paving Interlayer"
          description="Self-adhesive paving interlayer that could help prevent reflective cracking in asphalt overlays. Easy-to-install 1-foot wide rolls for crack and joint treatment."
          ctaText="Request a Quote"
          ctaLink="/contact"
          secondaryCtaText="Download Spec Sheet"
          secondaryCtaLink="/specs/PETROTAC_SPEC.pdf"
          image="/images/products/petrotac.jpg"
          imageAlt="Petrotac 1ft Roll Paving Interlayer"
        />

        <Section background="gray">
          <ProductDetail features={features} applications={applications} />
        </Section>

        {/* What Is Petrotac Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">What Is Petrotac?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Petromat Petrotac is a self-adhesive paving strip membrane geotextile designed to treat local pavement distress, joints, and cracks in asphalt surfaces. It is also used as a bridge deck moisture barrier. The 12-inch (1-foot) width is ideal for treating individual cracks and joints.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Petrotac conforms to ASTM D-6153 for Type III Bridge Deck Waterproofing Membrane Systems. It is manufactured by TenCate Geosynthetics Americas (a Solmax company) and tested in a GAI-LAP accredited laboratory. This product meets Build America, Buy America Act requirements.
            </p>
          </div>
        </section>

        {/* Mechanical Properties Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Mechanical Properties</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Petrotac has strip tensile strength of 75 lbs/in and puncture resistance of 200 lbs. The permeance is 0.05 perms maximum, making it an effective moisture barrier. It passes pliability testing at -25°F on a 1/4" mandrel with no cracks in fabric or rubberized asphalt.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Asphalt retention exceeds 0.20 gal/yd² and the melting point is 325°F. UV resistance is 70% after 500 hours exposure. The product requires minimum asphalt overlay temperature of 280°F during installation.
            </p>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">How It Works</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The self-adhesive backing bonds to the existing pavement surface, creating a moisture barrier and stress-absorbing layer. When hot asphalt is applied over the Petrotac, the rubberized asphalt in the membrane bonds with the overlay, creating a waterproof seal that helps prevent reflective cracking.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The membrane absorbs stress from underlying crack movement, reducing the transfer of that movement to the new overlay. This can help extend pavement life and reduce maintenance costs.
            </p>
          </div>
        </section>

        {/* Roll Sizes Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Roll Sizes</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The 12-inch (1-foot) Petrotac rolls measure 12 inches wide by 108 feet long, covering approximately 12 square yards per roll. Each roll weighs approximately 44 lbs.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Petrotac is also available in 18-inch, 24-inch, 36-inch, and 48-inch widths for different applications. Contact us for current availability and to discuss which width is best for your project.
            </p>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Common Applications</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The 1-foot width is commonly used for treating individual transverse and longitudinal cracks, joint sealing prior to overlay, and spot treatment of localized pavement distress. It is efficient for crack repair work where full-width interlayer coverage is not needed.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              For full-width coverage of larger areas, consider using paving fabric interlayer products instead. Contact us to discuss your project requirements and we can recommend the most appropriate solution.
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
