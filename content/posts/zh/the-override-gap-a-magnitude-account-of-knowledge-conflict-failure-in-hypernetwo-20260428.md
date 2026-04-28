---
title: "The Override Gap: A Magnitude Account of Knowledge Conflict Failure in Hypernetwork-Based Instant LLM Adaptation"
date: "2026-04-26"
category: "research"
tags: ["arxiv", "research", "ai"]
summary: "作者: Shuaizhi Cheng, Xiang Shi, Mingwei Li  Hypernetwork-based methods such as Doc-to-LoRA internalize a document into an LLM's weights in a single forward pass, but they fail systematically on conflicts: when the document contradicts pretraining knowledge, accuracy collapses to 46.4% on the deepest facts. We show the failure is a magnitude problem rather than a representational one. The hypernetwork already targets the right layers, but its adapter margin is approximately constant across documents while the pretrained margin grows with t"
source: "arXiv"
sourceUrl: "https://arxiv.org/abs/2604.23750v1"
---

# The Override Gap: A Magnitude Account of Knowledge Conflict Failure in Hypernetwork-Based Instant LLM Adaptation

> 来源: [arXiv](https://arxiv.org/abs/2604.23750v1)

作者: Shuaizhi Cheng, Xiang Shi, Mingwei Li

Hypernetwork-based methods such as Doc-to-LoRA internalize a document into an LLM's weights in a single forward pass, but they fail systematically on conflicts: when the document contradicts pretraining knowledge, accuracy collapses to 46.4% on the deepest facts. We show the failure is a magnitude problem rather than a representational one. The hypernetwork already targets the right layers, but its adapter margin is approximately constant across documents while the pretrained margin grows with t
