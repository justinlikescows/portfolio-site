"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "hero", elevation: 1750 },
  { id: "about", elevation: 3500 },
  { id: "experience", elevation: 5250 },
  { id: "projects", elevation: 7000 },
  { id: "interests", elevation: 8750 },
  { id: "skills", elevation: 10500 },
  { id: "education", elevation: 12250 },
  { id: "contact", elevation: 14000 },
];

export function ElevationTracker() {
  const [elevation, setElevation] = useState(1750);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = Math.min(Math.max(scrollTop / docHeight, 0), 1);
      
      // Find which two sections we're between
      let currentElevation = 1750;
      
      for (let i = 0; i < sections.length - 1; i++) {
        const currentSection = document.getElementById(sections[i].id);
        const nextSection = document.getElementById(sections[i + 1].id);
        
        if (!currentSection || !nextSection) continue;
        
        const currentTop = currentSection.offsetTop;
        const nextTop = nextSection.offsetTop;
        
        // If scroll position is between these two sections
        if (scrollTop >= currentTop && scrollTop < nextTop) {
          const sectionProgress = (scrollTop - currentTop) / (nextTop - currentTop);
          const elevationDiff = sections[i + 1].elevation - sections[i].elevation;
          currentElevation = sections[i].elevation + (elevationDiff * sectionProgress);
          break;
        }
      }
      
      // Handle last section
      const lastSection = document.getElementById(sections[sections.length - 1].id);
      if (lastSection && scrollTop >= lastSection.offsetTop) {
        const lastSectionTop = lastSection.offsetTop;
        const remainingScroll = scrollTop - lastSectionTop;
        const lastSectionHeight = lastSection.offsetHeight;
        const progressInLastSection = Math.min(remainingScroll / lastSectionHeight, 1);
        currentElevation = sections[sections.length - 1].elevation;
      }
      
      setElevation(Math.round(currentElevation));
    };

    handleScroll(); // Initial calculation
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-24 right-4 z-40 pointer-events-none"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
    >
      <div className="flex flex-col items-end gap-1 font-mono text-xs">
        <div className="bg-kraft/90 dark:bg-kraft/80 text-cream dark:text-ink px-2 py-1 rounded backdrop-blur-sm shadow-sm">
          <span className="font-bold">{elevation.toLocaleString()}</span>
          <span className="ml-1 opacity-70">ft</span>
        </div>
        <div className="text-[9px] text-muted-foreground/60 uppercase tracking-wider">
          elevation
        </div>
        {/* Topographic contour lines */}
        <svg width="40" height="20" viewBox="0 0 40 20" fill="none" className="opacity-40">
          <path
            d="M0 10 Q10 8, 20 10 T40 10"
            stroke="currentColor"
            strokeWidth="1"
            className="text-olive"
          />
          <path
            d="M0 14 Q10 12, 20 14 T40 14"
            stroke="currentColor"
            strokeWidth="1"
            className="text-olive"
          />
          <path
            d="M0 6 Q10 4, 20 6 T40 6"
            stroke="currentColor"
            strokeWidth="1"
            className="text-olive"
          />
        </svg>
      </div>
    </motion.div>
  );
}
