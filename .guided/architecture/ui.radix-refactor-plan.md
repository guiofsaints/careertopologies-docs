# Radix Refactor Plan

**Date:** November 6, 2025  
**Project:** CareerTopologies Frontend  
**Purpose:** Comprehensive migration plan from shadcn-style UI to Radix + Tailwind with clean structure

---

## Executive Summary

This plan outlines the complete refactor of the CareerTopologies component structure, transitioning from 47 shadcn-style wrapper components to a streamlined Radix + Tailwind architecture with improved organization.

### Goals:

1. Replace `src/components/ui/*` (47 files) with simplified `foundation/primitives/*`
2. Reorganize components into logical categories: foundation, common, layout, sections, pages, media, config
3. Remove unnecessary abstractions (CVA, over-engineered wrappers)
4. Maintain 100% functionality and accessibility
5. Keep the codebase buildable at each phase

### Key Metrics:

- **Files to move/refactor**: 68 component files
- **Import statements to update**: ~100-150 imports
- **Phases**: 5 incremental phases
- **Estimated effort**: 8-12 hours

---

## Target Directory Structure

```
src/components/
├── foundation/
│   ├── primitives/               # Radix + Tailwind primitives (10-15 core components)
│   │   ├── button.tsx            # Simple button with variants
│   │   ├── input.tsx             # Text input
│   │   ├── textarea.tsx          # Text area
│   │   ├── label.tsx             # Form label
│   │   ├── card.tsx              # Card container
│   │   ├── badge.tsx             # Badge/tag
│   │   ├── separator.tsx         # Divider
│   │   ├── dialog.tsx            # Modal dialog
│   │   ├── sheet.tsx             # Side sheet/drawer
│   │   ├── tooltip.tsx           # Tooltip
│   │   ├── select.tsx            # Dropdown select
│   │   ├── tabs.tsx              # Tab navigation
│   │   ├── breadcrumb.tsx        # Breadcrumb navigation
│   │   ├── checkbox.tsx          # Checkbox input
│   │   ├── radio-group.tsx       # Radio group
│   │   └── index.ts              # Barrel export
│   │
│   └── design-system/            # Design tokens and layouts
│       ├── tokens.tsx            # Design tokens/theme
│       ├── layouts.tsx           # Standard layouts
│       └── index.ts              # Barrel export
│
├── common/                       # Reusable composed components
│   ├── heading.tsx               # Semantic heading (from atoms)
│   ├── text.tsx                  # Semantic text (from atoms)
│   ├── loading-spinner.tsx       # Loading indicator (from atoms)
│   ├── feature-card.tsx          # Pre-composed card (from molecules)
│   ├── empty-state.tsx           # Empty state pattern (from molecules)
│   └── index.ts                  # Barrel export
│
├── layout/                       # Shell and navigation components
│   ├── navigation.tsx            # Main nav bar
│   ├── mobile-drawer.tsx         # Mobile menu
│   ├── footer.tsx                # Site footer
│   ├── breadcrumb-navigation.tsx # Breadcrumb component
│   ├── language-selector.tsx     # Language switcher
│   ├── page-hero.tsx             # Page header/hero
│   ├── router.tsx                # Client router
│   ├── theme-debug.tsx           # Dev utility (optional)
│   └── index.ts                  # Barrel export
│
├── sections/                     # Page sections and large blocks
│   ├── hero-section.tsx          # Homepage hero
│   ├── audience-section.tsx      # Audience cards
│   ├── framework-section.tsx     # Framework overview
│   ├── leadership-readiness-flowchart.tsx  # Flowchart diagram
│   ├── unified-related-pages.tsx # Related pages block
│   └── index.ts                  # Barrel export
│
├── pages/                        # Page-level components (keep as-is)
│   ├── about-page.tsx
│   ├── concepts-page.tsx
│   ├── contributing-page.tsx
│   ├── developing-leaders-page.tsx
│   ├── framework-page.tsx
│   ├── guidelines-page.tsx
│   ├── laws-page.tsx
│   ├── leveling-page.tsx
│   ├── management-page.tsx
│   ├── manifesto-page.tsx
│   ├── progression-pillars-page.tsx
│   ├── references-page.tsx
│   ├── shapes-page.tsx
│   ├── topologies-page.tsx
│   └── index.ts                  # Barrel export
│
├── media/                        # Media helpers
│   ├── image-with-fallback.tsx   # Image component
│   └── index.ts                  # Barrel export
│
└── config/                       # Configuration and constants
    ├── navigation.ts             # Nav links config
    ├── unified-related-pages.ts  # Related pages config
    └── index.ts                  # Barrel export
```

