"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { StarDoodle } from "./doodles";
import { TapeCorner } from "./tape-corner";
import { Rivet } from "./rivet";
import { DateStamp } from "./date-stamp";
import { CoffeeStain } from "./coffee-stains";
import { ImpactComment } from "./code-comment";

interface ExperienceCardProps {
  company: string;
  title: string;
  period: string;
  description: string;
  logoUrl: string;
  href: string;
  isProduct?: boolean;
  index: number;
  impactMetric?: string;
}

export function ExperienceCard({
  company,
  title,
  period,
  description,
  logoUrl,
  href,
  isProduct = false,
  index,
  impactMetric,
}: ExperienceCardProps) {
  const rotation = index % 2 === 0 ? -0.8 : 0.8;
  const showCoffeeStain = index === 1 || index === 4;
  const periodParts = period.split(" - ");
  const startDate = periodParts[0] || "";

  const bullets = description
    .split("\n")
    .map((b) => b.replace(/^[•\s]+/, "").trim())
    .filter(Boolean);

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div
        className={cn(
          "relative bg-card border border-border rounded-lg p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
        )}
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        {/* Tape corners instead of center tape */}
        <TapeCorner position="top-left" variant="kraft" />
        <TapeCorner position="top-right" variant="masking" />

        {/* Metal rivets for product roles */}
        {isProduct && (
          <>
            <Rivet variant="dark" size="sm" className="absolute bottom-2 left-2" />
            <Rivet variant="dark" size="sm" className="absolute bottom-2 right-2" />
          </>
        )}

        {/* Coffee stain on select cards */}
        {showCoffeeStain && (
          <CoffeeStain 
            position="bottom-right" 
            variant="mug" 
            rotation={index * 45}
          />
        )}

        <div className="flex items-start gap-4">
          <a href={href} target="_blank" rel="noopener noreferrer" className="shrink-0">
            <div className="relative size-12 rounded-lg overflow-hidden border-2 border-white dark:border-[hsl(30,12%,20%)] shadow-sm bg-white">
              <Image
                src={logoUrl}
                alt={company}
                fill
                className="object-cover"
              />
            </div>
          </a>

          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 flex-wrap">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-serif text-lg font-medium">{company}</h3>
                  {isProduct && (
                    <span title="Product role">
                      <StarDoodle className="size-4 text-warmred" />
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{title}</p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <DateStamp date={startDate} rotation={2} />
                <span className="font-hand text-xs text-muted-foreground/60 whitespace-nowrap">
                  {period}
                </span>
              </div>
            </div>

            <ul className="mt-3 space-y-1.5">
              {bullets.map((bullet, i) => (
                <li key={i} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                  <span className="text-warmred/60 mt-1 shrink-0">-</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Impact metric as code comment */}
            {impactMetric && (
              <div className="mt-3">
                <ImpactComment label="impact" value={impactMetric} />
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
