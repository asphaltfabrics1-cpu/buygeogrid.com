import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import ProductDetail from '@/components/ProductDetail';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SQ2020 Economy Geogrid Ohio | Budget',
  description: 'SQ2020 economy biaxial Geogrid for light-duty residential and commercial applications. Patios, walkways, driveways. Free DCP testing. Cleveland, Akron.',
  keywords: ['SQ2020 Geogrid Ohio', 'economy Geogrid Cleveland', 'budget Geogrid Northern Ohio', 'cheap Geogrid Akron', 'light-duty Geogrid Ohio'],
  alternates: {
    canonical: 'https://www.buygeogrid.com/geogrid/sq2020',
  },
  openGraph: {
    title: 'SQ2020 Economy Geogrid Ohio | Budget',
    description: 'SQ2020 for budget-friendly light-duty applications. Ohio distributor.',
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

        {/* What Is the SQ2020 Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">What Is the SQ2020?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The Tensar BXSQ2020 is an integrally formed biaxial geogrid manufactured from polypropylene. It features square apertures measuring 38mm x 38mm (1.5" x 1.5"), providing equal strength in both the machine and cross-machine directions with ultimate tensile strength of 20 kN/m in each direction.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The SQ2020 is designed as a cost-effective option for light-duty applications. Its symmetrical square aperture pattern makes installation straightforward since the grid performs equally regardless of orientation. This product is suitable for residential and light commercial projects where budget is a primary consideration.
            </p>
          </div>
        </section>

        {/* Structural Properties Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Structural Properties</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The SQ2020 has rib thickness of 1.1mm (0.04") in the machine direction and 0.8mm (0.03") in the cross-machine direction. Junction efficiency measures 93%, meaning nearly all tensile load transfers through the grid nodes. Overall flexural rigidity of 700,000 mg-cm provides moderate stiffness for bridging soft spots.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Aperture stability measures 0.45 m-N/deg, indicating good resistance to in-plane rotational movement during installation. The product has been tested for installation damage resistance, retaining 95% strength in clayey sand, 93% in well-graded sand, and 90% in crushed stone.
            </p>
          </div>
        </section>

        {/* Product Durability Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Product Durability</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The SQ2020 offers 100% resistance to long-term chemical degradation when subjected to aggressive soil environments. It also provides 100% resistance to UV degradation based on 500 hours of ultraviolet light and weathering exposure testing—excellent durability for a budget-friendly product.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The polypropylene construction is designed for soil stabilization applications. Once installed and covered with aggregate, the product maintains its structural properties for the life of the installation.
            </p>
          </div>
        </section>

        {/* Roll Sizes Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Roll Sizes and Coverage</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The SQ2020 comes in rolls measuring approximately 12.9 feet wide by 246 feet long. Each roll is individually identified for quality control purposes. The long roll length provides efficient coverage for larger residential and light commercial projects.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Contact us for current availability and delivery lead times. We can coordinate shipments throughout Northern Ohio and arrange for direct delivery to your jobsite.
            </p>
          </div>
        </section>

        {/* When to Choose SQ2020 Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">When to Choose SQ2020</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The SQ2020 is a good choice when budget is a primary concern and traffic loads are light. Common applications include residential driveways, garden paths, patio bases, and temporary access roads where cost savings are more important than maximum performance.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              For projects with heavier traffic, poor soil conditions, or longer service life requirements, consider the BX1200, BX1300, or InterAx NX series products. Contact us to discuss your project requirements and we can recommend the most appropriate product for your application.
            </p>
          </div>
        </section>

        {/* CTA Section */}
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