---

## Complete Mapping Table

### Phase 1: Foundation Primitives (Priority: HIGH)

| Old Path             | New Path                                | Action       | Notes                                  |
| -------------------- | --------------------------------------- | ------------ | -------------------------------------- |
| `ui/button.tsx`      | `foundation/primitives/button.tsx`      | **Rewrite**  | Remove CVA, simplify variants          |
| `ui/input.tsx`       | `foundation/primitives/input.tsx`       | **Simplify** | Keep basic, remove heavy styling       |
| `ui/textarea.tsx`    | `foundation/primitives/textarea.tsx`    | **Simplify** | Basic textarea wrapper                 |
| `ui/label.tsx`       | `foundation/primitives/label.tsx`       | **Copy**     | Minimal Radix wrapper                  |
| `ui/card.tsx`        | `foundation/primitives/card.tsx`        | **Copy**     | Pure Tailwind, no Radix                |
| `ui/badge.tsx`       | `foundation/primitives/badge.tsx`       | **Simplify** | Remove CVA, use simple props           |
| `ui/separator.tsx`   | `foundation/primitives/separator.tsx`   | **Copy**     | Simple Radix wrapper                   |
| `ui/dialog.tsx`      | `foundation/primitives/dialog.tsx`      | **Refactor** | Clean Radix + Tailwind pattern         |
| `ui/sheet.tsx`       | `foundation/primitives/sheet.tsx`       | **Refactor** | Uses @radix-ui/react-dialog            |
| `ui/tooltip.tsx`     | `foundation/primitives/tooltip.tsx`     | **Refactor** | Clean pattern, used by 4 files         |
| `ui/select.tsx`      | `foundation/primitives/select.tsx`      | **Refactor** | Clean Radix Select wrapper             |
| `ui/tabs.tsx`        | `foundation/primitives/tabs.tsx`        | **Refactor** | Clean Radix Tabs wrapper               |
| `ui/breadcrumb.tsx`  | `foundation/primitives/breadcrumb.tsx`  | **Copy**     | Composition component                  |
| `ui/checkbox.tsx`    | `foundation/primitives/checkbox.tsx`    | **Copy**     | Radix Checkbox wrapper                 |
| `ui/radio-group.tsx` | `foundation/primitives/radio-group.tsx` | **Copy**     | Radix RadioGroup wrapper               |
| **Total**: 15 files  |                                         |              | **Core primitives needed immediately** |

### Phase 2: Foundation Design System (Priority: MEDIUM)

| Old Path                            | New Path                               | Action   | Notes                        |
| ----------------------------------- | -------------------------------------- | -------- | ---------------------------- |
| `design-system/DesignTokens.tsx`    | `foundation/design-system/tokens.tsx`  | **Move** | Rename for consistency       |
| `design-system/StandardLayouts.tsx` | `foundation/design-system/layouts.tsx` | **Move** | Rename for consistency       |
| **Total**: 2 files                  |                                        |          | **Design system components** |

### Phase 3: Common Components (Priority: MEDIUM)

| Old Path                    | New Path                     | Action            | Notes                        |
| --------------------------- | ---------------------------- | ----------------- | ---------------------------- |
| `atoms/Heading.tsx`         | `common/heading.tsx`         | **Move**          | Keep as-is, excellent design |
| `atoms/Text.tsx`            | `common/text.tsx`            | **Move**          | Keep as-is, well-designed    |
| `atoms/LoadingSpinner.tsx`  | `common/loading-spinner.tsx` | **Move**          | Keep as-is                   |
| `atoms/index.ts`            | **DELETE**                   | -                 | Replace with common/index.ts |
| `molecules/FeatureCard.tsx` | `common/feature-card.tsx`    | **Move + Update** | Update imports from ui/card  |
| `molecules/EmptyState.tsx`  | `common/empty-state.tsx`     | **Move + Update** | Update imports if any        |
| `molecules/index.ts`        | **DELETE**                   | -                 | Replace with common/index.ts |
| **Total**: 5 files          |                              |                   | **Reusable components**      |

