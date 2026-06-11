import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function Loader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 900);
    return () => clearTimeout(t);
  }, []);
  if (done) return null;
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0, pointerEvents: "none" }}
      transition={{ delay: 0.7, duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-background grid place-items-center"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="h-10 w-10 mx-auto rounded-lg bg-foreground text-background grid place-items-center text-sm font-bold tracking-tighter"
        >
          Tech
        </motion.div>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-px bg-foreground mt-4 mx-auto"
        />
      </div>
    </motion.div>
  );
}
