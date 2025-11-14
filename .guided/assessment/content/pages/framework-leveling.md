# Leveling Page Documentation

## Page Identity

**Route:** `/framework/leveling`  
**Page Title:** Career Topologies – Leveling  
**Component:** LevelingPage.tsx  
**Category:** Framework  
**Primary Purpose:** Define career levels using Impact × Autonomy dimensions, provide interactive tools for understanding level expectations and positioning

---

## Page Purpose Statement

The Leveling page is a practical tool for understanding and applying career levels within the Career Topologies framework. It provides:
1. Interactive leveling table with detailed level definitions
2. Visual Impact × Autonomy Matrix showing level positioning
3. Topology alignment diagrams showing how levels map across Y/W/Network models
4. Concrete criteria for distinguishing between adjacent levels

This page serves managers conducting assessments and ICs understanding career paths.

---

## Content Blocks Outline

### 1. Introduction Section
- **Heading:** "Career Leveling"
- **Content:**
  - What is career leveling?
  - Why Impact × Autonomy dimensions?
  - How levels differ from job titles
  - Using levels for promotions and career planning

### 2. Impact × Autonomy Framework Section
- **Heading:** "The Impact × Autonomy Framework"
- **Content:**
  - **Impact Dimension:** Individual → Team → Department → Organization → Ecosystem
  - **Autonomy Dimension:** Guided → Independent → Leading → Defining
  - How these dimensions combine to define levels
  - Why two dimensions are better than seniority alone

### 3. Interactive Leveling Table Section
- **Component:** Interactive accordion table
- **Columns:**
  - Level Number (1-8)
  - Level Name (Junior IC, Mid IC, Senior IC, etc.)
  - Track Type (IC vs Manager)
  - Impact Scope
  - Autonomy Level
  - Key Responsibilities
  - Example Roles/Titles
- **Interaction:** Click row to expand detailed expectations for each level

### 4. Impact × Autonomy Matrix Section
- **Component:** Scatter plot visualization
- **Axes:**
  - X-axis: Autonomy (Guided → Defining)
  - Y-axis: Impact (Individual → Ecosystem)
- **Data Points:** Career levels positioned by typical impact/autonomy combination
- **Interaction:** Hover over points to see level name and description
- **Purpose:** Visualize level distinctions and progression paths

### 5. Topology Alignment Diagrams Section
- **Heading:** "How Levels Map to Topologies"
- **Content:** Diagrams showing:
  - **Y-Model:** IC and Manager tracks with shared early levels, diverging paths
  - **W-Model:** IC, Manager, and Tech Lead tracks with transition points
  - **Network Model:** Fluid level application across multiple paths
- **Purpose:** Show how leveling applies across different organizational structures

### 6. Level Distinction Guidelines Section
- **Heading:** "Distinguishing Between Levels"
- **Content:**
  - Common confusion points (e.g., Senior vs. Staff)
  - Key differentiators:
    - **Scope of impact:** Who benefits from your work?
    - **Decision autonomy:** Who decides how you work?
    - **Complexity handled:** What types of problems do you solve?
    - **Influence range:** Who do you influence beyond direct reports?
  - Examples of borderline cases and how to assess them

### 7. Application in Practice Section
- **Heading:** "Using Levels in Practice"
- **Use Cases:**
  - **Promotion assessments:** Comparing current performance to next level
  - **Career conversations:** Discussing growth paths with reports
  - **Role design:** Creating job descriptions aligned to levels
  - **Calibration:** Ensuring consistency across teams

---

## Forms and Interactive Elements

### 1. Interactive Leveling Table (Accordion)
- **Type:** Expandable table rows
- **Interaction:** Click level row to expand full details
- **Data Displayed:** 
  - Collapsed: Level number, name, track, impact, autonomy
  - Expanded: Detailed responsibilities, example roles, proficiency expectations
- **Purpose:** Allow users to explore levels at their own pace

### 2. Hover Tooltips on Matrix
- **Type:** Scatter plot with interactive tooltips
- **Interaction:** Hover over data point to see level details
- **Data Displayed:** Level name, impact description, autonomy description
- **Purpose:** Provide context without cluttering visualization

---

## Visual Components

### 1. Interactive Leveling Table
- **Type:** Data table with accordion functionality
- **Rows:** 8-10 career levels (varies by track)
- **Purpose:** Primary reference tool for level definitions
- **Interaction:** Expandable rows revealing detailed criteria
- **Location:** Central to page, after conceptual explanation

### 2. Impact × Autonomy Matrix (Scatter Plot)
- **Type:** Interactive 2D scatter plot
- **X-Axis:** Autonomy (4-5 gradations)
- **Y-Axis:** Impact (5 gradations)
- **Data Points:** 8-10 levels positioned strategically
- **Purpose:** Visualize level relationships and progression logic
- **Interaction:** Hover to reveal level names and descriptions

