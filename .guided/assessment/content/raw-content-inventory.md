# Raw Content Inventory

## Overview

This document catalogs all content sources discovered in the Career Topologies codebase, organized by type and purpose.

---

## Content Source Categories

### 1. Pages and Routes

#### Home Page (`/`)

- **Path**: `src/App.tsx` (route: `/`)
- **Type**: Landing page
- **Components**: HeroSection, AudienceSection, FrameworkSection
- **Description**: Main entry point showcasing the framework overview, target audience, and navigation to key sections

#### About Page (`/about`)

- **Path**: `src/components/pages/AboutPage.tsx`
- **Type**: Informational page
- **Description**: Comprehensive overview of Career Topologies, its purpose, differentiators, core components, governance, management model, professional shapes, and topology models

#### Framework Page (`/framework`)

- **Path**: `src/components/pages/FrameworkPage.tsx`
- **Type**: Strategic guide page
- **Description**: Detailed explanation of the framework's core structure (Leveling, Progression Pillars, Topologies, Governance), lifecycle, and implementation considerations

#### Framework Sub-pages

- **Leveling** (`/framework/leveling`)

  - Path: `src/components/pages/LevelingPage.tsx`
  - Description: Interactive exploration of career levels, impact/autonomy matrix, and alignment with topologies

- **Progression Pillars** (`/framework/progression`)

  - Path: `src/components/pages/ProgressionPillarsPage.tsx`
  - Description: Detailed breakdown of competency pillars with radar charts, progression matrices, and level examples

- **Guidelines** (`/framework/guidelines`)
  - Path: `src/components/pages/GuidelinesPage.tsx`
  - Description: Operational guide for implementing the framework with roles, timelines, and communication strategies

#### Concepts Page (`/concepts`)

- **Path**: `src/components/pages/ConceptsPage.tsx`
- **Type**: Educational reference
- **Description**: Definitions and explanations of 7 core concepts including topology, leveling, pillars, shapes, ladder roles, governance, and evolution

#### Manifesto Page (`/manifesto`)

- **Path**: `src/components/pages/ManifestoPage.tsx`
- **Type**: Values and principles
- **Description**: The 8 foundational principles guiding fair and transparent career development

#### Topologies Page (`/topologies`)

- **Path**: `src/components/pages/TopologiesPage.tsx`
- **Type**: Model comparison
- **Description**: Detailed explanation of Y-Model, W-Model, and Network Model career structures with diagrams and comparative analysis

#### Shapes Page (`/shapes`)

- **Path**: `src/components/pages/ShapesPage.tsx`
- **Type**: Skill profile reference
- **Description**: Explanation of I-Shaped, T-Shaped, and Pi-Shaped professional profiles

#### Management Page (`/management`)

- **Path**: `src/components/pages/ManagementPage.tsx`
- **Type**: Leadership framework
- **Description**: Three-layer management model (Front-line, Middle, Top) with responsibilities and knowledge requirements

#### Management Sub-page

- **Developing Leaders** (`/management/developing-leaders`)
  - Path: `src/components/pages/DevelopingLeadersPage.tsx`
  - Description: Process guide for identifying, preparing, and evaluating first-time leaders

#### Contributing Page (`/contributing`)

- **Path**: `src/components/pages/ContributingPage.tsx`
- **Type**: Community engagement
- **Description**: How to contribute to the project via GitHub, ways to help, maintainer information

#### References Page (`/references`)

- **Path**: `src/components/pages/ReferencesPage.tsx`
- **Type**: Bibliography
- **Description**: Academic and professional resources organized by category (Professional Profile, News, Structures, Studies, Leadership)

---

### 2. Navigation Components

#### Main Navigation

- **Path**: `src/components/layout/Navigation.tsx`
- **Type**: Site navigation
- **Links**: About, Framework, Concepts, Manifesto, Contributing

#### Footer Navigation

- **Path**: `src/components/layout/Footer.tsx`
- **Type**: Secondary navigation
- **Links**: Topologies, Shapes, Management, References

#### Navigation Constants

- **Path**: `src/components/config/NavigationConstants.ts`
- **Type**: Configuration
- **Content**: Centralized navigation link definitions

#### Breadcrumb Navigation

- **Path**: `src/components/layout/BreadcrumbNavigation.tsx`
- **Type**: Contextual navigation
- **Description**: Dynamic breadcrumb trails for sub-pages

---

### 3. Section Components

#### Hero Section

- **Path**: `src/components/sections/HeroSection.tsx`
- **Type**: Homepage hero
- **Key Content**:
  - Title: "Career Topologies"
  - Tagline: "A strategic framework for building fair, transparent, and sustainable career paths in technology organizations"
  - Description of Y-shaped, W-shaped, N-shaped patterns

#### Audience Section

- **Path**: `src/components/sections/AudienceSection.tsx`
- **Type**: Target audience
- **Key Content**: "Who is this for?"
  - HR professionals and People teams
  - Engineering managers and team leaders
  - Individual contributors planning growth
  - Organizations designing structured paths

#### Framework Section

- **Path**: `src/components/sections/FrameworkSection.tsx`
- **Type**: Navigation cards
- **Key Content**: "Explore the Framework" with 6 main areas

