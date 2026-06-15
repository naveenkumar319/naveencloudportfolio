import { motion } from "framer-motion";
import { Linkedin, Github, Mail, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative py-32">
      <div className="mx-auto max-w-5xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-mono text-[var(--cyan-glow)]">
            07 — CONTACT
          </div>
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-6xl">
            Let's deploy <span className="text-gradient-orange">something great</span>.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Open to senior cloud / DevOps roles, consulting and infrastructure audits.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-[1fr_1.3fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass flex flex-col justify-between rounded-3xl p-7"
          >
            <div className="space-y-4">
              {[
                { icon: Mail, label: "alex@cloud.dev", href: "mailto:alex@cloud.dev" },
                { icon: Linkedin, label: "linkedin.com/in/alexcloud", href: "#" },
                { icon: Github, label: "github.com/alexcloud", href: "#" },
              ].map((c) => (
                <a key={c.label} href={c.href} className="group flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 transition-colors group-hover:bg-[var(--cyan-glow)]/10">
                    <c.icon className="h-4 w-4" />
                  </div>
                  {c.label}
                </a>
              ))}
            </div>
            <div className="mt-8 font-mono text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                Replying within 24h · UTC+0
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="glass relative overflow-hidden rounded-3xl p-7"
          >
            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input required placeholder="Name" className="w-full rounded-xl bg-white/5 px-4 py-3 text-sm outline-none ring-[var(--cyan-glow)] transition-all placeholder:text-muted-foreground focus:ring-2" />
                <input required type="email" placeholder="Email" className="w-full rounded-xl bg-white/5 px-4 py-3 text-sm outline-none ring-[var(--cyan-glow)] transition-all placeholder:text-muted-foreground focus:ring-2" />
              </div>
              <input placeholder="Subject" className="w-full rounded-xl bg-white/5 px-4 py-3 text-sm outline-none ring-[var(--cyan-glow)] transition-all placeholder:text-muted-foreground focus:ring-2" />
              <textarea required rows={5} placeholder="Tell me about your project…" className="w-full resize-none rounded-xl bg-white/5 px-4 py-3 text-sm outline-none ring-[var(--cyan-glow)] transition-all placeholder:text-muted-foreground focus:ring-2" />
              <button
                type="submit"
                className="group relative w-full overflow-hidden rounded-xl bg-[var(--aws-orange)] px-6 py-3 text-sm font-semibold text-[var(--deep-navy)] transition-all hover:glow-orange"
              >
                <motion.span
                  key={sent ? "sent" : "send"}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="flex items-center justify-center gap-2"
                >
                  {sent ? (
                    <>Message delivered to the cloud ☁️</>
                  ) : (
                    <>
                      Send to Cloud
                      <motion.span
                        animate={{ x: [0, 4, 0], y: [0, -2, 0] }}
                        transition={{ duration: 1.6, repeat: Infinity }}
                      >
                        <Send className="h-4 w-4" />
                      </motion.span>
                    </>
                  )}
                </motion.span>
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
