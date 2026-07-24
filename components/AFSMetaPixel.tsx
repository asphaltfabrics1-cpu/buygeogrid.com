// Meta (Facebook) Pixel for the AFS Concrete Crack Sealing FB ad campaign.
// Scoped to the AFS landing page + thank-you page only (NOT site-wide).
// This is a SECOND pixel — the BuyGeogrid site-wide pixel (314192535267336)
// is already loaded via app/layout.tsx.
//
// IMPORTANT (bug discovered live):
// - We CANNOT re-run the FB base code IIFE because it short-circuits with
//   `if(f.fbq)return` when fbq is already loaded site-wide.
// - We CANNOT use next/script with inline children for this — headless-browser
//   testing revealed the inline content wasn't executing reliably in the app
//   router even though the tag was present with data-nscript="afterInteractive".
// - We use a raw <script dangerouslySetInnerHTML> tag which the browser runs
//   as a normal synchronous inline script — bulletproof.
//
// The pixel adds itself to the already-loaded fbq via fbq('init', ...) and
// fires events specifically to this pixel via fbq('trackSingle', ...) so the
// BuyGeogrid pixel isn't polluted with duplicate PageView/Lead events.
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

  const code = `
(function () {
  console.log('[AFSPixel] script tag executing');
  var tries = 0;
  function init() {
    if (typeof window.fbq === 'function') {
      console.log('[AFSPixel] fbq detected, calling init + PageView for ${AFS_META_PIXEL_ID}');
      window.fbq('init', '${AFS_META_PIXEL_ID}');
      window.fbq('trackSingle', '${AFS_META_PIXEL_ID}', 'PageView');
      ${eventLine ? `console.log('[AFSPixel] firing extra event: ${event}'); ${eventLine}` : ''}
      console.log('[AFSPixel] after calls, fbq.instance.pixelsByID:', Object.keys((window.fbq.instance || {}).pixelsByID || {}));
    } else if (++tries < 40) {
      setTimeout(init, 100);
    } else {
      console.warn('[AFSPixel] fbq never appeared, giving up');
    }
  }
  init();
})();
  `.trim();

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: code }} />
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
