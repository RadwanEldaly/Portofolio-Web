"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import type { Project } from "@/lib/data";
import ProjectImage from "./ProjectImage";

type ProjectDetailsProps = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectDetails({ project, onClose }: ProjectDetailsProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!project) return;

    // Save the element that triggered the dialog to restore focus on close
    triggerRef.current = document.activeElement as HTMLElement | null;

    // Body scroll lock
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Focus the first focusable element in dialog
    const focusTimer = setTimeout(() => {
      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
        'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (focusable && focusable.length > 0) {
        focusable[0]?.focus();
      }
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === "Tab" && dialogRef.current) {
        const focusable = Array.from(
          dialogRef.current.querySelectorAll<HTMLElement>(
            'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
          )
        );

        if (focusable.length === 0) {
          e.preventDefault();
          return;
        }

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last?.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first?.focus();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      clearTimeout(focusTimer);
      if (triggerRef.current && typeof triggerRef.current.focus === "function") {
        triggerRef.current.focus();
      }
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-ink/60 backdrop-blur-sm overflow-y-auto"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              onClose();
            }
          }}
        >
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-dialog-title"
            tabIndex={-1}
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-4xl bg-paper border border-line shadow-2xl rounded-sm my-auto max-h-[90vh] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-paper/95 backdrop-blur-sm border-b border-line/20">
              <span className="font-mono text-xs uppercase tracking-wider text-muted">
                Project details
              </span>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center justify-center w-8 h-8 rounded-sm text-ink hover:bg-mat transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ink"
                aria-label="Close dialog"
              >
                ✕
              </button>
            </div>

            {/* Scrollable body */}
            <div className="p-6 md:p-10 overflow-y-auto space-y-10">
              <header>
                <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-muted mb-3">
                  {project.year && <span>{project.year}</span>}
                  {project.year && project.role && <span>·</span>}
                  {project.role && <span>{project.role}</span>}
                </div>
                <h2
                  id="project-dialog-title"
                  className="font-display text-3xl md:text-4xl font-semibold tracking-tightest text-ink leading-tight"
                >
                  {project.title}
                </h2>
                <p className="mt-4 text-base md:text-lg text-muted leading-relaxed max-w-2xl">
                  {project.summary}
                </p>

                {/* Stack tags */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs px-2.5 py-1 bg-mat border border-line/30 text-ink rounded-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </header>

              {/* Conditional text blocks: only rendered if present in data */}
              {(project.details?.whatItIs || project.details?.whatIBuilt) && (
                <div className="grid md:grid-cols-2 gap-8 border-t border-line/20 pt-8">
                  {project.details.whatItIs && (
                    <div>
                      <h3 className="font-mono text-xs uppercase tracking-wider text-muted mb-2">
                        What it is
                      </h3>
                      <p className="text-sm md:text-base text-ink leading-relaxed">
                        {project.details.whatItIs}
                      </p>
                    </div>
                  )}
                  {project.details.whatIBuilt && (
                    <div>
                      <h3 className="font-mono text-xs uppercase tracking-wider text-muted mb-2">
                        What I built
                      </h3>
                      <p className="text-sm md:text-base text-ink leading-relaxed">
                        {project.details.whatIBuilt}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Cover & Gallery screenshots */}
              {(project.cover || (project.gallery && project.gallery.length > 0)) && (
                <div className="space-y-6 border-t border-line/20 pt-8">
                  <h3 className="font-mono text-xs uppercase tracking-wider text-muted">
                    Screenshots
                  </h3>
                  {project.cover && (
                    <div>
                      <ProjectImage
                        image={project.cover}
                        aspectRatio="aspect-[16/10]"
                        className="rounded-sm shadow-sm"
                      />
                    </div>
                  )}
                  {project.gallery?.map((img, i) => (
                    <div key={img.src || i}>
                      <ProjectImage
                        image={img}
                        aspectRatio="aspect-[16/10]"
                        className="rounded-sm shadow-sm"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="sticky bottom-0 z-10 flex justify-end px-6 py-4 bg-paper/95 backdrop-blur-sm border-t border-line/20">
              <button
                type="button"
                onClick={onClose}
                className="btn-diagonal min-h-[40px] px-6 py-2 font-mono text-xs uppercase tracking-wider rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-ink"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
