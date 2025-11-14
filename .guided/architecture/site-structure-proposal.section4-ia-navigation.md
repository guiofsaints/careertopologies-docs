## 4. Information Architecture and Navigation

### Site Organization Model

The Career Topologies site employs a **hub-and-spoke information architecture** organized around four primary content pillars. The home page serves as the central hub, with navigation pathways radiating outward to support different user intents and expertise levels.

**Organizational Principles:**

- **Progressive Depth**: Content flows from high-level philosophy (Manifesto, About) through structural models (Topologies, Leveling) to tactical implementation (Guidelines)
- **Modular Independence**: Each page provides complete context, enabling direct access without forced sequential reading
- **Multiple Entry Points**: Navigation supports exploratory browsing, targeted search, and role-based pathways
- **Visual Anchoring**: Interactive tools (charts, matrices, flowcharts) embedded at decision points within content hierarchy

### Content Pillars and Site Sections

#### Pillar 1: Foundational Concepts
**Purpose**: Establish philosophical and conceptual foundation  
**Audience**: All users, especially first-time visitors and values-driven stakeholders

- **Home** (`/`) - Landing page introducing framework value proposition and three topology models
- **About** (`/about`) - Comprehensive framework overview, project background, development philosophy
- **Manifesto** (`/manifesto`) - Eight guiding principles (Transparency, Fair Recognition, Equality, Growth Mindset, Evidence-Based, Continuous Feedback, Flexibility, Open & Evolving)
- **Core Concepts** (`/concepts`) - Definitional glossary for seven core terms (Topology, Level, Pillar, Proficiency, Impact, Autonomy, Shape)
- **Topologies** (`/topologies`) - Comparative analysis of Y-shaped, W-shaped, and Network career models

#### Pillar 2: Framework Structure
**Purpose**: Define framework components with implementation guidance  
**Audience**: HR teams, technology leaders, implementation teams

- **Framework Overview** (`/framework`) - Four core structural elements, governance model, implementation lifecycle
- **Leveling** (`/framework/leveling`) - Career level definitions using Impact×Autonomy dimensions, interactive leveling table, topology alignment diagrams
- **Progression Pillars** (`/framework/progression`) - Six competency dimensions (Delivery, Technical Domain, Collaboration, Autonomy, Initiative, Mentoring) with proficiency scales, radar charts, progression matrices
- **Guidelines** (`/framework/guidelines`) - Detailed implementation roadmap (8 phases, 52+ weeks), roles & responsibilities matrix, promotion processes, governance structures

#### Pillar 3: Specialized Topics
**Purpose**: Address specific use cases and deep-dive topics  
**Audience**: Individual contributors planning careers, managers developing leaders

- **Skill Profiles (Shapes)** (`/shapes`) - Professional skill profiles (I-shaped, T-shaped, Pi-shaped) and growth transitions
- **Management Levels** (`/management`) - Three management layers (Front-line, Middle, Top) with responsibilities and expectations
- **Developing Leaders** (`/management/developing-leaders`) - Leadership readiness assessment, interim management experiences, decision framework with interactive flowchart

#### Pillar 4: Community Resources
**Purpose**: Enable validation, contribution, and ongoing engagement  
**Audience**: Evidence-seekers, contributors, community members

- **References** (`/references`) - 28 academic and professional citations organized into 5 categories (Professional Profile, News & Articles, Structures & Frameworks, Studies & Laws, Leadership & Management)
- **Contributing** (`/contributing`) - Five contribution methods, GitHub workflow, code of conduct, 4-step onboarding process

### Sitemap Structure

