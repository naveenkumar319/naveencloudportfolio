import { motion } from "framer-motion";
import { Linkedin, Github, Mail, Phone, Send, MapPin } from "lucide-react";
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
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-mono font-semibold text-[var(--blink-green)]">
            07 — CONTACT
          </div>
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-6xl">
            Let's <span className="text-gradient-orange">connect</span>.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-foreground/65">
            Open to internships, fresher cloud/data roles and collaborative student projects.
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
                { icon: Mail, label: "naveenkumarakiti319@gmail.com", href: "mailto:naveenkumarakiti319@gmail.com" },
                { icon: Phone, label: "+91 97031 15440", href: "tel:+919703115440" },
                { icon: Linkedin, label: "linkedin.com/in/naveenkumar319", href: "https://www.linkedin.com/in/naveenkumar319" },
                { icon: Github, label: "github.com/naveenkumar319", href: "https://github.com/naveenkumar319" },
                { icon: MapPin, label: "Guntur, Andhra Pradesh, India", href: "#" },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group flex items-center gap-3 text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--blink-yellow)]/40 transition-colors group-hover:bg-[var(--blink-green)]/20">
                    <c.icon className="h-4 w-4 text-[var(--blink-green-deep)]" />
                  </div>
                  <span className="truncate">{c.label}</span>
                </a>
              ))}
            </div>
            <div className="mt-8 font-mono text-xs font-semibold text-foreground/55">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--blink-green)]" />
                Usually replies the same day · IST
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
                <input required placeholder="Name" className="w-full rounded-xl bg-white/70 px-4 py-3 text-sm outline-none ring-[var(--blink-green)] transition-all placeholder:text-foreground/40 focus:ring-2" />
                <input required type="email" placeholder="Email" className="w-full rounded-xl bg-white/70 px-4 py-3 text-sm outline-none ring-[var(--blink-green)] transition-all placeholder:text-foreground/40 focus:ring-2" />
              </div>
              <input placeholder="Subject" className="w-full rounded-xl bg-white/70 px-4 py-3 text-sm outline-none ring-[var(--blink-green)] transition-all placeholder:text-foreground/40 focus:ring-2" />
              <textarea required rows={5} placeholder="What would you like to talk about?" className="w-full resize-none rounded-xl bg-white/70 px-4 py-3 text-sm outline-none ring-[var(--blink-green)] transition-all placeholder:text-foreground/40 focus:ring-2" />
              <button
                type="submit"
                className="group relative w-full overflow-hidden rounded-xl bg-[var(--blink-green)] px-6 py-3 text-sm font-bold text-[var(--cloud-white)] transition-all hover:glow-cyan"
              >
                <motion.span
                  key={sent ? "sent" : "send"}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="flex items-center justify-center gap-2"
                >
                  {sent ? (
                    <>Thanks — I'll get back to you soon ✨</>
                  ) : (
                    <>
                      Send Message
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
