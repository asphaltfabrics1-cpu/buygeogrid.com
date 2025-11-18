import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import ProductDetail from '@/components/ProductDetail';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Petrotac 1.5ft Roll Paving Interlayer Ohio | Wider Crack Prevention',
  description: 'Petrotac 1.5ft roll paving interlayer available in Ohio. Wider format prevents reflective cracking in asphalt overlays. Serving Cleveland and Akron. Download spec sheet.',
  keywords: ['Petrotac', 'paving interlayer', 'crack prevention', 'asphalt overlay', 'Cleveland', 'Akron'],
  openGraph: {
    title: 'Petrotac 1.5ft Roll Paving Interlayer | Ohio',
    description: 'Wider format prevents reflective cracking in asphalt overlays. Northern Ohio distributor.',
    images: ['/images/products/petrotac.jpg'],
  },
};

export default function Petrotac15ft() {
  const features = [
    { text: 'Prevents reflective cracking' },
    { text: '1.5-foot wide rolls for wider coverage' },
    { text: 'Self-adhesive backing' },
    { text: 'Enhanced waterproofing' },
  ];

  const applications = [
    { text: 'Wide crack and joint treatment' },
    { text: 'Asphalt overlay projects' },
    { text: 'Pavement rehabilitation' },
    { text: 'Commercial paving projects' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <PageHero
          title="Petrotac 1.5ft Roll Paving Interlayer"
          description="Wider self-adhesive paving interlayer for enhanced crack prevention coverage. Perfect for wider cracks and joints in asphalt overlays."
          ctaText="Request a Quote"
          ctaLink="/contact"
          secondaryCtaText="Download Spec Sheet"
          secondaryCtaLink="/specs/PETROTAC_SPEC.pdf"
          image="/images/products/petrotac.jpg"
          imageAlt="Petrotac 1.5ft Roll Paving Interlayer"
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
