import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import ProductDetail from '@/components/ProductDetail';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mirafi 180N Nonwoven Geotextile Ohio | Heavy-Duty Drainage Fabric',
  description: 'Mirafi 180N nonwoven geotextile available in Ohio. Heavy-duty drainage and filtration fabric. Serving Cleveland and Akron. Download spec sheet.',
  keywords: ['Mirafi 180N', 'nonwoven geotextile', 'drainage fabric', 'heavy-duty fabric', 'Cleveland', 'Akron'],
  openGraph: {
    title: 'Mirafi 180N Nonwoven Geotextile | Heavy-Duty Ohio',
    description: 'Heavy-duty drainage and filtration fabric. Northern Ohio distributor.',
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
