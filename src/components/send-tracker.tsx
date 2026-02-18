"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface ClimbingGrade {
  grade: string;
  color: string;
  year: string;
  location?: string;
}

const sendHistory: ClimbingGrade[] = [
  { grade: "V0", color: "#90EE90", year: "2021", location: "Hangar 18" },
  { grade: "V1", color: "#90EE90", year: "2021" },
  { grade: "V2", color: "#FFD700", year: "2022", location: "Sender One" },
  { grade: "V3", color: "#FFD700", year: "2022" },
  { grade: "V4", color: "#FFA500", year: "2023", location: "Joshua Tree" },
  { grade: "V5", color: "#FF6347", year: "2023" },
  { grade: "V6", color: "#FF4500", year: "2024", location: "Bishop" },
  { grade: "V7", color: "#DC143C", year: "2024" },
  { grade: "V8", color: "#B22222", year: "2025", location: "Red Rock Canyon" },
  { grade: "V9", color: "#8B0000", year: "2025" },
  { grade: "V10", color: "#4B0082", year: "2026", location: "Hueco Tanks" },
  { grade: "V11", color: "#2E0854", year: "2026" },
];

export function SendTracker() {
  const [hoveredGrade, setHoveredGrade] = useState<ClimbingGrade | null>(null);

  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-serif text-xl mb-1">Climbing Progress</h3>
          <p className="text-sm text-muted-foreground">Bouldering sends by grade</p>
        </div>
        <div className="font-hand text-sm text-warmred rotate-[-3deg]">
          keep sending!
        </div>
      </div>

      {/* Progress chart */}
      <div className="relative h-40 flex items-end justify-between gap-2 mb-4">
        {sendHistory.map((send, i) => (
          <motion.div
            key={i}
            className="relative flex-1 cursor-pointer group"
            initial={{ scaleY: 0, originY: 1 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            onHoverStart={() => setHoveredGrade(send)}
            onHoverEnd={() => setHoveredGrade(null)}
          >
            <div
              className="w-full rounded-t transition-all duration-200 group-hover:brightness-110"
              style={{
                height: `${Math.max(((i + 1) / sendHistory.length) * 100, 10)}%`,
                backgroundColor: send.color,
                opacity: 0.9,
                minHeight: '16px',
              }}
            />
            {/* Grade label */}
            <div className="absolute -bottom-6 left-0 right-0 text-center font-mono text-[10px] text-muted-foreground">
              {send.grade}
            </div>
          </motion.div>
        ))}

        {/* Hover tooltip */}
        {hoveredGrade && (
          <motion.div
            className="absolute -top-16 left-1/2 -translate-x-1/2 bg-foreground text-background px-3 py-2 rounded text-xs font-mono whitespace-nowrap z-10 shadow-lg"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="font-bold">{hoveredGrade.grade}</div>
            <div className="text-[10px] opacity-80">{hoveredGrade.year}</div>
            {hoveredGrade.location && (
              <div className="text-[10px] opacity-70">{hoveredGrade.location}</div>
            )}
            {/* Arrow */}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-foreground rotate-45" />
          </motion.div>
        )}
      </div>

      {/* Legend */}
      <div className="pt-6 border-t border-border">
        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded" style={{ backgroundColor: "#90EE90" }} />
            <span className="text-muted-foreground">Beginner</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded" style={{ backgroundColor: "#FFA500" }} />
            <span className="text-muted-foreground">Intermediate</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded" style={{ backgroundColor: "#DC143C" }} />
            <span className="text-muted-foreground">Advanced</span>
          </div>
        </div>
        <p className="text-xs text-muted-foreground/60 mt-3 font-mono">
          {`// Each grade represents the hardest problem sent that year`}
        </p>
      </div>
    </div>
  );
}
