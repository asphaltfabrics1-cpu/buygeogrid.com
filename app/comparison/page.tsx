import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BuyGeogrid.com Website Redesign - Before & After',
  description: 'See how the new website transforms customer experience, increases sales, and protects the business',
  robots: {
    index: false,
    follow: false,
  },
};

export default function ComparisonPage() {
  const comparisons = [
    {
      title: 'Homepage',
      oldImage: '/screenshots/old-home.png',
      newImage: '/screenshots/new-home.png',
      changes: [
        'OLD: Unclear messaging, customers confused about what you sell → NEW: Clear hero section explaining products immediately',
        'OLD: Text cramped and hard to read → NEW: Professional spacing makes info easy to scan',
        'OLD: Generic black/white look → NEW: Green branding that stands out',
        'OLD: Broken layout on phones, unreadable → NEW: Perfect on all devices (phone, tablet, computer)',
        'OLD: Slow loading made customers leave → NEW: Loads 3x faster, customers stay',
      ],
    },
    {
      title: 'Products Page (NX850 Geogrid)',
      oldImage: '/screenshots/old-products.png',
      newImage: '/screenshots/new-products.png',
      changes: [
        'OLD: Hard to find product details → NEW: Clear product hero with all key info upfront',
        'OLD: Long paragraphs customers skipped → NEW: Easy-to-scan card format with bullet points',
        'OLD: Customers had to email for spec sheets → NEW: Instant download button for specs',
        'OLD: Free DCP testing hidden in fine print → NEW: Big callout box so customers see this valuable offer',
        'OLD: Menu broken on phones → NEW: Mobile menu works perfectly',
      ],
    },
    {
      title: 'Interlayers Page',
      oldImage: '/screenshots/old-interlayers.png',
      newImage: '/screenshots/new-interlayers.png',
      changes: [
        'OLD: Products listed in confusing order → NEW: Clear grid showing all options at once',
        'OLD: Customers confused which size to buy → NEW: Clear labels showing 1ft vs 1.5ft options',
        'OLD: Features buried in paragraphs → NEW: Highlighted feature boxes customers actually read',
        'OLD: Call-to-action buttons easy to miss → NEW: Prominent CTAs that drive quote requests',
        'OLD: Not showing up in Google searches → NEW: Optimized to rank for "interlayer" searches',
      ],
    },
    {
      title: 'Contact Page',
      oldImage: '/screenshots/old-contact.png',
      newImage: '/screenshots/new-contact.png',
      changes: [
        'OLD: Long complicated form scared customers away → NEW: Simple streamlined form increases submissions',
        'OLD: No way to request Lunch & Learn → NEW: Dedicated option to book your educational program',
        'OLD: Form looked unprofessional → NEW: Clean professional design builds trust',
        'OLD: Contact info hard to find → NEW: Phone and email prominently displayed',
        'OLD: Form fields too small on phones → NEW: Large touch-friendly inputs for mobile',
      ],
    },
  ];

  const newFeatures = [
    {
      title: 'AI-Powered Customer Support Chatbot',
      image: '/screenshots/new-home-chatbot.png',
      description: 'Intelligent AI assistant powered by Gideon AI that answers customer questions 24/7 about products, applications, and technical specifications.',
      highlights: [
        'Instant answers about geogrids and geotextiles',
        'Product recommendations based on project needs',
        'Explains DCP testing and other services',
        'Available 24/7 - never miss a customer inquiry',
        'Learns from your business knowledge base',
        'Reduces phone calls for basic questions',
      ],
    },
    {
      title: 'Lunch & Learn Program Page',
      image: '/screenshots/new-lunch-learn.png',
      description: 'Brand new educational program page with video integration, detailed program information, and interactive registration form.',
      highlights: [
        'Embedded YouTube video presentation',
        'VideoObject schema for SEO',
        'Professional program overview',
        'Easy registration flow',
        'Mobile-optimized layout',
      ],
    },
    {
      title: 'Interactive Gallery',
      image: '/screenshots/new-gallery.png',
      description: 'New project showcase gallery with modern lightbox functionality and mobile swipe support.',
      highlights: [
        'Click-to-expand lightbox viewer',
        'Mobile swipe navigation',
        'Keyboard navigation support',
        'Project descriptions and locations',
      ],
    },
  ];

  const technicalImprovements = [
    {
      category: 'What This Means for Your Business',
      items: [
        'Professional, modern website that builds customer trust',
        'Significantly faster page loading = fewer customers leaving',
        'Mobile-friendly on all phones and tablets',
        'Easy to update and add new products',
      ],
    },
    {
      category: 'How Customers Will Find You',
      items: [
        'Better Google search rankings for Cleveland, Akron, Toledo',
        'Professional appearance when shared on Facebook/LinkedIn',
        'All 28+ pages properly listed in Google',
        'Customers searching locally will find you easier',
        'Detailed product info shows up in search results',
      ],
    },
    {
      category: 'Legal Protection',
      items: [
        'All product claims reviewed for legal compliance',
        'Language updated to avoid liability ("could help" vs "prevents")',
        'Reduces risk of customer disputes about product performance',
        'Professional, defensible marketing language',
      ],
    },
    {
      category: 'Better Customer Experience',
      items: [
        'Works perfectly on phones, tablets, and computers',
        'Pages load 3x faster than old site',
        'Easy-to-use navigation and forms',
        'Professional look that matches your competitors',
        'Interactive photo galleries and video',
      ],
    },
    {
      category: 'New Business Opportunities',
      items: [
        'Lunch & Learn program to attract contractors',
        'Project gallery to showcase your work',
        'Blog to demonstrate expertise',
        '28+ optimized pages vs basic Squarespace site',
        'Room to grow without platform limitations',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            BuyGeogrid.com: Website Evolution
          </h1>
          <p className="text-2xl text-gray-300 mb-4">
            From Squarespace to Custom-Built Platform
          </p>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            See the improvements: faster performance, new features, better mobile experience, and significant cost savings
          </p>
        </div>
      </header>

      {/* Upgrade Benefits Section */}
      <section className="py-16 px-6 bg-blue-50 border-y-4 border-blue-600">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center text-blue-900">What We've Upgraded</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white border-2 border-blue-500 rounded-lg p-6 shadow-lg">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Performance & Reach</h3>
              <ul className="space-y-2 text-gray-800">
                <li className="flex items-start"><span className="text-blue-600 mr-2">→</span><span>3x faster page loading keeps customers engaged</span></li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">→</span><span>Perfect mobile experience on all devices</span></li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">→</span><span>Better Google rankings for local searches</span></li>
              </ul>
            </div>
            <div className="bg-white border-2 border-blue-500 rounded-lg p-6 shadow-lg">
              <div className="text-5xl mb-4">💡</div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">New Capabilities</h3>
              <ul className="space-y-2 text-gray-800">
                <li className="flex items-start"><span className="text-blue-600 mr-2">→</span><span>AI chatbot answers customer questions 24/7</span></li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">→</span><span>Lunch & Learn program page with video</span></li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">→</span><span>Interactive project gallery showcase</span></li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">→</span><span>Unlimited customization - no template limits</span></li>
              </ul>
            </div>
            <div className="bg-white border-2 border-blue-500 rounded-lg p-6 shadow-lg">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Cost Savings & Control</h3>
              <ul className="space-y-2 text-gray-800">
                <li className="flex items-start"><span className="text-blue-600 mr-2">→</span><span>FREE hosting on Vercel (vs $200+/year Squarespace)</span></li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">→</span><span>You own all the files - fully downloadable</span></li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">→</span><span>No platform fees or locked-in pricing</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Improvements Overview */}
      <section className="py-16 px-6 bg-green-50 border-y-4 border-green-600">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center text-green-900">Key Improvements at a Glance</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white border-2 border-green-500 rounded-lg p-6 shadow-lg text-center">
              <div className="text-5xl font-bold text-green-600 mb-2">3x</div>
              <div className="text-xl font-semibold text-gray-900">Faster</div>
              <div className="text-sm text-gray-600 mt-2">Optimized page loading</div>
            </div>
            <div className="bg-white border-2 border-green-500 rounded-lg p-6 shadow-lg text-center">
              <div className="text-5xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-xl font-semibold text-gray-900">Mobile</div>
              <div className="text-sm text-gray-600 mt-2">Responsive on all devices</div>
            </div>
            <div className="bg-white border-2 border-green-500 rounded-lg p-6 shadow-lg text-center">
              <div className="text-5xl font-bold text-green-600 mb-2">$0</div>
              <div className="text-xl font-semibold text-gray-900">Hosting</div>
              <div className="text-sm text-gray-600 mt-2">Free Vercel platform</div>
            </div>
            <div className="bg-white border-2 border-green-500 rounded-lg p-6 shadow-lg text-center">
              <div className="text-5xl font-bold text-green-600 mb-2">28+</div>
              <div className="text-xl font-semibold text-gray-900">Pages</div>
              <div className="text-sm text-gray-600 mt-2">vs basic template</div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Comparisons */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">See the Upgrade: Squarespace vs Custom Build</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">Side-by-side comparison showing the evolution from template-based to custom-built platform</p>

          {comparisons.map((comparison, index) => (
            <div key={index} className="mb-16">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{comparison.title}</h3>

              <div className="grid lg:grid-cols-2 gap-6 mb-6 items-start">
                {/* Before */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="bg-red-600 text-white px-4 py-2 font-semibold">
                    BEFORE (Squarespace)
                  </div>
                  <img
                    src={comparison.oldImage}
                    alt={`Old ${comparison.title}`}
                    className="w-full"
                  />
                </div>

                {/* After */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="bg-green-600 text-white px-4 py-2 font-semibold">
                    AFTER (Next.js)
                  </div>
                  <img
                    src={comparison.newImage}
                    alt={`New ${comparison.title}`}
                    className="w-full"
                  />
                </div>
              </div>

              {/* Changes List */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
                <h4 className="font-bold text-lg mb-3 text-gray-900">What's Different:</h4>
                <ul className="space-y-2">
                  {comparison.changes.map((change, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-600 mr-2">→</span>
                      <span className="text-gray-700">{change}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* New Features */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Brand New Features</h2>

          {newFeatures.map((feature, index) => (
            <div key={index} className="mb-12">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{feature.title}</h3>

              <div className="grid lg:grid-cols-2 gap-6 items-start">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="bg-green-600 text-white px-4 py-2 font-semibold">
                    NEW FEATURE
                  </div>
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full"
                  />
                </div>

                <div>
                  <p className="text-gray-700 mb-4 text-lg">{feature.description}</p>
                  <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded">
                    <h4 className="font-bold text-lg mb-3 text-gray-900">Feature Highlights:</h4>
                    <ul className="space-y-2">
                      {feature.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-green-600 mr-2">★</span>
                          <span className="text-gray-700">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Business Benefits */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">What This Upgrade Means for Your Business</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {technicalImprovements.map((section, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900 border-b-2 border-gray-200 pb-2">
                  {section.category}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-green-600 mr-2 mt-1">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            Website redesign and development by Joshua Stone
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Built with Next.js 16, React 19, TypeScript, and Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}
