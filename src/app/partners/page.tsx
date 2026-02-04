"use client";

import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";
import InViewSection from "@/components/InViewSection";
import Link from "next/link";

const partnershipModels = [
  {
    title: "Licensing",
    desc: "Access our IP portfolio",
    details: "License our LEC technology to manufacture in your own facilities. Ideal for companies with existing production capabilities.",
    features: ["Core LEC IP", "Technical training", "Material specs", "QA protocols"],
  },
  {
    title: "Joint Development",
    desc: "Co-develop solutions",
    details: "Work together from concept to production-ready designs, sharing knowledge and development costs.",
    features: ["Custom design", "Shared costs", "Application expertise", "Faster to market"],
  },
  {
    title: "OEM Supply",
    desc: "Custom manufacturing",
    details: "We manufacture LEC components or finished modules to your specifications. No need to build manufacturing capabilities.",
    features: ["Custom specs", "Scalable production", "Quality guaranteed", "Supply agreement"],
  },
  {
    title: "Research",
    desc: "Academic collaboration",
    details: "Partner with us to advance LEC science. Access to our expertise and facilities for research projects.",
    features: ["Facility access", "Joint publications", "Student opportunities", "Grant collaboration"],
  },
];

const benefits = [
  { title: "First-Mover Advantage", desc: "Be among the first to bring LEC-enabled products to market" },
  { title: "Deep Technical Support", desc: "Hands-on guidance from our scientists and engineers" },
  { title: "Proven Technology", desc: "Decades of academic research with demonstrated scalability" },
  { title: "Flexible Engagement", desc: "Partnership models matched to your capabilities" },
  { title: "IP Protection", desc: "Strong patent portfolio with clear licensing terms" },
  { title: "Sustainable Innovation", desc: "Rare-earth-free, printable technology" },
];

