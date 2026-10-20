"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { Project } from "@/lib/data";
import ProjectPlate from "./ProjectPlate";
import ProjectDetails from "./ProjectDetails";
import RevealText from "./RevealText";

type WorkSectionProps = {
  projects: Project[];
};

export default function WorkSection({ projects }: WorkSectionProps) {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const publishedProjects = projects.filter((p) => p.published);

  const cardAnim = (index: number) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 32 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.15 },
          transition: {
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
            delay: (index % 2) * 0.1,
          },
        };

  return (
    <section id="work" className="py-24 md:py-36 px-4 sm:px-8 md:px-12 max-w-[1280px] mx-auto">
      <div className="mb-14 md:mb-18">
        <span className="font-mono text-xs uppercase tracking-wider text-muted block mb-3">
          Selected Work
        </span>
        <RevealText
          text="Featured Projects"
          as="h2"
          className="font-display text-3xl md:text-5xl font-semibold tracking-tightest text-ink"
        />
        <p className="text-muted text-base md:text-lg mt-3 max-w-xl leading-relaxed">
          A curated selection of responsive websites and web applications built with modern frontend tools.
        </p>
      </div>

      {publishedProjects.length === 0 ? (
        <div className="py-16 md:py-24 px-6 md:px-12 border border-line/30 bg-mat rounded-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-wider text-muted">
            Archive status
          </p>
          <h3 className="font-display text-xl md:text-2xl font-semibold text-ink mt-3">
            Projects coming soon
          </h3>
          <p className="text-muted text-sm md:text-base max-w-md mx-auto mt-3 leading-relaxed">
            Case studies and verified web development screenshots are currently being documented.
          </p>
          <a
            href="#contact"
            className="btn-diagonal min-h-[44px] px-6 py-2.5 mt-6 font-mono text-xs uppercase tracking-wider rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-ink"
          >
            Get in touch <span className="ml-1.5 font-mono">→</span>
          </a>
        </div>
      ) : (
        /* 2 projects per row grid layout */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {publishedProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              {...cardAnim(index)}
              className="h-full"
            >
              <ProjectPlate
                project={project}
                index={index}
                priority={index < 2}
                onSelect={setActiveProject}
              />
            </motion.div>
          ))}
        </div>
      )}

      {/* Accessible details dialog */}
      <ProjectDetails
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
