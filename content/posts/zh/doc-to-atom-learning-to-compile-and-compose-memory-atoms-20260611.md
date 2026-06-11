---
title: "Doc-to-Atom: Learning to Compile and Compose Memory Atoms"
date: "2026-06-10"
category: "research"
tags: ["arxiv", "research", "ai"]
summary: "作者: Xingjian Diao, Wenbo Li, Yashas Malur Saidutta 等  Long input sequences are central to document understanding and multi-step reasoning in Large Language Models, yet the quadratic cost of attention makes inference both memory-intensive and slow. Context distillation mitigates this by compressing contextual information into model parameters, and recent work such as Doc-to-LoRA amortizes context distillation into a single forward pass that generates one LoRA adapter per document. However, producing a single monolithic adapter for all queries leads "
source: "arXiv"
sourceUrl: "https://arxiv.org/abs/2606.12400v1"
---

# Doc-to-Atom: Learning to Compile and Compose Memory Atoms

> 来源: [arXiv](https://arxiv.org/abs/2606.12400v1)

作者: Xingjian Diao, Wenbo Li, Yashas Malur Saidutta 等

Long input sequences are central to document understanding and multi-step reasoning in Large Language Models, yet the quadratic cost of attention makes inference both memory-intensive and slow. Context distillation mitigates this by compressing contextual information into model parameters, and recent work such as Doc-to-LoRA amortizes context distillation into a single forward pass that generates one LoRA adapter per document. However, producing a single monolithic adapter for all queries leads 
