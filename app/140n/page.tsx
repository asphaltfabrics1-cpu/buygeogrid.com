import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import ProductDetail from '@/components/ProductDetail';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mirafi 140N Nonwoven Geotextile Ohio',
  description: 'Solmax Mirafi 140N medium-duty nonwoven geotextile for drainage and filtration. Balanced performance and value for most applications. Cleveland, Akron.',
  keywords: ['Mirafi 140N', 'nonwoven geotextile', 'drainage fabric', 'geotextile Ohio', 'Cleveland', 'Akron'],
  alternates: {
    canonical: 'https://buygeogrid.com/140n',
  },
  openGraph: {
    title: 'Mirafi 140N Nonwoven Geotextile Ohio',
    description: 'Medium-duty drainage and filtration fabric. Ohio distributor.',
    images: ['/images/products/mirafi-180n.jpeg'],
  },
};

export default function Mirafi140N() {
  const features = [
    { text: 'Medium-duty nonwoven fabric' },
    { text: 'High flow drainage' },
    { text: 'Excellent filtration efficiency' },
    { text: 'Good puncture resistance' },
  ];

  const applications = [
    { text: 'Subsurface drainage' },
    { text: 'Pavement edge drains' },
    { text: 'Retaining walls' },
    { text: 'Landscaping drainage' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <PageHero
          title="Mirafi® 140N Nonwoven Geotextile"
          description="Medium-duty nonwoven geotextile for drainage and filtration. Provides high flow rates with excellent filtration efficiency."
          ctaText="Request a Quote"
          ctaLink="/contact"
          secondaryCtaText="Download Spec Sheet"
          secondaryCtaLink="/specs/MIRAFI_140N_SPEC.pdf"
          image="/images/products/mirafi-180n.jpeg"
          imageAlt="Mirafi 140N Nonwoven Geotextile"
        />

        <Section background="gray">
          <ProductDetail features={features} applications={applications} />
        </Section>

        {/* What Is the 140N Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">What Is the Mirafi 140N?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The Mirafi 140N is a needlepunched nonwoven geotextile composed of polypropylene fibers formed into a stable network. This is the medium-duty option in the Mirafi nonwoven line, providing a balance of strength, filtration, and flow rate.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The 140N is inert to biological degradation and resists naturally encountered chemicals, alkalis, and acids. It is manufactured by TenCate Geosynthetics Americas (a Solmax company) and tested in a GAI-LAP accredited laboratory. This product meets Build America, Buy America Act requirements.
            </p>
          </div>
        </section>

        {/* Mechanical Properties Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Mechanical Properties</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The 140N provides grab tensile strength of 120 lbs in both directions with 50% elongation—50% stronger than the 135N. Trapezoid tear strength measures 50 lbs and CBR puncture strength reaches 310 lbs. The fabric weight is 4.0 oz/yd².
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The apparent opening size (AOS) is #70 U.S. sieve (0.212mm), providing tighter filtration than the 135N. This helps prevent fine soil particles from migrating through the fabric.
            </p>
          </div>
        </section>

        {/* Drainage Properties Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Drainage Properties</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The 140N has a flow rate of 135 gal/min/ft² with permittivity of 1.7 sec⁻¹. While slightly lower than the 135N, this flow rate is still excellent for most drainage applications.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The 140N retains 70% of its strength after 500 hours of UV exposure. Once buried, the fabric maintains its drainage and filtration properties for the life of the installation.
            </p>
          </div>
        </section>

        {/* Roll Sizes Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Roll Sizes and Coverage</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The 140N comes in rolls measuring 12.5 feet wide by 360 feet long, covering approximately 500 square yards per roll. Each roll weighs approximately 151 lbs.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Contact us for current availability and delivery lead times. We can coordinate shipments throughout Northern Ohio.
            </p>
          </div>
        </section>

        {/* When to Choose 140N Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">When to Choose 140N</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The 140N is the most versatile of the nonwoven options, suitable for a wide range of drainage and filtration applications. Common uses include subsurface drainage, pavement edge drains, retaining wall drainage, and landscaping applications.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              For applications requiring maximum flow rate, consider the 135N. For demanding applications with heavy equipment or where finer filtration is needed, the 180N may be more appropriate. Contact us to discuss your project requirements.
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
