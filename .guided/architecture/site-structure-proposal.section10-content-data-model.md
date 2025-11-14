## 10. Content and Data Model

### Overview

The Career Topologies content model balances **generic page content** with **specialized domain entities** (topologies, shapes, levels, principles). All content is authored in Markdown/MDX with YAML frontmatter, processed via Contentlayer into type-safe TypeScript objects, and rendered through Next.js App Router.

---

### Content Type Taxonomy

#### 1. Generic Pages (Documentation)

**Purpose**: Standard informational pages (About, Framework, Contributing, References)  
**Storage**: `content/pages/*.mdx`  
**Characteristics**: Long-form text, sections, callouts, related pages

#### 2. Conceptual Entities (Domain Models)

**Purpose**: Structured data representing framework concepts  
**Storage**: Separate directories per entity type  
**Characteristics**: Consistent schema, referenced across pages, visualized in interactive components

**Entity Types**:
- **Career Topologies** (Y, W, Network models)
- **Professional Shapes** (I, T, Pi profiles)
- **Manifesto Principles** (8 foundational principles)
- **Career Levels** (6-8 hierarchical levels)
- **Progression Pillars** (6 competency dimensions)
- **Management Levels** (3 management tiers)

---

### File Structure

```
content/
├── pages/                            # Generic documentation pages
│   ├── home.mdx                      # Home page content (optional)
│   ├── about.mdx
│   ├── concepts.mdx
│   ├── references.mdx
│   └── contributing.mdx
│
├── framework/                        # Framework section pages
│   ├── index.mdx                     # Framework overview
│   ├── leveling.mdx
│   ├── progression.mdx
│   └── guidelines.mdx
│
├── management/                       # Management section
│   ├── index.mdx
│   └── developing-leaders.mdx
│
├── topologies/                       # Topology entities (3 models)
│   ├── y-model.mdx
│   ├── w-model.mdx
│   ├── network-model.mdx
│   └── index.mdx                     # Comparative overview
│
├── shapes/                           # Shape entities (3 profiles)
│   ├── i-shaped.mdx
│   ├── t-shaped.mdx
│   ├── pi-shaped.mdx
│   └── index.mdx                     # Shapes overview
│
├── principles/                       # Manifesto principles (8 items)
│   ├── transparency.mdx
│   ├── fair-recognition.mdx
│   ├── equality.mdx
│   ├── growth-mindset.mdx
│   ├── evidence-based.mdx
│   ├── continuous-feedback.mdx
│   ├── flexibility.mdx
│   ├── open-evolving.mdx
│   └── index.mdx                     # Manifesto page
│
├── levels/                           # Career level definitions
│   ├── junior.mdx
│   ├── mid.mdx
│   ├── senior.mdx
│   ├── staff.mdx
│   ├── principal.mdx
│   ├── director.mdx
│   └── index.mdx                     # Leveling overview
│
├── pillars/                          # Progression pillars
│   ├── delivery.mdx
│   ├── technical-domain.mdx
│   ├── collaboration.mdx
│   ├── autonomy.mdx
│   ├── initiative.mdx
│   ├── mentoring.mdx
│   └── index.mdx                     # Progression overview
│
└── config/                           # Configuration data
    ├── navigation.json               # Navigation structure
    ├── related-pages.json            # Related content mappings
    ├── metadata.json                 # SEO defaults
    └── site-config.json              # Global site settings
```

---

### Frontmatter Schema

#### Generic Page Frontmatter

**Example**: `content/pages/about.mdx`

```yaml
---
title: About Career Topologies
slug: about
description: Comprehensive framework overview, project background, and development philosophy
category: docs
section: foundational
layout: documentation
publishedAt: 2024-11-01
updatedAt: 2025-01-15
showTOC: true
showBreadcrumbs: true
relatedPages:
  - manifesto
  - concepts
  - framework
seo:
  title: About Career Topologies | Open-Source Career Framework
  description: Learn about Career Topologies, an open-source framework for transparent, equitable career development in technology organizations.
  keywords:
    - career framework
    - open source
    - technology careers
  ogImage: /og-images/about.png
---
```

**Required Fields**:
- `title`: Page title (H1)
- `slug`: URL slug (must match file path)
- `description`: Short summary (meta description)

