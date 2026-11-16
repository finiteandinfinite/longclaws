---
title: "Callo: Serving Cache-Miss Requests with Speculative Decoding on Invalidated KV under Prefill-Decode Disaggregation"
date: "2026-11-13"
category: "research"
tags: ["arxiv", "research", "ai"]
summary: "作者: Jianjun Ou, Matthew Lentz  Agent sessions may involve frequent context edits, which effectively invalidate cached KV state and force requests to wait for re-prefill before decoding. We present Callo, a disaggregated serving system that leverages invalidated KV for speculative drafts to reduce this latency, while verifying drafts against the exact KV after prefill before committing tokens. Callo makes effective use of decode resources by scheduling speculations during periods of underutilization and preempting speculations"
source: "arXiv"
sourceUrl: "https://arxiv.org/abs/2611.18459v1"
---

# Callo: Serving Cache-Miss Requests with Speculative Decoding on Invalidated KV under Prefill-Decode Disaggregation

> 来源: [arXiv](https://arxiv.org/abs/2611.18459v1)

作者: Jianjun Ou, Matthew Lentz

Agent sessions may involve frequent context edits, which effectively invalidate cached KV state and force requests to wait for re-prefill before decoding. We present Callo, a disaggregated serving system that leverages invalidated KV for speculative drafts to reduce this latency, while verifying drafts against the exact KV after prefill before committing tokens. Callo makes effective use of decode resources by scheduling speculations during periods of underutilization and preempting speculations
