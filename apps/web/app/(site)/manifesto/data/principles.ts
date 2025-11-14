import { LucideIcon, Eye, Award, Target, TrendingUp, FileCheck, MessageCircle, Lightbulb, Users } from 'lucide-react';

export interface Principle {
  id: string;
  order: number;
  title: string;
  description: string;
  icon: LucideIcon;
  details: string;
}

export const principles: Principle[] = [
  {
    id: 'transparency',
    order: 1,
    title: 'Transparency',
    description: 'Clear, documented, accessible expectations',
    icon: Eye,
    details: 'Career expectations, criteria, and progression paths must be explicitly documented and accessible to all team members. No hidden requirements or unstated rules.',
  },
  {
    id: 'fair-recognition',
    order: 2,
    title: 'Fair Recognition',
    description: 'Impact-based advancement, not politics',
    icon: Award,
    details: 'Promotions and recognition should be based on demonstrated impact and competency development, not tenure, politics, or favoritism.',
  },
  {
    id: 'equality-opportunity',
    order: 3,
    title: 'Equality of Opportunity',
    description: 'Multiple paths honoring different strengths',
    icon: Target,
    details: 'Career frameworks must provide multiple advancement paths (IC, management, technical leadership) that honor different strengths and preferences equally.',
  },
  {
    id: 'growth-mindset',
    order: 4,
    title: 'Growth Mindset',
    description: 'Proficiency is developed, not innate',
    icon: TrendingUp,
    details: 'Skills and competencies can be learned and developed over time. Career frameworks should support growth through learning, experimentation, and continuous improvement.',
  },
  {
    id: 'evidence-based',
    order: 5,
    title: 'Evidence-Based',
    description: 'Decisions grounded in demonstrated impact',
    icon: FileCheck,
    details: 'Career decisions (promotions, level changes, compensation) must be grounded in concrete evidence of demonstrated impact and competency, not subjective impressions.',
  },
  {
    id: 'continuous-feedback',
    order: 6,
    title: 'Continuous Feedback',
    description: 'Ongoing dialogue, not annual reviews alone',
    icon: MessageCircle,
    details: 'Career development requires ongoing conversation, regular feedback cycles, and continuous calibration—not just annual performance reviews.',
  },
  {
    id: 'flexibility-experimentation',
    order: 7,
    title: 'Flexibility & Experimentation',
    description: 'Support for exploration and role changes',
    icon: Lightbulb,
    details: 'Individuals should be supported in exploring different roles, tracks, and skill areas. Career paths are not linear; lateral moves and experimentation drive growth.',
  },
  {
    id: 'open-evolving',
    order: 8,
    title: 'Open & Evolving',
    description: 'Community-driven continuous improvement',
    icon: Users,
    details: 'Career frameworks should evolve based on community feedback, industry changes, and organizational learning. Open-source collaboration enables continuous improvement.',
  },
];
