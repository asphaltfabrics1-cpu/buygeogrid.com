import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Patch Packs Cold Asphalt Patch: How It Works & When to Use It | BuyGeogrid',
  description: 'Patch Packs cold asphalt patch explained — how it works, what it repairs, Standard vs Flex variants, and why Ohio contractors and municipalities use it for year-round pothole repair.',
  keywords: ['Patch Packs', 'cold asphalt patch', 'pothole repair', 'cold patch asphalt', 'winter pothole repair', 'VOC-free asphalt', 'recycled aggregate patch', 'Ohio pothole repair', 'bridge deck repair', 'emergency pavement repair'],
  alternates: {
    canonical: 'https://www.buygeogrid.com/blog/patch-packs-cold-asphalt-repair',
  },
  openGraph: {
    title: 'Patch Packs Cold Asphalt Patch: How It Works & When to Use It',
    description: 'Everything you need to know about Patch Packs cold asphalt patch for pothole repair — applications, variants, and how to apply it.',
    type: 'article',
    publishedTime: '2026-04-16',
    authors: ['Asphalt Fabrics & Supply'],
    images: ['/images/products/patch-packs.png'],
  },
};

const faqData = [
  {
    question: "What are Patch Packs made of?",
    answer: "Patch Packs are made from 100% recycled aggregate combined with a non-volatile binder. The formula is VOC-free (zero volatile organic compounds), making it an environmentally conscious choice for pavement repair. The binder allows the material to expand and compress under vehicle load, creating adhesion to the existing surface."
  },
  {
    question: "What is the difference between Standard and Flex Patch Packs?",
    answer: "Standard Patch Packs are designed for typical pothole and spall repairs on asphalt and concrete pavement — roads, parking lots, driveways, and similar surfaces. Flex Patch Packs have enhanced flexibility for areas with greater movement or thermal expansion, such as bridge decks, expansion joints, and surfaces subject to heavy dynamic loads and temperature fluctuations."
  },
  {
    question: "Can Patch Packs be applied in freezing weather?",
    answer: "Yes. Unlike hot mix asphalt, which requires heated material and specific temperature conditions, Patch Packs cold asphalt patch works in any weather — including freezing temperatures, rain, and snow. This makes it the go-to solution for emergency winter pothole repairs when hot mix plants are closed."
  },
  {
    question: "How long does a Patch Packs repair last?",
    answer: "A properly compacted Patch Packs repair can last several years. The key to durability is cleaning the pothole of loose debris before application and compacting the material firmly — either with a hand tamper or by driving a vehicle tire over the repair. For potholes deeper than 4 inches, applying in 2-inch lifts with compaction between each layer produces the most durable result."
  },
  {
    question: "Do I need special equipment to apply Patch Packs?",
    answer: "No. Patch Packs require no heating, mixing, or specialized equipment. A single person can complete a repair using basic hand tools. The process is: clean the hole, place the material in, spread it slightly above the surrounding surface, and compact with a hand tamper or vehicle tire. The repair is traffic-ready immediately after compaction."
  },
  {
    question: "Where can I buy Patch Packs in Ohio?",
    answer: "BuyGeogrid.com stocks Patch Packs at our Solon, Ohio warehouse. We deliver throughout Northern Ohio — Cleveland, Akron, Canton, Youngstown, Toledo, and surrounding areas. Most orders ship or are available for pickup within 24-48 hours. Call (440) 368-1420 for pricing and availability."
  }
];

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

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Patch Packs Cold Asphalt Patch: How It Works & When to Use It",
  "description": "Everything you need to know about Patch Packs cold asphalt patch for pothole repair.",
  "author": {
    "@type": "Organization",
    "name": "Asphalt Fabrics & Supply"
  },
  "publisher": {
    "@type": "Organization",
    "name": "BuyGeogrid.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.buygeogrid.com/images/logos/afsupplylogo_transparent.png"
    }
  },
  "datePublished": "2026-04-16",
  "mainEntityOfPage": "https://www.buygeogrid.com/blog/patch-packs-cold-asphalt-repair"
};

