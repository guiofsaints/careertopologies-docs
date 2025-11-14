# Career Topologies – Migration from MDX/Contentlayer to Standard Next.js Pages

**Version**: 1.0.0  
**Created**: November 13, 2025  
**Purpose**: Canonical migration plan for removing MDX/Contentlayer dependencies and implementing all content pages as standard Next.js 16 TSX components.

---

## 1. Context and Current State

### Current Implementation Problems

The Career Topologies website currently uses **MDX files + Contentlayer** for content management, which has caused significant implementation friction:

**Runtime Errors**:
- `Dynamic require of "react/jsx-dev-runtime" is not supported` - Contentlayer's compiled MDX uses dynamic requires incompatible with Next.js 16 + Turbopack
- Complex workarounds required in `MDXContent` component to intercept and replace require calls
- Fragile execution model using `new Function()` to evaluate compiled MDX code

**Build/Type Issues**:
- Contentlayer generates types in `.contentlayer/generated` that can drift from actual content
- MDX compilation errors are cryptic and hard to debug
- Extra build step (Contentlayer processing) slows down development workflow

**Limited Customization**:
- Each page type (Page, FrameworkPage, ManagementPage, Topology, Shape) requires separate Contentlayer document type
- Adding interactive components requires custom MDX component mapping
- Difficult to create page-specific layouts or interactive features

**Technical Debt**:
- 8 Contentlayer document types (Page, FrameworkPage, ManagementPage, Topology, Shape, Principle, CareerLevel, Pillar)
- Custom MDX components (Callout, CodeBlock, TopologyComparison, ImpactAutonomyMatrix) with fragile integration
- Multiple content fetching utilities (`getAllPages`, `getPageBySlug`, etc.) that wrap Contentlayer APIs

### Current MDX Inventory

**Content Files** (12 MDX files):
```
content/
├── pages/
│   ├── about.mdx
│   ├── concepts.mdx
│   ├── contributing.mdx
│   └── references.mdx
├── framework/
│   ├── index.mdx
│   ├── leveling.mdx
│   ├── progression.mdx
│   └── guidelines.mdx
├── management/
│   ├── index.mdx
│   └── developing-leaders.mdx
├── topologies/
│   └── index.mdx
└── shapes/
    └── index.mdx
```

**Contentlayer Document Types** (8 types defined in `contentlayer.config.ts`):
- `Page` - Generic documentation pages
- `FrameworkPage` - Framework section pages
- `ManagementPage` - Management section pages
- `Topology` - Career topology models
- `Shape` - Skill profile types
- `Principle` - Manifesto principles (currently unused - no MDX files)
- `CareerLevel` - Level definitions (currently unused - no MDX files)
- `Pillar` - Progression pillars (currently unused - no MDX files)

**Custom MDX Components** (4 components in `apps/web/components/mdx/`):
- `Callout` - Alert-based callout boxes (info, warning, success, danger)
- `CodeBlock` - Syntax-highlighted code with copy button
- `TopologyComparison` - Table for comparing topology patterns
- `ImpactAutonomyMatrix` - Recharts scatter plot for impact/autonomy visualization

**Contentlayer Usage Points**:
- `apps/web/lib/content.ts` - Data fetching utilities (9 functions)
- `apps/web/app/(site)/[slug]/page.tsx` - Generic page renderer
- `apps/web/app/(framework)/framework/[[...slug]]/page.tsx` - Framework page renderer
- `apps/web/app/(management)/management/[[...slug]]/page.tsx` - Management page renderer
- `apps/web/components/mdx/mdx-content.tsx` - MDX rendering wrapper with workarounds

---

## 2. Target Approach – Standard Next.js Pages

### Core Principle: TSX Components + Typed Data Modules

**All pages will be standard React/TSX components** under `apps/web/app/` using Next.js 16 App Router conventions. Content will be represented in two ways:

1. **Page Components** (`page.tsx` files) - UI structure, layout, and prose content
2. **Data Modules** (`.ts` files) - Structured, reusable data (principles, topologies, levels)

### Benefits of TSX Approach

**Reliability**:
- No dynamic requires or runtime code evaluation
- TypeScript type-checking catches errors at build time
- Standard React component model - predictable behavior

