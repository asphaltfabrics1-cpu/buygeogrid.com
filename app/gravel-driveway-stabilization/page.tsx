import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gravel Driveway Stabilization | Stop Sinking Stone with Geogrid | Ohio',
  description: 'Gravel driveway keeps sinking, rutting, or getting swallowed by mud? Geogrid stabilizes the stone into a stiff platform so it stays where you put it. Northern Ohio distributor. Same-day pickup from Solon.',
  keywords: ['gravel driveway stabilization', 'stop gravel from sinking', 'geogrid gravel driveway', 'driveway rutting fix', 'how to stabilize a gravel driveway', 'Cleveland gravel driveway', 'long driveway ruts'],
  alternates: { canonical: 'https://www.buygeogrid.com/gravel-driveway-stabilization' },
  openGraph: {
    title: 'Gravel Driveway Stabilization | Stop Sinking Stone',
    description: 'Geogrid locks your gravel into a stiff, load-spreading platform. Build it once, forget about it.',
    type: 'article',
  },
};

const faqData = [
  {
    question: 'Why does my gravel driveway keep sinking?',
    answer: 'Gravel behaves like a fluid under repeated wheel loads. Without something to confine it, individual stones migrate down into the softer soil below and out to the sides. Ruts form in the tire tracks. The center hump gets pushed to the shoulders. This is a physics problem, not a stone-quality problem — the fix is confining the stone so it can\'t migrate.',
  },
  {
    question: 'How does geogrid stabilize a gravel driveway?',
    answer: 'Roll a Tensar geogrid across the prepared subgrade before placing your aggregate. The apertures in the geogrid interlock with the stone as it\'s placed and compacted, forming a stiff mechanically stabilized layer that behaves more like a slab than loose fluid. Wheel loads distribute across a much wider area, individual stones can\'t migrate through the geogrid, and the driveway stops rutting.',
  },
  {
    question: 'What size aggregate should I use with geogrid?',
    answer: 'For most residential and small-commercial driveways, #57 (roughly 3/4 inch clean stone) or #304 (crusher-run with fines) placed 6–10 inches thick over the geogrid. #57 drains better; #304 compacts tighter. If the subgrade is soft, go closer to 10 inches. If it\'s firm, 6 inches is enough. Text us your dimensions and we\'ll spec the exact thickness.',
  },
  {
    question: 'What if the soil under my current driveway is really soft?',
    answer: 'On soft ground you add a separator layer — Mirafi 500X or 600X woven geotextile placed directly on the soil, geogrid on top of the fabric, then aggregate. The geotextile stops the soft soil from squeezing up into your stone, the geogrid locks the stone above it. This two-layer system is how you build driveways over ground you couldn\'t walk across in April.',
  },
  {
    question: 'How long does a geogrid-stabilized gravel driveway last?',
    answer: 'Properly installed, decades. Tensar geogrids have 100+ year design lives buried in soil. The failure modes for driveway aggregate — migration, rutting, mud contamination — all get addressed by the mechanical stabilization. Regular re-topping of a stone or two of #57 every 5–10 years for cosmetics, but no more of the "add 10 tons of gravel every spring" cycle.',
  },
  {
    question: 'Can I install this on an existing driveway or do I need to start over?',
    answer: 'For most existing gravel driveways with heavy rutting or muddy soft spots, you\'ll want to strip the mixed material back to firm subgrade first (usually 4–8 inches), install the geogrid (and geotextile if the soil is soft), then place fresh aggregate. Trying to install geogrid on top of a rutted, contaminated existing surface doesn\'t work — the geogrid needs to sit on a graded, compacted subgrade to do its job.',
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

export default function GravelDrivewayStabilization() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main className="flex-grow">
        <PageHero
          title="Gravel Driveway Stabilization"
          description="If your gravel driveway keeps sinking, rutting, or getting swallowed by mud — the problem isn't the stone. It's that there's nothing holding it in place. Geogrid locks the aggregate into a stiff platform that stops migrating."
          ctaText="Get a Free Quote"
          ctaLink="/contact"
          secondaryCtaText="Driveway Cost Calculator"
          secondaryCtaLink="/residential"
          badge="Homeowners & Residential Contractors"
        />

        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Reason Gravel Doesn&apos;t Stay Put</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              A loose gravel driveway is a fluid under load. Every time a tire rolls across it, individual stones get pushed down and out. The stones on top migrate to the shoulders. The stones on the bottom get pushed into the soft soil below. Over one Ohio winter you can lose an inch of usable depth to migration alone.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The reason big commercial parking lots don&apos;t behave this way is they&apos;re not loose gravel — they&apos;re a stabilized aggregate layer. Geogrid brings that same stabilization to residential and light-commercial driveways for about the cost of one truckload of stone.
            </p>
          </div>
        </section>

        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Build-Once Cross-Section</h2>
            <div className="bg-white p-8 rounded shadow-sm">
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-gray-100 rounded">
                  <div className="w-24 shrink-0 font-bold text-[#1a1a1a]">Top</div>
                  <div>
                    <p className="font-semibold text-gray-900">6–10&quot; #57 or #304 Aggregate</p>
                    <p className="text-sm text-gray-600">Compacted in lifts. #57 for better drainage, #304 for tighter compaction.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-green-50 rounded border-l-4 border-[#00c97e]">
                  <div className="w-24 shrink-0 font-bold text-[#00c97e]">Middle</div>
                  <div>
                    <p className="font-semibold text-gray-900">Tensar InterAx or TriAx Geogrid</p>
                    <p className="text-sm text-gray-600">One layer, overlapped ~12&quot; at seams. NX650 or TX190L for typical driveways.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-blue-50 rounded border-l-4 border-blue-500">
                  <div className="w-24 shrink-0 font-bold text-blue-700">If Soft</div>
                  <div>
                    <p className="font-semibold text-gray-900">Mirafi 500X or 600X Woven Geotextile</p>
                    <p className="text-sm text-gray-600">Only needed if subgrade CBR is under 3 (soft, wet, or clay-heavy).</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-800 text-white rounded">
                  <div className="w-24 shrink-0 font-bold">Bottom</div>
                  <div>
                    <p className="font-semibold">Prepared Subgrade</p>
                    <p className="text-sm text-gray-300">Graded, compacted, crowned for drainage.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">DIY or Contractor?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Either works. Homeowners with a compact tractor or small skid steer install geogrid + geotextile all the time — the material rolls out flat, doesn&apos;t need fasteners, and gets buried under aggregate on the same day. If you&apos;d rather have a residential contractor do the excavation and grading, we&apos;ll spec the material list for them at no charge.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Either way, you buy the material from us — a distributor with in-stock inventory in Solon, OH — instead of paying a middleman markup through a landscape supply chain.
            </p>
          </div>
        </section>

        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">FAQ</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Build the Driveway You Meant to Build</h2>
            <p className="text-lg text-gray-300 mb-6">Northern Ohio distributor. In-stock at our Solon warehouse.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/residential" className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-[#00c97e] hover:bg-[#00b36f] rounded transition-colors duration-200">
                Driveway Cost Calculator
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
