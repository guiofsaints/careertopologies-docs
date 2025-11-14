import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://careertopologies.com';
  const currentDate = new Date().toISOString();

  const routes = [
    '',
    '/about',
    '/manifesto',
    '/contributing',
    '/concepts',
    '/references',
    '/topologies',
    '/shapes',
    '/framework',
    '/framework/leveling',
    '/framework/progression',
    '/framework/guidelines',
    '/management',
    '/management/developing-leaders',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));
}
