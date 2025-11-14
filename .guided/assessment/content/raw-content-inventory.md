# Raw Content Inventory

## Content Sources Overview

This document lists all discovered content sources in the Career Topologies codebase, organized by type and purpose.

---

## 1. Pages (Routes)

### Home Page (`/`)
- **Type**: Landing page
- **Path**: `src/App.tsx`
- **Sections**: HeroSection, AudienceSection, FrameworkSection
- **Description**: Main entry point showcasing the framework and its purpose

### About Page (`/about`)
- **Type**: Information page
- **Path**: `src/components/pages/AboutPage.tsx`
- **Description**: Comprehensive overview of Career Topologies framework, its purpose, components, and structure

### Framework Overview Page (`/framework`)
- **Type**: Framework documentation
- **Path**: `src/components/pages/FrameworkPage.tsx`
- **Description**: Core structure, governance, lifecycle, and critical considerations for implementing the framework

### Framework - Leveling Page (`/framework/leveling`)
- **Type**: Framework subsection
- **Path**: `src/components/pages/LevelingPage.tsx`
- **Description**: Career level definitions with interactive tables, matrices, and topology alignment diagrams
- **Visual Components**: InteractiveLevelingTable, ImpactAutonomyMatrix, TopologyAlignmentDiagram

### Framework - Progression Pillars Page (`/framework/progression`)
- **Type**: Framework subsection
- **Path**: `src/components/pages/ProgressionPillarsPage.tsx`
- **Description**: Core competencies and skills framework with visual proficiency charts
- **Visual Components**: ProficiencyRadarChart, LevelExamplesCards, ProgressionMatrix

### Framework - Guidelines Page (`/framework/guidelines`)
- **Type**: Framework subsection
- **Path**: `src/components/pages/GuidelinesPage.tsx`
- **Description**: Practical implementation guide with workflows, responsibilities, and timelines
- **Visual Components**: FrameworkFlowDiagram, RolesMatrix, ImplementationTimeline

### Management Page (`/management`)
- **Type**: Specialized topic
- **Path**: `src/components/pages/ManagementPage.tsx`
- **Description**: Three layers of management (Front-line, Middle, Top) with shared responsibilities

### Management - Developing Leaders Page (`/management/developing-leaders`)
- **Type**: Specialized guide
- **Path**: `src/components/pages/DevelopingLeadersPage.tsx`
- **Description**: Process for identifying and developing new leaders
- **Visual Components**: LeadershipReadinessFlowchart

### Topologies Page (`/topologies`)
- **Type**: Concept documentation
- **Path**: `src/components/pages/TopologiesPage.tsx`
- **Description**: Y-Model, W-Model, and Network Model career structures with diagrams
- **Visual Components**: Topology diagrams with comparative summary table

### Concepts Page (`/concepts`)
- **Type**: Concept documentation
- **Path**: `src/components/pages/ConceptsPage.tsx`
- **Description**: Core concepts of Career Topologies including topology, leveling, pillars, shapes, roles, governance

### Manifesto Page (`/manifesto`)
- **Type**: Principles documentation
- **Path**: `src/components/pages/ManifestoPage.tsx`
- **Description**: The 8 fundamental principles for fair career development

### Shapes Page (`/shapes`)
- **Type**: Concept documentation
- **Path**: `src/components/pages/ShapesPage.tsx`
- **Description**: I-Shaped, T-Shaped, and Pi-Shaped professional skill profiles

### References Page (`/references`)
- **Type**: Resource documentation
- **Path**: `src/components/pages/ReferencesPage.tsx`
- **Description**: Academic and professional references with external links organized by category

### Contributing Page (`/contributing`)
- **Type**: Community resource
- **Path**: `src/components/pages/ContributingPage.tsx`
- **Description**: How to contribute to the project, with GitHub repository information and contribution guidelines

---

## 2. Layout Components

### Navigation
- **Path**: Navigation component (referenced in App.tsx)
- **Description**: Main navigation menu
- **Links**: Defined in `src/components/config/NavigationConstants.ts`

### BreadcrumbNavigation
- **Path**: `src/components/layout/BreadcrumbNavigation.tsx`
- **Description**: Breadcrumb navigation with hierarchical page paths
- **Configuration**: Breadcrumb paths for all pages including parent relationships

### Footer
- **Path**: `src/components/layout/Footer.tsx`
- **Description**: Comprehensive footer with project description, navigation sections, social media links, and copyright information
- **Sections**:
  - About Career Topologies
  - Framework navigation
  - Resources navigation
  - Community links
  - Social media icons
  - GitHub integration
  - Copyright and attribution

