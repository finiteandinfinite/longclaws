---
title: "UniPool: A Globally Shared Expert Pool for Mixture-of-Experts"
date: "2026-05-07"
category: "research"
tags: ["arxiv", "research", "ai"]
summary: "作者: Minbin Huang, Han Shi, Chuanyang Zheng 等  Modern Mixture-of-Experts (MoE) architectures allocate expert capacity through a rigid per-layer rule: each transformer layer owns a separate expert set. This convention couples depth scaling with linear expert-parameter growth and assumes that every layer needs isolated expert capacity. However, recent analyses and our routing probe challenge this allocation rule: replacing a deeper layer's learned top-k router with uniform random routing drops downstream accuracy by only 1.0-1.6 points across "
source: "arXiv"
sourceUrl: "https://arxiv.org/abs/2605.06665v1"
---

# UniPool: A Globally Shared Expert Pool for Mixture-of-Experts

> 来源: [arXiv](https://arxiv.org/abs/2605.06665v1)

作者: Minbin Huang, Han Shi, Chuanyang Zheng 等

Modern Mixture-of-Experts (MoE) architectures allocate expert capacity through a rigid per-layer rule: each transformer layer owns a separate expert set. This convention couples depth scaling with linear expert-parameter growth and assumes that every layer needs isolated expert capacity. However, recent analyses and our routing probe challenge this allocation rule: replacing a deeper layer's learned top-k router with uniform random routing drops downstream accuracy by only 1.0-1.6 points across 
