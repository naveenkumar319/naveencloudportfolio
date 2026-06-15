import { motion } from "framer-motion";
import { Cloud, Code2, GraduationCap, Lightbulb } from "lucide-react";

const cards = [
  { icon: Cloud, title: "Cloud Curious", desc: "Learning AWS fundamentals — EC2, S3, IAM and cloud security basics." },
  { icon: Code2, title: "Builder", desc: "Comfortable in Python, Java, C/C++ — I learn fastest by shipping small projects." },
  { icon: GraduationCap, title: "Data Science Student", desc: "B.Tech CSE (DS) at KKR & KSR — CGPA 8.3/10, currently in 3rd year." },
  { icon: Lightbulb, title: "Quick Learner", desc: "Microsoft Learnathon '25, GenAI literacy, ML onramp — always picking up the next thing." },
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
          <div className="mb-4 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-mono font-semibold text-[var(--blink-green)]">
            01 — ABOUT
          </div>
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
            Fresher with a
            <span className="text-gradient-cyan"> builder's mindset.</span>
          </h2>
          <p className="mt-6 text-lg text-foreground/70">
            I'm a Computer Science (Data Science) undergrad from Guntur, India. I enjoy turning ideas
            into working software — whether that's a Flutter mobile app, a Power BI dashboard, or
            experimenting with cloud services on AWS. Eager to start my career somewhere I can keep learning fast.
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
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[var(--blink-yellow)] opacity-0 blur-3xl transition-opacity group-hover:opacity-80" />
              <div className="relative">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--blink-yellow)]/40">
                  <c.icon className="h-5 w-5 text-[var(--blink-green)]" strokeWidth={1.8} />
                </div>
                <h3 className="mb-2 font-semibold">{c.title}</h3>
                <p className="text-sm text-foreground/65">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
