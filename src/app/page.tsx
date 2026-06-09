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
    <div className="bg-[var(--background)]">
      {/* Hero - doesn't need InViewSection as it has unique hero hover behavior */}
      <section className="min-h-[60dvh] flex flex-col justify-between border-b-section relative group/hero">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {isLight ? (
            <>
              {/* Default — light is off */}
              <Image
                src="/hero/bright.jpg"
                alt="Smart card with the LunaLEC logo unlit on a bright surface"
                fill
                sizes="100vw"
                className="object-cover object-center md:object-right"
                priority
              />
              {/* On hover — light turns on */}
              <Image
                src="/hero/bright-on.jpg"
                alt="Smart card with the LunaLEC logo glowing on a bright surface"
                fill
                sizes="100vw"
                className="object-cover object-center md:object-right opacity-0 transition-opacity duration-100 ease-in group-hover/hero:opacity-100"
              />
            </>
          ) : (
            <>
              {/* Default — light is off */}
              <Image
                src="/hero/off.jpg"
                alt="Smart card with the LunaLEC logo unlit"
                fill
                sizes="100vw"
                className="object-cover object-center md:object-right"
                priority
              />
              {/* On hover — light turns on */}
              <Image
                src="/hero/on.jpg"
                alt="Smart card with the LunaLEC logo glowing"
                fill
                sizes="100vw"
                className="object-cover object-center md:object-right opacity-0 transition-opacity duration-100 ease-in group-hover/hero:opacity-100"
              />
            </>
          )}
          {/* Gradient overlay for text readability */}
          {!isLight ? (
            <>
              {/* Mobile: vertical fade from top so headline stays readable over centered strip */}
              <div className="md:hidden absolute inset-0 bg-gradient-to-b from-[var(--background)] via-[#050505]/70 to-[#050505]/30 transition-opacity duration-500 group-hover/hero:opacity-60" />
              {/* Desktop: horizontal fade — strip on right, text on left */}
              <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#050505]/70 via-[#050505]/30 to-transparent transition-opacity duration-500 group-hover/hero:opacity-40" />
            </>
          ) : (
            <>
              {/* Light mode mobile: vertical white fade so the dark card doesn't crash the text */}
              <div className="md:hidden absolute inset-0 bg-[linear-gradient(170deg,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0.55)_35%,rgba(255,255,255,0.15)_55%,transparent_75%)]" />
              {/* Light mode desktop: angled white wash behind text, softens before reaching the card */}
              <div className="hidden md:block absolute inset-0 bg-[linear-gradient(105deg,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0.6)_25%,rgba(255,255,255,0.2)_45%,transparent_65%)]" />
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
              <h1 className="text-[clamp(2.75rem,7vw,5rem)] leading-[0.9] tracking-tighter text-white mb-8">
                Printed
                <br />
                <span className="text-[#253ff6]">Light</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.25}>
              <p className="text-[#b0b0b0] text-lg max-w-md leading-relaxed mb-10">
                We develop the next generation of printable light sources based on sustainable LEC technology. Unlocking digitally customizable emission patterns in a thin and flexible form factor that can be integrated into a variety of products.
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
        <div className="border-t border-[#1a1a1a] grid grid-cols-2 lg:grid-cols-4 relative z-10 bg-[var(--background)]">
          {[
            { label: "Manufacturing", value: "Printable" },
            { label: "Emission pattern", value: "Customizable" },
            { label: "Form Factor", value: "Ultra thin & Flexible" },
            { label: "Materials", value: "Sustainable" },
          ].map((stat, i) => (
            <FadeIn key={stat.label} delay={0.4 + i * 0.1}>
              <div
                className={`group/card px-6 lg:px-12 py-6 cell-glow border-[#1a1a1a] ${
                  i % 2 === 1 ? "border-l" : i > 0 ? "lg:border-l" : ""
                } ${i >= 2 ? "border-t lg:border-t-0" : ""}`}
              >
                <p className="tech-label mb-1 transition-colors duration-300 group-hover/card:!text-[#050505]">{stat.label}</p>
                <p className="mono text-base text-white transition-colors duration-300 group-hover/card:!text-[#050505]">{stat.value}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* About LEC */}
      <InViewSection className="border-b-section" noDotGrid>
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
                LECs represent a fundamental shift in how we create light.
              </h2>
            </FadeIn>
            <FadeIn delay={0.05}>
              <p className="text-[#b0b0b0] text-lg leading-relaxed mb-8 max-w-2xl">
                Traditional light sources such as LEDs and OLEDs require precise semiconductor manufacturing and vacuum processes which drives up cost and limits customizability.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-[#b0b0b0] text-lg leading-relaxed mb-8 max-w-2xl">
                Using LEC technology (the Light-emitting Electrochemical Cell), we have recently developed a method of manufacturing light emitting devices in its entirety using standard roll-to-roll printing techniques—inkjet and screen printing. A breakthrough that allows LEC light sources with uniquely customizable emission patterns at an ultra-thin and flexible form factor, all at a low cost.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-[#b0b0b0] text-lg leading-relaxed mb-10 max-w-2xl">
                This opens possibilities that were previously impossible: light-emitting labels, glowing packaging, smart cards with integrated displays, and architectural surfaces that illuminate.
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
                LECs enables entirely new product categories. From smart cards to anti-counterfeiting, printable light unlocks possibilities that didn&apos;t exist before.
              </p>
            </FadeIn>
          </div>

          {/* Stacked applications */}
          <div className="lg:col-span-2 grid grid-cols-1 content-start">
            {[
              {
                title: "Smart Cards",
                eyebrow: "Authentication & Display",
                desc: "LECs integrate seamlessly into card form factors. Integrate static light displays into payment cards, access badges, and loyalty cards. Visual authentication, brand highlighting, esthetic illuminated designs — powered wirelessly via NFC.",
                features: ["Visual authentication", "Brand highlighting", "Esthetic illuminated designs", "NFC-powered"],
              },
              {
                title: "Packaging & Labels",
                eyebrow: "Brand Differentiation",
                desc: "LECs transform product packaging into an interactive brand experience with light-up elements and labels. Light-up logos, freshness indicators, Authentic Light™ anti-counterfeiting — all in a label-thin format.",
                features: ["Brand differentiation", "Freshness indicators", "Anti-counterfeiting", "Interactive unboxing"],
              },
              {
                title: "Authentic Light™",
                eyebrow: "Security & Authentication",
                desc: "Counterfeiting is a global problem costing brands billions. Authentic Light gives you a powerful new tool: light-based authentication that's impossible to replicate with other technologies. Our patented technology embeds hidden and dynamic light patterns into LEC products — patterns that only appear under activation and require our proprietary technology to produce. No apps. No scanners. Just visible proof of authenticity.",
                features: ["Hidden patterns", "Dynamic sequences", "Impossible to counterfeit", "Visual verification"],
              },
              {
                title: "Your Vision",
                eyebrow: "Custom Solutions",
                desc: "The applications shown here are just the beginning. LEC technology is a platform that can be adapted to countless use cases we haven't even imagined yet. If you have a product idea that could benefit from thin, flexible, printable light, we want to hear about it.",
                cta: { label: "Discuss Your Idea →", href: "/contact" },
              },
            ].map((app, i) => (
              <FadeIn key={app.title} delay={i * 0.08}>
                <div className={`group/card px-6 lg:px-10 py-10 border-b border-[#1a1a1a] cell-glow cursor-pointer h-full flex flex-col`}>
                  <p className="tech-label mb-3 transition-colors duration-300 group-hover/card:!text-[#050505]/60">{app.eyebrow}</p>
                  <p className="text-white text-2xl mb-4 transition-colors duration-300 group-hover/card:!text-[#050505]">{app.title}</p>
                  <p className="text-base text-[#b0b0b0] leading-relaxed mb-6 transition-colors duration-300 group-hover/card:!text-[#050505]">{app.desc}</p>
                  {app.cta ? (
                    <div className="mt-auto">
                      <Link
                        href={app.cta.href}
                        className="inline-block text-base text-[#253ff6] border border-[#253ff6] px-5 py-3 hover:bg-[#253ff6] hover:text-white transition-all duration-300 group-hover/card:!border-[#050505] group-hover/card:!text-[#050505] group-hover/card:hover:!bg-[#050505] group-hover/card:hover:!text-white"
                      >
                        {app.cta.label}
                      </Link>
                    </div>
                  ) : (
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {app.features?.map((f) => (
                        <span key={f} className="text-xs text-[#808080] border border-[#1a1a1a] px-2 py-1 transition-colors duration-300 group-hover/card:!text-[#050505] group-hover/card:border-[#050505]/20">
                          {f}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </InViewSection>

      {/* Divider — flexible LEC band */}
      <section className="hero-overlay relative h-[60vh] md:h-[80vh] border-b-section overflow-hidden group/divider">
        <Image
          src="/lec/divider-home.jpg"
          alt="Flexible LEC tile band glowing yellow, held in hand"
          fill
          sizes="100vw"
          className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.32,0.72,0,1)] group-hover/divider:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/30 via-transparent to-[#050505] transition-opacity duration-500 group-hover/divider:opacity-60" />
      </section>

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