---

## 3. Section Components

### HeroSection
- **Path**: `src/components/sections/HeroSection.tsx`
- **Used on**: Home page
- **Content**:
  - Main title: "Career Topologies"
  - Tagline: "A strategic framework for building fair, transparent, and sustainable career paths in technology organizations."
  - Description of Y-shaped, W-shaped, and N-shaped topology patterns
  - Version badge: v1.0.0
- **Visual**: Career topologies diagram image

### AudienceSection
- **Path**: `src/components/sections/AudienceSection.tsx`
- **Used on**: Home page
- **Content**: "Who is this for?" with target audiences:
  - HR professionals and People teams
  - Engineering managers and team leaders
  - Individual contributors planning growth
  - Organizations designing structured paths

### FrameworkSection
- **Path**: `src/components/sections/FrameworkSection.tsx`
- **Used on**: Home page
- **Content**: "Explore the Framework" grid with navigation cards:
  - Framework overview
  - Manifesto
  - Concepts
  - Topologies
  - Management
  - Contributing

### LeadershipReadinessFlowchart
- **Path**: `src/components/sections/LeadershipReadinessFlowchart.tsx`
- **Used on**: Developing Leaders page
- **Visual Component**: Interactive flowchart with 4 steps and 3 outcomes
- **Steps**:
  1. Knowledge & Contribution Analysis
  2. Development Plan
  3. Interim Experience (3-6 months)
  4. Evaluation
- **Outcomes**: Promotion, Further Development, No Longer Interested

### UnifiedRelatedPages
- **Path**: `src/components/sections/UnifiedRelatedPages.tsx`
- **Configuration**: `src/components/sections/UnifiedRelatedPagesConfig.ts`
- **Used on**: Most pages
- **Content**: Context-aware related pages suggestions organized by categories
- **Variants**: explore, learn, related

### PageHero
- **Path**: Referenced across all pages
- **Description**: Page header component with title and description

---

## 4. Constants and Configuration Files

### NavigationConstants.ts
- **Path**: `src/components/config/NavigationConstants.ts`
- **Content**:
  - **navigationLinks**: About, Framework, Concepts, Manifesto, Contributing
  - **footerLinks**: Topologies, Shapes, Management, References

### constants.ts
- **Path**: `src/lib/constants.ts`
- **Content**:
  - **APP_CONFIG**: name, description, version, author, repository URL
  - **NAVIGATION_ITEMS**: Complete navigation menu items with labels and hrefs
  - **THEME_CONFIG**: Default theme and storage key
  - **LANGUAGE_CONFIG**: Supported languages (English, Portuguese, Spanish, French) with flags

### UnifiedRelatedPagesConfig.ts
- **Path**: `src/components/sections/UnifiedRelatedPagesConfig.ts`
- **Content**: 
  - Predefined page collections (FRAMEWORK_PAGES, CONCEPT_PAGES, RESOURCE_PAGES, SPECIALIZED_PAGES)
  - Page-specific configurations for intelligent related page suggestions
  - Smart function to get related pages with fallback logic

---

## 5. Key User-Facing Text Groupings

### Headings and Section Titles
- "Career Topologies" (Main title)
- "Purpose", "What Makes It Different?", "Core Components"
- "Governance & Roles", "Management Model", "Professional Shapes"
- "Career Topologies", "Ongoing Development"
- "Core Structure", "Implementation Lifecycle", "Critical Considerations"
- "Topology Models", "Comparative Summary", "Choosing a Topology"
- "The 8 Principles", "Professional Shapes", "Growth and Transitions"
- "Leveling Objectives", "Typical Levels", "Impact × Autonomy Matrix"
- "Pillar Objectives", "Pillar Structure", "Examples by Level"
- "How to Use the Framework", "Communication Best Practices", "Promotion Process Guide"
- "Leadership Readiness Flowchart", "Why It Matters", "Best Practices"

### Call-to-Action Labels
- "Explore Leveling", "View Pillars", "Learn Topologies", "Implementation Guide"
- "Contribute on GitHub", "Visit Repository", "Find Good First Issues"
- "View Detailed Guide"

### Helper Text and Descriptions
- Pillar descriptions for competency areas
- Level expectation descriptions
- Topology use case descriptions
- Management responsibility descriptions

### Status and Validation Messages
- None identified (no forms or interactive validation in visible content)

