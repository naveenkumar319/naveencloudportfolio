import { motion } from "framer-motion";
import { Cloud } from "lucide-react";
import { useEffect, useState } from "react";

const links = ["Home", "About", "Skills", "Projects", "Certifications", "Experience", "Contact"];

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
      <div className={`mx-auto max-w-6xl px-4 ${scrolled ? "" : ""}`}>
        <div className="glass-strong flex items-center justify-between rounded-2xl px-5 py-3">
          <a href="#home" className="flex items-center gap-2">
            <motion.div
              animate={{ rotate: [0, 8, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-full bg-[var(--cyan-glow)] opacity-40 blur-md" />
              <Cloud className="relative h-7 w-7 text-[var(--cyan-glow)]" strokeWidth={1.5} />
            </motion.div>
            <span className="font-display text-lg font-bold tracking-tight">
              <span className="text-gradient-cyan">cloud</span>
              <span className="text-foreground">.dev</span>
            </span>
          </a>
          <div className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="rounded-lg px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
              >
                {l}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="rounded-lg bg-[var(--aws-orange)] px-4 py-1.5 text-sm font-semibold text-[var(--deep-navy)] transition-all hover:glow-orange"
          >
            Hire Me
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