```
Career Topologies
│
├── Home (/)
│   ├── Hero Section (Framework Introduction)
│   ├── Audience Identification
│   └── Framework Exploration Cards
│
├── Foundational Concepts
│   ├── About (/about)
│   ├── Manifesto (/manifesto)
│   ├── Core Concepts (/concepts)
│   └── Topologies (/topologies)
│       ├── Y-Model (Dual IC/Manager Tracks)
│       ├── W-Model (Tri-Track with Hybrid)
│       └── Network Model (Fluid Lateral Movement)
│
├── Framework Structure
│   ├── Framework Overview (/framework)
│   │   ├── Core Structure (4 Elements)
│   │   ├── Governance & Roles
│   │   └── Implementation Lifecycle
│   │
│   ├── Leveling (/framework/leveling)
│   │   ├── Level Definitions (6 Levels)
│   │   ├── Impact × Autonomy Matrix [Interactive]
│   │   └── Topology Alignment Diagrams
│   │
│   ├── Progression Pillars (/framework/progression)
│   │   ├── Six Pillars Overview
│   │   ├── Proficiency Radar Chart [Interactive]
│   │   └── Progression Matrix [Interactive]
│   │
│   └── Guidelines (/framework/guidelines)
│       ├── Framework Flow Diagram
│       ├── Roles & Responsibilities Matrix
│       ├── Implementation Timeline (Gantt)
│       └── Promotion Process Workflow
│
├── Specialized Topics
│   ├── Shapes (/shapes)
│   │   ├── I-Shaped (Deep Specialist)
│   │   ├── T-Shaped (Specialist + Breadth)
│   │   └── Pi-Shaped (Multi-Domain Expert)
│   │
│   └── Management (/management)
│       ├── Management Levels Overview
│       │   ├── Front-line Manager (Operational)
│       │   ├── Middle Manager (Tactical)
│       │   └── Top Manager (Strategic)
│       │
│       └── Developing Leaders (/management/developing-leaders)
│           └── Leadership Readiness Flowchart [Interactive]
│
└── Community Resources
    ├── References (/references)
    │   ├── Professional Profile (7)
    │   ├── News & Articles (3)
    │   ├── Structures & Frameworks (6)
    │   ├── Studies, Laws & Principles (5)
    │   └── Leadership & Management (7)
    │
    └── Contributing (/contributing)
        ├── Ways to Contribute (5 Methods)
        ├── GitHub Workflow
        └── Code of Conduct
```

### Navigation System Design

#### Primary Navigation (Header)

**Location**: Global site header, persistent across all pages  
**Structure**: Horizontal menu bar with six primary links

```
[Home] [About] [Framework] [Concepts] [Manifesto] [Contributing]
```

**Design Rationale**:
- **Minimal Cognitive Load**: Six items avoid choice paralysis while providing essential entry points
- **Philosophy-First**: Manifesto and Concepts emphasized to establish values alignment before deep exploration
- **Framework as Gateway**: Single Framework link serves as hub for Leveling, Progression, and Guidelines sub-pages
- **Community Prominence**: Contributing elevated to primary navigation, signaling open-source values

**Navigation Pattern**: Click primary item to navigate; no dropdown menus to maintain simplicity and mobile compatibility

#### Secondary Navigation (In-Page)

**Breadcrumb Trail**  
**Location**: Below header on sub-pages  
**Pattern**: `Home > Section > Page`

**Examples**:
- `Home > Framework > Leveling`
- `Home > Management > Developing Leaders`

**Functionality**:
- Shows hierarchical position within site structure
- Each breadcrumb is clickable for quick up-navigation
- Only appears on second-level and third-level pages
- Home icon on first breadcrumb for visual clarity

**Related Pages Module**  
**Location**: Bottom of each content page  
**Variants**:

1. **Explore Variant** (Conceptual/Landing Pages)
   - Grid of 4-6 cards with icons, titles, short descriptions
   - Encourages broad topic exploration
   - Used on: Home, About, Concepts

2. **Learn Variant** (Framework Pages)
   - Emphasizes progression through framework components
   - Title: "Learn More" or "Next Steps"
   - Used on: Framework, Leveling, Progression

3. **Related Variant** (Specialized Pages)
   - Compact grid of contextually relevant pages
   - Algorithm: Page category matching + manual overrides
   - Used on: Shapes, Management, Topologies

**Intelligence**: Powered by unified configuration mapping each page to 3-6 contextually appropriate suggestions, preventing circular links (never links to itself)

#### Footer Navigation

**Location**: Global site footer, four-column layout  
**Structure**: Comprehensive site map organized by content type

**Column 1: About Career Topologies**
- Project description (2-3 sentences)
- Social media links: Instagram, LinkedIn, YouTube, GitHub
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
- GitHub Issues & Feedback
- GitHub Discussions

**Column 4: Community**
- GitHub Repository
- MIT License
- Releases & Changelog
- Sponsor Project

**Design Rationale**:
- **Comprehensive Access**: All 14 pages accessible from footer
- **Contextual Grouping**: Framework elements, resources, and community clearly separated
- **GitHub Integration**: Multiple GitHub touchpoints reinforce open-source positioning
- **Redundancy by Design**: Critical pages (About, Manifesto, Contributing) appear in both primary nav and footer

#### Mobile Navigation Adaptations

**Responsive Patterns**:
- **Header**: Six primary links collapse into hamburger menu on screens <768px
- **Breadcrumbs**: Remain visible but font size reduces; long page titles truncate with ellipsis
- **Related Pages**: Cards shift from 2-3 column grid to single column stack
- **Footer**: Four columns collapse to single column accordion (expandable sections)
- **Interactive Charts**: Scale down with simplified labeling; radar charts maintain readability

### Navigation Pathways by Audience

#### Technology Leaders & Executives
**Primary Journey**: Evaluation → Strategic Decision → Implementation Planning

