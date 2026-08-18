---
title: "Second-Moment Memory in Coordinatewise Adam"
date: "2026-08-16"
category: "research"
tags: ["arxiv", "research", "ai"]
summary: "作者: Jeonseong Kim  Adam retains a moving average of past squared gradients in its denominator, but the optimization cost of this memory is not well understood. We show that second-moment memory can itself suppress progress toward the optimum even under finite-variance stochastic gradients. For a simple two-point oracle, the expected positive normalized update is $O(M_2^{-1/2})$ after an initialization transient, where $M_2=(1-β_2)^{-1}$ is the second-moment memory length. We convert this directional bound, under t"
source: "arXiv"
sourceUrl: "https://arxiv.org/abs/2608.15824v1"
---

# Second-Moment Memory in Coordinatewise Adam

> 来源: [arXiv](https://arxiv.org/abs/2608.15824v1)

作者: Jeonseong Kim

Adam retains a moving average of past squared gradients in its denominator, but the optimization cost of this memory is not well understood. We show that second-moment memory can itself suppress progress toward the optimum even under finite-variance stochastic gradients. For a simple two-point oracle, the expected positive normalized update is $O(M_2^{-1/2})$ after an initialization transient, where $M_2=(1-β_2)^{-1}$ is the second-moment memory length. We convert this directional bound, under t
