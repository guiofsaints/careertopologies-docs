# Career Topologies – Implementation Roadmap in Phases

**Document Purpose**: This is the canonical execution plan for implementing the Career Topologies website from empty repository to production deployment. All automation, future prompts, and development agents should reference this document as the authoritative implementation guide.

**Technology Stack** (fixed):
- Node.js (LTS v20+) + pnpm (v9+)
- TypeScript (strict mode)
- React 18+
- Next.js 16 (App Router)
- Tailwind CSS v4
- shadcn/ui (copy-paste components)
- next-themes (dark/light mode)
- Contentlayer (MDX content management)
- Fuse.js (client-side search)

**Architecture Overview**: 14-page documentation site organized into 4 content pillars (Foundational Concepts, Framework Structure, Specialized Topics, Community Resources) with hub-and-spoke IA, 3 layout patterns, and type-safe content modeling.

---

## Phase 1 – Foundation and Codebase Setup

**Objective**: Establish repository infrastructure, workspace structure, and core technical foundation with Next.js, TypeScript, Tailwind, and shadcn/ui configured and functional.

**Scope**:
- Repository initialization with pnpm monorepo
- Next.js 16 App Router application bootstrap
- Tailwind CSS v4 and shadcn/ui design system
- Theme management with next-themes
- TypeScript strict mode configuration
- Base directory structure and workspace organization

**Dependencies**: None (initial phase)

**Exit Criteria**:
- ✅ `pnpm install` succeeds across workspace
- ✅ `pnpm dev` launches Next.js on localhost:3000
- ✅ Dark/light theme toggle functional with persistence
- ✅ shadcn/ui components (Button, Card, Alert) render correctly
- ✅ TypeScript compilation passes with zero errors

**Risks/Notes**:
- Ensure Next.js 16 compatibility with Contentlayer (may require canary version)
- Tailwind v4 CSS-first configuration differs from v3; follow latest docs
- Monorepo structure may be overkill for MVP; reassess in Phase 4

**Context References**:
- `.guided/architecture/site-structure-proposal.section9-codebase-architecture.md` – Repository structure and monorepo layout
- `.guided/architecture/site-structure-proposal.section11-12-plan-risks.md` – Steps 1-4 detailed descriptions
- `.guided/architecture/site-structure-proposal.section1-2-intro.md` – Project goals and scope

---

### Step 1.1 – Initialize Repository and Workspace

**Goal**: Create Git repository with pnpm workspace structure.

**Description**:
- Initialize Git repo with `.gitignore` for Node.js/Next.js
- Create `pnpm-workspace.yaml` defining `apps/*`, `packages/*`
- Set up root `package.json` with workspace scripts
- Create directory structure: `apps/web/`, `packages/ui/`, `packages/config/`, `content/`, `.guided/`
- Initialize root TypeScript config (`tsconfig.json`) with strict mode

**Dependencies**: None

---

### Step 1.2 – Bootstrap Next.js 16 Application

**Goal**: Create minimal Next.js app with App Router and TypeScript.

**Description**:
- Run `pnpm create next-app@latest` in `apps/web/` with TypeScript, App Router, no src directory
- Configure base `next.config.ts` for MDX support
- Create root layout (`app/layout.tsx`) with HTML structure
- Create placeholder home page (`app/page.tsx`)
- Extend root TypeScript config in `apps/web/tsconfig.json`

**Dependencies**: Step 1.1

---

### Step 1.3 – Configure Tailwind CSS and Design System

**Goal**: Implement styling foundation with Tailwind v4 and custom theme.

**Description**:
- Install Tailwind CSS v4 and configure `tailwind.config.ts`
- Set up custom theme in `packages/config/tailwind/` (colors, typography, spacing, shadows)
- Create global styles in `apps/web/app/globals.css`
- Configure CSS variables for light/dark mode themes
- Test responsive breakpoints (mobile, tablet, desktop)

