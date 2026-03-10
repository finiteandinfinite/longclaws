export interface NewsItem {
  title: string;
  summary: string;
  url: string;
  source: string;
  tags: string[];
  date: string;
  category: string;
}

/**
 * Check if text matches any of the configured keywords (case-insensitive).
 */
export function matchesKeywords(
  text: string,
  keywords: string[]
): boolean {
  const lower = text.toLowerCase();
  return keywords.some((kw) => lower.includes(kw.toLowerCase()));
}

/**
 * Generate a URL-safe slug from a title string.
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\u4e00-\u9fff]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

/**
 * Format a Date as YYYY-MM-DD string.
 */
export function formatDate(d: Date): string {
  return d.toISOString().slice(0, 10);
}

/**
 * Build markdown frontmatter + body for a news item.
 */
export function toMarkdown(item: NewsItem): string {
  const lines = [
    "---",
    `title: "${item.title.replace(/"/g, '\\"')}"`,
    `date: "${item.date}"`,
    `category: "${item.category}"`,
    `tags: [${item.tags.map((t) => `"${t}"`).join(", ")}]`,
    `summary: "${item.summary.replace(/"/g, '\\"').replace(/\n/g, " ")}"`,
    `source: "${item.source}"`,
    `sourceUrl: "${item.url}"`,
    "---",
    "",
    `# ${item.title}`,
    "",
    `> 来源: [${item.source}](${item.url})`,
    "",
    item.summary,
    "",
  ];
  return lines.join("\n");
}
