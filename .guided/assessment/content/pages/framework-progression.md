# Progression Pillars Page Documentation

## Page Identity

**Route:** `/framework/progression`  
**Page Title:** Career Topologies – Progression Pillars  
**Component:** ProgressionPillarsPage.tsx  
**Category:** Framework  
**Primary Purpose:** Define the six competency dimensions (Progression Pillars) and show how proficiency expectations vary by career level through interactive visualizations

---

## Page Purpose Statement

The Progression Pillars page provides the competency framework that operationalizes career levels. It offers:
1. Detailed definitions of six progression pillars (competency dimensions)
2. Interactive Proficiency Radar Chart showing expected profiles by level
3. Progression Matrix (heat map) mapping pillar proficiencies to career levels
4. Concrete examples of what each proficiency level looks like in practice

This page enables managers and ICs to understand growth expectations and create targeted development plans.

---

## Content Blocks Outline

### 1. Introduction Section
- **Heading:** "Progression Pillars"
- **Content:**
  - What are progression pillars?
  - Why six dimensions?
  - How pillars complement career levels (levels = scope, pillars = competencies)
  - Using pillars for development planning

### 2. The Six Pillars Overview Section
- **Heading:** "Six Dimensions of Professional Growth"
- **List of Pillars:**
  1. **Technical Expertise** - Domain knowledge, tools, technologies
  2. **Problem Solving & Innovation** - Analytical thinking, creativity, complexity handling
  3. **Communication & Collaboration** - Written/verbal communication, teamwork, stakeholder management
  4. **Leadership & Influence** - Mentoring, decision-making, driving initiatives
  5. **Delivery & Execution** - Project management, prioritization, results orientation
  6. **Learning & Adaptability** - Growth mindset, feedback receptivity, navigating change

### 3. Proficiency Scale Section
- **Heading:** "Understanding Proficiency Levels"
- **Scale:** 1-5 (or similar)
  - **Level 1 - Developing:** Learning fundamentals with guidance
  - **Level 2 - Proficient:** Independently applying skills
  - **Level 3 - Expert:** Mastering complex situations, teaching others
  - **Level 4 - Master:** Defining best practices, influencing beyond team
  - **Level 5 - Thought Leader:** Industry-level impact, setting new standards

### 4. Interactive Proficiency Radar Chart Section
- **Component:** Radar chart with level tabs
- **Axes:** Six pillars radiating from center
- **Data:** Expected proficiency (1-5) on each pillar for selected level
- **Interaction:** Tab or dropdown to select career level (Junior IC → Principal IC, etc.)
- **Purpose:** Visualize how proficiency expectations change as you progress

### 5. Progression Matrix (Heat Map) Section
- **Component:** Interactive table/heat map
- **Rows:** Career levels (1-8 or similar)
- **Columns:** Six progression pillars
- **Cells:** Expected proficiency score (1-5), color-coded
  - Cool colors (blue): Lower proficiency (1-2)
  - Warm colors (orange/red): Higher proficiency (4-5)
- **Interaction:** Hover over cell to see detailed expectations
- **Purpose:** At-a-glance reference for managers and ICs planning development

### 6. Detailed Pillar Descriptions Section
- **Format:** Six subsections, one per pillar
- **Each Subsection Contains:**
  - Pillar name and icon
  - Comprehensive definition
  - Why this pillar matters
  - Example behaviors at each proficiency level (1-5)
  - Common development activities to build this pillar

**Example for Technical Expertise:**
- **Level 1:** Learning core tools, following established patterns
- **Level 2:** Independently solving typical problems, understanding tradeoffs
- **Level 3:** Architecting solutions, mentoring junior engineers, evaluating new technologies
- **Level 4:** Defining technical strategy, creating standards, influencing tech stack choices
- **Level 5:** Industry thought leader, conference speaker, open-source contributor with wide impact

### 7. Using Pillars in Practice Section
- **Heading:** "Applying Progression Pillars"
- **Use Cases:**
  - **Gap Analysis:** Compare current proficiency to target level requirements
  - **Development Planning:** Identify 1-2 pillars to focus on for next 6-12 months
  - **Career Conversations:** Discuss growth areas with manager
  - **Performance Reviews:** Evidence collection aligned to pillar expectations
  - **Promotion Assessments:** Demonstrate proficiency across all six pillars

---

## Forms and Interactive Elements

### 1. Proficiency Radar Chart (Interactive)
- **Type:** Radar chart with level selector
- **Interaction:** Select career level via tabs or dropdown
- **Data Displayed:** Six-axis radar showing 1-5 proficiency for selected level
- **Purpose:** Visual comparison of proficiency profiles across levels

### 2. Progression Matrix Heat Map (Interactive)
- **Type:** Table with color-coded cells and hover tooltips
- **Interaction:** Hover over cell to reveal detailed proficiency expectations
- **Data Displayed:** Level × Pillar grid with proficiency scores and colors
- **Purpose:** Quick reference for assessment and planning

---

## Visual Components

### 1. Proficiency Radar Chart
- **Type:** Interactive radar/spider chart
- **Axes:** 6 (one per pillar)
- **Scale:** 1-5 proficiency
- **Variants:** One chart per career level (selectable via tabs)
- **Purpose:** Visualize expected proficiency "shape" at each level
- **Key Insight:** Higher levels require higher proficiency across MORE pillars (not just one)

