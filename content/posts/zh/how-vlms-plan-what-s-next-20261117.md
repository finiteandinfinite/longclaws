---
title: "How VLMs Plan What's Next"
date: "2026-11-16"
category: "research"
tags: ["arxiv", "research", "ai"]
summary: "作者: Rohit Gandikota, Arnab Sen Sharma, Adam Belfki 等  When a vision-language model describes an image, it names one object at a time and it rarely repeats itself, yet how the model plans this order is far from obvious. We characterize the mechanism a VLM uses to decide where to look before it looks. The mechanism has four main parts. First, binding heads match the relevant text tokens against the image and resolve them into pointers to the matched image region. Second, the same binding heads bind each written answer to the region it came from, and "
source: "arXiv"
sourceUrl: "https://arxiv.org/abs/2611.21600v1"
---

# How VLMs Plan What's Next

> 来源: [arXiv](https://arxiv.org/abs/2611.21600v1)

作者: Rohit Gandikota, Arnab Sen Sharma, Adam Belfki 等

When a vision-language model describes an image, it names one object at a time and it rarely repeats itself, yet how the model plans this order is far from obvious. We characterize the mechanism a VLM uses to decide where to look before it looks. The mechanism has four main parts. First, binding heads match the relevant text tokens against the image and resolve them into pointers to the matched image region. Second, the same binding heads bind each written answer to the region it came from, and 
