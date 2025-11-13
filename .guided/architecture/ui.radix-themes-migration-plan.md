# Radix Themes Migration Plan

**Date:** November 6, 2025  
**Project:** CareerTopologies Frontend  
**Purpose:** Complete migration from Tailwind CSS + Radix Primitives to Radix Themes only

---

## Executive Summary

This plan outlines the migration from the current Tailwind CSS + custom Radix Primitives architecture to a **Radix Themes-only** approach, eliminating all Tailwind dependencies and custom primitive wrappers.

### Strategic Objectives

1. **Remove Tailwind CSS completely** - No utility classes, no Tailwind config, no PostCSS plugin
2. **Remove custom primitives layer** - Delete `src/components/foundation/primitives/` (16 components)
3. **Adopt Radix Themes exclusively** - Use pre-styled components with prop-based customization
4. **Preserve all functionality** - Maintain feature parity, accessibility, and user experience
5. **Maintain buildability** - Keep project compilable and runnable at every phase

### Key Metrics

| Metric                          | Current State                     | Target State            |
| ------------------------------- | --------------------------------- | ----------------------- |
| **Styling System**              | Tailwind CSS 4 + custom utilities | Radix Themes only       |
| **Custom Primitives**           | 16 Tailwind-wrapped components    | 0 (use Radix Themes)    |
| **Layout Components**           | 4 (heavy Tailwind)                | 4 (Radix Themes layout) |
| **Common Components**           | 5 (custom Heading/Text)           | Use Radix Themes        |
| **Dependencies to Remove**      | 4 (tailwind, postcss, merge, etc) | Clean                   |
| **Config Files to Remove**      | 2 (postcss.config, globals.css)   | Minimal CSS             |
| **Migration Phases**            | -                                 | 5 phases                |
| **Estimated Effort**            | -                                 | 12-16 hours             |
| **Risk Level**                  | -                                 | Moderate                |
| **Code Changes (lines)**        | -                                 | ~800-1000 LOC           |
| **Import Statement Updates**    | -                                 | ~120-150 imports        |
| **Component Deletions**         | -                                 | 18 files                |
| **Test/Build After Each Phase** | -                                 | Mandatory               |

---

## Target Architecture

### Theme Configuration

**Root Theme Wrapper:**

```tsx
// src/main.tsx
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Theme
      accentColor="sky"
      grayColor="gray"
      radius="large"
      scaling="110%"
      appearance="inherit" // Respects system/user preference
      panelBackground="solid"
    >
      <App />
    </Theme>
  </React.StrictMode>
);
```

**Theme Props:**

- `accentColor="sky"` - Primary blue/sky accent for interactive elements
- `grayColor="gray"` - Neutral gray scale
- `radius="large"` - Generous border radius for modern feel
- `scaling="110%"` - Slightly larger components for readability
- `appearance="inherit"` - Support light/dark mode based on system

### Component Structure

```
src/
├── main.tsx                      # Theme wrapper here
├── App.tsx                       # App root
├── components/
│   ├── layout/                   # Layout components (using Radix Themes layout)
│   │   ├── Navigation.tsx        # Box/Flex-based nav
│   │   ├── Footer.tsx            # Box/Grid-based footer
│   │   ├── MobileDrawer.tsx      # Custom Sheet OR Dialog
│   │   ├── BreadcrumbNavigation.tsx # Custom Flex/Link composition
│   │   └── index.ts
│   │
│   ├── sections/                 # Page sections (using Radix Themes components)
│   │   ├── HeroSection.tsx       # Grid/Flex/Heading/Text/Button
│   │   ├── AudienceSection.tsx   # Grid/Card compositions
│   │   ├── FrameworkSection.tsx  # Card grids
│   │   ├── LeadershipReadinessFlowchart.tsx # Complex (custom CSS)
│   │   ├── UnifiedRelatedPages.tsx # Grid/Card/Link
│   │   └── index.ts
│   │
│   ├── pages/                    # Page-level components
│   │   ├── AboutPage.tsx
│   │   ├── FrameworkPage.tsx
│   │   ├── TopologiesPage.tsx
│   │   ├── ... (14 page components)
│   │   └── index.ts
│   │
│   ├── config/                   # Configuration components
│   │   ├── Router.tsx
│   │   ├── LanguageSelector.tsx  # Use Select from Radix Themes
│   │   ├── NavigationConstants.ts
│   │   └── index.ts
│   │
│   ├── media/                    # Media components
│   │   ├── ImageWithFallback.tsx # Keep custom (no Image in Themes)
│   │   └── index.ts
│   │
│   └── design-system/            # Design system docs (optional)
│       ├── DesignTokens.tsx      # Token showcase
│       └── StandardLayouts.tsx   # Layout examples
│
├── hooks/
│   ├── useTheme.tsx              # Dark mode hook (use Radix Themes API)
│   └── ...
│
├── styles/
│   └── custom.css                # Minimal custom CSS (if needed)
│
└── utils/
    ├── index.ts
    └── utils.ts                  # Remove cn() utility (not needed)
```

