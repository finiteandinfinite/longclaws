import Link from "next/link";
import { type Locale } from "@/types";
import { getMessages } from "@/lib/i18n";

export default function HeroSection({ locale }: { locale: Locale }) {
  const t = getMessages(locale);

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl px-4 text-center">
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-6xl">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {t.hero.title}
          </span>
        </h1>
        <p className="mb-10 text-lg text-muted-foreground md:text-xl">
          {t.hero.subtitle}
        </p>
        <Link
          href={`/${locale}/posts`}
          className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 font-medium text-primary-foreground transition hover:opacity-90"
        >
          {t.hero.cta}
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}
