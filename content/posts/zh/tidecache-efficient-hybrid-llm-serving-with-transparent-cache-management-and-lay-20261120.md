---
title: "TideCache: Efficient Hybrid LLM Serving with Transparent Cache Management and Layer-Wise Streaming"
date: "2026-11-19"
category: "research"
tags: ["arxiv", "research", "ai"]
summary: "作者: Jinbin Luo, Xiaozhe Yao, Shang Yang 等  Hybrid architectures have become mainstream among open-weight language models. Their global-attention and bounded-state layers maintain heterogeneous caches whose demands vary with context length and concurrency. We present TideCache, a serving system on CPU--GPU superchips with three components for allocating GPU memory among caches and managing their residency across GPU and host memory. The Transparent Cache Pool redistributes physical pages among cache components behind fixed virtual address"
source: "arXiv"
sourceUrl: "https://arxiv.org/abs/2611.26619v1"
---

# TideCache: Efficient Hybrid LLM Serving with Transparent Cache Management and Layer-Wise Streaming

> 来源: [arXiv](https://arxiv.org/abs/2611.26619v1)

作者: Jinbin Luo, Xiaozhe Yao, Shang Yang 等

Hybrid architectures have become mainstream among open-weight language models. Their global-attention and bounded-state layers maintain heterogeneous caches whose demands vary with context length and concurrency. We present TideCache, a serving system on CPU--GPU superchips with three components for allocating GPU memory among caches and managing their residency across GPU and host memory. The Transparent Cache Pool redistributes physical pages among cache components behind fixed virtual address
