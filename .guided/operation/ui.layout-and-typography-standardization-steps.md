# Layout and Typography Standardization - Execution Steps

**Date:** November 6, 2025  
**Project:** CareerTopologies Frontend  
**Purpose:** Detailed, executable steps for standardizing layout and typography using Radix Themes

---

## Overview

This document translates the standardization plan into **small, executable batches** with explicit file lists and changes.

**Strategy:** Hybrid approach - refactor custom design-system components to use Radix Themes internally, then migrate all pages to use consistent typography.

---

## Phase 1: Foundation (Refactor Custom Components)

### Batch 1.1: Refactor StandardLayouts.tsx

**Files:**

- `src/components/design-system/StandardLayouts.tsx`

**Actions:**

1. **Import Radix Themes:**

```tsx
import { Box, Flex, Grid, Container, Section } from '@radix-ui/themes';
```

2. **Refactor SectionContainer:**

   - Current: Uses Tailwind classes internally
   - Target: Use Radix `<Section>` + `<Container>` + `<Box>`
   - Map `padding` prop to Section `size` prop
   - Map `variant` prop to Container `size` prop

3. **Refactor GridContainer:**

   - Current: Uses Tailwind `grid` classes
   - Target: Use Radix `<Grid>` with `columns` and `gap` props
   - Convert cols object to Radix responsive notation

4. **Refactor FlexContainer:**

   - Current: Uses Tailwind `flex` classes
   - Target: Use Radix `<Flex>` with direction, align, justify, gap props

5. **Refactor Card:**

   - Current: Uses div with Tailwind classes
   - Target: Use Radix `<Box>` with padding props
   - Keep styling classes for border/background (acceptable custom CSS)

6. **Refactor ContentContainer:**
   - Current: Uses div with `max-w-*` classes
   - Target: Use Radix `<Box>` with `maxWidth` prop

**Commands:**

```powershell
# After changes, run:
pnpm prettier "src/components/design-system/StandardLayouts.tsx" --write
pnpm lint
pnpm build
```

**Exit Criteria:**

- ✅ File uses Radix Box/Flex/Grid/Container/Section
- ✅ Prettier passes
- ✅ Lint passes
- ✅ Build passes
- ✅ No visual regressions (check pages using these components)

---

## Phase 2: PageHero Typography

### Batch 2.1: Refactor PageHero.tsx

**Files:**

- `src/components/media/PageHero.tsx`

**Actions:**

1. **Import Radix Themes:**

```tsx
import { Heading, Text, Box } from '@radix-ui/themes';
```

2. **Replace H1:**

   - Current: `<h1 className="text-foreground mb-6">{title}</h1>`
   - Target: `<Heading as="h1" size="8" mb="6" align="center">{title}</Heading>`

3. **Replace ContentContainer + p:**
   - Current: `<ContentContainer size="lg" center align="center"><p className="text-muted-foreground leading-relaxed">{description}</p></ContentContainer>`
   - Target: `<Box maxWidth="900px" mx="auto"><Text size="3" color="gray" align="center">{description}</Text></Box>`
   - OR keep ContentContainer if refactored in Phase 1

**Commands:**

```powershell
pnpm prettier "src/components/media/PageHero.tsx" --write
pnpm lint
pnpm build
pnpm dev  # Visual check: visit any page, verify hero looks correct
```

**Exit Criteria:**

- ✅ PageHero uses Radix Heading and Text
- ✅ All 14 pages render correctly with new PageHero
- ✅ H1 size and spacing look correct
- ✅ Build passes

---

## Phase 3: Shared Sections Typography

### Batch 3.1: HeroSection.tsx

**Files:**

- `src/components/sections/HeroSection.tsx`

**Actions:**

1. **Import Radix Themes:**

```tsx
import { Heading, Text, Box } from '@radix-ui/themes';
```

