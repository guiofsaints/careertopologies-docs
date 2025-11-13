# Radix Refactor: Verification Checklist

**Date:** November 6, 2025  
**Project:** CareerTopologies Frontend  
**Purpose:** Comprehensive checklist for verifying the refactor completion

---

## Overview

Use this checklist to systematically verify that the refactor has been completed successfully. Check off items as you complete them.

---

## Phase 1: Foundation Primitives

### Directory Structure

- [x] `src/components/foundation/` directory exists
- [x] `src/components/foundation/primitives/` directory exists
- [x] `src/components/foundation/design-system/` directory exists

### Primitive Files Created

- [x] `foundation/primitives/button.tsx` exists and exports Button
- [x] `foundation/primitives/tooltip.tsx` exists and exports Tooltip components
- [x] `foundation/primitives/card.tsx` exists and exports Card components
- [x] `foundation/primitives/badge.tsx` exists and exports Badge
- [x] `foundation/primitives/sheet.tsx` exists and exports Sheet components
- [x] `foundation/primitives/breadcrumb.tsx` exists and exports Breadcrumb components
- [x] `foundation/primitives/dialog.tsx` exists and exports Dialog components
- [x] `foundation/primitives/input.tsx` exists and exports Input
- [x] `foundation/primitives/textarea.tsx` exists and exports Textarea
- [x] `foundation/primitives/label.tsx` exists and exports Label
- [x] `foundation/primitives/select.tsx` exists and exports Select components
- [x] `foundation/primitives/tabs.tsx` exists and exports Tabs components
- [x] `foundation/primitives/separator.tsx` exists and exports Separator
- [x] `foundation/primitives/checkbox.tsx` exists and exports Checkbox
- [x] `foundation/primitives/radio-group.tsx` exists and exports RadioGroup components
- [x] `foundation/primitives/index.ts` exists and exports all primitives
- [ ] `foundation/primitives/input.tsx` exists and exports Input
- [ ] `foundation/primitives/textarea.tsx` exists and exports Textarea
- [ ] `foundation/primitives/label.tsx` exists and exports Label
- [ ] `foundation/primitives/select.tsx` exists and exports Select components
- [ ] `foundation/primitives/tabs.tsx` exists and exports Tabs components
- [ ] `foundation/primitives/separator.tsx` exists and exports Separator
- [ ] `foundation/primitives/checkbox.tsx` exists and exports Checkbox
- [ ] `foundation/primitives/radio-group.tsx` exists and exports RadioGroup

### Barrel Exports

- [ ] `foundation/primitives/index.ts` exists and exports all primitives

### Compilation

- [ ] TypeScript compiles without errors (`pnpm build` or `tsc --noEmit`)
- [ ] No missing import errors
- [ ] All primitive components are typed correctly

### Git

- [ ] Phase 1 changes committed to Git

---

### Phase 2: Layout Migration

- [x] Create `src/components/layout/` directory
- [x] Move `Navigation.tsx` to `layout/Navigation.tsx`
- [x] Move `Footer.tsx` to `layout/Footer.tsx`
- [x] Move `MobileDrawer.tsx` to `layout/MobileDrawer.tsx`
- [x] Move `BreadcrumbNavigation.tsx` to `layout/BreadcrumbNavigation.tsx`
- [x] Update imports in layout components to use foundation primitives
- [x] Update imports in App.tsx
- [x] Update imports in PageHero.tsx
- [x] TypeScript compilation validation

### Directory Structure

- [ ] `src/components/layout/` directory exists

### Files Moved

- [ ] `Navigation.tsx` → `layout/navigation.tsx`
- [ ] `MobileDrawer.tsx` → `layout/mobile-drawer.tsx`
- [ ] `Footer.tsx` → `layout/footer.tsx`
- [ ] `BreadcrumbNavigation.tsx` → `layout/breadcrumb-navigation.tsx`
- [ ] `LanguageSelector.tsx` → `layout/language-selector.tsx`
- [ ] `PageHero.tsx` → `layout/page-hero.tsx`
- [ ] `Router.tsx` → `layout/router.tsx`
- [ ] `ThemeDebug.tsx` → `layout/theme-debug.tsx`

### Imports Updated

