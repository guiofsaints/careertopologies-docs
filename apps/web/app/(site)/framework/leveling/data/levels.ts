export interface CareerLevel {
  level: number;
  title: string;
  impact: string;
  autonomy: string;
  typicalExamples: string[];
  keyExpectations: string[];
}

export const careerLevels: CareerLevel[] = [
  {
    level: 1,
    title: 'Junior',
    impact: 'Individual tasks with guidance',
    autonomy: 'Works with close supervision and clear direction',
    typicalExamples: [
      'Junior Software Engineer',
      'Associate Product Manager',
      'Junior Designer',
    ],
    keyExpectations: [
      'Completes well-defined tasks with guidance',
      'Asks questions and seeks clarification',
      'Learns team processes and tools',
      'Participates in code reviews and design critiques',
    ],
  },
  {
    level: 2,
    title: 'Mid-Level',
    impact: 'Owns features or small projects',
    autonomy: 'Works independently on defined problems',
    typicalExamples: [
      'Software Engineer',
      'Product Manager',
      'Designer',
    ],
    keyExpectations: [
      'Owns end-to-end feature delivery',
      'Makes technical decisions within scope',
      'Unblocks self through research and collaboration',
      'Contributes to team planning and architecture discussions',
    ],
  },
  {
    level: 3,
    title: 'Senior',
    impact: 'Owns significant projects or multiple features',
    autonomy: 'Defines problems and proposes solutions',
    typicalExamples: [
      'Senior Software Engineer',
      'Senior Product Manager',
      'Senior Designer',
    ],
    keyExpectations: [
      'Drives complex multi-week projects independently',
      'Mentors junior and mid-level engineers',
      'Influences team technical direction',
      'Identifies and solves ambiguous problems',
    ],
  },
  {
    level: 4,
    title: 'Staff',
    impact: 'Influences team or multiple teams',
    autonomy: 'Identifies strategic opportunities and risks',
    typicalExamples: [
      'Staff Engineer',
      'Staff Product Manager',
      'Staff Designer',
    ],
    keyExpectations: [
      'Drives multi-quarter, cross-team initiatives',
      'Sets technical standards and best practices',
      'Mentors senior engineers and future Staff candidates',
      'Balances short-term delivery with long-term technical health',
    ],
  },
  {
    level: 5,
    title: 'Principal',
    impact: 'Influences organization or product area',
    autonomy: 'Defines multi-year strategy and vision',
    typicalExamples: [
      'Principal Engineer',
      'Principal Product Manager',
      'Principal Designer',
    ],
    keyExpectations: [
      'Defines multi-year technical or product roadmaps',
      'Influences org-wide architecture and standards',
      'Represents organization externally (conferences, open source)',
      'Develops future Staff and Principal leaders',
    ],
  },
  {
    level: 6,
    title: 'Distinguished',
    impact: 'Influences industry or multiple organizations',
    autonomy: 'Shapes company-wide strategy and external ecosystem',
    typicalExamples: [
      'Distinguished Engineer',
      'VP of Product',
      'Chief Design Officer',
    ],
    keyExpectations: [
      'Drives company-wide strategic initiatives',
      'Recognized industry expert and thought leader',
      'Influences product/technology direction across entire company',
      'Builds and nurtures Principal+ leadership pipeline',
    ],
  },
];

export interface TopologyLevelAlignment {
  topology: string;
  description: string;
  levelNotes: { level: number; note: string }[];
}

export const topologyAlignments: TopologyLevelAlignment[] = [
  {
    topology: 'Y-Shaped (Dual Track)',
    description: 'IC and Manager tracks diverge at Senior level',
    levelNotes: [
      { level: 3, note: 'Decision point: Choose IC track or Manager track' },
      { level: 4, note: 'Staff IC or Engineering Manager—distinct tracks' },
      { level: 5, note: 'Principal IC or Senior EM/Director—parallel progression' },
      { level: 6, note: 'Distinguished IC or VP Engineering—equal seniority' },
    ],
  },
  {
    topology: 'W-Shaped (Tri-Track)',
    description: 'Adds hybrid Technical Leadership track',
    levelNotes: [
      { level: 3, note: 'Choose IC, Tech Lead, or Manager track' },
      { level: 4, note: 'Staff IC, Staff Tech Lead (hybrid), or EM' },
      { level: 5, note: 'Principal IC, Principal Architect (hybrid), or Director' },
      { level: 6, note: 'Distinguished IC, CTO/Distinguished Architect, or VP' },
    ],
  },
  {
    topology: 'Network Model',
    description: 'Fluid movement across skill dimensions',
    levelNotes: [
      { level: 3, note: 'Senior generalist with emerging specialty areas' },
      { level: 4, note: 'Staff-level expertise in 2-3 dimensions (e.g., technical + mentoring)' },
      { level: 5, note: 'Principal-level depth in primary dimension + breadth across others' },
      { level: 6, note: 'Distinguished across multiple dimensions with org-wide influence' },
    ],
  },
];