2. **Replace H1:**

   - Current: `<h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 text-foreground">Career Topologies</h1>`
   - Target: `<Heading as="h1" size={{ initial: '7', md: '8', lg: '9' }} mb="6">Career Topologies</Heading>`
   - Note: Use responsive sizing for large hero title

3. **Replace paragraphs:**

   - Current: `<p className="text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed">...</p>`
   - Target: `<Text size={{ initial: '3', lg: '4' }} color="gray" mb="8">...</Text>`

4. **Replace small description:**
   - Current: `<p className="text-sm text-muted-foreground leading-relaxed">...</p>`
   - Target: `<Text size="2" color="gray">...</Text>`

**Commands:**

```powershell
pnpm prettier "src/components/sections/HeroSection.tsx" --write
pnpm lint
pnpm build
pnpm dev  # Visual check: visit homepage, verify hero looks correct
```

**Exit Criteria:**

- ✅ HeroSection uses Radix typography
- ✅ Hero title responsive sizing works
- ✅ Badge and image still render correctly
- ✅ Build passes

---

### Batch 3.2: AudienceSection.tsx

**Files:**

- `src/components/sections/AudienceSection.tsx`

**Actions:**

1. **Import Radix Themes:**

```tsx
import { Text } from '@radix-ui/themes';
```

2. **Replace paragraphs:**
   - Current: `<p className="text-foreground text-lg">{audience.text}</p>`
   - Target: `<Text size="3">{audience.text}</Text>`
   - Note: SectionHeader likely already uses Heading (from design-system), verify

**Commands:**

```powershell
pnpm prettier "src/components/sections/AudienceSection.tsx" --write
pnpm lint
pnpm build
pnpm dev  # Visual check: homepage
```

**Exit Criteria:**

- ✅ AudienceSection uses Radix Text
- ✅ Build passes

---

### Batch 3.3: FrameworkSection.tsx

**Files:**

- `src/components/sections/FrameworkSection.tsx`

**Actions:**

1. **Import Radix Themes:**

```tsx
import { Heading, Text } from '@radix-ui/themes';
```

2. **Replace H3 in cards:**

   - Current: `<h3 className="text-lg text-foreground mb-2 group-hover:text-primary transition-colors">{framework.title}</h3>`
   - Target: `<Heading as="h3" size="4" mb="2" className="group-hover:text-primary transition-colors">{framework.title}</Heading>`
   - Note: Keep className for hover effect

3. **Replace paragraphs:**
   - Current: `<p className="text-muted-foreground text-sm leading-relaxed">{framework.description}</p>`
   - Target: `<Text size="2" color="gray">{framework.description}</Text>`

**Commands:**

```powershell
pnpm prettier "src/components/sections/FrameworkSection.tsx" --write
pnpm lint
pnpm build
pnpm dev  # Visual check: homepage
```

**Exit Criteria:**

- ✅ FrameworkSection uses Radix typography
- ✅ Card hover effects still work
- ✅ Build passes

---

### Batch 3.4: UnifiedRelatedPages.tsx

**Files:**

- `src/components/sections/UnifiedRelatedPages.tsx`

**Actions:**

1. **Import Radix Themes:**

```tsx
import { Heading, Text } from '@radix-ui/themes';
```

2. **Replace H2 (section title):**

   - Current: `<h2 className="text-3xl text-primary mb-12 text-center">{finalTitle}</h2>`
   - Target: `<Heading as="h2" size="6" mb="9" align="center" color="blue">{finalTitle}</Heading>`

3. **Replace description paragraph:**

   - Current: `<p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">{finalDescription}</p>`
   - Target: `<Box maxWidth="700px" mx="auto" mb="9"><Text size="3" color="gray" align="center">{finalDescription}</Text></Box>`

4. **Replace H3 in cards:**

   - Current: `<h3 className="text-foreground mb-2 group-hover:text-primary transition-colors">{page.title}</h3>`
   - Target: `<Heading as="h3" size="4" mb="2" className="group-hover:text-primary transition-colors">{page.title}</Heading>`

