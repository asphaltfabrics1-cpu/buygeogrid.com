import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import ProductDetail from '@/components/ProductDetail';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mirafi 135N Nonwoven Geotextile Ohio | Lightweight Drainage Fabric',
  description: 'Mirafi 135N nonwoven geotextile available in Ohio. Lightweight drainage and filtration fabric. Serving Cleveland and Akron. Download spec sheet.',
  keywords: ['Mirafi 135N', 'nonwoven geotextile', 'drainage fabric', 'geotextile Ohio', 'Cleveland', 'Akron'],
  openGraph: {
    title: 'Mirafi 135N Nonwoven Geotextile | Drainage Ohio',
    description: 'Lightweight drainage and filtration fabric. Northern Ohio distributor.',
    images: ['/images/products/mirafi-135n.jpg'],
  },
};

export default function Mirafi135N() {
  const features = [
    { text: 'Lightweight nonwoven fabric' },
    { text: 'Excellent drainage properties' },
    { text: 'Superior filtration' },
    { text: 'Easy to install' },
  ];

  const applications = [
    { text: 'Drainage systems' },
    { text: 'Erosion control' },
    { text: 'French drains' },
    { text: 'Retaining wall drainage' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <PageHero
          title="Mirafi® 135N Nonwoven Geotextile"
          description="Lightweight nonwoven geotextile for drainage and filtration applications. Provides excellent water flow while preventing soil migration."
          ctaText="Request a Quote"
          ctaLink="/contact"
          secondaryCtaText="Download Spec Sheet"
          secondaryCtaLink="/specs/MIRAFI_135N_SPEC.pdf"
          image="/images/products/mirafi-135n.jpg"
          imageAlt="Mirafi 135N Nonwoven Geotextile"
        />

        <Section background="gray">
          <ProductDetail features={features} applications={applications} />
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
