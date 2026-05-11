---
title: "Normalizing Trajectory Models"
date: "2026-05-08"
category: "research"
tags: ["arxiv", "research", "ai"]
summary: "作者: Jiatao Gu, Tianrong Chen, Ying Shen 等  Diffusion-based models decompose sampling into many small Gaussian denoising steps -- an assumption that breaks down when generation is compressed to a few coarse transitions. Existing few-step methods address this through distillation, consistency training, or adversarial objectives, but sacrifice the likelihood framework in the process. We introduce Normalizing Trajectory Models (NTM), which models each reverse step as an expressive conditional normalizing flow with exact likelihood training. "
source: "arXiv"
sourceUrl: "https://arxiv.org/abs/2605.08078v1"
---

# Normalizing Trajectory Models

> 来源: [arXiv](https://arxiv.org/abs/2605.08078v1)

作者: Jiatao Gu, Tianrong Chen, Ying Shen 等

Diffusion-based models decompose sampling into many small Gaussian denoising steps -- an assumption that breaks down when generation is compressed to a few coarse transitions. Existing few-step methods address this through distillation, consistency training, or adversarial objectives, but sacrifice the likelihood framework in the process. We introduce Normalizing Trajectory Models (NTM), which models each reverse step as an expressive conditional normalizing flow with exact likelihood training. 