### 3. Topology Alignment Diagrams (Set of 3)
- **Type:** Static flow diagrams
- **Content:**
  - Diagram 1: Y-Model level mapping (IC/Manager split)
  - Diagram 2: W-Model level mapping (3+ tracks)
  - Diagram 3: Network Model level application (fluid paths)
- **Purpose:** Show how universal leveling adapts to different org structures
- **Location:** Below Impact×Autonomy Matrix

---

## Links on This Page

### Internal Links (6+)
1. `/framework/progression` - Related page: "See how levels map to Progression Pillars"
2. `/framework/guidelines` - Related page: "Learn about calibration process"
3. `/topologies` - Context link: "Understand Y, W, Network topologies"
4. `/shapes` - Related concept: "How shapes align with levels"
5. `/management` - Related page: "Manager level definitions"
6. `/framework` - Parent page: Framework overview

### External Links
**None** - Leveling page focuses on framework concepts; external references on References page

---

## User Journeys Touching This Page

### 1. Career Development Conversation (Manager + IC)
- **Entry:** Manager preparing for 1-on-1 or IC researching next level
- **Actions on Leveling:**
  - Use Interactive Leveling Table to review current and target level criteria
  - Compare IC's demonstrated impact/autonomy to level expectations
  - Identify specific gaps in impact scope or decision-making autonomy
  - Reference table during conversation for transparency
- **Exit:** Progression Pillars page (to create development plan) or stay for reference during conversation

### 2. Promotion Assessment (Manager or Calibration Team)
- **Entry:** Preparing for promotion cycle or calibration session
- **Actions on Leveling:**
  - Review leveling table for promotion target level
  - Use Impact×Autonomy Matrix to position candidate
  - Check distinction guidelines for borderline cases
  - Compare across multiple ICs for consistency
- **Exit:** Guidelines page (for calibration process) or stay for reference

### 3. Self-Assessment (Individual Contributor)
- **Entry:** Curious about current level or promotion readiness
- **Actions on Leveling:**
  - Identify current level in table
  - Explore next level criteria
  - Assess own impact and autonomy against definitions
  - Note gaps for discussion with manager
- **Exit:** Progression Pillars page (to assess proficiencies) or Shapes page (to understand skill profile)

### 4. Role Design (HR/People Team)
- **Entry:** Creating job descriptions or career ladder
- **Actions on Leveling:**
  - Use leveling table as template for role definitions
  - Adapt impact/autonomy criteria to organization's context
  - Check topology alignment for multi-track organizations
- **Exit:** Framework Guidelines (for implementation details) or stay to copy criteria

---

## Related Pages

**Primary Related:**
- `/framework/progression` - Proficiency expectations that map to these levels
- `/framework/guidelines` - How to apply levels in calibration and promotions
- `/topologies` - Structural models these levels operate within

**Secondary Related:**
- `/shapes` - How I/T/Pi profiles align with level expectations
- `/management` - Detailed management level definitions
- `/concepts` - Core concept definitions (impact, autonomy, etc.)

---

## Content Characteristics

**Tone:** Practical, precise, reference-focused  
**Length:** Medium (introductory text + large interactive table + diagrams)  
**Complexity:** Medium-High - requires understanding of career frameworks and organizational structure  
**Call-to-Action Intensity:** Low - primarily a reference tool, not a conversion page  
**Visual Density:** High - table dominates, supported by matrix and diagrams  

---

## SEO and Metadata (Inferred)

**Target Keywords:** career leveling, impact autonomy matrix, career levels framework, IC levels, engineering levels, career progression criteria  
**Meta Description (likely):** "Define career levels using the Impact × Autonomy framework. Interactive leveling table with criteria for 8+ levels across IC and Manager tracks."  
**Primary Audience:** Managers conducting assessments, ICs understanding career paths, HR designing role structures  

---

## Mobile Considerations

- Interactive table may require horizontal scroll or accordion-style mobile view
- Impact×Autonomy Matrix should be responsive (possibly switch to list view on small screens)
- Topology diagrams should stack vertically
- Expandable table rows work well on mobile with touch interactions

---

## Page Role in Site Architecture

**Position:** Core tactical tool within Framework section  
**Function:** Primary reference for level definitions and assessment  
**User Type:** Practitioners (managers, ICs, HR) needing specific criteria  
**Relation to Other Pages:**  
- Child of /framework (framework overview)
- Sibling to /framework/progression and /framework/guidelines
- Referenced from About, Home, Management pages

---

## Notes

- **Most Tactical Page:** Provides concrete, actionable criteria (vs. conceptual pages)
- **Interactive Focus:** Table and matrix make abstract levels concrete
- **Calibration Critical:** This page is likely open during every promotion/calibration meeting
- **Customization Opportunity:** Organizations may fork this table for their specific needs
- **Print-Friendly Consideration:** Table should be printable for offline reference
- **Version Sensitivity:** Level definitions are core framework; changes here affect entire system
- **Equity Impact:** Clear criteria promote fairness; vague criteria enable bias
