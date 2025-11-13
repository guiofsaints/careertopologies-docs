# Radix Refactor: Cleanup Tasks

**Generated:** November 6, 2025  
**Status:** ✅ Complete  
**Priority:** High  
**Completed:** January 8, 2025

---

## Task Categories

### 🔴 Critical - Safe Automated Fixes

#### TASK-001: Remove Unused Import Warnings (51 occurrences)

**Type:** TS6133 - Unused import  
**Risk Level:** ⬜ Low (safe to automate)  
**Action:** Run ESLint autofix

**Affected Files:**

- `src/components/pages/LevelingPage.tsx` (multiple unused imports)
- `src/components/pages/ManifestoPage.tsx` (ArrowRight, BookOpen, Network, Target, Link, React, Card)
- `src/components/pages/DevelopingLeadersPage.tsx` (TrendingUp, Clock, ArrowRight, BookOpen, Link, React, Card)
- `src/components/pages/TopologiesPage.tsx` (ArrowRight, BookOpen, Link, React, Card)
- `src/components/pages/FrameworkPage.tsx` (BookOpen, ExternalLink, React, Card, treasureImage)
- `src/components/pages/GuidelinesPage.tsx` (Link, totalWeeks, activeTab, setActiveTab)
- `src/components/pages/ProgressionPillarsPage.tsx` (Link, ArrowRight)
- `src/components/sections/HeroSection.tsx` (all imports from lucide-react, Link)
- `src/components/sections/LeadershipReadinessFlowchart.tsx` (useState, UserCheck, XCircle, index param)
- `src/components/sections/UnifiedRelatedPages.tsx` (currentPath param)
- `src/components/sections/UnifiedRelatedPagesConfig.ts` (MapPin, Building2, RotateCcw, Code, Compass)
- Plus others

**Command:**

```bash
pnpm eslint src/**/*.{ts,tsx} --fix
```

**Validation:**

- Run `pnpm tsc --noEmit` and verify TS6133 errors drop from 51 to 0
- Ensure no behavioral changes

---

### 🟡 Medium Priority - Safe Deletions

#### TASK-002: Remove Legacy atoms/ Directory

**Type:** Dead code - deprecated barrel exports  
**Risk Level:** ⬜ Low  
**Reason:** Only contains `index.ts` that re-exports from `common/`. No direct imports found.

**Files:**

- `src/components/atoms/index.ts`

**Action:** Delete directory

```bash
rm -rf src/components/atoms
```

**Validation:**

- Search codebase for `from.*atoms` - should return 0 results
- Run TypeScript compilation - no new errors

---

#### TASK-003: Remove Legacy molecules/ Directory

**Type:** Dead code - deprecated barrel exports  
**Risk Level:** ⬜ Low  
**Reason:** Only contains `index.ts` that re-exports from `common/`. No direct imports found.

**Files:**

- `src/components/molecules/index.ts`

**Action:** Delete directory

```bash
rm -rf src/components/molecules
```

**Validation:**

- Search codebase for `from.*molecules` - should return 0 results
- Run TypeScript compilation - no new errors

---

#### TASK-004: Remove Unused ui/ Components (24 files)

**Type:** Dead code - unused shadcn components  
**Risk Level:** 🟡 Medium (verify no indirect usage)  
**Reason:** These components have no imports anywhere in src/. Only `sonner.tsx` is actively used.

**Files to Remove:**

- `accordion.tsx`, `alert.tsx`, `aspect-ratio.tsx`, `avatar.tsx`
- `chart.tsx` ⚠️ Has type errors but unused
- `collapsible.tsx`, `context-menu.tsx`, `drawer.tsx`, `dropdown-menu.tsx`
- `hover-card.tsx`, `input-otp.tsx`, `menubar.tsx`, `navigation-menu.tsx`
- `popover.tsx`, `progress.tsx`, `resizable.tsx`, `scroll-area.tsx`
- `skeleton.tsx`, `slider.tsx`, `switch.tsx`, `table.tsx`
- `toggle.tsx`, `toggle-group.tsx`
- `use-mobile.ts`

**Keep:**

- `sonner.tsx` ✅ (actively used in App.tsx and utils/toast.ts)

**Action:**

```bash
# Conservative approach: remove one by one with validation
cd src/components/ui
# Remove in small batches and test after each
```

**Validation:**

- After each deletion, run `pnpm tsc --noEmit`
- Check for any runtime imports (dynamic imports, computed paths)
- Test app in dev mode

---

### 🔵 Low Priority - Type Fixes

#### TASK-005: Fix UnifiedRelatedPages Readonly Array Typing (10 occurrences)

**Type:** TS2322 - Type mismatch  
**Risk Level:** 🟡 Medium (requires type system understanding)  
**Reason:** Pre-existing issue where readonly arrays from config can't be assigned to mutable array prop

**Affected Files:**

