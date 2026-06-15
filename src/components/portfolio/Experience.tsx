import { motion } from "framer-motion";

const items = [
  { year: "2024 — Now", role: "Sr. Cloud Engineer", co: "Nimbus Labs", desc: "Leading multi-region AWS migration for a fintech serving 2M+ users." },
  { year: "2022 — 2024", role: "DevOps Engineer", co: "Stratus SaaS", desc: "Built CI/CD platform reducing deploy times from 40min to 4min." },
  { year: "2020 — 2022", role: "Cloud Engineer", co: "Cirrus Tech", desc: "Designed serverless data lake processing 5TB/day with Glue & Athena." },
  { year: "2019 — 2020", role: "Junior DevOps", co: "OpenStack Inc.", desc: "Automated provisioning with Terraform & Ansible across 200+ instances." },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-32">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-mono text-[var(--cyan-glow)]">
            04 — EXPERIENCE
          </div>
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
            A pathway through the <span className="text-gradient-cyan">clouds</span>.
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-[var(--cyan-glow)] via-[var(--aws-orange)] to-transparent md:left-1/2" />

          <div className="space-y-8">
            {items.map((it, i) => (
              <motion.div
                key={it.year}
                initial={{ opacity: 0, x: i % 2 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative pl-12 md:grid md:grid-cols-2 md:gap-8 md:pl-0 ${i % 2 ? "md:[&>div]:col-start-2" : ""}`}
              >
                <div className="absolute left-4 top-5 -translate-x-1/2 md:left-1/2">
                  <div className="relative">
                    <div className="absolute inset-0 animate-ping rounded-full bg-[var(--cyan-glow)] opacity-50" />
                    <div className="relative h-3 w-3 rounded-full bg-[var(--cyan-glow)] ring-4 ring-[var(--background)]" />
                  </div>
                </div>
                <div className={`glass rounded-2xl p-6 ${i % 2 ? "" : "md:text-right"}`}>
                  <div className="font-mono text-xs text-[var(--aws-orange)]">{it.year}</div>
                  <div className="mt-1 font-display text-lg font-bold">{it.role}</div>
                  <div className="text-sm text-muted-foreground">{it.co}</div>
                  <p className="mt-3 text-sm text-muted-foreground">{it.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
