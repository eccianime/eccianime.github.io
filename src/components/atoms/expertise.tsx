import { useI18n } from "@/lib/i18n";
import { expertiseAreas, expertiseLabels } from "@/lib/projects";
import {
  Cloud,
  Compass,
  Layers,
  LineChart,
  Radio,
  Server,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { motion } from "motion/react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const iconMap: Record<string, typeof Smartphone> = {
  Smartphone,
  Layers,
  Sparkles,
  LineChart,
  Radio,
  Server,
  Cloud,
  Compass,
};

export function Expertise() {
  const { t, lang } = useI18n();
  return (
    <section id="expertise" className="relative py-32 md:py-40 bg-surface/30">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow={t("expertise.eyebrow")}
          title={t("expertise.title")}
          subtitle={t("expertise.subtitle")}
        />
        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {expertiseAreas.map((a, i) => {
            const Icon = iconMap[a.icon] ?? Sparkles;
            const label = expertiseLabels[a.key];
            return (
              <Reveal key={a.key} delay={(i % 4) * 0.08}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="group h-full rounded-2xl glass p-6 hairline hover:bg-white/[0.04] transition-colors min-h-[180px] flex flex-col"
                >
                  <div className="h-10 w-10 rounded-xl bg-foreground/5 border border-border grid place-items-center mb-5 group-hover:bg-foreground/10 transition-colors">
                    <Icon className="h-5 w-5 text-foreground/80" strokeWidth={1.5} />
                  </div>
                  <div className="text-sm font-medium">{label[lang]}</div>
                  <p className="mt-2 text-[13px] text-muted-foreground leading-relaxed">
                    {label.desc[lang]}
                  </p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
