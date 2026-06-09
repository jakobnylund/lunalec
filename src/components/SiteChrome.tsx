"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ColorPicker from "@/components/ColorPicker";

// Internal tools under /verktyg render bare — no site header, footer, or
// theme picker.
export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const bare = pathname?.startsWith("/verktyg");

  if (bare) {
    return <main className="min-h-[100dvh]">{children}</main>;
  }

  return (
    <>
      <Header />
      <main className="min-h-[100dvh] pt-24 lg:pt-32">{children}</main>
      <Footer />
      <ColorPicker />
    </>
  );
}
