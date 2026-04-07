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
