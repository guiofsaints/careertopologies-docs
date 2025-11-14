export interface Concept {
  id: string;
  order: number;
  term: string;
  definition: string;
  details: string;
  relatedTo: string[];
  learnMorePath?: string;
}

export const concepts: Concept[] = [
  {
    id: 'topology',
    order: 1,
    term: 'Career Topology',
    definition: 'Structural model for career paths within an organization',
    details: 'A career topology defines the shape and structure of possible advancement paths. Common models include Y-shaped (IC/Manager bifurcation), W-shaped (tri-track with technical leadership), and Network (fluid lateral movement). The topology determines how individuals progress through different roles and specializations.',
    relatedTo: ['level', 'shape'],
    learnMorePath: '/topologies',
  },
  {
    id: 'level',
    order: 2,
    term: 'Career Level',
    definition: 'Position based on Impact and Autonomy dimensions',
    details: 'Career levels represent distinct stages of professional growth, typically ranging from junior (Level 1) to principal/executive (Level 6+). Each level is defined by increasing expectations for organizational impact and decision-making autonomy. Levels are topology-agnostic—the same leveling criteria apply across IC, management, and technical leadership tracks.',
    relatedTo: ['impact', 'autonomy', 'topology'],
    learnMorePath: '/framework/leveling',
  },
  {
    id: 'pillar',
    order: 3,
    term: 'Progression Pillar',
    definition: 'Competency dimension for evaluating growth',
    details: 'The six progression pillars (Delivery, Technical Domain, Collaboration, Autonomy, Initiative, Mentoring) are the core competency dimensions used to assess readiness for advancement. Each pillar has proficiency levels (1-5 scale) that map to career levels. Progression requires balanced growth across all pillars, not just technical depth.',
    relatedTo: ['proficiency', 'level'],
    learnMorePath: '/framework/progression',
  },
  {
    id: 'proficiency',
    order: 4,
    term: 'Proficiency',
    definition: 'Skill competence level on a specific pillar (1-5 scale)',
    details: 'Proficiency measures demonstrated competence within a specific progression pillar. The 1-5 scale ranges from "Aware" (basic understanding) to "Expert" (recognized authority). Proficiency is developed through deliberate practice, feedback, and real-world application—it is not innate or fixed.',
    relatedTo: ['pillar', 'level'],
  },
  {
    id: 'impact',
    order: 5,
    term: 'Impact',
    definition: 'Scope and significance of organizational contributions',
    details: 'Impact measures the breadth and depth of an individual\'s influence on organizational outcomes. It scales from individual task completion (Level 1) to company-wide strategic direction (Level 6+). Impact is demonstrated through shipped features, technical decisions, team influence, process improvements, and business results.',
    relatedTo: ['level', 'autonomy'],
    learnMorePath: '/framework/leveling',
  },
  {
    id: 'autonomy',
    order: 6,
    term: 'Autonomy',
    definition: 'Degree of independence in decision-making',
    details: 'Autonomy reflects the level of independence and self-direction expected at each career level. It ranges from highly supervised execution (Level 1) to independent strategic decision-making (Level 6+). Higher autonomy requires sound judgment, risk assessment, and accountability for outcomes.',
    relatedTo: ['level', 'impact'],
    learnMorePath: '/framework/leveling',
  },
  {
    id: 'shape',
    order: 7,
    term: 'Professional Shape',
    definition: 'Skill breadth vs. depth profile',
    details: 'Professional shapes describe how an individual\'s skills are distributed across domains. I-shaped professionals have deep expertise in one area. T-shaped professionals combine depth in one domain with broad knowledge across others. Pi-shaped professionals have depth in multiple domains. Shapes evolve throughout a career.',
    relatedTo: ['proficiency', 'pillar'],
    learnMorePath: '/shapes',
  },
];
