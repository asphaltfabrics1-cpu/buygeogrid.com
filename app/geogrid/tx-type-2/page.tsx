import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import ProductDetail from '@/components/ProductDetail';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tensar TriAx TX Type 2 Geogrid Northern Ohio | Cleveland Airport Industrial Paving',
  description: 'Buy Tensar TriAx TX Type 2 Geogrid in Northern Ohio. Heavy-duty for airports, ports, industrial paving. Serving Cleveland, Akron, Toledo. Free DCP testing. Call (440) 368-1420.',
  keywords: ['Tensar TX Type 2 Ohio', 'TriAx Type 2 Cleveland', 'airport Geogrid Northern Ohio', 'industrial paving Geogrid Akron', 'heavy-duty TriAx Ohio', 'port Geogrid Cleveland'],
  openGraph: {
    title: 'Tensar TriAx TX Type 2 Geogrid | Northern Ohio Industrial & Airports',
    description: 'Buy Tensar TX Type 2 for airports and heavy industrial paving. Northern Ohio distributor.',
    images: ['/images/products/solution-triax.png'],
  },
};

export default function TXType2() {
  const features = [
    { text: 'Heavy-duty TriAx technology' },
    { text: 'Maximum aggregate interlock' },
    { text: 'Reduces aggregate requirements significantly' },
    { text: 'Long-term performance reliability' },
  ];

  const applications = [
    { text: 'Heavy traffic roads' },
    { text: 'Airport pavements' },
    { text: 'Container yards' },
    { text: 'Heavy industrial paving' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <PageHero
          title="Tensar TriAx® TX Type 2 Geogrid"
          description="Heavy-duty TriAx Geogrid with triangular aperture technology for demanding applications. Provides maximum aggregate interlock and performance."
          ctaText="Request a Quote"
          ctaLink="/contact"
          secondaryCtaText="Download Spec Sheet"
          secondaryCtaLink="/specs/TX_TYPE2_SPEC.pdf"
          image="/images/products/solution-triax.png"
          imageAlt="Tensar TriAx TX Type 2 Geogrid"
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
