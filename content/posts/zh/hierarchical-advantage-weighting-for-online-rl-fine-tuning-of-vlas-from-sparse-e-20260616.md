---
title: "Hierarchical Advantage Weighting for Online RL Fine-Tuning of VLAs from Sparse Episode Outcomes"
date: "2026-06-15"
category: "research"
tags: ["arxiv", "research", "ai"]
summary: "作者: Tongyan Fang, Siyuan Huang, Naiyu Fang 等  When pretrained VLA policies are fine-tuned through online RL, each rollout episode produces only a single binary outcome (success or failure), yet the actor update requires per-transition supervision. Existing approaches commonly reduce this sparse outcome to a single scalar reward or advantage signal, which conflates distinct forms of transition-level feedback and provides limited guidance once basic task success becomes achievable. First, a single scalar signal conflates the two objectives of"
source: "arXiv"
sourceUrl: "https://arxiv.org/abs/2606.17043v1"
---

# Hierarchical Advantage Weighting for Online RL Fine-Tuning of VLAs from Sparse Episode Outcomes

> 来源: [arXiv](https://arxiv.org/abs/2606.17043v1)

作者: Tongyan Fang, Siyuan Huang, Naiyu Fang 等

When pretrained VLA policies are fine-tuned through online RL, each rollout episode produces only a single binary outcome (success or failure), yet the actor update requires per-transition supervision. Existing approaches commonly reduce this sparse outcome to a single scalar reward or advantage signal, which conflates distinct forms of transition-level feedback and provides limited guidance once basic task success becomes achievable. First, a single scalar signal conflates the two objectives of
