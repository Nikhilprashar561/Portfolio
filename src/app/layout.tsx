import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk, Newsreader } from "next/font/google";
import "./globals.css";
import "./sections.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#F9F8F5",
};

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nikhilprashar.dev"),
  title: "Nikhil Prashar — Full Stack Developer & Software Engineer",
  description:
    "Building clean, scalable web applications and intuitive digital products with modern technologies.",
  keywords: [
    "Nikhil Prashar",
    "Full Stack Developer",
    "Software Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "MERN Stack",
    "Web Development",
  ],
  authors: [{ name: "Nikhil Prashar", url: "https://github.com/Nikhilprashar561" }],
  creator: "Nikhil Prashar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nikhilprashar.dev",
    title: "Nikhil Prashar — Full Stack Developer & Software Engineer",
    description:
      "Building clean, scalable web applications and intuitive digital products with modern technologies.",
    siteName: "Nikhil Prashar Portfolio",
    images: [
      {
        url: "/nikhil.jpg",
        width: 1200,
        height: 630,
        alt: "Nikhil Prashar - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nikhil Prashar — Full Stack Developer & Software Engineer",
    description:
      "Building clean, scalable web applications and intuitive digital products with modern technologies.",
    creator: "@NikhilPrashar_",
    images: ["/nikhil.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${hankenGrotesk.variable} ${newsreader.variable} scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,300..500;1,6..72,300..500&family=Hanken+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#F9F8F5] text-[#1C1917] antialiased selection:bg-[#2E2A7B] selection:text-white font-sans">
        {children}
      </body>
    </html>
  );
}
