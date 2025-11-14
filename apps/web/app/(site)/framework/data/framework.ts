export interface FrameworkElement {
  id: string;
  name: string;
  description: string;
  purpose: string;
  learnMorePath: string;
}

export interface GovernanceRole {
  role: string;
  responsibilities: string[];
  decisionAuthority: string;
}

export interface ImplementationPhase {
  phase: number;
  name: string;
  weeks: string;
  objectives: string[];
  keyDeliverables: string[];
}

export const frameworkElements: FrameworkElement[] = [
  {
    id: 'topologies',
    name: 'Topologies',
    description: 'The structural shape of career paths',
    purpose: 'Define whether your organization uses Y-shaped (dual track), W-shaped (tri-track), or Network models for career progression',
    learnMorePath: '/topologies',
  },
  {
    id: 'leveling',
    name: 'Leveling',
    description: 'Career levels defined by Impact × Autonomy dimensions',
    purpose: 'Establish clear level definitions from Junior (L1) to Distinguished (L6) using measurable Impact and Autonomy criteria',
    learnMorePath: '/framework/leveling',
  },
  {
    id: 'progression-pillars',
    name: 'Progression Pillars',
    description: 'Six competency dimensions for evaluation',
    purpose: 'Translate abstract level expectations into concrete behaviors across Delivery, Technical Domain, Collaboration, Autonomy, Initiative, and Mentoring',
    learnMorePath: '/framework/progression',
  },
  {
    id: 'guidelines',
    name: 'Implementation Guidelines',
    description: 'Implementation roadmap and governance structures',
    purpose: 'Provide step-by-step guidance for adopting, customizing, and sustaining the framework within your organization',
    learnMorePath: '/framework/guidelines',
  },
];

export const governanceRoles: GovernanceRole[] = [
  {
    role: 'Framework Owner',
    responsibilities: [
      'Overall framework strategy and evolution',
      'Cross-functional alignment and stakeholder management',
      'Annual framework review and update cycles',
    ],
    decisionAuthority: 'Final approval on framework changes',
  },
  {
    role: 'Engineering Leadership',
    responsibilities: [
      'Level definitions and calibration',
      'Promotion criteria and processes',
      'Department-specific adaptations',
    ],
    decisionAuthority: 'Approve individual promotions and level adjustments',
  },
  {
    role: 'People/HR Team',
    responsibilities: [
      'Compensation alignment with levels',
      'Promotion process administration',
      'Data tracking and reporting',
    ],
    decisionAuthority: 'Ensure compliance with compensation policies',
  },
  {
    role: 'Individual Contributors',
    responsibilities: [
      'Self-assessment against framework criteria',
      'Career development planning',
      'Feedback on framework clarity and fairness',
    ],
    decisionAuthority: 'Advocate for their own career growth',
  },
];

export const implementationPhases: ImplementationPhase[] = [
  {
    phase: 1,
    name: 'Discovery',
    weeks: 'Weeks 1-4',
    objectives: [
      'Understand current state of career progression',
      'Identify pain points and gaps',
      'Gather stakeholder input',
    ],
    keyDeliverables: [
      'Current state assessment report',
      'Stakeholder interview summary',
      'Problem statement and goals',
    ],
  },
  {
    phase: 2,
    name: 'Design',
    weeks: 'Weeks 5-12',
    objectives: [
      'Select appropriate topology model',
      'Customize level definitions',
      'Define progression pillar proficiencies',
    ],
    keyDeliverables: [
      'Framework design document',
      'Level definitions for all roles',
      'Pillar proficiency scales',
    ],
  },
  {
    phase: 3,
    name: 'Validation',
    weeks: 'Weeks 13-16',
    objectives: [
      'Test framework with pilot groups',
      'Refine based on feedback',
      'Ensure clarity and fairness',
    ],
    keyDeliverables: [
      'Pilot feedback report',
      'Revised framework v2',
      'FAQ and edge case documentation',
    ],
  },
  {
    phase: 4,
    name: 'Documentation',
    weeks: 'Weeks 17-24',
    objectives: [
      'Create public-facing framework documentation',
      'Develop self-assessment tools',
      'Build manager calibration guides',
    ],
    keyDeliverables: [
      'Public career ladder documentation',
      'Self-assessment templates',
      'Manager calibration playbook',
    ],
  },
  {
    phase: 5,
    name: 'Communication',
    weeks: 'Weeks 25-32',
    objectives: [
      'Plan organization-wide rollout',
      'Train managers on framework usage',
      'Prepare FAQs and support resources',
    ],
    keyDeliverables: [
      'Rollout communication plan',
      'Manager training sessions',
      'Support channel setup',
    ],
  },
  {
    phase: 6,
    name: 'Rollout',
    weeks: 'Weeks 33-40',
    objectives: [
      'Launch framework organization-wide',
      'Conduct all-hands and team sessions',
      'Enable self-assessments and 1-on-1 discussions',
    ],
    keyDeliverables: [
      'Framework launch event',
      'Team-specific Q&A sessions',
      'Self-assessment completion by all engineers',
    ],
  },
  {
    phase: 7,
    name: 'Calibration',
    weeks: 'Weeks 41-48',
    objectives: [
      'Align manager assessments across teams',
      'Identify and resolve level inconsistencies',
      'Establish calibration cadence',
    ],
    keyDeliverables: [
      'Calibration session outcomes',
      'Level adjustment recommendations',
      'Calibration best practices guide',
    ],
  },
  {
    phase: 8,
    name: 'Iteration',
    weeks: 'Weeks 49-52+',
    objectives: [
      'Collect ongoing feedback',
      'Make incremental improvements',
      'Plan annual framework review',
    ],
    keyDeliverables: [
      'Quarterly feedback summary',
      'Framework change log',
      'Annual review schedule',
    ],
  },
];
