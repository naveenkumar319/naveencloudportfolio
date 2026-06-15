import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.floor(v).toLocaleString());

  useEffect(() => {
    if (inView) animate(mv, to, { duration: 2, ease: "easeOut" });
  }, [inView, mv, to]);

  useEffect(() => {
    return rounded.on("change", (v) => {
      if (ref.current) ref.current.textContent = v + suffix;
    });
  }, [rounded, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

const stats = [
  { v: 50, s: "+", l: "Projects Completed" },
  { v: 12, s: "", l: "Certifications" },
  { v: 32, s: "", l: "Technologies" },
  { v: 1240, s: "+", l: "GitHub Contributions" },
  { v: 380, s: "+", l: "Cloud Deployments" },
];

export function Stats() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="glass-strong relative overflow-hidden rounded-3xl p-8 md:p-12">
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[var(--aws-orange)] opacity-20 blur-3xl" />
          <div className="absolute -left-20 -bottom-20 h-60 w-60 rounded-full bg-[var(--cyan-glow)] opacity-20 blur-3xl" />
          <div className="relative grid gap-8 md:grid-cols-5">
            {stats.map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center md:text-left"
              >
                <div className="font-display text-4xl font-bold text-gradient-cyan md:text-5xl">
                  <Counter to={s.v} suffix={s.s} />
                </div>
                <div className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