**Flexibility**:
- Easy to add page-specific interactive features
- Custom layouts per page without Contentlayer abstraction
- Direct access to Next.js App Router features (Server Components, streaming, etc.)

**Developer Experience**:
- Faster builds (no Contentlayer processing step)
- Better IDE support (TypeScript autocomplete, refactoring, etc.)
- Simpler debugging (standard React stack traces)

### Content Representation Strategy

**Prose Content** → TSX with semantic HTML:
```tsx
export default function AboutPage() {
  return (
    <article className="prose max-w-4xl mx-auto">
      <h1>About Career Topologies</h1>
      <p>Career Topologies is an open-source framework...</p>
      {/* ... */}
    </article>
  );
}
```

**Structured Data** → Typed data modules:
```tsx
// apps/web/app/(site)/manifesto/data/principles.ts
export interface Principle {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType;
}

export const principles: Principle[] = [
  {
    id: 'transparency',
    title: 'Transparency',
    description: 'Clear, documented, accessible expectations',
    icon: EyeIcon,
  },
  // ...
];
```

**Interactive Components** → Keep existing React components:
- Reuse `Callout`, `CodeBlock`, `TopologyComparison`, `ImpactAutonomyMatrix`
- Import directly as React components (no MDX mapping needed)

### URL Structure Preservation

All URLs remain identical - only internal implementation changes:

| URL | Current | Target |
|-----|---------|--------|
| `/` | `app/page.tsx` (already TSX) | No change |
| `/about` | `app/(site)/[slug]/page.tsx` + `content/pages/about.mdx` | `app/(site)/about/page.tsx` |
| `/manifesto` | (not yet implemented) | `app/(site)/manifesto/page.tsx` |
| `/concepts` | `app/(site)/[slug]/page.tsx` + `content/pages/concepts.mdx` | `app/(site)/concepts/page.tsx` |
| `/topologies` | `app/(topologies)/topologies/page.tsx` + `content/topologies/index.mdx` | Keep existing route, convert to TSX |
| `/framework` | `app/(framework)/framework/[[...slug]]/page.tsx` + `content/framework/index.mdx` | `app/(framework)/framework/page.tsx` |
| `/framework/leveling` | `app/(framework)/framework/[[...slug]]/page.tsx` + `content/framework/leveling.mdx` | `app/(framework)/framework/leveling/page.tsx` |
| `/shapes` | `app/(shapes)/shapes/page.tsx` + `content/shapes/index.mdx` | Keep existing route, convert to TSX |
| `/management` | `app/(management)/management/[[...slug]]/page.tsx` + `content/management/index.mdx` | `app/(management)/management/page.tsx` |

---

## 3. MDX Inventory and URL Mapping

| MDX File | Current URL | Target TSX Page | Notes |
|----------|-------------|-----------------|-------|
| `content/pages/about.mdx` | `/about` | `app/(site)/about/page.tsx` | Uses generic layout, has relatedPages |
| `content/pages/concepts.mdx` | `/concepts` | `app/(site)/concepts/page.tsx` | Glossary of 7 terms - use data module |
| `content/pages/contributing.mdx` | `/contributing` | `app/(site)/contributing/page.tsx` | Process documentation |
| `content/pages/references.mdx` | `/references` | `app/(site)/references/page.tsx` | 28 citations - use data module |
| (none - manifesto not in content/) | `/manifesto` | `app/(site)/manifesto/page.tsx` | 8 principles - use data module |
| `content/topologies/index.mdx` | `/topologies` | `app/(topologies)/topologies/page.tsx` | Comparison of 3 models - use TopologyComparison component |
| `content/shapes/index.mdx` | `/shapes` | `app/(shapes)/shapes/page.tsx` | 3 skill profiles - use data module |
| `content/framework/index.mdx` | `/framework` | `app/(framework)/framework/page.tsx` | Framework overview |
| `content/framework/leveling.mdx` | `/framework/leveling` | `app/(framework)/framework/leveling/page.tsx` | Uses ImpactAutonomyMatrix component |
| `content/framework/progression.mdx` | `/framework/progression` | `app/(framework)/framework/progression/page.tsx` | 6 pillars - use data module |
| `content/framework/guidelines.mdx` | `/framework/guidelines` | `app/(framework)/framework/guidelines/page.tsx` | Implementation roadmap |
| `content/management/index.mdx` | `/management` | `app/(management)/management/page.tsx` | 3 management layers - use data module |
| `content/management/developing-leaders.mdx` | `/management/developing-leaders` | `app/(management)/management/developing-leaders/page.tsx` | Leadership development process |

