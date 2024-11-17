---
date: '2024-02-05'
title: 'CUDA-Optimized Galaxy Histogram Analysis'
github: 'https://github.com/toto-thi/CUDA-Optimized-Galaxy-Histogram-Analysis'
external: ''
tech:
  - CUDA C
  - NVIDIA GPU
  - Data Parallelism

company: 'Åbo Akademi'
showInProjects: true
---

Leveraging CUDA for GPU acceleration, this project enhances galaxy data analysis by efficiently computing histograms of galactic coordinates. It processes large datasets to capture spatial distributions of real and simulated galaxies, minimizing global memory access by employing shared memory within each CUDA block. Benchmarks demonstrate substantial speedups, achieving a 2-second runtime on a high-CPU setup (98% utilization) and 0.78 seconds on an NVIDIA Tesla V100. This approach enables fast, accurate galaxy data processing, making it ideal for high-performance computational tasks.
