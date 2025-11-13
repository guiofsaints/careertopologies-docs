import { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Layers,
  TrendingUp,
  Award,
  Target,
  Users,
  Network,
  GitBranch,
  FileText,
  Heart,
  Lightbulb
} from "lucide-react";

export interface UnifiedRelatedPage {
  title: string;
  path: string;
  description: string;
  icon?: LucideIcon;
  category: "framework" | "concepts" | "resources" | "specialized";
}

// Core Framework Pages
export const FRAMEWORK_PAGES: UnifiedRelatedPage[] = [
  {
    title: "Framework Overview",
    path: "/framework",
    description: "Complete framework structure and implementation guide",
    icon: BookOpen,
    category: "framework"
  },
  {
    title: "Leveling",
    path: "/framework/leveling",
    description: "Career level definitions and progression structure",
    icon: Layers,
    category: "framework"
  },
  {
    title: "Progression Pillars",
    path: "/framework/progression",
    description: "Skills and competencies framework for career growth",
    icon: TrendingUp,
    category: "framework"
  },
  {
    title: "Guidelines",
    path: "/framework/guidelines",
    description: "Practical implementation and operational guidelines",
    icon: FileText,
    category: "framework"
  }
];

// Foundational Concepts
export const CONCEPT_PAGES: UnifiedRelatedPage[] = [
  {
    title: "About",
    path: "/about",
    description: "Project purpose, philosophy and background",
    icon: Heart,
    category: "concepts"
  },
  {
    title: "Concepts",
    path: "/concepts",
    description: "Core framework concepts and skill profiles",
    icon: Lightbulb,
    category: "concepts"
  },
  {
    title: "Manifesto",
    path: "/manifesto",
    description: "The 8 fundamental principles of Career Topologies",
    icon: Award,
    category: "concepts"
  },
  {
    title: "Topologies",
    path: "/topologies",
    description: "Y, W, and Network career structure models",
    icon: Network,
    category: "concepts"
  }
];

// Supporting Resources
export const RESOURCE_PAGES: UnifiedRelatedPage[] = [
  {
    title: "References",
    path: "/references",
    description: "Academic and professional studies that shaped the framework",
    icon: BookOpen,
    category: "resources"
  },
  {
    title: "Contributing",
    path: "/contributing",
    description: "How to contribute to the Career Topologies project",
    icon: GitBranch,
    category: "resources"
  }
];

// Legacy/Specialized Pages
export const SPECIALIZED_PAGES: UnifiedRelatedPage[] = [
  {
    title: "Management",
    path: "/management",
    description: "Management levels and leadership progression",
    icon: Users,
    category: "specialized"
  },
  {
    title: "Developing Leaders",
    path: "/management/developing-leaders",
    description: "Guide for identifying and developing new leaders",
    icon: TrendingUp,
    category: "specialized"
  },
  {
    title: "Shapes",
    path: "/shapes",
    description: "I, T, and Pi-shaped professional skill profiles",
    icon: Target,
    category: "specialized"
  }
];