**Total**: 13 MDX files → 13 TSX pages

---

## 4. Migration Strategy and Phases

### Phase 1: Pilot Migration (2 pages)

**Objective**: Validate TSX approach with low-risk pages before full migration.

**Scope**:
- Migrate `/about` - Generic page with prose content
- Migrate `/manifesto` - Data-driven page with 8 principles

**Deliverables**:
- `app/(site)/about/page.tsx` with full content
- `app/(site)/manifesto/page.tsx` + `data/principles.ts`
- Both pages render correctly with layouts, breadcrumbs, SEO metadata
- MDX files remain (coexistence mode)

**Success Criteria**:
- Pages load without errors
- Content matches original design
- SEO metadata correct
- Build time improves (no Contentlayer processing for these pages)

### Phase 2: Foundational Pages (4 pages)

**Objective**: Migrate remaining foundational content pages.

**Scope**:
- `/concepts` - Glossary with data module
- `/references` - Citations with data module
- `/contributing` - Process documentation
- `/topologies` - Topology comparison

**Deliverables**:
- 4 TSX pages with full content
- Data modules for concepts and references
- `TopologyComparison` component integrated

**Success Criteria**:
- All foundational pages functional
- Data modules properly typed
- Interactive components work

### Phase 3: Framework Section (4 pages)

**Objective**: Migrate framework-related pages with interactive components.

**Scope**:
- `/framework` - Overview
- `/framework/leveling` - With `ImpactAutonomyMatrix`
- `/framework/progression` - With pillars data module
- `/framework/guidelines` - Implementation roadmap

**Deliverables**:
- 4 TSX pages
- Pillars data module
- Interactive charts functional

**Success Criteria**:
- Framework section complete
- Charts render correctly
- Data-driven components work

### Phase 4: Specialized Pages (2 pages)

**Objective**: Migrate shapes and management pages.

**Scope**:
- `/shapes` - Skill profiles
- `/management` - Management layers
- `/management/developing-leaders` - Leadership development

**Deliverables**:
- 3 TSX pages
- Shapes and management layers data modules

**Success Criteria**:
- All pages migrated
- No remaining MDX dependencies

### Phase 5: Contentlayer Decommission

**Objective**: Remove all MDX/Contentlayer infrastructure.

**Scope**:
- Delete `content/` directory
- Remove Contentlayer config and dependencies
- Delete `apps/web/lib/content.ts` and `apps/web/components/mdx/mdx-content.tsx`
- Remove `contentlayer` from `package.json`
- Update build scripts

**Deliverables**:
- Clean codebase without MDX/Contentlayer
- All tests passing
- Production build successful

**Success Criteria**:
- `pnpm build` succeeds
- No Contentlayer references in code
- Smaller bundle size
- Faster build times

---

## 5. Page-by-Page Migration Plan

### 5.1 `/about` (Pilot)

**Current**: `app/(site)/[slug]/page.tsx` + `content/pages/about.mdx`

**Target**: `app/(site)/about/page.tsx`

**Layout**: Standard documentation layout with breadcrumbs, hero, prose

**Content Strategy**:
- Direct TSX with semantic HTML (`<h2>`, `<p>`, `<ul>`, etc.)
- Keep existing structure: Introduction → Framework Components → Development Philosophy → Use Cases → Getting Started

**Components**: None special

**Data Modules**: None

**Metadata**:
```tsx
export const metadata = {
  title: 'About Career Topologies',
  description: 'Comprehensive framework overview, project background, and development philosophy',
};
```

---

### 5.2 `/manifesto` (Pilot)

**Current**: Not yet implemented (no MDX file)

**Target**: `app/(site)/manifesto/page.tsx` + `data/principles.ts`

**Layout**: Standard documentation layout

**Content Strategy**:
- Introduction prose in TSX
- 8 principles from data module
- Map over principles array to render cards

