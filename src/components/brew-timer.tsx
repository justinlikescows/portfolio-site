"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface BrewTimerProps {
  duration?: number; // in seconds
  onComplete?: () => void;
}

export function BrewTimer({ duration = 3, onComplete }: BrewTimerProps) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsComplete(true);
          onComplete?.();
          return 100;
        }
        return prev + (100 / duration / 10);
      });
    }, 100);

    return () => clearInterval(interval);
  }, [duration, onComplete]);

  if (isComplete) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: isComplete ? 0 : 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center gap-4">
        {/* Pour over coffee dripper */}
        <svg
          width="120"
          height="140"
          viewBox="0 0 120 140"
          fill="none"
          className="text-coffee"
        >
          {/* Dripper */}
          <path
            d="M30 20 L90 20 L75 80 L45 80 Z"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* Water level - animates based on progress */}
          <motion.rect
            x="35"
            y={20 + (60 * (100 - progress) / 100)}
            width="50"
            height={60 * progress / 100}
            fill="currentColor"
            opacity="0.3"
            initial={{ height: 0 }}
            animate={{ height: 60 * progress / 100 }}
          />

          {/* Drip lines */}
          <g opacity={progress > 20 ? 0.6 : 0}>
            <motion.line
              x1="55"
              y1="80"
              x2="55"
              y2="95"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              animate={{ y2: [80, 95], opacity: [0, 1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 0.2 }}
            />
            <motion.line
              x1="65"
              y1="80"
              x2="65"
              y2="95"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              animate={{ y2: [80, 95], opacity: [0, 1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, delay: 0.3, repeatDelay: 0.2 }}
            />
          </g>

          {/* Cup base */}
          <ellipse
            cx="60"
            cy="120"
            rx="25"
            ry="8"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M35 120 L40 100 L80 100 L85 120"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />

          {/* Coffee in cup - fills based on progress */}
          <motion.ellipse
            cx="60"
            cy={120 - (progress / 100 * 15)}
            rx="20"
            ry="6"
            fill="currentColor"
            opacity="0.4"
            initial={{ ry: 0 }}
            animate={{ ry: progress > 20 ? 6 : 0 }}
          />
        </svg>

        {/* Text */}
        <div className="text-center">
          <p className="font-hand text-2xl text-coffee mb-1">Brewing...</p>
          <p className="font-mono text-sm text-muted-foreground">
            {Math.round(progress)}%
          </p>
        </div>

        {/* Steam doodles */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2">
          <motion.svg
            width="60"
            height="40"
            viewBox="0 0 60 40"
            className="text-muted-foreground/20"
          >
            <motion.path
              d="M20 30 Q 20 20, 25 15 T 30 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              animate={{ opacity: [0.2, 0.5, 0.2], pathLength: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.path
              d="M30 35 Q 30 25, 35 20 T 40 10"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              animate={{ opacity: [0.2, 0.5, 0.2], pathLength: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
            <motion.path
              d="M40 30 Q 40 20, 45 15 T 50 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              animate={{ opacity: [0.2, 0.5, 0.2], pathLength: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />
          </motion.svg>
        </div>
      </div>
    </motion.div>
  );
}
