---
title: "LBI: Parallel Scan Backpropagation via Latent Bounded Interfaces"
date: "2026-05-09"
category: "research"
tags: ["arxiv", "research", "ai"]
summary: "作者: Shaun Christopher Lee, Sangeetha Abdu Jyothi  Backpropagation is inherently sequential across depth, creating an $O(K)$-deep dependency chain that bottlenecks parallel training. While parallel-scan formulations theoretically reduce this depth to $O(\log K)$, they are computationally prohibitive for modern architectures due to the $O(d^3)$ cost of composing full-rank $d\times d$ Jacobians over the entire hidden state. We introduce Latent Bounded Interfaces (LBI), an algorithmic formulation that makes scan-based backpropagation tractable by r"
source: "arXiv"
sourceUrl: "https://arxiv.org/abs/2605.09204v1"
---

# LBI: Parallel Scan Backpropagation via Latent Bounded Interfaces

> 来源: [arXiv](https://arxiv.org/abs/2605.09204v1)

作者: Shaun Christopher Lee, Sangeetha Abdu Jyothi

Backpropagation is inherently sequential across depth, creating an $O(K)$-deep dependency chain that bottlenecks parallel training. While parallel-scan formulations theoretically reduce this depth to $O(\log K)$, they are computationally prohibitive for modern architectures due to the $O(d^3)$ cost of composing full-rank $d\times d$ Jacobians over the entire hidden state. We introduce Latent Bounded Interfaces (LBI), an algorithmic formulation that makes scan-based backpropagation tractable by r
