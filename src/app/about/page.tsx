"use client";

import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";
import InViewSection from "@/components/InViewSection";
import Link from "next/link";

const milestones = [
  { year: "2008", title: "Research Begins", desc: "Foundational LEC research at Umeå University" },
  { year: "2014", title: "LunaLEC Founded", desc: "Company established to commercialize LEC" },
  { year: "2018", title: "First Prototypes", desc: "Printable LEC devices on flexible substrates" },
  { year: "2021", title: "Pilot Production", desc: "Production capabilities for partner projects" },
  { year: "2024", title: "Commercial Scale", desc: "Roll-to-roll manufacturing ready" },
];

const values = [
  { title: "Innovation", desc: "Pushing boundaries of what's possible with light" },
  { title: "Sustainability", desc: "Technology that respects our planet" },
  { title: "Collaboration", desc: "Achieving more together" },
  { title: "Integrity", desc: "Honest, transparent relationships" },
];

export default function AboutPage() {
  return (
    <div className="bg-[#050505]">
      {/* Hero */}
      <InViewSection className="min-h-[60vh] flex flex-col justify-center border-b-section">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left */}
          <div className="px-6 lg:px-16 py-24">
            <FadeIn>
              <p className="tech-label mb-8">Company</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.9] tracking-tight text-white mb-8">
                Illuminating
                <br />
                <span className="text-[#253ff6]">Tomorrow</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-[#b0b0b0] text-lg max-w-md leading-relaxed">
                LunaLEC is a Swedish deep tech company transforming how the world
                creates and uses light through printable technology.
              </p>
            </FadeIn>
          </div>

          {/* Right */}
          <div className="hidden lg:flex items-center justify-center border-l border-[#1a1a1a] relative">
            <div className="absolute inset-0 grid-lines opacity-30" />
            <FadeIn delay={0.3}>
              <div className="relative z-10 text-center">
                <p className="text-white text-3xl mb-2">Umeå, Sweden</p>
                <p className="text-[#808080] text-base">Deep tech from the Arctic</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </InViewSection>

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
              <h2 className="text-3xl md:text-4xl text-white mb-8 max-w-2xl">
                Born from pioneering research at Umeå University.
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-[#b0b0b0] text-lg leading-relaxed mb-6 max-w-2xl">
                LunaLEC emerged from over a decade of Light-emitting Electrochemical
                Cell research. In 2014, recognizing the commercial potential, we
                founded LunaLEC to bridge academic research and real-world applications.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-[#b0b0b0] text-lg leading-relaxed max-w-2xl">
                Today, we continue building on that foundation of scientific excellence,
                working with partners worldwide to bring printable light to products
                that improve people&apos;s lives.
              </p>
            </FadeIn>
          </div>
        </div>
      </InViewSection>

      {/* Timeline */}
      <InViewSection className="border-b-section bg-[#0a0a0a]">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {/* Index */}
          <div className="px-6 lg:px-16 py-16 lg:py-24 border-b lg:border-b-0 lg:border-r border-[#1a1a1a]">
            <FadeIn>
              <p className="tech-label mb-2">Key Milestones</p>
              <p className="section-title">Journey</p>
            </FadeIn>
          </div>

          {/* Timeline */}
          <div className="lg:col-span-2">
            {milestones.map((milestone, i) => (
              <FadeIn key={milestone.year} delay={i * 0.1}>
                <div className="group/card grid grid-cols-3 border-b border-[#1a1a1a] hover:bg-white hover:shadow-[inset_0_0_100px_rgba(255,255,255,1),0_0_40px_rgba(255,255,255,0.6),0_0_80px_rgba(37,63,246,0.3)] transition-all duration-300 cursor-pointer">
                  <div className="px-6 py-6 border-r border-[#1a1a1a] group-hover/card:border-r-[#e0e0e0] transition-colors">
                    <p className="mono text-2xl text-[#253ff6] transition-colors duration-300 group-hover/card:!text-[#050505]">{milestone.year}</p>
                  </div>
                  <div className="col-span-2 px-6 py-6">
                    <p className="text-white mb-1 transition-colors duration-300 group-hover/card:!text-[#050505]">{milestone.title}</p>
                    <p className="text-base text-[#808080] transition-colors duration-300 group-hover/card:!text-[#050505]">{milestone.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </InViewSection>

      {/* Mission & Values */}
      <InViewSection className="border-b-section">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {/* Mission */}
          <div className="px-6 lg:px-16 py-16 lg:py-24 border-b lg:border-b-0 lg:border-r border-[#1a1a1a]">
            <FadeIn>
              <p className="tech-label mb-2">Our Purpose</p>
              <p className="section-title">Mission</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-[#b0b0b0] text-lg leading-relaxed mt-8">
                To democratize light technology by making it printable, flexible,
                and sustainable.
              </p>
            </FadeIn>
          </div>

          {/* Values */}
          <div className="lg:col-span-2 px-6 lg:px-16 py-16 lg:py-24 bg-[#0a0a0a]">
            <FadeIn>
              <p className="tech-label mb-2">What We Believe</p>
              <p className="section-title">Values</p>
            </FadeIn>
            <div className="grid grid-cols-2 gap-6 mt-8">
              {values.map((value, i) => (
                <FadeIn key={value.title} delay={0.1 + i * 0.05}>
                  <div className="group/card border-l border-[#253ff6] pl-4 py-2 hover:bg-white hover:shadow-[inset_0_0_100px_rgba(255,255,255,1),0_0_40px_rgba(255,255,255,0.6),0_0_80px_rgba(37,63,246,0.3)] transition-all duration-300 cursor-pointer">
                    <p className="text-white transition-colors duration-300 group-hover/card:!text-[#050505]">{value.title}</p>
                    <p className="text-base text-[#808080] transition-colors duration-300 group-hover/card:!text-[#050505]">{value.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </InViewSection>

      {/* Location */}
      <InViewSection className="border-b-section">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {/* Index */}
          <div className="px-6 lg:px-16 py-16 lg:py-24 border-b lg:border-b-0 lg:border-r border-[#1a1a1a]">
            <FadeIn>
              <p className="tech-label mb-2">Where We Are</p>
              <p className="section-title">Location</p>
            </FadeIn>
          </div>

          {/* Content */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 content-start">
            <div className="px-6 lg:px-16 py-16 lg:py-24 border-b md:border-r border-[#1a1a1a]">
              <FadeIn>
                <h2 className="text-3xl md:text-4xl text-white mb-8">
                  Where We Are
                </h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="text-[#b0b0b0] text-lg leading-relaxed mb-8">
                  Headquartered in Umeå, Sweden—a vibrant university city near the
                  Arctic Circle with world-class talent and research infrastructure.
                </p>
              </FadeIn>
            </div>
            <div className="px-6 lg:px-16 py-16 lg:py-24 border-b border-[#1a1a1a]">
              <FadeIn delay={0.2}>
                <p className="tech-label mb-4">Address</p>
                <p className="text-[#b0b0b0] leading-relaxed mb-8">
                  LunaLEC AB<br />
                  Tvistevägen 48C<br />
                  907 36 Umeå<br />
                  Sweden
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </InViewSection>

      {/* CTA */}
      <InViewSection className="bg-[#0a0a0a]">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {/* Index */}
          <div className="px-6 lg:px-16 py-16 lg:py-24 border-b lg:border-b-0 lg:border-r border-[#1a1a1a]">
            <FadeIn>
              <p className="tech-label mb-2">Get In Touch</p>
              <p className="section-title">Connect</p>
            </FadeIn>
          </div>

          {/* Content */}
          <div className="lg:col-span-2 px-6 lg:px-16 py-16 lg:py-24">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl text-white mb-8">
                Join Our Journey
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-[#b0b0b0] text-lg leading-relaxed mb-10 max-w-xl">
                Whether you&apos;re interested in partnership, investment, or
                career opportunities, we&apos;d love to hear from you.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex gap-4">
                <Button href="/contact">Get in Touch</Button>
                <Button href="/partners" variant="ghost">Partnership Options →</Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </InViewSection>
    </div>
  );
}
