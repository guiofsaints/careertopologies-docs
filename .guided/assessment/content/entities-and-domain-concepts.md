# Entities and Domain Concepts

## Overview

This document identifies the core domain entities, their attributes, relationships, and associated workflows as inferred from the user-facing content and UI copy in the Career Topologies codebase.

---

## Core Domain Entities

### 1. Career Level

**Description**: A defined stage in an individual's career progression within an organization, representing increasing scope, complexity, and autonomy.

**Attributes**:

- Title/Name (e.g., Junior, Mid-level, Senior, Staff, Principal, Lead, Director, VP, C-Level)
- Number/Order (1-6 hierarchical position)
- Scope of Impact (Team, Squad/Project, Tribe/Domain, Product/Platform, Unit/Business, Company/Market)
- Degree of Autonomy (High supervision → Strategic direction)
- Complexity (Well-defined tasks → Organizational transformation)
- Expectations (list of key responsibilities and behaviors)
- Compensation Band (optional, may be internal or visible)

**Relationships**:

- Belongs to a Career Track/Ladder
- Preceded by (lower level)
- Followed by (higher level)
- Evaluated against Progression Pillars
- Aligned with Topology Model

**States/Transitions**:

- Current level (where individual is now)
- Target level (where individual aims to be)
- Promotion readiness (meeting criteria for next level)

---

### 2. Career Topology

**Description**: A structural model that defines the possible career paths and transitions within an organization.

**Types/Variants**:

1. **Y-Model**: Bifurcation into Management or IC (Individual Contributor) tracks
2. **W-Model**: Three tracks (Management, IC, Project/Tech Management hybrid)
3. **Network Model**: Fluid, non-linear transitions across domains

**Attributes**:

- Name/Type (Y, W, Network, or Custom)
- Number of Tracks (2, 3, or fluid)
- Flexibility Level (Low, Medium, High)
- Structure Type (Hierarchical, Matrix, Horizontal/Network-based)
- Recommended Organizational Context (startup, growth, mature)
- Strengths (list of advantages)
- Use Cases (scenarios where model fits)

**Relationships**:

- Contains multiple Career Tracks
- Applicable to Organization Type
- Influences Career Level definitions

---

### 3. Career Track

**Description**: A specific path of progression within a topology, representing a distinct specialization or role focus.

**Common Track Types**:

- **Individual Contributor (IC) Track**: Technical depth, architecture, mentoring, innovation
- **Management Track**: People management, business ownership
- **Hybrid/Project Track**: Technical leadership without direct reports, project ownership

**Attributes**:

- Track Name (e.g., "Technical IC", "Engineering Management", "Technical Leadership")
- Track Owner (person responsible for track definition and evolution)
- Progression Levels (list of levels within this track)
- Specialization Domain (Engineering, Product, Design, etc.)
- Transition Rules (how to move between tracks)

**Relationships**:

- Part of a Career Topology
- Contains multiple Career Levels
- Evaluated using Progression Pillars
- Governed by Track Owner

---

### 4. Progression Pillar

**Description**: A competency dimension used to evaluate growth and readiness for career advancement.

**Common Pillars**:

1. **Delivery & Execution**: Ability to deliver value with quality, consistency, and efficiency
2. **Technical Domain / Specialization**: Depth in core knowledge of the function
3. **Collaboration & Influence**: Team contribution, communication, influence without authority
4. **Autonomy & Decision Making**: Ability to act with increasing independence
5. **Initiative & Innovation**: Proposes solutions, improvements, experiments, and learns
6. **Mentoring & Multiplication**: Develops others, shares knowledge, contributes to culture

**Attributes**:

- Pillar Name
- Description
- Maturity Levels (1-5 scale: Basic → Developing → Proficient → Advanced → Expert)
- Weight/Importance (may vary by track or level)
- Evaluation Criteria (specific behaviors or outcomes)
- Examples by Level (concrete manifestations at each career level)

**Relationships**:

- Evaluates individuals at Career Levels
- Varies by Career Track
- Used in Performance Reviews
- Guides Individual Development Plans (IDPs)

**Measurements**:

- Maturity Score (1-5 for each pillar)
- Radar Chart Visualization (showing profile across pillars)
- Gap Analysis (current vs expected for level)

---

### 5. Professional Shape (Skill Profile)

**Description**: A model describing the depth and breadth of an individual's skills and expertise.

**Shape Types**:

1. **I-Shaped**: Deep specialist in single discipline
2. **T-Shaped**: Depth in one area + breadth across adjacent areas
3. **Pi-Shaped (Comp-Shaped)**: Depth in two+ areas + strategic breadth

