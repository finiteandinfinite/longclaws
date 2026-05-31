---
title: "VideoMLA: Low-Rank Latent KV Cache for Minute-Scale Autoregressive Video Diffusion"
date: "2026-05-28"
category: "research"
tags: ["arxiv", "research", "ai"]
summary: "作者: Hidir Yesiltepe, Jiazhen Hu, Tuna Han Salih Meral 等  Long-rollout causal video diffusion has converged on a fixed-size sliding-window KV cache, with recent progress innovating within this layout by changing which tokens occupy the window or how their positions are encoded. The per-head KV layout itself, a dominant contributor to streaming memory and latency, has been mostly left unchanged. In this paper, we present the first study of Multi-Head Latent Attention (MLA) in video diffusion. VideoMLA replaces per-head keys and values with a shared low-"
source: "arXiv"
sourceUrl: "https://arxiv.org/abs/2605.30351v1"
---

# VideoMLA: Low-Rank Latent KV Cache for Minute-Scale Autoregressive Video Diffusion

> 来源: [arXiv](https://arxiv.org/abs/2605.30351v1)

作者: Hidir Yesiltepe, Jiazhen Hu, Tuna Han Salih Meral 等

Long-rollout causal video diffusion has converged on a fixed-size sliding-window KV cache, with recent progress innovating within this layout by changing which tokens occupy the window or how their positions are encoded. The per-head KV layout itself, a dominant contributor to streaming memory and latency, has been mostly left unchanged. In this paper, we present the first study of Multi-Head Latent Attention (MLA) in video diffusion. VideoMLA replaces per-head keys and values with a shared low-
