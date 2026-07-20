import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tensar InterAx NX850 vs TriAx TX190L: Which Geogrid to Spec? | Ohio',
  description: 'InterAx NX850 vs TriAx TX190L — Tensar\'s next-gen and previous-gen workhorses. Same brand, different aperture geometry, different design values. Here\'s how to pick for your job. Ohio distributor.',
  keywords: ['NX850 vs TX190L', 'InterAx vs TriAx', 'Tensar geogrid comparison', 'next generation geogrid', 'which Tensar geogrid', 'NX850 CBR', 'TX190L subgrade', 'Ohio Tensar distributor'],
  alternates: { canonical: 'https://www.buygeogrid.com/nx850-vs-tx190' },
  openGraph: {
    title: 'InterAx NX850 vs TriAx TX190L: How to Pick',
    description: 'Same brand, different generations. Different design values. Here\'s the honest comparison.',
    type: 'article',
  },
};

const faqData = [
  {
    question: 'What\'s the difference between InterAx and TriAx?',
    answer: 'Both are Tensar-manufactured multi-axial geogrids. TriAx (TX-series) is the previous generation, launched in 2007 with a triangular aperture geometry. InterAx (NX-series) is Tensar\'s newest platform, released more recently, with an improved rib/junction design that delivers higher stabilization values at similar aggregate thicknesses. Same brand, same install method, different generations.',
  },
  {
    question: 'Is InterAx just a "newer version" or is it materially better?',
    answer: 'It\'s materially different. InterAx has a re-engineered rib and junction geometry that produces higher trafficking values (measured in the Tensar Plus design software) at the same aggregate thickness. In practice: for a given design load, InterAx often lets you use less base thickness — or the same base thickness with a higher safety margin — than TriAx would.',
  },
  {
    question: 'When should I still spec TriAx (TX190L) instead of InterAx?',
    answer: 'Two situations. First: if your engineer of record has an existing spec that calls for TX190L or TX Type 2 — DOT and civil designs often reference the older TriAx product because the design guidance for it is more established in agency manuals. Second: if you have historical trafficking data on your projects with TriAx and want to keep that consistency for maintenance and warranty purposes.',
  },
  {
    question: 'When should I choose InterAx NX850?',
    answer: 'NX850 is the heavy-duty end of the InterAx line — commercial parking lots, distribution yards, DOT projects, and any application where you want maximum load-spreading with minimum aggregate thickness. If your job is more moderate (residential driveways, small commercial, light-duty access roads) you can drop to NX750 or NX650 and save cost.',
  },
  {
    question: 'What about the H-Series (HX165, HX145)?',
    answer: 'The H-Series is a different Tensar platform — hexagonal apertures instead of triangular. HX165 and HX145 are heavy-duty and are commonly spec\'d for very demanding applications like intermodal yards, port terminals, and heavy industrial pavement. Different tool for different jobs. Ask us if your engineer is torn between H-Series and InterAx.',
  },
  {
    question: 'Can you help me pick with a real design?',
    answer: 'Yes. Every material order from us includes free Tensar Plus design support. We take your subgrade CBR (from a DCP test on your site — also free) and your design loads, and Tensar\'s engineers run the design and tell you which geogrid + aggregate thickness gets you the safety margin you need. No guessing. No over-buying.',
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

export default function Nx850VsTx190() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main className="flex-grow">
        <PageHero
          title="InterAx NX850 vs TriAx TX190L"
          description="Tensar's next-generation and previous-generation multi-axial geogrids. Same brand, different aperture geometry, different design values. Here's how to pick — and when to stick with TriAx even though InterAx exists."
          ctaText="Get Design Help"
          ctaLink="/contact"
          secondaryCtaText="Call (440) 368-1420"
          secondaryCtaLink="tel:4403681420"
          badge="Free Tensar Plus Design Support"
        />

        <section className="py-20 md:py-24 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <Reveal className="mb-8">
              <div className="text-[#00c97e] text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3 text-center">Compare</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight tracking-tight text-center">The Comparison</h2>
            </Reveal>
            <Reveal delay={120}>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left p-4 border border-gray-300 font-semibold">Feature</th>
                    <th className="text-left p-4 border border-gray-300 font-semibold text-[#00c97e]">InterAx NX850</th>
                    <th className="text-left p-4 border border-gray-300 font-semibold text-blue-700">TriAx TX190L</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { f: 'Generation', g: 'Current (post-2020)', t: 'Previous (2007–)' },
                    { f: 'Aperture geometry', g: 'Optimized multi-axial', t: 'Triangular' },
                    { f: 'Design software', g: 'Tensar Plus', t: 'Tensar Plus / SpectraPave' },
                    { f: 'Design values', g: 'Higher trafficking output vs. TX', t: 'Well-established DOT precedent' },
                    { f: 'Best for', g: 'Heavy commercial, distribution, DOT', t: 'Commercial, residential, established specs' },
                    { f: 'When to prefer', g: 'Maximum performance, minimum base', t: 'Matching an existing engineer spec' },
                    { f: 'Install method', g: 'Roll out, overlap seams ~12"', t: 'Roll out, overlap seams ~12"' },
                    { f: 'Aggregate compatibility', g: '#57, #304, DGA', t: '#57, #304, DGA' },
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
            <Reveal className="mb-6">
              <div className="text-[#00c97e] text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3">How to pick</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight tracking-tight">Where Each Fits Best</h2>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-6">
              <Reveal delay={120}>
                <div className="bg-white p-6 rounded shadow-sm border-l-4 border-[#00c97e] h-full">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Pick NX850 when...</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Heavy commercial or industrial pavement</li>
                    <li>• DOT project with newer InterAx-compatible spec</li>
                    <li>• You want to minimize aggregate thickness</li>
                    <li>• Distribution centers, ports, intermodal</li>
                    <li>• You&apos;re specifying fresh, not matching a legacy design</li>
                  </ul>
                  <Link href="/geogrid/nx850" className="mt-4 inline-flex items-center gap-1 text-[#00c97e] font-semibold hover:gap-2 transition-all">
                    NX850 details <span>→</span>
                  </Link>
                </div>
              </Reveal>
              <Reveal delay={240}>
                <div className="bg-white p-6 rounded shadow-sm border-l-4 border-blue-500 h-full">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Pick TX190L when...</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Engineer of record has an existing TX spec</li>
                    <li>• DOT or agency manual references TriAx by name</li>
                    <li>• Consistency with prior TX-installed sections</li>
                    <li>• Residential, small commercial, established use cases</li>
                    <li>• Warranty or maintenance requires product match</li>
                  </ul>
                  <Link href="/geogrid/tx190" className="mt-4 inline-flex items-center gap-1 text-blue-700 font-semibold hover:gap-2 transition-all">
                    TX190L details <span>→</span>
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <Reveal className="mb-6">
              <div className="text-[#00c97e] text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3">Options</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight tracking-tight">The Middle-Ground InterAx Options</h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Between NX850 and dropping back to TX190L, there are two InterAx options that cover most real-world applications:
              </p>
            </Reveal>
            <div className="space-y-4">
              <Reveal delay={240}>
                <div className="bg-green-50 p-6 rounded border-l-4 border-[#00c97e]">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">InterAx NX750</h3>
                  <p className="text-gray-700">Between NX650 and NX850. Commercial pavement, moderate-to-heavy loads, weaker subgrades. Often the right pick when NX850 is over-spec and NX650 is under-spec.</p>
                  <Link href="/geogrid/nx750" className="mt-3 inline-flex items-center gap-1 text-[#00c97e] font-semibold hover:gap-2 transition-all">NX750 <span>→</span></Link>
                </div>
              </Reveal>
              <Reveal delay={360}>
                <div className="bg-green-50 p-6 rounded border-l-4 border-[#00c97e]">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">InterAx NX650</h3>
                  <p className="text-gray-700">Workhorse for residential driveways, small commercial parking, private access roads. Adequate subgrade support, most cost-effective InterAx SKU for typical jobs.</p>
                  <Link href="/geogrid/nx650" className="mt-3 inline-flex items-center gap-1 text-[#00c97e] font-semibold hover:gap-2 transition-all">NX650 <span>→</span></Link>
                </div>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight tracking-tight">Let&apos;s Run the Design</h2>
              <p className="text-lg text-gray-300 mb-8">Free Tensar Plus design support with every material order. Send us your CBR and loads, we&apos;ll spec the exact geogrid.</p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center sm:items-center">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-[#00c97e] hover:bg-[#00b36f] rounded transition-colors duration-200 group">
                  Request a Design Review
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
