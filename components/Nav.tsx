"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ease-out ${
        isScrolled
          ? "h-14 sm:h-16 bg-[#F5F3EE]/80 backdrop-blur-xl border-b border-line/35 shadow-sm shadow-ink/[0.04]"
          : "h-20 sm:h-24 bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-12 h-full flex items-center justify-between">
        {/* Brand */}
        <a
          href="#hero"
          className="font-display font-bold text-base sm:text-lg md:text-xl text-ink hover:opacity-80 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-ink rounded-sm shrink-0"
        >
          <span className="hidden sm:inline">Radwan Eldaly</span>
          <span className="sm:hidden">Radwan</span>
        </a>

        {/* Compact inline navigation for all screen sizes */}
        <nav aria-label="Primary" className="flex items-center gap-2 sm:gap-6 md:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[11px] sm:text-xs uppercase tracking-wider text-muted hover:text-ink transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ink rounded-sm px-2 py-1.5"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
