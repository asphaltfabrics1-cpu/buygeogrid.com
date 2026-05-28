import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import ProductDetail from '@/components/ProductDetail';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pothole Repair Ohio | Patch Packs Cold Asphalt Patch | Cleveland, Akron, Toledo',
  description: 'Professional pothole repair solution for Ohio. Patch Packs cold asphalt patch delivers permanent pothole fixes in any weather. VOC-free, instant traffic-ready. Serving Cleveland, Akron, Canton, Toledo. Call (440) 368-1420.',
  keywords: [
    'pothole repair Ohio',
    'pothole repair Cleveland',
    'pothole repair Akron',
    'pothole repair Toledo',
    'pothole repair Canton',
    'pothole repair Youngstown',
    'cold patch pothole repair',
    'cold asphalt patch Ohio',
    'permanent pothole fix',
    'pothole filler Ohio',
    'winter pothole repair',
    'all-weather pothole repair',
    'emergency pothole repair Ohio',
    'commercial pothole repair',
    'parking lot pothole repair',
    'driveway pothole repair',
    'asphalt pothole repair',
    'cold patch asphalt',
    'Patch Packs Ohio',
    'VOC-free pothole material',
    'bridge deck repair material',
    'pothole repair material',
    'buy pothole patch Ohio',
    'pothole repair supplies Cleveland',
    'municipal pothole repair'
  ],
  alternates: {
    canonical: 'https://www.buygeogrid.com/patch-packs',
  },
  openGraph: {
    title: 'Pothole Repair Ohio | Patch Packs Cold Asphalt Patch Solution',
    description: 'Professional pothole repair solution for Ohio. Cold asphalt patch that works in any weather. Instant traffic-ready. Serving Cleveland, Akron, Canton, Toledo.',
    images: ['/images/products/patch-packs.png'],
  },
};

// FAQ data for schema markup
const faqData = [
  {
    question: "What is the best way to repair a pothole?",
    answer: "The best way to repair a pothole is to clean out loose debris, fill with cold patch asphalt material like Patch Packs, and compact firmly. Cold patch asphalt works in any weather and allows immediate traffic access. For deeper potholes over 4 inches, fill in 2-inch layers, compacting each layer."
  },
  {
    question: "Can you repair potholes in winter?",
    answer: "Yes, cold asphalt patch products like Patch Packs are specifically designed for winter pothole repair. Unlike hot mix asphalt, cold patch works in freezing temperatures and wet conditions, making it ideal for emergency pothole repairs in Ohio's harsh winters."
  },
  {
    question: "How long does a pothole repair last?",
    answer: "A properly applied cold asphalt patch repair can last several years. Patch Packs use 100% recycled aggregate with a special binder that expands and contracts with temperature changes, creating a durable bond. The key to longevity is proper compaction and ensuring the pothole is clean before application."
  },
  {
    question: "What size pothole can cold patch repair?",
    answer: "Cold patch asphalt is effective for potholes 1 inch deep or deeper. For shallow surface defects, other repair methods may be more appropriate. For very deep potholes (over 4 inches), apply cold patch in multiple 2-inch layers, compacting each layer before adding the next."
  },
  {
    question: "Do I need special equipment for pothole repair?",
    answer: "No, Patch Packs cold asphalt patch requires no specialized equipment. A single person can complete repairs using basic hand tools. Simply place, spread, and compact with a hand tamper or vehicle tire. No heating, mixing, or special training required."
  },
  {
    question: "Where can I buy pothole repair material in Ohio?",
    answer: "BuyGeogrid.com stocks Patch Packs cold asphalt patch at our Solon, Ohio warehouse. We deliver throughout Cleveland, Akron, Canton, Toledo, Youngstown, and all of Northern Ohio. Most orders ship within 24-48 hours. Call (440) 368-1420 for pricing and availability."
  }
];

