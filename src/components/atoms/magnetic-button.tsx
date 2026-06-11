import { motion, useMotionValue, useSpring } from "motion/react";
import { useRef, type ReactNode } from "react";

export function MagneticButton({
  children,
  className = "",
  onClick,
  href,
}: Readonly<{
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
}>) {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 150, damping: 15 });
  const sy = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * 0.25);
    y.set((e.clientY - r.top - r.height / 2) * 0.25);
  };
  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Comp = href ? motion.a : motion.button;
  return (
    <Comp
      ref={ref as never}
      href={href}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: sx, y: sy }}
      className={className}
    >
      {children}
    </Comp>
  );
}
