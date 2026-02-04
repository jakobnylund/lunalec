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
    <div className="bg-[#050505]">
      {/* Hero */}
      <InViewSection className="min-h-[50vh] flex flex-col justify-center border-b-section">
        <div className="px-6 lg:px-16 py-24">
          <FadeIn>
            <p className="tech-label mb-8">Get in Touch</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.9] tracking-tight text-white mb-8 max-w-4xl">
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
              <p className="section-title mb-8">Message</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-2xl md:text-3xl text-white mb-10">
                Send Us a Message
              </h2>
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
                      className="w-full px-4 py-3 bg-[#050505] border border-[#1a1a1a] text-white focus:outline-none focus:border-[#253ff6] focus:shadow-[0_0_25px_rgba(255,255,255,0.15),0_0_40px_rgba(37,63,246,0.2)] transition-all duration-300"
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

          {/* Contact Info */}
          <div className="px-6 lg:px-16 py-16 lg:py-24 bg-[#0a0a0a]">
            <FadeIn>
              <p className="tech-label mb-2">Contact Info</p>
              <p className="section-title mb-8">Direct</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-2xl md:text-3xl text-white mb-10">
                Direct Contact
              </h2>
            </FadeIn>

            <div className="space-y-8">
              <FadeIn delay={0.2}>
                <div className="group/card border-l border-[#1a1a1a] pl-6 py-2 -ml-px hover:border-l-[#253ff6] hover:bg-white hover:shadow-[inset_0_0_100px_rgba(255,255,255,1),0_0_40px_rgba(255,255,255,0.6),0_0_80px_rgba(37,63,246,0.3)] transition-all duration-300 cursor-pointer">
                  <p className="tech-label mb-2 transition-colors duration-300 group-hover/card:!text-[#050505]">Email</p>
                  <a href="mailto:info@lunalec.com" className="text-[#253ff6] transition-colors duration-300 group-hover/card:!text-[#050505]">
                    info@lunalec.com
                  </a>
                  <p className="text-sm text-[#808080] mt-2 transition-colors duration-300 group-hover/card:!text-[#050505]">Response within 1-2 business days</p>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="group/card border-l border-[#1a1a1a] pl-6 py-2 -ml-px hover:border-l-[#253ff6] hover:bg-white hover:shadow-[inset_0_0_100px_rgba(255,255,255,1),0_0_40px_rgba(255,255,255,0.6),0_0_80px_rgba(37,63,246,0.3)] transition-all duration-300 cursor-pointer">
                  <p className="tech-label mb-2 transition-colors duration-300 group-hover/card:!text-[#050505]">Address</p>
                  <p className="text-[#b0b0b0] transition-colors duration-300 group-hover/card:!text-[#050505]">
                    LunaLEC AB<br />
                    Tvistevägen 48C<br />
                    907 36 Umeå<br />
                    Sweden
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="group/card border-l border-[#1a1a1a] pl-6 py-2 -ml-px hover:border-l-[#253ff6] hover:bg-white hover:shadow-[inset_0_0_100px_rgba(255,255,255,1),0_0_40px_rgba(255,255,255,0.6),0_0_80px_rgba(37,63,246,0.3)] transition-all duration-300 cursor-pointer">
                  <p className="tech-label mb-2 transition-colors duration-300 group-hover/card:!text-[#050505]">Hours</p>
                  <p className="text-[#b0b0b0] transition-colors duration-300 group-hover/card:!text-[#050505]">
                    Monday - Friday<br />
                    9:00 AM - 5:00 PM CET
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.5}>
                <div className="group/card border-l border-[#1a1a1a] pl-6 py-2 -ml-px hover:border-l-[#253ff6] hover:bg-white hover:shadow-[inset_0_0_100px_rgba(255,255,255,1),0_0_40px_rgba(255,255,255,0.6),0_0_80px_rgba(37,63,246,0.3)] transition-all duration-300 cursor-pointer">
                  <p className="tech-label mb-2 transition-colors duration-300 group-hover/card:!text-[#050505]">LinkedIn</p>
                  <a
                    href="https://linkedin.com/company/lunalec"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#253ff6] transition-colors duration-300 group-hover/card:!text-[#050505]"
                  >
                    Follow us on LinkedIn
                  </a>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </InViewSection>

      {/* FAQ */}
      <InViewSection>
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
                a: "Consumer electronics, packaging, healthcare, automotive, architecture, and more.",
              },
            ].map((faq, i) => (
              <FadeIn key={faq.q} delay={i * 0.1}>
                <div className={`group/card px-6 lg:px-16 py-8 border-b border-[#1a1a1a] ${i === 3 ? "border-b-0" : ""} hover:bg-white hover:shadow-[inset_0_0_100px_rgba(255,255,255,1),0_0_40px_rgba(255,255,255,0.6),0_0_80px_rgba(37,63,246,0.3)] transition-all duration-300 cursor-pointer`}>
                  <p className="text-white mb-3 transition-colors duration-300 group-hover/card:!text-[#050505]">{faq.q}</p>
                  <p className="text-base text-[#b0b0b0] transition-colors duration-300 group-hover/card:!text-[#050505]">{faq.a}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </InViewSection>
    </div>
  );
}
