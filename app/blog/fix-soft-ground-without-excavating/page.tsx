import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Can I Fix Soft Ground Without Excavating? | Yes — Here\'s How | Ohio',
  description: 'Dig-and-replace is the old approach to soft-ground subgrade. Geogrid mechanical stabilization lets you build over the soft soil instead of hauling it off. Here\'s the engineering behind why it works.',
  keywords: ['fix soft ground without excavating', 'no excavation subgrade', 'geogrid alternative to excavation', 'soft ground driveway no dig', 'stabilize weak soil without removing'],
  alternates: { canonical: 'https://www.buygeogrid.com/blog/fix-soft-ground-without-excavating' },
  openGraph: {
    title: 'Fix Soft Ground Without Excavating? Yes — Here\'s How',
    description: 'Geogrid mechanical stabilization: build over soft soil instead of hauling it off.',
    type: 'article',
    publishedTime: '2026-07-13',
    authors: ['Asphalt Fabrics & Supply'],
  },
};

export default function FixSoftGroundWithoutExcavating() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <PageHero
          title="Can I Fix Soft Ground Without Excavating? Yes."
          description="The traditional answer to soft subgrade was dig it out and replace it with structural fill. That's expensive, slow, and creates a truckload of spoil. There's a better way — and it's been engineer-approved for 30+ years."
          ctaText="Get Design Support"
          ctaLink="/contact"
          secondaryCtaText="Call (440) 368-1420"
          secondaryCtaLink="tel:4403681420"
          badge="Engineering Guide"
        />

        <section className="py-20 md:py-24 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <Reveal>
            <div className="text-[#00c97e] text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3">Background</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">Why We Used to Excavate Everything</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Before geosynthetics existed, the only way to build a pavement over soft ground was to remove the soft ground. Excavate 24–36 inches of unusable soil, haul it off, import compactable structural fill, place it in lifts, compact each lift, and only then build your pavement section.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              This works. It also costs a fortune on any job bigger than a driveway — hauling fees, spoil disposal, imported material cost, extra days on the schedule, and heavy equipment demand. On big commercial and DOT projects, subgrade replacement can be the single largest line item.
            </p>
            </Reveal>
          </div>
        </section>

        <section className="py-20 md:py-24 px-6 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <Reveal>
            <div className="text-[#00c97e] text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3">The fix</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">The Mechanical Stabilization Alternative</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              What if you didn&apos;t remove the soft soil at all — instead, you built a stiff platform above it that spread wheel loads over a much wider area?
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              That&apos;s what geogrid does. A Tensar InterAx or TriAx laid on the prepared subgrade, aggregate placed on top, and the interlock between stone and geogrid apertures produces a mechanically stabilized layer that behaves stiffer than the sum of its parts. The wheel loads on that stiffened aggregate transmit through a much larger footprint of underlying soft soil — so the stress at any single point on the subgrade is far lower.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Same soft ground. Same pavement. But now the soft ground never sees a stress high enough to fail.
            </p>
            </Reveal>
          </div>
        </section>

        <section className="py-20 md:py-24 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <Reveal>
            <div className="text-[#00c97e] text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3">When to use</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">When It Works and When You Still Excavate</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Geogrid stabilization is not universal. There are cases where dig-and-replace is still the right answer:
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded my-6">
              <ul className="space-y-3 text-gray-700">
                <li>• <strong>Very deep organic soils</strong> (peat, muck) with no realistic bottom in reach</li>
                <li>• <strong>Contaminated soil</strong> that requires removal for regulatory reasons</li>
                <li>• <strong>Buried debris or fill</strong> that needs to come out for structural reasons</li>
                <li>• <strong>Subsidence-prone areas</strong> like collapsed mines or karst</li>
              </ul>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              For the vast majority of soft-ground problems — soft clay, marginal fill, wet subgrade, seasonally saturated soils — mechanical stabilization is the faster, cheaper, engineer-approved solution.
            </p>
            </Reveal>
          </div>
        </section>

        <section className="py-20 md:py-24 px-6 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <Reveal>
            <div className="text-[#00c97e] text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3">Two layers</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">The Two-Layer Version for Very Soft Ground</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              When the subgrade is truly weak (CBR under 3) — soft, wet, clay-heavy — geogrid alone isn&apos;t enough. The soft soil will squeeze up between the aggregate stones and contaminate the base over time.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The fix is a two-layer system: a woven geotextile (Mirafi 500X or 600X) directly on the subgrade to prevent soil pumping, then the geogrid on top of the fabric, then aggregate. Now you&apos;ve solved both problems at once — the fabric stops migration, the geogrid stabilizes the aggregate mechanically.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              This is the approach that turns essentially unusable ground into a stable, load-carrying platform — without touching a single scoop of the soft soil.
            </p>
            </Reveal>
          </div>
        </section>

        <section className="py-20 md:py-24 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <Reveal>
            <div className="text-[#00c97e] text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3">Engineered</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">The Design Isn&apos;t a Guess</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Modern geogrid stabilization is fully engineered. Tensar&apos;s design software (Tensar Plus) takes your subgrade CBR, design traffic loads, and target aggregate section, and produces a design with a specific geogrid, specific fabric where needed, and specific aggregate thickness — with a stamped engineering document your engineer of record can review.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              This isn&apos;t rolling out fabric and hoping. It&apos;s a well-established, DOT-and-commercial-approved engineering approach that&apos;s been in use for over 30 years.
            </p>
            </Reveal>
          </div>
        </section>

        <section className="py-20 md:py-24 px-6 bg-[#1a1a1a] text-white">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight tracking-tight">Free DCP + Free Design Support</h2>
              <p className="text-lg text-gray-300 mb-8">We come out, take DCP readings, and Tensar&apos;s engineers spec the design. No cost. Northern Ohio.</p>
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
