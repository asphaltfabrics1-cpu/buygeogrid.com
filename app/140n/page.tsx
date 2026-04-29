import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import ProductDetail from '@/components/ProductDetail';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Buy Mirafi 140N Nonwoven Geotextile | Ohio Distributor | BuyGeogrid',
  description: 'Buy Solmax Mirafi 140N medium-duty nonwoven geotextile for drainage and filtration. 120 lbs grab tensile, 135 gal/min/ft² flow rate. BABA compliant. Ohio distributor serving Cleveland, Akron, Toledo.',
  keywords: ['Mirafi 140N', 'nonwoven geotextile', 'drainage fabric', 'geotextile Ohio', 'Cleveland', 'Akron'],
  alternates: {
    canonical: 'https://www.buygeogrid.com/140n',
  },
  openGraph: {
    title: 'Buy Mirafi 140N Nonwoven Geotextile | Ohio Distributor | BuyGeogrid',
    description: 'Medium-duty drainage and filtration fabric. Balanced performance for most applications. Ohio distributor.',
    images: ['/images/products/mirafi-180n.jpeg'],
  },
};

// FAQ data for schema markup
const faqData = [
  {
    question: "What is the Mirafi 140N nonwoven geotextile?",
    answer: "The Mirafi 140N is a needlepunched nonwoven geotextile composed of polypropylene fibers formed into a stable network. It is the medium-duty option in the Mirafi nonwoven line, providing a balance of strength, filtration, and flow rate. It is manufactured by TenCate Geosynthetics Americas (a Solmax company) and tested in a GAI-LAP accredited laboratory."
  },
  {
    question: "How does the 140N compare to the 135N and 180N?",
    answer: "The 140N sits between the 135N and 180N in both strength and filtration. It provides 120 lbs grab tensile strength (vs 80 lbs for 135N and 205 lbs for 180N), a flow rate of 135 gal/min/ft² (vs 155 for 135N and 95 for 180N), and AOS of #70 sieve (vs #50 for 135N and #80 for 180N). The 140N is the most versatile option for a wide range of applications."
  },
  {
    question: "What applications is the Mirafi 140N used for?",
    answer: "The 140N is used for subsurface drainage, pavement edge drains, retaining wall drainage, and landscaping applications. It is the most versatile of the nonwoven options, suitable for a wide range of drainage and filtration applications."
  },
  {
    question: "What are the Mirafi 140N specifications?",
    answer: "The 140N provides 120 lbs grab tensile strength with 50% elongation, 50 lbs trapezoid tear strength, 310 lbs CBR puncture strength, and a fabric weight of 4.0 oz/yd². The AOS is #70 U.S. sieve (0.212mm) with a flow rate of 135 gal/min/ft² and permittivity of 1.7 sec⁻¹."
  },
  {
    question: "Is the Mirafi 140N available in Ohio?",
    answer: "Yes, BuyGeogrid.com is an Ohio distributor for the Mirafi 140N. The 140N comes in rolls measuring 12.5 feet wide by 360 feet long, covering approximately 500 square yards per roll. Contact us at (440) 368-1420 for current availability and delivery throughout Northern Ohio."
  }
];

// JSON-LD Schema for Product and FAQ
const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Mirafi 140N Nonwoven Geotextile",
  "description": "Medium-duty needlepunched nonwoven geotextile for drainage and filtration. Balanced performance with 120 lbs grab tensile strength and 135 gal/min/ft² flow rate.",
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

        {/* What Is the 140N Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">What Is the Mirafi 140N?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The Mirafi 140N is a needlepunched nonwoven geotextile composed of polypropylene fibers formed into a stable network. This is the medium-duty option in the Mirafi nonwoven line, providing a balance of strength, filtration, and flow rate.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The 140N is inert to biological degradation and resists naturally encountered chemicals, alkalis, and acids. It is manufactured by TenCate Geosynthetics Americas (a Solmax company) and tested in a GAI-LAP accredited laboratory. This product meets Build America, Buy America Act requirements.
            </p>
          </div>
        </section>

        {/* Mechanical Properties Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Mechanical Properties</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The 140N provides grab tensile strength of 120 lbs in both directions with 50% elongation—50% stronger than the 135N. Trapezoid tear strength measures 50 lbs and CBR puncture strength reaches 310 lbs. The fabric weight is 4.0 oz/yd².
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The apparent opening size (AOS) is #70 U.S. sieve (0.212mm), providing tighter filtration than the 135N. This helps prevent fine soil particles from migrating through the fabric.
            </p>
          </div>
        </section>

        {/* Drainage Properties Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Drainage Properties</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The 140N has a flow rate of 135 gal/min/ft² with permittivity of 1.7 sec⁻¹. While slightly lower than the 135N, this flow rate is still excellent for most drainage applications.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The 140N retains 70% of its strength after 500 hours of UV exposure. Once buried, the fabric maintains its drainage and filtration properties for the life of the installation.
            </p>
          </div>
        </section>

        {/* Roll Sizes Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Roll Sizes and Coverage</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The 140N comes in rolls measuring 12.5 feet wide by 360 feet long, covering approximately 500 square yards per roll. Each roll weighs approximately 151 lbs.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Contact us for current availability and delivery lead times. We can coordinate shipments throughout Northern Ohio.
            </p>
          </div>
        </section>

        {/* When to Choose 140N Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">When to Choose 140N</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The 140N is the most versatile of the nonwoven options, suitable for a wide range of drainage and filtration applications. Common uses include subsurface drainage, pavement edge drains, retaining wall drainage, and landscaping applications.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              For applications requiring maximum flow rate, consider the 135N. For demanding applications with heavy equipment or where finer filtration is needed, the 180N may be more appropriate. Contact us to discuss your project requirements.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Mirafi 140N FAQ</h2>
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
