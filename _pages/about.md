---
layout: about
title: about
permalink: /
subtitle: Ph.D. Student in Computer Science · <a href='https://www.ucdavis.edu/'>University of California, Davis</a>

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false # crops the image to make it circular
  # Contact links shown directly under the photo (styled by .contact-list in _sass/_custom.scss).
  more_info: >
    <ul class="contact-list">
      <li><i class="fa-solid fa-location-dot"></i><span>Davis, CA</span></li>
      <li><a href="mailto:zhjzheng@ucdavis.edu"><i class="fa-solid fa-envelope"></i><span>zhjzheng@ucdavis.edu</span></a></li>
      <li><a href="/assets/pdf/CV-Zhijie_ZHENG.pdf"><i class="fa-solid fa-file-lines"></i><span>CV (PDF)</span></a></li>
      <li><a href="https://scholar.google.com/citations?user=HXfp7ZMAAAAJ"><i class="ai ai-google-scholar"></i><span>Google Scholar</span></a></li>
      <li><a href="https://github.com/microjie372"><i class="fa-brands fa-github"></i><span>GitHub</span></a></li>
      <li><a href="https://www.linkedin.com/in/zhijie-zheng-6239733a8"><i class="fa-brands fa-linkedin"></i><span>LinkedIn</span></a></li>
      <li><a href="https://orcid.org/0000-0002-5584-1785"><i class="ai ai-orcid"></i><span>ORCID</span></a></li>
    </ul>

selected_papers: true # includes a list of papers marked as "selected={true}"
social: false # contact links are shown under the photo instead of a row of icons at the bottom

announcements:
  enabled: true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
---

Hi! I am **Zhijie Zheng** (郑智杰), a second-year Ph.D. student in Computer Science at the University of California, Davis, advised by [Dr. Jiawei Zhang](https://jiaweizhang.net/).

My research is in **3D computer vision**: recovering the 3D structure of a scene from images and videos, and rendering it from new viewpoints. I focus on **feed-forward 3D models**, which predict geometry and appearance in a single pass instead of optimizing each scene, and on making them more accurate, more stable, and faster. My current work follows three directions:

- **Novel view synthesis.** Rendering high-quality new views from a frozen 3D foundation model while keeping its metric depth and pose predictions unchanged ([RDGSplat](https://arxiv.org/abs/2610.09173)).
- **Streaming 3D reconstruction.** Keeping recurrent reconstruction models stable over long video sequences, without extra training ([TTSA3R](https://arxiv.org/abs/2601.22615), WACV 2027 LVR Workshop, Oral).
- **Single-image 3D reconstruction.** Replacing slow diffusion sampling with fast geometric reasoning, turning one image into a 3D scene in 36 seconds instead of hours ([PRISM](https://arxiv.org/abs/2606.25430)).

Before UC Davis, I received my B.S. (2022) and M.S. (2025) in Electronic Science from [Sun Yat-sen University](https://www.sysu.edu.cn/), where I worked on **LiDAR 3D object detection** for autonomous driving. In 2024, I was a research intern at Beijing Novauto Technology, working on multi-dataset LiDAR pre-training.

**Research interests:** 3D Reconstruction · Novel View Synthesis · 3D Gaussian Splatting · Geometric Representation Learning
