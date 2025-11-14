export interface Pillar {
  id: string;
  name: string;
  description: string;
  proficiencyLevels: ProficiencyLevel[];
}

export interface ProficiencyLevel {
  level: number;
  title: string;
  description: string;
  behaviors: string[];
}

export const progressionPillars: Pillar[] = [
  {
    id: 'delivery',
    name: 'Delivery',
    description: 'Ability to complete work and ship results',
    proficiencyLevels: [
      {
        level: 1,
        title: 'Assisted Delivery',
        description: 'Completes well-defined tasks with guidance',
        behaviors: [
          'Delivers assigned tasks on time with support',
          'Follows established processes and patterns',
          'Asks clarifying questions when stuck',
        ],
      },
      {
        level: 2,
        title: 'Independent Delivery',
        description: 'Owns end-to-end feature delivery',
        behaviors: [
          'Delivers features independently from design through deployment',
          'Estimates work accurately and communicates delays proactively',
          'Handles edge cases and quality concerns without prompting',
        ],
      },
      {
        level: 3,
        title: 'Project Ownership',
        description: 'Drives multi-week projects to completion',
        behaviors: [
          'Breaks down complex projects into deliverable milestones',
          'Coordinates work across multiple stakeholders',
          'Balances speed with quality and technical debt considerations',
        ],
      },
      {
        level: 4,
        title: 'Program Leadership',
        description: 'Orchestrates multi-team initiatives',
        behaviors: [
          'Drives cross-functional, multi-quarter programs',
          'Unblocks teams and removes organizational obstacles',
          'Ensures delivery aligns with strategic goals',
        ],
      },
      {
        level: 5,
        title: 'Strategic Execution',
        description: 'Defines and executes multi-year roadmaps',
        behaviors: [
          'Shapes organizational delivery strategy and processes',
          'Balances multiple competing priorities at organizational scale',
          'Influences company-wide execution culture',
        ],
      },
    ],
  },
  {
    id: 'technical-domain',
    name: 'Technical Domain',
    description: 'Depth and breadth of technical expertise',
    proficiencyLevels: [
      {
        level: 1,
        title: 'Learning Foundations',
        description: 'Building fundamental technical skills',
        behaviors: [
          'Learns team tech stack and coding standards',
          'Implements solutions using established patterns',
          'Understands basic system architecture',
        ],
      },
      {
        level: 2,
        title: 'Proficient Contributor',
        description: 'Strong in primary technical area',
        behaviors: [
          'Makes informed technical decisions within scope',
          'Debugs complex issues independently',
          'Contributes to technical design discussions',
        ],
      },
      {
        level: 3,
        title: 'Technical Leader',
        description: 'Drives technical excellence for team',
        behaviors: [
          'Designs robust, scalable solutions',
          'Raises the technical bar through code reviews and mentoring',
          'Identifies and addresses technical debt strategically',
        ],
      },
      {
        level: 4,
        title: 'Domain Expert',
        description: 'Deep expertise in specialized areas',
        behaviors: [
          'Recognized expert in multiple technical domains',
          'Defines technical standards and best practices',
          'Evaluates and adopts new technologies strategically',
        ],
      },
      {
        level: 5,
        title: 'Technical Visionary',
        description: 'Shapes organizational technical direction',
        behaviors: [
          'Defines multi-year technical roadmaps and architecture',
          'Influences industry through contributions and thought leadership',
          'Balances innovation with pragmatic execution',
        ],
      },
    ],
  },
  {
    id: 'collaboration',
    name: 'Collaboration',
    description: 'Working effectively with others',
    proficiencyLevels: [
      {
        level: 1,
        title: 'Team Participant',
        description: 'Contributes to team discussions and ceremonies',
        behaviors: [
          'Participates in standups, retros, and planning',
          'Collaborates on code reviews and pair programming',
          'Communicates progress and blockers clearly',
        ],
      },
      {
        level: 2,
        title: 'Effective Collaborator',
        description: 'Works well cross-functionally',
        behaviors: [
          'Collaborates effectively with designers, PMs, and other engineers',
          'Gives and receives constructive feedback',
          'Facilitates productive technical discussions',
        ],
      },
      {
        level: 3,
        title: 'Team Multiplier',
        description: 'Elevates team effectiveness',
        behaviors: [
          'Improves team processes and collaboration practices',
          'Builds consensus across diverse perspectives',
          'Resolves conflicts constructively',
        ],
      },
      {
        level: 4,
        title: 'Cross-Team Connector',
        description: 'Enables collaboration across teams',
        behaviors: [
          'Builds relationships and trust across organizational boundaries',
          'Facilitates alignment on cross-team initiatives',
          'Creates collaboration structures and rituals',
        ],
      },
      {
        level: 5,
        title: 'Culture Architect',
        description: 'Shapes collaborative culture organization-wide',
        behaviors: [
          'Defines and models organizational collaboration values',
          'Breaks down silos and fosters cross-functional partnerships',
          'Cultivates culture of psychological safety and high performance',
        ],
      },
    ],
  },
  {
    id: 'autonomy',
    name: 'Autonomy',
    description: 'Independence in problem-solving and decision-making',
    proficiencyLevels: [
      {
        level: 1,
        title: 'Guided Work',
        description: 'Works with close direction',
        behaviors: [
          'Completes tasks with clear requirements and guidance',
          'Asks for help when blocked',
          'Follows established patterns and processes',
        ],
      },
      {
        level: 2,
        title: 'Self-Directed',
        description: 'Works independently on defined problems',
        behaviors: [
          'Unblocks self through research and experimentation',
          'Makes tactical decisions within defined scope',
          'Escalates strategic decisions appropriately',
        ],
      },
      {
        level: 3,
        title: 'Problem Definer',
        description: 'Identifies and frames problems independently',
        behaviors: [
          'Identifies gaps and opportunities proactively',
          'Defines problem scope and proposes solutions',
          'Balances autonomy with appropriate stakeholder input',
        ],
      },
      {
        level: 4,
        title: 'Strategic Thinker',
        description: 'Identifies strategic opportunities and risks',
        behaviors: [
          'Spots patterns and trends across teams',
          'Makes decisions that balance short-term and long-term needs',
          'Influences strategy through data and technical insight',
        ],
      },
      {
        level: 5,
        title: 'Vision Setter',
        description: 'Defines multi-year strategy and direction',
        behaviors: [
          'Sets organizational technical or product vision',
          'Makes decisions with company-wide implications',
          'Navigates ambiguity and complexity at strategic scale',
        ],
      },
    ],
  },
  {
    id: 'initiative',
    name: 'Initiative',
    description: 'Proactive identification and pursuit of opportunities',
    proficiencyLevels: [
      {
        level: 1,
        title: 'Reactive Contributor',
        description: 'Completes assigned work',
        behaviors: [
          'Completes assigned tasks reliably',
          'Asks for next tasks when current work is done',
          'Flags issues when encountered',
        ],
      },
      {
        level: 2,
        title: 'Proactive Improver',
        description: 'Identifies small improvements',
        behaviors: [
          'Suggests improvements to code, processes, or tools',
          'Takes ownership of small improvements without prompting',
          'Shares learnings and best practices with team',
        ],
      },
      {
        level: 3,
        title: 'Opportunity Identifier',
        description: 'Drives meaningful improvements',
        behaviors: [
          'Identifies significant opportunities for impact',
          'Builds support and drives initiatives forward',
          'Balances innovation with delivery commitments',
        ],
      },
      {
        level: 4,
        title: 'Strategic Initiator',
        description: 'Launches cross-team initiatives',
        behaviors: [
          'Identifies and drives strategic initiatives',
          'Builds coalitions and secures resources',
          'Perseveres through organizational obstacles',
        ],
      },
      {
        level: 5,
        title: 'Transformational Leader',
        description: 'Drives organizational transformation',
        behaviors: [
          'Identifies and drives company-changing initiatives',
          'Shapes organizational strategy and priorities',
          'Inspires and mobilizes organization around vision',
        ],
      },
    ],
  },
  {
    id: 'mentoring',
    name: 'Mentoring',
    description: 'Supporting and developing others',
    proficiencyLevels: [
      {
        level: 1,
        title: 'Mentee',
        description: 'Receives mentorship and guidance',
        behaviors: [
          'Seeks feedback and applies it to growth',
          'Asks thoughtful questions',
          'Shares learnings with peers',
        ],
      },
      {
        level: 2,
        title: 'Peer Mentor',
        description: 'Supports peers and junior colleagues',
        behaviors: [
          'Pairs with junior engineers on tasks',
          'Gives helpful code review feedback',
          'Answers questions and shares context',
        ],
      },
      {
        level: 3,
        title: 'Active Mentor',
        description: 'Actively develops others',
        behaviors: [
          'Mentors 1-2 engineers formally',
          'Accelerates growth through thoughtful feedback and coaching',
          'Creates learning opportunities for others',
        ],
      },
      {
        level: 4,
        title: 'Developer of Leaders',
        description: 'Develops future senior leaders',
        behaviors: [
          'Mentors senior engineers and future Staff+ candidates',
          'Builds mentorship culture and practices',
          'Sponsors high performers for growth opportunities',
        ],
      },
      {
        level: 5,
        title: 'Leadership Pipeline Builder',
        description: 'Develops organizational leadership bench',
        behaviors: [
          'Develops Principal+ leaders and future executives',
          'Shapes organizational approach to talent development',
          'Creates systems and programs for leadership growth',
        ],
      },
    ],
  },
];
