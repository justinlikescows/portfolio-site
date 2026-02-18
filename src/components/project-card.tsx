"use client";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { X, ExternalLink } from "lucide-react";
import { StickerBadge } from "./sticker";

interface ProjectCardProps {
  title: string;
  description: string;
  dates: string;
  tags: readonly string[];
  image?: { src: string; width: number; height: number };
  href: string;
  productContext?: {
    problem: string;
    targetAudience: string;
    impact: readonly { metric: string; value: string }[];
    productDecisions: readonly string[];
    learnings: string;
  };
  index: number;
}

export function ProjectCard({
  title,
  description,
  dates,
  tags,
  image,
  href,
  productContext,
  index,
}: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const rotation = index % 2 === 0 ? -1.5 : 1.5;

  return (
    <>
      <motion.div
        className="cursor-pointer group relative"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        onClick={() => setExpanded(true)}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <div
          className="bg-white dark:bg-[hsl(30,15%,14%)] p-3 pb-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02] relative"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          {image && (
            <div className="relative overflow-hidden bg-muted aspect-[3/2]">
              <Image
                src={image.src}
                alt={title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Metrics Overlay on Hover */}
              <AnimatePresence>
                {isHovered && productContext && productContext.impact.length > 0 && (
                  <motion.div
                    className="absolute inset-0 bg-ink/90 backdrop-blur-sm flex items-center justify-center p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="grid grid-cols-2 gap-3 w-full">
                      {productContext.impact.map((item, i) => (
                        <motion.div
                          key={i}
                          className="text-center"
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: i * 0.1, duration: 0.3 }}
                        >
                          <div className="text-2xl font-serif text-warmred mb-1">
                            {item.value}
                          </div>
                          <div className="text-xs text-white/80">
                            {item.metric}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
          <div className="mt-3 px-1">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-serif text-lg">{title}</h3>
              <span className="font-hand text-sm text-muted-foreground shrink-0">{dates}</span>
            </div>
            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{description}</p>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {tags.map((tag, i) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-0.5 bg-secondary rounded-full text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          {/* "Click for case study" hint */}
          {productContext && (
            <motion.div
              className="absolute bottom-2 right-2 text-xs font-hand text-warmred opacity-0 group-hover:opacity-100 transition-opacity"
              initial={{ y: 5 }}
              animate={{ y: 0 }}
            >
              click for case study →
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-ink/40 dark:bg-ink/60 backdrop-blur-sm"
              onClick={() => setExpanded(false)}
            />
            <motion.div
              className="relative bg-card border border-border rounded-lg shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto"
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className="sticky top-0 bg-card/90 backdrop-blur-sm border-b border-border p-4 flex items-center justify-between z-10">
                <h2 className="font-serif text-xl">{title}</h2>
                <button
                  onClick={() => setExpanded(false)}
                  className="p-2 hover:bg-muted rounded-lg transition-colors"
                >
                  <X className="size-5" />
                </button>
              </div>

              <div className="p-6 space-y-6">
                {image && (
                  <div className="relative overflow-hidden rounded-lg bg-muted aspect-video">
                    <Image src={image.src} alt={title} fill className="object-cover" />
                  </div>
                )}

                <p className="text-muted-foreground">{description}</p>

                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, i) => (
                    <StickerBadge key={tag} index={i}>{tag}</StickerBadge>
                  ))}
                </div>

                {productContext && (
                  <>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-serif text-lg mb-2">The Problem</h3>
                        <p className="text-sm text-muted-foreground bg-secondary/50 p-4 rounded-lg border-l-3 border-warmred">
                          {productContext.problem}
                        </p>
                      </div>

                      <div>
                        <h3 className="font-serif text-lg mb-2">Target Audience</h3>
                        <p className="text-sm text-muted-foreground">{productContext.targetAudience}</p>
                      </div>

                      {productContext.impact.length > 0 && (
                        <div>
                          <h3 className="font-serif text-lg mb-2">Impact</h3>
                          <div className="grid grid-cols-2 gap-3">
                            {productContext.impact.map((item, i) => (
                              <div key={i} className="bg-secondary/50 rounded-lg p-3 text-center">
                                <div className="font-serif text-xl text-warmred">{item.value}</div>
                                <div className="text-xs text-muted-foreground mt-1">{item.metric}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <div>
                        <h3 className="font-serif text-lg mb-2">Key Decisions</h3>
                        <ul className="space-y-2">
                          {productContext.productDecisions.map((d, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex gap-2">
                              <span className="text-warmred shrink-0">-</span>
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-serif text-lg mb-2">What I Learned</h3>
                        <p className="text-sm text-muted-foreground italic">
                          &ldquo;{productContext.learnings}&rdquo;
                        </p>
                      </div>
                    </div>
                  </>
                )}

                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-warmred hover:underline"
                >
                  View Project <ExternalLink className="size-3.5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
