---
title: "Context-Aware Interleaved Batching for WhisperX"
date: "2026-08-31"
category: "research"
tags: ["arxiv", "research", "ai"]
summary: "作者: Carlos Bain, Max Bain  While WhisperX accelerates speech transcription via intra-audio batching, it isolates audio segments, losing the historical context needed for coherent punctuation and terminology transcription. Conversely, standard Whisper retains context sequentially but suffers from slow inference and hallucination loops. To achieve the best of both worlds, we propose Context-Aware Interleaved Batching. By using VAD-derived segment boundaries, our algorithm stabilizes Whisper's text conditioning, allowing us "
source: "arXiv"
sourceUrl: "https://arxiv.org/abs/2608.31170v1"
---

# Context-Aware Interleaved Batching for WhisperX

> 来源: [arXiv](https://arxiv.org/abs/2608.31170v1)

作者: Carlos Bain, Max Bain

While WhisperX accelerates speech transcription via intra-audio batching, it isolates audio segments, losing the historical context needed for coherent punctuation and terminology transcription. Conversely, standard Whisper retains context sequentially but suffers from slow inference and hallucination loops. To achieve the best of both worlds, we propose Context-Aware Interleaved Batching. By using VAD-derived segment boundaries, our algorithm stabilizes Whisper's text conditioning, allowing us 
