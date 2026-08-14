---
title: "Redistribution-based Cost Inference Improves Sparse Safe Offline RL"
date: "2026-08-12"
category: "research"
tags: ["arxiv", "research", "ai"]
summary: "作者: Ebenezer Gelo, Geraud Nangue Tasse, Steven James 等  Safe offline RL typically assumes access to dense per-step cost annotations, but in practice supervisors provide only trajectory-level stop-feedback: a binary signal at the first unsafe transition, with no per-step attribution. We frame this as a temporal credit assignment problem and propose the Redistribution-based Cost Inference (RCI) framework, which converts sparse stop-feedback into dense per-step costs via return decomposition, then trains a constrained offline policy on the augmented dat"
source: "arXiv"
sourceUrl: "https://arxiv.org/abs/2608.12306v1"
---

# Redistribution-based Cost Inference Improves Sparse Safe Offline RL

> 来源: [arXiv](https://arxiv.org/abs/2608.12306v1)

作者: Ebenezer Gelo, Geraud Nangue Tasse, Steven James 等

Safe offline RL typically assumes access to dense per-step cost annotations, but in practice supervisors provide only trajectory-level stop-feedback: a binary signal at the first unsafe transition, with no per-step attribution. We frame this as a temporal credit assignment problem and propose the Redistribution-based Cost Inference (RCI) framework, which converts sparse stop-feedback into dense per-step costs via return decomposition, then trains a constrained offline policy on the augmented dat
