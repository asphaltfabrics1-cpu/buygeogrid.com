import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Soft Ground Solutions | Stabilize Weak Soil for Driveways & Roads | Ohio',
  description: 'Working over soft ground, wet clay, or spongy fill? Geogrid stabilizes the subgrade so your gravel, asphalt, or concrete stops sinking. Northern Ohio distributor stocking Tensar, Mirafi, and Petrotac. Free on-site DCP testing available.',
  keywords: ['soft ground solutions', 'soft soil stabilization', 'weak subgrade fix', 'geogrid for soft ground', 'stabilize soft soil', 'clay soil driveway', 'muddy ground reinforcement', 'Ohio soil stabilization', 'Cleveland Akron Toledo'],
  alternates: { canonical: 'https://www.buygeogrid.com/soft-ground-solutions' },
  openGraph: {
    title: 'Soft Ground Solutions | Geogrid for Weak Soil | BuyGeogrid',
    description: 'The permanent fix for driveways and roads built over soft ground. Ohio distributor stocking Tensar geogrid + Mirafi geotextile.',
    type: 'article',
  },
};

const faqData = [
  {
    question: 'What is "soft ground" and why does it matter?',
    answer: 'Soft ground is soil that can\'t reliably carry a load — wet clay, silt, spongy organic fill, or freshly graded low-CBR subgrade. Drive over it repeatedly with a loaded truck or a compactor and it will rut, pump, and cause the base above it to fail. Every pavement structure sits on the subgrade — if the subgrade moves, the pavement moves.',
  },
  {
    question: 'Can geogrid actually fix soft ground?',
    answer: 'Geogrid doesn\'t make the soil stronger — it locks the aggregate above it into a stiff mechanically stabilized layer that spreads load over a wider area. That means the soft soil sees a much lower stress at the same wheel load, so it stops rutting and pumping. On very weak subgrades (CBR under 3) you\'ll typically pair a Tensar InterAx geogrid with a Mirafi 500X or 600X woven geotextile beneath to keep the soft clay from squeezing up into the base.',
  },
  {
    question: 'How much geogrid do I need for a soft-ground fix?',
    answer: 'For a driveway or private lane on soft ground you\'ll typically install one layer directly on top of the subgrade, then build 6–12 inches of #57 or #304 aggregate on top. For truly soft ground (CBR under 2) engineers sometimes call for two layers separated by aggregate. Free DCP testing at your site tells us the actual subgrade strength so we can size it right — not guess.',
  },
  {
    question: 'Won\'t just adding more gravel do the same thing?',
    answer: 'Adding gravel without geogrid is the most common failure mode we see. Without a stabilization layer the aggregate migrates down into the soft soil, the soft soil pumps up between the stones, and within a season or two you\'re back where you started. Geogrid keeps the aggregate confined so the money you spent on stone stays where you put it.',
  },
  {
    question: 'Do you install this or just sell the material?',
    answer: 'BuyGeogrid is a distributor — we sell the material and provide free design support from Tensar\'s engineering team. Most residential contractors and site crews install geogrid themselves; it rolls out flat, overlaps a foot at the seams, and gets buried under aggregate. If you need a paving-fabric installation done as a service (crack seal, chip seal, non-peel-and-stick overlay fabric), our sister company Asphalt Fabrics & Specialties handles that separately.',
  },
  {
    question: 'How fast can I get material?',
    answer: 'Standard SKUs — Tensar TX190L, NX650, Mirafi 500X, 135N — are typically in stock at our Solon, OH warehouse. Local pickup same-day or next-day, delivery throughout Cleveland, Akron, Toledo, Youngstown, and Canton within a few days. Call (440) 368-1420 for current stock.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
};

export default function SoftGroundSolutions() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main className="flex-grow">
        <PageHero
          title="Soft Ground Solutions"
          description="Working over wet clay, spongy fill, or a subgrade that pumps under load? Geogrid locks the aggregate above it into a stiff platform so your driveway, lane, or work pad stops sinking. Ohio distributor. Free on-site DCP testing."
          ctaText="Get a Free Quote"
          ctaLink="/contact"
          secondaryCtaText="Call (440) 368-1420"
          secondaryCtaLink="tel:4403681420"
          badge="Northern Ohio Distributor"
        />

        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What Soft Ground Actually Costs You</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Every dollar you spend on gravel over a weak subgrade is a dollar the ground is trying to eat. Wet clay pumps up between the stones. Silt migrates down into your base. A year later the driveway ruts, the corner collapses, and you re-grade — which is the same money spent twice.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The permanent fix isn&apos;t more gravel. It&apos;s a mechanically stabilized layer: one roll of geogrid at the subgrade interface that turns your aggregate into a stiff, load-spreading platform. Done right, you build once.
            </p>
          </div>
        </section>

        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Two Layers That Fix It</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Geogrid — locks the aggregate</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Tensar InterAx® or TriAx® geogrid rolls out flat over the prepared subgrade. Aggregate placed on top interlocks with the geogrid&apos;s apertures, forming a stiff composite layer that spreads wheel load over a much wider area of the soft soil beneath.
                </p>
                <Link href="/geogrid" className="text-[#00c97e] font-semibold hover:underline">
                  See geogrid options →
                </Link>
              </div>
              <div className="bg-white p-6 rounded shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Woven Geotextile — separation</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Below the geogrid on very soft ground (CBR under 3), a woven geotextile like Mirafi 500X or 600X prevents the soft clay from squeezing up into your aggregate base. Two-layer systems are how you build over ground you couldn&apos;t walk across.
                </p>
                <Link href="/woven-fabrics" className="text-[#00c97e] font-semibold hover:underline">
                  See woven fabrics →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How We Size It</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Every soft-ground fix comes down to one number: subgrade strength. On the industry scale that&apos;s CBR — California Bearing Ratio. A CBR of 5–8 is typical everyday soil. Under 3 is soft. Under 1 is essentially mud.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              We use a Dynamic Cone Penetrometer (DCP) on-site to measure your actual subgrade CBR — no guessing. From there Tensar&apos;s engineering team runs the design in Tensar+ software and tells you the exact geogrid, aggregate thickness, and separation-fabric spec for the loads you&apos;re building for.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              This is a free service for anyone buying material from us. Homeowners, residential contractors, site crews — same design support.
            </p>
          </div>
        </section>

        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqData.map((faq, i) => (
                <div key={i} className="border-b border-gray-200 pb-6 last:border-b-0">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-[#1a1a1a] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Not sure what soil you have?</h2>
            <p className="text-lg text-gray-300 mb-6">Free on-site DCP testing throughout Northern Ohio. We tell you the subgrade CBR, spec the design, and quote the material.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-[#00c97e] hover:bg-[#00b36f] rounded transition-colors duration-200">
                Request a Site Visit
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
