import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Pass a Proof Roll | Geogrid Aggregate Thickness Guide | BuyGeogrid',
  description: 'Proof roll failing? Use this chart to determine the right geogrid and aggregate thickness based on your subgrade CBR. Tensar InterAx, H-Series, and BX solutions compared.',
  keywords: ['proof roll', 'proof roll test', 'failing proof roll', 'subgrade stabilization', 'aggregate thickness', 'CBR', 'geogrid proof roll', 'Tensar InterAx', 'Tensar H-Series', 'pass proof roll', 'soft soil stabilization', 'Ohio geogrid'],
  alternates: {
    canonical: 'https://www.buygeogrid.com/blog/how-to-pass-a-proof-roll',
  },
  openGraph: {
    title: 'How to Pass a Proof Roll | Geogrid Aggregate Thickness Guide',
    description: 'Proof roll failing? Determine the right geogrid and aggregate thickness for your subgrade condition.',
    type: 'article',
    publishedTime: '2026-04-29',
    authors: ['Asphalt Fabrics & Supply'],
    images: ['/images/logos/afsupplylogo_transparent.png'],
  },
};

const faqData = [
  {
    question: "What is a proof roll test?",
    answer: "A proof roll test evaluates subgrade stability by driving a loaded truck (typically a fully loaded tandem-axle dump truck) across the prepared subgrade. The inspector observes the surface for deformation — rutting, pumping, or deflection. A common pass/fail threshold is 1 inch of deformation or less. If the subgrade deflects more than 1 inch under the loaded truck, it fails the proof roll and requires stabilization before paving can proceed."
  },
  {
    question: "How does geogrid help pass a proof roll?",
    answer: "Geogrid is placed over the soft subgrade before aggregate is placed. The aggregate interlocks with the geogrid apertures, creating a mechanically stabilized layer (MSL) that distributes the load across a wider area. This reduces the stress on the weak subgrade below, allowing it to support the proof roll load without excessive deformation. The stiffer the geogrid and the thicker the aggregate, the more load distribution you get."
  },
  {
    question: "How much aggregate do I need to pass a proof roll?",
    answer: "It depends on your subgrade strength (CBR) and the geogrid product used. For example, on a very soft subgrade with a 0.5% CBR (3-inch deep footprint), you would need 48 inches of aggregate with no geogrid, 36 inches with BX geogrid, 28 inches with H-Series HX165, or 24 inches with InterAx NX850. On a moderate subgrade with 2% CBR, the same comparison drops to 24 inches with no geogrid versus just 4-6 inches with InterAx NX850."
  },
  {
    question: "What CBR do I need to pass a proof roll without geogrid?",
    answer: "Generally, a subgrade with a CBR of 3 or higher can support a proof roll with a standard aggregate section. Below CBR 3, you will likely need geogrid stabilization, over-excavation, or chemical stabilization to pass. A DCP test on-site can quickly determine your actual subgrade CBR so you can design the right solution."
  },
  {
    question: "How do I determine my subgrade CBR in the field?",
    answer: "The most practical method is a Dynamic Cone Penetrometer (DCP) test, which follows ASTM D6951. A DCP measures penetration resistance in mm/blow and correlates directly to CBR values. You can also estimate CBR visually: a 3-inch deep footprint in the subgrade indicates roughly 0.5% CBR, a 1-inch deep footprint indicates roughly 1% CBR, and a 1-inch tire rut from a pickup truck indicates roughly 2% CBR."
  },
  {
    question: "Can I get DCP testing and geogrid design support?",
    answer: "Yes. Asphalt Fabrics & Supply performs on-site DCP testing and runs the results through Tensar Plus design software to determine the right geogrid product and aggregate thickness for your specific site conditions. Call (440) 368-1420 to schedule a site assessment."
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqData.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
  }))
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "How to Pass a Proof Roll: Geogrid & Aggregate Thickness Guide",
  "description": "Determine the right geogrid and aggregate thickness to pass a proof roll based on your subgrade CBR.",
  "author": { "@type": "Organization", "name": "Asphalt Fabrics & Supply" },
  "publisher": {
    "@type": "Organization",
    "name": "BuyGeogrid.com",
    "logo": { "@type": "ImageObject", "url": "https://www.buygeogrid.com/images/logos/afsupplylogo_transparent.png" }
  },
  "datePublished": "2026-04-29",
  "mainEntityOfPage": "https://www.buygeogrid.com/blog/how-to-pass-a-proof-roll"
};

