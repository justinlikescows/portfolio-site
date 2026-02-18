"use client";

import { cn } from "@/lib/utils";

interface DateStampProps {
  date: string;
  className?: string;
  rotation?: number;
  variant?: "rectangle" | "circle" | "approved";
}

function formatDateForStamp(date: string): string {
  const parts = date.split(" ");
  if (parts.length >= 1) {
    const month = parts[0].substring(0, 3).toUpperCase();
    const year = parts[1] || "";
    return `${month} ${year}`;
  }
  return date.toUpperCase();
}

export function DateStamp({ date, className, rotation = 3, variant = "rectangle" }: DateStampProps) {
  const formattedDate = formatDateForStamp(date);

  if (variant === "circle") {
    return (
      <div
        className={cn(
          "inline-flex items-center justify-center",
          "size-14 rounded-full",
          "border-2 border-dashed border-coffee/40 dark:border-coffee/30",
          "font-mono text-[10px] font-bold tracking-wider",
          "text-coffee/50 dark:text-coffee/40",
          className
        )}
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <span className="text-center leading-tight">{formattedDate}</span>
      </div>
    );
  }

  if (variant === "approved") {
    return (
      <div
        className={cn(
          "inline-block px-3 py-1",
          "border-2 border-olive/50 dark:border-olive/40 rounded",
          "font-mono text-[10px] font-bold tracking-widest uppercase",
          "text-olive/60 dark:text-olive/50",
          className
        )}
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        APPROVED
      </div>
    );
  }

  return (
    <div
      className={cn(
        "inline-block px-2 py-0.5",
        "border border-coffee/30 dark:border-coffee/25 rounded-sm",
        "font-mono text-[10px] font-semibold tracking-wider",
        "text-coffee/50 dark:text-coffee/40",
        "bg-coffee/[0.02] dark:bg-coffee/[0.03]",
        className
      )}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      {formattedDate}
    </div>
  );
}

interface PeriodStampProps {
  start: string;
  end: string;
  className?: string;
}

export function PeriodStamp({ start, end, className }: PeriodStampProps) {
  const startFormatted = formatDateForStamp(start);
  const endFormatted = end === "Present" ? "NOW" : formatDateForStamp(end);

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1",
        "font-mono text-[10px] font-semibold tracking-wider",
        "text-muted-foreground/70",
        className
      )}
    >
      <span className="px-1.5 py-0.5 border border-border/50 rounded-sm bg-secondary/30">
        {startFormatted}
      </span>
      <span className="text-muted-foreground/40">→</span>
      <span className="px-1.5 py-0.5 border border-border/50 rounded-sm bg-secondary/30">
        {endFormatted}
      </span>
    </div>
  );
}
