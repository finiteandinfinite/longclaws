---
title: "Rethinking the Divergence Regularization in LLM RL"
date: "2026-06-08"
category: "research"
tags: ["arxiv", "research", "ai"]
summary: "作者: Jiarui Yao, Xiangxin Zhou, Penghui Qi 等  Reinforcement learning (RL) has become a key component of post-training large language models (LLMs). In practice, LLM RL is often off-policy because of training-inference mismatch and policy staleness, making trust-region control essential for stable optimization. Mainstream methods such as PPO and GRPO approximate this control with a ratio-clipping mechanism, but the importance ratio can be a poor proxy for distributional shift in long-tailed vocabularies. Recent work such as DPPO addresses th"
source: "arXiv"
sourceUrl: "https://arxiv.org/abs/2606.09821v1"
---

# Rethinking the Divergence Regularization in LLM RL

> 来源: [arXiv](https://arxiv.org/abs/2606.09821v1)

作者: Jiarui Yao, Xiangxin Zhou, Penghui Qi 等

Reinforcement learning (RL) has become a key component of post-training large language models (LLMs). In practice, LLM RL is often off-policy because of training-inference mismatch and policy staleness, making trust-region control essential for stable optimization. Mainstream methods such as PPO and GRPO approximate this control with a ratio-clipping mechanism, but the importance ratio can be a poor proxy for distributional shift in long-tailed vocabularies. Recent work such as DPPO addresses th
