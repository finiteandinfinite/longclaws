---
title: "SparseDitto: Customizing GPU Kernels for Different Sparsity Patterns with LLM-Based Agentic System"
date: "2026-08-05"
category: "research"
tags: ["arxiv", "research", "ai"]
summary: "作者: Shiyang Li, Guangyan Sun, Jinwei Tang 等  Sparse matrix kernels are fundamental to scientific computing, graph analytics, and machine learning. Their GPU performance depends strongly on the input sparsity pattern and execution strategy. For the same SpMM on the same matrix, cuSPARSE exhibits a 350x performance gap between CSR and Blocked-ELL. Our study of multiple data formats, specialized systems, and sparse compilers shows that no single implementation consistently dominates across sparsity patterns and operators. This motivates a sys"
source: "arXiv"
sourceUrl: "https://arxiv.org/abs/2608.05033v1"
---

# SparseDitto: Customizing GPU Kernels for Different Sparsity Patterns with LLM-Based Agentic System

> 来源: [arXiv](https://arxiv.org/abs/2608.05033v1)

作者: Shiyang Li, Guangyan Sun, Jinwei Tang 等

Sparse matrix kernels are fundamental to scientific computing, graph analytics, and machine learning. Their GPU performance depends strongly on the input sparsity pattern and execution strategy. For the same SpMM on the same matrix, cuSPARSE exhibits a 350x performance gap between CSR and Blocked-ELL. Our study of multiple data formats, specialized systems, and sparse compilers shows that no single implementation consistently dominates across sparsity patterns and operators. This motivates a sys
