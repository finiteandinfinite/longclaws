import PostCard from "@/components/PostCard";
import { getAllPosts, getAllCategories, getCategoryLabel } from "@/lib/posts";
import { getMessages } from "@/lib/i18n";
import { type Locale, locales } from "@/types";
import Link from "next/link";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function PostsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const posts = getAllPosts(locale as Locale);
  const categories = getAllCategories(locale as Locale);
  const t = getMessages(locale);

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="mb-8 text-3xl font-bold">{t.posts.title}</h1>

      {/* Category filter */}
      <div className="mb-8 flex flex-wrap gap-2">
        <Link
          href={`/${locale}/posts`}
          className="rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground"
        >
          {t.posts.allCategories}
        </Link>
        {categories.map((cat) => (
          <Link
            key={cat}
            href={`/${locale}/category/${cat}`}
            className="rounded-full border border-border px-4 py-1.5 text-sm font-medium text-muted-foreground transition hover:bg-muted"
          >
            {getCategoryLabel(cat, locale)}
          </Link>
        ))}
      </div>

      {posts.length === 0 ? (
        <p className="text-center text-muted-foreground">{t.posts.noPosts}</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} locale={locale as Locale} />
          ))}
        </div>
      )}
    </section>
  );
}
