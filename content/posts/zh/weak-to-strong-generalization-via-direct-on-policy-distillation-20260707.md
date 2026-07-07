---
title: "Weak-to-Strong Generalization via Direct On-Policy Distillation"
date: "2026-07-06"
category: "research"
tags: ["arxiv", "research", "ai"]
summary: "作者: Shiyuan Feng, Huan-ang Gao, Haohan Chi 等  Reinforcement learning with verifiable rewards (RLVR) is a powerful recipe for improving language-model reasoning, but it is expensive to repeat on every new strong model because the target model must generate many rollouts during training. As models scale, post-training itself becomes a bottleneck. We study a weak-to-strong alternative: run RL on a smaller model where rollouts are cheaper, then reuse what that RL run learned to improve a stronger target model. Directly distilling the post-RL we"
source: "arXiv"
sourceUrl: "https://arxiv.org/abs/2607.05394v1"
---

# Weak-to-Strong Generalization via Direct On-Policy Distillation

> 来源: [arXiv](https://arxiv.org/abs/2607.05394v1)

作者: Shiyuan Feng, Huan-ang Gao, Haohan Chi 等

Reinforcement learning with verifiable rewards (RLVR) is a powerful recipe for improving language-model reasoning, but it is expensive to repeat on every new strong model because the target model must generate many rollouts during training. As models scale, post-training itself becomes a bottleneck. We study a weak-to-strong alternative: run RL on a smaller model where rollouts are cheaper, then reuse what that RL run learned to improve a stronger target model. Directly distilling the post-RL we