- [ ] `layout/navigation.tsx` imports from `foundation/primitives/tooltip`
- [ ] `layout/mobile-drawer.tsx` imports from `foundation/primitives/sheet`
- [ ] `layout/footer.tsx` imports from `foundation/primitives/tooltip`
- [ ] `layout/breadcrumb-navigation.tsx` imports from `foundation/primitives/breadcrumb`
- [ ] `layout/language-selector.tsx` imports updated (if any)
- [ ] No references to `./ui/` or `../ui/` in layout files

### App Entry Point Updated

- [ ] `App.tsx` (or equivalent) imports from `@/components/layout`
- [ ] No broken imports in main app file

### Barrel Export

- [ ] `layout/index.ts` exists and exports all layout components

### Functionality Testing

- [ ] Navigation bar renders correctly
- [ ] All navigation links work
- [ ] Theme toggle button works
- [ ] Mobile menu button appears on mobile
- [ ] Mobile drawer opens and closes
- [ ] Footer renders with correct links
- [ ] Tooltips work on hover
- [ ] Language selector works (if applicable)

### Git

- [ ] Phase 2 changes committed to Git

---

## Phase 3: Common & Sections Migration

### Directory Structure

- [ ] `src/components/common/` directory exists
- [ ] `src/components/sections/` directory exists

### Common Components Moved

- [ ] `atoms/Heading.tsx` → `common/heading.tsx`
- [ ] `atoms/Text.tsx` → `common/text.tsx`
- [ ] `atoms/LoadingSpinner.tsx` → `common/loading-spinner.tsx`
- [ ] `molecules/FeatureCard.tsx` → `common/feature-card.tsx`
- [ ] `molecules/EmptyState.tsx` → `common/empty-state.tsx`

### Section Components Moved

- [ ] `HeroSection.tsx` → `sections/hero-section.tsx`
- [ ] `AudienceSection.tsx` → `sections/audience-section.tsx`
- [ ] `FrameworkSection.tsx` → `sections/framework-section.tsx`
- [ ] `LeadershipReadinessFlowchart.tsx` → `sections/leadership-readiness-flowchart.tsx`
- [ ] `UnifiedRelatedPages.tsx` → `sections/unified-related-pages.tsx`

### Imports Updated

- [ ] `common/feature-card.tsx` imports from `foundation/primitives/card`
- [ ] `common/feature-card.tsx` imports heading/text from `./heading` and `./text`
- [ ] `sections/hero-section.tsx` imports from `foundation/primitives/badge`
- [ ] `sections/audience-section.tsx` imports from `foundation/primitives/badge`
- [ ] `sections/leadership-readiness-flowchart.tsx` imports from `foundation/primitives/tooltip`
- [ ] All page files import from `@/components/common` instead of `../atoms` or `../molecules`
- [ ] No references to `atoms/` or `molecules/` directories

### Barrel Exports

- [ ] `common/index.ts` exists and exports all common components
- [ ] `sections/index.ts` exists and exports all section components

### Functionality Testing

- [ ] Homepage hero section renders
- [ ] Audience section renders with cards
- [ ] Framework section renders
- [ ] Leadership flowchart displays correctly
- [ ] FeatureCard displays correctly on pages using it
- [ ] Heading and Text components render with correct styles
- [ ] All pages using common components display correctly

### Git

- [ ] Phase 3 changes committed to Git

---

## Phase 4: Pages, Media, Config Migration

### Directory Structure

- [ ] `src/components/media/` directory exists
- [ ] `src/components/config/` directory exists
- [ ] `foundation/design-system/` directory populated

### Media Files Moved

- [ ] `figma/ImageWithFallback.tsx` → `media/image-with-fallback.tsx`
- [ ] `media/index.ts` barrel export created

### Config Files Moved

- [ ] `NavigationConstants.ts` → `config/navigation.ts`
- [ ] `UnifiedRelatedPagesConfig.ts` → `config/unified-related-pages.ts`
- [ ] `config/index.ts` barrel export created

### Design System Moved

- [ ] `design-system/DesignTokens.tsx` → `foundation/design-system/tokens.tsx`
- [ ] `design-system/StandardLayouts.tsx` → `foundation/design-system/layouts.tsx`
- [ ] `foundation/design-system/index.ts` barrel export created

### Pages Updated

- [ ] `pages/ContributingPage.tsx` imports from `foundation/primitives/card` and `foundation/primitives/button`
- [ ] All other page files checked for ui/ imports and updated
- [ ] All page files import config from `@/components/config`
- [ ] All page files import media from `@/components/media` (if applicable)