### Phase 4: Layout Components (Priority: HIGH)

| Old Path                   | New Path                           | Action            | Notes                           |
| -------------------------- | ---------------------------------- | ----------------- | ------------------------------- |
| `Navigation.tsx`           | `layout/navigation.tsx`            | **Move + Update** | Update Tooltip import           |
| `MobileDrawer.tsx`         | `layout/mobile-drawer.tsx`         | **Move + Update** | Update Sheet import             |
| `Footer.tsx`               | `layout/footer.tsx`                | **Move + Update** | Update Tooltip import           |
| `BreadcrumbNavigation.tsx` | `layout/breadcrumb-navigation.tsx` | **Move + Update** | Update Breadcrumb import        |
| `LanguageSelector.tsx`     | `layout/language-selector.tsx`     | **Move + Update** | Update Select import (likely)   |
| `PageHero.tsx`             | `layout/page-hero.tsx`             | **Move**          | No ui imports                   |
| `Router.tsx`               | `layout/router.tsx`                | **Move**          | No ui imports                   |
| `ThemeDebug.tsx`           | `layout/theme-debug.tsx`           | **Move**          | Dev utility                     |
| **Total**: 8 files         |                                    |                   | **Shell/navigation components** |

### Phase 5: Sections Components (Priority: MEDIUM)

| Old Path                           | New Path                                      | Action            | Notes                 |
| ---------------------------------- | --------------------------------------------- | ----------------- | --------------------- |
| `HeroSection.tsx`                  | `sections/hero-section.tsx`                   | **Move + Update** | Update Badge import   |
| `AudienceSection.tsx`              | `sections/audience-section.tsx`               | **Move + Update** | Update Badge import   |
| `FrameworkSection.tsx`             | `sections/framework-section.tsx`              | **Move**          | No ui imports         |
| `LeadershipReadinessFlowchart.tsx` | `sections/leadership-readiness-flowchart.tsx` | **Move + Update** | Update Tooltip import |
| `UnifiedRelatedPages.tsx`          | `sections/unified-related-pages.tsx`          | **Move**          | Check for ui imports  |
| **Total**: 5 files                 |                                               |                   | **Page sections**     |

### Phase 6: Config Files (Priority: LOW)

| Old Path                       | New Path                          | Action   | Notes             |
| ------------------------------ | --------------------------------- | -------- | ----------------- |
| `NavigationConstants.ts`       | `config/navigation.ts`            | **Move** | Data file         |
| `UnifiedRelatedPagesConfig.ts` | `config/unified-related-pages.ts` | **Move** | Data file         |
| **Total**: 2 files             |                                   |          | **Configuration** |

### Phase 7: Media Helpers (Priority: LOW)

| Old Path                      | New Path                        | Action   | Notes               |
| ----------------------------- | ------------------------------- | -------- | ------------------- |
| `figma/ImageWithFallback.tsx` | `media/image-with-fallback.tsx` | **Move** | No ui imports       |
| **Total**: 1 file             |                                 |          | **Media utilities** |

### Phase 8: Pages (Priority: LOW)

