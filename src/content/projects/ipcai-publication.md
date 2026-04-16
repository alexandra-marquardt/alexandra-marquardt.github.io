---
title: "Ultrasound Segmentation Analysis via Distinct and Completed Anatomical Borders"
description: "Shared first-author IPCAI 2024 publication on ultrasound segmentation analysis. Introduced a boundary-aware evaluation method that studies model attention at distinct and completed anatomical borders."
date: 2024-06-15
featured: true
tags: ["Deep Learning", "Ultrasound Imaging", "Attention Mechanisms", "Clinician-Inspired ML"]
image: "/images/projects/space_debris.jpeg"
links:
  github: "https://github.com/alexandra-marquardt/segmentation-border-analysis"
  publication: "TODO"
---

As shared first author, I developed a boundary-aware evaluation method for ultrasound segmentation networks that distinguishes between clearly visible anatomical borders and borders clinicians complete from context. I presented the work at the 15th International Conference on Information Processing in Computer-Assisted Interventions (IPCAI 2024) and it was later published in the International Journal of Computer Assisted Radiology and Surgery.

## Highlights

- Defined an automated split of anatomical borders into distinct and completed regions based on segmentation labels.
- Compared attention patterns across multiple segmentation architectures on two ultrasound datasets.
- Showed that stronger models attend more consistently to clinician-relevant landmarks and visible border cues when inferring missing anatomy.
- Proposed the border split as a more informative analysis tool than standard segmentation metrics alone.
