import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientEffects from "@/components/ClientEffects";
import SmoothScrollProvider from "@/components/ClientSmoothScroll";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#050505",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://dinodewet.tech"),
  title: "Dino de Wet | Semantic SEO Web Developer & AI Architect",
  description:
    "Dino de Wet builds high-performance websites and intelligent digital systems combining semantic SEO, Next.js development, and AI architecture for authority, visibility, and growth.",
  keywords: [
    "Dino de Wet",
    "Semantic SEO",
    "AI Architect",
    "Next.js Developer",
    "Web Developer",
    "WordPress Development",
    "Digital Strategy",
    "Cape Town",
    "South Africa",
    "Entity SEO",
    "LLM Workflows",
    "Technical SEO",
  ],
  authors: [{ name: "Dino de Wet", url: "https://dinodewet.tech" }],
  creator: "Dino de Wet",
  publisher: "Dino de Wet",
  alternates: {
    canonical: "https://dinodewet.tech",
  },
  openGraph: {
    title: "Dino de Wet | Semantic SEO Web Developer & AI Architect",
    description:
      "Building high-performance digital systems designed for authority, growth, and modern search.",
    url: "https://dinodewet.tech",
    siteName: "Dino de Wet",
    type: "website",
    locale: "en_ZA",
    images: [
      {
        url: "/images/dino-portrait-about.jpg",
        width: 1200,
        height: 630,
        alt: "Dino de Wet — Semantic SEO Web Developer & AI Architect",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dino de Wet | Semantic SEO Web Developer & AI Architect",
    description:
      "Building high-performance digital systems designed for authority, growth, and modern search.",
    images: ["/images/dino-portrait-about.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable}`}
    >
      <body style={{ background: "#050505" }}>
        <ClientEffects />
        <Navbar />
        <SmoothScrollProvider>
          <main>{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