export default function PartnersPage() {
  return (
    <div className="bg-[#050505]">
      {/* Hero */}
      <InViewSection className="min-h-[60vh] flex flex-col justify-center border-b-section">
        <div className="px-6 lg:px-16 py-24">
          <FadeIn>
            <p className="tech-label mb-8">Collaboration</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.9] tracking-tight text-white mb-8 max-w-4xl">
              Build the Future
              <br />
              <span className="text-[#253ff6]">with Us</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-[#b0b0b0] text-lg max-w-xl leading-relaxed">
              We partner with forward-thinking companies to bring printable
              light to new markets. From startups to Fortune 500.
            </p>
          </FadeIn>
        </div>
      </InViewSection>

      {/* Partnership Models */}
      <InViewSection className="border-b-section">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {/* Index */}
          <div className="px-6 lg:px-16 py-16 lg:py-24 border-b lg:border-b-0 lg:border-r border-[#1a1a1a]">
            <FadeIn>
              <p className="tech-label mb-2">Collaboration Options</p>
              <p className="section-title">Models</p>
            </FadeIn>
          </div>

          {/* Cards */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 content-start">
            {partnershipModels.map((model, i) => (
              <FadeIn key={model.title} delay={i * 0.1}>
                <div className={`group/card px-6 py-10 border-b ${i % 2 !== 0 ? "md:border-l" : ""} border-[#1a1a1a] hover:bg-white hover:shadow-[inset_0_0_100px_rgba(255,255,255,1),0_0_40px_rgba(255,255,255,0.6),0_0_80px_rgba(37,63,246,0.3)] transition-all duration-300 cursor-pointer`}>
                  <p className="text-white text-xl mb-1 transition-colors duration-300 group-hover/card:!text-[#050505]">{model.title}</p>
                  <p className="text-base text-[#b0b0b0] mb-4 transition-colors duration-300 group-hover/card:!text-[#050505]">{model.desc}</p>
                  <p className="text-base text-[#b0b0b0] leading-relaxed mb-6 transition-colors duration-300 group-hover/card:!text-[#050505]">{model.details}</p>
                  <div className="flex flex-wrap gap-2">
                    {model.features.map((feature) => (
                      <span key={feature} className="text-sm text-[#808080] border border-[#1a1a1a] px-2 py-1 transition-colors duration-300 group-hover/card:!text-[#050505] group-hover/card:border-[#050505]/20">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </InViewSection>

      {/* Benefits */}
      <InViewSection className="border-b-section bg-[#0a0a0a]">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {/* Index */}
          <div className="px-6 lg:px-16 py-16 lg:py-24 border-b lg:border-b-0 lg:border-r border-[#1a1a1a]">
            <FadeIn>
              <p className="tech-label mb-2">Why Partner With Us</p>
              <p className="section-title">Benefits</p>
            </FadeIn>
          </div>

          {/* Grid */}
          <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 content-start">
            {benefits.map((benefit, i) => (
              <FadeIn key={benefit.title} delay={i * 0.05}>
                <div className={`group/card px-6 py-8 border-b ${i % 2 !== 0 ? "border-l" : ""} ${i % 3 !== 0 && i % 2 === 0 ? "md:border-l" : ""} ${i % 3 === 0 && i % 2 !== 0 ? "md:border-l-0" : ""} border-[#1a1a1a] hover:bg-white hover:shadow-[inset_0_0_100px_rgba(255,255,255,1),0_0_40px_rgba(255,255,255,0.6),0_0_80px_rgba(37,63,246,0.3)] transition-all duration-300 cursor-pointer`}>
                  <p className="text-white text-base mb-2 transition-colors duration-300 group-hover/card:!text-[#050505]">{benefit.title}</p>
                  <p className="text-sm text-[#808080] transition-colors duration-300 group-hover/card:!text-[#050505]">{benefit.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </InViewSection>

      {/* Process */}
      <InViewSection className="border-b-section">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {/* Index */}
          <div className="px-6 lg:px-16 py-16 lg:py-24 border-b lg:border-b-0 lg:border-r border-[#1a1a1a]">
            <FadeIn>
              <p className="tech-label mb-2">How We Work</p>
              <p className="section-title">Process</p>
            </FadeIn>
          </div>

          {/* Steps */}
          <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4">
            {[
              { step: "01", title: "Discovery", desc: "Learn about your goals and application" },
              { step: "02", title: "Feasibility", desc: "Technical assessment and approach" },
              { step: "03", title: "Agreement", desc: "Structure terms for both parties" },
              { step: "04", title: "Development", desc: "Collaborative execution" },
            ].map((item, i) => (
              <FadeIn key={item.step} delay={i * 0.1} className="h-full">
                <div className={`group/card px-6 py-12 border-b ${i % 2 !== 0 ? "border-l" : ""} ${i % 4 !== 0 ? "md:border-l" : ""} ${i % 4 === 0 && i % 2 !== 0 ? "md:border-l-0" : ""} border-[#1a1a1a] hover:bg-white hover:shadow-[inset_0_0_100px_rgba(255,255,255,1),0_0_40px_rgba(255,255,255,0.6),0_0_80px_rgba(37,63,246,0.3)] transition-all duration-300 h-full`}>
                  <p className="mono text-2xl text-[#253ff6] mb-3 transition-colors duration-300 group-hover/card:!text-[#050505]">{item.step}</p>
                  <p className="text-white text-base mb-1 transition-colors duration-300 group-hover/card:!text-[#050505]">{item.title}</p>
                  <p className="text-sm text-[#808080] transition-colors duration-300 group-hover/card:!text-[#050505]">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </InViewSection>

      {/* CTA */}
      <InViewSection className="bg-[#0a0a0a]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left */}
          <div className="px-6 lg:px-16 py-24 border-b lg:border-b-0 lg:border-r border-[#1a1a1a]">
            <FadeIn>
              <p className="tech-label mb-2">Contact Us</p>
              <p className="section-title mb-8">Get Started</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-3xl md:text-4xl text-white mb-8">
                Ready to Partner?
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-[#b0b0b0] text-lg leading-relaxed mb-10 max-w-md">
                Let&apos;s discuss how LEC technology can create value for your
                business. Our team is ready to explore the possibilities.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex gap-4">
                <Button href="/contact">Start the Conversation</Button>
                <Button href="/technology" variant="ghost">Learn the Technology →</Button>
              </div>
            </FadeIn>
          </div>

          {/* Right - Stats */}
          <div className="grid grid-cols-2 content-start">
            {[
              { value: "2014", label: "Founded" },
              { value: "20", label: "Years R&D" },
              { value: "Global", label: "Partnerships" },
              { value: "R2R", label: "Production Ready" },
            ].map((stat, i) => (
              <FadeIn key={stat.label} delay={0.1 + i * 0.05}>
                <div className={`group/card px-6 py-12 border-b ${i % 2 !== 0 ? "border-l" : ""} border-[#1a1a1a] hover:bg-white hover:shadow-[inset_0_0_100px_rgba(255,255,255,1),0_0_40px_rgba(255,255,255,0.6),0_0_80px_rgba(37,63,246,0.3)] transition-all duration-300`}>
                  <p className="mono text-3xl text-[#253ff6] mb-2 transition-colors duration-300 group-hover/card:!text-[#050505]">{stat.value}</p>
                  <p className="tech-label transition-colors duration-300 group-hover/card:!text-[#050505]">{stat.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </InViewSection>
    </div>
  );
}
