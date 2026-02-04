import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  { label: "Technology", href: "/technology" },
  { label: "Applications", href: "/applications" },
  { label: "Partners", href: "/partners" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-[#1a1a1a]">
      <div className="px-6 lg:px-16 py-16 lg:py-20">
        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block group">
              <Image
                src="/lunalec-logo2.svg"
                alt="LunaLEC"
                width={400}
                height={96}
                className="w-12 lg:w-16 h-auto group-hover:opacity-70 transition-opacity"
              />
            </Link>
            <p className="mt-6 text-sm text-[#808080] leading-relaxed max-w-xs">
              Printable light technology for the next generation of products.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="tech-label mb-4">Navigate</p>
            <nav className="flex flex-col gap-3">
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
          <div>
            <p className="tech-label mb-4">Contact</p>
            <div className="space-y-3 text-sm">
              <a
                href="mailto:info@lunalec.com"
                className="block text-[#b0b0b0] hover:text-white transition-colors"
              >
                info@lunalec.com
              </a>
              <a
                href="https://linkedin.com/company/lunalec"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[#b0b0b0] hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Location */}
          <div>
            <p className="tech-label mb-4">Location</p>
            <address className="text-sm text-[#b0b0b0] not-italic leading-relaxed">
              LunaLEC AB<br />
              Tvistevägen 48C<br />
              907 36 Umeå<br />
              Sweden
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-[#1a1a1a] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#555]">
            © {new Date().getFullYear()} LunaLEC AB. All rights reserved.
          </p>
          <p className="text-xs text-[#555]">
            Deep tech from the Arctic
          </p>
        </div>
      </div>
    </footer>
  );
}
