import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Muddy Driveway Fix Cleveland Ohio | Geogrid + Fabric | BuyGeogrid',
  description: 'Muddy driveway in Cleveland, Lakewood, Parma, or the East Side? The problem is our heavy clay soil — soft ground (also called soft earth) — pumping up through your gravel. Geogrid + geotextile stops it. Local pickup from Solon, OH.',
  keywords: ['muddy driveway Cleveland', 'gravel driveway Cleveland Ohio', 'muddy driveway Lakewood', 'driveway repair Parma', 'clay soil driveway Ohio', 'Cleveland driveway stabilization', 'East Side driveway mud', 'soft earth', 'soft earth solutions'],
  alternates: { canonical: 'https://www.buygeogrid.com/muddy-driveway-cleveland' },
  openGraph: {
    title: 'Muddy Driveway Fix — Cleveland Ohio',
    description: 'Cleveland\'s heavy clay soil is why your gravel keeps disappearing. Here\'s the local fix.',
    type: 'article',
  },
};

const faqData = [
  {
    question: 'Why do so many Cleveland driveways turn muddy?',
    answer: 'Northeast Ohio has some of the highest clay content in the Midwest. Cuyahoga, Lake, and Geauga counties sit on Illinoian- and Wisconsinan-glaciation clay soils that hold water and behave like a fluid under wheel loads. That\'s the geology working against your gravel driveway — it\'s not something you did wrong.',
  },
  {
    question: 'Does the fix work the same in Cleveland as everywhere else?',
    answer: 'Yes — the physics of geogrid stabilization doesn\'t change. What does change locally is the specific soil profile. Cleveland heavy clay (CBR often under 3 when wet) usually needs a two-layer system: woven geotextile below to stop the clay from pumping up, geogrid on top to lock the aggregate. Sandier soils on the far West Side sometimes get away with just the geogrid. On the soft ground (also called soft earth) that dominates most Greater Cleveland lots, the two-layer system is the norm.',
  },
  {
    question: 'Do you serve my Cleveland neighborhood?',
    answer: 'Yes — every neighborhood in Greater Cleveland including West Side (Lakewood, Rocky River, Westlake, Bay Village), East Side (Cleveland Heights, Shaker Heights, University Circle), South (Parma, Broadview Heights, North Royalton), and the outer suburbs (Solon, Chagrin Falls, Aurora). Our warehouse is in Solon, OH — most Cleveland delivery is next-day, pickup is same-day.',
  },
  {
    question: 'How much does a fix cost for an average Cleveland driveway?',
    answer: 'For a typical 100 x 12 ft residential driveway, the material cost (Tensar geogrid + Mirafi geotextile) is a few hundred dollars total. Aggregate on top is separate — you can source #57 or #304 from any local pit (LaFarge, Norfolk Southern, Osborne). The whole material bill is significantly less than the cost of re-gravelling every 1–2 years, and this is a build-once solution.',
  },
  {
    question: 'Can I install it myself in a weekend?',
    answer: 'Yes, if you have or can rent a compact tractor, mini-excavator, or small skid steer. Strip back the mixed mud-and-gravel, roll out the fabric, roll out the geogrid on top, place the aggregate, compact. Most residential-scale jobs are a one-day install for someone comfortable operating small equipment.',
  },
  {
    question: 'What if I want a contractor to do it?',
    answer: 'We work with a rotating list of residential contractors across Cleveland who install our material regularly. Call us and we\'ll suggest a few in your area. We\'ll also spec the exact material list for whoever you hire — no charge.',
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

export default function MuddyDrivewayCleveland() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main className="flex-grow">
        <PageHero
          title="Muddy Driveway Fix — Cleveland, Ohio"
          description="Cleveland's heavy clay soil is why your gravel keeps disappearing. It's not your gravel — it's the ground beneath, pumping up through the stone every time you drive over it. Local warehouse in Solon."
          ctaText="Get a Free Quote"
          ctaLink="/contact"
          secondaryCtaText="Call (440) 368-1420"
          secondaryCtaLink="tel:4403681420"
          badge="Serving All of Greater Cleveland"
        />

        <section className="py-20 md:py-24 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <div className="text-[#00c97e] text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3">The problem</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">The Cleveland Clay Problem</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Northeast Ohio soil is dominated by dense, water-holding clay left behind by the last glacial retreat. In the west (Lorain, Elyria) it&apos;s sandier and lighter. In the east (Chagrin Valley, Solon, Aurora) it&apos;s heavier. Downtown Cleveland and the inner suburbs vary lot-by-lot depending on fill history and drainage.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                What&apos;s consistent: most Greater Cleveland residential subgrade will hit a soft, saturated CBR under 3 during spring thaw and after heavy rain. That&apos;s when your gravel migrates and your driveway turns muddy.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="py-20 md:py-24 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <Reveal className="mb-8">
              <div className="text-[#00c97e] text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3">Coverage</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight tracking-tight">Where We Deliver</h2>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { area: 'West Side', places: 'Lakewood, Rocky River, Westlake, Bay Village, North Olmsted, Fairview Park' },
                { area: 'East Side', places: 'Cleveland Heights, Shaker Heights, University Heights, South Euclid, Beachwood' },
                { area: 'South', places: 'Parma, Brooklyn, Broadview Heights, North Royalton, Independence, Brecksville' },
                { area: 'Outer East', places: 'Solon, Chagrin Falls, Bainbridge, Aurora, Twinsburg' },
                { area: 'Outer West', places: 'Strongsville, Berea, Middleburg Heights, Olmsted Falls' },
                { area: 'Downtown/Inner', places: 'Ohio City, Tremont, Detroit-Shoreway, Old Brooklyn' },
              ].map((area, i) => (
                <Reveal key={area.area} delay={120 + i * 120}>
                  <div className="bg-white p-4 rounded shadow-sm h-full">
                    <div className="font-semibold text-[#00c97e] mb-2">{area.area}</div>
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

        <section className="py-20 md:py-24 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <Reveal className="mb-8">
              <div className="text-[#00c97e] text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3">The fix</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight tracking-tight">The Fix, Applied to Cleveland Soil</h2>
            </Reveal>
            <div className="space-y-4">
              <Reveal delay={120}>
                <div className="bg-blue-50 p-6 rounded border-l-4 border-blue-500">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Layer 1 — Mirafi 500X Woven Geotextile</h3>
                  <p className="text-gray-700">Rolls out directly on the prepared clay subgrade. Prevents the wet clay from pumping up into your aggregate. Essential on Cleveland heavy-clay lots.</p>
                </div>
              </Reveal>
              <Reveal delay={240}>
                <div className="bg-green-50 p-6 rounded border-l-4 border-[#00c97e]">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Layer 2 — Tensar Geogrid</h3>
                  <p className="text-gray-700">NX650 for typical residential driveways, NX750 for heavier vehicles or truly soft ground. Rolls out on top of the fabric.</p>
                </div>
              </Reveal>
              <Reveal delay={360}>
                <div className="bg-gray-800 text-white p-6 rounded">
                  <h3 className="text-xl font-semibold mb-2">Layer 3 — Aggregate</h3>
                  <p className="text-gray-300">6–10&quot; of #57 or #304 from any local pit. Compacted in lifts. That&apos;s the driveway.</p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <Reveal className="mb-8">
              <div className="text-[#00c97e] text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3">FAQ</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight tracking-tight">Cleveland FAQ</h2>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight tracking-tight">Fix It Once, Cleveland</h2>
              <p className="text-lg text-gray-300 mb-8">Local warehouse. Local delivery. Same-day pickup from our Solon warehouse.</p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center sm:items-center">
                <Link href="/residential" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-[#00c97e] hover:bg-[#00b36f] rounded transition-colors duration-200 group">
                  Driveway Cost Calculator
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
