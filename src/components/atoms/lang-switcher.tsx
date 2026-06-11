import { type Lang } from "@/lib/i18n";
import { Globe } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export function LangSwitcher({
  lang,
  setLang,
}: Readonly<{ lang: Lang; setLang: (l: Lang) => void }>) {
  const [open, setOpen] = useState(false);
  const langs: { code: Lang; label: string }[] = [
    { code: "en", label: "EN" },
    { code: "es", label: "ES" },
    { code: "pt", label: "PT" },
  ];
  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 rounded-full glass px-3 py-2 text-[12px] font-medium hover:bg-white/10 transition-colors"
      >
        <Globe className="h-3.5 w-3.5" />
        {lang.toUpperCase()}
      </button>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -4, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="absolute right-0 mt-2 glass-strong rounded-xl overflow-hidden min-w-[80px]"
        >
          {langs.map((l) => (
            <button
              key={l.code}
              onClick={() => {
                setLang(l.code);
                setOpen(false);
              }}
              className={`block w-full px-4 py-2 text-left text-[12px] hover:bg-white/10 transition-colors ${lang === l.code ? "text-foreground" : "text-muted-foreground"}`}
            >
              {l.label}
            </button>
          ))}
        </motion.div>
      )}
    </div>
  );
}
