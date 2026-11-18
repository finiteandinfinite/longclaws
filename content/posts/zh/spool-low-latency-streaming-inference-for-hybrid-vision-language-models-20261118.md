---
title: "Spool: Low-Latency Streaming Inference for Hybrid Vision-Language Models"
date: "2026-11-17"
category: "research"
tags: ["arxiv", "research", "ai"]
summary: "作者: Rui Ning, Om Chabra, Hari Balakrishnan  Applications such as visual accessibility agents and robotics require answering questions about recent video content promptly, over a bounded window of past frames (e.g., the last two minutes). Hybrid vision-language models (VLMs), which interleave attention with linear recurrent layers such as Gated DeltaNet (GDN), are attractive for this setting, but maintaining a sliding window is expensive. The reason is that recurrent layers combine all past frames into a shared state, so expiring old frame"
source: "arXiv"
sourceUrl: "https://arxiv.org/abs/2611.23228v1"
---

# Spool: Low-Latency Streaming Inference for Hybrid Vision-Language Models

> 来源: [arXiv](https://arxiv.org/abs/2611.23228v1)

作者: Rui Ning, Om Chabra, Hari Balakrishnan

Applications such as visual accessibility agents and robotics require answering questions about recent video content promptly, over a bounded window of past frames (e.g., the last two minutes). Hybrid vision-language models (VLMs), which interleave attention with linear recurrent layers such as Gated DeltaNet (GDN), are attractive for this setting, but maintaining a sliding window is expensive. The reason is that recurrent layers combine all past frames into a shared state, so expiring old frame