### Deleted Components

**Complete Deletion:**

- `src/components/foundation/primitives/` - All 16 components
- `src/components/common/Heading.tsx` - Use Radix Themes `<Heading>`
- `src/components/common/Text.tsx` - Use Radix Themes `<Text>`

**Deleted Configuration:**

- `postcss.config.js` - Tailwind PostCSS config
- `src/styles/globals.css` - Tailwind directives and utilities

**Dependencies to Remove:**

```json
{
  "tailwindcss": "^4.1.16",
  "@tailwindcss/postcss": "^4.1.16",
  "tailwind-merge": "^3.3.1",
  "tailwindcss-animate": "^1.0.7"
}
```

**Dependencies to Add:**

```json
{
  "@radix-ui/themes": "^3.1.0" // or latest version
}
```

**Dependencies to Keep:**

```json
{
  "clsx": "^2.1.1" // Still useful for conditional classes
  // All @radix-ui/react-* primitives can be removed (Themes includes them)
}
```

---

## Migration Phases

### Phase 0: Preparation (1 hour)

**Goal:** Set up Radix Themes without breaking current build

**Tasks:**

1. Install `@radix-ui/themes` dependency
2. Import Radix Themes CSS in `main.tsx`
3. Wrap App with `<Theme>` component
4. Verify app still runs (Radix Themes + Tailwind coexist temporarily)

**Scope:**

- Files changed: 2 (`package.json`, `main.tsx`)
- No component changes yet

**Exit Criteria:**

- ✅ `pnpm install` succeeds
- ✅ `pnpm dev` runs without errors
- ✅ App renders correctly
- ✅ No console errors
- ✅ Both Radix Themes and Tailwind CSS loaded

**Dependencies:** None

**Risks:** Low - purely additive

---

### Phase 1: Core Layout & Typography (3-4 hours)

**Goal:** Replace fundamental building blocks (layout components, Heading, Text)

**Tasks:**

1. **Migrate App.tsx wrapper structure**

   - Replace root `<div className="...">` with `<Box>`
   - Use layout props instead of Tailwind classes

2. **Migrate Navigation.tsx**

   - Replace `<nav className="...">` with `<Box as="nav" position="sticky">`
   - Replace `<div>` wrappers with `<Container>`, `<Flex>`
   - Replace custom links with Radix Themes `<Link>` (or Text with asChild)
   - Update theme toggle button to use `<Button variant="ghost">`

3. **Migrate Footer.tsx**

   - Replace grid `<div>` with `<Grid columns="4">`
   - Replace links with Radix Themes `<Link>` or `<Text>` components
   - Use `<Heading>` and `<Text>` for content

4. **Migrate BreadcrumbNavigation.tsx**

   - Remove Breadcrumb primitive
   - Build custom breadcrumb using `<Flex>`, `<Link>`, `<Text>`

5. **Replace all usages of custom Heading component**

   - Find all imports of `@/components/common/Heading`
   - Replace with `import { Heading } from '@radix-ui/themes'`
   - Map props: `level` → `as`, custom sizing → `size` prop

6. **Replace all usages of custom Text component**
   - Find all imports of `@/components/common/Text`
   - Replace with `import { Text } from '@radix-ui/themes'`
   - Map variants to `size` and `color` props

**Scope:**

- Files changed: ~25-30
  - App.tsx
  - Navigation.tsx, Footer.tsx, BreadcrumbNavigation.tsx, MobileDrawer.tsx
  - All components importing Heading (pages, sections)
  - All components importing Text (pages, sections)

**Exit Criteria:**

