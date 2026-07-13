import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Petrotac vs. Paving Fabric: Which Interlayer Do You Need? | Ohio',
  description: 'Peel-and-stick Petrotac vs. contractor-grade paving fabric — same category, very different install. Peel-and-stick for cracks and joints (DIY-friendly). Paving fabric for full overlays (installed hot with tack). Here\'s how to pick.',
  keywords: ['Petrotac vs paving fabric', 'peel and stick vs paving fabric', 'crack repair interlayer', 'reflective cracking', 'asphalt overlay fabric', 'Ohio paving interlayer', 'Petrotac install'],
  alternates: { canonical: 'https://www.buygeogrid.com/petrotac-vs-paving-fabric' },
  openGraph: {
    title: 'Petrotac vs. Paving Fabric — Which Interlayer?',
    description: 'Peel-and-stick or hot-laid. Same category, different install. Here\'s the pick.',
    type: 'article',
  },
};

const faqData = [
  {
    question: 'What\'s the actual difference between Petrotac and paving fabric?',
    answer: 'Both are asphalt-saturated interlayers that go between two layers of pavement to stop cracks from reflecting through — the general product category is "reflective crack mitigation." Petrotac is a peel-and-stick membrane sold in narrow widths (1ft, 1.5ft, 4ft) that anyone with a torch can install over individual cracks or joints. Contractor-grade paving fabric is a wider (10–15 ft) roll that gets installed hot: a hot asphalt tack coat is sprayed on the pavement, the fabric is laid into the tack, then the overlay is placed on top. Same purpose. Very different install.',
  },
  {
    question: 'When do I use Petrotac?',
    answer: 'Petrotac is the peel-and-stick answer for spot-treating cracks and joints — anywhere you have a specific line of failure you want to bridge before overlaying or seal-coating. Homeowners, small contractors, and property managers use it because a homeowner or single-truck crew can install it. If you\'re not overlaying a whole lot — just repairing the bad spots — Petrotac is what you want.',
  },
  {
    question: 'When do I use paving fabric?',
    answer: 'When you\'re overlaying a full lot, road segment, or parking area — anywhere you want reflective crack protection under the entire overlay, not just at specific cracks. Paving fabric is a contractor-installed product because the install requires a spray-tack truck, hot asphalt, and a fabric layer that has to go down clean before the paver arrives. Our sister company Asphalt Fabrics & Specialties performs this exact install as a service across Northern Ohio.',
  },
  {
    question: 'Can I mix them?',
    answer: 'On the same job, sometimes — you\'d use paving fabric across the majority of the overlay area and Petrotac to spot-treat specific problem joints (like around utility cuts) that need extra reinforcement. But for a homeowner or property manager, pick one: Petrotac for cracks and joints, paving fabric (contractor-installed) for full overlays.',
  },
  {
    question: 'What widths does Petrotac come in?',
    answer: 'Three: 1ft (12"), 1.5ft (18") — note the misleading "petrotac-15ft" URL but the product is 1.5 ft not 15 ft — and 4ft (48"). All rolls are 108 ft long, all peel-and-stick. 1ft handles narrow cracks, 1.5ft is the workhorse, 4ft is for wider joints and utility-cut patches. In stock at our Solon, OH warehouse.',
  },
  {
    question: 'Does BuyGeogrid sell contractor-grade paving fabric?',
    answer: 'BuyGeogrid is the peel-and-stick side (Petrotac). Contractor-grade non-peel-and-stick paving fabric is a service specialty — it needs the hot-tack install to work — which is why our sister company Asphalt Fabrics & Specialties (asphaltfabrics.com) performs it as an installed service, not a distributed product. If you\'re a contractor asking about buying rolls for your own install, call us and we can point you the right direction.',
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

export default function PetrotacVsPavingFabric() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main className="flex-grow">
        <PageHero
          title="Petrotac vs. Paving Fabric"
          description="Same category (asphalt-saturated interlayers), very different install. Peel-and-stick for cracks and joints. Hot-laid paving fabric for full overlays. Here's how to pick — and where each is stocked or installed."
          ctaText="See Petrotac Options"
          ctaLink="/interlayers"
          secondaryCtaText="Call (440) 368-1420"
          secondaryCtaLink="tel:4403681420"
          badge="Ohio Distributor"
        />

        <section className="py-16 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Side-By-Side</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left p-4 border border-gray-300 font-semibold">Feature</th>
                    <th className="text-left p-4 border border-gray-300 font-semibold text-[#00c97e]">Petrotac (Peel-and-Stick)</th>
                    <th className="text-left p-4 border border-gray-300 font-semibold text-blue-700">Contractor-Grade Paving Fabric</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { f: 'Install method', g: 'Peel liner, position, warm, roll down', t: 'Hot asphalt tack coat, lay fabric into tack, overlay on top' },
                    { f: 'Widths available', g: '1 ft, 1.5 ft, 4 ft (108 ft rolls)', t: '10–15 ft rolls' },
                    { f: 'DIY-friendly?', g: 'Yes — homeowners and small crews', t: 'No — requires spray-tack truck' },
                    { f: 'Best use', g: 'Spot-treating cracks, joints, utility cuts', t: 'Full overlays, whole lots, road segments' },
                    { f: 'Where you buy it', g: 'BuyGeogrid stocks it', t: 'Installed by Asphalt Fabrics & Specialties' },
                    { f: 'Equipment needed', g: 'Torch or heat gun + roller', t: 'Distributor spray truck, paver' },
                    { f: 'Scale of job', g: 'Small to medium — targeted areas', t: 'Medium to large — parking lots, roads' },
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
          </div>
        </section>

        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Simple Rule</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded shadow-sm border-l-4 border-[#00c97e]">
                <div className="text-sm font-semibold text-[#00c97e] uppercase tracking-wide mb-2">Buy It Yourself</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Petrotac</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You have specific cracks or joints you want to bridge. You can install it yourself with a torch. You&apos;re working around driveways, sidewalks, small commercial pavement.
                </p>
                <Link href="/interlayers" className="text-[#00c97e] font-semibold hover:underline">
                  Petrotac widths & pricing →
                </Link>
              </div>
              <div className="bg-white p-6 rounded shadow-sm border-l-4 border-blue-500">
                <div className="text-sm font-semibold text-blue-700 uppercase tracking-wide mb-2">Have It Installed</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Paving Fabric</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You&apos;re overlaying a full lot or road segment. You want reflective crack protection across the entire pavement, not just at cracks. Our sister company AF&amp;S installs this.
                </p>
                <a href="https://www.asphaltfabrics.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 font-semibold hover:underline">
                  Asphalt Fabrics & Specialties →
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Both Products Solve the Same Problem</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Reflective cracking — cracks in an existing pavement that show back up in a new overlay within a season or two. Both Petrotac and contractor-grade paving fabric put an asphalt-saturated membrane between the old and new pavement, forcing any movement in the old crack to dissipate laterally instead of propagating up into the new layer.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The choice is about install scale, not effectiveness. Both work when installed properly.
            </p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Stop the Cracks?</h2>
            <p className="text-lg text-gray-300 mb-6">Petrotac in stock. Call for pricing on rolls or to talk through your job.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/interlayers" className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-[#00c97e] hover:bg-[#00b36f] rounded transition-colors duration-200">
                See Petrotac Options
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
