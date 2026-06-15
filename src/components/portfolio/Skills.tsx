import { motion } from "framer-motion";

const skills = [
  { name: "Python", cat: "Language", pct: 85 },
  { name: "Java", cat: "Language", pct: 75 },
  { name: "C / C++", cat: "Language", pct: 78 },
  { name: "SQL", cat: "Database", pct: 80 },
  { name: "HTML / CSS", cat: "Web", pct: 82 },
  { name: "Pandas", cat: "Data", pct: 78 },
  { name: "NumPy", cat: "Data", pct: 78 },
  { name: "Matplotlib", cat: "Viz", pct: 72 },
  { name: "Power BI", cat: "BI", pct: 80 },
  { name: "Excel", cat: "Analytics", pct: 85 },
  { name: "AWS Basics", cat: "Cloud", pct: 65 },
  { name: "Cloud Security", cat: "Security", pct: 60 },
  { name: "Flutter / Dart", cat: "Mobile", pct: 70 },
  { name: "Firebase", cat: "Backend", pct: 68 },
  { name: "Git & GitHub", cat: "Tools", pct: 78 },
  { name: "VS Code", cat: "IDE", pct: 90 },
  { name: "Jupyter", cat: "Notebooks", pct: 82 },
  { name: "MS Office", cat: "Productivity", pct: 90 },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-32">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex items-end justify-between"
        >
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-mono font-semibold text-[var(--blink-green)]">
              02 — SKILLS
            </div>
            <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
              My current <span className="text-gradient-orange">toolkit</span>.
            </h2>
          </div>
          <div className="hidden items-center gap-2 font-mono text-xs font-semibold text-foreground/60 md:flex">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--blink-green)]" />
            Still leveling up
          </div>
        </motion.div>

        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="glass group relative overflow-hidden rounded-2xl p-4"
            >
              <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-[var(--blink-green)] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold">{s.name}</div>
                  <div className="font-mono text-[10px] font-semibold uppercase tracking-wider text-foreground/55">{s.cat}</div>
                </div>
                <div className="font-mono text-sm font-bold text-gradient-cyan">{s.pct}%</div>
              </div>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[var(--blink-yellow)]/30">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.pct}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.2 + i * 0.03, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-[var(--blink-green)] to-[var(--blink-yellow-deep)]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