- ✅ `tsc` compiles without errors
- ✅ `pnpm build` succeeds
- ✅ Navigation displays correctly
- ✅ Footer displays correctly
- ✅ All headings and text render correctly
- ✅ Visual inspection: layouts look correct
- ✅ No import errors from deleted Heading/Text components

**Dependencies:** Phase 0 complete

**Risks:** Moderate

- Navigation is complex (sticky, responsive)
- Many Heading/Text usages across codebase
- Visual regressions possible

**Rollback:** Revert commits from this phase

---

### Phase 2: Form Inputs & Buttons (2-3 hours)

**Goal:** Replace Button and form input primitives with Radix Themes equivalents

**Tasks:**

1. **Replace Button component**

   - Find all imports from `@/components/foundation/primitives` (Button)
   - Replace with `import { Button } from '@radix-ui/themes'`
   - Map variants:
     - `default` → `variant="solid" color="blue"`
     - `destructive` → `variant="solid" color="red"`
     - `outline` → `variant="outline"`
     - `secondary` → `variant="soft" color="gray"`
     - `ghost` → `variant="ghost"`
     - `link` → Use `<Link>` or `<Text asChild>`
   - Map sizes: `default` → `2`, `sm` → `1`, `lg` → `3`, `icon` → custom

2. **Replace TextField (Input) component**

   - Find all Input usages
   - Replace with `<TextField.Root>`
   - Add `variant="surface" size="2"`

3. **Replace TextArea component**

   - Find all Textarea usages
   - Replace with `<TextArea>` from Radix Themes
   - Add `variant="surface" size="2"`

4. **Replace Select component**

   - Find all Select usages (e.g., LanguageSelector)
   - Replace with Radix Themes `<Select.Root>`, `<Select.Trigger>`, etc.
   - Update props to Radix Themes API

5. **Replace Checkbox component**

   - Find all Checkbox usages
   - Replace with Radix Themes `<Checkbox>`
   - Add `variant="surface" size="2"`

6. **Replace RadioGroup component**
   - Find all RadioGroup usages
   - Replace with Radix Themes `<RadioGroup.Root>` and `<RadioGroup.Item>`
   - Add `variant="surface" size="2"`

**Scope:**

- Files changed: ~20-25
  - All pages using buttons (almost all pages)
  - LanguageSelector.tsx (Select)
  - Any forms (if present)

**Exit Criteria:**

- ✅ All buttons render correctly with new variants
- ✅ Forms (if present) work correctly
- ✅ LanguageSelector works
- ✅ `tsc` compiles
- ✅ `pnpm build` succeeds
- ✅ Visual inspection: buttons match design intent
- ✅ Interaction testing: buttons respond to clicks

**Dependencies:** Phase 1 complete

**Risks:** Moderate

- Button variant mappings may need visual adjustment
- Form inputs may have different spacing/sizing
- Loading states need verification

**Rollback:** Revert commits from this phase

---

### Phase 3: Cards, Badges, and Common Components (2-3 hours)

**Goal:** Replace Card, Badge, and other visual components

**Tasks:**

1. **Replace Card component**

   - Find all Card usages (common in sections/pages)
   - Replace with Radix Themes `<Card>`
   - Restructure multi-part Cards:
     - Remove `<CardHeader>`, `<CardTitle>`, `<CardDescription>`, etc.
     - Use `<Box>` + `<Heading>` + `<Text>` inside Card
   - Add `variant="surface" size="2"`

2. **Replace Badge component**

   - Find all Badge usages
   - Replace with Radix Themes `<Badge>`
   - Map variants:
     - `default` → `variant="solid" color="blue"`
     - `secondary` → `variant="soft" color="gray"`
     - `destructive` → `variant="solid" color="red"`
     - `outline` → `variant="outline"`
   - Add `size="2"`

3. **Migrate FeatureCard.tsx**

   - Rewrite using Radix Themes Card
   - Use `<Flex direction="column" gap="4">` for layout
   - Use Heading, Text, Box for content

4. **Migrate EmptyState.tsx**

   - Rewrite using `<Flex direction="column" align="center" gap="4">`
   - Use Heading, Text, Button

5. **Update LoadingSpinner.tsx**
   - Keep custom implementation OR use Radix Themes Spinner (if available)
   - Use Radix Themes color tokens

**Scope:**

- Files changed: ~30-40
  - All components using Card (sections, pages)
  - Components using Badge
  - FeatureCard.tsx
  - EmptyState.tsx
  - LoadingSpinner.tsx

