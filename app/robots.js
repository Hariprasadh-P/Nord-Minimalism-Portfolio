export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://nordmediahouse.com/sitemap.xml',
    host: 'https://nordmediahouse.com',
  };
}
