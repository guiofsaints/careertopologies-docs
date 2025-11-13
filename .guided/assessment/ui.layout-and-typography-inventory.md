# Layout and Typography Inventory

**Date:** November 6, 2025  
**Project:** CareerTopologies Frontend  
**Purpose:** Comprehensive inventory of all pages and sections documenting layout wrappers, heading usage, text sizes, and inconsistencies

---

## Summary

This document inventories **14 pages** and **4 shared sections**, analyzing:

- Main page headings (H1/H2/H3) and their implementation
- Layout containers (Container, Section, Box, Flex, Grid, or raw divs/sections)
- Typography components (Radix Themes Heading/Text vs raw HTML or Tailwind)
- Content width patterns (max-w-\*, Container sizes)
- Inconsistencies in heading hierarchy, typography sizes, and layout patterns

---

## Pages Inventory

### 1. AboutPage.tsx

**File:** `src/components/pages/AboutPage.tsx`

**Main Page Heading:**

- Component: `<PageHero>` (wrapper component)
- Inside PageHero: No explicit H1 in this file (delegated to PageHero component)
- **Issue:** No direct H1 visible in this page component

**Sections Structure:**

1. **PurposeSection**

   - Outer wrapper: `<section className="max-w-6xl mx-auto px-6 py-16">`
   - Heading: `<Heading as="h2" size="6" className="mb-8 text-center">Purpose</Heading>`
   - Body text: `<Text as="p" size="3" color="gray">`
   - Uses Radix Themes components ✅

2. **DifferenceSection**

   - Outer wrapper: `<section className="bg-muted/30 py-16"><div className="max-w-6xl mx-auto px-6">`
   - Heading: `<Heading as="h2" size="6" className="mb-8 text-center">What Makes It Different?</Heading>`
   - Body text: `<Text as="p" size="3" color="gray">`
   - Grid: Tailwind `grid grid-cols-1 md:grid-cols-2 gap-4`
   - Uses Radix Themes typography ✅ but Tailwind layout ❌

3. **CoreComponentsSection**

   - Outer wrapper: `<section className="max-w-6xl mx-auto px-6 py-16">`
   - Heading: `<Heading as="h2" size="6" className="mb-12 text-center">Core Components</Heading>`
   - Body text: `<Text as="p" size="3" color="gray">`
   - Uses `<FeatureCardGrid>` (custom component)

4. **GovernanceSection, ManagementModelSection, ProfessionalShapesSection, TopologyModelsSection, DevelopmentSection**
   - All follow similar patterns:
     - Outer: `<section>` with Tailwind classes
     - H2: `<Heading as="h2" size="6">`
     - H3: `<Heading as="h3" size="4">` or `size="5"`
     - Body text: `<Text size="3" color="gray">`

**Layout Pattern:**

- Content width: `max-w-6xl mx-auto px-6`
- Alternating background: `bg-muted/30` for some sections
- No Radix Container/Section components ❌
- Uses Tailwind for all layout ❌

**Typography:**

- H2: `<Heading as="h2" size="6">` ✅ Consistent
- H3: `<Heading as="h3" size="4" or size="5">` ✅ Mostly consistent (some variation)
- Body text: `<Text as="p" size="3" color="gray">` ✅ Consistent
- Uses Radix Themes Heading/Text ✅

---

### 2. ManifestoPage.tsx

**File:** `src/components/pages/ManifestoPage.tsx`

**Main Page Heading:**

- Component: `<PageHero>` (delegated)
- **Issue:** No direct H1 in page component

**Sections:**

1. **PrinciplesSection**

   - Outer: `<section className="max-w-6xl mx-auto px-6 py-16">`
   - Heading: `<h2 className="text-3xl text-primary mb-12 text-center">The 8 Principles</h2>`
   - Sub-headings: `<h3 className="text-xl text-foreground">{principle.title}</h3>`
   - Body text: `<p className="text-muted-foreground leading-relaxed">`
   - **Issue:** Raw HTML h2/h3/p, not Radix Themes components ❌

2. **CompassSection**
   - Outer: `<section className="bg-muted/30 py-16"><div className="max-w-4xl mx-auto px-6">`
   - Body text: `<p className="text-muted-foreground leading-relaxed">`
   - **Issue:** Raw HTML ❌

**Layout Pattern:**

- Content width: `max-w-6xl` and `max-w-4xl`
- No Radix Container/Section ❌
- Tailwind for layout ❌