**Components**: `Card` (shadcn/ui), possibly custom `PrincipleCard`

**Data Modules**:
```tsx
// app/(site)/manifesto/data/principles.ts
export interface Principle {
  id: string;
  order: number;
  title: string;
  description: string;
  icon: LucideIcon;
  details: string;
}

export const principles: Principle[] = [
  { id: 'transparency', order: 1, title: 'Transparency', ... },
  // ... 7 more
];
```

---

### 5.3 `/concepts`

**Current**: `app/(site)/[slug]/page.tsx` + `content/pages/concepts.mdx`

**Target**: `app/(site)/concepts/page.tsx` + `data/concepts.ts`

**Layout**: Standard documentation layout

**Content Strategy**:
- Introduction in TSX
- 7 concepts from data module
- Render as definition list or cards

**Components**: Possibly `Callout` for important notes

**Data Modules**:
```tsx
// app/(site)/concepts/data/concepts.ts
export interface Concept {
  id: string;
  term: string;
  definition: string;
  examples?: string[];
  relatedTo?: string[];
}

export const concepts: Concept[] = [
  { id: 'topology', term: 'Topology', definition: '...', ... },
  // ... 6 more
];
```

---

### 5.4 `/references`

**Current**: `app/(site)/[slug]/page.tsx` + `content/pages/references.mdx`

**Target**: `app/(site)/references/page.tsx` + `data/references.ts`

**Layout**: Standard documentation layout

**Content Strategy**:
- Introduction in TSX
- 28 references grouped by 5 categories
- Render as grouped lists with proper citation formatting

**Components**: None special

**Data Modules**:
```tsx
// app/(site)/references/data/references.ts
export interface Reference {
  id: string;
  category: 'professional-profile' | 'news-articles' | 'frameworks' | 'studies' | 'leadership';
  title: string;
  authors?: string[];
  year?: number;
  url?: string;
  description: string;
}

export const references: Reference[] = [
  { id: 'ref-01', category: 'professional-profile', ... },
  // ... 27 more
];
```

---

### 5.5 `/contributing`

**Current**: `app/(site)/[slug]/page.tsx` + `content/pages/contributing.mdx`

**Target**: `app/(site)/contributing/page.tsx`

**Layout**: Standard documentation layout

**Content Strategy**:
- Process documentation in TSX
- 5 contribution methods, GitHub workflow, code of conduct
- Step-by-step instructions with code examples

**Components**: `CodeBlock` for Git commands, `Callout` for important notes

**Data Modules**: None (prose-heavy)

---

### 5.6 `/topologies`

**Current**: `app/(topologies)/topologies/page.tsx` + `content/topologies/index.mdx`

**Target**: `app/(topologies)/topologies/page.tsx` (update existing)

**Layout**: Custom topologies layout

**Content Strategy**:
- Overview in TSX
- Comparison table using `TopologyComparison` component with data

**Components**: `TopologyComparison` (existing), `Card`

**Data Modules**:
```tsx
// app/(topologies)/topologies/data/topologies.ts
export interface TopologyModel {
  id: string;
  name: string;
  structure: string;
  autonomy: string;
  decisionMaking: string;
  bestFor: string;
  challenges: string;
}

export const topologies: TopologyModel[] = [
  { id: 'y-shaped', name: 'Y-Shaped', ... },
  { id: 'w-shaped', name: 'W-Shaped', ... },
  { id: 'network', name: 'Network', ... },
];
```

---

### 5.7 `/shapes`

**Current**: `app/(shapes)/shapes/page.tsx` + `content/shapes/index.mdx`

**Target**: `app/(shapes)/shapes/page.tsx` (update existing)

**Layout**: Custom shapes layout

**Content Strategy**:
- Overview in TSX
- 3 skill profiles from data module
- Visual diagrams for each shape

**Components**: Custom `ShapeCard` or `Card`

**Data Modules**:
```tsx
// app/(shapes)/shapes/data/shapes.ts
export interface SkillProfile {
  id: string;
  name: string;
  description: string;
  characteristics: string[];
  growthPath: string;
  visual: string; // SVG path or component
}

export const shapes: SkillProfile[] = [
  { id: 'i-shaped', name: 'I-Shaped (Deep Specialist)', ... },
  { id: 't-shaped', name: 'T-Shaped (Generalist + Depth)', ... },
  { id: 'pi-shaped', name: 'Pi-Shaped (Multi-Domain Expert)', ... },
];
```

