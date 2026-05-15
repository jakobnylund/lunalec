import FadeIn from "@/components/FadeIn";
import InViewSection from "@/components/InViewSection";

const LAST_UPDATED = "May 2026";

type Section = {
  eyebrow: string;
  title: string;
  body: React.ReactNode;
};

const sections: Section[] = [
  {
    eyebrow: "Who we are",
    title: "Controller",
    body: (
      <>
        <p className="mb-4">
          LunaLEC AB (org. no. 556894-6486) is the data controller for personal data
          processed on lunalec.com.
        </p>
        <address className="not-italic text-[#b0b0b0] leading-relaxed">
          LunaLEC AB<br />
          Linnaeus väg 24<br />
          901 87 Umeå<br />
          Sweden<br />
          <a
            href="mailto:info@lunalec.com"
            className="text-[#253ff6] hover:text-white transition-colors"
          >
            info@lunalec.com
          </a>
        </address>
      </>
    ),
  },
  {
    eyebrow: "What we collect",
    title: "Data",
    body: (
      <>
        <p className="mb-6">
          We only process personal data you actively share with us, plus minimal
          technical data needed to operate the site.
        </p>
        <ul className="space-y-4 list-disc pl-5 marker:text-[#555]">
          <li>
            <span className="text-white">Contact form submissions.</span>{" "}
            Name, email, company (optional), area of interest (optional), and the
            message you write. We use this strictly to respond to your enquiry.
          </li>
          <li>
            <span className="text-white">Browser preferences.</span>{" "}
            Theme (light/dark) and the accent color you pick from the spectrum
            slider are stored locally in your browser via <code className="mono text-sm text-[#b0b0b0]">localStorage</code>{" "}
            so the site remembers your choice. This never leaves your device.
          </li>
          <li>
            <span className="text-white">Server logs.</span>{" "}
            Our hosting provider (Vercel) records standard request data such as
            IP address, user-agent, and timestamp for security, reliability, and
            basic site operations. Logs are kept short-term and not used for
            profiling.
          </li>
        </ul>
      </>
    ),
  },
  {
    eyebrow: "Why we process it",
    title: "Legal basis",
    body: (
      <>
        <p className="mb-4">
          Contact form submissions are processed on the basis of{" "}
          <span className="text-white">consent</span> (Article 6(1)(a) GDPR) and,
          where applicable, the{" "}
          <span className="text-white">necessity to take pre-contractual steps</span>{" "}
          (Article 6(1)(b)).
        </p>
        <p className="mb-4">
          Functional storage of your theme and accent preferences is based on our{" "}
          <span className="text-white">legitimate interest</span> in providing a
          working website (Article 6(1)(f)). No tracking, no profiling.
        </p>
        <p>
          Server logs are processed for{" "}
          <span className="text-white">legitimate interest</span> in operating and
          securing the service.
        </p>
      </>
    ),
  },
  {
    eyebrow: "Who else sees it",
    title: "Processors",
    body: (
      <>
        <p className="mb-6">
          We use a small number of third-party services that may process limited
          personal data on our behalf:
        </p>
        <ul className="space-y-4 list-disc pl-5 marker:text-[#555]">
          <li>
            <span className="text-white">Formspree</span> (Hookform LLC, USA) —
            relays contact-form submissions to{" "}
            <a
              href="mailto:info@lunalec.com"
              className="text-[#253ff6] hover:text-white transition-colors"
            >
              info@lunalec.com
            </a>{" "}
            and stores them in their dashboard. Their privacy policy:{" "}
            <a
              href="https://formspree.io/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#253ff6] hover:text-white transition-colors break-all"
            >
              formspree.io/legal/privacy-policy
            </a>
            .
          </li>
          <li>
            <span className="text-white">Vercel</span> (Vercel Inc., USA) — hosts
            the website and serves static assets. Their privacy policy:{" "}
            <a
              href="https://vercel.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#253ff6] hover:text-white transition-colors break-all"
            >
              vercel.com/legal/privacy-policy
            </a>
            .
          </li>
        </ul>
        <p className="mt-6">
          Both providers transfer data to the United States. Transfers rely on
          the EU&ndash;US Data Privacy Framework and Standard Contractual Clauses
          as appropriate safeguards.
        </p>
      </>
    ),
  },
  {
    eyebrow: "How long",
    title: "Retention",
    body: (
      <>
        <p className="mb-4">
          We keep contact-form submissions for as long as needed to handle your
          enquiry and any resulting business correspondence — typically up to{" "}
          <span className="text-white">24 months</span> from your last
          interaction, unless an ongoing relationship requires longer retention.
        </p>
        <p>
          Browser preferences live in your browser&apos;s storage until you clear
          them. Server logs are kept for a short period by our hosting provider.
        </p>
      </>
    ),
  },
  {
    eyebrow: "Cookies & tracking",
    title: "Cookies",
    body: (
      <>
        <p className="mb-4">
          The site does <span className="text-white">not</span> use tracking
          cookies, advertising pixels, or third-party analytics that build
          profiles. The only browser storage we set is functional — theme and
          accent preferences in <code className="mono text-sm text-[#b0b0b0]">localStorage</code>.
        </p>
        <p>
          If we ever introduce analytics or marketing tools that would require
          consent, we will add a cookie banner and update this policy.
        </p>
      </>
    ),
  },
  {
    eyebrow: "Your rights",
    title: "Rights under GDPR",
    body: (
      <>
        <p className="mb-4">
          As a data subject in the EU/EEA you have the right to:
        </p>
        <ul className="space-y-2 list-disc pl-5 marker:text-[#555] mb-6">
          <li>Request access to the personal data we hold about you.</li>
          <li>Request correction of inaccurate data.</li>
          <li>Request deletion of your data (right to be forgotten).</li>
          <li>Object to or restrict our processing.</li>
          <li>Withdraw consent at any time where processing is based on consent.</li>
          <li>Receive your data in a portable format.</li>
        </ul>
        <p className="mb-4">
          Email{" "}
          <a
            href="mailto:info@lunalec.com"
            className="text-[#253ff6] hover:text-white transition-colors"
          >
            info@lunalec.com
          </a>{" "}
          to exercise any of these rights. We respond within one month.
        </p>
        <p>
          You also have the right to lodge a complaint with the Swedish data
          protection authority,{" "}
          <a
            href="https://www.imy.se/en/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#253ff6] hover:text-white transition-colors"
          >
            Integritetsskyddsmyndigheten (IMY)
          </a>
          .
        </p>
      </>
    ),
  },
  {
    eyebrow: "Changes",
    title: "Updates",
    body: (
      <p>
        We may update this policy from time to time as the site or our
        practices evolve. The date at the top reflects the latest version.
        Material changes will be highlighted on the site.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <div className="bg-[var(--background)]">
      {/* Hero */}
      <InViewSection className="min-h-[40dvh] flex flex-col justify-center border-b-section">
        <div className="px-6 lg:px-16 py-20 lg:py-24 max-w-3xl">
          <FadeIn>
            <p className="tech-label mb-6">Legal</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.9] tracking-tighter text-white mb-6">
              Privacy
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-[#b0b0b0] text-lg leading-relaxed mb-2">
              How we handle personal data on lunalec.com.
            </p>
          </FadeIn>
          <FadeIn delay={0.25}>
            <p className="text-sm text-[#808080]">Last updated: {LAST_UPDATED}</p>
          </FadeIn>
        </div>
      </InViewSection>

      {sections.map((section) => (
        <InViewSection key={section.title} className="border-b-section">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="px-6 lg:px-16 py-12 lg:py-16 border-b lg:border-b-0 lg:border-r border-[#1a1a1a]">
              <FadeIn>
                <p className="tech-label mb-2">{section.eyebrow}</p>
                <p className="section-title">{section.title}</p>
              </FadeIn>
            </div>
            <div className="lg:col-span-2 px-6 lg:px-16 py-12 lg:py-16">
              <FadeIn delay={0.1}>
                <div className="text-[#b0b0b0] text-base leading-relaxed max-w-2xl">
                  {section.body}
                </div>
              </FadeIn>
            </div>
          </div>
        </InViewSection>
      ))}
    </div>
  );
}
