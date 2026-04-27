import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.raushang4.com'),
  title: {
    default: "Digital Growth Agency India | raushang4 E-Commerce",
    template: "%s | raushang4 E-Commerce"
  },
  description: "raushang4 E-Commerce builds digital growth systems for D2C brands, manufacturers, and service businesses in India.",
  keywords: ["Digital Growth", "E-Commerce", "D2C Brands", "India Agency", "raushang4"],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.webimpetus.com",
    siteName: "raushang4 E-Commerce",
    title: "Digital Growth Agency India | raushang4 E-Commerce",
    description: "raushang4 E-Commerce builds digital growth systems for D2C brands, manufacturers, and service businesses in India.",
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
    title: "Digital Growth Agency India | raushang4 E-Commerce",
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
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
