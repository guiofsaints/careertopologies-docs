# Radix Refactor: Step-by-Step Operations Guide

**Date:** November 6, 2025  
**Project:** CareerTopologies Frontend  
**Purpose:** Detailed, actionable steps for executing the Radix + Tailwind refactor

---

## Overview

This document provides the exact commands, file operations, and code changes needed to execute the refactor plan. Follow these steps sequentially, testing after each phase.

**Prerequisites:**

- Git repository is clean (commit or stash changes)
- Development server can run (`pnpm dev`)
- Node modules are installed (`pnpm install`)
- You have reviewed `ui.radix-refactor-plan.md`

---

## Phase 1: Setup & Core Primitives

**Goal**: Create foundation/primitives directory with 15 core components  
**Duration**: 3-4 hours  
**Testing**: After this phase, primitives should compile and export correctly

### Step 1.1: Create Directory Structure

```powershell
# Create foundation directories
New-Item -Path "src/components/foundation" -ItemType Directory
New-Item -Path "src/components/foundation/primitives" -ItemType Directory
New-Item -Path "src/components/foundation/design-system" -ItemType Directory
```

### Step 1.2: Create Core Primitives

Create these files in `src/components/foundation/primitives/`:

#### 1.2.1: `button.tsx`

```tsx
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { Loader2 } from 'lucide-react';
import { cn } from '@/utils';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  asChild?: boolean;
  loading?: boolean;
}

export function Button({
  className,
  variant = 'default',
  size = 'default',
  asChild = false,
  loading = false,
  disabled,
  children,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      className={cn(
        // Base styles
        'inline-flex items-center justify-center gap-2',
        'rounded-md text-sm font-medium transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2',
        'disabled:pointer-events-none disabled:opacity-50',

        // Variant styles
        variant === 'default' && 'bg-blue-600 text-white hover:bg-blue-700',
        variant === 'destructive' && 'bg-red-600 text-white hover:bg-red-700',
        variant === 'outline' &&
          'border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800',
        variant === 'secondary' &&
          'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700',
        variant === 'ghost' && 'hover:bg-gray-100 dark:hover:bg-gray-800',
        variant === 'link' &&
          'text-blue-600 underline-offset-4 hover:underline',

        // Size styles
        size === 'default' && 'h-9 px-4 py-2',
        size === 'sm' && 'h-8 px-3 text-xs',
        size === 'lg' && 'h-10 px-6',
        size === 'icon' && 'h-9 w-9',

        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <Loader2 className="h-4 w-4 animate-spin" />}
      {children}
    </Comp>
  );
}
```

#### 1.2.2: `tooltip.tsx`

```tsx
import * as React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { cn } from '@/utils';

export function TooltipProvider({
  delayDuration = 200,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return <TooltipPrimitive.Provider delayDuration={delayDuration} {...props} />;
}

export function Tooltip(
  props: React.ComponentProps<typeof TooltipPrimitive.Root>
) {
  return <TooltipPrimitive.Root {...props} />;
}

export function TooltipTrigger(
  props: React.ComponentProps<typeof TooltipPrimitive.Trigger>
) {
  return <TooltipPrimitive.Trigger {...props} />;
}

export function TooltipContent({
  className,
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) {
  return (
    <TooltipPrimitive.Content
      sideOffset={sideOffset}
      className={cn(
        'z-50 overflow-hidden rounded-md',
        'bg-gray-900 dark:bg-gray-800 px-3 py-1.5',
        'text-xs text-white',
        'animate-in fade-in-0 zoom-in-95',
        'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
        'data-[side=bottom]:slide-in-from-top-2',
        'data-[side=left]:slide-in-from-right-2',
        'data-[side=right]:slide-in-from-left-2',
        'data-[side=top]:slide-in-from-bottom-2',
        className
      )}
      {...props}
    />
  );
}
```

#### 1.2.3: Copy remaining primitives from ui/

For these primitives, copy from `src/components/ui/` and simplify:

- `card.tsx` - Copy as-is (pure Tailwind)
- `badge.tsx` - Simplify, remove CVA
- `sheet.tsx` - Copy, update imports
- `breadcrumb.tsx` - Copy as-is
- `dialog.tsx` - Copy, update imports
- `input.tsx` - Copy, simplify
- `textarea.tsx` - Copy, simplify
- `label.tsx` - Copy as-is
- `select.tsx` - Copy, update imports
- `tabs.tsx` - Copy, update imports
- `separator.tsx` - Copy as-is
- `checkbox.tsx` - Copy as-is
- `radio-group.tsx` - Copy as-is

