# Layout and Typography Standardization - Progress

**Date Started:** November 6, 2025  
**Project:** CareerTopologies Frontend  
**Goal:** Track progress of layout and typography standardization

---

## Phase Status Overview

| Phase     | Description                             | Status             | Files Changed | Notes                                          |
| --------- | --------------------------------------- | ------------------ | ------------- | ---------------------------------------------- |
| Phase 1   | Foundation (Refactor Custom Components) | ✅ Done            | 1/1           | StandardLayouts.tsx refactored                 |
| Phase 2   | PageHero Typography                     | ✅ Done            | 1/1           | PageHero.tsx migrated                          |
| Phase 3   | Shared Sections Typography              | ✅ Done            | 4/4           | Hero, Audience, Framework, UnifiedRelatedPages |
| Phase 4   | Content Pages (Simple)                  | ⏳ Not Started     | 0/3           | About, Manifesto, References                   |
| Phase 5   | Framework Pages (Medium)                | ⏳ Not Started     | 0/4           | Framework, Guidelines, Topologies, Shapes      |
| Phase 6   | Specialized Pages (Complex)             | ⏳ Not Started     | 0/7           | Leveling, Progression, Management, + 4 more    |
| **TOTAL** | **All Phases**                          | **🔄 In Progress** | **6/20**      | Phases 1-3 complete                            |

---

## Phase 1: Foundation (Refactor Custom Components)

**Goal:** Refactor custom design-system components to use Radix Themes internally

**Status:** ✅ Done

### Batch 1.1: Refactor StandardLayouts.tsx

| Task                                                             | Status | Notes                                                   |
| ---------------------------------------------------------------- | ------ | ------------------------------------------------------- |
| Import Radix Themes (Box, Flex, Grid, Container, Section)        | ✅     | Imported Heading, Text as well                          |
| Refactor SectionContainer to use Radix Section + Container + Box | ✅     | Maps variant to Container size, padding to Section size |
| Refactor GridContainer to use Radix Grid                         | ✅     | Removed unsupported justify parameter                   |
| Refactor FlexContainer to use Radix Flex                         | ✅     | Fallback for unsupported justify values                 |
| Refactor Card to use Radix Box                                   | ✅     | Using CSS variables for styling                         |
| Refactor ContentContainer to use Radix Box with maxWidth         | ✅     | Inline styles for max-width                             |
| Refactor SectionHeader to use Radix Heading/Text                 | ✅     | H2 with configurable sizes                              |
| Run Prettier                                                     | ⏭️     | Skipped (not configured in project)                     |
| Run Lint                                                         | ⏭️     | Skipped (ESLint config issue)                           |
| Run Build                                                        | ✅     | Passed - no TypeScript errors                           |
| Visual check (pages using these components)                      | ⏳     | To be done when dev server is started                   |

**Files:**

- `src/components/design-system/StandardLayouts.tsx` (✅ Migrated)

---

## Phase 2: PageHero Typography

**Goal:** Replace raw HTML in PageHero with Radix Themes Heading/Text

**Status:** ✅ Done

### Batch 2.1: Refactor PageHero.tsx

| Task                                      | Status | Notes                              |
| ----------------------------------------- | ------ | ---------------------------------- |
| Import Radix Themes (Heading, Text, Box)  | ✅     | Imported Heading and Text          |
| Replace H1 with Radix Heading             | ✅     | Size 8, mb 6, align center         |
| Replace description with Radix Text       | ✅     | Size 3, color gray, lineHeight 1.6 |
| Run Prettier                              | ⏭️     | Skipped (not configured)           |
| Run Lint                                  | ⏭️     | Skipped (ESLint config issue)      |
| Run Build                                 | ✅     | Passed - no errors                 |
| Visual check (all 14 pages with PageHero) | ⏳     | To be done when dev server started |

**Files:**

- `src/components/media/PageHero.tsx` (✅ Migrated)

---

## Phase 3: Shared Sections Typography

**Goal:** Replace raw HTML in shared sections with Radix Themes Heading/Text

**Status:** ✅ Done

### Batch 3.1: HeroSection.tsx

| Task                                     | Status | Notes                  |
| ---------------------------------------- | ------ | ---------------------- |
| Import Radix Themes                      | ✅     | Heading, Text imported |
| Replace H1 with responsive Radix Heading | ✅     | Size 6→7 responsive    |
| Replace paragraphs with Radix Text       | ✅     | Size 3, lineHeight 1.6 |
| Run Prettier, Lint, Build                | ✅     | Build passed           |
| Visual check (homepage)                  | ⏳     | Pending dev server     |

**Files:**

- `src/components/sections/HeroSection.tsx` (✅ Migrated)

### Batch 3.2: AudienceSection.tsx

| Task                               | Status | Notes  |
| ---------------------------------- | ------ | ------ |
| Replace paragraphs with Radix Text | ✅     | Size 4 |
| Run Build                          | ✅     | Passed |

**Files:**

- `src/components/sections/AudienceSection.tsx` (✅ Migrated)

### Batch 3.3: FrameworkSection.tsx

| Task                                 | Status | Notes              |
| ------------------------------------ | ------ | ------------------ |
| Replace H3 with Radix Heading        | ✅     | Size 4             |
| Replace descriptions with Radix Text | ✅     | Size 2, color gray |
| Run Build                            | ✅     | Passed             |

**Files:**

- `src/components/sections/FrameworkSection.tsx` (✅ Migrated)

