// Function to fetch all user IDs
async function getAllUserIds() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    return users.map((user: { id: number }) => user.id);
  } catch (error) {
    console.error('Error fetching user IDs:', error);
    return [];
  }
}

export async function GET(req: Request) {
  const baseUrl = `https://${
    req.headers.get("host") || req.headers.get("x-forwarded-host") || 'localhost:3000'
  }`;

  // Get all user IDs
  const userIds = await getAllUserIds();

  // Define your static routes and their metadata
  const staticRoutes = [
    {
      url: '',  // homepage
      lastmod: new Date().toISOString(),
      changefreq: 'daily',
      priority: 1.0
    },
    {
      url: 'register',
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: 0.8
    },
    {
      url: 'user',
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: 0.8
    }
  ];

  // Create dynamic user routes
  const dynamicUserRoutes = userIds.map((id:string|number) => ({
    url: `user/${id}`,
    lastmod: new Date().toISOString(),
    changefreq: 'weekly',
    priority: 0.6
  }));

  // Combine static and dynamic routes
  const allRoutes = [...staticRoutes, ...dynamicUserRoutes];

  const sitemap = [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...allRoutes.map(({ url, lastmod, changefreq, priority }) => {
      return `
        <url>
          <loc>${baseUrl}${url ? `/${url}` : ''}</loc>
          <lastmod>${lastmod}</lastmod>
          <changefreq>${changefreq}</changefreq>
          <priority>${priority}</priority>
        </url>
      `.trim();
    }),
    `</urlset>`
  ].join('\n');

  return new Response(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600'
    },
  });
}