| Old Path                           | New Path                             | Action              | Notes                     |
| ---------------------------------- | ------------------------------------ | ------------------- | ------------------------- |
| `pages/AboutPage.tsx`              | `pages/about-page.tsx`               | **Rename + Update** | Check for ui imports      |
| `pages/ConceptsPage.tsx`           | `pages/concepts-page.tsx`            | **Rename + Update** | Check for ui imports      |
| `pages/ContributingPage.tsx`       | `pages/contributing-page.tsx`        | **Rename + Update** | Uses Card, Button from ui |
| `pages/DevelopingLeadersPage.tsx`  | `pages/developing-leaders-page.tsx`  | **Rename + Update** | Check for ui imports      |
| `pages/FrameworkPage.tsx`          | `pages/framework-page.tsx`           | **Rename + Update** | Uses atoms/molecules      |
| `pages/GuidelinesPage.tsx`         | `pages/guidelines-page.tsx`          | **Rename + Update** | Check for ui imports      |
| `pages/LawsPage.tsx`               | `pages/laws-page.tsx`                | **Rename + Update** | Check for ui imports      |
| `pages/LevelingPage.tsx`           | `pages/leveling-page.tsx`            | **Rename + Update** | Check for ui imports      |
| `pages/ManagementPage.tsx`         | `pages/management-page.tsx`          | **Rename + Update** | Check for ui imports      |
| `pages/ManifestoPage.tsx`          | `pages/manifesto-page.tsx`           | **Rename + Update** | Check for ui imports      |
| `pages/ProgressionPillarsPage.tsx` | `pages/progression-pillars-page.tsx` | **Rename + Update** | Check for ui imports      |
| `pages/ReferencesPage.tsx`         | `pages/references-page.tsx`          | **Rename + Update** | Check for ui imports      |
| `pages/ShapesPage.tsx`             | `pages/shapes-page.tsx`              | **Rename + Update** | Check for ui imports      |
| `pages/TopologiesPage.tsx`         | `pages/topologies-page.tsx`          | **Rename + Update** | Check for ui imports      |
| **Total**: 14 files                |                                      |                     | **Page components**       |

### Phase 9: Cleanup (Priority: FINAL)

| Old Path                            | Action     | Notes                         |
| ----------------------------------- | ---------- | ----------------------------- |
| `ui/` (entire directory)            | **DELETE** | After all migrations complete |
| `atoms/` (entire directory)         | **DELETE** | After moving to common/       |
| `molecules/` (entire directory)     | **DELETE** | After moving to common/       |
| `design-system/` (entire directory) | **DELETE** | After moving to foundation/   |
| `figma/` (entire directory)         | **DELETE** | After moving to media/        |
| **Total**: 5 directories            |            | **Remove old structure**      |

---

## Import Path Mapping

### Old Import Pattern → New Import Pattern

| Old Import               | New Import                                             | Affected Files                |
| ------------------------ | ------------------------------------------------------ | ----------------------------- |
| `from './ui/button'`     | `from '@/components/foundation/primitives/button'`     | ContributingPage              |
| `from './ui/card'`       | `from '@/components/foundation/primitives/card'`       | ContributingPage, FeatureCard |
| `from './ui/tooltip'`    | `from '@/components/foundation/primitives/tooltip'`    | Navigation, Footer, Flowchart |
| `from './ui/sheet'`      | `from '@/components/foundation/primitives/sheet'`      | MobileDrawer                  |
| `from './ui/badge'`      | `from '@/components/foundation/primitives/badge'`      | HeroSection, AudienceSection  |
| `from './ui/breadcrumb'` | `from '@/components/foundation/primitives/breadcrumb'` | BreadcrumbNavigation          |
| `from '../atoms'`        | `from '@/components/common'`                           | FeatureCard, Pages            |
| `from '../molecules'`    | `from '@/components/common'`                           | Pages                         |
| `from './Navigation'`    | `from '@/components/layout/navigation'`                | App.tsx, Router               |
| `from './Footer'`        | `from '@/components/layout/footer'`                    | App.tsx, Router               |

---

## Phased Implementation Plan

### Phase 1: Setup & Core Primitives (Day 1, 3-4 hours)

**Goal**: Establish foundation/primitives with 10-15 core components

**Tasks**:

