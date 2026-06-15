import { motion } from "framer-motion";

const skills = [
  { name: "EC2", cat: "Compute", pct: 95 },
  { name: "S3", cat: "Storage", pct: 98 },
  { name: "Lambda", cat: "Serverless", pct: 92 },
  { name: "VPC", cat: "Network", pct: 90 },
  { name: "IAM", cat: "Security", pct: 93 },
  { name: "Route53", cat: "DNS", pct: 88 },
  { name: "CloudFront", cat: "CDN", pct: 85 },
  { name: "ECS", cat: "Containers", pct: 90 },
  { name: "EKS", cat: "Kubernetes", pct: 87 },
  { name: "RDS", cat: "Database", pct: 91 },
  { name: "DynamoDB", cat: "NoSQL", pct: 84 },
  { name: "CloudWatch", cat: "Observability", pct: 89 },
  { name: "Terraform", cat: "IaC", pct: 94 },
  { name: "Docker", cat: "Container", pct: 95 },
  { name: "Kubernetes", cat: "Orchestration", pct: 88 },
  { name: "Linux", cat: "OS", pct: 92 },
  { name: "CI/CD", cat: "Pipeline", pct: 93 },
  { name: "GitHub Actions", cat: "Automation", pct: 91 },
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
            <div className="mb-4 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-mono text-[var(--cyan-glow)]">
              02 — SKILLS
            </div>
            <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
              The toolkit, <span className="text-gradient-orange">live</span>.
            </h2>
          </div>
          <div className="hidden items-center gap-2 font-mono text-xs text-muted-foreground md:flex">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
            All systems operational
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
              <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-[var(--cyan-glow)] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold">{s.name}</div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{s.cat}</div>
                </div>
                <div className="font-mono text-sm font-bold text-gradient-cyan">{s.pct}%</div>
              </div>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.pct}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.2 + i * 0.03, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-[var(--cyan-glow)] to-[var(--aws-orange)]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
