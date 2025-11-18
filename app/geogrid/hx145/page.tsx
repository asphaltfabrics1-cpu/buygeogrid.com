import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import ProductDetail from '@/components/ProductDetail';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tensar H-Series HX145 Geogrid Ohio | Medium-Height Retaining Walls',
  description: 'Tensar H-Series HX145 Geogrid available in Ohio. Medium-strength Geogrid for retaining walls and MSE structures. Free DCP testing in Cleveland and Akron. Download spec sheet.',
  keywords: ['Tensar HX145', 'H-Series HX145', 'Geogrid Ohio', 'retaining wall Geogrid', 'MSE wall', 'Cleveland', 'Akron'],
  openGraph: {
    title: 'Tensar H-Series HX145 Geogrid | Retaining Walls Ohio',
    description: 'Medium-strength Geogrid for retaining walls and MSE structures. Northern Ohio distributor.',
    images: ['/images/products/h-series.png'],
  },
};

export default function HX145() {
  const features = [
    { text: 'Medium-strength uniaxial Geogrid' },
    { text: 'Ultimate tensile strength of 145 kN/m' },
    { text: 'Ideal for medium-height retaining walls' },
    { text: 'Cost-effective reinforcement' },
  ];

  const applications = [
    { text: 'Medium-height retaining walls' },
    { text: 'MSE structures' },
    { text: 'Slope stabilization' },
    { text: 'Embankment reinforcement' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <PageHero
          title="Tensar H-Series™ HX145™ Geogrid"
          description="Medium-strength uniaxial Geogrid for retaining walls and MSE structures. Cost-effective solution for medium-height applications."
          ctaText="Request a Quote"
          ctaLink="/contact"
          secondaryCtaText="Download Spec Sheet"
          secondaryCtaLink="/specs/HX145_SPEC.pdf"
          image="/images/products/h-series.png"
          imageAlt="Tensar H-Series HX145 Geogrid"
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
