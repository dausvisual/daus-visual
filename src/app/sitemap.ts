import { MetadataRoute } from 'next'
import { portfolioData } from '@/lib/data'

export default function sitemap(): MetadataRoute.Sitemap {
  // Ganti dengan URL domain asli Anda jika berbeda
  const baseUrl = 'https://dausvisual.com'

  const portfolioUrls = portfolioData.map((project) => ({
    url: `${baseUrl}/portfolio/${project.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...portfolioUrls,
  ]
}