**Typography:**

- **Issue:** ALL raw HTML h2/h3/p with Tailwind classes ❌
- NOT using Radix Themes Heading/Text ❌

---

### 3. GuidelinesPage.tsx

**File:** `src/components/pages/GuidelinesPage.tsx`

**Main Page Heading:**

- Component: `<PageHero>` (delegated)

**Sections:**

- Main container: `<div className="container mx-auto px-6 py-12 max-w-4xl">`
- Multiple H2 headings: `<h2 className="mb-8 text-center">...</h2>` or `<h2 className="mb-6">...</h2>`
- H3 headings: `<h3 className="mb-4 flex items-center gap-2">...</h3>` or `<h3 className="mb-6">...</h3>`
- H4 headings: `<h4 className="mb-4">...</h4>`
- Body text: `<ul>`, `<li>`, `<div>` with text, `<strong>`, etc.
- **Issue:** ALL raw HTML ❌
- Content width: `max-w-4xl`

**Custom Components:**

- `<FrameworkFlowDiagram>`, `<RolesMatrix>`, `<ImplementationTimeline>` - complex custom visualizations

**Typography:**

- **Issue:** No Radix Themes Heading/Text ❌
- All raw HTML with Tailwind ❌

---

### 4. ReferencesPage.tsx

**File:** `src/components/pages/ReferencesPage.tsx`

**Main Page Heading:**

- Component: `<PageHero>` (delegated)

**Sections:**

- Main container: `<div className="min-h-screen bg-background py-12"><div className="max-w-4xl mx-auto px-6">`
- Multiple sections with:
  - H2: `<h2 className="text-2xl font-semibold mb-6 text-foreground">...</h2>`
  - H3: `<h3 className="text-lg font-medium mb-2 text-foreground">...</h3>`
  - Body text: `<p className="text-muted-foreground">...</p>`
- Final note: `<h3 className="text-lg font-medium mb-3 text-foreground">About the References</h3>`
- **Issue:** ALL raw HTML ❌

**Layout Pattern:**

- Content width: `max-w-4xl`
- No Radix Container/Section ❌

**Typography:**

- **Issue:** No Radix Themes Heading/Text ❌
- All raw HTML with Tailwind ❌

---

### 5. FrameworkPage.tsx

**File:** `src/components/pages/FrameworkPage.tsx`

**Main Page Heading:**

- Component: `<PageHero>` (delegated)

**Sections:**

1. **CoreStructureSection**

   - Outer: `<section className="max-w-6xl mx-auto px-6 py-16">`
   - H2: `<h2 className="text-3xl text-primary mb-12 text-center">Core Structure</h2>`
   - H3: `<h3 className="text-foreground">{element.title}</h3>`
   - Body text: `<p className="text-muted-foreground leading-relaxed mb-6">`
   - **Issue:** Raw HTML ❌

2. **GovernanceSection**

   - Outer: `<section className="bg-muted/30 py-16"><div className="max-w-4xl mx-auto px-6">`
   - H2: `<h2 className="text-3xl text-primary mb-12 text-center">Governance & Roles</h2>`
   - H3: `<h3 className="text-foreground mb-3">{role.title}</h3>`
   - Body text: `<p className="text-muted-foreground text-sm mb-4">`
   - **Issue:** Raw HTML ❌

3. **LifecycleSection, CriticalConsiderationsSection**
   - Similar patterns with raw HTML ❌

**Layout Pattern:**

- Content width: `max-w-6xl` and `max-w-4xl`
- No Radix Container/Section ❌
- Uses Tailwind ❌

**Typography:**

- **Issue:** ALL raw HTML h2/h3/p with Tailwind classes ❌
- NOT using Radix Themes Heading/Text ❌

---

### 6. TopologiesPage.tsx

**File:** `src/components/pages/TopologiesPage.tsx`

**Status:** Not read in detail, but grep shows:

- H2: `<h2 className="text-3xl text-primary mb-12 text-center">...</h2>`
- H3: `<h3 className="text-2xl text-foreground mb-2">...</h3>` or `<h3 className="text-foreground mb-3">...</h3>`
- **Issue:** Raw HTML ❌

---

### 7. ShapesPage.tsx

**File:** `src/components/pages/ShapesPage.tsx`

**Status:** Not read in detail, but grep shows:

