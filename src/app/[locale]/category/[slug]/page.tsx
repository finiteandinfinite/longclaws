import PostCard from "@/components/PostCard";
import {
  getPostsByCategory,
  getCategoryLabel,
  getAllPosts,
} from "@/lib/posts";
import { getMessages } from "@/lib/i18n";
import { type Locale, locales } from "@/types";
import Link from "next/link";

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of locales) {
    const posts = getAllPosts(locale);
    const categories = new Set(posts.map((p) => p.category));
    for (const cat of categories) {
      params.push({ locale, slug: cat });
    }
  }
  return params;
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const posts = getPostsByCategory(slug, locale as Locale);
  const t = getMessages(locale);
  const categoryName = getCategoryLabel(slug, locale);

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-8">
        <Link
          href={`/${locale}/posts`}
          className="mb-4 inline-flex items-center gap-1 text-sm text-muted-foreground transition hover:text-foreground"
        >
          ← {t.posts.backToList}
        </Link>
        <h1 className="text-3xl font-bold">{categoryName}</h1>
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
