import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import Link from 'next/link';
import PatchPackQuoteForm from '@/components/PatchPackQuoteForm';
import PatchPackStickyMobileBar from '@/components/PatchPackStickyMobileBar';
import PatchPackAnalytics from '@/components/PatchPackAnalytics';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Patch Packs Pothole Repair | Commercial Cold Asphalt Patch Ohio',
  description:
    'Patch Packs provide all-weather pothole repair without heating or specialized equipment. Local pickup and Northern Ohio delivery for contractors, facilities, and municipalities.',
  alternates: {
    canonical: 'https://www.buygeogrid.com/patch-packs',
  },
  openGraph: {
    title: 'Patch Packs Pothole Repair | Commercial Cold Asphalt Patch Ohio',
    description:
      'All-weather pothole repair for contractors, facilities, and municipalities. Stocked in Glenwillow, Ohio. Local pickup and Northern Ohio delivery.',
    images: ['/images/products/patch-packs.png'],
  },
};

const faqData = [
  {
    question: 'Can Patch Packs be installed in freezing weather?',
    answer:
      'Yes. Patch Packs are a cold-applied pavement repair material formulated for use across a wide range of temperatures, including cold and wet conditions where hot mix asphalt is not practical.',
  },
  {
    question: 'Can they be used on asphalt and concrete?',
    answer:
      'Yes. Patch Packs are designed for repairs to both asphalt and concrete pavement surfaces.',
  },
  {
    question: 'Do we need a hot box or specialized equipment?',
    answer:
      'No. Patch Packs do not require heating, mixing, or specialized application equipment. Basic hand tools and a means of compaction — a hand tamper, plate compactor, or vehicle tire where suitable — are all that is needed.',
  },
  {
    question: 'How soon can traffic use the repaired area?',
    answer:
      'The repaired area can return to traffic immediately after the Patch Pack material is placed and properly compacted.',
  },
  {
    question: 'What is the difference between Standard and Flex?',
    answer:
      'Standard Patch Packs are intended for common pothole and pavement repairs on parking lots, driveways, roads, and general commercial pavement. Flex Patch Packs are intended for repair areas exposed to greater movement, thermal expansion, heavy loading, or bridge-deck conditions. If you’re not sure which is right for your project, send photos of the damaged area and we’ll help you select.',
  },
  {
    question: 'Can Asphalt Fabrics & Supply deliver?',
    answer:
      'Yes. Patch Packs are stocked at our Glenwillow, Ohio warehouse and available for local pickup or delivery throughout Northern Ohio, including Cleveland, Akron, Canton, Youngstown, and Toledo.',
  },
  {
    question: 'Do you offer contractor or municipal volume pricing?',
    answer:
      'Yes. We provide volume pricing for contractors, facilities, and municipalities. Contact us with your approximate quantity and location for a quote.',
  },
  {
    question: 'Can you demonstrate the product at our property?',
    answer:
      'Yes. We offer on-site demonstrations by request for qualifying commercial, contractor, facility, and municipal locations in Northern Ohio. Josh will follow up to confirm the location and schedule a time.',
  },
];

// Product schema — no price, no invented ratings/reviews/SKUs/availability.
// Seller address matches the Glenwillow warehouse.
const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Patch Packs Cold-Applied Pavement Repair',
  description:
    'Cold-applied pothole and pavement repair material for asphalt and concrete. Installed with basic hand tools; no heating, mixing, or specialized equipment required. Available in Standard and Flex.',
  brand: {
    '@type': 'Brand',
    name: 'Patch Packs',
  },
  category: 'Pavement Repair Materials',
  offers: {
    '@type': 'Offer',
    areaServed: {
      '@type': 'State',
      name: 'Ohio',
    },
    seller: {
      '@type': 'Organization',
      name: 'Asphalt Fabrics & Supply',
      telephone: '+1-440-368-1420',
      email: 'jstone@asphaltfabrics.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '7620 Bond Street',
        addressLocality: 'Glenwillow',
        addressRegion: 'OH',
        postalCode: '44139',
        addressCountry: 'US',
      },
    },
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

const videoSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: 'Patch Packs: Road Repairs without Tools',
  description:
    'Patch Packs cold-applied pothole repair demonstration — filling a pothole without heating, mixing, or specialized equipment.',
  thumbnailUrl: 'https://i.ytimg.com/vi/k2-_wDHrnk8/maxresdefault.jpg',
  uploadDate: '2024-01-01',
  contentUrl: 'https://www.youtube.com/watch?v=k2-_wDHrnk8',
  embedUrl: 'https://www.youtube.com/embed/k2-_wDHrnk8',
  publisher: {
    '@type': 'Organization',
    name: 'Asphalt Fabrics & Supply',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.buygeogrid.com/images/logos/afsupplylogo_transparent.png',
    },
  },
};

