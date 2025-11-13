# Information Architecture

## Site Structure Overview

Career Topologies follows a **hub-and-spoke information architecture** with the homepage serving as the central hub, directing visitors to distinct content areas organized by topic and audience need. The structure balances depth (detailed reference pages) with discoverability (clear navigation and cross-linking).

---

## Navigation Patterns

### Primary Navigation (Top Navigation Bar)

The main navigation provides access to the five core content areas:

```
┌─────────────────────────────────────────────────────────┐
│  Career Topologies                                       │
│  ┌─────┬───────────┬──────────┬───────────┬────────────┐│
│  │About│ Framework │ Concepts │ Manifesto │Contributing││
│  └─────┴───────────┴──────────┴───────────┴────────────┘│
└─────────────────────────────────────────────────────────┘
```

**Navigation Strategy**: Task-based and topic-based hybrid

- **About**: Understanding the project (What is this?)
- **Framework**: Implementation guide (How do I use it?)
- **Concepts**: Learning fundamentals (What do terms mean?)
- **Manifesto**: Principles and values (Why does this matter?)
- **Contributing**: Community participation (How can I help?)

### Secondary Navigation (Footer)

The footer provides access to specialized topics and supplementary content:

```
┌─────────────────────────────────────────────────────────┐
│  ┌────────────┬────────┬────────────┬────────────┐      │
│  │ Topologies │ Shapes │ Management │ References │      │
│  └────────────┴────────┴────────────┴────────────┘      │
└─────────────────────────────────────────────────────────┘
```

**Navigation Strategy**: Deeper dives into specific topics

- **Topologies**: Career path models
- **Shapes**: Skill profiles
- **Management**: Leadership levels
- **References**: Academic/industry sources

### Contextual Navigation

#### Breadcrumbs

Used on sub-pages to show hierarchical position:

```
Home > Framework > Leveling
Home > Management > Developing Leaders
```

#### Related Pages

Dynamic component showing contextually relevant pages at the bottom of each page.

#### In-content Links

Extensive cross-linking within page content (e.g., "See /topologies for more →")

---

## Hierarchical Content Structure

### Level 1: Homepage (Entry Point)

```
/ (Home)
│
├─ Hero Section: Framework introduction and value proposition
├─ Audience Section: Target user identification
└─ Framework Section: Navigation to main areas
```

**Purpose**: Orientation and direction
**Audience**: First-time visitors, all audiences
**Content Type**: Overview, navigation

---

### Level 2: Main Content Areas

#### A. About Branch (`/about`)

```
/about
│
└─ Single comprehensive page covering:
   ├─ Purpose
   ├─ What Makes It Different
   ├─ Core Components
   ├─ Governance & Roles
   ├─ Management Model
   ├─ Professional Shapes
   ├─ Topology Models
   └─ Ongoing Development
```

**Purpose**: Project overview and context
**Audience**: All audiences, especially first-time learners
**Content Type**: Explanatory, high-level

---

#### B. Framework Branch (`/framework`)

```
/framework (Parent Page)
│
├─ Core Structure
├─ Governance & Roles
├─ Implementation Lifecycle
├─ Critical Considerations
│
├─── /framework/leveling (Child Page)
│    ├─ Leveling Objectives
│    ├─ Guiding Principles
│    ├─ Typical Levels (Interactive)
│    ├─ Evaluation Elements
│    ├─ Impact × Autonomy Matrix
│    └─ Alignment with Topologies
│
├─── /framework/progression (Child Page)
│    ├─ Pillar Objectives
│    ├─ Pillar Structure
│    ├─ Engineering Example
│    ├─ Interactive Visualizations
│    ├─ Examples by Level
│    └─ Applicability
│
└─── /framework/guidelines (Child Page)
     ├─ Implementation Flow
     ├─ How to Use the Framework
     ├─ Roles and Responsibilities
     ├─ Communication Best Practices
     ├─ Promotion Process
     ├─ Compensation and Titles
     ├─ Governance and Updates
     └─ Implementation Roadmap
```

