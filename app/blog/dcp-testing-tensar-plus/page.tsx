import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DCP Testing & Tensar Plus: How They Work Together | BuyGeogrid',
  description: 'Learn how Dynamic Cone Penetrometer (DCP) testing is used with Tensar Plus geogrid design software to engineer the right geogrid solution for your subgrade. ASTM D6951 explained.',
  keywords: ['DCP testing', 'Dynamic Cone Penetrometer', 'Tensar Plus', 'subgrade testing', 'CBR value', 'geogrid design', 'ASTM D6951', 'soil strength testing', 'mechanically stabilized layer', 'Ohio geogrid'],
  alternates: {
    canonical: 'https://www.buygeogrid.com/blog/dcp-testing-tensar-plus',
  },
  openGraph: {
    title: 'DCP Testing & Tensar Plus: How They Work Together',
    description: 'How Dynamic Cone Penetrometer testing feeds into Tensar Plus geogrid design for engineered subgrade solutions.',
    type: 'article',
    publishedTime: '2026-04-16',
    authors: ['Asphalt Fabrics & Supply'],
    images: ['/images/logos/afsupplylogo_transparent.png'],
  },
};

const faqData = [
  {
    question: "What does a DCP test measure?",
    answer: "A DCP test measures the penetration resistance of soil by recording how many millimeters a cone tip advances per hammer blow (mm/blow). This penetration index is then correlated to the California Bearing Ratio (CBR), which is a standard measure of subgrade soil strength used in pavement and geogrid design."
  },
  {
    question: "What is the ASTM standard for DCP testing?",
    answer: "DCP testing follows ASTM D6951/D6951M, titled 'Standard Test Method for Use of the Dynamic Cone Penetrometer in Shallow Pavement Applications.' This standard defines the equipment specifications, test procedure, and provides correlation equations to convert the DCP penetration index to CBR values for most soil types."
  },
  {
    question: "What is Tensar Plus?",
    answer: "Tensar Plus (Tensar+) is Tensar's design software used by engineers and distributors to determine the correct geogrid product and aggregate thickness for a given project. It takes subgrade strength data — such as CBR values from DCP testing — and calculates the optimal geogrid solution to create a mechanically stabilized layer (MSL) that meets the project's load and performance requirements."
  },
  {
    question: "Why use DCP testing instead of lab CBR tests?",
    answer: "DCP testing is performed on-site in minutes with a portable instrument, while lab CBR testing requires collecting soil samples, transporting them to a laboratory, and waiting for results. DCP testing also measures soil strength at multiple depths in a single test, giving a more complete picture of how subgrade conditions vary across a site. The ASTM D6951 standard provides correlation equations to convert DCP results to CBR values."
  },
  {
    question: "Can BuyGeogrid perform DCP testing on my site?",
    answer: "Yes. Asphalt Fabrics & Supply offers on-site DCP testing as part of our geogrid design support. We test your subgrade, run the results through Tensar Plus, and provide an engineered recommendation for the right geogrid product and aggregate depth. Call (440) 368-1420 to schedule a site assessment."
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqData.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "DCP Testing & Tensar Plus: How They Work Together",
  "description": "How Dynamic Cone Penetrometer testing feeds into Tensar Plus geogrid design for engineered subgrade solutions.",
  "author": {
    "@type": "Organization",
    "name": "Asphalt Fabrics & Supply"
  },
  "publisher": {
    "@type": "Organization",
    "name": "BuyGeogrid.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.buygeogrid.com/images/logos/afsupplylogo_transparent.png"
    }
  },
  "datePublished": "2026-04-16",
  "mainEntityOfPage": "https://www.buygeogrid.com/blog/dcp-testing-tensar-plus"
};

