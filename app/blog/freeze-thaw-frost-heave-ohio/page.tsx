import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Freeze-Thaw & Frost Heave in Ohio | Geogrid, Patch Packs & Interlayer | BuyGeogrid',
  description: 'Why Northern Ohio pavements crack and pump every spring — and the three-layer playbook with geogrid, Patch Packs, and Petrotac interlayer to stop the cycle.',
  keywords: ['frost heave Ohio', 'freeze thaw Ohio', 'spring breakup pavement', 'frost susceptible soil', 'geogrid frost heave', 'Cuyahoga County soils', 'Summit County soils', 'Northern Ohio frost depth', 'silty clay frost heave', 'geogrid Ohio', 'pavement freeze thaw', 'Patch Packs pothole repair', 'Petrotac interlayer Ohio', 'reflective cracking prevention', 'crack seal Ohio'],
  alternates: {
    canonical: 'https://www.buygeogrid.com/blog/freeze-thaw-frost-heave-ohio',
  },
  openGraph: {
    title: 'Freeze-Thaw & Frost Heave in Ohio: Why Geogrid Helps',
    description: 'Why Northern Ohio pavements fail every spring — and what geogrid actually does about it.',
    type: 'article',
    publishedTime: '2026-05-11',
    authors: ['Asphalt Fabrics & Supply'],
    images: ['/images/logos/afsupplylogo_transparent.png'],
  },
};

