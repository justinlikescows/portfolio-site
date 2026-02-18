"use client";

import { DATA } from "@/data/resume";
import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import { SectionHeading } from "@/components/section-heading";
import { ExperienceCard } from "@/components/experience-card";
import { ProjectCard } from "@/components/project-card";
import { InterestStrip } from "@/components/interest-strip";
import { LaptopStickerBomb } from "@/components/skill-stickers";
import { Polaroid } from "@/components/polaroid";
import { StickerBadge } from "@/components/sticker";
import {
  CoffeeDoodle,
  MountainDoodle,
  ControllerDoodle,
  ClimbingHoldDoodle,
  TreeDoodle,
  TopographicLines,
  WrenchDoodle,
  CarabinerDoodle,
  PortafilterDoodle,
  KeyboardDoodle,
} from "@/components/doodles";
import { CoffeeStain } from "@/components/coffee-stains";
import { CodeComment } from "@/components/code-comment";
import { TapeCorner } from "@/components/tape-corner";
import { ElevationTracker } from "@/components/elevation-tracker";
import { BrewTimer } from "@/components/brew-timer";
import { SendTracker } from "@/components/send-tracker";
import { MarginNote, InlineAnnotation } from "@/components/margin-note";
import { SpotifyWidget } from "@/components/spotify-widget";
import { TrailMapNav } from "@/components/trail-map-nav";
import { useParallaxScroll } from "@/hooks/use-parallax-scroll";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" as const },
  transition: { duration: 0.5 },
};