**Dependencies**: Step 1.2

---

### Step 1.4 – Initialize shadcn/ui and Theme Management

**Goal**: Add component library and dark/light mode support.

**Description**:
- Run `npx shadcn-ui@latest init` and configure component directory
- Install core shadcn components: Button, Card, Alert, Badge, Separator, Sheet, Dialog
- Install and configure `next-themes` package
- Create theme provider component (`apps/web/components/providers/theme-provider.tsx`)
- Wrap app in theme provider in root layout
- Build theme toggle component with moon/sun icons
- Test theme persistence across page reloads

**Dependencies**: Step 1.3

---

## Phase 2 – Content Infrastructure and Navigation MVP

**Objective**: Implement content management system with Contentlayer, build global layout components (header, footer, breadcrumbs), establish navigation system, and create routing structure for all 14 pages.

**Scope**:
- Contentlayer configuration and type generation
- MDX frontmatter schemas for all content types
- `content/` directory structure with subdirectories
- Header, Footer, Breadcrumbs, Table of Contents components
- Navigation configuration (JSON-based)
- App Router route groups and dynamic routing
- 404 page with helpful navigation

**Dependencies**: Phase 1 (foundation complete)

**Exit Criteria**:
- ✅ Contentlayer generates TypeScript types from MDX frontmatter
- ✅ Sample MDX file renders with metadata
- ✅ Header navigation functional with active state highlighting
- ✅ Footer displays all links correctly
- ✅ All 14 page routes accessible (placeholder content OK)
- ✅ Breadcrumbs reflect URL hierarchy
- ✅ Dark/light mode works across all components

**Risks/Notes**:
- Contentlayer may lag behind Next.js 16 updates; monitor compatibility
- Navigation JSON must be manually maintained (no automatic generation)

**Context References**:
- `.guided/architecture/site-structure-proposal.section10-content-data-model.md` – Content types, frontmatter schemas, TypeScript interfaces
- `.guided/architecture/site-structure-proposal.section9-codebase-architecture.md` – Content directory structure and Next.js App Router organization
- `.guided/architecture/site-structure-proposal.section6-layout.md` – Header, Footer, Breadcrumbs, TOC component specifications
- `.guided/architecture/site-structure-proposal.section4-ia-navigation.md` – Navigation structure and sitemap
- `.guided/architecture/site-structure-proposal.section11-12-plan-risks.md` – Steps 5-6 detailed descriptions
- `.guided/assessment/content/entities-and-domain-concepts.md` – Domain entities for content modeling

---

### Step 2.1 – Set Up Contentlayer and Content Types

**Goal**: Enable type-safe MDX authoring with automated type generation.

**Description**:
- Install Contentlayer (`contentlayer`, `next-contentlayer`)
- Create `contentlayer.config.ts` in workspace root
- Define document types: `Page`, `Topology`, `Shape`, `Principle`, `CareerLevel`, `ProgressionPillar`
- Configure frontmatter schemas (required: `title`, `slug`, `description`; optional: `category`, `section`, `layout`, `relatedPages`, `seo`)
- Add computed fields (e.g., `url` from `slug`)
- Configure build step to generate types in `apps/web/.contentlayer/`
- Integrate with Next.js via `next.config.ts`

**Key References**: `.guided/architecture/site-structure-proposal.section10-content-data-model.md` (Contentlayer config and TypeScript interfaces)

**Dependencies**: Phase 1 complete

---

### Step 2.2 – Create Content Directory Structure

**Goal**: Organize MDX files by content type with configuration.

**Description**:
- Create `content/` directories: `pages/`, `framework/`, `management/`, `topologies/`, `shapes/`, `principles/`, `levels/`, `pillars/`, `config/`
- Add placeholder MDX files for all 14 pages with minimal frontmatter
- Create `content/config/navigation.json` with header/footer link structure
- Create `content/config/related-pages.json` for cross-linking logic
- Create `content/config/metadata.json` for SEO defaults
- Build content loading utilities in `apps/web/lib/content.ts` (functions: `getPageBySlug`, `getTopologies`, etc.)

