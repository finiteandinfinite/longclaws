---
title: "Graph Machine: Towards Better Pretraining via Edges"
date: "2026-09-02"
category: "research"
tags: ["arxiv", "research", "ai"]
summary: "作者: Lintai Hou  We introduce the Graph Machine (GM), an architecture that maintains an $O(n)$-sized state and accesses it through sparse, dynamic routing. Unlike methods with fixed-size states or sparse but static routing, GM preserves $O(n)$ complexity in its sparse layers without restricting the potentially accessible state size to $O(1)$. Instead, GM uses edges - pointer-like objects updated differentiably by a referral mechanism resembling pointer chasing. We replace 75% of the dense Transformer layers in Q"
source: "arXiv"
sourceUrl: "https://arxiv.org/abs/2609.02881v1"
---

# Graph Machine: Towards Better Pretraining via Edges

> 来源: [arXiv](https://arxiv.org/abs/2609.02881v1)

作者: Lintai Hou

We introduce the Graph Machine (GM), an architecture that maintains an $O(n)$-sized state and accesses it through sparse, dynamic routing. Unlike methods with fixed-size states or sparse but static routing, GM preserves $O(n)$ complexity in its sparse layers without restricting the potentially accessible state size to $O(1)$. Instead, GM uses edges - pointer-like objects updated differentiably by a referral mechanism resembling pointer chasing. We replace 75% of the dense Transformer layers in Q
