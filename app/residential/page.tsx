import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import ResidentialQuoteForm from '@/components/ResidentialQuoteForm';
import DrivewayCostCalculator from '@/components/DrivewayCostCalculator';
import Reveal from '@/components/Reveal';
import Link from 'next/link';
import Script from 'next/script';
import type { Metadata } from 'next';

const PHONE_DISPLAY = '(440) 384-1897';
const PHONE_TEL = 'tel:4403841897';

export const metadata: Metadata = {
  title: 'Geogrid for Driveways, Parking Pads & Patios | Residential | Northern Ohio',
  description:
    'Bridge soft clay under residential driveways, gravel RV/boat/trailer parking pads, patios, and shed pads with Tensar NX850 geogrid. Partial rolls stocked in Glenwillow, OH. Same-day quotes for Northern Ohio contractors and homeowners.',
  keywords: [
    'geogrid for driveway',
    'geogrid for gravel parking pad',
    'RV parking pad geogrid',
    'boat trailer parking pad Ohio',
    'gravel parking pad Cleveland',
    'soft clay driveway fix',
    'residential geogrid Ohio',
    'geogrid for patio base',
    'shed pad geogrid',
    'NX850 partial roll',
    'Tensar geogrid Northern Ohio',
    'stabilize gravel driveway',
    'mud driveway solution',
    'driveway sinking fix Cleveland',
    'geogrid Glenwillow Ohio',
    'contractor lay-down yard geogrid',
  ],
  alternates: {
    canonical: 'https://www.buygeogrid.com/residential',
  },
  openGraph: {
    title: 'Geogrid for Driveways, Parking Pads & Patios | Northern Ohio',
    description:
      'Bridge soft clay under driveways, RV/boat parking pads, patios, and shed pads with Tensar NX850. Partial rolls, same-day quotes, Glenwillow OH.',
    type: 'website',
    url: 'https://www.buygeogrid.com/residential',
    images: ['/images/products/solution-interax.png'],
  },
};

const faqs = [
  {
    q: 'Can geogrid fix a soft or muddy driveway?',
    a: 'Yes. A biaxial geogrid like Tensar NX850 is laid directly over the soft subgrade, then covered with your aggregate base. The grid confines the stone and distributes vehicle loads across a wider area, so the base does not punch down into the soft soil. This bridges soft clay and prevents the ruts, sinking, and stone migration that show up after the first wet season.',
  },
  {
    q: 'How much geogrid do I need for a residential driveway?',
    a: 'NX850 rolls are 12.5 ft wide, so a 20-ft-wide two-car driveway takes 2 strips run along its length. A 40-ft-long two-car driveway = 80 linear feet of grid, which fits a half roll (12.5 ft × 98.5 ft). A 40-ft single-car driveway at 10 ft wide is one strip = 40 linear feet, which fits a quarter roll (12.5 ft × 49.25 ft). Use the calculator on this page for exact roll recommendations.',
  },
  {
    q: 'Why not just dig out the soft spot and fill with more stone?',
    a: 'You can, but on soft clay it is often a losing battle. Undercutting means an extra foot of excavation, truck cycles to haul out mud, more stone to bring the base back to grade, and it still moves later. Rolling geogrid over the soft subgrade and building the base on top bridges the weak zone in a fraction of the time, with less stone and no mud haul-off.',
  },
  {
    q: 'What is Tensar NX850 geogrid?',
    a: 'NX850 is a multi-axial (InterAx) geogrid manufactured by Tensar. It is a punched-and-drawn polymer sheet with hexagonal, triangular, and trapezoidal apertures that interlock aggregate on both sides. It is spec’d on ODOT roadway, airport, and heavy commercial jobs, and the same product works under residential driveways and patios.',
  },
  {
    q: 'Do you sell partial rolls of geogrid?',
    a: 'Yes. We stock quarter rolls (12.5 ft × 49.25 ft, ~615 sq ft) and half rolls (12.5 ft × 98.5 ft, ~1,230 sq ft) of Tensar NX850 for residential jobs. Full rolls rarely make sense on a driveway or patio, so we cut and sell smaller pieces from our Glenwillow, OH (44139) warehouse.',
  },
  {
    q: 'How much does geogrid cost for a driveway?',
    a: 'Pricing depends on square footage, project location, and pickup vs. delivery. Text or call (440) 384-1897 with your square footage and zip and you’ll get a same-day quote. Contractor pricing is available for repeat jobs.',
  },
  {
    q: 'Does geogrid reduce how much stone I need?',
    a: 'Yes, per the Tensar 2025 Subgrade Pocket Card. On soft subgrade (CBR 1%), a proof-roll-passing base without reinforcement takes 36 inches of over-excavation and stone backfill; with NX850 it takes 12 inches. On mild subgrade (CBR 2%), unstabilized needs 24 inches — NX850 needs 4–6. That translates to fewer truckloads of stone, less excavation, and less spoil to haul out.',
  },
  {
    q: 'Do you deliver to homeowners and residential contractors in Northern Ohio?',
    a: 'Yes. We serve Cleveland, Akron, Toledo, Youngstown, Canton, and the surrounding Northern Ohio counties from our Glenwillow, OH warehouse (zip 44139). Small partial rolls are easy to pick up in person if you’re close to Solon/Glenwillow.',
  },
  {
    q: 'Will geogrid work under pavers or a patio base?',
    a: 'Yes. Under a paver patio, the grid keeps your compacted aggregate base from spreading and settling as freeze-thaw cycles hit. It is one of the most effective ways to prevent the low spots and shifted pavers that show up after a couple Ohio winters on soft or wet ground.',
  },
  {
    q: 'Can I use geogrid under a gravel RV or boat/trailer parking pad?',
    a: 'Yes — parking pads are one of the best residential applications. RV and boat/trailer pads see heavy, long-duration static loads, which push aggregate down into soft subgrade faster than a moving vehicle would. NX850 confines the stone and bridges the soft ground so the pad stays level and does not rut or sink under long-parked loads. A typical 12 ft × 40 ft RV pad is one 12.5-ft-wide strip of grid and fits in a quarter roll.',
  },
  {
    q: 'How thick does the stone need to be over geogrid for a gravel parking pad?',
    a: 'Per the Tensar 2025 Subgrade Pocket Card, NX850 needs 4–6 inches of stone on mild subgrade (CBR 2%), 12 inches on moderate soft clay (CBR 1%), and 24 inches on severe wet clay (CBR 0.5%). These same depths apply to gravel parking pads. Without grid, the same subgrades need 24, 36, and 48 inches respectively. Use the calculator on this page for exact volumes.',
  },
  {
    q: 'What size roll do I need for a contractor lay-down yard or equipment storage pad?',
    a: 'A 25 ft × 50 ft lay-down yard is 2 strips of 12.5-ft-wide roll running 50 ft each = 100 linear feet, which fits in a half roll plus a small piece from a quarter, or a full roll (12.5 ft × 197 ft) with plenty left over. Larger yards typically buy full rolls. Text your dimensions to (440) 384-1897 for the exact recommendation.',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: f.a,
    },
  })),
};

