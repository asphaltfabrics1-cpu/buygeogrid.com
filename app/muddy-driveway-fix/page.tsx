import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Muddy Driveway? Here\'s the Permanent Fix | Geogrid + Fabric | Ohio',
  description: 'Muddy driveway that swallows gravel every year? The problem isn\'t the stone — it\'s the soft soil beneath. Geogrid + geotextile stops mud pumping through and makes your gravel last. Ohio distributor.',
  keywords: ['muddy driveway fix', 'gravel driveway stops sinking', 'stop mud in driveway', 'geogrid for driveway', 'fabric for driveway', 'permanent driveway fix', 'Cleveland Ohio muddy driveway', 'Akron driveway repair'],
  alternates: { canonical: 'https://www.buygeogrid.com/muddy-driveway-fix' },
  openGraph: {
    title: 'Muddy Driveway? Here\'s the Permanent Fix',
    description: 'The mud isn\'t coming from your gravel. It\'s the soil beneath, pumping up between the stones. Here\'s the fix.',
    type: 'article',
  },
};

const faqData = [
  {
    question: 'Why does my driveway keep turning to mud?',
    answer: 'The mud isn\'t coming from your gravel. It\'s the soil beneath. Every time a wheel loads the driveway, the aggregate presses down and the soft soil below pumps up into the gaps between stones. Over a season the two mix and you end up with a mud-and-gravel slurry instead of a clean stone driveway.',
  },
  {
    question: 'Won\'t adding more gravel just fix it?',
    answer: 'That\'s the trap. More gravel gives you a few months. Then the same pumping action re-mixes the fresh stone with the underlying mud, and you\'re back to the same problem — except now you\'ve spent double. The permanent fix is a separator layer between the aggregate and the soft soil.',
  },
  {
    question: 'What does the permanent fix actually look like?',
    answer: 'For a typical residential driveway on soft ground: strip the mixed material back to firm soil (usually 4–8 inches down), roll out a woven geotextile like Mirafi 500X directly on the subgrade, roll out a Tensar geogrid on top, then place 6–10 inches of #57 or #304 aggregate. The geotextile stops the mud pumping up. The geogrid locks the aggregate into a stiff layer. Done right, this is a build-once-and-forget-it fix.',
  },
  {
    question: 'How much does it cost?',
    answer: 'For an average residential driveway (roughly 100 x 12 ft) you\'re looking at material costs of a few hundred dollars for the geogrid + geotextile, plus your aggregate. That\'s significantly less than the cost of re-gravelling every 1–2 years. Call us for exact pricing on your specific dimensions.',
  },
  {
    question: 'Can I install it myself or do I need a contractor?',
    answer: 'Both work. Homeowners with a tractor or small skid steer install geogrid and geotextile all the time — it rolls out flat and gets buried under aggregate, no seaming or fastening required. If you\'d rather have a residential contractor handle the excavation and grading, we can spec the material list for them.',
  },
  {
    question: 'What geogrid should I use for a driveway?',
    answer: 'For a typical residential driveway on soft ground, Tensar InterAx NX650 or TriAx TX190L are the workhorses. For heavier vehicles or truly soft ground, step up to NX750. Under all of them, if the ground is wet or clay-heavy, add a Mirafi 500X woven geotextile as a separator.',
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

export default function MuddyDrivewayFix() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main className="flex-grow">
        <PageHero
          title="Muddy Driveway? Here's the Permanent Fix."
          description="The mud isn't coming from your gravel. It's the soft soil beneath, pumping up between the stones every time you drive over it. Here's what actually stops it — and how much you'll save by doing it once."
          ctaText="Get a Free Quote"
          ctaLink="/contact"
          secondaryCtaText="Call (440) 368-1420"
          secondaryCtaLink="tel:4403681420"
          badge="Ohio Homeowners & Contractors"
        />

        <section className="py-20 md:py-24 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <Reveal className="mb-8">
              <div className="text-[#00c97e] text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3">The trap</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight tracking-tight">The Cycle You&apos;re Stuck In</h2>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                { n: '1', h: 'Spring', b: 'Driveway turns to mud. You add a few tons of gravel and re-grade.' },
                { n: '2', h: 'Summer', b: 'Looks great. Compacts down under tire loads.' },
                { n: '3', h: 'Fall/Winter', b: 'Mud pumps back up through the fresh stone. Back to square one.' },
              ].map((s) => (
                <div key={s.n} className="bg-gray-50 p-6 rounded">
                  <div className="text-4xl font-bold text-[#00c97e] mb-2">{s.n}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{s.h}</h3>
                  <p className="text-gray-700">{s.b}</p>
                </div>
              ))}
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Doing this every year adds up fast. Ten tons of gravel and a few hours of a small skid steer, twice a year, forever. That&apos;s the tax you pay for not fixing the actual problem.
            </p>
          </div>
        </section>

        <section className="py-20 md:py-24 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <Reveal className="mb-6">
              <div className="text-[#00c97e] text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3">The fix</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight tracking-tight">The Two-Layer Fix</h2>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded shadow-sm">
                <div className="text-sm font-semibold text-[#00c97e] uppercase tracking-wide mb-2">Bottom Layer</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Woven Geotextile</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Mirafi 500X or 600X woven geotextile rolls out directly on the prepared subgrade. This is the separator — it lets water pass but stops mud from pumping up into your gravel.
                </p>
                <Link href="/500x" className="text-[#00c97e] font-semibold hover:underline">
                  Mirafi 500X details →
                </Link>
              </div>
              <div className="bg-white p-6 rounded shadow-sm">
                <div className="text-sm font-semibold text-[#00c97e] uppercase tracking-wide mb-2">Top Layer</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Geogrid</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Tensar NX650 or TX190L rolls out on top of the fabric. Aggregate placed over it interlocks through the geogrid apertures, forming a stiff platform that spreads wheel load and stops rutting.
                </p>
                <Link href="/geogrid" className="text-[#00c97e] font-semibold hover:underline">
                  See geogrid options →
                </Link>
              </div>
            </div>
            <div className="mt-8 bg-[#1a1a1a] text-white p-6 rounded">
              <p className="text-lg leading-relaxed">
                <span className="font-semibold text-[#00c97e]">Then:</span> 6–10 inches of #57 or #304 aggregate on top, compacted. That&apos;s the whole system. It rolls out in an afternoon, and it doesn&apos;t need to be redone every year.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <Reveal>
            <div className="text-[#00c97e] text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3">Not sure?</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">Not Sure If Your Soil Is the Problem?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Call us with a photo of the wet spots and a rough size. We&apos;ll tell you which Tensar geogrid and Mirafi fabric to use for your subgrade, how many rolls, and what you should expect to pay.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              After the test we&apos;ll walk you through the numbers, spec the material, and you can decide from there. No pressure, no sales pitch.
            </p>
            <div className="mt-8">
              <Link href="/residential" className="inline-flex items-center gap-2 px-6 py-3 bg-[#00c97e] text-white rounded font-semibold hover:bg-[#00b36f] transition-colors group">
                Use the driveway cost calculator
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
            </Reveal>
          </div>
        </section>

        <section className="py-20 md:py-24 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <Reveal className="mb-8">
              <div className="text-[#00c97e] text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3">FAQ</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight tracking-tight">Frequently Asked Questions</h2>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight tracking-tight">Ready to Fix It Once?</h2>
              <p className="text-lg text-gray-300 mb-8">Northern Ohio distributor. Same-day pickup from our Solon warehouse.</p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center sm:items-center">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-[#00c97e] hover:bg-[#00b36f] rounded transition-colors duration-200 group">
                  Get a Quote
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
