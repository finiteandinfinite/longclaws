---
title: "SFT-then-RL Outperforms Mixed-Policy Methods for LLM Reasoning"
date: "2026-04-26"
category: "research"
tags: ["arxiv", "research", "ai"]
summary: "作者: Alexis Limozin, Eduard Durech, Torsten Hoefler 等  Recent mixed-policy optimization methods for LLM reasoning that interleave or blend supervised and reinforcement learning signals report improvements over the standard SFT-then-RL pipeline. We show that numerous recently published research papers rely on a faulty baseline caused by two distinct bugs: a CPU-offloaded optimizer bug in DeepSpeed that silently drops intermediate micro-batches during gradient accumulation (affecting multiple downstream frameworks including TRL, OpenRLHF and Llama-Fac"
source: "arXiv"
sourceUrl: "https://arxiv.org/abs/2604.23747v1"
---

# SFT-then-RL Outperforms Mixed-Policy Methods for LLM Reasoning

> 来源: [arXiv](https://arxiv.org/abs/2604.23747v1)

作者: Alexis Limozin, Eduard Durech, Torsten Hoefler 等

Recent mixed-policy optimization methods for LLM reasoning that interleave or blend supervised and reinforcement learning signals report improvements over the standard SFT-then-RL pipeline. We show that numerous recently published research papers rely on a faulty baseline caused by two distinct bugs: a CPU-offloaded optimizer bug in DeepSpeed that silently drops intermediate micro-batches during gradient accumulation (affecting multiple downstream frameworks including TRL, OpenRLHF and Llama-Fac
