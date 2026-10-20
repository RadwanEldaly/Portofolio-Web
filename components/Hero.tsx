"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const anim = (delay = 0) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay },
        };

  return (
    <section
      id="hero"
      className="pt-8 pb-14 xs:pt-12 xs:pb-18 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-32 px-4 sm:px-8 md:px-12 max-w-[1280px] mx-auto min-h-[calc(100dvh-4rem)] sm:min-h-[calc(100vh-5rem)] flex items-center"
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 xs:gap-10 lg:gap-14 items-center">
        {/* Left column: Copy & CTAs */}
        <motion.div {...anim(0)} className="lg:col-span-7 space-y-4 xs:space-y-6">
          <p className="font-mono text-xs sm:text-sm uppercase tracking-wider text-muted">
            Web Developer · Cairo, Egypt
          </p>

          <h1 className="font-display text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tightest text-ink leading-[1] sm:leading-[0.95] break-words">
            Radwan Eldaly
          </h1>

          <p className="font-body text-base xs:text-lg sm:text-xl text-muted leading-relaxed max-w-xl font-normal pt-1">
            I build responsive, carefully crafted websites and web applications with
            React, Next.js, and TypeScript.
          </p>

          <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-3 xs:gap-4 pt-2 xs:pt-4 w-full xs:w-auto">
            <a
              href="#work"
              className="btn-diagonal w-full xs:w-auto min-h-[48px] px-6 xs:px-7 py-3 text-center justify-center font-mono text-xs uppercase tracking-wider rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-ink"
            >
              View work <span className="ml-2 font-mono">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center w-full xs:w-auto min-h-[48px] px-6 py-3 font-mono text-xs uppercase tracking-wider border-2 border-[#171717] hover:bg-[#171717] hover:text-[#F5F3EE] bg-transparent text-ink rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ink text-center"
            >
              Get in touch
            </a>
          </div>
        </motion.div>

        {/* Right column: Original Studio Portrait with Full Background */}
        <motion.div
          {...anim(0.15)}
          className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center pt-2 lg:pt-0"
        >
          <div className="relative w-full max-w-[240px] xs:max-w-[280px] sm:max-w-[320px] lg:max-w-[380px]">
            {/* Editorial framed portrait */}
            <div className="relative aspect-[4/5] rounded-2xl bg-mat border border-line/40 overflow-hidden shadow-md">
              <Image
                src="/images/radwan-portrait.jpg"
                alt="Radwan Eldaly — Web Developer"
                width={824}
                height={1024}
                priority
                quality={95}
                sizes="(max-width: 480px) 240px, (max-width: 768px) 280px, (max-width: 1200px) 340px, 380px"
                className="w-full h-full object-cover object-top select-none"
              />
            </div>

            <div className="mt-2.5 xs:mt-3 flex items-center justify-between font-mono text-[10px] xs:text-[11px] text-muted px-1">
              <span>Radwan Eldaly</span>
              <span>Cairo, EG</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
