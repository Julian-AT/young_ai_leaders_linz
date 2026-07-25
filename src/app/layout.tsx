import "./globals.css";

import type { Metadata } from "next";
import localFont from "next/font/local";

import { Footer } from "@/components/shared/footer";
import { Header } from "@/components/shared/header";
import { ScrollToTop } from "@/components/shared/scroll-to-top";
import { SmoothScroll } from "@/components/shared/smooth-scroll";
import { env } from "@/config/env";

const riformaLL = localFont({
  src: [
    { path: "../../public/fonts/riformaLL-400.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/riformaLL-500.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-riforma",
  display: "swap",
  fallback: ["Arial"],
  adjustFontFallback: false,
});

const riformaMono = localFont({
  src: [
    { path: "../../public/fonts/riformaMono-400.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/riformaMono-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-riforma-mono",
  display: "swap",
  fallback: ["Arial"],
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: {
    default: "Young AI Leaders Austria",
    template: "%s | Young AI Leaders Austria",
  },
  description:
    "We build AI that matters. A youth-led community in Linz, part of the global AI for Good network.",
  metadataBase: new URL(env.NEXT_PUBLIC_SITE_URL),
  icons: {
    icon: [
      { url: "/seo/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/seo/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/seo/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: { url: "/seo/apple-icon.png", sizes: "180x180", type: "image/png" },
  },
  openGraph: {
    title: "Young AI Leaders Austria",
    description:
      "We build AI that matters. A youth-led community in Linz, part of the global AI for Good network.",
    images: ["/seo/og.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Young AI Leaders Austria",
    description:
      "We build AI that matters. A youth-led community in Linz, part of the global AI for Good network.",
    images: ["/seo/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${riformaLL.variable} ${riformaMono.variable} scroll-smooth`}>
      <body className="bg-primary text-primary font-riforma mx-auto antialiased transition-colors duration-500">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Young AI Leaders Austria",
              url: env.NEXT_PUBLIC_SITE_URL,
              logo: `${env.NEXT_PUBLIC_SITE_URL}/logos/yall-logo.png`,
              description:
                "Youth-led AI community in Linz, part of the global AI for Good network.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Linz",
                addressCountry: "AT",
              },
              sameAs: [
                "https://www.linkedin.com/company/youngaileaderslinz",
                "https://www.instagram.com/youngaileaderslinz/",
                "https://www.tiktok.com/@youngaileaderslinz",
              ],
              parentOrganization: {
                "@type": "Organization",
                name: "AI for Good",
                url: "https://aiforgood.itu.int/",
              },
            }),
          }}
        />
        <SmoothScroll>
          <ScrollToTop />
          <Header />
          <main className="page-margins mx-auto max-w-[1280px]">
            <div>{children}</div>
          </main>
          <div className="page-margins mx-auto max-w-[1280px]">
            <Footer />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