**Optional Fields**:
- `category`: Content category (docs, framework, resources)
- `section`: Pillar grouping (foundational, framework, specialized, community)
- `layout`: Layout pattern (landing, documentation, reference)
- `publishedAt`, `updatedAt`: Dates for freshness signals
- `showTOC`: Enable table of contents sidebar
- `showBreadcrumbs`: Display breadcrumb navigation
- `relatedPages`: Array of slugs for related content suggestions
- `seo`: Override default SEO metadata

---

#### Entity Frontmatter: Career Topology

**Example**: `content/topologies/y-model.mdx`

```yaml
---
title: Y-Model (Dual Track)
slug: y-model
entityType: topology
order: 1
icon: /icons/topology-y.svg
summary: IC and Manager tracks diverge at senior level, offering two distinct career paths
characteristics:
  tracks: 2
  flexibility: low
  transitionType: one-time fork
  bestFor: Traditional organizations with clear role definitions
attributes:
  trackNames:
    - Individual Contributor
    - Manager
  bifurcationLevel: Senior (Level 3-4)
  transitionRules: Generally irreversible once forked
  organizationalFit:
    - Startups (10-50 employees)
    - Established enterprises (500+ employees)
comparisons:
  strengths:
    - Clear career paths reduce ambiguity
    - Simple to understand and communicate
    - Well-suited for hierarchical cultures
  weaknesses:
    - Limited flexibility after bifurcation
    - Can pressure ICs to manage for advancement
    - Difficult to reverse management decision
relatedEntities:
  - w-model
  - network-model
visualizations:
  - /diagrams/topology-y-flow.svg
  - /diagrams/topology-y-levels.svg
---
```

**Entity-Specific Fields**:
- `entityType`: Taxonomy classifier (topology, shape, principle, level, pillar)
- `order`: Display order in lists/grids
- `icon`: Visual identifier
- `summary`: One-sentence description
- `characteristics`: Key attributes specific to entity type
- `attributes`: Structured data (varies by entity)
- `comparisons`: Strengths/weaknesses for comparative content
- `relatedEntities`: Cross-references to other entities
- `visualizations`: Associated diagrams/charts

---

#### Entity Frontmatter: Manifesto Principle

**Example**: `content/principles/transparency.mdx`

```yaml
---
title: Transparency
slug: transparency
entityType: principle
order: 1
icon: /icons/principle-transparency.svg
statement: Career expectations should be clear, documented, and accessible to everyone
category: foundational-value
whyItMatters: |
  Opaque criteria enable bias and favoritism. Transparency builds trust and 
  psychological safety. Clear expectations empower self-advocacy.
inPractice:
  - Published level definitions
  - Documented promotion criteria
  - Open calibration rationales (where appropriate)
  - Transparent compensation bands
relatedPrinciples:
  - fair-recognition
  - evidence-based
frameworkApplications:
  - framework/leveling
  - framework/progression
  - framework/guidelines
---
```

**Principle-Specific Fields**:
- `statement`: Core principle statement
- `whyItMatters`: Explanation of importance
- `inPractice`: Concrete implementation examples (array)
- `relatedPrinciples`: Other principles that reinforce or complement
- `frameworkApplications`: Where this principle manifests in framework

---

#### Entity Frontmatter: Professional Shape

**Example**: `content/shapes/t-shaped.mdx`

```yaml
---
title: T-Shaped Professional
slug: t-shaped
entityType: shape
order: 2
icon: /icons/shape-t.svg
summary: Deep expertise in one domain with broad cross-disciplinary awareness
characteristics:
  depth: High (one domain)
  breadth: Medium (multiple domains)
  versatility: High
  collaboration: Excellent
attributes:
  verticalBar: Primary domain expertise (e.g., Backend Engineering)
  horizontalBar: Complementary skills (Frontend, DevOps, Product, Design basics)
  evolutionFrom: I-Shaped (single domain specialist)
  evolutionTo: Pi-Shaped (two deep domains)
developmentStrategy:
  - Master core domain to Expert level (5+ years)
  - Build awareness in 3-5 adjacent domains
  - Collaborate across teams to broaden perspective
  - Attend cross-functional meetings and workshops
idealFor:
  - Senior ICs seeking broader impact
  - Tech leads coordinating multiple specialties
  - Product engineers bridging technical and business contexts
examples:
  - Senior Backend Engineer with frontend/DevOps/product knowledge
  - Data Scientist with engineering/analytics/business understanding
relatedShapes:
  - i-shaped
  - pi-shaped
---
```

