import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientEffects from "@/components/ClientEffects";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

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
  metadataBase: new URL("https://dinodewet.co.za"),
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
  authors: [{ name: "Dino de Wet", url: "https://dinodewet.co.za" }],
  creator: "Dino de Wet",
  publisher: "Dino de Wet",
  alternates: {
    canonical: "https://dinodewet.co.za",
  },
  openGraph: {
    title: "Dino de Wet | Semantic SEO Web Developer & AI Architect",
    description:
      "Building high-performance digital systems designed for authority, growth, and modern search.",
    url: "https://dinodewet.co.za",
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

const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://dinodewet.co.za/#website",
      "url": "https://dinodewet.co.za",
      "name": "Dino de Wet",
      "description":
        "Semantic SEO, AI architecture, and high-performance web development for authority, visibility, and growth.",
      "publisher": { "@id": "https://dinodewet.co.za/#person" },
      "inLanguage": "en-ZA",
    },
    {
      "@type": "Person",
      "@id": "https://dinodewet.co.za/#person",
      "name": "Dino de Wet",
      "givenName": "Dino",
      "familyName": "de Wet",
      "url": "https://dinodewet.co.za",
      "email": "dinodewet555@gmail.com",
      "jobTitle": "Semantic SEO Web Developer & AI Architect",
      "description":
        "Semantic SEO strategist, AI architect, and web developer based in Cape Town, South Africa.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Cape Town",
        "addressRegion": "Western Cape",
        "addressCountry": "ZA",
      },
      "knowsAbout": [
        "Semantic SEO",
        "Generative Engine Optimisation",
        "Answer Engine Optimisation",
        "AI Architecture",
        "Technical SEO",
        "Next.js Development",
        "WordPress Development",
        "Structured Data",
        "Entity SEO",
        "Topical Authority",
        "LLM Workflows",
        "AI Search Optimisation",
      ],
      "sameAs": ["https://dinodewet.co.za"],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-ZA"
      className={`${spaceGrotesk.variable} ${inter.variable}`}
    >
      <body style={{ background: "#050505" }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
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
