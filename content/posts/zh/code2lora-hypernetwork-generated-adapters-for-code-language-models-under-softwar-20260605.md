---
title: "Code2LoRA: Hypernetwork-Generated Adapters for Code Language Models under Software Evolution"
date: "2026-06-04"
category: "research"
tags: ["arxiv", "research", "ai"]
summary: "作者: Liliana Hotsko, Yinxi Li, Yuntian Deng 等  Code language models need repository-level context to resolve imports, APIs, and project conventions. Existing methods inject this knowledge as long inputs (retrieved through RAG or dependency analysis) or through per-repository fine-tuning and LoRA -- costly at repository scale and brittle to evolving codebases. We introduce Code2LoRA, a hypernetwork framework that generates repository-specific LoRA adapters, effectively injecting repository knowledge with zero inference-time token overhead. Co"
source: "arXiv"
sourceUrl: "https://arxiv.org/abs/2606.06492v1"
---

# Code2LoRA: Hypernetwork-Generated Adapters for Code Language Models under Software Evolution

> 来源: [arXiv](https://arxiv.org/abs/2606.06492v1)

作者: Liliana Hotsko, Yinxi Li, Yuntian Deng 等

Code language models need repository-level context to resolve imports, APIs, and project conventions. Existing methods inject this knowledge as long inputs (retrieved through RAG or dependency analysis) or through per-repository fine-tuning and LoRA -- costly at repository scale and brittle to evolving codebases. We introduce Code2LoRA, a hypernetwork framework that generates repository-specific LoRA adapters, effectively injecting repository knowledge with zero inference-time token overhead. Co