**Dependencies**: Step 2.1

---

### Step 2.3 – Build Global Layout Components

**Goal**: Implement reusable header, footer, breadcrumbs, and TOC.

**Description**:
- **Header**: Logo (links to `/`), primary navigation (6 items), theme toggle, GitHub link
  - Responsive: hamburger menu on mobile using shadcn Sheet component
  - Active page highlighting via route matching
- **Footer**: 4-column grid (About, Framework, Resources, Legal) with social links
  - Responsive: single-column stack on mobile
- **Breadcrumbs**: Dynamic generation from route segments (`Home > Framework > Leveling`)
- **Table of Contents**: Sticky sidebar for documentation pages (extract H2/H3 from MDX)
- **Page Hero**: Reusable component for page titles, descriptions, metadata
- **Related Pages**: Component with 3 variants (vertical sidebar, horizontal cards, compact list)

**Key References**: `.guided/architecture/site-structure-proposal.section6-layout.md` (Component specifications and behavior)

**Dependencies**: Steps 1.4 (shadcn components), 2.2 (navigation JSON)

---

### Step 2.4 – Implement Routing and Navigation System

**Goal**: Wire App Router for all 14 pages with navigation configuration.

**Description**:
- Create route groups: `(site)/`, `(framework)/`, `(management)/`
- Implement dynamic routes: `[slug]/page.tsx` for generic pages
- Create static routes:
  - `/` (home)
  - `/about`, `/manifesto`, `/concepts`, `/topologies`, `/shapes`, `/references`, `/contributing`
  - `/framework`, `/framework/leveling`, `/framework/progression`, `/framework/guidelines`
  - `/management`, `/management/developing-leaders`
- Wire breadcrumb logic to generate from route hierarchy
- Implement related pages logic using `related-pages.json`
- Create 404 page (`app/not-found.tsx`) with navigation suggestions
- Test all routes render with header, footer, breadcrumbs

**Dependencies**: Steps 2.2 (content structure), 2.3 (layout components)

---

## Phase 3 – Page Implementation and Content Population

**Objective**: Build all 14 pages with complete content, interactive visualizations, and layout patterns. Implement MDX component mapping for callouts, diagrams, and comparisons.

**Scope**:
- 5 foundational pages (Home, About, Manifesto, Concepts, Topologies)
- 4 framework pages (Framework, Leveling, Progression, Guidelines)
- 5 specialized/community pages (Shapes, Management, Developing Leaders, References, Contributing)
- Custom MDX components (Callout, TopologyComparison, RadarChart, ImpactAutonomyMatrix, etc.)
- Interactive visualizations (charts, flowcharts, matrices)
- All content migrated from source documents

**Dependencies**: Phase 2 (content infrastructure and routing)

**Exit Criteria**:
- ✅ All 14 pages accessible with complete content
- ✅ Interactive elements functional (charts respond to user input)
- ✅ Layout patterns correctly applied (Landing, Documentation, Reference)
- ✅ Cross-page linking works (related pages, breadcrumbs, footer)
- ✅ Images and diagrams render correctly
- ✅ MDX custom components render in content

**Risks/Notes**:
- Complex visualizations (radar charts, matrices) may require additional libraries (Recharts, D3)
- Content migration workload is high; prioritize foundational pages first