### Pages Renamed (if applicable)

- [ ] All page files follow kebab-case convention (optional)
- [ ] Router/exports updated if files were renamed

### Functionality Testing

- [ ] All pages load without errors
- [ ] Images display correctly with fallbacks
- [ ] Navigation links from config work
- [ ] Related pages sections display
- [ ] Contributing page displays with buttons and cards
- [ ] All 14 pages visited and verified

### Git

- [ ] Phase 4 changes committed to Git

---

## Phase 5: Cleanup & Validation

### Old Directories Deleted

- [ ] `src/components/ui/` directory deleted
- [ ] `src/components/atoms/` directory deleted
- [ ] `src/components/molecules/` directory deleted
- [ ] `src/components/design-system/` directory deleted
- [ ] `src/components/figma/` directory deleted

### No Remaining References

- [ ] Search for `from './ui/` returns 0 results
- [ ] Search for `from '../ui/` returns 0 results
- [ ] Search for `from './atoms/` returns 0 results (except in old file paths)
- [ ] Search for `from '../atoms/` returns 0 results
- [ ] Search for `from './molecules/` returns 0 results
- [ ] Search for `from '../molecules/` returns 0 results

### Build Validation

- [ ] `pnpm build` completes successfully
- [ ] No TypeScript errors
- [ ] No build warnings (or warnings documented)
- [ ] `dist/` folder created

### Lint Validation

- [ ] `pnpm lint` passes with 0 errors
- [ ] No ESLint warnings (or warnings documented and acceptable)

### Dependency Cleanup

- [ ] Checked `class-variance-authority` usage (remove if 0 results)
- [ ] Checked `vaul` usage (remove if 0 results)
- [ ] Checked `cmdk` usage (remove if 0 results)
- [ ] Checked `input-otp` usage (remove if 0 results)
- [ ] Checked `react-day-picker` usage (remove if 0 results)
- [ ] Checked `recharts` usage (remove if 0 results)
- [ ] Checked `react-resizable-panels` usage (remove if 0 results)
- [ ] Unused dependencies removed from `package.json`
- [ ] `pnpm install` run after dependency removal

### Production Build Test

- [ ] `pnpm build` for production succeeds
- [ ] `pnpm preview` runs without errors
- [ ] Preview version manually tested

### Git

- [ ] Phase 5 changes committed to Git

---

## Comprehensive Functionality Testing

### Desktop Testing (> 768px)

#### Navigation & Layout

- [ ] Navigation bar displays correctly
- [ ] Logo/brand visible
- [ ] All navigation links render
- [ ] Active link highlighted
- [ ] Theme toggle button visible
- [ ] Theme toggle switches between light/dark mode
- [ ] Language selector visible and functional
- [ ] Footer displays at bottom
- [ ] Footer links functional
- [ ] Skip to content link works (test with Tab key)

#### Pages

- [ ] Homepage loads and displays all sections
- [ ] About page loads
- [ ] Framework page loads
- [ ] Leveling page loads
- [ ] Manifesto page loads
- [ ] Topologies page loads
- [ ] Concepts page loads
- [ ] Contributing page loads with buttons and cards
- [ ] Guidelines page loads
- [ ] Laws page loads
- [ ] Management page loads
- [ ] Progression Pillars page loads
- [ ] References page loads
- [ ] Shapes page loads
- [ ] Developing Leaders page loads

#### Interactive Elements

- [ ] Tooltips appear on hover (navigation icons, footer links, flowchart)
- [ ] Buttons are clickable and styled correctly
- [ ] Cards display correctly (shadows, borders, hover states)
- [ ] Badges display correctly
- [ ] Links are underlined and clickable
- [ ] Breadcrumbs display on pages (if applicable)

#### Visual Elements

- [ ] All images load correctly
- [ ] Image fallbacks work (test by blocking image URLs)
- [ ] Icons render (lucide-react icons)
- [ ] Headings are styled correctly (sizes, weights)
- [ ] Text components render with correct colors
- [ ] Loading spinners animate (if visible)

### Mobile Testing (< 768px)

#### Layout

- [ ] Resize browser to mobile width (< 768px)
- [ ] Desktop navigation hides
- [ ] Mobile menu button appears
- [ ] Logo/brand still visible
- [ ] Footer adapts to mobile layout

#### Mobile Navigation

