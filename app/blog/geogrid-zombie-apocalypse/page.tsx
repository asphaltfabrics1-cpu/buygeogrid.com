import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Geogrid: So Easy, Even Zombies Can Install It! | Halloween Fun from Ohio',
  description: 'Happy Halloween from BuyGeogrid.com! Discover why Tensar Geogrid is so easy to install, even the undead can do it. Plus, learn how Geogrid holds back more than just soft soil. Serving Northern Ohio with a sense of humor!',
  keywords: ['Geogrid installation', 'easy installation', 'Tensar Geogrid Ohio', 'Halloween Geogrid', 'Geogrid humor', 'Cleveland Geogrid', 'DIY Geogrid'],
  openGraph: {
    title: 'Geogrid: So Easy, Even Zombies Can Install It! | Halloween 2025',
    description: 'Happy Halloween! Learn why Geogrid installation is easier than you think. From the undead crew at BuyGeogrid.com.',
    images: ['/images/zombie-geogrid-installation.jpeg'],
  },
};

export default function GeogridZombieApocalypse() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <span className="inline-block bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                🎃 HALLOWEEN SPECIAL 🎃
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Geogrid Installation: So Easy, Even Zombies Can Do It!
              </h1>
              <div className="text-gray-300 text-lg mb-6">
                October 31, 2025 | Happy Halloween from BuyGeogrid.com
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <article className="py-16 px-6">
          <div className="max-w-4xl mx-auto prose prose-lg">

            {/* Opening Image */}
            <div className="mb-12">
              <img
                src="/images/zombie-geogrid-installation.jpeg"
                alt="Zombies installing Tensar Geogrid - so easy even the undead can do it"
                className="w-full rounded-lg shadow-2xl"
              />
              <p className="text-center text-gray-600 text-sm mt-4 italic">
                "Geogrid!!! So Easy to Install, Zombie's Can Do It!!"
              </p>
            </div>

            {/* Article Content */}
            <div className="space-y-6 text-gray-800">
              <p className="text-xl font-semibold text-gray-900">
                Happy Halloween from your friends at Asphalt Fabrics &amp; Supply! 🎃
              </p>

              <p>
                We know what you&apos;re thinking: "Is Geogrid installation really <em>that</em> easy?"
                Well, let us put it this way—if a crew of brain-hungry zombies fresh from the graveyard
                can figure it out, so can you!
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                Why Geogrid Installation Is Shockingly Simple
              </h2>

              <p>
                Whether you&apos;re a seasoned contractor or a DIY homeowner building a driveway,
                Tensar Geogrid installation doesn&apos;t require supernatural powers. Here&apos;s why:
              </p>

              <div className="bg-green-50 border-l-4 border-[#00c97e] p-6 my-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Dead-Simple Installation Steps:</h3>
                <ol className="space-y-3 text-gray-700">
                  <li><strong>1. Prepare Your Base:</strong> Level and compact your subgrade (zombies prefer soft soil, but you shouldn&apos;t).</li>
                  <li><strong>2. Roll Out the Geogrid:</strong> Unroll Tensar Geogrid directly onto the prepared surface.</li>
                  <li><strong>3. Overlap & Secure:</strong> Overlap edges by 12 inches and pin or stake as needed.</li>
                  <li><strong>4. Add Your Aggregate:</strong> Place and compact aggregate on top—the Geogrid locks it in place.</li>
                  <li><strong>5. Done!</strong> You just reinforced your soil like a pro (or an undead construction crew).</li>
                </ol>
              </div>

              <p>
                No special tools. No PhD in civil engineering. No pulse required. Just basic
                equipment and the will to create a stable, long-lasting base.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
                But Wait—Geogrid Has Other Uses Than Soft Soils!
              </h2>

              {/* Second Image */}
              <div className="my-12">
                <img
                  src="/images/geogrid-holds-back-undead.jpeg"
                  alt="Geogrid holds back the cursed undead - stronger than you think"
                  className="w-full rounded-lg shadow-2xl"
                />
                <p className="text-center text-gray-600 text-sm mt-4 italic">
                  "Geogrid has other uses than soft soils. It can also hold back the cursed UNDEAD!"
                </p>
              </div>

              <p className="text-xl font-semibold text-gray-900">
                That&apos;s right—Geogrid doesn&apos;t just stabilize driveways and parking lots.
                It&apos;s also the <em>only</em> proven method for keeping zombies from clawing their
                way out of the ground!*
              </p>

              <div className="bg-gray-100 border-2 border-gray-300 rounded-lg p-6 my-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Real-World Applications (No Zombies Required):
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ <strong>Retaining Walls:</strong> Keep soil (and the undead) firmly in place</li>
                  <li>✓ <strong>Driveways &amp; Patios:</strong> Prevent cracking and settling</li>
                  <li>✓ <strong>Parking Lots:</strong> Extend pavement life by 2-3x</li>
                  <li>✓ <strong>Walkways &amp; Paths:</strong> Stop erosion before it starts</li>
                  <li>✓ <strong>Shed &amp; Deck Foundations:</strong> Solid support for any structure</li>
                  <li>✓ <strong>Cemetery Containment:</strong> For when you <em>really</em> need to keep things underground*</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
                Why Northern Ohio Trusts BuyGeogrid.com
              </h2>

              <p>
                We serve contractors, engineers, and homeowners across Cleveland, Akron, Toledo,
                Youngstown, and all of Northern Ohio with:
              </p>

              <ul className="space-y-2 text-gray-700 my-6">
                <li>✓ <strong>Authorized Tensar Distributor:</strong> Genuine products, expert support</li>
                <li>✓ <strong>Free DCP Testing:</strong> We&apos;ll analyze your soil (living or undead)</li>
                <li>✓ <strong>Competitive Pricing:</strong> Get the best value without selling your soul</li>
                <li>✓ <strong>Fast Delivery:</strong> Because nobody has time for a zombie uprising</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
                Ready to Get Started? (Before the Dead Rise?)
              </h2>

              <p>
                Whether you&apos;re building a driveway, reinforcing a retaining wall, or just preparing
                for the inevitable zombie apocalypse, we&apos;ve got the Geogrid solutions you need.
              </p>

              <div className="bg-orange-50 border-2 border-orange-400 rounded-lg p-8 my-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Don&apos;t Let Your Project Rise from the Dead!
                </h3>
                <p className="text-gray-700 mb-6">
                  Get expert advice and competitive pricing on Tensar Geogrids before it&apos;s too late.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-[#00c97e] hover:bg-[#00b36f] rounded transition-colors duration-200"
                  >
                    Request a Quote
                  </Link>
                  <Link
                    href="tel:4403681420"
                    className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-gray-900 bg-white hover:bg-gray-100 border-2 border-gray-900 rounded transition-colors duration-200"
                  >
                    Call (440) 368-1420
                  </Link>
                </div>
              </div>

              <div className="border-t border-gray-300 pt-8 mt-12 text-sm text-gray-600">
                <p className="italic">
                  *Disclaimer: While Tensar Geogrid is proven to stabilize soil, prevent erosion,
                  and extend pavement life, its effectiveness against actual zombies has not been
                  scientifically verified. Use at your own risk during apocalyptic scenarios.
                  Asphalt Fabrics &amp; Supply is not responsible for zombie-related incidents,
                  though we&apos;re pretty sure it would work. 🧟‍♂️
                </p>
                <p className="mt-4">
                  Happy Halloween from everyone at BuyGeogrid.com! Stay safe, stay spooky, and
                  remember—proper soil stabilization is no joke (even if zombies are). 🎃
                </p>
              </div>

            </div>

            {/* Related Links */}
            <div className="mt-12 pt-8 border-t border-gray-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Want to Learn More? (Non-Zombie Edition)</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Link
                  href="/blog/geogrid-in-residential"
                  className="block p-4 bg-gray-50 hover:bg-gray-100 rounded border border-gray-200 transition-colors"
                >
                  <div className="font-semibold text-gray-900">Top 5 Residential Uses for Geogrid</div>
                  <div className="text-sm text-gray-600 mt-1">Real applications for real projects</div>
                </Link>
                <Link
                  href="/blog/what-is-geogrid"
                  className="block p-4 bg-gray-50 hover:bg-gray-100 rounded border border-gray-200 transition-colors"
                >
                  <div className="font-semibold text-gray-900">What Is Geogrid?</div>
                  <div className="text-sm text-gray-600 mt-1">The complete guide to soil reinforcement</div>
                </Link>
              </div>
            </div>

          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
