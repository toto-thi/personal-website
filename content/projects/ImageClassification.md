---
date: '2024-02-04'
title: 'Quantized Image Classification for Embedded AI'
github: 'https://github.com/toto-thi/embedded_ai_image_classification_with_model_quantization'
external: ''
tech:
  - Python
  - TensorFlow Lite
  - Arduino
  - 8-bit Quantization

company: 'Åbo Akademi'
showInProjects: true
---

Focusing on efficient deployment on the Arduino Nano 33 BLE Sense, this project builds an image classification model optimized through 8-bit quantization for resource-limited hardware. Real-time images from a camera sensor are preprocessed by resizing, normalizing, and transforming them into a 784-dimensional input vector. The model is converted to an 8-bit format using TensorFlow Lite's post-training quantization, significantly reducing memory usage while maintaining high classification accuracy. This approach enables efficient and responsive image classification within the Arduino Nano’s memory constraints.