**Exit Criteria:**

- ✅ All cards render correctly
- ✅ Badges display correctly
- ✅ FeatureCard works
- ✅ EmptyState works
- ✅ LoadingSpinner works
- ✅ `tsc` compiles
- ✅ `pnpm build` succeeds
- ✅ Visual inspection: cards, badges look correct

**Dependencies:** Phase 2 complete

**Risks:** Moderate

- Card restructuring may be tedious
- Layout inside cards may need adjustment
- Badge sizing/colors may differ

**Rollback:** Revert commits from this phase

---

### Phase 4: Sections, Overlays, and Complex Components (3-4 hours)

**Goal:** Migrate sections, dialogs, sheets, tooltips, and complex layouts

**Tasks:**

1. **Migrate HeroSection.tsx**

   - Replace grid with `<Grid columns="2">`
   - Use Heading, Text, Button (already migrated)
   - Keep ImageWithFallback (custom component)
   - Update responsive breakpoints to Radix Themes responsive props

2. **Migrate UnifiedRelatedPages.tsx**

   - Replace section wrapper with `<Section size="3">`
   - Replace grid with `<Grid columns={{ initial: '1', md: '2', lg: '3' }}>`
   - Use Card for each item
   - Use Heading, Text for content

3. **Migrate LeadershipReadinessFlowchart.tsx**

   - This is the most complex component
   - Replace section with `<Section>`
   - Use Grid/Flex for flowchart layout
   - Replace cards with Radix Themes Card
   - **May need custom CSS** for connectors and absolute positioning
   - Use Radix Themes design tokens (CSS variables) for colors

4. **Replace Dialog component**

   - Find all Dialog usages
   - Replace with Radix Themes `<Dialog.Root>`, `<Dialog.Trigger>`, `<Dialog.Content>`, etc.
   - Remove `<DialogHeader>` wrapper (not in Themes)
   - Use `<Dialog.Title>` and `<Dialog.Description>` directly

5. **Replace Tooltip component**

   - Find all Tooltip usages
   - Replace with Radix Themes `<Tooltip>`
   - Remove TooltipProvider (not needed in Themes)
   - Simplify to `<Tooltip>` + `<Tooltip.Trigger>` + `<Tooltip.Content>`

6. **Replace Sheet component (MobileDrawer)**

   - **Sheet is NOT in Radix Themes**
   - Options:
     - a) Use Radix Themes Dialog with custom CSS for slide-in effect
     - b) Keep Radix Primitive `@radix-ui/react-dialog` + custom CSS using Themes tokens
     - c) Use third-party library like `vaul` (already in dependencies)
   - **Recommended:** Keep Radix Primitive + Themes tokens (Option b)

7. **Replace Tabs component** (if used)

   - Find all Tabs usages
   - Replace with Radix Themes `<Tabs.Root>`, `<Tabs.List>`, `<Tabs.Trigger>`, `<Tabs.Content>`

8. **Replace Separator component** (if used)
   - Find all Separator usages
   - Replace with Radix Themes `<Separator size="4">`

**Scope:**

- Files changed: ~15-20
  - HeroSection.tsx
  - UnifiedRelatedPages.tsx
  - LeadershipReadinessFlowchart.tsx (high complexity)
  - AudienceSection.tsx, FrameworkSection.tsx
  - MobileDrawer.tsx
  - Any components using Dialog, Tooltip, Tabs, Separator

**Exit Criteria:**

- ✅ All sections render correctly
- ✅ Dialogs work (if used)
- ✅ Tooltips work
- ✅ MobileDrawer works
- ✅ Tabs work (if used)
- ✅ LeadershipReadinessFlowchart renders (may have visual differences - acceptable)
- ✅ `tsc` compiles
- ✅ `pnpm build` succeeds
- ✅ Visual inspection: sections look correct
- ✅ Interaction testing: overlays, tooltips, drawer function correctly

**Dependencies:** Phase 3 complete

**Risks:** High

- LeadershipReadinessFlowchart is very complex
- Sheet (drawer) requires custom solution
- Layout shifts possible
- Responsive breakpoints may need tuning

**Rollback:** Revert commits from this phase

---

### Phase 5: Cleanup - Remove Tailwind and Primitives (1-2 hours)

**Goal:** Delete all Tailwind dependencies, config files, and custom primitives

**Tasks:**

