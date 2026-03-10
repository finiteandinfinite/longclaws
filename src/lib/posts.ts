import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { Post, Locale } from "@/types";

const contentDirectory = path.join(process.cwd(), "content/posts");

export function getAllPosts(locale: Locale): Post[] {
  const dir = path.join(contentDirectory, locale);
  if (!fs.existsSync(dir)) return [];

  const filenames = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));

  const posts = filenames.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const fullPath = path.join(dir, filename);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || slug,
      date: data.date || "",
      category: data.category || "uncategorized",
      tags: data.tags || [],
      summary: data.summary || "",
      coverImage: data.coverImage || "",
      content,
      locale,
    } as Post;
  });

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getPostBySlug(
  slug: string,
  locale: Locale
): Post | undefined {
  const posts = getAllPosts(locale);
  return posts.find((p) => p.slug === slug);
}

export async function renderMarkdown(content: string): Promise<string> {
  const result = await remark().use(html).process(content);
  return result.toString();
}

export function getAllCategories(locale: Locale): string[] {
  const posts = getAllPosts(locale);
  const categories = new Set(posts.map((p) => p.category));
  return Array.from(categories);
}

export function getPostsByCategory(
  category: string,
  locale: Locale
): Post[] {
  return getAllPosts(locale).filter((p) => p.category === category);
}

export const categoryLabels: Record<string, Record<string, string>> = {
  "model-release": { zh: "模型发布", en: "Model Release" },
  research: { zh: "研究论文", en: "Research" },
  industry: { zh: "行业动态", en: "Industry" },
  tutorial: { zh: "教程指南", en: "Tutorial" },
  openclaw: { zh: "OpenClaw 专区", en: "OpenClaw" },
  tools: { zh: "工具与应用", en: "Tools & Apps" },
};

export function getCategoryLabel(
  category: string,
  locale: string
): string {
  return categoryLabels[category]?.[locale] || category;
}
