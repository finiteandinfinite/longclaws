import { getMessages } from "@/lib/i18n";
import { type Locale, locales } from "@/types";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getMessages(locale);

  return (
    <section className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="mb-8 text-3xl font-bold">{t.about.title}</h1>

      <div className="prose">
        {locale === "zh" ? (
          <>
            <p>
              <strong>Longclaws</strong> 是一个专注于 AI
              领域资讯聚合的网站，尤其关注近期爆火的 OpenClaw 生态。
            </p>
            <h2>我们的使命</h2>
            <p>
              在 AI
              技术飞速发展的今天，信息更新极为频繁。Longclaws
              致力于为开发者、研究者和 AI
              爱好者提供及时、准确、有深度的资讯，帮助大家跟上行业前沿。
            </p>
            <h2>关注领域</h2>
            <ul>
              <li>
                <strong>OpenClaw 生态</strong> —— 模型发布、API
                更新、社区动态
              </li>
              <li>
                <strong>模型与架构</strong> —— 新模型发布、架构创新、性能突破
              </li>
              <li>
                <strong>AI 应用</strong> —— Agent 框架、开发工具、落地案例
              </li>
              <li>
                <strong>研究前沿</strong> —— 重要论文解读、技术趋势分析
              </li>
            </ul>
            <h2>联系我们</h2>
            <p>
              如果您有优质的资讯线索或想要投稿，欢迎通过 GitHub Issues
              与我们联系。
            </p>
          </>
        ) : (
          <>
            <p>
              <strong>Longclaws</strong> is an AI news aggregation website with
              a special focus on the rapidly growing OpenClaw ecosystem.
            </p>
            <h2>Our Mission</h2>
            <p>
              In an era of rapid AI development, information updates at an
              unprecedented pace. Longclaws is dedicated to providing
              developers, researchers, and AI enthusiasts with timely, accurate,
              and insightful news to help everyone stay at the forefront of the
              industry.
            </p>
            <h2>Focus Areas</h2>
            <ul>
              <li>
                <strong>OpenClaw Ecosystem</strong> — Model releases, API
                updates, community news
              </li>
              <li>
                <strong>Models & Architecture</strong> — New model launches,
                architectural innovations, performance breakthroughs
              </li>
              <li>
                <strong>AI Applications</strong> — Agent frameworks, dev tools,
                real-world use cases
              </li>
              <li>
                <strong>Research Frontiers</strong> — Key paper reviews, tech
                trend analysis
              </li>
            </ul>
            <h2>Contact Us</h2>
            <p>
              If you have news tips or would like to contribute, please reach
              out through GitHub Issues.
            </p>
          </>
        )}
      </div>
    </section>
  );
}