**Purpose**: Implementation guide and operational reference
**Audience**: HR teams, managers implementing the framework
**Content Type**: Procedural, detailed, actionable

---

#### C. Concepts Branch (`/concepts`)

```
/concepts
│
└─ Seven Core Concepts (Single Page):
   ├─ 1. Career Topology
   ├─ 2. Leveling
   ├─ 3. Progression Pillars
   ├─ 4. Shapes (Skill Profiles)
   ├─ 5. Role of the Ladder
   ├─ 6. Governance and Roles
   └─ 7. Evolution & Flexibility
```

**Purpose**: Glossary and conceptual foundation
**Audience**: All audiences, especially learners and contributors
**Content Type**: Definitional, educational

---

#### D. Manifesto Branch (`/manifesto`)

```
/manifesto
│
└─ The 8 Principles (Single Page):
   ├─ 1. Transparency
   ├─ 2. Fair Recognition
   ├─ 3. Equality
   ├─ 4. Consistency
   ├─ 5. Cooperation
   ├─ 6. Diversity
   ├─ 7. Ownership
   └─ 8. Flexibility
```

**Purpose**: Values and guiding principles
**Audience**: All stakeholders, especially decision-makers
**Content Type**: Aspirational, philosophical

---

#### E. Contributing Branch (`/contributing`)

```
/contributing
│
└─ Community Participation (Single Page):
   ├─ GitHub Repository
   ├─ Ways to Contribute
   ├─ Maintainers
   ├─ Code of Conduct
   └─ Start Contributing
```

**Purpose**: Community engagement and contribution guidelines
**Audience**: Contributors, open-source participants
**Content Type**: Instructional, community-focused

---

### Level 3: Specialized Topics (Footer Navigation)

#### F. Topologies Branch (`/topologies`)

```
/topologies
│
└─ Career Path Models (Single Page):
   ├─ Overview
   ├─ Y-Model (with diagram)
   ├─ W-Model (with diagram)
   ├─ Network Model (with diagram)
   ├─ Comparative Summary (table)
   └─ Choosing a Topology
```

**Purpose**: Deep dive into career structure models
**Audience**: HR, org design, senior leadership
**Content Type**: Comparative, strategic

---

#### G. Shapes Branch (`/shapes`)

```
/shapes
│
└─ Skill Profiles (Single Page):
   ├─ Overview
   ├─ I-Shaped Profile
   ├─ T-Shaped Profile
   ├─ Pi-Shaped Profile
   ├─ Growth and Transitions
   └─ Related Sections
```

**Purpose**: Understanding skill diversity
**Audience**: Hiring managers, career coaches, individuals
**Content Type**: Descriptive, developmental

---

#### H. Management Branch (`/management`)

```
/management (Parent Page)
│
├─ Shared Responsibilities
├─ Front-line Manager (Operational)
├─ Middle Manager (Tactical)
├─ Top Manager (Strategic)
└─ Future Considerations
│
└─── /management/developing-leaders (Child Page)
     ├─ Why It Matters
     ├─ Leadership Readiness Flowchart
     └─ Best Practices
```

**Purpose**: Leadership framework and development
**Audience**: Current and aspiring managers, HR/L&D teams
**Content Type**: Developmental, prescriptive

---

#### I. References Branch (`/references`)

```
/references
│
└─ Bibliography (Single Page):
   ├─ Professional Profile
   ├─ News and Articles
   ├─ Structures and Frameworks
   ├─ Studies, Laws and Principles
   └─ Leadership, Management and Teams
```

**Purpose**: Academic and professional sources
**Audience**: Researchers, contributors, validators
**Content Type**: Reference, citation

---

## Content Flow Patterns

### 1. Progressive Disclosure Flow

**Pattern**: Broad → Specific → Detailed

```
Homepage (Overview)
   ↓
About (What is this?)
   ↓
Framework (How does it work?)
   ↓
Leveling/Progression/Guidelines (Deep details)
```

**Use Case**: New visitors learning about the framework

---

### 2. Topic-First Flow

**Pattern**: Concept → Application → Implementation

