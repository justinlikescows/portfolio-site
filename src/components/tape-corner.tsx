"use client";

import { cn } from "@/lib/utils";

interface TapeCornerProps {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  className?: string;
  variant?: "kraft" | "masking" | "clear";
}

export function TapeCorner({ position, className, variant = "kraft" }: TapeCornerProps) {
  const positionStyles = {
    "top-left": "-top-1 -left-1 rotate-[-45deg]",
    "top-right": "-top-1 -right-1 rotate-[45deg]",
    "bottom-left": "-bottom-1 -left-1 rotate-[45deg]",
    "bottom-right": "-bottom-1 -right-1 rotate-[-45deg]",
  };

  const variantStyles = {
    kraft: "bg-[hsl(36,30%,70%)] dark:bg-[hsl(36,20%,40%)]",
    masking: "bg-[hsl(40,20%,85%)] dark:bg-[hsl(40,15%,35%)]",
    clear: "bg-white/30 dark:bg-white/10 backdrop-blur-sm",
  };

  return (
    <div
      className={cn(
        "absolute w-8 h-4 pointer-events-none",
        positionStyles[position],
        className
      )}
    >
      {/* Main tape strip */}
      <div
        className={cn(
          "absolute inset-0 rounded-sm",
          variantStyles[variant],
          "opacity-70 dark:opacity-60"
        )}
      >
        {/* Texture overlay */}
        <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,rgba(0,0,0,0.03)_2px,rgba(0,0,0,0.03)_4px)]" />
      </div>
      
      {/* Torn edge */}
      <svg
        viewBox="0 0 32 16"
        fill="none"
        className={cn(
          "absolute inset-0 w-full h-full",
          position.includes("left") ? "scale-x-[-1]" : ""
        )}
        preserveAspectRatio="none"
      >
        <path
          d={position.includes("top") 
            ? "M0 0 L32 0 L32 14 Q28 16, 24 14 Q20 12, 16 14 Q12 16, 8 14 Q4 12, 0 14 Z"
            : "M0 2 Q4 0, 8 2 Q12 4, 16 2 Q20 0, 24 2 Q28 4, 32 2 L32 16 L0 16 Z"
          }
          fill="currentColor"
          className={cn(
            variant === "kraft" 
              ? "text-[hsl(36,30%,70%)] dark:text-[hsl(36,20%,40%)]" 
              : variant === "masking"
              ? "text-[hsl(40,20%,85%)] dark:text-[hsl(40,15%,35%)]"
              : "text-white/30 dark:text-white/10"
          )}
          style={{ opacity: variant === "clear" ? 0.3 : 0.7 }}
        />
      </svg>

      {/* Shadow underneath */}
      <div 
        className="absolute inset-x-1 -bottom-0.5 h-1 bg-black/5 dark:bg-black/20 blur-sm rounded-full"
        style={{ transform: position.includes("bottom") ? "translateY(-1px)" : "translateY(1px)" }}
      />
    </div>
  );
}

interface TapeStripProps {
  className?: string;
  variant?: "kraft" | "masking" | "clear";
  rotation?: number;
}

export function TapeStrip({ className, variant = "kraft", rotation = -2 }: TapeStripProps) {
  const variantStyles = {
    kraft: "bg-[hsl(36,30%,70%)] dark:bg-[hsl(36,20%,40%)]",
    masking: "bg-[hsl(40,20%,85%)] dark:bg-[hsl(40,15%,35%)]",
    clear: "bg-white/30 dark:bg-white/10 backdrop-blur-sm",
  };

  return (
    <div
      className={cn(
        "relative w-16 h-5 pointer-events-none",
        className
      )}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <div
        className={cn(
          "absolute inset-0",
          variantStyles[variant],
          "opacity-70 dark:opacity-60"
        )}
      >
        {/* Texture */}
        <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(90deg,transparent,transparent_3px,rgba(0,0,0,0.02)_3px,rgba(0,0,0,0.02)_6px)]" />
      </div>
      
      {/* Torn edges */}
      <svg
        viewBox="0 0 64 20"
        fill="none"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
      >
        <path
          d="M2 0 Q4 2, 8 0 Q12 2, 16 0 Q20 2, 24 0 Q28 2, 32 0 Q36 2, 40 0 Q44 2, 48 0 Q52 2, 56 0 Q60 2, 62 0"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className={cn(
            variant === "kraft" 
              ? "text-[hsl(36,25%,60%)]" 
              : "text-[hsl(40,15%,75%)]"
          )}
          style={{ opacity: 0.5 }}
        />
      </svg>

      {/* Drop shadow */}
      <div className="absolute inset-x-0 -bottom-0.5 h-1 bg-black/5 dark:bg-black/15 blur-sm" />
    </div>
  );
}
