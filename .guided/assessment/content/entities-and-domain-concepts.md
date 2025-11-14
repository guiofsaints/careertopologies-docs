# Domain Entities and Concepts

## Overview

This document extracts and organizes the domain model of the Career Topologies framework based on analysis of all user-facing content. It identifies entities, their attributes, relationships, workflows, states, and key metrics visible through the application.

---

## Core Domain Entities

### 1. Career Level
**Description:** Hierarchical position in a career track indicating scope, autonomy, and impact

**Attributes:**
- Level Number (1-8)
- Level Name (e.g., "Junior IC", "Senior IC", "Staff IC", "Principal IC")
- Track Type (Individual Contributor vs Manager)
- Scope (Individual → Team → Department → Organization)
- Autonomy Level (Guided → Independent → Leading → Defining)
- Impact Dimension (Task → Feature → Product → Platform → Ecosystem)
- Required Proficiencies (mapped to 6 Pillars)
- Typical Responsibilities
- Decision-making Authority

**Relationships:**
- Belongs to: Career Track (IC or Manager)
- Maps to: Professional Shape (I, T, Pi)
- Defined by: Proficiency across Progression Pillars
- Positioned in: Topology Model (Y, W, Network)

**States/Lifecycle:**
- Entry criteria
- Progression criteria
- Promotion evaluation
- Level maintenance

**Visibility:** Leveling page (interactive table), Impact×Autonomy Matrix, Topology Alignment Diagrams

---

### 2. Progression Pillar
**Description:** Core competency dimension for professional development

**Attributes:**
- Pillar Name (6 total):
  1. Technical Expertise
  2. Problem Solving & Innovation
  3. Communication & Collaboration
  4. Leadership & Influence
  5. Delivery & Execution
  6. Learning & Adaptability
- Pillar Description
- Proficiency Levels (1-5 scale)
- Level-specific Expectations
- Skill Examples per Level
- Assessment Criteria

**Relationships:**
- Defines: Career Level requirements
- Measured by: Proficiency Radar Chart
- Differs across: Professional Shapes

**States:**
- Developing
- Proficient
- Expert
- Master
- Thought Leader

**Visibility:** Progression Pillars page (radar chart, progression matrix, examples)

---

### 3. Career Topology
**Description:** Structural model defining career paths in an organization

**Attributes:**
- Topology Type:
  - **Y-Model:** IC and Manager tracks diverge after mid-level
  - **W-Model:** IC, Manager, and Technical Lead tracks with bidirectional movement
  - **Network Model:** Fluid transitions based on projects and skills
- Number of Tracks (1, 2, or 3+)
- Transition Rules
- Flexibility Level
- Organizational Size Fit
- Cultural Alignment

**Relationships:**
- Contains: Career Tracks
- Supports: Professional Shapes
- Enables: Career Transitions

**Comparative Attributes:**
| Aspect | Y-Model | W-Model | Network Model |
|--------|---------|---------|---------------|
| Tracks | 2 (IC, Manager) | 3+ (IC, Manager, Tech Lead) | Fluid/Multiple |
| Flexibility | Low | Medium | High |
| Best For | Traditional orgs | Growing tech orgs | Innovative/startup environments |
| Transitions | One-time fork | Bidirectional | Continuous/dynamic |

**Visibility:** Topologies page (diagrams, comparative table)

---

### 4. Professional Shape
**Description:** Skill profile characterizing breadth vs depth of expertise

**Attributes:**
- Shape Type:
  - **I-Shaped:** Deep expertise in single domain
  - **T-Shaped:** Deep expertise in one domain + broad knowledge across others
  - **Pi-Shaped:** Deep expertise in two domains + broad knowledge
- Primary Domain(s)
- Secondary Domains
- Breadth Score
- Depth Score(s)
- Learning Path

**Relationships:**
- Associated with: Career Levels
- Influences: Role Design
- Evolves through: Progression Pillars

**States:**
- Emerging specialist (I)
- Developing breadth (I → T)
- Multi-specialist (T → Pi)

**Visibility:** Shapes page (descriptions, examples)

---

### 5. Management Level
**Description:** Hierarchical management role with specific responsibilities

**Attributes:**
- Level Name:
  1. **First-Line Manager:** Leads individual contributors
  2. **Middle Manager:** Leads managers and complex initiatives
  3. **Senior Leader:** Sets strategy and leads departments
- Typical Team Size
- Reporting Structure
- Key Responsibilities
- Required Competencies
- Decision Authority
- Strategic Scope

