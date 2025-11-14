## 7. Page Layout Patterns

### Overview

The Career Topologies site employs three canonical layout patterns optimized for different content types and user intents. All patterns share the global header and footer components while varying internal structure to support specific page purposes.

---

### Pattern 1: Landing Page Layout

**Purpose**: Welcome visitors, establish value proposition, guide exploration  
**Used By**: Home page (`/`)

#### Structure

```
┌─────────────────────────────────────┐
│ Global Header                        │
├─────────────────────────────────────┤
│ Hero Section (Full-Width)           │
│ - Large title / tagline              │
│ - Hero image (topologies visual)    │
│ - Version badge                      │
│ - Primary CTA button                 │
├─────────────────────────────────────┤
│ Audience Section (Container)         │
│ - "Who is this for?" heading         │
│ - 4 audience cards (2x2 grid)        │
│   - Icon + Title + Description       │
├─────────────────────────────────────┤
│ Framework Overview (Container)       │
│ - "Framework Components" heading     │
│ - 4 component cards (2x2 grid)       │
│   - Title + Description + CTA link   │
├─────────────────────────────────────┤
│ Value Proposition Callout            │
│ - Key benefits summary               │
│ - Open-source positioning            │
├─────────────────────────────────────┤
│ Call-to-Action Section               │
│ - Primary CTA: Framework             │
│ - Secondary CTA: Manifesto           │
│ - Tertiary CTA: Contributing         │
├─────────────────────────────────────┤
│ Global Footer                        │
└─────────────────────────────────────┘
```

#### Characteristics

- **No Breadcrumbs**: Top-level entry point
- **No TOC**: Sections are scannable without navigation aid
- **High Visual Density**: Multiple card grids and visual elements
- **Multiple CTAs**: Directs visitors to various entry points based on interest
- **Responsive**: Cards stack vertically on mobile, 2-column on tablet, 2x2 on desktop

#### Content Sections

1. **Hero**: Above-the-fold impact with clear value proposition
2. **Audience Cards**: Self-identification for personalized journey
3. **Component Cards**: Direct navigation to framework elements
4. **Value Proposition**: Trust signals (open-source, research-backed, transparent)
5. **Action Footer**: Multiple pathways for different user intents

---

### Pattern 2: Documentation Page Layout

**Purpose**: Deliver comprehensive content with navigation aids and visual tools  
**Used By**: Framework pages, concept pages, specialized topics

#### Pages Using This Pattern

- About (`/about`)
- Framework Overview (`/framework`)
- Leveling (`/framework/leveling`)
- Progression (`/framework/progression`)
- Guidelines (`/framework/guidelines`)
- Topologies (`/topologies`)
- Shapes (`/shapes`)
- Management (`/management`)
- Developing Leaders (`/management/developing-leaders`)

#### Structure

```
┌─────────────────────────────────────┐
│ Global Header                        │
├─────────────────────────────────────┤
│ Breadcrumbs                          │
│ Home > Section > Page                │
├─────────────────────────────────────┤
│ Page Hero                            │
│ - Page title (H1)                    │
│ - Page description (1-2 sentences)   │
│ - Optional category badge            │
├─────────────────────────────────────┤
│ ┌───────────────┬───────────────────┐│
│ │               │ TOC Sidebar       ││
│ │ Main Content  │ (if applicable)   ││
│ │               │                   ││
│ │ - Intro       │ - "On This Page"  ││
│ │ - Sections    │ - Section links   ││
│ │   - H2        │ - Active tracking ││
│ │   - H3        │ - Sticky position ││
│ │   - Content   │                   ││
│ │   - Callouts  │                   ││
│ │   - Diagrams  │                   ││
│ │ - More        │                   ││
│ │   sections    │                   ││
│ │               │                   ││
│ └───────────────┴───────────────────┘│
├─────────────────────────────────────┤
│ Interactive Components (if present)  │
│ - Leveling Table (Leveling page)     │
│ - Radar Chart (Progression page)     │
│ - Flowchart (Developing Leaders)     │
├─────────────────────────────────────┤
│ Next/Previous Navigation             │
│ ← Previous Page | Next Page →        │
├─────────────────────────────────────┤
│ Related Pages Section                │
│ - "Learn More" / "Related" heading   │
│ - 3-6 related page cards (grid)      │
├─────────────────────────────────────┤
│ Global Footer                        │
└─────────────────────────────────────┘
```

#### Characteristics

- **Breadcrumbs**: Present on all second-level and third-level pages
- **Page Hero**: Consistent title/description pattern for context
- **TOC Sidebar**: Right sidebar on content-heavy pages (desktop only)
  - Present: About, Leveling, Progression, Guidelines
  - Absent: Shorter pages like Shapes, Management
- **Main Content Width**: Max-width container (prose width ~65-75ch) for readability
- **Callouts**: Inline information, tips, warnings, principles
- **Interactive Components**: Embedded where relevant (tables, charts, diagrams)
- **Navigation Aids**: Next/Previous for linear progression, Related Pages for exploration

#### Responsive Behavior

**Desktop (≥1280px)**:
- Two-column layout: Main content (75%) + TOC sidebar (25%)
- TOC sticky as user scrolls

**Tablet (768px - 1279px)**:
- Single column: Main content full-width
- TOC collapses to expandable accordion at top, or hidden

**Mobile (<768px)**:
- Single column stack
- TOC hidden to maximize content area
- Interactive components scale or scroll horizontally if complex

#### Content Section Types

