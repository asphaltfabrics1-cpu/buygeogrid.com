import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import ProductDetail from '@/components/ProductDetail';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mirafi 500X Woven Geotextile Ohio',
  description: 'Solmax Mirafi 500X woven geotextile for soil separation and stabilization. Superior puncture resistance, UV stabilized. Cleveland, Akron, Toledo.',
  keywords: ['Mirafi 500X', 'woven geotextile', 'geotextile Ohio', 'separation fabric', 'Cleveland', 'Akron'],
  alternates: {
    canonical: 'https://buygeogrid.com/500x',
  },
  openGraph: {
    title: 'Mirafi 500X Woven Geotextile Ohio',
    description: 'High-strength woven fabric for separation and stabilization. Ohio distributor.',
    images: ['/images/products/mirafi-500x.jpeg'],
  },
};

export default function Mirafi500X() {
  const features = [
    { text: 'High-strength woven polypropylene' },
    { text: 'Excellent load distribution' },
    { text: 'Superior puncture resistance' },
    { text: 'UV stabilized for durability' },
  ];

  const applications = [
    { text: 'Road separation' },
    { text: 'Subgrade stabilization' },
    { text: 'Railroad stabilization' },
    { text: 'Parking lot construction' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <PageHero
          title="Mirafi® 500X Woven Geotextile"
          description="High-strength woven geotextile for separation and stabilization applications. Provides excellent load distribution and puncture resistance."
          ctaText="Request a Quote"
          ctaLink="/contact"
          secondaryCtaText="Download Spec Sheet"
          secondaryCtaLink="/specs/MIRAFI_500X_SPEC.pdf"
          image="/images/products/mirafi-500x.jpeg"
          imageAlt="Mirafi 500X Woven Geotextile"
        />

        <Section background="gray">
          <ProductDetail features={features} applications={applications} />
        </Section>

        {/* What Is the 500X Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">What Is the Mirafi 500X?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The Mirafi 500X is a woven geotextile composed of polypropylene fibers woven into a stable network where the fibers retain their relative position. Unlike geogrids which have open apertures, woven geotextiles provide continuous fabric coverage for separation applications.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The 500X is inert to biological degradation and resists naturally encountered chemicals, alkalis, and acids. It is manufactured by TenCate Geosynthetics Americas (a Solmax company) and tested in a GAI-LAP accredited laboratory.
            </p>
          </div>
        </section>

        {/* Mechanical Properties Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Mechanical Properties</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The 500X provides grab tensile strength of 200 lbs in both the machine and cross-machine directions with 15% elongation. Trapezoid tear strength measures 75 lbs and CBR puncture strength reaches 700 lbs, providing excellent resistance to damage during installation and service.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The apparent opening size (AOS) is #40 U.S. sieve (0.425mm), which determines the filtration characteristics. Permittivity of 0.05 sec⁻¹ and flow rate of 4 gal/min/ft² allow water passage while preventing soil migration.
            </p>
          </div>
        </section>

        {/* Durability Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Durability</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The 500X retains 70% of its strength after 500 hours of UV exposure testing. Once covered with soil or aggregate, the fabric is protected from UV light and will maintain its properties for the life of the installation.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The polypropylene construction resists biological degradation and is unaffected by chemicals, alkalis, and acids commonly found in soil environments.
            </p>
          </div>
        </section>

        {/* Roll Sizes Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Roll Sizes and Coverage</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The 500X comes in rolls measuring 12.5 feet wide by 432 feet long, covering approximately 600 square yards per roll. Each roll weighs approximately 177 lbs. The long roll length makes the 500X efficient for larger separation projects.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Contact us for current availability and delivery lead times. We can coordinate shipments throughout Northern Ohio.
            </p>
          </div>
        </section>

        {/* 500X vs 600X Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">500X vs 600X</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The 500X is the standard-duty woven separation fabric, while the 600X is the heavy-duty option with higher tensile and puncture strength. Choose the 500X for typical road separation, parking lots, and general stabilization applications where cost is a consideration.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              For demanding applications with heavy equipment traffic, poor soil conditions, or longer service life requirements, consider the 600X. Contact us to discuss your project requirements.
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
