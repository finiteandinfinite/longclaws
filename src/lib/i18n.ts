export const i18n = {
  zh: {
    siteName: "Longclaws",
    siteDescription: "AI 与 OpenClaw 资讯聚合",
    nav: {
      home: "首页",
      posts: "资讯",
      about: "关于",
    },
    hero: {
      title: "Longclaws",
      subtitle: "追踪 AI 前沿动态，聚焦 OpenClaw 生态",
      cta: "浏览资讯",
    },
    posts: {
      title: "最新资讯",
      allCategories: "全部",
      readMore: "阅读全文",
      noPosts: "暂无相关资讯",
      backToList: "返回列表",
    },
    about: {
      title: "关于 Longclaws",
    },
    search: {
      placeholder: "搜索资讯...",
    },
    footer: {
      rights: "保留所有权利",
      poweredBy: "由 Next.js 驱动，托管于 GitHub Pages",
    },
  },
  en: {
    siteName: "Longclaws",
    siteDescription: "AI & OpenClaw News Aggregator",
    nav: {
      home: "Home",
      posts: "News",
      about: "About",
    },
    hero: {
      title: "Longclaws",
      subtitle: "Tracking AI frontiers, focusing on the OpenClaw ecosystem",
      cta: "Browse News",
    },
    posts: {
      title: "Latest News",
      allCategories: "All",
      readMore: "Read More",
      noPosts: "No posts found",
      backToList: "Back to List",
    },
    about: {
      title: "About Longclaws",
    },
    search: {
      placeholder: "Search news...",
    },
    footer: {
      rights: "All rights reserved",
      poweredBy: "Powered by Next.js, hosted on GitHub Pages",
    },
  },
};

export type I18nMessages = typeof i18n.zh;

export function getMessages(locale: string): I18nMessages {
  return i18n[locale as keyof typeof i18n] || i18n.zh;
}
