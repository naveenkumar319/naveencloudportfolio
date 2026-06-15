import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return (
    <motion.div
      className="pointer-events-none fixed z-[100] h-[420px] w-[420px] rounded-full opacity-40 mix-blend-multiply"
      style={{
        background:
          "radial-gradient(circle, oklch(0.82 0.14 245 / 0.5), oklch(0.65 0.1 250 / 0.12) 45%, transparent 70%)",
      }}
      animate={{ x: pos.x - 210, y: pos.y - 210 }}
      transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.5 }}
    />
  );
}