const stampIn = {
  initial: { opacity: 0, scale: 0.95 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, margin: "-50px" as const },
  transition: { duration: 0.4, type: "spring", stiffness: 200, damping: 15 },
};

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const parallaxCoffee = useParallaxScroll(0.3);
  const parallaxMountain = useParallaxScroll(0.5);
  const parallaxController = useParallaxScroll(0.2);
  const parallaxClimbing = useParallaxScroll(0.4);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <BrewTimer duration={3} onComplete={() => setIsLoading(false)} />}
      <Navbar />
      <TrailMapNav />
      <ElevationTracker />
      <main className="max-w-5xl mx-auto px-6">
        {/* ============ HERO ============ */}
        <section id="hero" className="min-h-[90vh] flex items-center pt-20 pb-12 relative">
          {/* Scattered doodles with parallax */}
          <motion.div
            className="absolute top-28 right-8 md:right-16 text-kraft/50 dark:text-kraft/30"
            style={{ y: parallaxCoffee }}
            animate={{ rotate: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <CoffeeDoodle className="size-10 md:size-14" />
          </motion.div>
          <motion.div
            className="absolute bottom-32 left-4 md:left-8 text-olive/40 dark:text-olive/25"
            style={{ y: parallaxMountain }}
            animate={{ rotate: [0, -3, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <MountainDoodle className="size-10 md:size-12" />
          </motion.div>
          <motion.div
            className="absolute top-40 left-12 md:left-24 text-muted-foreground/20"
            style={{ y: parallaxController }}
            animate={{ rotate: [0, 3, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <ControllerDoodle className="size-8 md:size-10" />
          </motion.div>
          <motion.div
            className="absolute bottom-20 right-16 md:right-32 text-coffee/30 dark:text-coffee/20"
            style={{ y: parallaxClimbing }}
            animate={{ rotate: [0, -4, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          >
            <ClimbingHoldDoodle className="size-9 md:size-11" />
          </motion.div>

          <div className="w-full">
            <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-8 md:gap-12">
              <motion.div
                className="flex-1 space-y-5"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div>
                  <p className="font-hand text-lg text-warmred mb-2">Hey, I&apos;m</p>
                  <h1 className="text-5xl md:text-7xl font-serif tracking-tight leading-[1.1]">
                    Justin<br />Pham
                  </h1>
                </div>
                <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
                  {DATA.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  <StickerBadge index={0}>Product Manager</StickerBadge>
                  <StickerBadge index={1}>Builder</StickerBadge>
                  <StickerBadge index={2}>Ideator</StickerBadge>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 pt-3">
                  <Link
                    href="/#projects"
                    className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
                  >
                    View My Work <ArrowRight className="size-4" />
                  </Link>
                  <Link
                    href={`mailto:${DATA.contact.email}`}
                    className="inline-flex items-center justify-center gap-2 border border-border px-6 py-3 rounded-full text-sm font-medium hover:bg-secondary transition-colors"
                  >
                    <Mail className="size-4" /> Say Hello
                  </Link>
                </div>
              </motion.div>

              <motion.div
                className="shrink-0"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="flex flex-col gap-6">
                  {/* Top row - 2 photos */}
                  <div className="flex gap-6">
                    <motion.div
                      initial={{ opacity: 0, rotate: -8 }}
                      animate={{ opacity: 1, rotate: -5 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      <Polaroid
                        src={DATA.avatarUrl.one}
                        alt={DATA.name}
                        caption="Exploring Yosemite meadows"
                        rotation={-5}
                        width={200}
                        height={200}
                        className="w-[160px] md:w-[200px]"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, rotate: 8 }}
                      animate={{ opacity: 1, rotate: 4 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="mt-8"
                    >
                      <Polaroid
                        src={DATA.avatarUrl.two}
                        alt={DATA.name}
                        caption="Tapas in Barcelona"
                        rotation={4}
                        width={200}
                        height={200}
                        className="w-[160px] md:w-[200px]"
                      />
                    </motion.div>
                  </div>
                  {/* Bottom row - 1 photo centered */}
                  <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0, rotate: 6 }}
                    animate={{ opacity: 1, rotate: 2 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <Polaroid
                      src={DATA.avatarUrl.three}
                      alt={DATA.name}
                      caption="Snowy night in Central Park"
                      rotation={2}
                      width={200}
                      height={200}
                      className="w-[160px] md:w-[200px]"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ============ ABOUT ============ */}
        <section id="about" className="py-16 md:py-24">
          <motion.div {...stampIn}>
            <SectionHeading
              title="About Me"
              annotation="the story"
            />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-16">
            <motion.div className="md:col-span-3 space-y-4 relative z-10 md:pr-4" {...fadeInUp}>
              {DATA.summary.split("\n\n").map((paragraph, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </motion.div>
            <motion.div
              className="md:col-span-2 flex flex-col gap-3 md:pl-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex flex-wrap gap-3 justify-start md:justify-center">
                {[
                  { label: "Esports", icon: "🎮" },
                  { label: "Bouldering", icon: "🧗" },
                  { label: "Coffee", icon: "☕" },
                  { label: "National Parks", icon: "🏔️" },
                  { label: "Gen AI", icon: "✨" },
                ].map((interest, i) => (
                  <StickerBadge key={interest.label} index={i + 3}>
                    <span>{interest.icon}</span>
                    {interest.label}
                  </StickerBadge>
                ))}
              </div>
              <div className="mt-4 p-4 bg-secondary/40 rounded-lg border border-border">
                <p className="font-hand text-lg text-warmred mb-1">Currently exploring:</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>- AI-powered productivity tools</li>
                  <li>- Developer experience products</li>
                  <li>- B2B SaaS platforms</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ============ EXPERIENCE ============ */}
        <section id="experience" className="py-16 md:py-24 relative">
          <motion.div {...stampIn}>
            <SectionHeading
              title="Experience"
              subtitle="From engineering to product — building things that matter."
              annotation="work"
            />
          </motion.div>

          <MarginNote side="left" className="-top-4">
            Each role taught me something different about shipping products
          </MarginNote>

          <div className="relative">
            {/* Wavy timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px hidden md:block">
              <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                <line
                  x1="0" y1="0" x2="0" y2="100%"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="6 4"
                  className="text-border"
                />
              </svg>
            </div>

            <div className="space-y-6 md:pl-14">
              {DATA.work.map((work, i) => (
                <ExperienceCard
                  key={work.company}
                  company={work.company}
                  title={work.title}
                  period={`${work.start} – ${work.end}`}
                  description={work.description}
                  logoUrl={work.logoUrl}
                  href={work.href}
                  isProduct={work.productWork}
                  index={i}
                />
              ))}
            </div>
          </div>

          {/* Leadership */}
          <div className="mt-16">
            <h3 className="font-serif text-2xl mb-6">Leadership & Involvement</h3>
            <div className="space-y-6 md:pl-14 relative">
              <div className="absolute left-6 top-0 bottom-0 w-px hidden md:block">
                <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                  <line
                    x1="0" y1="0" x2="0" y2="100%"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray="6 4"
                    className="text-border"
                  />
                </svg>
              </div>
              {DATA.leadership.map((item, i) => (
                <ExperienceCard
                  key={item.org}
                  company={item.org}
                  title={item.title}
                  period={`${item.start} – ${item.end}`}
                  description={item.description}
                  logoUrl={item.logoUrl}
                  href={item.href}
                  isProduct={item.productWork}
                  index={i + DATA.work.length}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ============ PROJECTS ============ */}
        <section id="projects" className="py-16 md:py-24 relative">
          <motion.div {...stampIn}>
            <SectionHeading
              title="Projects"
              subtitle="Case studies from things I've built — click to dig into the product thinking."
              annotation="builds"
            />
          </motion.div>
          <MarginNote side="right" className="top-8">
            Each project is a story of solving real problems
          </MarginNote>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {DATA.projects.map((project, i) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                dates={project.dates}
                tags={project.technologies}
                image={project.image}
                href={project.href}
                productContext={project.productContext}
                index={i}
              />
            ))}
          </div>
        </section>

        {/* ============ INTERESTS ============ */}
        <section id="interests" className="py-16 md:py-24 relative">
          <motion.div {...stampIn}>
            <SectionHeading
              title="Beyond the Resume"
              subtitle="The things that shape how I think, build, and show up."
              annotation="the human side"
              variant="topo"
            />
          </motion.div>
          
          {/* Topographic divider above */}
          <div className="mb-8 -mx-6">
            <TopographicLines className="opacity-40" />
          </div>
          
          <InterestStrip />

          {/* Send Tracker and Spotify Widget */}
          <motion.div 
            className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6"
            {...stampIn}
          >
            <div className="relative">
              <SendTracker />
              <MarginNote side="left">
                Each V-grade represents a milestone in problem-solving. Same energy I bring to products!
              </MarginNote>
            </div>
            <div className="flex flex-col justify-center">
              <SpotifyWidget />
              <p className="text-xs text-muted-foreground text-center mt-3 font-hand">
                current vibe while building
              </p>
            </div>
          </motion.div>
          
          {/* Topographic divider below */}
          <div className="mt-8 -mx-6">
            <TopographicLines className="opacity-30 rotate-180" />
          </div>
        </section>

        {/* ============ SKILLS ============ */}
        <section id="skills" className="py-16 md:py-24 relative">
          <motion.div {...stampIn}>
            <SectionHeading
              title="Skills & Tools"
              annotation="toolkit"
              variant="blueprint"
            />
          </motion.div>
          <MarginNote side="left" className="top-4">
            My digital toolbelt, worn from years of building
          </MarginNote>
          <div className="space-y-8">
            <div className="relative">
              <div className="flex items-center gap-2 mb-4">
                <KeyboardDoodle className="size-5 text-muted-foreground/40" />
                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground/60">
                  {`// Technical Stack`}
                </p>
              </div>
              <LaptopStickerBomb skills={[...DATA.skills, "Jira", "Figma", "Amplitude", "SQL", "Notion", "User Research", "A/B Testing", "Roadmapping"]} />
            </div>
            
            {/* Workshop doodles as accents */}
            <div className="flex justify-center gap-6 pt-4 opacity-30">
              <WrenchDoodle className="size-8 text-muted-foreground" />
              <PortafilterDoodle className="size-8 text-coffee" />
              <CarabinerDoodle className="size-8 text-olive" />
            </div>
          </div>
        </section>

        {/* ============ EDUCATION ============ */}
        <section id="education" className="py-16 md:py-24">
          <motion.div {...stampIn}>
            <SectionHeading title="Education" annotation="school" />
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {DATA.education.map((edu, i) => (
              <motion.div
                key={edu.school + edu.degree}
                className="relative bg-card border border-border rounded-lg p-5 shadow-sm overflow-hidden"
                style={{ transform: `rotate(${i % 2 === 0 ? -0.5 : 0.5}deg)` }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -4, rotate: 0, transition: { duration: 0.2 } }}
              >
                {/* Tape corners */}
                <TapeCorner position="top-left" variant="kraft" />
                <TapeCorner position="top-right" variant="masking" />
                
                <div className="flex items-start gap-4">
                  <div className="relative size-12 rounded-lg overflow-hidden border-2 border-white dark:border-[hsl(30,12%,20%)] shadow-sm bg-white shrink-0">
                    <Image
                      src={edu.logoUrl}
                      alt={edu.school}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg">{edu.school}</h3>
                    <p className="text-sm text-muted-foreground">{edu.degree}</p>
                    <p className="font-hand text-sm text-muted-foreground mt-1">
                      {edu.start} – {edu.end}
                    </p>
                  </div>
                </div>

                {/* Coffee stain on first card */}
                {i === 0 && (
                  <CoffeeStain position="bottom-right" variant="espresso" rotation={120} />
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* ============ CONTACT ============ */}
        <section id="contact" className="py-16 md:py-24 mb-12 relative">
          {/* Decorative coffee stain */}
          <CoffeeStain 
            position="top-left" 
            variant="travel" 
            rotation={45}
            className="opacity-50" 
          />
          
          <div className="text-center max-w-xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="font-hand text-4xl md:text-5xl text-warmred">
                Let&apos;s chat
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                I&apos;m actively seeking{" "}
                <span className="font-medium text-foreground">
                  Product Management opportunities
                </span>{" "}
                in AI/ML products. Available for full-time roles starting{" "}
                <span className="font-medium text-foreground">January 2026</span>.
              </p>
              
              {/* Code comment annotation */}
              <div className="flex justify-center">
                <CodeComment variant="multi" rotation={-1}>
                  open to chat about products, coffee, or climbing
                </CodeComment>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={DATA.contact.social.LinkedIn.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  Connect on LinkedIn <ArrowRight className="size-4" />
                </a>
                <a
                  href={`mailto:${DATA.contact.email}`}
                  className="inline-flex items-center justify-center gap-2 border border-border px-6 py-3 rounded-full text-sm font-medium hover:bg-secondary transition-colors"
                >
                  <Mail className="size-4" /> Write Me a Letter
                </a>
              </div>

              <div className="pt-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-olive/10 border border-olive/20">
                  <div className="size-2 rounded-full bg-olive animate-pulse" />
                  <span className="text-sm font-medium text-olive">
                    Open to opportunities
                  </span>
                </div>
              </div>

              {/* Social links */}
              <div className="flex justify-center gap-4 pt-4">
                {Object.entries(DATA.contact.social)
                  .filter(([_, social]) => social.navbar)
                  .map(([name, social]) => (
                    <a
                      key={name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border border-border rounded-full hover:bg-secondary transition-colors"
                      title={name}
                    >
                      <social.icon className="size-5" />
                    </a>
                  ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ============ FOOTER ============ */}
        <footer className="border-t border-border py-8 text-center relative">
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground">
              <TreeDoodle className="size-5 text-olive/50" />
              <span>Built with care by Justin Pham</span>
              <CoffeeDoodle className="size-5 text-coffee/50" />
            </div>
            <CodeComment variant="single" className="text-muted-foreground/30">
              fueled by espresso and late nights
            </CodeComment>
          </div>
        </footer>
      </main>
    </>
  );
}
