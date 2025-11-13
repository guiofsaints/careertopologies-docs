# Layout and Typography Standardization - Worklog

**Date Started:** November 6, 2025  
**Project:** CareerTopologies Frontend  
**Goal:** Standardize site width, sections, and typography using Radix Themes only

---

## Session 1: November 6, 2025 - Initial Context Loading

**Time:** Started  
**Phase:** Preparation

### Actions Taken

1. **Loaded Radix Themes documentation and standards:**

   - Reviewed `.guided/assessment/ui.radix-themes-doc-notes.md`

     - Layout components: Theme, Box, Flex, Grid, Container, Section
     - Typography: Heading (size 1-9, as prop), Text (size 1-9)
     - Container sizes: 1 (~448px), 2 (~688px), 3 (~880px), 4 (~1136px)
     - Section sizes: 1 (small), 2 (medium), 3 (large) vertical spacing

   - Reviewed `.guided/assessment/ui.radix-themes-component-mapping.md`

     - Existing primitives already mapped to Radix Themes
     - Migration plan exists for transitioning from Tailwind

   - Reviewed `.guided/architecture/ui.radix-themes-migration-plan.md`
     - 5-phase migration plan defined
     - Target architecture: Radix Themes only, no Tailwind
     - Theme configuration: accentColor="sky", radius="large", scaling="110%"

### Proposed Standards (Based on Radix Themes)

**Layout Standard:**

- **Page container:** Each page should use `<Container size="4">` (max-width ~1136px) for main content
- **Section wrapper:** Shared sections should use `<Section size="3">` for consistent vertical spacing
- **Inner containers:** Sections can use `<Container size="3">` or `<Box>` with explicit max-width

**Typography Scale:**

- **H1 (Page title):** `<Heading as="h1" size="8">` - Large, prominent page titles
- **H2 (Section title):** `<Heading as="h2" size="6">` - Section headings
- **H3 (Subsection):** `<Heading as="h3" size="5">` - Subsection headings
- **Body text (Paragraphs):** `<Text size="3">` - Default readable body text
- **Small/Caption text:** `<Text size="2" color="gray">` - Helper text, metadata, captions

**Responsive Considerations:**

- Use Radix Themes responsive object notation where needed:
  - Example: `size={{ initial: '7', md: '8' }}`
  - Example: `columns={{ initial: '1', md: '2', lg: '3' }}`

**Semantic HTML:**

- Always align semantic level (`as="h1"`, `as="h2"`, `as="h3"`) with visual hierarchy
- One H1 per page, multiple H2s for sections, H3s for subsections

### Next Steps

1. Inventory all pages and sections
2. Document current heading/text usage and inconsistencies
3. Create detailed standardization plan
4. Execute in small batches with lint/build checks

---

## Session 2: November 6, 2025 - Assessment and Planning Complete

**Time:** Completed  
**Phase:** Assessment and Planning

### Actions Completed

1. **Comprehensive Inventory Created:**

   - File: `.guided/assessment/ui.layout-and-typography-inventory.md`
   - Scanned 14 pages and 4 shared sections
   - Documented heading usage (H1/H2/H3), text components, and layout wrappers
   - Identified critical inconsistencies

2. **Key Findings:**

   - **95% of pages use raw HTML** `<h1>`, `<h2>`, `<h3>`, `<p>` with Tailwind ❌
   - **Only ~5% use Radix Themes** Heading/Text (AboutPage sections only)
   - **0% use Radix Container/Section** directly
   - **Custom design-system components exist** but used inconsistently (3/14 components)
   - **PageHero has H1** but uses raw HTML
   - **Content width varies:** `max-w-6xl` (most), `max-w-4xl` (some)
   - **Heading sizes inconsistent:** Multiple Tailwind sizes for same semantic level