1. Create `src/components/foundation/` directory structure
2. Create `src/components/foundation/primitives/` directory
3. Implement these primitives (in order of usage):
   - `button.tsx` (used by ContributingPage)
   - `tooltip.tsx` (used by 4 components)
   - `card.tsx` (used by 2 components)
   - `badge.tsx` (used by 2 components)
   - `sheet.tsx` (used by MobileDrawer)
   - `breadcrumb.tsx` (used by BreadcrumbNavigation)
   - `dialog.tsx` (commonly needed)
   - `input.tsx` (commonly needed)
   - `textarea.tsx` (commonly needed)
   - `label.tsx` (commonly needed)
   - `select.tsx` (for LanguageSelector)
   - `tabs.tsx` (commonly needed)
   - `separator.tsx` (commonly needed)
   - `checkbox.tsx` (forms)
   - `radio-group.tsx` (forms)
4. Create barrel export `foundation/primitives/index.ts`
5. Test one primitive in isolation (e.g., Button in Storybook or dev page)

**Success Criteria**:

- All 15 primitives exist and export correctly
- TypeScript compiles without errors
- One primitive tested and working

### Phase 2: Layout Migration (Day 1-2, 2-3 hours)

**Goal**: Move layout components and update their imports

**Tasks**:

1. Create `src/components/layout/` directory
2. Move and update these files (in order):
   - `Navigation.tsx` → `layout/navigation.tsx` (update Tooltip import)
   - `MobileDrawer.tsx` → `layout/mobile-drawer.tsx` (update Sheet import)
   - `Footer.tsx` → `layout/footer.tsx` (update Tooltip import)
   - `BreadcrumbNavigation.tsx` → `layout/breadcrumb-navigation.tsx` (update Breadcrumb import)
   - `LanguageSelector.tsx` → `layout/language-selector.tsx` (update Select import if needed)
   - `PageHero.tsx` → `layout/page-hero.tsx` (no ui imports)
   - `Router.tsx` → `layout/router.tsx` (no ui imports)
   - `ThemeDebug.tsx` → `layout/theme-debug.tsx` (check imports)
3. Update imports in `App.tsx` or main entry point
4. Create barrel export `layout/index.ts`
5. Run `pnpm dev` and test navigation, mobile menu, footer

**Success Criteria**:

- All layout components render correctly
- Navigation works (desktop and mobile)
- Theme toggle works
- No console errors

### Phase 3: Common & Sections Migration (Day 2, 2-3 hours)

**Goal**: Reorganize atoms/molecules into common/ and move sections/

**Tasks**:

1. Create `src/components/common/` directory
2. Move atoms:
   - `atoms/Heading.tsx` → `common/heading.tsx`
   - `atoms/Text.tsx` → `common/text.tsx`
   - `atoms/LoadingSpinner.tsx` → `common/loading-spinner.tsx`
3. Move and update molecules:
   - `molecules/FeatureCard.tsx` → `common/feature-card.tsx` (update Card import)
   - `molecules/EmptyState.tsx` → `common/empty-state.tsx` (check imports)
4. Create barrel export `common/index.ts`
5. Create `src/components/sections/` directory
6. Move section components:
   - `HeroSection.tsx` → `sections/hero-section.tsx` (update Badge import)
   - `AudienceSection.tsx` → `sections/audience-section.tsx` (update Badge import)
   - `FrameworkSection.tsx` → `sections/framework-section.tsx`
   - `LeadershipReadinessFlowchart.tsx` → `sections/leadership-readiness-flowchart.tsx` (update Tooltip)
   - `UnifiedRelatedPages.tsx` → `sections/unified-related-pages.tsx`
7. Create barrel export `sections/index.ts`
8. Update any page imports that reference atoms/molecules/sections

**Success Criteria**:

- All common components export correctly
- All section components render
- Homepage displays correctly with new imports

### Phase 4: Pages, Media, Config Migration (Day 2-3, 2 hours)

**Goal**: Finish reorganization with pages, media, config

**Tasks**:

1. Create `src/components/media/` directory
2. Move `figma/ImageWithFallback.tsx` → `media/image-with-fallback.tsx`
3. Create barrel export `media/index.ts`
4. Create `src/components/config/` directory
5. Move config files:
   - `NavigationConstants.ts` → `config/navigation.ts`
   - `UnifiedRelatedPagesConfig.ts` → `config/unified-related-pages.ts`
