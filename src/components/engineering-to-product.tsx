"use client";

import { motion } from "framer-motion";
import { Code, Lightbulb, Users, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimelineNode {
  year: string;
  phase: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  insight: string;
  color: string;
  position: "left" | "right";
}

function TimelineCard({ node, index }: { node: TimelineNode; index: number }) {
  const isLeft = node.position === "left";

  return (
    <motion.div
      className={cn(
        "flex gap-8 md:gap-12 items-center",
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      )}
      initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      {/* Content Card */}
      <div className="flex-1">
        <motion.div
          className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow relative"
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
        >
          {/* Year Badge */}
          <div className="absolute -top-3 left-6 px-3 py-1 bg-kraft dark:bg-kraft/90 rounded-full border-2 border-border">
            <span className="font-hand text-sm text-ink dark:text-kraft-foreground">{node.year}</span>
          </div>

          {/* Phase */}
          <div className="flex items-center gap-2 mb-3 mt-2">
            <div className={cn("p-2 rounded-lg", node.color, "bg-opacity-10")}>
              <node.icon className={cn("size-5", node.color.replace("bg-", "text-"))} />
            </div>
            <span className="font-hand text-sm text-muted-foreground">{node.phase}</span>
          </div>

          {/* Title */}
          <h3 className="font-serif text-xl mb-2">{node.title}</h3>

          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            {node.description}
          </p>

          {/* Key Insight */}
          <div className="pt-4 border-t border-border">
            <p className="font-hand text-xs text-warmred mb-1">key learning:</p>
            <p className="text-sm text-muted-foreground italic">
              &ldquo;{node.insight}&rdquo;
            </p>
          </div>

          {/* Decorative corner */}
          <div 
            className={cn("absolute bottom-0", isLeft ? "right-0" : "left-0", "w-8 h-8 opacity-10", node.color)}
            style={{
              clipPath: isLeft 
                ? "polygon(100% 0, 100% 100%, 0 100%)"
                : "polygon(0 0, 0 100%, 100% 100%)"
            }}
          />
        </motion.div>
      </div>

      {/* Timeline Dot (hidden on mobile) */}
      <div className="hidden md:flex flex-col items-center shrink-0">
        <div className={cn("size-4 rounded-full border-4 border-background shadow-md", node.color)} />
      </div>

      {/* Spacer for layout */}
      <div className="hidden md:block flex-1" />
    </motion.div>
  );
}

export function EngineeringToProduct() {
  const timeline: TimelineNode[] = [
    {
      year: "2022",
      phase: "Engineering Phase",
      icon: Code,
      title: "Building Features, Missing the Why",
      description: "Started as a software engineer at Wonsulting, building GPT-powered resume tools. Focused on implementation details — APIs, prompt engineering, Python scripts. But kept wondering: why are we building this feature and not that one?",
      insight: "Writing code is easy. Knowing what code to write is the hard part.",
      color: "bg-blue-500",
      position: "left",
    },
    {
      year: "2023-24",
      phase: "Curiosity Phase",
      icon: Lightbulb,
      title: "Asking Questions Engineers Don't",
      description: "At FOLN and Neoboard, started pushing beyond tickets. Interviewed 10+ professors for Neoboard's Canvas integration. Built referral systems at FOLN and asked: 'How do we measure if users actually want this?' Engineering background let me prototype fast, but I cared more about impact than implementation.",
      insight: "User feedback beats technical perfection. Ship, learn, iterate.",
      color: "bg-warmred",
      position: "right",
    },
    {
      year: "2025 (Winter)",
      phase: "Transition Phase",
      icon: Users,
      title: "Leading Product, Not Just Code",
      description: "Led Unibites through a 10-week incubator with Product Association. Assumed the role as Product Manager for a 6 student team. Used Jira for prioritization, Lovable for MVP development, and Slack for communication. Still coded minimally, but spent more time being a ideator and strategist than a engineer.",
      insight: "The best product decisions come from talking to users, not assumptions.",
      color: "bg-olive",
      position: "left",
    },
    {
      year: "2025 (Summer)",
      phase: "Product Manager",
      icon: Rocket,
      title: "From Tickets to Strategy",
      description: "PM intern at Capital One. Designed Dynamic Decisioning system from user research (200+ call transcripts) through architecture design. Conducted build vs. buy analysis. Created PRDs and roadmaps. My engineering background made me a better PM — I could talk to engineers as peers, scope realistically, and understand technical trade-offs.",
      insight: "Technical depth + user empathy = better product decisions. I don't just spec features, I understand how they're built and why they matter.",
      color: "bg-coffee",
      position: "right",
    },
  ];

  return (
    <div className="py-16 md:py-24 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="font-serif text-3xl md:text-4xl mb-3">From Code to Product</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          My journey from building features to building products — and why technical depth makes me a better PM
        </p>
      </motion.div>

      {/* Timeline Nodes (line anchored to this area only) */}
      <div className="relative">
        {/* Timeline Line (hidden on mobile) */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" aria-hidden="true" />

        <div className="space-y-12 md:space-y-16">
          {timeline.map((node, index) => (
            <TimelineCard key={node.year} node={node} index={index} />
          ))}
        </div>
      </div>

      {/* Current State */}
      <motion.div
        className="mt-12 p-6 bg-secondary/30 rounded-lg border-2 border-border text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.4 }}
      >
        <p className="text-lg font-serif mb-2">Today: Technical PM Who Ships</p>
        <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
          I don&apos;t just write PRDs — I understand the system architecture behind them. 
          I don&apos;t just gather requirements — I can prototype them. 
          My engineering roots make me a partner to developers, not a blocker.
        </p>
      </motion.div>
    </div>
  );
}
