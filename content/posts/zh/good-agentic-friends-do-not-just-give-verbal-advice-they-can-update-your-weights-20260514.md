---
title: "Good Agentic Friends Do Not Just Give Verbal Advice: They Can Update Your Weights"
date: "2026-05-13"
category: "research"
tags: ["arxiv", "research", "ai"]
summary: "作者: Wenrui Bao, Huan Wang, Jian Wang 等  Multi-agent LLM systems usually collaborate by exchanging natural-language messages. This interface is simple and interpretable, but it forces each sender's intermediate computation to be serialized into tokens and then reprocessed by the receiver, thereby increasing the generated-token cost, prefill overhead, and KV-cache memory. We study an alternative communication interface: instead of appending a sender's message to the receiver's context, compile the sender's hidden states into a transient"
source: "arXiv"
sourceUrl: "https://arxiv.org/abs/2605.13839v1"
---

# Good Agentic Friends Do Not Just Give Verbal Advice: They Can Update Your Weights

> 来源: [arXiv](https://arxiv.org/abs/2605.13839v1)

作者: Wenrui Bao, Huan Wang, Jian Wang 等

Multi-agent LLM systems usually collaborate by exchanging natural-language messages. This interface is simple and interpretable, but it forces each sender's intermediate computation to be serialized into tokens and then reprocessed by the receiver, thereby increasing the generated-token cost, prefill overhead, and KV-cache memory. We study an alternative communication interface: instead of appending a sender's message to the receiver's context, compile the sender's hidden states into a transient