6. Create barrel export `config/index.ts`
7. Move `foundation/design-system/`:
   - `design-system/DesignTokens.tsx` → `foundation/design-system/tokens.tsx`
   - `design-system/StandardLayouts.tsx` → `foundation/design-system/layouts.tsx`
8. Update all pages:
   - Check each page in `pages/` for ui/ imports
   - Update `pages/ContributingPage.tsx` (uses Button, Card)
   - Update any other pages with ui/ imports
   - Rename files to kebab-case if desired
9. Update Router and App.tsx with all new import paths

**Success Criteria**:

- All pages load without errors
- Config files imported correctly
- Images display properly
- No broken imports

### Phase 5: Cleanup & Validation (Day 3, 2 hours)

**Goal**: Remove old code, validate, test

**Tasks**:

1. Delete old directories:
   - `src/components/ui/` (entire directory)
   - `src/components/atoms/` (entire directory)
   - `src/components/molecules/` (entire directory)
   - `src/components/design-system/` (entire directory)
   - `src/components/figma/` (entire directory)
2. Run TypeScript check: `pnpm build` or `tsc --noEmit`
3. Fix any remaining import errors
4. Run ESLint: `pnpm lint`
5. Fix linting issues
6. Identify unused dependencies in package.json:
   - `class-variance-authority` - likely remove
   - `vaul` - check if drawer is used
   - `cmdk` - check if command palette is used
   - `input-otp` - check if OTP input is used
   - `react-day-picker` - check if calendar is used
   - `recharts` - check if charts are used
   - `react-resizable-panels` - check if resizable is used
7. Manual testing:
   - Test all pages (About, Framework, Leveling, etc.)
   - Test navigation (desktop and mobile)
   - Test theme toggle
   - Test language selector
   - Test any forms or interactive elements
   - Test on mobile viewport

**Success Criteria**:

- TypeScript compiles successfully
- ESLint passes with 0 warnings
- All pages render correctly
- All interactive elements work
- No console errors in browser

---

## Risk Mitigation Strategies

### Risk 1: Breaking existing functionality

**Mitigation**:

- Migrate incrementally by phase
- Test after each phase
- Keep `pnpm dev` running to catch errors early
- Commit after each successful phase

### Risk 2: Import path confusion

**Mitigation**:

- Use TypeScript for compile-time validation
- Use global search/replace for import updates
- Create barrel exports for clean imports
- Document import patterns in this file

### Risk 3: Lost CVA functionality

**Mitigation**:

- Replace CVA with simple props (variant, size)
- Use cn() utility for className merging
- Keep variant logic simple and inline
- Test Button variants thoroughly

### Risk 4: Responsive behavior breaks

**Mitigation**:

- Test mobile viewport after each phase
- Check Navigation and MobileDrawer specifically
- Verify Tailwind responsive classes
- Test on actual mobile device if available

### Risk 5: Accessibility regression

**Mitigation**:

- Keep Radix primitives as-is (built-in A11y)
- Test keyboard navigation (Tab, Enter, Escape)
- Verify focus states with Tailwind classes
- Test screen reader if possible (VoiceOver, NVDA)

---

## Dependencies to Review/Remove

After Phase 5 cleanup, review these dependencies:

| Dependency                 | Current Version | Keep or Remove? | Reasoning                                 |
| -------------------------- | --------------- | --------------- | ----------------------------------------- |
| `class-variance-authority` | ^0.7.1          | **REMOVE**      | CVA not needed with simple variant props  |
| `vaul`                     | ^1.1.2          | **REMOVE**      | Using Radix Dialog for drawers (Sheet)    |
| `cmdk`                     | ^1.1.1          | **CHECK**       | Remove if command palette not used        |
| `embla-carousel-react`     | ^8.6.0          | **CHECK**       | Remove if carousel not used               |
| `input-otp`                | ^1.4.2          | **CHECK**       | Remove if OTP input not used              |
| `react-day-picker`         | ^9.11.1         | **CHECK**       | Remove if date picker not used            |
| `recharts`                 | ^3.3.0          | **CHECK**       | Remove if charts not used                 |
| `react-resizable-panels`   | ^3.0.6          | **CHECK**       | Remove if resizable panels not used       |
| `sonner`                   | ^2.0.7          | **KEEP**        | Toast notifications (no Radix equivalent) |
| `tailwindcss-animate`      | ^1.0.7          | **KEEP**        | Used for Radix state animations           |
| `tailwind-merge`           | ^3.3.1          | **KEEP**        | Used by cn() utility                      |
| `@radix-ui/react-slot`     | ^1.2.4          | **KEEP**        | Used for Button asChild composition       |
| All other Radix primitives | Various         | **KEEP**        | Core functionality                        |