// Page-specific configurations with intelligent suggestions
export const PAGE_CONFIGURATIONS = {
  "/": {
    variant: "explore" as const,
    pages: [
      ...CONCEPT_PAGES,
      ...FRAMEWORK_PAGES.slice(0, 2)
    ]
  },

  "/about": {
    variant: "explore" as const,
    pages: [
      ...FRAMEWORK_PAGES.slice(0, 3),
      ...CONCEPT_PAGES.filter(p => p.path !== "/about")
    ]
  },

  "/framework": {
    variant: "learn" as const,
    title: "Learn More",
    pages: [
      ...FRAMEWORK_PAGES.slice(1),
      ...CONCEPT_PAGES.slice(1, 3),
      RESOURCE_PAGES[0]
    ]
  },

  "/framework/leveling": {
    variant: "related" as const,
    pages: [
      FRAMEWORK_PAGES[0], // Framework Overview
      FRAMEWORK_PAGES[2], // Progression Pillars
      FRAMEWORK_PAGES[3], // Guidelines
      CONCEPT_PAGES[2],   // Manifesto
      CONCEPT_PAGES[3],   // Topologies
      CONCEPT_PAGES[1]    // Concepts
    ]
  },

  "/framework/progression": {
    variant: "related" as const,
    pages: [
      FRAMEWORK_PAGES[0], // Framework Overview
      FRAMEWORK_PAGES[1], // Leveling
      FRAMEWORK_PAGES[3], // Guidelines
      CONCEPT_PAGES[2],   // Manifesto
      CONCEPT_PAGES[1],   // Concepts
      CONCEPT_PAGES[3]    // Topologies
    ]
  },

  "/framework/guidelines": {
    variant: "related" as const,
    pages: [
      FRAMEWORK_PAGES[0], // Framework Overview
      FRAMEWORK_PAGES[1], // Leveling
      FRAMEWORK_PAGES[2], // Progression Pillars
      CONCEPT_PAGES[2],   // Manifesto
      CONCEPT_PAGES[3],   // Topologies
      RESOURCE_PAGES[1]   // Contributing
    ]
  },

  "/concepts": {
    variant: "explore" as const,
    title: "Explore Related Sections",
    pages: [
      {
        title: "Framework",
        path: "/framework",
        description: "How it all connects",
        icon: BookOpen,
        category: "framework" as const
      },
      {
        title: "Manifesto",
        path: "/manifesto",
        description: "Principles that guide the model",
        icon: GitBranch,
        category: "concepts" as const
      },
      {
        title: "Topologies",
        path: "/topologies",
        description: "Career structures in practice",
        icon: Network,
        category: "concepts" as const
      },
      {
        title: "Shapes",
        path: "/shapes",
        description: "Understanding professional profiles",
        icon: Target,
        category: "specialized" as const
      }
    ]
  },

  "/manifesto": {
    variant: "explore" as const,
    title: "Explore Related Sections",
    pages: [
      {
        title: "Framework",
        path: "/framework",
        description: "Core components of the model",
        icon: BookOpen,
        category: "framework" as const
      },
      {
        title: "Topologies",
        path: "/topologies",
        description: "Structural career paths (Y, W, Network)",
        icon: Network,
        category: "concepts" as const
      },
      {
        title: "Shapes",
        path: "/shapes",
        description: "Professional skill profiles (I, T, Pi)",
        icon: Target,
        category: "specialized" as const
      }
    ]
  },

  "/topologies": {
    variant: "related" as const,
    pages: [
      {
        title: "Framework",
        path: "/framework",
        description: "Structure and governance of the model",
        icon: BookOpen,
        category: "framework" as const
      },
      {
        title: "Shapes",
        path: "/shapes",
        description: "I, T, and Pi skill profiles",
        icon: Target,
        category: "specialized" as const
      },
      {
        title: "Manifesto",
        path: "/manifesto",
        description: "Career design principles",
        icon: GitBranch,
        category: "concepts" as const
      }
    ]
  },

  "/references": {
    variant: "related" as const,
    pages: [
      ...FRAMEWORK_PAGES.slice(0, 3),
      CONCEPT_PAGES[0],
      CONCEPT_PAGES[2],
      RESOURCE_PAGES[1]
    ]
  },

  "/contributing": {
    variant: "related" as const,
    pages: [
      ...FRAMEWORK_PAGES.slice(0, 3),
      CONCEPT_PAGES[0],
      CONCEPT_PAGES[2],
      RESOURCE_PAGES[0]
    ]
  },

  "/management": {
    variant: "related" as const,
    pages: [
      SPECIALIZED_PAGES[1], // Developing Leaders
      ...FRAMEWORK_PAGES.slice(0, 3),
      CONCEPT_PAGES[2], // Manifesto
      CONCEPT_PAGES[3]  // Topologies
    ]
  },

  "/management/developing-leaders": {
    variant: "related" as const,
    pages: [
      SPECIALIZED_PAGES[0], // Management
      FRAMEWORK_PAGES[1],   // Leveling
      FRAMEWORK_PAGES[2],   // Progression Pillars
      CONCEPT_PAGES[2],     // Manifesto
      CONCEPT_PAGES[3],     // Topologies
      FRAMEWORK_PAGES[3]    // Guidelines
    ]
  }
} as const;

// Smart function to get related pages with configuration
export function getUnifiedRelatedPages(currentPath: string) {
  // Get specific configuration if it exists
  const config = PAGE_CONFIGURATIONS[currentPath as keyof typeof PAGE_CONFIGURATIONS];

  if (config) {
    return config;
  }

  // Fallback: generate smart suggestions
  const allPages = [
    ...FRAMEWORK_PAGES,
    ...CONCEPT_PAGES,
    ...RESOURCE_PAGES,
    ...SPECIALIZED_PAGES
  ].filter(page => page.path !== currentPath);

  return {
    variant: "related" as const,
    pages: allPages.slice(0, 6)
  };
}
