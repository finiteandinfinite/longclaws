import { getAllPosts, renderMarkdown, getCategoryLabel } from "@/lib/posts";
import { getMessages } from "@/lib/i18n";
import { type Locale, locales } from "@/types";
import Link from "next/link";

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of locales) {
    const posts = getAllPosts(locale);
    for (const post of posts) {
      params.push({ locale, slug: post.slug });
    }
  }
  return params;
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const posts = getAllPosts(locale as Locale);
  const post = posts.find((p) => p.slug === slug);
  const t = getMessages(locale);

  if (!post) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center">
        <h1 className="text-2xl font-bold">404</h1>
        <p className="mt-4 text-muted-foreground">{t.posts.noPosts}</p>
      </div>
    );
  }

  const contentHtml = await renderMarkdown(post.content);

  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <Link
        href={`/${locale}/posts`}
        className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground transition hover:text-foreground"
      >
        ← {t.posts.backToList}
      </Link>

      <div className="mb-6 flex items-center gap-3">
        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          {getCategoryLabel(post.category, locale)}
        </span>
        <time className="text-sm text-muted-foreground">{post.date}</time>
      </div>

      <h1 className="mb-6 text-3xl font-extrabold leading-tight md:text-4xl">
        {post.title}
      </h1>

      <div className="mb-8 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="rounded bg-muted px-2 py-0.5 text-xs text-muted-foreground"
          >
            #{tag}
          </span>
        ))}
      </div>

      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </article>
  );
}
