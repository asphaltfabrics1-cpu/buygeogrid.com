import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import ProductDetail from '@/components/ProductDetail';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Buy Mirafi 600X Heavy-Duty Woven Geotextile | Ohio | BuyGeogrid',
  description: 'Buy Solmax Mirafi 600X heavy-duty woven geotextile for demanding stabilization and separation. 315 lbs grab tensile, 900 lbs CBR puncture strength. Ohio distributor serving Cleveland, Akron, Toledo.',
  keywords: ['Mirafi 600X', 'woven geotextile', 'geotextile Ohio', 'heavy-duty fabric', 'Cleveland', 'Akron'],
  alternates: {
    canonical: 'https://www.buygeogrid.com/600x',
  },
  openGraph: {
    title: 'Buy Mirafi 600X Heavy-Duty Woven Geotextile | Ohio | BuyGeogrid',
    description: 'Heavy-duty woven fabric for demanding separation and stabilization. Ohio distributor.',
    images: ['/images/products/mirafi-600x.jpeg'],
  },
};

// FAQ data for schema markup
const faqData = [
  {
    question: "What is the Mirafi 600X woven geotextile?",
    answer: "The Mirafi 600X is a heavy-duty woven geotextile composed of polypropylene fibers woven into a stable network where the fibers retain their relative position. It is the high-strength option in the Mirafi woven separation fabric line, manufactured by TenCate Geosynthetics Americas (a Solmax company) and tested in a GAI-LAP accredited laboratory."
  },
  {
    question: "How does the 600X compare to the 500X?",
    answer: "The 600X is significantly stronger than the 500X, with 315 lbs grab tensile strength (vs 200 lbs for 500X), 120 lbs trapezoid tear strength (vs 75 lbs), and 900 lbs CBR puncture strength (vs 700 lbs). Both share the same AOS of #40 U.S. sieve (0.425mm) and flow rate of 4 gal/min/ft². The 600X is designed for demanding applications where the 500X may not provide adequate performance."
  },
  {
    question: "What heavy-duty applications is the 600X used for?",
    answer: "The 600X is used for heavy traffic roads, industrial site preparation, landfill construction, and heavy equipment access roads. It is ideal for demanding applications where maximum strength is required and where heavy equipment traffic or poor soil conditions are present."
  },
  {
    question: "What are the Mirafi 600X specifications?",
    answer: "The 600X provides 315 lbs grab tensile strength in both directions with 15% elongation, 120 lbs trapezoid tear strength, and 900 lbs CBR puncture strength. The AOS is #40 U.S. sieve (0.425mm) with permittivity of 0.05 sec⁻¹ and flow rate of 4 gal/min/ft². Rolls measure 12.5 feet wide by 360 feet long, covering approximately 500 square yards at 208 lbs per roll."
  },
  {
    question: "Does the Mirafi 600X meet DOT compliance requirements?",
    answer: "The 600X is manufactured by TenCate Geosynthetics Americas (a Solmax company) and tested in a GAI-LAP accredited laboratory. It is inert to biological degradation and resists naturally encountered chemicals, alkalis, and acids. Contact us to verify compliance with your specific state or project DOT requirements."
  }
];

// JSON-LD Schema for Product and FAQ
const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Mirafi 600X Woven Geotextile",
  "description": "Heavy-duty woven geotextile for demanding stabilization and separation applications. Maximum tensile strength at 315 lbs with 900 lbs CBR puncture resistance.",
  "brand": {
    "@type": "Brand",
    "name": "Solmax"
  },
  "category": "Woven Geotextiles",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "areaServed": {
      "@type": "State",
      "name": "Ohio"
    },
    "seller": {
      "@type": "Organization",
      "name": "BuyGeogrid.com",
      "telephone": "+1-440-368-1420"
    }
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqData.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
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
      {/* JSON-LD Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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

        {/* What Is the 600X Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">What Is the Mirafi 600X?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The Mirafi 600X is a heavy-duty woven geotextile composed of polypropylene fibers woven into a stable network where the fibers retain their relative position. This is the high-strength option in the Mirafi woven separation fabric line.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The 600X is inert to biological degradation and resists naturally encountered chemicals, alkalis, and acids. It is manufactured by TenCate Geosynthetics Americas (a Solmax company) and tested in a GAI-LAP accredited laboratory.
            </p>
          </div>
        </section>

        {/* Mechanical Properties Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Mechanical Properties</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The 600X provides grab tensile strength of 315 lbs in both the machine and cross-machine directions with 15% elongation—significantly stronger than the 500X. Trapezoid tear strength measures 120 lbs and CBR puncture strength reaches 900 lbs.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The apparent opening size (AOS) is #40 U.S. sieve (0.425mm), matching the 500X filtration characteristics. Permittivity of 0.05 sec⁻¹ and flow rate of 4 gal/min/ft² allow water passage while preventing soil migration.
            </p>
          </div>
        </section>

        {/* Durability Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Durability</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The 600X retains 70% of its strength after 500 hours of UV exposure testing. Once covered with soil or aggregate, the fabric is protected from UV light and will maintain its properties for the life of the installation.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The polypropylene construction resists biological degradation and is unaffected by chemicals, alkalis, and acids commonly found in soil environments.
            </p>
          </div>
        </section>

        {/* Roll Sizes Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Roll Sizes and Coverage</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The 600X comes in rolls measuring 12.5 feet wide by 360 feet long, covering approximately 500 square yards per roll. Each roll weighs approximately 208 lbs. The heavier weight reflects the increased material strength.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Contact us for current availability and delivery lead times. We can coordinate shipments throughout Northern Ohio.
            </p>
          </div>
        </section>

        {/* When to Choose 600X Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">When to Choose 600X</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Choose the 600X for demanding applications where maximum strength is required. Common uses include heavy traffic roads, industrial site preparation, landfill construction, and heavy equipment access roads where the standard 500X may not provide adequate performance.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              For typical road separation and parking lot applications, the 500X provides adequate performance at lower cost. Contact us to discuss your project requirements and we can recommend the most appropriate product.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Mirafi 600X FAQ</h2>
            <div className="space-y-6">
              {faqData.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
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
