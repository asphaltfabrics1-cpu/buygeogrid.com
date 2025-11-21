import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Geogrid & Geotextile Blog Ohio | Soil Stabilization Tips | Construction Insights',
  description: 'Expert articles on Tensar geogrids, Solmax fabrics, and soil stabilization for Ohio construction projects. Real-world tips from Ohio civil engineering experts.',
  keywords: ['Geogrid blog', 'soil stabilization tips', 'construction Ohio', 'Tensar articles', 'civil engineering blog'],
  openGraph: {
    title: 'Blog - Build Smarter from the Ground Up | Ohio',
    description: 'Expert insights on Geogrids, geotextiles, and construction best practices.',
  }
};

export default function Blog() {
  const posts = [
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
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-6">
              {posts.map((post, index) => (
                <div
                  key={index}
                  className={`bg-white rounded border p-8 hover:border-[#00c97e] transition-colors duration-200 ${
                    post.featured ? 'border-orange-400 border-2 bg-orange-50/30' : 'border-gray-200'
                  }`}
                >
                  {post.featured && (
                    <div className="mb-3">
                      <span className="inline-block bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                        🎃 HALLOWEEN SPECIAL
                      </span>
                    </div>
                  )}
                  <h2 className="text-2xl font-bold mb-2 text-gray-900">
                    {post.title}
                  </h2>
                  <div className="text-sm text-gray-500 mb-4">{post.date}</div>
                  <p className="text-gray-700 mb-6 leading-relaxed">{post.excerpt}</p>
                  <Link
                    href={post.url}
                    className="inline-flex items-center px-6 py-2 bg-[#00c97e] hover:bg-[#00b36f] text-white rounded font-semibold transition-colors duration-200"
                  >
                    Read More
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
