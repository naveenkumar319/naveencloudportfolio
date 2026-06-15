import { motion } from "framer-motion";

export function CloudBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Warm yellow / green ambient orbs */}
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[oklch(0.9_0.2_92/0.55)] blur-3xl animate-pulse-glow" />
      <div className="absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full bg-[oklch(0.7_0.18_145/0.25)] blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      <div className="absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-[oklch(0.88_0.18_90/0.4)] blur-3xl animate-pulse-glow" style={{ animationDelay: "3s" }} />

      {/* Drifting soft cloud shapes */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute opacity-[0.35]"
          style={{ top: `${8 + i * 18}%`, left: 0 }}
          animate={{ x: ["-15%", "115%"] }}
          transition={{ duration: 70 + i * 20, repeat: Infinity, ease: "linear", delay: i * -12 }}
        >
          <svg width="240" height="90" viewBox="0 0 220 80" fill="white">
            <ellipse cx="60" cy="50" rx="55" ry="28" />
            <ellipse cx="110" cy="40" rx="50" ry="32" />
            <ellipse cx="160" cy="50" rx="45" ry="26" />
          </svg>
        </motion.div>
      ))}

      {/* Floating yellow specks (like Blinkit "delivery" dots) */}
      {[...Array(28)].map((_, i) => (
        <motion.div
          key={`p${i}`}
          className="absolute h-1.5 w-1.5 rounded-full bg-[oklch(0.7_0.2_85)]"
          style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.85, 0.2] }}
          transition={{ duration: 3 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 5 }}
        />
      ))}

      {/* Subtle dotted grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(oklch(0.3 0.1 145) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
    </div>
  );
}
