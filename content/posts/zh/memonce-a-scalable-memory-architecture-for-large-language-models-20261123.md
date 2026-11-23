---
title: "MemOnce: A Scalable Memory Architecture for Large Language Models"
date: "2026-11-20"
category: "research"
tags: ["arxiv", "research", "ai"]
summary: "作者: Chang Nie, Chaoyou Fu, Songlin Liu 等  Deploying large language models (LLMs) in long-horizon and continual interactions requires maintaining reusable memory states for future inference, posing challenges for existing architectures. Standard Transformers accumulate layer-wise, token-level KV caches, incurring linear GPU memory growth and quadratic computational complexity as the context expands. In contrast, linear-time architectures compress history into fixed-size states, but struggle to retain fine-grained details. We introduce Me"
source: "arXiv"
sourceUrl: "https://arxiv.org/abs/2611.27973v1"
---

# MemOnce: A Scalable Memory Architecture for Large Language Models

> 来源: [arXiv](https://arxiv.org/abs/2611.27973v1)

作者: Chang Nie, Chaoyou Fu, Songlin Liu 等

Deploying large language models (LLMs) in long-horizon and continual interactions requires maintaining reusable memory states for future inference, posing challenges for existing architectures. Standard Transformers accumulate layer-wise, token-level KV caches, incurring linear GPU memory growth and quadratic computational complexity as the context expands. In contrast, linear-time architectures compress history into fixed-size states, but struggle to retain fine-grained details. We introduce Me