5. **Replace card body text:**

   - Current: `<p className="text-muted-foreground text-sm leading-relaxed">{page.description}</p>`
   - Target: `<Text size="2" color="gray">{page.description}</Text>`

6. **Replace "Learn more" text:**
   - Current: `<div className="flex items-center text-primary text-sm">Learn more<ArrowRight className="w-4 h-4 ml-2" /></div>`
   - Target: `<Flex align="center"><Text size="2" color="blue">Learn more</Text><ArrowRight className="w-4 h-4 ml-2" /></Flex>`

**Commands:**

```powershell
pnpm prettier "src/components/sections/UnifiedRelatedPages.tsx" --write
pnpm lint
pnpm build
pnpm dev  # Visual check: visit any page, scroll to related pages section
```

**Exit Criteria:**

- ✅ UnifiedRelatedPages uses Radix typography
- ✅ All variants render correctly
- ✅ Build passes

---

## Phase 4: Content Pages (Batch 1: Simplest)

### Batch 4.1: AboutPage.tsx

**Files:**

- `src/components/pages/AboutPage.tsx`

**Status:** Already uses Radix Heading/Text in sections, but verify ALL usages are consistent.

**Actions:**

1. **Audit all headings and text:**

   - Verify all H2 use `<Heading as="h2" size="6">`
   - Verify all H3 use `<Heading as="h3" size="5">` or `size="4"` (decide one)
   - Verify all body text uses `<Text size="3" color="gray">`

2. **Adjust spacing:**
   - Ensure consistent `mb="6"` after H2
   - Ensure consistent `mb="8"` after descriptions

**Commands:**

```powershell
pnpm prettier "src/components/pages/AboutPage.tsx" --write
pnpm lint
pnpm build
pnpm dev  # Visual check: /about page
```

**Exit Criteria:**

- ✅ All typography uses Radix Heading/Text consistently
- ✅ H3 size is consistent throughout page
- ✅ Build passes

---

### Batch 4.2: ManifestoPage.tsx

**Files:**

- `src/components/pages/ManifestoPage.tsx`

**Actions:**

1. **Import Radix Themes:**

```tsx
import { Heading, Text, Box, Flex } from '@radix-ui/themes';
```

2. **Replace PrinciplesSection H2:**

   - Current: `<h2 className="text-3xl text-primary mb-12 text-center">The 8 Principles</h2>`
   - Target: `<Heading as="h2" size="6" mb="9" align="center" color="blue">The 8 Principles</Heading>`

3. **Replace H3 in principle cards:**

   - Current: `<h3 className="text-xl text-foreground">{principle.title}</h3>`
   - Target: `<Heading as="h3" size="5">{principle.title}</Heading>`

4. **Replace paragraphs:**

   - Current: `<p className="text-muted-foreground leading-relaxed">{principle.description}</p>`
   - Target: `<Text size="3" color="gray">{principle.description}</Text>`

5. **Replace CompassSection paragraph:**
   - Current: `<p className="text-muted-foreground leading-relaxed">...</p>`
   - Target: `<Text size="3" color="gray">...</Text>`

**Commands:**

```powershell
pnpm prettier "src/components/pages/ManifestoPage.tsx" --write
pnpm lint
pnpm build
pnpm dev  # Visual check: /manifesto page
```

**Exit Criteria:**

- ✅ All typography uses Radix Heading/Text
- ✅ 8 principles cards render correctly
- ✅ Build passes

---

### Batch 4.3: ReferencesPage.tsx

**Files:**

- `src/components/pages/ReferencesPage.tsx`

**Actions:**

1. **Import Radix Themes:**

```tsx
import { Heading, Text } from '@radix-ui/themes';
```

2. **Replace all section H2s:**

   - Current: `<h2 className="text-2xl font-semibold mb-6 text-foreground">Section Title</h2>`
   - Target: `<Heading as="h2" size="6" mb="6">Section Title</Heading>`

