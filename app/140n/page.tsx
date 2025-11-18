import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import ProductDetail from '@/components/ProductDetail';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mirafi 140N Nonwoven Geotextile Ohio | Medium-Duty Drainage Fabric',
  description: 'Mirafi 140N nonwoven geotextile available in Ohio. Medium-duty drainage and filtration fabric. Serving Cleveland and Akron. Download spec sheet.',
  keywords: ['Mirafi 140N', 'nonwoven geotextile', 'drainage fabric', 'geotextile Ohio', 'Cleveland', 'Akron'],
  openGraph: {
    title: 'Mirafi 140N Nonwoven Geotextile | Medium-Duty Ohio',
    description: 'Medium-duty drainage and filtration fabric. Northern Ohio distributor.',
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
