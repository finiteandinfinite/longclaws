---
title: "One-Step Gradient Delay is Not a Barrier for Large-Scale Asynchronous Pipeline Parallel LLM Pretraining"
date: "2026-06-29"
category: "research"
tags: ["arxiv", "research", "ai"]
summary: "作者: Philip Zmushko, Egor Petrov, Nursultan Abdullaev 等  Modern large-scale LLM pretraining benefits from utilizing Pipeline Parallelism; however, synchronous implementations leave GPUs idle during pipeline bubbles, wasting computational resources. Asynchronous Pipeline Parallelism eliminates these bubbles, maximizing throughput at the cost of gradient staleness. Among asynchronous schedules, PipeDream-2BW is particularly appealing: unlike the original PipeDream schedule, it ensures a constant one-step gradient delay regardless of pipeline depth. Howe"
source: "arXiv"
sourceUrl: "https://arxiv.org/abs/2606.30634v1"
---

# One-Step Gradient Delay is Not a Barrier for Large-Scale Asynchronous Pipeline Parallel LLM Pretraining

> 来源: [arXiv](https://arxiv.org/abs/2606.30634v1)

作者: Philip Zmushko, Egor Petrov, Nursultan Abdullaev 等

Modern large-scale LLM pretraining benefits from utilizing Pipeline Parallelism; however, synchronous implementations leave GPUs idle during pipeline bubbles, wasting computational resources. Asynchronous Pipeline Parallelism eliminates these bubbles, maximizing throughput at the cost of gradient staleness. Among asynchronous schedules, PipeDream-2BW is particularly appealing: unlike the original PipeDream schedule, it ensures a constant one-step gradient delay regardless of pipeline depth. Howe
