---
title: "LLM Agents Can Easily Tamper With Their Own Traces"
date: "2026-09-24"
category: "research"
tags: ["arxiv", "research", "ai"]
summary: "作者: Jeremy Qin, David Schmotz, Derck Prinzhorn 等  Asynchronous monitoring, incident investigations, and compliance audits primarily rely on agent traces to reconstruct what happened. These analyses assume that LLM agents cannot tamper with their own execution traces. We show that local LLM agents such as Claude Code, Codex, Antigravity, Open Code and Grok Build fail to enforce this boundary. All tested harnesses, except Muse Code, allowed agents to delete their traces when asked, without triggering monitor guardrails. We also validate that exte"
source: "arXiv"
sourceUrl: "https://arxiv.org/abs/2609.30266v1"
---

# LLM Agents Can Easily Tamper With Their Own Traces

> 来源: [arXiv](https://arxiv.org/abs/2609.30266v1)

作者: Jeremy Qin, David Schmotz, Derck Prinzhorn 等

Asynchronous monitoring, incident investigations, and compliance audits primarily rely on agent traces to reconstruct what happened. These analyses assume that LLM agents cannot tamper with their own execution traces. We show that local LLM agents such as Claude Code, Codex, Antigravity, Open Code and Grok Build fail to enforce this boundary. All tested harnesses, except Muse Code, allowed agents to delete their traces when asked, without triggering monitor guardrails. We also validate that exte