3. **Replace all reference H3s:**

   - Current: `<h3 className="text-lg font-medium mb-2 text-foreground"><a ...>Link</a></h3>`
   - Target: `<Heading as="h3" size="4" mb="2"><a ...>Link</a></Heading>`

4. **Replace all paragraphs:**

   - Current: `<p className="text-muted-foreground">Description</p>`
   - Target: `<Text size="2" color="gray">Description</Text>`

5. **Replace final note:**
   - Current: `<h3 className="text-lg font-medium mb-3 text-foreground">About the References</h3><p ...>...</p>`
   - Target: `<Heading as="h3" size="4" mb="3">About the References</Heading><Text size="3" color="gray">...</Text>`

**Commands:**

```powershell
pnpm prettier "src/components/pages/ReferencesPage.tsx" --write
pnpm lint
pnpm build
pnpm dev  # Visual check: /references page
```

**Exit Criteria:**

- ✅ All typography uses Radix Heading/Text
- ✅ External links still work
- ✅ Build passes

---

## Phase 5: Framework Pages (Batch 2: Medium Complexity)

### Batch 5.1: FrameworkPage.tsx

**Files:**

- `src/components/pages/FrameworkPage.tsx`

**Actions:**

1. **Import Radix Themes:**

```tsx
import { Heading, Text, Box, Flex } from '@radix-ui/themes';
```

2. **CoreStructureSection:**

   - H2: `<h2 ...>` → `<Heading as="h2" size="6" mb="9" align="center" color="blue">`
   - Description p: → `<Text size="3" color="gray" align="center" mb="9">`
   - H3 in cards: → `<Heading as="h3" size="5">`
   - Body text in cards: → `<Text size="3" color="gray">`

3. **GovernanceSection:**

   - H2: → `<Heading as="h2" size="6" mb="9" align="center" color="blue">`
   - Description: → `<Text size="3" color="gray" align="center" mb="9">`
   - H3: → `<Heading as="h3" size="5" mb="3">`
   - Body text: → `<Text size="2" color="gray">`

4. **LifecycleSection, CriticalConsiderationsSection:**
   - Same pattern as above

**Commands:**

```powershell
pnpm prettier "src/components/pages/FrameworkPage.tsx" --write
pnpm lint
pnpm build
pnpm dev  # Visual check: /framework page
```

**Exit Criteria:**

- ✅ All typography uses Radix Heading/Text
- ✅ Visual diagrams still render
- ✅ Build passes

---

### Batch 5.2: GuidelinesPage.tsx

**Files:**

- `src/components/pages/GuidelinesPage.tsx`

**Actions:**

1. **Import Radix Themes:**

```tsx
import { Heading, Text, Box } from '@radix-ui/themes';
```

2. **Replace all H2s:**

   - Current: `<h2 className="mb-8 text-center">Title</h2>` or `<h2 className="mb-6">Title</h2>`
   - Target: `<Heading as="h2" size="6" mb="6" align="center">Title</Heading>` or `align="left"` for non-centered

3. **Replace all H3s:**

   - Current: `<h3 className="mb-4 flex items-center gap-2">...</h3>`
   - Target: `<Heading as="h3" size="5" mb="4">...</Heading>` (wrap Flex around if icon present)

4. **Replace all H4s:**

   - Current: `<h4 className="mb-4">...</h4>`
   - Target: `<Heading as="h4" size="4" mb="4">...</Heading>`

5. **Replace body text:**
   - Lists: Keep `<ul>`, `<li>` structure, wrap text in `<Text size="2">` or `size="3"` depending on context
   - Paragraphs: Wrap in `<Text size="3">`

**Note:** This page has many custom components (diagrams, matrices). Focus on typography only, don't change layout.

**Commands:**

