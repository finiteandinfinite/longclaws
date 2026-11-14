---
title: "Learning When Diffusion Language Models Should Regenerate"
date: "2026-11-12"
category: "research"
tags: ["arxiv", "research", "ai"]
summary: "作者: Minhae Oh, Jeonghye Kim, Jinwoo Koo 等  Remasking allows diffusion language models to revisit generated text, but effective correction requires knowing when and what to revise. Our diagnosis on Sudoku reveals two gaps. Hidden states contain error information that token confidence does not reliably expose, and remasking an isolated error usually reproduces it when the surrounding context remains fixed. These findings motivate DiVR , a verifier that predicts whether a partially generated sequence will reach a correct answer. Trained on "
source: "arXiv"
sourceUrl: "https://arxiv.org/abs/2611.17320v1"
---

# Learning When Diffusion Language Models Should Regenerate

> 来源: [arXiv](https://arxiv.org/abs/2611.17320v1)

作者: Minhae Oh, Jeonghye Kim, Jinwoo Koo 等

Remasking allows diffusion language models to revisit generated text, but effective correction requires knowing when and what to revise. Our diagnosis on Sudoku reveals two gaps. Hidden states contain error information that token confidence does not reliably expose, and remasking an isolated error usually reproduces it when the surrounding context remains fixed. These findings motivate DiVR , a verifier that predicts whether a partially generated sequence will reach a correct answer. Trained on 
