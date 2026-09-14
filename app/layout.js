import "./globals.css";
import CookieConsent from "./components/CookieConsent";
import SmoothScroll from "./components/SmoothScroll";
import NoiseOverlay from "./components/NoiseOverlay";

export const metadata = {
  metadataBase: new URL("https://nordmediahouse.com"),
  title: {
    default: "NORD MEDIA HOUSE | Directional Creative Studio — Reels & Brand Systems",
    template: "%s | NORD MEDIA HOUSE",
  },
  description:
    "Scandinavian minimalist creative studio engineering viral short-form reels, bespoke brand identity, 4K culinary photography, and high-performance Meta Ads campaigns.",
  keywords: [
    "Nord Media House",
    "NORD",
    "Reels Production",
    "Short-Form Video Agency",
    "Creative Studio",
    "Commercial Photography",
    "4K Food Photography",
    "Meta Ads",
    "Brand Identity",
    "Scandinavian Design",
    "Awwwards Portfolio",
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
    canonical: "/",
  },
  openGraph: {
    title: "NORD MEDIA HOUSE | Directional Creative Studio",
    description:
      "Scandinavian visual restraint meets high-octane social strategy. Engineering viral short-form reels and 4K commercial stills.",
    url: "https://nordmediahouse.com",
    siteName: "NORD MEDIA HOUSE",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NORD MEDIA HOUSE | Directional Creative Studio",
    description:
      "Scandinavian visual restraint meets high-octane social strategy. Engineering viral short-form reels and 4K commercial stills.",
    creator: "@nordmediahouse",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.svg",
  },
  manifest: "/manifest.webmanifest",
};

// JSON-LD Structured Schema Data for SEO Rich Snippets
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "NORD MEDIA HOUSE",
  image: "https://nordmediahouse.com/icon.svg",
  description:
    "Scandinavian minimalist creative studio engineering viral short-form reels, bespoke brand identity, 4K culinary photography, and high-performance Meta Ads campaigns.",
  url: "https://nordmediahouse.com",
  telephone: "+919944686411",
  priceRange: "₹35,000 - ₹95,000",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Coimbatore",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "09:00",
    closes: "19:00",
  },
  sameAs: [
    "https://instagram.com/nordmediahouse",
    "https://linkedin.com/company/nordmediahouse",
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
      <body className="min-h-screen bg-[#FAF7F2] text-[#22092C] selection:bg-[#22092C] selection:text-[#FAF7F2] antialiased">
        <SmoothScroll>
          <NoiseOverlay />
          {children}
          <CookieConsent />
        </SmoothScroll>
      </body>
    </html>
  );
}
