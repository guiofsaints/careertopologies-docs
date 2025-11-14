# Information Architecture

## Site Map and Content Structure

Career Topologies follows a hub-and-spoke information architecture with the home page as the central hub, organized into four primary content pillars: **Foundational Concepts**, **Framework Structure**, **Specialized Topics**, and **Community Resources**.

---

## Content Hierarchy Tree

```
Career Topologies (/)
│
├── Foundational Concepts
│   ├── About (/about)
│   │   └── Overview of Career Topologies, its purpose, and development
│   │
│   ├── Concepts (/concepts)
│   │   └── Core concepts: Topology, Leveling, Pillars, Shapes, Roles, Governance, Evolution
│   │
│   ├── Manifesto (/manifesto)
│   │   └── The 8 Principles: Transparency, Fair Recognition, Equality, Consistency,
│   │       Cooperation, Diversity, Ownership, Flexibility
│   │
│   └── Topologies (/topologies)
│       ├── Y-Model (Management vs Technical tracks)
│       ├── W-Model (Tri-track with hybrid paths)
│       ├── Network Model (Fluid lateral movement)
│       └── Comparative summary and selection guidance
│
├── Framework Structure (/framework)
│   ├── Framework Overview (/framework)
│   │   ├── Core Structure (4 elements)
│   │   ├── Governance & Roles
│   │   ├── Implementation Lifecycle (4 phases)
│   │   └── Critical Considerations
│   │
│   ├── Leveling (/framework/leveling)
│   │   ├── Objectives and Principles
│   │   ├── Typical Levels (6 levels from Junior to C-Level)
│   │   ├── Evaluation Elements
│   │   ├── Impact × Autonomy Matrix [VISUAL]
│   │   ├── Topology Alignment Diagrams [VISUAL]
│   │   └── Integration with Career System
│   │
│   ├── Progression Pillars (/framework/progression)
│   │   ├── Pillar Objectives
│   │   ├── Pillar Structure (6 pillars)
│   │   ├── Software Engineering Example
│   │   ├── Proficiency Radar Chart [VISUAL]
│   │   ├── Progression Matrix [VISUAL]
│   │   ├── Examples by Level
│   │   └── Applicability
│   │
│   └── Guidelines (/framework/guidelines)
│       ├── Framework Implementation Flow [VISUAL]
│       ├── How to Use the Framework
│       │   ├── Ownership and Roles
│       │   ├── Integration Points
│       │   └── Roles & Responsibilities Matrix [VISUAL]
│       ├── Communication Best Practices
│       ├── Promotion Process Guide
│       ├── Compensation and Titles
│       ├── Governance and Updates
│       └── Implementation Roadmap [VISUAL - 8 phases, 24 weeks]
│
├── Specialized Topics
│   ├── Shapes (/shapes)
│   │   ├── Professional Shapes
│   │   │   ├── I-Shaped (Deep specialists)
│   │   │   ├── T-Shaped (Specialists with cross-disciplinary awareness)
│   │   │   └── Pi-Shaped (Multi-domain experts)
│   │   └── Growth and Transitions
│   │
│   └── Management (/management)
│       ├── Shared Responsibilities
│       ├── Management Levels
│       │   ├── Front-line Manager (Operational)
│       │   ├── Middle Manager (Tactical)
│       │   └── Top Manager (Strategic)
│       ├── Developing New Leaders (/management/developing-leaders)
│       │   ├── Why It Matters
│       │   ├── Leadership Readiness Flowchart [VISUAL - 4 steps, 3 outcomes]
│       │   └── Best Practices
│       └── Future Considerations
│
└── Community Resources
    ├── References (/references)
    │   ├── Professional Profile (7 references)
    │   ├── News and Articles (3 references)
    │   ├── Structures and Frameworks (6 references)
    │   ├── Studies, Laws and Principles (5 references)
    │   └── Leadership, Management and Teams (7 references)
    │
    └── Contributing (/contributing)
        ├── GitHub Repository
        ├── Ways to Contribute
        │   ├── Suggest Improvements
        │   ├── Add Case Studies
        │   ├── Build Tools
        │   ├── Translate Content
        │   └── Join the Discussion
        ├── Maintainers
        ├── Code of Conduct
        └── Start Contributing (4-step process)
```

---

## Navigation Patterns

### Primary Navigation (Top Nav)

Location: Main header navigation bar

**Structure:**
```
[Home] [About] [Framework] [Concepts] [Manifesto] [Contributing]
```

