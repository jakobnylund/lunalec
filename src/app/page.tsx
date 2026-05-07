"use client";

import Button from "@/components/Button";
import DotField from "@/components/DotField";
import FadeIn from "@/components/FadeIn";
import InViewSection from "@/components/InViewSection";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";

export default function Home() {
  const { isLight } = useTheme();

  return (
    <div className="bg-[#050505]">
      {/* Hero - doesn't need InViewSection as it has unique hero hover behavior */}
      <section className="min-h-[60dvh] flex flex-col justify-between border-b-section relative group/hero">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Mobile portrait crop */}
          <Image
            src={isLight ? "/header-light.jpg" : "/lunalec-strip-mobile.jpg"}
            alt="LEC strip with glowing LunaLEC components on a printed flexible substrate"
            fill
            sizes="100vw"
            className="md:hidden object-cover object-center transition-transform duration-[1200ms] ease-[cubic-bezier(0.32,0.72,0,1)] group-hover/hero:scale-[1.04]"
            priority
          />
          {/* Desktop landscape crop */}
          <Image
            src={isLight ? "/header-light.jpg" : "/lunalec-strip.jpg"}
            alt="LEC strip with glowing LunaLEC components on a printed flexible substrate"
            fill
            sizes="100vw"
            className="hidden md:block object-cover object-right transition-transform duration-[1200ms] ease-[cubic-bezier(0.32,0.72,0,1)] group-hover/hero:scale-[1.04]"
            priority
          />
          {/* Gradient overlay for text readability */}
          {!isLight && (
            <>
              {/* Mobile: vertical fade from top so headline stays readable over centered strip */}
              <div className="md:hidden absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/70 to-[#050505]/30 transition-opacity duration-500 group-hover/hero:opacity-60" />
              {/* Desktop: horizontal fade — strip on right, text on left */}
              <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#050505]/70 via-[#050505]/30 to-transparent transition-opacity duration-500 group-hover/hero:opacity-40" />
            </>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 flex items-center relative z-10">
          <div className="px-6 lg:px-16 py-24 max-w-3xl">
            <FadeIn>
              <p className="tech-label mb-8">Light-emitting Electrochemical Cells</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-[clamp(2.5rem,8vw,5.5rem)] leading-[0.9] tracking-tighter text-white mb-8">
                Printed
                <br />
                <span className="text-[#253ff6]">Light</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-[#b0b0b0] text-lg max-w-md leading-relaxed mb-4">
                Introducing <span className="text-white font-medium">Lumifoil</span>
              </p>
            </FadeIn>
            <FadeIn delay={0.25}>
              <p className="text-[#b0b0b0] text-lg max-w-md leading-relaxed mb-10">
                We develop the next generation of printable light sources based on sustainable LEC technology. Unlocking uniquely customizable emission patterns and a thin, flexible form factor that can be integrated into a variety of products.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex gap-4">
                <Button href="/technology">Learn More</Button>
                <Button href="/contact" variant="ghost">Contact →</Button>
              </div>
            </FadeIn>
          </div>

        </div>

        {/* Bottom stats bar */}
        <div className="border-t border-[#1a1a1a] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 relative z-10 bg-[#050505]">
          {[
            { label: "Manufacturing", value: "Printable" },
            { label: "Emission pattern", value: "Customizable" },
            { label: "Form Factor", value: "Ultra thin & Flexible" },
            { label: "Materials", value: "Sustainable" },
            { label: "Substrate", value: "Any Surface" },
          ].map((stat, i) => (
            <FadeIn key={stat.label} delay={0.4 + i * 0.1}>
              <div className={`group/card px-6 py-6 ${i === 0 ? "lg:pl-16" : ""} ${i > 0 ? "border-l border-[#1a1a1a]" : ""} hover:bg-white hover:shadow-[inset_0_0_100px_rgba(255,255,255,1),0_0_40px_rgba(255,255,255,0.6),0_0_80px_rgba(37,63,246,0.3)] transition-all duration-300`}>
                <p className="tech-label mb-1 transition-colors duration-300 group-hover/card:!text-[#050505]">{stat.label}</p>
                <p className="mono text-base text-white transition-colors duration-300 group-hover/card:!text-[#050505]">{stat.value}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* About LEC */}
      <InViewSection className="border-b-section" noDotGrid>
        {!isLight && <DotField />}
        <div className="grid grid-cols-1 lg:grid-cols-3 relative">
          {/* Index */}
          <div className="px-6 lg:px-16 py-16 lg:py-24 border-b lg:border-b-0 lg:border-r border-[#1a1a1a]">
            <FadeIn>
              <p className="tech-label mb-2">Our Breakthrough</p>
              <p className="section-title">LEC Technology</p>
            </FadeIn>
          </div>

          {/* Content */}
          <div className="lg:col-span-2 px-6 lg:px-16 py-16 lg:py-24">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl text-white mb-8 max-w-2xl">
                Light-emitting Electrochemical Cells represent a fundamental shift in how we create light.
              </h2>
            </FadeIn>
            <FadeIn delay={0.05}>
              <p className="text-[#b0b0b0] text-lg leading-relaxed mb-8 max-w-2xl">
                Traditional light sources such as LEDs and OLEDs require precise semiconductor manufacturing and vacuum processes, which drives up cost and limits customizability.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-[#b0b0b0] text-lg leading-relaxed mb-8 max-w-2xl">
                Using our LEC technology (Light-emitting Electrochemical Cell), we have developed a method of manufacturing light-emitting devices using solution-processed materials that can be deposited in their entirety using standard printing techniques—screen printing, inkjet, roll-to-roll. A breakthrough that allows LEC light sources with uniquely customizable emission patterns at an ultra-thin and flexible form factor, all at a low cost.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-[#b0b0b0] text-lg leading-relaxed mb-6 max-w-2xl">
                This opens possibilities that were previously impossible: light-emitting
                labels, glowing packaging, smart cards with integrated displays, and
                architectural surfaces that illuminate.
              </p>
            </FadeIn>
            <FadeIn delay={0.25}>
              <p className="text-[#b0b0b0] text-lg leading-relaxed mb-10 max-w-2xl">
                This is the science behind Lumifoil — our product line that brings printable light to market.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <Link href="/technology" className="arrow-link text-base text-[#253ff6] hover:text-white transition-colors">
                Technology Details
              </Link>
            </FadeIn>
          </div>
        </div>
      </InViewSection>

      {/* Applications */}
      <InViewSection id="applications" className="border-b-section bg-[#0a0a0a]">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {/* Index */}
          <div className="px-6 lg:px-16 py-16 lg:py-24 border-b lg:border-b-0 lg:border-r border-[#1a1a1a]">
            <FadeIn>
              <p className="tech-label mb-2">Use Cases</p>
              <p className="section-title">Applications</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-[#b0b0b0] text-base leading-relaxed mt-8 max-w-sm">
                Lumifoil enables entirely new product categories. From smart cards to anti-counterfeiting, printable light unlocks possibilities that didn&apos;t exist before.
              </p>
            </FadeIn>
          </div>

          {/* 2x2 Feature Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 content-start">
            {[
              {
                title: "Smart Cards",
                eyebrow: "Authentication & Display",
                desc: "Lumifoil integrates seamlessly into payment cards, access badges, and loyalty cards — powered wirelessly via NFC.",
                features: ["Visual authentication", "Brand highlighting", "Esthetic illuminated designs", "NFC-powered"],
              },
              {
                title: "Packaging",
                eyebrow: "Brand Differentiation",
                desc: "Transform product packaging into an interactive experience with light-up logos, freshness indicators, and Authentic Light™ anti-counterfeiting.",
                features: ["Brand differentiation", "Freshness indicators", "Anti-counterfeiting", "Interactive unboxing"],
              },
              {
                title: "Labels & Tags",
                eyebrow: "Status Indicators",
                desc: "Flexibility makes Lumifoil ideal for labels and tags — status indicators, authentication marks, and temperature alerts that light up when it matters.",
                features: ["Status indicators", "Authentication marks", "Temperature alerts", "Ultra-thin format"],
              },
              {
                title: "Authentic Light™",
                eyebrow: "Security & Authentication",
                desc: "Hidden and dynamic light patterns embedded into Lumifoil — patterns that only appear under activation and require our proprietary technology to produce.",
                features: ["Hidden patterns", "Dynamic sequences", "Impossible to copy", "No app needed"],
              },
            ].map((app, i) => (
              <FadeIn key={app.title} delay={i * 0.08}>
                <div className={`group/card px-6 lg:px-10 py-10 border-b border-[#1a1a1a] ${i % 2 === 1 ? "md:border-l" : ""} hover:bg-white hover:shadow-[inset_0_0_100px_rgba(255,255,255,1),0_0_40px_rgba(255,255,255,0.6),0_0_80px_rgba(37,63,246,0.3)] transition-all duration-300 cursor-pointer h-full flex flex-col`}>
                  <p className="tech-label mb-3 transition-colors duration-300 group-hover/card:!text-[#050505]/60">{app.eyebrow}</p>
                  <p className="text-white text-2xl mb-4 transition-colors duration-300 group-hover/card:!text-[#050505]">{app.title}</p>
                  <p className="text-base text-[#b0b0b0] leading-relaxed mb-6 transition-colors duration-300 group-hover/card:!text-[#050505]">{app.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {app.features.map((f) => (
                      <span key={f} className="text-xs text-[#808080] border border-[#1a1a1a] px-2 py-1 transition-colors duration-300 group-hover/card:!text-[#050505] group-hover/card:border-[#050505]/20">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </InViewSection>

      {/* Divider Image - Hidden
      <section className="relative h-[50vh] border-b-section overflow-hidden group/divider">
        <Image
          src="/header-lion.jpg"
          alt="LEC light technology"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#050505] transition-opacity duration-500 group-hover/divider:opacity-50" />
      </section>
      */}

      {/* Origin */}
      <InViewSection className="border-b-section">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {/* Index */}
          <div className="px-6 lg:px-16 py-16 lg:py-24 border-b lg:border-b-0 lg:border-r border-[#1a1a1a]">
            <FadeIn>
              <p className="tech-label mb-2">Our Story</p>
              <p className="section-title">Origin</p>
            </FadeIn>
          </div>

          {/* Content */}
          <div className="lg:col-span-2 px-6 lg:px-16 py-16 lg:py-24">
            <FadeIn>
              <div className="flex items-baseline gap-4 mb-8">
                <span className="mono text-6xl md:text-8xl text-[#253ff6]">2012</span>
                <span className="text-[#808080]">Founded</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-[#b0b0b0] text-lg leading-relaxed mb-8 max-w-2xl">
                LunaLEC was founded as a spin-off from Umeå University, building on
                decades of pioneering research in organic electronics. Today we translate
                that science into commercial applications.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="mt-12">
                <p className="tech-label mb-2">Location</p>
                <p className="text-white">Umeå, Sweden</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="mt-10">
                <Link href="/about" className="arrow-link text-base text-[#253ff6] hover:text-white transition-colors">
                  About LunaLEC
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </InViewSection>
    </div>
  );
}