export default function ProofRollPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main className="flex-grow">
        <PageHero
          title="How to Pass a Proof Roll"
          description="Failing a proof roll? Use this guide to determine the right geogrid and aggregate thickness based on your subgrade condition. Data from the Tensar 2025 Subgrade Pocket Card."
          ctaText="Get a Site Assessment"
          ctaLink="/contact"
          secondaryCtaText="Call (440) 368-1420"
          secondaryCtaLink="tel:4403681420"
        />

        <article className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded border border-gray-200 p-8">
              <div className="prose prose-lg max-w-none">

                <div className="bg-gray-50 border border-gray-200 rounded mb-8 overflow-hidden">
                  <div className="w-full" style={{ height: '500px' }}>
                    <iframe
                      src="/docs/tensar-2025-subgrade-pocket-card.pdf"
                      className="w-full h-full border-0"
                      title="Tensar 2025 Subgrade Pocket Card"
                    />
                  </div>
                  <div className="p-4 flex items-center justify-between bg-white border-t border-gray-200">
                    <div>
                      <h3 className="text-base font-bold text-gray-900">Tensar 2025 Subgrade Pocket Card</h3>
                      <p className="text-gray-500 text-sm">Aggregate thickness charts and cost conversion tables</p>
                    </div>
                    <a href="/docs/tensar-2025-subgrade-pocket-card.pdf" download className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-[#00c97e] hover:bg-[#00b36f] rounded transition-colors whitespace-nowrap">
                      Download PDF
                    </a>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is a Proof Roll?</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  A proof roll test is a field method for evaluating subgrade stability. A fully loaded dump truck is driven across the prepared subgrade while an inspector observes the surface for signs of deformation — rutting, pumping, deflection, or rolling.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  The typical pass/fail threshold is <strong>1 inch of deformation or less</strong>. If the subgrade deflects more than that under the loaded truck, construction cannot proceed until the subgrade is stabilized. Failing a proof roll means delays, change orders, and cost overruns — which is why getting ahead of it with proper testing and design matters.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Visual Subgrade Assessment</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Before running a DCP test, you can estimate your subgrade CBR by looking at the ground. These visual indicators correlate to approximate CBR values:
                </p>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Visual Condition</th>
                        <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Estimated CBR</th>
                        <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Severity</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-200 px-4 py-3 text-gray-700">3&quot; deep footprint</td>
                        <td className="border border-gray-200 px-4 py-3 text-gray-700 font-semibold">0.5% CBR</td>
                        <td className="border border-gray-200 px-4 py-3"><span className="bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded">Very Soft</span></td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-200 px-4 py-3 text-gray-700">1&quot; deep footprint</td>
                        <td className="border border-gray-200 px-4 py-3 text-gray-700 font-semibold">1% CBR</td>
                        <td className="border border-gray-200 px-4 py-3"><span className="bg-orange-100 text-orange-800 text-xs font-semibold px-2 py-1 rounded">Soft</span></td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 px-4 py-3 text-gray-700">1&quot; tire rut from pickup truck</td>
                        <td className="border border-gray-200 px-4 py-3 text-gray-700 font-semibold">2% CBR</td>
                        <td className="border border-gray-200 px-4 py-3"><span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded">Moderate</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Aggregate Thickness to Pass a Proof Roll</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  The chart below shows the estimated aggregate thickness needed to pass a proof roll with 1&quot; or less deformation, based on subgrade CBR and geogrid product. Well-graded, angular crushed stone with 5%-15% fines is recommended for best results.
                </p>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-gray-900 text-white">
                        <th className="border border-gray-700 px-3 py-3 text-left font-semibold">Subgrade</th>
                        <th className="border border-gray-700 px-3 py-3 text-center font-semibold">CBR</th>
                        <th className="border border-gray-700 px-3 py-3 text-center font-semibold">Over-Excavation (no geogrid)</th>
                        <th className="border border-gray-700 px-3 py-3 text-center font-semibold">BX Geogrid (33kN/m)</th>
                        <th className="border border-gray-700 px-3 py-3 text-center font-semibold">H-Series HX145</th>
                        <th className="border border-gray-700 px-3 py-3 text-center font-semibold">H-Series HX165</th>
                        <th className="border border-gray-700 px-3 py-3 text-center font-semibold bg-[#00c97e] text-white">InterAx NX850</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-200 px-3 py-3 text-gray-700">3&quot; footprint</td>
                        <td className="border border-gray-200 px-3 py-3 text-center font-semibold text-red-700">0.5%</td>
                        <td className="border border-gray-200 px-3 py-3 text-center text-gray-700">48&quot;</td>
                        <td className="border border-gray-200 px-3 py-3 text-center text-gray-700">36&quot;</td>
                        <td className="border border-gray-200 px-3 py-3 text-center text-gray-700">32&quot;</td>
                        <td className="border border-gray-200 px-3 py-3 text-center text-gray-700">28&quot;</td>
                        <td className="border border-gray-200 px-3 py-3 text-center font-bold text-[#00c97e]">24&quot; (20&quot; with 2 layers)</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-200 px-3 py-3 text-gray-700">1&quot; footprint</td>
                        <td className="border border-gray-200 px-3 py-3 text-center font-semibold text-orange-700">1%</td>
                        <td className="border border-gray-200 px-3 py-3 text-center text-gray-700">36&quot;</td>
                        <td className="border border-gray-200 px-3 py-3 text-center text-gray-700">24&quot;</td>
                        <td className="border border-gray-200 px-3 py-3 text-center text-gray-700">20&quot;</td>
                        <td className="border border-gray-200 px-3 py-3 text-center text-gray-700">16&quot;</td>
                        <td className="border border-gray-200 px-3 py-3 text-center font-bold text-[#00c97e]">12&quot;</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 px-3 py-3 text-gray-700">1&quot; tire rut</td>
                        <td className="border border-gray-200 px-3 py-3 text-center font-semibold text-yellow-700">2%</td>
                        <td className="border border-gray-200 px-3 py-3 text-center text-gray-700">24&quot;</td>
                        <td className="border border-gray-200 px-3 py-3 text-center text-gray-700">16&quot;</td>
                        <td className="border border-gray-200 px-3 py-3 text-center text-gray-700">14&quot;</td>
                        <td className="border border-gray-200 px-3 py-3 text-center text-gray-700">10&quot;</td>
                        <td className="border border-gray-200 px-3 py-3 text-center font-bold text-[#00c97e]">4-6&quot;</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-gray-500 text-sm mb-6 italic">
                  Source: Tensar 2025 Subgrade Pocket Card. These conditions are considered typical. Special considerations may be necessary for highly moisture-sensitive soils (silts, organics) or saturated subgrade conditions. Contact us for site-specific recommendations.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Cost Savings Example</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  The aggregate is often the most expensive part of subgrade stabilization. Reducing the required thickness with geogrid directly reduces your project cost.
                </p>
                <div className="bg-gray-50 border border-gray-200 rounded p-6 mb-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Example: 10,000 Square Yard Project at $30/ton Installed</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-200 px-4 py-2 text-left">Aggregate Thickness</th>
                          <th className="border border-gray-200 px-4 py-2 text-right">Cost per SY</th>
                          <th className="border border-gray-200 px-4 py-2 text-right">Project Cost</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-200 px-4 py-2">12&quot; (no geogrid)</td>
                          <td className="border border-gray-200 px-4 py-2 text-right">$18.00</td>
                          <td className="border border-gray-200 px-4 py-2 text-right font-semibold">$180,000</td>
                        </tr>
                        <tr className="bg-green-50">
                          <td className="border border-gray-200 px-4 py-2">6&quot; (with InterAx geogrid)</td>
                          <td className="border border-gray-200 px-4 py-2 text-right">$9.00</td>
                          <td className="border border-gray-200 px-4 py-2 text-right font-bold text-[#00c97e]">$90,000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-gray-600 text-sm mt-3">
                    <strong>Savings: $90,000</strong> less the cost of geogrid. Assumed aggregate unit weight: 133 pcf.
                  </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">When to Consider Geogrid</h2>
                <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                  <li>Challenging subgrade conditions — pumping, rutting, or rolling</li>
                  <li>Proposed aggregate thicker than 12&quot; or asphalt thicker than 3&quot;</li>
                  <li>Using low-quality or recycled aggregate</li>
                  <li>As an alternative to chemical stabilization</li>
                  <li>Over-excavation and replacement scenarios</li>
                  <li>Shallow underground utilities that prevent deep excavation</li>
                  <li>Failing a proof roll</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Aggregate Recommendations</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  For best results with geogrid, use well-graded, angular crushed stone with 5%-15% fines. The angular particles interlock with the geogrid apertures more effectively than rounded aggregate, creating a stronger mechanically stabilized layer. Avoid using clean stone (no fines) or excessive fines (over 15%) as both reduce the confinement effect.
                </p>

                <div className="bg-gray-50 border border-gray-200 rounded p-6 mt-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Need Help With a Proof Roll?</h3>
                  <p className="text-gray-700 mb-4">
                    We perform on-site DCP testing and run your results through Tensar Plus to determine the right geogrid and aggregate thickness for your specific site. No guesswork — engineered solutions.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-[#00c97e] hover:bg-[#00b36f] rounded transition-colors">
                      Get a Site Assessment
                    </Link>
                    <Link href="tel:4403681420" className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-gray-700 border-2 border-gray-300 hover:border-gray-400 rounded transition-colors">
                      (440) 368-1420
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* FAQ Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Proof Roll FAQ</h2>
            <div className="space-y-6">
              {faqData.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Resources</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/blog/dcp-testing-tensar-plus" className="block p-6 bg-white rounded border border-gray-200 hover:border-[#00c97e] transition-colors text-left">
                <h3 className="font-bold text-gray-900 mb-2">DCP Testing & Tensar Plus</h3>
                <p className="text-gray-600 text-sm">How field soil testing feeds into geogrid design.</p>
              </Link>
              <Link href="/geogrid/nx850" className="block p-6 bg-white rounded border border-gray-200 hover:border-[#00c97e] transition-colors text-left">
                <h3 className="font-bold text-gray-900 mb-2">Tensar InterAx NX850</h3>
                <p className="text-gray-600 text-sm">Product specs for the highest-performing geogrid.</p>
              </Link>
              <Link href="/blog/geogrid-vs-cement-stabilization" className="block p-6 bg-white rounded border border-gray-200 hover:border-[#00c97e] transition-colors text-left">
                <h3 className="font-bold text-gray-900 mb-2">Geogrid vs Cement Stabilization</h3>
                <p className="text-gray-600 text-sm">Compare stabilization methods for your project.</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
