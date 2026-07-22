import AFSFooter from '@/components/AFSFooter';
import AFSStickyMobileBar from '@/components/AFSStickyMobileBar';
import Reveal from '@/components/Reveal';
import ConcreteRepairForm from '@/components/ConcreteRepairForm';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Concrete Repair Ohio | Crack Seal, Joint Repair, Parking Lots & Roads | AFS',
  description: 'Specialty commercial & industrial concrete repair by Asphalt Fabrics & Specialties. Gray crack seal + FibreCrete polymer joint repair for parking lots, roads, loading docks, warehouses, and municipal concrete. Northeast Ohio, since 2003. Free 24-hr estimates.',
  keywords: [
    'concrete repair Cleveland',
    'concrete repair Ohio',
    'concrete crack sealing Ohio',
    'gray crack seal concrete',
    'commercial parking lot concrete repair',
    'road concrete repair Ohio',
    'loading dock concrete repair',
    'dock apron repair Ohio',
    'warehouse floor joint repair',
    'FibreCrete installer Ohio',
    'polymer concrete joint repair',
    'industrial concrete repair Ohio',
    'commercial concrete crack sealing',
    'municipal concrete repair Ohio',
    'Asphalt Fabrics Specialties concrete',
    'Cuyahoga concrete repair',
    'Northeast Ohio concrete joint sealing',
  ],
  alternates: { canonical: 'https://www.buygeogrid.com/concrete-crack-sealing' },
  openGraph: {
    title: 'Concrete Repair — Roads, Parking Lots, Loading Docks | AFS',
    description: 'Gray crack seal + FibreCrete polymer joint repair for parking lots, roads, loading docks, warehouses, and municipal concrete. Northeast Ohio since 2003.',
    type: 'article',
  },
};

// AFS palette: black chassis (#1a1a1a) + construction yellow (#F5C518).
// Page-scoped only — Header + Footer keep BuyGeogrid green.
const AFS_YELLOW = '#F5C518';

const applications = [
  'Commercial parking lots',
  'Roads & roadways',
  'Loading docks & aprons',
  'Warehouse floors',
  'Manufacturing plants',
  'Distribution centers',
  'Municipal concrete',
  'High-traffic joints & transitions',
];

const counties = [
  { name: 'Cuyahoga', places: 'Cleveland, Lakewood, Parma, Solon, Westlake' },
  { name: 'Summit', places: 'Akron, Cuyahoga Falls, Stow, Hudson' },
  { name: 'Lake', places: 'Mentor, Painesville, Willoughby' },
  { name: 'Geauga', places: 'Chardon, Chesterland, Bainbridge' },
  { name: 'Portage', places: 'Kent, Ravenna, Aurora, Streetsboro' },
  { name: 'Medina', places: 'Medina, Brunswick, Wadsworth' },
];

const credentials = [
  { title: '20+ Years', body: 'Serving Northeast Ohio since 2003.' },
  { title: 'ODOT Certified', body: 'Ohio DOT certified products and installation.' },
  { title: 'Bonded & Insured', body: 'Fully bonded and insured. Free estimates within 24 hours.' },
  { title: 'Direct Estimator', body: 'Talk to your estimator directly — no phone-tree runaround.' },
];

const scopeWeFix = [
  'Cracked concrete joints and control cuts',
  'Failed or deteriorated joint sealant',
  'Spalled and eroded joint edges',
  'Loading-dock joint & apron repair',
  'Parking-lot and road crack sealing',
  'Warehouse floor joint repair for high-traffic areas',
];

const scopeWeDont = [
  'Full concrete slab replacement or removal',
  'Concrete leveling / mudjacking / polyurethane lifting',
  'Concrete resurfacing or new pours',
  'Structural repair of collapsed slabs',
  'Decorative concrete or stamped finishes',
];

