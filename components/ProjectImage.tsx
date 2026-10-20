"use client";

import { useState } from "react";
import Image from "next/image";
import type { ProjectImage as ProjectImageType } from "@/lib/data";

type ProjectImageProps = {
  image?: ProjectImageType;
  priority?: boolean;
  className?: string;
  sizes?: string;
  aspectRatio?: string;
};

/**
 * Editorial screenshot wrapper.
 * Delivers uncompressed, high-fidelity screenshots with zero layout shift,
 * and gracefully falls back to a neutral placeholder if an image is missing.
 */
export default function ProjectImage({
  image,
  priority = false,
  className = "",
  sizes = "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 640px",
  aspectRatio = "aspect-[16/10]",
}: ProjectImageProps) {
  const [hasError, setHasError] = useState(false);

  if (!image || hasError) {
    return (
      <div
        className={`w-full ${aspectRatio} bg-mat border border-line/30 flex items-center justify-center p-6 text-center select-none ${className}`}
        role="img"
        aria-label={image?.alt || "Screenshot placeholder"}
      >
        <span className="font-mono text-xs uppercase tracking-wider text-muted">
          Screenshot coming soon
        </span>
      </div>
    );
  }

  return (
    <div
      className={`relative w-full ${aspectRatio} overflow-hidden bg-mat border border-line/30 ${className}`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        priority={priority}
        quality={95}
        sizes={sizes}
        unoptimized
        onError={() => setHasError(true)}
        className="w-full h-full object-cover object-top transition-transform duration-500 ease-out hover:scale-[1.02]"
      />
    </div>
  );
}