```powershell
pnpm prettier "src/components/pages/GuidelinesPage.tsx" --write
pnpm lint
pnpm build
pnpm dev  # Visual check: /framework/guidelines page
```

**Exit Criteria:**

- ✅ All headings use Radix Heading
- ✅ Body text uses Radix Text where feasible
- ✅ Custom diagrams still work
- ✅ Build passes

---

### Batch 5.3: TopologiesPage.tsx

**Files:**

- `src/components/pages/TopologiesPage.tsx`

**Actions:**

1. **Import Radix Themes:**

```tsx
import { Heading, Text } from '@radix-ui/themes';
```

2. **Replace all H2s:**

   - Current: `<h2 className="text-3xl text-primary mb-12 text-center">...</h2>`
   - Target: `<Heading as="h2" size="6" mb="9" align="center" color="blue">...</Heading>`

3. **Replace all H3s:**

   - Current: `<h3 className="text-2xl text-foreground mb-2">...</h3>` or `<h3 className="text-foreground mb-3">...</h3>`
   - Target: `<Heading as="h3" size="5" mb="2">...</Heading>` or `mb="3"`

4. **Replace body text:**
   - Paragraphs: → `<Text size="3" color="gray">`
   - Small text: → `<Text size="2" color="gray">`

**Commands:**

```powershell
pnpm prettier "src/components/pages/TopologiesPage.tsx" --write
pnpm lint
pnpm build
pnpm dev  # Visual check: /topologies page
```

**Exit Criteria:**

- ✅ All typography uses Radix Heading/Text
- ✅ Build passes

---

### Batch 5.4: ShapesPage.tsx

**Files:**

- `src/components/pages/ShapesPage.tsx`

**Actions:**

- Same pattern as TopologiesPage

**Commands:**

```powershell
pnpm prettier "src/components/pages/ShapesPage.tsx" --write
pnpm lint
pnpm build
pnpm dev  # Visual check: /shapes page
```

**Exit Criteria:**

- ✅ All typography uses Radix Heading/Text
- ✅ Build passes

---

## Phase 6: Specialized Pages (Batch 3: Complex)

### Batch 6.1: LevelingPage.tsx

**Files:**

- `src/components/pages/LevelingPage.tsx`

**Actions:**

1. **Import Radix Themes:**

```tsx
import { Heading, Text } from '@radix-ui/themes';
```

2. **Replace all H2s:**

   - Map `text-3xl` → `size="6"`

3. **Replace all H3s:**

   - Map `text-primary mb-3` → `size="5" mb="3"` or `size="4"` (decide based on visual hierarchy)

4. **Replace body text:**
   - Standard paragraphs → `<Text size="3">`
   - Helper text → `<Text size="2" color="gray">`

**Commands:**

```powershell
pnpm prettier "src/components/pages/LevelingPage.tsx" --write
pnpm lint
pnpm build
pnpm dev  # Visual check: /framework/leveling page
```

**Exit Criteria:**

- ✅ All typography uses Radix Heading/Text
- ✅ Matrix/chart components still render
- ✅ Build passes

---

### Batch 6.2: ProgressionPillarsPage.tsx

**Files:**

- `src/components/pages/ProgressionPillarsPage.tsx`

**Actions:**

- Same pattern as LevelingPage
- Special attention to chart components (ProficiencyRadarChart) - don't change internal SVG text elements

**Commands:**

```powershell
pnpm prettier "src/components/pages/ProgressionPillarsPage.tsx" --write
pnpm lint
pnpm build
pnpm dev  # Visual check: /framework/progression page
```

**Exit Criteria:**

- ✅ All typography uses Radix Heading/Text
- ✅ Charts still render correctly
- ✅ Build passes

---

### Batch 6.3: ManagementPage.tsx

**Files:**

- `src/components/pages/ManagementPage.tsx`

**Actions:**

