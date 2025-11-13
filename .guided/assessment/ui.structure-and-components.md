# UI Structure and Components Assessment

**Date:** November 6, 2025  
**Project:** CareerTopologies Frontend  
**Purpose:** Analyze the current components structure to inform the Radix + Tailwind refactor

---

## Executive Summary

The current components structure is a **hybrid architecture** mixing:

- **shadcn-style UI components** in `src/components/ui/*` (47 files) - wrapping Radix primitives with class-variance-authority
- **Custom atomic/molecular components** in `atoms/` and `molecules/`
- **Loose top-level components** for layout, sections, and navigation
- **Page components** in `pages/` directory
- **Design system tokens** in `design-system/`

### Key Findings:

1. **Heavy shadcn layer**: 47 UI components using CVA (class-variance-authority) for variant management
2. **Limited direct UI imports**: Only 6 components directly import from `ui/*`, indicating low coupling
3. **All ui/\* components already use Radix**: The wrapper layer exists but is thin
4. **Good separation**: Pages, sections, and layout are already somewhat organized
5. **Opportunity for simplification**: CVA and shadcn abstractions can be replaced with simpler Radix + Tailwind patterns

---

## Current Directory Structure

```
src/components/
├── ui/                              # 47 shadcn-style wrapper components (TO BE REPLACED)
│   ├── accordion.tsx
│   ├── alert-dialog.tsx
│   ├── alert.tsx
│   ├── aspect-ratio.tsx
│   ├── avatar.tsx
│   ├── badge.tsx
│   ├── breadcrumb.tsx
│   ├── button.tsx                   # Uses CVA for variants
│   ├── calendar.tsx
│   ├── card.tsx
│   ├── carousel.tsx
│   ├── chart.tsx
│   ├── checkbox.tsx
│   ├── collapsible.tsx
│   ├── command.tsx
│   ├── context-menu.tsx
│   ├── dialog.tsx                   # Wraps @radix-ui/react-dialog
│   ├── drawer.tsx
│   ├── dropdown-menu.tsx
│   ├── form.tsx
│   ├── hover-card.tsx
│   ├── input-otp.tsx
│   ├── input.tsx
│   ├── label.tsx
│   ├── menubar.tsx
│   ├── navigation-menu.tsx
│   ├── pagination.tsx
│   ├── popover.tsx
│   ├── progress.tsx
│   ├── radio-group.tsx
│   ├── resizable.tsx
│   ├── scroll-area.tsx
│   ├── select.tsx                   # Wraps @radix-ui/react-select
│   ├── separator.tsx
│   ├── sheet.tsx
│   ├── sidebar.tsx
│   ├── skeleton.tsx
│   ├── slider.tsx
│   ├── sonner.tsx
│   ├── switch.tsx
│   ├── table.tsx
│   ├── tabs.tsx                     # Wraps @radix-ui/react-tabs
│   ├── textarea.tsx
│   ├── toggle-group.tsx
│   ├── toggle.tsx
│   ├── tooltip.tsx                  # Wraps @radix-ui/react-tooltip
│   └── use-mobile.ts                # Hook
│
├── atoms/                           # 4 custom atomic components (KEEP & REORGANIZE)
│   ├── Heading.tsx                  # Semantic heading with variants
│   ├── Text.tsx                     # Semantic text component
│   ├── LoadingSpinner.tsx           # Loading indicator
│   └── index.ts                     # Barrel export
│
├── molecules/                       # 2 composed components (KEEP & REORGANIZE)
│   ├── FeatureCard.tsx              # Uses Card from ui/card
│   ├── EmptyState.tsx               # Empty state pattern
│   └── index.ts                     # Barrel export
│
├── design-system/                   # 2 design system files (KEEP & REORGANIZE)
│   ├── DesignTokens.tsx             # Design tokens component
│   └── StandardLayouts.tsx          # Layout patterns
│
├── figma/                           # 1 media helper (KEEP & REORGANIZE)
│   └── ImageWithFallback.tsx        # Image component with fallback
│
├── pages/                           # 14 page components (KEEP & REORGANIZE)
│   ├── AboutPage.tsx
│   ├── ConceptsPage.tsx
│   ├── ContributingPage.tsx         # Uses Card, Button from ui/*
│   ├── DevelopingLeadersPage.tsx
│   ├── FrameworkPage.tsx
│   ├── GuidelinesPage.tsx
│   ├── LawsPage.tsx
│   ├── LevelingPage.tsx
│   ├── ManagementPage.tsx
│   ├── ManifestoPage.tsx
│   ├── ProgressionPillarsPage.tsx
│   ├── ReferencesPage.tsx
│   ├── ShapesPage.tsx
│   └── TopologiesPage.tsx
│
└── (loose components at root)       # 13 top-level components (REORGANIZE INTO LAYOUT/SECTIONS)
    ├── AudienceSection.tsx          # Section component - uses Badge from ui/*
    ├── BreadcrumbNavigation.tsx     # Layout component - uses Breadcrumb from ui/*
    ├── Footer.tsx                   # Layout component - uses Tooltip from ui/*
    ├── FrameworkSection.tsx         # Section component
    ├── HeroSection.tsx              # Section component - uses Badge from ui/*
    ├── LanguageSelector.tsx         # Layout component
    ├── LeadershipReadinessFlowchart.tsx  # Section component - uses Tooltip from ui/*
    ├── MobileDrawer.tsx             # Layout component - uses Sheet from ui/*
    ├── Navigation.tsx               # Layout component - uses Tooltip from ui/*
    ├── NavigationConstants.ts       # Config file
    ├── PageHero.tsx                 # Layout component
    ├── Router.tsx                   # Router component
    ├── ThemeDebug.tsx               # Dev utility
    ├── UnifiedRelatedPages.tsx      # Section component
    └── UnifiedRelatedPagesConfig.ts # Config file
```