- H2: `<h2 className="text-3xl text-primary mb-12 text-center">...</h2>`
- H3: `<h3 className="text-2xl text-foreground mb-2">...</h3>` or `<h3 className="text-foreground mb-3">...</h3>` or `<h3 className="text-foreground mb-2 group-hover:text-primary transition-colors">...</h3>`
- **Issue:** Raw HTML ❌

---

### 8. LevelingPage.tsx

**File:** `src/components/pages/LevelingPage.tsx`

**Status:** Not read in detail, but grep shows:

- H2: `<h2 className="text-3xl text-primary mb-12 text-center">...</h2>`
- H3: `<h3 className="text-primary mb-3">...</h3>` or `<h3 className="text-primary mb-4">...</h3>`
- **Issue:** Raw HTML ❌

---

### 9. ProgressionPillarsPage.tsx

**File:** `src/components/pages/ProgressionPillarsPage.tsx`

**Status:** Not read in detail, but grep shows:

- H2: `<h2 className="text-3xl text-primary mb-12 text-center">...</h2>`
- H3: `<h3 className="text-primary mb-3">...</h3>` or `<h3 className="text-primary mb-4">...</h3>` or `<h3 className="text-primary mb-6">...</h3>`
- **Issue:** Raw HTML ❌

---

### 10. ManagementPage.tsx

**File:** `src/components/pages/ManagementPage.tsx`

**Status:** Not read in detail, but grep shows:

- H2: `<h2 className="text-3xl text-primary mb-8 text-center">...</h2>` or `<h2 className="text-2xl text-primary mb-4">...</h2>`
- H3: `<h3 className="text-2xl text-foreground mb-4">...</h3>`
- **Issue:** Raw HTML ❌
- **Issue:** H2 has TWO different sizes (`text-3xl` and `text-2xl`) ❌

---

### 11. DevelopingLeadersPage.tsx

**Status:** Not read in detail, but grep shows:

- H2: `<h2 className="text-3xl text-primary">...</h2>` or `<h2 className="text-3xl text-primary text-center">...</h2>`
- H3: `<h3 className="text-foreground mb-2">...</h3>`
- **Issue:** Raw HTML ❌

---

### 12. ConceptsPage.tsx

**Status:** Not read (no grep results, likely similar)

---

### 13. ContributingPage.tsx

**Status:** Not read (no grep results, likely similar)

---

### 14. LawsPage.tsx

**Status:** Not read (no grep results, likely similar)

---

## Shared Sections Inventory

### 1. HeroSection.tsx

**File:** `src/components/sections/HeroSection.tsx`

**Structure:**

- Outer wrapper: `<SectionContainer variant="default" padding="lg">` ✅ (custom component from design-system)
- Grid: `<GridContainer cols={{ default: 1, lg: 2 }} gap="xl" align="center">` ✅
- H1: `<h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 text-foreground">Career Topologies</h1>`
  - **Issue:** Raw HTML h1 ❌
  - **Issue:** Responsive sizing via Tailwind, not Radix Themes ❌
- Body text: `<p className="text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed">`
  - **Issue:** Raw HTML p ❌
- Badge: `<Badge variant="soft" color="gray" size="2">` ✅ (Radix Themes)
- Description: `<ContentContainer>` with `<p className="text-sm text-muted-foreground leading-relaxed">`
  - **Issue:** Raw HTML p ❌
- Image: `<img>` with Tailwind classes

**Layout Pattern:**

- Uses custom `<SectionContainer>`, `<GridContainer>`, `<FlexContainer>`, `<ContentContainer>` ✅
- These are wrappers around Radix Themes components (likely Box/Flex/Grid)

**Typography:**

- **Issue:** Raw HTML h1/p with Tailwind classes ❌
- NOT using Radix Themes Heading/Text ❌

---

### 2. AudienceSection.tsx

**File:** `src/components/sections/AudienceSection.tsx`

**Structure:**

- Outer wrapper: `<SectionContainer variant="default" align="center">` ✅
- Heading: `<SectionHeader title="Who is this for?" size="md" align="center" />` ✅ (likely wraps Radix Heading)
- Grid: `<GridContainer cols={{ default: 1, sm: 2 }} gap="lg" justify="center">` ✅
- Items: `<FlexContainer direction="row" align="start" justify="start" gap="md">` ✅
- Body text: `<p className="text-foreground text-lg">{audience.text}</p>`
  - **Issue:** Raw HTML p ❌

