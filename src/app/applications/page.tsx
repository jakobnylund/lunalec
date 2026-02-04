"use client";

import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";
import InViewSection from "@/components/InViewSection";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";

const applications = [
  {
    title: "Labels & Tags",
    desc: "Lumifoil status indicators",
    details: "Lumifoil's flexibility makes it ideal for labels and tags. Status indicators, authentication marks, temperature alerts that light up when it matters.",
  },
  {
    title: "Signage",
    desc: "Lumifoil flexible displays",
    details: "Thin illuminated signs for retail, events, and wayfinding",
  },
  {
    title: "Architecture",
    desc: "Lumifoil ambient lighting",
    details: "Wallpapers, ceiling tiles, decorative surfaces that emit light",
  },
  {
    title: "Wearables",
    desc: "Lumifoil integrated displays",
    details: "Flexible light elements for clothing, accessories, and wearable tech",
  },
];

export default function ApplicationsPage() {
  const { isLight } = useTheme();

  return (
    <div className="bg-[#050505]">
      {/* Hero */}
      <section className="min-h-[60vh] flex flex-col justify-center border-b-section relative group/hero">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/jacket-header.jpg"
            alt=""
            fill
            className="object-cover"
          />
          {/* Gradient overlay for text readability */}
          {!isLight && (
            <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent transition-opacity duration-500 group-hover/hero:opacity-60" />
          )}
        </div>
        <div className="px-6 lg:px-16 py-24 relative z-10">
          <FadeIn>
            <p className="tech-label mb-8">Use Cases</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.9] tracking-tight text-white mb-8 max-w-4xl">
              Surfaces That
              <br />
              <span className="text-[#253ff6]">Shine</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-[#b0b0b0] text-lg max-w-xl leading-relaxed">
              Lumifoil enables entirely new product categories. From smart
              cards to medical devices, discover how printable light creates
              possibilities that didn&apos;t exist before.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Smart Cards */}
      <InViewSection className="border-b-section bg-[#0a0a0a]">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {/* Index */}
          <div className="px-6 lg:px-16 py-16 lg:py-24 border-b lg:border-b-0 lg:border-r border-[#1a1a1a]">
            <FadeIn>
              <p className="tech-label mb-2">Lumifoil Authentication & Display</p>
              <p className="section-title">Smart Cards</p>
            </FadeIn>
          </div>

          {/* Content */}
          <div className="lg:col-span-2 px-6 lg:px-16 py-16 lg:py-24">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl text-white mb-8 max-w-2xl">
                Lumifoil integrates dynamic light displays into payment cards, access badges, and loyalty cards.
              </h2>
            </FadeIn>
            <FadeIn delay={0.05}>
              <p className="text-[#b0b0b0] text-lg leading-relaxed mb-8 max-w-2xl">
                Lumifoil integrates seamlessly into card form factors. Visual authentication, balance indicators, promotional messaging — powered wirelessly via NFC.
              </p>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {["Visual authentication", "Balance display", "Promotional animations", "NFC-powered — no battery needed"].map((feature, i) => (
                <FadeIn key={feature} delay={0.1 + i * 0.05}>
                  <div className="border-l border-[#253ff6] pl-4">
                    <p className="text-base text-[#b0b0b0]">{feature}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </InViewSection>

      <InViewSection className="border-b-section">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {/* Index */}
          <div className="px-6 lg:px-16 py-16 lg:py-24 border-b lg:border-b-0 lg:border-r border-[#1a1a1a]">
            <FadeIn>
              <p className="tech-label mb-2">Lumifoil Brand Differentiation</p>
              <p className="section-title">Packaging</p>
            </FadeIn>
          </div>

          {/* Content */}
          <div className="lg:col-span-2 px-6 lg:px-16 py-16 lg:py-24">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl text-white mb-8 max-w-2xl">
                Lumifoil transforms product packaging into an interactive experience with light-up elements.
              </h2>
            </FadeIn>
            <FadeIn delay={0.05}>
              <p className="text-[#b0b0b0] text-lg leading-relaxed mb-8 max-w-2xl">
                Lumifoil transforms packaging into interactive brand experiences. Light-up logos, freshness indicators, Authentic Light™ anti-counterfeiting — all in a label-thin format.
              </p>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {["Brand differentiation", "Freshness indicators", "Authentic Light™ anti-counterfeiting", "Interactive unboxing"].map((feature, i) => (
                <FadeIn key={feature} delay={0.1 + i * 0.05}>
                  <div className="border-l border-[#253ff6] pl-4">
                    <p className="text-base text-[#b0b0b0]">{feature}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </InViewSection>

      <InViewSection className="border-b-section bg-[#0a0a0a]">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {/* Index */}
          <div className="px-6 lg:px-16 py-16 lg:py-24 border-b lg:border-b-0 lg:border-r border-[#1a1a1a]">
            <FadeIn>
              <p className="tech-label mb-2">Lumifoil Phototherapy</p>
              <p className="section-title">Medical</p>
            </FadeIn>
          </div>

          {/* Content */}
          <div className="lg:col-span-2 px-6 lg:px-16 py-16 lg:py-24">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl text-white mb-8 max-w-2xl">
                Lumifoil enables flexible, biocompatible light sources for phototherapy, wound healing, and diagnostics.
              </h2>
            </FadeIn>
            <FadeIn delay={0.05}>
              <p className="text-[#b0b0b0] text-lg leading-relaxed mb-8 max-w-2xl">
                Lumifoil&apos;s biocompatible construction enables new phototherapy applications. Flexible patches for wound healing, diagnostics, and wearable light therapy.
              </p>
            </FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {["Phototherapy patches", "Wound healing", "Diagnostic indicators", "Wearable integration"].map((feature, i) => (
                <FadeIn key={feature} delay={0.1 + i * 0.05}>
                  <div className="border-l border-[#253ff6] pl-4">
                    <p className="text-base text-[#b0b0b0]">{feature}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </InViewSection>

      {/* Authentic Light - Anti-Counterfeiting */}
      <InViewSection className="border-b-section" hoverClassName="group group/authentic">
        <div className="grid grid-cols-1 lg:grid-cols-3 relative z-10">
          {/* Index */}
          <div className="px-6 lg:px-16 py-16 lg:py-24 border-b lg:border-b-0 lg:border-r border-[#1a1a1a]">
            <FadeIn>
              <p className="tech-label mb-2">Security & Authentication</p>
              <p className="section-title">Authentic Light™</p>
            </FadeIn>
          </div>

          {/* Content */}
          <div className="lg:col-span-2 px-6 lg:px-16 py-16 lg:py-24">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl text-white mb-8 max-w-2xl">
                Security features that can&apos;t be copied.
              </h2>
            </FadeIn>
            <FadeIn delay={0.05}>
              <p className="text-[#b0b0b0] text-lg leading-relaxed mb-6 max-w-2xl">
                Counterfeiting is a global problem costing brands billions. Authentic Light gives you a powerful new tool: light-based authentication that&apos;s impossible to replicate.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-[#b0b0b0] text-lg leading-relaxed mb-8 max-w-2xl">
                Our patented technology embeds hidden and dynamic light patterns into Lumifoil products — patterns that only appear under activation and require our proprietary technology to produce. No apps. No scanners. Just visible proof of authenticity.
              </p>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {["Hidden patterns revealed only under activation", "Dynamic light sequences unique to each product", "Impossible to counterfeit without LunaLEC technology", "Visual verification — no app needed"].map((feature, i) => (
                <FadeIn key={feature} delay={0.15 + i * 0.05}>
                  <div className="border-l border-[#253ff6] pl-4">
                    <p className="text-base text-[#b0b0b0]">{feature}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
            <FadeIn delay={0.35}>
              <div className="mt-12">
                <p className="tech-label mb-4">Industries</p>
                <div className="flex flex-wrap gap-3">
                  {["Luxury goods & fashion", "Pharmaceuticals", "Electronics", "Spirits & premium beverages", "Documents & certificates"].map((industry) => (
                    <span key={industry} className="text-sm text-[#808080] border border-[#1a1a1a] px-3 py-1">
                      {industry}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </InViewSection>

      {/* Applications Grid */}
      <InViewSection className="border-b-section bg-[#0a0a0a]">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {/* Index */}
          <div className="px-6 lg:px-16 py-16 lg:py-24 border-b lg:border-b-0 lg:border-r border-[#1a1a1a]">
            <FadeIn>
              <p className="tech-label mb-2">More Industries</p>
              <p className="section-title">Application Areas</p>
            </FadeIn>
          </div>

          {/* Grid - 2x2 layout */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 content-start">
            {applications.map((app, i) => (
              <FadeIn key={app.title} delay={i * 0.05} className="h-full">
                <div className={`group/card px-6 py-10 border-b border-[#1a1a1a] h-full ${i % 2 !== 0 ? "sm:border-l" : ""} hover:bg-white hover:shadow-[inset_0_0_100px_rgba(255,255,255,1),0_0_40px_rgba(255,255,255,0.6),0_0_80px_rgba(37,63,246,0.3)] transition-all duration-300 cursor-pointer`}>
                  <p className="text-white mb-1 transition-colors duration-300 group-hover/card:!text-[#050505]">{app.title}</p>
                  <p className="text-base text-[#b0b0b0] mb-4 transition-colors duration-300 group-hover/card:!text-[#050505]">{app.desc}</p>
                  <p className="text-sm text-[#808080] leading-relaxed transition-colors duration-300 group-hover/card:!text-[#050505]">{app.details}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </InViewSection>

      {/* Custom Application */}
      <InViewSection className="border-b-section bg-[#0a0a0a]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left */}
          <div className="px-6 lg:px-16 py-24 border-b lg:border-b-0 lg:border-r border-[#1a1a1a]">
            <FadeIn>
              <p className="tech-label mb-2">Custom Solutions</p>
              <p className="section-title mb-8">Your Vision</p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-[#b0b0b0] text-lg leading-relaxed mb-6 max-w-md">
                The applications shown here are just the beginning. LEC
                technology is a platform that can be adapted to countless use
                cases we haven&apos;t even imagined yet.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-[#b0b0b0] text-lg leading-relaxed mb-10 max-w-md">
                If you have a product idea that could benefit from thin,
                flexible, printable light, we want to hear about it.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <Button href="/contact">Discuss Your Idea</Button>
            </FadeIn>
          </div>

          {/* Right - Product Video */}
          <div className="relative overflow-hidden min-h-[400px]">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="https://jakob-hosted-content.s3.us-east-1.amazonaws.com/jacket.mov" type="video/quicktime" />
              <source src="https://jakob-hosted-content.s3.us-east-1.amazonaws.com/jacket.mov" type="video/mp4" />
            </video>
          </div>
        </div>
      </InViewSection>

      {/* CTA */}
      <InViewSection className="bg-[#0a0a0a]">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {/* Index */}
          <div className="px-6 lg:px-16 py-16 lg:py-24 border-b lg:border-b-0 lg:border-r border-[#1a1a1a]">
            <FadeIn>
              <p className="tech-label mb-2">Get Started</p>
              <p className="section-title">Next Steps</p>
            </FadeIn>
          </div>

          {/* Content */}
          <div className="lg:col-span-2 px-6 lg:px-16 py-16 lg:py-24">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl text-white mb-8">
                Ready to explore LEC for your product?
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-[#b0b0b0] text-lg leading-relaxed mb-10 max-w-xl">
                Whether you have a specific application in mind or want to explore
                possibilities, our team is ready to help.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex gap-4">
                <Button href="/contact">Start the Conversation</Button>
                <Button href="/partners" variant="ghost">Partnership Models →</Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </InViewSection>
    </div>
  );
}
