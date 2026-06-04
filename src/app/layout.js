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
        {children}
        <Footer />
      </body>
    </html>
  );
}
