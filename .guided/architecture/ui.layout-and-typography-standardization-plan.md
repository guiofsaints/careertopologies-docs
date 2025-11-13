# Layout and Typography Standardization Plan

**Date:** November 6, 2025  
**Project:** CareerTopologies Frontend  
**Purpose:** Define global standards for layout width, sections, and typography using Radix Themes only

---

## Executive Summary

Based on the comprehensive inventory, this plan defines:

1. **GLOBAL LAYOUT STANDARD** - How to structure pages and sections
2. **GLOBAL TYPOGRAPHY SCALE** - Heading sizes and text sizes
3. **DECISION ON CUSTOM DESIGN-SYSTEM** - Keep or migrate to pure Radix Themes
4. **MIGRATION STRATEGY** - Phased approach to apply standards

---

## Critical Findings from Inventory

### Typography Issues (CRITICAL ❌)

- **95% of pages use raw HTML** `<h1>`, `<h2>`, `<h3>`, `<p>` with Tailwind classes
- **Only 5% use Radix Themes** `<Heading>` and `<Text>` (AboutPage sections)
- **PageHero uses raw HTML** for H1: `<h1 className="text-foreground mb-6">`
- **Inconsistent heading sizes**: Multiple Tailwind text sizes for same semantic level

### Layout Issues (HIGH ❌)

- **0% use Radix Container/Section** - All pages use Tailwind `max-w-*` + `mx-auto`
- **Custom design-system components exist** but used inconsistently (3 sections vs 14 pages)
- **Mixed content widths**: `max-w-6xl` (most common), `max-w-4xl` (some pages)
- **No unified section wrapper** - Raw `<section>` tags everywhere

---

## DECISION 1: Custom Design-System vs Pure Radix Themes

### Analysis

**Option A: Keep Custom Design-System (SectionContainer, GridContainer, etc.)**

