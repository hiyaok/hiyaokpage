import type { Metadata, Viewport } from "next";
import "./globals.css";
import { seo } from "@/lib/seo";
import GlowBackground from "@/components/GlowBackground";
import AnimatedFrame from "@/components/AnimatedFrame";
import ScrollProgress from "@/components/ScrollProgress";

export const viewport: Viewport = {
  themeColor: "#050507",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1
};

export const metadata: Metadata = {
  metadataBase: new URL(seo.siteUrl),
  title: { default: seo.title, template: `%s | ${seo.siteName}` },
  description: seo.description,
  applicationName: seo.siteName,
  keywords: seo.keywords,
  authors: [{ name: seo.authorName }],
  creator: seo.authorName,
  publisher: seo.authorName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: seo.siteUrl,
    title: seo.title,
    description: seo.description,
    siteName: seo.siteName,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: seo.siteName }]
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: ["/og.png"]
  },
  icons: { icon: "/favicon.ico", apple: "/app/icons/apple-icon.png" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  category: "technology"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" data-theme="soft">
      <body>
        <GlowBackground />
        <AnimatedFrame />
        <ScrollProgress />
        {children}

        {/* JSON-LD: WebSite + Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: seo.siteName,
              url: seo.siteUrl,
              description: seo.description,
              inLanguage: "id-ID"
            })
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Jasa Pembuatan Bot Telegram",
              serviceType: "Telegram Bot Development",
              provider: {
                "@type": "Organization",
                name: seo.siteName,
                url: seo.siteUrl,
                sameAs: [seo.telegram]
              },
              areaServed: "ID",
              description: seo.description,
              offers: {
                "@type": "Offer",
                priceCurrency: "IDR",
                price: "50000",
                description: "Paket mulai start 50RB-an untuk kebutuhan simple"
              }
            })
          }}
        />
      </body>
    </html>
  );
}