#### Leadership Readiness Flowchart

- **Path**: `src/components/sections/LeadershipReadinessFlowchart.tsx`
- **Type**: Process diagram
- **Description**: Visual flowchart for leader development process

#### Unified Related Pages

- **Path**: `src/components/sections/UnifiedRelatedPages.tsx`
- **Type**: Cross-linking component
- **Description**: Context-aware related page suggestions

---

### 4. Common Components

#### Empty State

- **Path**: `src/components/common/EmptyState.tsx`
- **Type**: UI feedback
- **Messages**: Placeholder for empty data states

#### Loading Spinner

- **Path**: `src/components/common/LoadingSpinner.tsx`
- **Type**: UI feedback
- **Messages**: Loading indicators

#### Feature Card

- **Path**: `src/components/common/FeatureCard.tsx`
- **Type**: Content presentation
- **Description**: Reusable card component for features/benefits

---

### 5. Media Components

#### Page Hero

- **Path**: `src/components/media/PageHero.tsx`
- **Type**: Page header
- **Description**: Standardized page title and description component used across all major pages

#### Image with Fallback

- **Path**: `src/components/media/ImageWithFallback.tsx`
- **Type**: Media handler
- **Description**: Image component with error handling

---

### 6. Configuration Files

#### README.md

- **Path**: `README.md`
- **Type**: Project documentation
- **Content**:
  - Project description
  - Tech stack information
  - Installation and setup instructions
  - Project structure overview

#### Package.json

- **Path**: `package.json`
- **Type**: Project metadata
- **Content**:
  - Project name: "careertopologies"
  - Version: "0.0.0"
  - Dependencies and scripts

---

## User-Facing Text Categories

### 1. Headings and Titles

**Primary Page Titles:**

- "Career Topologies"
- "About Career Topologies"
- "Career Topologies Framework"
- "Core Concepts"
- "Career Manifesto"
- "Career Topologies – Leveling"
- "Career Topologies – Progression Pillars"
- "Guidelines"
- "Professional Shapes (Skill Profiles)"
- "Management Levels"
- "Developing New Leaders"
- "Contributing"
- "References"

**Section Headings (Examples):**

- "Purpose"
- "What Makes It Different?"
- "Core Components"
- "Governance & Roles"
- "Management Model"
- "Professional Shapes"
- "Career Topologies"
- "Ongoing Development"
- "The 8 Principles"
- "Who is this for?"
- "Explore the Framework"

### 2. Calls-to-Action (CTAs)

- "Explore Leveling"
- "View Pillars"
- "Learn Topologies"
- "Implementation Guide"
- "Contribute on GitHub"
- "Visit Repository"
- "View Detailed Guide"
- "Find Good First Issues"

### 3. Descriptive Text

**Value Propositions:**

- "A strategic framework for building fair, transparent, and sustainable career paths in technology organizations"
- "Empowering individuals and organizations by offering a shared language and strategy for career development"
- "Building career systems that are clear, inclusive, and aligned with business needs"

**Key Principles:**

- "Transparency in expectations and opportunities"
- "Merit-based growth without favoritism"
- "Equity in compensation and recognition"
- "Consistency in evaluations and promotions"
- "Collaboration over competition"
- "Diversity and inclusion across all levels"
- "Shared ownership of career development"
- "Flexibility to grow through different paths"

### 4. Navigation Labels

**Primary Navigation:**

- "About"
- "Framework"
- "Concepts"
- "Manifesto"
- "Contributing"

**Footer Navigation:**

- "Topologies"
- "Shapes"
- "Management"
- "References"

### 5. Form Labels and Helper Text

No forms present in the current implementation. The site is informational/documentation-focused.

### 6. Empty States and Messages

- "Loading..." (implied from LoadingSpinner component)
- Empty state messages handled by EmptyState component

### 7. Tooltips and Hints

**Implicit guidance text throughout content:**

- Level progression explanations
- Pillar descriptions
- Topology selection considerations
- Best practices and recommendations

---

## Content Organization Patterns

### 1. Hierarchical Structure

- Main concepts → Sub-concepts → Details → Examples
- Framework → Components → Guidelines → Implementation

### 2. Progressive Disclosure

- Overview pages with links to detailed pages
- Interactive components (collapsible sections, tabs)
- Visual diagrams with explanatory text

### 3. Cross-Referencing

- Related pages component on most pages
- Inline links to related concepts
- Breadcrumb navigation for context

### 4. Multi-Format Content

- Text explanations
- Lists and tables
- Visual diagrams (SVG placeholders)
- Interactive components (radar charts, matrices)

---

## Content Metadata

**Language:** English (US)  
**Tone:** Professional, educational, inclusive  
**Style:** Clear, structured, actionable  
**Audience Level:** Professional/Technical (HR, Engineering, Leadership)  
**Content Purpose:** Education, guidance, implementation support  
**Version Indicated:** v1.0.0

---

## File Count Summary

- **Pages**: 14 (including sub-pages)
- **Section Components**: 5
- **Layout Components**: 4
- **Common Components**: 3
- **Configuration Files**: 2
- **Total Content Sources**: ~28 primary files
