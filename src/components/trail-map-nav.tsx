"use client";

import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface Waypoint {
  id: string;
  label: string;
  icon: string;
}

const waypoints: Waypoint[] = [
  { id: "hero", label: "Trailhead", icon: "▲" },
  { id: "about", label: "About", icon: "●" },
  { id: "experience", label: "Experience", icon: "■" },
  { id: "projects", label: "Projects", icon: "◆" },
  { id: "interests", label: "Interests", icon: "★" },
  { id: "skills", label: "Skills", icon: "⬢" },
  { id: "education", label: "Education", icon: "◉" },
  { id: "contact", label: "Summit", icon: "▼" },
];

export function TrailMapNav() {
  const [activeSection, setActiveSection] = useState("hero");
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id || "hero");
          }
        });
      },
      { threshold: 0.3, rootMargin: "-100px" }
    );

    waypoints.forEach((waypoint) => {
      const element = document.getElementById(waypoint.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden lg:block"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
    >
      <div className="relative">
        {/* Trail line */}
        <svg
          className="absolute left-3 top-0 h-full"
          width="2"
          viewBox="0 0 2 400"
          preserveAspectRatio="none"
        >
          {/* Background trail */}
          <path
            d="M1 0 Q2 100, 1 200 T1 400"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="4 3"
            fill="none"
            className="text-border"
          />
          {/* Progress trail */}
          <motion.path
            d="M1 0 Q2 100, 1 200 T1 400"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-olive"
            style={{
              pathLength: scrollYProgress,
            }}
          />
        </svg>

        {/* Waypoints */}
        <div className="relative flex flex-col gap-6">
          {waypoints.map((waypoint, i) => {
            const isActive = activeSection === waypoint.id;
            const isPassed = waypoints.findIndex((w) => w.id === activeSection) > i;

            return (
              <motion.button
                key={waypoint.id}
                onClick={() => scrollToSection(waypoint.id)}
                className="relative group flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Waypoint marker */}
                <div
                  className={cn(
                    "size-7 rounded-full border-2 flex items-center justify-center transition-all duration-300 font-mono text-xs",
                    isActive
                      ? "bg-olive border-olive text-cream scale-125 shadow-lg"
                      : isPassed
                      ? "bg-olive/60 border-olive/60 text-cream"
                      : "bg-background border-border text-muted-foreground hover:border-olive/50"
                  )}
                >
                  {waypoint.icon}
                </div>

                {/* Label tooltip */}
                <motion.div
                  className={cn(
                    "absolute left-10 px-2 py-1 bg-foreground text-background text-xs font-mono rounded whitespace-nowrap shadow-lg",
                    "opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity"
                  )}
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                >
                  {waypoint.label}
                  {/* Arrow */}
                  <div className="absolute left-[-4px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-foreground" />
                </motion.div>

                {/* Elevation marker */}
                {isActive && (
                  <motion.div
                    className="absolute -right-12 font-mono text-[9px] text-muted-foreground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    {(i + 1) * 1750}ft
                  </motion.div>
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Trail map legend */}
        <div className="mt-6 pl-1 font-mono text-[8px] text-muted-foreground/60 uppercase tracking-widest">
          trail map
        </div>
      </div>
    </motion.div>
  );
}
