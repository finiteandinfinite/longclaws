---
title: "Why Adaptive Optimizers Struggle with Large Convolution Kernels"
date: "2026-11-22"
category: "research"
tags: ["arxiv", "research", "ai"]
summary: "作者: Tianyu Ding, Jiachen Jiang, Jinxin Zhou 等  Large convolution kernels enlarge the receptive fields of ConvNets at a modest computational cost, but they are notoriously difficult to train. Existing large-kernel networks therefore rely on costly training techniques, such as parallel small-kernel branches with batch normalization. In this paper, we trace this difficulty to adaptive optimizers such as Adam, which normalize the update of every weight separately. Since input features rarely average to zero, all weights of a kernel share a commo"
source: "arXiv"
sourceUrl: "https://arxiv.org/abs/2611.29232v1"
---

# Why Adaptive Optimizers Struggle with Large Convolution Kernels

> 来源: [arXiv](https://arxiv.org/abs/2611.29232v1)

作者: Tianyu Ding, Jiachen Jiang, Jinxin Zhou 等

Large convolution kernels enlarge the receptive fields of ConvNets at a modest computational cost, but they are notoriously difficult to train. Existing large-kernel networks therefore rely on costly training techniques, such as parallel small-kernel branches with batch normalization. In this paper, we trace this difficulty to adaptive optimizers such as Adam, which normalize the update of every weight separately. Since input features rarely average to zero, all weights of a kernel share a commo
