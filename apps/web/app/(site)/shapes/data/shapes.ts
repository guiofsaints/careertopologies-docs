export interface SkillShape {
  id: string;
  name: string;
  description: string;
  visual: string;
  characteristics: string[];
  strengths: string[];
  challenges: string[];
  careerPhase: string;
  examples: string[];
}

export interface ShapeTransition {
  from: string;
  to: string;
  triggers: string[];
  timeline: string;
  strategies: string[];
}

export const skillShapes: SkillShape[] = [
  {
    id: 'i-shaped',
    name: 'I-Shaped',
    description: 'Deep specialist in a single domain',
    visual: '|',
    characteristics: [
      'Highly specialized expertise in one area',
      'Limited breadth outside core domain',
      'Strong vertical depth in specific skill',
    ],
    strengths: [
      'Expert-level knowledge in specialized field',
      'High efficiency in core domain',
      'Go-to person for specific problems',
      'Can solve complex problems others cannot',
    ],
    challenges: [
      'Limited collaboration outside domain',
      'Dependency on others for adjacent skills',
      'Risk of skill obsolescence if domain changes',
      'Harder to see big picture',
    ],
    careerPhase: 'Early career (0-3 years)',
    examples: [
      'Junior React Developer (deep on React, limited backend/design knowledge)',
      'Database Administrator (expert in PostgreSQL, limited application development)',
      'SEO Specialist (deep SEO expertise, limited content strategy/analytics)',
    ],
  },
  {
    id: 't-shaped',
    name: 'T-Shaped',
    description: 'Deep specialist with broad complementary skills',
    visual: '⊤',
    characteristics: [
      'Deep expertise in primary domain (vertical bar)',
      'Broad working knowledge of adjacent domains (horizontal bar)',
      'Can collaborate effectively across disciplines',
    ],
    strengths: [
      'Expert in core area while understanding context',
      'Bridges silos through cross-functional knowledge',
      'More adaptable to changing environments',
      'Can lead complex projects requiring diverse skills',
    ],
    challenges: [
      'Risk of spreading too thin',
      'Maintaining depth while building breadth',
      'Balancing specialist vs generalist identity',
      'May not be as deep as I-shaped peers in core domain',
    ],
    careerPhase: 'Mid-career (3-8 years)',
    examples: [
      'Full-Stack Engineer (deep backend, working knowledge of frontend/DevOps)',
      'Product Manager (deep product strategy, understands design/eng/data)',
      'Staff Engineer (deep distributed systems, broad infra/security/ML knowledge)',
    ],
  },
  {
    id: 'pi-shaped',
    name: 'Pi-Shaped (Π)',
    description: 'Multi-domain expert with deep expertise in 2+ areas',
    visual: 'Π',
    characteristics: [
      'Deep expertise in 2-3 distinct domains (multiple vertical bars)',
      'Broad knowledge across many areas (horizontal bar)',
      'Combines disciplines in unique ways',
    ],
    strengths: [
      'Rare skill combinations create unique value',
      'Can lead initiatives spanning multiple domains',
      'Innovates at intersection of disciplines',
      'Highly resilient to market changes',
    ],
    challenges: [
      'Long journey to develop multiple depths',
      'Difficult to maintain currency in all domains',
      'May be overqualified for specialist roles',
      'Hard to find perfect-fit roles',
    ],
    careerPhase: 'Senior/Staff+ (8+ years)',
    examples: [
      'Engineering Manager (deep technical + people management)',
      'Product Engineer (deep product strategy + software engineering)',
      'Data Science Lead (deep ML + data engineering + business strategy)',
      'Architect with deep cloud infra + security expertise',
    ],
  },
];

export const shapeTransitions: ShapeTransition[] = [
  {
    from: 'I-Shaped',
    to: 'T-Shaped',
    triggers: [
      'Need to collaborate more effectively with other teams',
      'Frustration with dependencies on other specialists',
      'Desire to lead cross-functional projects',
      'Recognition that context matters as much as depth',
    ],
    timeline: '1-3 years of intentional breadth-building',
    strategies: [
      'Partner with colleagues in adjacent domains (pair programming, shadowing)',
      'Take on small projects outside comfort zone',
      'Read docs and understand architecture of related systems',
      'Attend cross-functional planning and design sessions',
    ],
  },
  {
    from: 'T-Shaped',
    to: 'Pi-Shaped',
    triggers: [
      'Interest in a second domain becomes as strong as first',
      'Career opportunities require multi-domain expertise',
      'Unique combination of skills creates competitive advantage',
      'Leadership roles demand expertise in multiple areas',
    ],
    timeline: '2-5 years to develop second deep expertise',
    strategies: [
      'Deliberately seek projects requiring both skillsets',
      'Take on hybrid roles (e.g., Tech Lead, Product Engineer)',
      'Invest in formal learning (courses, certifications) for second domain',
      'Find mentors who excel in target second domain',
    ],
  },
];
