import { motion } from "framer-motion";
import { Github, Star, GitFork } from "lucide-react";

const repos = [
  { name: "medinfo-app", stars: 4, forks: 1, desc: "Cross-platform medicine information app built with Flutter & Firebase." },
  { name: "sales-analytics-powerbi", stars: 3, forks: 1, desc: "Power BI dashboard with DAX measures for sales & profit insights." },
  { name: "python-practice", stars: 2, forks: 0, desc: "Daily Python exercises — DSA, NumPy, Pandas, Matplotlib." },
];

function ContribGrid() {
  const days = 7 * 26;
  return (
    <div className="grid grid-flow-col grid-rows-7 gap-[3px]">
      {Array.from({ length: days }).map((_, i) => {
        const intensity = Math.random();
        const level = intensity > 0.78 ? 4 : intensity > 0.55 ? 3 : intensity > 0.32 ? 2 : intensity > 0.15 ? 1 : 0;
        const colors = [
          "oklch(0.92 0.04 250)",
          "oklch(0.85 0.1 245)",
          "oklch(0.75 0.12 245)",
          "oklch(0.6 0.14 245)",
          "oklch(0.45 0.14 250)",
        ];
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
          <div className="mb-4 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-mono font-semibold text-[var(--blink-green)]">
            06 — GITHUB
          </div>
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
            Coding in <span className="text-gradient-cyan">public</span>.
          </h2>
          <p className="mt-3 text-sm font-medium text-foreground/65">
            @naveenkumar319 — small experiments and learning projects.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1fr_1.3fr]">
          <div className="glass rounded-3xl p-6 overflow-hidden">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Github className="h-5 w-5" />
                <span className="font-semibold">Contributions</span>
              </div>
              <span className="font-mono text-xs font-semibold text-foreground/55">last 6 months</span>
            </div>
            <div className="overflow-x-auto">
              <ContribGrid />
            </div>
            <div className="mt-4 flex items-center gap-2 text-[10px] font-semibold text-foreground/55">
              <span>less</span>
              {[0, 1, 2, 3, 4].map((l) => {
                const colors = [
                  "oklch(0.92 0.04 250)",
                  "oklch(0.85 0.1 245)",
                  "oklch(0.75 0.12 245)",
                  "oklch(0.6 0.14 245)",
                  "oklch(0.45 0.14 250)",
                ];
                return <span key={l} className="h-2.5 w-2.5 rounded-[2px]" style={{ background: colors[l] }} />;
              })}
              <span>more</span>
            </div>
          </div>

          <div className="space-y-3">
            {repos.map((r, i) => (
              <motion.a
                key={r.name}
                href="https://github.com/naveenkumar319"
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 4 }}
                className="glass group flex items-center justify-between rounded-2xl p-5 transition-colors hover:bg-white/80"
              >
                <div>
                  <div className="font-mono text-sm font-bold text-[var(--blink-green-deep)]">{r.name}</div>
                  <p className="mt-1 text-sm text-foreground/65">{r.desc}</p>
                </div>
                <div className="flex shrink-0 items-center gap-4 text-xs font-semibold text-foreground/60">
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