**Estimated package.json cleanup**: 3-6 dependencies removed

---

## Search/Replace Patterns

Use these patterns in VS Code global search (Ctrl+Shift+F):

### Pattern 1: Update ui/ imports to foundation/primitives/

```
Find:    from ['"]\.\/ui\/(.+)['"]
Replace: from '@/components/foundation/primitives/$1'
```

### Pattern 2: Update atoms imports to common/

```
Find:    from ['"]\.\.?\/atoms\/(.+)['"]
Replace: from '@/components/common/$1'
```

### Pattern 3: Update molecules imports to common/

```
Find:    from ['"]\.\.?\/molecules\/(.+)['"]
Replace: from '@/components/common/$1'
```

### Pattern 4: Update loose component imports to layout/

```
Find:    from ['"]\.\/Navigation['"]
Replace: from '@/components/layout/navigation'
```

**Note**: Use with caution and review changes before committing.

---

## Testing Checklist

After Phase 5, verify all functionality:

### Desktop Testing:

- [ ] Navigation bar renders
- [ ] All nav links work
- [ ] Theme toggle works (light/dark)
- [ ] Language selector works
- [ ] Tooltips appear on hover
- [ ] All pages load correctly
- [ ] Breadcrumbs display correctly
- [ ] Footer links work
- [ ] Images load with fallbacks

### Mobile Testing (< 768px):

- [ ] Mobile menu button appears
- [ ] Mobile drawer opens/closes
- [ ] Navigation links work in drawer
- [ ] Theme toggle works in mobile
- [ ] Language selector works in mobile
- [ ] Pages are responsive
- [ ] Touch interactions work

### Interactive Elements:

- [ ] Buttons are clickable
- [ ] Dialogs open/close
- [ ] Tooltips show/hide
- [ ] Forms submit correctly
- [ ] Tabs switch content
- [ ] Select dropdowns work
- [ ] Checkboxes toggle
- [ ] Radio buttons select

### Accessibility:

- [ ] Keyboard navigation works (Tab, Enter, Escape)
- [ ] Focus indicators visible
- [ ] Screen reader labels present
- [ ] ARIA attributes correct
- [ ] Color contrast sufficient

---

## Timeline Summary

| Phase     | Duration        | Tasks                   | Deliverables                      |
| --------- | --------------- | ----------------------- | --------------------------------- |
| Phase 1   | 3-4 hours       | Setup & Core Primitives | 15 primitives in foundation/      |
| Phase 2   | 2-3 hours       | Layout Migration        | 8 layout components moved         |
| Phase 3   | 2-3 hours       | Common & Sections       | 5 common + 5 sections moved       |
| Phase 4   | 2 hours         | Pages, Media, Config    | All remaining files organized     |
| Phase 5   | 2 hours         | Cleanup & Validation    | Old code deleted, tests pass      |
| **Total** | **11-14 hours** | **Complete refactor**   | **Clean, maintainable structure** |

---

## Next Steps

1. ✅ **Assessment complete** - ui.structure-and-components.md
2. ✅ **Radix patterns defined** - ui.radix-primitives-design.md
3. ✅ **Refactor plan complete** - This document
4. 🔄 **Create operation steps** - Detailed step-by-step guide (Next)
5. 🔄 **Create checklist** - Task verification checklist (Next)
6. 🔄 **Begin implementation** - Phase 1 execution

---

**Plan completed by:** GitHub Copilot  
**Review status:** Ready for operational steps document