const faqData = [
  {
    question: 'Do you replace concrete or just repair cracks and joints?',
    answer: 'We specialize in crack sealing and polymer joint repair — we do not replace concrete slabs. If your concrete is structurally sound but the joints and cracks are shot, we save you the cost of tear-out and replacement. If a slab actually needs to be replaced or leveled, we\'ll tell you honestly during the free assessment.',
  },
  {
    question: 'What\'s the difference between Gray Crack Seal and FibreCrete?',
    answer: 'Simple rule based on crack width. Gray Crack Seal is a rubberized Type 2 sealant color-matched to concrete — used for cracks 1 inch or less. FibreCrete is a polymer mix with a small aggregate that rebuilds joints and cracks wider than 1 inch. Cracks under 1" → Gray Crack Seal. Cracks and joints over 1" → FibreCrete. We size it right at the free on-site assessment.',
  },
  {
    question: 'How fast can we reopen the area after a FibreCrete repair?',
    answer: 'FibreCrete is designed for rapid return to service — minimal downtime is the whole point of the product. Actual reopen time depends on temperature, humidity, and traffic loads. We\'ll confirm the exact cure window for your specific job during the assessment.',
  },
  {
    question: 'Do you match the color of our existing concrete?',
    answer: 'Yes. Both Gray Crack Seal and FibreCrete are gray-toned to blend with concrete surfaces — no harsh black asphalt lines across your flatwork. Exact match depends on your concrete\'s age, aggregate color, and finish, but the result is dramatically better than ordinary black sealants.',
  },
  {
    question: 'What areas do you serve?',
    answer: 'Standard service area is six-county Northeast Ohio: Cuyahoga, Summit, Lake, Geauga, Portage, and Medina. That covers Cleveland, Akron, and everywhere between. For larger commercial and municipal projects, we\'ll travel south to Columbus.',
  },
  {
    question: 'Can you work off-hours to minimize business disruption?',
    answer: 'Yes — for commercial and industrial clients whose operations can\'t stop, we schedule off-hours, overnight, and weekend work when needed. Ask during the assessment and we\'ll build the schedule around your operating window.',
  },
  {
    question: 'How much does concrete crack sealing or FibreCrete repair cost?',
    answer: 'Pricing depends on linear footage, joint condition, site access, and how much prep the concrete needs. That\'s why we do free on-site assessments — you get a firm written estimate within 24 hours, no obligation, no pressure.',
  },
  {
    question: 'Do you offer any warranty on the repair?',
    answer: 'Product-level warranties from the material manufacturers apply and vary by product. We\'ll walk you through what covers your specific job when we give you the written estimate.',
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

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.buygeogrid.com/concrete-crack-sealing#business',
  name: 'Asphalt Fabrics & Specialties',
  description: 'Specialty commercial and industrial concrete crack sealing and polymer joint repair. Gray Crack Seal + FibreCrete for parking lots, roads, loading docks, warehouses, and municipal concrete. Northeast Ohio since 2003.',
  url: 'https://www.buygeogrid.com/concrete-crack-sealing',
  telephone: '+1-440-786-1077',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '7710 Bond Street',
    addressLocality: 'Glenwillow',
    addressRegion: 'OH',
    postalCode: '44139',
    addressCountry: 'US',
  },
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Cuyahoga County, Ohio' },
    { '@type': 'AdministrativeArea', name: 'Summit County, Ohio' },
    { '@type': 'AdministrativeArea', name: 'Lake County, Ohio' },
    { '@type': 'AdministrativeArea', name: 'Geauga County, Ohio' },
    { '@type': 'AdministrativeArea', name: 'Portage County, Ohio' },
    { '@type': 'AdministrativeArea', name: 'Medina County, Ohio' },
    { '@type': 'City', name: 'Cleveland' },
    { '@type': 'City', name: 'Akron' },
    { '@type': 'City', name: 'Columbus' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Concrete Repair Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Gray Crack Seal — Concrete Crack Sealing',
          serviceType: 'Concrete crack sealing',
          description: 'Rubberized Type 2 sealant color-matched to concrete. Used for cracks 1 inch or less. Helps block water intrusion, blends with concrete surfaces, no black asphalt lines. Applied on parking lots, roads, loading docks, warehouse floors, walkways, dock aprons, and municipal concrete.',
          image: 'https://www.buygeogrid.com/images/afs/gray-crack-seal-1.jpg',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'FibreCrete — Polymer Concrete Joint Repair',
          serviceType: 'Concrete joint repair',
          description: 'Polymer-modified concrete mix with small aggregate. Used for cracks and joints wider than 1 inch. Rebuilds damaged joints, spalled edges, and wide cracks in high-traffic concrete. Rapid return to service. Built for forklift and truck traffic on loading docks, dock aprons, drive lanes, warehouse floors, and industrial pavement.',
          image: 'https://www.buygeogrid.com/images/afs/fibrecrete-2.jpg',
        },
      },
    ],
  },
  hasCredential: [
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'ODOT Certified' },
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'Fully Bonded and Insured' },
  ],
  foundingDate: '2003',
};

