import { useI18n } from "@/lib/i18n";
import { ArrowUpRight, Github, Linkedin, MessageCircle } from "lucide-react";
import { useState } from "react";
import { MagneticButton } from "./magnetic-button";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Contact() {
  const { t } = useI18n();
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative py-32 md:py-40 bg-surface/30">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow={t("contact.eyebrow")}
          title={t("contact.title")}
          subtitle={t("contact.subtitle")}
        />

        <div className="mt-16 grid lg:grid-cols-[1.2fr_1fr] gap-10">
          {/* <Reveal>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="rounded-3xl glass hairline p-8 md:p-10 space-y-5"
            >
              <div>
                <label className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {t("contact.name")}
                </label>
                <input
                  required
                  type="text"
                  className="mt-2 w-full bg-transparent border-b border-border focus:border-foreground outline-none py-2.5 text-sm transition-colors"
                />
              </div>
              <div>
                <label className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {t("contact.email")}
                </label>
                <input
                  required
                  type="email"
                  className="mt-2 w-full bg-transparent border-b border-border focus:border-foreground outline-none py-2.5 text-sm transition-colors"
                />
              </div>
              <div>
                <label className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {t("contact.message")}
                </label>
                <textarea
                  required
                  rows={4}
                  className="mt-2 w-full bg-transparent border-b border-border focus:border-foreground outline-none py-2.5 text-sm transition-colors resize-none"
                />
              </div>
              <MagneticButton className="btn-magnetic mt-2 inline-flex items-center gap-2 rounded-full bg-foreground text-background text-sm font-medium px-6 py-3 hover:opacity-90 transition-opacity">
                {t("contact.send")} <ArrowUpRight className="h-4 w-4" />
              </MagneticButton>
              {sent && <p className="text-sm text-emerald-400/90 mt-2">{t("contact.sent")}</p>}
            </form>
          </Reveal> */}

          <Reveal delay={0.1}>
            <div className="space-y-3">
              <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-2">
                {t("contact.or")}
              </div>
              {[
                {
                  icon: MessageCircle,
                  label: "Whatsapp",
                  href: "https://wa.me/5541987623548",
                },
                {
                  icon: Linkedin,
                  label: "in/jeanpaul-rojasv",
                  href: "https://linkedin.com/in/jeanpaul-rojasv",
                },
                {
                  icon: Github,
                  label: "/eccianime",
                  href: "https://github.com/eccianime",
                },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  className="group flex items-center justify-between rounded-2xl glass hairline px-5 py-4 hover:bg-white/[0.04] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <c.icon
                      className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors"
                      strokeWidth={1.5}
                    />
                    <span className="text-sm">{c.label}</span>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
