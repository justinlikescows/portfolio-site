import { cn } from "@/lib/utils";

interface DoodleProps {
  className?: string;
}

export function CoffeeDoodle({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={cn("size-12", className)} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16 20h28c1 0 2 1 2 2v20c0 6-5 10-12 10h-8c-7 0-12-4-12-10V22c0-1 1-2 2-2z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M44 26h4c3 0 6 2 6 6s-3 6-6 6h-4"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 14c0-3 2-5 2-7M30 14c0-3 2-5 2-7M36 14c0-3 2-5 2-7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
}

export function MountainDoodle({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={cn("size-12", className)} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 52L24 16l10 20 6-10L56 52H8z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M20 30l4-2 4 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.5"
      />
      <circle cx="48" cy="14" r="5" stroke="currentColor" strokeWidth="2" opacity="0.6" />
    </svg>
  );
}

export function ControllerDoodle({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={cn("size-12", className)} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 28c0-4 3-8 8-8h28c5 0 8 4 8 8v4c0 8-4 16-10 16-3 0-5-2-7-4h-10c-2 2-4 4-7 4-6 0-10-8-10-16v-4z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path d="M22 28v8M18 32h8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="40" cy="28" r="2" fill="currentColor" />
      <circle cx="44" cy="32" r="2" fill="currentColor" />
    </svg>
  );
}

export function ClimbingHoldDoodle({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={cn("size-12", className)} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 44c-4-2-8-8-8-16 0-10 8-18 20-18s20 8 20 18c0 8-4 14-8 16"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="26" cy="24" r="3" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="38" cy="22" r="2.5" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="32" cy="34" r="3.5" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M24 48l4 8M40 48l-4 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

export function SparkDoodle({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={cn("size-12", className)} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M32 8v12M32 44v12M8 32h12M44 32h12M14 14l9 9M41 41l9 9M50 14l-9 9M23 41l-9 9"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SquigglyLine({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 200 12" fill="none" className={cn("w-full h-3", className)} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <path
        d="M2 6c10-8 20 8 30 0s20 8 30 0 20 8 30 0 20 8 30 0 20 8 30 0 20 8 30 0"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.4"
      />
    </svg>
  );
}

export function ArrowDoodle({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 48 24" fill="none" className={cn("w-12 h-6", className)} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2 12c8-2 16 2 24-1s14-2 18 1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M38 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function CircleDoodle({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={cn("size-12", className)} xmlns="http://www.w3.org/2000/svg">
      <ellipse
        cx="24"
        cy="24"
        rx="20"
        ry="18"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.35"
        transform="rotate(-3 24 24)"
        strokeDasharray="2 0"
      />
    </svg>
  );
}

export function StarDoodle({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={cn("size-6", className)} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16 2l3 10h10l-8 6 3 10-8-6-8 6 3-10-8-6h10z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="currentColor"
        opacity="0.8"
      />
    </svg>
  );
}

export function TreeDoodle({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={cn("size-12", className)} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M32 8c-12 0-18 10-18 20 0 12 8 18 18 18s18-6 18-18c0-10-6-20-18-20z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M32 46v12"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function TopographicLines({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 400 40" fill="none" className={cn("w-full h-10", className)} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <path
        d="M0 32 Q50 28, 100 30 T200 26 T300 32 T400 28"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        opacity="0.2"
        className="text-olive"
      />
      <path
        d="M0 24 Q60 18, 120 22 T240 16 T360 24 T400 20"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        opacity="0.25"
        className="text-olive"
      />
      <path
        d="M0 16 Q80 10, 160 14 T320 8 T400 14"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        opacity="0.3"
        className="text-olive"
      />
      <path
        d="M0 8 Q100 4, 200 6 T400 4"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        opacity="0.15"
        className="text-olive"
      />
    </svg>
  );
}

export function WrenchDoodle({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={cn("size-12", className)} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M48 10c-4-4-10-4-14 0l-2 2 14 14 2-2c4-4 4-10 0-14z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M32 22L14 40c-2 2-2 5 0 7l3 3c2 2 5 2 7 0l18-18"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M22 38l4 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}

export function HexKeyDoodle({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={cn("size-12", className)} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 12h12v12H12z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        transform="rotate(45 18 18)"
      />
      <path
        d="M24 24l28 28"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M46 46l6 6"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
}

export function CarabinerDoodle({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={cn("size-12", className)} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 12c-6 0-10 4-10 10v20c0 6 4 10 10 10h16c8 0 14-6 14-14V26c0-8-6-14-14-14H20z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M44 20v8"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="44" cy="32" r="2" fill="currentColor" opacity="0.4" />
    </svg>
  );
}

export function PortafilterDoodle({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={cn("size-12", className)} xmlns="http://www.w3.org/2000/svg">
      <ellipse
        cx="32"
        cy="20"
        rx="18"
        ry="8"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
      />
      <path
        d="M14 20v8c0 6 8 10 18 10s18-4 18-10v-8"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M32 38v12M24 50h16"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M24 18h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.4"
      />
    </svg>
  );
}

export function PourOverDoodle({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={cn("size-12", className)} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16 8h32l-8 32H24L16 8z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M32 40v8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <ellipse
        cx="32"
        cy="54"
        rx="12"
        ry="4"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M22 14h20M26 22h12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.3"
      />
    </svg>
  );
}

export function KeyboardDoodle({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={cn("size-12", className)} xmlns="http://www.w3.org/2000/svg">
      <rect
        x="6"
        y="18"
        width="52"
        height="28"
        rx="3"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
      />
      <rect x="12" y="24" width="4" height="4" rx="0.5" fill="currentColor" opacity="0.4" />
      <rect x="18" y="24" width="4" height="4" rx="0.5" fill="currentColor" opacity="0.4" />
      <rect x="24" y="24" width="4" height="4" rx="0.5" fill="currentColor" opacity="0.4" />
      <rect x="30" y="24" width="4" height="4" rx="0.5" fill="currentColor" opacity="0.4" />
      <rect x="36" y="24" width="4" height="4" rx="0.5" fill="currentColor" opacity="0.4" />
      <rect x="42" y="24" width="4" height="4" rx="0.5" fill="currentColor" opacity="0.4" />
      <rect x="48" y="24" width="4" height="4" rx="0.5" fill="currentColor" opacity="0.4" />
      <rect x="14" y="32" width="4" height="4" rx="0.5" fill="currentColor" opacity="0.3" />
      <rect x="20" y="32" width="4" height="4" rx="0.5" fill="currentColor" opacity="0.3" />
      <rect x="26" y="32" width="4" height="4" rx="0.5" fill="currentColor" opacity="0.3" />
      <rect x="32" y="32" width="4" height="4" rx="0.5" fill="currentColor" opacity="0.3" />
      <rect x="38" y="32" width="4" height="4" rx="0.5" fill="currentColor" opacity="0.3" />
      <rect x="44" y="32" width="4" height="4" rx="0.5" fill="currentColor" opacity="0.3" />
      <rect x="18" y="38" width="28" height="4" rx="0.5" fill="currentColor" opacity="0.25" />
    </svg>
  );
}

export function ClimbingHoldJug({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={cn("size-12", className)} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 32c0-12 8-20 20-20s20 8 20 20c0 8-6 16-20 16S12 40 12 32z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M20 30c0-4 5-8 12-8s12 4 12 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.4"
      />
      <circle cx="24" cy="36" r="2" fill="currentColor" opacity="0.3" />
      <circle cx="40" cy="36" r="2" fill="currentColor" opacity="0.3" />
    </svg>
  );
}

export function ClimbingHoldCrimp({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={cn("size-12", className)} xmlns="http://www.w3.org/2000/svg">
      <rect
        x="10"
        y="26"
        width="44"
        height="12"
        rx="3"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
      />
      <path
        d="M16 30h32"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.3"
      />
      <circle cx="20" cy="32" r="1.5" fill="currentColor" opacity="0.4" />
      <circle cx="32" cy="32" r="1.5" fill="currentColor" opacity="0.4" />
      <circle cx="44" cy="32" r="1.5" fill="currentColor" opacity="0.4" />
    </svg>
  );
}

export function ClimbingHoldSloper({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={cn("size-12", className)} xmlns="http://www.w3.org/2000/svg">
      <ellipse
        cx="32"
        cy="32"
        rx="22"
        ry="14"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        transform="rotate(-10 32 32)"
      />
      <path
        d="M18 30 Q32 24, 46 30"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        opacity="0.3"
      />
    </svg>
  );
}