**Command to copy (example for card.tsx):**

```powershell
Copy-Item "src/components/ui/card.tsx" "src/components/foundation/primitives/card.tsx"
```

Repeat for all 13 remaining files.

### Step 1.3: Create Barrel Export

Create `src/components/foundation/primitives/index.ts`:

```typescript
export * from './button';
export * from './tooltip';
export * from './card';
export * from './badge';
export * from './sheet';
export * from './breadcrumb';
export * from './dialog';
export * from './input';
export * from './textarea';
export * from './label';
export * from './select';
export * from './tabs';
export * from './separator';
export * from './checkbox';
export * from './radio-group';
```

### Step 1.4: Test Compilation

```powershell
# Test TypeScript compilation
pnpm build
# or just type-check
npx tsc --noEmit
```

**Expected Result**: No TypeScript errors related to foundation/primitives

### Step 1.5: Commit Phase 1

```powershell
git add src/components/foundation
git commit -m "Phase 1: Create foundation/primitives with 15 core components"
```

---

## Phase 2: Layout Migration

**Goal**: Move layout components and update imports  
**Duration**: 2-3 hours  
**Testing**: Navigation and footer should work correctly

### Step 2.1: Create Layout Directory

```powershell
New-Item -Path "src/components/layout" -ItemType Directory
```

### Step 2.2: Move and Update Navigation.tsx

```powershell
# Move file
Move-Item "src/components/Navigation.tsx" "src/components/layout/navigation.tsx"
```

**Update imports in `src/components/layout/navigation.tsx`:**

Find:

```tsx
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';
```

Replace with:

```tsx
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/foundation/primitives/tooltip';
```

### Step 2.3: Move and Update MobileDrawer.tsx

```powershell
Move-Item "src/components/MobileDrawer.tsx" "src/components/layout/mobile-drawer.tsx"
```

**Update imports:**

Find:

```tsx
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from './ui/sheet';
```

Replace with:

```tsx
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/foundation/primitives/sheet';
```

### Step 2.4: Move and Update Footer.tsx

```powershell
Move-Item "src/components/Footer.tsx" "src/components/layout/footer.tsx"
```

**Update imports:**

Find:

```tsx
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';
```

Replace with:

```tsx
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/foundation/primitives/tooltip';
```

### Step 2.5: Move and Update BreadcrumbNavigation.tsx

```powershell
Move-Item "src/components/BreadcrumbNavigation.tsx" "src/components/layout/breadcrumb-navigation.tsx"
```

**Update imports:**

Find:

```tsx
import /* breadcrumb components */ './ui/breadcrumb';
```

Replace with:

```tsx
import /* breadcrumb components */ '@/components/foundation/primitives/breadcrumb';
```

### Step 2.6: Move Remaining Layout Components

```powershell
Move-Item "src/components/LanguageSelector.tsx" "src/components/layout/language-selector.tsx"
Move-Item "src/components/PageHero.tsx" "src/components/layout/page-hero.tsx"
Move-Item "src/components/Router.tsx" "src/components/layout/router.tsx"
Move-Item "src/components/ThemeDebug.tsx" "src/components/layout/theme-debug.tsx"
```

**Check each file for ui/ imports and update accordingly.**

### Step 2.7: Create Barrel Export

Create `src/components/layout/index.ts`:

```typescript
export { Navigation } from './navigation';
export { MobileDrawer } from './mobile-drawer';
export { Footer } from './footer';
export { BreadcrumbNavigation } from './breadcrumb-navigation';
export { LanguageSelector } from './language-selector';
export { PageHero } from './page-hero';
export { Router, Link, useRouter } from './router';
export { ThemeDebug } from './theme-debug';
```

### Step 2.8: Update App.tsx or Main Entry Point

Find all imports in `src/App.tsx` (or equivalent):

Find:

```tsx
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Router } from './components/Router';
```

Replace with:

```tsx
import { Navigation, Footer, Router } from './components/layout';
```

### Step 2.9: Test in Browser

