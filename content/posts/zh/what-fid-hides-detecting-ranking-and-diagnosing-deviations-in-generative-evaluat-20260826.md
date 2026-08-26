---
title: "What FID Hides: Detecting, Ranking, and Diagnosing Deviations in Generative Evaluation"
date: "2026-08-25"
category: "research"
tags: ["arxiv", "research", "ai"]
summary: "作者: Hao Chen  Generative models are commonly ranked by Fréchet Inception Distance (FID) and Kernel Inception Distance (KID), yet FID's first-two-moment summary can miss distributional differences, and a reported scalar gap alone is not a calibrated test against sampling variation. FID's moment restriction has concrete consequences: on ImageNet, visually unrecognizable images optimized only to match the reference Inception mean and covariance obtain FID $24.7$ versus $58.6$ for held-out real images (lower is b"
source: "arXiv"
sourceUrl: "https://arxiv.org/abs/2608.24881v1"
---

# What FID Hides: Detecting, Ranking, and Diagnosing Deviations in Generative Evaluation

> 来源: [arXiv](https://arxiv.org/abs/2608.24881v1)

作者: Hao Chen

Generative models are commonly ranked by Fréchet Inception Distance (FID) and Kernel Inception Distance (KID), yet FID's first-two-moment summary can miss distributional differences, and a reported scalar gap alone is not a calibrated test against sampling variation. FID's moment restriction has concrete consequences: on ImageNet, visually unrecognizable images optimized only to match the reference Inception mean and covariance obtain FID $24.7$ versus $58.6$ for held-out real images (lower is b
