---
title: "Temporal Credit Is Free"
date: "2026-03-30"
category: "research"
tags: ["arxiv", "research", "ai"]
summary: "作者: Aur Shalev Merin  Recurrent networks do not need Jacobian propagation to adapt online. The hidden state already carries temporal credit through the forward pass; immediate derivatives suffice if you stop corrupting them with stale trace memory and normalize gradient scales across parameter groups. An architectural rule predicts when normalization is needed: \b{eta}2 is required when gradients must pass through a nonlinear state update with no output bypass, and unnecessary otherwise. Across ten architectures, rea"
source: "arXiv"
sourceUrl: "https://arxiv.org/abs/2603.28750v1"
---

# Temporal Credit Is Free

> 来源: [arXiv](https://arxiv.org/abs/2603.28750v1)

作者: Aur Shalev Merin

Recurrent networks do not need Jacobian propagation to adapt online. The hidden state already carries temporal credit through the forward pass; immediate derivatives suffice if you stop corrupting them with stale trace memory and normalize gradient scales across parameter groups. An architectural rule predicts when normalization is needed: \b{eta}2 is required when gradients must pass through a nonlinear state update with no output bypass, and unnecessary otherwise. Across ten architectures, rea