**Relationships:**
- Part of: Manager Career Track
- Progression from: IC Track (via Y/W topology)
- Develops via: Leadership Development Process

**Visibility:** Management page (tables, lists), Developing Leaders page (flowchart)

---

### 6. Leadership Readiness State
**Description:** Stage in the leadership development process

**Attributes:**
- Readiness Phase:
  1. **Assessment:** Evaluate interest, skills, and organizational need
  2. **Preparation:** Training, shadowing, mentorship
  3. **Transition:** Trial period with support
  4. **Consolidation:** Full role assumption with ongoing development
- Outcome Type:
  - Promoted to manager
  - Continues as senior IC
  - Needs more development
- Assessment Criteria
- Support Mechanisms
- Timeline

**Relationships:**
- Transition from: IC Track to Management Track
- Evaluated via: Progression Pillars assessment
- Supported by: Framework Guidelines

**Visibility:** Developing Leaders page (Leadership Readiness Flowchart)

---

### 7. Framework Component
**Description:** Structural element of the Career Topologies framework

**Attributes:**
- Component Name:
  1. **Career Topologies (Y, W, Network)**
  2. **Career Levels & Progressions**
  3. **Proficiency Pillars**
  4. **Professional Shapes**
- Component Purpose
- Implementation Difficulty
- Interdependencies
- Customization Options

**Relationships:**
- Assembled into: Complete Framework
- Governed by: Framework Governance
- Implemented via: Implementation Lifecycle

**Visibility:** About page, Framework page

---

### 8. Implementation Phase
**Description:** Stage in the framework adoption lifecycle

**Attributes:**
- Phase Name:
  1. **Assessment:** Current state analysis
  2. **Design:** Framework customization
  3. **Pilot:** Small-scale testing
  4. **Rollout:** Organization-wide deployment
- Phase Duration (typical)
- Key Activities
- Deliverables
- Success Criteria
- Roles Involved

**Relationships:**
- Part of: Implementation Lifecycle
- Supported by: Framework Guidelines
- Executed by: Implementation Team

**Visibility:** Framework page (lifecycle), Guidelines page (timeline Gantt chart)

---

## Domain Relationships Map

```
Career Topologies Framework
│
├── Career Topology (Y/W/Network)
│   ├── Career Track (IC, Manager, Tech Lead)
│   │   ├── Career Level (1-8)
│   │   │   ├── Proficiency Requirements (6 Pillars)
│   │   │   ├── Impact×Autonomy Position
│   │   │   └── Professional Shape Alignment
│   │   └── Management Level (First-Line, Middle, Senior)
│   │
│   └── Career Transitions
│       └── Leadership Readiness States
│
├── Progression Pillars (6)
│   ├── Technical Expertise
│   ├── Problem Solving & Innovation
│   ├── Communication & Collaboration
│   ├── Leadership & Influence
│   ├── Delivery & Execution
│   └── Learning & Adaptability
│
├── Professional Shapes (I, T, Pi)
│
└── Implementation Lifecycle (4 Phases)
    ├── Roles & Responsibilities
    └── Governance Structure
```

---

## Key Workflows

### 1. Career Progression Workflow
**Actors:** Individual Contributor, Manager, HR/People Team

**Steps:**
1. **Self-Assessment:** IC evaluates proficiency across 6 pillars
2. **Manager Review:** Manager validates assessment and adds observations
3. **Level Evaluation:** Compare proficiency against next level requirements
4. **Gap Identification:** Identify specific pillar gaps
5. **Development Plan:** Create targeted development activities
6. **Continuous Feedback:** Regular check-ins on progress
7. **Promotion Consideration:** Formal evaluation when ready
8. **Level Transition:** Update title, responsibilities, compensation

**States:**
- At current level
- Developing toward next level
- Ready for promotion review
- Promoted
- Progressed to new level

**Visibility:** Progression page (matrix), Leveling page (level definitions)

---

### 2. Leadership Development Workflow
**Actors:** IC considering management, Current Manager, Senior Leader, HR

**Steps:**
1. **Interest Expression:** IC expresses management interest
2. **Initial Assessment:** Evaluate current competencies and gaps
3. **Decision Point 1:** Does IC meet baseline criteria?
   - Yes → Proceed to preparation
   - No → Continue as senior IC or develop further
4. **Preparation Phase:** Training, shadowing, mentorship (6-12 months)
5. **Trial Opportunity:** Small team lead or project management
6. **Performance Evaluation:** Assess effectiveness during trial
7. **Decision Point 2:** Ready for full management role?
   - Yes → Promote to First-Line Manager
   - Partial → Extended development
   - No → Return to IC track
