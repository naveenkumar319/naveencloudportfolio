import { motion } from "framer-motion";
import { Github, Star, GitFork } from "lucide-react";

const repos = [
  { name: "terraform-aws-eks-blueprints", stars: 142, forks: 28, desc: "Production-ready EKS blueprints with GitOps & observability." },
  { name: "serverless-data-lake", stars: 89, forks: 14, desc: "Event-driven data lake on S3, Glue, Athena & QuickSight." },
  { name: "k8s-cost-optimizer", stars: 67, forks: 9, desc: "Right-sizing controller for Kubernetes workloads on EKS." },
];

function ContribGrid() {
  const days = 7 * 26;
  return (
    <div className="grid grid-flow-col grid-rows-7 gap-[3px]">
      {Array.from({ length: days }).map((_, i) => {
        const intensity = Math.random();
        const level = intensity > 0.75 ? 4 : intensity > 0.5 ? 3 : intensity > 0.3 ? 2 : intensity > 0.15 ? 1 : 0;
        const colors = ["oklch(0.22 0.04 260)", "oklch(0.35 0.1 210)", "oklch(0.5 0.14 210)", "oklch(0.65 0.17 210)", "oklch(0.82 0.18 210)"];
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.003, duration: 0.3 }}
            className="h-2.5 w-2.5 rounded-[2px]"
            style={{ background: colors[level] }}
          />
        );
      })}
    </div>
  );
}

export function GitHub() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-mono text-[var(--cyan-glow)]">
            06 — OPEN SOURCE
          </div>
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
            Shipping in <span className="text-gradient-cyan">public</span>.
          </h2>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1fr_1.3fr]">
          <div className="glass rounded-3xl p-6 overflow-hidden">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Github className="h-5 w-5" />
                <span className="font-semibold">Contributions</span>
              </div>
              <span className="font-mono text-xs text-muted-foreground">last 6 months</span>
            </div>
            <div className="overflow-x-auto">
              <ContribGrid />
            </div>
            <div className="mt-4 flex items-center gap-2 text-[10px] text-muted-foreground">
              <span>less</span>
              {[0, 1, 2, 3, 4].map((l) => {
                const colors = ["oklch(0.22 0.04 260)", "oklch(0.35 0.1 210)", "oklch(0.5 0.14 210)", "oklch(0.65 0.17 210)", "oklch(0.82 0.18 210)"];
                return <span key={l} className="h-2.5 w-2.5 rounded-[2px]" style={{ background: colors[l] }} />;
              })}
              <span>more</span>
            </div>
          </div>

          <div className="space-y-3">
            {repos.map((r, i) => (
              <motion.a
                key={r.name}
                href="#"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 4 }}
                className="glass group flex items-center justify-between rounded-2xl p-5 transition-colors hover:bg-white/[0.07]"
              >
                <div>
                  <div className="font-mono text-sm font-semibold text-[var(--cyan-glow)]">{r.name}</div>
                  <p className="mt-1 text-sm text-muted-foreground">{r.desc}</p>
                </div>
                <div className="flex shrink-0 items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Star className="h-3.5 w-3.5" /> {r.stars}</span>
                  <span className="flex items-center gap-1"><GitFork className="h-3.5 w-3.5" /> {r.forks}</span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
