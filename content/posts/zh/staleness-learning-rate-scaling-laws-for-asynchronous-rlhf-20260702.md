---
title: "Staleness-Learning Rate Scaling Laws for Asynchronous RLHF"
date: "2026-07-01"
category: "research"
tags: ["arxiv", "research", "ai"]
summary: "作者: Jingwei Song, Haofeng Xu, Jie Xiao 等  High-throughput RLHF systems often decouple rollout generation from policy optimization, leading to the use of stale rollouts during learner updates. In this work, we study the effect of such staleness in asynchronous GRPO. We make the behavior policy explicit in the GRPO surrogate objective and distinguish between the surrogate-gradient mapping used by the learner and the true total derivative of a distribution-dependent population objective. Under assumptions of local boundedness, distribution"
source: "arXiv"
sourceUrl: "https://arxiv.org/abs/2607.01083v1"
---

# Staleness-Learning Rate Scaling Laws for Asynchronous RLHF

> 来源: [arXiv](https://arxiv.org/abs/2607.01083v1)

作者: Jingwei Song, Haofeng Xu, Jie Xiao 等

High-throughput RLHF systems often decouple rollout generation from policy optimization, leading to the use of stale rollouts during learner updates. In this work, we study the effect of such staleness in asynchronous GRPO. We make the behavior policy explicit in the GRPO surrogate objective and distinguish between the surrogate-gradient mapping used by the learner and the true total derivative of a distribution-dependent population objective. Under assumptions of local boundedness, distribution
