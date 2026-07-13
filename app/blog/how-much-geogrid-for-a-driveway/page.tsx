import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Much Geogrid Do I Need for a Driveway? | Sizing Guide | Ohio',
  description: 'Sizing geogrid for a residential or contractor driveway job — how to calculate square yards, plan for overlaps, pick the right SKU. Real numbers from a Northern Ohio distributor.',
  keywords: ['how much geogrid for driveway', 'geogrid calculator', 'driveway geogrid sizing', 'Tensar for driveway', 'residential geogrid amount', 'gravel driveway geogrid'],
  alternates: { canonical: 'https://www.buygeogrid.com/blog/how-much-geogrid-for-a-driveway' },
  openGraph: {
    title: 'How Much Geogrid Do I Need for a Driveway?',
    description: 'Simple math, real overlap allowances, and the SKUs that fit typical residential and contractor jobs.',
    type: 'article',
    publishedTime: '2026-07-13',
    authors: ['Asphalt Fabrics & Supply'],
  },
};

export default function HowMuchGeogridForDriveway() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <PageHero
          title="How Much Geogrid Do I Need for a Driveway?"
          description="Rough numbers, honest overlap allowances, and how to pick the right SKU. If you can measure a driveway with a tape, you can size the geogrid order."
          ctaText="Try the Cost Calculator"
          ctaLink="/residential"
          secondaryCtaText="Call (440) 368-1420"
          secondaryCtaLink="tel:4403681420"
          badge="Sizing Guide"
        />

        <section className="py-16 px-6 bg-white">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Math in One Step</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Multiply length by width to get the driveway square footage. Divide by 9 to convert to square yards. Add 10% for overlap at seams. That&apos;s your geogrid order.
            </p>
            <div className="bg-gray-100 p-6 rounded my-6">
              <p className="text-lg font-mono">
                <strong>Driveway length × width</strong> = ft²<br />
                <strong>÷ 9</strong> = yd²<br />
                <strong>× 1.10 (overlap)</strong> = geogrid yd² you need
              </p>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Example: a 100 ft × 12 ft driveway = 1,200 ft² = 133.3 yd² = <strong>147 yd² of geogrid with overlap</strong>.
            </p>
          </div>
        </section>

        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Typical Roll Sizes by SKU</h2>
            <div className="bg-white rounded shadow-sm overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="text-left p-4 font-semibold">SKU</th>
                    <th className="text-left p-4 font-semibold">Roll Dimensions</th>
                    <th className="text-left p-4 font-semibold">Coverage</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { s: 'Tensar NX650', d: '13.1 ft × 246 ft', c: '~358 yd²' },
                    { s: 'Tensar NX750', d: '13.1 ft × 246 ft', c: '~358 yd²' },
                    { s: 'Tensar NX850', d: '13.1 ft × 246 ft', c: '~358 yd²' },
                    { s: 'Tensar TX190L', d: '13.1 ft × 246 ft', c: '~358 yd²' },
                  ].map((r, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="p-4 font-semibold">{r.s}</td>
                      <td className="p-4 text-gray-700">{r.d}</td>
                      <td className="p-4 text-gray-700">{r.c}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              Roll dimensions may vary by production run. Always confirm current stock with us before finalizing your order.
            </p>
          </div>
        </section>

        <section className="py-16 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Real-World Sizing Examples</h2>
            <div className="space-y-6">
              {[
                { s: 'Short suburban driveway', d: '40 ft × 10 ft = 400 ft² = 44 yd² + 10% = ~49 yd²', r: 'Buy 1 partial roll or share a roll across two jobs.' },
                { s: 'Standard residential driveway', d: '100 ft × 12 ft = 1,200 ft² = 133 yd² + 10% = ~147 yd²', r: 'Buy 1 roll (~358 yd²) — leftover is useful for a work pad or future job.' },
                { s: 'Long rural driveway', d: '300 ft × 14 ft = 4,200 ft² = 467 yd² + 10% = ~514 yd²', r: 'Buy 2 rolls. Leftover ~200 yd² covers a turnaround or shed pad.' },
                { s: 'Small commercial parking', d: '80 ft × 60 ft = 4,800 ft² = 533 yd² + 10% = ~587 yd²', r: 'Buy 2 rolls (~716 yd²) — leftover useful for future patches.' },
              ].map((e, i) => (
                <div key={i} className="bg-gray-50 p-6 rounded border-l-4 border-[#00c97e]">
                  <h3 className="font-semibold text-gray-900 mb-2">{e.s}</h3>
                  <p className="text-gray-700 mb-2">{e.d}</p>
                  <p className="text-sm text-gray-600 italic">{e.r}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Which Tensar SKU for a Driveway?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              For most residential and light-commercial driveways, the choice comes down to:
            </p>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">Tensar InterAx NX650</h3>
                <p className="text-gray-700">Workhorse for typical residential driveways on decent subgrade. Cost-effective. Most common choice.</p>
                <Link href="/geogrid/nx650" className="mt-2 inline-block text-[#00c97e] font-semibold hover:underline">NX650 details →</Link>
              </div>
              <div className="bg-white p-6 rounded shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">Tensar InterAx NX750</h3>
                <p className="text-gray-700">Step up when the subgrade is softer, the vehicles are heavier (RVs, dump trucks), or the driveway sees commercial traffic.</p>
                <Link href="/geogrid/nx750" className="mt-2 inline-block text-[#00c97e] font-semibold hover:underline">NX750 details →</Link>
              </div>
              <div className="bg-white p-6 rounded shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">Tensar TriAx TX190L</h3>
                <p className="text-gray-700">Previous-generation option — still widely spec&apos;d, well-documented, and often cheaper per roll than InterAx.</p>
                <Link href="/geogrid/tx190" className="mt-2 inline-block text-[#00c97e] font-semibold hover:underline">TX190L details →</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Don&apos;t Forget the Fabric</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              If your subgrade is soft, wet, or heavy clay (typical for most of Northeast Ohio), you also need a woven geotextile below the geogrid to stop the soil from pumping up into your aggregate. Size the fabric the same way — square yards + 10% overlap — and buy Mirafi 500X or 600X.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              <Link href="/geogrid-vs-geotextile" className="text-[#00c97e] font-semibold hover:underline">More on the geogrid vs. geotextile question here →</Link>
            </p>
          </div>
        </section>

        <section className="py-16 px-6 bg-[#1a1a1a] text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Skip the Math — Use the Calculator</h2>
            <p className="text-lg text-gray-300 mb-6">Enter your driveway dimensions and subgrade type, get an itemized material list and total cost.</p>
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