1. **Delete primitives directory**

   ```powershell
   Remove-Item -Path "src/components/foundation/primitives" -Recurse -Force
   ```

2. **Delete common components (Heading, Text)**

   ```powershell
   Remove-Item -Path "src/components/common/Heading.tsx" -Force
   Remove-Item -Path "src/components/common/Text.tsx" -Force
   ```

   - Update `src/components/common/index.ts` to remove these exports

3. **Remove Tailwind PostCSS config**

   ```powershell
   Remove-Item -Path "postcss.config.js" -Force
   ```

4. **Remove Tailwind globals CSS**

   ```powershell
   Remove-Item -Path "src/styles/globals.css" -Force
   ```

   - Remove import from `main.tsx` (if present)

5. **Uninstall Tailwind dependencies**

   ```powershell
   pnpm remove tailwindcss @tailwindcss/postcss tailwind-merge tailwindcss-animate
   ```

6. **Remove unused Radix primitives** (optional, if not used by custom components)

   - Check if any primitives are still imported
   - Remove unused `@radix-ui/react-*` packages

7. **Remove cn() utility** (optional, if not used elsewhere)

   - Delete or simplify `src/utils/utils.ts`
   - Update imports to use `clsx` directly if needed

8. **Update package.json scripts** (if any reference Tailwind)

   - Check `build`, `dev`, `lint` scripts
   - Remove any Tailwind CLI commands

9. **Final verification**
   - Run `tsc` - should compile
   - Run `pnpm build` - should build
   - Run `pnpm dev` - should run
   - Open app in browser - should render correctly
   - Test all major features:
     - Navigation (desktop/mobile)
     - Theme toggle
     - All pages load
     - Buttons work
     - Forms work (if present)
     - Overlays work

**Scope:**

- Files deleted: 18+
  - `src/components/foundation/primitives/` (16 files)
  - `src/components/common/Heading.tsx`
  - `src/components/common/Text.tsx`
  - `postcss.config.js`
  - `src/styles/globals.css`
- Files changed: 3
  - `package.json`
  - `src/components/common/index.ts`
  - `src/utils/utils.ts` (optional)

**Exit Criteria:**

- ✅ No Tailwind dependencies in `package.json`
- ✅ No Tailwind config files exist
- ✅ No imports from deleted components
- ✅ `tsc` compiles without errors
- ✅ `pnpm build` succeeds
- ✅ `pnpm dev` runs
- ✅ App renders correctly in browser
- ✅ All features work (smoke test)
- ✅ No console errors
- ✅ No broken images/icons
- ✅ Visual regression acceptable (document differences)

**Dependencies:** Phase 4 complete

**Risks:** Moderate

- Missing imports may cause build failures
- Edge cases may be missed in testing

**Rollback:** Revert all commits from Phase 5

---

## Dark Mode Strategy

### Current Approach

- Uses `next-themes` library
- Tailwind dark mode classes (`.dark:*`)
- Custom `useTailwindTheme` hook

### Target Approach

- Use Radix Themes `appearance` prop
- Set `appearance="inherit"` to respect system preference
- OR implement custom theme toggle:

```tsx
import { Theme } from '@radix-ui/themes';
import { useState } from 'react';

function App() {
  const [appearance, setAppearance] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setAppearance((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <Theme
      appearance={appearance}
      accentColor="sky"
      radius="large"
      scaling="110%"
    >
      {/* App content */}
      <Button onClick={toggleTheme}>Toggle Theme</Button>
    </Theme>
  );
}
```

**Migration:**

- Remove `next-themes` dependency (optional, may still be useful)
- Update `useTailwindTheme` → `useTheme` (custom hook for appearance state)
- Update theme toggle button to use new hook

---

## Custom CSS Strategy

### Minimal Custom CSS

**When to use custom CSS:**

- Complex layouts not covered by Box/Flex/Grid (e.g., flowchart connectors)
- Custom animations beyond what Radix Themes provides
- Very specific visual effects (gradients, shadows, etc.)

**How to use:**

1. Create `src/styles/custom.css`
2. Import in `main.tsx`
3. Use Radix Themes CSS variables for consistency:

```css
/* src/styles/custom.css */

/* Example: Custom flowchart connector */
.flowchart-connector {
  position: absolute;
  background: var(--gray-6);
  width: 2px;
  height: 40px;
}

/* Example: Custom gradient background */
.hero-gradient {
  background: linear-gradient(135deg, var(--accent-2), var(--accent-4));
}

/* Example: Custom animation */
@keyframes pulse-accent {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.6;
  }
}

.pulse-accent {
  animation: pulse-accent 2s ease-in-out infinite;
}
```