8. **Transition Support:** Onboarding as manager with mentor

**Outcomes:**
- Promoted to manager
- Continues as senior IC
- Needs more development

**Visibility:** Developing Leaders page (interactive flowchart)

---

### 3. Framework Implementation Workflow
**Actors:** Executive Sponsor, Implementation Team, People/HR Team, Managers, Employees

**Steps:**
1. **Assessment (Weeks 1-4)**
   - Analyze current career structure
   - Identify gaps and pain points
   - Define goals and success metrics
   
2. **Design (Weeks 5-12)**
   - Choose topology model (Y, W, or Network)
   - Define career levels and criteria
   - Map proficiency pillars to roles
   - Create progression guidelines
   - Design governance structure
   
3. **Pilot (Weeks 13-24)**
   - Select pilot department/team
   - Train managers and ICs
   - Apply framework to pilot group
   - Collect feedback and iterate
   
4. **Rollout (Weeks 25-52+)**
   - Organization-wide training
   - Apply framework to all roles
   - Launch supporting tools (leveling guides, progression tracking)
   - Establish regular calibration cycles

**Critical Roles:**
- Executive Sponsor: Strategic alignment, resources
- Implementation Lead: Project management, coordination
- People/HR Team: Policy integration, compensation alignment
- Department Heads: Change management, feedback

**Visibility:** Framework page (lifecycle), Guidelines page (timeline, roles matrix)

---

### 4. Topology Selection Workflow
**Actors:** Leadership Team, HR/People Team, Implementation Team

**Steps:**
1. **Organization Analysis**
   - Size and growth stage
   - Industry and culture
   - Current career paths
   
2. **Model Evaluation**
   - Review Y, W, Network models
   - Assess fit for organization
   - Consider flexibility needs
   
3. **Stakeholder Input**
   - Survey employees
   - Consult department heads
   - Review industry benchmarks
   
4. **Model Selection**
   - Choose primary topology
   - Define adaptation needs
   - Document rationale
   
5. **Communication**
   - Announce chosen model
   - Explain benefits and implications
   - Address concerns

**Decision Criteria:**
- Organizational size
- Growth trajectory
- Cultural fit
- Career flexibility needs
- Implementation complexity

**Visibility:** Topologies page (comparative table, model descriptions)

---

## Key Metrics and Measurements

### Proficiency Metrics (from Progression Pillars)
- **Proficiency Score:** 1-5 scale per pillar
- **Overall Proficiency:** Average or weighted score across 6 pillars
- **Gap Analysis:** Distance from next level requirements
- **Growth Trajectory:** Change in proficiency over time

**Visualization:** Proficiency Radar Chart (Progression page)

---

### Impact×Autonomy Positioning (from Leveling)
- **Impact Dimension:** Individual → Team → Dept → Org → Ecosystem
- **Autonomy Dimension:** Guided → Independent → Leading → Defining
- **Level Mapping:** Each career level has typical position

**Visualization:** Impact×Autonomy Matrix scatter plot (Leveling page)

---

### Framework Adoption Metrics (implied from Implementation)
- **Phase Completion:** % progress through implementation lifecycle
- **Coverage:** % of roles mapped to framework
- **Calibration Consistency:** Agreement rates in level assessments
- **Promotion Cycle:** Time from readiness to promotion
- **Retention:** Career satisfaction and retention rates

**Visualization:** Implementation Timeline Gantt chart (Guidelines page)

---

### Leadership Pipeline Metrics (from Leadership Development)
- **Readiness Stage:** Assessment → Preparation → Transition → Consolidation
- **Pipeline Health:** Number of ICs in each readiness stage
- **Success Rate:** % successfully transitioning to management
- **Time to Readiness:** Average time in preparation phase

**Visualization:** Leadership Readiness Flowchart (Developing Leaders page)

---

## Domain Vocabulary (Glossary)

