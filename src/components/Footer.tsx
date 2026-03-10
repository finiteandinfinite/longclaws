import { type Locale } from "@/types";
import { getMessages } from "@/lib/i18n";

export default function Footer({ locale }: { locale: Locale }) {
  const t = getMessages(locale);

  return (
    <footer className="border-t border-border bg-muted/50">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <span className="text-lg">🐾</span>
            <span className="font-semibold">{t.siteName}</span>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {t.siteName}. {t.footer.rights}.
          </p>
          <p className="text-xs text-muted-foreground">{t.footer.poweredBy}</p>
        </div>
      </div>
    </footer>
  );
}
