import { useI18n } from "@/lib/i18n";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { LangSwitcher } from "../atoms/lang-switcher";

export function Nav() {
  const { t, lang, setLang } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    // { href: "#work", label: t("nav.work") },
    { href: "#about", label: t("nav.about") },
    { href: "#experience", label: t("nav.experience") },
    { href: "#expertise", label: t("nav.expertise") },
    { href: "#contact", label: t("nav.contact") },
  ];

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div
          className={`flex items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${scrolled ? "glass-strong shadow-elevated" : ""}`}
        >
          <a href="#top" className="flex items-center gap-2 group">
            <div className="h-7 w-7 rounded-md bg-foreground text-background grid place-items-center text-[11px] font-bold tracking-tighter">
              Tech
            </div>
            <span className="text-sm font-medium tracking-tight">
              Jean Paul <span className="text-muted-foreground">Tech Studios</span>
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-1.5 text-[13px] text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <LangSwitcher lang={lang} setLang={setLang} />
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-foreground text-background text-[13px] font-medium px-4 py-2 hover:opacity-90 transition-opacity"
            >
              {t("cta.getInTouch")} <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <button
              className="md:hidden text-muted-foreground p-2"
              onClick={() => setOpen(!open)}
              aria-label="menu"
            >
              <div className="space-y-1">
                <div className="h-px w-5 bg-current" />
                <div className="h-px w-5 bg-current" />
              </div>
            </button>
          </div>
        </div>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 glass-strong rounded-2xl p-4 md:hidden flex flex-col gap-1"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground rounded-lg hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
