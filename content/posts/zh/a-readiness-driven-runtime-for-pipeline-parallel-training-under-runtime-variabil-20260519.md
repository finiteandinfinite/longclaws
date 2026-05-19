---
title: "A Readiness-Driven Runtime for Pipeline-Parallel Training under Runtime Variability"
date: "2026-05-18"
category: "research"
tags: ["arxiv", "research", "ai"]
summary: "作者: Ruitao Liu, Xinyang Tian, Shuo Chen 等  Pipeline parallelism is a key technique for scaling large-model training, but modern workloads exhibit runtime variability in computation and communication. Existing pipeline systems typically consume static, profiled, or adaptively generated schedules as pre-committed execution orders. When realized task readiness diverges from the pre-committed order, stages may wait for not-yet-ready work even though other executable work is available, creating stage misalignment, idle bubbles, and reduced ut"
source: "arXiv"
sourceUrl: "https://arxiv.org/abs/2605.18750v1"
---

# A Readiness-Driven Runtime for Pipeline-Parallel Training under Runtime Variability

> 来源: [arXiv](https://arxiv.org/abs/2605.18750v1)

作者: Ruitao Liu, Xinyang Tian, Shuo Chen 等

Pipeline parallelism is a key technique for scaling large-model training, but modern workloads exhibit runtime variability in computation and communication. Existing pipeline systems typically consume static, profiled, or adaptively generated schedules as pre-committed execution orders. When realized task readiness diverges from the pre-committed order, stages may wait for not-yet-ready work even though other executable work is available, creating stage misalignment, idle bubbles, and reduced ut
