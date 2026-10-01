import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/structured-data'
import { getAllArticles } from '@/lib/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/blog',
    '/gallery',
    '/contact',
    '/enquiry',
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
  }))

  const articleRoutes = getAllArticles().map((article) => ({
    url: `${SITE_URL}/blog/${article.slug}`,
    lastModified: new Date(article.publishedAt),
  }))

  return [...staticRoutes, ...articleRoutes]
}