const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Tensar InterAx NX850 Geogrid — Partial Rolls for Residential',
  description:
    'Tensar NX850 multi-axial geogrid, stocked in quarter roll (12.5 ft × 49.25 ft, ~615 sq ft) and half roll (12.5 ft × 98.5 ft, ~1,230 sq ft) sizes for residential driveway, patio, and walkway stabilization.',
  brand: { '@type': 'Brand', name: 'Tensar' },
  category: 'Geosynthetics / Geogrid',
  image: 'https://www.buygeogrid.com/images/products/solution-interax.png',
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    seller: {
      '@type': 'LocalBusiness',
      name: 'Asphalt Fabrics & Supply',
      telephone: '+1-440-384-1897',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Glenwillow',
        addressRegion: 'OH',
        postalCode: '44139',
        addressCountry: 'US',
      },
    },
  },
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Residential Geogrid Supply & Same-Day Quoting',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Asphalt Fabrics & Supply',
    telephone: '+1-440-384-1897',
    url: 'https://www.buygeogrid.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Glenwillow',
      addressRegion: 'OH',
      postalCode: '44139',
      addressCountry: 'US',
    },
  },
  areaServed: [
    { '@type': 'City', name: 'Cleveland' },
    { '@type': 'City', name: 'Akron' },
    { '@type': 'City', name: 'Toledo' },
    { '@type': 'City', name: 'Youngstown' },
    { '@type': 'City', name: 'Canton' },
    { '@type': 'State', name: 'Ohio' },
  ],
  audience: {
    '@type': 'Audience',
    audienceType: 'Residential contractors and homeowners',
  },
};

