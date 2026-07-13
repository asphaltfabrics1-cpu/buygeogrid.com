import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Weak Subgrade Under Asphalt or Concrete? | Fix It Before You Pave | Ohio',
  description: 'A pavement is only as good as the subgrade under it. If yours is soft, clay-heavy, or scoring low on the DCP, geogrid + separation fabric fixes it before you spend the money on asphalt or concrete. Northern Ohio distributor.',
  keywords: ['weak subgrade fix', 'soft subbase', 'subgrade stabilization', 'CBR subgrade', 'geogrid subgrade', 'DCP test Ohio', 'proof roll fail', 'Tensar subgrade', 'Cleveland Akron subgrade'],
  alternates: { canonical: 'https://www.buygeogrid.com/weak-subgrade' },
  openGraph: {
    title: 'Weak Subgrade? Fix It Before You Pave',
    description: 'Your pavement is only as good as what\'s under it. Here\'s how to stabilize a weak subgrade with geogrid.',
    type: 'article',
  },
};

const faqData = [
  {
    question: 'How do I know if my subgrade is "weak"?',
    answer: 'Two ways. Field test: if a loaded pickup truck ruts more than 1 inch as it drives across the graded site, that\'s a weak subgrade. Instrument test: a DCP (Dynamic Cone Penetrometer) reading of CBR under 5 is soft; under 3 is weak; under 1 is essentially mud. Also — if your proof roll failed and the inspector wants stabilization, that\'s a weak subgrade.',
  },
  {
    question: 'What does geogrid actually do for a weak subgrade?',
    answer: 'Geogrid doesn\'t make the soil stronger. It changes how load transfers through the base above the soil. Aggregate placed on top of a Tensar InterAx or TriAx geogrid interlocks through the apertures and forms a stiff, mechanically stabilized layer that spreads wheel loads over a much wider area of subgrade. Same wheel load, much lower stress on the soft soil, no more rutting or pumping.',
  },
  {
    question: 'Do I need one layer or two?',
    answer: 'For subgrade CBR of 3–5, typically one layer of geogrid over the compacted subgrade with 8–12 inches of base course on top. For CBR under 3, pair the geogrid with a woven geotextile (Mirafi 500X or 600X) directly on the soil below the geogrid — the fabric prevents the soft soil from squeezing up into the aggregate. For CBR under 1, engineers sometimes call for two layers of geogrid with aggregate between them. Free DCP testing on-site tells us which case you\'re in.',
  },
  {
    question: 'Can I avoid over-excavating and replacing the bad soil?',
    answer: 'Usually yes, and that\'s the whole point. Traditional practice on weak subgrade is dig-out-and-replace with imported fill — expensive, slow, and produces a huge spoil pile. Geogrid stabilization lets you leave the soft soil in place and build a stiffer platform above it. On big commercial and DOT jobs it saves five and six figures per acre. On residential and small commercial it saves days of excavation.',
  },
  {
    question: 'What if my proof roll failed?',
    answer: 'Proof roll failures are the classic reason contractors call us. The inspector tells you the subgrade is too soft to pave over. You have two choices: dig out and replace (expensive, delays the schedule), or install a mechanically stabilized layer with geogrid and continue building. We\'ll come out same-week with a DCP, take readings, and coordinate with your engineer of record on the fix. Tensar has done thousands of these — it\'s a well-documented, engineer-approved solution.',
  },
  {
    question: 'Which geogrid for a subgrade fix?',
    answer: 'For most subgrade stabilization: Tensar InterAx NX650 (workhorse) or NX750 (heavier loads / weaker subgrade). NX850 for very heavy commercial and DOT applications. TriAx TX190L or TX Type 2 are older-generation but still widely spec\'d. For separation under all of these on soft/wet ground, Mirafi 500X or 600X woven geotextile.',
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

export default function WeakSubgrade() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main className="flex-grow">
        <PageHero
          title="Weak Subgrade Under Asphalt or Concrete?"
          description="A pavement is only as good as the subgrade underneath. If yours failed the proof roll, scored low on the DCP, or just won't compact — geogrid stabilizes it before you spend the money on asphalt or concrete. Northern Ohio distributor with free on-site DCP testing."
          ctaText="Get a Free Quote"
          ctaLink="/contact"
          secondaryCtaText="Call (440) 368-1420"
          secondaryCtaLink="tel:4403681420"
          badge="Contractor & DOT-Approved Solutions"
        />

        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why the Subgrade Matters More Than the Pavement</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Every pavement section — 4 inches of asphalt, 6 inches of concrete, whatever the spec is — sits on top of an aggregate base, which sits on top of the subgrade. If the subgrade moves, the base moves, and the pavement above cracks, rolls, or fails outright.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The subgrade is the invisible thing that determines whether your project lasts 20 years or 5. Getting it right — before the paver shows up — is the cheapest engineering decision on the job.
            </p>
          </div>
        </section>

        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Weak Subgrade Symptoms</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Proof roll failed inspection',
                'Loaded truck ruts more than 1 inch',
                'DCP reads CBR under 5',
                'Ground pumps when compactor runs over it',
                'Water pools instead of drains',
                'Existing pavement cracks in a wavy pattern (subgrade movement)',
              ].map((sym, i) => (
                <div key={i} className="bg-white p-4 rounded border-l-4 border-[#00c97e]">
                  <p className="text-gray-800">{sym}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Stabilization Options — Ranked by Cost</h2>
            <div className="space-y-6">
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded">
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">Dig Out and Replace</h3>
                  <span className="text-sm font-semibold text-red-700">Most Expensive</span>
                </div>
                <p className="text-gray-700">Excavate the soft material 24–36 inches down. Haul it off. Import structural fill. Compact in lifts. Days of work per acre, thousands per truckload for hauling, spoil disposal fees. Standard on big jobs before geogrid was widely available.</p>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">Cement or Lime Stabilization</h3>
                  <span className="text-sm font-semibold text-yellow-700">Middle</span>
                </div>
                <p className="text-gray-700">Mix cement or lime into the top 8–12 inches of soft soil to increase its strength. Works well on the right soil types but requires specialized equipment and creates a rigid layer that can crack. Not always practical on smaller sites.</p>
              </div>

              <div className="bg-green-50 border-l-4 border-[#00c97e] p-6 rounded">
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">Geogrid Mechanical Stabilization</h3>
                  <span className="text-sm font-semibold text-[#00c97e]">Least Expensive</span>
                </div>
                <p className="text-gray-700">One or two rolls of geogrid at the subgrade interface, aggregate placed and compacted on top. No excavation, no cement, no wait time. Standard Tensar Plus design produces a fully engineered spec for the loads you&apos;re building for.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">FAQ</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Got a Weak Subgrade Situation?</h2>
            <p className="text-lg text-gray-300 mb-6">Free on-site DCP testing across Northern Ohio. We come out, take the readings, and spec the fix in writing.</p>
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
