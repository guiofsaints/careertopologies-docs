# Developing New Leaders Page Documentation

## Page Identity

**Route:** `/management/developing-leaders`  
**Page Title:** Developing New Leaders  
**Component:** DevelopingLeadersPage.tsx  
**Category:** Docs (Specialized)  
**Primary Purpose:** Provide a clear, decision-oriented process for transitioning from Individual Contributor to Manager role, including assessment, preparation, and outcomes

---

## Page Purpose Statement

The Developing New Leaders page offers a structured approach to leadership development, providing:
1. Leadership Readiness Flowchart with decision points
2. Step-by-step process from interest expression to manager role
3. Three possible outcomes (promoted, continue as IC, more development)
4. Realistic expectations and support mechanisms

This page reduces anxiety and ambiguity around IC→Manager transitions, supporting both aspiring managers and organizations building leadership pipelines.

---

## Content Blocks Outline

### 1. Introduction Section
- **Heading:** "Developing New Leaders"
- **Content:**
  - Transitioning from IC to Manager is a career change, not just a promotion
  - Requires different skills and mindset shift
  - Structured process reduces risk and supports success
  - Multiple outcomes are valid (not everyone should manage)

### 2. Leadership Readiness Flowchart Section
- **Heading:** "The Leadership Development Process"
- **Component:** Interactive flowchart with 4 steps and 3 outcomes
- **Flowchart Structure:**

```
[IC Expresses Interest in Management]
              ↓
[Step 1: Assessment - Evaluate Interest, Skills, and Org Need]
              ↓
        Decision Point 1
    Does IC meet baseline criteria?
              ↓
   Yes ↙          ↘ No
[Step 2: Preparation]    [Outcome 1: Continue as Senior IC]
              ↓
[6-12 months: Training, Shadowing, Mentorship]
              ↓
[Step 3: Trial Opportunity - Small Team Lead or Project Management]
              ↓
        Decision Point 2
    Ready for full management role?
              ↓
   Yes ↙    ↓ Partial   ↘ No
[Outcome 2:    [Outcome 3:      [Outcome 1:
 Promoted      Extended         Continue
 to Manager]   Development]     as IC]
```

### 3. Step-by-Step Process Section

**Step 1: Interest Expression & Initial Assessment (Month 0-1)**
- **Heading:** "Step 1: Assessment"
- **IC Actions:**
  - Express management interest to manager
  - Reflect on motivations (right reasons vs. wrong reasons)
  - Self-assess leadership competencies
- **Manager/Org Actions:**
  - Conduct structured assessment conversation
  - Evaluate IC's current competencies against baseline
  - Assess organizational need for new managers
- **Assessment Criteria:**
  - Technical credibility with team
  - Communication and influence skills
  - Empathy and emotional intelligence
  - Interest in people development (vs. just "advancement")
  - Organizational need/opportunity
- **Decision Point 1:** Meets baseline criteria?
  - **Yes:** Proceed to Preparation
  - **No:** Continue as Senior IC or identify development areas

**Step 2: Preparation Phase (Months 2-12)**
- **Heading:** "Step 2: Preparation"
- **Duration:** Typically 6-12 months
- **Activities:**
  - **Training:** Management fundamentals, giving feedback, career conversations
  - **Shadowing:** Observe current managers in 1-on-1s, planning, decision-making
  - **Mentorship:** Paired with experienced manager for guidance
  - **Practice:** Lead small initiatives, mentor junior ICs, facilitate meetings
  - **Reading:** Books on management, leadership, organizational psychology
- **Support Mechanisms:**
  - Manager provides opportunities and feedback
  - HR provides training programs
  - Mentor offers advice and perspective
- **Outcome:** IC builds management skills while remaining in IC role

**Step 3: Trial Opportunity (Months 13-18)**
- **Heading:** "Step 3: Trial Period"
- **Format:** 
  - Small team lead (2-4 people)
  - Project management for cross-functional initiative
  - Interim manager role (covering leave)
- **Duration:** 3-6 months typically
- **Objectives:**
  - Experience management responsibilities with safety net
  - Assess fit and performance
  - Build confidence and skills
- **Evaluation:**
  - How effectively did IC manage team?
  - Did team members thrive?
  - Does IC enjoy the work?
  - Is IC ready for full manager role?
- **Decision Point 2:** Ready for full management role?
  - **Yes:** Promote to Manager (Outcome 2)
  - **Partial:** Extended development or larger trial (Outcome 3)
  - **No:** Return to IC track gracefully (Outcome 1)

