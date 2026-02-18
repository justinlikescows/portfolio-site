"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";

interface PolaroidProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  rotation?: number;
  width?: number;
  height?: number;
}

export function Polaroid({
  src,
  alt,
  caption,
  className,
  rotation = -2,
  width = 300,
  height = 200,
}: PolaroidProps) {
  return (
    <motion.div
      className={cn(
        "bg-white dark:bg-[hsl(30,15%,14%)] p-3 pb-10 shadow-lg inline-block",
        className
      )}
      style={{ rotate: `${rotation}deg` }}
      whileHover={{
        rotate: 0,
        scale: 1.02,
        transition: { duration: 0.3 },
      }}
    >
      <div className="relative overflow-hidden bg-muted">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="object-cover w-full h-auto"
        />
      </div>
      {caption && (
        <p className="font-hand text-lg text-center mt-2 text-muted-foreground">
          {caption}
        </p>
      )}
    </motion.div>
  );
}
