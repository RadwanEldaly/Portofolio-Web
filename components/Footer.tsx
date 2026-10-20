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
    <footer className="border-t border-white/10 py-12 xs:py-16 px-4 sm:px-8 md:px-12 bg-[#111111]">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-10 sm:mb-12 items-start">
          {/* Brand & bio */}
          <div className="sm:col-span-2 lg:col-span-1">
            <span className="font-display font-semibold text-lg text-white">
              Radwan Eldaly
            </span>
            <p className="text-white/60 text-sm mt-2.5 sm:mt-3 leading-relaxed max-w-[32ch]">
              Web developer in Cairo, Egypt, crafting clean and responsive interfaces with React, Next.js, and Tailwind CSS.
            </p>
          </div>

          {/* Location */}
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-white/40 mb-2 sm:mb-3">
              Location
            </p>
            <p className="text-sm text-white">Cairo, Egypt</p>
          </div>

          {/* Direct contact */}
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-white/40 mb-2 sm:mb-3">
              Contact
            </p>
            <a
              href="mailto:radwaneldaly14@gmail.com"
              className="text-sm text-white hover:text-white/80 hover:underline transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm inline-block break-all sm:break-normal"
            >
              radwaneldaly14@gmail.com
            </a>
            <div className="flex items-center gap-2 mt-2">
              <svg className="w-4 h-4 text-white/50 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <a
                href="tel:01123170163"
                className="font-mono text-sm text-white hover:text-white/80 transition-colors"
              >
                01123170163
              </a>
            </div>
          </div>

          {/* Footer cycling project preview */}
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-white/40 mb-2 sm:mb-3">
              Work Preview
            </p>
            {previewProjects.length > 0 && activeProject ? (
              <div className="flex items-center gap-3">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-lg border border-white/15 bg-white/5 overflow-hidden shrink-0 shadow-sm">
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
                  <span className="font-mono text-[10px] uppercase text-white/40 block truncate">
                    {activeProject.year || "Project"}
                  </span>
                  <a
                    href="#work"
                    className="font-display text-xs font-medium text-white hover:underline block truncate mt-0.5"
                    title={activeProject.title}
                  >
                    {activeProject.title}
                  </a>
                </div>
              </div>
            ) : (
              <div className="w-16 h-16 rounded-lg border border-white/15 bg-white/5 flex items-center justify-center text-center p-2">
                <span className="font-mono text-[10px] text-white/40">Archive</span>
              </div>
            )}
          </div>
        </div>

        {/* Bottom bar with Social Icons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 sm:pt-8 border-t border-white/10 font-mono text-xs text-white/50 text-center sm:text-left">
          <span className="order-2 sm:order-1">© {currentYear} Radwan Eldaly. All rights reserved.</span>
          <div className="order-1 sm:order-2 flex flex-wrap items-center justify-center sm:justify-end gap-2">
            {socialLinks.map(({ label, url, icon }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-2.5 xs:px-3 py-1.5 rounded-lg bg-white/5 border border-white/15 hover:border-white/40 hover:text-white transition-all duration-200 text-white/70 shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
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
