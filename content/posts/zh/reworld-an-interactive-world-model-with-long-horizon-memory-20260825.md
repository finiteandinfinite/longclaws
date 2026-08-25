---
title: "ReWorld: An Interactive World Model with Long-Horizon Memory"
date: "2026-08-24"
category: "research"
tags: ["arxiv", "research", "ai"]
summary: "作者: Zhifei Chen, Luozhou Wang, Guibao Shen 等  An interactive world model must follow the user's actions, remember the places it has shown, and stream in real time. The tension is structural: control wants a short horizon, memory wants an unbounded one. ReWorld separates the two during training and bounds them at inference. Mixed per-head attention windows confine most heads to the recent past while a small set of global heads attends over the entire history, and random head routing keeps either capability from binding to particular heads; r"
source: "arXiv"
sourceUrl: "https://arxiv.org/abs/2608.23565v1"
---

# ReWorld: An Interactive World Model with Long-Horizon Memory

> 来源: [arXiv](https://arxiv.org/abs/2608.23565v1)

作者: Zhifei Chen, Luozhou Wang, Guibao Shen 等

An interactive world model must follow the user's actions, remember the places it has shown, and stream in real time. The tension is structural: control wants a short horizon, memory wants an unbounded one. ReWorld separates the two during training and bounds them at inference. Mixed per-head attention windows confine most heads to the recent past while a small set of global heads attends over the entire history, and random head routing keeps either capability from binding to particular heads; r
