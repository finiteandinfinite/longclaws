---
title: "The Key to Going Linear: Analysis-Driven Transformer Linearization"
date: "2026-07-08"
category: "research"
tags: ["arxiv", "research", "ai"]
summary: "作者: Anna Kuzina, Paul N. Whatmough, Babak Ehteshami Bejnordi  The quadratic cost of causal self-attention severely bottlenecks long-context transformer inference. While numerous post hoc linearization pipelines exist, it is difficult to identify which components preserve model quality. This work isolates the effect of state update design in a strict frozen-backbone regime. We show that softmax relies on key-dependent, rank-1 orthogonal projections, elucidating why delta-style networks outperform purely gated accumulation. We identify a potential source of "
source: "arXiv"
sourceUrl: "https://arxiv.org/abs/2607.07706v1"
---

# The Key to Going Linear: Analysis-Driven Transformer Linearization

> 来源: [arXiv](https://arxiv.org/abs/2607.07706v1)

作者: Anna Kuzina, Paul N. Whatmough, Babak Ehteshami Bejnordi

The quadratic cost of causal self-attention severely bottlenecks long-context transformer inference. While numerous post hoc linearization pipelines exist, it is difficult to identify which components preserve model quality. This work isolates the effect of state update design in a strict frozen-backbone regime. We show that softmax relies on key-dependent, rank-1 orthogonal projections, elucidating why delta-style networks outperform purely gated accumulation. We identify a potential source of 