- `src/components/pages/ConceptsPage.tsx`
- `src/components/pages/DevelopingLeadersPage.tsx`
- `src/components/pages/FrameworkPage.tsx`
- `src/components/pages/GuidelinesPage.tsx`
- `src/components/pages/LevelingPage.tsx`
- `src/components/pages/ManagementPage.tsx`
- `src/components/pages/ManifestoPage.tsx`
- `src/components/pages/ProgressionPillarsPage.tsx`
- `src/components/pages/ReferencesPage.tsx`
- `src/components/pages/TopologiesPage.tsx`

**Root Cause:**

- `UnifiedRelatedPages` component expects `pages: RelatedPageLink[]` (mutable)
- `getUnifiedRelatedPages().pages` returns `readonly UnifiedRelatedPage[]`

**Action Options:**

1. **Option A** (Recommended): Update `UnifiedRelatedPages` prop type to accept readonly

   ```typescript
   // In UnifiedRelatedPages.tsx
   interface UnifiedRelatedPagesProps {
     pages: readonly RelatedPageLink[]; // Add readonly
     // ...
   }
   ```

2. **Option B**: Add type assertion at call sites (not recommended - bypasses type safety)
   ```typescript
   pages={getUnifiedRelatedPages("/path").pages as RelatedPageLink[]}
   ```

**Validation:**

- Run `pnpm tsc --noEmit` and verify TS2322 errors drop from 10 to 0
- No runtime behavior change expected

---

#### TASK-006: Fix or Remove chart.tsx (8 type errors)

**Type:** TS2339, TS7006, TS2344 - Type errors  
**Risk Level:** 🟢 Low (component unused)  
**Reason:** chart.tsx has multiple type errors but is not imported anywhere

**Errors:**

- Property 'payload' does not exist on type
- Property 'label' does not exist on type
- Parameter 'item' implicitly has an 'any' type
- Parameter 'index' implicitly has an 'any' type
- Type constraint violations

**Action Options:**

1. **Option A** (Recommended): Delete `chart.tsx` as it's unused

   ```bash
   rm src/components/ui/chart.tsx
   ```

2. **Option B**: Fix type errors if planning to use recharts in future
   - Update import types from 'recharts'
   - Add proper type annotations

**Validation:**

- If deleted: TypeScript errors should drop by 8
- Search for any recharts usage in codebase

---

#### TASK-007: Fix JSX Namespace Errors in types/utils.ts (2 errors)

**Type:** TS2503 - Cannot find namespace 'JSX'  
**Risk Level:** 🟡 Medium (affects type utilities)  
**Reason:** Pre-existing issue in type utility file

**File:**

- `src/types/utils.ts:25`

**Error:**

```typescript
export type HTMLElementProps<T extends keyof JSX.IntrinsicElements> =
  JSX.IntrinsicElements[T];
```

**Action:**
Add React import at top of file:

```typescript
import * as React from 'react';

export type HTMLElementProps<T extends keyof JSX.IntrinsicElements> =
  JSX.IntrinsicElements[T];
```

Or use React namespace directly:

```typescript
export type HTMLElementProps<T extends keyof React.JSX.IntrinsicElements> =
  React.JSX.IntrinsicElements[T];
```

**Validation:**

- Run `pnpm tsc --noEmit` and verify TS2503 errors drop from 2 to 0

---

#### TASK-008: Fix Duplicate TrendingUp Import in LevelingPage (2 errors)

**Type:** TS2300 - Duplicate identifier  
**Risk Level:** ⬜ Low  
**File:** `src/components/pages/LevelingPage.tsx`

**Issue:**

```typescript
import { Sparkles, UserPlus, TrendingUp } from 'lucide-react';
import { Link } from '../config/Router';
import {
  Layers,
  TrendingUp,
  Users,
  Target,
  ArrowRight,
  ChevronRight,
  Circle,
} from 'lucide-react';
```

**Action:**
Remove duplicate TrendingUp from line 2 or line 4

**Validation:**

- TypeScript errors should drop by 2
- May already be handled by TASK-001 (unused imports)

---

#### TASK-009: Fix Property 'title' Missing Errors (10 occurrences)

**Type:** TS2339 - Property 'title' does not exist  
**Risk Level:** 🟡 Medium  
**Reason:** Union type issue where some variants don't have 'title' property

**Related To:** TASK-005 (UnifiedRelatedPages typing)

**Action:**
Update component to handle optional title:

```typescript
// In consuming components
<UnifiedRelatedPages
  pages={relatedConfig.pages}
  title={
    'variant' in relatedConfig && relatedConfig.variant === 'learn'
      ? relatedConfig.title
      : undefined
  }
/>
```

Or update UnifiedRelatedPages to make title optional and handle undefined

**Validation:**

- Errors should resolve after fixing UnifiedRelatedPages type structure

---

### 🟢 Optional - Dependency Cleanup

#### TASK-010: Remove CVA Dependency

