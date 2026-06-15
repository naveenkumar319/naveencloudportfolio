import { motion } from "framer-motion";
import { Github, ExternalLink, GitBranch } from "lucide-react";

const projects = [
  {
    name: "MedInfo",
    tag: "Mobile · Healthcare",
    problem: "A cross-platform mobile app to help users quickly look up medicine dosage, precautions and side-effects.",
    stack: ["Flutter", "Dart", "Firebase", "SQL"],
    features: [
      "Secure login & real-time data sync",
      "Roles: visitor, owner, admin",
      "Clean UI for fast medicine search",
      "Scalable for future symptom checker",
    ],
    nodes: ["User", "App", "Auth", "DB", "Alerts"],
  },
  {
    name: "Sales Analytics Dashboard",
    tag: "Data · Business Intelligence",
    problem: "An interactive Power BI dashboard to monitor monthly sales, profit and regional performance for a small business.",
    stack: ["Power BI", "Excel", "DAX", "SQL"],
    features: [
      "Cleaned raw sales data in Excel & Power Query",
      "DAX measures for revenue, margin, growth",
      "Bar / line charts + KPI cards",
      "Insights on top products & regions",
    ],
    nodes: ["Excel", "ETL", "Model", "DAX", "Report"],
  },
];

function Pipeline() {
  return (
    <div className="flex items-center gap-1.5 font-mono text-[10px]">
      {["clean", "model", "publish"].map((s, i) => (
        <motion.div
          key={s}
          initial={{ opacity: 0.3 }}
          whileInView={{ opacity: [0.3, 1, 0.7] }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.4, duration: 1 }}
          className="flex items-center gap-1 rounded-full bg-[var(--blink-green)]/12 px-2 py-0.5 font-semibold text-[var(--blink-green-deep)]"
        >
          <span className="h-1 w-1 rounded-full bg-[var(--blink-green)]" />
          {s}
        </motion.div>
      ))}
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative py-32">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-mono font-semibold text-[var(--blink-green)]">
            03 — PROJECTS
          </div>
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
            Things I've <span className="text-gradient-cyan">built so far</span>.
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ rotateX: 2, rotateY: -2, y: -6 }}
              style={{ transformStyle: "preserve-3d" }}
              className="glass group relative overflow-hidden rounded-3xl p-7"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--blink-yellow)]/0 to-[var(--blink-green)]/0 opacity-0 transition-opacity group-hover:opacity-15" />

              <div className="relative">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <div className="font-mono text-xs font-semibold text-[var(--blink-green)]">{p.tag}</div>
                    <h3 className="mt-1 font-display text-2xl font-bold">{p.name}</h3>
                  </div>
                  <GitBranch className="h-5 w-5 text-foreground/50" />
                </div>

                <p className="text-sm text-foreground/70">{p.problem}</p>

                {/* Architecture mini diagram */}
                <div className="my-5 rounded-xl bg-[var(--blink-yellow)]/20 p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-foreground/55">flow</span>
                    <Pipeline />
                  </div>
                  <svg viewBox="0 0 280 60" className="h-14 w-full">
                    {p.nodes.map((label, idx) => {
                      const x = 28 + idx * 56;
                      return (
                        <g key={idx}>
                          {idx > 0 && (
                            <line x1={x - 56 + 16} y1={30} x2={x - 16} y2={30}
                              stroke="oklch(0.55 0.18 145 / 0.55)" strokeWidth="1.5"
                              strokeDasharray="3 3">
                              <animate attributeName="stroke-dashoffset" from="0" to="-12" dur="1s" repeatCount="indefinite" />
                            </line>
                          )}
                          <circle cx={x} cy={30} r="15" fill="oklch(1 0 0 / 0.85)" stroke="oklch(0.55 0.18 145 / 0.7)" />
                          <text x={x} y={33} textAnchor="middle" fontSize="8" fill="oklch(0.3 0.1 145)" fontFamily="monospace" fontWeight="600">{label}</text>
                        </g>
                      );
                    })}
                  </svg>
                </div>

                <div className="mb-5 flex flex-wrap gap-1.5">
                  {p.stack.map((t) => (
                    <span key={t} className="rounded-full bg-[var(--blink-yellow)]/40 px-2.5 py-1 text-[11px] font-semibold text-foreground/75">
                      {t}
                    </span>
                  ))}
                </div>

                <ul className="mb-6 space-y-1.5 text-sm text-foreground/70">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--blink-green)]" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-2">
                  <a href="https://github.com/naveenkumar319" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-lg bg-foreground/5 px-3 py-1.5 text-xs font-semibold transition-colors hover:bg-foreground/10">
                    <Github className="h-3.5 w-3.5" /> Source
                  </a>
                  <a href="https://github.com/naveenkumar319" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-lg bg-[var(--blink-green)] px-3 py-1.5 text-xs font-semibold text-[var(--cloud-white)]">
                    <ExternalLink className="h-3.5 w-3.5" /> View
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
