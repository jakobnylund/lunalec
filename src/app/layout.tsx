import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ColorPicker from "@/components/ColorPicker";
import Providers from "@/components/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://lunalec.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "LunaLEC — Printable Light Technology",
    template: "%s — LunaLEC",
  },
  description:
    "LunaLEC develops Light-emitting Electrochemical Cells (LECs) that can be printed on any surface. Pioneering the future of sustainable, flexible, customizable lighting.",
  keywords: [
    "LEC",
    "printable light",
    "light-emitting electrochemical cells",
    "Lumifoil",
    "smart cards",
    "Authentic Light",
    "anti-counterfeiting",
    "flexible displays",
    "sustainable lighting",
    "Umeå",
  ],
  authors: [{ name: "LunaLEC AB" }],
  creator: "LunaLEC AB",
  publisher: "LunaLEC AB",
  applicationName: "LunaLEC",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "LunaLEC",
    url: SITE_URL,
    title: "LunaLEC — Printable Light Technology",
    description:
      "Next-generation printable light sources based on LEC technology. Customizable emission patterns in a thin and flexible form factor.",
  },
  twitter: {
    card: "summary_large_image",
    title: "LunaLEC — Printable Light Technology",
    description:
      "Next-generation printable light sources based on LEC technology.",
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
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--background)] text-white`}
      >
        <Providers>
          <Header />
          <main className="min-h-[100dvh] pt-24 lg:pt-32">{children}</main>
          <Footer />
          <ColorPicker />
        </Providers>
      </body>
    </html>
  );
}