**Attributes**:

- Shape Type (I, T, Pi)
- Primary Specialization(s) (1 for I, 1 for T, 2+ for Pi)
- Breadth Areas (adjacent skills/domains)
- Common Roles (typical job titles for this shape)
- Strengths (advantages of this profile)
- Considerations (contexts where shape works best)

**Relationships**:

- Describes an Individual
- Influences Role Fit
- Evolves over Career Journey
- Impacts Team Composition

**Transitions**:

- I → T (acquiring breadth)
- T → Pi (deepening second specialization)
- Shape evolution as career progresses

---

### 6. Ladder (Career Framework)

**Description**: A documented structure combining topology, leveling, and progression criteria to guide career development for a specific discipline or organization.

**Attributes**:

- Ladder Name (e.g., "Engineering Ladder", "Product Ladder")
- Topology Model (Y, W, or Network)
- Level Definitions (complete set of levels)
- Progression Pillars (evaluation dimensions)
- Promotion Guidelines (rules for advancement)
- Governance Structure (ownership and maintenance)
- Version/Last Updated

**Relationships**:

- Owned by Track Owner
- Contains Career Levels
- Uses Progression Pillars
- Follows a Topology Model
- Applied to Individuals
- Governed by Governance Process

**Lifecycle States**:

- Draft (being designed)
- Pilot (testing with small group)
- Active (organization-wide use)
- Under Review (scheduled update)
- Deprecated (replaced by new version)

---

### 7. Individual (Professional/Employee)

**Description**: A person navigating their career within the organization using the framework.

**Attributes**:

- Current Level
- Current Track
- Professional Shape
- Tenure/Time in Current Level
- Progression Pillar Scores (current maturity)
- Career Goals/Aspirations
- Individual Development Plan (IDP)

**Relationships**:

- Assigned to a Career Level
- Works within a Career Track
- Evaluated against Progression Pillars
- Has a Professional Shape
- Managed by a Manager
- Supported by HR/People Team

**Workflows/Journeys**:

- Onboarding (learning the framework)
- Self-Assessment (evaluating own progression)
- Career Conversations (1:1s with manager)
- Development (working on growth areas)
- Promotion Process (advancing to next level)
- Track Transition (moving between tracks)

---

### 8. Manager

**Description**: A leader responsible for applying the framework, developing people, and making career decisions.

**Manager Levels**:

1. **Front-line Manager (Operational)**

   - Scope: Day-to-day team execution
   - Horizon: 1-3 months
   - Focus: Remove blockers, guide ICs

2. **Middle Manager (Tactical)**

   - Scope: Translate strategy, support leaders
   - Horizon: 6-12 months
   - Focus: Build teams, coach managers, align goals

3. **Top Manager (Strategic)**
   - Scope: Long-term direction, organizational health
   - Horizon: 1-5 years
   - Focus: Define vision, restructure, represent externally

**Shared Responsibilities** (all managers):

- Hire and offboard
- Performance management
- Structured feedback and evaluations
- Regular 1:1s
- Succession planning
- Capacity management
- Prioritization
- Team health and inclusivity

**Relationships**:

- Manages Individuals
- Applies Ladder and Progression Pillars
- Participates in Calibration
- Supported by Track Owner and HR
- Reports to Higher-Level Manager

**Workflows**:

- Feedback Cycles
- Performance Reviews
- 1:1 Meetings
- Promotion Proposals
- Calibration Sessions
- Team Planning

---

### 9. Track Owner

**Description**: A person responsible for defining, maintaining, and evolving a specific career track or discipline ladder.

**Responsibilities**:

- Define progression criteria and expectations
- Facilitate calibration sessions
- Collect feedback and iterate on track
- Support managers with guidance and resources
- Version control and documentation

**Relationships**:

- Owns a Career Track/Ladder
- Supports Managers
- Collaborates with HR
- Reports to Leadership
- Engages with ICs for feedback

---

### 10. HR / People Operations Team

**Description**: The function responsible for governance, compliance, and integration of the career framework.

**Responsibilities**:

- Overall framework governance
- Coordination of review cycles
- Integration with compensation systems
- Legal and policy compliance
- Recruitment and onboarding support
- System documentation
- Data and reporting

**Relationships**:

- Supports Track Owners
- Enables Managers
- Serves Individuals
- Interfaces with Compensation Team
- Reports to Leadership

---

### 11. Promotion / Advancement

**Description**: The process and decision to move an individual to a higher career level.

**Attributes**:

- Candidate (individual being considered)
- Current Level → Target Level
- Justification (evidence and rationale)
- Proposal Date
- Decision Status (Proposed, Under Review, Approved, Rejected, Deferred)
- Effective Date (when promotion takes effect)

