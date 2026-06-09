import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Technology", href: "/technology" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--background)] border-t-section">
      {/* Main grid mirrors the page index/content split */}
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {/* Brand — occupies the index column, matches "Our Story / Origin" width */}
        <div className="px-6 lg:px-16 py-10 lg:py-20 border-b lg:border-b-0 lg:border-r border-[#1a1a1a]">
          <Link href="/" className="inline-block group">
            <Image
              src="/lunalec-white.svg"
              alt="LunaLEC"
              width={398}
              height={398}
              className="w-10 lg:w-16 h-auto group-hover:opacity-70 transition-opacity"
            />
          </Link>
          <p className="mt-4 lg:mt-6 text-sm text-[#808080] leading-relaxed max-w-xs">
            Printable light technology for the next generation of products.
          </p>
        </div>

        {/* Right 2/3 — three equal info columns */}
        <div className="lg:col-span-2 grid grid-cols-3">
          {/* Navigate */}
          <div className="px-4 sm:px-6 lg:px-12 py-10 lg:py-20 border-r border-[#1a1a1a]">
            <p className="tech-label mb-4 lg:mb-6">Navigate</p>
            <nav className="flex flex-col gap-2 lg:gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[#b0b0b0] hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="px-4 sm:px-6 lg:px-12 py-10 lg:py-20 border-r border-[#1a1a1a]">
            <p className="tech-label mb-4 lg:mb-6">Contact</p>
            <div className="space-y-2 lg:space-y-3 text-sm">
              <a
                href="mailto:info@lunalec.com"
                className="block text-[#b0b0b0] hover:text-white transition-colors break-all"
              >
                info@lunalec.com
              </a>
              <a
                href="https://se.linkedin.com/company/lunalec-ab"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[#b0b0b0] hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="px-4 sm:px-6 lg:px-12 py-10 lg:py-20">
            <p className="tech-label mb-4 lg:mb-6">Location</p>
            <address className="text-sm text-[#b0b0b0] not-italic leading-relaxed">
              LunaLEC AB<br />
              Linnaeus väg 24<br />
              901 87 Umeå<br />
              Sweden
            </address>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#1a1a1a] px-6 lg:px-16 py-4 lg:py-6 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4">
        <p className="text-xs text-[#555]">
          © {new Date().getFullYear()} LunaLEC AB. All rights reserved.
        </p>
        <div className="flex items-center gap-4 text-xs text-[#555]">
          <Link href="/privacy" className="hover:text-white transition-colors">
            Privacy
          </Link>
          <span aria-hidden="true">·</span>
          <span>Deep tech from the Arctic</span>
        </div>
      </div>
    </footer>
  );
}