```powershell
pnpm dev
```

**Manual Testing:**

- Open http://localhost:5173 (or your dev server URL)
- Check navigation renders
- Click all nav links
- Test theme toggle
- Open mobile menu (resize browser < 768px)
- Test mobile navigation

### Step 2.10: Commit Phase 2

```powershell
git add src/components/layout src/App.tsx
git commit -m "Phase 2: Migrate layout components to layout/ directory"
```

---

## Phase 3: Common & Sections Migration

**Goal**: Move atoms/molecules to common/, move section components  
**Duration**: 2-3 hours  
**Testing**: All pages should still render correctly

### Step 3.1: Create Common Directory

```powershell
New-Item -Path "src/components/common" -ItemType Directory
```

### Step 3.2: Move Atoms to Common

```powershell
Move-Item "src/components/atoms/Heading.tsx" "src/components/common/heading.tsx"
Move-Item "src/components/atoms/Text.tsx" "src/components/common/text.tsx"
Move-Item "src/components/atoms/LoadingSpinner.tsx" "src/components/common/loading-spinner.tsx"
```

### Step 3.3: Move and Update Molecules to Common

```powershell
Move-Item "src/components/molecules/FeatureCard.tsx" "src/components/common/feature-card.tsx"
Move-Item "src/components/molecules/EmptyState.tsx" "src/components/common/empty-state.tsx"
```

**Update imports in `src/components/common/feature-card.tsx`:**

Find:

```tsx
import { Card, CardHeader, CardContent } from '../ui/card';
```

Replace with:

```tsx
import {
  Card,
  CardHeader,
  CardContent,
} from '@/components/foundation/primitives/card';
```

Also update:

```tsx
import { Heading } from '../atoms/Heading';
import { Text } from '../atoms/Text';
```

Replace with:

```tsx
import { Heading } from './heading';
import { Text } from './text';
```

### Step 3.4: Create Common Barrel Export

Create `src/components/common/index.ts`:

```typescript
export { Heading } from './heading';
export { Text } from './text';
export { LoadingSpinner } from './loading-spinner';
export { FeatureCard, FeatureCardGrid } from './feature-card';
export { EmptyState } from './empty-state';
```

### Step 3.5: Create Sections Directory

```powershell
New-Item -Path "src/components/sections" -ItemType Directory
```

### Step 3.6: Move and Update Section Components

```powershell
Move-Item "src/components/HeroSection.tsx" "src/components/sections/hero-section.tsx"
Move-Item "src/components/AudienceSection.tsx" "src/components/sections/audience-section.tsx"
Move-Item "src/components/FrameworkSection.tsx" "src/components/sections/framework-section.tsx"
Move-Item "src/components/LeadershipReadinessFlowchart.tsx" "src/components/sections/leadership-readiness-flowchart.tsx"
Move-Item "src/components/UnifiedRelatedPages.tsx" "src/components/sections/unified-related-pages.tsx"
```

**Update imports in each section file:**

For `hero-section.tsx` and `audience-section.tsx`:

```tsx
// Find:
import { Badge } from './ui/badge';
// Replace with:
import { Badge } from '@/components/foundation/primitives/badge';
```

For `leadership-readiness-flowchart.tsx`:

```tsx
// Find:
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip';
// Replace with:
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/foundation/primitives/tooltip';
```

### Step 3.7: Create Sections Barrel Export

Create `src/components/sections/index.ts`:

```typescript
export { HeroSection } from './hero-section';
export { AudienceSection } from './audience-section';
export { FrameworkSection } from './framework-section';
export { LeadershipReadinessFlowchart } from './leadership-readiness-flowchart';
export { UnifiedRelatedPages } from './unified-related-pages';
```

### Step 3.8: Update Page Imports

Search all files in `src/components/pages/` for imports from atoms/molecules:

**VS Code Search (Ctrl+Shift+H):**

Find:

```regex
from ['"]\.\.\/atoms\/(.+)['"]
```

Replace with:

```
from '@/components/common/$1'
```

Find:

```regex
from ['"]\.\.\/molecules\/(.+)['"]
```

Replace with:

```
from '@/components/common/$1'
```

### Step 3.9: Test in Browser

```powershell
pnpm dev
```

**Manual Testing:**

