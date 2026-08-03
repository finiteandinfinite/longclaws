---
title: "Sign compression for Muon: SignMuon, MuonSign, and the Limits of Error Feedback"
date: "2026-07-31"
category: "research"
tags: ["arxiv", "research", "ai"]
summary: "作者: Maria Smirnova, Alexey Kravatskiy  SignMuon compresses the Muon update to one bit per parameter by taking its elementwise sign, providing the most direct way to run a matrix-aware optimizer under an extremely low communication budget. It outperforms SignSGD in practice, yet it can ascend even on a linear function. Signing the gradient before the Linear Minimization Oracle (LMO), rather than after, does not repair this: we construct a small explicit instance on which sign-before (MuonUSign) and sign-on-both-sides (MuonSign) ascend"
source: "arXiv"
sourceUrl: "https://arxiv.org/abs/2607.29674v1"
---

# Sign compression for Muon: SignMuon, MuonSign, and the Limits of Error Feedback

> 来源: [arXiv](https://arxiv.org/abs/2607.29674v1)

作者: Maria Smirnova, Alexey Kravatskiy

SignMuon compresses the Muon update to one bit per parameter by taking its elementwise sign, providing the most direct way to run a matrix-aware optimizer under an extremely low communication budget. It outperforms SignSGD in practice, yet it can ascend even on a linear function. Signing the gradient before the Linear Minimization Oracle (LMO), rather than after, does not repair this: we construct a small explicit instance on which sign-before (MuonUSign) and sign-on-both-sides (MuonSign) ascend
