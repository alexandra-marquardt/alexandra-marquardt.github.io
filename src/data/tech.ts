export type TechGroup = {
  title: string;
  items: string[];
};

export const techGroups: TechGroup[] = [
  {
    title: 'AI / Research',
    items: [
      'AI in Medical Imaging and Neuroscience',
      'Image Fusion for Interventional Radiology',
      'Medical Augmented Reality',
      '3D Reconstruction from Medical Images',
      'Intraoperative Navigation',
      'Machine Learning',
      'Multimodal Learning'
    ]
  },
  {
    title: 'Programming',
    items: ['Python', 'C++', 'Java', 'C#', 'SQL', 'Assembly', 'HTML/CSS', 'JavaScript', 'Typescript']
  },
  {
    title: 'Tools / Systems',
    items: ['Git', 'Docker', 'Hydra', 'Slurm', 'Wandb', 'Linux']
  },
  {
    title: 'Modalities',
    items: ['Medical Images (DICOM)', 'Live Tracking Data', 'Text', 'Graphs', 'Time Series']
  }
];
