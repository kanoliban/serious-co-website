import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import ErrorReporter from "@/components/ui/ErrorReporter";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://avery-serious-company.com'),
  title: "A Very Serious Company - Direct-Response Advertising",
  description: "We create advertisements that increase sales. That's it. One service, delivered well. $5k-$8k/month, 90-day minimum.",
  keywords: ["direct response advertising", "advertising agency", "sales advertising", "performance advertising", "David Ogilvy", "advertising that sells"],
  authors: [{ name: "A Very Serious Company" }],
  creator: "A Very Serious Company",
  publisher: "A Very Serious Company",
  openGraph: {
    title: "A Very Serious Company - Direct-Response Advertising",
    description: "We create advertisements that increase sales. That's it. One service, delivered well.",
    url: "https://avery-serious-company.com",
    siteName: "A Very Serious Company",
    images: [
      {
        url: "/a-very-serious-company.jpeg",
        width: 1200,
        height: 630,
        alt: "A Very Serious Company - Direct-Response Advertising",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "A Very Serious Company - Direct-Response Advertising",
    description: "We create advertisements that increase sales. That's it. One service, delivered well.",
    images: ["/a-very-serious-company.jpeg"],
    creator: "@avery-serious-company",
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
  verification: {
    google: "your-google-verification-code",
  },
};

export const viewport = {
  themeColor: "var(--theme-color)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth-enhanced">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="var(--theme-color)" />
        <meta name="msapplication-navbutton-color" content="var(--theme-color)" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="A Very Serious Company" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      >
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        <Navbar />
        <main className="min-h-0">
          {children}
        </main>
        
        {/* Organization Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "A Very Serious Company",
              "description": "We create advertisements that increase sales. One service, delivered well.",
              "url": "https://avery-serious-company.com",
              "logo": "https://avery-serious-company.com/a-very-serious-company.jpeg",
              "image": "https://avery-serious-company.com/a-very-serious-company.jpeg",
              "foundingDate": "2024",
              "founder": {
                "@type": "Person",
                "name": "Liban Kano"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Business Inquiries",
                "availableLanguage": "English"
              },
              "sameAs": [
                "https://avery-serious-company.com"
              ],
              "knowsAbout": [
                "Direct-Response Advertising",
                "Sales Advertising",
                "Performance Marketing",
                "Advertising Strategy",
                "Media Buying",
                "Ad Creative"
              ],
              "serviceType": [
                "Direct-Response Advertising Agency",
                "Advertisement Creation",
                "Media Placement",
                "Advertising Optimization"
              ]
            })
          }}
        />
      </body>
    </html>
  );
}
