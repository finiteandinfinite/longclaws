---
title: "PagedWeight: Efficient MoE LLM Serving with Dynamic Quality-Aware Weight Quantization"
date: "2026-07-17"
category: "research"
tags: ["arxiv", "research", "ai"]
summary: "作者: Yuchen Yang, Yifan Zhao, Anisha Dasgupta 等  Mixture-of-Experts (MoE) is a popular class of large language models (LLMs), offering high efficiency and accuracy. However, in KV-cache-intensive serving scenarios, MoEs often exhibit a tension between the GPU memory requirements of the model weights and the growing KV cache. We propose PagedWeight, a novel management method for MoE LLM serving that dynamically quantizes MoE model's weights at runtime and balances expert-weight precision with the KV cache sizes. PagedWeight exposes and effectiv"
source: "arXiv"
sourceUrl: "https://arxiv.org/abs/2607.16184v1"
---

# PagedWeight: Efficient MoE LLM Serving with Dynamic Quality-Aware Weight Quantization

> 来源: [arXiv](https://arxiv.org/abs/2607.16184v1)

作者: Yuchen Yang, Yifan Zhao, Anisha Dasgupta 等

Mixture-of-Experts (MoE) is a popular class of large language models (LLMs), offering high efficiency and accuracy. However, in KV-cache-intensive serving scenarios, MoEs often exhibit a tension between the GPU memory requirements of the model weights and the growing KV cache. We propose PagedWeight, a novel management method for MoE LLM serving that dynamically quantizes MoE model's weights at runtime and balances expert-weight precision with the KV cache sizes. PagedWeight exposes and effectiv