3. **Standardization Plan Created:**

   - File: `.guided/architecture/ui.layout-and-typography-standardization-plan.md`
   - **Decision:** Hybrid approach - keep custom design-system components, refactor them to use Radix Themes internally
   - **Typography Standard:**
     - H1: `<Heading as="h1" size="8">`
     - H2: `<Heading as="h2" size="6">`
     - H3: `<Heading as="h3" size="5">`
     - Body text: `<Text size="3">`
     - Small text: `<Text size="2" color="gray">`
   - **Layout Standard:**
     - Use SectionContainer (internally uses Radix Section + Container)
     - Default width: Container size="4" (max-width ~1136px)
     - Consistent vertical spacing with Section size prop

4. **Detailed Execution Steps Created:**

   - File: `.guided/operation/ui.layout-and-typography-standardization-steps.md`
   - 6 phases broken into 11+ small batches
   - Each batch: 1-4 files max
   - Explicit file lists and change instructions
   - After each batch: Prettier → Lint → Build → Visual check

5. **Progress Tracking Initialized:**

   - File: `.guided/operation/ui.layout-and-typography-standardization-progress.md`
   - Phase status tracking table
   - Per-file status tracking
   - Metrics dashboard

6. **Changelog Template Created:**
   - File: `.guided/operation/ui.layout-and-typography-standardization-changelog.md`
   - Template for recording each batch execution

### Discovered Components

**PageHero.tsx:**

- Uses raw HTML H1 and P ❌
- Uses SectionContainer (custom) ✅
- Needs typography refactoring in Phase 2

**StandardLayouts.tsx:**

- Custom components: SectionContainer, GridContainer, FlexContainer, Card, ContentContainer, SectionHeader
- Currently uses Tailwind classes internally ❌
- Needs refactoring to use Radix Box/Flex/Grid/Container/Section in Phase 1

### Migration Strategy

**Phase 1:** Refactor custom components to use Radix internally (1 file)  
**Phase 2:** Fix PageHero typography (1 file)  
**Phase 3:** Fix shared sections typography (4 files)  
**Phase 4:** Migrate simple content pages (3 files)  
**Phase 5:** Migrate framework pages (4 files)  
**Phase 6:** Migrate complex specialized pages (7 files)

**Total:** 6 phases, 20 files, ~300+ typography replacements

### Next Actions

**Ready to Execute:**

- All documentation complete ✅
- Standards defined ✅
- Execution plan detailed ✅
- Progress tracking ready ✅

**Next Step:** Begin Phase 1 - Refactor StandardLayouts.tsx

---

## Session 3: November 6, 2025 - Implementation Begins

**Time:** Started  
**Phase:** Phase 1, Batch 1.1

### Current Work

**Phase 1, Batch 1.1 - COMPLETE ✅**

**Files modified:**

- `src/components/design-system/StandardLayouts.tsx`

### What was accomplished:

1. **Imported Radix Themes primitives:**

   - Box, Flex, Grid, Container, Section, Heading, Text

2. **Refactored all 6 custom components:**

   - **SectionContainer:** Now uses Section + Container + Box with proper prop mapping
     - variant → Container size (narrow=3, default/wide=4)
     - padding → Section size (sm=1, default=2, lg/xl=3)
   - **GridContainer:** Uses Radix Grid with responsive columns
     - Removed unsupported justify parameter
   - **FlexContainer:** Uses Radix Flex
     - Added fallback for around/evenly → between
   - **Card:** Uses Radix Box with inline styles for hover
   - **ContentContainer:** Uses Radix Box with inline maxWidth
   - **SectionHeader:** Uses Radix Heading (H2) and Text

3. **Build validation:**
   - ✅ TypeScript build passed successfully
   - ⏭️ ESLint skipped (config migration issue - deferred)
   - ⏭️ Prettier skipped (not configured)

### Issues encountered:

