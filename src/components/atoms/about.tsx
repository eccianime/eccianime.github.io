import { useI18n } from "@/lib/i18n";
import { stack } from "@/lib/projects";
import { Compass, Layers, Smartphone, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function About() {
  const { t } = useI18n();
  const pillars = [
    { key: "mobile", icon: Smartphone },
    { key: "product", icon: Compass },
    { key: "ai", icon: Sparkles },
    { key: "fullstack", icon: Layers },
  ];
  return (
    <section id="about" className="relative py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow={t("about.eyebrow")}
          title={t("about.title")}
          subtitle={t("about.body")}
        />

        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((p, i) => (
            <Reveal key={p.key} delay={i * 0.08}>
              <div className="group relative h-full rounded-2xl glass p-6 hairline hover:bg-white/[0.04] transition-colors">
                <p.icon className="h-5 w-5 text-foreground/80 mb-5" strokeWidth={1.5} />
                <div className="text-sm font-medium">{t(`about.pillar.${p.key}.title`)}</div>
                <p className="mt-2 text-[13px] text-muted-foreground leading-relaxed">
                  {t(`about.pillar.${p.key}.desc`)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Floating stack badges */}
        <Reveal delay={0.2}>
          <div className="mt-20">
            <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-6">
              {t("about.stack")}
            </div>
            <div className="flex flex-wrap gap-2.5">
              {stack.map((s, i) => (
                <motion.div
                  key={s}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04, duration: 0.5 }}
                  whileHover={{ y: -4 }}
                  className="rounded-full glass px-4 py-2 text-[13px] hairline cursor-default"
                >
                  {s}
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
