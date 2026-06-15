import { Cloud } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 py-12">
      <div className="absolute inset-x-0 bottom-0 h-40 opacity-20" aria-hidden>
        <svg viewBox="0 0 1200 160" preserveAspectRatio="none" className="h-full w-full">
          <path d="M0,80 C150,120 300,40 450,80 C600,120 750,40 900,80 C1050,120 1200,40 1200,80 L1200,160 L0,160 Z" fill="oklch(0.82 0.18 210)" />
          <path d="M0,100 C200,140 400,60 600,100 C800,140 1000,60 1200,100 L1200,160 L0,160 Z" fill="oklch(0.74 0.2 55)" fillOpacity="0.5" />
        </svg>
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <div className="flex items-center gap-2">
          <Cloud className="h-5 w-5 text-[var(--cyan-glow)]" strokeWidth={1.5} />
          <span className="font-display font-bold"><span className="text-gradient-cyan">cloud</span>.dev</span>
        </div>
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Alex Cloud. Architected with ☁️ & ⚡ on AWS.</p>
      </div>
    </footer>
  );
}
