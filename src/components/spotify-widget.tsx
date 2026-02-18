"use client";

import { motion } from "framer-motion";
import { Music } from "lucide-react";

interface SpotifyWidgetProps {
  track?: string;
  artist?: string;
  isPlaying?: boolean;
}

export function SpotifyWidget({ 
  track = "Currently Offline", 
  artist = "No track playing",
  isPlaying = false 
}: SpotifyWidgetProps) {
  return (
    <motion.div
      className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] rounded-lg p-4 shadow-lg border border-[#3A3A3A] max-w-xs"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Cassette tape */}
      <div className="relative bg-gradient-to-b from-[#4A4A4A] to-[#2A2A2A] rounded p-3 mb-3">
        {/* Top label area */}
        <div className="bg-cream/90 rounded-sm p-2 mb-2 h-12 flex items-center justify-center">
          <div className="text-center">
            <p className="font-mono text-[10px] text-ink font-bold uppercase truncate">
              {track}
            </p>
            <p className="font-mono text-[8px] text-ink/60 truncate">{artist}</p>
          </div>
        </div>

        {/* Reels */}
        <div className="flex justify-between items-center px-4">
          <motion.div
            className="relative"
            animate={isPlaying ? { rotate: 360 } : {}}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            {/* Left reel */}
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border-2 border-[#3A3A3A] flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-[#2A2A2A]" />
              {/* Spokes */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                <div
                  key={i}
                  className="absolute w-px h-4 bg-[#3A3A3A]"
                  style={{
                    transform: `rotate(${angle}deg)`,
                    transformOrigin: "center",
                  }}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            animate={isPlaying ? { rotate: 360 } : {}}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            {/* Right reel */}
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border-2 border-[#3A3A3A] flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-[#2A2A2A]" />
              {/* Spokes */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                <div
                  key={i}
                  className="absolute w-px h-4 bg-[#3A3A3A]"
                  style={{
                    transform: `rotate(${angle}deg)`,
                    transformOrigin: "center",
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Screws */}
        <div className="absolute top-1 left-1 w-1.5 h-1.5 rounded-full bg-[#5A5A5A]" />
        <div className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-[#5A5A5A]" />
        <div className="absolute bottom-1 left-1 w-1.5 h-1.5 rounded-full bg-[#5A5A5A]" />
        <div className="absolute bottom-1 right-1 w-1.5 h-1.5 rounded-full bg-[#5A5A5A]" />
      </div>

      {/* Info */}
      <div className="flex items-center gap-2 text-cream/80">
        <Music className="size-3" />
        <span className="text-xs font-mono">
          {isPlaying ? "Now Playing" : "Paused"}
        </span>
        {isPlaying && (
          <motion.div
            className="flex gap-0.5 ml-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-0.5 bg-olive rounded-full"
                animate={{
                  height: ["4px", "12px", "4px"],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>
        )}
      </div>

      {/* Link to Spotify */}
      <a
        href="https://open.spotify.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-2 text-center text-[10px] text-olive/60 hover:text-olive transition-colors font-mono"
      >
        SPOTIFY
      </a>
    </motion.div>
  );
}
