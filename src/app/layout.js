import Script from "next/script";
import "./globals.css";
import GlobalNavigation from "../components/GlobalNavigation";
import Footer from "../components/Footer";
import SchemaMarkup from "../components/SchemaMarkup";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.raushang4.com'),
  title: {
    default: "Digital Growth Agency in Delhi NCR (Noida & Gurgaon) | raushang4 E-Commerce",
    template: "%s | raushang4 E-Commerce"
  },
  description: "raushang4 E-Commerce builds digital growth systems for D2C brands, manufacturers, and service businesses in the Delhi NCR region.",
  keywords: ["Digital Growth", "E-Commerce", "D2C Brands", "India Agency", "raushang4"],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.raushang4.com",
    siteName: "raushang4 E-Commerce",
    title: "Digital Growth Agency in Delhi NCR (Noida & Gurgaon) | raushang4 E-Commerce",
    description: "raushang4 E-Commerce builds digital growth systems for D2C brands, manufacturers, and service businesses in the Delhi NCR region.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "raushang4 E-Commerce Digital Agency",
      }
    ],
  },
  manifest: '/manifest.json',
  twitter: {
    card: "summary_large_image",
    title: "Digital Growth Agency in Delhi NCR (Noida & Gurgaon) | raushang4 E-Commerce",
    description: "raushang4 E-Commerce builds digital growth systems for D2C brands.",
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
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
  const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "raushang4 E-Commerce",
    "alternateName": "Raushang4 Technology",
    "url": "https://www.raushang4.com",
    "logo": "https://www.raushang4.com/mainlogo.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+919304995677",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": "en"
    },
    "sameAs": [
      "https://www.linkedin.com/company/raushang4/"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "raushang4 E-Commerce",
    "image": "https://www.raushang4.com/mainlogo.svg",
    "@id": "https://www.raushang4.com",
    "url": "https://www.raushang4.com",
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
        
        {/* Google Analytics - if NEXT_PUBLIC_GA_ID is provided */}
        {GA_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
      </head>
      <body className="min-h-full antialiased">
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
