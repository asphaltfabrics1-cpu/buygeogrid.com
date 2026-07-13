import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Subgrade Stabilization Toledo Ohio | Tensar Geogrid | BuyGeogrid',
  description: 'Toledo lake-plain clay subgrade fails proof rolls on almost every commercial job. Tensar geogrid stabilizes it before you pave — faster and cheaper than dig-and-replace. Northern Ohio distributor with same-week delivery.',
  keywords: ['subgrade stabilization Toledo', 'weak subgrade Ohio', 'Toledo geogrid', 'proof roll failure Toledo', 'Lucas County subgrade', 'Toledo commercial paving', 'Perrysburg soil', 'Maumee stabilization'],
  alternates: { canonical: 'https://www.buygeogrid.com/subgrade-stabilization-toledo' },
  openGraph: {
    title: 'Subgrade Stabilization — Toledo, Ohio',
    description: 'Toledo\'s lake-plain clay is the reason your proof rolls fail. Here\'s the fix that\'s faster than dig-and-replace.',
    type: 'article',
  },
};

const faqData = [
  {
    question: 'Why does subgrade fail so often in Toledo?',
    answer: 'Toledo and Lucas County sit on the ancient bed of Lake Maumee — a proglacial lake that left behind lacustrine clay soils that are dense, saturated, and difficult to compact. When a compactor or loaded truck crosses it, the clay pumps and rutting starts. Proof-roll failures on Toledo commercial and DOT sites are common enough that most experienced contractors here plan for stabilization from the start.',
  },
  {
    question: 'What does geogrid stabilization save vs. dig-and-replace?',
    answer: 'On a typical commercial site with soft subgrade, traditional dig-and-replace involves excavating 24–36 inches, hauling off the spoil, and importing structural fill — often thousands of tons per acre. Geogrid stabilization leaves the soft soil in place and builds a stiffer aggregate platform above it with one or two rolls of Tensar geogrid and a Mirafi separator fabric. On a big site the cost delta is measured in tens or hundreds of thousands.',
  },
  {
    question: 'How quickly can you supply material to a Toledo project?',
    answer: 'Our warehouse is in Solon (about 2 hours east). Standard SKUs — Tensar NX650, NX750, NX850, TX190L, Mirafi 500X/600X — are typically in stock and can ship next-day or you can send a truck for pickup. For DOT or large commercial jobs we can arrange direct freight from Tensar\'s regional manufacturing to your Toledo site.',
  },
  {
    question: 'Do you support engineer specifications on DOT and large commercial jobs?',
    answer: 'Yes. Every material order includes free Tensar Plus design support — Tensar\'s engineers run your CBR and design loads through their software and produce a stamped design with the exact geogrid, aggregate thickness, and separation-fabric spec. This is what your engineer of record needs for the submittal.',
  },
  {
    question: 'Do you serve outside Toledo proper?',
    answer: 'Yes — Perrysburg, Sylvania, Maumee, Oregon, Rossford, Waterville, Bowling Green, and the broader Lucas, Wood, and Fulton county areas. Northwest Ohio DOT and commercial work is a major part of the geogrid market and we ship there routinely.',
  },
  {
    question: 'Can this handle heavy loads (dump trucks, forklifts, DOT traffic)?',
    answer: 'Yes — Tensar geogrids are the standard material used on DOT highways and heavy commercial pavement precisely because they handle those loads. NX850 is the heavy-duty end of the InterAx line. For distribution centers, ports, and intermodal yards, the H-Series (HX165, HX145) is another option. Design software specs the exact product for your load.',
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

export default function SubgradeStabilizationToledo() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main className="flex-grow">
        <PageHero
          title="Subgrade Stabilization — Toledo, Ohio"
          description="Toledo lake-plain clay is the reason your proof rolls fail. Tensar geogrid stabilizes it before you pave — no excavation, no imported fill, no schedule slip. Northern Ohio distributor supplying Lucas, Wood, and Fulton counties."
          ctaText="Get Design Support"
          ctaLink="/contact"
          secondaryCtaText="Call (440) 368-1420"
          secondaryCtaLink="tel:4403681420"
          badge="DOT & Commercial-Approved"
        />

        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Lake Maumee Legacy</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Toledo and the surrounding Maumee River basin sit on lacustrine clay left behind by proglacial Lake Maumee — a shallow inland lake that covered much of northwestern Ohio at the end of the last ice age. The result is a subgrade that\ is dense, saturated most of the year, and has some of the lowest CBR values in the state.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              For contractors and engineers, this means proof-roll failures are the norm — and the fastest, cheapest way past them is a geogrid-stabilized aggregate layer, not dig-and-replace.
            </p>
          </div>
        </section>

        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Cost Comparison: The Two Fixes</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 p-6 rounded border-l-4 border-red-500">
                <div className="text-sm font-semibold text-red-700 uppercase tracking-wide mb-2">Traditional</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Dig-and-Replace</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Excavate 24–36 inches of soft clay</li>
                  <li>• Haul spoil off-site</li>
                  <li>• Import structural fill</li>
                  <li>• Compact in lifts</li>
                  <li>• Days of extra work per acre</li>
                  <li>• Spoil disposal fees</li>
                  <li>• Weather delays extend everything</li>
                </ul>
              </div>
              <div className="bg-green-50 p-6 rounded border-l-4 border-[#00c97e]">
                <div className="text-sm font-semibold text-[#00c97e] uppercase tracking-wide mb-2">Modern</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Geogrid Stabilization</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Roll out geogrid on prepared subgrade</li>
                  <li>• (Optional) Mirafi 500X/600X below on very soft ground</li>
                  <li>• Place aggregate, compact</li>
                  <li>• No excavation, no import</li>
                  <li>• Same-day install per section</li>
                  <li>• DOT- and engineer-approved solution</li>
                  <li>• Tensar Plus stamped design included</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Toledo Delivery Radius</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { area: 'Toledo Metro', places: 'Downtown, West Toledo, South Toledo, Point Place, East Toledo' },
                { area: 'Suburbs', places: 'Sylvania, Perrysburg, Maumee, Oregon, Rossford, Northwood' },
                { area: 'Outer Ring', places: 'Waterville, Bowling Green, Findlay, Napoleon, Bryan' },
              ].map((area) => (
                <div key={area.area} className="bg-gray-50 p-4 rounded">
                  <div className="font-semibold text-[#00c97e] mb-2">{area.area}</div>
                  <p className="text-sm text-gray-700">{area.places}</p>
                </div>
              ))}
            </div>
            <p className="text-center mt-6 text-gray-600 text-sm">
              Solon, OH warehouse. Next-day delivery to Toledo standard SKUs. Direct-from-manufacturer freight for large orders.
            </p>
          </div>
        </section>

        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Toledo FAQ</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Failed Proof Roll?</h2>
            <p className="text-lg text-gray-300 mb-6">We&apos;ll get a DCP on your Toledo site this week and have your engineer a stamped Tensar Plus design shortly after.</p>
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
