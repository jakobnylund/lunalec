"use client";

import Button from "@/components/Button";
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
      <section className="min-h-[60vh] flex flex-col justify-between border-b-section relative group/hero">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src={isLight ? "/header-light.jpg" : "/header-hand.jpg"}
            alt="LEC light technology"
            fill
            className="object-cover"
            priority
          />
          {/* Gradient overlay for text readability */}
          {!isLight && (
            <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent transition-opacity duration-500 group-hover/hero:opacity-60" />
          )}
        </div>

        {/* Content */}
        <div className="flex-1 flex items-center relative z-10">
          <div className="px-6 lg:px-16 py-24 max-w-3xl">
            <FadeIn>
              <p className="tech-label mb-8">Light-emitting Electrochemical Cells</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-[clamp(2.5rem,8vw,5.5rem)] leading-[0.9] tracking-tight text-white mb-8">
                Print
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
                We develop printable light sources that can be integrated into any surface.
                Thin, flexible, sustainable.
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
        <div className="border-t border-[#1a1a1a] grid grid-cols-2 md:grid-cols-4 relative z-10 bg-[#050505]">
          {[
            { label: "Manufacturing", value: "Printable" },
            { label: "Form Factor", value: "Flexible" },
            { label: "Materials", value: "Sustainable" },
            { label: "Substrate", value: "Any Surface" },
          ].map((stat, i) => (
            <FadeIn key={stat.label} delay={0.4 + i * 0.1}>
              <div className={`group/card px-6 py-6 ${i === 0 ? "lg:pl-16" : ""} ${i > 0 ? "border-l border-[#1a1a1a]" : ""} hover:bg-white hover:shadow-[inset_0_0_100px_rgba(255,255,255,1),0_0_40px_rgba(255,255,255,0.6),0_0_80px_rgba(37,63,246,0.3)] transition-all duration-300`}>
                <p className="tech-label mb-1 transition-colors duration-300 group-hover/card:!text-[#050505]">{stat.label}</p>
                <p className="mono text-lg text-white transition-colors duration-300 group-hover/card:!text-[#050505]">{stat.value}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* About LEC */}
      <InViewSection className="border-b-section">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {/* Index */}
          <div className="px-6 lg:px-16 py-16 lg:py-24 border-b lg:border-b-0 lg:border-r border-[#1a1a1a]">
            <FadeIn>
              <p className="tech-label mb-2">The Breakthrough</p>
              <p className="section-title">Technology</p>
            </FadeIn>
          </div>

          {/* Content */}
          <div className="lg:col-span-2 px-6 lg:px-16 py-16 lg:py-24">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl text-white mb-8 max-w-2xl">
                Light-emitting Electrochemical Cells represent a fundamental shift in how we create light.
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-[#b0b0b0] text-lg leading-relaxed mb-8 max-w-2xl">
                Unlike traditional LEDs that require precise semiconductor manufacturing,
                LECs use solution-processed materials that can be deposited using standard
                printing techniques—screen printing, inkjet, roll-to-roll.
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
              <Link href="/technology" className="text-base text-[#253ff6] hover:text-white transition-colors">
                Technology Details →
              </Link>
            </FadeIn>
          </div>
        </div>
      </InViewSection>

      {/* Comparison */}
      <InViewSection className="border-b-section bg-[#0a0a0a]" hoverClassName="group group/comparison">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {/* Index */}
          <div className="px-6 lg:px-16 py-16 lg:py-24 border-b lg:border-b-0 lg:border-r border-[#1a1a1a]">
            <FadeIn>
              <p className="tech-label mb-2">LED vs OLED vs LEC</p>
              <p className="section-title">Comparison</p>
            </FadeIn>
          </div>

          {/* Table */}
          <div className="lg:col-span-2">
            {/* Desktop Header - hidden on mobile */}
            <div className="hidden md:grid grid-cols-4 border-b border-[#1a1a1a] bg-[#111]">
              <div className="px-6 py-4 transition-all duration-300 group-hover/comparison:bg-[var(--accent)]/5">
                <p className="tech-label"></p>
              </div>
              <div className="px-6 py-4 border-l border-[#1a1a1a] transition-all duration-300 group-hover/comparison:bg-[var(--accent)]/10">
                <p className="tech-label transition-colors duration-300 group-hover/comparison:text-white">LED</p>
              </div>
              <div className="px-6 py-4 border-l border-[#1a1a1a] transition-all duration-300 group-hover/comparison:bg-[var(--accent)]/20">
                <p className="tech-label transition-colors duration-300 group-hover/comparison:text-white">OLED</p>
              </div>
              <div className="px-6 py-4 border-l border-[#1a1a1a] transition-all duration-300 group-hover/comparison:bg-white group-hover/comparison:shadow-[0_0_40px_rgba(255,255,255,0.5)]">
                <p className="tech-label text-[#253ff6] transition-colors duration-300">LEC</p>
              </div>
            </div>
            {/* Desktop Rows - hidden on mobile */}
            <div className="hidden md:block">
              {[
                { label: "Manufacturing →", led: "Semiconductor", oled: "Vacuum", lec: "Printing" },
                { label: "Form Factor →", led: "Point source", oled: "Thin panel", lec: "Ultra-thin, flexible" },
                { label: "Substrate →", led: "Rigid PCB", oled: "Glass/plastic", lec: "Paper, plastic, fabric" },
                { label: "Rare Earth →", led: "Yes", oled: "Some", lec: "None" },
              ].map((row, i) => (
                <FadeIn key={row.label} delay={i * 0.05}>
                  <div className={`grid grid-cols-4 border-b border-[#1a1a1a] ${i % 2 === 0 ? "bg-[#0a0a0a]" : "bg-[#050505]"}`}>
                    <div className="px-6 py-4 transition-all duration-300 group-hover/comparison:bg-[var(--accent)]/5">
                      <p className="text-base text-[#808080] transition-colors duration-300 group-hover/comparison:text-white/60">{row.label}</p>
                    </div>
                    <div className="px-6 py-4 border-l border-[#1a1a1a] transition-all duration-300 group-hover/comparison:bg-[var(--accent)]/10">
                      <p className="text-base text-[#b0b0b0] transition-colors duration-300 group-hover/comparison:text-white/80">{row.led}</p>
                    </div>
                    <div className="px-6 py-4 border-l border-[#1a1a1a] transition-all duration-300 group-hover/comparison:bg-[var(--accent)]/20">
                      <p className="text-base text-[#b0b0b0] transition-colors duration-300 group-hover/comparison:text-white/90">{row.oled}</p>
                    </div>
                    <div className="px-6 py-4 border-l border-[#1a1a1a] transition-all duration-300 group-hover/comparison:bg-white group-hover/comparison:shadow-[0_0_30px_rgba(255,255,255,0.4)]">
                      <p className="text-base text-white transition-colors duration-300 group-hover/comparison:text-[#050505] group-hover/comparison:font-medium">{row.lec}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
            {/* Mobile Layout - stacked cards */}
            <div className="md:hidden">
              {[
                { label: "Manufacturing", led: "Semiconductor", oled: "Vacuum", lec: "Printing" },
                { label: "Form Factor", led: "Point source", oled: "Thin panel", lec: "Ultra-thin, flexible" },
                { label: "Substrate", led: "Rigid PCB", oled: "Glass/plastic", lec: "Paper, plastic, fabric" },
                { label: "Rare Earth", led: "Yes", oled: "Some", lec: "None" },
              ].map((row, i) => (
                <FadeIn key={row.label} delay={i * 0.05}>
                  <div className={`border-b border-[#1a1a1a] ${i % 2 === 0 ? "bg-[#0a0a0a]" : "bg-[#050505]"}`}>
                    <div className="px-6 py-3 border-b border-[#1a1a1a]">
                      <p className="tech-label">{row.label}</p>
                    </div>
                    <div className="grid grid-cols-3">
                      <div className="px-4 py-4">
                        <p className="text-xs text-[#808080] mb-1">LED</p>
                        <p className="text-sm text-[#b0b0b0]">{row.led}</p>
                      </div>
                      <div className="px-4 py-4 border-l border-[#1a1a1a]">
                        <p className="text-xs text-[#808080] mb-1">OLED</p>
                        <p className="text-sm text-[#b0b0b0]">{row.oled}</p>
                      </div>
                      <div className="px-4 py-4 border-l border-[#1a1a1a] bg-[#253ff6]/10">
                        <p className="text-xs text-[#253ff6] mb-1">LEC</p>
                        <p className="text-sm text-white font-medium">{row.lec}</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </InViewSection>

      {/* Applications */}
      <InViewSection className="border-b-section">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {/* Index */}
          <div className="px-6 lg:px-16 py-16 lg:py-24 border-b lg:border-b-0 lg:border-r border-[#1a1a1a]">
            <FadeIn>
              <p className="tech-label mb-2">Use Cases</p>
              <p className="section-title">Applications</p>
            </FadeIn>
          </div>

          {/* Grid - 2x4 layout */}
          <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 content-start">
            {[
              { name: "Smart Cards", desc: "Lumifoil authentication & display" },
              { name: "Packaging", desc: "Lumifoil brand differentiation" },
              { name: "Labels", desc: "Lumifoil status indicators" },
              { name: "Signage", desc: "Lumifoil flexible displays" },
              { name: "Architecture", desc: "Lumifoil ambient lighting" },
              { name: "Medical", desc: "Lumifoil phototherapy" },
              { name: "Wearables", desc: "Lumifoil integrated displays" },
              { name: "More →", desc: "All applications", link: true },
            ].map((app, i) => (
              <FadeIn key={app.name} delay={i * 0.05}>
                {app.link ? (
                  <Link href="/applications" className={`group/card px-6 py-6 border-b border-[#1a1a1a] ${i % 2 !== 0 ? "border-l" : ""} ${i % 4 !== 0 ? "md:border-l" : ""} hover:bg-white hover:shadow-[inset_0_0_100px_rgba(255,255,255,1),0_0_40px_rgba(255,255,255,0.6),0_0_80px_rgba(37,63,246,0.3)] transition-all duration-300 cursor-pointer flex flex-col`}>
                    <div className="w-10 h-10 bg-[#253ff6] flex items-center justify-center mb-4 transition-colors duration-300 group-hover/card:bg-[#050505]">
                      <span className="mono text-sm text-[#050505]">→</span>
                    </div>
                    <p className="text-white mb-1 transition-colors duration-300 group-hover/card:!text-[#050505]">{app.name}</p>
                    <p className="text-sm text-[#808080] transition-colors duration-300 group-hover/card:!text-[#050505]">{app.desc}</p>
                  </Link>
                ) : (
                  <div className={`group/card px-6 py-6 border-b border-[#1a1a1a] ${i % 2 !== 0 ? "border-l" : ""} ${i % 4 !== 0 ? "md:border-l" : ""} hover:bg-white hover:shadow-[inset_0_0_100px_rgba(255,255,255,1),0_0_40px_rgba(255,255,255,0.6),0_0_80px_rgba(37,63,246,0.3)] transition-all duration-300 cursor-pointer`}>
                    <div className="w-10 h-10 bg-[#253ff6] flex items-center justify-center mb-4 transition-colors duration-300 group-hover/card:bg-[#050505]">
                      <span className="mono text-sm text-[#050505]">0{i + 1}</span>
                    </div>
                    <p className="text-white mb-1 transition-colors duration-300 group-hover/card:!text-[#050505]">{app.name}</p>
                    <p className="text-sm text-[#808080] transition-colors duration-300 group-hover/card:!text-[#050505]">{app.desc}</p>
                  </div>
                )}
              </FadeIn>
            ))}
          </div>
        </div>
      </InViewSection>

      {/* Partnership */}
      <InViewSection className="border-b-section bg-[#0a0a0a]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left */}
          <div className="px-6 lg:px-16 py-24 border-b lg:border-b-0 lg:border-r border-[#1a1a1a]">
            <FadeIn>
              <p className="tech-label mb-2">Work With Us</p>
              <p className="section-title mb-8">Partnership</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-3xl md:text-4xl text-white mb-8">
                Ready to integrate printable light into your products?
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-[#b0b0b0] text-lg leading-relaxed mb-10 max-w-md">
                We work with forward-thinking companies across industries.
                From technology licensing to joint development.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex gap-4">
                <Button href="/partners">Partnership Models</Button>
                <Button href="/contact" variant="ghost">Get in Touch →</Button>
              </div>
            </FadeIn>
          </div>

          {/* Right - Models */}
          <div className="grid grid-cols-2 content-start">
            {[
              { name: "Licensing", desc: "Access our IP portfolio" },
              { name: "Joint Development", desc: "Co-develop solutions" },
              { name: "OEM Supply", desc: "Custom manufacturing" },
              { name: "Research", desc: "Academic collaboration" },
            ].map((model, i) => (
              <FadeIn key={model.name} delay={0.1 + i * 0.05}>
                <div className={`group/card px-6 py-8 border-[#1a1a1a] border-b ${i % 2 === 1 ? "border-l" : ""} hover:bg-white hover:shadow-[inset_0_0_100px_rgba(255,255,255,1),0_0_40px_rgba(255,255,255,0.6),0_0_80px_rgba(37,63,246,0.3)] transition-all duration-300 cursor-pointer`}>
                  <p className="text-white mb-1 transition-colors duration-300 group-hover/card:!text-[#050505]">{model.name}</p>
                  <p className="text-base text-[#808080] transition-colors duration-300 group-hover/card:!text-[#050505]">{model.desc}</p>
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
                <span className="mono text-6xl md:text-8xl text-[#253ff6]">2014</span>
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
                <Link href="/about" className="text-base text-[#253ff6] hover:text-white transition-colors">
                  About LunaLEC →
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </InViewSection>
    </div>
  );
}
