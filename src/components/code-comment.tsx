"use client";

import { cn } from "@/lib/utils";

interface CodeCommentProps {
  children: string;
  className?: string;
  rotation?: number;
  variant?: "single" | "multi" | "hash";
}

export function CodeComment({
  children,
  className,
  rotation = -2,
  variant = "single",
}: CodeCommentProps) {
  const formats = {
    single: `// ${children}`,
    multi: `/* ${children} */`,
    hash: `# ${children}`,
  };

  return (
    <span
      className={cn(
        "inline-block font-mono text-[10px] md:text-xs",
        "text-muted-foreground/50 dark:text-muted-foreground/40",
        "whitespace-nowrap",
        className
      )}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      {formats[variant]}
    </span>
  );
}

interface ImpactCommentProps {
  label: string;
  value: string;
  className?: string;
}

export function ImpactComment({ label, value, className }: ImpactCommentProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 font-mono text-[10px]",
        "text-olive/60 dark:text-olive/50",
        "px-1.5 py-0.5 rounded bg-olive/[0.05] border border-olive/10",
        className
      )}
    >
      <span className="text-olive/40">{`//`}</span>
      <span className="font-semibold text-olive/70 dark:text-olive/60">{value}</span>
      <span className="text-olive/40">{label}</span>
    </div>
  );
}

interface MarginNoteProps {
  children: string;
  className?: string;
  position?: "left" | "right";
}

export function MarginNote({ children, className, position = "right" }: MarginNoteProps) {
  return (
    <div
      className={cn(
        "absolute font-mono text-[9px] md:text-[10px] leading-tight",
        "text-muted-foreground/40 dark:text-muted-foreground/30",
        "max-w-[100px] md:max-w-[120px]",
        position === "right" ? "-right-28 md:-right-36 top-0" : "-left-28 md:-left-36 top-0",
        "hidden lg:block",
        className
      )}
      style={{ transform: "rotate(-1deg)" }}
    >
      <span className="text-muted-foreground/30">{`/* `}</span>
      {children}
      <span className="text-muted-foreground/30">{` */`}</span>
    </div>
  );
}
