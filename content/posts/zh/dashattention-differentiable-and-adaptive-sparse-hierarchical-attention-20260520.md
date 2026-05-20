---
title: "DashAttention: Differentiable and Adaptive Sparse Hierarchical Attention"
date: "2026-05-18"
category: "research"
tags: ["arxiv", "research", "ai"]
summary: "作者: Yuxiang Huang, Nuno M. T. Gonçalves, Federico Alvetreti 等  Current hierarchical attention methods, such as NSA and InfLLMv2, select the top-k relevant key-value (KV) blocks based on coarse attention scores and subsequently apply fine-grained softmax attention on the selected tokens. However, the top-k operation assumes the number of relevant tokens for any query is fixed and it precludes the gradient flow between the sparse and dense stages. In this work, we propose DashAttention (Differentiable and Adaptive Sparse Hierarchical Attention), which leverag"
source: "arXiv"
sourceUrl: "https://arxiv.org/abs/2605.18753v1"
---

# DashAttention: Differentiable and Adaptive Sparse Hierarchical Attention

> 来源: [arXiv](https://arxiv.org/abs/2605.18753v1)

作者: Yuxiang Huang, Nuno M. T. Gonçalves, Federico Alvetreti 等

Current hierarchical attention methods, such as NSA and InfLLMv2, select the top-k relevant key-value (KV) blocks based on coarse attention scores and subsequently apply fine-grained softmax attention on the selected tokens. However, the top-k operation assumes the number of relevant tokens for any query is fixed and it precludes the gradient flow between the sparse and dense stages. In this work, we propose DashAttention (Differentiable and Adaptive Sparse Hierarchical Attention), which leverag
