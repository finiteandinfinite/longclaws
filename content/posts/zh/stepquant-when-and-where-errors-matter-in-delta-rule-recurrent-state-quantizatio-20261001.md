---
title: "STEPQuant: When and Where Errors Matter in Delta-Rule Recurrent State Quantization"
date: "2026-09-29"
category: "research"
tags: ["arxiv", "research", "ai"]
summary: "作者: Bingchen Yao, Haobo Xu, Haokun Lin 等  Linear attention replaces growing KV caches with fixed-size recurrent states, yet these persistent states can become a substantial memory bottleneck under concurrent serving. Directly quantizing recurrent states to low precision often leads to severe accuracy degradation, as quantization errors propagate through successive state updates. We discover that the impact of these errors depends on two complementary dimensions: temporally, errors in long-lived memory can persist across many decoding st"
source: "arXiv"
sourceUrl: "https://arxiv.org/abs/2609.38169v1"
---

# STEPQuant: When and Where Errors Matter in Delta-Rule Recurrent State Quantization

> 来源: [arXiv](https://arxiv.org/abs/2609.38169v1)

作者: Bingchen Yao, Haobo Xu, Haokun Lin 等

Linear attention replaces growing KV caches with fixed-size recurrent states, yet these persistent states can become a substantial memory bottleneck under concurrent serving. Directly quantizing recurrent states to low precision often leads to severe accuracy degradation, as quantization errors propagate through successive state updates. We discover that the impact of these errors depends on two complementary dimensions: temporally, errors in long-lived memory can persist across many decoding st
