import "./globals.css";

import type { Metadata } from "next";
import localFont from "next/font/local";

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
    images: ["/logos/yall-logo.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Young AI Leaders Linz",
    description:
      "We build AI that matters. A youth-led community in Linz, part of the global AI for Good network.",
    images: ["/logos/yall-logo.png"],
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
        {children}
      </body>
    </html>
  );
}
