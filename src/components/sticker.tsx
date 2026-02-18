"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

const rotations = [-3, -1.5, 0, 1.5, 2, -2, 1, -1, 2.5, -2.5];

interface StickerProps {
  children: ReactNode;
  className?: string;
  index?: number;
  hover?: boolean;
  as?: "div" | "span";
  variant?: "default" | "worn" | "peeling" | "rectangular";
}

export function Sticker({ 
  children, 
  className, 
  index = 0, 
  hover = true, 
  as = "div",
  variant = "default"
}: StickerProps) {
  const rotation = rotations[index % rotations.length];
  const Component = as === "span" ? motion.span : motion.div;

  return (
    <Component
      className={cn(
        "relative inline-block bg-white dark:bg-[hsl(30,15%,14%)] border-[3px] border-white dark:border-[hsl(30,12%,22%)] shadow-md overflow-hidden ink-bleed-hover",
        variant === "rectangular" ? "rounded" : "rounded-lg",
        variant === "worn" && "opacity-95",
        className
      )}
      style={{ rotate: `${rotation}deg` }}
      whileHover={hover ? { 
        scale: 1.05, 
        rotate: 0,
        boxShadow: "4px 6px 16px rgba(0,0,0,0.15)",
        transition: { duration: 0.2 }
      } : undefined}
    >
      <div className="px-3 py-1.5">
        {children}
      </div>

      {/* Worn texture overlay */}
      {variant === "worn" && (
        <>
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,rgba(0,0,0,0.1)_2px,rgba(0,0,0,0.1)_4px)]" />
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-black/[0.02] to-transparent pointer-events-none" />
        </>
      )}

      {/* Peeling corner effect */}
      {variant === "peeling" && (
        <>
          <div className="absolute -top-px -right-px w-4 h-4 pointer-events-none">
            <div className="absolute top-0 right-0 w-0 h-0 border-t-[16px] border-r-[16px] border-t-background border-r-transparent" />
            <div className="absolute top-[2px] right-[2px] w-0 h-0 border-t-[12px] border-r-[12px] border-t-white/80 dark:border-t-[hsl(30,15%,20%)] border-r-transparent shadow-sm" />
          </div>
          <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[repeating-linear-gradient(-45deg,transparent,transparent_3px,rgba(0,0,0,0.05)_3px,rgba(0,0,0,0.05)_6px)]" />
        </>
      )}
    </Component>
  );
}

interface StickerBadgeProps {
  children: ReactNode;
  className?: string;
  index?: number;
  variant?: "default" | "worn" | "outlined";
}

export function StickerBadge({ 
  children, 
  className, 
  index = 0,
  variant = "default"
}: StickerBadgeProps) {
  const rotation = rotations[index % rotations.length];

  return (
    <motion.span
      className={cn(
        "relative inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-medium shadow-sm overflow-hidden",
        variant === "outlined" 
          ? "bg-transparent border-2 border-foreground/20 dark:border-foreground/15"
          : "bg-white dark:bg-[hsl(30,15%,14%)] border-2 border-white dark:border-[hsl(30,12%,22%)]",
        variant === "worn" && "opacity-95",
        className
      )}
      style={{ rotate: `${rotation}deg` }}
      whileHover={{ 
        scale: 1.08, 
        rotate: 0,
        transition: { duration: 0.2 }
      }}
    >
      {children}

      {/* Worn effect */}
      {variant === "worn" && (
        <div className="absolute inset-0 pointer-events-none opacity-[0.04] bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,rgba(0,0,0,0.05)_4px,rgba(0,0,0,0.05)_8px)]" />
      )}
    </motion.span>
  );
}

interface PhotoStickerProps {
  children: ReactNode;
  className?: string;
  rotation?: number;
}

export function PhotoSticker({ children, className, rotation = -2 }: PhotoStickerProps) {
  return (
    <motion.div
      className={cn(
        "relative bg-white dark:bg-[hsl(30,15%,14%)] p-1.5 pb-6 shadow-lg rounded-sm overflow-hidden",
        className
      )}
      style={{ rotate: `${rotation}deg` }}
      whileHover={{ 
        scale: 1.02, 
        rotate: 0,
        boxShadow: "6px 8px 20px rgba(0,0,0,0.2)",
        transition: { duration: 0.2 }
      }}
    >
      {children}

      {/* Worn overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.015] bg-gradient-to-br from-black via-transparent to-black" />
      
      {/* Edge wear */}
      <div className="absolute top-0 left-0 w-2 h-2 bg-gradient-to-br from-black/[0.03] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-3 h-3 bg-gradient-to-tl from-black/[0.03] to-transparent pointer-events-none" />
    </motion.div>
  );
}
