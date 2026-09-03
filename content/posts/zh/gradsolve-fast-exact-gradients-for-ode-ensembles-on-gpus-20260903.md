---
title: "GRADSOLVE: fast exact gradients for ODE ensembles on GPUs"
date: "2026-09-02"
category: "research"
tags: ["arxiv", "research", "ai"]
summary: "作者: Alessio Spurio Mancini  Ordinary differential equations (ODEs) underlie models in science and engineering, and many applications need derivatives of their solutions with respect to parameters. Ensembles of independent trajectories suit graphics processing units (GPUs), but current GPU software forces a trade-off: the fastest ensemble solvers cannot be differentiated in reverse mode at the speed they solve, and the solvers built for differentiation solve more slowly. No single tool has yet offered a reverse-mode gradien"
source: "arXiv"
sourceUrl: "https://arxiv.org/abs/2609.02876v1"
---

# GRADSOLVE: fast exact gradients for ODE ensembles on GPUs

> 来源: [arXiv](https://arxiv.org/abs/2609.02876v1)

作者: Alessio Spurio Mancini

Ordinary differential equations (ODEs) underlie models in science and engineering, and many applications need derivatives of their solutions with respect to parameters. Ensembles of independent trajectories suit graphics processing units (GPUs), but current GPU software forces a trade-off: the fastest ensemble solvers cannot be differentiated in reverse mode at the speed they solve, and the solvers built for differentiation solve more slowly. No single tool has yet offered a reverse-mode gradien