- Visit homepage
- Check all sections render (hero, audience, framework)
- Visit a few pages that use FeatureCard
- Verify heading and text components render

### Step 3.10: Commit Phase 3

```powershell
git add src/components/common src/components/sections
git add src/components/pages
git commit -m "Phase 3: Migrate atoms/molecules to common/, sections to sections/"
```

---

## Phase 4: Pages, Media, Config Migration

**Goal**: Organize remaining components  
**Duration**: 2 hours  
**Testing**: All pages and assets work correctly

### Step 4.1: Create Media Directory

```powershell
New-Item -Path "src/components/media" -ItemType Directory
Move-Item "src/components/figma/ImageWithFallback.tsx" "src/components/media/image-with-fallback.tsx"
```

Create `src/components/media/index.ts`:

```typescript
export { ImageWithFallback } from './image-with-fallback';
```

### Step 4.2: Create Config Directory

```powershell
New-Item -Path "src/components/config" -ItemType Directory
Move-Item "src/components/NavigationConstants.ts" "src/components/config/navigation.ts"
Move-Item "src/components/UnifiedRelatedPagesConfig.ts" "src/components/config/unified-related-pages.ts"
```

Create `src/components/config/index.ts`:

```typescript
export * from './navigation';
export * from './unified-related-pages';
```

### Step 4.3: Move Design System to Foundation

```powershell
Move-Item "src/components/design-system/DesignTokens.tsx" "src/components/foundation/design-system/tokens.tsx"
Move-Item "src/components/design-system/StandardLayouts.tsx" "src/components/foundation/design-system/layouts.tsx"
```

Create `src/components/foundation/design-system/index.ts`:

```typescript
export * from './tokens';
export * from './layouts';
```

### Step 4.4: Update All Config Imports

**Search and replace in all files:**

Find:

```tsx
import { navigationLinks } from './NavigationConstants';
```

Replace with:

```tsx
import { navigationLinks } from '@/components/config/navigation';
```

Find:

```tsx
import { getUnifiedRelatedPages } from './UnifiedRelatedPagesConfig';
```

Replace with:

```tsx
import { getUnifiedRelatedPages } from '@/components/config/unified-related-pages';
```

### Step 4.5: Update Pages with UI Imports

Check `src/components/pages/ContributingPage.tsx`:

Find:

```tsx
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
```

Replace with:

```tsx
import { Card, CardContent } from '@/components/foundation/primitives/card';
import { Button } from '@/components/foundation/primitives/button';
```

**Search all other page files for ui/ imports and update.**

### Step 4.6: Rename Pages to Kebab-Case (Optional)

If desired, rename files:

```powershell
Rename-Item "src/components/pages/AboutPage.tsx" "about-page.tsx"
Rename-Item "src/components/pages/ConceptsPage.tsx" "concepts-page.tsx"
# ... etc for all 14 page files
```

**Update exports in Router.tsx accordingly.**

### Step 4.7: Test All Pages

```powershell
pnpm dev
```

**Manual Testing:**

- Visit every page route
- Check images load
- Check navigation links from config work
- Verify related pages display

### Step 4.8: Commit Phase 4

```powershell
git add src/components/media src/components/config src/components/foundation/design-system
git add src/components/pages
git commit -m "Phase 4: Organize media, config, design-system, and update all imports"
```

---

## Phase 5: Cleanup & Validation

**Goal**: Delete old directories, validate codebase  
**Duration**: 2 hours  
**Testing**: Full build and lint pass

### Step 5.1: Delete Old Directories

```powershell
# Confirm no remaining references first!
# Search for "from './ui/" and "from '../ui/" - should find 0 results

Remove-Item -Recurse -Force "src/components/ui"
Remove-Item -Recurse -Force "src/components/atoms"
Remove-Item -Recurse -Force "src/components/molecules"
Remove-Item -Recurse -Force "src/components/design-system"
Remove-Item -Recurse -Force "src/components/figma"
```

### Step 5.2: Run TypeScript Build

```powershell
pnpm build
```

**Expected Result**: Build succeeds with no errors

If errors occur:

- Read error messages carefully
- Fix missing imports
- Check for typos in new paths
- Re-run build after each fix

### Step 5.3: Run ESLint

```powershell
pnpm lint
```

**Expected Result**: 0 warnings, 0 errors

If linting issues occur:

