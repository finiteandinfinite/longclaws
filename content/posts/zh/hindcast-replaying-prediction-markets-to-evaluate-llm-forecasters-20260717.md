---
title: "Hindcast: Replaying Prediction Markets to Evaluate LLM Forecasters"
date: "2026-07-15"
category: "research"
tags: ["arxiv", "research", "ai"]
summary: "作者: Xiao Ye, Jacob Dineen, Evan Zhu 等  Forecasters are evaluated by backtesting, which replays resolved questions and grades the probability the system would have assigned before the outcome was known. For LLMs, two channels leak the answer into this test. A model that retrieves can surface reports written after the event, turning forecasting into a lookup, and each new model is trained on data closer to the event, so a question that lay in the future for last year's models sits inside this year's training data. Either way, the test "
source: "arXiv"
sourceUrl: "https://arxiv.org/abs/2607.14051v1"
---

# Hindcast: Replaying Prediction Markets to Evaluate LLM Forecasters

> 来源: [arXiv](https://arxiv.org/abs/2607.14051v1)

作者: Xiao Ye, Jacob Dineen, Evan Zhu 等

Forecasters are evaluated by backtesting, which replays resolved questions and grades the probability the system would have assigned before the outcome was known. For LLMs, two channels leak the answer into this test. A model that retrieves can surface reports written after the event, turning forecasting into a lookup, and each new model is trained on data closer to the event, so a question that lay in the future for last year's models sits inside this year's training data. Either way, the test 
