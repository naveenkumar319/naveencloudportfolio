import { motion } from "framer-motion";

const education = [
  {
    year: "2023 — 2027",
    role: "B.Tech · CSE (Data Science)",
    co: "KKR & KSR Institute of Technology and Sciences",
    desc: "CGPA 8.3 / 10. Coursework in DSA, DBMS, ML basics, statistics and cloud computing.",
  },
  {
    year: "2021 — 2023",
    role: "Intermediate (MPC)",
    co: "NRI Junior College, Guntur",
    desc: "GPA 8.95 / 10 — Maths, Physics, Chemistry.",
  },
  {
    year: "2021",
    role: "Secondary Education",
    co: "Little Flower High School",
    desc: "GPA 10 / 10.",
  },
];

export function Journey() {
  return (
    <section id="journey" className="relative py-32">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-mono font-semibold text-[var(--blink-green)]">
            05 — JOURNEY
          </div>
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
            My <span className="text-gradient-cyan">journey</span> so far.
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-[var(--blink-green)] via-[var(--blink-yellow-deep)] to-transparent md:left-1/2" />

          <div className="space-y-8">
            {education.map((it, i) => (
              <motion.div
                key={it.role + it.year}
                initial={{ opacity: 0, x: i % 2 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative pl-12 md:grid md:grid-cols-2 md:gap-8 md:pl-0 ${i % 2 ? "md:[&>div]:col-start-2" : ""}`}
              >
                <div className="absolute left-4 top-5 -translate-x-1/2 md:left-1/2">
                  <div className="relative">
                    <div className="absolute inset-0 animate-ping rounded-full bg-[var(--blink-green)] opacity-50" />
                    <div className="relative h-3 w-3 rounded-full bg-[var(--blink-green)] ring-4 ring-[var(--background)]" />
                  </div>
                </div>
                <div className={`glass rounded-2xl p-6 ${i % 2 ? "" : "md:text-right"}`}>
                  <div className="font-mono text-xs font-bold text-[var(--blink-yellow-deep)]">{it.year}</div>
                  <div className="mt-1 font-display text-lg font-bold">{it.role}</div>
                  <div className="text-sm font-medium text-foreground/65">{it.co}</div>
                  <p className="mt-3 text-sm text-foreground/65">{it.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
