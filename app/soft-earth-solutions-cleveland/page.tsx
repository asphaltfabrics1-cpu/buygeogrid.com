import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Soft Earth Solutions Cleveland Ohio | Geogrid + Fabric for Weak Soil | BuyGeogrid',
  description: 'Soft earth in Cleveland, Lakewood, Parma, or Cleveland Heights? Northeast Ohio\'s heavy clay is the classic soft-earth subgrade. Geogrid + geotextile stabilizes it — before you pave, gravel, or build. Free on-site DCP testing. Same-day pickup in Solon.',
  keywords: [
    'soft earth solutions Cleveland',
    'soft earth Cleveland Ohio',
    'soft earth stabilization Cleveland',
    'soft ground Cleveland',
    'soft soil Cleveland',
    'weak subgrade Cleveland',
    'geogrid for soft earth Cleveland',
    'clay soil Cleveland driveway',
    'Cuyahoga County soft earth',
    'Lakewood soft ground',
    'Parma soft earth',
    'Cleveland subgrade stabilization',
  ],
  alternates: { canonical: 'https://www.buygeogrid.com/soft-earth-solutions-cleveland' },
  openGraph: {
    title: 'Soft Earth Solutions — Cleveland, Ohio',
    description: 'Northeast Ohio\'s heavy clay is the classic soft-earth subgrade. Here\'s the geogrid + geotextile fix.',
    type: 'article',
  },
};

