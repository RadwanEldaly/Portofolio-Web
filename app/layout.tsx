import type { Metadata, Viewport } from "next";
import { Inter_Tight, Archivo, JetBrains_Mono } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#F5F3EE",
};

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: ["400", "500", "600"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Radwan Eldaly — Web Developer",
  description:
    "Web developer in Cairo, Egypt, building responsive interfaces with React, Next.js and Tailwind CSS.",
  openGraph: {
    title: "Radwan Eldaly — Web Developer",
    description:
      "Web developer in Cairo, Egypt, building responsive interfaces with React, Next.js and Tailwind CSS.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} ${archivo.variable} ${jetbrains.variable}`}
    >
      <body className="font-body bg-paper text-ink antialiased min-h-screen selection:bg-accent selection:text-paper">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-accent focus:text-paper focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:rounded-sm shadow-md"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
