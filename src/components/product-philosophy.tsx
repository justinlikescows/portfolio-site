"use client";

import { motion } from "framer-motion";
import { Zap, Target, Users, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface PrincipleCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  example: string;
  index: number;
}

function PrincipleCard({ icon: Icon, title, description, example, index }: PrincipleCardProps) {
  const rotations = [-2, 1, -1.5, 2];
  const rotation = rotations[index % rotations.length];

  return (
    <motion.div
      className="relative bg-white dark:bg-[hsl(30,15%,14%)] border-2 border-border rounded-lg p-6 shadow-md"
      style={{ transform: `rotate(${rotation}deg)` }}
      initial={{ opacity: 0, y: 30, rotate: rotation * 2 }}
      whileInView={{ opacity: 1, y: 0, rotate: rotation }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.15, type: "spring", stiffness: 100 }}
      whileHover={{ 
        y: -8, 
        rotate: 0,
        transition: { duration: 0.3 }
      }}
    >
      {/* Icon in corner */}
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 rounded-lg bg-warmred/10">
          <Icon className="size-6 text-warmred" />
        </div>
        <div className="font-hand text-warmred text-sm">#{index + 1}</div>
      </div>

      {/* Title */}
      <h3 className="font-serif text-xl mb-2">{title}</h3>

      {/* Description */}
      <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
        {description}
      </p>

      {/* Example */}
      <div className="mt-4 pt-4 border-t border-border">
        <p className="font-hand text-xs text-muted-foreground/70 mb-1">real example:</p>
        <p className="text-xs text-muted-foreground italic leading-relaxed">
          &ldquo;{example}&rdquo;
        </p>
      </div>

      {/* Decorative corner fold */}
      <div 
        className="absolute bottom-0 right-0 w-8 h-8 bg-kraft/20 dark:bg-kraft/10"
        style={{
          clipPath: "polygon(100% 0, 100% 100%, 0 100%)"
        }}
      />
    </motion.div>
  );
}

export function ProductPhilosophy() {
  const principles = [
    {
      icon: Zap,
      title: "Ship Fast, Iterate Faster",
      description: "Perfect is the enemy of shipped. I believe in launching 80% solutions quickly, gathering real user feedback, and iterating based on data rather than assumptions.",
      example: "At Unibites, we launched the MVP in 6 weeks instead of building all planned features. User feedback revealed they wanted delivery tracking more than menu customization—we pivoted and added what mattered.",
    },
    {
      icon: Target,
      title: "Start with Why",
      description: "Every feature should solve a real problem. I lead with user research and pain points before thinking about solutions, ensuring we're building the right thing, not just building things right.",
      example: "Before designing Capital One's Dynamic Decisioning system, I analyzed 200+ customer call transcripts to understand friction points. This shaped our 55K hour savings projection.",
    },
    {
      icon: Users,
      title: "Talk to Users, Not Assumptions",
      description: "Data tells you what happened, but users tell you why. I combine quantitative metrics with qualitative insights to make informed decisions that balance user needs and business goals.",
      example: "Building Unibites, we didn’t guess what students wanted—we validated it. We used early usage signals plus direct feedback, iterated quickly through a 10‑week incubator, and launched an MVP that generated 100+ user reviews.",
    },
    {
      icon: Sparkles,
      title: "Build with Engineers, Not For Them",
      description: "My engineering background lets me collaborate as a partner, not a ticket writer. I understand technical constraints and trade-offs, making me more effective at scoping and prioritization.",
      example: "At Neoboard, knowing the Canvas LTI architecture let me scope the MVP realistically—we prioritized async processing over real-time, shipping 3 months earlier without compromising quality.",
    },
  ];

  return (
    <div className="py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="font-serif text-3xl md:text-4xl mb-3">Product Philosophy</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          The principles that guide how I build, ship, and iterate on products
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-12 md:gap-y-10">
        {principles.map((principle, index) => (
          <PrincipleCard key={principle.title} {...principle} index={index} />
        ))}
      </div>
    </div>
  );
}