**Shape-Specific Fields**:
- `characteristics`: Depth, breadth, versatility metrics
- `attributes`: Structural details (vertical/horizontal bars, evolution path)
- `developmentStrategy`: How to cultivate this shape
- `idealFor`: Roles and contexts where this shape excels
- `examples`: Concrete professional profiles

---

### TypeScript Interface Definitions

#### Base Content Types

**`apps/web/types/content.ts`**:

```typescript
// Base page type for all content
export interface Page {
  slug: string;
  title: string;
  description: string;
  category?: 'docs' | 'framework' | 'resources' | 'specialized';
  section?: 'foundational' | 'framework' | 'specialized' | 'community';
  layout?: 'landing' | 'documentation' | 'reference';
  publishedAt?: string;
  updatedAt?: string;
  showTOC?: boolean;
  showBreadcrumbs?: boolean;
  relatedPages?: string[];
  body: {
    raw: string;
    code: string; // Compiled MDX
  };
  seo?: SEOMetadata;
}

export interface SEOMetadata {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  noIndex?: boolean;
}

// Generic entity base
export interface Entity {
  slug: string;
  title: string;
  entityType: 'topology' | 'shape' | 'principle' | 'level' | 'pillar' | 'management-level';
  order: number;
  icon?: string;
  summary: string;
  relatedEntities?: string[];
  body: {
    raw: string;
    code: string;
  };
}
```

#### Specific Entity Types

```typescript
// Career Topology
export interface Topology extends Entity {
  entityType: 'topology';
  characteristics: {
    tracks: number;
    flexibility: 'low' | 'medium' | 'high';
    transitionType: string;
    bestFor: string;
  };
  attributes: {
    trackNames: string[];
    bifurcationLevel?: string;
    transitionRules: string;
    organizationalFit: string[];
  };
  comparisons?: {
    strengths: string[];
    weaknesses: string[];
  };
  visualizations?: string[];
}

// Professional Shape
export interface Shape extends Entity {
  entityType: 'shape';
  characteristics: {
    depth: 'low' | 'medium' | 'high';
    breadth: 'low' | 'medium' | 'high';
    versatility: 'low' | 'medium' | 'high';
    collaboration: 'limited' | 'good' | 'excellent';
  };
  attributes: {
    verticalBar?: string;
    horizontalBar?: string;
    evolutionFrom?: string;
    evolutionTo?: string;
  };
  developmentStrategy?: string[];
  idealFor?: string[];
  examples?: string[];
  relatedShapes?: string[];
}

// Manifesto Principle
export interface Principle extends Entity {
  entityType: 'principle';
  statement: string;
  category: 'foundational-value' | 'operational-practice' | 'cultural-norm';
  whyItMatters: string;
  inPractice: string[];
  relatedPrinciples?: string[];
  frameworkApplications?: string[];
}

// Career Level
export interface CareerLevel extends Entity {
  entityType: 'level';
  levelNumber: number;
  track: 'IC' | 'Manager' | 'Tech Lead';
  scope: 'individual' | 'team' | 'department' | 'organization' | 'ecosystem';
  autonomy: 'guided' | 'independent' | 'leading' | 'defining';
  impact: string;
  requiredProficiencies: Record<string, number>; // pillar slug → proficiency (1-5)
  responsibilities: string[];
  typicalTitles?: string[];
}

// Progression Pillar
export interface ProgressionPillar extends Entity {
  entityType: 'pillar';
  proficiencyLevels: {
    level: 1 | 2 | 3 | 4 | 5;
    name: 'Developing' | 'Proficient' | 'Expert' | 'Master' | 'Thought Leader';
    description: string;
    examples: string[];
  }[];
  assessmentCriteria?: string[];
  relatedPillars?: string[];
}
```

---

### Contentlayer Configuration

**`contentlayer.config.ts`**:

