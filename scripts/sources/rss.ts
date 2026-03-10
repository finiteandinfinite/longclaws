import {
  RSS_FEEDS,
  KEYWORDS,
  FETCH_LIMITS,
  MAX_ITEMS_PER_SOURCE,
} from "../config";
import { NewsItem, matchesKeywords } from "./utils";

function extractTag(xml: string, tag: string): string {
  const match = xml.match(
    new RegExp(`<${tag}[^>]*>(?:<!\\[CDATA\\[)?([\\s\\S]*?)(?:\\]\\]>)?</${tag}>`)
  );
  return match ? match[1].trim() : "";
}

function extractItems(xml: string): string[] {
  const items: string[] = [];
  const regex = /<item>([\s\S]*?)<\/item>/g;
  let match;
  while ((match = regex.exec(xml)) !== null) {
    items.push(match[1]);
  }
  // Also try Atom <entry> format
  const entryRegex = /<entry>([\s\S]*?)<\/entry>/g;
  while ((match = entryRegex.exec(xml)) !== null) {
    items.push(match[1]);
  }
  return items;
}

function extractLink(item: string): string {
  // RSS <link> tag
  const rssLink = extractTag(item, "link");
  if (rssLink) return rssLink;
  // Atom <link href="...">
  const atomMatch = item.match(/<link[^>]*href="([^"]+)"/);
  return atomMatch ? atomMatch[1] : "";
}

function extractDate(item: string): string {
  const pubDate = extractTag(item, "pubDate");
  if (pubDate) {
    try {
      return new Date(pubDate).toISOString().slice(0, 10);
    } catch {
      // ignore
    }
  }
  const updated = extractTag(item, "updated");
  if (updated) return updated.slice(0, 10);
  const published = extractTag(item, "published");
  if (published) return published.slice(0, 10);
  return new Date().toISOString().slice(0, 10);
}

export async function fetchRSS(): Promise<NewsItem[]> {
  console.log("[RSS] Fetching feeds...");

  const allItems: NewsItem[] = [];
  const limitPerFeed = Math.ceil(
    FETCH_LIMITS.rss / RSS_FEEDS.length
  );

  for (const feed of RSS_FEEDS) {
    try {
      const res = await fetch(feed.url, {
        headers: {
          "User-Agent": "longclaws-news-fetcher/1.0",
        },
      });
      if (!res.ok) {
        console.warn(`[RSS] ${feed.name} failed: ${res.status}`);
        continue;
      }
      const xml = await res.text();
      const items = extractItems(xml).slice(0, limitPerFeed);

      for (const item of items) {
        const title = extractTag(item, "title");
        const description =
          extractTag(item, "description") ||
          extractTag(item, "summary") ||
          extractTag(item, "content");
        const link = extractLink(item);
        const date = extractDate(item);

        if (
          title &&
          matchesKeywords(`${title} ${description}`, KEYWORDS)
        ) {
          allItems.push({
            title,
            summary: description
              .replace(/<[^>]+>/g, "")
              .slice(0, 300),
            url: link,
            source: feed.name,
            tags: ["rss", "ai"],
            date,
            category: "industry",
          });
        }
      }
      console.log(
        `[RSS] ${feed.name}: processed ${items.length} items`
      );
    } catch (err) {
      console.warn(`[RSS] ${feed.name} error:`, err);
    }
  }

  console.log(`[RSS] Total matching items: ${allItems.length}`);
  return allItems.slice(0, MAX_ITEMS_PER_SOURCE);
}
