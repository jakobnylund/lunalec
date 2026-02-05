"use client";

import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";
import InViewSection from "@/components/InViewSection";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";

export default function TechnologyPage() {
  const { isLight } = useTheme();

  return (
    <div className="bg-[#050505]">
      {/* Hero */}
      <section className="min-h-[60vh] flex flex-col justify-center border-b-section relative group/hero overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={isLight ? "/sheet-light.jpg" : "/sheet.jpg"}
            alt=""
            fill
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
              <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.9] tracking-tight mb-8">
                <span style={{ color: 'white' }}>Light-emitting</span>
                <br />
                <span className="text-[#253ff6]">Electrochemical Cells</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-[#b0b0b0] text-lg max-w-md leading-relaxed">
                A revolutionary approach to creating light that can be printed
                onto virtually any surface.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* What is LEC */}
      <InViewSection className="border-b-section">
        <div className="grid grid-cols-1 lg:grid-cols-3">
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
                Light-emitting Electrochemical Cells generate light through
                electrochemical reactions. Unlike LEDs that require precise
                semiconductor manufacturing, LECs use solution-processed materials
                that can be deposited using standard printing techniques.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-[#b0b0b0] text-lg leading-relaxed mb-6 max-w-2xl">
                The active layer consists of an electroluminescent material mixed
                with mobile ions. When voltage is applied, these ions redistribute
                to form a p-i-n junction in situ, enabling efficient light emission
                at low voltages.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-[#b0b0b0] text-lg leading-relaxed mb-6 max-w-2xl">
                This unique mechanism allows LECs to be fabricated with air-stable
                electrodes without charge injection layers—dramatically simplifying
                device architecture and manufacturing.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <p className="text-[#b0b0b0] text-lg leading-relaxed max-w-2xl">
                This is the foundation of Lumifoil — our commercial product line that brings LEC technology to market.
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
                <p className="tech-label"></p>
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
                { label: "Manufacturing →", led: "Semiconductor fab", oled: "Vacuum deposition", lec: "Printing" },
                { label: "Form Factor →", led: "Point source", oled: "Thin, rigid/flex", lec: "Ultra-thin, flexible" },
                { label: "Substrate →", led: "Rigid PCB", oled: "Glass/plastic", lec: "Paper, plastic, fabric" },
                { label: "Voltage →", led: "2-4V DC", oled: "3-10V DC", lec: "3-5V DC/AC" },
                { label: "Material Cost →", led: "Low", oled: "High", lec: "Very Low" },
                { label: "Rare Earth →", led: "Yes", oled: "Some", lec: "None" },
                { label: "Encapsulation →", led: "Moderate", oled: "Critical", lec: "Minimal" },
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
                { label: "Manufacturing", led: "Semiconductor fab", oled: "Vacuum deposition", lec: "Printing" },
                { label: "Form Factor", led: "Point source", oled: "Thin, rigid/flex", lec: "Ultra-thin, flexible" },
                { label: "Substrate", led: "Rigid PCB", oled: "Glass/plastic", lec: "Paper, plastic, fabric" },
                { label: "Voltage", led: "2-4V DC", oled: "3-10V DC", lec: "3-5V DC/AC" },
                { label: "Material Cost", led: "Low", oled: "High", lec: "Very Low" },
                { label: "Rare Earth", led: "Yes", oled: "Some", lec: "None" },
                { label: "Encapsulation", led: "Moderate", oled: "Critical", lec: "Minimal" },
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
              { value: "<200μm", label: "Thickness", sub: "Total device stack" },
              { value: "3-5V", label: "Voltage", sub: "DC or AC compatible" },
              { value: "400-700nm", label: "Emission", sub: "Full visible spectrum" },
              { value: "R2R", label: "Manufacturing", sub: "Roll-to-roll ready" },
            ].map((spec, i) => (
              <FadeIn key={spec.label} delay={i * 0.1}>
                <div className={`group/card px-6 py-12 border-b ${i > 0 ? "border-l" : ""} border-[#1a1a1a] hover:bg-white hover:shadow-[inset_0_0_100px_rgba(255,255,255,1),0_0_40px_rgba(255,255,255,0.6),0_0_80px_rgba(37,63,246,0.3)] transition-all duration-300`}>
                  <p className="mono text-3xl md:text-4xl text-[#253ff6] mb-2 transition-colors duration-300 group-hover/card:!text-[#050505]">
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
                desc: "Solution-based printing requires less energy than semiconductor fabrication.",
              },
              {
                title: "Recyclable",
                desc: "Compatible with paper and biodegradable substrates for end-of-life processing.",
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1} className="h-full">
                <div className={`group/card px-6 py-12 border-b h-full ${i > 0 ? "md:border-l" : ""} border-[#1a1a1a] hover:bg-white hover:shadow-[inset_0_0_100px_rgba(255,255,255,1),0_0_40px_rgba(255,255,255,0.6),0_0_80px_rgba(37,63,246,0.3)] transition-all duration-300 cursor-pointer`}>
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
              { src: "/gallery/1000008200.jpg", alt: "LEC development" },
              { src: "/gallery/IMAG0237.jpg", alt: "Lab work" },
              { src: "/gallery/IMG_5157.jpg", alt: "Research process" },
              { src: "/gallery/IMG_5162.jpg", alt: "Technology testing" },
              { src: "/gallery/Inks.jpg", alt: "LEC inks" },
              { src: "/gallery/Photo-LEC-Umu-logo.jpg", alt: "LEC with Umeå University logo" },
            ].map((image, i) => (
              <FadeIn key={image.src} delay={i * 0.05}>
                <div className={`relative aspect-square border-b ${i % 2 !== 0 ? "border-l" : ""} ${i % 3 !== 0 ? "md:border-l" : ""} ${i % 3 === 0 && i % 2 !== 0 ? "md:border-l-0" : ""} border-[#1a1a1a] overflow-hidden group`}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
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
                <Button href="/applications" variant="ghost">Applications →</Button>
              </div>
            </FadeIn>
          </div>

          {/* Right */}
          <div className="px-6 lg:px-16 py-24 flex items-center">
            <FadeIn delay={0.2}>
              <div className="space-y-6">
                <Link href="/applications" className="block group">
                  <p className="tech-label mb-2">Explore</p>
                  <p className="text-white group-hover:text-[#253ff6] transition-colors">
                    See Applications →
                  </p>
                </Link>
                <Link href="/partners" className="block group">
                  <p className="tech-label mb-2">Partner</p>
                  <p className="text-white group-hover:text-[#253ff6] transition-colors">
                    Partnership Models →
                  </p>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </InViewSection>
    </div>
  );
}