1. **Fix inconsistent H2 sizes:**

   - Current: `text-3xl` and `text-2xl` both used for H2
   - Target: ALL H2 should be `<Heading as="h2" size="6">`

2. **Replace all H3s:**

   - `text-2xl` → `size="5"` or adjust based on visual hierarchy

3. **Replace body text**

**Commands:**

```powershell
pnpm prettier "src/components/pages/ManagementPage.tsx" --write
pnpm lint
pnpm build
pnpm dev  # Visual check: /management page
```

**Exit Criteria:**

- ✅ H2 sizes are now consistent
- ✅ All typography uses Radix Heading/Text
- ✅ Build passes

---

### Batch 6.4: DevelopingLeadersPage.tsx

**Files:**

- `src/components/pages/DevelopingLeadersPage.tsx`

**Actions:**

- Standard typography migration

**Commands:**

```powershell
pnpm prettier "src/components/pages/DevelopingLeadersPage.tsx" --write
pnpm lint
pnpm build
pnpm dev  # Visual check: /developing-leaders page
```

**Exit Criteria:**

- ✅ All typography uses Radix Heading/Text
- ✅ Build passes

---

### Batch 6.5: ConceptsPage.tsx

**Files:**

- `src/components/pages/ConceptsPage.tsx`

**Actions:**

- Need to read file first to determine structure
- Likely similar to other content pages

**Commands:**

```powershell
# Read file first
pnpm prettier "src/components/pages/ConceptsPage.tsx" --write
pnpm lint
pnpm build
pnpm dev  # Visual check: /concepts page
```

---

### Batch 6.6: ContributingPage.tsx

**Files:**

- `src/components/pages/ContributingPage.tsx`

**Actions:**

- Standard typography migration

**Commands:**

```powershell
pnpm prettier "src/components/pages/ContributingPage.tsx" --write
pnpm lint
pnpm build
pnpm dev  # Visual check: /contributing page
```

---

### Batch 6.7: LawsPage.tsx

**Files:**

- `src/components/pages/LawsPage.tsx`

**Actions:**

- Standard typography migration

**Commands:**

```powershell
pnpm prettier "src/components/pages/LawsPage.tsx" --write
pnpm lint
pnpm build
pnpm dev  # Visual check: /laws page
```

---

## Final Validation

### Full Site Check

After ALL phases complete:

1. **Run formatters:**

```powershell
pnpm prettier "src/**/*.{ts,tsx}" --write
```

2. **Run lint:**

```powershell
pnpm lint
```

3. **Run build:**

```powershell
pnpm build
```

4. **Start dev server:**

```powershell
pnpm dev
```

5. **Manual testing:**

   - Visit every page (14 pages total)
   - Check heading hierarchy (H1 → H2 → H3)
   - Check typography sizing (consistent H2, H3, body text)
   - Check layout (no broken layouts, consistent widths)
   - Check responsive (mobile, tablet, desktop)
   - Check theme toggle (light/dark mode)

6. **Checklist:**
   - ✅ All pages have exactly one H1 (in PageHero)
   - ✅ All H2s use `size="6"`
   - ✅ All H3s use consistent size (`size="5"` or `size="4"`)
   - ✅ All body text uses `<Text size="3">`
   - ✅ All helper text uses `<Text size="2" color="gray">`
   - ✅ No raw HTML h1/h2/h3/p tags remain
   - ✅ All sections use SectionContainer or similar
   - ✅ Content width is consistent across pages
   - ✅ Spacing rhythm is consistent
   - ✅ No TypeScript errors
   - ✅ No lint errors
   - ✅ No console errors

---

## Emergency Rollback

If final validation reveals critical issues:

```powershell
# Rollback all commits
git log --oneline  # Find commit hash before migration started
git revert --no-commit <hash>..HEAD
git commit -m "Revert: layout and typography standardization - critical issues found"
```

Then:

- Document issues
- Create smaller, safer migration plan
- Retry with more conservative approach

---

**End of Execution Steps**
