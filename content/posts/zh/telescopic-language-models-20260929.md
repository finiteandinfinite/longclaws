---
title: "Telescopic Language Models"
date: "2026-09-28"
category: "research"
tags: ["arxiv", "research", "ai"]
summary: "作者: Zhilin Guo, Boqiao Zhang, Hakan Aktas 等  One deployed language model must often serve many compute budgets, yet serving each budget still means a separate training or compression run per point. We train a Telescopic Language Model (TLM) to be that continuum: a nested-capacity Transformer supervised by stochastic prefix supervision with a full anchor. At every step, one randomly truncated prefix of the capacity axis is trained against the full next-token target, alongside one full-capacity pass, so the trained artifact is a valid langua"
source: "arXiv"
sourceUrl: "https://arxiv.org/abs/2609.35769v1"
---

# Telescopic Language Models

> 来源: [arXiv](https://arxiv.org/abs/2609.35769v1)

作者: Zhilin Guo, Boqiao Zhang, Hakan Aktas 等

One deployed language model must often serve many compute budgets, yet serving each budget still means a separate training or compression run per point. We train a Telescopic Language Model (TLM) to be that continuum: a nested-capacity Transformer supervised by stochastic prefix supervision with a full anchor. At every step, one randomly truncated prefix of the capacity axis is trained against the full next-token target, alongside one full-capacity pass, so the trained artifact is a valid langua
