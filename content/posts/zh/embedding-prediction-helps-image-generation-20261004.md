---
title: "Embedding Prediction Helps Image Generation"
date: "2026-10-01"
category: "research"
tags: ["arxiv", "research", "ai"]
summary: "作者: Sihan Xu, Ji Xie, Zilin Wang 等  In diffusion transformers, a class label or a text prompt is embedded once, and the same condition is reused at every denoising step. We ask whether predicted embeddings can serve as this condition instead. Next-Embedding Predictive Autoregression (NEPA) trains a Transformer to predict the next continuous embedding in a sequence. In generation, the clean image follows the noisy image, so its embeddings are the next embeddings after the condition and the noisy image. We train a NEPA model to pred"
source: "arXiv"
sourceUrl: "https://arxiv.org/abs/2610.02203v1"
---

# Embedding Prediction Helps Image Generation

> 来源: [arXiv](https://arxiv.org/abs/2610.02203v1)

作者: Sihan Xu, Ji Xie, Zilin Wang 等

In diffusion transformers, a class label or a text prompt is embedded once, and the same condition is reused at every denoising step. We ask whether predicted embeddings can serve as this condition instead. Next-Embedding Predictive Autoregression (NEPA) trains a Transformer to predict the next continuous embedding in a sequence. In generation, the clean image follows the noisy image, so its embeddings are the next embeddings after the condition and the noisy image. We train a NEPA model to pred
