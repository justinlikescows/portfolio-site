"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  annotation?: string;
  variant?: "default" | "blueprint" | "topo";
}

export function SectionHeading({ 
  title, 
  subtitle, 
  className, 
  annotation,
  variant = "default" 
}: SectionHeadingProps) {
  return (
    <motion.div
      className={cn("mb-8", className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <div className={cn(
        "relative inline-block",
        variant === "blueprint" && "px-4 py-2 -mx-4"
      )}>
        {/* Blueprint grid background */}
        {variant === "blueprint" && (
          <div className="absolute inset-0 -z-10 rounded overflow-hidden">
            <div 
              className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]"
              style={{
                backgroundImage: `
                  linear-gradient(to right, hsl(210, 50%, 40%) 1px, transparent 1px),
                  linear-gradient(to bottom, hsl(210, 50%, 40%) 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px'
              }}
            />
            {/* Dimension marks */}
            <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-olive/20" />
            <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-olive/20" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-olive/20" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-olive/20" />
          </div>
        )}

        <h2 className={cn(
          "text-3xl md:text-4xl font-serif tracking-tight",
          variant === "blueprint" && "font-semibold"
        )}>
          {title}
        </h2>

        {/* Underline variants */}
        {variant === "default" && (
          <svg
            viewBox="0 0 200 12"
            fill="none"
            className="w-full h-3 mt-1"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M2 8c15-8 30 4 45-1s30 6 45 0 30 6 45-1 30 6 45 0"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
              className="text-warmred/50"
            />
          </svg>
        )}

        {variant === "blueprint" && (
          <div className="flex items-center gap-2 mt-2">
            <div className="h-px flex-1 bg-olive/30" />
            <span className="font-mono text-[9px] text-olive/40 uppercase tracking-widest">
              section
            </span>
            <div className="h-px flex-1 bg-olive/30" />
          </div>
        )}

        {variant === "topo" && (
          <svg 
            viewBox="0 0 200 20" 
            fill="none" 
            className="w-full h-5 mt-1" 
            xmlns="http://www.w3.org/2000/svg" 
            preserveAspectRatio="none"
          >
            <path
              d="M0 16 Q25 12, 50 14 T100 10 T150 14 T200 12"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
              opacity="0.25"
              className="text-olive"
            />
            <path
              d="M0 10 Q30 6, 60 8 T120 4 T180 8 T200 6"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
              opacity="0.3"
              className="text-olive"
            />
            <path
              d="M0 4 Q40 2, 80 3 T160 1 T200 2"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              opacity="0.2"
              className="text-olive"
            />
          </svg>
        )}

        {annotation && (
          <span className={cn(
            "absolute -top-4 -right-16 font-hand text-sm rotate-[-6deg]",
            variant === "blueprint" ? "text-olive" : "text-warmred"
          )}>
            {annotation}
          </span>
        )}
      </div>
      {subtitle && (
        <p className="text-muted-foreground mt-3 max-w-lg text-base">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