const audienceCards = [
  {
    title: 'Property and facility managers',
    body: 'Keep parking lots, drives, and loading areas safe without waiting on outside crews.',
  },
  {
    title: 'Municipal and township road crews',
    body: 'Respond to potholes and pavement failures across your service area year-round.',
  },
  {
    title: 'Warehouses and distribution centers',
    body: 'Repair potholes, dock approaches, and damaged yard drive lanes without extended shutdowns.',
  },
  {
    title: 'Paving and sealcoating contractors',
    body: 'Handle in-between repairs and callbacks without mobilizing a hot-mix crew.',
  },
  {
    title: 'Schools, churches, and healthcare facilities',
    body: 'Address trip hazards and pavement defects around entrances, drop-offs, and lots quickly.',
  },
  {
    title: 'Commercial and industrial properties',
    body: 'Maintain access drives, staff lots, and service areas with a low-friction repair option.',
  },
];

const traditionalProblems = [
  'Waiting for a contractor to mobilize',
  'Hot mix availability and temperature limitations',
  'Multiple workers and specialized equipment',
  'Closing the area while material cures',
  'Loose, messy material stored in the maintenance shop',
];

const patchPackAdvantages = [
  'All-weather, all-season application',
  'One-person installation',
  'No heating or mixing',
  'No specialized application equipment',
  'Immediate traffic access after compaction',
  'Individually packaged for convenient storage and transport',
];

const localBullets = [
  'Local warehouse pickup',
  'Delivery available throughout Northern Ohio',
  'Contractor, facility, and municipal volume pricing',
  'Product selection and application assistance',
  'On-site demonstrations available by request',
];

const demoBenefits = [
  'Demonstration performed on an actual pavement defect',
  'See the complete installation process',
  'Ask application and product-selection questions',
  'No obligation to purchase',
];