```
Concepts (Definitions)
   ↓
Topologies/Shapes/Management (Models)
   ↓
Framework > Guidelines (Implementation)
```

**Use Case**: Users exploring specific topics before implementation

---

### 3. Implementation Flow

**Pattern**: Strategic → Tactical → Operational

```
Manifesto (Why/Principles)
   ↓
Framework (What/Structure)
   ↓
Guidelines (How/Process)
   ↓
Leveling/Progression (Details)
```

**Use Case**: Organizations planning adoption

---

### 4. Role-Based Flow

**Pattern**: Role identification → Relevant content

```
Audience Section (Role match)
   ↓
Explore Framework (Entry by need)
   ↓
   ├─ HR → Guidelines, Governance
   ├─ Managers → Progression, Management
   ├─ ICs → Leveling, Shapes
   └─ Contributors → Contributing, References
```

**Use Case**: Direct navigation for specific user roles

---

## Information Scent and Findability

### Primary Entry Points by User Intent

| User Intent                 | Entry Point                     | Next Steps           |
| --------------------------- | ------------------------------- | -------------------- |
| "What is this project?"     | Homepage → About                | Concepts, Manifesto  |
| "How do I implement this?"  | Homepage → Framework            | Guidelines, Leveling |
| "What does this term mean?" | Any page → Concepts             | Related topic pages  |
| "What career paths exist?"  | Framework → Topologies          | Shapes, Management   |
| "How do I evaluate people?" | Framework → Progression         | Leveling, Guidelines |
| "How do I contribute?"      | Any page → Contributing         | GitHub, References   |
| "What are the principles?"  | About → Manifesto               | Framework            |
| "How do leaders grow?"      | Management → Developing Leaders | Framework            |

---

## Visual Hierarchy and Content Organization

### Page Structure Pattern (Consistent across pages)

```
┌─────────────────────────────────────────┐
│  Page Hero                               │
│  ├─ Title                                │
│  └─ Description                          │
├─────────────────────────────────────────┤
│  Section 1 (Overview/Introduction)      │
├─────────────────────────────────────────┤
│  Section 2 (Core Content)                │
│  ├─ Subsection A                         │
│  ├─ Subsection B                         │
│  └─ Subsection C                         │
├─────────────────────────────────────────┤
│  Section 3 (Details/Examples)            │
├─────────────────────────────────────────┤
│  Section 4 (Application/Next Steps)     │
├─────────────────────────────────────────┤
│  Related Pages                           │
└─────────────────────────────────────────┘
```

### Content Block Types

1. **Explanatory Blocks**: Text-heavy sections explaining concepts
2. **Visual Blocks**: Diagrams, charts, matrices
3. **Interactive Blocks**: Expandable sections, tabbed content
4. **List/Table Blocks**: Structured comparisons or enumerations
5. **Call-to-Action Blocks**: Links to related content or GitHub
6. **Example Blocks**: Concrete scenarios or use cases

---

## Cross-Linking Strategy

### Explicit Cross-References

Pages include explicit "See X for more →" links when:

- Referencing a concept defined elsewhere
- Pointing to detailed implementation of a topic
- Suggesting related reading

### Related Pages Component

Every major page includes a "Related Pages" section showing:

- Contextually relevant pages (configured per page)
- Either complementary topics or next logical steps
- Typically 2-4 related pages

### Breadcrumb Navigation

Sub-pages show their position in hierarchy:

- Provides context
- Enables quick navigation to parent
- Reinforces mental model

---

## Mobile and Responsive Considerations

The information architecture accommodates small screens through:

1. **Collapsible Sections**: Complex pages use accordions/expandables
2. **Mobile Drawer**: Navigation compressed into mobile menu
3. **Priority Order**: Most important content appears first
4. **Simplified Visualizations**: Charts adapt for small screens

---

## Search and Discovery

While the site doesn't currently implement search, the information architecture supports discovery through:

1. **Clear Labeling**: Descriptive page titles and section headings
2. **Multiple Pathways**: Content reachable through multiple routes
3. **Comprehensive Index**: Concepts page serves as glossary
4. **External Search**: Content structure optimized for search engine indexing

---