---

### 5.8 `/framework`

**Current**: `app/(framework)/framework/[[...slug]]/page.tsx` + `content/framework/index.mdx`

**Target**: `app/(framework)/framework/page.tsx`

**Layout**: Framework layout

**Content Strategy**:
- Framework overview in TSX
- 4 core elements, governance model, implementation lifecycle

**Components**: `Card`, possibly diagrams

**Data Modules**: None (or small config for framework elements)

---

### 5.9 `/framework/leveling`

**Current**: `app/(framework)/framework/[[...slug]]/page.tsx` + `content/framework/leveling.mdx`

**Target**: `app/(framework)/framework/leveling/page.tsx`

**Layout**: Framework layout

**Content Strategy**:
- Level definitions in TSX
- Interactive `ImpactAutonomyMatrix` component with level data

**Components**: `ImpactAutonomyMatrix` (existing)

**Data Modules**:
```tsx
// app/(framework)/framework/leveling/data/levels.ts
export interface CareerLevel {
  id: string;
  level: number;
  title: string;
  impact: number; // 1-5 scale
  autonomy: number; // 1-5 scale
  description: string;
  examples: string[];
}

export const levels: CareerLevel[] = [
  { id: 'ic1', level: 1, title: 'Junior Engineer', impact: 1, autonomy: 1, ... },
  // ... 5 more
];
```

---

### 5.10 `/framework/progression`

**Current**: `app/(framework)/framework/[[...slug]]/page.tsx` + `content/framework/progression.mdx`

**Target**: `app/(framework)/framework/progression/page.tsx`

**Layout**: Framework layout

**Content Strategy**:
- Pillars overview in TSX
- 6 pillars from data module
- Proficiency scales and progression matrices

**Components**: Possibly radar chart component

**Data Modules**:
```tsx
// app/(framework)/framework/progression/data/pillars.ts
export interface Pillar {
  id: string;
  name: string;
  description: string;
  proficiencyLevels: {
    level: number;
    title: string;
    description: string;
    examples: string[];
  }[];
}

export const pillars: Pillar[] = [
  { id: 'delivery', name: 'Delivery', ... },
  // ... 5 more (Technical Domain, Collaboration, Autonomy, Initiative, Mentoring)
];
```

---

### 5.11 `/framework/guidelines`

**Current**: `app/(framework)/framework/[[...slug]]/page.tsx` + `content/framework/guidelines.mdx`

**Target**: `app/(framework)/framework/guidelines/page.tsx`

**Layout**: Framework layout

**Content Strategy**:
- Implementation roadmap in TSX
- 8 phases, timelines, roles & responsibilities

**Components**: `Callout`, possibly timeline/Gantt component

**Data Modules**: Possibly timeline data

---

### 5.12 `/management`

**Current**: `app/(management)/management/[[...slug]]/page.tsx` + `content/management/index.mdx`

**Target**: `app/(management)/management/page.tsx`

**Layout**: Management layout

**Content Strategy**:
- 3 management layers from data module
- Responsibilities and expectations for each

**Components**: `Card` or custom layer cards

**Data Modules**:
```tsx
// app/(management)/management/data/layers.ts
export interface ManagementLayer {
  id: string;
  title: string;
  level: 'frontline' | 'middle' | 'top';
  responsibilities: string[];
  expectations: string[];
  skillsRequired: string[];
}

export const layers: ManagementLayer[] = [
  { id: 'frontline', title: 'Front-line Manager', ... },
  { id: 'middle', title: 'Middle Manager', ... },
  { id: 'top', title: 'Top Manager', ... },
];
```

---

### 5.13 `/management/developing-leaders`

**Current**: `app/(management)/management/[[...slug]]/page.tsx` + `content/management/developing-leaders.mdx`

**Target**: `app/(management)/management/developing-leaders/page.tsx`

**Layout**: Management layout

**Content Strategy**:
- Leadership readiness assessment in TSX
- Development process and decision framework

**Components**: Flowchart component, `Callout`

**Data Modules**: Possibly readiness criteria

---