```typescript
import { defineDocumentType, makeSource } from 'contentlayer/source-files';

// Page type
export const Page = defineDocumentType(() => ({
  name: 'Page',
  filePathPattern: `pages/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    slug: { type: 'string', required: true },
    description: { type: 'string', required: true },
    category: { type: 'enum', options: ['docs', 'framework', 'resources', 'specialized'] },
    section: { type: 'enum', options: ['foundational', 'framework', 'specialized', 'community'] },
    layout: { type: 'enum', options: ['landing', 'documentation', 'reference'] },
    publishedAt: { type: 'date' },
    updatedAt: { type: 'date' },
    showTOC: { type: 'boolean', default: true },
    showBreadcrumbs: { type: 'boolean', default: true },
    relatedPages: { type: 'list', of: { type: 'string' } },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/${doc.slug}`,
    },
  },
}));

// Topology type
export const Topology = defineDocumentType(() => ({
  name: 'Topology',
  filePathPattern: `topologies/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    slug: { type: 'string', required: true },
    entityType: { type: 'string', required: true },
    order: { type: 'number', required: true },
    icon: { type: 'string' },
    summary: { type: 'string', required: true },
    characteristics: { type: 'json', required: true },
    attributes: { type: 'json', required: true },
    comparisons: { type: 'json' },
    relatedEntities: { type: 'list', of: { type: 'string' } },
    visualizations: { type: 'list', of: { type: 'string' } },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/topologies#${doc.slug}`,
    },
  },
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Page, Topology, Shape, Principle, CareerLevel, ProgressionPillar],
});
```

---

### Data Access Patterns

**Content Queries** (`apps/web/lib/content.ts`):

```typescript
import { allPages, allTopologies, allShapes, allPrinciples } from 'contentlayer/generated';

// Get single page by slug
export function getPageBySlug(slug: string) {
  return allPages.find(page => page.slug === slug);
}

// Get all pages by category
export function getPagesByCategory(category: string) {
  return allPages.filter(page => page.category === category);
}

// Get topologies sorted by order
export function getTopologies() {
  return allTopologies.sort((a, b) => a.order - b.order);
}

// Get shapes for comparison
export function getShapes() {
  return allShapes.sort((a, b) => a.order - b.order);
}

// Get principles for manifesto page
export function getPrinciples() {
  return allPrinciples.sort((a, b) => a.order - b.order);
}

// Get related pages
export function getRelatedPages(slugs: string[]) {
  return slugs.map(slug => allPages.find(p => p.slug === slug)).filter(Boolean);
}
```

---

### Content Rendering

**MDX Component Mapping** (`apps/web/components/mdx-components.tsx`):

```typescript
import { MDXComponents } from 'mdx/types';
import { Callout } from '@/components/content/callout';
import { TopologyComparison } from '@/components/content/topology-comparison';

export const mdxComponents: MDXComponents = {
  // Custom components available in MDX
  Callout,
  TopologyComparison,
  // Override default HTML elements
  h2: ({ children }) => <h2 className="text-2xl font-bold mt-8 mb-4">{children}</h2>,
  h3: ({ children }) => <h3 className="text-xl font-semibold mt-6 mb-3">{children}</h3>,
  ul: ({ children }) => <ul className="list-disc pl-6 space-y-2">{children}</ul>,
  // ... other element overrides
};
```

**Usage in MDX**:

```markdown
## Transparency Principle

<Callout type="principle">
This principle ensures that all team members understand what is expected
at each career level, reducing ambiguity and enabling self-advocacy.
</Callout>

<TopologyComparison topologies={['y-model', 'w-model', 'network-model']} />
```

---

### Key Design Decisions

1. **Separation of Concerns**: Pages vs. entities—generic content separate from structured data
2. **Type Safety**: Contentlayer generates TypeScript types from frontmatter schemas
3. **Flexible Frontmatter**: Required core fields + optional entity-specific extensions
4. **Computed Fields**: Automatic URL generation based on slug and entity type
5. **Referential Integrity**: Related content via slug references, validated at build time
6. **MDX Components**: Custom components embedded in markdown for rich interactivity
7. **Entity Aggregation**: Index pages (`index.mdx`) combine individual entity files for overview pages

---

