---
title: "SpecKV: Adaptive Speculative Decoding with Compression-Aware Gamma Selection"
date: "2026-05-04"
category: "research"
tags: ["arxiv", "research", "ai"]
summary: "作者: Shikhar Shukla  Speculative decoding accelerates large language model (LLM) inference by using a small draft model to propose candidate tokens that a larger target model verifies. A critical hyperparameter in this process is the speculation length~$γ$, which determines how many tokens the draft model proposes per step. Nearly all existing systems use a fixed~$γ$ (typically~4), yet empirical evidence suggests that the optimal value varies across task types and, crucially, depends on the compression level applied"
source: "arXiv"
sourceUrl: "https://arxiv.org/abs/2605.02888v1"
---

# SpecKV: Adaptive Speculative Decoding with Compression-Aware Gamma Selection

> 来源: [arXiv](https://arxiv.org/abs/2605.02888v1)

作者: Shikhar Shukla

Speculative decoding accelerates large language model (LLM) inference by using a small draft model to propose candidate tokens that a larger target model verifies. A critical hyperparameter in this process is the speculation length~$γ$, which determines how many tokens the draft model proposes per step. Nearly all existing systems use a fixed~$γ$ (typically~4), yet empirical evidence suggests that the optimal value varies across task types and, crucially, depends on the compression level applied
