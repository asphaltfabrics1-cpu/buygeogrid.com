import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Soft Ground Solutions Akron Ohio | Geogrid + Fabric | BuyGeogrid',
  description: 'Working over soft ground (or soft earth) in Akron, Summit County, or the Portage Lakes area? Geogrid stabilizes weak subgrade for driveways, farm lanes, and construction access. Northern Ohio distributor. Free on-site DCP testing.',
  keywords: ['soft ground Akron', 'soil stabilization Akron Ohio', 'Summit County geogrid', 'Portage Lakes driveway', 'weak subgrade Akron', 'Akron gravel driveway', 'Cuyahoga Falls', 'Stow soil', 'soft earth', 'soft earth solutions'],
  alternates: { canonical: 'https://www.buygeogrid.com/soft-ground-akron' },
  openGraph: {
    title: 'Soft Ground Solutions — Akron, Ohio',
    description: 'Summit County soft ground fixes for driveways, farm lanes, and construction access. Local pickup.',
    type: 'article',
  },
};

const faqData = [
  {
    question: 'Why is soft ground so common in the Akron area?',
    answer: 'Summit County and the surrounding Portage Lakes region sit on a landscape shaped by post-glacial lake beds, wetlands, and reworked till. Many parts of Akron proper — especially neighborhoods built over former marsh or old strip-mine reclaim — have subgrade CBR values in the low single digits year-round. Soft ground (also called soft earth) here isn\'t rare; it\'s the default.',
  },
  {
    question: 'What kinds of jobs do you typically supply in Akron?',
    answer: 'Residential driveways in Fairlawn, Bath, and the West Hill neighborhoods; farm and pole-barn access lanes across Summit and Portage counties; small commercial parking lots along Market Street and Arlington; and DOT sub-contractor work on state and county highway projects. The material and design approach is the same — subgrade CBR determines the exact spec.',
  },
  {
    question: 'How fast can I get material from your Solon warehouse to Akron?',
    answer: 'Same-day pickup at the warehouse in Solon (about 35 minutes north). Next-day delivery to most Akron addresses. If you\'re in a rush and can send a pickup truck, we\'ll have your rolls staged and ready.',
  },
  {
    question: 'Do you handle proof-roll failures on Akron commercial jobs?',
    answer: 'Yes. When an inspector fails your subgrade on a Summit County commercial site, we can be on-site within 24 hours with a DCP to take readings and coordinate with your engineer on a Tensar Plus stabilization design. Faster than digging out and importing structural fill, and typically less than half the cost.',
  },
  {
    question: 'Does the two-layer system (geotextile + geogrid) always apply?',
    answer: 'For truly soft ground (CBR under 3), yes — the woven geotextile below is what keeps the soft soil from squeezing up into your aggregate. For firmer subgrade (CBR 3–5), one layer of geogrid is often enough. The DCP tells us which case you\'re in.',
  },
  {
    question: 'Are there local contractors in the Akron area you work with?',
    answer: 'We have relationships with residential and small-commercial contractors across Summit and Portage counties who install our material regularly. Ask us and we\'ll suggest a few. We spec the material at no charge whether you install yourself or hire out.',
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

export default function SoftGroundAkron() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main className="flex-grow">
        <PageHero
          title="Soft Ground Solutions — Akron, Ohio"
          description="Summit County soft-ground problems are common here — the post-glacial geology practically guarantees it. Geogrid stabilizes weak subgrade for driveways, farm lanes, and construction access. Local delivery from our Solon warehouse."
          ctaText="Get a Free Site Visit"
          ctaLink="/contact"
          secondaryCtaText="Call (440) 368-1420"
          secondaryCtaLink="tel:4403681420"
          badge="Summit, Portage, Medina Counties"
        />

        <section className="py-20 md:py-24 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <div className="text-[#00c97e] text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3">The problem</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">The Akron-Area Ground</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Summit County and its neighbors sit on a landscape reshaped repeatedly by glacial advance and retreat. The Portage Lakes, the Cuyahoga River valley, and pockets across Akron proper are underlain by lake-bed clays and reworked glacial till that drain slowly and stay soft.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                For contractors and property owners, this means: don&apos;t assume the subgrade will support what you&apos;re building. Test it. Then build a mechanically stabilized aggregate layer that spreads the load — instead of hoping the soil holds up.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="py-20 md:py-24 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <Reveal className="mb-8">
              <div className="text-[#00c97e] text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3">Coverage</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight tracking-tight">Where We Serve</h2>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { area: 'Akron Proper', places: 'Downtown, Highland Square, West Hill, Kenmore, Ellet' },
                { area: 'North Akron & Suburbs', places: 'Cuyahoga Falls, Stow, Munroe Falls, Tallmadge, Silver Lake' },
                { area: 'West Akron', places: 'Fairlawn, Bath, Copley, Norton' },
                { area: 'South Akron', places: 'New Franklin, Coventry, Green' },
                { area: 'Portage County', places: 'Kent, Ravenna, Aurora, Streetsboro, Hudson' },
                { area: 'Medina County', places: 'Medina, Brunswick, Wadsworth, Hinckley' },
              ].map((area, i) => (
                <Reveal key={area.area} delay={120 + i * 120}>
                  <div className="bg-white p-4 rounded shadow-sm h-full">
                    <div className="font-semibold text-[#00c97e] mb-2">{area.area}</div>
                    <p className="text-sm text-gray-700">{area.places}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <Reveal className="mb-8">
              <div className="text-[#00c97e] text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3">Applications</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight tracking-tight">Common Akron Applications</h2>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { h: 'Long Residential Driveways', b: 'Rural and semi-rural properties in Bath, Copley, and Portage County typically have 200+ ft driveways where soft-spot rutting is inevitable without stabilization.' },
                { h: 'Pole Barn & Farm Lanes', b: 'Heavy vehicle access to barns, coops, and equipment yards. Geogrid + geotextile handles year-round loading including full grain trucks.' },
                { h: 'Construction Site Access', b: 'Temporary and permanent site access roads on Summit County commercial builds — proof-roll failures are common and geogrid is the fastest fix.' },
                { h: 'Small Commercial Parking', b: 'Storefronts along Market Street, Arlington, and Wooster Ave. Existing subgrade often needs stabilization before new pavement.' },
              ].map((app, i) => (
                <Reveal key={i} delay={120 + i * 120}>
                  <div className="bg-gray-50 p-6 rounded border-l-4 border-[#00c97e] h-full">
                    <h3 className="font-semibold text-gray-900 mb-2">{app.h}</h3>
                    <p className="text-gray-700 text-sm">{app.b}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <Reveal className="mb-8">
              <div className="text-[#00c97e] text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3">FAQ</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight tracking-tight">Akron FAQ</h2>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight tracking-tight">Stabilize It Before You Build</h2>
              <p className="text-lg text-gray-300 mb-8">Free on-site DCP testing across Summit, Portage, and Medina counties. Same-day pickup from Solon warehouse.</p>
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
