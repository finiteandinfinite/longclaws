---
title: "Sessa: Selective State Space Attention"
date: "2026-04-20"
category: "research"
tags: ["arxiv", "research", "ai"]
summary: "作者: Liubomyr Horbatko  Modern sequence models are dominated by Transformers, where self-attention mixes information from the visible context in an input-dependent way. However, when retrieval is not sharp and attention remains diffuse over an effective support $S_{\mathrm{eff}}(t)$, the influence of any individual token is diluted, typically scaling as $O(1/S_{\mathrm{eff}}(t))$ and reaching $O(1/\ell)$ for old tokens in full-prefix settings. Structured state-space models process sequences recurrently through an expli"
source: "arXiv"
sourceUrl: "https://arxiv.org/abs/2604.18580v1"
---

# Sessa: Selective State Space Attention

> 来源: [arXiv](https://arxiv.org/abs/2604.18580v1)

作者: Liubomyr Horbatko

Modern sequence models are dominated by Transformers, where self-attention mixes information from the visible context in an input-dependent way. However, when retrieval is not sharp and attention remains diffuse over an effective support $S_{\mathrm{eff}}(t)$, the influence of any individual token is diluted, typically scaling as $O(1/S_{\mathrm{eff}}(t))$ and reaching $O(1/\ell)$ for old tokens in full-prefix settings. Structured state-space models process sequences recurrently through an expli
