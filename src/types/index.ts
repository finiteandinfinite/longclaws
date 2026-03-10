export interface Post {
  slug: string;
  title: string;
  date: string;
  category: string;
  tags: string[];
  summary: string;
  coverImage?: string;
  content: string;
  locale: "zh" | "en";
}

export interface Category {
  slug: string;
  name: Record<string, string>;
}

export type Locale = "zh" | "en";

export const locales: Locale[] = ["zh", "en"];
export const defaultLocale: Locale = "zh";