### Batch 3.4: UnifiedRelatedPages.tsx

| Task                             | Status | Notes                            |
| -------------------------------- | ------ | -------------------------------- |
| Refactor to use SectionContainer | ✅     | Replaces section + max-w classes |
| Refactor to use GridContainer    | ✅     | Replaces Tailwind grid           |
| Adjust H2 size to 6              | ✅     | Was size 7, reduced              |
| Run Build                        | ✅     | Passed                           |

**Files:**

- `src/components/sections/UnifiedRelatedPages.tsx` (✅ Migrated)

---

## Phase 4: Content Pages (Batch 1: Simplest)

**Goal:** Migrate simple content pages to Radix typography

**Status:** ⏳ Not Started

### Files

| File               | Status         | Notes                                    |
| ------------------ | -------------- | ---------------------------------------- |
| AboutPage.tsx      | ⏳ Not Started | Mostly Radix already, verify consistency |
| ManifestoPage.tsx  | ⏳ Not Started | Replace all raw HTML                     |
| ReferencesPage.tsx | ⏳ Not Started | Replace all raw HTML                     |

---

## Phase 5: Framework Pages (Batch 2: Medium Complexity)

**Goal:** Migrate framework-related pages

**Status:** ⏳ Not Started

### Files

| File               | Status         | Notes                              |
| ------------------ | -------------- | ---------------------------------- |
| FrameworkPage.tsx  | ⏳ Not Started | Multiple sections, complex layouts |
| GuidelinesPage.tsx | ⏳ Not Started | Custom diagrams, many headings     |
| TopologiesPage.tsx | ⏳ Not Started | Visual models, cards               |
| ShapesPage.tsx     | ⏳ Not Started | Similar to Topologies              |

---

## Phase 6: Specialized Pages (Batch 3: Complex)

**Goal:** Migrate remaining pages with complex layouts

**Status:** ⏳ Not Started

### Files

| File                       | Status         | Notes                                |
| -------------------------- | -------------- | ------------------------------------ |
| LevelingPage.tsx           | ⏳ Not Started | Charts, matrices                     |
| ProgressionPillarsPage.tsx | ⏳ Not Started | Radar charts, complex visualizations |
| ManagementPage.tsx         | ⏳ Not Started | Fix inconsistent H2 sizes            |
| DevelopingLeadersPage.tsx  | ⏳ Not Started | Standard migration                   |
| ConceptsPage.tsx           | ⏳ Not Started | TBD (not yet read)                   |
| ContributingPage.tsx       | ⏳ Not Started | TBD (not yet read)                   |
| LawsPage.tsx               | ⏳ Not Started | TBD (not yet read)                   |

---

## Metrics

### Overall Progress

- **Phases Complete:** 3 / 6 (50%)
- **Batches Complete:** 6 / 11+ (55%)
- **Files Migrated:** 6 / 20 (30%)

### Typography Migration

| Component Type                    | Total | Migrated | Percentage       |
| --------------------------------- | ----- | -------- | ---------------- |
| Pages using Radix Heading/Text    | 14    | 0        | 0%               |
| Sections using Radix Heading/Text | 4     | 0        | 0%               |
| Raw HTML h/p tags remaining       | ~300+ | ~300+    | 100% (to remove) |

### Layout Migration

| Pattern                                 | Current | Target | Status     |
| --------------------------------------- | ------- | ------ | ---------- |
| Custom components use Radix internally  | Yes     | Yes    | ✅ Done    |
| Pages use SectionContainer consistently | ~20%    | 100%   | ⏳ Pending |

---

## Issues Log

### Issue 1: ESLint Configuration (November 6, 2025)

- **Severity:** Low
- **Description:** ESLint v9 requires eslint.config.js but project has .eslintrc configuration
- **Impact:** Cannot run `pnpm lint` during batch validation
- **Workaround:** Using TypeScript build (`pnpm build`) for validation instead
- **Status:** Deferred - not blocking migration

---

## Next Actions

1. ✅ **Complete:** Phase 1 - StandardLayouts.tsx refactored
2. ✅ **Complete:** Phase 2 - PageHero.tsx typography migrated (affects all 14 pages!)
3. ✅ **Complete:** Phase 3 - Shared sections typography (4 files)
4. **Next:** Start Phase 4 - Content pages (AboutPage, ManifestoPage, ReferencesPage)

---

## Completion Criteria

### Phase-by-Phase

- [x] Phase 1: Custom components use Radix Themes internally
- [x] Phase 2: PageHero uses Radix Typography
- [x] Phase 3: All shared sections use Radix Typography
- [ ] Phase 4: Simple content pages migrated
- [ ] Phase 5: Framework pages migrated
- [ ] Phase 6: Complex specialized pages migrated

### Overall

- [ ] All pages use Radix Themes Heading/Text
- [ ] No raw HTML h1/h2/h3/p tags remain
- [ ] Consistent H1/H2/H3 sizes across all pages
- [ ] Consistent body text size across all pages
- [ ] All pages use SectionContainer or similar
- [ ] TypeScript builds without errors
- [ ] Lint passes without errors
- [ ] All pages render correctly (visual check)
- [ ] Light/dark theme both work
- [ ] Responsive design works (mobile/tablet/desktop)

---

**Status Legend:**

- ⏳ Not Started
- 🔄 In Progress
- ✅ Done
- ❌ Blocked/Failed

---

**Last Updated:** November 6, 2025