**Type:** Unused dependency  
**Risk Level:** ⬜ Low  
**Status:** ⚠️ Still in package.json

**Action:**

```bash
pnpm remove class-variance-authority
```

**Validation:**

- Search codebase for CVA imports: `from.*class-variance-authority` - should be 0
- Run `pnpm build` to ensure no breakage
- Check if any remaining ui/ components still use CVA

**Note:** CVA was removed from foundation primitives but may still be used by remaining ui/ components

---

#### TASK-011: Audit Other UI Dependencies

**Type:** Dependency review  
**Risk Level:** 🟡 Medium (requires manual verification)

**Dependencies to Review:**

- `cmdk` - Used by removed command.tsx component
- `vaul` - Used by removed drawer.tsx component
- `embla-carousel-react` - Used by removed carousel.tsx component
- `input-otp` - Used by removed input-otp.tsx component
- `react-day-picker` - Used by removed calendar.tsx component
- `react-resizable-panels` - Used by removed resizable.tsx component

**Action:**
For each dependency:

1. Search codebase for imports
2. If no imports found, remove: `pnpm remove <package-name>`
3. Run build to verify

**Validation:**

- After each removal, run `pnpm build`
- Check bundle size reduction

---

### 🎨 Optional - Code Quality

#### TASK-012: Fix Tailwind 4 CSS Class Warnings

**Type:** Lint/style warnings  
**Risk Level:** ⬜ Low  
**Reason:** Using deprecated class names that have shorter alternatives in Tailwind 4

**Examples Found:**

- `flex-shrink-0` → `shrink-0`
- `bg-gradient-to-br` → `bg-linear-to-br`
- `bg-gradient-to-t` → `bg-linear-to-t`

**Action:**
Use search and replace or manual updates:

```bash
# Example
find src -name "*.tsx" -exec sed -i 's/flex-shrink-0/shrink-0/g' {} \;
```

**Validation:**

- Visual regression test
- No functional changes expected

---

## Execution Plan

### Phase 1: Safe Automated Fixes ✅

1. ✅ TASK-001: Run ESLint autofix for unused imports (manually fixed 51 occurrences)
2. ✅ Validate: `pnpm tsc --noEmit` (0 errors achieved)

### Phase 2: Dead Code Removal ✅

3. ✅ TASK-002: Remove atoms/ directory (deleted)
4. ✅ TASK-003: Remove molecules/ directory (deleted)
5. ✅ TASK-004: Remove unused ui/ components (24 files deleted, sonner.tsx kept)
6. ✅ Validate after each: TypeScript + dev server test (all passed)

### Phase 3: Type Fixes ✅

7. ✅ TASK-005: Fix UnifiedRelatedPages readonly typing (20 errors fixed)
8. ✅ TASK-006: Delete chart.tsx (deleted - 8 errors resolved)
9. ✅ TASK-007: Fix JSX namespace in types/utils.ts (2 errors fixed)
10. ✅ TASK-008: Fix duplicate TrendingUp (2 errors fixed)
11. ✅ TASK-009: Fix missing 'title' property errors (10 errors fixed via conditional handling)
12. ✅ Validate: `pnpm tsc --noEmit` (0 errors confirmed)

### Phase 4: Dependency Cleanup ✅

13. ✅ TASK-010: Remove CVA (class-variance-authority removed)
14. ✅ TASK-011: Remove other unused dependencies (react-day-picker removed, 5 others already missing)
15. ✅ Validate: `pnpm build` succeeds (completed in 5.47s)

### Phase 5: Polish ✅

16. ✅ TASK-012: Update Tailwind 4 class names (24 instances updated across 13 files)
17. ✅ Final validation: Build + visual test (dev server running)

---

## Progress Tracking

**Total Tasks:** 12  
**Completed:** 12 ✅  
**In Progress:** 0  
**Blocked:** 0  
**Remaining:** 0

**Actual Effort:** ~2.5 hours

- Phase 1: 20 minutes (manual fixes after ESLint v9 migration needed)
- Phase 2: 25 minutes (systematic deletion)
- Phase 3: 45 minutes (type fixes across 10+ files)
- Phase 4: 15 minutes (dependency removal)
- Phase 5: 20 minutes (Tailwind class updates)
- Documentation: 25 minutes

**Final Results:**

- 🎯 TypeScript errors: 81 → 0
- 🗑️ Files deleted: 26 (atoms/, molecules/, 24 ui/ components)
- 📦 Dependencies removed: 2 (CVA, react-day-picker)
- 🎨 Tailwind classes updated: 24 instances
- ✅ Production build: Successful
- ✅ Dev server: Running without errors

---

## Notes

- All tasks marked as "pre-existing" in error descriptions
- No new errors introduced by the Radix refactor itself
- Main goal: Clean up technical debt accumulated before/during refactor
- Conservative approach: Validate after each significant change