**Process Stages**:

1. **Manager Drafts Proposal**: Justification aligned to ladder
2. **Peer Review**: Partner reviewer validates consistency
3. **Calibration**: Group reviews cases together
4. **HR Validation**: Ensures consistency across teams
5. **Leadership Approval**: Final decision (VP/Director)
6. **Communication**: Outcome shared with individual

**Requirements**:

- Sustained performance at next level
- Maturity across most progression pillars
- Peer feedback and delivery records
- Mentorship evidence

**Timeline**:

- Review Windows (biannual or quarterly)
- Submission Deadline
- Review Period
- Decision Communication

---

### 12. Calibration Session

**Description**: A structured meeting where managers and leadership align on level expectations and evaluate candidates for promotion or leveling.

**Attributes**:

- Session Date
- Participants (managers, track owners, HR)
- Candidates Discussed
- Framework Reference (ladder being used)
- Decisions Made

**Purposes**:

- Ensure consistency in evaluations
- Reduce bias
- Share context across teams
- Validate promotion proposals
- Align on pillar interpretations

**Relationships**:

- Uses Ladder and Progression Pillars
- Involves Managers and Track Owners
- Results in Promotion Decisions
- Governed by HR

---

### 13. Individual Development Plan (IDP)

**Description**: A personalized plan outlining an individual's growth goals and actions to progress in their career.

**Attributes**:

- Individual (person)
- Current Assessment (pillar scores, strengths, gaps)
- Target Level or Skills
- Development Actions (learning, projects, mentorship)
- Timeline/Milestones
- Check-in Schedule

**Relationships**:

- Created for Individual
- Based on Progression Pillars
- Guided by Manager
- References Career Level expectations
- Tracked in 1:1s

---

### 14. Feedback Cycle / Performance Review

**Description**: A regular process for evaluating individual performance and progression against framework criteria.

**Attributes**:

- Review Period (quarterly, biannual, annual)
- Individual Being Reviewed
- Manager/Reviewer
- Pillar-Based Assessment (scores or qualitative)
- Strengths and Development Areas
- Promotion Readiness
- Actions/Next Steps

**Relationships**:

- Evaluates Individual
- Uses Progression Pillars
- References Career Level expectations
- Informs Promotion Decisions
- Feeds into IDP

---

### 15. Compensation Band

**Description**: A salary range associated with a career level, ensuring internal equity and market competitiveness.

**Attributes**:

- Level (associated career level)
- Minimum Salary
- Maximum Salary
- Midpoint/Target
- Currency/Market
- Visibility (internal-only or transparent)

**Relationships**:

- Mapped to Career Level
- Informed by Ladder
- Managed by Compensation Team
- Aligned with Promotion Decisions

---

## Domain Workflows

### Workflow 1: Individual Career Progression

```
Onboarding (Learn Framework)
   ↓
Self-Assessment (Current Level, Pillar Scores)
   ↓
Career Conversation with Manager
   ↓
Create/Update IDP
   ↓
Execute Development Actions
   ↓
Regular Feedback (1:1s, Reviews)
   ↓
[Decision Point: Ready for Promotion?]
   ├─ Yes → Promotion Process
   └─ No → Continue Development
```

---

### Workflow 2: Promotion Process

```
Manager Identifies Candidate
   ↓
Draft Promotion Proposal
   ├─ Collect evidence (delivery, feedback, pillar maturity)
   └─ Align to Ladder expectations
   ↓
Peer/Partner Review (validation)
   ↓
Calibration Session
   ├─ Present case
   ├─ Compare to standards
   └─ Group discussion
   ↓
HR Validation (consistency, equity)
   ↓
Leadership Approval (VP/Director)
   ↓
[Decision]
   ├─ Approved → Communicate & Effectuate
   ├─ Rejected → Provide feedback, set expectations
   └─ Deferred → Identify gaps, plan follow-up
```

---

### Workflow 3: Track Transition (e.g., IC to Manager)

```
Individual Expresses Interest
   ↓
Manager/Track Owner Assessment
   ├─ Readiness evaluation
   ├─ Leadership signals
   └─ Organizational need
   ↓
Interim/Trial Period
   ├─ Shadow or project leadership
   ├─ Formal training
   └─ Mentorship
   ↓
Evaluation
   ├─ Effectiveness
   ├─ Individual satisfaction
   └─ Team feedback
   ↓
[Decision]
   ├─ Formal Transition → Move to Management Track
   ├─ Return to IC Track (no stigma)
   └─ Extended Trial
```

