---
title: "Average-Depth Variable Execution via Request-Local Token Routing"
date: "2026-11-20"
category: "research"
tags: ["arxiv", "research", "ai"]
summary: "作者: Pengjie Zheng, Mengwei Xie, Huan Yang 等  Layer skipping can reduce large language model inference costs, but a request budget does not specify how to allocate layer execution across generated tokens. We introduce \method{}, which allows tokens to execute different numbers of layers while matching each request's mean executed depth to a continuous budget. At each routed layer, a router reads the current token state and its request's budget and decides whether to execute the Transformer block. Tokens that skip the block pass through a li"
source: "arXiv"
sourceUrl: "https://arxiv.org/abs/2611.27738v1"
---

# Average-Depth Variable Execution via Request-Local Token Routing

> 来源: [arXiv](https://arxiv.org/abs/2611.27738v1)

作者: Pengjie Zheng, Mengwei Xie, Huan Yang 等

Layer skipping can reduce large language model inference costs, but a request budget does not specify how to allocate layer execution across generated tokens. We introduce \method{}, which allows tokens to execute different numbers of layers while matching each request's mean executed depth to a continuous budget. At each routed layer, a router reads the current token state and its request's budget and decides whether to execute the Transformer block. Tokens that skip the block pass through a li