## Hierarchical Outline (Full Site Map)

```
Career Topologies
│
├─ / (Home)
│  ├─ Hero Section
│  ├─ Audience Section
│  └─ Framework Section
│
├─ /about
│  ├─ Purpose
│  ├─ What Makes It Different
│  ├─ Core Components
│  ├─ Governance & Roles
│  ├─ Management Model
│  ├─ Professional Shapes
│  ├─ Career Topologies
│  └─ Ongoing Development
│
├─ /framework
│  ├─ Core Structure
│  ├─ Governance & Roles
│  ├─ Implementation Lifecycle
│  ├─ Critical Considerations
│  │
│  ├─ /leveling
│  │  ├─ Objectives
│  │  ├─ Guiding Principles
│  │  ├─ Typical Levels
│  │  ├─ Evaluation Elements
│  │  ├─ Impact × Autonomy Matrix
│  │  └─ Alignment with Topologies
│  │
│  ├─ /progression
│  │  ├─ Objectives
│  │  ├─ Pillar Structure
│  │  ├─ Software Engineering Example
│  │  ├─ Interactive Visualizations
│  │  ├─ Examples by Level
│  │  └─ Applicability
│  │
│  └─ /guidelines
│     ├─ Implementation Flow
│     ├─ How to Use
│     ├─ Roles and Responsibilities
│     ├─ Communication Best Practices
│     ├─ Promotion Process
│     ├─ Compensation and Titles
│     ├─ Governance and Updates
│     └─ Implementation Roadmap
│
├─ /concepts
│  ├─ 1. Career Topology
│  ├─ 2. Leveling
│  ├─ 3. Progression Pillars
│  ├─ 4. Shapes
│  ├─ 5. Role of the Ladder
│  ├─ 6. Governance and Roles
│  └─ 7. Evolution & Flexibility
│
├─ /manifesto
│  ├─ The 8 Principles
│  │  ├─ 1. Transparency
│  │  ├─ 2. Fair Recognition
│  │  ├─ 3. Equality
│  │  ├─ 4. Consistency
│  │  ├─ 5. Cooperation
│  │  ├─ 6. Diversity
│  │  ├─ 7. Ownership
│  │  └─ 8. Flexibility
│  └─ Compass Section
│
├─ /topologies
│  ├─ Overview
│  ├─ Y-Model
│  ├─ W-Model
│  ├─ Network Model
│  ├─ Comparative Summary
│  └─ Choosing a Topology
│
├─ /shapes
│  ├─ Overview
│  ├─ I-Shaped
│  ├─ T-Shaped
│  ├─ Pi-Shaped
│  ├─ Growth and Transitions
│  └─ Related Sections
│
├─ /management
│  ├─ Shared Responsibilities
│  ├─ Front-line Manager
│  ├─ Middle Manager
│  ├─ Top Manager
│  ├─ Developing New Leaders (link)
│  ├─ Future Considerations
│  │
│  └─ /developing-leaders
│     ├─ Why It Matters
│     ├─ Leadership Readiness Flowchart
│     └─ Best Practices
│
├─ /contributing
│  ├─ GitHub Repository
│  ├─ Ways to Contribute
│  ├─ Maintainers
│  ├─ Code of Conduct
│  └─ Start Contributing
│
└─ /references
   ├─ Professional Profile
   ├─ News and Articles
   ├─ Structures and Frameworks
   ├─ Studies, Laws and Principles
   └─ Leadership, Management and Teams
```

---

## Summary

The Career Topologies information architecture follows a **hub-and-spoke model** with a clear hierarchy, multiple navigation pathways, and extensive cross-linking. The structure supports:

1. **Multiple user journeys** (learning, implementing, contributing)
2. **Progressive disclosure** (overview → detail)
3. **Role-based access** (HR, managers, ICs, contributors)
4. **Topic exploration** (concepts, models, processes)
5. **Implementation support** (strategic → tactical → operational)

The architecture balances **comprehensiveness** (deep coverage of topics) with **usability** (clear paths, consistent structure) to serve diverse audience needs while maintaining a cohesive user experience.