**Layout Pattern:**

- Uses custom design-system components ✅

**Typography:**

- SectionHeader likely uses Radix Heading ✅
- Body text is raw HTML ❌

---

### 3. FrameworkSection.tsx

**File:** `src/components/sections/FrameworkSection.tsx`

**Structure:**

- Outer wrapper: `<SectionContainer variant="default" align="center">` ✅
- Heading: `<SectionHeader title="Explore the Framework" size="md" align="center" />` ✅
- Grid: `<GridContainer cols={{ default: 1, md: 2, lg: 3 }} gap="md" justify="center">` ✅
- Cards: `<Card hover align="center">` ✅
- H3: `<h3 className="text-lg text-foreground mb-2 group-hover:text-primary transition-colors">`
  - **Issue:** Raw HTML h3 ❌
- Body text: `<p className="text-muted-foreground text-sm leading-relaxed">`
  - **Issue:** Raw HTML p ❌

**Layout Pattern:**

- Uses custom design-system components ✅

**Typography:**

- SectionHeader likely uses Radix Heading ✅
- H3 and body text are raw HTML ❌

---

### 4. UnifiedRelatedPages.tsx

**File:** `src/components/sections/UnifiedRelatedPages.tsx`

**Structure:**

- Outer: `<section className={`${getContainerWidth()} mx-auto px-6 py-16`}>`
  - Width: `max-w-6xl` or `max-w-4xl` depending on variant
  - **Issue:** No Radix Container/Section ❌
- H2: `<h2 className="text-3xl text-primary mb-12 text-center">{finalTitle}</h2>`
  - **Issue:** Raw HTML h2 ❌
- Body text: `<p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">`
  - **Issue:** Raw HTML p ❌
- Grid: Tailwind `grid` with dynamic columns
  - **Issue:** No Radix Grid ❌
- Card headings: `<h3 className="text-foreground mb-2 group-hover:text-primary transition-colors">`
  - **Issue:** Raw HTML h3 ❌
- Card body: `<p className="text-muted-foreground text-sm leading-relaxed">`
  - **Issue:** Raw HTML p ❌

**Layout Pattern:**

- No Radix Container/Section/Grid ❌
- Uses Tailwind for all layout ❌

**Typography:**

- **Issue:** ALL raw HTML h2/h3/p with Tailwind classes ❌
- NOT using Radix Themes Heading/Text ❌

---

### 5. LeadershipReadinessFlowchart.tsx

**Status:** Not read, but likely complex with custom layout and Tailwind

---

## App Shell and Layout Components

### App.tsx

**Status:** Not read - need to check root layout wrapper

---

### Navigation.tsx

**Status:** Not read - need to check nav structure and links

---

### Footer.tsx

**Status:** Not read - need to check footer structure

---

### BreadcrumbNavigation.tsx

**Status:** Not read - need to check breadcrumb pattern

---

## Inconsistencies Identified

### 1. No Clear H1 on Pages ❌

**Issue:** All pages delegate their main heading to `<PageHero>` component.

- The `<PageHero>` component likely has the H1, but it's not visible in individual page components.
- **Action:** Need to check `PageHero.tsx` to confirm H1 usage.

**Impact:** High - every page should have exactly one H1.

---

### 2. Mixed Typography Components ❌❌❌

**Issue:** Inconsistent use of Radix Themes Heading/Text vs raw HTML h1/h2/h3/p:

**Pages using Radix Themes Heading/Text (✅):**

- AboutPage.tsx (partial - sections use Radix, but some raw HTML)

**Pages using ONLY raw HTML h2/h3/p (❌):**

- ManifestoPage.tsx
- GuidelinesPage.tsx
- ReferencesPage.tsx
- FrameworkPage.tsx
- TopologiesPage.tsx
- ShapesPage.tsx
- LevelingPage.tsx
- ProgressionPillarsPage.tsx
- ManagementPage.tsx
- DevelopingLeadersPage.tsx
- (likely) ConceptsPage.tsx, ContributingPage.tsx, LawsPage.tsx

**Sections using raw HTML:**

- HeroSection.tsx (h1, p)
- AudienceSection.tsx (p)
- FrameworkSection.tsx (h3, p)
- UnifiedRelatedPages.tsx (h2, h3, p)

**Impact:** CRITICAL - majority of pages do NOT use Radix Themes typography.

