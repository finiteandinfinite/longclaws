---
title: "DFlare: Scaling Up Draft Capacity for Block Diffusion Speculative Decoding"
date: "2026-06-01"
category: "research"
tags: ["arxiv", "research", "ai"]
summary: "作者: Jiebin Zhang, Zhenghan Yu, Song Liu 等  Block diffusion speculative decoding accelerates LLM inference by predicting all tokens within a block simultaneously for the target model to verify in parallel. Predicting an entire block at once requires a sufficiently capable draft model and effective utilization of the target model's internal knowledge. However, the state-of-the-art method DFlash constrains all draft layers to share a single fused representation derived from only a few target layers, limiting per-layer expressiveness and hin"
source: "arXiv"
sourceUrl: "https://arxiv.org/abs/2606.02091v1"
---

# DFlare: Scaling Up Draft Capacity for Block Diffusion Speculative Decoding

> 来源: [arXiv](https://arxiv.org/abs/2606.02091v1)

作者: Jiebin Zhang, Zhenghan Yu, Song Liu 等

Block diffusion speculative decoding accelerates LLM inference by predicting all tokens within a block simultaneously for the target model to verify in parallel. Predicting an entire block at once requires a sufficiently capable draft model and effective utilization of the target model's internal knowledge. However, the state-of-the-art method DFlash constrains all draft layers to share a single fused representation derived from only a few target layers, limiting per-layer expressiveness and hin