export default function ConcreteRepair() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-grow pb-16 md:pb-0">
        {/* Custom AFS-branded hero — replaces PageHero on this page for palette match */}
        <section className="relative bg-[#1a1a1a] text-white overflow-hidden">
          {/* Construction-stripe accent bar (top) */}
          <div
            className="h-3 w-full"
            style={{
              background: `repeating-linear-gradient(-45deg, ${AFS_YELLOW} 0 20px, #1a1a1a 20px 40px)`,
            }}
            aria-hidden="true"
          />

          <div className="relative max-w-7xl mx-auto px-6 py-14 md:py-20 lg:py-24">
            <div className="grid md:grid-cols-[1.3fr_1fr] gap-8 md:gap-12 items-center">
              <div>
                <div
                  className="inline-block text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-5 px-3 py-1"
                  style={{ backgroundColor: AFS_YELLOW, color: '#1a1a1a' }}
                >
                  Commercial Crack Sealing &amp; Joint Repair
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight mb-4">
                  Dock down?<br />Cracked concrete?
                </h1>
                <p
                  className="inline-block text-xl md:text-2xl font-bold mb-8 px-2 py-1"
                  style={{ backgroundColor: AFS_YELLOW, color: '#1a1a1a' }}
                >
                  Repaired today. Rolling tomorrow.
                </p>
                <p className="text-lg text-gray-300 mb-10 leading-relaxed max-w-2xl">
                  Streets · roads · parking lots · loading docks · warehouse floors · joints &amp; cracks — fixed fast, matched gray, built for traffic.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 sm:items-center">
                  <Link
                    href="#assessment"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded transition-colors duration-200 group"
                    style={{ backgroundColor: AFS_YELLOW, color: '#1a1a1a' }}
                  >
                    Request an Assessment
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                  <Link
                    href="tel:4403841897"
                    className="inline-flex items-center gap-2 text-base font-semibold text-white transition-colors group"
                    style={{ '--hover-color': AFS_YELLOW } as React.CSSProperties}
                  >
                    <span>Call (440) 384-1897</span>
                    <span className="opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
                  </Link>
                </div>
                <div className="mt-5 text-xs md:text-sm text-gray-400 leading-relaxed">
                  <span className="font-semibold text-gray-300">Commercial · Industrial · Municipal only.</span>{' '}
                  Northeast Ohio service · larger projects considered statewide to Columbus.
                </div>
              </div>

              {/* AFS logo + 24-HR badge stack */}
              <div className="hidden lg:flex flex-col items-center justify-center gap-8">
                <div className="bg-white rounded-lg p-6 shadow-2xl">
                  <img
                    src="/images/logos/logo-8.22.18.jpg"
                    alt="Asphalt Fabrics & Specialties"
                    className="w-full max-w-sm h-auto"
                  />
                </div>
                <div
                  className="relative w-40 h-40 flex items-center justify-center rounded-full border-8 shadow-xl"
                  style={{ borderColor: AFS_YELLOW, backgroundColor: '#1a1a1a' }}
                >
                  <div className="text-center">
                    <div className="text-4xl font-black leading-none" style={{ color: AFS_YELLOW }}>24-HR</div>
                    <div className="text-sm font-bold uppercase tracking-widest text-white mt-2">Estimates</div>
                    <div className="text-[10px] uppercase tracking-widest text-gray-400 mt-1">Fast &amp; free</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Construction-stripe accent bar (bottom) */}
          <div
            className="h-3 w-full"
            style={{
              background: `repeating-linear-gradient(-45deg, ${AFS_YELLOW} 0 20px, #1a1a1a 20px 40px)`,
            }}
            aria-hidden="true"
          />
        </section>

        {/* Scope disclosure — helps SEO/AEO signal what we actually do */}
        <section className="py-16 md:py-20 px-6 bg-gray-50 border-b border-gray-200">
          <div className="max-w-6xl mx-auto">
            <Reveal className="max-w-2xl mb-10">
              <div className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: '#B08A00' }}>What we do</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight tracking-tight">
                Concrete Crack Sealing &amp; Polymer Joint Repair.
              </h2>
              <p className="text-lg text-gray-700 mt-4 leading-relaxed">
                We fix what&apos;s cracked, not what&apos;s collapsed. Specialty sealing and joint repair for structurally sound concrete — when replacement would be overkill.
              </p>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-6">
              <Reveal>
                <div className="bg-white rounded p-6 md:p-7 h-full border-l-4" style={{ borderColor: AFS_YELLOW }}>
                  <div className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#B08A00' }}>What we fix</div>
                  <ul className="space-y-2.5 text-gray-800">
                    {scopeWeFix.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-lg leading-none mt-0.5" style={{ color: '#B08A00' }}>✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <div className="bg-white rounded p-6 md:p-7 h-full border-l-4 border-gray-400">
                  <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">What we don&apos;t do</div>
                  <ul className="space-y-2.5 text-gray-600">
                    {scopeWeDont.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-lg leading-none mt-0.5 text-gray-400">×</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 pt-4 border-t border-gray-100 text-sm text-gray-600 italic">
                    Need slab replacement or leveling? We&apos;ll tell you honestly and point you toward a contractor who does that work.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Two service cards */}
        <section className="py-20 md:py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <Reveal className="max-w-2xl mb-14">
              <div className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: '#B08A00' }}>Products</div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
                Two specialty products, one purpose.
              </h2>
              <p className="text-lg text-gray-700 mt-4 leading-relaxed">
                Both are gray — designed to visually match existing concrete rather than leaving the harsh black lines of ordinary asphalt sealants.
              </p>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {/* FibreCrete card */}
              <Reveal>
                <div className="relative bg-[#1a1a1a] text-white rounded overflow-hidden flex flex-col h-full">
                  <div className="relative aspect-[16/10] bg-gray-900 overflow-hidden">
                    <img
                      src="/images/afs/fibrecrete-2.jpg"
                      alt="FibreCrete polymer joint repair on concrete — gray polymer mix with small aggregate visibly patched across concrete panel joint by Asphalt Fabrics & Specialties"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div
                    className="px-6 py-4 font-bold uppercase tracking-widest text-sm"
                    style={{ backgroundColor: AFS_YELLOW, color: '#1a1a1a' }}
                  >
                    FibreCrete <span className="opacity-70 font-semibold">— Rapid Joint Repair</span>
                  </div>
                  <div className="p-8 md:p-10 flex flex-col flex-grow">
                    <p className="text-gray-300 leading-relaxed mb-5 text-lg">
                      Polymer mix with small aggregate. Rebuilds joints, spalls, and wider cracks in high-traffic concrete.
                    </p>
                    <ul className="text-gray-300 leading-relaxed space-y-3 mb-8">
                      <li className="flex items-start gap-3">
                        <span style={{ color: AFS_YELLOW }} className="font-bold flex-shrink-0">•</span>
                        <span><strong className="text-white">For cracks &amp; joints wider than 1 inch</strong></span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span style={{ color: AFS_YELLOW }} className="font-bold flex-shrink-0">•</span>
                        <span>Built for forklifts &amp; truck traffic</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span style={{ color: AFS_YELLOW }} className="font-bold flex-shrink-0">•</span>
                        <span>Rapid return to service — minimal downtime</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span style={{ color: AFS_YELLOW }} className="font-bold flex-shrink-0">•</span>
                        <span>Ideal for loading docks, aprons, drive lanes</span>
                      </li>
                    </ul>
                    <Link href="#assessment" className="mt-auto inline-flex items-center gap-2 font-semibold group" style={{ color: AFS_YELLOW }}>
                      Get an assessment
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                  </div>
                </div>
              </Reveal>

              {/* Gray Crack Seal card */}
              <Reveal delay={120}>
                <div className="relative bg-[#1a1a1a] text-white rounded overflow-hidden flex flex-col h-full">
                  <div className="relative aspect-[16/10] bg-gray-900 overflow-hidden">
                    <img
                      src="/images/afs/gray-crack-seal-1.jpg"
                      alt="Gray Crack Seal on concrete surface — rubberized Type 2 sealant applied by Asphalt Fabrics & Specialties, color-matched to concrete, no black asphalt lines"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div
                    className="px-6 py-4 font-bold uppercase tracking-widest text-sm"
                    style={{ backgroundColor: AFS_YELLOW, color: '#1a1a1a' }}
                  >
                    Gray Crack Seal <span className="opacity-70 font-semibold">— Color-Matched for Concrete</span>
                  </div>
                  <div className="p-8 md:p-10 flex flex-col flex-grow">
                    <p className="text-gray-300 leading-relaxed mb-5 text-lg">
                      Rubberized Type 2 sealant, color-matched to concrete — no black asphalt lines across your flatwork.
                    </p>
                    <ul className="text-gray-300 leading-relaxed space-y-3 mb-8">
                      <li className="flex items-start gap-3">
                        <span style={{ color: AFS_YELLOW }} className="font-bold flex-shrink-0">•</span>
                        <span><strong className="text-white">For cracks 1 inch or less</strong></span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span style={{ color: AFS_YELLOW }} className="font-bold flex-shrink-0">•</span>
                        <span>Blends with concrete surfaces</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span style={{ color: AFS_YELLOW }} className="font-bold flex-shrink-0">•</span>
                        <span>Helps block water intrusion &amp; slow further deterioration</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span style={{ color: AFS_YELLOW }} className="font-bold flex-shrink-0">•</span>
                        <span>Clean look for docks, walks &amp; aprons</span>
                      </li>
                    </ul>
                    <Link href="#assessment" className="mt-auto inline-flex items-center gap-2 font-semibold group" style={{ color: AFS_YELLOW }}>
                      Get an assessment
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={240}>
              <div className="mt-8 bg-gray-50 border-l-4 p-6 rounded" style={{ borderColor: AFS_YELLOW }}>
                <p className="text-gray-700 leading-relaxed">
                  <strong className="text-gray-900">Simple rule:</strong> Cracks <strong>1 inch or less</strong> → Gray Crack Seal. Cracks and joints <strong>wider than 1 inch</strong> → FibreCrete. We&apos;ll size it right during the free on-site assessment.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Trust badge strip — visual credentials with icons */}
        <section className="bg-[#1a1a1a] text-white py-12 md:py-14 px-6 border-y-2" style={{ borderColor: AFS_YELLOW }}>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {/* ODOT Certified */}
              <div className="flex items-center gap-3 p-3 md:p-4 border border-white/10 rounded hover:border-white/20 transition-colors">
                <div
                  className="flex-shrink-0 w-11 h-11 md:w-12 md:h-12 flex items-center justify-center rounded"
                  style={{ backgroundColor: AFS_YELLOW }}
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="#1a1a1a" strokeWidth={2.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] md:text-xs uppercase tracking-widest text-gray-400 font-semibold">Certified</div>
                  <div className="font-bold text-sm md:text-base leading-tight">ODOT Certified</div>
                </div>
              </div>

              {/* Bonded & Insured */}
              <div className="flex items-center gap-3 p-3 md:p-4 border border-white/10 rounded hover:border-white/20 transition-colors">
                <div
                  className="flex-shrink-0 w-11 h-11 md:w-12 md:h-12 flex items-center justify-center rounded"
                  style={{ backgroundColor: AFS_YELLOW }}
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="#1a1a1a" strokeWidth={2.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 4.556-4.03 8.25-9 8.25S3 16.556 3 12s4.03-8.25 9-8.25 9 3.694 9 8.25z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] md:text-xs uppercase tracking-widest text-gray-400 font-semibold">Fully</div>
                  <div className="font-bold text-sm md:text-base leading-tight">Bonded &amp; Insured</div>
                </div>
              </div>

              {/* Preferred Installer */}
              <div className="flex items-center gap-3 p-3 md:p-4 border border-white/10 rounded hover:border-white/20 transition-colors">
                <div
                  className="flex-shrink-0 w-11 h-11 md:w-12 md:h-12 flex items-center justify-center rounded"
                  style={{ backgroundColor: AFS_YELLOW }}
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="#1a1a1a" strokeWidth={2.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.32.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] md:text-xs uppercase tracking-widest text-gray-400 font-semibold">Preferred</div>
                  <div className="font-bold text-sm md:text-base leading-tight">Manufacturer Installer</div>
                </div>
              </div>

              {/* Since 2003 */}
              <div className="flex items-center gap-3 p-3 md:p-4 border border-white/10 rounded hover:border-white/20 transition-colors">
                <div
                  className="flex-shrink-0 w-11 h-11 md:w-12 md:h-12 flex items-center justify-center rounded"
                  style={{ backgroundColor: AFS_YELLOW }}
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="#1a1a1a" strokeWidth={2.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] md:text-xs uppercase tracking-widest text-gray-400 font-semibold">Est.</div>
                  <div className="font-bold text-sm md:text-base leading-tight">20+ Years · Since 2003</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Real work gallery */}
        <section className="py-16 md:py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <Reveal className="mb-8">
              <div className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: '#B08A00' }}>Real work</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight tracking-tight">Actual jobs. Actual concrete.</h2>
              <p className="text-lg text-gray-700 mt-3 leading-relaxed">
                Every photo below is real AFS work — gray-on-gray, no black asphalt lines.
              </p>
            </Reveal>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              <Reveal>
                <div className="relative aspect-[4/3] rounded overflow-hidden bg-gray-900 group">
                  <img
                    src="/images/afs/fibrecrete-2.jpg"
                    alt="Close-up of FibreCrete polymer joint repair by Asphalt Fabrics & Specialties — gray polymer mix with visible aggregate patched across concrete panel joint"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="text-xs uppercase tracking-widest font-semibold" style={{ color: AFS_YELLOW }}>FibreCrete</div>
                    <div className="text-white text-sm font-semibold">Polymer joint repair</div>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <div className="relative aspect-[4/3] rounded overflow-hidden bg-gray-900 group">
                  <img
                    src="/images/afs/gray-crack-seal-1.jpg"
                    alt="Gray Crack Seal on concrete — rubberized Type 2 sealant applied around storm drain by Asphalt Fabrics & Specialties, color-matched to concrete"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="text-xs uppercase tracking-widest font-semibold" style={{ color: AFS_YELLOW }}>Gray Crack Seal</div>
                    <div className="text-white text-sm font-semibold">Storm-drain area repair</div>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div className="relative aspect-[4/3] rounded overflow-hidden bg-gray-900 group">
                  <img
                    src="/images/afs/gray-crack-seal-2.jpg"
                    alt="Gray Crack Seal V-shaped joint repair on concrete driveway by Asphalt Fabrics & Specialties — no black asphalt lines"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="text-xs uppercase tracking-widest font-semibold" style={{ color: AFS_YELLOW }}>Gray Crack Seal</div>
                    <div className="text-white text-sm font-semibold">Driveway joint sealing</div>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={300}>
                <div className="relative aspect-[4/3] rounded overflow-hidden bg-gray-900 group">
                  <img
                    src="/images/afs/fibrecrete-1.jpg"
                    alt="FibreCrete polymer joint repair on residential street by Asphalt Fabrics & Specialties"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="text-xs uppercase tracking-widest font-semibold" style={{ color: AFS_YELLOW }}>FibreCrete</div>
                    <div className="text-white text-sm font-semibold">Street joint repair</div>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={400}>
                <div className="relative aspect-[4/3] rounded overflow-hidden bg-gray-900 group">
                  <img
                    src="/images/afs/fibrecrete-3.jpg"
                    alt="FibreCrete polymer joint repair on residential cul-de-sac by Asphalt Fabrics & Specialties"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="text-xs uppercase tracking-widest font-semibold" style={{ color: AFS_YELLOW }}>FibreCrete</div>
                    <div className="text-white text-sm font-semibold">Cul-de-sac repair</div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-20 md:py-24 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <Reveal className="mb-10">
              <div className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: '#B08A00' }}>Where we work</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight tracking-tight">Ideal Applications</h2>
            </Reveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {applications.map((app, i) => (
                <Reveal key={app} delay={i * 60}>
                  <div className="bg-white p-5 rounded border-l-4 h-full flex items-center" style={{ borderColor: AFS_YELLOW }}>
                    <span className="font-semibold text-gray-900">{app}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Why AFS */}
        <section className="py-20 md:py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <Reveal className="mb-10">
              <div className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: '#B08A00' }}>Why AFS</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight tracking-tight">
                Specialty materials, local install, direct communication.
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {credentials.map((c, i) => (
                <Reveal key={c.title} delay={i * 100}>
                  <div className="border-t-2 pt-6 h-full" style={{ borderColor: AFS_YELLOW }}>
                    <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 leading-tight">{c.title}</div>
                    <p className="text-gray-700 leading-relaxed text-sm">{c.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Service area */}
        <section className="py-20 md:py-24 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <Reveal className="mb-10">
              <div className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: '#B08A00' }}>Coverage</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight tracking-tight">Northeast Ohio — Large Projects Statewide to Columbus</h2>
              <p className="text-lg text-gray-700 mt-4 leading-relaxed max-w-3xl">
                Standard service area covers the six Northeast Ohio counties around our home base. Larger jobs south to Columbus considered on request.
              </p>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-4">
              {counties.map((c, i) => (
                <Reveal key={c.name} delay={120 + i * 60}>
                  <div className="bg-white p-5 rounded border-l-4 h-full" style={{ borderColor: AFS_YELLOW }}>
                    <div className="font-semibold text-gray-900 mb-1">{c.name} County</div>
                    <p className="text-sm text-gray-600">{c.places}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ — big AEO signal, FAQPage schema below */}
        <section className="py-20 md:py-24 px-6 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto">
            <Reveal className="mb-10">
              <div className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: '#B08A00' }}>FAQ</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight tracking-tight">
                Straight answers.
              </h2>
            </Reveal>
            <div className="space-y-6">
              {faqData.map((faq, i) => (
                <Reveal key={i} delay={i * 60}>
                  <div className="border-b border-gray-200 pb-6 last:border-b-0">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 leading-snug">{faq.question}</h3>
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Assessment form */}
        <section id="assessment" className="py-20 md:py-24 px-6 bg-white scroll-mt-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 items-start">
              <Reveal>
                <div className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: '#B08A00' }}>Free assessment</div>
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-[1.05] tracking-tight">
                  We&apos;ll come look. No cost.
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Send the details and we&apos;ll be back within 24 hours with a recommendation, the right material, and a firm quote. Or call{' '}
                  <a href="tel:4403841897" className="font-semibold hover:underline" style={{ color: '#B08A00' }}>
                    (440) 384-1897
                  </a>{' '}
                  directly.
                </p>
                <ul className="text-gray-700 leading-relaxed space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="font-bold" style={{ color: '#B08A00' }}>✓</span>
                    <span>Free on-site assessment across Northeast Ohio</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold" style={{ color: '#B08A00' }}>✓</span>
                    <span>Written estimate within 24 hours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold" style={{ color: '#B08A00' }}>✓</span>
                    <span>Text photos to (440) 384-1897 for a faster preliminary read</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold" style={{ color: '#B08A00' }}>✓</span>
                    <span>Direct communication with your estimator</span>
                  </li>
                </ul>
              </Reveal>
              <Reveal delay={120}>
                <ConcreteRepairForm />
              </Reveal>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="relative py-20 md:py-24 px-6 bg-[#1a1a1a] text-white overflow-hidden">
          <div
            className="absolute top-0 left-0 right-0 h-3"
            style={{ background: `repeating-linear-gradient(-45deg, ${AFS_YELLOW} 0 20px, #1a1a1a 20px 40px)` }}
            aria-hidden="true"
          />
          <div className="relative max-w-4xl mx-auto text-center">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight tracking-tight">
                Keep your operation running.
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Every day of downtime for concrete failure is money on the table. Free assessment. 24-hour turnaround.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center sm:items-center">
                <Link
                  href="#assessment"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded transition-colors duration-200 group"
                  style={{ backgroundColor: AFS_YELLOW, color: '#1a1a1a' }}
                >
                  Request Assessment
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
                <Link href="tel:4403841897" className="inline-flex items-center gap-2 text-base font-semibold text-white transition-colors group">
                  <span>Call (440) 384-1897</span>
                  <span className="opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
                </Link>
              </div>
            </Reveal>
          </div>
          <div
            className="absolute bottom-0 left-0 right-0 h-3"
            style={{ background: `repeating-linear-gradient(-45deg, ${AFS_YELLOW} 0 20px, #1a1a1a 20px 40px)` }}
            aria-hidden="true"
          />
        </section>
      </main>
      <AFSFooter />
      <AFSStickyMobileBar />

      {/* Google Ads / GA conversion tracking — click-to-call + click-to-text on all page tel/sms links */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function(){
              function fire(cat, label){
                if (typeof window.gtag === 'function') {
                  window.gtag('event', cat, { event_category: 'engagement', event_label: label });
                }
              }
              document.addEventListener('click', function(e){
                var a = e.target && e.target.closest ? e.target.closest('a[href^="tel:"], a[href^="sms:"]') : null;
                if (!a) return;
                var isText = a.getAttribute('href').indexOf('sms:') === 0;
                fire(isText ? 'click_to_text' : 'click_to_call', 'concrete_crack_sealing');
              }, { passive: true });
            })();
          `,
        }}
      />

      {/* Schema.org markup — AEO/SEO signal for FAQ + Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </div>
  );
}