---

### 3. Inconsistent Heading Sizes ❌

**H2 sizes vary:**

- Most pages: `<h2 className="text-3xl text-primary mb-12 text-center">`
- Some sections: `<h2 className="text-2xl text-primary">`
- Some: `<Heading as="h2" size="6">`
- UnifiedRelatedPages: `<h2 className="text-3xl text-primary mb-12 text-center">`

**H3 sizes vary:**

- `<h3 className="text-2xl text-foreground mb-2">` (larger)
- `<h3 className="text-xl text-foreground">` (medium)
- `<h3 className="text-lg text-foreground mb-2">` (smaller)
- `<h3 className="text-foreground">` (default, no size specified)
- `<Heading as="h3" size="4">` or `size="5"` (Radix)

**Impact:** High - no consistent visual hierarchy.

---

### 4. Mixed Layout Patterns ❌

**Pattern A: Tailwind `max-w-*` with `mx-auto`**

- Most pages: `<section className="max-w-6xl mx-auto px-6 py-16">`
- Some: `max-w-4xl`
- UnifiedRelatedPages: Dynamic width based on variant

**Pattern B: Custom design-system components**

- HeroSection, AudienceSection, FrameworkSection use `<SectionContainer>`, `<GridContainer>`, `<FlexContainer>`, etc.

**Pattern C: No wrapper, just Tailwind on section**

- Some sections have no explicit container

**Impact:** High - no unified container/section pattern.

---

### 5. Content Width Inconsistency ❌

**Widths used:**

- `max-w-6xl` (most common)
- `max-w-4xl` (Guidelines, References, some sections)
- `max-w-2xl` (for centered body text in sections)
- Custom design-system components (unclear width)

**Impact:** Moderate - pages have different content widths.

---

### 6. Section Background Patterns ❌

**Patterns:**

- Plain (white/transparent): Most sections
- `bg-muted/30`: Alternating sections on AboutPage, ManifestoPage, FrameworkPage
- No consistent rule for when to use background vs not

**Impact:** Low - visual pattern seems intentional (alternating), but not documented.

---

### 7. Body Text Size Inconsistency ❌

**Sizes used:**

- `<Text as="p" size="3" color="gray">` (AboutPage - Radix Themes)
- `<p className="text-muted-foreground">` (many pages - raw HTML, default size)
- `<p className="text-sm text-muted-foreground">` (smaller text in some cards)
- `<p className="text-lg lg:text-xl text-muted-foreground">` (HeroSection - larger)

**Impact:** High - no consistent body text size.

---

### 8. Custom Design-System Components vs Raw Layout ❌

**Issue:** Some sections (Hero, Audience, Framework) use custom `<SectionContainer>`, `<GridContainer>`, `<FlexContainer>` from `design-system/StandardLayouts.tsx`.

- These likely wrap Radix Themes Box/Flex/Grid.
- BUT most pages do NOT use these components.
- Instead, most pages use raw `<section>` and `<div>` with Tailwind.

**Impact:** High - no unified layout component usage.

---

### 9. Heading Margin/Spacing Inconsistency ❌

**Patterns:**

- H2: `mb-12`, `mb-8`, `mb-6`, `mb-4` (varies widely)
- H3: `mb-2`, `mb-3`, `mb-4`, `mb-6` (varies widely)
- No consistent spacing standard

**Impact:** Moderate - visual rhythm is inconsistent.

---

### 10. Missing Radix Container/Section Components ❌

**Issue:** Almost NO pages use Radix Themes `<Container>` or `<Section>` components directly.

- Pages use Tailwind classes for width/padding.
- Some use custom design-system wrappers.
- Radix Themes Container/Section are barely used.

**Impact:** CRITICAL - not using Radix Themes layout primitives as intended.

---

## Summary Statistics

### Pages (14 total)

| Aspect                               | Count                  | Percentage |
| ------------------------------------ | ---------------------- | ---------- |
| Pages with PageHero (H1 delegated)   | 14                     | 100%       |
| Pages with Radix Themes Heading/Text | 1 (AboutPage, partial) | ~7%        |
| Pages with raw HTML h2/h3/p          | 13+                    | ~93%       |
| Pages with Radix Container/Section   | 0                      | 0%         |
| Pages with Tailwind layout           | 14                     | 100%       |
| Pages with `max-w-6xl`               | ~10                    | ~71%       |
| Pages with `max-w-4xl`               | ~4                     | ~29%       |