### 2. Progression Matrix (Heat Map)
- **Type:** Interactive table with color gradient
- **Dimensions:** ~8 rows (levels) × 6 columns (pillars)
- **Color Scheme:** Blue (low proficiency) → Yellow (mid) → Red (high)
- **Tooltips:** Hover reveals text description of expectations
- **Purpose:** Comprehensive reference matrix for all level/pillar combinations

### 3. Pillar Icon Set (6 Icons)
- **Type:** Visual identifiers for each pillar
- **Style:** Likely simple line icons or illustrations
- **Purpose:** Make pillars quickly recognizable throughout site

---

## Links on This Page

### Internal Links (6+)
1. `/framework/leveling` - Related page: "See how levels are defined"
2. `/framework/guidelines` - Related page: "Apply pillars in calibration"
3. `/shapes` - Related concept: "How shapes affect pillar priorities"
4. `/management/developing-leaders` - Related: "Leadership pillar for new managers"
5. `/concepts` - Glossary link for terms like "proficiency"
6. `/framework` - Parent page: Framework overview

### External Links
**None** - Progression page focuses on framework; external resources on References page

---

## User Journeys Touching This Page

### 1. Development Planning (IC + Manager)
- **Entry:** After career conversation or performance review
- **Actions on Progression:**
  - Review current level's expected proficiency across six pillars
  - Self-assess against each pillar using examples
  - Identify 1-2 pillars with biggest gaps
  - Review next level expectations to understand growth path
  - Use examples to identify specific development activities
- **Exit:** Create development plan (may use external tool or stay for reference)

### 2. Promotion Readiness Assessment (Manager)
- **Entry:** Evaluating IC for promotion
- **Actions on Progression:**
  - Use Progression Matrix to compare IC's proficiency to target level
  - Check radar chart to visualize overall proficiency "shape"
  - Review detailed examples to assess evidence
  - Identify any pillar gaps preventing promotion
- **Exit:** Leveling page (to confirm level criteria) or Guidelines (for promotion process)

### 3. Self-Assessment (Individual Contributor)
- **Entry:** Curious about growth areas or promotion path
- **Actions on Progression:**
  - Find current level in Progression Matrix
  - Self-assess proficiency on each pillar (1-5 scale)
  - Compare to current level expectations (am I meeting them?)
  - Review next level requirements to understand gaps
  - Identify specific pillars to develop
- **Exit:** Discuss with manager, stay for reference, or visit Leveling page

### 4. Framework Design (HR/People Team)
- **Entry:** Customizing framework for organization
- **Actions on Progression:**
  - Review six-pillar model for applicability
  - Consider adding/modifying pillars for org-specific needs
  - Use proficiency examples as templates for role descriptions
  - Adapt matrix for org's level structure
- **Exit:** Guidelines page (for implementation) or stay to document customizations

---

## Related Pages

**Primary Related:**
- `/framework/leveling` - Career levels that these pillars map to
- `/framework/guidelines` - How to use pillars in calibration and reviews
- `/shapes` - How I/T/Pi profiles affect pillar priorities (e.g., T-shaped has broad competency across pillars)

**Secondary Related:**
- `/management/developing-leaders` - Leadership pillar is critical for manager transition
- `/concepts` - Definitions of key terms (proficiency, competency, etc.)
- `/about` - Context on why six pillars were chosen

---

## Content Characteristics

**Tone:** Educational, practical, development-focused  
**Length:** Long (pillar definitions + interactive tools + detailed examples)  
**Complexity:** Medium - requires self-awareness and understanding of professional skills  
**Call-to-Action Intensity:** Medium - encourages reflection and planning but not pushy  
**Visual Density:** High - radar chart, matrix, and pillar examples with icons  

---

## SEO and Metadata (Inferred)

**Target Keywords:** career progression pillars, competency framework, proficiency matrix, professional development dimensions, career growth competencies  
**Meta Description (likely):** "Define growth with six Progression Pillars: Technical Expertise, Problem Solving, Communication, Leadership, Delivery, and Learning. Interactive radar chart and proficiency matrix for all levels."  
**Primary Audience:** ICs planning development, managers conducting assessments, HR designing competency models  

---

## Mobile Considerations

- Radar chart should be responsive (possibly simplified view on mobile)
- Progression Matrix may require horizontal scroll or simplified stacked view
- Detailed pillar examples should be easily scrollable
- Tab navigation for radar chart levels should be touch-friendly

---

## Page Role in Site Architecture

**Position:** Core tactical tool within Framework section  
**Function:** Competency reference and development planning resource  
**User Type:** ICs and managers actively working on growth  
**Relation to Other Pages:**  
- Child of /framework
- Sibling to /framework/leveling and /framework/guidelines
- Complements Leveling (levels = structure, pillars = competencies)

---

## Notes

- **Most Development-Focused Page:** Provides actionable growth guidance (vs. structural concepts)
- **Visual Learning:** Radar chart and heat map make abstract competencies concrete
- **Holistic Growth Model:** Six pillars ensure balanced development (not just technical skills)
- **Evidence-Based Assessments:** Detailed examples enable objective evaluation
- **Customization Potential:** Organizations may adjust pillar definitions or proficiency scales
- **Career Conversation Tool:** Likely open during every development/review conversation
- **Equity Consideration:** Clear proficiency examples reduce bias in assessments
- **Universal Applicability:** Six pillars work across IC and Manager tracks (with different emphases)
