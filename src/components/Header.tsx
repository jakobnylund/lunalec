"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import LightSwitch from "@/components/LightSwitch";

const navigation = [
  { name: "Home", href: "/", index: "01" },
  { name: "Technology", href: "/technology", index: "02" },
  { name: "About", href: "/about", index: "03" },
  { name: "Contact", href: "/contact", index: "04" },
];

const isActive = (pathname: string, href: string) =>
  href === "/" ? pathname === "/" : pathname.startsWith(href);

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)]/95 backdrop-blur-sm border-b-section">
      <nav className="grid grid-cols-[6rem_1fr] lg:grid-cols-3 items-stretch h-24 lg:h-32 relative z-10">
        {/* Logo cell — left 1/3, padding matches page index column */}
        <Link
          href="/"
          className="group/logo flex items-center px-6 lg:px-16 border-r border-[#1a1a1a] transition-all duration-300 hover:bg-white hover:shadow-[inset_0_0_100px_rgba(255,255,255,1),0_0_40px_rgba(255,255,255,0.6),0_0_80px_var(--accent)] hover:border-white/80"
        >
          <Image
            src="/lunalec-white.svg"
            alt="LunaLEC"
            width={398}
            height={398}
            className="w-12 lg:w-16 h-auto transition-all duration-300 group-hover/logo:invert"
          />
        </Link>

        {/* Desktop Navigation — 4 equal nav links + a dedicated light-switch cell */}
        <div className="hidden md:flex col-span-2 items-stretch">
          {navigation.map((item, i) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative flex-1 flex flex-col justify-center px-6 lg:px-8 ${
                  i < navigation.length - 1 ? "border-r border-[#1a1a1a]" : ""
                } ${
                  active
                    ? "text-white bg-[#0e0e0e] shadow-[inset_0_-2px_0_var(--accent)]"
                    : "text-[#b0b0b0]"
                } hover:bg-white hover:text-[#050505] hover:shadow-[inset_0_0_100px_rgba(255,255,255,1),0_0_40px_rgba(255,255,255,0.6),0_0_80px_var(--accent)] transition-all duration-300 group`}
              >
                <span
                  className={`mono text-xs ${
                    active ? "text-[#253ff6]" : "text-[#555]"
                  } group-hover:text-[#050505]/50 transition-colors mb-1`}
                >
                  {item.index}
                </span>
                <span className="text-base">{item.name}</span>
              </Link>
            );
          })}
          {/* Light switch cell — separated from nav by its own border */}
          <div className="flex items-center justify-center px-5 lg:px-6 border-l border-[#1a1a1a]">
            <LightSwitch />
          </div>
        </div>

        {/* Mobile right zone — light switch + menu button */}
        <div className="md:hidden flex items-center justify-end gap-2 pr-6">
          <LightSwitch />
          <button
            type="button"
            className="flex items-center justify-center w-10 h-10 text-[#b0b0b0] hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>


      {/* Mobile Menu — full-width section cells matching page grid */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#1a1a1a]">
          {navigation.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`flex items-baseline gap-4 px-6 py-6 border-b border-[#1a1a1a] ${
                  active
                    ? "text-white bg-[#0e0e0e] border-l-2 border-l-[var(--accent)]"
                    : "text-[#b0b0b0]"
                } hover:bg-white hover:text-[#050505] hover:shadow-[inset_0_0_100px_rgba(255,255,255,1),0_0_40px_rgba(255,255,255,0.6)] transition-all duration-300 group`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span
                  className={`mono text-xs ${
                    active ? "text-[#253ff6]" : "text-[#555]"
                  } group-hover:text-[#050505]/50`}
                >
                  {item.index}
                </span>
                <span className="text-lg">{item.name}</span>
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
