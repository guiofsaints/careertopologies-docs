export type ReferenceCategory = 
  | 'professional-profile'
  | 'news-articles'
  | 'frameworks'
  | 'studies'
  | 'leadership';

export interface Reference {
  id: string;
  category: ReferenceCategory;
  title: string;
  authors?: string[];
  organization?: string;
  year?: number;
  url?: string;
  description: string;
}

export const categoryLabels: Record<ReferenceCategory, string> = {
  'professional-profile': 'Professional Profile & Career Frameworks',
  'news-articles': 'News & Articles',
  'frameworks': 'Structures & Frameworks',
  'studies': 'Studies, Laws & Principles',
  'leadership': 'Leadership & Management',
};

export const references: Reference[] = [
  // Professional Profile
  {
    id: 'ref-01',
    category: 'professional-profile',
    title: 'LinkedIn Engineering Career Development Framework',
    organization: 'LinkedIn Engineering',
    url: 'https://linkedin.github.io/school-of-sre/',
    description: 'Comprehensive career ladder with IC and management tracks, competency definitions, and progression criteria.',
  },
  {
    id: 'ref-02',
    category: 'professional-profile',
    title: 'Dropbox Engineering Career Framework',
    organization: 'Dropbox Engineering',
    url: 'https://dropbox.github.io/dbx-career-framework/',
    description: 'Multi-track career framework with detailed competency matrices and proficiency scales.',
  },
  {
    id: 'ref-03',
    category: 'professional-profile',
    title: 'GitLab Job Families',
    organization: 'GitLab',
    url: 'https://about.gitlab.com/handbook/engineering/career-development/',
    description: 'Open-source career development framework with transparent leveling criteria.',
  },
  {
    id: 'ref-04',
    category: 'professional-profile',
    title: 'progression.fyi - Engineering Career Frameworks',
    organization: 'progression.fyi',
    url: 'https://progression.fyi/',
    description: 'Curated collection of public career frameworks from leading technology companies.',
  },

  // News & Articles
  {
    id: 'ref-05',
    category: 'news-articles',
    title: 'The Staff Engineer\'s Path',
    authors: ['Tanya Reilly'],
    year: 2022,
    description: 'Definitive guide to technical leadership roles and career progression beyond senior engineer.',
  },
  {
    id: 'ref-06',
    category: 'news-articles',
    title: 'Being Glue',
    authors: ['Tanya Reilly'],
    url: 'https://noidea.dog/glue',
    year: 2019,
    description: 'Analysis of undervalued work in engineering teams and its impact on career progression.',
  },
  {
    id: 'ref-07',
    category: 'news-articles',
    title: 'How to Define Career Levels in Your Engineering Organization',
    organization: 'LeadDev',
    url: 'https://leaddev.com/career-paths-progression-promotion/how-define-career-levels-your-engineering-organization',
    description: 'Practical guide to creating leveling frameworks with real-world examples.',
  },

  // Frameworks & Structures
  {
    id: 'ref-08',
    category: 'frameworks',
    title: 'Impact vs. Autonomy Matrix for Career Leveling',
    description: 'Two-dimensional model for defining career levels based on organizational impact and decision-making autonomy.',
  },
  {
    id: 'ref-09',
    category: 'frameworks',
    title: 'T-Shaped Skills Model',
    authors: ['Tim Brown'],
    organization: 'IDEO',
    description: 'Framework for describing professional skill profiles combining depth and breadth.',
  },
  {
    id: 'ref-10',
    category: 'frameworks',
    title: 'Competency-Based Career Frameworks',
    description: 'Assessment approach based on demonstrated competencies rather than years of experience.',
  },
  {
    id: 'ref-11',
    category: 'frameworks',
    title: 'Engineering Ladders',
    url: 'http://www.engineeringladders.com/',
    description: 'Open-source career ladder framework with customizable tracks and levels.',
  },

  // Studies & Principles
  {
    id: 'ref-12',
    category: 'studies',
    title: 'The Peter Principle',
    authors: ['Laurence J. Peter', 'Raymond Hull'],
    year: 1969,
    description: 'Observation that individuals tend to be promoted to their level of incompetence in hierarchical organizations.',
  },
  {
    id: 'ref-13',
    category: 'studies',
    title: 'Mindset: The New Psychology of Success',
    authors: ['Carol S. Dweck'],
    year: 2006,
    description: 'Research on growth mindset and its impact on learning, development, and achievement.',
  },
  {
    id: 'ref-14',
    category: 'studies',
    title: 'Drive: The Surprising Truth About What Motivates Us',
    authors: ['Daniel H. Pink'],
    year: 2009,
    description: 'Analysis of intrinsic motivation factors: autonomy, mastery, and purpose.',
  },
  {
    id: 'ref-15',
    category: 'studies',
    title: 'Radical Candor',
    authors: ['Kim Scott'],
    year: 2017,
    description: 'Framework for effective feedback and career development through care and directness.',
  },

  // Leadership & Management
  {
    id: 'ref-16',
    category: 'leadership',
    title: 'The Manager\'s Path',
    authors: ['Camille Fournier'],
    year: 2017,
    description: 'Career guide for technology leaders covering IC to executive progression.',
  },
  {
    id: 'ref-17',
    category: 'leadership',
    title: 'An Elegant Puzzle: Systems of Engineering Management',
    authors: ['Will Larson'],
    year: 2019,
    description: 'Systems thinking approach to engineering management and organizational design.',
  },
  {
    id: 'ref-18',
    category: 'leadership',
    title: 'Staff Engineer: Leadership Beyond the Management Track',
    authors: ['Will Larson'],
    year: 2021,
    description: 'Detailed exploration of staff+ engineering roles and technical leadership.',
  },
  {
    id: 'ref-19',
    category: 'leadership',
    title: 'High Output Management',
    authors: ['Andrew S. Grove'],
    year: 1983,
    description: 'Classic management framework covering leverage, objectives, and performance management.',
  },
  {
    id: 'ref-20',
    category: 'leadership',
    title: 'The Five Dysfunctions of a Team',
    authors: ['Patrick Lencioni'],
    year: 2002,
    description: 'Framework for building cohesive teams through trust, conflict, commitment, accountability, and results.',
  },

  // Additional Professional Frameworks
  {
    id: 'ref-21',
    category: 'professional-profile',
    title: 'Etsy Engineering Career Ladder',
    organization: 'Etsy Engineering',
    url: 'https://etsy.github.io/Etsy-Engineering-Career-Ladder/',
    description: 'Public career framework emphasizing craft, communication, and leadership.',
  },
  {
    id: 'ref-22',
    category: 'professional-profile',
    title: 'Buffer Career Framework',
    organization: 'Buffer',
    description: 'Transparent career progression framework aligned with remote-first culture.',
  },

  // Additional Articles
  {
    id: 'ref-23',
    category: 'news-articles',
    title: 'Scaling Engineering Teams',
    organization: 'Stripe Engineering',
    description: 'Insights on organizational structure and career progression at scale.',
  },
  {
    id: 'ref-24',
    category: 'news-articles',
    title: 'Career Ladders at SoundCloud',
    organization: 'SoundCloud Engineering',
    description: 'Case study on implementing transparent career frameworks.',
  },

  // Additional Studies
  {
    id: 'ref-25',
    category: 'studies',
    title: 'The Competence-Confidence Gap',
    description: 'Research on self-assessment accuracy and its impact on career progression.',
  },
  {
    id: 'ref-26',
    category: 'studies',
    title: 'Psychological Safety and Learning Behavior',
    authors: ['Amy Edmondson'],
    year: 1999,
    description: 'Research on team psychological safety as a driver of learning and performance.',
  },

  // Additional Leadership
  {
    id: 'ref-27',
    category: 'leadership',
    title: 'Turn the Ship Around!',
    authors: ['L. David Marquet'],
    year: 2012,
    description: 'Leadership framework emphasizing intent-based decision-making and distributed autonomy.',
  },
  {
    id: 'ref-28',
    category: 'leadership',
    title: 'Multipliers: How the Best Leaders Make Everyone Smarter',
    authors: ['Liz Wiseman'],
    year: 2010,
    description: 'Analysis of leadership behaviors that amplify team intelligence and capability.',
  },
];
