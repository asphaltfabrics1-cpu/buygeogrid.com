import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import ProductDetail from '@/components/ProductDetail';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mirafi 500X Woven Geotextile Ohio | High-Strength Fabric',
  description: 'Mirafi 500X woven geotextile available in Ohio. High-strength fabric for separation and stabilization. Serving Cleveland and Akron. Download spec sheet.',
  keywords: ['Mirafi 500X', 'woven geotextile', 'geotextile Ohio', 'separation fabric', 'Cleveland', 'Akron'],
  openGraph: {
    title: 'Mirafi 500X Woven Geotextile | Ohio Distributor',
    description: 'High-strength woven fabric for separation and stabilization. Northern Ohio distributor.',
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