export default function PatchPacks() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }} />
      <Header />
      <main className="flex-grow pb-16 md:pb-0">
        {/* Hero */}
        <section className="relative bg-[#1a1a1a] text-white overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 lg:py-32">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-[#00c97e] text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-5">
                  Stocked in Glenwillow · Serving Northern Ohio
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] tracking-tight">
                  Repair Potholes in Any Weather&mdash;Without a Hot Box
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
                  Patch Packs give maintenance crews and contractors a fast, professional way to repair potholes
                  and pavement failures year-round. One person can install the material without heating, mixing,
                  or specialized equipment, and the repaired area can reopen to traffic immediately after
                  compaction.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:items-center">
                  <Link
                    href="#quote"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-[#00c97e] hover:bg-[#00b36f] rounded transition-colors duration-200 group"
                  >
                    Get Patch Pack Pricing
                    <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                  </Link>
                  <Link
                    href="#schedule-demo"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white border border-white/40 hover:border-[#00c97e] hover:text-[#00c97e] rounded transition-colors duration-200"
                  >
                    Schedule a Free Demo
                  </Link>
                  <a
                    href="tel:4403681420"
                    className="inline-flex items-center gap-2 text-base font-semibold text-white hover:text-[#00c97e] transition-colors sm:pl-2"
                  >
                    <span>Call 440-368-1420</span>
                    <span className="opacity-60">&rarr;</span>
                  </a>
                </div>
                <p className="text-sm text-gray-400 mt-5">
                  Contractor, facility, and municipal volume pricing available.
                </p>
              </div>
              <div className="flex justify-center items-start">
                <div className="bg-white rounded-lg p-8 shadow-lg">
                  <img
                    src="/images/products/patch-packs.png"
                    alt="Patch Packs cold-applied pothole repair"
                    className="w-full max-w-md h-auto max-h-[280px] object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Built for crews */}
        <section className="py-20 md:py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <Reveal className="mb-10 text-center">
              <div className="text-[#00c97e] text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3">
                Who it&rsquo;s for
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight tracking-tight">
                Built for Crews That Can&rsquo;t Wait on a Paving Contractor
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                When a pothole becomes a safety concern, waiting days for a paving crew is not always an option.
                Patch Packs allow your existing maintenance crew to complete targeted repairs with basic hand
                tools&mdash;helping reduce downtime, outside mobilization, and repeat emergency calls.
              </p>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {audienceCards.map((card, i) => (
                <Reveal key={card.title} delay={i * 60}>
                  <div className="h-full bg-gray-50 border border-gray-200 rounded p-6 hover:border-[#00c97e] transition-colors">
                    <div className="w-10 h-10 rounded bg-[#00c97e]/10 text-[#00c97e] flex items-center justify-center mb-4">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{card.title}</h3>
                    <p className="text-gray-700 leading-relaxed text-sm">{card.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Problem vs solution */}
        <section className="py-20 md:py-24 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <Reveal className="mb-10 text-center">
              <div className="text-[#00c97e] text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3">
                Problem vs. solution
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight tracking-tight">
                Keep Repairs Moving Without the Usual Headaches
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-6">
              <Reveal delay={80}>
                <div className="h-full bg-white border border-gray-200 rounded p-6 md:p-8">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500 mb-2">
                    Traditional repair problems
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-5">The usual bottlenecks</h3>
                  <ul className="space-y-3">
                    {traditionalProblems.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-gray-800">
                        <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center">
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={160}>
                <div className="h-full bg-[#1a1a1a] text-white rounded p-6 md:p-8 border border-[#00c97e]/40">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#00c97e] mb-2">
                    Patch Packs advantages
                  </div>
                  <h3 className="text-xl font-bold mb-5">What Patch Packs change</h3>
                  <ul className="space-y-3">
                    {patchPackAdvantages.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-gray-100">
                        <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#00c97e] text-[#1a1a1a] flex items-center justify-center">
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* How it works + video */}
        <section className="py-20 md:py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <Reveal className="mb-10 text-center">
              <div className="text-[#00c97e] text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3">
                How it works
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight tracking-tight">
                Three Steps. Then Reopen the Area.
              </h2>
            </Reveal>

            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div className="space-y-6">
                {[
                  {
                    n: '1',
                    title: 'Clean the Repair',
                    body: 'Remove loose debris and standing material from the damaged area.',
                  },
                  {
                    n: '2',
                    title: 'Place and Compact',
                    body:
                      'Add the Patch Pack material and compact it firmly using an appropriate hand tamper, plate compactor, or vehicle tire where suitable.',
                  },
                  {
                    n: '3',
                    title: 'Reopen to Traffic',
                    body: 'The repaired area can return to traffic immediately after proper compaction.',
                  },
                ].map((step, i) => (
                  <Reveal key={step.n} delay={i * 90}>
                    <div className="flex gap-5">
                      <div className="flex-shrink-0 w-12 h-12 rounded bg-[#00c97e] text-[#1a1a1a] flex items-center justify-center text-xl font-bold">
                        {step.n}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{step.title}</h3>
                        <p className="text-gray-700 leading-relaxed">{step.body}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={120}>
                <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-gray-200 shadow-lg bg-gray-100">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube-nocookie.com/embed/k2-_wDHrnk8"
                    title="Patch Packs: Road Repairs without Tools"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </Reveal>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-10">
              <Link
                href="#quote"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-[#00c97e] hover:bg-[#00b36f] rounded transition-colors duration-200"
              >
                Get Patch Pack Pricing
              </Link>
              <Link
                href="#schedule-demo"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-[#1a1a1a] border border-[#1a1a1a]/20 hover:border-[#00c97e] hover:text-[#00c97e] rounded transition-colors duration-200"
              >
                Schedule a Free Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Demo section */}
        <section id="schedule-demo" className="py-20 md:py-24 px-6 bg-[#1a1a1a] text-white scroll-mt-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <Reveal>
                <div className="text-[#00c97e] text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3">
                  Free on-site demonstration
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-5 leading-tight tracking-tight">
                  See Patch Packs Repair a Real Pothole
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  Have a pothole at your commercial property, facility, municipality, or contractor yard? We&rsquo;ll
                  come out and demonstrate Patch Packs on an actual damaged area so your team can see how simple
                  the installation process is.
                </p>
                <ul className="space-y-3 mb-8">
                  {demoBenefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-gray-100">
                      <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#00c97e] text-[#1a1a1a] flex items-center justify-center">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-gray-400">
                  Available for qualifying commercial, contractor, facility, and municipal locations in Northern Ohio.
                </p>
              </Reveal>
              <Reveal delay={120}>
                <PatchPackQuoteForm mode="demo" />
              </Reveal>
            </div>
          </div>
        </section>

        {/* Standard vs Flex */}
        <section className="py-20 md:py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <Reveal className="mb-10 text-center">
              <div className="text-[#00c97e] text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3">
                Product options
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight tracking-tight">
                Choose the Right Patch Pack
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Reveal delay={80}>
                <div className="h-full bg-gray-50 border border-gray-200 rounded p-6 md:p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Standard Patch Packs</h3>
                  <p className="text-gray-700 leading-relaxed">
                    For common potholes, pavement defects, spalls, parking lots, driveways, roads, and general
                    commercial pavement repairs.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={160}>
                <div className="h-full bg-gray-50 border border-gray-200 rounded p-6 md:p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Flex Patch Packs</h3>
                  <p className="text-gray-700 leading-relaxed">
                    For repair areas exposed to greater movement, thermal expansion, heavy loading, bridge-deck
                    conditions, or other demanding applications.
                  </p>
                </div>
              </Reveal>
            </div>
            <Reveal delay={220}>
              <div className="text-center bg-gray-50 border border-dashed border-gray-300 rounded p-6">
                <p className="text-gray-800 mb-4">
                  Not sure which one you need? Send us photos of the damaged area and we&rsquo;ll help you select
                  the right material.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Link
                    href="#quote"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#00c97e] hover:bg-[#00b36f] rounded transition-colors"
                  >
                    Request Pricing
                  </Link>
                  <Link
                    href="#schedule-demo"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-[#1a1a1a] border border-[#1a1a1a]/20 hover:border-[#00c97e] hover:text-[#00c97e] rounded transition-colors"
                  >
                    Schedule a Demo
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Local inventory + service */}
        <section className="py-20 md:py-24 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <Reveal className="text-center mb-10">
              <div className="text-[#00c97e] text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3">
                Local supply
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight tracking-tight">
                Local Material. Local Support.
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                Patch Packs are stocked at Asphalt Fabrics &amp; Supply in Glenwillow, Ohio. We support
                contractors, maintenance departments, commercial facilities, and municipalities throughout
                Cleveland, Akron, Canton, Youngstown, Toledo, and Northern Ohio.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div className="bg-white border border-gray-200 rounded p-6 md:p-8">
                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                  {localBullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-gray-800">
                      <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#00c97e]/15 text-[#00c97e] flex items-center justify-center">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-gray-200 text-sm text-gray-700 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <div className="font-semibold text-gray-900">Asphalt Fabrics &amp; Supply</div>
                    <div>7620 Bond Street, Glenwillow, OH 44139</div>
                  </div>
                  <div className="text-right">
                    <a href="tel:4403681420" className="block text-[#00c97e] font-semibold hover:underline">
                      440-368-1420
                    </a>
                    <a
                      href="mailto:jstone@asphaltfabrics.com"
                      className="block text-[#00c97e] font-semibold hover:underline"
                    >
                      jstone@asphaltfabrics.com
                    </a>
                  </div>
                </div>
                <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Link
                    href="#quote"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-[#00c97e] hover:bg-[#00b36f] rounded transition-colors"
                  >
                    Get Patch Pack Pricing
                  </Link>
                  <Link
                    href="#schedule-demo"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-[#1a1a1a] border border-[#1a1a1a]/20 hover:border-[#00c97e] hover:text-[#00c97e] rounded transition-colors"
                  >
                    Schedule a Free Demo
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 md:py-24 px-6 bg-[#1a1a1a] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight tracking-tight">
                Have a Pothole You Need to Repair?
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Tell us how many damaged areas you have&mdash;or send us a few photos. We&rsquo;ll help estimate
                the material, recommend Standard or Flex, and provide a same-day quote whenever possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center sm:items-center">
                <Link
                  href="#quote"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-[#00c97e] hover:bg-[#00b36f] rounded transition-colors duration-200 group"
                >
                  Request a Quote
                  <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                </Link>
                <Link
                  href="#schedule-demo"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white border border-white/40 hover:border-[#00c97e] hover:text-[#00c97e] rounded transition-colors duration-200"
                >
                  Schedule a Free Demo
                </Link>
                <a
                  href="tel:4403681420"
                  className="inline-flex items-center gap-2 text-base font-semibold text-white hover:text-[#00c97e] transition-colors"
                >
                  <span>Call Josh: 440-368-1420</span>
                  <span className="opacity-60">&rarr;</span>
                </a>
              </div>
              <p className="text-sm text-gray-400 mt-6">
                Local pickup in Glenwillow and delivery available throughout Northern Ohio.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Quote form */}
        <section id="quote" className="py-20 md:py-24 px-6 bg-white scroll-mt-20">
          <div className="max-w-3xl mx-auto">
            <Reveal className="mb-8 text-center">
              <div className="text-[#00c97e] text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3">
                Request pricing
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight tracking-tight">
                Get a Patch Packs Quote
              </h2>
              <p className="text-gray-700 mt-3">
                Volume pricing available for contractors, facilities, and municipalities.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <PatchPackQuoteForm mode="quote" />
            </Reveal>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 md:py-24 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <Reveal className="mb-8 text-center">
              <div className="text-[#00c97e] text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3">
                FAQ
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight tracking-tight">
                Patch Packs FAQ
              </h2>
            </Reveal>
            <div className="space-y-6">
              {faqData.map((faq, index) => (
                <Reveal key={faq.question} delay={index * 40}>
                  <div className="bg-white border border-gray-200 rounded p-6">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer variant="patch-packs" />
      <PatchPackStickyMobileBar />
      <PatchPackAnalytics />
    </div>
  );
}
