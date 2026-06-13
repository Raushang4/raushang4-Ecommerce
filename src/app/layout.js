import { Outfit, Bricolage_Grotesque } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "./responsive.css";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bricolage",
});
import GlobalNavigation from "../components/GlobalNavigation";
import Footer from "../components/Footer";
import SchemaMarkup from "../components/SchemaMarkup";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://ecommerce.raushang4.tech'),
  title: {
    default: "raushang4 E-Commerce | Digital Growth Systems for D2C & Service Brands",
    template: "%s | raushang4 E-Commerce"
  },
  description: "raushang4 E-Commerce engineers high-performance digital growth systems. We specialize in Shopify 2.0, WooCommerce, and conversion-led marketing for D2C brands and manufacturers in India.",
  keywords: ["raushang4", "Ecommerce Growth", "D2C Brand Systems", "Digital Engineering India", "Shopify Experts India"],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://ecommerce.raushang4.tech",
    siteName: "raushang4 E-Commerce",
    title: "raushang4 E-Commerce | Digital Growth Systems for D2C & Service Brands",
    description: "Engineering high-performance digital growth systems for D2C brands, manufacturers, and service businesses.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "raushang4 E-Commerce — Digital growth for serious businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "raushang4 E-Commerce | Digital Growth Systems for D2C & Service Brands",
    description: "Engineering high-performance digital growth systems for D2C brands.",
    images: ["/og-image.jpg"],
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
  verification: {
    google: "YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE",
  }
};

export default function RootLayout({ children }) {
  const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "raushang4 E-Commerce",
    "alternateName": "Raushang4 Technology",
    "url": "https://ecommerce.raushang4.tech",
    "logo": "https://ecommerce.raushang4.tech/mainlogo.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+919304995677",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": "en"
    },
    "sameAs": [
      "https://raushang4.tech",
      "https://www.linkedin.com/company/raushang4/"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "raushang4 E-Commerce",
    "image": "https://ecommerce.raushang4.tech/mainlogo.svg",
    "@id": "https://ecommerce.raushang4.tech",
    "url": "https://ecommerce.raushang4.tech",
    "telephone": "+919304995677",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Noida",
      "addressRegion": "Uttar Pradesh",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.5355,
      "longitude": 77.3910
    },
    "areaServed": ["Delhi", "Noida", "Gurgaon", "Ghaziabad", "Faridabad", "NCR"],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  };

  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <head>
        <SchemaMarkup schema={orgSchema} />
        <SchemaMarkup schema={localBusinessSchema} />
        {/* Google Tag Manager - if NEXT_PUBLIC_GTM_ID is provided */}
        {GTM_ID && (
          <Script id="google-tag-manager" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `}
          </Script>
        )}
      </head>
      <body className={`${outfit.variable} ${bricolage.variable} min-h-full antialiased`}>
        {GTM_ID && (
          <noscript>
            <iframe 
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
        <GlobalNavigation />
        <main id="main-content">
          {children}
        </main>
        <Footer />
        <a 
          href="https://wa.me/919304995677?text=Hello!%20I'm%20interested%20in%20your%20services." 
          className="wa-widget"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <svg viewBox="0 0 24 24" width="32" height="32" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .104 5.383.101 11.947c0 2.098.546 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.945-5.386 11.948-11.95a11.812 11.812 0 0 0-3.534-8.423z"/>
          </svg>
        </a>
      </body>
    </html>
  );
}