export default function PatchPacksBlog() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main className="flex-grow">
        <PageHero
          title="Patch Packs Cold Asphalt Patch: How It Works & When to Use It"
          description="A practical guide to Patch Packs — what they are, how they work, and why Ohio contractors and municipalities rely on them for year-round pothole repair."
          ctaText="Order Patch Packs"
          ctaLink="/contact"
          secondaryCtaText="Call (440) 368-1420"
          secondaryCtaLink="tel:4403681420"
        />

        <article className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded border border-gray-200 p-8">
              <div className="prose prose-lg max-w-none">

                <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Patch Packs?</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Patch Packs are a cold asphalt patch product designed for fast, permanent pothole and pavement defect repair. They are made from 100% recycled aggregate combined with a non-volatile binder — meaning the formula contains zero VOCs (volatile organic compounds).
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Unlike hot mix asphalt, which requires heated material and warm-weather application conditions, Patch Packs work in any weather — including freezing temperatures, rain, and wet conditions. This makes them a critical tool for emergency winter pavement repair when hot mix plants are closed and potholes are at their worst.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">How Cold Asphalt Patch Works</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  The binder in Patch Packs allows the material to expand and compress under vehicle load. When compacted into a pothole, this creates adhesion to the existing pavement surface while simultaneously sealing the top and side edges of the repair area.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  This expansion-compression behavior is what makes cold patch fundamentally different from hot mix. Hot mix cures into a rigid mass. Patch Packs remain slightly flexible, which allows them to maintain their bond through freeze-thaw cycles and thermal expansion — the exact conditions that cause most pothole repairs to fail in Northern Ohio.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  The repair is traffic-ready immediately after compaction. No curing time, no waiting, no traffic control beyond the time it takes to fill and compact the hole.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Standard vs Flex Variants</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Patch Packs come in two variants, each designed for specific applications:
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-gray-50 border border-gray-200 rounded p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Standard Patch Packs</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      For typical pothole and spall repairs on asphalt and concrete pavement. Use on roads, parking lots, driveways, and standard pavement surfaces. The workhorse product for routine pothole maintenance.
                    </p>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Flex Patch Packs</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Enhanced flexibility for surfaces with greater movement or thermal stress. The preferred material for bridge deck repairs, expansion joints, and areas subject to heavy dynamic loads and wide temperature swings.
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Apply Patch Packs</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  No specialized equipment, heating, or mixing is required. A single person can complete a repair with basic hand tools:
                </p>
                <ol className="list-decimal pl-6 mb-6 space-y-3 text-gray-700">
                  <li><strong>Clean the hole:</strong> Remove loose debris, standing water, and any deteriorated material from the pothole.</li>
                  <li><strong>Fill:</strong> Place Patch Packs material into the hole, overfilling slightly above the surrounding surface level to account for compaction.</li>
                  <li><strong>Compact:</strong> Tamp firmly with a hand tamper, or drive a vehicle tire over the repair. For potholes deeper than 4 inches, apply in 2-inch lifts, compacting each layer before adding the next.</li>
                  <li><strong>Open to traffic:</strong> The repair is immediately ready for vehicle traffic after compaction.</li>
                </ol>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Applications</h2>
                <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                  <li><strong>Potholes and spalls</strong> on asphalt and concrete pavement (1 inch deep or greater)</li>
                  <li><strong>Bridge deck repairs</strong> — Flex variant handles dynamic loads and thermal movement</li>
                  <li><strong>Utility cut restoration</strong> — leveling around drains, manholes, and access points</li>
                  <li><strong>Parking lots and driveways</strong> — commercial and residential surfaces</li>
                  <li><strong>Highway and road maintenance</strong> — emergency and scheduled repairs</li>
                  <li><strong>Multi-use pathways</strong> — bike paths, trails, and shared-use surfaces</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Why It Matters in Ohio</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Northern Ohio&apos;s freeze-thaw cycle is brutal on pavement. Water enters cracks, freezes, expands, and breaks the pavement apart — creating potholes that grow worse with every cycle. Hot mix asphalt plants typically close from late fall through early spring, leaving municipalities and property managers without a repair option during the months when potholes are most severe.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Patch Packs fill that gap. They work in any temperature, require no special equipment, and produce a durable repair that holds through the rest of winter. For road crews, property managers, and contractors who can&apos;t wait until May to fix potholes, cold asphalt patch is the practical solution.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Specifications</h2>
                <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                  <li><strong>Aggregate:</strong> 100% recycled</li>
                  <li><strong>Binder:</strong> Non-volatile (zero VOCs)</li>
                  <li><strong>Application temperature:</strong> Any — including below freezing</li>
                  <li><strong>Minimum repair depth:</strong> 1 inch</li>
                  <li><strong>Traffic ready:</strong> Immediately after compaction</li>
                  <li><strong>Equipment required:</strong> None — hand tamper or vehicle tire for compaction</li>
                  <li><strong>Variants:</strong> Standard and Flex</li>
                </ul>

                <div className="bg-gray-50 border border-gray-200 rounded p-6 mt-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Order Patch Packs</h3>
                  <p className="text-gray-700 mb-4">
                    We stock Patch Packs at our Solon, Ohio warehouse with delivery throughout Northern Ohio. Most orders ship or are available for pickup within 24-48 hours.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-[#00c97e] hover:bg-[#00b36f] rounded transition-colors">
                      Request a Quote
                    </Link>
                    <Link href="tel:4403681420" className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-gray-700 border-2 border-gray-300 hover:border-gray-400 rounded transition-colors">
                      (440) 368-1420
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* FAQ Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Patch Packs FAQ</h2>
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

        {/* Related Content */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/patch-packs" className="block p-6 bg-white rounded border border-gray-200 hover:border-[#00c97e] transition-colors text-left">
                <h3 className="font-bold text-gray-900 mb-2">Patch Packs Product Page</h3>
                <p className="text-gray-600 text-sm">Full product details, variants, and ordering information.</p>
              </Link>
              <Link href="/blog/dcp-testing-tensar-plus" className="block p-6 bg-white rounded border border-gray-200 hover:border-[#00c97e] transition-colors text-left">
                <h3 className="font-bold text-gray-900 mb-2">DCP Testing & Tensar Plus</h3>
                <p className="text-gray-600 text-sm">How field soil testing feeds into geogrid design software.</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