## 6. Contentlayer/MDX Decommission Plan

### Preconditions

✅ All 13 MDX files have equivalent TSX implementations  
✅ All pages tested and rendering correctly  
✅ Interactive components (charts, comparisons) functional  
✅ SEO metadata verified on all pages  
✅ Build passes without errors

### Removal Tasks

**Step 1: Delete Content Files**
```bash
rm -rf content/
```

**Step 2: Remove Contentlayer Config**
```bash
rm contentlayer.config.ts
rm -rf .contentlayer/
```

**Step 3: Uninstall Dependencies**
```bash
pnpm remove contentlayer next-contentlayer
```

**Step 4: Delete Content Utilities**
```bash
rm apps/web/lib/content.ts
rm apps/web/components/mdx/mdx-content.tsx
```

**Step 5: Update Next.js Config**

Remove Contentlayer plugin from `next.config.ts`:
```diff
- import { withContentlayer } from 'next-contentlayer'

const nextConfig = {
  // ... config
}

- export default withContentlayer(nextConfig)
+ export default nextConfig
```

**Step 6: Remove Dynamic Route Pages**

Delete catch-all route pages (no longer needed):
```bash
rm apps/web/app/(site)/[slug]/page.tsx
rm apps/web/app/(framework)/framework/[[...slug]]/page.tsx
rm apps/web/app/(management)/management/[[...slug]]/page.tsx
```

**Step 7: Clean Build Artifacts**
```bash
rm -rf .next
rm -rf apps/web/.next
pnpm build
```

### Validation Steps

1. **Build Test**: `pnpm build` succeeds without errors
2. **Dependency Check**: `pnpm why contentlayer` returns empty
3. **Code Search**: No references to `contentlayer` or `useMDXComponent` in codebase
4. **Bundle Size**: Verify bundle size reduction (should be ~10-20% smaller)
5. **Build Time**: Measure build time improvement (should be 20-30% faster)
6. **Runtime Test**: All pages load and function correctly in production build

---

## 7. Risks, Edge Cases and Rollback

### Risk 1: Content Regression

**Risk**: TSX migration introduces content errors, missing sections, or formatting differences.

**Mitigation**:
- Side-by-side comparison: Keep MDX pages accessible during migration
- Screenshot diff testing (Playwright or similar)
- Manual QA checklist for each page
- Git commits per page for easy rollback

**Rollback**: Revert individual page commits, keep MDX infrastructure until all pages validated

---

### Risk 2: SEO Metadata Loss

**Risk**: Metadata (title, description, OG tags) not properly configured in TSX pages.

**Mitigation**:
- Create metadata template/utility for consistency
- Validate metadata with Next.js metadata API
- Test with Google Search Console and social media debuggers

**Rollback**: Add missing metadata to TSX pages, verify with automated tests

---

### Risk 3: Interactive Components Break

**Risk**: Charts (ImpactAutonomyMatrix) or tables (TopologyComparison) don't work outside MDX context.

**Mitigation**:
- Test components in isolation before integration
- Add Storybook stories for visual testing
- Keep components framework-agnostic (standard React)

**Rollback**: Keep `apps/web/components/mdx/` directory, import directly in TSX

---

### Risk 4: Build Failures During Partial Migration

**Risk**: Contentlayer expects certain files that have been deleted, causing build errors.

