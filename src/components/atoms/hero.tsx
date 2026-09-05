import heroBg from "@/assets/hero-bg.jpg";
import portrait from "@/assets/portrait.png";
import { useI18n } from "@/lib/i18n";
import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { AnimatedHeadline } from "./animated-headline";
import { MagneticButton } from "./magnetic-button";
import { Metric } from "./metric";

export function Hero() {
  const { t } = useI18n();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yPortrait = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="top"
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-20"
    >
      {/* BG */}
      <motion.div aria-hidden style={{ y: yBg }} className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt=""
          className="h-full w-full object-cover opacity-50"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background" />
      </motion.div>

      {/* Floating orbs */}
      <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute top-1/4 -left-20 h-72 w-72 rounded-full blur-3xl opacity-30 animate-float-slow"
          style={{
            background: "radial-gradient(circle, oklch(0.8 0.005 240 / 0.4), transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-1/4 -right-20 h-96 w-96 rounded-full blur-3xl opacity-20 animate-float-slow"
          style={{
            background: "radial-gradient(circle, oklch(0.7 0.005 240 / 0.4), transparent 70%)",
            animationDelay: "3s",
          }}
        />
      </div>

      <motion.div
        style={{ opacity }}
        className="mx-auto max-w-7xl px-6 grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-center w-full"
      >
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-[12px] text-muted-foreground mb-8"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 animate-ping opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            {t("hero.eyebrow")}
          </motion.div>

          <h1 className="text-[clamp(2.5rem,7vw,5.5rem)] font-semibold tracking-[-0.04em] leading-[0.95]">
            <AnimatedHeadline text={t("hero.title1")} />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-8 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            {/* <MagneticButton
              href="#work"
              className="btn-magnetic inline-flex items-center gap-2 rounded-full bg-foreground text-background text-sm font-medium px-6 py-3.5 hover:opacity-90 transition-opacity"
            >
              {t("cta.viewProjects")} <ArrowUpRight className="h-4 w-4" />
            </MagneticButton> */}
            <MagneticButton
              href="#contact"
              className="btn-magnetic inline-flex items-center gap-2 rounded-full bg-foreground text-background text-sm font-medium px-6 py-3.5 hover:opacity-90 transition-opacity"
            >
              {t("cta.contactMe")}
            </MagneticButton>
          </motion.div>

          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 max-w-2xl"
          >
            {[
              { value: "7+", key: "hero.metric.years" },
              { value: "10+", key: "hero.metric.apps" },
              { value: "5", key: "hero.metric.industries" },
              { value: "5+", key: "hero.metric.intl" },
            ].map((m, i) => (
              <Metric key={m.key} value={m.value} label={t(m.key)} delay={1.4 + i * 0.1} />
            ))}
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.div style={{ y: yPortrait }} className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[4/5] rounded-3xl overflow-hidden hairline shadow-elevated"
          >
            <img
              src={portrait}
              alt="Portrait"
              className="h-full w-full object-cover"
              width={896}
              height={1152}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </motion.div>
          <div
            aria-hidden
            className="absolute -inset-4 -z-10 rounded-3xl blur-2xl opacity-40 animate-pulse-glow"
            style={{
              background: "linear-gradient(135deg, oklch(0.85 0.005 240 / 0.3), transparent 60%)",
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
