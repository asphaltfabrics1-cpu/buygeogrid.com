import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why Potholes Keep Coming Back (And How to Stop It) | Ohio',
  description: 'Filling potholes with cold patch every spring is a losing game. The real fix is stopping water from reaching the base. Petrotac interlayer + Patch Packs cold asphalt. Ohio distributor.',
  keywords: ['potholes keep coming back', 'permanent pothole fix', 'stop potholes returning', 'cold patch that lasts', 'Patch Packs Ohio', 'Petrotac crack repair', 'reflective cracking', 'Ohio pothole solution'],
  alternates: { canonical: 'https://www.buygeogrid.com/potholes-keep-coming-back' },
  openGraph: {
    title: 'Why Potholes Keep Coming Back',
    description: 'Cold patch every spring is a losing game. Here\'s what actually stops them from returning.',
    type: 'article',
  },
};

const faqData = [
  {
    question: 'Why do potholes come back in the same spot every year?',
    answer: 'A pothole is a symptom, not a disease. What\'s actually broken is the pavement below and around it — cracks that let water down to the base course, freeze-thaw cycles that heave the base, and traffic that pumps material out of the failing area. Fill the hole with cold patch and you cover the symptom for a season. The underlying crack keeps letting water in, the base keeps failing, and the pothole comes back.',
  },
  {
    question: 'What actually stops the cycle?',
    answer: 'Two things need to happen: seal the cracks that are feeding water to the base, then fill the pothole with a material that stays put. For the crack seal on any pavement over 4 inches wide, Petrotac peel-and-stick interlayer bridges the crack under a fresh overlay so the crack doesn\'t reflect back through. For the pothole itself, Patch Packs cold asphalt is designed to compact under vehicle traffic and stay locked in — it isn\'t the same as bagged cold patch you get at the big-box store.',
  },
  {
    question: 'Isn\'t Petrotac just for road crews?',
    answer: 'No — the residential and small-commercial version comes in 1ft, 1.5ft, and 4ft widths that a homeowner or small contractor can install with a torch or heat gun. Cracks over 1/4 inch wide are the ones that let real water in. Peel-and-stick over them before your next seal coat or overlay and they won\'t reflect through.',
  },
  {
    question: 'What\'s the difference between Patch Packs and the cold patch at the hardware store?',
    answer: 'Patch Packs are engineered cold asphalt in sealed pouches. The proprietary blend stays workable in the bag but compacts under traffic to form a durable patch. Big-box cold patch tends to be a generic emulsion mix that dries out fast, doesn\'t compact well, and gets kicked out of the hole by the first snowplow. Patch Packs are what municipal maintenance crews use.',
  },
  {
    question: 'How do I stop cracks from turning into potholes in the first place?',
    answer: 'Two-step: crack seal every crack over 1/4 inch wide before winter (either with hot rubber or a peel-and-stick like Petrotac), then apply a seal coat every 3–5 years to keep the surface tight. The moment water can get through the pavement surface, the freeze-thaw cycle starts breaking the base underneath.',
  },
  {
    question: 'Do you install this or just sell the material?',
    answer: 'BuyGeogrid is a distributor — we sell Patch Packs, Petrotac, and related materials, and we can walk you through the install. Our sister company Asphalt Fabrics & Specialties performs the non-peel-and-stick paving fabric installation and crack sealing as a service across Northern Ohio if you\'d rather have it done for you.',
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

export default function PotholesKeepComingBack() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main className="flex-grow">
        <PageHero
          title="Why Potholes Keep Coming Back"
          description="Filling the same pothole every spring is a losing game. The hole is a symptom — the actual problem is water reaching the base. Here's what stops the cycle."
          ctaText="See Our Repair Materials"
          ctaLink="/patch-packs"
          secondaryCtaText="Call (440) 368-1420"
          secondaryCtaLink="tel:4403681420"
          badge="Municipal-Grade Materials for Anyone"
        />

        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Freeze-Thaw Cycle That Eats Your Pavement</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              A pothole doesn&apos;t start as a hole. It starts as a crack. Water gets in the crack. In an Ohio winter that water freezes and expands ~9%. It pushes the pavement apart from below. The next thaw, more water gets in. Traffic loads pound the weakened area. A chunk breaks free. Now there&apos;s a hole.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Filling the hole doesn&apos;t address the crack that fed it. That&apos;s why the same pothole reappears every March.
            </p>
          </div>
        </section>

        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Two-Step Permanent Fix</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded shadow-sm">
                <div className="text-sm font-semibold text-[#00c97e] uppercase tracking-wide mb-2">Step 1 — Seal the Cracks</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Petrotac Peel-and-Stick Interlayer</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Petrotac bridges cracks so they don&apos;t reflect back through your next overlay or seal coat. Peel the release liner, position it over the crack, warm with a torch or heat gun, roll it down. Three widths — 1ft, 1.5ft, and 4ft — stocked at our Solon warehouse.
                </p>
                <Link href="/interlayers" className="text-[#00c97e] font-semibold hover:underline">
                  See Petrotac options →
                </Link>
              </div>
              <div className="bg-white p-6 rounded shadow-sm">
                <div className="text-sm font-semibold text-[#00c97e] uppercase tracking-wide mb-2">Step 2 — Patch That Stays</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Patch Packs Cold Asphalt</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Sealed pouches of engineered cold asphalt that compact under traffic and stay locked in. This is what municipal crews use. Not the generic cold patch from the hardware store that ends up on the shoulder after the first snowplow pass.
                </p>
                <Link href="/patch-packs" className="text-[#00c97e] font-semibold hover:underline">
                  See Patch Packs →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What Cold Patch You&apos;ve Already Tried Won&apos;t Do</h2>
            <div className="space-y-4">
              {[
                { p: 'Doesn\'t compact', b: 'Generic cold patch stays soft. Traffic and snowplows kick it out of the hole within weeks.' },
                { p: 'Dries out in the bag', b: 'Cold patch that sat on a hardware-store shelf for a year won\'t bond to the pavement edges.' },
                { p: 'Doesn\'t seal the crack', b: 'Even a perfect pothole fill does nothing if the surrounding crack is still open and letting water in.' },
                { p: 'Wrong material for the temperature', b: 'Winter-grade cold patch is different from warm-weather formulations. Big-box product is one-size-fits-all.' },
              ].map((item, i) => (
                <div key={i} className="border-l-4 border-red-500 bg-red-50 p-4 rounded">
                  <p className="font-semibold text-gray-900 mb-1">{item.p}</p>
                  <p className="text-gray-700">{item.b}</p>
                </div>
              ))}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stop Patching. Start Fixing.</h2>
            <p className="text-lg text-gray-300 mb-6">Municipal-grade repair materials for property managers, contractors, and homeowners in Northern Ohio.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/patch-packs" className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-[#00c97e] hover:bg-[#00b36f] rounded transition-colors duration-200">
                Order Patch Packs
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