export default function ResidentialPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <PageHero
          title="Bridge Soft Subgrade Under Driveways, Parking Pads & Patios"
          description="Hit soft clay on a driveway, gravel parking pad, or patio job? Stop undercutting. Roll Tensar NX850 over the soft spot, place your stone, compact. Partial rolls stocked in Glenwillow, OH."
          ctaText="Get a same-day quote"
          ctaLink="#quote"
          secondaryCtaText={`Call/Text ${PHONE_DISPLAY}`}
          secondaryCtaLink={PHONE_TEL}
          badge="Residential"
        />

        {/* Direct-answer block — for AEO / featured snippets */}
        <section className="py-12 px-6 bg-gray-50 border-b border-gray-200">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <p className="text-lg text-gray-800 leading-relaxed">
                <strong>Short answer:</strong> Tensar NX850 geogrid rolled over soft clay or mud subgrade
                lets you build a stable gravel driveway, parking pad, or patio base without undercutting.
                The grid bridges the weak zone and confines your aggregate, so the base doesn&apos;t punch
                down, rut, or migrate. We stock partial rolls — quarter and half — out of Glenwillow, OH
                (44139) for residential contractors, small commercial jobs, and homeowners across Northern
                Ohio.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Problem / solution — mirrors FB ad voice */}
        <section className="py-20 md:py-24 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <div className="text-[#00c97e] text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3">The problem</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">The soft-clay driveway problem</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                You dig for a driveway or patio, and instead of firm ground you hit soup — soft clay,
                wet silt, an old fill zone that never got compacted. The usual playbook: dig deeper, haul
                the mud out, buy more stone to bring the hole back to grade. That&apos;s a $1,000+ surprise,
                a half day of machine time, and no guarantee the base won&apos;t move once the freeze-thaw
                starts.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                A roll of geogrid on the trailer changes that. When you find soft ground under a driveway
                or patio, you roll the grid across the soft area, place your stone on top, and compact
                like normal. The NX850&apos;s multi-axial apertures interlock the aggregate on both faces,
                so the base behaves like a stiff platform instead of loose stone sitting on jelly. A
                15-minute install replaces a half-day fix.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Partial rolls */}
        <section className="py-20 md:py-24 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <Reveal className="mb-6">
              <div className="text-[#00c97e] text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3">Roll sizes</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">Partial rolls — sized for residential jobs</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Full contractor rolls of NX850 are 12.5 ft × 197 ft (~2,460 sq ft). That&apos;s too much
                for a driveway or patio. We cut it down so residential jobs get exactly what they need,
                nothing more.
              </p>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-6">
              <Reveal delay={120}>
                <div className="bg-white border border-gray-200 rounded p-6 h-full">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Half roll</h3>
                  <p className="text-gray-700 mb-1">12.5 ft × 98.5 ft</p>
                  <p className="text-gray-700 mb-2">~1,230 sq ft</p>
                  <p className="text-gray-600 text-sm">
                    Covers a two-car driveway up to about 20 ft × 40 ft (two 12.5-ft strips run the
                    length). Room left for a patio or walkway.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={240}>
                <div className="bg-white border border-gray-200 rounded p-6 h-full">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Quarter roll</h3>
                  <p className="text-gray-700 mb-1">12.5 ft × 49.25 ft</p>
                  <p className="text-gray-700 mb-2">~615 sq ft</p>
                  <p className="text-gray-600 text-sm">
                    Covers a single-car driveway up to ~12 ft × 49 ft (one strip), a patio pad, or a
                    large shed base. Keep one on the trailer for the day you open a hole and find soup.
                  </p>
                </div>
              </Reveal>
            </div>
            <Reveal delay={360}>
              <p className="text-sm text-gray-600 mt-6">
                Same InterAx NX850 grid spec&apos;d on ODOT roadway and airport projects — no residential
                downgrade. Pricing by square footage and pickup vs. delivery. Text your sq ft to{' '}
                <a href={PHONE_TEL} className="text-[#00c97e] font-semibold hover:underline">
                  {PHONE_DISPLAY}
                </a>{' '}
                for a same-day quote.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Where it works */}
        <section className="py-20 md:py-24 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <div className="text-[#00c97e] text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3">Applications</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">Where residential geogrid pays off</h2>
              <ul className="space-y-3 text-lg text-gray-700 leading-relaxed">
                <li>
                  <strong>Gravel and stone driveways</strong> — stops stone migration into soft subgrade,
                  prevents ruts and washouts.
                </li>
                <li>
                  <strong>New asphalt and concrete driveways</strong> — stabilizes the base course so the
                  surface doesn&apos;t crack from below.
                </li>
                <li>
                  <strong>Paver patios</strong> — keeps the compacted base from settling and shifting
                  through freeze-thaw.
                </li>
                <li>
                  <strong>Walkways and garden paths</strong> — bridges soft or wet ground with a thin base
                  instead of a full excavation.
                </li>
                <li>
                  <strong>Shed, pole barn, and outbuilding pads</strong> — locks the base together under
                  point loads.
                </li>
                <li>
                  <strong>Parking pads for RVs, boats, trailers</strong> — a stable platform on Northern
                  Ohio clay without over-building.
                </li>
              </ul>
            </Reveal>
          </div>
        </section>

        {/* Gravel parking pads */}
        <section className="py-20 md:py-24 px-6 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <div className="text-[#00c97e] text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3">Parking pads</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight tracking-tight">
                Gravel parking pads — RVs, boats, trailers, and yards
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                A gravel parking pad on soft ground fails the same way a driveway does. Stone punches
                down into the clay, ruts form under the tires, and every wet spring the pad needs
                another load of #57 to bring it back to grade. On an RV pad or a boat/trailer spot the
                loads are heavier and more static than a driveway — the aggregate keeps working its way
                into the mud.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Rolling NX850 under the base fixes it. The grid confines the aggregate so it stays put
                under long-parked loads, and it bridges the soft spots that would otherwise rut. Same
                product, same install, half the stone.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Typical parking pad sizes</h3>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>
                  <strong>RV parking pad:</strong> 12 ft × 40 ft — one 12.5-ft strip. Fits a quarter roll.
                </li>
                <li>
                  <strong>Boat / trailer pad:</strong> 10 ft × 25 ft — one strip. Well inside a quarter roll.
                </li>
                <li>
                  <strong>Two-vehicle guest / employee pad:</strong> 20 ft × 40 ft — two strips ~80 linear ft.
                  Fits a half roll.
                </li>
                <li>
                  <strong>Contractor lay-down / equipment yard:</strong> 25 ft × 50 ft+ — usually 2-3 strips.
                  Half + quarter, or a full roll.
                </li>
                <li>
                  <strong>Small business overflow parking:</strong> Full roll (~2,460 sq ft) or larger.
                </li>
              </ul>
              <p className="text-gray-700">
                Use the{' '}
                <a href="#calculator" className="text-[#00c97e] font-semibold hover:underline">
                  calculator below
                </a>{' '}
                — set project type to &quot;Gravel parking pad&quot; and enter your dimensions to see stone
                savings and the exact roll size you need.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Cost calculator */}
        <section id="calculator" className="py-20 md:py-24 px-6 bg-white scroll-mt-20 border-t border-gray-100">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <div className="text-[#00c97e] text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3">Calculator</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 leading-tight tracking-tight">
                Base cost &amp; quote calculator
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                See what your project costs the traditional way vs. building on Tensar NX850. Covers
                gravel / asphalt / stamped concrete driveways, RV / boat pads, patios, concrete slabs
                (pool decks, stamped patios, walkways), shed pads, above-ground pool bases, and
                hot tub / spa pads. Bigger jobs get a savings number; smaller jobs get a text-for-quote
                button — either way you land on our phone.
              </p>
              <div className="mb-8 rounded border-l-4 border-[#00c97e] bg-[#f0fdf4] p-4">
                <p className="text-sm text-gray-800 leading-relaxed">
                  <strong className="text-gray-900">Referenced by the national standard.</strong>{' '}
                  The Concrete Masonry &amp; Hardscapes Association — the national trade org civil
                  engineers, landscape architects, and code officials cite —{' '}
                  <a
                    href="https://www.cmha.org/resource/pav-tec-022/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00c97e] font-semibold hover:underline"
                  >
                    directly endorses geogrid
                  </a>{' '}
                  for soft, wet, and slow-draining soils. That&apos;s the material we supply. See
                  CMHA PAV-TEC-022 — &quot;Geosynthetics for Segmental Concrete Pavements&quot;.
                </p>
              </div>
            </Reveal>
            <DrivewayCostCalculator />
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 md:py-24 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <Reveal className="mb-8">
              <div className="text-[#00c97e] text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3">FAQ</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight tracking-tight">Common questions</h2>
            </Reveal>
            <div className="space-y-6">
              {faqs.map((f, i) => (
                <Reveal key={f.q} delay={i * 60}>
                  <div className="bg-white border border-gray-200 rounded p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{f.q}</h3>
                    <p className="text-gray-700 leading-relaxed">{f.a}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Quote form */}
        <section id="quote" className="py-20 md:py-24 px-6 bg-white scroll-mt-20">
          <div className="max-w-2xl mx-auto">
            <Reveal className="mb-6">
              <div className="text-[#00c97e] text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3">Get a quote</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 leading-tight tracking-tight">Get a same-day quote</h2>
              <p className="text-lg text-gray-700">
                Text or fill this out with the square footage of your job and you&apos;ll get pricing
                back the same day — usually within a couple hours.
              </p>
            </Reveal>
            <ResidentialQuoteForm />
          </div>
        </section>

        {/* Trust bar */}
        <section className="py-20 md:py-24 px-6 bg-[#1a1a1a] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
              <p className="text-lg leading-relaxed">
                Authorized Tensar distributor. Glenwillow, OH (44139). Serving Cleveland, Akron, Toledo,
                Youngstown, Canton and Northern Ohio.
              </p>
              <p className="mt-3">
                <Link
                  href="/geogrid/nx850"
                  className="text-[#00c97e] hover:underline font-semibold"
                >
                  Full NX850 spec sheet & product detail →
                </Link>
              </p>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />

      <Script
        id="residential-faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Script
        id="residential-product-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <Script
        id="residential-service-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
    </div>
  );
}
