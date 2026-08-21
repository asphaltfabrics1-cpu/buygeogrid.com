import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Geogrid & Soil Stabilization Tips',
  description: 'Expert geogrid and soil stabilization articles from Northern Ohio distributor. Tensar, Solmax tips and insights for Cleveland, Akron contractors.',
  keywords: ['Geogrid blog', 'soil stabilization tips', 'construction Ohio', 'Tensar articles', 'civil engineering blog'],
  alternates: {
    canonical: 'https://www.buygeogrid.com/blog',
  },
  openGraph: {
    title: 'Blog | Geogrid & Soil Stabilization Tips',
    description: 'Expert geogrid and soil stabilization articles from Northern Ohio distributor. Tensar, Solmax tips and insights for Cleveland, Akron contractors.',
    images: ['/images/tensar-geogrid-blog-northern-ohio.jpg'],
  }
};

export default function Blog() {
  const posts = [
    {
      title: 'Do You Have to Buy a Full Roll of Geogrid?',
      date: 'August 21, 2026',
      excerpt: 'A full roll of NX850 is overkill for a driveway or patio. We cut quarter and half rolls of Tensar geogrid for residential jobs across Northern Ohio — stocked in Glenwillow, OH.',
      url: '/blog/partial-rolls-of-geogrid',
    },
    {
      title: 'Freeze-Thaw & Frost Heave in Ohio: Geogrid, Patch Packs & Interlayer Playbook',
      date: 'May 11, 2026',
      excerpt: 'Why Northern Ohio pavements crack every spring, and the three-layer fix: Patch Packs for open potholes now, Petrotac interlayer before fall overlay, and geogrid when the section is rebuilt.',
      url: '/blog/freeze-thaw-frost-heave-ohio',
    },
    {
      title: 'How to Pass a Proof Roll: Geogrid & Aggregate Thickness Guide',
      date: 'April 29, 2026',
      excerpt: 'Failing a proof roll? Use this chart to determine the right geogrid and aggregate thickness based on your subgrade CBR. Includes cost savings examples.',
      url: '/blog/how-to-pass-a-proof-roll',
    },
    {
      title: 'DCP Testing & Tensar Plus: How They Work Together',
      date: 'April 16, 2026',
      excerpt: 'How Dynamic Cone Penetrometer testing feeds into Tensar Plus design software to engineer the right geogrid solution for your subgrade. ASTM D6951 explained.',
      url: '/blog/dcp-testing-tensar-plus',
    },
    {
      title: 'Patch Packs Cold Asphalt Patch: How It Works & When to Use It',
      date: 'April 16, 2026',
      excerpt: 'Everything you need to know about Patch Packs — what they are, Standard vs Flex variants, how to apply them, and why Ohio contractors rely on them year-round.',
      url: '/blog/patch-packs-cold-asphalt-repair',
    },
    {
      title: 'Tensar Geogrid: The Complete Guide',
      date: 'July 14, 2025',
      excerpt: 'A comprehensive guide to Tensar geogrid products, applications, and how they create mechanically stabilized layers for road and site construction.',
      url: '/blog/tensar-geogrid-complete-guide',
    },
    {
      title: 'Top 5 Uses for Tensar Geogrid in Residential Projects',
      date: 'June 30, 2025',
      excerpt: 'Explore the most common residential applications of Tensar Geogrid and why contractors prefer it.',
      url: '/blog/geogrid-in-residential',
    },
    {
      title: 'Geogrid vs Cement Stabilization: Which Is Better for Soil Reinforcement?',
      date: 'June 16, 2025',
      excerpt: 'Compare Geogrid vs cement stabilization: which is better for soil support, cost, and speed? Learn the pros and cons of each method.',
      url: '/blog/geogrid-vs-cement-stabilization',
    },
    {
      title: 'What is Geogrid? How It Works & When You Need It',
      date: 'June 2, 2025',
      excerpt: 'Discover what Geogrid is, how it stabilizes soil, and the key scenarios when using Geogrid makes a difference.',
      url: '/blog/what-is-geogrid',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <PageHero
          title="Build Smarter from the Ground Up"
          description="Explore our latest articles on Geogrid, paving fabrics, and real-world construction tips."
          ctaText="Contact Us"
          ctaLink="/contact"
          secondaryCtaText="Call (440) 368-1420"
          secondaryCtaLink="tel:4403681420"
        />

        {/* Blog Posts */}
        <section className="py-20 md:py-24 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-6">
              {posts.map((post, index) => (
                <Reveal key={index} delay={index * 60}>
                  <div className="bg-white rounded border border-gray-200 p-8 hover:border-[#00c97e] transition-colors duration-200">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900 leading-tight tracking-tight">
                      {post.title}
                    </h2>
                    <div className="text-sm text-gray-500 mb-4">{post.date}</div>
                    <p className="text-gray-700 mb-6 leading-relaxed">{post.excerpt}</p>
                    <Link
                      href={post.url}
                      className="inline-flex items-center gap-2 px-6 py-2 bg-[#00c97e] hover:bg-[#00b36f] text-white rounded font-semibold transition-colors duration-200 group"
                    >
                      Read More
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