**Mitigation**:
- Migrate in phases (don't delete content files until all pages converted)
- Update `contentlayer.config.ts` to exclude migrated paths incrementally
- Keep Contentlayer installed until Phase 5

**Rollback**: Re-add missing MDX files temporarily

---

### Risk 5: Data Module TypeScript Errors

**Risk**: Typed data modules have type errors or inconsistencies.

**Mitigation**:
- Use strict TypeScript mode
- Create reusable type definitions (`types/content.ts`)
- Add Zod or similar runtime validation if needed

**Rollback**: Fix type errors incrementally, doesn't block page rendering

---

### Edge Case 1: Missing Manifesto Content

**Edge Case**: `/manifesto` page not yet implemented in MDX, needs content from scratch.

**Solution**: 
- Extract principles from `.guided/architecture/` docs
- Reference section 3 of site structure proposal for 8 principles
- Create data module first, then page component

---

### Edge Case 2: Dynamic Routes for Topologies/Shapes

**Edge Case**: Currently using list pages (`/topologies`, `/shapes`), may want detail pages later (`/topologies/y-shaped`).

**Solution**:
- Implement list pages first (current scope)
- Reserve route structure for future detail pages:
  - `app/(topologies)/topologies/[slug]/page.tsx` (future)
  - `app/(shapes)/shapes/[slug]/page.tsx` (future)
- Keep data modules structured to support detail pages

---

### Edge Case 3: Contentlayer-Generated Types

**Edge Case**: TypeScript imports from `contentlayer/generated` will break.

**Solution**:
- Replace with custom types in `types/content.ts`
- Update imports across codebase
- Use Find & Replace: `contentlayer/generated` → `@/types/content`

---

### Rollback Strategy

**Full Rollback** (if migration fails critically):

1. **Revert Git Commits**: `git revert <commit-range>` for all migration changes
2. **Restore Contentlayer**: `pnpm install contentlayer next-contentlayer`
3. **Restore Content Files**: `git checkout main -- content/`
4. **Rebuild**: `pnpm build`

**Partial Rollback** (if specific pages have issues):

1. **Keep MDX files** for problematic pages
2. **Revert TSX page** to dynamic route
3. **Fix issues** in separate branch
4. **Re-migrate** when ready

**Feature Flag Approach** (recommended):

Add environment variable to toggle between MDX and TSX rendering:

```tsx
// apps/web/lib/feature-flags.ts
export const USE_TSX_PAGES = process.env.NEXT_PUBLIC_USE_TSX_PAGES === 'true';

// In routing
if (USE_TSX_PAGES) {
  return <TSXAboutPage />;
} else {
  return <MDXAboutPage />;
}
```

This allows gradual rollout and easy rollback without code changes.

---

## Migration Execution Checklist

### Pre-Migration

- [ ] Create feature branch: `git checkout -b feat/migrate-to-tsx`
- [ ] Document current build time and bundle size
- [ ] Take screenshots of all pages for comparison
- [ ] Verify all tests passing

### Phase 1: Pilot (Week 1)

- [ ] Migrate `/about` to TSX
- [ ] Migrate `/manifesto` to TSX with data module
- [ ] Test both pages thoroughly
- [ ] Commit: `git commit -m "feat: migrate /about and /manifesto to TSX"`

### Phase 2: Foundational (Week 2)

- [ ] Migrate `/concepts` with data module
- [ ] Migrate `/references` with data module
- [ ] Migrate `/contributing`
- [ ] Migrate `/topologies` with TopologyComparison
- [ ] Commit: `git commit -m "feat: migrate foundational pages to TSX"`

### Phase 3: Framework (Week 3)

- [ ] Migrate `/framework`
- [ ] Migrate `/framework/leveling` with ImpactAutonomyMatrix
- [ ] Migrate `/framework/progression` with pillars data
- [ ] Migrate `/framework/guidelines`
- [ ] Commit: `git commit -m "feat: migrate framework section to TSX"`

### Phase 4: Specialized (Week 4)

- [ ] Migrate `/shapes` with data module
- [ ] Migrate `/management` with data module
- [ ] Migrate `/management/developing-leaders`
- [ ] Commit: `git commit -m "feat: migrate specialized pages to TSX"`

### Phase 5: Decommission (Week 5)

- [ ] Delete `content/` directory
- [ ] Remove Contentlayer config
- [ ] Uninstall dependencies
- [ ] Delete content utilities
- [ ] Update Next.js config
- [ ] Remove dynamic route pages
- [ ] Run full build and test suite
- [ ] Commit: `git commit -m "chore: remove MDX/Contentlayer infrastructure"`

### Post-Migration

- [ ] Measure new build time and bundle size
- [ ] Compare screenshots (visual regression)
- [ ] Run Lighthouse audits
- [ ] Test all pages in production build
- [ ] Update documentation
- [ ] Merge to main: `git merge feat/migrate-to-tsx`
- [ ] Deploy to production

---

**End of Migration Plan**

This document serves as the authoritative reference for the MDX-to-TSX migration. All executors, automation scripts, and development agents should follow this plan sequentially, validating each phase before proceeding to the next.
