"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import LightSwitch from "./LightSwitch";

const navigation = [
  { name: "Home", href: "/", index: "01" },
  { name: "Technology", href: "/technology", index: "02" },
  { name: "Applications", href: "/applications", index: "03" },
  { name: "Partners", href: "/partners", index: "04" },
  { name: "About", href: "/about", index: "05" },
  { name: "Contact", href: "/contact", index: "06" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/95 backdrop-blur-sm border-b-section">
      <nav className="flex items-stretch relative z-10">
        {/* Logo */}
        <Link href="/" className="group/logo flex items-center justify-center border-r border-[#1a1a1a] w-24 h-24 lg:w-32 lg:h-32 transition-all duration-300 hover:bg-white hover:shadow-[inset_0_0_100px_rgba(255,255,255,1),0_0_40px_rgba(255,255,255,0.6),0_0_80px_var(--accent)] hover:border-white/80">
          <Image
            src="/lunalec-logo2.svg"
            alt="LunaLEC"
            width={400}
            height={96}
            className="w-12 lg:w-16 h-auto transition-all duration-300 group-hover/logo:invert"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-stretch flex-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex flex-col justify-center w-32 lg:w-40 border-r border-[#1a1a1a] text-[#b0b0b0] hover:bg-white hover:text-[#050505] hover:shadow-[inset_0_0_100px_rgba(255,255,255,1),0_0_40px_rgba(255,255,255,0.6),0_0_80px_var(--accent)] transition-all duration-300 group px-4"
            >
              <span className="mono text-xs text-[#555] group-hover:text-[#050505]/50 transition-colors">{item.index}</span>
              <span className="text-base">{item.name}</span>
            </Link>
          ))}

          {/* Spacer */}
          <div className="flex-1" />

          {/* Light Switch */}
          <div className="flex items-center px-6 border-l border-[#1a1a1a]">
            <LightSwitch />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex-1 flex items-center justify-end px-6">
          <button
            type="button"
            className="p-2 text-[#b0b0b0] hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Menu</span>
            {mobileMenuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#1a1a1a]">
          <div className="grid grid-cols-2">
            {navigation.map((item, i) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-6 py-6 text-[#b0b0b0] border-b border-[#1a1a1a] ${i % 2 === 1 ? "border-l" : ""} hover:bg-white hover:text-[#050505] hover:shadow-[inset_0_0_100px_rgba(255,255,255,1),0_0_40px_rgba(255,255,255,0.6)] transition-all duration-300 group`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="mono text-xs text-[#555] group-hover:text-[#050505]/50 block">{item.index}</span>
                <span className="text-base">{item.name}</span>
              </Link>
            ))}
            {/* Light Switch */}
            <div className="col-span-2 px-6 py-6 border-b border-[#1a1a1a] flex items-center justify-center">
              <LightSwitch />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
