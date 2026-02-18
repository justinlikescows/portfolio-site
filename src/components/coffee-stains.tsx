"use client";

import { cn } from "@/lib/utils";

interface CoffeeRingProps {
  className?: string;
  variant?: "espresso" | "mug" | "travel" | "splash";
  opacity?: number;
}

export function CoffeeRing({ className, variant = "mug", opacity = 0.04 }: CoffeeRingProps) {
  const sizes = {
    espresso: "size-12",
    mug: "size-20",
    travel: "size-16",
    splash: "size-24",
  };

  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      className={cn(sizes[variant], "pointer-events-none", className)}
      style={{ opacity }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {variant === "espresso" && (
        <>
          <circle
            cx="50"
            cy="50"
            r="35"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            className="text-coffee"
          />
          <circle
            cx="50"
            cy="50"
            r="28"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            opacity="0.5"
            className="text-coffee"
          />
        </>
      )}

      {variant === "mug" && (
        <>
          <ellipse
            cx="50"
            cy="50"
            rx="40"
            ry="38"
            stroke="currentColor"
            strokeWidth="6"
            fill="none"
            className="text-coffee"
          />
          <ellipse
            cx="52"
            cy="48"
            rx="35"
            ry="33"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            opacity="0.4"
            className="text-coffee"
          />
          <path
            d="M15 65 Q 30 75, 50 70 Q 70 65, 85 72"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
            opacity="0.3"
            className="text-coffee"
          />
        </>
      )}

      {variant === "travel" && (
        <>
          <ellipse
            cx="50"
            cy="50"
            rx="38"
            ry="36"
            stroke="currentColor"
            strokeWidth="5"
            fill="none"
            className="text-coffee"
          />
          <ellipse
            cx="50"
            cy="50"
            rx="32"
            ry="30"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            opacity="0.3"
            className="text-coffee"
          />
        </>
      )}

      {variant === "splash" && (
        <>
          <ellipse
            cx="50"
            cy="50"
            rx="42"
            ry="40"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
            className="text-coffee"
          />
          <path
            d="M20 30 Q 15 20, 22 15"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            opacity="0.6"
            className="text-coffee"
          />
          <path
            d="M75 25 Q 82 18, 80 12"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            opacity="0.5"
            className="text-coffee"
          />
          <circle cx="30" cy="70" r="4" fill="currentColor" opacity="0.4" className="text-coffee" />
          <circle cx="72" cy="65" r="3" fill="currentColor" opacity="0.3" className="text-coffee" />
        </>
      )}
    </svg>
  );
}

interface CoffeeStainProps {
  className?: string;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center";
  variant?: "espresso" | "mug" | "travel" | "splash";
  rotation?: number;
}

const positionClasses = {
  "top-left": "absolute -top-4 -left-4",
  "top-right": "absolute -top-4 -right-4",
  "bottom-left": "absolute -bottom-4 -left-4",
  "bottom-right": "absolute -bottom-4 -right-4",
  center: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
};

export function CoffeeStain({
  className,
  position = "bottom-right",
  variant = "mug",
  rotation = 0,
}: CoffeeStainProps) {
  const randomRotation = rotation || Math.floor(Math.random() * 360);

  return (
    <div
      className={cn(positionClasses[position], "pointer-events-none z-0", className)}
      style={{ transform: `rotate(${randomRotation}deg)` }}
    >
      <CoffeeRing variant={variant} opacity={0.035} />
    </div>
  );
}