1. **Introduction**: Context-setting paragraph or overview
2. **Numbered/Bulleted Lists**: Structured information (8 principles, 6 pillars, 3 topologies)
3. **Comparison Tables**: Side-by-side analysis (topology comparison, level definitions)
4. **Visual Components**: Diagrams, charts, matrices embedded in content flow
5. **Callouts**: Highlight principles, tips, warnings
6. **Examples**: Concrete applications of concepts

---

### Pattern 3: Reference/List Page Layout

**Purpose**: Organize external links, community resources, or structured lists  
**Used By**: References page, Contributing page

#### Pages Using This Pattern

- Manifesto (`/manifesto`) - Principle cards with icons
- Core Concepts (`/concepts`) - Concept definitions with links
- References (`/references`) - Categorized external links
- Contributing (`/contributing`) - Contribution methods and GitHub workflow

#### Structure

```
┌─────────────────────────────────────┐
│ Global Header                        │
├─────────────────────────────────────┤
│ Breadcrumbs (if sub-page)            │
├─────────────────────────────────────┤
│ Page Hero                            │
│ - Page title                         │
│ - Page description                   │
├─────────────────────────────────────┤
│ Main Content (Single Column)         │
│                                      │
│ Introduction Section                 │
│ - Purpose explanation                │
│                                      │
│ Category 1 Heading                   │
│ ┌────────┐ ┌────────┐ ┌────────┐   │
│ │ Card 1 │ │ Card 2 │ │ Card 3 │   │
│ └────────┘ └────────┘ └────────┘   │
│                                      │
│ Category 2 Heading                   │
│ ┌────────┐ ┌────────┐               │
│ │ Card 4 │ │ Card 5 │               │
│ └────────┘ └────────┘               │
│                                      │
│ OR: Organized Lists                  │
│ - Link 1 (description)               │
│ - Link 2 (description)               │
│ - Link 3 (description)               │
│                                      │
│ Call-to-Action Section (if relevant) │
│ - GitHub link, Discussion link       │
├─────────────────────────────────────┤
│ Related Pages Section                │
│ - 3-6 related page cards             │
├─────────────────────────────────────┤
│ Global Footer                        │
└─────────────────────────────────────┘
```

#### Characteristics

- **Single Column**: No sidebar, full content width
- **Category Organization**: Clear groupings with headings
- **Card Grids or Lists**: Depending on content type
  - **Cards**: Manifesto (principle cards), Contributing (method cards)
  - **Lists**: References (link lists), Concepts (definition lists with cross-links)
- **Minimal Interaction**: Primarily navigation links, no complex interactive components
- **External Links**: Many pages in this pattern link externally (References, Contributing)

#### Reference Page Specific Structure

**References** (`/references`):
- 5 category headings (Professional Profile, News, Frameworks, Studies, Management)
- Each category contains organized link list with:
  - Link text (source title)
  - Optional description (1 sentence)
  - External link indicator icon

**Contributing** (`/contributing`):
- Introduction with GitHub repository link
- 5 contribution method cards (icons + titles + descriptions)
- Step-by-step process (4-step GitHub workflow)
- Code of Conduct reference
- CTA to GitHub Discussions/Issues

**Manifesto** (`/manifesto`):
- Introduction explaining principles
- 8 principle cards (numbered, with icons):
  - Principle title
  - Statement
  - "Why It Matters" explanation
  - "In Practice" examples
- Call to Action: Join movement, explore framework

**Core Concepts** (`/concepts`):
- Introduction
- 7 concept definitions (numbered sections):
  - Concept name
  - Definition
  - Key elements
  - Why it matters
  - Link to detailed page
- "How Concepts Interconnect" section
- "Applying Concepts" use cases

#### Responsive Behavior

**Desktop**: 2-3 column card grids  
**Tablet**: 2 column grids  
**Mobile**: Single column stack for cards and lists

---

### Pattern Mapping Summary

| Page | Pattern | Breadcrumbs | TOC | Interactive Components | Related Pages |
|------|---------|-------------|-----|------------------------|---------------|
| Home (`/`) | Landing | ✗ | ✗ | Navigation cards | ✗ |
| About | Documentation | ✓ | ✓ | None | ✓ |
| Manifesto | Reference/List | ✓ | ✗ | Principle cards | ✓ |
| Concepts | Reference/List | ✓ | ✗ | Cross-link definitions | ✓ |
| Topologies | Documentation | ✓ | ✗ | Topology diagrams | ✓ |
| Framework | Documentation | ✗ (top-level) | ✓ | Navigation cards | ✓ |
| Leveling | Documentation | ✓ | ✓ | Interactive table, matrix | ✓ |
| Progression | Documentation | ✓ | ✓ | Radar chart, heat map | ✓ |
| Guidelines | Documentation | ✓ | ✓ | Timeline, matrices | ✓ |
| Shapes | Documentation | ✓ | ✗ | None | ✓ |
| Management | Documentation | ✓ | ✗ | None | ✓ |
| Developing Leaders | Documentation | ✓ | ✗ | Flowchart | ✓ |
| References | Reference/List | ✓ | ✗ | External links | ✓ |
| Contributing | Reference/List | ✓ | ✗ | Contribution cards | ✓ |

---

### Layout Pattern Selection Criteria

**Use Landing Pattern When**:
- Page is primary entry point (home)
- Goal is exploration and wayfinding
- High visual impact needed
- Multiple CTAs appropriate

**Use Documentation Pattern When**:
- Content is comprehensive (>500 words)
- Multiple sections require navigation (TOC)
- Interactive tools embedded in content
- Linear or exploratory reading paths

**Use Reference/List Pattern When**:
- Content is organized list or catalog
- Card-based presentation suits content
- External links are primary content
- Scannable structure more important than prose flow

---

