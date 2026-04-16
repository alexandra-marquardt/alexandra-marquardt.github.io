export type ExperienceEntry = {
  role: string;
  company: string;
  location: string;
  start: string;
  end: string;
  bullets: string[];
  tech: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "Visting Researcher",
    company: "Kyoto Univeresity",
    location: "Kyoto, Japan",
    start: "Oct 2025",
    end: "Mar 2026",
    bullets: [
      "Reconstructed visual stimuli from human brain activity using deep neural networks", 
      "Achieved improved color reconstruction by introducing a novel reconstruction objective.",
      "Provided a proof-of-concept to reconstruct visual color illusions and color constancy mechanisms."
    ],
    tech: ['Deep Learning', 'Neuroscience', 'fMRI Acquisition and Analysis']
  },
  {
    role: 'R&D Software Engineer',
    company: 'Brainlab AG',
    location: 'Munich, Germany',
    start: 'Apr 2024',
    end: 'Aug 2025',
    bullets: [
      'Independently planned and managed Augmented Reality projects for clinical interventions.',
      'Developed end-to-end software prototypes, including requirements engineering, implementation, clinical validation and risk assessment.',
      'Communicated regularly with clinical and technical stakeholders to ensure real-world clinical compatibility and impact.',
      'Project topics included Augmented Reality for surgeon-modified vascular prostheses and electrophysiological interventions, Virtual Cockpits for general clinical interventions and Deep Learning for multimodal image fusion in intraoperative navigation.'
    ],
    tech: ['Augmented Reality', 'Software Engineering', 'Medical Imaging', 'Deep Learning']
  },
  {
    role: 'Research Assistant',
    company: 'Forschungszentrum Jülich',
    location: 'Jülich, Germany',
    start: 'Aug 2024',
    end: 'Sep 2024',
    bullets: [
      'Developed a General Adversarial Network (GAN) for super-resolution of brain scans acquired via Polarized Light Imaging (PLI).', 
      'Achieved plausible reconstruction of microscopic structures with a resolution increase factor of 32 from macroscopic images.',
    ], 
    tech: ['Deep Learning', 'Polarized Light Imaging', 'Slurm']
  },  
  {
    role: 'Teaching Assistant',
    company: 'Technical University of Munich (TUM)',
    location: 'Munich, Germany',
    start: 'Oct 2021',
    end: 'Apr 2023',
    bullets: [
      'Taught weekly tutoring sessions and 2-week exam preparation courses.', 
      'Mentored student project teams.',
      'Graded 1,000+ exams and assignments for large-scale database and software engineering courses.',
    ],
    tech: ['Teaching', 'Mentoring', 'Software Engineering', 'Database Engineering']
  }
];
