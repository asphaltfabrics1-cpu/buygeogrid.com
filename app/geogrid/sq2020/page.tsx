import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import ProductDetail from '@/components/ProductDetail';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SQ2020 Economy Geogrid Northern Ohio | Cleveland Akron Budget-Friendly',
  description: 'Buy SQ2020 economy geogrid in Northern Ohio. Budget-friendly for light-duty applications. Serving Cleveland, Akron, Toledo. Free DCP testing. Call (440) 368-1420.',
  keywords: ['SQ2020 Geogrid Ohio', 'economy Geogrid Cleveland', 'budget Geogrid Northern Ohio', 'cheap Geogrid Akron', 'light-duty Geogrid Ohio'],
  openGraph: {
    title: 'SQ2020 Economy Geogrid | Northern Ohio Budget Solution',
    description: 'Buy SQ2020 for budget-friendly light-duty applications. Northern Ohio distributor.',
    images: ['/images/products/solution-biaxial.png'],
  },
};

export default function SQ2020() {
  const features = [
    { text: 'Economy biaxial Geogrid' },
    { text: 'Budget-friendly solution' },
    { text: 'Good for light-duty applications' },
    { text: 'Easy to install' },
  ];

  const applications = [
    { text: 'Residential driveways' },
    { text: 'Light traffic areas' },
    { text: 'Temporary roads' },
    { text: 'Landscaping projects' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <PageHero
          title="SQ2020 Economy Geogrid"
          description="Budget-friendly biaxial Geogrid for light-duty applications. Cost-effective solution for residential and light commercial projects."
          ctaText="Request a Quote"
          ctaLink="/contact"
          secondaryCtaText="Download Spec Sheet"
          secondaryCtaLink="/specs/SQ2020_SPEC.pdf"
          image="/images/products/solution-biax.png"
          imageAlt="SQ2020 Economy Geogrid"
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
