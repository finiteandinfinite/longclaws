---
title: "Spend Experts Where You Are Unsure: Confidence-Adaptive Routing for Mixture-of-Experts LoRA"
date: "2026-07-28"
category: "research"
tags: ["arxiv", "research", "ai"]
summary: "作者: Tom Saliencro, Rohan Desai, Priya Nair 等  Mixture-of-Experts (MoE) variants of Low-Rank Adaptation (LoRA) route every token to a fixed number of experts $k$. Tokens differ in how uncertain the model is about them, so a single k over-spends on easy tokens and under-serves hard ones. We observe that the router's output distribution is already a per-token uncertainty signal: peaked mass indicates confidence, while a flat distribution indicates ambiguity. We introduce CARE (Confidence-Adaptive Routing of Experts), which admits experts in a "
source: "arXiv"
sourceUrl: "https://arxiv.org/abs/2607.26052v1"
---

# Spend Experts Where You Are Unsure: Confidence-Adaptive Routing for Mixture-of-Experts LoRA

> 来源: [arXiv](https://arxiv.org/abs/2607.26052v1)

作者: Tom Saliencro, Rohan Desai, Priya Nair 等

Mixture-of-Experts (MoE) variants of Low-Rank Adaptation (LoRA) route every token to a fixed number of experts $k$. Tokens differ in how uncertain the model is about them, so a single k over-spends on easy tokens and under-serves hard ones. We observe that the router's output distribution is already a per-token uncertainty signal: peaked mass indicates confidence, while a flat distribution indicates ambiguity. We introduce CARE (Confidence-Adaptive Routing of Experts), which admits experts in a 
