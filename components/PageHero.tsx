import Link from 'next/link';

interface PageHeroProps {
  title: string;
  description: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  badge?: string;
  image?: string;
  imageAlt?: string;
  logo?: string;
  logoLink?: string;
  logoAlt?: string;
}

export default function PageHero({
  title,
  description,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  badge,
  image,
  imageAlt,
  logo,
  logoLink,
  logoAlt,
}: PageHeroProps) {
  const hasRightColumn = image || logo;

  return (
    <section className="relative bg-[#1a1a1a] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className={hasRightColumn ? "grid md:grid-cols-2 gap-12 items-center" : ""}>
          <div className={hasRightColumn ? "" : "max-w-3xl"}>
            {badge && (
              <div className="inline-block bg-[#00c97e] text-white px-4 py-2 rounded text-sm font-semibold mb-4">
                {badge}
              </div>
            )}
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              {title}
            </h1>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              {description}
            </p>
            {(ctaText || secondaryCtaText) && (
              <div className="flex flex-col sm:flex-row gap-4">
                {ctaText && ctaLink && (
                  <Link
                    href={ctaLink}
                    className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-[#00c97e] hover:bg-[#00b36f] rounded transition-colors duration-200"
                  >
                    {ctaText}
                  </Link>
                )}
                {secondaryCtaText && secondaryCtaLink && (
                  <Link
                    href={secondaryCtaLink}
                    className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white border-2 border-white/30 hover:border-white/50 rounded transition-colors duration-200"
                    download={secondaryCtaLink.endsWith('.pdf')}
                  >
                    {secondaryCtaText}
                  </Link>
                )}
              </div>
            )}
          </div>
          {image && (
            <div className="flex justify-center items-start">
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <img
                  src={image}
                  alt={imageAlt || title}
                  className="w-full max-w-md h-auto max-h-[280px] object-contain"
                />
              </div>
            </div>
          )}
          {logo && !image && (
            <div className="flex justify-center items-center">
              {logoLink ? (
                <Link href={logoLink} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                  <img
                    src={logo}
                    alt={logoAlt || 'Company Logo'}
                    className="w-full max-w-sm h-auto"
                  />
                </Link>
              ) : (
                <img
                  src={logo}
                  alt={logoAlt || 'Company Logo'}
                  className="w-full max-w-sm h-auto"
                />
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
