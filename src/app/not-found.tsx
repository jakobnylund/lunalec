import type { Metadata } from "next";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you're looking for doesn't exist on LunaLEC.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="min-h-[60dvh] flex items-center justify-center px-6 lg:px-16 py-24 border-b-section">
      <div className="max-w-xl text-center">
        <p className="tech-label mb-6">404</p>
        <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.9] tracking-tighter text-white mb-6">
          Light not found
        </h1>
        <p className="text-[#b0b0b0] text-lg leading-relaxed mb-10">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
          Head back to the home page and try again.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button href="/">Back home</Button>
          <Button href="/contact" variant="ghost">Contact us →</Button>
        </div>
      </div>
    </div>
  );
}
