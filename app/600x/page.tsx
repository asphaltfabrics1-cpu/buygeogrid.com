import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import ProductDetail from '@/components/ProductDetail';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mirafi 600X Woven Geotextile Ohio | Heavy-Duty Fabric',
  description: 'Mirafi 600X woven geotextile available in Ohio. Heavy-duty fabric for demanding applications. Serving Cleveland and Akron. Download spec sheet.',
  keywords: ['Mirafi 600X', 'woven geotextile', 'geotextile Ohio', 'heavy-duty fabric', 'Cleveland', 'Akron'],
  openGraph: {
    title: 'Mirafi 600X Woven Geotextile | Heavy-Duty Ohio',
    description: 'Heavy-duty woven fabric for demanding applications. Northern Ohio distributor.',
    images: ['/images/products/mirafi-600x.jpeg'],
  },
};

export default function Mirafi600X() {
  const features = [
    { text: 'Heavy-duty woven polypropylene' },
    { text: 'Maximum tensile strength' },
    { text: 'Exceptional puncture resistance' },
    { text: 'Long-term durability' },
  ];

  const applications = [
    { text: 'Heavy traffic roads' },
    { text: 'Industrial site preparation' },
    { text: 'Landfill construction' },
    { text: 'Heavy equipment access roads' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <PageHero
          title="Mirafi® 600X Woven Geotextile"
          description="Heavy-duty woven geotextile for demanding applications. Provides maximum tensile strength and exceptional puncture resistance."
          ctaText="Request a Quote"
          ctaLink="/contact"
          secondaryCtaText="Download Spec Sheet"
          secondaryCtaLink="/specs/MIRAFI_600X_SPEC.pdf"
          image="/images/products/mirafi-600x.jpeg"
          imageAlt="Mirafi 600X Woven Geotextile"
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
