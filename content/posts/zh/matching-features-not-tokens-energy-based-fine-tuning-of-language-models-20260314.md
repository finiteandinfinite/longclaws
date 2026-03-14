---
title: "Matching Features, Not Tokens: Energy-Based Fine-Tuning of Language Models"
date: "2026-03-12"
category: "research"
tags: ["arxiv", "research", "ai"]
summary: "作者: Samy Jelassi, Mujin Kwun, Rosie Zhao 等  Cross-entropy (CE) training provides dense and scalable supervision for language models, but it optimizes next-token prediction under teacher forcing rather than sequence-level behavior under model rollouts. We introduce a feature-matching objective for language-model fine-tuning that targets sequence-level statistics of the completion distribution, providing dense semantic feedback without requiring a task-specific verifier or preference model. To optimize this objective efficiently, we propose"
source: "arXiv"
sourceUrl: "https://arxiv.org/abs/2603.12248v1"
---

# Matching Features, Not Tokens: Energy-Based Fine-Tuning of Language Models

> 来源: [arXiv](https://arxiv.org/abs/2603.12248v1)

作者: Samy Jelassi, Mujin Kwun, Rosie Zhao 等

Cross-entropy (CE) training provides dense and scalable supervision for language models, but it optimizes next-token prediction under teacher forcing rather than sequence-level behavior under model rollouts. We introduce a feature-matching objective for language-model fine-tuning that targets sequence-level statistics of the completion distribution, providing dense semantic feedback without requiring a task-specific verifier or preference model. To optimize this objective efficiently, we propose
