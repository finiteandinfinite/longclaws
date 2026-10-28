---
title: "When Should We Intervene at Test Time?"
date: "2026-10-27"
category: "research"
tags: ["arxiv", "research", "ai"]
summary: "作者: Jiahao Zhang, Xinling Wen, Liangliang Li 等  Test-time adaptation helps a deployed model respond to changing inputs, but the same intervention can rescue one batch and damage the next. Updating normalization statistics, for example, can improve corrupted images yet fail when a batch contains mostly one class. Average accuracy hides these failures and cannot tell a model when to use an intervention. Target labels can guide this decision, but they are scarce and some choices are already clear. We introduce PORTAL, a controller that chooses w"
source: "arXiv"
sourceUrl: "https://arxiv.org/abs/2610.37658v1"
---

# When Should We Intervene at Test Time?

> 来源: [arXiv](https://arxiv.org/abs/2610.37658v1)

作者: Jiahao Zhang, Xinling Wen, Liangliang Li 等

Test-time adaptation helps a deployed model respond to changing inputs, but the same intervention can rescue one batch and damage the next. Updating normalization statistics, for example, can improve corrupted images yet fail when a batch contains mostly one class. Average accuracy hides these failures and cannot tell a model when to use an intervention. Target labels can guide this decision, but they are scarce and some choices are already clear. We introduce PORTAL, a controller that chooses w