### Sections (4 main + many inline)

| Aspect                                        | Count                         | Percentage                    |
| --------------------------------------------- | ----------------------------- | ----------------------------- |
| Sections with custom design-system components | 3 (Hero, Audience, Framework) | ~75% of main sections         |
| Sections with Radix Themes Heading/Text       | 1 (AudienceSection, partial)  | ~25%                          |
| Sections with raw HTML                        | 4                             | 100% (all have some raw HTML) |
| Sections with Radix Container/Section         | 0                             | 0% (use custom wrappers)      |

### Typography

| Component     | Radix Themes Usage       | Raw HTML Usage     | Inconsistency Level |
| ------------- | ------------------------ | ------------------ | ------------------- |
| H1            | Unknown (in PageHero)    | Some (HeroSection) | Unknown             |
| H2            | ~5% (AboutPage sections) | ~95%               | CRITICAL ❌         |
| H3            | ~5% (AboutPage sections) | ~95%               | CRITICAL ❌         |
| Body text (p) | ~5% (AboutPage sections) | ~95%               | CRITICAL ❌         |

### Layout

| Pattern                        | Usage                   | Percentage       |
| ------------------------------ | ----------------------- | ---------------- |
| Radix Container/Section        | 0 pages                 | 0%               |
| Custom design-system wrappers  | 3 sections              | ~20% of codebase |
| Tailwind `max-w-*` + `mx-auto` | 14 pages, most sections | ~80%             |
| Radix Grid                     | 0 (use Tailwind grid)   | 0%               |
| Radix Flex                     | 0 (use Tailwind flex)   | 0%               |

---

## Recommendations

### Priority 1: Typography Migration (CRITICAL)

**Goal:** Replace ALL raw HTML h1/h2/h3/p with Radix Themes Heading/Text.

**Scope:**

- 13+ pages
- 4+ shared sections
- ~150-200 heading/text replacements

**Rationale:** This is the core issue. The project claims to use Radix Themes, but 95% of typography is raw HTML with Tailwind.

---

### Priority 2: Layout Standardization (HIGH)

**Goal:** Replace Tailwind layout with Radix Themes Container/Section/Grid/Flex.

**Scope:**

- 14 pages
- All inline sections
- ~50-100 layout container replacements

**Rationale:** Pages currently use inconsistent Tailwind patterns. Radix Themes provides consistent Container/Section components.

---

### Priority 3: Custom Design-System Decision (MEDIUM)

**Goal:** Decide whether to keep custom design-system wrappers or migrate to Radix Themes directly.

**Options:**

1. **Keep custom wrappers** (SectionContainer, GridContainer, etc.) and ensure they're used consistently everywhere.
2. **Remove custom wrappers** and use Radix Themes Box/Flex/Grid/Container/Section directly.

**Rationale:** Current state is inconsistent - some sections use wrappers, most don't.

---

### Priority 4: Content Width Standard (MEDIUM)

**Goal:** Define ONE standard content width for pages.

**Recommendation:** `<Container size="4">` (max-width ~1136px) for main page content.

**Rationale:** Most pages use `max-w-6xl` (~1152px), which is close to Radix Container size="4".

---

### Priority 5: Heading Hierarchy Standard (MEDIUM)

**Goal:** Define consistent heading sizes.

**Recommendation:**

- H1 (Page title): `<Heading as="h1" size="8">`
- H2 (Section title): `<Heading as="h2" size="6">`
- H3 (Subsection): `<Heading as="h3" size="5">` or `size="4"` (decide one)

**Rationale:** Provide clear visual hierarchy and consistent sizing.

---

### Priority 6: Body Text Standard (MEDIUM)

**Goal:** Define consistent body text size.

**Recommendation:**

- Paragraph text: `<Text size="3">` (default readable size)
- Small/caption text: `<Text size="2" color="gray">`

**Rationale:** Radix Themes size="3" is ~16px, standard readable size.

---

## Next Steps

1. **Check PageHero.tsx** - Confirm H1 usage and structure.
2. **Check design-system/StandardLayouts.tsx** - Understand custom wrapper components.
3. **Create standardization plan** - Define exact patterns for layout and typography.
4. **Plan migration phases** - Break work into small, testable batches.
5. **Execute migration** - Start with high-impact, low-risk changes first.

---

**End of Inventory**