const faqData = [
  {
    question: "Does geogrid prevent frost heave?",
    answer: "No. Frost heave is caused by water migrating to the freezing front and forming ice lenses in frost-susceptible soils. Geogrid is not a moisture barrier and does not stop that process. What geogrid does is reduce the damage caused by the spring thaw — when the subgrade is at its weakest — by distributing loads over a wider area and keeping the aggregate base confined and intact."
  },
  {
    question: "Why are Northern Ohio soils so vulnerable to frost damage?",
    answer: "Most of Cuyahoga, Summit, Stark, Lorain, and Mahoning counties sit on glacial till soils dominated by silts and silty clay loams. The U.S. Army Corps of Engineers frost-susceptibility classification rates silty soils (ML, CL-ML, and similar) as some of the most frost-susceptible material there is, because their fine pore structure lets capillary action pull water up to the freezing front. Combine that with a shallow water table and a frost depth that can reach 30 inches or more in a hard winter, and the conditions for frost heave are textbook."
  },
  {
    question: "What is 'spring breakup' and why does it damage pavements?",
    answer: "Spring breakup is the period when frozen subgrade thaws from the top down. Meltwater is trapped because the still-frozen layer below cannot drain. The subgrade becomes saturated and loses much of its bearing capacity right when the surface is supporting normal traffic. This is when most freeze-thaw pavement damage actually appears — alligator cracking, rutting, pumping, and base failures that were set up over the winter."
  },
  {
    question: "Where does geogrid help most with freeze-thaw problems?",
    answer: "Geogrid is most effective in flexible pavement sections — parking lots, driveways, low-volume roads, haul roads, and unpaved aggregate surfaces — where load distribution and base confinement are the primary concerns. By mechanically stabilizing the aggregate layer, geogrid keeps the base from punching into the weakened spring subgrade, reduces pumping of fines into the aggregate, and extends the usable life of the section through multiple freeze-thaw cycles."
  },
  {
    question: "Should I use geogrid with a geotextile in frost-prone soils?",
    answer: "Often yes. Geogrid handles reinforcement and confinement; a nonwoven geotextile handles separation and filtration. In silty, frost-susceptible subgrades the pumping action during spring thaw can drive fines up into the aggregate base over time, choking off drainage and reducing the base's bearing capacity. A nonwoven geotextile under the geogrid, or as a separator at the subgrade interface, prevents that intermixing while still letting water pass."
  },
  {
    question: "Can geogrid be installed during the winter?",
    answer: "Yes. Geogrid itself is not temperature-sensitive in a way that prevents winter installation, and Tensar's installation guidance is straightforward in cold weather. The bigger consideration is the subgrade condition: you should not place reinforcement over frozen subgrade that will thaw and lose volume under the section. A DCP test or proof roll on unfrozen subgrade tells you what you are actually building on."
  },
  {
    question: "What do I do about potholes that are already open right now?",
    answer: "For an immediate, durable repair without a hot box or torches, Patch Packs are the right product. They are cold-applied, 100% recycled aggregate, VOC-free, and rated for year-round use including wet conditions. Standard Patch Packs handle general road, lot, and driveway potholes; Flex Patch Packs are formulated for bridge decks and expansion joints. They do not fix the underlying subgrade — a base rebuild with geogrid does that — but they hold the surface until the real repair is scheduled."
  },
  {
    question: "Someone is asking me about crack sealing — what should I quote?",
    answer: "It depends on what comes next. If the cracks will be overlaid in the same season, Propex Petrotac 1-foot interlayer rolls are usually a stronger answer than a conventional hot-pour crack seal — the self-adhesive membrane provides stress relief so cracks don't reflect through the new overlay and acts as a moisture barrier into the base. We stock Petrotac at the supply house for contractors to install. If the customer actually wants a hot-pour crack seal as standalone maintenance done for them, that's a separate install service: our sister company Asphalt Fabrics & Specialties is a Northern Ohio pavement contractor that handles crack sealing as part of their own services line. Reach them directly at (440) 249-6717."
  },
  {
    question: "How does an interlayer fit into a freeze-thaw repair strategy?",
    answer: "An interlayer stops new pavement from inheriting the cracks of the old pavement. In a freeze-thaw climate this matters twice: the membrane absorbs the cracking stress, and it blocks the moisture that would otherwise infiltrate the base and feed the next round of frost damage. The standard Northern Ohio playbook is geogrid for the base, a nonwoven geotextile for separation, and Petrotac as an interlayer before any overlay over existing cracked pavement."
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
  "headline": "Freeze-Thaw & Frost Heave in Ohio: Why Geogrid Helps in Cuyahoga & Summit County Soils",
  "description": "Why Northern Ohio pavements crack and pump every spring, and what geogrid actually does about frost heave in silty glacial till soils.",
  "author": { "@type": "Organization", "name": "Asphalt Fabrics & Supply" },
  "publisher": {
    "@type": "Organization",
    "name": "BuyGeogrid.com",
    "logo": { "@type": "ImageObject", "url": "https://www.buygeogrid.com/images/logos/afsupplylogo_transparent.png" }
  },
  "datePublished": "2026-05-11",
  "mainEntityOfPage": "https://www.buygeogrid.com/blog/freeze-thaw-frost-heave-ohio"
};

export default function FreezeThawOhioPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main className="flex-grow">
        <PageHero
          title="Freeze-Thaw & Frost Heave in Ohio"
          description="Why Northern Ohio pavements crack, heave, and pump every spring — and what geogrid actually does about it."
          ctaText="Get a Site Assessment"
          ctaLink="/contact"
          secondaryCtaText="Call (440) 368-1420"
          secondaryCtaLink="tel:4403681420"
        />

        <article className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded border border-gray-200 p-8">
              <div className="prose prose-lg max-w-none">

                <p className="text-gray-700 mb-6 leading-relaxed">
                  Every spring, the same calls come in from Cleveland, Akron, and Canton: a parking lot that looked fine in October is now alligator-cracked, a driveway has a hump down the middle, a service road is pumping water through every joint. The damage looks like it happened overnight. It did not. It was set up months earlier, when the ground froze.
                </p>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  This post covers what is actually happening in Northern Ohio subgrades during freeze-thaw cycles, why the soils here are uniquely vulnerable, and where geogrid does — and does not — help.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">The Three Ingredients of Frost Heave</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Frost heave is not just &quot;ground freezing.&quot; It requires three conditions to occur together. Remove any one and frost heave largely stops:
                </p>
                <ol className="list-decimal pl-6 mb-6 space-y-2 text-gray-700">
                  <li><strong>Freezing temperatures</strong> sustained long enough for the frost line to penetrate into the subgrade.</li>
                  <li><strong>A frost-susceptible soil</strong> — typically a silt or silty clay with fine enough pores to support capillary water movement, but not so fine that water cannot flow at all. The U.S. Army Corps of Engineers ranks silts (ML), silty clays (CL-ML), and similar fine-grained soils among the most frost-susceptible classifications.</li>
                  <li><strong>A water source</strong> — usually a shallow groundwater table or perched water that can feed the freezing front through capillary action.</li>
                </ol>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  When all three are present, water is pulled upward toward the freezing zone and freezes into discrete ice lenses that grow horizontally. Those lenses displace the soil above them — that is the &quot;heave&quot; you see on the surface. Heave of several inches over a single winter is well-documented in the engineering literature.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Northern Ohio Checks All Three Boxes</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Cuyahoga, Summit, Stark, Lorain, and Mahoning counties sit on glacial till deposited by the Wisconsin and Illinoian glaciations. The result is a landscape dominated by silt loams, silty clay loams, and clay loams — exactly the soil textures that fall into the most frost-susceptible categories.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  You can confirm this for any specific site using the USDA Natural Resources Conservation Service&apos;s Web Soil Survey. For most of the urbanized Northern Ohio corridor, the dominant map units describe silty, low-permeability soils with seasonally high water tables. That is a textbook frost-susceptible profile.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Layer on a sustained winter with frost penetration that commonly reaches into the 20-to-30+ inch range in Northern Ohio, and a water table that is rarely deep enough to matter, and you have all three ingredients sitting under most of the region&apos;s parking lots, driveways, and low-volume roads.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">The Real Damage Happens in the Spring, Not the Winter</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Here is the part that surprises people: most of the pavement damage you see in April and May was not caused by the freezing — it was caused by the thawing.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Thaw moves top-down. The surface warms first while the deeper subgrade is still frozen. The ice lenses that formed all winter melt into water that cannot drain downward, because the layer below is still frozen solid. That trapped meltwater saturates the upper subgrade and base. Bearing capacity collapses.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  This is the period civil engineers call <strong>spring breakup</strong> or <strong>thaw weakening</strong>. In states with formal seasonal load restrictions — Michigan, Minnesota, Wisconsin — this is exactly when trucks get told to stay off certain routes. The pavement structure is sitting on what amounts to a saturated sponge. Normal traffic loads cause rutting, pumping of fines, alligator cracking, and base failures that turn into potholes a few weeks later.
                </p>

                <div className="bg-amber-50 border-l-4 border-amber-400 rounded p-4 mb-6">
                  <p className="text-gray-800 text-sm leading-relaxed m-0">
                    <strong>Why May matters in Ohio:</strong> the visible damage you are seeing right now in Cleveland, Akron, and Canton lots and drives is the spring breakup signature — set up over winter, exposed by the thaw, accelerated by traffic.
                  </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">What Geogrid Actually Does — and Doesn&apos;t Do</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Be skeptical of anyone who tells you geogrid &quot;prevents&quot; frost heave. It does not. Geogrid is not a moisture barrier and does not change the capillary behavior of the soil below it. If the three ingredients are present, the soil will heave.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  What geogrid does is change the consequences. By mechanically stabilizing the aggregate layer, it:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                  <li><strong>Distributes loads over a wider area</strong>, reducing the peak stress reaching a weakened spring subgrade.</li>
                  <li><strong>Confines the aggregate</strong> so it cannot displace laterally or punch into a soft subgrade during the thaw-weakened period.</li>
                  <li><strong>Reduces base course intermixing</strong> with the subgrade, which keeps the base layer working as a base layer instead of slowly turning into contaminated mud.</li>
                  <li><strong>Extends the section&apos;s life through multiple freeze-thaw cycles</strong> by limiting the cumulative damage each spring breakup adds.</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Pair It With a Separator</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  In silty Northern Ohio subgrades, the most effective freeze-thaw section combines a geogrid (for reinforcement and confinement) with a <Link href="/nonwoven-fabrics" className="text-[#00c97e] hover:text-[#00b36f] font-semibold">nonwoven geotextile</Link> (for separation and filtration) at the subgrade interface. The geotextile keeps fines from pumping up into the aggregate during the saturated thaw period, while still allowing water to pass. This combination is widely used in cold-region pavement design for exactly this reason.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Where It Pays Off in Northern Ohio</h2>
                <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                  <li><strong>Commercial parking lots</strong> on glacial till — the most common problem we get called about each spring.</li>
                  <li><strong>Residential driveways</strong> in Cuyahoga, Summit, and Stark counties, where silty clay loam subgrades are the default.</li>
                  <li><strong>Low-volume municipal roads</strong> where over-excavation is not budget-feasible.</li>
                  <li><strong>Industrial yards and haul roads</strong> that need to carry heavy traffic through and right after the thaw period.</li>
                  <li><strong>Repair sections</strong> where last spring&apos;s breakup damage is being rebuilt and you do not want to be back in the same spot next May.</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Right Now: Patch Packs for the Potholes Already Open</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Geogrid is the long-term answer when you are rebuilding a section. But if you are reading this in May and you have potholes already broken open from spring breakup, you need something you can throw down today. That is what <Link href="/patch-packs" className="text-[#00c97e] hover:text-[#00b36f] font-semibold">Patch Packs</Link> are for.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Patch Packs are a cold-applied asphalt repair material — 100% recycled aggregate, VOC-free, no torches and no hot box required. The binder lets the patch compress and expand under traffic instead of popping out the way conventional cold patch often does. Two variants:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                  <li><strong>Standard Patch Packs</strong> — general-purpose pothole and utility-cut repair on roads, lots, and driveways.</li>
                  <li><strong>Flex Patch Packs</strong> — formulated for bridge decks, expansion joints, and any surface that flexes under load.</li>
                </ul>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Patch Packs do not fix the underlying subgrade problem that caused the pothole — only a proper base rebuild does that. But they buy you the rest of the season to plan and budget the real repair, and they hold up far better than throwing cold mix from a bag.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Before You Overlay This Fall: Treat the Cracks With an Interlayer</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Here is the trap a lot of property owners fall into: spring breakup damages the surface, summer brings an overlay, the new asphalt looks great for a winter or two, and then the same cracks come right back through. That is <strong>reflective cracking</strong> — the underlying cracks &quot;telegraphing&quot; up through the fresh overlay because nothing was done to stop them.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  In a freeze-thaw climate this is especially destructive. Once a reflective crack opens, water gets in, and water in the base is exactly what starts the next freeze-thaw failure cycle. You are paying for an overlay and then funding its own destruction.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  A paving <Link href="/interlayers" className="text-[#00c97e] hover:text-[#00b36f] font-semibold">interlayer</Link> like Propex Petrotac is the standard answer. It is a self-adhesive membrane placed between the existing pavement and the new overlay. It does two things at once:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                  <li><strong>Stress relief</strong> — absorbs movement at joints and cracks so it does not transfer into the new overlay.</li>
                  <li><strong>Moisture barrier</strong> — blocks water from infiltrating the base, which is what feeds the next round of freeze-thaw damage.</li>
                </ul>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  We stock Petrotac in three widths so the roll matches the scope of the distress:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                  <li><Link href="/petrotac-1ft" className="text-[#00c97e] hover:text-[#00b36f] font-semibold">Petrotac 1ft (12 in)</Link> — individual transverse and longitudinal cracks, joints, and spot treatment. The most economical option for narrow distress.</li>
                  <li><Link href="/petrotac-15ft" className="text-[#00c97e] hover:text-[#00b36f] font-semibold">Petrotac 1.5ft (18 in)</Link> — wider cracks, expansion joints, and areas with parallel cracking that need a bit more overlap.</li>
                  <li><Link href="/petrotac-4ft" className="text-[#00c97e] hover:text-[#00b36f] font-semibold">Petrotac 4ft (48 in)</Link> — broad cracking patterns, lane-segment overlays, and large patch perimeters where a wider strip cuts roll count and seams. New width, in stock.</li>
                </ul>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  The 1ft is usually the right answer when an owner calls about &quot;crack sealing&quot; on a lot that is going to be overlaid later — Petrotac does more than a hot-pour crack seal because it also blocks moisture into the base. All three are sold at the supply house for contractors to install themselves.
                </p>

                <div className="bg-gray-50 border-l-4 border-[#00c97e] rounded p-5 mb-6">
                  <p className="text-gray-800 text-sm leading-relaxed m-0">
                    <strong>Looking for an install crew, not materials?</strong> Our sister company <a href="https://asphaltfabrics.com" target="_blank" rel="noopener noreferrer" className="text-[#00c97e] hover:text-[#00b36f] font-semibold">Asphalt Fabrics &amp; Specialties</a> is a separate Northern Ohio pavement install contractor. They run paving fabric installation, crack sealing, chip seal, and other pavement-protection services using their own product line — different scope from what we stock here at the supply house, same family, same region. If your project calls for a crew on the ground rather than rolls off the shelf, reach them at <a href="tel:4402496717" className="text-[#00c97e] hover:text-[#00b36f] font-semibold">(440) 249-6717</a>.
                  </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">The Three-Layer Strategy for Freeze-Thaw Climates</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Put it all together and Northern Ohio property owners and contractors have a repeatable playbook:
                </p>
                <ol className="list-decimal pl-6 mb-6 space-y-2 text-gray-700">
                  <li><strong>Right now (spring):</strong> Patch Packs on open potholes to stabilize the surface and stop further damage.</li>
                  <li><strong>Before fall overlay:</strong> Petrotac interlayer over existing cracks and joints so the new surface does not inherit them.</li>
                  <li><strong>When the section actually gets rebuilt:</strong> Geogrid (with a nonwoven separator) in the base so the next freeze-thaw cycle does not put you back in the same place.</li>
                </ol>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Each layer addresses a different piece of the freeze-thaw problem. Skipping one is usually what causes the same lot to keep failing.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">A Note on Verification</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  The frost-susceptibility classifications cited above come from the U.S. Army Corps of Engineers and are referenced in standard FHWA pavement design guidance. Site-specific soils information for any address in Northern Ohio is available through the USDA-NRCS <a href="https://websoilsurvey.nrcs.usda.gov/" target="_blank" rel="noopener noreferrer" className="text-[#00c97e] hover:text-[#00b36f] font-semibold">Web Soil Survey</a>. Geogrid product specifications follow ODOT Construction &amp; Material Specifications Item 712 and manufacturer datasheets — we can pull the relevant spec for any project on request.
                </p>

                <div className="bg-gray-50 border border-gray-200 rounded p-6 mt-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Building or Repairing After This Spring&apos;s Damage?</h3>
                  <p className="text-gray-700 mb-4">
                    We&apos;ll run an on-site DCP test on your subgrade, identify your soil&apos;s frost susceptibility, and design a geogrid + geotextile section that holds up through the next freeze-thaw cycle. No guesswork — engineered for Northern Ohio conditions.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Freeze-Thaw &amp; Geogrid FAQ</h2>
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
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/patch-packs" className="block p-6 bg-white rounded border border-gray-200 hover:border-[#00c97e] transition-colors text-left">
                <h3 className="font-bold text-gray-900 mb-2">Patch Packs</h3>
                <p className="text-gray-600 text-sm">Cold-applied pothole repair for spring breakup damage.</p>
              </Link>
              <Link href="/interlayers" className="block p-6 bg-white rounded border border-gray-200 hover:border-[#00c97e] transition-colors text-left">
                <h3 className="font-bold text-gray-900 mb-2">Petrotac Interlayer</h3>
                <p className="text-gray-600 text-sm">Stop reflective cracking and moisture infiltration before overlay.</p>
              </Link>
              <Link href="/blog/how-to-pass-a-proof-roll" className="block p-6 bg-white rounded border border-gray-200 hover:border-[#00c97e] transition-colors text-left">
                <h3 className="font-bold text-gray-900 mb-2">How to Pass a Proof Roll</h3>
                <p className="text-gray-600 text-sm">Aggregate thickness charts for weak subgrades.</p>
              </Link>
              <Link href="/nonwoven-fabrics" className="block p-6 bg-white rounded border border-gray-200 hover:border-[#00c97e] transition-colors text-left">
                <h3 className="font-bold text-gray-900 mb-2">Nonwoven Geotextiles</h3>
                <p className="text-gray-600 text-sm">Separation and filtration for frost-prone subgrades.</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
