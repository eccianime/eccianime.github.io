import { motion } from "motion/react";

export function Metric({
  value,
  label,
  delay,
}: Readonly<{ value: string; label: string; delay: number }>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
    >
      <div className="text-3xl md:text-4xl font-semibold tracking-tight text-gradient">{value}</div>
      <div className="mt-1 text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
        {label}
      </div>
    </motion.div>
  );
}
