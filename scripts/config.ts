export const KEYWORDS = [
  "AI",
  "LLM",
  "OpenClaw",
  "GPT",
  "Claude",
  "Gemini",
  "large language model",
  "machine learning",
  "deep learning",
  "neural network",
  "transformer",
  "diffusion",
  "agent",
  "AGI",
  "RLHF",
  "fine-tuning",
  "RAG",
  "multimodal",
  "computer vision",
  "NLP",
  "natural language",
];

export const RSS_FEEDS = [
  { name: "OpenAI Blog", url: "https://openai.com/blog/rss.xml" },
  {
    name: "Google AI Blog",
    url: "https://blog.google/technology/ai/rss/",
  },
  {
    name: "MIT Technology Review AI",
    url: "https://www.technologyreview.com/topic/artificial-intelligence/feed",
  },
];

export const REDDIT_SUBREDDITS = ["MachineLearning", "artificial"];

export const ARXIV_CATEGORIES = ["cs.AI", "cs.CL", "cs.LG"];

/** Max items to fetch per source before filtering */
export const FETCH_LIMITS = {
  hackerNews: 30,
  reddit: 25,
  arxiv: 20,
  rss: 15,
};

/** Max items to keep per source after filtering */
export const MAX_ITEMS_PER_SOURCE = 5;
