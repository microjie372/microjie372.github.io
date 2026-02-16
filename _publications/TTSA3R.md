---
title: "TTSA3R: Training-Free Temporal-Spatial Adaptive Persistent State for Streaming 3D Reconstruction"
collection: publications
category: conferences
# permalink: /publication/2024-02-17-paper-title-number-4
excerpt: ''
date: 2026-01-30
venue: 'arXiv'
paperurl: 'https://microjie372.github.io/files/TTSA3R.pdf'
# citation: 'Your Name, You. (2024). &quot;Paper Title Number 3.&quot; <i>GitHub Journal of Bugs</i>. 1(3).'
---
Streaming recurrent models enable efficient 3D reconstruction by maintaining persistent state representations. However, they suffer from catastrophic forgetting over long sequences due to balancing historical information with new observations. Recent methods alleviate this by deriving adaptive signals from attention perspective, but they operate on single dimensions without considering temporal and spatial consistency. To this end, we propose a training-free framework termed \textbf{TTSA3R} that leverages both temporal state evolution and spatial observation quality for adaptive state updates in 3D reconstruction. In particular, we devise a Temporal Adaptive Update Module that regulates update magnitude by analyzing temporal state evolution patterns. Then, a Spatial Contextual Update Module is introduced to localize spatial regions that require updates through observation-state alignment and scene dynamics. These complementary signals are finally fused to determine the state updating strategies. Extensive experiments demonstrate the effectiveness of TTSA3R in diverse 3D tasks. Moreover, our method exhibits only 15\% error increase compared to over 200\% degradation in baseline models on extended sequences, significantly improving long-term reconstruction stability. Our codes are available at https://github.com/anonus2357/ttsa3r.
