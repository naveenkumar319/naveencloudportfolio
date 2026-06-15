import { motion } from "framer-motion";

export function CloudBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Animated gradient sky orbs */}
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[oklch(0.4_0.2_240/0.3)] blur-3xl animate-pulse-glow" />
      <div className="absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full bg-[oklch(0.5_0.2_30/0.2)] blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      <div className="absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-[oklch(0.45_0.18_200/0.25)] blur-3xl animate-pulse-glow" style={{ animationDelay: "3s" }} />

      {/* Drifting cloud shapes */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute opacity-[0.06]"
          style={{ top: `${10 + i * 18}%`, left: 0 }}
          animate={{ x: ["-15%", "115%"] }}
          transition={{ duration: 60 + i * 20, repeat: Infinity, ease: "linear", delay: i * -10 }}
        >
          <svg width="220" height="80" viewBox="0 0 220 80" fill="white">
            <ellipse cx="60" cy="50" rx="55" ry="28" />
            <ellipse cx="110" cy="40" rx="50" ry="32" />
            <ellipse cx="160" cy="50" rx="45" ry="26" />
          </svg>
        </motion.div>
      ))}

      {/* Floating particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={`p${i}`}
          className="absolute h-1 w-1 rounded-full bg-[var(--cyan-glow)]"
          style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 3 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 5 }}
        />
      ))}

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.8 0.18 210) 1px, transparent 1px), linear-gradient(90deg, oklch(0.8 0.18 210) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}
