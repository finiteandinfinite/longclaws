---
title: "WorldCache: Content-Aware Caching for Accelerated Video World Models"
date: "2026-03-23"
category: "research"
tags: ["arxiv", "research", "ai"]
summary: "作者: Umair Nawaz, Ahmed Heakl, Ufaq Khan 等  Diffusion Transformers (DiTs) power high-fidelity video world models but remain computationally expensive due to sequential denoising and costly spatio-temporal attention. Training-free feature caching accelerates inference by reusing intermediate activations across denoising steps; however, existing methods largely rely on a Zero-Order Hold assumption i.e., reusing cached features as static snapshots when global drift is small. This often leads to ghosting artifacts, blur, and motion inconsiste"
source: "arXiv"
sourceUrl: "https://arxiv.org/abs/2603.22286v1"
---

# WorldCache: Content-Aware Caching for Accelerated Video World Models

> 来源: [arXiv](https://arxiv.org/abs/2603.22286v1)

作者: Umair Nawaz, Ahmed Heakl, Ufaq Khan 等

Diffusion Transformers (DiTs) power high-fidelity video world models but remain computationally expensive due to sequential denoising and costly spatio-temporal attention. Training-free feature caching accelerates inference by reusing intermediate activations across denoising steps; however, existing methods largely rely on a Zero-Order Hold assumption i.e., reusing cached features as static snapshots when global drift is small. This often leads to ghosting artifacts, blur, and motion inconsiste
