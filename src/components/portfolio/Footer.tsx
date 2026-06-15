import { Zap } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-foreground/5 py-12">
      <div className="absolute inset-x-0 bottom-0 h-40 opacity-30" aria-hidden>
        <svg viewBox="0 0 1200 160" preserveAspectRatio="none" className="h-full w-full">
          <path d="M0,80 C150,120 300,40 450,80 C600,120 750,40 900,80 C1050,120 1200,40 1200,80 L1200,160 L0,160 Z" fill="oklch(0.55 0.18 145)" />
          <path d="M0,100 C200,140 400,60 600,100 C800,140 1000,60 1200,100 L1200,160 L0,160 Z" fill="oklch(0.87 0.18 92)" fillOpacity="0.7" />
        </svg>
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[var(--blink-yellow)]">
            <Zap className="h-4 w-4 fill-[var(--blink-green-deep)] text-[var(--blink-green-deep)]" />
          </div>
          <span className="font-display font-bold">
            <span className="text-[var(--blink-green-deep)]">naveen</span>
          </span>
        </div>
        <p className="text-xs font-medium text-foreground/60">
          © {new Date().getFullYear()} Akiti Naveenkumar · Built with\u00a0 & ⚡ from Guntur, IN.
        </p>
      </div>
    </footer>
  );
}
