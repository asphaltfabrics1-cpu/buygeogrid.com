import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1a1a] text-white border-t-2 border-[#00c97e]">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="text-[#00c97e] text-xs font-semibold uppercase tracking-[0.2em] mb-3">Northern Ohio</div>
            <div className="text-2xl font-bold mb-1">BuyGeogrid.com</div>
            <div className="text-gray-400 text-sm mb-6">Asphalt Fabrics &amp; Supply</div>

            <div className="space-y-2 text-gray-300 text-sm leading-relaxed max-w-md">
              <p>7620 Bond Street, Glenwillow, OH 44139</p>
              <p>
                <Link href="tel:14403681420" className="hover:text-[#00c97e] transition-colors">
                  (440) 368-1420
                </Link>
              </p>
              <p>
                <Link href="mailto:jstone@asphaltfabrics.com" className="hover:text-[#00c97e] transition-colors">
                  jstone@asphaltfabrics.com
                </Link>
              </p>
            </div>

            <div className="mt-8 flex gap-3">
              <Link
                href="https://www.facebook.com/profile.php?id=61577581101649"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 flex items-center justify-center border border-white/20 rounded hover:border-[#00c97e] hover:bg-[#00c97e]/10 transition-colors"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/24/145/145802.png"
                  alt=""
                  className="h-4 opacity-80"
                />
              </Link>
              <Link
                href="https://www.linkedin.com/company/asphalt-fabrics-supply"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 flex items-center justify-center border border-white/20 rounded hover:border-[#00c97e] hover:bg-[#00c97e]/10 transition-colors"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/24/145/145807.png"
                  alt=""
                  className="h-4 opacity-80"
                />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="text-[#00c97e] text-xs font-semibold uppercase tracking-[0.2em] mb-4">Explore</div>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="text-gray-300 hover:text-[#00c97e] transition-colors">Home</Link></li>
              <li><Link href="/geogrid" className="text-gray-300 hover:text-[#00c97e] transition-colors">Geogrids</Link></li>
              <li><Link href="/woven-fabrics" className="text-gray-300 hover:text-[#00c97e] transition-colors">Woven Fabrics</Link></li>
              <li><Link href="/nonwoven-fabrics" className="text-gray-300 hover:text-[#00c97e] transition-colors">Non-Woven Fabrics</Link></li>
              <li><Link href="/interlayers" className="text-gray-300 hover:text-[#00c97e] transition-colors">Interlayers</Link></li>
              <li><Link href="/patch-packs" className="text-gray-300 hover:text-[#00c97e] transition-colors">Patch Packs</Link></li>
              <li><Link href="/cost-calculator" className="text-gray-300 hover:text-[#00c97e] transition-colors">Cost Calculator</Link></li>
              <li><Link href="/faq" className="text-gray-300 hover:text-[#00c97e] transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <div className="text-[#00c97e] text-xs font-semibold uppercase tracking-[0.2em] mb-4">Get in touch</div>
            <p className="text-gray-300 text-sm leading-relaxed mb-5">
              Call for a same-day quote or request a free on-site DCP test.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#00c97e] hover:bg-[#00b36f] text-white text-sm font-semibold rounded transition-colors group mb-4"
            >
              Request a Quote
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>

            <a
              href="/docs/asphalt-fabrics-supply-flyer.pdf"
              download
              className="flex items-center gap-2 text-gray-300 hover:text-[#00c97e] text-sm transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              Download capabilities flyer
            </a>
          </div>
        </div>

        {/* Sister-company note */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <p className="text-gray-400 text-sm leading-relaxed max-w-3xl">
            Need it installed? Our sister company{' '}
            <a href="https://asphaltfabrics.com" target="_blank" rel="noopener noreferrer" className="text-[#00c97e] hover:underline">
              Asphalt Fabrics &amp; Specialties
            </a>{' '}
            installs non-peel-and-stick paving fabric on parking lots and roads in Northern Ohio, plus crack sealing and chip sealing.
          </p>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <span>© {currentYear} BuyGeogrid.com — Asphalt Fabrics &amp; Supply. All rights reserved.</span>
          <a
            href="/admin"
            aria-label="Admin login"
            title="Admin login"
            rel="nofollow noopener"
            className="text-gray-600 hover:text-[#00c97e] transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
