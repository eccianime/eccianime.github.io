import { useI18n } from "@/lib/i18n";
import { experience } from "@/lib/projects";
import { motion } from "motion/react";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

export function Experience() {
  const { t, lang } = useI18n();
  return (
    <section id="experience" className="relative py-32 md:py-40 bg-surface/30">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow={t("experience.eyebrow")}
          title={t("experience.title")}
          subtitle={t("experience.subtitle")}
        />

        <div className="mt-20 relative">
          {/* line */}
          <div aria-hidden className="absolute left-3 md:left-1/2 top-2 bottom-2 w-px bg-border" />
          <motion.div
            aria-hidden
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-3 md:left-1/2 top-2 bottom-2 w-px origin-top"
            style={{ background: "linear-gradient(to bottom, var(--silver), transparent)" }}
          />

          <div className="space-y-12">
            {experience.map((e, i) => (
              <Reveal key={e.company} delay={i * 0.05}>
                <div
                  className={`relative grid md:grid-cols-2 gap-6 md:gap-12 items-start ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}
                >
                  {/* dot */}
                  <div
                    aria-hidden
                    className="absolute left-3 md:left-1/2 top-1.5 -translate-x-1/2 h-3 w-3 rounded-full bg-foreground ring-4 ring-background"
                  />
                  <div
                    className={`pl-10 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12 md:[direction:ltr]"}`}
                  >
                    <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                      {e.period}
                    </div>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight">{e.company}</h3>
                    <div className="mt-1 text-sm text-muted-foreground">{e.role}</div>
                  </div>
                  <div
                    className={`pl-10 md:pl-0 ${i % 2 === 0 ? "md:pl-12" : "md:pr-12 md:text-right md:[direction:ltr]"}`}
                  >
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
                      {e.description[lang]}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
