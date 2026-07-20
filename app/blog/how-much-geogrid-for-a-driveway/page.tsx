import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
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

        <section className="py-20 md:py-24 px-6 bg-white">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <Reveal>
            <div className="text-[#00c97e] text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3">Formula</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">The Math in One Step</h2>
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
            </Reveal>
          </div>
        </section>

        <section className="py-20 md:py-24 px-6 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <Reveal>
            <div className="text-[#00c97e] text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3">Roll sizes</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">Tensar NX850 Roll Sizes We Stock</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              For residential driveways we stock <strong>Tensar InterAx NX850</strong> in partial rolls
              sized for typical residential jobs. Full-roll dimensions come straight from the Tensar PIDS
              spec — the partial widths are cut from the same 12.5 ft standard roll.
            </p>
            <div className="bg-white rounded shadow-sm overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="text-left p-4 font-semibold">Format</th>
                    <th className="text-left p-4 font-semibold">Dimensions</th>
                    <th className="text-left p-4 font-semibold">Coverage</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { s: 'Quarter roll', d: '12.5 ft × 49.25 ft', c: '68.5 yd²' },
                    { s: 'Half roll', d: '12.5 ft × 98.5 ft', c: '137 yd²' },
                    { s: 'Standard (full) roll', d: '12.5 ft × 197 ft', c: '274 yd²' },
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
              We keep half and quarter rolls in stock at our Solon warehouse for pickup. Full-roll orders are quoted
              by phone. Text your driveway dimensions to (440) 384-1897 and we&apos;ll tell you which format fits.
            </p>
            </Reveal>
          </div>
        </section>

        <section className="py-20 md:py-24 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <Reveal>
            <div className="text-[#00c97e] text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3">Examples</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">Real-World Sizing Examples</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              NX850 rolls are 12.5 ft wide. Strips run along the driveway length. Figure out how many strips
              you need (width ÷ 12.5, round up), multiply by driveway length, and match to the closest
              partial-roll length.
            </p>
            <div className="space-y-6">
              {[
                { s: 'Short suburban driveway', d: '40 ft × 10 ft — 1 strip × 40 linear ft', r: '1 quarter roll (49.25 ft available). Leftover ~9 ft.' },
                { s: 'Standard residential driveway', d: '80 ft × 12 ft — 1 strip × 80 linear ft', r: '1 half roll (98.5 ft available). Leftover ~18 ft.' },
                { s: 'RV / boat pad', d: '40 ft × 20 ft — 2 strips × 40 linear ft = 80 linear ft', r: '1 half roll covers both strips.' },
                { s: 'Long rural driveway', d: '150 ft × 12 ft — 1 strip × 150 linear ft', r: '1 half + 1 quarter roll (147.75 ft available). Text us — larger jobs get a phone quote.' },
              ].map((e, i) => (
                <div key={i} className="bg-gray-50 p-6 rounded border-l-4 border-[#00c97e]">
                  <h3 className="font-semibold text-gray-900 mb-2">{e.s}</h3>
                  <p className="text-gray-700 mb-2">{e.d}</p>
                  <p className="text-sm text-gray-600 italic">{e.r}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600 mt-6">
              Or skip the math — use our <Link href="/residential" className="text-[#00c97e] font-semibold hover:underline">driveway calculator</Link>, enter your dimensions, and it recommends the exact partial-roll combination.
            </p>
            </Reveal>
          </div>
        </section>

        <section className="py-20 md:py-24 px-6 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <Reveal>
            <div className="text-[#00c97e] text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3">Why NX850</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">Why NX850 for Residential Driveways?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              For residential driveways and pads we stock <strong>Tensar InterAx NX850</strong> in partial-roll
              formats — the current-generation top-of-the-line multi-axial geogrid. The design values for NX850
              come straight from the Tensar 2025 Subgrade Pocket Card, so our driveway calculator matches
              exactly what a Tensar engineer would spec.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              For commercial, DOT, and heavy-duty applications we also carry the rest of the Tensar lineup —
              NX650, NX750, TriAx TX190L, and the H-Series. Call us and we&apos;ll walk through the right SKU
              for your job with a Tensar+ engineered design.
            </p>
            <div className="mt-6">
              <Link href="/geogrid/nx850" className="inline-flex items-center gap-1 text-[#00c97e] font-semibold hover:gap-2 transition-all">
                NX850 product details <span>→</span>
              </Link>
            </div>
            </Reveal>
          </div>
        </section>

        <section className="py-20 md:py-24 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <Reveal>
            <div className="text-[#00c97e] text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3">Fabric</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">Don&apos;t Forget the Fabric</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              If your subgrade is soft, wet, or heavy clay (typical for most of Northeast Ohio), you also need a woven geotextile below the geogrid to stop the soil from pumping up into your aggregate. Size the fabric the same way — square yards + 10% overlap — and buy Mirafi 500X or 600X.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              <Link href="/geogrid-vs-geotextile" className="inline-flex items-center gap-1 text-[#00c97e] font-semibold hover:gap-2 transition-all">More on the geogrid vs. geotextile question here <span>→</span></Link>
            </p>
            </Reveal>
          </div>
        </section>

        <section className="py-20 md:py-24 px-6 bg-[#1a1a1a] text-white">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight tracking-tight">Skip the Math — Use the Calculator</h2>
              <p className="text-lg text-gray-300 mb-8">Enter your driveway dimensions and subgrade type, get an itemized material list and total cost.</p>
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
