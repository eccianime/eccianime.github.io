import { motion } from "motion/react";

export function AnimatedHeadline({ text }: Readonly<{ text: string }>) {
  const words = text.split(" ");
  return (
    <span className="text-gradient">
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom mr-[0.25em] last:mr-0">
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.9, delay: 0.4 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            {w}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
