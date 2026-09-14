export default function manifest() {
  return {
    name: 'Nord Media House — Directional Creative Studio',
    short_name: 'Nord Media',
    description: 'Scandinavian minimalist creative studio engineering viral short-form reels, bespoke brand identity, and high-performance Meta Ads campaigns.',
    start_url: '/',
    display: 'standalone',
    background_color: '#FAF8FF',
    theme_color: '#1F1929',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
