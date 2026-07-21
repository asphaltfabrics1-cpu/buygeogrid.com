import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://buygeogrid.com'

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/geogrid`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/residential`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/woven-fabrics`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/nonwoven-fabrics`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/interlayers`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Geogrid Products
    {
      url: `${baseUrl}/geogrid/nx850`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/geogrid/nx750`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/geogrid/nx650`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/geogrid/tx190`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/geogrid/tx-type-2`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/geogrid/hx165`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/geogrid/hx145`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/geogrid/bx1200`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/geogrid/bx1300`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/geogrid/sq2020`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/geogrid/nxl`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Woven Fabrics
    {
      url: `${baseUrl}/500x`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/600x`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    // Non-Woven Fabrics
    {
      url: `${baseUrl}/135n`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/180n`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/140n`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    // Interlayers
    {
      url: `${baseUrl}/petrotac-1ft`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/petrotac-15ft`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/petrotac-4ft`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    // Problem-first landing pages (SEO — broader intent than SKU pages)
    {
      url: `${baseUrl}/soft-ground-solutions`,
      lastModified: new Date('2026-07-13'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/muddy-driveway-fix`,
      lastModified: new Date('2026-07-13'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/weak-subgrade`,
      lastModified: new Date('2026-07-13'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/potholes-keep-coming-back`,
      lastModified: new Date('2026-07-13'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/gravel-driveway-stabilization`,
      lastModified: new Date('2026-07-13'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    // Comparison pages
    {
      url: `${baseUrl}/geogrid-vs-geotextile`,
      lastModified: new Date('2026-07-13'),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/petrotac-vs-paving-fabric`,
      lastModified: new Date('2026-07-13'),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/nx850-vs-tx190`,
      lastModified: new Date('2026-07-13'),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    // Local + problem combos
    {
      url: `${baseUrl}/muddy-driveway-cleveland`,
      lastModified: new Date('2026-07-13'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/soft-earth-solutions-cleveland`,
      lastModified: new Date('2026-07-20'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/concrete-crack-sealing`,
      lastModified: new Date('2026-07-21'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date('2026-07-21'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/soft-ground-akron`,
      lastModified: new Date('2026-07-13'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/subgrade-stabilization-toledo`,
      lastModified: new Date('2026-07-13'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    // Blog
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/how-much-geogrid-for-a-driveway`,
      lastModified: new Date('2026-07-13'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/why-does-my-driveway-keep-sinking`,
      lastModified: new Date('2026-07-13'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/fix-soft-ground-without-excavating`,
      lastModified: new Date('2026-07-13'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/what-is-geogrid`,
      lastModified: new Date('2025-06-02'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/geogrid-vs-cement-stabilization`,
      lastModified: new Date('2025-06-16'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/geogrid-in-residential`,
      lastModified: new Date('2025-06-30'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/freeze-thaw-frost-heave-ohio`,
      lastModified: new Date('2026-05-11'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Other Pages
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]
}