**Step 4: Transition & Support (Months 19-24)**
- **Heading:** "Step 4: Onboarding as Manager"
- **Activities:**
  - Formal promotion to First-Line Manager
  - Team assignment (4-8 direct reports)
  - Manager onboarding program
  - Continued mentorship (first 6-12 months)
  - Regular check-ins with manager and HR
- **Ongoing Development:**
  - Manager training programs
  - Peer manager community
  - Executive coaching (for some)

### 4. Three Possible Outcomes Section

**Outcome 1: Continue as Senior IC**
- **Heading:** "Outcome 1: Continue as Senior Individual Contributor"
- **Scenarios:**
  - IC doesn't meet baseline criteria (yet)
  - IC tries management and doesn't enjoy it
  - IC realizes IC track is better fit
  - Organizational need doesn't exist
- **How It's Handled:**
  - Transparent conversation with manager
  - No stigma or penalty (reframe as "role clarity")
  - Continue IC career with full support
  - Door remains open for future consideration
- **Key Message:** Not everyone should manage; senior IC is equally valuable

**Outcome 2: Promoted to Manager**
- **Heading:** "Outcome 2: Successfully Promoted to First-Line Manager"
- **Scenarios:**
  - IC excels in trial period
  - Team thrives under IC's leadership
  - IC demonstrates management competencies
  - Organizational need exists
- **Transition:**
  - Formal promotion with title and compensation change
  - Team assignment
  - Ongoing support and development
- **Success Factors:**
  - Continued learning mindset
  - Building manager support network
  - Balancing individual contribution with management (initially)

**Outcome 3: Extended Development**
- **Heading:** "Outcome 3: More Development Needed"
- **Scenarios:**
  - IC shows promise but needs more practice
  - Trial period was mixed (some strengths, some gaps)
  - IC wants to continue but needs specific skill building
- **Path Forward:**
  - Identify specific development areas
  - Create targeted development plan (6-12 months)
  - Provide another trial opportunity
  - Reassess readiness

### 5. Right Reasons vs. Wrong Reasons Section
- **Heading:** "Why Do You Want to Manage?"
- **Right Reasons:**
  - Genuine interest in developing others
  - Enjoy coaching and mentoring
  - Want to increase impact through team
  - Excited by organizational challenges
- **Wrong Reasons:**
  - Only path to advancement (in orgs with poor IC track)
  - Want more compensation (should fix compensation, not force management)
  - Think individual work is "beneath" you
  - External pressure from family/peers

### 6. What You Give Up as a Manager Section
- **Heading:** "What Changes When You Become a Manager"
- **Trade-offs:**
  - **Less individual contribution:** Limited coding/design/analysis time
  - **More meetings:** 1-on-1s, planning, stakeholder management
  - **Different success metrics:** Team's output, not personal output
  - **Context switching:** Interrupt-driven work vs. deep focus
  - **Accountability for others:** Responsible for team's successes and failures
- **Key Message:** Management is a different job, not a better job

---

## Forms and Interactive Elements

### Leadership Readiness Flowchart (Interactive)
- **Type:** Interactive flowchart with hover tooltips
- **Interaction:** Hover over steps/decision points for detailed explanations
- **Purpose:** Visual representation of the leadership development journey
- **Mobile:** Simplified linear view on mobile (desktop: full flowchart)

---

## Visual Components

### Leadership Readiness Flowchart
- **Type:** Interactive decision flowchart
- **Elements:**
  - **4 Steps:** Assessment, Preparation, Trial, Onboarding
  - **2 Decision Points:** Meets baseline? Ready for role?
  - **3 Outcomes:** Continue as IC, Promoted to Manager, Extended Development
  - **Arrows:** Show paths and transitions
  - **Tooltips:** Hover reveals details for each step
- **Purpose:** Demystify the leadership development process
- **Design:** Likely color-coded (steps = blue, decisions = yellow, outcomes = green/orange/red)

---

## Links on This Page

### Internal Links (6+)
1. `/management` - Parent page: Management levels overview
2. `/framework/progression` - Related: Leadership Pillar development
3. `/topologies` - Related: IC↔Manager transitions in W-Model
4. `/framework/leveling` - Related: Readiness tied to career level
5. `/shapes` - Related: Managers need T-shaped skills
6. `/framework` - Context: Framework overview

### External Links
**None** - Developing Leaders focuses on framework process; external references on References page

