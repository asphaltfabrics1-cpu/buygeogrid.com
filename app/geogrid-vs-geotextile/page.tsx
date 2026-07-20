import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Geogrid vs. Geotextile: What\'s the Difference & Which Do You Need? | Ohio',
  description: 'Geogrid vs. geotextile — they look similar but they do completely different jobs. Geogrid mechanically stabilizes aggregate; geotextile separates and filters. When you need each, when you need both. Ohio distributor.',
  keywords: ['geogrid vs geotextile', 'difference between geogrid and geotextile', 'which do I need', 'Tensar vs Mirafi', 'geogrid or geotextile', 'stabilization vs separation', 'Ohio geosynthetics distributor'],
  alternates: { canonical: 'https://www.buygeogrid.com/geogrid-vs-geotextile' },
  openGraph: {
    title: 'Geogrid vs. Geotextile: Which Do You Need?',
    description: 'They look similar. They do completely different jobs. Here\'s how to pick.',
    type: 'article',
  },
};

const faqData = [
  {
    question: 'What\'s the actual difference between geogrid and geotextile?',
    answer: 'Geogrid is a grid — think a plastic mesh with open square or triangular apertures that aggregate can lock through. Its job is to mechanically stabilize aggregate by locking stones into the openings so they can\'t migrate. Geotextile is a fabric — either a tightly woven pattern (like Mirafi 500X) or a fluffy nonwoven mat (like Mirafi 135N). Its job is to separate two materials from each other and filter water while blocking soil particles.',
  },
  {
    question: 'When do I need geogrid?',
    answer: 'Any time you\'re building a load-bearing aggregate layer — driveway, road, work pad, parking lot, construction site access — on soft or marginal subgrade. Geogrid turns loose aggregate into a stiff, load-spreading platform. Without it, aggregate on soft ground migrates, ruts, and pumps mud within a season.',
  },
  {
    question: 'When do I need geotextile?',
    answer: 'Whenever two dissimilar soils or materials need to stay separated: aggregate over soft clay (separation), a French drain (filtration), behind a retaining wall (drainage), or under a stone-mulch bed to stop weed growth. Woven geotextiles like Mirafi 500X/600X are for separation under load. Nonwoven geotextiles like 135N/140N/180N are for drainage and filtration.',
  },
  {
    question: 'Do I need both?',
    answer: 'On soft ground, yes — that\'s the two-layer system. Woven geotextile on the subgrade to stop soft soil from pumping up into your aggregate. Geogrid on top of the fabric to lock the aggregate into a stiff platform. Aggregate over the geogrid, compacted. This is how you build permanent driveways and access roads over ground you couldn\'t walk across in mud season.',
  },
  {
    question: 'Can geogrid alone handle soft ground?',
    answer: 'Sometimes, but not always. Geogrid stabilizes the aggregate above; it doesn\'t stop the soft soil below from squeezing up into that aggregate. On soils with CBR under 3, aggregate placed directly on the subgrade without a separator will eventually contaminate — even with geogrid holding the top layer in place. That\'s when you add the woven geotextile as a bottom layer.',
  },
  {
    question: 'How do I know which product to buy?',
    answer: 'Two data points: your subgrade condition and your traffic load. Tell us how soft the ground gets in wet weather and what will drive across it, and we\'ll spec the exact geogrid, aggregate thickness, and separation-fabric requirement. Tensar\'s engineering software (free with our material) handles the design.',
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

export default function GeogridVsGeotextile() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main className="flex-grow">
        <PageHero
          title="Geogrid vs. Geotextile"
          description="They look similar but they do completely different jobs. Geogrid stabilizes aggregate mechanically. Geotextile separates and filters. Here's how to pick — and when you need both."
          ctaText="Get Design Help"
          ctaLink="/contact"
          secondaryCtaText="Call (440) 368-1420"
          secondaryCtaLink="tel:4403681420"
          badge="Ohio Distributor"
        />

        <section className="py-20 md:py-24 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <Reveal className="mb-8">
              <div className="text-[#00c97e] text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3 text-center">Compare</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight tracking-tight text-center">Side-By-Side</h2>
            </Reveal>
            <Reveal delay={120}>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left p-4 border border-gray-300 font-semibold">Feature</th>
                    <th className="text-left p-4 border border-gray-300 font-semibold text-[#00c97e]">Geogrid</th>
                    <th className="text-left p-4 border border-gray-300 font-semibold text-blue-700">Geotextile</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { f: 'What it looks like', g: 'Plastic grid with open apertures', t: 'Woven fabric or fluffy mat' },
                    { f: 'Primary job', g: 'Mechanically stabilize aggregate', t: 'Separate and filter' },
                    { f: 'How it works', g: 'Stones lock through openings', t: 'Blocks soil, passes water' },
                    { f: 'Best for', g: 'Load-bearing aggregate layers', t: 'Soil separation, drainage, filtration' },
                    { f: 'Typical use', g: 'Under driveways, parking lots, roads', t: 'Under geogrid on soft ground, French drains, retaining walls' },
                    { f: 'Brand examples', g: 'Tensar InterAx, TriAx', t: 'Mirafi 500X/600X (woven), 135N/140N/180N (nonwoven)' },
                    { f: 'Where it sits', g: 'Between subgrade and aggregate', t: 'Below geogrid on soft soil, or in drainage systems' },
                    { f: 'Replaces excavation?', g: 'Often yes on soft ground', t: 'Prevents soil migration, extends aggregate life' },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="p-4 border border-gray-300 font-semibold text-gray-900">{row.f}</td>
                      <td className="p-4 border border-gray-300 text-gray-700">{row.g}</td>
                      <td className="p-4 border border-gray-300 text-gray-700">{row.t}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            </Reveal>
          </div>
        </section>

        <section className="py-20 md:py-24 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <Reveal className="mb-8">
              <div className="text-[#00c97e] text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3 text-center">How to pick</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight tracking-tight text-center">The Decision Tree</h2>
            </Reveal>
            <div className="space-y-4">
              {[
                { q: 'Building a driveway, road, or work pad?', a: '→ You need geogrid for mechanical stabilization.' },
                { q: 'Is the subgrade soft, wet, or clay-heavy (CBR under 3)?', a: '→ Add woven geotextile below the geogrid as a separator.' },
                { q: 'Building a French drain or drainage system?', a: '→ Nonwoven geotextile (135N/140N/180N) — no geogrid needed.' },
                { q: 'Retaining wall backfill or planter drainage?', a: '→ Nonwoven geotextile as a filter layer.' },
                { q: 'Under a stone-mulch decorative bed?', a: '→ Woven geotextile as a weed barrier that still lets water through.' },
              ].map((row, i) => (
                <Reveal key={i} delay={120 + i * 120}>
                  <div className="bg-white p-6 rounded shadow-sm">
                    <p className="text-lg font-semibold text-gray-900 mb-2">{row.q}</p>
                    <p className="text-gray-700">{row.a}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <Reveal className="mb-8">
              <div className="text-[#00c97e] text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3">Related</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight tracking-tight">Related Products</h2>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-4">
              <Reveal delay={120}>
                <Link href="/geogrid" className="block bg-green-50 hover:bg-green-100 p-6 rounded border-l-4 border-[#00c97e] transition-colors h-full">
                  <h3 className="font-semibold text-gray-900 mb-2">Geogrids</h3>
                  <p className="text-sm text-gray-700">Tensar InterAx, TriAx, H-Series — full lineup</p>
                </Link>
              </Reveal>
              <Reveal delay={240}>
                <Link href="/woven-fabrics" className="block bg-blue-50 hover:bg-blue-100 p-6 rounded border-l-4 border-blue-500 transition-colors h-full">
                  <h3 className="font-semibold text-gray-900 mb-2">Woven Geotextiles</h3>
                  <p className="text-sm text-gray-700">Mirafi 500X, 600X — separation under load</p>
                </Link>
              </Reveal>
              <Reveal delay={360}>
                <Link href="/nonwoven-fabrics" className="block bg-gray-100 hover:bg-gray-200 p-6 rounded border-l-4 border-gray-500 transition-colors h-full">
                  <h3 className="font-semibold text-gray-900 mb-2">Nonwoven Geotextiles</h3>
                  <p className="text-sm text-gray-700">Mirafi 135N, 140N, 180N — drainage & filtration</p>
                </Link>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <Reveal className="mb-8">
              <div className="text-[#00c97e] text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3">FAQ</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight tracking-tight">FAQ</h2>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight tracking-tight">Still Not Sure?</h2>
              <p className="text-lg text-gray-300 mb-8">Call us. Free design help from Tensar&apos;s engineering team included with every material order.</p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center sm:items-center">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-[#00c97e] hover:bg-[#00b36f] rounded transition-colors duration-200 group">
                  Get Design Help
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
