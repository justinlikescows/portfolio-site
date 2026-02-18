"use client";

import { cn } from "@/lib/utils";

interface RivetProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "silver" | "brass" | "dark";
}

export function Rivet({ className, size = "md", variant = "silver" }: RivetProps) {
  const sizes = {
    sm: "size-2",
    md: "size-3",
    lg: "size-4",
  };

  const gradients = {
    silver: {
      outer: "from-[hsl(220,5%,65%)] via-[hsl(220,5%,80%)] to-[hsl(220,5%,60%)]",
      inner: "from-[hsl(220,5%,75%)] to-[hsl(220,5%,55%)]",
      highlight: "bg-white/40",
    },
    brass: {
      outer: "from-[hsl(40,40%,50%)] via-[hsl(40,35%,65%)] to-[hsl(40,40%,45%)]",
      inner: "from-[hsl(40,35%,60%)] to-[hsl(40,40%,40%)]",
      highlight: "bg-[hsl(50,50%,90%,0.4)]",
    },
    dark: {
      outer: "from-[hsl(220,5%,35%)] via-[hsl(220,5%,45%)] to-[hsl(220,5%,30%)]",
      inner: "from-[hsl(220,5%,40%)] to-[hsl(220,5%,25%)]",
      highlight: "bg-white/20",
    },
  };

  const grad = gradients[variant];

  return (
    <div
      className={cn(
        "relative rounded-full pointer-events-none",
        sizes[size],
        className
      )}
    >
      {/* Outer ring - brushed metal effect */}
      <div
        className={cn(
          "absolute inset-0 rounded-full bg-gradient-to-br",
          grad.outer
        )}
      />
      
      {/* Inner depression */}
      <div
        className={cn(
          "absolute inset-[15%] rounded-full bg-gradient-to-br",
          grad.inner
        )}
      />
      
      {/* Center dot */}
      <div 
        className={cn(
          "absolute inset-[35%] rounded-full bg-gradient-to-br",
          variant === "dark" 
            ? "from-[hsl(220,5%,20%)] to-[hsl(220,5%,15%)]"
            : variant === "brass"
            ? "from-[hsl(40,40%,35%)] to-[hsl(40,40%,25%)]"
            : "from-[hsl(220,5%,50%)] to-[hsl(220,5%,40%)]"
        )}
      />
      
      {/* Highlight */}
      <div
        className={cn(
          "absolute top-[10%] left-[20%] w-[25%] h-[15%] rounded-full",
          grad.highlight
        )}
      />
      
      {/* Drop shadow */}
      <div className="absolute inset-0 rounded-full shadow-sm" />
    </div>
  );
}

interface RivetRowProps {
  count?: number;
  className?: string;
  variant?: "silver" | "brass" | "dark";
  size?: "sm" | "md" | "lg";
}

export function RivetRow({ count = 3, className, variant = "silver", size = "sm" }: RivetRowProps) {
  return (
    <div className={cn("flex gap-1", className)}>
      {Array.from({ length: count }).map((_, i) => (
        <Rivet key={i} variant={variant} size={size} />
      ))}
    </div>
  );
}

interface RivetCornersProps {
  className?: string;
  variant?: "silver" | "brass" | "dark";
}

export function RivetCorners({ className, variant = "dark" }: RivetCornersProps) {
  return (
    <>
      <Rivet 
        variant={variant} 
        size="sm" 
        className={cn("absolute top-2 left-2", className)} 
      />
      <Rivet 
        variant={variant} 
        size="sm" 
        className={cn("absolute top-2 right-2", className)} 
      />
      <Rivet 
        variant={variant} 
        size="sm" 
        className={cn("absolute bottom-2 left-2", className)} 
      />
      <Rivet 
        variant={variant} 
        size="sm" 
        className={cn("absolute bottom-2 right-2", className)} 
      />
    </>
  );
}
