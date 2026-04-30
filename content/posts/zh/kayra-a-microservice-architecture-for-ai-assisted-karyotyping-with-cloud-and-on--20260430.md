---
title: "KAYRA: A Microservice Architecture for AI-Assisted Karyotyping with Cloud and On-Premise Deployment"
date: "2026-04-29"
category: "research"
tags: ["arxiv", "research", "ai"]
summary: "作者: Attila Pintér, Javier Rico, Attila Répai 等  We present KAYRA, an end-to-end karyotyping system that operates inside the operational constraints of a clinical cytogenetic laboratory. KAYRA is architected as a containerized microservice pipeline whose ML stack combines an EfficientNet-B5 + U-Net semantic segmenter, a Mask R-CNN (ResNet-50 + FPN) instance detector, and a ResNet-18 classifier, orchestrated through a cascaded ROI-narrowing strategy that focuses each downstream model on the chromosome-bearing region. The same container images a"
source: "arXiv"
sourceUrl: "https://arxiv.org/abs/2604.26869v1"
---

# KAYRA: A Microservice Architecture for AI-Assisted Karyotyping with Cloud and On-Premise Deployment

> 来源: [arXiv](https://arxiv.org/abs/2604.26869v1)

作者: Attila Pintér, Javier Rico, Attila Répai 等

We present KAYRA, an end-to-end karyotyping system that operates inside the operational constraints of a clinical cytogenetic laboratory. KAYRA is architected as a containerized microservice pipeline whose ML stack combines an EfficientNet-B5 + U-Net semantic segmenter, a Mask R-CNN (ResNet-50 + FPN) instance detector, and a ResNet-18 classifier, orchestrated through a cascaded ROI-narrowing strategy that focuses each downstream model on the chromosome-bearing region. The same container images a