**Characteristics:**
- Emphasizes foundational concepts and framework entry point
- Minimal to avoid cognitive overload
- Framework serves as gateway to detailed sub-pages

---

### Footer Navigation

Location: Site footer organized into 4 columns

**Structure:**

**Column 1: About Career Topologies**
- Project description
- Social media links (Instagram, LinkedIn, YouTube, GitHub)
- Sponsorship link

**Column 2: Framework**
- Overview
- Manifesto
- Core Concepts
- Career Topologies
- Career Shapes
- Management Levels

**Column 3: Resources**
- About
- References
- Contributing
- Issues & Feedback (GitHub)
- Discussions (GitHub)

**Column 4: Community**
- GitHub Repository
- MIT License
- Releases
- Sponsor Project

**Characteristics:**
- Comprehensive access to all site sections
- Emphasizes community and open-source nature
- Direct links to GitHub for engagement

---

### Breadcrumb Navigation

Location: Below header on content pages

**Structure:**
```
Home > Framework > Leveling
Home > Management > Developing Leaders
```

**Configuration:**
- Hierarchical path showing parent-child relationships
- Only appears on sub-pages (not home or top-level pages)
- Supports: Framework sub-pages and Management sub-pages

**Characteristics:**
- Aids orientation in deep content sections
- Enables quick navigation up the hierarchy
- Home icon on first breadcrumb for visual clarity

---

### Related Pages Navigation

Location: Bottom of each content page

**Variants:**

1. **Explore Variant** - Used on conceptual/landing pages
   - Grid of 4-6 cards with icons, titles, and descriptions
   - Encourages broad exploration of related topics
   - Examples: Home page (FrameworkSection), About page, Concepts page

2. **Learn Variant** - Used on framework pages
   - Emphasizes deeper learning journey
   - Title: "Learn More"
   - Links to sub-pages and related framework components

3. **Related Variant** - Used on detailed content pages
   - Compact grid of related pages
   - Context-aware suggestions based on current page
   - Examples: Leveling → Progression, Guidelines → Contributing

**Intelligence:**
- Powered by `UnifiedRelatedPagesConfig`
- Page-specific configurations with fallback logic
- Categorizes pages as Framework, Concepts, Resources, or Specialized
- Prevents circular navigation (never links to itself)

---

## Content Flows and User Journeys

### Journey 1: Exploring the Framework (New Visitor)

**Entry Point:** Home page

**Flow:**
1. **Home** (/) - Hero introduces Career Topologies concept and 3 topology models
2. **Who is this for?** - Identifies if user is in target audience
3. **Explore the Framework** - Six cards offer entry points:
   - **For philosophy**: Manifesto → Concepts → About
   - **For implementation**: Framework → Leveling → Progression → Guidelines
   - **For community**: Contributing

**Key Decision Point:** After Concepts or Manifesto, users typically branch to:
- Framework Overview (ready to implement)
- Topologies (exploring structural options)
- References (seeking evidence/validation)

**Typical Path for HR/People Ops:**
Home → Framework → Guidelines → Leveling → Progression → Contributing (to provide feedback)

**Typical Path for Managers:**
Home → Management → Developing Leaders → Progression Pillars → Framework Guidelines

**Typical Path for ICs:**
Home → Concepts → Shapes → Topologies → Leveling → Progression

---

### Journey 2: Implementing a Career Framework (Organizational Leader)

**Entry Point:** Framework page or About page

**Flow:**
1. **Framework Overview** - Understand 4 core elements and implementation lifecycle
2. **Choose Topology** - Navigate to Topologies page
   - Evaluate Y vs W vs Network model
   - Review comparative summary table
3. **Define Levels** - Navigate to Leveling page
   - Review typical 6-level structure
   - Explore Impact × Autonomy Matrix
   - See topology alignment diagrams
4. **Establish Pillars** - Navigate to Progression Pillars page
   - Understand 6 standard pillars
   - Review examples by level
   - View proficiency visualizations
5. **Operationalize** - Navigate to Guidelines page
   - Review Roles & Responsibilities Matrix
   - Study Implementation Roadmap (8 phases, 24 weeks)
   - Understand promotion process
   - Plan governance structure
6. **Engage Community** - Navigate to Contributing
   - Submit case study
   - Request feedback via GitHub Discussions

**Visual Components Support:** Each step includes interactive diagrams/charts to make concepts concrete

---

### Journey 3: Career Development Conversation (Manager-IC)

**Entry Point:** Progression Pillars or Leveling page