**Context References**:
- `.guided/architecture/site-structure-proposal.section5-page-catalog.md` – Complete catalog of all 14 pages with descriptions and content blocks
- `.guided/architecture/site-structure-proposal.section7-page-patterns.md` – Layout patterns (Landing, Documentation, Reference) with wireframes
- `.guided/architecture/site-structure-proposal.section4-ia-navigation.md` – Content pillars and page relationships
- `.guided/architecture/site-structure-proposal.section10-content-data-model.md` – MDX component mapping and rendering patterns
- `.guided/architecture/site-structure-proposal.section11-12-plan-risks.md` – Steps 7-9 detailed descriptions
- `.guided/assessment/content/page-content-dumps.md` – Source content for migration
- `.guided/assessment/content/entities-and-domain-concepts.md` – Domain entities for interactive components
- `.guided/assessment/content/information-architecture.md` – IA principles and navigation pathways

---

### Step 3.1 – Configure MDX Component Mapping

**Goal**: Enable custom React components in MDX content.

**Description**:
- Create `apps/web/components/mdx-components.tsx` with component mapping
- Build custom components:
  - `<Callout type="info|warning|tip|principle|note" />` – styled alert boxes
  - `<TopologyComparison topologies={['y-model', 'w-model']} />` – comparative table/chart
  - `<RadarChart data={...} />` – 6-pillar proficiency visualization
  - `<ImpactAutonomyMatrix />` – interactive career level matrix
  - `<FlowChart />` – decision tree diagrams (consider Mermaid.js)
- Override default HTML elements (h2, h3, ul, ol, code, pre) with styled versions
- Register components in MDX processing pipeline

**Dependencies**: Step 2.1 (Contentlayer)

---

### Step 3.2 – Implement Foundational Pages (Pillar 1)

**Goal**: Build 5 core pages introducing framework philosophy and concepts.

**Description**:
- **Home** (`/`): Hero with topology illustration, 4 audience cards, framework component grid, CTAs
- **About** (`/about`): Long-form overview, project background, use cases, related pages sidebar
- **Manifesto** (`/manifesto`): 8 principle cards with icons, expandable details, why each matters
- **Concepts** (`/concepts`): Glossary grid (7 terms: Topology, Level, Pillar, Proficiency, Impact, Autonomy, Shape)
- **Topologies** (`/topologies`): Comparative table (Y/W/Network), visual diagrams, decision flowchart

**Key References**: 
- `.guided/architecture/site-structure-proposal.section5-page-catalog.md` (Pages 1-5 detailed descriptions)
- `.guided/assessment/content/page-content-dumps.md` (Source content)

**Dependencies**: Steps 2.4 (routing), 3.1 (MDX components)

---

### Step 3.3 – Implement Framework Pages (Pillar 2)

**Goal**: Build 4 framework structure pages with advanced visualizations.

**Description**:
- **Framework Overview** (`/framework`): 4 structural elements cards, governance roles table, implementation timeline
- **Leveling** (`/framework/leveling`): Interactive Impact×Autonomy matrix, 6-8 level cards, topology alignment diagrams
- **Progression** (`/framework/progression`): Interactive 6-pillar radar chart, proficiency scale tooltips (1-5), progression matrices
- **Guidelines** (`/framework/guidelines`): 8-phase roadmap with expandable accordion, roles matrix, promotion checklist

**Dependencies**: Step 3.2 (patterns established)

---

### Step 3.4 – Implement Specialized and Community Pages (Pillars 3-4)

**Goal**: Complete remaining 5 pages for specialized topics and community.

**Description**:
- **Shapes** (`/shapes`): I/T/Pi profile comparison grid, skill depth/breadth diagrams, evolution pathways
- **Management** (`/management`): 3-tier management table (Front-line, Middle, Top), responsibility breakdowns
- **Developing Leaders** (`/management/developing-leaders`): Readiness assessment flowchart, interim experience checklist
- **References** (`/references`): 28 citations in 5 categories (APA formatting), filterable/searchable list
- **Contributing** (`/contributing`): 5 contribution methods, GitHub workflow diagram, code of conduct, onboarding steps

**Dependencies**: Steps 3.2-3.3 (all patterns and components available)

---

## Phase 4 – SEO, Search, Hardening, and Deployment

