---
title: "Context Memorization for Efficient Long Context Generation"
date: "2026-05-18"
category: "research"
tags: ["arxiv", "research", "ai"]
summary: "作者: Yasuyuki Okoshi, Hao Mark Chen, Guanxi Lu 等  Modern large language model (LLM) applications increasingly rely on long conditioning prefixes to control model behavior at inference time. While prefix-augmented inference is effective, it incurs two structural limitations: i) the prefix's influence fades as generation proceeds, and ii) attention computation over the prefix scales linearly with its length. Existing approaches either keep the prefix in attention while compressing it, or internalize it into model parameters through gradient-based"
source: "arXiv"
sourceUrl: "https://arxiv.org/abs/2605.18226v1"
---

# Context Memorization for Efficient Long Context Generation

> 来源: [arXiv](https://arxiv.org/abs/2605.18226v1)

作者: Yasuyuki Okoshi, Hao Mark Chen, Guanxi Lu 等

Modern large language model (LLM) applications increasingly rely on long conditioning prefixes to control model behavior at inference time. While prefix-augmented inference is effective, it incurs two structural limitations: i) the prefix's influence fades as generation proceeds, and ii) attention computation over the prefix scales linearly with its length. Existing approaches either keep the prefix in attention while compressing it, or internalize it into model parameters through gradient-based
