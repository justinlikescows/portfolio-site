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
        {/* Phin coffee dripper */}
        <svg
          width="120"
          height="160"
          viewBox="0 0 120 160"
          fill="none"
          className="text-coffee"
        >
          {/* Dripper/Phin cone */}
          <path
            d="M30 18 L90 18 L75 78 L45 78 Z"
            stroke="currentColor"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* Dripper rim */}
          <ellipse
            cx="60"
            cy="18"
            rx="30"
            ry="5"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />

          {/* Drip lines */}
          <g opacity={progress > 10 ? 0.6 : 0}>
            <motion.line
              x1="60"
              y1="78"
              x2="60"
              y2="95"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              animate={{ y2: [78, 98], opacity: [0, 1, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 0.3 }}
            />
            <motion.circle
              cx="60"
              r="2"
              fill="currentColor"
              initial={{ cy: 80, opacity: 0 }}
              animate={{ cy: [80, 100], opacity: [0, 0.8, 0] }}
              transition={{ duration: 0.7, repeat: Infinity, repeatDelay: 0.4, delay: 0.2 }}
            />
          </g>

          {/* Cup - proper mug shape */}
          <path
            d="M35 105 
               C35 105, 33 140, 40 145 
               L80 145 
               C87 140, 85 105, 85 105"
            stroke="currentColor"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* Cup rim */}
          <ellipse
            cx="60"
            cy="105"
            rx="25"
            ry="6"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          
          {/* Cup handle */}
          <path
            d="M85 112 
               C95 112, 98 125, 95 132
               C92 139, 85 138, 85 135"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />

          {/* Coffee in cup - fills based on progress */}
          <defs>
            <clipPath id="cupClip">
              <path d="M36 108 C36 108, 34 139, 40.5 144 L79.5 144 C86 139, 84 108, 84 108 Z" />
            </clipPath>
          </defs>
          
          <motion.rect
            x="33"
            width="54"
            fill="currentColor"
            opacity="0.4"
            clipPath="url(#cupClip)"
            initial={{ y: 144, height: 0 }}
            animate={{ 
              y: Math.max(108, 144 - (36 * progress / 100)),
              height: Math.min(36, 36 * progress / 100)
            }}
            transition={{ duration: 0.1 }}
          />
          
          {/* Coffee surface ellipse in cup */}
          {progress > 10 && (
            <motion.ellipse
              cx="60"
              rx="23"
              fill="currentColor"
              opacity="0.5"
              initial={{ cy: 144, ry: 0 }}
              animate={{ 
                cy: Math.max(108, 144 - (36 * progress / 100)),
                ry: progress > 10 ? 5 : 0
              }}
              transition={{ duration: 0.1 }}
            />
          )}
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
