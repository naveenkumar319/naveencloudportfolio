import { motion } from "framer-motion";
import { Cloud, Code2, Rocket, Shield } from "lucide-react";

const cards = [
  { icon: Cloud, title: "Cloud Native", desc: "Designing scalable AWS architectures from VPC to multi-region failover." },
  { icon: Code2, title: "Infrastructure as Code", desc: "Terraform, CloudFormation and CDK for repeatable, reviewable infra." },
  { icon: Rocket, title: "CI/CD Automation", desc: "Zero-downtime pipelines with GitHub Actions, ArgoCD and blue/green rollouts." },
  { icon: Shield, title: "Security First", desc: "Least-privilege IAM, KMS, encryption at rest and in transit, by default." },
];

export function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-2xl"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-mono text-[var(--cyan-glow)]">
            01 — ABOUT
          </div>
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
            Building infrastructure that
            <span className="text-gradient-cyan"> doesn't break at 3 a.m.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            5+ years engineering production cloud platforms for fintech and SaaS teams. I treat infrastructure as a product —
            observable, documented and continuously delivered.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass group relative overflow-hidden rounded-3xl p-6"
            >
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[var(--cyan-glow)] opacity-0 blur-3xl transition-opacity group-hover:opacity-30" />
              <div className="relative">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/5">
                  <c.icon className="h-5 w-5 text-[var(--cyan-glow)]" strokeWidth={1.5} />
                </div>
                <h3 className="mb-2 font-semibold">{c.title}</h3>
                <p className="text-sm text-muted-foreground">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
