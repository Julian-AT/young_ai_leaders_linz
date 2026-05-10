import "./globals.css";

import type { Metadata } from "next";
import localFont from "next/font/local";

import { Footer } from "@/components/shared/footer";
import { Header } from "@/components/shared/header";
import { ScrollToTop } from "@/components/shared/scroll-to-top";
import { SmoothScroll } from "@/components/shared/smooth-scroll";

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
    default: "Young AI Leaders Linz",
    template: "%s | Young AI Leaders Linz",
  },
  description:
    "We build AI that matters. A youth-led community in Linz, part of the global AI for Good network.",
  metadataBase: new URL("https://youngaileaderslinz.at"),
  icons: {
    icon: [{ url: "/logos/yall-logo.png", type: "image/png" }],
    apple: { url: "/logos/yall-logo.png", type: "image/png" },
  },
  openGraph: {
    title: "Young AI Leaders Linz",
    description:
      "We build AI that matters. A youth-led community in Linz, part of the global AI for Good network.",
    images: ["/seo/og.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Young AI Leaders Linz",
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
              name: "Young AI Leaders Linz",
              url: "https://youngaileaderslinz.at",
              logo: "https://youngaileaderslinz.at/logos/yall-logo.png",
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
        <ScrollToTop />
        <SmoothScroll />
        <Header />
        <main className="page-margins mx-auto max-w-[1280px]">
          <div>{children}</div>
        </main>
        <div className="page-margins mx-auto max-w-[1280px]">
          <Footer />
        </div>
      </body>
    </html>
  );
}