**CSS Variables available from Radix Themes:**

- Colors: `--accent-1` through `--accent-12`, `--gray-1` through `--gray-12`
- Spacing: `--space-1` through `--space-9`
- Font sizes: `--font-size-1` through `--font-size-9`
- Radius: `--radius-1` through `--radius-6`
- Shadows: `--shadow-1` through `--shadow-6`

---

## Testing Strategy

### Per-Phase Testing

After each phase:

1. **Type Checking**

   ```powershell
   pnpm tsc --noEmit
   ```

   - Should complete without errors
   - Check for missing imports

2. **Build Test**

   ```powershell
   pnpm build
   ```

   - Should complete successfully
   - Check bundle size (should decrease after Phase 5)

3. **Development Server**

   ```powershell
   pnpm dev
   ```

   - Should start without errors
   - Open app in browser
   - Check console for errors

4. **Visual Inspection**

   - Navigate to all major pages
   - Check that layout matches design intent
   - Note any visual regressions (document acceptable changes)

5. **Interaction Testing**
   - Test all buttons (clicks)
   - Test forms (inputs, selects, checkboxes)
   - Test navigation (desktop/mobile)
   - Test theme toggle
   - Test overlays (dialogs, tooltips, if present)
   - Test responsive behavior (resize browser)

### Final Testing (Post-Phase 5)

**Comprehensive Smoke Test:**

1. Homepage loads correctly
2. Navigation works (all links)
3. Mobile navigation works
4. Theme toggle works
5. All pages load without errors
6. All buttons are clickable
7. All forms work (if present)
8. All overlays work
9. Responsive design works (mobile, tablet, desktop)
10. No console errors
11. No visual regressions (or document acceptable changes)

**Performance Check:**

- Bundle size should be smaller (no Tailwind)
- Page load time should be comparable or better
- Runtime performance should be comparable

---

## Risk Mitigation

### High-Risk Areas

1. **LeadershipReadinessFlowchart.tsx**

   - **Risk:** Complex layout with custom positioning, connectors
   - **Mitigation:** May need custom CSS with Radix Themes tokens
   - **Acceptance:** Visual differences acceptable if functionality preserved

2. **MobileDrawer.tsx (Sheet component)**

   - **Risk:** Sheet not available in Radix Themes
   - **Mitigation:** Keep Radix Primitive + Themes tokens OR use Dialog with custom CSS
   - **Acceptance:** Custom implementation acceptable

3. **Breadcrumb Navigation**

   - **Risk:** Breadcrumb not available in Radix Themes
   - **Mitigation:** Build custom using Flex/Link/Text
   - **Acceptance:** Simple implementation acceptable

4. **Theme Toggle**

   - **Risk:** Custom theme state management needed
   - **Mitigation:** Use Radix Themes appearance prop with React state
   - **Acceptance:** Simple implementation acceptable

5. **Responsive Breakpoints**
   - **Risk:** Tailwind breakpoints may not map 1:1 to Radix Themes
   - **Mitigation:** Use Radix Themes responsive object notation
   - **Acceptance:** Minor layout shifts acceptable

### Rollback Strategy

**Per Phase:**

- Commit after each phase completion
- If issues arise, revert to previous phase commit
- Fix issues before proceeding

**Full Rollback:**

- Keep `main` branch stable
- Work on feature branch `feat/radix-themes-migration`
- Merge only when all phases complete successfully

---

## Component Layer Preservation

### Layers to Keep (No Changes)

These component layers can remain largely unchanged:

1. **Pages (`src/components/pages/*`)**

   - Only update imports
   - Replace primitive usages
   - Layout logic stays the same

2. **Config (`src/components/config/*`)**

   - Router.tsx - no changes
   - NavigationConstants.ts - no changes
   - LanguageSelector.tsx - update Select component only

3. **Media (`src/components/media/*`)**

   - ImageWithFallback.tsx - keep as-is
   - No Image component in Radix Themes

4. **Design System (`src/components/design-system/*`)**
   - Optional documentation components
   - Update to showcase Radix Themes tokens/components

### Layers to Refactor (Significant Changes)