- [ ] Mobile menu button clickable
- [ ] Mobile drawer opens from side
- [ ] Navigation links visible in drawer
- [ ] Navigation links functional in drawer
- [ ] Drawer closes when clicking link
- [ ] Drawer closes when clicking outside
- [ ] Theme toggle visible in mobile view
- [ ] Language selector visible in mobile view

#### Mobile Pages

- [ ] All pages render correctly on mobile
- [ ] Content is readable (no horizontal scroll)
- [ ] Images scale appropriately
- [ ] Cards stack vertically
- [ ] Buttons are touch-friendly (adequate size)

#### Touch Interactions

- [ ] Tap interactions work (buttons, links)
- [ ] Swipe to close drawer works (if implemented)
- [ ] Scroll works smoothly
- [ ] No overlapping touch targets

### Keyboard Navigation & Accessibility

#### Keyboard Support

- [ ] Press Tab to navigate through interactive elements
- [ ] Focus indicators visible on all focusable elements
- [ ] Press Enter to activate buttons/links
- [ ] Press Escape to close modals/tooltips/drawers
- [ ] Arrow keys work in select dropdowns (if applicable)
- [ ] Tab order is logical and follows visual layout

#### Screen Reader Support (if possible to test)

- [ ] Buttons have accessible labels
- [ ] Images have alt text
- [ ] Icon-only buttons have `aria-label` or `<span className="sr-only">`
- [ ] Modals have `aria-labelledby` and `aria-describedby`
- [ ] Form inputs have associated labels
- [ ] Skip to content link announced

#### Color Contrast & Visual

- [ ] Text is readable in light mode
- [ ] Text is readable in dark mode
- [ ] Focus indicators have sufficient contrast
- [ ] Interactive elements visually distinct

### Cross-Browser Testing (if applicable)

#### Chrome/Edge

- [ ] All pages load correctly
- [ ] Animations work smoothly
- [ ] No console errors

#### Firefox

- [ ] All pages load correctly
- [ ] Animations work smoothly
- [ ] No console errors

#### Safari (if available)

- [ ] All pages load correctly
- [ ] Animations work smoothly
- [ ] No console errors

---

## Code Quality Checks

### TypeScript

- [ ] No `any` types introduced (unless necessary)
- [ ] All components properly typed
- [ ] Props interfaces defined
- [ ] No implicit any errors

### Code Organization

- [ ] Consistent file naming (kebab-case or PascalCase)
- [ ] Barrel exports used consistently
- [ ] No circular dependencies
- [ ] Logical component grouping

### Import Paths

- [ ] All imports use `@/components/` alias
- [ ] No relative imports across major directories
- [ ] Consistent import ordering

### Styling

- [ ] Consistent Tailwind class usage
- [ ] `cn()` utility used for conditional classes
- [ ] No inline styles (unless necessary)
- [ ] Dark mode classes applied consistently

---

## Documentation

- [ ] `ui.radix-refactor-changelog.md` updated with completed phases
- [ ] README updated if needed (new import paths)
- [ ] Team notified of changes (if working in a team)
- [ ] Component documentation updated (if exists)

---

## Final Checklist

### Pre-Merge

- [ ] All phases committed to Git
- [ ] Commit messages are clear and descriptive
- [ ] No uncommitted changes
- [ ] All tests pass (if tests exist)

### Deployment Ready

- [ ] Production build tested (`pnpm preview`)
- [ ] No console errors in production build
- [ ] Performance acceptable (load times, interactions)
- [ ] Ready to merge to main branch

### Post-Merge

- [ ] Changes deployed to staging/production
- [ ] Verified in deployed environment
- [ ] Team trained on new structure (if applicable)
- [ ] Old branches cleaned up

---

## Issue Tracking

If any checklist item fails, document it here:

| Item                           | Issue Description                | Status  | Resolution                            |
| ------------------------------ | -------------------------------- | ------- | ------------------------------------- |
| Example: "Tooltip not showing" | Tooltip import missing in Footer | ❌ Open | Add import from foundation/primitives |
|                                |                                  |         |                                       |

---

## Sign-Off

- **Refactor Completed By:** ****\*\*****\_\_\_****\*\*****
- **Date Completed:** ****\*\*****\_\_\_****\*\*****
- **Reviewed By:** ****\*\*****\_\_\_****\*\*****
- **Sign-Off Date:** ****\*\*****\_\_\_****\*\*****

---

**Checklist completed by:** GitHub Copilot  
**Status:** Ready for execution verification
