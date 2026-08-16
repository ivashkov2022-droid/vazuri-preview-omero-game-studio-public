import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "RIFT — независимая игровая студия",
  description: "Создаём выразительные игровые миры, персонажей и истории для PC и консолей.",
  icons: { icon: "/images/rift-hero.png" },
  openGraph: {
    title: "RIFT — Worlds Begin Here",
    description: "Независимая игровая студия. Оригинальные миры, персонажи и игровые системы.",
    type: "website",
    locale: "ru_RU",
    images: [{ url: "/og.png", width: 1680, height: 941, alt: "RIFT — Worlds Begin Here" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "RIFT — Worlds Begin Here",
    description: "Независимая игровая студия. Оригинальные миры, персонажи и игровые системы.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body><Script type="module" src="/model-viewer.min.js" strategy="afterInteractive" />{children}</body></html>;
}
