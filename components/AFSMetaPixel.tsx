// Meta (Facebook) Pixel for the AFS Concrete Crack Sealing FB ad campaign.
// Scoped to the AFS landing page + thank-you page only (NOT site-wide).
//
// Uses the FULL Meta base code IIFE (Meta's canonical snippet). This is safe
// because SiteMetaPixel.tsx is configured to SKIP the /concrete-crack-sealing
// route, so no fbq conflict — this pixel gets a clean slate.
//
// Two attempts to use fbq('trackSingle') to share the site-wide pixel both
// failed — Meta silently rejected the second pixel init when the site-wide
// pixel was already running. The reliable solution is to load ONE pixel per
// page: BuyGeogrid pixel site-wide, AFS pixel on the AFS landing pages.
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
  const eventLine = event ? `fbq('track', '${event}');` : '';

  const code = `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${AFS_META_PIXEL_ID}');
fbq('track', 'PageView');
${eventLine}
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
