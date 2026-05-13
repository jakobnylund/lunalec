"use client";

import Button from "@/components/Button";
import DotField from "@/components/DotField";
import FadeIn from "@/components/FadeIn";
import InViewSection from "@/components/InViewSection";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";

export default function TechnologyPage() {
  const { isLight } = useTheme();

  return (
    <div className="bg-[var(--background)]">
      {/* Hero */}
      <section className="min-h-[55dvh] flex flex-col justify-center border-b-section relative group/hero overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={isLight ? "/sheet-light.jpg" : "/lunalec-strip.jpg"}
            alt="LEC strip with glowing LunaLEC components on a printed flexible substrate"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          {/* Gradient overlay for text readability */}
          {!isLight && (
            <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent transition-opacity duration-500 group-hover/hero:opacity-60" />
          )}
        </div>

        <div className="relative z-10">
          {/* Left */}
          <div className="flex flex-col justify-center px-6 lg:px-16 py-24 max-w-3xl">
            <FadeIn>
              <p className="tech-label mb-8">Understanding LEC</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.9] tracking-tighter mb-8">
                <span style={{ color: 'white' }}>Light-emitting</span>
                <br />
                <span className="text-[#253ff6]">Electrochemical Cells</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-[#b0b0b0] text-lg max-w-md leading-relaxed">
                The next revolution in lighting technology.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* What is LEC */}
      <InViewSection className="border-b-section" noDotGrid>
        {!isLight && <DotField />}
        <div className="grid grid-cols-1 lg:grid-cols-3 relative">
          {/* Index */}
          <div className="px-6 lg:px-16 py-16 lg:py-24 border-b lg:border-b-0 lg:border-r border-[#1a1a1a]">
            <FadeIn>
              <p className="tech-label mb-2">How It Works</p>
              <p className="section-title">The Science</p>
            </FadeIn>
          </div>

          {/* Content */}
          <div className="lg:col-span-2 px-6 lg:px-16 py-16 lg:py-24">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl text-white mb-8 max-w-2xl">
                What makes LEC technology fundamentally different from traditional lighting?
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-[#b0b0b0] text-lg leading-relaxed mb-6 max-w-2xl">
                Current generation of LED and OLED generate light through a p-n junction built up by precise layers of semiconductors controlled to nanometer accuracy and achieving this level of molecular control requires energy and cost-intensive manufacturing processes.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-[#b0b0b0] text-lg leading-relaxed mb-6 max-w-2xl">
                The LEC (or Light-emitting Electrochemical Cell as the full technical name) creates its light-emitting pn-junction structure in a different way. From a single layer consisting of a mix of carefully selected organic semiconductors and mobile ions, the LEC forms a pn-junction naturally through ion reorganization and electrochemical reactions while being powered. This means that a similarly intricate pn-junction structure as in LEDs and OLEDs can be achieved while only having to manufacture a single active layer. Sticking to solution processable organic materials, we can also formulate inks that can be deposited by standard printing techniques, increasing customizability, reducing cost and offering a more energy- and environmentally friendly manufacturing.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-[#b0b0b0] text-lg leading-relaxed max-w-2xl">
                Our core knowledge and IP-portfolio of LEC operation, material selection, ink formulation and printing manufacturing allows us to develop this technology towards clear performance targets required by each product or application.
              </p>
            </FadeIn>
          </div>
        </div>
      </InViewSection>

      {/* Comparison Table */}
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
                <p className="tech-label">Property</p>
              </div>
              <div className="px-6 py-4 border-l border-[#1a1a1a] transition-all duration-300 group-hover/comparison:bg-[var(--accent)]/10">
                <p className="tech-label transition-colors duration-300 group-hover/comparison:text-white">LED</p>
              </div>
              <div className="px-6 py-4 border-l border-[#1a1a1a] transition-all duration-300 group-hover/comparison:bg-[var(--accent)]/20">
                <p className="tech-label transition-colors duration-300 group-hover/comparison:text-white">OLED</p>
              </div>
              <div className="px-6 py-4 border-l border-[#1a1a1a] transition-all duration-300 group-hover/comparison:bg-white group-hover/comparison:shadow-[0_0_40px_rgba(255,255,255,0.5)]">
                <p className="tech-label text-[#253ff6] transition-colors duration-300 group-hover/comparison:text-[#050505]">LEC</p>
              </div>
            </div>
            {/* Desktop Rows - hidden on mobile */}
            <div className="hidden md:block">
              {[
                { label: "Manufacturing →", led: "Semiconductor fab", oled: "Vacuum deposition", lec: "Printing in ambient air" },
                { label: "Form Factor →", led: "Rigid", oled: "Thin, Rigid / Flexible", lec: "Ultra-thin, Flexible" },
                { label: "Emission →", led: "Point source", oled: "Area emission", lec: "Area emission" },
                { label: "Emission pattern →", led: "—", oled: "Expensive to customize", lec: "Easy to customize" },
                { label: "Substrate →", led: "Die, PCB", oled: "Glass, Plastic", lec: "Plastic, Foil, Glass" },
                { label: "Material Cost →", led: "Low", oled: "High", lec: "Very Low" },
                { label: "Rare Earth →", led: "Yes", oled: "Some", lec: "None" },
              ].map((row, i) => (
                <FadeIn key={row.label} delay={i * 0.05}>
                  <div className={`grid grid-cols-4 border-b border-[#1a1a1a] ${i % 2 === 0 ? "bg-[#0a0a0a]" : "bg-[var(--background)]"}`}>
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
                { label: "Manufacturing", led: "Semiconductor fab", oled: "Vacuum deposition", lec: "Printing in ambient air" },
                { label: "Form Factor", led: "Rigid", oled: "Thin, Rigid / Flexible", lec: "Ultra-thin, Flexible" },
                { label: "Emission", led: "Point source", oled: "Area emission", lec: "Area emission" },
                { label: "Emission pattern", led: "—", oled: "Expensive to customize", lec: "Easy to customize" },
                { label: "Substrate", led: "Die, PCB", oled: "Glass, Plastic", lec: "Plastic, Foil, Glass" },
                { label: "Material Cost", led: "Low", oled: "High", lec: "Very Low" },
                { label: "Rare Earth", led: "Yes", oled: "Some", lec: "None" },
              ].map((row, i) => (
                <FadeIn key={row.label} delay={i * 0.05}>
                  <div className={`border-b border-[#1a1a1a] ${i % 2 === 0 ? "bg-[#0a0a0a]" : "bg-[var(--background)]"}`}>
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

      {/* Specifications */}
      <InViewSection className="border-b-section">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {/* Index */}
          <div className="px-6 lg:px-16 py-16 lg:py-24 border-b lg:border-b-0 lg:border-r border-[#1a1a1a]">
            <FadeIn>
              <p className="tech-label mb-2">Technical Data</p>
              <p className="section-title">Specifications</p>
            </FadeIn>
          </div>

          {/* Specs Grid */}
          <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 content-start">
            {[
              { value: "<250μm", label: "Thickness", sub: "Total device stack" },
              { value: "DC Voltage", label: "Operation", sub: "Battery, NFC, RFID compatible" },
              { value: "White", label: "Emission", sub: "All colors available" },
              { value: "Print", label: "Manufacturing", sub: "Inkjet & screen printing" },
            ].map((spec, i) => (
              <FadeIn key={spec.label} delay={i * 0.08}>
                <div className={`group/card h-full px-6 py-12 border-b border-[#1a1a1a] ${i % 2 === 1 ? "border-l" : ""} ${i % 4 !== 0 ? "md:border-l" : ""} ${i % 4 === 0 ? "md:border-l-0" : ""} cell-glow`}>
                  <p className="mono text-3xl md:text-4xl text-[#253ff6] mb-3 transition-colors duration-300 group-hover/card:!text-[#050505]">
                    {spec.value}
                  </p>
                  <p className="text-white text-base mb-1 transition-colors duration-300 group-hover/card:!text-[#050505]">{spec.label}</p>
                  <p className="text-[#808080] text-sm transition-colors duration-300 group-hover/card:!text-[#050505]">{spec.sub}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </InViewSection>

      {/* Spectrum divider */}
      <section className="hero-overlay relative h-[55vh] md:h-[70vh] border-b-section overflow-hidden group/spectrum">
        <Image
          src="/lec/spectrum-bg.jpg"
          alt="LunaLEC team member in the lab"
          fill
          sizes="100vw"
          className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.32,0.72,0,1)] group-hover/spectrum:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] opacity-90 group-hover/spectrum:opacity-70 transition-opacity duration-500" />
        <div className="absolute inset-0 flex items-end">
          <div className="px-6 lg:px-16 py-12 lg:py-16 max-w-3xl">
            <FadeIn>
              <p className="tech-label mb-3">Across the Spectrum</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-3xl md:text-5xl text-white leading-tight tracking-tight">
                Tunable color, formulated as ink.
              </h2>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <InViewSection className="border-b-section bg-[#0a0a0a]">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {/* Index */}
          <div className="px-6 lg:px-16 py-16 lg:py-24 border-b lg:border-b-0 lg:border-r border-[#1a1a1a]">
            <FadeIn>
              <p className="tech-label mb-2">Environmental Impact</p>
              <p className="section-title">Sustainability</p>
            </FadeIn>
          </div>

          {/* Content */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 content-start">
            {[
              {
                title: "Abundant Materials",
                desc: "Earth-abundant materials without rare earth elements or conflict minerals.",
              },
              {
                title: "Low Energy",
                desc: "Solution-based printing requires less energy than traditional semiconductor manufacturing.",
              },
              {
                title: "Material Efficient",
                desc: "Printing allows efficient material usage, greatly reducing material waste during manufacturing.",
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1} className="h-full">
                <div className={`group/card px-6 py-12 border-b h-full ${i > 0 ? "md:border-l" : ""} border-[#1a1a1a] cell-glow cursor-pointer`}>
                  <p className="text-white mb-2 transition-colors duration-300 group-hover/card:!text-[#050505]">{item.title}</p>
                  <p className="text-base text-[#808080] transition-colors duration-300 group-hover/card:!text-[#050505]">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </InViewSection>

      {/* Gallery */}
      <InViewSection className="border-b-section">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {/* Index */}
          <div className="px-6 lg:px-16 py-16 lg:py-24 border-b lg:border-b-0 lg:border-r border-[#1a1a1a]">
            <FadeIn>
              <p className="tech-label mb-2">Behind the Scenes</p>
              <p className="section-title">From the Lab</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-[#b0b0b0] text-lg leading-relaxed mt-8">
                A glimpse into our research and development process. From early prototypes to production-ready technology.
              </p>
            </FadeIn>
          </div>

          {/* Gallery Grid */}
          <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3">
            {[
              { src: "/lec/spectrum-rainbow.jpg", alt: "Vials of LEC emitter inks across the visible spectrum" },
              { src: "/lec/tile-chip-macro.jpg", alt: "Macro of a printed LEC chip with the LunaLEC logo glowing" },
              { src: "/lec/tile-array-purple.jpg", alt: "Array of printed LEC tiles under UV illumination" },
              { src: "/lec/tile-curve-band.jpg", alt: "Curved LEC tile band lit by battery" },
              { src: "/lec/tile-curve-hero.jpg", alt: "Flexible LEC tile band glowing yellow, held in hand" },
              { src: "/lec/process-frame.jpg", alt: "Founder with the screen-printing frame for LEC tiles" },
            ].map((image, i) => (
              <FadeIn key={image.src} delay={i * 0.05}>
                <div className={`relative aspect-square border-b ${i % 2 !== 0 ? "border-l" : ""} ${i % 3 !== 0 ? "md:border-l" : ""} ${i % 3 === 0 && i % 2 !== 0 ? "md:border-l-0" : ""} border-[#1a1a1a] overflow-hidden group`}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 22vw, (min-width: 768px) 33vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </InViewSection>

      {/* CTA */}
      <InViewSection>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left */}
          <div className="px-6 lg:px-16 py-24 border-b lg:border-b-0 lg:border-r border-[#1a1a1a]">
            <FadeIn>
              <p className="tech-label mb-2">Get Started</p>
              <p className="section-title mb-8">Next Steps</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-3xl md:text-4xl text-white mb-8">
                Want to learn more about our technology?
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-[#b0b0b0] text-lg leading-relaxed mb-10 max-w-md">
                Our team is ready to discuss how LEC technology can enable your
                next product innovation.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex gap-4">
                <Button href="/contact">Contact Us</Button>
                <Button href="/#applications" variant="ghost">Applications →</Button>
              </div>
            </FadeIn>
          </div>

          {/* Right — link grid matching site grammar */}
          <div className="grid grid-cols-1 xl:grid-cols-2">
            <FadeIn delay={0.15} className="h-full">
              <Link
                href="/#applications"
                className="group/card flex flex-col h-full px-6 lg:px-12 py-12 border-b xl:border-b-0 xl:border-r border-[#1a1a1a] cell-glow"
              >
                <p className="tech-label mb-4 transition-colors duration-300 group-hover/card:!text-[#050505]/60">Explore</p>
                <p className="text-white text-xl mb-3 transition-colors duration-300 group-hover/card:!text-[#050505]">
                  See Applications <span className="inline-block transition-transform duration-300 group-hover/card:translate-x-1">→</span>
                </p>
                <p className="text-sm text-[#808080] transition-colors duration-300 group-hover/card:!text-[#050505]">
                  Smart cards, packaging, security, and more
                </p>
              </Link>
            </FadeIn>
            <FadeIn delay={0.25} className="h-full">
              <Link
                href="/contact#collaboration"
                className="group/card flex flex-col h-full px-6 lg:px-12 py-12 cell-glow"
              >
                <p className="tech-label mb-4 transition-colors duration-300 group-hover/card:!text-[#050505]/60">Partner</p>
                <p className="text-white text-xl mb-3 transition-colors duration-300 group-hover/card:!text-[#050505]">
                  Collaboration Options <span className="inline-block transition-transform duration-300 group-hover/card:translate-x-1">→</span>
                </p>
                <p className="text-sm text-[#808080] transition-colors duration-300 group-hover/card:!text-[#050505]">
                  Licensing, joint development, OEM supply
                </p>
              </Link>
            </FadeIn>
          </div>
        </div>
      </InViewSection>
    </div>
  );
}
