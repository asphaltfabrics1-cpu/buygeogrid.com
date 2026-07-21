'use client';

import { usePathname } from 'next/navigation';
import Script from 'next/script';
import NewsletterPopup from './NewsletterPopup';

// Routes that should render CLEAN (no chatbot, no email popup).
// PPC landing pages need max conversion focus — no distractions.
const CLEAN_ROUTES = ['/concrete-crack-sealing', '/concrete-repair'];

export default function ConditionalWidgets() {
  const pathname = usePathname();
  const isClean = CLEAN_ROUTES.some((p) => pathname === p || pathname?.startsWith(p + '/'));

  if (isClean) return null;

  return (
    <>
      <Script
        src="https://dashboard.gideoncode.com/chat-widget.js"
        strategy="lazyOnload"
      />
      <NewsletterPopup />
    </>
  );
}
