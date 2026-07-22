import Link from 'next/link';

const AFS_YELLOW = '#F5C518';

/**
 * Slim compliance footer for the ad landing page.
 * Google Ads requires: visible contact info, physical address, privacy policy link, transparent business identity.
 * No sitemap / product nav — that would leak paid traffic.
 */
export default function AFSFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111111] text-gray-400 text-sm">
      {/* Thin accent bar */}
      <div
        className="h-[3px] w-full"
        style={{ background: `repeating-linear-gradient(-45deg, ${AFS_YELLOW} 0 12px, #111111 12px 24px)` }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Left: business identity + address */}
          <div className="flex items-start md:items-center gap-3">
            <img
              src="/images/logos/logo-8.22.18.jpg"
              alt="Asphalt Fabrics & Specialties"
              className="h-8 w-auto bg-white p-1 rounded flex-shrink-0"
            />
            <div className="leading-snug">
              <div className="text-white font-semibold text-sm">
                Asphalt Fabrics &amp; Specialties
              </div>
              <div className="text-xs text-gray-500 leading-relaxed">
                7710 Bond Street, Glenwillow, OH 44139
                <br />
                Estimates &amp; project photos:{' '}
                <a href="tel:4403841897" className="hover:text-white transition-colors font-semibold">
                  (440) 384-1897
                </a>
                <br />
                Main office:{' '}
                <a href="tel:4407861077" className="hover:text-white transition-colors">
                  (440) 786-1077
                </a>
              </div>
            </div>
          </div>

          {/* Right: compliance links */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-gray-700">·</span>
            <a
              href="https://www.asphaltfabrics.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              asphaltfabrics.com
            </a>
            <span className="text-gray-700">·</span>
            <span>ODOT Certified · Bonded &amp; Insured</span>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-white/5 text-xs text-gray-600 flex flex-col md:flex-row md:items-center md:justify-between gap-1">
          <span>© {currentYear} Asphalt Fabrics &amp; Specialties. All rights reserved.</span>
          <span>
            Asphalt Fabrics &amp; Specialties operates{' '}
            <Link href="/" className="hover:text-gray-400 transition-colors underline decoration-gray-700 underline-offset-2">
              BuyGeogrid.com
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
