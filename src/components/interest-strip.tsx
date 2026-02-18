"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { CoffeeDoodle, MountainDoodle, ControllerDoodle, ClimbingHoldDoodle, SparkDoodle } from "./doodles";

const interests = [
  {
    label: "Esports",
    blurb: "Competitive gaming taught me how to think fast, adapt to meta shifts, and work as a team under pressure.",
    icon: ControllerDoodle,
    color: "text-ink dark:text-cream",
    bg: "bg-secondary/60",
  },
  {
    label: "Bouldering",
    blurb: "Every route is a problem to solve. I approach products the same way — break it down, try different angles, send it.",
    icon: ClimbingHoldDoodle,
    color: "text-olive",
    bg: "bg-olive/10",
  },
  {
    label: "Coffee",
    blurb: "Pour-overs, espresso, V60s — the craft of coffee is about precision, patience, and always iterating on the process.",
    icon: CoffeeDoodle,
    color: "text-coffee",
    bg: "bg-coffee/10",
  },
  {
    label: "National Parks",
    blurb: "Nothing clears the mind like being surrounded by nature. Exploring parks keeps me grounded and curious.",
    icon: MountainDoodle,
    color: "text-olive",
    bg: "bg-olive/10",
  },
  {
    label: "Gen AI",
    blurb: "Building at the frontier of AI. I'm obsessed with how generative models can reshape how we work and create.",
    icon: SparkDoodle,
    color: "text-warmred",
    bg: "bg-warmred/10",
  },
];

export function InterestStrip() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {interests.map((interest, i) => (
        <motion.div
          key={interest.label}
          className={cn(
            "relative p-5 rounded-lg border border-border",
            interest.bg
          )}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          style={{ transform: `rotate(${i % 2 === 0 ? -0.5 : 0.5}deg)` }}
        >
          <div className="flex items-center gap-3 mb-2">
            <interest.icon className={cn("size-8", interest.color)} />
            <h3 className="font-serif text-lg">{interest.label}</h3>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {interest.blurb}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