**Objective**: Optimize for search engines and performance, implement client-side search, ensure accessibility compliance, create developer documentation, and deploy to production with CI/CD pipeline.

**Scope**:
- SEO metadata generation (Open Graph, JSON-LD structured data, sitemaps)
- Client-side search with Fuse.js
- Performance optimization (Core Web Vitals)
- Accessibility audit and remediation (WCAG 2.1 AA)
- Developer documentation (README, CONTRIBUTING, quickstart)
- CI/CD pipeline (GitHub Actions)
- Vercel deployment with custom domain

**Dependencies**: Phase 3 (all pages implemented)

**Exit Criteria**:
- ✅ All pages have SEO metadata (title, description, OG images)
- ✅ `sitemap.xml` and `robots.txt` generated automatically
- ✅ Search dialog functional with keyboard shortcuts (Cmd/Ctrl+K)
- ✅ Lighthouse scores >90 (Performance, Accessibility, Best Practices, SEO)
- ✅ WCAG 2.1 AA compliance verified with screen reader testing
- ✅ README enables new developer setup in <5 minutes
- ✅ CI pipeline passes on all PRs (type check, lint, build)
- ✅ Production site live with custom domain and SSL

**Risks/Notes**:
- SEO cold start: expect 6-12 months for organic visibility
- Client-side search may not scale beyond 100 pages (monitor index size)
- Accessibility for complex visualizations requires text alternatives

**Context References**:
- `.guided/architecture/site-structure-proposal.section8-seo.md` – URL strategy, page titles, meta descriptions, Open Graph, structured data
- `.guided/architecture/site-structure-proposal.section11-12-plan-risks.md` – Steps 10-14 detailed descriptions and risks
- `.guided/architecture/site-structure-proposal.section9-codebase-architecture.md` – Search implementation and metadata patterns
- `.guided/architecture/site-structure-proposal.section5-page-catalog.md` – Page-specific SEO requirements
- `.guided/architecture/site-structure-proposal.section1-2-intro.md` – Target audiences for SEO keyword strategy

---

### Step 4.1 – Implement SEO and Metadata

**Goal**: Comprehensive SEO optimization with metadata generation.

**Description**:
- Create metadata utilities in `apps/web/lib/metadata.ts`
- Implement dynamic `metadata` exports in all page routes
- Generate Open Graph images using `@vercel/og` for key pages
- Add JSON-LD structured data for Organization, Breadcrumb, WebPage schemas
- Configure `sitemap.xml` generation (dynamic from content)
- Create `robots.txt` with crawl directives
- Implement canonical URL strategy (no trailing slashes)
- Add meta descriptions and keyword optimization per page template

**Key References**: `.guided/architecture/site-structure-proposal.section8-seo.md` (URL patterns, metadata templates, structured data)

**Dependencies**: Phase 3 complete

---

### Step 4.2 – Build Client-Side Search

**Goal**: Functional search with Fuse.js for content discovery.

**Description**:
- Install Fuse.js and configure fuzzy search parameters (threshold: 0.3, keys: title, description, content)
- Create search index generation script (runs at build time, outputs JSON)
- Build `<SearchDialog />` component (shadcn Dialog) with:
  - Keyboard shortcut trigger (Cmd/Ctrl+K)
  - Input field with live results
  - Result grouping by content type (Pages, Topologies, Shapes, Principles)
  - Keyboard navigation (up/down arrows, enter to navigate)
  - Search result highlighting
- Integrate search trigger in header navigation
- Lazy load search index on dialog open

**Dependencies**: Steps 2.3 (header), 3.4 (all content)

---

### Step 4.3 – Performance and Accessibility Hardening

**Goal**: Optimize Core Web Vitals and ensure WCAG 2.1 AA compliance.

