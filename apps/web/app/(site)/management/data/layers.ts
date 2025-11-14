export interface ManagementLayer {
  id: string;
  title: string;
  alternativeTitles: string[];
  scope: string;
  responsibilities: string[];
  timeHorizon: string;
  typicalTeamSize: string;
  keySkills: string[];
  challenges: string[];
}

export const managementLayers: ManagementLayer[] = [
  {
    id: 'frontline',
    title: 'Front-line Manager',
    alternativeTitles: [
      'Engineering Manager',
      'Team Lead',
      'Manager',
    ],
    scope: 'Single team (5-10 people)',
    responsibilities: [
      'Direct people management (1-on-1s, performance reviews, coaching)',
      'Team execution and delivery (sprint planning, standups, retrospectives)',
      'Tactical planning (quarterly roadmaps, resource allocation)',
      'Hiring and onboarding for team',
      'Career development and growth plans for direct reports',
      'Day-to-day problem-solving and unblocking',
    ],
    timeHorizon: 'Weeks to quarters',
    typicalTeamSize: '5-10 direct reports',
    keySkills: [
      '1-on-1 coaching and feedback',
      'Performance management',
      'Project management',
      'Technical oversight',
      'Conflict resolution',
      'Hiring and interviewing',
    ],
    challenges: [
      'Balancing hands-on technical work with management duties',
      'Transitioning from peer to manager',
      'Learning to delegate effectively',
      'Managing time across many 1-on-1s and meetings',
    ],
  },
  {
    id: 'middle',
    title: 'Middle Manager',
    alternativeTitles: [
      'Senior Engineering Manager',
      'Director of Engineering',
      'Head of Engineering',
    ],
    scope: 'Multiple teams (20-50 people)',
    responsibilities: [
      'Multi-team coordination and alignment',
      'Resource allocation across teams',
      'Strategic execution (annual planning, OKRs)',
      'Manager development (coaching other managers)',
      'Cross-functional partnership (Product, Design, Data)',
      'Organizational process improvement',
      'Hiring strategy and team scaling',
    ],
    timeHorizon: 'Quarters to years',
    typicalTeamSize: '3-6 teams, 20-50 people total',
    keySkills: [
      'Strategic thinking',
      'Manager coaching',
      'Organizational design',
      'Stakeholder management',
      'Budget and resource planning',
      'Process design',
    ],
    challenges: [
      'Letting go of day-to-day execution',
      'Influencing through managers, not directly',
      'Balancing competing priorities across teams',
      'Managing up and across the organization',
    ],
  },
  {
    id: 'top',
    title: 'Top Manager',
    alternativeTitles: [
      'VP of Engineering',
      'SVP Engineering',
      'CTO',
      'Chief Technology Officer',
    ],
    scope: 'Organization or major division (50-500+ people)',
    responsibilities: [
      'Organizational direction and vision',
      'Executive leadership and company strategy',
      'Technology and product roadmap at scale',
      'Culture and values definition',
      'Budget and P&L ownership',
      'External representation (board, investors, press)',
      'Leadership team development',
    ],
    timeHorizon: 'Years to decades',
    typicalTeamSize: '5-10 Directors/Senior Managers, 50-500+ people total',
    keySkills: [
      'Vision setting',
      'Executive communication',
      'Organizational transformation',
      'Financial management',
      'Board and investor relations',
      'Talent strategy',
    ],
    challenges: [
      'Operating with high ambiguity and complexity',
      'Balancing innovation with execution',
      'Managing at multiple levels of abstraction',
      'Navigating politics and organizational dynamics',
    ],
  },
];
