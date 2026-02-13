---
title: "3D Vision Reconstruction"
description: "MCMC-based 3D Gaussian Splatting with probabilistic sampling improvements."
date: 2026-02-23
featured: true
tags: ["Vision", "Reconstruction", "Deep Learning"]
image: "/images/projects/3d_gaussian_splatting.jpg"
links:
  #writeup: "https://github.com/oscarbreiner"
  github: "https://github.com/oscarbreiner/3dgs-mcmc-boosted.git"
---

Improved MCMC-based 3D Gaussian Splatting by replacing opacity-based relocation and exploration with visibility-driven and error-guided sampling signals, leading to more stable training and higher reconstruction quality.

Baseline: MCMC-based 3D Gaussian Splatting uses probabilistic sampling to enable stable reconstruction without requiring 
Structure-from-Motion (SfM) initialization.

## Highlights

- Introduced visibility- and error-based relocation/exploration strategies.
- Robust reconstruction across both simple and challenging scenes.
- Stable training without reliance on SfM initialization.

---

> **Note:** Competition code cannot be shared. Selected components will be released publicly if the IROS 2026 submission is accepted.
