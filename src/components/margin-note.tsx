"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MarginNoteProps {
  children: string;
  side?: "left" | "right";
  className?: string;
  arrow?: boolean;
}

export function MarginNote({ children, side = "right", className, arrow = true }: MarginNoteProps) {
  return (
    <motion.div
      className={cn(
        "absolute hidden lg:block",
        side === "right" ? "-right-32 xl:-right-40" : "-left-32 xl:-left-40",
        "top-0 w-28 xl:w-36",
        className
      )}
      initial={{ opacity: 0, x: side === "right" ? -10 : 10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="relative">
        {/* Handwritten note */}
        <p className="font-hand text-sm text-muted-foreground/70 leading-tight rotate-[-2deg]">
          {children}
        </p>
        
        {/* Arrow pointing to content */}
        {arrow && (
          <svg
            className={cn(
              "absolute top-1/2 -translate-y-1/2 text-muted-foreground/40",
              side === "right" ? "-left-8" : "-right-8"
            )}
            width="32"
            height="24"
            viewBox="0 0 32 24"
            fill="none"
          >
            <motion.path
              d={side === "right" 
                ? "M2 12 Q8 10, 16 12 T28 12 M22 8 L28 12 L22 16"
                : "M30 12 Q24 10, 16 12 T4 12 M10 8 L4 12 L10 16"
              }
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </svg>
        )}
      </div>
    </motion.div>
  );
}

interface InlineAnnotationProps {
  children: string;
  className?: string;
}

export function InlineAnnotation({ children, className }: InlineAnnotationProps) {
  return (
    <span className={cn("relative inline-block mx-2", className)}>
      <span className="font-hand text-sm text-warmred rotate-[-3deg] inline-block">
        {children}
      </span>
      {/* Underline squiggle */}
      <svg
        className="absolute -bottom-1 left-0 w-full text-warmred/40"
        height="4"
        viewBox="0 0 100 4"
        preserveAspectRatio="none"
      >
        <path
          d="M0 2 Q5 0, 10 2 T20 2 T30 2 T40 2 T50 2 T60 2 T70 2 T80 2 T90 2 T100 2"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
    </span>
  );
}