// JSON-LD Schema for Product and FAQ
const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Patch Packs Cold Asphalt Pothole Repair",
  "description": "Professional cold asphalt patch for pothole repair. VOC-free, 100% recycled aggregate. Works in all weather conditions. Immediate traffic access after application.",
  "brand": {
    "@type": "Brand",
    "name": "Patch Packs"
  },
  "category": "Pothole Repair Materials",
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
      "telephone": "+1-440-368-1420",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Solon",
        "addressRegion": "OH",
        "addressCountry": "US"
      }
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

const videoSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "Patch Packs: Road Repairs without Tools",
  "description": "Patch Packs cold asphalt pothole repair demo — fill a pothole with no specialized equipment, in any weather, with immediate traffic access.",
  "thumbnailUrl": "https://i.ytimg.com/vi/k2-_wDHrnk8/maxresdefault.jpg",
  "uploadDate": "2024-01-01",
  "contentUrl": "https://www.youtube.com/watch?v=k2-_wDHrnk8",
  "embedUrl": "https://www.youtube.com/embed/k2-_wDHrnk8",
  "publisher": {
    "@type": "Organization",
    "name": "BuyGeogrid.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.buygeogrid.com/images/logos/afsupplylogo_transparent.png"
    }
  }
};

export default function PatchPacks() {
  const features = [
    { text: 'No specialized equipment required' },
    { text: 'Single-person application' },
    { text: 'VOC-free, environmentally conscious' },
    { text: 'Immediate traffic access after application' },
    { text: 'Works in all weather conditions and seasons' },
    { text: '100% recycled aggregate' },
  ];

  const applications = [
    { text: 'Bridge deck repair material' },
    { text: 'Highway and road pavements (asphalt and concrete)' },
    { text: 'Pavement leveling around drains and manholes' },
    { text: 'Parking facilities and driveways' },
    { text: 'High-traffic commercial surfaces' },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />
      <Header />
      <main className="flex-grow">
        <PageHero
          title="Pothole Repair That Works in Any Weather"
          description="Patch Packs cold asphalt patch delivers permanent pothole repairs year-round—even in freezing temperatures. No special equipment needed. Instant traffic access after compaction. VOC-free formula with 100% recycled aggregate. Your trusted pothole repair supplier serving Cleveland, Akron, Canton, Toledo, and all of Northern Ohio."
          ctaText="Request a Quote"
          ctaLink="/contact"
          secondaryCtaText="Call (440) 368-1420"
          secondaryCtaLink="tel:4403681420"
          image="/images/products/patch-packs.png"
          imageAlt="Patch Packs Cold Asphalt Pothole Repair Solution"
          logo="/images/logos/PatchPacksTM Logo 2in.png"
          logoLink="https://fptinfrastructure.com/products/pavement-repair-materials/patch-packs/"
          logoAlt="Patch Packs"
        />

        <Section background="gray">
          <ProductDetail features={features} applications={applications} />
        </Section>

        {/* What Are Patch Packs Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">What Are Patch Packs?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Patch Packs are a fast and easy cold asphalt patch solution for all-weather emergency pavement repair. Whether you need to fix potholes, spalls, or other pavement defects, this cold patch asphalt product delivers durable results without specialized equipment. The VOC-free pothole material combines 100% recycled aggregate with a non-volatile binder, making it an environmentally conscious choice for pavement maintenance.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Available in Standard and Flex variants, Patch Packs are designed for repairing asphalt and reactive concrete defects measuring 1 inch or deeper. The VOC-free formulation makes them safe to use in any environment—from municipal road crews to commercial property managers.
            </p>
          </div>
        </section>

        {/* Video Demo Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Watch Patch Packs in Action</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
              See how a single person can repair a pothole with Patch Packs in under a minute — no torches, no hot box, no special tools required.
            </p>
            <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-gray-200 shadow-lg bg-gray-100">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube-nocookie.com/embed/k2-_wDHrnk8"
                title="Patch Packs: Road Repairs without Tools"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">How Cold Patch Asphalt Works</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The asphalt binder in this cold asphalt patch enables Patch Packs to expand and compress under vehicle load, establishing adhesion to existing surfaces while simultaneously sealing the top and side edges of the repair area. Unlike hot mix asphalt, this all-weather pothole repair solution works in any temperature.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Simply clean the pothole of loose debris, place the recycled aggregate patch material into the hole, and compact it. No heating, mixing, or specialized equipment is required. The repair can be opened to traffic immediately after compaction—perfect for emergency pavement repair situations.
            </p>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Pothole Repair Applications</h2>
            <ul className="space-y-3 text-lg text-gray-700">
              <li><strong>Bridge deck repair material</strong> – Trusted solution for bridge approach and deck repairs</li>
              <li><strong>Highway and road pavements</strong> – Works on both asphalt and concrete surfaces</li>
              <li><strong>Utility cut restoration</strong> – Pavement leveling around drains, manholes, and access points</li>
              <li><strong>Multi-use vehicular pathways</strong> – Bike paths, trails, and shared roadways</li>
              <li><strong>Commercial surfaces</strong> – Parking facilities, driveways, and high-traffic areas</li>
              <li><strong>Emergency cold weather repairs</strong> – All-weather pothole repair when hot mix isn&apos;t available</li>
            </ul>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Benefits of Cold Asphalt Patch</h2>
            <ul className="space-y-3 text-lg text-gray-700">
              <li><strong>No specialized equipment required</strong> – Simple application process for any crew</li>
              <li><strong>Single-person application</strong> – Reduces labor costs significantly</li>
              <li><strong>Reduces safety hazards</strong> – For workers and drivers alike</li>
              <li><strong>VOC-free pothole material</strong> – Environmentally conscious formulation</li>
              <li><strong>Immediate traffic access</strong> – No curing time needed for emergency pavement repair</li>
              <li><strong>All-weather pothole repair</strong> – Works in any season or condition, including freezing temperatures</li>
              <li><strong>100% recycled aggregate</strong> – Sustainable choice for municipalities and contractors</li>
            </ul>
          </div>
        </section>

        {/* Product Variants Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Product Variants</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Standard Patch Packs</h3>
                <p className="text-gray-700">
                  Designed for standard cold asphalt patch repairs on asphalt and concrete pavement. Ideal for most pothole and spall repairs on roads, parking lots, and driveways throughout Northern Ohio.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Flex Patch Packs</h3>
                <p className="text-gray-700">
                  Enhanced flexibility for areas with greater movement or thermal expansion. The preferred bridge deck repair material for surfaces subject to heavy loads and temperature fluctuations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Repair Potholes Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Why Repair Potholes Quickly?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Potholes cause vehicle damage, create safety hazards, and accelerate pavement deterioration. Water entering through potholes undermines the base layers, leading to larger failures and more expensive repairs. In freeze-thaw climates like Northern Ohio, this cycle can cause rapid pavement breakdown—making emergency pavement repair essential.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Addressing potholes promptly with an effective cold patch asphalt solution like Patch Packs protects your pavement investment and reduces liability exposure. Quick all-weather pothole repair also improves the driving experience and public perception of road conditions.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Pothole Repair FAQ</h2>
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

        {/* Serving Northern Ohio Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Pothole Repair Supplier Serving Northern Ohio</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We stock Patch Packs cold asphalt patch at our Solon warehouse and deliver throughout Cleveland, Akron, Canton, Youngstown, Toledo, and the surrounding areas. Most orders ship or are available for pickup within 24–48 hours. Contact us for current availability and to discuss your pothole repair needs.
            </p>
          </div>
        </section>

        {/* Lunch & Learn CTA Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Want to Learn More?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Schedule a free Lunch & Learn for your team. We provide expert training on cold asphalt patch products, pavement repair solutions, and geosynthetics—plus free lunch and PDH credits for engineers.
            </p>
            <Link
              href="/lunch-and-learn"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-[#00c97e] hover:bg-[#00b36f] rounded transition-colors duration-200"
            >
              Schedule a Lunch & Learn
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 bg-[#1a1a1a] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Order Patch Packs?</h2>
            <p className="text-lg text-gray-300 mb-6">Get competitive pricing on cold asphalt patch and expert support from your Northern Ohio asphalt repair supply distributor</p>
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
