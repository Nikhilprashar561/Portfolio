import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
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
    <html lang="en" className={`${plusJakartaSans.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#fbf9f5] text-[#1c1917] antialiased selection:bg-amber-100 selection:text-stone-900 font-sans">
        {children}
      </body>
    </html>
  );
}