**Flow:**
1. **Progression Pillars** - Manager and IC review 6 pillars
   - Use Proficiency Radar Chart to visualize current state
   - Select target level (e.g., Mid → Senior)
   - Compare current vs target proficiency
2. **Leveling** - Review expectations for target level
   - Click to expand level details in Interactive Leveling Table
   - Understand impact scope, autonomy, complexity dimensions
3. **Shapes** - Discuss professional profile
   - Identify current shape (I, T, or Pi)
   - Explore growth transitions
4. **Topologies** - Clarify path options
   - If considering leadership: Review Y-Model bifurcation
   - If staying IC: Review Senior → Staff → Principal progression
5. **Management (optional)** - If exploring leadership
   - Navigate to Management page
   - Review 3 layers of management
   - Navigate to Developing Leaders
   - Review Leadership Readiness Flowchart

**Outcome:** Clear development plan tied to specific pillars and level expectations

---

### Journey 4: Validating Framework with Evidence (Skeptical Stakeholder)

**Entry Point:** About or References page

**Flow:**
1. **About** - Understand framework origins and structure
2. **Manifesto** - Review 8 principles for alignment with values
3. **References** - Explore 28 citations organized by:
   - Professional Profile (7) - T-shaped, Full Cycle, Engineer/Manager Pendulum
   - News & Articles (3) - Pay equity cases, discrimination lawsuits
   - Frameworks (6) - Dropbox, SFIA, progression.fyi, levels.fyi
   - Studies (5) - Peter Principle, Dunbar's Number, Maslow
   - Management (7) - Buffer, Google, Team Topologies, OKRs
4. **Framework** - See how principles translate to structure
5. **Contributing** - Engage with community for questions/concerns

