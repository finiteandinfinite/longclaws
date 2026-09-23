---
title: "Flash-dLLM: IO-Aware KV Caching and Parallel Decoding for Fast, Memory-Efficient Diffusion LLMs"
date: "2026-09-22"
category: "research"
tags: ["arxiv", "research", "ai"]
summary: "作者: Quan Nguyen-Tri, Mukul Ranjan, Zhiqiang Shen  Diffusion Large Language Models (dLLMs) have recently emerged as a promising alternative to autoregressive LLMs by enabling non-autoregressive text generation. However, their practical deployment remains limited by inefficient inference, largely due to the absence of effective Key-Value (KV) caching and scalable parallel decoding mechanisms. Existing acceleration methods typically study KV caching and parallel decoding in isolation, overlooking the I/O bottlenecks that arise when cache reuse and"
source: "arXiv"
sourceUrl: "https://arxiv.org/abs/2609.26796v1"
---

# Flash-dLLM: IO-Aware KV Caching and Parallel Decoding for Fast, Memory-Efficient Diffusion LLMs

> 来源: [arXiv](https://arxiv.org/abs/2609.26796v1)

作者: Quan Nguyen-Tri, Mukul Ranjan, Zhiqiang Shen

Diffusion Large Language Models (dLLMs) have recently emerged as a promising alternative to autoregressive LLMs by enabling non-autoregressive text generation. However, their practical deployment remains limited by inefficient inference, largely due to the absence of effective Key-Value (KV) caching and scalable parallel decoding mechanisms. Existing acceleration methods typically study KV caching and parallel decoding in isolation, overlooking the I/O bottlenecks that arise when cache reuse and
