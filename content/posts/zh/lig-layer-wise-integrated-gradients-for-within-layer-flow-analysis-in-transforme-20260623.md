---
title: "LIG: Layer-wise Integrated Gradients for Within-Layer Flow Analysis in Transformers"
date: "2026-06-19"
category: "research"
tags: ["arxiv", "research", "ai"]
summary: "作者: Eight Suzuki, Hideitsu Hino, Noboru Murata  Transformers achieve strong performance, but their internal computations remain opaque. We view each Transformer layer as a dynamic graph whose nodes are token representations and per-head attention outputs, with Multi-Head Attention (ATT) and MLP as module boundaries. On this graph we use LIG (Layer-wise Integrated Gradients), which applies set-to-set Integrated Gradients (IG) at nonlinear module boundaries. Set-to-set IG applies IG to a map from a set of input token representations to a set of"
source: "arXiv"
sourceUrl: "https://arxiv.org/abs/2606.21564v1"
---

# LIG: Layer-wise Integrated Gradients for Within-Layer Flow Analysis in Transformers

> 来源: [arXiv](https://arxiv.org/abs/2606.21564v1)

作者: Eight Suzuki, Hideitsu Hino, Noboru Murata

Transformers achieve strong performance, but their internal computations remain opaque. We view each Transformer layer as a dynamic graph whose nodes are token representations and per-head attention outputs, with Multi-Head Attention (ATT) and MLP as module boundaries. On this graph we use LIG (Layer-wise Integrated Gradients), which applies set-to-set Integrated Gradients (IG) at nonlinear module boundaries. Set-to-set IG applies IG to a map from a set of input token representations to a set of
