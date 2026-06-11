import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect } from "react";

export function CursorGlow() {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const sx = useSpring(x, { stiffness: 80, damping: 20, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 80, damping: 20, mass: 0.5 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-0 hidden lg:block"
      style={{
        x: sx,
        y: sy,
        translateX: "-50%",
        translateY: "-50%",
        width: 500,
        height: 500,
      }}
    >
      <div
        className="h-full w-full rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, oklch(0.9 0.005 240 / 0.15), transparent 60%)",
        }}
      />
    </motion.div>
  );
}
