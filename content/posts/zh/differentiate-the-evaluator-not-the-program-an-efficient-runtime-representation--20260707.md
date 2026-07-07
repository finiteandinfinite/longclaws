---
title: "Differentiate the Evaluator, Not the Program: An Efficient Runtime Representation for Neuro-Symbolic Learning"
date: "2026-07-03"
category: "research"
tags: ["arxiv", "research", "ai"]
summary: "作者: Lucas Sheneman  AI systems increasingly propose executable scientific models whose value depends on both their symbolic structure and their fitted continuous parameters. This makes parameter calibration the bottleneck of program-and-parameter co-search: an outer loop can generate thousands of candidate programs, but each needs an inner gradient-based optimization before it can be assessed. Staging each candidate into its own differentiable graph makes individual models fast but sacrifices the program-as-data pr"
source: "arXiv"
sourceUrl: "https://arxiv.org/abs/2607.03574v1"
---

# Differentiate the Evaluator, Not the Program: An Efficient Runtime Representation for Neuro-Symbolic Learning

> 来源: [arXiv](https://arxiv.org/abs/2607.03574v1)

作者: Lucas Sheneman

AI systems increasingly propose executable scientific models whose value depends on both their symbolic structure and their fitted continuous parameters. This makes parameter calibration the bottleneck of program-and-parameter co-search: an outer loop can generate thousands of candidate programs, but each needs an inner gradient-based optimization before it can be assessed. Staging each candidate into its own differentiable graph makes individual models fast but sacrifices the program-as-data pr
