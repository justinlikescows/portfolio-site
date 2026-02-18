"use client";

import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";

export function ElevationTracker() {
  const { scrollYProgress } = useScroll();
  const [elevation, setElevation] = useState(0);

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      // Map scroll progress to elevation (0-14,000 ft like climbing a peak)
      const newElevation = Math.round(latest * 14000);
      setElevation(newElevation);
    });
  }, [scrollYProgress]);

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
