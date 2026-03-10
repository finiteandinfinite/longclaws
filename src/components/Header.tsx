"use client";

import Link from "next/link";
import { useState } from "react";
import { type Locale } from "@/types";
import { getMessages } from "@/lib/i18n";

export default function Header({ locale }: { locale: Locale }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const t = getMessages(locale);
  const otherLocale = locale === "zh" ? "en" : "zh";

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href={`/${locale}`} className="flex items-center gap-2">
          <span className="text-2xl font-bold text-primary">🐾</span>
          <span className="text-xl font-bold">{t.siteName}</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href={`/${locale}`}
            className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
          >
            {t.nav.home}
          </Link>
          <Link
            href={`/${locale}/posts`}
            className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
          >
            {t.nav.posts}
          </Link>
          <Link
            href={`/${locale}/about`}
            className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
          >
            {t.nav.about}
          </Link>
          <Link
            href={`/${otherLocale}`}
            className="rounded-md border border-border px-3 py-1 text-sm text-muted-foreground transition hover:bg-muted"
          >
            {otherLocale === "zh" ? "中文" : "EN"}
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="border-t border-border px-4 pb-4 md:hidden">
          <div className="flex flex-col gap-3 pt-3">
            <Link
              href={`/${locale}`}
              className="text-sm font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {t.nav.home}
            </Link>
            <Link
              href={`/${locale}/posts`}
              className="text-sm font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {t.nav.posts}
            </Link>
            <Link
              href={`/${locale}/about`}
              className="text-sm font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {t.nav.about}
            </Link>
            <Link
              href={`/${otherLocale}`}
              className="text-sm font-medium text-muted-foreground"
            >
              {otherLocale === "zh" ? "中文" : "English"}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
