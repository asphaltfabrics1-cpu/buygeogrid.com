import Link from 'next/link';

const AFS_YELLOW = '#F5C518';

/**
 * Slim sticky landing-page header — Google Ads best practice.
 * No nav (kills leaks). Just: logo + phone. Always visible on scroll.
 */
export default function AFSHeader() {
  return (
    <header className="sticky top-0 z-40 bg-[#1a1a1a] text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between gap-3 h-14 md:h-16">
          {/* Logo */}
          <Link
            href="/concrete-crack-sealing"
            className="flex-shrink-0 flex items-center"
            aria-label="Asphalt Fabrics & Specialties — Concrete Repair"
          >
            <img
              src="/images/logos/logo-8.22.18.jpg"
              alt="Asphalt Fabrics & Specialties"
              className="h-9 md:h-10 w-auto bg-white p-1 rounded"
            />
          </Link>

          {/* Middle tagline — hidden on mobile, fills desktop space */}
          <div className="hidden lg:flex items-center gap-2 text-xs uppercase tracking-widest text-gray-300 font-semibold">
            <span>Free 24-hr Assessments</span>
            <span style={{ color: AFS_YELLOW }}>·</span>
            <span>Northeast Ohio</span>
            <span style={{ color: AFS_YELLOW }}>·</span>
            <span>Since 2003</span>
          </div>

          {/* Phone CTA — always visible */}
          <Link
            href="tel:4403841897"
            className="inline-flex items-center gap-2 px-3 md:px-4 py-2 md:py-2.5 text-sm md:text-base font-bold rounded transition-opacity duration-200 whitespace-nowrap hover:opacity-90"
            style={{ backgroundColor: AFS_YELLOW, color: '#1a1a1a' }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 00-1.02.24l-2.2 2.2a15.045 15.045 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1A11.36 11.36 0 018.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" />
            </svg>
            (440) 384-1897
          </Link>
        </div>
      </div>

      {/* Thin construction-stripe accent — subtle, no extra height cost */}
      <div
        className="h-[3px] w-full"
        style={{ background: `repeating-linear-gradient(-45deg, ${AFS_YELLOW} 0 12px, #1a1a1a 12px 24px)` }}
        aria-hidden="true"
      />
    </header>
  );
}
