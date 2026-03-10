import HeroSection from "@/components/HeroSection";
import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/lib/posts";
import { getMessages } from "@/lib/i18n";
import { type Locale, locales } from "@/types";
import Link from "next/link";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const posts = getAllPosts(locale as Locale);
  const t = getMessages(locale);
  const latestPosts = posts.slice(0, 6);

  return (
    <>
      <HeroSection locale={locale as Locale} />

      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold">{t.posts.title}</h2>
          <Link
            href={`/${locale}/posts`}
            className="text-sm font-medium text-primary hover:underline"
          >
            {t.posts.readMore} →
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {latestPosts.map((post) => (
            <PostCard key={post.slug} post={post} locale={locale as Locale} />
          ))}
        </div>
      </section>
    </>
  );
}
