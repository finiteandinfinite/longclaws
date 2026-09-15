---
title: "SAS: Simple Attention Sparsification via End-to-End Optimization of Context Ranking"
date: "2026-09-11"
category: "research"
tags: ["arxiv", "research", "ai"]
summary: "作者: Zhiwei Li, Lei Zhu, Hao Gu 等  Post-training attention sparsification reduces the quadratic cumulative attention cost of pretrained Transformers by selecting a small set of context units (tokens or blocks) for each query. Existing trainable methods usually use a lightweight selector to score context units, followed by hard Top-K selection that blocks gradients from the language modeling loss. Consequently, these methods commonly distill layer-wise dense attention distributions. Although this encourages the selector to rank co"
source: "arXiv"
sourceUrl: "https://arxiv.org/abs/2609.13141v1"
---

# SAS: Simple Attention Sparsification via End-to-End Optimization of Context Ranking

> 来源: [arXiv](https://arxiv.org/abs/2609.13141v1)

作者: Zhiwei Li, Lei Zhu, Hao Gu 等

Post-training attention sparsification reduces the quadratic cumulative attention cost of pretrained Transformers by selecting a small set of context units (tokens or blocks) for each query. Existing trainable methods usually use a lightweight selector to score context units, followed by hard Top-K selection that blocks gradients from the language modeling loss. Consequently, these methods commonly distill layer-wise dense attention distributions. Although this encourages the selector to rank co
