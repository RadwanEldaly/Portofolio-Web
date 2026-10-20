"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { projects, socialLinks } from "@/lib/data";
import { SocialIcon } from "./SocialIcons";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const shouldReduceMotion = useReducedMotion();

  const previewProjects = projects.filter((p) => p.published && p.cover);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (previewProjects.length <= 1 || shouldReduceMotion) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % previewProjects.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [previewProjects.length, shouldReduceMotion]);

  const activeProject = previewProjects[currentIndex];

  return (
    <footer className="border-t border-line/20 py-16 px-4 sm:px-8 md:px-12 bg-mat">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12 items-start">
          {/* Brand & bio */}
          <div className="sm:col-span-2 md:col-span-1">
            <span className="font-display font-semibold text-lg text-ink">
              Radwan Eldaly
            </span>
            <p className="text-muted text-sm mt-3 leading-relaxed max-w-[28ch]">
              Web developer in Cairo, Egypt, crafting clean and responsive interfaces with React, Next.js, and Tailwind CSS.
            </p>
          </div>

          {/* Location */}
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-muted mb-3">
              Location
            </p>
            <p className="text-sm text-ink">Cairo, Egypt</p>
          </div>

          {/* Direct contact */}
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-muted mb-3">
              Contact
            </p>
            <a
              href="mailto:radwaneldaly14@gmail.com"
              className="text-sm text-ink hover:underline transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ink rounded-sm inline-block"
            >
              radwaneldaly14@gmail.com
            </a>
          </div>

          {/* Footer cycling project preview */}
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-muted mb-3">
              Work Preview
            </p>
            {previewProjects.length > 0 && activeProject ? (
              <div className="flex items-center gap-3">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-lg border border-line/30 bg-paper overflow-hidden shrink-0 shadow-sm">
                  {previewProjects.map((p, idx) => (
                    <div
                      key={p.slug}
                      className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                        idx === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                      }`}
                    >
                      {p.cover && (
                        <Image
                          src={p.cover.src}
                          alt={p.cover.alt}
                          fill
                          sizes="80px"
                          unoptimized
                          className="object-cover object-top"
                        />
                      )}
                    </div>
                  ))}
                </div>
                <div className="min-w-0">
                  <span className="font-mono text-[10px] uppercase text-muted block truncate">
                    {activeProject.year || "Project"}
                  </span>
                  <a
                    href="#work"
                    className="font-display text-xs font-medium text-ink hover:underline block truncate mt-0.5"
                    title={activeProject.title}
                  >
                    {activeProject.title}
                  </a>
                </div>
              </div>
            ) : (
              <div className="w-16 h-16 rounded-lg border border-line/30 bg-paper flex items-center justify-center text-center p-2">
                <span className="font-mono text-[10px] text-muted">Archive</span>
              </div>
            )}
          </div>
        </div>

        {/* Bottom bar with Social Icons */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 border-t border-line/20 font-mono text-xs text-muted">
          <span>© {currentYear} Radwan Eldaly. All rights reserved.</span>
          <div className="flex flex-wrap items-center gap-2.5">
            {socialLinks.map(({ label, url, icon }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-paper border border-line/30 hover:border-ink hover:text-black transition-all duration-200 text-ink shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-ink"
                aria-label={label}
              >
                <SocialIcon icon={icon} className="w-3.5 h-3.5" />
                <span className="font-mono text-xs">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
