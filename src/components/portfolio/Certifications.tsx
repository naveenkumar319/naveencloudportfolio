import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certs = [
  { name: "Machine Learning Onramp", org: "MathWorks", accent: "green" },
  { name: "Generative AI Literacy", org: "FutureSkills Prime · NASSCOM", accent: "yellow" },
  { name: "Cloud Security Basics", org: "Microsoft", accent: "green" },
  { name: "Power BI for Beginners", org: "Microsoft · Simplilearn", accent: "yellow" },
  { name: "Python Programming", org: "GeeksforGeeks", accent: "green" },
  { name: "Digital Applications Fundamentals (STEM)", org: "FutureSkills Prime", accent: "yellow" },
  { name: "Microsoft Learnathon ’25 — AI & GenAI", org: "Microsoft", accent: "green" },
];

export function Certifications() {
  return (
    <section id="certifications" className="relative py-32">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-mono font-semibold text-[var(--blink-green)]">
            05 — CERTIFICATIONS
          </div>
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
            Things I've <span className="text-gradient-orange">learned</span>.
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {certs.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              animate={{ y: [0, -6, 0], opacity: 1 }}
              transition={{
                y: { duration: 4 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 },
                opacity: { duration: 0.5, delay: i * 0.06 },
              }}
              whileHover={{ scale: 1.03 }}
              className="glass group relative overflow-hidden rounded-2xl p-5"
            >
              <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
              <Award
                className="mb-3 h-6 w-6"
                style={{ color: c.accent === "green" ? "var(--blink-green)" : "var(--blink-yellow-deep)" }}
                strokeWidth={1.8}
              />
              <div className="text-sm font-semibold leading-tight">{c.name}</div>
              <div className="mt-2 font-mono text-[10px] font-semibold uppercase tracking-wider text-foreground/55">{c.org}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
