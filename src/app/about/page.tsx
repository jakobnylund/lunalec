"use client";

import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";
import InViewSection from "@/components/InViewSection";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";

const team = [
  { name: "Christian Larsen", role: "CTO", email: "christian@lunalec.com" },
  { name: "Henrik Lundgren", role: "Business Development", email: "henrik@lunalec.com" },
  { name: "Erik Zäll", role: "COO", email: "erik@lunalec.com" },
];

const values = [
  { title: "Innovation", desc: "Pushing boundaries of what's possible with light" },
  { title: "Sustainability", desc: "Technology that respects our planet" },
  { title: "Collaboration", desc: "Achieving more together" },
  { title: "Integrity", desc: "Honest, transparent relationships" },
];

export default function AboutPage() {
  const { isLight } = useTheme();

  return (
    <div className="bg-[var(--background)]">
      {/* Hero */}
      <InViewSection className="min-h-[55dvh] flex flex-col justify-center border-b-section overflow-hidden" hoverClassName="group group/hero">
        {/* Background Map - visible at 20%, more visible on hover */}
        <div className="absolute inset-[-50%] opacity-20 group-hover/hero:opacity-40 transition-opacity duration-500 z-0 grayscale invert brightness-[0.7] contrast-200">
          <iframe
            title="Map of Umeå, Sweden — LunaLEC headquarters"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54889.85073088441!2d20.225089!3d63.825848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x467c4e1b68add7f9%3A0x4034506de8c8560!2sUme%C3%A5%2C%20Sweden!5e0!3m2!1sen!2sus!4v1706900000000!5m2!1sen!2sus"
            className="w-full h-full"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </div>
        {/* Gradient overlay for text readability */}
        {!isLight && (
          <div className="absolute inset-[-50%] bg-gradient-to-r from-[#050505]/80 via-[#050505]/40 to-transparent z-0" />
        )}

        {/* Content */}
        <div className="flex-1 flex items-center relative z-10">
          <div className="px-6 lg:px-16 py-24 max-w-3xl">
            <FadeIn>
              <p className="tech-label mb-8">Company</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.9] tracking-tighter text-white mb-8">
                Illuminating
                <br />
                <span className="text-[#253ff6]">Tomorrow</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-[#b0b0b0] text-lg max-w-md leading-relaxed mb-6">
                LunaLEC is a Swedish deep tech company transforming how the world
                creates and uses light through printable technology.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex items-center gap-4 text-[#808080]">
                <span className="text-white">Umeå, Sweden</span>
                <span className="text-sm">63.8258° N, 20.2630° E</span>
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
                LunaLEC emerged from nearly two decades of Light-emitting Electrochemical
                Cell research at Umeå University. In 2012, recognizing the commercial potential, we
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

      {/* Team */}
      <InViewSection className="border-b-section">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {/* Index */}
          <div className="px-6 lg:px-16 py-16 lg:py-24 border-b lg:border-b-0 lg:border-r border-[#1a1a1a]">
            <FadeIn>
              <p className="tech-label mb-2">The People</p>
              <p className="section-title">Team</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-[#b0b0b0] text-base leading-relaxed mt-8 max-w-sm">
                A small, focused team translating two decades of LEC research into commercial products.
              </p>
            </FadeIn>
          </div>

          {/* Portrait + roster */}
          <div className="lg:col-span-2">
            <div className="relative aspect-[16/10] md:aspect-[16/9] border-b border-[#1a1a1a] overflow-hidden group">
              <Image
                src="/lec/spectrum-line.jpg"
                alt="LEC emitter inks fluorescing across the visible spectrum"
                fill
                sizes="(min-width: 1024px) 66vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3">
              {team.map((person, i) => (
                <FadeIn key={person.email} delay={i * 0.08} className="h-full">
                  <div className={`group/card h-full px-6 lg:px-10 py-10 ${i > 0 ? "md:border-l border-[#1a1a1a]" : ""} ${i < team.length - 1 ? "border-b md:border-b-0 border-[#1a1a1a]" : ""} cell-glow`}>
                    <p className="tech-label mb-3 transition-colors duration-300 group-hover/card:!text-[#050505]/60">{person.role}</p>
                    <p className="text-white text-xl mb-3 transition-colors duration-300 group-hover/card:!text-[#050505]">{person.name}</p>
                    <a href={`mailto:${person.email}`} className="mono text-sm text-[#253ff6] transition-colors duration-300 group-hover/card:!text-[#050505]">
                      {person.email}
                    </a>
                  </div>
                </FadeIn>
              ))}
            </div>
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
          <div className="lg:col-span-2 bg-[#0a0a0a] flex flex-col">
            <div className="px-6 lg:px-12 pt-16 lg:pt-24 pb-10">
              <FadeIn>
                <p className="tech-label mb-2">What We Believe</p>
                <p className="section-title">Values</p>
              </FadeIn>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-[#1a1a1a] flex-1">
              {values.map((value, i) => (
                <FadeIn key={value.title} delay={0.1 + i * 0.05} className="h-full">
                  <div className={`group/card h-full px-6 lg:px-12 py-10 border-b border-[#1a1a1a] ${i % 2 === 1 ? "sm:border-l" : ""} ${i >= 2 ? "sm:border-b-0" : ""} cell-glow cursor-pointer`}>
                    <p className="text-white text-lg mb-2 transition-colors duration-300 group-hover/card:!text-[#050505]">{value.title}</p>
                    <p className="text-base text-[#808080] leading-relaxed transition-colors duration-300 group-hover/card:!text-[#050505]">{value.desc}</p>
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
                <h2 className="text-3xl md:text-4xl text-white mb-8 max-w-md">
                  Headquartered in the Swedish Arctic.
                </h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="text-[#b0b0b0] text-lg leading-relaxed">
                  Umeå is a vibrant university city near the Arctic Circle with world-class talent and research infrastructure — a natural home for deep tech.
                </p>
              </FadeIn>
            </div>
            <div className="px-6 lg:px-16 py-16 lg:py-24">
              <FadeIn delay={0.2}>
                <p className="tech-label mb-4">Address</p>
                <p className="text-[#b0b0b0] leading-relaxed mb-6">
                  LunaLEC AB<br />
                  Linnaeus väg 24<br />
                  901 87 Umeå<br />
                  Sweden
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="flex items-baseline gap-3 text-[#808080]">
                  <span className="mono text-sm">63.8258° N</span>
                  <span className="mono text-sm">20.2630° E</span>
                </div>
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
                <Button href="/contact#collaboration" variant="ghost">Collaboration Options →</Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </InViewSection>
    </div>
  );
}
