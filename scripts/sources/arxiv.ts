import {
  ARXIV_CATEGORIES,
  FETCH_LIMITS,
  MAX_ITEMS_PER_SOURCE,
} from "../config";
import { NewsItem } from "./utils";

const ARXIV_API = "https://export.arxiv.org/api/query";

function extractTag(xml: string, tag: string): string {
  const match = xml.match(
    new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`)
  );
  return match ? match[1].trim() : "";
}

function extractAllEntries(xml: string): string[] {
  const entries: string[] = [];
  const regex = /<entry>([\s\S]*?)<\/entry>/g;
  let match;
  while ((match = regex.exec(xml)) !== null) {
    entries.push(match[1]);
  }
  return entries;
}

function extractAuthors(entry: string): string[] {
  const authors: string[] = [];
  const regex = /<author>\s*<name>([^<]+)<\/name>/g;
  let match;
  while ((match = regex.exec(entry)) !== null) {
    authors.push(match[1].trim());
  }
  return authors;
}

function extractLink(entry: string): string {
  const match = entry.match(
    /<link[^>]*href="(https:\/\/arxiv\.org\/abs\/[^"]+)"/
  );
  return match ? match[1] : "";
}

export async function fetchArxiv(): Promise<NewsItem[]> {
  console.log("[arXiv] Fetching recent papers...");

  const catQuery = ARXIV_CATEGORIES.map((c) => `cat:${c}`).join("+OR+");
  const url = `${ARXIV_API}?search_query=${catQuery}&sortBy=submittedDate&sortOrder=descending&max_results=${FETCH_LIMITS.arxiv}`;

  const res = await fetch(url);
  if (!res.ok) throw new Error(`arXiv API failed: ${res.status}`);

  const xml = await res.text();
  const entries = extractAllEntries(xml);

  console.log(`[arXiv] Found ${entries.length} papers`);

  return entries.slice(0, MAX_ITEMS_PER_SOURCE).map((entry) => {
    const title = extractTag(entry, "title").replace(/\s+/g, " ");
    const summary = extractTag(entry, "summary").replace(/\s+/g, " ");
    const authors = extractAuthors(entry);
    const link = extractLink(entry);
    const published = extractTag(entry, "published").slice(0, 10);

    return {
      title,
      summary:
        `作者: ${authors.slice(0, 3).join(", ")}${authors.length > 3 ? " 等" : ""}\n\n` +
        summary.slice(0, 500),
      url: link,
      source: "arXiv",
      tags: ["arxiv", "research", "ai"],
      date: published,
      category: "research",
    };
  });
}
