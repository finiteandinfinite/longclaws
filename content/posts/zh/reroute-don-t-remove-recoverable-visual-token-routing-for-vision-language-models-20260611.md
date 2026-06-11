---
title: "Reroute, Don't Remove: Recoverable Visual Token Routing for Vision-Language Models"
date: "2026-06-10"
category: "research"
tags: ["arxiv", "research", "ai"]
summary: "作者: Cheng-Yu Yang, Shao-Yuan Lo, Yu-Lun Liu  Vision-language models (VLMs) project images into hundreds to thousands of visual tokens, making decoder inference expensive in both attention computation and KV-cache memory. Existing visual-token reduction methods largely follow a rank-and-remove paradigm: they score visual tokens, keep a compact subset, and permanently discard the rest. We show that this irreversible action is fragile because visual-token importance changes across decoder depth; tokens ranked low at one stage may become relev"
source: "arXiv"
sourceUrl: "https://arxiv.org/abs/2606.12412v1"
---

# Reroute, Don't Remove: Recoverable Visual Token Routing for Vision-Language Models

> 来源: [arXiv](https://arxiv.org/abs/2606.12412v1)

作者: Cheng-Yu Yang, Shao-Yuan Lo, Yu-Lun Liu

Vision-language models (VLMs) project images into hundreds to thousands of visual tokens, making decoder inference expensive in both attention computation and KV-cache memory. Existing visual-token reduction methods largely follow a rank-and-remove paradigm: they score visual tokens, keep a compact subset, and permanently discard the rest. We show that this irreversible action is fragile because visual-token importance changes across decoder depth; tokens ranked low at one stage may become relev
