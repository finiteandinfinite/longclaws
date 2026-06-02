---
title: "AdaCodec: A Predictive Visual Code for Video MLLMs"
date: "2026-06-01"
category: "research"
tags: ["arxiv", "research", "ai"]
summary: "作者: Haowen Hou, Zhen Huang, Zheming Liang 等  Video is temporally redundant: adjacent frames usually share most objects, background, and layout. Yet existing video multimodal large language models (video MLLMs) usually encode each sampled frame as an independent RGB image, causing visual tokens to repeat content already present in earlier frames. This suggests a more direct video interface: send a full reference frame only when the scene cannot be predicted well from prior context, and otherwise transmit a compact description of inter-frame"
source: "arXiv"
sourceUrl: "https://arxiv.org/abs/2606.02569v1"
---

# AdaCodec: A Predictive Visual Code for Video MLLMs

> 来源: [arXiv](https://arxiv.org/abs/2606.02569v1)

作者: Haowen Hou, Zhen Huang, Zheming Liang 等

Video is temporally redundant: adjacent frames usually share most objects, background, and layout. Yet existing video multimodal large language models (video MLLMs) usually encode each sampled frame as an independent RGB image, causing visual tokens to repeat content already present in earlier frames. This suggests a more direct video interface: send a full reference frame only when the scene cannot be predicted well from prior context, and otherwise transmit a compact description of inter-frame
