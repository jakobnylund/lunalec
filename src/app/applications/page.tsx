"use client";

import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";
import InViewSection from "@/components/InViewSection";
import Link from "next/link";
import Image from "next/image";

const applications = [
  {
    title: "Smart Cards",
    desc: "Authentication & display",
    details: "Visual feedback for authentication, balance indicators, promotional messaging",
  },
  {
    title: "Packaging",
    desc: "Brand differentiation",
    details: "Light-up logos, freshness indicators, anti-counterfeiting features",
  },
  {
    title: "Labels & Tags",
    desc: "Status indicators",
    details: "Logistics tracking, product authentication, temperature alerts",
  },
  {
    title: "Signage",
    desc: "Flexible displays",
    details: "Thin illuminated signs for retail, events, and wayfinding",
  },
  {
    title: "Architecture",
    desc: "Ambient lighting",
    details: "Wallpapers, ceiling tiles, decorative surfaces that emit light",
  },
  {
    title: "Medical",
    desc: "Phototherapy devices",
    details: "Flexible light sources for wound healing and diagnostics",
  },
];

export default function ApplicationsPage() {
  return (
    <div className="bg-[#050505]">
      {/* Hero */}
      <InViewSection className="min-h-[60vh] flex flex-col justify-center border-b-section">
        <div className="px-6 lg:px-16 py-24">
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
              LEC technology enables entirely new product categories. From smart
              cards to medical devices, discover how printable light is
              transforming industries.
            </p>
          </FadeIn>
        </div>
      </InViewSection>

      {/* Applications Grid */}
      <InViewSection className="border-b-section">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {/* Index */}
          <div className="px-6 lg:px-16 py-16 lg:py-24 border-b lg:border-b-0 lg:border-r border-[#1a1a1a]">
            <FadeIn>
              <p className="tech-label mb-2">Industries</p>
              <p className="section-title">Application Areas</p>
            </FadeIn>
          </div>

          {/* Grid - 2x3 layout */}
          <div className="lg:col-span-2 grid grid-cols-2 content-start">
            {applications.map((app, i) => (
              <FadeIn key={app.title} delay={i * 0.05}>
                <div className={`group/card px-6 py-10 border-b border-[#1a1a1a] ${i % 2 !== 0 ? "border-l" : ""} hover:bg-white hover:shadow-[inset_0_0_100px_rgba(255,255,255,1),0_0_40px_rgba(255,255,255,0.6),0_0_80px_rgba(37,63,246,0.3)] transition-all duration-300 cursor-pointer`}>
                  <p className="text-white mb-1 transition-colors duration-300 group-hover/card:!text-[#050505]">{app.title}</p>
                  <p className="text-base text-[#b0b0b0] mb-4 transition-colors duration-300 group-hover/card:!text-[#050505]">{app.desc}</p>
                  <p className="text-sm text-[#808080] leading-relaxed transition-colors duration-300 group-hover/card:!text-[#050505]">{app.details}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </InViewSection>

      {/* Detailed Sections */}
      <InViewSection className="border-b-section bg-[#0a0a0a]" hoverClassName="group group/smartcards">
        {/* Background image - shows on hover at 30% */}
        <div className="absolute inset-0 opacity-0 group-hover/smartcards:opacity-30 transition-opacity duration-500 z-0">
          <Image src="/cards.jpg" alt="Smart Cards" fill className="object-cover" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 relative z-10">
          {/* Index */}
          <div className="px-6 lg:px-16 py-16 lg:py-24 border-b lg:border-b-0 lg:border-r border-[#1a1a1a]">
            <FadeIn>
              <p className="tech-label mb-2">Authentication & Display</p>
              <p className="section-title">Smart Cards</p>
            </FadeIn>
          </div>

          {/* Content */}
          <div className="lg:col-span-2 px-6 lg:px-16 py-16 lg:py-24">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl text-white mb-8 max-w-2xl">
                Integrate dynamic light displays into payment cards, access badges, and loyalty cards.
              </h2>
            </FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {["Visual authentication", "Balance display", "Promotional animations", "Ultra-thin integration"].map((feature, i) => (
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

      <InViewSection className="border-b-section" hoverClassName="group group/packaging">
        {/* Background image - shows on hover at 30% */}
        <div className="absolute inset-0 opacity-0 group-hover/packaging:opacity-30 transition-opacity duration-500 z-0">
          <Image src="/header-lion.jpg" alt="Packaging" fill className="object-cover" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 relative z-10">
          {/* Index */}
          <div className="px-6 lg:px-16 py-16 lg:py-24 border-b lg:border-b-0 lg:border-r border-[#1a1a1a]">
            <FadeIn>
              <p className="tech-label mb-2">Brand Differentiation</p>
              <p className="section-title">Packaging</p>
            </FadeIn>
          </div>

          {/* Content */}
          <div className="lg:col-span-2 px-6 lg:px-16 py-16 lg:py-24">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl text-white mb-8 max-w-2xl">
                Transform product packaging into an interactive experience with light-up elements.
              </h2>
            </FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {["Brand differentiation", "Freshness indicators", "Anti-counterfeiting", "Interactive unboxing"].map((feature, i) => (
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

      <InViewSection className="border-b-section bg-[#0a0a0a]" hoverClassName="group group/medical">
        {/* Background image - shows on hover at 30% */}
        <div className="absolute inset-0 opacity-0 group-hover/medical:opacity-30 transition-opacity duration-500 z-0">
          <Image src="/hand-light.jpg" alt="Medical" fill className="object-cover" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 relative z-10">
          {/* Index */}
          <div className="px-6 lg:px-16 py-16 lg:py-24 border-b lg:border-b-0 lg:border-r border-[#1a1a1a]">
            <FadeIn>
              <p className="tech-label mb-2">Phototherapy & Diagnostics</p>
              <p className="section-title">Medical</p>
            </FadeIn>
          </div>

          {/* Content */}
          <div className="lg:col-span-2 px-6 lg:px-16 py-16 lg:py-24">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl text-white mb-8 max-w-2xl">
                Flexible, biocompatible light sources for phototherapy, wound healing, and diagnostics.
              </h2>
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

      {/* Custom Application */}
      <InViewSection className="border-b-section">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left */}
          <div className="px-6 lg:px-16 py-24 border-b lg:border-b-0 lg:border-r border-[#1a1a1a]">
            <FadeIn>
              <p className="tech-label mb-2">Custom Solutions</p>
              <p className="section-title mb-8">Your Vision</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-3xl md:text-4xl text-white mb-8">
                Your Application Here
              </h2>
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

          {/* Right */}
          <div className="relative px-6 lg:px-16 py-24 flex items-center justify-center group cursor-pointer">
            <div className="absolute inset-0 grid-lines opacity-20" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
            <FadeIn delay={0.2}>
              <div className="relative z-10 text-center">
                <div className="w-24 h-24 mx-auto mb-8 border border-[#1a1a1a] flex items-center justify-center group-hover:border-[#253ff6]/30 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.2),0_0_60px_rgba(37,63,246,0.3)] transition-all duration-500">
                  <span className="mono text-4xl text-[#253ff6]">+</span>
                </div>
                <p className="text-white text-xl mb-2">What Will You Create?</p>
                <p className="text-[#808080]">The next breakthrough application</p>
              </div>
            </FadeIn>
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
