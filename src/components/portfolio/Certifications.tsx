import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certs = [
  { name: "AWS Solutions Architect — Professional", org: "Amazon Web Services", color: "var(--aws-orange)" },
  { name: "AWS DevOps Engineer — Professional", org: "Amazon Web Services", color: "var(--aws-orange)" },
  { name: "AWS Certified Security — Specialty", org: "Amazon Web Services", color: "var(--aws-orange)" },
  { name: "Machine Learning Specialization", org: "Coursera · Stanford", color: "var(--cyan-glow)" },
  { name: "Generative AI with LLMs", org: "DeepLearning.AI", color: "var(--cyan-glow)" },
  { name: "Cloud Security Fundamentals", org: "ISC2", color: "var(--cyan-glow)" },
  { name: "Microsoft Power BI Data Analyst", org: "Microsoft", color: "var(--cyan-glow)" },
  { name: "Python for Data Science", org: "IBM", color: "var(--cyan-glow)" },
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
          <div className="mb-4 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-mono text-[var(--cyan-glow)]">
            05 — CERTIFICATIONS
          </div>
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
            Credentials, <span className="text-gradient-orange">earned</span>.
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {certs.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              animate={{ y: [0, -6, 0] }}
              {...{ transition: { y: { duration: 4 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }, opacity: { duration: 0.5, delay: i * 0.06 } } }}
              whileHover={{ scale: 1.03 }}
              className="glass group relative overflow-hidden rounded-2xl p-5"
            >
              <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
              <Award className="mb-3 h-6 w-6" style={{ color: `var(--${c.color === "var(--aws-orange)" ? "aws-orange" : "cyan-glow"})` }} strokeWidth={1.5} />
              <div className="text-sm font-semibold leading-tight">{c.name}</div>
              <div className="mt-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{c.org}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