---

## User Journeys Touching This Page

### 1. Exploring Management (Senior IC)
- **Entry:** Management page → "Explore Leadership Development"
- **Actions on Developing Leaders:**
  - Review flowchart to understand full process
  - Read Step 1 (Assessment) to see baseline criteria
  - Check "Right Reasons vs. Wrong Reasons" for self-reflection
  - Review "What You Give Up" to understand trade-offs
  - Decide whether to express interest to manager
- **Exit:** Discuss with manager (if interested) or return to IC path

### 2. Preparing for Management (IC in Preparation Phase)
- **Entry:** Already in preparation phase, seeking guidance
- **Actions on Developing Leaders:**
  - Review Step 2 (Preparation) activities
  - Identify specific training, shadowing, mentorship opportunities
  - Understand timeline (6-12 months typical)
  - Check Step 3 (Trial) to prepare for next phase
  - Bookmark for reference throughout preparation
- **Exit:** Request specific development opportunities from manager

### 3. Supporting IC Transition (Manager)
- **Entry:** Direct report expressed management interest
- **Actions on Developing Leaders:**
  - Use flowchart to structure development conversation
  - Follow Step 1 assessment criteria
  - Plan Step 2 preparation activities
  - Design Step 3 trial opportunity
  - Understand three outcomes and how to support each
- **Exit:** Create development plan with IC, schedule check-ins

### 4. Designing Leadership Pipeline (HR/People Team)
- **Entry:** Building leadership development program
- **Actions on Developing Leaders:**
  - Use 4-step process as template
  - Adapt assessment criteria to org context
  - Design training, shadowing, mentorship programs
  - Create trial opportunity formats
  - Plan support for all three outcomes
- **Exit:** Implement leadership development program, train managers on process

---

## Related Pages

**Primary Related:**
- `/management` - Parent page: Management levels and responsibilities
- `/framework/progression` - Leadership Pillar is critical for manager success
- `/topologies` - W-Model explicitly supports IC↔Manager transitions

**Secondary Related:**
- `/framework/leveling` - Management readiness often occurs at Senior IC level (5-6)
- `/shapes` - Managers need T-shaped profile (breadth across domains)
- `/framework/guidelines` - Career conversation guide for discussing management interest

---

## Content Characteristics

**Tone:** Supportive, realistic, process-oriented  
**Length:** Long (detailed 4-step process + outcomes + reflections)  
**Complexity:** Medium - requires career self-awareness and organizational context  
**Call-to-Action Intensity:** Medium - encourages thoughtful consideration and action  
**Visual Density:** High - flowchart is central visual component  

---

## SEO and Metadata (Inferred)

**Target Keywords:** developing new managers, IC to manager transition, leadership development process, engineering manager preparation, management readiness assessment  
**Meta Description (likely):** "Structured process for IC to Manager transition: Assessment, Preparation (6-12 months), Trial Period, and three outcomes. Reduce risk and support success with clear leadership development path."  
**Primary Audience:** ICs considering management, managers coaching ICs, HR building leadership pipelines  

---

## Mobile Considerations

- Flowchart should adapt to mobile (possibly simplified linear view)
- Step-by-step content should be easily scrollable
- Tooltips may convert to tappable expansion on mobile

---

## Page Role in Site Architecture

**Position:** Specialized process page under Management section  
**Function:** Guide IC→Manager transitions with structured process  
**User Type:** ICs considering management, managers coaching ICs, HR designing programs  
**Relation to Other Pages:**  
- Child of /management (management track overview)
- Complements /topologies (especially W-Model transitions)
- References /framework/progression (Leadership Pillar development)

---

## Notes

- **Risk Reduction:** Structured process reduces failure rate of new managers
- **Trial Period Critical:** Step 3 allows "taste" of management before full commitment
- **Three Outcomes are OK:** Not everyone should manage; failed trials are learning, not failure
- **W-Model Enabler:** This process is easiest in W-Model topology (supports bidirectional transitions)
- **Timeline Realism:** 12-18 months total (assessment → preparation → trial) sets accurate expectations
- **Wrong Reasons Warning:** Prevents people from managing for compensation/advancement alone
- **Trade-Offs Transparency:** "What You Give Up" section manages expectations about management realities
- **Support Emphasis:** Mentorship, training, and trial period reduce new manager failure
- **Graceful Exits:** Outcome 1 (Continue as IC) is presented positively, reducing stigma
