import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Do You Have to Buy a Full Roll of Geogrid? | Partial Rolls Ohio',
  description: 'A full roll of NX850 is overkill for a driveway or patio. We cut quarter and half rolls of Tensar geogrid for residential jobs across Northern Ohio. Stocked in Glenwillow, OH.',
  keywords: [
    'partial roll geogrid',
    'quarter roll geogrid',
    'half roll geogrid',
    'small piece geogrid ohio',
    'minimum order geogrid',
    'buy less than full roll tensar',
    'nx850 partial roll',
    'residential geogrid cleveland',
    'geogrid for one driveway',
    'geogrid supplier ohio partial',
  ],
  alternates: {
    canonical: 'https://www.buygeogrid.com/blog/partial-rolls-of-geogrid',
  },
  openGraph: {
    title: 'Do You Have to Buy a Full Roll of Geogrid? | Partial Rolls Ohio',
    description: 'Full rolls are overkill for driveways and patios. We cut quarter and half rolls of Tensar NX850 for Northern Ohio residential jobs.',
    type: 'article',
    publishedTime: '2026-08-21',
    authors: ['Asphalt Fabrics & Supply'],
    images: ['/images/tensar-geogrid-residential-uses-ohio.png'],
  },
};

export default function PartialRollsOfGeogrid() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <PageHero
          title="Do You Have to Buy a Full Roll of Geogrid?"
          description="Short answer: no. We cut quarter and half rolls of Tensar NX850 out of Glenwillow, OH — sized for residential driveways, patios, RV pads, and shed pads across Northern Ohio."
          ctaText="Text (440) 384-1897"
          ctaLink="tel:4403841897"
          secondaryCtaText="See Residential Options"
          secondaryCtaLink="/residential"
        />

        <article className="py-20 md:py-24 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <Reveal>
            <div className="bg-white rounded border border-gray-200 p-8">
              <div className="prose prose-lg max-w-none">
                <div className="mb-8">
                  <img
                    src="/images/tensar-geogrid-residential-uses-ohio.png"
                    alt="Partial rolls of Tensar NX850 geogrid stocked in Glenwillow, Ohio for residential driveways, patios, and pads"
                    className="w-full rounded border border-gray-200"
                  />
                </div>

                <div className="text-[#00c97e] text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3">The short version</div>
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight tracking-tight">A full roll is overkill for most residential jobs</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  A standard-width roll of Tensar NX850 is 12.5 feet wide by 197 feet long — about 274
                  square yards of coverage. That&apos;s enough for a small commercial parking lot. For a
                  two-car driveway, an RV pad, a patio, or a shed foundation, you&apos;d be paying for
                  hundreds of square feet you&apos;ll never use.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Most residential distributors handle this by telling you it&apos;s full roll or nothing.
                  We don&apos;t. We cut partial rolls — quarter and half — out of our Glenwillow, OH
                  warehouse (44139) for residential contractors and homeowners across Northern Ohio.
                  You pay for what you actually need.
                </p>

                <div className="text-[#00c97e] text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3 mt-8">Sizes we stock</div>
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight tracking-tight">Quarter roll, half roll, or full roll</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  We keep three cut sizes of NX850 in stock in Solon/Glenwillow. All three are the same
                  12.5-ft roll width — we cut them shorter to match residential job sizes.
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-6 not-prose">
                  <div className="border-2 border-[#00c97e] rounded p-5 bg-[#f0fdf4]">
                    <div className="text-[#00c97e] text-xs font-semibold uppercase tracking-wide mb-2">Quarter roll</div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">12.5 × 49.25 ft</div>
                    <div className="text-sm text-gray-700">~615 sq ft coverage</div>
                    <div className="text-xs text-gray-600 mt-3 leading-relaxed">
                      Fits a one-car driveway (up to ~40 ft long), an RV/boat pad, a walkway, or a shed pad.
                    </div>
                  </div>
                  <div className="border-2 border-[#00c97e] rounded p-5 bg-[#f0fdf4]">
                    <div className="text-[#00c97e] text-xs font-semibold uppercase tracking-wide mb-2">Half roll</div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">12.5 × 98.5 ft</div>
                    <div className="text-sm text-gray-700">~1,230 sq ft coverage</div>
                    <div className="text-xs text-gray-600 mt-3 leading-relaxed">
                      Fits a two-car driveway (up to ~40 ft long, laid as two strips), a bigger patio, or a
                      contractor lay-down yard.
                    </div>
                  </div>
                  <div className="border border-gray-300 rounded p-5 bg-gray-50">
                    <div className="text-gray-500 text-xs font-semibold uppercase tracking-wide mb-2">Full roll</div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">12.5 × 197 ft</div>
                    <div className="text-sm text-gray-700">~2,460 sq ft coverage</div>
                    <div className="text-xs text-gray-600 mt-3 leading-relaxed">
                      Overkill for one driveway — right size for multi-lot developments, small commercial
                      lots, or contractor stock.
                    </div>
                  </div>
                </div>

                <div className="text-[#00c97e] text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3 mt-8">Sizing your job</div>
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight tracking-tight">Which roll size fits your project?</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  A few common Northern Ohio residential jobs and what fits:
                </p>
                <ul className="text-gray-700 mb-6 leading-relaxed">
                  <li className="mb-2">
                    <strong>One-car driveway (10 ft × 40 ft):</strong> 1 strip of 12.5-ft-wide grid running
                    the length = 40 linear ft. Fits in a <strong>quarter roll</strong>.
                  </li>
                  <li className="mb-2">
                    <strong>Two-car driveway (20 ft × 40 ft):</strong> 2 strips running the length = 80
                    linear ft. Fits in a <strong>half roll</strong>.
                  </li>
                  <li className="mb-2">
                    <strong>12 × 40 ft RV or boat pad:</strong> 1 strip = 40 linear ft. Fits in a{' '}
                    <strong>quarter roll</strong>.
                  </li>
                  <li className="mb-2">
                    <strong>15 × 20 ft patio:</strong> 2 strips of 20 linear ft = 40 linear ft.
                    Fits in a <strong>quarter roll</strong>.
                  </li>
                  <li className="mb-2">
                    <strong>10 × 12 ft shed pad:</strong> 1 strip of 12 linear ft. Fits in a{' '}
                    <strong>quarter roll</strong> (with plenty left over for the next project).
                  </li>
                  <li className="mb-2">
                    <strong>25 × 50 ft contractor lay-down yard:</strong> 2 strips of 50 linear ft = 100
                    linear ft. Fits in a <strong>half roll plus a small piece</strong> from a quarter,
                    or a full roll if you want stock left over.
                  </li>
                </ul>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Use the{' '}
                  <Link href="/residential#calculator" className="text-[#00c97e] font-semibold hover:underline">
                    calculator on our residential page
                  </Link>{' '}
                  to plug in your exact dimensions and see the recommended roll size.
                </p>

                <div className="text-[#00c97e] text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3 mt-8">Delivery + pickup</div>
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight tracking-tight">Northern Ohio delivery or Glenwillow pickup</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Partial rolls are compact — a quarter roll weighs about 46 lbs and rolls up to fit in
                  the bed of a pickup truck. If you&apos;re close to Solon or Glenwillow (44139), pickup is
                  the easiest option. We also deliver across Cleveland, Akron, Toledo, Youngstown, Canton,
                  and the surrounding Northern Ohio counties — usually same-day or next-day depending on
                  your zip.
                </p>

                <div className="text-[#00c97e] text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3 mt-8">Pricing</div>
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight tracking-tight">Text for a quote</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Partial roll pricing depends on the size and current stock — text your project
                  dimensions to{' '}
                  <a href="tel:4403841897" className="text-[#00c97e] font-semibold hover:underline">
                    (440) 384-1897
                  </a>{' '}
                  and we&apos;ll get you a same-day quote. Include your zip code so we can factor in
                  delivery vs pickup.
                </p>

                <div className="mt-12 bg-blue-50 border-2 border-blue-300 rounded p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Why NX850 for residential?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    NX850 is Tensar&apos;s multi-axial InterAx geogrid — the same product spec&apos;d on
                    ODOT highway jobs and heavy commercial pavement. It interlocks aggregate on both
                    sides through a hexagon-trapezoid-triangle aperture design, so the base stays locked
                    in place over soft Northern Ohio clay. For a residential driveway or patio at
                    city-permit depth, adding NX850 at the bottom can extend base life and reduce
                    long-term maintenance costs (per Tensar full-scale trafficking testing).
                  </p>
                </div>

                <div className="mt-8 bg-green-50 border-2 border-[#00c97e] rounded p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Ready to get started?</h3>
                  <p className="text-gray-700 mb-4">
                    Text your dimensions to (440) 384-1897 for a same-day quote, or use the residential
                    calculator to see which roll size fits your job.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="tel:4403841897"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold text-white bg-[#00c97e] hover:bg-[#00b36f] rounded transition-colors duration-200 group"
                    >
                      Text (440) 384-1897
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </a>
                    <Link
                      href="/residential"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold text-gray-700 border-2 border-gray-300 hover:border-gray-400 rounded transition-colors duration-200 group"
                    >
                      Residential Calculator
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <Link
                    href="/blog"
                    className="text-[#00c97e] hover:text-[#00b36f] font-semibold transition-colors"
                  >
                    ← Back to Blog
                  </Link>
                </div>
              </div>
            </div>
            </Reveal>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
