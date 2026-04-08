---
title: "TriAttention: Efficient Long Reasoning with Trigonometric KV Compression"
date: "2026-04-06"
category: "research"
tags: ["arxiv", "research", "ai"]
summary: "作者: Weian Mao, Xi Lin, Wei Huang 等  Extended reasoning in large language models (LLMs) creates severe KV cache memory bottlenecks. Leading KV cache compression methods estimate KV importance using attention scores from recent post-RoPE queries. However, queries rotate with position during RoPE, making representative queries very few, leading to poor top-key selection and unstable reasoning. To avoid this issue, we turn to the pre-RoPE space, where we observe that Q and K vectors are highly concentrated around fixed non-zero center"
source: "arXiv"
sourceUrl: "https://arxiv.org/abs/2604.04921v1"
---

# TriAttention: Efficient Long Reasoning with Trigonometric KV Compression

> 来源: [arXiv](https://arxiv.org/abs/2604.04921v1)

作者: Weian Mao, Xi Lin, Wei Huang 等

Extended reasoning in large language models (LLMs) creates severe KV cache memory bottlenecks. Leading KV cache compression methods estimate KV importance using attention scores from recent post-RoPE queries. However, queries rotate with position during RoPE, making representative queries very few, leading to poor top-key selection and unstable reasoning. To avoid this issue, we turn to the pre-RoPE space, where we observe that Q and K vectors are highly concentrated around fixed non-zero center
