import {
  REDDIT_SUBREDDITS,
  FETCH_LIMITS,
  KEYWORDS,
  MAX_ITEMS_PER_SOURCE,
} from "../config";
import { NewsItem, matchesKeywords } from "./utils";

interface RedditPost {
  data: {
    title: string;
    selftext: string;
    url: string;
    permalink: string;
    score: number;
    created_utc: number;
    num_comments: number;
  };
}

export async function fetchReddit(): Promise<NewsItem[]> {
  console.log("[Reddit] Fetching hot posts...");

  const allPosts: RedditPost[] = [];
  const limit = Math.ceil(FETCH_LIMITS.reddit / REDDIT_SUBREDDITS.length);

  for (const sub of REDDIT_SUBREDDITS) {
    try {
      const res = await fetch(
        `https://www.reddit.com/r/${sub}/hot.json?limit=${limit}`,
        {
          headers: {
            "User-Agent": "longclaws-news-fetcher/1.0",
          },
        }
      );
      if (!res.ok) {
        console.warn(`[Reddit] r/${sub} failed: ${res.status}`);
        continue;
      }
      const data = await res.json();
      const posts: RedditPost[] = data?.data?.children ?? [];
      allPosts.push(...posts);
    } catch (err) {
      console.warn(`[Reddit] r/${sub} error:`, err);
    }
  }

  const filtered = allPosts.filter((post) =>
    matchesKeywords(
      `${post.data.title} ${post.data.selftext}`,
      KEYWORDS
    )
  );

  console.log(
    `[Reddit] Found ${filtered.length} matching items out of ${allPosts.length}`
  );

  return filtered.slice(0, MAX_ITEMS_PER_SOURCE).map((post) => ({
    title: post.data.title,
    summary:
      post.data.selftext.slice(0, 300).replace(/\n/g, " ") ||
      `Reddit 讨论，得分 ${post.data.score}，评论数 ${post.data.num_comments}。`,
    url: `https://www.reddit.com${post.data.permalink}`,
    source: "Reddit",
    tags: ["reddit", "ai", "machine-learning"],
    date: new Date(post.data.created_utc * 1000)
      .toISOString()
      .slice(0, 10),
    category: "industry",
  }));
}
