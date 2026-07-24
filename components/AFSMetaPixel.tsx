import Script from 'next/script';

// Meta (Facebook) Pixel for the AFS Concrete Crack Sealing FB ad campaign.
// Scoped to the AFS landing page + thank-you page only (NOT site-wide).
// This is a SECOND pixel — the BuyGeogrid site-wide pixel (314192535267336)
// is already loaded via app/layout.tsx.
//
// IMPORTANT: because fbq is already initialized site-wide, we DO NOT re-run
// the FB base code IIFE (it short-circuits with `if(f.fbq)return`). Instead,
// we just add this pixel via fbq('init', ...) and fire events specifically
// to this pixel via fbq('trackSingle', ...) so the site-wide pixel isn't
// polluted with duplicate events.
const AFS_META_PIXEL_ID = '2475116883007778';

type Props = {
  /**
   * Optional Facebook standard event to fire in addition to PageView.
   * Use "Lead" on the thank-you page so FB Ads Manager can optimize
   * campaigns toward form completions.
   */
  event?: 'Lead' | 'Contact' | 'Purchase';
};

export default function AFSMetaPixel({ event }: Props) {
  const eventLine = event
    ? `window.fbq('trackSingle', '${AFS_META_PIXEL_ID}', '${event}');`
    : '';

  return (
    <>
      <Script id="afs-meta-pixel" strategy="afterInteractive">
        {`
          (function () {
            var tries = 0;
            function init() {
              if (typeof window.fbq === 'function') {
                window.fbq('init', '${AFS_META_PIXEL_ID}');
                window.fbq('trackSingle', '${AFS_META_PIXEL_ID}', 'PageView');
                ${eventLine}
              } else if (++tries < 40) {
                setTimeout(init, 100);
              } else if (typeof console !== 'undefined') {
                console.warn('[AFS Pixel] fbq not loaded — pixel ${AFS_META_PIXEL_ID} not initialized');
              }
            }
            init();
          })();
        `}
      </Script>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${AFS_META_PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}
