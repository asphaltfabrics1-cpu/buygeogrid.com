import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import ProductDetail from '@/components/ProductDetail';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mirafi 180N Nonwoven Geotextile Ohio',
  description: 'Mirafi 180N heavy-duty nonwoven geotextile for drainage and filtration. Maximum flow capacity, puncture resistance. Cleveland, Akron, Toledo.',
  keywords: ['Mirafi 180N', 'nonwoven geotextile', 'drainage fabric', 'heavy-duty fabric', 'Cleveland', 'Akron'],
  alternates: {
    canonical: 'https://buygeogrid.com/180n',
  },
  openGraph: {
    title: 'Mirafi 180N Nonwoven Geotextile Ohio | Heavy-Duty',
    description: 'Heavy-duty drainage and filtration fabric. Ohio distributor.',
    images: ['/images/products/mirafi-180n.jpeg'],
  },
};

export default function Mirafi180N() {
  const features = [
    { text: 'Heavy-duty nonwoven fabric' },
    { text: 'Maximum drainage capacity' },
    { text: 'Superior filtration performance' },
    { text: 'High puncture resistance' },
  ];

  const applications = [
    { text: 'Highway drainage' },
    { text: 'Sports field drainage' },
    { text: 'Commercial site drainage' },
    { text: 'Heavy-duty filtration' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <PageHero
          title="Mirafi® 180N Nonwoven Geotextile"
          description="Heavy-duty nonwoven geotextile for demanding drainage applications. Provides maximum drainage capacity with superior filtration."
          ctaText="Request a Quote"
          ctaLink="/contact"
          secondaryCtaText="Download Spec Sheet"
          secondaryCtaLink="/specs/MIRAFI_180N_SPEC.pdf"
          image="/images/products/mirafi-180n.jpeg"
          imageAlt="Mirafi 180N Nonwoven Geotextile"
        />

        <Section background="gray">
          <ProductDetail features={features} applications={applications} />
        </Section>

        {/* What Is the 180N Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">What Is the Mirafi 180N?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The Mirafi 180N is a needlepunched nonwoven geotextile composed of polypropylene fibers formed into a stable network. This is the heavy-duty option in the Mirafi nonwoven line, providing maximum strength and the tightest filtration.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The 180N is inert to biological degradation and resists naturally encountered chemicals, alkalis, and acids. It is manufactured by TenCate Geosynthetics Americas (a Solmax company) and tested in a GAI-LAP accredited laboratory.
            </p>
          </div>
        </section>

        {/* Mechanical Properties Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Mechanical Properties</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The 180N provides grab tensile strength of 205 lbs in both directions with 50% elongation—the strongest in the nonwoven line. Trapezoid tear strength measures 80 lbs and CBR puncture strength reaches 500 lbs. These properties make it suitable for demanding applications with heavy equipment.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The apparent opening size (AOS) is #80 U.S. sieve (0.18mm), providing the finest filtration of the three nonwoven products. This tight filtration is important when working with fine-grained soils.
            </p>
          </div>
        </section>

        {/* Drainage Properties Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Drainage Properties</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The 180N has a flow rate of 95 gal/min/ft² with permittivity of 1.4 sec⁻¹. While lower than the lighter-weight options, this flow rate is sufficient for most drainage applications and the finer filtration prevents soil migration in challenging conditions.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The 180N retains 70% of its strength after 500 hours of UV exposure. Once buried, the fabric maintains its drainage and filtration properties for the life of the installation.
            </p>
          </div>
        </section>

        {/* Roll Sizes Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Roll Sizes and Coverage</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The 180N comes in rolls measuring 12.5 feet wide by 360 feet long, covering approximately 500 square yards per roll. Each roll weighs approximately 265 lbs—the heaviest of the nonwoven options, reflecting its superior material properties.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Contact us for current availability and delivery lead times. We can coordinate shipments throughout Northern Ohio.
            </p>
          </div>
        </section>

        {/* When to Choose 180N Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">When to Choose 180N</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Choose the 180N for demanding applications where maximum strength and fine filtration are required. Common uses include highway drainage, sports field drainage, commercial site drainage, and applications involving fine-grained soils where preventing migration is critical.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              For lighter-duty applications or when maximum flow rate is the priority, the 135N or 140N may be more cost-effective. Contact us to discuss your project requirements and we can recommend the most appropriate product.
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