**Reference**: See "Developing New Leaders" page for detailed leadership readiness flowchart

---

### Workflow 4: Framework Implementation (Organizational)

```
Phase 1: Design (2-4 months)
   ├─ Stakeholder interviews
   ├─ Topology selection
   ├─ Pillar definition
   └─ Level mapping
   ↓
Phase 2: Pilot (3-6 months)
   ├─ Select pilot teams
   ├─ Train managers
   ├─ Run feedback cycles
   └─ Iterate on content
   ↓
Phase 3: Rollout (6-12 months)
   ├─ Phased team onboarding
   ├─ Manager training
   ├─ System integration
   └─ Communication plan
   ↓
Phase 4: Maintain (Ongoing)
   ├─ Regular reviews
   ├─ Feedback collection
   ├─ Level adjustments
   └─ Process improvements
```

---

### Workflow 5: Calibration Cycle

```
Pre-Calibration
   ├─ Managers prepare cases
   ├─ Documentation gathered
   └─ Schedule set
   ↓
Calibration Session
   ├─ Review each candidate
   ├─ Compare to ladder standards
   ├─ Discuss evidence
   ├─ Align on interpretations
   └─ Make decisions
   ↓
Post-Calibration
   ├─ Document outcomes
   ├─ Communicate decisions
   ├─ Update records
   └─ Provide feedback to individuals
   ↓
Follow-up
   ├─ Track promotion effectiveness
   └─ Collect feedback on process
```

---

### Workflow 6: Ladder Evolution (Governance)

```
Annual Review Trigger
   ↓
Feedback Collection
   ├─ ICs (surveys, discussions)
   ├─ Managers (retrospectives)
   └─ HR (data analysis)
   ↓
Track Owner Analysis
   ├─ Identify gaps/issues
   ├─ Propose changes
   └─ Draft updates
   ↓
Advisory Group Review
   ├─ HR representatives
   ├─ IC representatives
   ├─ Manager representatives
   └─ Validate changes
   ↓
Leadership Approval
   ↓
Communication & Rollout
   ├─ Version documentation
   ├─ Training updates
   └─ Change management
```

---

## Domain States and Transitions

### Individual Career States

```
Onboarding → Active in Role → Promotion Ready → Promoted
                    ↓                              ↓
              Track Transition ←───────────────────┘
                    ↓
         (Management/IC/Hybrid)
```

### Ladder Lifecycle States

```
Draft → Pilot → Active → Under Review → Updated
                   ↓                         ↓
                Deprecated ←─────────────────┘
```

### Promotion Request States

```
Drafted → Peer Reviewed → In Calibration → HR Validated → Leadership Review
                                                ↓
                                    [Approved / Rejected / Deferred]
```

---

## Key Domain Concepts and Terminology

### Governance Terms

- **Track Owner**: Person responsible for track evolution
- **Advisory Group**: Cross-functional team guiding framework evolution
- **Calibration**: Alignment session for consistent evaluation

### Evaluation Terms

- **Progression Pillar**: Competency dimension
- **Maturity Level**: Proficiency on a pillar (1-5 scale)
- **Sustained Performance**: Consistent demonstration over time
- **Promotion Readiness**: Meeting criteria for next level

### Structural Terms

- **Career Topology**: Overall path structure (Y/W/Network)
- **Career Track**: Specific path within topology (IC/Management/Hybrid)
- **Career Level**: Stage within a track (Junior → C-Level)
- **Career Ladder**: Complete framework document

### Profile Terms

- **Professional Shape**: Skill profile (I/T/Pi)
- **Scope of Impact**: Who/what the role affects
- **Degree of Autonomy**: Independence level
- **Planning Horizon**: Time range of focus (short/mid/long-term)

### Process Terms

- **IDP (Individual Development Plan)**: Personalized growth roadmap
- **Feedback Cycle**: Regular performance evaluation period
- **Promotion Window**: Designated timeframe for advancement reviews
- **Interim Period**: Trial phase before formal role change

---

## Summary

The Career Topologies domain is rich with interconnected entities spanning:

1. **Structural Elements**: Topologies, Tracks, Levels, Ladders
2. **Evaluation Mechanisms**: Progression Pillars, Shapes, Maturity Scores
3. **People and Roles**: Individuals, Managers, Track Owners, HR
4. **Processes**: Promotions, Calibrations, Feedback Cycles, IDPs
5. **Governance**: Advisory Groups, Review Cycles, Version Control

The domain emphasizes **transparency, fairness, and structure** while maintaining **flexibility and individual agency**. Workflows are well-defined but adaptable, supporting diverse organizational contexts and career aspirations.