1. **Foundation (`src/components/foundation/*`)**

   - **Primitives:** DELETE entirely
   - **Design System:** Update to use Radix Themes

2. **Common (`src/components/common/*`)**

   - **Heading, Text:** DELETE (use Radix Themes)
   - **FeatureCard, EmptyState:** Refactor with Radix Themes
   - **LoadingSpinner:** Keep or replace with Radix Themes Spinner

3. **Layout (`src/components/layout/*`)**

   - **Navigation, Footer, MobileDrawer, BreadcrumbNavigation:** Heavy refactor
   - Use Radix Themes layout components

4. **Sections (`src/components/sections/*`)**
   - **All sections:** Moderate to heavy refactor
   - Use Radix Themes components for all UI elements

---

## Dependencies Summary

### Before Migration

```json
{
  "dependencies": {
    "@radix-ui/react-accordion": "^1.2.12",
    "@radix-ui/react-dialog": "^1.1.15",
    "@radix-ui/react-select": "^2.2.6",
    "@radix-ui/react-tabs": "^1.1.13",
    "@radix-ui/react-tooltip": "^1.2.8",
    // ... 20+ more Radix primitives
    "@tailwindcss/postcss": "^4.1.16",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "tailwind-merge": "^3.3.1",
    "tailwindcss-animate": "^1.0.7",
    "tailwindcss": "^4.1.16",
    "next-themes": "^0.4.6",
    "react": "^19.2.0",
    "react-dom": "^19.2.0"
  }
}
```

### After Migration

```json
{
  "dependencies": {
    "@radix-ui/themes": "^3.1.0", // NEW - includes all primitives
    "clsx": "^2.1.1", // KEEP - still useful
    "react": "^19.2.0", // KEEP
    "react-dom": "^19.2.0", // KEEP
    "next-themes": "^0.4.6" // OPTIONAL - may remove if using Themes appearance
  }
}
```

**Removed:**

- All `@radix-ui/react-*` primitives (included in `@radix-ui/themes`)
- `tailwindcss`
- `@tailwindcss/postcss`
- `tailwind-merge`
- `tailwindcss-animate`
- `class-variance-authority` (not used, can remove)

**Bundle Size Impact:**

- Expected reduction: 15-25% (Tailwind is large, Radix Themes is smaller)

---

## Success Criteria

### Functional Requirements

✅ All pages load without errors  
✅ All navigation works (desktop/mobile)  
✅ All buttons are clickable and functional  
✅ All forms work correctly (if present)  
✅ All overlays function (dialogs, tooltips, drawer)  
✅ Theme toggle works (light/dark mode)  
✅ Responsive design works across breakpoints  
✅ No console errors in production build  
✅ No broken imports or missing components

### Non-Functional Requirements

✅ Build time comparable or improved  
✅ Bundle size reduced by 15-25%  
✅ Runtime performance maintained or improved  
✅ Type safety maintained (TypeScript compiles)  
✅ Accessibility maintained (ARIA attributes, keyboard nav)  
✅ Visual quality maintained (minor regressions acceptable)

### Code Quality Requirements

✅ No Tailwind dependencies remain  
✅ No custom primitives remain  
✅ All components use Radix Themes  
✅ Minimal custom CSS (only where necessary)  
✅ Consistent component API (use Radix Themes props)  
✅ Clean imports (no unused imports)  
✅ Documentation updated (if present)

---

## Conclusion

This migration plan provides a systematic, phased approach to transitioning from Tailwind + custom primitives to Radix Themes only. By following these phases incrementally and testing thoroughly at each stage, we can ensure a successful migration with minimal risk.

**Key Success Factors:**

1. Incremental phases - don't rush
2. Test after each phase - catch issues early
3. Commit frequently - enable easy rollback
4. Document visual changes - set expectations
5. Accept custom CSS where needed - don't force Radix Themes patterns

**Estimated Timeline:**

- Phase 0: 1 hour
- Phase 1: 3-4 hours
- Phase 2: 2-3 hours
- Phase 3: 2-3 hours
- Phase 4: 3-4 hours
- Phase 5: 1-2 hours
- **Total: 12-17 hours**

**Next Steps:**

1. Review this plan with stakeholders
2. Create feature branch `feat/radix-themes-migration`
3. Begin Phase 0
4. Execute phases sequentially
5. Test thoroughly at each phase
6. Merge when all phases complete successfully