**Description**:
- Run Lighthouse audit and address bottlenecks (code splitting, lazy loading, bundle size)
- Optimize images with Next.js `<Image />` component (WebP, responsive sizes)
- Add loading states for interactive components (skeleton screens, spinners)
- Audit color contrast ratios (min 4.5:1 for text), fix violations
- Add ARIA labels to interactive elements (buttons, links, form inputs)
- Implement keyboard navigation for all interactive components (tab order, focus indicators)
- Test with screen readers (VoiceOver on macOS/iOS, NVDA on Windows)
- Add "Skip to main content" link for keyboard users
- Ensure all visualizations have text alternatives (tables, descriptions)

**Dependencies**: Phase 3 complete

---

### Step 4.4 – Create Developer Documentation

**Goal**: Comprehensive onboarding for new contributors.

**Description**:
- Write `README.md`:
  - Project overview and value proposition
  - Quick start (clone, install, run in 3 commands)
  - Architecture overview (monorepo, App Router, Contentlayer)
  - Development workflow (local dev, content editing, component development)
  - Scripts reference (`pnpm dev`, `pnpm build`, `pnpm lint`)
- Create `CONTRIBUTING.md`:
  - Git workflow (fork, branch, PR)
  - Code standards (TypeScript, ESLint, Prettier)
  - Content contribution guidelines (MDX formatting, frontmatter)
  - Component development patterns
  - Testing expectations
- Add `CHANGELOG.md` for version tracking
- Document environment variables and configuration
- Create `.guided/developer-quickstart.md` with detailed setup walkthrough

**Dependencies**: Phase 3 complete (stable codebase)

---

### Step 4.5 – Deploy to Production with CI/CD

**Goal**: Automated deployment pipeline and production hosting.

**Description**:
- Set up Vercel project linked to GitHub repository
- Configure production environment variables (if any)
- Implement GitHub Actions workflow (`.github/workflows/ci.yml`):
  - TypeScript type checking (`pnpm tsc --noEmit`)
  - ESLint linting (`pnpm lint`)
  - Build verification (`pnpm build`)
  - Contentlayer type generation validation
- Set up preview deployments for pull requests (automatic on Vercel)
- Configure custom domain DNS and SSL certificate
- Add Vercel Analytics or privacy-focused alternative (Plausible, Fathom)
- Set up error monitoring (Sentry or Vercel monitoring)
- Test production build and deployment process

**Dependencies**: Step 4.4 (documentation complete)

---

## Phase 5 – Future Extensions and Evolution

**Objective**: Roadmap for post-MVP enhancements to expand functionality, reach, and community engagement. This phase groups optional improvements to be implemented iteratively based on user feedback and traction.

**Scope**:
- Internationalization (i18n) for global audiences
- Content versioning and changelog tracking
- Advanced search with filters and facets
- Interactive framework customization tool
- Analytics and user behavior tracking
- Community contribution workflow improvements
- Video tutorials and webinar archive
- Framework maturity assessment quiz
- Programmatic API for external integrations

**Dependencies**: Phase 4 (production deployment complete)

**Exit Criteria**: Not applicable (ongoing evolution)

**Risks/Notes**:
- Prioritize extensions based on user demand and analytics
- i18n is high effort; focus on Spanish/Portuguese first for LatAm adoption
- Advanced search migration (Algolia) only if content exceeds 100 pages

**Context References**:
- `.guided/architecture/site-structure-proposal.section11-12-plan-risks.md` – Section 12.2 Future Extensions detailed descriptions
- `.guided/architecture/site-structure-proposal.section1-2-intro.md` – Goals and target audiences informing extension priorities
- `.guided/architecture/site-structure-proposal.section3-concept-positioning.md` – Value propositions and community engagement strategy
- `.guided/assessment/content/purpose-and-audience.md` – Audience needs for feature prioritization

---

### Step 5.1 – Internationalization (i18n)

**Why**: Expand framework accessibility to non-English organizations globally.

