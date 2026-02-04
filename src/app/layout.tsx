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

export const metadata: Metadata = {
  title: "LunaLEC — Printable Light Technology",
  description:
    "LunaLEC develops Light-emitting Electrochemical Cells (LEC) that can be printed on any surface. Pioneering the future of sustainable, flexible lighting technology.",
  keywords: [
    "LEC",
    "printable light",
    "light-emitting electrochemical cells",
    "flexible displays",
    "sustainable lighting",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#050505] text-white`}
      >
        <Providers>
          <Header />
          <main className="min-h-screen pt-24 lg:pt-32">{children}</main>
          <Footer />
          <ColorPicker />
        </Providers>
      </body>
    </html>
  );
}
