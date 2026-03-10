import { FETCH_LIMITS, KEYWORDS, MAX_ITEMS_PER_SOURCE } from "../config";
import { NewsItem, matchesKeywords } from "./utils";

const HN_API = "https://hacker-news.firebaseio.com/v0";

interface HNItem {
  id: number;
  title?: string;
  url?: string;
  score?: number;
  descendants?: number;
  time?: number;
}

export async function fetchHackerNews(): Promise<NewsItem[]> {
  console.log("[HN] Fetching top stories...");

  const res = await fetch(`${HN_API}/topstories.json`);
  if (!res.ok) throw new Error(`HN topstories failed: ${res.status}`);

  const ids: number[] = await res.json();
  const topIds = ids.slice(0, FETCH_LIMITS.hackerNews);

  const items: HNItem[] = await Promise.all(
    topIds.map(async (id) => {
      const r = await fetch(`${HN_API}/item/${id}.json`);
      return r.json();
    })
  );

  const filtered = items.filter(
    (item) => item.title && matchesKeywords(item.title, KEYWORDS)
  );

  console.log(
    `[HN] Found ${filtered.length} matching items out of ${items.length}`
  );

  return filtered.slice(0, MAX_ITEMS_PER_SOURCE).map((item) => ({
    title: item.title!,
    summary: `Hacker News 热门讨论，得分 ${item.score ?? 0}，评论数 ${item.descendants ?? 0}。`,
    url: item.url || `https://news.ycombinator.com/item?id=${item.id}`,
    source: "Hacker News",
    tags: ["hacker-news", "ai"],
    date: new Date((item.time ?? Date.now() / 1000) * 1000)
      .toISOString()
      .slice(0, 10),
    category: "industry",
  }));
}