- Fix unused imports
- Fix any other linting rules
- Re-run lint

### Step 5.4: Manual Testing Checklist

Test in browser (`pnpm dev`):

**Desktop (> 768px):**

- [ ] Homepage renders
- [ ] Navigation bar visible
- [ ] All nav links work
- [ ] Theme toggle works
- [ ] Language selector works
- [ ] Tooltips appear on hover
- [ ] Visit all pages: About, Framework, Leveling, Manifesto, Topologies, etc.
- [ ] Check footer links
- [ ] Verify images load

**Mobile (< 768px):**

- [ ] Resize browser to mobile width
- [ ] Mobile menu button appears
- [ ] Mobile drawer opens
- [ ] Navigation links work in drawer
- [ ] Theme toggle visible
- [ ] Language selector visible
- [ ] Pages are responsive
- [ ] Touch interactions work

**Keyboard Navigation:**

- [ ] Tab through interactive elements
- [ ] Press Enter on buttons
- [ ] Press Escape to close modals/tooltips
- [ ] Focus indicators visible

### Step 5.5: Identify Unused Dependencies

Check `package.json` for dependencies that may no longer be needed:

**Commands to check usage:**

```powershell
# Check for class-variance-authority usage
Select-String -Path "src/**/*.tsx" -Pattern "class-variance-authority" -SimpleMatch

# Check for vaul usage
Select-String -Path "src/**/*.tsx" -Pattern "vaul" -SimpleMatch

# Check for cmdk usage
Select-String -Path "src/**/*.tsx" -Pattern "cmdk" -SimpleMatch

# Check for input-otp usage
Select-String -Path "src/**/*.tsx" -Pattern "input-otp" -SimpleMatch

# Check for react-day-picker usage
Select-String -Path "src/**/*.tsx" -Pattern "react-day-picker" -SimpleMatch

# Check for recharts usage
Select-String -Path "src/**/*.tsx" -Pattern "recharts" -SimpleMatch

# Check for react-resizable-panels usage
Select-String -Path "src/**/*.tsx" -Pattern "react-resizable-panels" -SimpleMatch
```

**If a dependency shows 0 results, it's safe to remove:**

```powershell
pnpm remove class-variance-authority
# (repeat for other unused dependencies)
```

### Step 5.6: Final Build and Test

```powershell
# Clean build
Remove-Item -Recurse -Force "dist"
pnpm build

# Test production build
pnpm preview
```

Visit the preview URL and do a final smoke test.

### Step 5.7: Commit Phase 5

```powershell
git add -A
git commit -m "Phase 5: Delete old directories, cleanup dependencies, validate build"
```

---

## Rollback Strategy

If something goes wrong at any phase:

### Option 1: Revert Last Commit

```powershell
git reset --hard HEAD~1
```

### Option 2: Revert Specific Phase

```powershell
git log --oneline  # Find commit hash
git revert <commit-hash>
```

### Option 3: Stash and Start Over

```powershell
git stash
git checkout main  # or your base branch
```

---

## Troubleshooting

### Issue: Module not found errors

**Solution**: Check import paths use `@/components/` prefix correctly

### Issue: TypeScript errors about missing types

**Solution**: Ensure barrel exports (`index.ts`) are created and export all components

### Issue: Components not rendering

**Solution**: Check browser console for errors, verify imports, ensure Tooltip Provider is in App root

### Issue: Styles not applied

**Solution**: Check Tailwind classes, ensure `cn()` utility works, verify dark mode classes

### Issue: Build fails

**Solution**: Run `pnpm install` again, clear cache (`Remove-Item -Recurse -Force node_modules/.vite`), restart dev server

---

## Post-Refactor Checklist

After completing all phases:

- [ ] All phases committed to Git
- [ ] TypeScript build passes (`pnpm build`)
- [ ] ESLint passes (`pnpm lint`)
- [ ] All pages tested manually
- [ ] Mobile responsive behavior verified
- [ ] Keyboard navigation tested
- [ ] Unused dependencies removed
- [ ] Documentation updated (if any)
- [ ] Team informed of new import paths

---

## Next Document

Proceed to **`ui.radix-refactor-checklist.md`** for a consolidated verification checklist.

---

**Operations guide completed by:** GitHub Copilot  
**Review status:** Ready for execution
