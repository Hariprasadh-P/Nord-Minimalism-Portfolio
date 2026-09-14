import "./globals.css";
import CookieConsent from "./components/CookieConsent";

export const metadata = {
  metadataBase: new URL('https://nordmediahouse.com'),
  title: {
    default: "Nord Media House | Directional Creative Studio — Reels & Branding",
    template: "%s | Nord Media House",
  },
  description: "Scandinavian minimalist creative studio engineering viral short-form reels, bespoke brand identity, 4K culinary photography, and high-performance Meta Ads campaigns.",
  keywords: [
    "Nord Media House",
    "Reels Production",
    "Short-Form Video Agency",
    "Creative Studio",
    "Commercial Photography",
    "4K Food Photography",
    "Meta Ads",
    "Brand Identity",
    "Scandinavian Design"
  ],
  authors: [{ name: "Nord Media House", url: "https://nordmediahouse.com" }],
  creator: "Nord Media House",
  publisher: "Nord Media House",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Nord Media House | Directional Creative Studio",
    description: "Scandinavian visual restraint meets high-octane social strategy. Engineering viral short-form reels and 4K commercial stills.",
    url: "https://nordmediahouse.com",
    siteName: "Nord Media House",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nord Media House | Directional Creative Studio",
    description: "Scandinavian visual restraint meets high-octane social strategy. Engineering viral short-form reels and 4K commercial stills.",
    creator: "@nordmediahouse",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.svg',
  },
  manifest: '/manifest.webmanifest',
};

// JSON-LD Structured Schema Data for SEO Rich Snippets
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Nord Media House',
  image: 'https://nordmediahouse.com/icon.svg',
  description: 'Scandinavian minimalist creative studio engineering viral short-form reels, bespoke brand identity, 4K culinary photography, and high-performance Meta Ads campaigns.',
  url: 'https://nordmediahouse.com',
  telephone: '+919944686411',
  priceRange: '₹35,000 - ₹95,000',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Coimbatore',
    addressRegion: 'Tamil Nadu',
    addressCountry: 'IN',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '09:00',
    closes: '19:00',
  },
  sameAs: [
    'https://instagram.com/nordmediahouse',
    'https://linkedin.com/company/nordmediahouse',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#FAF8FF] text-[#1F1929] selection:bg-[#8B7CA8] selection:text-white antialiased">
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
