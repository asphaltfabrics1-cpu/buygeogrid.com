'use client';

const AFS_YELLOW = '#F5C518';

// Sticky bottom bar for mobile — Call / Text / Assessment.
// Standard PPC landing-page pattern. Fires gtag conversion events on click.
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function fire(event: string) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', event, { event_category: 'engagement', event_label: 'sticky_bar' });
  }
}

export default function AFSStickyMobileBar() {
  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#1a1a1a] text-white border-t-2 shadow-2xl"
      style={{ borderColor: AFS_YELLOW }}
      role="navigation"
      aria-label="Contact actions"
    >
      <div className="grid grid-cols-3 divide-x divide-white/10">
        <a
          href="tel:4403841897"
          onClick={() => fire('sticky_call')}
          className="flex flex-col items-center justify-center gap-1 py-3 hover:bg-white/5 transition-colors"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" style={{ color: AFS_YELLOW }} aria-hidden="true">
            <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 00-1.02.24l-2.2 2.2a15.045 15.045 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1A11.36 11.36 0 018.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" />
          </svg>
          <span className="text-xs font-bold uppercase tracking-wider">Call</span>
        </a>
        <a
          href="sms:+14403841897"
          onClick={() => fire('sticky_text')}
          className="flex flex-col items-center justify-center gap-1 py-3 hover:bg-white/5 transition-colors"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" style={{ color: AFS_YELLOW }} aria-hidden="true">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
          </svg>
          <span className="text-xs font-bold uppercase tracking-wider">Text</span>
        </a>
        <a
          href="#assessment"
          onClick={() => fire('sticky_assessment')}
          className="flex flex-col items-center justify-center gap-1 py-3 font-bold text-[#1a1a1a] hover:opacity-90 transition-opacity"
          style={{ backgroundColor: AFS_YELLOW }}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-xs font-bold uppercase tracking-wider">Assess</span>
        </a>
      </div>
    </div>
  );
}
