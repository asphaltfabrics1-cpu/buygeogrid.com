import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import ProductDetail from '@/components/ProductDetail';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tensar TriAx TX190L Geogrid Northern Ohio | Cleveland Akron Heavy Traffic Roads',
  description: 'Buy Tensar TriAx TX190L Geogrid in Northern Ohio. Advanced triangular aperture for roads, highways, heavy traffic. Serving Cleveland, Akron, Toledo. Free DCP testing. Call (440) 368-1420.',
  keywords: ['Tensar TX190L Ohio', 'TriAx TX190L Cleveland', 'TX190 Geogrid Northern Ohio', 'Tensar TriAx Akron', 'heavy traffic Geogrid Ohio', 'triangular aperture Geogrid Cleveland'],
  openGraph: {
    title: 'Tensar TriAx TX190L Geogrid | Northern Ohio Roads & Highways',
    description: 'Buy Tensar TX190L for roads and heavy traffic areas. Northern Ohio distributor.',
    images: ['/images/products/solution-triax.png'],
  },
};

export default function TX190() {
  const features = [
    { text: 'Advanced TriAx technology with triangular apertures' },
    { text: 'Superior aggregate interlock' },
    { text: 'Reduces aggregate requirements up to 50%' },
    { text: 'Could help extend pavement life 3x or more' },
  ];

  const applications = [
    { text: 'Roads and highways' },
    { text: 'Heavy traffic areas' },
    { text: 'Industrial paving' },
    { text: 'Port and rail facilities' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <PageHero
          title="Tensar TriAx® TX190L Geogrid"
          description="Advanced TriAx Geogrid with triangular aperture technology for superior base reinforcement. Maximize aggregate interlock and pavement performance."
          ctaText="Request a Quote"
          ctaLink="/contact"
          secondaryCtaText="Download Spec Sheet"
          secondaryCtaLink="/specs/TX190L_SPEC.pdf"
          image="/images/products/solution-triax.png"
          imageAlt="Tensar TriAx TX190L Geogrid"
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
