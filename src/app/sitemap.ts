import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.lifemakers-mahalla.org'

  return [
    {
      url: `${baseUrl}/`,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/achievements`,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/campaigns`,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/cases`,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/volunteer`,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      priority: 0.5,
    },
  ]
}