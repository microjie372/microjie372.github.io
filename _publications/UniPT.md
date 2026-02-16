---
title: "UniPT: A Unified Representation Pre-Training for Multi-dataset 3D Object Detection"
collection: publications
category: conferences
#permalink: /publication/2024-02-17-paper-title-number-4
excerpt: ''
date: 2026-04-17
venue: '22nd Pacific Rim International Conference on Artificial Intelligence'
# paperurl: 'https://microjie372.github.io/files/paper3.pdf'
#citation: 'Your Name, You. (2024). &quot;Paper Title Number 3.&quot; <i>GitHub Journal of Bugs</i>. 1(3).'
---
Current multi-dataset 3D object detection pipelines directly train the detectors from scratch, which achieves suboptimal performance owing to intrinsic discrepancies between various scenarios. In this paper, we observe that there are underlying shared spatial and semantic characteristics that can be excavated in a self-supervised and fully-supervised manner. Motivated by this, we propose a novel pre-training method (UniPT) with geometry-aware and semantic-aware supervision to obtain a universal representation of multiple datasets, thus reducing the vast differences. Concretely, we firstly perform the reconstruction of point cloud and point density estimation. Then, the occupancy prediction and classification guidance are provided in semantic-aware supervision. Moreover, we devise a cross-dataset integration scheme to minimize the differences of dataset-level features between domains. Extensive experiments on Waymo Open Dataset (WOD), nuScenes and KITTI with consolidation settings illustrate the effectiveness of our method. It is notable that UniPT surpasses the previous work Uni3D by 2.29 mAPH (L1) on WOD, 1.45 mAP (BEV) on nuScenes and 2.08 mAP (3D) on KITTI. Our code will be available at https://github.com/microjie372/UniPT.
