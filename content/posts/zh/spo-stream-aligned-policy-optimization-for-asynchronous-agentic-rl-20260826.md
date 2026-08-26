---
title: "SPO++: Stream-Aligned Policy Optimization for Asynchronous Agentic RL"
date: "2026-08-25"
category: "research"
tags: ["arxiv", "research", "ai"]
summary: "作者: Kai Ruan, Jinghao Lin, Qianshan Wei 等  Group-relative reinforcement learning waits for sibling rollouts of the same prompt, which is costly for long and variable tool-use trajectories. Single-stream Policy Optimization (SPO) removes this dependency with a persistent prompt-level value estimate, but its recipe whitens one advantage per trajectory before optimizing a token-mean actor loss. We show that trajectory centering generally does not center the token-weighted quantity consumed by the actor, and fix the mismatch by standardizing"
source: "arXiv"
sourceUrl: "https://arxiv.org/abs/2608.24870v1"
---

# SPO++: Stream-Aligned Policy Optimization for Asynchronous Agentic RL

> 来源: [arXiv](https://arxiv.org/abs/2608.24870v1)

作者: Kai Ruan, Jinghao Lin, Qianshan Wei 等

Group-relative reinforcement learning waits for sibling rollouts of the same prompt, which is costly for long and variable tool-use trajectories. Single-stream Policy Optimization (SPO) removes this dependency with a persistent prompt-level value estimate, but its recipe whitens one advantage per trajectory before optimizing a token-mean actor loss. We show that trajectory centering generally does not center the token-weighted quantity consumed by the actor, and fix the mismatch by standardizing
