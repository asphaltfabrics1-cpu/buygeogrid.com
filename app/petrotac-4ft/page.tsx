import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import ProductDetail from '@/components/ProductDetail';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Petrotac 4ft Roll Ohio | 48-Inch Paving Interlayer',
  description: 'Propex Petrotac 4ft (48-inch) roll paving interlayer for wider asphalt overlay coverage. Moisture barrier and stress relief for reflective cracking. Cleveland, Akron, Toledo.',
  keywords: ['Petrotac 4ft', 'Petrotac 48 inch', 'paving interlayer', 'wide paving interlayer', 'crack prevention', 'asphalt overlay', 'Cleveland', 'Akron', 'Ohio'],
  alternates: {
    canonical: 'https://www.buygeogrid.com/petrotac-4ft',
  },
  openGraph: {
    title: 'Petrotac 4ft Roll Ohio | 48-Inch Paving Interlayer',
    description: 'Wider self-adhesive paving interlayer for asphalt overlays. Ohio distributor.',
    images: ['/images/products/petrotac.jpg'],
  },
};

export default function Petrotac4ft() {
  const features = [
    { text: 'Could help prevent reflective cracking' },
    { text: '4-foot (48-inch) wide rolls for broader coverage' },
    { text: 'Self-adhesive backing' },
    { text: 'Enhanced moisture barrier' },
  ];

  const applications = [
    { text: 'Wide-area crack and joint treatment' },
    { text: 'Lane-segment asphalt overlay projects' },
    { text: 'Pavement rehabilitation with multiple cracks' },
    { text: 'Commercial and municipal paving' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <PageHero
          title="Petrotac 4ft Roll Paving Interlayer"
          description="48-inch wide self-adhesive paving interlayer for broader crack and joint coverage in asphalt overlays. Covers more in fewer passes than narrower rolls."
          ctaText="Request a Quote"
          ctaLink="/contact"
          secondaryCtaText="Download Spec Sheet"
          secondaryCtaLink="/specs/PETROTAC_SPEC.pdf"
          image="/images/products/petrotac.jpg"
          imageAlt="Petrotac 4ft (48-inch) Roll Paving Interlayer"
        />

        <Section background="gray">
          <ProductDetail features={features} applications={applications} />
        </Section>

        {/* What Is Petrotac Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">What Is Petrotac?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Petromat Petrotac is a self-adhesive paving strip membrane geotextile designed to treat pavement distress, joints, and cracks in asphalt surfaces. It is also used as a bridge deck moisture barrier. The 48-inch (4-foot) width is the widest peel-and-stick Petrotac roll, ideal for projects where a single pass needs to cover a broad strip of cracked pavement before overlay.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              It is manufactured by TenCate Geosynthetics Americas (a Solmax company) and tested in a GAI-LAP accredited laboratory. This product meets Build America, Buy America Act requirements.
            </p>
          </div>
        </section>

        {/* Mechanical Properties Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Mechanical Properties</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Petrotac has strip tensile strength of 75 lbs/in and puncture resistance of 200 lbs. The permeance is 0.05 perms maximum, making it an effective moisture barrier. It passes pliability testing at -25°F on a 1/4&quot; mandrel with no cracks in fabric or rubberized asphalt.
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
              The self-adhesive backing bonds to the existing pavement surface, creating a moisture barrier and stress-absorbing layer. When hot asphalt is applied over the Petrotac, the rubberized asphalt in the membrane bonds with the overlay, helping prevent moisture infiltration and reflective cracking.
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
              The 48-inch (4-foot) Petrotac rolls measure 48 inches wide by 108 feet long, covering approximately 48 square yards per roll. Contact us for current roll weight and packaging details.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Petrotac is also available in 12-inch, 18-inch, 24-inch, and 36-inch widths for narrower applications. Contact us for current availability and to discuss which width fits your project scope best.
            </p>
          </div>
        </section>

        {/* When to Choose 4ft Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">When to Choose 4ft Width</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The 48-inch width is the right choice when you need to cover a broad strip of distressed pavement in a single pass — wide cracking patterns, areas with multiple parallel cracks, lane-segment overlays, and large patch perimeters. Fewer rolls, fewer seams, faster installation than narrower widths for the same coverage area.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              For treating individual narrow cracks, our <Link href="/petrotac-1ft" className="text-[#00c97e] hover:text-[#00b36f] font-semibold">12-inch (1ft)</Link> or <Link href="/petrotac-15ft" className="text-[#00c97e] hover:text-[#00b36f] font-semibold">18-inch (1.5ft)</Link> rolls are typically more economical. Contact us to discuss which width fits your project.
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
