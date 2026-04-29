import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import ProductDetail from '@/components/ProductDetail';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Buy Mirafi 135N Nonwoven Geotextile | Ohio Distributor | BuyGeogrid',
  description: 'Buy Solmax Mirafi 135N nonwoven geotextile for drainage and filtration. Lightweight needlepunched polypropylene with 155 gal/min/ft² flow rate. BABA compliant. Ohio distributor serving Cleveland, Akron, Toledo.',
  keywords: ['Mirafi 135N', 'nonwoven geotextile', 'drainage fabric', 'geotextile Ohio', 'Cleveland', 'Akron'],
  alternates: {
    canonical: 'https://www.buygeogrid.com/135n',
  },
  openGraph: {
    title: 'Buy Mirafi 135N Nonwoven Geotextile | Ohio Distributor | BuyGeogrid',
    description: 'Lightweight drainage and filtration fabric. Highest flow rate in the Mirafi nonwoven series. Ohio distributor.',
    images: ['/images/products/mirafi-135n.jpg'],
  },
};

// FAQ data for schema markup
const faqData = [
  {
    question: "What is the Mirafi 135N nonwoven geotextile?",
    answer: "The Mirafi 135N is a needlepunched nonwoven geotextile composed of polypropylene fibers formed into a stable network. It is the lightweight option in the Mirafi nonwoven line, designed for drainage and filtration applications where high flow rates are important. It is manufactured by TenCate Geosynthetics Americas (a Solmax company) and tested in a GAI-LAP accredited laboratory."
  },
  {
    question: "What is the Mirafi 135N used for?",
    answer: "The 135N is used for drainage systems, erosion control, French drains, and retaining wall drainage. Its high flow rate of 155 gal/min/ft² makes it excellent for applications where maximum water movement is the priority."
  },
  {
    question: "How does the 135N compare to the 140N and 180N?",
    answer: "The 135N offers the highest flow rate (155 gal/min/ft²) with the lightest weight, ideal for maximum drainage. The 140N provides a balance of strength and flow at 135 gal/min/ft². The 180N is the heavy-duty option with the tightest filtration at 95 gal/min/ft². Choose based on whether you need maximum flow (135N), balanced performance (140N), or maximum strength and fine filtration (180N)."
  },
  {
    question: "What roll sizes does the Mirafi 135N come in?",
    answer: "The 135N comes in rolls measuring 12.5 feet wide by 360 feet long, covering approximately 600 square yards per roll. Each roll weighs approximately 122 lbs, making it the lightest of the nonwoven options."
  },
  {
    question: "Is the Mirafi 135N BABA compliant?",
    answer: "Yes, the Mirafi 135N meets Build America, Buy America Act (BABA) requirements. It is manufactured by TenCate Geosynthetics Americas (a Solmax company) and is inert to biological degradation, resisting naturally encountered chemicals, alkalis, and acids."
  }
];

// JSON-LD Schema for Product and FAQ
const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Mirafi 135N Nonwoven Geotextile",
  "description": "Lightweight needlepunched nonwoven geotextile for drainage and filtration applications. Highest flow rate in the Mirafi nonwoven series at 155 gal/min/ft².",
  "brand": {
    "@type": "Brand",
    "name": "Solmax"
  },
  "category": "Nonwoven Geotextiles",
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

        {/* What Is the 135N Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">What Is the Mirafi 135N?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The Mirafi 135N is a needlepunched nonwoven geotextile composed of polypropylene fibers formed into a stable network. This is the lightweight option in the Mirafi nonwoven line, designed for drainage and filtration applications where high flow rates are important.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The 135N is inert to biological degradation and resists naturally encountered chemicals, alkalis, and acids. It is manufactured by TenCate Geosynthetics Americas (a Solmax company) and tested in a GAI-LAP accredited laboratory. This product meets Build America, Buy America Act requirements.
            </p>
          </div>
        </section>

        {/* Mechanical Properties Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Mechanical Properties</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The 135N provides grab tensile strength of 80 lbs in both directions with 50% elongation. Trapezoid tear strength measures 30 lbs and CBR puncture strength reaches 175 lbs. While lighter duty than the 140N and 180N, these properties are sufficient for many residential and light commercial applications.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The apparent opening size (AOS) is #50 U.S. sieve (0.30mm), providing good filtration while allowing water passage. This is the most open of the three nonwoven products.
            </p>
          </div>
        </section>

        {/* Drainage Properties Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Drainage Properties</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The 135N has the highest flow rate of the Mirafi nonwoven series at 155 gal/min/ft² with permittivity of 2.1 sec⁻¹. This makes it excellent for applications where maximum drainage is the priority.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The 135N retains 70% of its strength after 500 hours of UV exposure. Once buried, the fabric maintains its drainage and filtration properties for the life of the installation.
            </p>
          </div>
        </section>

        {/* Roll Sizes Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Roll Sizes and Coverage</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The 135N comes in rolls measuring 12.5 feet wide by 360 feet long, covering approximately 600 square yards per roll. Each roll weighs approximately 122 lbs—the lightest of the nonwoven options.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Contact us for current availability and delivery lead times. We can coordinate shipments throughout Northern Ohio.
            </p>
          </div>
        </section>

        {/* Comparing Nonwoven Products Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Comparing Nonwoven Products</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The 135N, 140N, and 180N differ in strength and filtration characteristics. The 135N offers the highest flow rate with the lightest weight—ideal for drainage applications where maximum water movement is needed. The 140N provides a balance of strength and flow. The 180N is the heavy-duty option with the tightest filtration.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Choose based on your application: French drains and residential drainage often work well with 135N. Commercial drainage and retaining wall applications may require 140N or 180N. Contact us to discuss your project requirements.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Mirafi 135N FAQ</h2>
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
