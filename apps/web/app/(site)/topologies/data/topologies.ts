export interface TopologyModel {
  id: string;
  name: string;
  shortName: string;
  description: string;
  structure: string;
  autonomy: string;
  decisionMaking: string;
  bestFor: string[];
  challenges: string[];
  keyCharacteristics: string[];
}

export const topologies: TopologyModel[] = [
  {
    id: 'y-shaped',
    name: 'Y-Shaped (Dual Track)',
    shortName: 'Y-Model',
    description: 'Individual Contributor and Manager tracks diverge at senior level',
    structure: 'Two distinct career paths that bifurcate after mid-level: one for technical depth (IC track) and one for people management (Manager track).',
    autonomy: 'High autonomy within chosen track, but limited ability to switch between tracks without level reset',
    decisionMaking: 'Track-specific: ICs drive technical decisions, Managers drive people and process decisions',
    bestFor: [
      'Organizations with clear role specialization',
      'Teams where technical depth and management require full-time focus',
      'Companies with traditional hierarchical structures',
      'Environments where career commitment to one path is valued',
    ],
    challenges: [
      'Limited flexibility for those who want to try both tracks',
      'Potential for "grass is greener" syndrome when locked into one path',
      'May force premature decisions about career direction',
      'Can create perception of unequal value between IC and Manager tracks',
    ],
    keyCharacteristics: [
      'Clear separation between IC and management roles',
      'Parallel career progression on both tracks',
      'Track choice typically made at Senior Engineer / Senior Manager level',
      'Switching tracks often requires level adjustment',
    ],
  },
  {
    id: 'w-shaped',
    name: 'W-Shaped (Tri-Track)',
    shortName: 'W-Model',
    description: 'Adds hybrid Technical Leadership track for IC/Manager flexibility',
    structure: 'Three career paths: IC, Technical Leadership (hybrid), and Manager. The middle track combines technical depth with people influence.',
    autonomy: 'Maximum autonomy and flexibility—individuals can move between tracks based on interests, projects, and organizational needs',
    decisionMaking: 'Distributed: ICs focus on technical decisions, Tech Leads balance technical and people decisions, Managers own people and strategic decisions',
    bestFor: [
      'Organizations valuing flexibility and experimentation',
      'Companies with strong technical leadership culture',
      'Teams that need hybrid roles (e.g., Architect, Tech Lead, Engineering Manager with hands-on coding)',
      'Environments supporting career exploration and lateral movement',
    ],
    challenges: [
      'More complex to administer and calibrate across three tracks',
      'Requires clear definition of Technical Leadership role expectations',
      'Potential confusion about which track is "best" for career growth',
      'May require more frequent role transitions and adjustments',
    ],
    keyCharacteristics: [
      'Three distinct tracks with different focuses',
      'Technical Leadership track bridges IC and Manager responsibilities',
      'Encourages lateral movement and exploration',
      'Tech Leads often manage small teams while remaining hands-on',
    ],
  },
  {
    id: 'network',
    name: 'Network Model',
    shortName: 'Network',
    description: 'Fluid lateral movement across multiple skill dimensions without rigid hierarchies',
    structure: 'Non-linear career progression based on skill development across multiple dimensions (technical, leadership, domain expertise, mentoring, etc.) rather than hierarchical levels.',
    autonomy: 'Highest autonomy—individuals define their own growth paths based on interests, organizational needs, and skill gaps',
    decisionMaking: 'Context-dependent: decision-making authority flows from demonstrated expertise and project needs, not formal title',
    bestFor: [
      'Highly innovative, flat organizations',
      'Startups and scale-ups with rapidly changing needs',
      'Companies prioritizing adaptability and continuous learning',
      'Teams with project-based work requiring diverse skill combinations',
    ],
    challenges: [
      'Requires strong organizational culture and transparency to avoid chaos',
      'Can be difficult to standardize compensation and promotion criteria',
      'May create ambiguity about career progression and expectations',
      'Harder to communicate to external candidates accustomed to traditional ladders',
    ],
    keyCharacteristics: [
      'No fixed career tracks or ladders',
      'Growth measured across multiple competency dimensions',
      'Roles emerge from skills and interests rather than predefined tracks',
      'Emphasizes continuous learning and skill portfolio development',
    ],
  },
];
