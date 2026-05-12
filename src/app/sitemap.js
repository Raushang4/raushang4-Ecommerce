import fs from 'fs';
import path from 'path';

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.raushang4.com';

  // Static routes
  const staticRoutes = [
    '',
    '/about',
    '/contact',
    '/our-work',
    '/blog',
    '/case-study',
    '/ecommerce-design-build',
    '/web-design',
    '/performance-marketing',
    '/cro-optimisation',
    '/analytics-attribution',
    '/seo-organic',
    '/shopify-development',
    '/woocommerce-development',
    '/wordpress-development',
    '/wordpress-care',
    '/wordpress-development-company-noida',
    '/d2c-ecommerce',
    '/manufacturers',
    '/service-businesses',
    '/stack',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic routes from content
  const contentDir = path.join(process.cwd(), 'src/content');
  const categories = ['blog', 'case-study', 'portfolio', 'careers', 'legal'];
  
  const dynamicRoutes = [];

  for (const category of categories) {
    const categoryPath = path.join(contentDir, category);
    if (fs.existsSync(categoryPath)) {
      const files = fs.readdirSync(categoryPath).filter(f => f.endsWith('.json'));
      for (const file of files) {
        const slug = file.replace('.json', '');
        // Special case for legal - usually /legal/[slug]
        // But for others like blog, it's /blog/[slug]
        const routePrefix = category === 'portfolio' ? 'portfolio' : category;
        
        dynamicRoutes.push({
          url: `${baseUrl}/${routePrefix}/${slug}`,
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.6,
        });
      }
    }
  }

  return [...staticRoutes, ...dynamicRoutes];
}
