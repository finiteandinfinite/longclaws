---
title: "Double Descent and Malign Overfitting in Diffusion Models"
date: "2026-09-22"
category: "research"
tags: ["arxiv", "research", "ai"]
summary: "作者: Raphaël Urfin, Tony Bonnaire, Giulio Biroli 等  Conventional wisdom in deep learning holds that overparameterization---having more parameters $p$ than training samples $n$---is benign: larger models generalize better and, even without regularization, interpolating models generalize well, the test error following a double-descent curve. One might expect the same benign overfitting for diffusion models, whose training reduces to regression, i.e. to minimizing a quadratic score-matching loss. Yet the opposite is observed: overfitting here is cat"
source: "arXiv"
sourceUrl: "https://arxiv.org/abs/2609.26392v1"
---

# Double Descent and Malign Overfitting in Diffusion Models

> 来源: [arXiv](https://arxiv.org/abs/2609.26392v1)

作者: Raphaël Urfin, Tony Bonnaire, Giulio Biroli 等

Conventional wisdom in deep learning holds that overparameterization---having more parameters $p$ than training samples $n$---is benign: larger models generalize better and, even without regularization, interpolating models generalize well, the test error following a double-descent curve. One might expect the same benign overfitting for diffusion models, whose training reduces to regression, i.e. to minimizing a quadratic score-matching loss. Yet the opposite is observed: overfitting here is cat
