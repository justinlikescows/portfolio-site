"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const positions = [
  { x: 0, y: 0, rotate: -4, z: 1 },
  { x: 85, y: 5, rotate: 2, z: 2 },
  { x: 170, y: -2, rotate: -1, z: 1 },
  { x: 255, y: 8, rotate: 3, z: 3 },
  { x: 340, y: 0, rotate: -2, z: 2 },
  { x: 20, y: 45, rotate: 1, z: 4 },
  { x: 105, y: 50, rotate: -3, z: 2 },
  { x: 190, y: 42, rotate: 2, z: 5 },
  { x: 275, y: 55, rotate: -1, z: 1 },
  { x: 360, y: 48, rotate: 3, z: 3 },
  { x: 5, y: 90, rotate: -2, z: 2 },
  { x: 90, y: 95, rotate: 1, z: 6 },
  { x: 175, y: 88, rotate: -4, z: 1 },
  { x: 260, y: 100, rotate: 2, z: 4 },
  { x: 345, y: 92, rotate: -1, z: 2 },
  { x: 25, y: 135, rotate: 3, z: 3 },
  { x: 110, y: 140, rotate: -2, z: 1 },
  { x: 195, y: 132, rotate: 1, z: 5 },
  { x: 280, y: 145, rotate: -3, z: 2 },
  { x: 365, y: 138, rotate: 2, z: 4 },
];

interface LaptopStickerBombProps {
  skills: readonly string[];
  className?: string;
}

export function LaptopStickerBomb({ skills, className }: LaptopStickerBombProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Laptop lid container */}
      <div 
        className="relative bg-gradient-to-b from-[hsl(30,8%,18%)] to-[hsl(30,8%,14%)] dark:from-[hsl(30,8%,12%)] dark:to-[hsl(30,8%,8%)] rounded-lg p-6 md:p-8 overflow-hidden border border-[hsl(30,8%,25%)] shadow-lg"
        style={{ minHeight: "200px" }}
      >
        {/* Brushed metal texture hint */}
        <div className="absolute inset-0 opacity-[0.02] bg-[repeating-linear-gradient(90deg,transparent,transparent_1px,rgba(255,255,255,0.03)_1px,rgba(255,255,255,0.03)_2px)]" />
        
        {/* Stickers scattered on the lid */}
        <div className="relative flex flex-wrap gap-2 md:gap-3">
          {skills.map((skill, i) => {
            const pos = positions[i % positions.length];
            return (
              <motion.div
                key={skill}
                className="relative"
                style={{ zIndex: pos.z }}
                initial={{ opacity: 0, scale: 0.5, rotate: pos.rotate * 2 }}
                whileInView={{ opacity: 1, scale: 1, rotate: pos.rotate }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05, type: "spring", stiffness: 200 }}
                whileHover={{
                  scale: 1.15,
                  rotate: 0,
                  zIndex: 20,
                  transition: { duration: 0.15 },
                }}
              >
                <LaptopSticker variant={i % 4 === 0 ? "worn" : i % 3 === 0 ? "peeling" : "normal"}>
                  {skill}
                </LaptopSticker>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

interface LaptopStickerProps {
  children: string;
  variant?: "normal" | "worn" | "peeling";
}

function LaptopSticker({ children, variant = "normal" }: LaptopStickerProps) {
  return (
    <div
      className={cn(
        "relative inline-block px-2.5 md:px-3 py-1 md:py-1.5 text-xs md:text-sm font-medium rounded",
        "bg-white dark:bg-[hsl(40,30%,95%)]",
        "text-[hsl(30,8%,15%)]",
        "shadow-md border border-white/80",
        variant === "worn" && "opacity-90",
        variant === "peeling" && "opacity-95"
      )}
    >
      {children}
      
      {/* Worn effect overlay */}
      {variant === "worn" && (
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[hsl(30,20%,70%,0.1)] rounded pointer-events-none" />
      )}
      
      {/* Peeling corner effect */}
      {variant === "peeling" && (
        <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-gradient-to-bl from-[hsl(30,8%,18%)] to-transparent rounded-bl pointer-events-none" />
      )}
    </div>
  );
}

interface SkillStickersProps {
  skills: readonly string[];
}

export function SkillStickers({ skills }: SkillStickersProps) {
  const rotations = [-3, 1.5, -1, 2.5, -2, 0.8, -1.8, 3, -0.5, 2, -2.5, 1];
  
  return (
    <div className="flex flex-wrap gap-3 justify-start">
      {skills.map((skill, i) => (
        <motion.span
          key={skill}
          className="inline-block bg-white dark:bg-[hsl(30,15%,14%)] border-2 border-white dark:border-[hsl(30,12%,22%)] rounded-lg px-3 py-1.5 text-sm font-medium shadow-sm cursor-default"
          style={{ rotate: `${rotations[i % rotations.length]}deg` }}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: i * 0.04 }}
          whileHover={{
            scale: 1.1,
            rotate: 0,
            boxShadow: "3px 5px 12px rgba(0,0,0,0.12)",
            transition: { duration: 0.15 },
          }}
        >
          {skill}
        </motion.span>
      ))}
    </div>
  );
}
