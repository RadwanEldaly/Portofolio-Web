"use client";

import { motion, useReducedMotion } from "framer-motion";
import { skills, type SkillItem } from "@/lib/data";
import RevealText from "./RevealText";

function SkillIcon({ icon }: { icon: SkillItem["icon"] }) {
  switch (icon) {
    case "html":
      return (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#E34F26]" aria-hidden="true">
          <path d="M12 2L3 5.3 4.6 18.7 12 22l7.4-3.3L21 5.3 12 2zm5.7 6.4h-7.6l.2 2.3h7.1l-.6 6-4.7 1.3-4.7-1.3-.3-3.3h2.3l.2 1.6 2.5.7 2.5-.7.3-3H6.9L6.3 6.1h11.6l-.2 2.3z" />
        </svg>
      );
    case "css":
      return (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#1572B6]" aria-hidden="true">
          <path d="M12 2L3 5.3 4.6 18.7 12 22l7.4-3.3L21 5.3 12 2zm5.7 6.4h-7.6l.2 2.3h7.1l-.6 6-4.7 1.3-4.7-1.3-.3-3.3h2.3l.2 1.6 2.5.7 2.5-.7.3-3H6.9L6.3 6.1h11.6l-.2 2.3z" />
        </svg>
      );
    case "javascript":
      return (
        <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true">
          <rect width="24" height="24" rx="4" fill="#F7DF1E" />
          <path
            d="M6 16.5c0 1.9 1.1 2.8 2.8 2.8 1.6 0 2.5-.8 2.5-2.2v-7h-2.1v6.9c0 .6-.3.9-.9.9-.5 0-.8-.3-.8-.9v-3.7H6v3.2zm6.7 1.6c.7.8 1.8 1.3 3.1 1.3 2 0 3.2-1.1 3.2-2.7 0-1.6-1-2.2-2.6-2.9-1.1-.4-1.6-.8-1.6-1.5 0-.7.6-1.2 1.5-1.2.9 0 1.5.4 1.9 1.1l1.8-1.2C18.9 9.8 17.8 9 16.4 9c-2.1 0-3.4 1.2-3.4 2.8 0 1.5.9 2.2 2.5 2.8 1.1.5 1.7.8 1.7 1.6 0 .8-.7 1.3-1.8 1.3-1.1 0-1.9-.6-2.4-1.5l-1.7 1.1z"
            fill="#000000"
          />
        </svg>
      );
    case "typescript":
      return (
        <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true">
          <rect width="24" height="24" rx="4" fill="#3178C6" />
          <path
            d="M5.5 10.5h5.5v2.2H9v7H6.7v-7H5.5v-2.2zm7 3.8c.8 1.2 2.1 1.8 3.5 1.8 1.2 0 2-.5 2-1.3 0-.8-.6-1.2-1.8-1.6l-1.2-.4c-2.1-.7-3-1.8-3-3.4 0-2.2 1.8-3.6 4.3-3.6 1.7 0 3.1.7 3.9 1.8l-1.6 1.4c-.6-.7-1.4-1.1-2.4-1.1-1.1 0-1.8.5-1.8 1.2 0 .7.5 1.1 1.6 1.5l1.2.4c2.3.8 3.3 1.9 3.3 3.6 0 2.4-1.9 3.8-4.6 3.8-2 0-3.6-.8-4.6-2.1l1.6-1.5z"
            fill="#FFFFFF"
          />
        </svg>
      );
    case "react":
      return (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-[#61DAFB]" strokeWidth="1.5" aria-hidden="true">
          <ellipse cx="12" cy="12" rx="10" ry="4.2" />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
        </svg>
      );
    case "nextjs":
      return (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#000000]" aria-hidden="true">
          <circle cx="12" cy="12" r="11" fill="#000000" />
          <path
            d="M15.5 18L9 9.5V18H7.5V6H9.4L16.2 15V6h1.5v12h-2.2z"
            fill="#FFFFFF"
          />
        </svg>
      );
    case "tailwind":
      return (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#06B6D4]" aria-hidden="true">
          <path d="M12 6c-2.7 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5.8.2 1.4.8 2 1.5 1 1 2.2 2.2 4.5 2.2 2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.8-.2-1.4-.8-2-1.5-1-1-2.2-2.2-4.5-2.2zM7 12c-2.7 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5.8.2 1.4.8 2 1.5 1 1 2.2 2.2 4.5 2.2 2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.8-.2-1.4-.8-2-1.5-1-1-2.2-2.2-4.5-2.2z" />
        </svg>
      );
    case "framer":
      return (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#0055FF]" aria-hidden="true">
          <path d="M4 2h16v7h-8l8 7H4v-7h8L4 2zm0 14h8v7l-8-7z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Skills() {
  const shouldReduceMotion = useReducedMotion();

  const anim = (delay = 0) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.15 },
          transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
        };

  return (
    <section id="skills" className="py-16 xs:py-20 sm:py-24 md:py-32 lg:py-36 px-4 sm:px-8 md:px-12 border-t border-line/20">
      <div className="max-w-[1280px] mx-auto">
        <div className="mb-8 xs:mb-10 sm:mb-14 md:mb-18">
          <span className="font-mono text-xs uppercase tracking-wider text-muted block mb-2 xs:mb-3">
            Core Competencies
          </span>
          <RevealText
            text="Technical Skills"
            as="h2"
            className="font-display text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tightest text-ink leading-tight"
          />
          <p className="text-muted text-sm xs:text-base md:text-lg mt-2.5 xs:mt-3 max-w-xl leading-relaxed">
            Production-proven frontend technologies and development libraries I build with daily.
          </p>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 xs:gap-4 sm:gap-5">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              {...anim(index * 0.05)}
              className="group p-3.5 xs:p-4 sm:p-5 md:p-6 bg-[#111111] hover:bg-white border border-white/10 hover:border-[#171717]/20 rounded-xl transition-all duration-300 shadow-sm hover:shadow-lg flex items-center gap-3.5 xs:gap-4"
            >
              <div className="w-11 h-11 xs:w-12 xs:h-12 rounded-xl bg-white/10 group-hover:bg-[#f5f3ee] border border-white/15 group-hover:border-[#171717]/15 flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-all duration-300">
                <SkillIcon icon={skill.icon} />
              </div>
              <div className="min-w-0">
                <span className="font-display text-sm xs:text-base font-semibold text-white group-hover:text-[#171717] block truncate transition-colors duration-300">
                  {skill.name}
                </span>
                <span className="font-mono text-[10px] xs:text-[11px] text-white/50 group-hover:text-[#171717]/60 block truncate mt-0.5 transition-colors duration-300">
                  {skill.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