const faqData = [
  {
    question: 'What is "soft earth" and why is it a Cleveland problem?',
    answer: 'Soft earth — also called soft ground or soft soil — is any subgrade that can\'t reliably carry a load. In Cleveland it\'s specifically the wet, heavy glacial clay that dominates Cuyahoga, Lake, and Geauga counties. Under wheel loads and construction traffic it ruts, pumps, and squeezes up into whatever aggregate you place on top. Every gravel driveway that "keeps sinking" in Greater Cleveland is a soft-earth problem underneath.',
  },
  {
    question: 'Where in Greater Cleveland is soft earth worst?',
    answer: 'East Side and inner suburbs get the worst of it — Cleveland Heights, Shaker Heights, University Heights, Beachwood, South Euclid, and out through the Chagrin Valley — because the underlying till is heavier and holds more water. Southern suburbs (Parma, Broadview Heights, Independence) are close behind. The far West Side (Rocky River, Westlake) is sandier and typically firmer. But every neighborhood has soft-spot pockets, especially where fill was brought in during original development.',
  },
  {
    question: 'Can we fix soft earth without excavating and hauling it off?',
    answer: 'Yes — that\'s the whole point of geogrid mechanical stabilization. Instead of digging out 2–3 feet of soft earth and importing structural fill (expensive, days of hauling), you leave the soft earth in place and build a stiffer platform above it: a woven geotextile at the interface plus a geogrid on top, then aggregate. Load spreads across a much wider area, the soft earth sees lower stress, and it stops pumping. Standard on DOT jobs across Northeast Ohio and increasingly on residential and small commercial.',
  },
  {
    question: 'What material do I need for a Cleveland soft-earth job?',
    answer: 'For the heavy clay we typically see in Greater Cleveland: Mirafi 500X woven geotextile at the subgrade interface (stops the clay pumping up), Tensar NX650 or NX750 InterAx geogrid on top (locks the aggregate). For lighter residential loads you can sometimes get away with the geogrid alone. Free DCP testing tells us your actual CBR so we spec the right combination — no guessing.',
  },
  {
    question: 'Do you deliver to my Cleveland neighborhood?',
    answer: 'Yes — every neighborhood in Greater Cleveland from our Solon warehouse. Same-day pickup in Solon; next-day delivery to most Cleveland-area addresses including the East Side, West Side, Downtown, and outer suburbs. Call (440) 368-1420 for scheduling or if you need it faster.',
  },
  {
    question: 'How much does a soft-earth fix cost on a residential job?',
    answer: 'For a typical 100 × 12 ft residential driveway on soft earth, the geogrid + geotextile material bill runs a few hundred dollars total, plus your aggregate (#57 or #304 from any local pit). That\'s materially less than what you\'d spend re-gravelling every 1–2 years — and this is a build-once fix. Larger commercial and municipal jobs scale up, and the aggregate reduction on those often pays for the geogrid many times over.',
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

export default function SoftEarthSolutionsCleveland() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main className="flex-grow">
        <PageHero
          title="Soft Earth Solutions — Cleveland, Ohio"
          description="Northeast Ohio's heavy glacial clay is the classic soft earth. Every gravel driveway that keeps sinking, every proof roll that fails, every muddy spring — same problem. Geogrid stabilizes it in place, no excavation needed. Same-day pickup in Solon."
          ctaText="Get a Free Site Visit"
          ctaLink="/contact"
          secondaryCtaText="Call (440) 368-1420"
          secondaryCtaLink="tel:4403681420"
          badge="Cuyahoga · Lake · Geauga Counties"
        />

        <section className="py-20 md:py-24 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <div className="text-[#00c97e] text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3">The problem</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
                Why Cleveland Sits on Soft Earth
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Northeast Ohio soil is dominated by dense, water-holding clay left behind by the last glacial retreat. Cuyahoga, Lake, and Geauga counties sit on some of the heaviest clay in the Midwest — the kind that turns to a fluid under load and holds water for months. Most Greater Cleveland residential subgrade hits a soft-earth CBR under 3 during spring thaw and after heavy rain. That&apos;s when your gravel migrates, your driveway ruts, and your parking lot cracks.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Adding more gravel doesn&apos;t fix soft earth. It just gives you a few months. The soft clay pumps back up between the fresh stones, the two mix, and you&apos;re back where you started. The permanent fix is a separator + reinforcement layer at the subgrade interface — before the aggregate goes on.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="py-20 md:py-24 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <Reveal className="mb-6">
              <div className="text-[#00c97e] text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3">The fix</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight tracking-tight">
                Two Layers, One Permanent Fix
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <Reveal delay={120}>
                <div className="bg-white p-6 md:p-8 rounded shadow-sm border-l-4 border-[#00c97e] h-full">
                  <div className="text-sm font-semibold text-[#00c97e] uppercase tracking-wide mb-2">Bottom Layer</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Woven Geotextile — Mirafi 500X</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Rolls out directly on the prepared clay subgrade. The separator. Water passes through, but the wet clay can&apos;t pump up into your aggregate above. Essential on Cleveland heavy-clay lots and any site with a CBR under 3.
                  </p>
                  <Link href="/500x" className="inline-flex items-center gap-1 text-[#00c97e] font-semibold hover:gap-2 transition-all">
                    Mirafi 500X details <span>→</span>
                  </Link>
                </div>
              </Reveal>
              <Reveal delay={240}>
                <div className="bg-white p-6 md:p-8 rounded shadow-sm border-l-4 border-[#00c97e] h-full">
                  <div className="text-sm font-semibold text-[#00c97e] uppercase tracking-wide mb-2">Top Layer</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Geogrid — Tensar NX650 or NX750</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Rolls out on top of the fabric. Aggregate placed above interlocks through the geogrid apertures, forming a stiff mechanically stabilized layer that spreads wheel load across a much wider area of the soft earth beneath.
                  </p>
                  <Link href="/geogrid" className="inline-flex items-center gap-1 text-[#00c97e] font-semibold hover:gap-2 transition-all">
                    See geogrid options <span>→</span>
                  </Link>
                </div>
              </Reveal>
            </div>
            <Reveal delay={360}>
              <div className="mt-8 bg-[#1a1a1a] text-white p-6 rounded">
                <p className="text-lg leading-relaxed">
                  <span className="font-semibold text-[#00c97e]">Then:</span> 6–10 inches of #57 or #304 aggregate, compacted in lifts. That&apos;s the whole system on a residential Cleveland driveway. Two rolls of material, one afternoon of prep, and the soft earth is no longer your problem.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="py-20 md:py-24 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <Reveal className="mb-8">
              <div className="text-[#00c97e] text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3">Coverage</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight tracking-tight">
                Where We Deliver in Greater Cleveland
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { area: 'West Side', places: 'Lakewood, Rocky River, Westlake, Bay Village, North Olmsted, Fairview Park' },
                { area: 'East Side', places: 'Cleveland Heights, Shaker Heights, University Heights, South Euclid, Beachwood' },
                { area: 'South', places: 'Parma, Brooklyn, Broadview Heights, North Royalton, Independence, Brecksville' },
                { area: 'Outer East', places: 'Solon, Chagrin Falls, Bainbridge, Aurora, Twinsburg' },
                { area: 'Outer West', places: 'Strongsville, Berea, Middleburg Heights, Olmsted Falls' },
                { area: 'Downtown / Inner', places: 'Ohio City, Tremont, Detroit-Shoreway, Old Brooklyn' },
              ].map((area, i) => (
                <Reveal key={area.area} delay={120 + i * 80}>
                  <div className="bg-gray-50 p-4 rounded border-l-4 border-[#00c97e] h-full">
                    <div className="font-semibold text-gray-900 mb-2">{area.area}</div>
                    <p className="text-sm text-gray-700">{area.places}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="text-center mt-8 text-gray-600 text-sm">
              Warehouse: Solon, OH. Same-day pickup, next-day delivery to most of Greater Cleveland.
            </p>
          </div>
        </section>

        <section className="py-20 md:py-24 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <Reveal className="mb-8">
              <div className="text-[#00c97e] text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3">FAQ</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight tracking-tight">Cleveland Soft-Earth FAQ</h2>
            </Reveal>
            <div className="space-y-6">
              {faqData.map((faq, i) => (
                <Reveal key={i} delay={i * 60}>
                  <div className="border-b border-gray-200 pb-6 last:border-b-0">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24 px-6 bg-[#1a1a1a] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight tracking-tight">Fix It Once, Cleveland.</h2>
              <p className="text-lg text-gray-300 mb-8">Free on-site DCP testing across Greater Cleveland. We tell you the CBR, spec the material, and quote the job.</p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center sm:items-center">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-[#00c97e] hover:bg-[#00b36f] rounded transition-colors duration-200 group">
                  Request a Site Visit
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
                <Link href="tel:4403681420" className="inline-flex items-center gap-2 text-base font-semibold text-white hover:text-[#00c97e] transition-colors group">
                  <span>(440) 368-1420</span>
                  <span className="opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