---

## Component Classification Table

| Current Path                        | Role/Purpose                       | Category      | Uses shadcn ui/\*  | Uses Radix Direct       | Notes                                |
| ----------------------------------- | ---------------------------------- | ------------- | ------------------ | ----------------------- | ------------------------------------ |
| **ui/** (47 files)                  | Wrapper layer for Radix primitives | Foundation/UI | N/A                | Yes (all)               | All wrap Radix, use CVA for variants |
| `ui/button.tsx`                     | Button primitive                   | Foundation    | -                  | @radix-ui/react-slot    | Uses CVA, has loading state          |
| `ui/dialog.tsx`                     | Dialog primitive                   | Foundation    | -                  | @radix-ui/react-dialog  | Standard Radix wrapper               |
| `ui/tooltip.tsx`                    | Tooltip primitive                  | Foundation    | -                  | @radix-ui/react-tooltip | Used by 4 components                 |
| `ui/sheet.tsx`                      | Sheet/Drawer                       | Foundation    | -                  | @radix-ui/react-dialog  | Used by MobileDrawer                 |
| `ui/badge.tsx`                      | Badge component                    | Foundation    | -                  | @radix-ui/react-slot    | Used by 2 section components         |
| `ui/breadcrumb.tsx`                 | Breadcrumb nav                     | Foundation    | -                  | @radix-ui/react-slot    | Used by BreadcrumbNavigation         |
| `ui/card.tsx`                       | Card container                     | Foundation    | -                  | No Radix                | Plain Tailwind component             |
| `ui/select.tsx`                     | Select dropdown                    | Foundation    | -                  | @radix-ui/react-select  | Used by LanguageSelector (likely)    |
| `ui/tabs.tsx`                       | Tabs component                     | Foundation    | -                  | @radix-ui/react-tabs    | Complex pages may use                |
| _(other 38 ui files)_               | Various primitives                 | Foundation    | -                  | Varies                  | Currently unused or low usage        |
| **atoms/**                          |                                    |               |                    |                         |                                      |
| `atoms/Heading.tsx`                 | Semantic heading component         | Common        | No                 | No                      | Pure Tailwind, well-designed         |
| `atoms/Text.tsx`                    | Semantic text component            | Common        | No                 | No                      | Pure Tailwind                        |
| `atoms/LoadingSpinner.tsx`          | Loading indicator                  | Common        | No                 | No                      | Pure CSS/Tailwind                    |
| **molecules/**                      |                                    |               |                    |                         |                                      |
| `molecules/FeatureCard.tsx`         | Pre-composed feature card          | Common        | Yes (Card)         | No                      | Uses atoms + ui/card                 |
| `molecules/EmptyState.tsx`          | Empty state pattern                | Common        | Unknown            | Unknown                 | Likely uses atoms                    |
| **design-system/**                  |                                    |               |                    |                         |                                      |
| `design-system/DesignTokens.tsx`    | Design tokens/variables            | Foundation    | No                 | No                      | Theme/token management               |
| `design-system/StandardLayouts.tsx` | Layout patterns                    | Foundation    | No                 | No                      | Layout utilities                     |
| **figma/**                          |                                    |               |                    |                         |                                      |
| `figma/ImageWithFallback.tsx`       | Image with fallback                | Media         | No                 | No                      | Image helper                         |
| **pages/** (14 files)               |                                    |               |                    |                         |                                      |
| `pages/ContributingPage.tsx`        | Contributing guide page            | Page          | Yes (Card, Button) | No                      | Imports from ui/\*                   |
| `pages/FrameworkPage.tsx`           | Framework overview page            | Page          | No                 | No                      | Uses atoms/molecules                 |
| _(other 12 page files)_             | Various page views                 | Page          | Varies             | No                      | Mix of usage patterns                |
| **root components**                 |                                    |               |                    |                         |                                      |
| `AudienceSection.tsx`               | Homepage audience section          | Section       | Yes (Badge)        | No                      | Section block                        |
| `BreadcrumbNavigation.tsx`          | Breadcrumb component               | Layout        | Yes (Breadcrumb)   | No                      | Navigation aid                       |
| `Footer.tsx`                        | Site footer                        | Layout        | Yes (Tooltip)      | No                      | Footer links with tooltips           |
| `FrameworkSection.tsx`              | Framework overview section         | Section       | No                 | No                      | Section block                        |
| `HeroSection.tsx`                   | Hero banner section                | Section       | Yes (Badge)        | No                      | Top banner                           |
| `LanguageSelector.tsx`              | Language switcher                  | Layout        | Unknown            | Unknown                 | Likely uses Select                   |
| `LeadershipReadinessFlowchart.tsx`  | Interactive flowchart              | Section       | Yes (Tooltip)      | No                      | SVG with tooltips                    |
| `MobileDrawer.tsx`                  | Mobile menu drawer                 | Layout        | Yes (Sheet)        | No                      | Mobile navigation                    |
| `Navigation.tsx`                    | Main navigation bar                | Layout        | Yes (Tooltip)      | No                      | Header nav with theme toggle         |
| `NavigationConstants.ts`            | Navigation configuration           | Config        | No                 | No                      | Data file                            |
| `PageHero.tsx`                      | Page title hero section            | Layout        | No                 | No                      | Reusable page header                 |
| `Router.tsx`                        | Client-side router                 | Layout        | No                 | No                      | Routing logic                        |
| `ThemeDebug.tsx`                    | Theme debugging tool               | Dev Utility   | Unknown            | Unknown                 | Development only                     |
| `UnifiedRelatedPages.tsx`           | Related pages component            | Section       | Unknown            | Unknown                 | Cross-linking                        |
| `UnifiedRelatedPagesConfig.ts`      | Related pages config               | Config        | No                 | No                      | Data file                            |

---

## Current ui/\* Import Usage Analysis

### Components directly importing from `ui/*`:

1. **Navigation.tsx** → `ui/tooltip`
2. **MobileDrawer.tsx** → `ui/sheet`
3. **Footer.tsx** → `ui/tooltip`
4. **LeadershipReadinessFlowchart.tsx** → `ui/tooltip`
5. **HeroSection.tsx** → `ui/badge`
6. **BreadcrumbNavigation.tsx** → `ui/breadcrumb`
7. **ContributingPage.tsx** → `ui/card`, `ui/button`
8. **FeatureCard.tsx** → `ui/card`

### Key Insights:

- **Only 8 files** directly import from `ui/*`
- **Most used primitives**: Tooltip (4), Card (2), Badge (1), Sheet (1), Breadcrumb (1), Button (1)
- **38-40 ui components** appear to be unused or rarely used
- **Low coupling** makes refactor safer and more incremental

---

## Radix Primitives Already Installed

From `package.json`, the following Radix primitives are available:

```json
{
  "@radix-ui/react-accordion": "^1.2.12",
  "@radix-ui/react-alert-dialog": "^1.1.15",
  "@radix-ui/react-aspect-ratio": "^1.1.8",
  "@radix-ui/react-avatar": "^1.1.11",
  "@radix-ui/react-checkbox": "^1.3.3",
  "@radix-ui/react-collapsible": "^1.1.12",
  "@radix-ui/react-context-menu": "^2.2.16",
  "@radix-ui/react-dialog": "^1.1.15",
  "@radix-ui/react-dropdown-menu": "^2.1.16",
  "@radix-ui/react-hover-card": "^1.1.15",
  "@radix-ui/react-label": "^2.1.8",
  "@radix-ui/react-menubar": "^1.1.16",
  "@radix-ui/react-navigation-menu": "^1.2.14",
  "@radix-ui/react-popover": "^1.1.15",
  "@radix-ui/react-progress": "^1.1.8",
  "@radix-ui/react-radio-group": "^1.3.8",
  "@radix-ui/react-scroll-area": "^1.2.10",
  "@radix-ui/react-select": "^2.2.6",
  "@radix-ui/react-separator": "^1.1.8",
  "@radix-ui/react-slider": "^1.3.6",
  "@radix-ui/react-slot": "^1.2.4",
  "@radix-ui/react-switch": "^1.2.6",
  "@radix-ui/react-tabs": "^1.1.13",
  "@radix-ui/react-toggle": "^1.1.10",
  "@radix-ui/react-toggle-group": "^1.1.11",
  "@radix-ui/react-tooltip": "^1.2.8"
}
```

**Total**: 25 Radix primitives installed

---

## Dependencies to Consider for Removal

These are currently used by shadcn-style components but may become unnecessary:

1. **`class-variance-authority` (^0.7.1)** - CVA for variant management

   - Used heavily in `ui/button.tsx` and other components
   - **Can be removed** if we use direct Tailwind classes or simpler variant patterns

2. **`vaul` (^1.1.2)** - Drawer component

   - Used by `ui/drawer.tsx`
   - **May be removed** if we use Radix Dialog for drawers (as Sheet already does)

3. **`cmdk` (^1.1.1)** - Command palette

   - Used by `ui/command.tsx`
   - Keep if command palette is needed, otherwise remove

4. **`embla-carousel-react` (^8.6.0)** - Carousel

   - Used by `ui/carousel.tsx`
   - Keep if carousel is actively used, otherwise remove

5. **`input-otp` (^1.4.2)** - OTP input

   - Used by `ui/input-otp.tsx`
   - Remove if not used in any forms

6. **`react-day-picker` (^9.11.1)** - Date picker

   - Used by `ui/calendar.tsx`
   - Keep only if date selection is required

7. **`recharts` (^3.3.0)** - Charts

   - Used by `ui/chart.tsx`
   - Keep only if charts/graphs are displayed

8. **`sonner` (^2.0.7)** - Toast notifications

   - Used by `ui/sonner.tsx`
   - Keep if toasts are used; Radix has no toast primitive

9. **`react-resizable-panels` (^3.0.6)** - Resizable panels

   - Used by `ui/resizable.tsx`
   - Remove if not used

10. **`tailwindcss-animate` (^1.0.7)** - Animation utilities
    - Used for transitions in ui components
    - **Keep** - useful for Radix state transitions

---

## Old Path → New Category Classification

| Old Path                            | New Category             | Target Location                               |
| ----------------------------------- | ------------------------ | --------------------------------------------- |
| `ui/button.tsx`                     | Foundation Primitive     | `foundation/primitives/button.tsx`            |
| `ui/input.tsx`                      | Foundation Primitive     | `foundation/primitives/input.tsx`             |
| `ui/textarea.tsx`                   | Foundation Primitive     | `foundation/primitives/textarea.tsx`          |
| `ui/dialog.tsx`                     | Foundation Primitive     | `foundation/primitives/dialog.tsx`            |
| `ui/tooltip.tsx`                    | Foundation Primitive     | `foundation/primitives/tooltip.tsx`           |
| `ui/select.tsx`                     | Foundation Primitive     | `foundation/primitives/select.tsx`            |
| `ui/tabs.tsx`                       | Foundation Primitive     | `foundation/primitives/tabs.tsx`              |
| `ui/badge.tsx`                      | Foundation Primitive     | `foundation/primitives/badge.tsx`             |
| `ui/card.tsx`                       | Foundation Primitive     | `foundation/primitives/card.tsx`              |
| `ui/sheet.tsx`                      | Foundation Primitive     | `foundation/primitives/sheet.tsx`             |
| `ui/breadcrumb.tsx`                 | Foundation Primitive     | `foundation/primitives/breadcrumb.tsx`        |
| `ui/label.tsx`                      | Foundation Primitive     | `foundation/primitives/label.tsx`             |
| `ui/separator.tsx`                  | Foundation Primitive     | `foundation/primitives/separator.tsx`         |
| `ui/checkbox.tsx`                   | Foundation Primitive     | `foundation/primitives/checkbox.tsx`          |
| `ui/radio-group.tsx`                | Foundation Primitive     | `foundation/primitives/radio-group.tsx`       |
| `ui/switch.tsx`                     | Foundation Primitive     | `foundation/primitives/switch.tsx`            |
| `ui/slider.tsx`                     | Foundation Primitive     | `foundation/primitives/slider.tsx`            |
| `ui/progress.tsx`                   | Foundation Primitive     | `foundation/primitives/progress.tsx`          |
| `ui/accordion.tsx`                  | Foundation Primitive     | `foundation/primitives/accordion.tsx`         |
| `ui/alert-dialog.tsx`               | Foundation Primitive     | `foundation/primitives/alert-dialog.tsx`      |
| `ui/dropdown-menu.tsx`              | Foundation Primitive     | `foundation/primitives/dropdown-menu.tsx`     |
| `ui/popover.tsx`                    | Foundation Primitive     | `foundation/primitives/popover.tsx`           |
| `ui/scroll-area.tsx`                | Foundation Primitive     | `foundation/primitives/scroll-area.tsx`       |
| `ui/avatar.tsx`                     | Foundation Primitive     | `foundation/primitives/avatar.tsx`            |
| `ui/aspect-ratio.tsx`               | Foundation Primitive     | `foundation/primitives/aspect-ratio.tsx`      |
| _(other ui/\* rarely used)_         | Foundation Primitive     | Consider removing if unused                   |
| `design-system/DesignTokens.tsx`    | Foundation Design System | `foundation/design-system/tokens.tsx`         |
| `design-system/StandardLayouts.tsx` | Foundation Design System | `foundation/design-system/layouts.tsx`        |
| `atoms/Heading.tsx`                 | Common Component         | `common/heading.tsx`                          |
| `atoms/Text.tsx`                    | Common Component         | `common/text.tsx`                             |
| `atoms/LoadingSpinner.tsx`          | Common Component         | `common/loading-spinner.tsx`                  |
| `molecules/FeatureCard.tsx`         | Common Component         | `common/feature-card.tsx`                     |
| `molecules/EmptyState.tsx`          | Common Component         | `common/empty-state.tsx`                      |
| `figma/ImageWithFallback.tsx`       | Media Helper             | `media/image-with-fallback.tsx`               |
| `Navigation.tsx`                    | Layout Component         | `layout/navigation.tsx`                       |
| `MobileDrawer.tsx`                  | Layout Component         | `layout/mobile-drawer.tsx`                    |
| `Footer.tsx`                        | Layout Component         | `layout/footer.tsx`                           |
| `BreadcrumbNavigation.tsx`          | Layout Component         | `layout/breadcrumb-navigation.tsx`            |
| `LanguageSelector.tsx`              | Layout Component         | `layout/language-selector.tsx`                |
| `PageHero.tsx`                      | Layout Component         | `layout/page-hero.tsx`                        |
| `Router.tsx`                        | Layout Component         | `layout/router.tsx`                           |
| `ThemeDebug.tsx`                    | Dev Utility              | `layout/theme-debug.tsx` or remove            |
| `AudienceSection.tsx`               | Section Component        | `sections/audience-section.tsx`               |
| `FrameworkSection.tsx`              | Section Component        | `sections/framework-section.tsx`              |
| `HeroSection.tsx`                   | Section Component        | `sections/hero-section.tsx`                   |
| `LeadershipReadinessFlowchart.tsx`  | Section Component        | `sections/leadership-readiness-flowchart.tsx` |
| `UnifiedRelatedPages.tsx`           | Section Component        | `sections/unified-related-pages.tsx`          |
| `NavigationConstants.ts`            | Configuration            | `config/navigation.ts`                        |
| `UnifiedRelatedPagesConfig.ts`      | Configuration            | `config/unified-related-pages.ts`             |
| `pages/AboutPage.tsx`               | Page Component           | `pages/about-page.tsx` (or keep as-is)        |
| _(all other pages/\*.tsx)_          | Page Components          | `pages/*.tsx` (or keep as-is)                 |

---

## Recommended Refactor Phases

### Phase 1: Setup & Core Primitives (High Priority)

- Create new `foundation/primitives/` directory
- Implement 10-15 most-used primitives (Button, Input, Dialog, Tooltip, Card, etc.)
- Replace CVA with simple Tailwind variant patterns or props

### Phase 2: Layout Migration

- Move layout components to `layout/` directory
- Update imports to use new primitives from `foundation/primitives`
- Test navigation, mobile drawer, footer, breadcrumbs

### Phase 3: Common & Sections Migration

- Move atoms/molecules to `common/`
- Move loose section components to `sections/`
- Update imports throughout

### Phase 4: Pages Migration

- Keep pages in `pages/` or reorganize if needed
- Update all imports to new structure

### Phase 5: Cleanup

- Delete unused `ui/*` components
- Remove CVA and other unused dependencies
- Final lint and build pass

---

## Risks & Mitigations

| Risk                           | Impact | Mitigation                                           |
| ------------------------------ | ------ | ---------------------------------------------------- |
| Breaking existing pages        | High   | Incremental migration, test after each phase         |
| Losing CVA variant flexibility | Medium | Use simpler props or cn() utility for variants       |
| Import path confusion          | Medium | Global search/replace, use TypeScript for validation |
| Unused dependencies lingering  | Low    | Audit package.json at end, remove safely             |
| Responsive behavior breaks     | Medium | Test mobile/desktop at each phase                    |

---

## Next Steps

1. ✅ **Assessment complete** - This document
2. 🔄 **Study Radix docs** - Understand primitive patterns (Step 2)
3. 🔄 **Design target structure** - Full mapping table (Step 3)
4. 🔄 **Implement primitives** - Create foundation/primitives layer (Step 4)
5. 🔄 **Migrate components** - Move to new structure (Step 5)
6. 🔄 **Cleanup & validate** - Remove old code, test (Steps 6-7)

---

**Assessment completed by:** GitHub Copilot  
**Review status:** Ready for architecture planning
