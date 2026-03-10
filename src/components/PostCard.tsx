import Link from "next/link";
import { type Post, type Locale } from "@/types";
import { getCategoryLabel } from "@/lib/posts";
import { getMessages } from "@/lib/i18n";

export default function PostCard({
  post,
  locale,
}: {
  post: Post;
  locale: Locale;
}) {
  const t = getMessages(locale);

  return (
    <article className="group rounded-xl border border-border bg-card p-6 transition hover:border-primary/50 hover:shadow-lg">
      <div className="mb-3 flex items-center gap-3">
        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          {getCategoryLabel(post.category, locale)}
        </span>
        <time className="text-xs text-muted-foreground">{post.date}</time>
      </div>
      <Link href={`/${locale}/posts/${post.slug}`}>
        <h3 className="mb-2 text-lg font-semibold transition group-hover:text-primary">
          {post.title}
        </h3>
      </Link>
      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
        {post.summary}
      </p>
      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded bg-muted px-2 py-0.5 text-xs text-muted-foreground"
            >
              #{tag}
            </span>
          ))}
        </div>
        <Link
          href={`/${locale}/posts/${post.slug}`}
          className="text-sm font-medium text-primary transition hover:underline"
        >
          {t.posts.readMore} →
        </Link>
      </div>
    </article>
  );
}
