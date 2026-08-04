---
title: "TokTier: Exact Stateful Tokenization for Agentic LLM Serving"
date: "2026-07-31"
category: "research"
tags: ["arxiv", "research", "ai"]
summary: "作者: Zhenyu Zhang, Zhichao Cao  LLM serving systems cache prompt KV state, yet most front ends still re-tokenize the full request text on every call. The cost lands on coding agents, which resubmit a long transcript after each small tool result, and reuse is hard because even a short append can change token boundaries near the end of the previous sequence. Across 153,951 calls from two agent ecosystems, the median call appends about 1.4K characters, and only 1.0-3.6% of calls start or rebuild a session with contexts of million"
source: "arXiv"
sourceUrl: "https://arxiv.org/abs/2607.29678v1"
---

# TokTier: Exact Stateful Tokenization for Agentic LLM Serving

> 来源: [arXiv](https://arxiv.org/abs/2607.29678v1)

作者: Zhenyu Zhang, Zhichao Cao

LLM serving systems cache prompt KV state, yet most front ends still re-tokenize the full request text on every call. The cost lands on coding agents, which resubmit a long transcript after each small tool result, and reuse is hard because even a short append can change token boundaries near the end of the previous sequence. Across 153,951 calls from two agent ecosystems, the median call appends about 1.4K characters, and only 1.0-3.6% of calls start or rebuild a session with contexts of million
