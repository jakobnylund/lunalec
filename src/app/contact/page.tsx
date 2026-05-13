"use client";

import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";
import InViewSection from "@/components/InViewSection";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    interest: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-[var(--background)]">
      {/* Hero */}
      <InViewSection className="min-h-[50dvh] flex flex-col justify-center border-b-section">
        <div className="px-6 lg:px-16 py-24">
          <FadeIn>
            <p className="tech-label mb-8">Get in Touch</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.9] tracking-tighter text-white mb-8 max-w-4xl">
              Let&apos;s Talk
              <br />
              <span className="text-[#253ff6]">Light</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-[#b0b0b0] text-lg max-w-xl leading-relaxed">
              Ready to explore how LEC technology can transform your products?
              We&apos;d love to hear from you.
            </p>
          </FadeIn>
        </div>
      </InViewSection>

      {/* Form & Info */}
      <InViewSection className="border-b-section">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Form */}
          <div className="px-6 lg:px-16 py-16 lg:py-24 border-b lg:border-b-0 lg:border-r border-[#1a1a1a]">
            <FadeIn>
              <p className="tech-label mb-2">Reach Out</p>
              <p className="section-title mb-10">Send Us a Message</p>
            </FadeIn>

            {submitted ? (
              <FadeIn>
                <div className="border border-[#1a1a1a] p-10 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 border border-[#253ff6] flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-[#253ff6]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl text-white mb-3">Message Received</h3>
                  <p className="text-[#b0b0b0]">
                    Our team will get back to you within 1-2 business days.
                  </p>
                </div>
              </FadeIn>
            ) : (
              <FadeIn delay={0.2}>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-base text-[#b0b0b0] mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-transparent border border-[#1a1a1a] text-white placeholder-[#555] focus:outline-none focus:border-[#253ff6] focus:shadow-[0_0_25px_rgba(255,255,255,0.15),0_0_40px_rgba(37,63,246,0.2)] transition-all duration-300"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-base text-[#b0b0b0] mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-transparent border border-[#1a1a1a] text-white placeholder-[#555] focus:outline-none focus:border-[#253ff6] focus:shadow-[0_0_25px_rgba(255,255,255,0.15),0_0_40px_rgba(37,63,246,0.2)] transition-all duration-300"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-base text-[#b0b0b0] mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-transparent border border-[#1a1a1a] text-white placeholder-[#555] focus:outline-none focus:border-[#253ff6] focus:shadow-[0_0_25px_rgba(255,255,255,0.15),0_0_40px_rgba(37,63,246,0.2)] transition-all duration-300"
                      placeholder="Your company"
                    />
                  </div>

                  <div>
                    <label htmlFor="interest" className="block text-base text-[#b0b0b0] mb-2">
                      Area of Interest
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[var(--background)] border border-[#1a1a1a] text-white focus:outline-none focus:border-[#253ff6] focus:shadow-[0_0_25px_rgba(255,255,255,0.15),0_0_40px_rgba(37,63,246,0.2)] transition-all duration-300"
                    >
                      <option value="">Select an option</option>
                      <option value="licensing">Technology Licensing</option>
                      <option value="development">Joint Development</option>
                      <option value="oem">OEM Supply</option>
                      <option value="research">Research Collaboration</option>
                      <option value="investment">Investment</option>
                      <option value="careers">Careers</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-base text-[#b0b0b0] mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-transparent border border-[#1a1a1a] text-white placeholder-[#555] focus:outline-none focus:border-[#253ff6] focus:shadow-[0_0_25px_rgba(255,255,255,0.15),0_0_40px_rgba(37,63,246,0.2)] transition-all duration-300 resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <Button type="submit">Send Message</Button>
                </form>
              </FadeIn>
            )}
          </div>

          {/* Contact Info — full-cell grid matching site grammar */}
          <div className="bg-[#0a0a0a] flex flex-col">
            <div className="px-6 lg:px-16 pt-16 lg:pt-24 pb-10">
              <FadeIn>
                <p className="tech-label mb-2">Contact Info</p>
                <p className="section-title">Direct</p>
              </FadeIn>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-[#1a1a1a]">
              <FadeIn delay={0.1}>
                <a
                  href="mailto:info@lunalec.com"
                  className="group/card block px-6 lg:px-12 py-10 border-b sm:border-r border-[#1a1a1a] hover:bg-white hover:shadow-[inset_0_0_100px_rgba(255,255,255,1),0_0_40px_rgba(255,255,255,0.6),0_0_80px_rgba(37,63,246,0.3)] transition-all duration-300 h-full"
                >
                  <p className="tech-label mb-3 transition-colors duration-300 group-hover/card:!text-[#050505]/60">Email</p>
                  <p className="text-[#253ff6] text-lg mb-2 transition-colors duration-300 group-hover/card:!text-[#050505]">info@lunalec.com</p>
                  <p className="text-sm text-[#808080] transition-colors duration-300 group-hover/card:!text-[#050505]">Response within 1–2 business days</p>
                </a>
              </FadeIn>

              <FadeIn delay={0.15}>
                <div className="group/card px-6 lg:px-12 py-10 border-b border-[#1a1a1a] h-full">
                  <p className="tech-label mb-3">Address</p>
                  <p className="text-[#b0b0b0] leading-relaxed">
                    LunaLEC AB<br />
                    Linnaeus väg 24<br />
                    901 87 Umeå<br />
                    Sweden
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="group/card px-6 lg:px-12 py-10 border-b sm:border-b-0 sm:border-r border-[#1a1a1a] h-full">
                  <p className="tech-label mb-3">Hours</p>
                  <p className="text-[#b0b0b0] leading-relaxed">
                    Monday – Friday<br />
                    9:00 – 17:00 CET
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.25}>
                <a
                  href="https://se.linkedin.com/company/lunalec-ab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/card block px-6 lg:px-12 py-10 hover:bg-white hover:shadow-[inset_0_0_100px_rgba(255,255,255,1),0_0_40px_rgba(255,255,255,0.6),0_0_80px_rgba(37,63,246,0.3)] transition-all duration-300 h-full"
                >
                  <p className="tech-label mb-3 transition-colors duration-300 group-hover/card:!text-[#050505]/60">LinkedIn</p>
                  <p className="arrow-link text-[#253ff6] text-lg transition-colors duration-300 group-hover/card:!text-[#050505]">
                    Follow us
                  </p>
                </a>
              </FadeIn>
            </div>
          </div>
        </div>
      </InViewSection>

      {/* Collaboration Options */}
      <InViewSection id="collaboration" className="border-b-section">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {/* Index */}
          <div className="px-6 lg:px-16 py-16 lg:py-24 border-b lg:border-b-0 lg:border-r border-[#1a1a1a]">
            <FadeIn>
              <p className="tech-label mb-2">Work With Us</p>
              <p className="section-title">Collaboration</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-[#b0b0b0] text-base leading-relaxed mt-8 max-w-sm">
                We work with forward-thinking companies across industries — from technology licensing to joint development.
              </p>
            </FadeIn>
          </div>

          {/* Cards */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 content-start">
            {[
              {
                title: "Licensing",
                desc: "Access our IP portfolio",
                details: "License our LEC technology to manufacture in your own facilities. Ideal for companies with existing production capabilities.",
                features: ["Core LEC IP", "Technical training", "Material specs", "QA protocols"],
              },
              {
                title: "Joint Development",
                desc: "Co-develop solutions and products",
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
            ].map((model, i) => (
              <FadeIn key={model.title} delay={i * 0.08}>
                <div className={`group/card px-6 lg:px-10 py-10 border-b ${i % 2 === 1 ? "md:border-l" : ""} border-[#1a1a1a] hover:bg-white hover:shadow-[inset_0_0_100px_rgba(255,255,255,1),0_0_40px_rgba(255,255,255,0.6),0_0_80px_rgba(37,63,246,0.3)] transition-all duration-300 cursor-pointer h-full flex flex-col`}>
                  <p className="text-white text-xl mb-1 transition-colors duration-300 group-hover/card:!text-[#050505]">{model.title}</p>
                  <p className="text-base text-[#b0b0b0] mb-4 transition-colors duration-300 group-hover/card:!text-[#050505]">{model.desc}</p>
                  <p className="text-base text-[#b0b0b0] leading-relaxed mb-6 transition-colors duration-300 group-hover/card:!text-[#050505]">{model.details}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
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

      {/* FAQ */}
      <InViewSection className="border-b-section">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {/* Index */}
          <div className="px-6 lg:px-16 py-16 lg:py-24 border-b lg:border-b-0 lg:border-r border-[#1a1a1a]">
            <FadeIn>
              <p className="tech-label mb-2">Common Questions</p>
              <p className="section-title">FAQ</p>
            </FadeIn>
          </div>

          {/* Questions */}
          <div className="lg:col-span-2">
            {[
              {
                q: "What is the typical timeline for a partnership project?",
                a: "Timelines vary based on project scope and complexity. We'll give you a realistic estimate after understanding your specific needs.",
              },
              {
                q: "Do you work with startups?",
                a: "Yes. What matters is the quality of the opportunity and alignment of goals, not company size.",
              },
              {
                q: "Can I visit your facilities?",
                a: "We welcome visits from serious potential partners. Contact us to arrange a meeting.",
              },
              {
                q: "What industries do you work with?",
                a: "Consumer electronics, packaging, labels, security, automotive, signage, architecture, and more.",
              },
            ].map((faq, i) => (
              <FadeIn key={faq.q} delay={i * 0.08}>
                <div className="group/card px-6 lg:px-16 py-10 border-b border-[#1a1a1a] last:border-b-0 hover:bg-white hover:shadow-[inset_0_0_100px_rgba(255,255,255,1),0_0_40px_rgba(255,255,255,0.6),0_0_80px_rgba(37,63,246,0.3)] transition-all duration-300 cursor-pointer">
                  <p className="text-white text-lg mb-3 transition-colors duration-300 group-hover/card:!text-[#050505]">{faq.q}</p>
                  <p className="text-base text-[#b0b0b0] leading-relaxed transition-colors duration-300 group-hover/card:!text-[#050505]">{faq.a}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </InViewSection>
    </div>
  );
}
