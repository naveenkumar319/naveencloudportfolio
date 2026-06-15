import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Cloud, Code2, Database, BarChart3, Cpu, Sparkles } from "lucide-react";
import naveen from "@/assets/naveen.png.asset.json";

const titles = [
  "Aspiring Cloud Engineer",
  "AWS Learner",
  "Data Science Student",
  "Future DevOps Engineer",
];

function Typer() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = titles[i];
    const speed = deleting ? 40 : 80;
    const t = setTimeout(() => {
      if (!deleting) {
        if (text.length < full.length) setText(full.slice(0, text.length + 1));
        else setTimeout(() => setDeleting(true), 1600);
      } else {
        if (text.length > 0) setText(full.slice(0, text.length - 1));
        else { setDeleting(false); setI((i + 1) % titles.length); }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, i]);

  return (
    <span className="text-gradient-cyan">
      {text}
      <span className="ml-1 inline-block h-7 w-[3px] animate-pulse bg-[var(--blink-green)] align-middle md:h-10" />
    </span>
  );
}

const services = [
  { icon: Cloud, label: "AWS", x: "10%", y: "20%" },
  { icon: Database, label: "SQL", x: "85%", y: "15%" },
  { icon: Code2, label: "Python", x: "75%", y: "70%" },
  { icon: BarChart3, label: "PowerBI", x: "15%", y: "75%" },
  { icon: Cpu, label: "ML", x: "50%", y: "10%" },
  { icon: Sparkles, label: "GenAI", x: "45%", y: "85%" },
];

function ArchitectureCanvas() {
  return (
    <div className="absolute inset-0 hidden lg:block">
      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="line" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="oklch(0.55 0.18 145)" stopOpacity="0" />
            <stop offset="50%" stopColor="oklch(0.55 0.18 145)" stopOpacity="0.7" />
            <stop offset="100%" stopColor="oklch(0.55 0.18 145)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[
          ["10%", "20%", "50%", "10%"],
          ["50%", "10%", "85%", "15%"],
          ["85%", "15%", "75%", "70%"],
          ["75%", "70%", "45%", "85%"],
          ["45%", "85%", "15%", "75%"],
          ["15%", "75%", "10%", "20%"],
          ["10%", "20%", "75%", "70%"],
          ["85%", "15%", "15%", "75%"],
        ].map(([x1, y1, x2, y2], i) => (
          <g key={i}>
            <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="oklch(0.55 0.18 145 / 0.18)" strokeWidth="1" />
            <line
              x1={x1} y1={y1} x2={x2} y2={y2}
              stroke="url(#line)"
              strokeWidth="2"
              strokeDasharray="6 100"
              className="animate-flow"
              style={{ animationDelay: `${i * 0.3}s`, animationDuration: "3s" }}
            />
          </g>
        ))}
      </svg>
      {services.map((s, i) => (
        <motion.div
          key={s.label}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: s.x, top: s.y }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8 + i * 0.1, type: "spring" }}
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3 + i * 0.3, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-2xl bg-[var(--blink-yellow)] opacity-60 blur-xl" />
            <div className="glass relative flex h-16 w-16 flex-col items-center justify-center rounded-2xl">
              <s.icon className="h-5 w-5 text-[var(--blink-green)]" strokeWidth={1.8} />
              <span className="mt-0.5 text-[9px] font-semibold text-foreground/70">{s.label}</span>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" className="hero-bg relative flex min-h-screen items-center justify-center overflow-hidden pt-24">
      <ArchitectureCanvas />

      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-[1fr_auto] lg:gap-16">
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass mb-6 inline-flex w-fit items-center gap-2 rounded-full px-4 py-1.5 text-xs"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--blink-green)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--blink-green)]" />
            </span>
            <span className="font-medium text-foreground/70">
              {"\n"}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl"
          >
            Hi, I'm <span className="text-gradient-orange">Naveen</span>.
            <br />
            Learning the <span className="text-gradient-cyan">{"\u00a0\u00a0"}</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-lg text-foreground/70 md:text-xl"
          >
            I'm an <Typer />
            {"\n"}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-4 max-w-xl text-base text-foreground/60"
          >
            B.Tech CSE (Data Science) student at KKR & KSR Institute — currently exploring AWS,
            Python and data analytics. I love building small things end-to-end and shipping them.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-[var(--blink-green)] px-6 py-3 text-sm font-semibold text-[var(--cloud-white)] transition-all hover:glow-cyan"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 grid max-w-md grid-cols-3 gap-6"
          >
            {[
              { v: "8.3", l: "CGPA" },
              { v: "6+", l: "Certificates" },
              { v: "2", l: "Internships" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-2xl font-bold text-gradient-cyan">{s.v}</div>
                <div className="text-xs font-medium text-foreground/60">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Profile card with photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden items-center justify-center lg:flex"
        >
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="absolute -inset-8 animate-spin-slow rounded-full bg-[conic-gradient(from_0deg,oklch(0.87_0.18_92),oklch(0.55_0.18_145),oklch(0.78_0.2_80),oklch(0.87_0.18_92))] opacity-60 blur-2xl" />
            <div className="relative h-80 w-80 rounded-full p-[3px]">
              <div className="absolute inset-0 animate-spin-slow rounded-full bg-[conic-gradient(from_0deg,oklch(0.87_0.18_92),oklch(0.55_0.18_145),oklch(0.78_0.2_80),oklch(0.87_0.18_92))]" />
              <div className="relative h-full w-full overflow-hidden rounded-full bg-[var(--blink-yellow)] ring-4 ring-white/60">
                <img
                  src={naveen.url}
                  alt="Akiti Naveenkumar"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="glass absolute -right-4 top-10 rounded-2xl px-3 py-2 text-xs font-semibold shadow-soft"
            >
              <div className="flex items-center gap-2">
                <Cloud className="h-4 w-4 text-[var(--blink-green)]" />
                AWS Learner
              </div>
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="glass absolute -left-6 bottom-20 rounded-2xl px-3 py-2 text-xs font-semibold shadow-soft"
            >
              <div className="flex items-center gap-2">
                <Code2 className="h-4 w-4 text-[var(--blink-green)]" />
                B.Tech · CSE (DS)
              </div>
            </motion.div>

            <div className="glass-strong mt-6 rounded-2xl px-5 py-3 text-center">
              <div className="font-display text-base font-bold">Akiti Naveenkumar</div>
              <div className="text-xs font-medium text-foreground/60">Aspiring Cloud Engineer · Guntur, IN</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs font-medium text-foreground/50"
      >
        scroll to explore ↓
      </motion.div>
    </section>
  );
}
