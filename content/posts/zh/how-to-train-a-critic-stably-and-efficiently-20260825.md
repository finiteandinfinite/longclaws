---
title: "How to Train a Critic Stably and Efficiently"
date: "2026-08-24"
category: "research"
tags: ["arxiv", "research", "ai"]
summary: "作者: Penghui Qi, Xiangxin Zhou, Wee Sun Lee  Group-based reinforcement learning methods such as GRPO for large language models avoid training a critic by sampling multiple responses for each prompt. A reliable critic could instead estimate token-level advantages from one response, but standard critic-based training recipes are often unstable. We study this instability and develop \textbf{Best-Practice Critic Optimization (BPCO)}, a recipe that combines DPPO, value predictions bounded to the reward range, Monte Carlo value targets, unnormal"
source: "arXiv"
sourceUrl: "https://arxiv.org/abs/2608.23566v1"
---

# How to Train a Critic Stably and Efficiently

> 来源: [arXiv](https://arxiv.org/abs/2608.23566v1)

作者: Penghui Qi, Xiangxin Zhou, Wee Sun Lee

Group-based reinforcement learning methods such as GRPO for large language models avoid training a critic by sampling multiple responses for each prompt. A reliable critic could instead estimate token-level advantages from one response, but standard critic-based training recipes are often unstable. We study this instability and develop \textbf{Best-Practice Critic Optimization (BPCO)}, a recipe that combines DPPO, value predictions bounded to the reward range, Monte Carlo value targets, unnormal
