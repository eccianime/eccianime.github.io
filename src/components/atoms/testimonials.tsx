import { useI18n } from "@/lib/i18n";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Testimonials() {
  const { t } = useI18n();
  return (
    <section className="relative py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow={t("testimonials.eyebrow")} title={t("testimonials.title")} />
        <div className="mt-16 grid md:grid-cols-3 gap-4">
          {[0, 1, 2].map((i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="rounded-2xl glass hairline p-8 h-full">
                <div className="text-3xl text-muted-foreground/40 font-serif">"</div>
                <div className="space-y-2 mt-2">
                  <div className="h-2 rounded-full bg-white/5 w-full" />
                  <div className="h-2 rounded-full bg-white/5 w-5/6" />
                  <div className="h-2 rounded-full bg-white/5 w-3/4" />
                </div>
                <div className="mt-8 flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-white/5" />
                  <div className="space-y-1.5">
                    <div className="h-2 rounded-full bg-white/5 w-20" />
                    <div className="h-1.5 rounded-full bg-white/5 w-28" />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.3}>
          <p className="mt-8 text-center text-xs text-muted-foreground">
            {t("testimonials.placeholder")}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