### Empty States
- None identified

### Table Headers
- Comparative summary tables: Aspect, Y-Model, W-Model, Network Model
- Roles matrix: HR, Team Leads, Managers, Employees
- Progression matrix: Pillar names and level indicators

### Filter Labels
- Level selector buttons: Junior, Mid-level, Senior, Staff, Principal, Distinguished

---

## 6. Visual Components

### Charts and Diagrams

#### Interactive Leveling Table
- **Location**: LevelingPage
- **Represents**: Career levels from Junior to Director/VP/C-Level
- **Dimensions**: Level, Impact Scope, Autonomy, Complexity
- **Interactive**: Click to expand details

#### Impact × Autonomy Matrix
- **Location**: LevelingPage
- **Represents**: Relationship between scope of impact and degree of autonomy
- **Axes**: Scope of Impact (x), Autonomy (y)
- **Data Points**: 6 levels plotted on a 2D grid

#### Proficiency Radar Chart
- **Location**: ProgressionPillarsPage
- **Represents**: Skill proficiency across 6 pillars
- **Dimensions**: Delivery & Execution, Technical Domain, Collaboration, Autonomy, Initiative, Mentoring
- **Interactive**: Level selector (Junior through Distinguished)
- **Metrics**: 1-5 scale for each pillar

#### Progression Matrix
- **Location**: ProgressionPillarsPage
- **Represents**: Competency levels across career levels
- **Format**: Heat map with color intensity representing proficiency (1-5 scale)
- **Rows**: Career levels (Junior through Principal)
- **Columns**: 6 progression pillars

#### Topology Alignment Diagrams
- **Location**: LevelingPage
- **Represents**: How career levels align with Y, W, and Network topology models
- **Format**: 3 side-by-side diagrams showing level-to-path mappings

#### Topology Model Diagrams
- **Location**: TopologiesPage
- **Represents**: Y-Model, W-Model, Network Model career structures
- **Visual**: SVG/image placeholders showing career path bifurcations and connections

#### Leadership Readiness Flowchart
- **Location**: DevelopingLeadersPage
- **Represents**: 4-step process for developing new leaders with 3 possible outcomes
- **Interactive**: Hover tooltips with step details
- **Format**: Desktop (horizontal flow) and Mobile (vertical flow) responsive layouts

#### Framework Flow Diagram
- **Location**: GuidelinesPage
- **Represents**: Implementation flow from Topology → Ladder → Levels → Pillars
- **Format**: 4-step sequential diagram with icons

#### Roles and Responsibilities Matrix
- **Location**: GuidelinesPage
- **Represents**: Responsibility levels (Primary, Secondary, Support, None) across HR, Team Leads, Managers, Employees
- **Dimensions**: 4 roles × 6 responsibilities

#### Implementation Timeline
- **Location**: GuidelinesPage
- **Represents**: 8-phase implementation roadmap spanning 24 weeks
- **Format**: Gantt-style timeline showing phase durations and overlaps

### Widgets and KPIs
- Version badge: v1.0.0 (HeroSection)
- Social media icon links (Footer)

---

## 7. Links and References

### Internal Navigation Links
All pages include:
- Main navigation menu links
- Breadcrumb navigation
- Footer navigation sections
- Related pages cards
- In-content contextual links

Documented separately in `links-and-references.md`.

### External URLs
Documented separately in `links-and-references.md`.

---

## Summary Statistics

- **Total Pages**: 14 (1 home + 13 content pages)
- **Layout Components**: 3 (Navigation, BreadcrumbNavigation, Footer)
- **Section Components**: 6 (HeroSection, AudienceSection, FrameworkSection, LeadershipReadinessFlowchart, UnifiedRelatedPages, PageHero)
- **Visual Components**: 10 interactive charts/diagrams
- **Configuration Files**: 3 (NavigationConstants, constants, UnifiedRelatedPagesConfig)
- **Total Content Sources**: ~36 unique files analyzed

---

## Notes

- All pages use consistent component structure with PageHero, content sections, and UnifiedRelatedPages
- Visual components are primarily implemented as React components with SVG/Canvas rendering
- No i18n files detected (though LANGUAGE_CONFIG suggests multilingual support is planned)
- No external CMS or JSON data files found
- Images are placeholder SVG files referenced from `/placeholder-*.svg` paths
- All content is hardcoded in TypeScript/TSX files
- Framework uses Radix UI for design primitives
- Lucide React for icons throughout the application
