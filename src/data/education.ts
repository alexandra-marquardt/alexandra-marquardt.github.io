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
    university: 'Technical University of Munich (TUM)',
    location: 'Munich, Germany',
    start: 'Apr 2024',
    end: 'Present',
    highlights: [
      'Field focus: vision, machine learning, simulation, physics.'
    ]
  },
  {
    degree: 'B.Sc. Informatics',
    university: 'Technical University of Munich (TUM)',
    location: 'Munich, Germany',
    start: 'Oct 2020',
    end: 'Mar 2024',
    highlights: [
      'Minor in electrical engineering.'
    ]
  },
  {
    degree: 'Allgemeines Abitur / Highschool Diploma',
    university: 'Gymnasium Eltville',
    location: 'Eltville, Germany',
    start: 'Sep 2011',
    end: 'Jul 2020',
    highlights: [
    ]
  }
];
