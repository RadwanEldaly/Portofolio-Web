"use client";

import { useState, useRef, useEffect } from "react";
import { useReducedMotion } from "framer-motion";
import type { Project } from "@/lib/data";
import ProjectImage from "./ProjectImage";

type ProjectPlateProps = {
  project: Project;
  index: number;
  priority?: boolean;
  onSelect: (project: Project) => void;
};

export default function ProjectPlate({
  project,
  index,
  priority = false,
  onSelect,
}: ProjectPlateProps) {
  const formattedIndex = String(index + 1).padStart(2, "0");
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, isHovered: false });
  const [canHover, setCanHover] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    setCanHover(media.matches);

    const listener = (e: MediaQueryListEvent) => setCanHover(e.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!canHover || shouldReduceMotion || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    // Restrained 3D tilt
    setTilt({
      rotateX: -y * 6,
      rotateY: x * 6,
      isHovered: true,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0, isHovered: false });
  };

  const transformStyle =
    canHover && !shouldReduceMotion && tilt.isHovered
      ? {
          transform: `perspective(1000px) rotateX(${tilt.rotateX.toFixed(2)}deg) rotateY(${tilt.rotateY.toFixed(2)}deg)`,
          transition: "transform 0.1s ease-out",
        }
      : {
          transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)",
          transition: "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
        };

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={transformStyle}
      className="group h-full flex flex-col justify-between bg-mat/50 hover:bg-paper border border-line/30 hover:border-line/70 rounded-2xl p-5 sm:p-6 transition-all duration-300 shadow-sm hover:shadow-lg will-change-transform"
    >
      <div>
        {/* Project preview screenshot */}
        <div className="relative mb-5 rounded-xl overflow-hidden shadow-xs border border-line/20">
          <ProjectImage
            image={project.cover}
            priority={priority}
            aspectRatio="aspect-[16/10]"
            className="rounded-xl"
          />

          {project.mobile && (
            <div className="hidden md:block absolute -bottom-4 -right-4 w-1/4 max-w-[140px] shadow-xl rounded-lg border border-line/30 bg-mat overflow-hidden z-10">
              <ProjectImage
                image={project.mobile}
                aspectRatio="aspect-[9/16]"
                className="w-full h-auto"
              />
            </div>
          )}
        </div>

        {/* Index & Year badge */}
        <div className="flex items-center justify-between font-mono text-xs text-muted mb-2">
          <span className="px-2 py-0.5 rounded-md bg-paper border border-line/30 font-medium text-ink">
            {formattedIndex}
          </span>
          <span>{project.year || "2026"}</span>
        </div>

        {/* Title */}
        <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tightest text-ink group-hover:text-black transition-colors">
          {project.title}
        </h3>

        {/* Summary */}
        <p className="text-muted text-sm leading-relaxed mt-2.5 line-clamp-3">
          {project.summary}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-line/20 flex flex-wrap items-center justify-between gap-4">
        {/* Stack tags */}
        <div className="flex flex-wrap gap-1.5 max-w-[65%]">
          {project.stack.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] sm:text-[11px] px-2 py-0.5 bg-paper border border-line/20 text-ink rounded-sm"
            >
              {tag}
            </span>
          ))}
          {project.stack.length > 3 && (
            <span className="font-mono text-[10px] sm:text-[11px] px-1.5 py-0.5 text-muted">
              +{project.stack.length - 3}
            </span>
          )}
        </div>

        {/* View Details button */}
        <button
          type="button"
          onClick={() => onSelect(project)}
          className="btn-diagonal min-h-[40px] px-4 py-2 font-mono text-xs uppercase tracking-wider rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-ink shrink-0"
        >
          Details <span className="ml-1 font-mono">→</span>
        </button>
      </div>
    </article>
  );
}