| Term | Definition | Primary Source |
|------|------------|----------------|
| **Career Level** | Hierarchical position indicating scope, autonomy, and impact | Leveling page |
| **Career Topology** | Structural model defining career paths (Y, W, Network) | Topologies page |
| **Progression Pillar** | Core competency dimension (6 total) for professional development | Progression page |
| **Professional Shape** | Skill profile (I, T, Pi) characterizing breadth vs depth | Shapes page |
| **Individual Contributor (IC)** | Non-management professional role | Throughout |
| **Management Track** | Career path for people managers | Management page |
| **Technical Lead Track** | Hybrid role with technical depth and leadership (W-model) | Topologies page |
| **Impact×Autonomy Matrix** | 2D framework for positioning career levels | Leveling page |
| **Proficiency Score** | 1-5 rating on a progression pillar | Progression page |
| **Leadership Readiness** | State of preparedness for management transition | Developing Leaders page |
| **Framework Governance** | Structure for maintaining and evolving the framework | Framework page |
| **Implementation Lifecycle** | 4-phase process for adopting the framework | Framework page, Guidelines page |
| **Calibration** | Process of ensuring consistent level assessments | Guidelines page |
| **Promotion Cycle** | Regular evaluation period for level progression | Leveling page |
| **Career Transition** | Movement between tracks (IC ↔ Manager) | Topologies page |
| **Skill Breadth** | Range of domains with competence | Shapes page |
| **Skill Depth** | Level of expertise within a domain | Shapes page |
| **First-Line Manager** | Manager of individual contributors | Management page |
| **Middle Manager** | Manager of managers | Management page |
| **Senior Leader** | Strategic leader of departments/divisions | Management page |

---

## Data Structures Visible in UI

### 1. Leveling Table (Interactive)
**Columns:**
- Level Number
- Level Name
- Track Type
- Impact Dimension
- Autonomy Level
- Key Responsibilities
- Example Roles

**Rows:** 8-10 career levels (varies by track)

**Interactions:** Click to expand level details

---

### 2. Proficiency Radar Chart
**Axes:** 6 progression pillars
**Data Points:** Proficiency scores (1-5) per pillar
**Variants:** Separate charts for each career level
**Interactions:** Tab between levels to see different proficiency profiles

---

### 3. Progression Matrix (Heat Map)
**Rows:** Career levels (1-8)
**Columns:** 6 progression pillars
**Cells:** Expected proficiency score (1-5), color-coded
**Interaction:** Hover to see detailed expectations

---

### 4. Impact×Autonomy Matrix (Scatter Plot)
**X-Axis:** Autonomy (Guided → Defining)
**Y-Axis:** Impact (Individual → Ecosystem)
**Data Points:** Career levels positioned by typical impact/autonomy
**Interaction:** Hover to see level name and description

---

### 5. Topology Comparative Table
**Columns:** Aspect (Tracks, Flexibility, Best For, Transitions)
**Rows:** Y-Model, W-Model, Network Model
**Cells:** Descriptive text comparing models

---

### 6. Roles & Responsibilities Matrix
**Rows:** Framework roles (Exec Sponsor, Implementation Lead, People Team, Dept Heads, Managers)
**Columns:** Responsibilities during implementation
**Cells:** Specific duties and expectations

---

### 7. Implementation Timeline (Gantt Chart)
**Rows:** 8 major activities
**Timeline:** Week 0 → Week 52+
**Bars:** Duration and sequence of activities
**Labels:** Phase names (Assessment, Design, Pilot, Rollout)

---

### 8. Leadership Readiness Flowchart
**Nodes:**
- Start: IC expresses interest
- Decision 1: Meets criteria?
- Process: Preparation phase
- Decision 2: Ready for role?
- End States: Promoted / Continue as IC / More development

**Edges:** Paths between states with conditions

**Interactions:** Hover tooltips with details

---

## Conceptual Model Summary

The Career Topologies framework is built on these interconnected concepts:

1. **Structural Foundation:** Choose a topology (Y, W, Network) that defines available career tracks
2. **Level Framework:** Define career levels with clear impact/autonomy expectations
3. **Competency Model:** Map 6 progression pillars to each level
4. **Skill Profiles:** Encourage professional shapes (I, T, Pi) aligned to organizational needs
5. **Transition Mechanisms:** Support career movements (promotions, lateral moves, IC↔Manager)
6. **Implementation System:** Provide governance, roles, and lifecycle for adoption
7. **Continuous Evolution:** Enable calibration, feedback, and framework improvements

**Philosophy:** Transparent, fair, evidence-based career development that recognizes multiple paths to growth and impact.

---

## Entity Coverage Notes

- **All primary entities documented:** Career Level, Progression Pillar, Topology, Shape, Management Level, Readiness State, Framework Component, Implementation Phase
- **Attributes extracted from:** Interactive tables, charts, diagrams, and descriptive text across 14 pages
- **Workflows reconstructed:** From user journeys, flowcharts, timelines, and process descriptions
- **Metrics identified:** Proficiency scores, impact/autonomy positioning, adoption progress, leadership pipeline health
- **No database schema:** Framework is documentation/guidance, not a CRUD application
- **Data primarily conceptual:** Framework defines models, not transactional data

---