- ✅ Already implemented in `StandardLayouts.tsx`
- ✅ Used in 3 shared sections (Hero, Audience, Framework)
- ✅ Provides higher-level abstractions (easier to use)
- ❌ Inconsistent usage (most pages don't use them)
- ❌ Still uses Tailwind internally (not pure Radix Themes)
- ❌ Adds extra layer of abstraction

**Option B: Migrate to Pure Radix Themes**

- ✅ Aligns with project goal (Radix Themes only)
- ✅ Removes custom layer
- ✅ Uses Radix design tokens directly
- ✅ Simpler, more maintainable
- ❌ Requires rewriting 3 sections that currently use custom components
- ❌ More verbose (lower-level primitives)

### DECISION: Hybrid Approach (Pragmatic)

**Strategy:**

1. **KEEP custom design-system components** for now (SectionContainer, GridContainer, Card, etc.)
2. **REFACTOR them internally** to use **pure Radix Themes** (Box, Flex, Grid, Container, Section)
3. **REPLACE all raw HTML typography** with **Radix Themes Heading/Text**
4. **MIGRATE all pages** to use **custom design-system components consistently**
5. **Future option**: Remove custom layer later if Radix Themes alone proves sufficient

**Rationale:**

- Pragmatic: Don't throw away working code (custom components)
- Incremental: Migrate to Radix Themes internally without changing page-level API
- Consistent: Ensure ALL pages use same components (not just 3 sections)
- Flexible: Can remove custom layer in Phase 2 if desired

---

## DECISION 2: Layout Pattern Refactoring

### Target Architecture (Hybrid)

**Custom Components (Refactored to Use Radix Themes):**

```tsx
// src/components/design-system/StandardLayouts.tsx
import { Box, Flex, Grid, Container, Section } from '@radix-ui/themes';

// SectionContainer -> wraps Radix Section + Container
export function SectionContainer({ variant, padding, children }) {
  return (
    <Section size={padding === 'lg' ? '3' : '2'}>
      <Container size={variant === 'narrow' ? '3' : '4'}>
        <Box px="6">{children}</Box>
      </Container>
    </Section>
  );
}

// GridContainer -> wraps Radix Grid
export function GridContainer({ cols, gap, children }) {
  return (
    <Grid columns={cols} gap={gap}>
      {children}
    </Grid>
  );
}

// Card -> wraps Radix Box
export function Card({ padding, children }) {
  return (
    <Box asChild>
      <div className="bg-card border border-border rounded-lg">
        <Box p={padding === 'sm' ? '4' : '6'}>{children}</Box>
      </div>
    </Box>
  );
}

// FlexContainer -> wraps Radix Flex
export function FlexContainer({ direction, align, justify, gap, children }) {
  return (
    <Flex direction={direction} align={align} justify={justify} gap={gap}>
      {children}
    </Flex>
  );
}
```

**Mapping:**

| Custom Component | Radix Themes Internals    |
| ---------------- | ------------------------- |
| SectionContainer | Section + Container + Box |
| GridContainer    | Grid                      |
| FlexContainer    | Flex                      |
| Card             | Box (with styling)        |
| ContentContainer | Box with maxWidth prop    |

---

## DECISION 3: Typography Standard

### Global Typography Scale

**Using Radix Themes Heading and Text only:**

| Semantic Role          | Component   | Props              | Visual Size | Usage                            |
| ---------------------- | ----------- | ------------------ | ----------- | -------------------------------- |
| **Page Title (H1)**    | `<Heading>` | `as="h1" size="8"` | ~36-48px    | One per page, in PageHero        |
| **Section Title (H2)** | `<Heading>` | `as="h2" size="6"` | ~24-30px    | Main sections within page        |
| **Subsection (H3)**    | `<Heading>` | `as="h3" size="5"` | ~20-24px    | Subsections within sections      |
| **Small Heading (H4)** | `<Heading>` | `as="h4" size="4"` | ~18px       | Minor headings, card titles      |
| **Body Text**          | `<Text>`    | `size="3"`         | ~16px       | Default paragraph text           |
| **Small Text**         | `<Text>`    | `size="2"`         | ~14px       | Captions, helper text, metadata  |
| **Tiny Text**          | `<Text>`    | `size="1"`         | ~12px       | Legal text, badges (rarely used) |

**Optional Props:**

- `color="gray"` for muted text
- `weight="medium"` or `weight="bold"` for emphasis
- `align="center"` or `align="left"` for alignment
- `mb="4"` or `mb="6"` for spacing (use Radix spacing props)

**Responsive Sizing (when needed):**

- Use responsive object notation: `size={{ initial: '7', md: '8' }}`
- Example for hero titles that need to shrink on mobile

---

## DECISION 4: Global Layout Standard

### Page Structure

**Every page should follow this structure:**

```tsx
export function SomePage() {
  return (
    <>
      {/* H1 in PageHero */}
      <PageHero
        title="Page Title"
        description="Page description text"
      />

      {/* Multiple sections */}
      <SectionContainer variant="default" padding="default">
        <Heading as="h2" size="6" mb="6" align="center">
          Section Title
        </Heading>
        <Text size="3" color="gray" mb="8" align="center">
          Section description
        </Text>

        <GridContainer cols={{ default: 1, md: 2, lg: 3 }} gap="md">
          {/* Cards or content */}
        </GridContainer>
      </SectionContainer>

      <SectionContainer variant="default" padding="default" background="muted">
        <Heading as="h2" size="6" mb="6" align="center">
          Another Section
        </Heading>
        {/* More content */}
      </SectionContainer>

      {/* Related pages at bottom */}
      <UnifiedRelatedPages pages={...} />
    </>
  );
}
```

---

### SectionContainer Standard

**Variants:**

- `variant="narrow"` → Container size="3" (max-width ~880px) for text-heavy pages
- `variant="default"` → Container size="4" (max-width ~1136px) for most pages ✅ **DEFAULT**
- `variant="wide"` → No Container, full-width (rarely used)

**Padding:**

- `padding="sm"` → Section size="1" (small vertical spacing) for sections after breadcrumbs
- `padding="default"` → Section size="2" (medium vertical spacing) ✅ **DEFAULT**
- `padding="lg"` → Section size="3" (large vertical spacing) for major sections, hero

**Background:**

- `background="default"` → Transparent/white ✅ **DEFAULT**
- `background="muted"` → `bg-muted/30` for alternating sections

---

### GridContainer Standard

**Common Patterns:**

- **2-column cards**: `cols={{ default: 1, md: 2 }} gap="md"`
- **3-column cards**: `cols={{ default: 1, md: 2, lg: 3 }} gap="md"` ✅ **MOST COMMON**
- **4-column explore**: `cols={{ default: 1, md: 2, lg: 4 }} gap="md"`

---

### Spacing Standard

**Radix Themes Spacing Props:**

- Use `mb`, `mt`, `p`, `px`, `py` props with Radix spacing scale (1-9)
- `mb="6"` → ~24px margin-bottom (standard heading spacing)
- `mb="8"` → ~32px margin-bottom (large section spacing)
- `p="6"` → ~24px padding (standard card padding)

**Mapping from Tailwind to Radix:**

- `mb-4` → `mb="4"` (~16px)
- `mb-6` → `mb="6"` (~24px)
- `mb-8` → `mb="8"` (~32px)
- `mb-12` → `mb="9"` (~48px) or custom

---

## Typography Refactoring Guide

### PageHero.tsx Refactoring

**Current (❌):**

```tsx
<h1 className="text-foreground mb-6">
  {title}
</h1>
<ContentContainer size="lg" center align="center">
  <p className="text-muted-foreground leading-relaxed">
    {description}
  </p>
</ContentContainer>
```

**Target (✅):**

```tsx
<Heading as="h1" size="8" mb="6" align="center">
  {title}
</Heading>
<Box maxWidth="900px" mx="auto">
  <Text size="3" color="gray" align="center">
    {description}
  </Text>
</Box>
```

---

### Section Heading Refactoring

**Current (❌):**

```tsx
<h2 className="text-3xl text-primary mb-12 text-center">
  Section Title
</h2>
<p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
  Section description
</p>
```

**Target (✅):**

```tsx
<Heading as="h2" size="6" mb="6" align="center" color="blue">
  Section Title
</Heading>
<Box maxWidth="700px" mx="auto" mb="8">
  <Text size="3" color="gray" align="center">
    Section description
  </Text>
</Box>
```

---

### Card Content Refactoring

**Current (❌):**

```tsx
<h3 className="text-foreground mb-3">
  {title}
</h3>
<p className="text-muted-foreground leading-relaxed">
  {description}
</p>
```

**Target (✅):**

```tsx
<Heading as="h3" size="5" mb="3">
  {title}
</Heading>
<Text size="3" color="gray">
  {description}
</Text>
```

---

## Implementation Phases

### Phase 1: Foundation (Refactor Custom Components)

**Goal:** Refactor custom design-system components to use Radix Themes internally.

**Scope:**

- `src/components/design-system/StandardLayouts.tsx`
- Refactor SectionContainer, GridContainer, FlexContainer, Card, ContentContainer to use Box/Flex/Grid/Container/Section

**Files changed:** 1

**Exit criteria:**

- Custom components use Radix Themes primitives ✅
- API remains the same (pages don't break) ✅
- Build succeeds ✅

---

### Phase 2: PageHero Typography

**Goal:** Replace raw HTML in PageHero with Radix Themes Heading/Text.

**Scope:**

- `src/components/media/PageHero.tsx`

**Changes:**

- H1: `<h1 className="...">` → `<Heading as="h1" size="8" mb="6" align="center">`
- P: `<p className="...">` → `<Text size="3" color="gray" align="center">`

**Files changed:** 1

**Exit criteria:**

- PageHero uses Radix Typography ✅
- All 14 pages still render correctly ✅
- Build succeeds ✅

---

### Phase 3: Shared Sections Typography

**Goal:** Replace raw HTML in shared sections with Radix Themes Heading/Text.

**Scope:**

- `src/components/sections/HeroSection.tsx`
- `src/components/sections/AudienceSection.tsx`
- `src/components/sections/FrameworkSection.tsx`
- `src/components/sections/UnifiedRelatedPages.tsx`

**Changes:**

- All h1/h2/h3/p → Radix Heading/Text with proper sizes

**Files changed:** 4

**Exit criteria:**

- Shared sections use Radix Typography ✅
- Homepage renders correctly ✅
- Build succeeds ✅

---

### Phase 4: Content Pages (Batch 1: Simplest)

**Goal:** Migrate pages with simpler structure first.

**Scope:**

- AboutPage.tsx (already partial, complete it)
- ManifestoPage.tsx
- ReferencesPage.tsx

**Changes:**

- Replace all h2/h3/p with Radix Heading/Text
- Keep SectionContainer structure (don't change layout yet)

**Files changed:** 3

**Exit criteria:**

- Pages use Radix Typography ✅
- Visual regression acceptable ✅
- Build succeeds ✅

---

### Phase 5: Framework Pages (Batch 2: Medium Complexity)

**Goal:** Migrate framework-related pages.

**Scope:**

- FrameworkPage.tsx
- GuidelinesPage.tsx
- TopologiesPage.tsx
- ShapesPage.tsx

**Changes:**

- Replace all h2/h3/h4/p with Radix Heading/Text
- May need to adjust spacing/sizing for complex layouts

**Files changed:** 4

**Exit criteria:**

- Pages use Radix Typography ✅
- Layouts still work ✅
- Build succeeds ✅

---

### Phase 6: Specialized Pages (Batch 3: Complex)

**Goal:** Migrate remaining pages with complex layouts.

**Scope:**

- LevelingPage.tsx
- ProgressionPillarsPage.tsx
- ManagementPage.tsx
- DevelopingLeadersPage.tsx
- ConceptsPage.tsx
- ContributingPage.tsx
- LawsPage.tsx

**Changes:**

- Replace all typography with Radix Heading/Text
- Handle complex visualizations (charts, matrices, flowcharts)

**Files changed:** 7

**Exit criteria:**

- All pages use Radix Typography ✅
- Complex components still render ✅
- Build succeeds ✅

---

### Phase 7: Layout Migration (Optional Future Phase)

**Goal:** If custom design-system components prove unnecessary, migrate to pure Radix Themes.

**Scope:** ALL pages and sections

**Changes:**

- Replace SectionContainer with Section + Container + Box
- Replace GridContainer with Grid
- Replace FlexContainer with Flex
- Replace Card with Box

**Status:** **DEFERRED** - Not in current scope, revisit after typography migration complete.

---

## Success Metrics

### Typography

| Metric                         | Current | Target  |
| ------------------------------ | ------- | ------- |
| Pages using Radix Heading/Text | ~5%     | 100% ✅ |
| Pages using raw HTML h/p       | ~95%    | 0% ✅   |
| Consistent H1 size             | No      | Yes ✅  |
| Consistent H2 size             | No      | Yes ✅  |
| Consistent body text size      | No      | Yes ✅  |

### Layout

| Metric                       | Current | Target (Phase 1-6) |
| ---------------------------- | ------- | ------------------ |
| Pages using SectionContainer | ~20%    | 100% ✅            |
| Pages using GridContainer    | ~10%    | 80%+ ✅            |
| Consistent content width     | No      | Yes ✅             |
| Radix Section/Container used | 0%      | 100% (internal) ✅ |

---

## Visual Design Decisions

### Color Usage in Typography

**Principle:** Use semantic color props, not custom CSS colors.

- **Primary accent** (blue): `color="blue"` for important headings
- **Muted/gray**: `color="gray"` for descriptions, body text
- **Foreground** (default): No color prop for standard text

**Current usage:**

- `.text-primary` → `color="blue"`
- `.text-foreground` → No color prop (default)
- `.text-muted-foreground` → `color="gray"`

---

### Alignment Patterns

**Sections:**

- Most sections: `align="center"` for headings and intro text
- Content: `align="left"` for cards and detailed content

**Pages:**

- Hero sections: `align="center"` ✅
- Section titles: `align="center"` ✅
- Section descriptions: `align="center"` ✅
- Cards/content: `align="left"` ✅

---

### Spacing Rhythm

**Vertical Spacing Pattern:**

- Section padding: `py-16` (~64px) = Section size="2" ✅
- Heading bottom margin: `mb="6"` (~24px) ✅
- Description bottom margin: `mb="8"` (~32px) ✅
- Card spacing: `gap="6"` (~24px) in grids ✅

---

## Migration Execution Rules

### Per-Batch Rules

1. **Small batches**: 1-4 files max per batch
2. **Run formatters**: Prettier after each batch
3. **Run lint**: Fix all lint errors before proceeding
4. **Run build**: Fix all TypeScript errors before proceeding
5. **Visual check**: Open pages in browser, verify rendering
6. **Commit**: Commit each batch separately with clear message

### Error Handling

If any batch fails:

- Fix errors in the same batch
- Do NOT proceed to next batch
- Revert if unfixable, rethink approach

---

## Rollback Strategy

**Per Phase:**

- Each phase is one commit (or multiple small commits)
- If issues arise, `git revert` the phase commits

**Full Rollback:**

- Work on feature branch `feat/layout-typography-standardization`
- Merge to main only when complete
- Can abandon branch if necessary

---

## Documentation Updates

After migration complete:

- Update README (if typography/layout documented)
- Document typography scale in `design-system/` folder
- Document layout patterns in `design-system/` folder
- Add examples to design system showcase page (if exists)

---

**End of Plan**