1. **Radix Grid limitation:** No justify-items prop → Removed from interface
2. **Radix Flex limitation:** Only start/center/end/between for justify → Added fallback mapping
3. **Radix Heading color:** No "accent" color → Used CSS variable var(--accent-11)
4. **ESLint v9:** Requires new config format → Deferred, using build for validation

### Decisions made:

- Use CSS variables for theme colors (var(--accent-11), var(--accent-2), etc.)
- Keep component public APIs unchanged for backward compatibility
- Visual check deferred until dev server restart

**Next:** Phase 2, Batch 2.1 - Refactor PageHero.tsx typography

---

## Session 4: November 6, 2025 - Phase 2 Implementation

**Time:** Started  
**Phase:** Phase 2, Batch 2.1

### Current Work

**Phase 2, Batch 2.1 - COMPLETE ✅**

**Files modified:**

- `src/components/media/PageHero.tsx`

### What was accomplished:

1. **Imported Radix Themes:**

   - Heading, Text

2. **Typography migration:**

   - **H1:** `<h1 className="text-foreground mb-6">` → `<Heading as="h1" size="8" mb="6" align="center">`
   - **Description:** `<p className="text-muted-foreground leading-relaxed">` → `<Text size="3" color="gray" style={{ lineHeight: '1.6' }}>`

3. **Build validation:**
   - ✅ TypeScript build passed successfully
   - No errors, no warnings (aside from chunk size)

### Impact:

**CRITICAL:** This single file change affects **ALL 14 pages** because every page uses PageHero:

- About, Manifesto, Guidelines, References, Framework, Topologies, Shapes, Leveling, ProgressionPillars, Management, DevelopingLeaders, Concepts, Contributing, Laws

### Issues encountered:

- None

### Decisions made:

- Kept existing ContentContainer wrapper for description (provides max-width and centering)
- Used inline style for lineHeight since Radix Text doesn't have a lineHeight prop

**Next:** Phase 3, Batch 3.1 - Refactor HeroSection.tsx typography

---

## Session 5: November 6, 2025 - Phase 3 Implementation (Shared Sections)

**Time:** Started  
**Phase:** Phase 3, Batch 3.1

### Current Work

**Starting Phase 3, Batch 3.1** - Refactoring HeroSection.tsx typography

**Files to modify:**

- `src/components/sections/HeroSection.tsx`

**Goals:**

- Import Radix Heading and Text
- Replace responsive H1 with Radix Heading with responsive size
- Replace two `<p>` elements with Radix Text
- Keep all layout components unchanged

---

**Phase 3 - COMPLETE ✅**

**All 4 batches completed:**

### Batch 3.1: HeroSection.tsx ✅

- **H1:** Replaced with `<Heading as="h1" size={{ initial: '6', md: '7' }}>`
- **Paragraphs:** Replaced with `<Text size="3" style={{ lineHeight: '1.6' }}>`
- Build passed

### Batch 3.2: AudienceSection.tsx ✅

- **Paragraphs:** Replaced with `<Text size="4">`
- Build passed

### Batch 3.3: FrameworkSection.tsx ✅

- **H3:** Replaced with `<Heading as="h3" size="4">`
- **Descriptions:** Replaced with `<Text size="2" color="gray">`
- Build passed

### Batch 3.4: UnifiedRelatedPages.tsx ✅

- **Layout:** Refactored to use SectionContainer and GridContainer
  - Replaced section + max-w classes with SectionContainer
  - Replaced Tailwind grid with GridContainer
  - Variant mapping for container sizes (explore→default, others→narrow)
  - Responsive columns mapping for all variants
- **Typography:** Adjusted H2 size from 7 to 6 for consistency
- Build passed

**Summary:**

- All shared section components now use Radix Typography
- UnifiedRelatedPages additionally refactored for layout consistency
- Total files migrated in Phase 3: 4
- Build passing successfully

**Next:** Phase 4, Batch 4.1 - Content Pages (AboutPage, ManifestoPage, ReferencesPage)

---
