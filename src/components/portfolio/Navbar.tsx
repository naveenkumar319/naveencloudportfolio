import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { useEffect, useState } from "react";

const links = ["Home", "About", "Skills", "Projects", "Internships", "Journey", "Certifications", "Contact"];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="glass-strong flex items-center justify-between rounded-2xl px-5 py-3">
          <a href="#home" className="flex items-center gap-2">
            <motion.div
              animate={{ rotate: [0, 8, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="relative flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--blink-yellow)] shadow-soft"
            >
              <Zap className="h-4 w-4 fill-[var(--blink-green-deep)] text-[var(--blink-green-deep)]" strokeWidth={2} />
            </motion.div>
            <span className="font-display text-lg font-bold tracking-tight">
              <span className="text-[var(--blink-green-deep)]">naveen</span>
              <span className="text-foreground">.cloud</span>
            </span>
          </a>
          <div className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="rounded-lg px-3 py-1.5 text-sm font-medium text-foreground/65 transition-colors hover:bg-[var(--blink-yellow)]/40 hover:text-foreground"
              >
                {l}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="rounded-lg bg-[var(--blink-green)] px-4 py-1.5 text-sm font-bold text-[var(--cloud-white)] transition-all hover:glow-cyan"
          >
            Hire Me
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
