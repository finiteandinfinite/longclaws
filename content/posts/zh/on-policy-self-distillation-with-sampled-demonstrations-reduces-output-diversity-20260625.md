---
title: "On-Policy Self-Distillation with Sampled Demonstrations Reduces Output Diversity"
date: "2026-06-24"
category: "research"
tags: ["arxiv", "research", "ai"]
summary: "作者: Andrei Liviu Nicolicioiu, Mohammad Pezeshki, Aaron Courville  On-policy self-distillation achieves strong pass@1 accuracy by using a single model as both teacher and student, with the teacher conditioned on a correct demonstration to provide dense token-level feedback. We show that this could come at a hidden cost: rollout diversity decreases and pass@k curves flatten (i.e., generating more rollouts fails to improve accuracy). We trace this to compounding biases in the design of self-distillation with sampled demonstrations. The teacher scores each student"
source: "arXiv"
sourceUrl: "https://arxiv.org/abs/2606.26091v1"
---

# On-Policy Self-Distillation with Sampled Demonstrations Reduces Output Diversity

> 来源: [arXiv](https://arxiv.org/abs/2606.26091v1)

作者: Andrei Liviu Nicolicioiu, Mohammad Pezeshki, Aaron Courville

On-policy self-distillation achieves strong pass@1 accuracy by using a single model as both teacher and student, with the teacher conditioned on a correct demonstration to provide dense token-level feedback. We show that this could come at a hidden cost: rollout diversity decreases and pass@k curves flatten (i.e., generating more rollouts fails to improve accuracy). We trace this to compounding biases in the design of self-distillation with sampled demonstrations. The teacher scores each student
