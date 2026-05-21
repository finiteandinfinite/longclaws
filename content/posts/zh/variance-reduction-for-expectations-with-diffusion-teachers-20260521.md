---
title: "Variance Reduction for Expectations with Diffusion Teachers"
date: "2026-05-20"
category: "research"
tags: ["arxiv", "research", "ai"]
summary: "作者: Jesse Bettencourt, Xindi Wu, Matan Atzmon 等  Pretrained diffusion models serve as frozen teachers feeding downstream pipelines such as text-to-3D, single-step distillation, and data attribution. The teacher gradients these pipelines consume are Monte Carlo (MC) expectations over noise levels and Gaussian noise samples; their estimator variance dominates compute cost because each draw requires expensive upstream work (rendering, simulation, encoding). We introduce CARV, a compute-aware variance-accounting framework that motivates a hierarch"
source: "arXiv"
sourceUrl: "https://arxiv.org/abs/2605.21489v1"
---

# Variance Reduction for Expectations with Diffusion Teachers

> 来源: [arXiv](https://arxiv.org/abs/2605.21489v1)

作者: Jesse Bettencourt, Xindi Wu, Matan Atzmon 等

Pretrained diffusion models serve as frozen teachers feeding downstream pipelines such as text-to-3D, single-step distillation, and data attribution. The teacher gradients these pipelines consume are Monte Carlo (MC) expectations over noise levels and Gaussian noise samples; their estimator variance dominates compute cost because each draw requires expensive upstream work (rendering, simulation, encoding). We introduce CARV, a compute-aware variance-accounting framework that motivates a hierarch
