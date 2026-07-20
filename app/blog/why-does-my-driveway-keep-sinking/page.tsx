import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why Does My Driveway Keep Sinking? | Causes & the Fix | Ohio',
  description: 'Gravel driveway sinking in the same spots every year? The problem isn\'t your gravel — it\'s the load-transfer between your driveway and the soil beneath. Here\'s what\'s actually happening and how geogrid stops it.',
  keywords: ['driveway keeps sinking', 'gravel driveway sinking', 'driveway ruts', 'driveway low spots', 'why does driveway sink', 'stop driveway from sinking'],
  alternates: { canonical: 'https://www.buygeogrid.com/blog/why-does-my-driveway-keep-sinking' },
  openGraph: {
    title: 'Why Does My Driveway Keep Sinking?',
    description: 'It\'s not the gravel. It\'s what\'s happening underneath. Here\'s what\'s actually breaking, and how to stop it.',
    type: 'article',
    publishedTime: '2026-07-13',
    authors: ['Asphalt Fabrics & Supply'],
  },
};

export default function WhyDoesMyDrivewayKeepSinking() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <PageHero
          title="Why Does My Driveway Keep Sinking?"
          description="Every spring the ruts come back. Every fall you throw more gravel at the same spots. Here's what's actually happening under your driveway — and why more gravel isn't the fix."
          ctaText="Fix It Once — See How"
          ctaLink="/muddy-driveway-fix"
          secondaryCtaText="Call (440) 368-1420"
          secondaryCtaLink="tel:4403681420"
          badge="Homeowner Guide"
        />

        <section className="py-20 md:py-24 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <Reveal>
            <div className="text-[#00c97e] text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3">Physics</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">The Physics of Sinking</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              A gravel driveway isn&apos;t one thing — it&apos;s two things stacked on each other. The aggregate on top, and the subgrade soil beneath. Every wheel load transfers through both. The problem is that the aggregate behaves like a fluid under repeated load: individual stones get pushed down into the soft soil and pushed sideways out of your tire tracks.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Over one season, you can lose an inch or more of usable driveway depth to this migration alone. On top of that, if the subgrade is soft, wet, or clay-heavy, water and mud pump up between the stones every time the driveway loads. What you get is a slow blending of your gravel with the mud below it, until there&apos;s no gravel left — just wet, chunky mud.
            </p>
            </Reveal>
          </div>
        </section>

        <section className="py-20 md:py-24 px-6 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <Reveal>
            <div className="text-[#00c97e] text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3">Causes</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">The Three Reasons Driveways Sink</h2>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded shadow-sm border-l-4 border-[#00c97e]">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">1. Aggregate migration</h3>
                <p className="text-gray-700">Loose stones under repeated wheel load push down into softer soil and out to the sides. This is why the ruts form where the tires roll and why the center of the driveway humps up.</p>
              </div>
              <div className="bg-white p-6 rounded shadow-sm border-l-4 border-[#00c97e]">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">2. Subgrade pumping</h3>
                <p className="text-gray-700">Wet clay soils below the aggregate get squeezed by the wheel load and pump up between the stones. Over time your gravel and mud mix into a single unusable layer.</p>
              </div>
              <div className="bg-white p-6 rounded shadow-sm border-l-4 border-[#00c97e]">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">3. Freeze-thaw expansion</h3>
                <p className="text-gray-700">Ohio winters trap water in the base. Frozen water expands ~9%, pushing the surface up. Thaw drops it back down. Do this twenty times in a winter and you get uneven, wavy driveways.</p>
              </div>
            </div>
            </Reveal>
          </div>
        </section>

        <section className="py-20 md:py-24 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <Reveal>
            <div className="text-[#00c97e] text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3">Common myth</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">Why More Gravel Doesn&apos;t Fix It</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The instinct is right — the ruts are deep, the stone is thin, add more stone. What happens next is the same cycle: the fresh stone starts migrating too, the wet subgrade below pumps up into it, and by the following spring you&apos;re back to the same sunken ruts. You&apos;ve spent the money on gravel twice.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The reason the fix doesn&apos;t hold is that you haven&apos;t addressed the mechanism causing the sinking. You just replaced the surface material.
            </p>
            </Reveal>
          </div>
        </section>

        <section className="py-20 md:py-24 px-6 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <Reveal>
            <div className="text-[#00c97e] text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3">The fix</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">What Actually Stops the Sinking</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Two mechanical additions between the aggregate and the subgrade:
            </p>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded shadow-sm border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Woven Geotextile</h3>
                <p className="text-gray-700">A Mirafi 500X or 600X directly on the subgrade acts as a separator. Water passes through it; soil doesn&apos;t. The clay below stops pumping up into your aggregate.</p>
              </div>
              <div className="bg-white p-6 rounded shadow-sm border-l-4 border-[#00c97e]">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Geogrid</h3>
                <p className="text-gray-700">A Tensar geogrid on top of the fabric confines your aggregate. Individual stones interlock through the geogrid apertures, forming a stiff, load-spreading platform. Migration stops. Ruts stop.</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mt-6">
              With those two layers in place, your fresh aggregate stays fresh aggregate. Not a mud slurry.
            </p>
            </Reveal>
          </div>
        </section>

        <section className="py-20 md:py-24 px-6 bg-[#1a1a1a] text-white">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight tracking-tight">Stop Buying the Same Gravel Every Year</h2>
              <p className="text-lg text-gray-300 mb-8">One weekend of installing geogrid + geotextile pays for itself in avoided re-gravelling within a season or two.</p>
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
