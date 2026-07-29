---
title: "Certified Parallel-in-Time Sinkhorn for Dynamic Entropic Optimal Transport"
date: "2026-07-27"
category: "research"
tags: ["arxiv", "research", "ai"]
summary: "作者: Xinyang Wen  Dynamic applications, including optimal-transport Flow Matching, repeatedly solve related entropic optimal transport problems, yet conventional distributed Sinkhorn processes frames sequentially and synchronizes after every iteration. We present TemporalSinkhorn, a parallel-in-time executor that batches future candidates and their repairs without making output accuracy speculative. A centered, row-sharded certificate accepts only a deterministic safe prefix. The remaining candidates share packed"
source: "arXiv"
sourceUrl: "https://arxiv.org/abs/2607.24741v1"
---

# Certified Parallel-in-Time Sinkhorn for Dynamic Entropic Optimal Transport

> 来源: [arXiv](https://arxiv.org/abs/2607.24741v1)

作者: Xinyang Wen

Dynamic applications, including optimal-transport Flow Matching, repeatedly solve related entropic optimal transport problems, yet conventional distributed Sinkhorn processes frames sequentially and synchronizes after every iteration. We present TemporalSinkhorn, a parallel-in-time executor that batches future candidates and their repairs without making output accuracy speculative. A centered, row-sharded certificate accepts only a deterministic safe prefix. The remaining candidates share packed
