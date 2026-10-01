---
title: "LeapQuant: Efficient Linear Attention with Accurate Recurrent State Quantization"
date: "2026-09-29"
category: "research"
tags: ["arxiv", "research", "ai"]
summary: "作者: Yi Pan, Haocheng Xi, Kan Zhu 等  Recent LLMs increasingly adopt hybrid designs that replace standard attention with linear attention, such as Gated DeltaNet (GDN) and Kimi Delta Attention (KDA). Although they compress the context into a fixed-size recurrent state and substantially reduce the cost of long-context processing, repeatedly reading and updating that state remains a major inference bottleneck. Quantization offers a natural way to reduce this cost, but can significantly degrade model quality, due to the accumulation of"
source: "arXiv"
sourceUrl: "https://arxiv.org/abs/2609.38166v1"
---

# LeapQuant: Efficient Linear Attention with Accurate Recurrent State Quantization

> 来源: [arXiv](https://arxiv.org/abs/2609.38166v1)

作者: Yi Pan, Haocheng Xi, Kan Zhu 等

Recent LLMs increasingly adopt hybrid designs that replace standard attention with linear attention, such as Gated DeltaNet (GDN) and Kimi Delta Attention (KDA). Although they compress the context into a fixed-size recurrent state and substantially reduce the cost of long-context processing, repeatedly reading and updating that state remains a major inference bottleneck. Quantization offers a natural way to reduce this cost, but can significantly degrade model quality, due to the accumulation of
