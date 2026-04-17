export type EducationEntry = {
  degree: string;
  university: string;
  location: string;
  start: string;
  end: string;
  highlights: string[];
};

export const education: EducationEntry[] = [
  {
    degree: 'M.Sc. Informatics',
    university: 'Technical University Munich (TUM)',
    location: 'Munich, Germany',
    start: 'Oct 2024',
    end: 'Present',
    highlights: [
      'Research focus: AI for Medical Imaging and Neuroscience, Medical Augmented Reality'
    ]
  },
  {
    degree: 'B.Sc. Informatics',
    university: 'Technical University Munich (TUM)',
    location: 'Munich, Germany',
    start: 'Oct 2020',
    end: 'Sep 2023',
    highlights: [
      'Strong foundation in mathematics and computer science.',
      'Minor in Medicine.'
    ]
  },
  {
    degree: 'Allgemeines Abitur / Highschool Diploma',
    university: 'Anna Schmidt Schule',
    location: 'Frankfurt, Germany',
    start: 'Sep 2012',
    end: 'Jul 2020',
    highlights: [
    ]
  }
];