**Scope**:
- Install `next-intl` or `next-i18next` for locale routing (`/en/`, `/es/`, `/pt/`)
- Duplicate content structure per locale (`content/en/`, `content/es/`)
- Build locale switcher in header
- Translate core pages (Home, Manifesto, Framework) first
- Use Crowdin for community-driven translation workflow

**Effort**: High (3-4 months initial + ongoing translation)

---

### Step 5.2 – Content Versioning and Changelog

**Why**: Organizations need to reference specific framework versions.

**Scope**:
- Introduce versioned routes (`/v1/framework`, `/v2/framework`)
- Create changelog page tracking framework evolution
- Use Git tags to snapshot content at major releases
- Add version selector dropdown in header
- Maintain archived versions for reference

**Effort**: Medium (4-6 weeks for infrastructure)

---

### Step 5.3 – Advanced Search with Filters

**Why**: Filter content by type, audience, topic, complexity as content grows.

**Scope**:
- Migrate to Algolia DocSearch (free for open-source) or self-hosted Meilisearch
- Add faceted search UI (content type, audience, difficulty filters)
- Implement search analytics
- Support Boolean operators and phrase matching

**Effort**: Medium (6-8 weeks for migration)

---

### Step 5.4 – Interactive Customization Tool

**Why**: Organizations want to adapt framework to their context.

**Scope**:
- Build configuration wizard (multi-step form)
- Generate downloadable markdown templates
- Export to JSON/YAML for programmatic use
- Preview customized framework
- Store configurations in localStorage

**Effort**: High (8-12 weeks)

---

### Step 5.5 – Analytics and Community Workflow

**Why**: Understand user behavior and enable external contributions.

**Scope**:
- Privacy-focused analytics (Plausible, Vercel Analytics)
- Track page views, search queries, interactive component usage
- "Submit Case Study" form with GitHub integration
- Contributor recognition page
- "Edit this page on GitHub" links

**Effort**: Low-Medium (3-6 weeks combined)

---

### Step 5.6 – Video Content and Maturity Assessment

**Why**: Support diverse learning preferences and self-assessment.

**Scope**:
- YouTube channel for tutorials
- Embed videos in documentation
- Webinar archive with transcripts
- Self-assessment quiz (20-30 questions)
- Generate personalized improvement roadmap

**Effort**: Medium-High (ongoing content production + 6-8 weeks for quiz)

---

### Step 5.7 – Programmatic API

**Why**: HR platforms need framework data integration.

**Scope**:
- JSON API endpoints (`/api/topologies`, `/api/principles`)
- OpenAPI/Swagger documentation
- TypeScript SDK for type-safe consumption
- Rate limiting and authentication
- Publish npm package

**Effort**: Medium (4-6 weeks)

---

## Appendix: Phase-to-Original-Step Mapping

This mapping shows how the original 14-step linear plan maps to the phased roadmap:

- **Phase 1**: Steps 1-4 (Repository, Next.js, Tailwind, shadcn)
- **Phase 2**: Steps 5-6 (Contentlayer, Navigation, Routing)
- **Phase 3**: Steps 7-9 (Page Implementation)
- **Phase 4**: Steps 10-14 (SEO, Search, Hardening, Docs, Deployment)
- **Phase 5**: Future Extensions (formerly Section 12.2)

---

## Execution Notes for LLM Agents

**When implementing phases**:
1. Always validate exit criteria before proceeding to next phase
2. Reference specific step numbers (e.g., "Phase 2, Step 2.3") in commit messages
3. If a step fails validation, document blockers before moving forward
4. Phases can be parallelized where dependencies allow (e.g., SEO and Search are independent)
5. Use this document as source of truth for "what comes next" decisions

**When proposing changes**:
1. Identify which phase/step is affected
2. Assess impact on dependent steps
3. Update this roadmap if scope or sequence changes materially

**When debugging**:
1. Reference implementation phase to understand context
2. Check if exit criteria were properly validated
3. Review dependencies to identify root cause

