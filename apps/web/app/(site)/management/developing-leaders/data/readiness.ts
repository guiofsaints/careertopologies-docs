export interface ReadinessIndicator {
  category: string;
  indicators: string[];
}

export interface InterimExperience {
  id: string;
  title: string;
  description: string;
  duration: string;
  learnings: string[];
}

export const readinessIndicators: ReadinessIndicator[] = [
  {
    category: 'Interest & Motivation',
    indicators: [
      'Genuinely enjoys helping others grow and succeed',
      'Excited about team dynamics and organizational challenges',
      'Comfortable with less individual technical work',
      'Energized (not drained) by 1-on-1s and coaching conversations',
    ],
  },
  {
    category: 'People Skills',
    indicators: [
      'Gives clear, constructive feedback regularly',
      'Resolves interpersonal conflicts effectively',
      'Builds trust and psychological safety on teams',
      'Adapts communication style to different individuals',
    ],
  },
  {
    category: 'Leadership Behaviors',
    indicators: [
      'Naturally mentors and unblocks others without being asked',
      'Thinks about team health and process improvements',
      'Coordinates work across people and influences without authority',
      'Advocates for team needs and priorities',
    ],
  },
  {
    category: 'Self-Awareness',
    indicators: [
      'Understands own strengths and growth areas',
      'Seeks and acts on feedback from peers and managers',
      'Reflects on failures and adjusts behavior',
      'Comfortable with ambiguity and learning new skills',
    ],
  },
];

export const interimExperiences: InterimExperience[] = [
  {
    id: 'tech-lead',
    title: 'Tech Lead',
    description: 'Lead a project or feature team without formal management authority',
    duration: '3-6 months',
    learnings: [
      'Coordinate work across engineers',
      'Balance technical decisions with team dynamics',
      'Influence without formal authority',
      'Run meetings and facilitate discussions',
    ],
  },
  {
    id: 'mentor',
    title: 'Formal Mentorship',
    description: 'Mentor 1-2 junior engineers with structured goals',
    duration: '6-12 months',
    learnings: [
      'Provide regular coaching and feedback',
      'Help someone grow their skills',
      'Track progress against development goals',
      'Experience the satisfaction of developing others',
    ],
  },
  {
    id: 'interim-manager',
    title: 'Interim Manager',
    description: 'Cover for a manager on leave or act as temporary team lead',
    duration: '1-3 months',
    learnings: [
      'Run 1-on-1s and team meetings',
      'Make prioritization and resource decisions',
      'Handle performance and interpersonal issues',
      'Experience day-to-day management responsibilities',
    ],
  },
  {
    id: 'hiring-lead',
    title: 'Hiring Lead',
    description: 'Own hiring process for a role: sourcing, interviewing, closing',
    duration: '2-4 months (per hire)',
    learnings: [
      'Screen resumes and conduct interviews',
      'Sell candidates on team and company',
      'Make hiring decisions and tradeoffs',
      'Onboard new team members',
    ],
  },
];