export default function DCPTestingTensarPlus() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main className="flex-grow">
        <PageHero
          title="DCP Testing & Tensar Plus: How They Work Together"
          description="Understanding how field soil testing feeds directly into geogrid design software to engineer the right solution for your subgrade."
          ctaText="Schedule a Site Assessment"
          ctaLink="/contact"
          secondaryCtaText="Call (440) 368-1420"
          secondaryCtaLink="tel:4403681420"
        />

        <article className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded border border-gray-200 p-8">
              <div className="prose prose-lg max-w-none">

                <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is DCP Testing?</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  The Dynamic Cone Penetrometer (DCP) is a portable field instrument used to measure the in-situ strength of subgrade soils. It consists of a steel rod with a hardened conical tip, and a standard-weight hammer that is dropped from a fixed height against an anvil to drive the cone into the ground.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  After each hammer blow, the operator records how far the cone penetrates into the soil. This measurement — expressed as millimeters per blow (mm/blow) — is called the DCP Penetration Index (DPI). A soil that requires many blows per millimeter of penetration is strong. A soil where the cone advances easily is weak.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  DCP testing follows <strong>ASTM D6951/D6951M</strong> — &ldquo;Standard Test Method for Use of the Dynamic Cone Penetrometer in Shallow Pavement Applications.&rdquo; This standard defines the equipment, procedure, and provides correlation equations to convert the penetration index to California Bearing Ratio (CBR) values, which are the standard measure of soil strength used in pavement and geogrid design.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">How DCP Results Relate to CBR</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  The California Bearing Ratio (CBR) is a widely used measure of subgrade strength. A CBR of 3 or below indicates very weak soil that will likely require stabilization. A CBR of 10 or above generally indicates adequate bearing capacity for most pavement applications.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  ASTM D6951 provides correlation equations to convert DCP penetration index values directly to CBR. This allows engineers to assess subgrade strength on-site in minutes rather than collecting samples and waiting for laboratory CBR test results. The DCP also measures strength at multiple depths in a single test, showing how soil conditions vary through the subgrade profile — information that a single-depth lab test cannot provide.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is Tensar Plus?</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Tensar Plus (Tensar+) is Tensar&apos;s design software for engineering mechanically stabilized layers (MSLs) using geogrid. It takes project-specific inputs — including subgrade CBR values, traffic loads, and design life — and calculates the optimal geogrid product and aggregate thickness required to meet performance criteria.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Tensar Plus incorporates data from Tensar&apos;s geogrid product line, including the InterAx series with its multi-directional triangular aperture geometry. The software accounts for the confinement effect that geogrids provide to aggregate, which creates a composite mechanically stabilized layer with greater bearing capacity than aggregate alone.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">How They Work Together</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  The workflow is straightforward:
                </p>
                <ol className="list-decimal pl-6 mb-6 space-y-3 text-gray-700">
                  <li><strong>Field testing:</strong> DCP tests are performed at representative locations across the project site. The penetration index is recorded at each depth interval.</li>
                  <li><strong>CBR conversion:</strong> The DCP penetration index values are converted to CBR using the ASTM D6951 correlation equations. This produces a soil strength profile for the site.</li>
                  <li><strong>Design input:</strong> The CBR values are entered into Tensar Plus along with the project&apos;s traffic requirements (axle loads, number of passes) and design life.</li>
                  <li><strong>Geogrid selection:</strong> Tensar Plus calculates the required geogrid product and aggregate thickness to create a mechanically stabilized layer that meets the design criteria.</li>
                  <li><strong>Comparison:</strong> The software can compare the geogrid-stabilized section against an unstabilized section, showing the reduction in aggregate thickness and cost savings.</li>
                </ol>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is a Mechanically Stabilized Layer?</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  When geogrid is placed within an aggregate layer, the aggregate particles interlock with the geogrid&apos;s apertures. Provided the geogrid ribs are stiff enough and the junctions strong enough, this confines the aggregate and prevents lateral movement under load. The result is a geogrid-aggregate composite — called a mechanically stabilized layer (MSL) — that distributes loads more effectively than aggregate alone.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  The MSL increases bearing capacity over weak subgrade soils, controls differential settlement, and can significantly reduce the amount of aggregate required for a given application. This is the engineering principle that Tensar Plus quantifies using the DCP-derived CBR data.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Your Project</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Without field testing, geogrid design is based on assumptions about soil strength. Those assumptions can lead to over-engineering (wasting money on unnecessary aggregate) or under-engineering (premature failure). DCP testing removes the guesswork by providing actual subgrade data that feeds directly into the design software.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  As an authorized Tensar distributor, Asphalt Fabrics &amp; Supply performs on-site DCP testing and runs the results through Tensar Plus to provide engineered geogrid recommendations. This means you get a solution sized to your actual site conditions — not a generic specification.
                </p>

                <div className="bg-gray-50 border border-gray-200 rounded p-6 mt-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Need DCP Testing for Your Project?</h3>
                  <p className="text-gray-700 mb-4">
                    We offer on-site DCP testing and Tensar Plus design support throughout Ohio. Contact us to schedule a site assessment.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-[#00c97e] hover:bg-[#00b36f] rounded transition-colors">
                      Request a Site Assessment
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">DCP Testing & Tensar Plus FAQ</h2>
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

        {/* Related Content */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Resources</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/tensar-geogrid-complete-guide" className="block p-6 bg-white rounded border border-gray-200 hover:border-[#00c97e] transition-colors text-left">
                <h3 className="font-bold text-gray-900 mb-2">Tensar Geogrid: The Complete Guide</h3>
                <p className="text-gray-600 text-sm">Everything you need to know about Tensar geogrid products and applications.</p>
              </Link>
              <Link href="/blog/geogrid-vs-cement-stabilization" className="block p-6 bg-white rounded border border-gray-200 hover:border-[#00c97e] transition-colors text-left">
                <h3 className="font-bold text-gray-900 mb-2">Geogrid vs Cement Stabilization</h3>
                <p className="text-gray-600 text-sm">Compare two popular soil stabilization methods for your project.</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
