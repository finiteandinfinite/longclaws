import * as fs from "fs";
import * as path from "path";
import { fetchHackerNews } from "./sources/hackernews";
import { fetchReddit } from "./sources/reddit";
import { fetchArxiv } from "./sources/arxiv";
import { fetchRSS } from "./sources/rss";
import { NewsItem, slugify, formatDate, toMarkdown } from "./sources/utils";

const POSTS_DIR = path.join(process.cwd(), "content/posts/zh");

async function fetchAllSources(): Promise<NewsItem[]> {
  const results = await Promise.allSettled([
    fetchHackerNews(),
    fetchReddit(),
    fetchArxiv(),
    fetchRSS(),
  ]);

  const items: NewsItem[] = [];
  for (const result of results) {
    if (result.status === "fulfilled") {
      items.push(...result.value);
    } else {
      console.error("Source fetch failed:", result.reason);
    }
  }

  return items;
}

function isDuplicate(slug: string): boolean {
  // Check if any file starting with this slug already exists
  if (!fs.existsSync(POSTS_DIR)) return false;
  const files = fs.readdirSync(POSTS_DIR);
  return files.some((f) => f.startsWith(slug));
}

async function main() {
  console.log("=== Longclaws News Fetcher ===");
  console.log(`Time: ${new Date().toISOString()}`);
  console.log();

  // Ensure output directory exists
  fs.mkdirSync(POSTS_DIR, { recursive: true });

  const items = await fetchAllSources();
  console.log(`\nTotal items fetched: ${items.length}`);

  let newCount = 0;
  const today = formatDate(new Date());

  for (const item of items) {
    const slug = `${slugify(item.title)}-${today.replace(/-/g, "")}`;
    const filename = `${slug}.md`;

    if (isDuplicate(slug)) {
      console.log(`  [SKIP] ${item.title} (already exists)`);
      continue;
    }

    const markdown = toMarkdown(item);
    const filepath = path.join(POSTS_DIR, filename);
    fs.writeFileSync(filepath, markdown, "utf-8");
    console.log(`  [NEW] ${filename}`);
    newCount++;
  }

  console.log(`\nDone! ${newCount} new articles written.`);
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
