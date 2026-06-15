import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Download, Server, Database, Globe, Box, Network, Zap } from "lucide-react";

const titles = ["AWS Cloud Engineer", "DevOps Enthusiast", "Cloud Architect", "Automation Engineer"];

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
      <span className="ml-1 inline-block h-7 w-[3px] animate-pulse bg-[var(--cyan-glow)] align-middle md:h-10" />
    </span>
  );
}

const services = [
  { icon: Server, label: "EC2", x: "10%", y: "20%" },
  { icon: Database, label: "S3", x: "85%", y: "15%" },
  { icon: Zap, label: "Lambda", x: "75%", y: "70%" },
  { icon: Network, label: "VPC", x: "15%", y: "75%" },
  { icon: Globe, label: "Route53", x: "50%", y: "10%" },
  { icon: Box, label: "ECS", x: "45%", y: "85%" },
];

function ArchitectureCanvas() {
  return (
    <div className="absolute inset-0 hidden lg:block">
      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="line" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="oklch(0.82 0.18 210)" stopOpacity="0" />
            <stop offset="50%" stopColor="oklch(0.82 0.18 210)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="oklch(0.82 0.18 210)" stopOpacity="0" />
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
            <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="oklch(0.82 0.18 210 / 0.15)" strokeWidth="1" />
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
            <div className="absolute inset-0 rounded-2xl bg-[var(--cyan-glow)] opacity-30 blur-xl" />
            <div className="glass relative flex h-16 w-16 flex-col items-center justify-center rounded-2xl">
              <s.icon className="h-5 w-5 text-[var(--cyan-glow)]" strokeWidth={1.5} />
              <span className="mt-0.5 text-[9px] font-medium text-muted-foreground">{s.label}</span>
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
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--cyan-glow)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--cyan-glow)]" />
            </span>
            <span className="text-muted-foreground">Available for cloud projects</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl"
          >
            Architecting the
            <br />
            <span className="text-gradient-orange">cloud</span>, one
            <br />
            deployment at a time.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-lg text-muted-foreground md:text-xl"
          >
            I'm <Typer />
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-4 max-w-xl text-base text-muted-foreground/80"
          >
            Designing, automating and scaling resilient infrastructure on AWS — from serverless pipelines to multi-region Kubernetes clusters.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-[var(--aws-orange)] px-6 py-3 text-sm font-semibold text-[var(--deep-navy)] transition-all hover:glow-orange"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="glass inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-white/10"
            >
              <Download className="h-4 w-4" /> Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 grid max-w-md grid-cols-3 gap-6"
          >
            {[
              { v: "50+", l: "Deployments" },
              { v: "8+", l: "AWS Services" },
              { v: "99.9%", l: "Uptime" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-2xl font-bold text-gradient-cyan">{s.v}</div>
                <div className="text-xs text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Profile card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden items-center justify-center lg:flex"
        >
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="absolute -inset-8 animate-spin-slow rounded-full bg-[conic-gradient(from_0deg,oklch(0.82_0.18_210),oklch(0.74_0.2_55),oklch(0.65_0.2_240),oklch(0.82_0.18_210))] opacity-40 blur-2xl" />
            <div className="relative h-72 w-72 rounded-full p-1">
              <div className="absolute inset-0 animate-spin-slow rounded-full bg-[conic-gradient(from_0deg,oklch(0.82_0.18_210),oklch(0.74_0.2_55),oklch(0.65_0.2_240),oklch(0.82_0.18_210))]" />
              <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-[var(--deep-navy)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,oklch(0.3_0.15_220),transparent_70%)]" />
                <div className="relative font-display text-7xl font-bold text-gradient-cyan">AC</div>
              </div>
            </div>
            <div className="glass mt-6 rounded-2xl px-5 py-3 text-center">
              <div className="text-sm font-semibold">Alex Cloud</div>
              <div className="text-xs text-muted-foreground">Sr. Cloud & DevOps Engineer</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-muted-foreground"
      >
        scroll to explore ↓
      </motion.div>
    </section>
  );
}