**Key Validation Points:**
- Academic grounding (Maslow, Dunbar, Metcalfe's Law)
- Industry case studies (Netflix, Slack, Google, Buffer, Dropbox)
- Open-source transparency (MIT License, GitHub)
- Evidence of pay equity problems (news articles justifying need)

---

## Visual Components and Dashboard Elements

### Interactive Charts and Widgets

#### 1. **Interactive Leveling Table** (Leveling page)
- **Type**: Expandable accordion table
- **Data**: 6 career levels (Junior → Director/VP/C-Level)
- **Interaction**: Click to expand full details (autonomy, complexity, expectations)
- **Purpose**: Provide at-a-glance level overview with drill-down capability
- **Location in Journey**: "Define Levels" step in implementation flow

---

#### 2. **Impact × Autonomy Matrix** (Leveling page)
- **Type**: 2D scatter plot
- **Axes**: Scope of Impact (x-axis), Degree of Autonomy (y-axis)
- **Data Points**: 6 levels positioned relationally
- **Interaction**: Hover to reveal level name
- **Purpose**: Visualize level relationships beyond simple hierarchy
- **Location in Journey**: Leveling exploration for pattern recognition

---

#### 3. **Proficiency Radar Chart** (Progression Pillars page)
- **Type**: Interactive spider/radar chart
- **Axes**: 6 progression pillars radiating from center
- **Scale**: 1-5 proficiency per pillar
- **Interaction**: Level selector tabs (Junior → Distinguished)
- **Side Panel**: Horizontal bar graphs showing numerical values
- **Purpose**: Make abstract "seniority" concrete and multi-dimensional
- **Location in Journey**: Career development conversations, self-assessment

---

#### 4. **Progression Matrix** (Progression Pillars page)
- **Type**: Heat map table
- **Rows**: 5 career levels (Junior → Principal)
- **Columns**: 6 progression pillars
- **Color Intensity**: Darker = higher proficiency (1-5 scale)
- **Purpose**: Show proficiency growth patterns across levels and pillars
- **Location in Journey**: Calibration, understanding level gaps

---

#### 5. **Leadership Readiness Flowchart** (Developing Leaders page)
- **Type**: Interactive process flowchart
- **Stages**: 4 sequential steps
- **Outcomes**: 3 terminal states (Promotion, Further Development, Exit)
- **Interaction**: Hover on steps for detail tooltips
- **Mobile Adaptation**: Horizontal (desktop) vs Vertical (mobile) layouts
- **Purpose**: Demystify leadership development process
- **Location in Journey**: Manager exploring leadership pipeline

---

#### 6. **Framework Flow Diagram** (Guidelines page)
- **Type**: Sequential process diagram
- **Steps**: 4 stages (Topology → Ladder → Levels → Pillars)
- **Purpose**: Visualize implementation sequence
- **Location in Journey**: "Operationalize" step before detailed planning

---

#### 7. **Roles & Responsibilities Matrix** (Guidelines page)
- **Type**: Responsibility matrix (RACI-like)
- **Rows**: 4 roles (HR, Team Leads, Managers, Employees)
- **Columns**: 6 responsibilities (Governance, Reviews, Development, Feedback, Promotion, Calibration)
- **Cells**: Primary, Secondary, Support, None
- **Purpose**: Clarify ownership to prevent gaps and conflicts
- **Location in Journey**: Governance planning phase

---

#### 8. **Implementation Timeline** (Guidelines page)
- **Type**: Gantt chart
- **Duration**: 24 weeks (8 phases)
- **Visual**: Horizontal bars showing phase durations and overlaps
- **Phases**: Kickoff → Select Topology → Define Levels/Pillars → Align Principles → Pilot → Rollout → Embed → Maintain
- **Purpose**: Set realistic expectations for implementation timeline
- **Location in Journey**: Planning and stakeholder alignment

---

#### 9. **Topology Alignment Diagrams** (Leveling page)
- **Type**: Side-by-side structural diagrams
- **Models**: Y-Shape, W-Shape, Network
- **Content**: Level-to-path mappings showing how 6 levels distribute across topology tracks
- **Purpose**: Show how leveling integrates with topology choice
- **Location in Journey**: Connecting levels to organizational structure

---

#### 10. **Topology Model Diagrams** (Topologies page)
- **Type**: Career path diagrams
- **Models**: Y-Model, W-Model, Network Model
- **Visual**: Path bifurcations, convergence points, lateral connections
- **Responsive**: Image on left (desktop) or top (mobile), text on right/bottom
- **Purpose**: Make abstract topology concepts visually concrete
- **Location in Journey**: Topology selection and comparison

---

## Search and Discovery Patterns

### Primary Discovery Methods

1. **Top-down Navigation** (Primary Nav → Sub-pages)
   - Suitable for first-time visitors
   - Emphasizes conceptual understanding before details

2. **Footer Deep Links** (Direct to any page)
   - Suitable for returning visitors
   - Enables quick access to known resources

3. **Breadcrumb Up-navigation** (Child → Parent → Home)
   - Suitable for users in deep content
   - Supports hierarchical orientation

4. **Related Pages Suggestions** (Context-aware recommendations)
   - Suitable for exploratory learning
   - Encourages non-linear discovery

5. **In-content Links** (Contextual cross-references)
   - Suitable for deep research
   - Example: Concepts page links to /topologies, /shapes, /framework

---

## Content Organization Principles

1. **Progressive Disclosure**: Framework starts with overview, drills down to Leveling/Pillars/Guidelines
2. **Modular Independence**: Each page is self-contained with complete context
3. **Consistent Structure**: All content pages use PageHero → Sections → RelatedPages pattern
4. **Visual Anchoring**: Key concepts paired with interactive diagrams/charts
5. **Multiple Entry Points**: No assumption of linear reading path
6. **Redundant Navigation**: Same content reachable via top nav, footer, breadcrumbs, and related pages
7. **Category Coherence**: Pages grouped by Framework, Concepts, Resources, Specialized
8. **Link Density Balance**: Average 4-6 related page suggestions to avoid choice paralysis

---

## Mobile Responsiveness Patterns

Visual components adapt to mobile with specific strategies:

- **Flowcharts**: Horizontal flow (desktop) → Vertical flow (mobile)
- **Tables/Matrices**: Horizontal scroll with sticky column headers
- **Radar Charts**: Scale down with simplified labeling
- **Images**: Full-width on mobile, side-by-side on desktop
- **Navigation**: Hamburger menu pattern (assumed based on standard practice)
- **Related Pages**: 1 column (mobile) → 2-3 columns (tablet/desktop)

---

## Summary: Information Architecture Strengths

1. **Clear Hub-and-Spoke**: Home serves as orientation point
2. **Depth Without Clutter**: 3-level maximum hierarchy (Home → Framework → Leveling)
3. **Multiple Navigation Paths**: Suits different user mental models
4. **Visual Reinforcement**: Charts/diagrams embedded at relevant decision points
5. **Community Integration**: GitHub links at multiple touchpoints
6. **Academic Grounding**: References page establishes credibility
7. **Implementation-Ready**: Guidelines page bridges theory to practice
8. **Role-Based Journeys**: Different paths for HR, Managers, ICs, Leaders
