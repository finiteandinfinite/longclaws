---
title: "Mixture-of-Depths Attention"
date: "2026-03-16"
category: "research"
tags: ["arxiv", "research", "ai"]
summary: "作者: Lianghui Zhu, Yuxin Fang, Bencheng Liao 等  Scaling depth is a key driver for large language models (LLMs). Yet, as LLMs become deeper, they often suffer from signal degradation: informative features formed in shallow layers are gradually diluted by repeated residual updates, making them harder to recover in deeper layers. We introduce mixture-of-depths attention (MoDA), a mechanism that allows each attention head to attend to sequence KV pairs at the current layer and depth KV pairs from preceding layers. We further describe a hardware-e"
source: "arXiv"
sourceUrl: "https://arxiv.org/abs/2603.15619v1"
---

# Mixture-of-Depths Attention

> 来源: [arXiv](https://arxiv.org/abs/2603.15619v1)

作者: Lianghui Zhu, Yuxin Fang, Bencheng Liao 等

Scaling depth is a key driver for large language models (LLMs). Yet, as LLMs become deeper, they often suffer from signal degradation: informative features formed in shallow layers are gradually diluted by repeated residual updates, making them harder to recover in deeper layers. We introduce mixture-of-depths attention (MoDA), a mechanism that allows each attention head to attend to sequence KV pairs at the current layer and depth KV pairs from preceding layers. We further describe a hardware-e
