import { motion } from "framer-motion";
import { Github, ExternalLink, GitBranch } from "lucide-react";

const projects = [
  {
    name: "MedInfo App",
    tag: "Healthcare · Serverless",
    problem: "Doctors needed a HIPAA-aligned platform to surface drug interactions in under 200ms.",
    stack: ["Lambda", "DynamoDB", "API Gateway", "Cognito", "CloudFront"],
    features: ["Realtime drug lookup", "Role-based access", "Audit logs", "Multi-AZ failover"],
  },
  {
    name: "Sales Analytics Dashboard",
    tag: "Data · BI",
    problem: "A 50-person sales team had no single source of truth for pipeline forecasting.",
    stack: ["Glue", "Redshift", "QuickSight", "S3", "Terraform"],
    features: ["ETL pipeline", "Real-time KPIs", "Forecast modelling", "SSO"],
  },
];

function Pipeline() {
  return (
    <div className="flex items-center gap-1.5 font-mono text-[10px]">
      {["build", "test", "deploy"].map((s, i) => (
        <motion.div
          key={s}
          initial={{ opacity: 0.3 }}
          whileInView={{ opacity: [0.3, 1, 0.6] }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.4, duration: 1 }}
          className="flex items-center gap-1 rounded-full bg-green-500/10 px-2 py-0.5 text-green-400"
        >
          <span className="h-1 w-1 rounded-full bg-green-400" />
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
          <div className="mb-4 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-mono text-[var(--cyan-glow)]">
            03 — PROJECTS
          </div>
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
            Enterprise <span className="text-gradient-cyan">cloud solutions</span>.
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
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--cyan-glow)]/0 to-[var(--aws-orange)]/0 opacity-0 transition-opacity group-hover:opacity-10" />

              <div className="relative">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <div className="font-mono text-xs text-[var(--cyan-glow)]">{p.tag}</div>
                    <h3 className="mt-1 font-display text-2xl font-bold">{p.name}</h3>
                  </div>
                  <GitBranch className="h-5 w-5 text-muted-foreground" />
                </div>

                <p className="text-sm text-muted-foreground">{p.problem}</p>

                {/* Architecture diagram mini */}
                <div className="my-5 rounded-xl bg-white/[0.03] p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">architecture</span>
                    <Pipeline />
                  </div>
                  <svg viewBox="0 0 280 60" className="h-14 w-full">
                    {["User", "CDN", "API", "λ", "DB"].map((label, idx) => {
                      const x = 20 + idx * 60;
                      return (
                        <g key={idx}>
                          {idx > 0 && (
                            <line x1={x - 60 + 14} y1={30} x2={x - 14} y2={30}
                              stroke="oklch(0.82 0.18 210 / 0.5)" strokeWidth="1.5"
                              strokeDasharray="3 3">
                              <animate attributeName="stroke-dashoffset" from="0" to="-12" dur="1s" repeatCount="indefinite" />
                            </line>
                          )}
                          <circle cx={x} cy={30} r="13" fill="oklch(0.2 0.04 260)" stroke="oklch(0.82 0.18 210 / 0.6)" />
                          <text x={x} y={34} textAnchor="middle" fontSize="9" fill="oklch(0.82 0.18 210)" fontFamily="monospace">{label}</text>
                        </g>
                      );
                    })}
                  </svg>
                </div>

                <div className="mb-5 flex flex-wrap gap-1.5">
                  {p.stack.map((t) => (
                    <span key={t} className="rounded-full bg-white/5 px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>

                <ul className="mb-6 space-y-1.5 text-sm text-muted-foreground">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-[var(--aws-orange)]" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-2">
                  <a href="#" className="inline-flex items-center gap-1.5 rounded-lg bg-white/5 px-3 py-1.5 text-xs font-medium transition-colors hover:bg-white/10">
                    <Github className="h-3.5 w-3.5" /> Source
                  </a>
                  <a href="#" className="inline-flex items-center gap-1.5 rounded-lg bg-[var(--aws-orange)] px-3 py-1.5 text-xs font-semibold text-[var(--deep-navy)]">
                    <ExternalLink className="h-3.5 w-3.5" /> Live Demo
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
