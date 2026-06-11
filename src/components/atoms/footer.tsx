import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-7 w-7 rounded-md bg-foreground text-background grid place-items-center text-[11px] font-bold tracking-tighter">
            JPIRV
          </div>
          <div>
            <div className="text-sm font-medium">Jean Paul Ivan Rojas Veliz</div>
            <div className="text-xs text-muted-foreground">{t("footer.tagline")}</div>
          </div>
        </div>
        <div className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} · {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
}
