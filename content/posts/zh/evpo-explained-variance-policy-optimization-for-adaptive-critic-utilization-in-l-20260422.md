---
title: "EVPO: Explained Variance Policy Optimization for Adaptive Critic Utilization in LLM Post-Training"
date: "2026-04-21"
category: "research"
tags: ["arxiv", "research", "ai"]
summary: "作者: Chengjun Pan, Shichun Liu, Jiahang Lin 等  Reinforcement learning (RL) for LLM post-training faces a fundamental design choice: whether to use a learned critic as a baseline for policy optimization. Classical theory favors critic-based methods such as PPO for variance reduction, yet critic-free alternatives like GRPO have gained widespread adoption due to their simplicity and competitive performance. We show that in sparse-reward settings, a learned critic can inject estimation noise that exceeds the state signal it captures, increasing "
source: "arXiv"
sourceUrl: "https://arxiv.org/abs/2604.19485v1"
---

# EVPO: Explained Variance Policy Optimization for Adaptive Critic Utilization in LLM Post-Training

> 来源: [arXiv](https://arxiv.org/abs/2604.19485v1)

作者: Chengjun Pan, Shichun Liu, Jiahang Lin 等

Reinforcement learning (RL) for LLM post-training faces a fundamental design choice: whether to use a learned critic as a baseline for policy optimization. Classical theory favors critic-based methods such as PPO for variance reduction, yet critic-free alternatives like GRPO have gained widespread adoption due to their simplicity and competitive performance. We show that in sparse-reward settings, a learned critic can inject estimation noise that exceeds the state signal it captures, increasing 