**Recommended Path**:
1. **Entry**: Home → About (understand scope)
2. **Philosophy**: Manifesto (values alignment check)
3. **Structure**: Topologies (Y vs. W vs. Network selection)
4. **Evidence**: References (validate with research)
5. **Implementation**: Framework → Guidelines (timeline and resource assessment)
6. **Exit**: Contributing (engage with community) or internal decision-making

**Navigation Support**: Related pages on About link to Manifesto and Framework; Topologies page links directly to Framework for implementation guidance

#### HR Professionals & People Teams
**Primary Journey**: Design → Implementation → Governance

**Recommended Path**:
1. **Entry**: Home → Framework
2. **Structure**: Leveling (understand level definitions and criteria)
3. **Competencies**: Progression Pillars (define proficiency expectations)
4. **Operations**: Guidelines (roles matrix, promotion processes, timelines)
5. **Tools**: Interactive Leveling Table, Progression Matrix (calibration references)
6. **Governance**: Framework (governance model) → Guidelines (ongoing maintenance)
7. **Exit**: Contributing (share case study or request features)

**Navigation Support**: Framework page serves as hub with prominent links to all three sub-pages (Leveling, Progression, Guidelines)

#### Engineering Managers & Team Leaders
**Primary Journey**: Understanding → Application → Conversations

**Recommended Path**:
1. **Entry**: Home → Concepts (build shared vocabulary)
2. **Levels**: Leveling (understand level expectations for team members)
3. **Competencies**: Progression Pillars (assessment framework for 1-on-1s)
4. **Profiles**: Shapes (understand I, T, Pi development trajectories)
5. **Leadership**: Management → Developing Leaders (for IC-to-manager transitions)
6. **Tools**: Proficiency Radar Chart (visualize team member progress)
7. **Exit**: Guidelines (reference promotion process when advocating for direct reports)

**Navigation Support**: Progression page links to both Leveling (levels context) and Shapes (skill profiles); Management page links prominently to Developing Leaders sub-page

#### Individual Contributors
**Primary Journey**: Exploration → Self-Assessment → Planning

**Recommended Path**:
1. **Entry**: Home → Concepts (understand terminology)
2. **Options**: Topologies (explore IC vs. Manager vs. Hybrid paths)
3. **Expectations**: Leveling (understand current level and next level criteria)
4. **Growth**: Progression Pillars (self-assess proficiency across six dimensions)
5. **Profile**: Shapes (identify current shape and growth strategy)
6. **Tools**: Proficiency Radar Chart (visualize strengths and gaps)
7. **Exit**: Return to manager with informed questions, or explore Management if considering leadership

**Navigation Support**: Concepts page cross-links to all major framework components (Topologies, Leveling, Progression, Shapes); Related Pages module on Leveling links to Progression

### Content Discovery Mechanisms

**Primary Discovery Methods**:

1. **Top-Down Navigation** (Primary Nav → Sub-pages)
   - Suits first-time visitors building conceptual understanding
   - Emphasizes foundational concepts before implementation details

2. **Footer Direct Access** (Any page from anywhere)
   - Suits returning visitors with specific goals
   - Enables quick jumps without hierarchical traversal

3. **Breadcrumb Up-Navigation** (Child → Parent → Home)
   - Suits users in deep content needing orientation
   - Supports hierarchical mental models

4. **Related Pages Suggestions** (Context-aware recommendations)
   - Suits exploratory learning and non-linear discovery
   - Algorithm surfaces 3-6 relevant next pages based on category and manual curation

5. **In-Content Cross-Links** (Contextual references)
   - Suits deep research and just-in-time learning
   - Example: Concepts page defines "Career Level" and links to Leveling page for details

**Search Functionality**: Not currently implemented; navigation relies on clear taxonomy and multiple pathways to same content

### Information Architecture Strengths

1. **Depth Without Complexity**: Maximum three-level hierarchy (Home → Framework → Leveling) prevents deep nesting
2. **Multiple Valid Paths**: Same content reachable via primary nav, footer, breadcrumbs, related pages, and in-content links
3. **Category Coherence**: Clear groupings (Foundational, Framework, Specialized, Community) reduce cognitive load
4. **Visual Reinforcement**: Interactive tools positioned at key decision points (Leveling Table at level definitions, Radar Chart at proficiency assessment)
5. **Progressive Disclosure**: High-level overviews (Framework, About) link to detailed sub-pages (Leveling, Progression, Guidelines)
6. **Community Integration**: GitHub links at multiple touchpoints (footer, Contributing page, References page) signal open-source engagement
7. **Redundant Critical Paths**: Essential journeys (Manifesto → Framework → Guidelines) supported by multiple navigation options to prevent dead ends

---

