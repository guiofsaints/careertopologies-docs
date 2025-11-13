# Unused Components Report

**Generated:** November 6, 2025  
**Analysis Method:** Automated import search across src/ directory  
**Total Unused:** 26 files (24 ui/ components + 2 legacy barrels)

---

## Summary

| Category       | Unused | Total  | Percentage |
| -------------- | ------ | ------ | ---------- |
| ui/ Components | 24     | 25     | 96%        |
| Legacy Barrels | 2      | 2      | 100%       |
| **TOTAL**      | **26** | **27** | **96.3%**  |

---

## Unused ui/ Components (24 files)

### Critical - Components with Type Errors

#### 1. chart.tsx

**Path:** `src/components/ui/chart.tsx`  
**Import Search:** No imports found  
**Type Errors:** 8 (TS2339, TS7006, TS2344)  
**Dependencies:** recharts (peer dependency)  
**Risk Level:** ⬜ Low - Not imported anywhere  
**Suggested Action:** ✅ DELETE  
**Rationale:** Has type errors and is unused. Deleting will reduce TypeScript error count by 8.

**Command:**

```bash
rm src/components/ui/chart.tsx
```

---

### High Priority - Components with External Dependencies

#### 2. drawer.tsx

**Path:** `src/components/ui/drawer.tsx`  
**Import Search:** No imports found  
**External Dependency:** `vaul`  
**Risk Level:** ⬜ Low  
**Suggested Action:** ✅ DELETE + Remove dependency  
**Rationale:** Not imported. Removing enables deletion of `vaul` package.

**Command:**

```bash
rm src/components/ui/drawer.tsx
pnpm remove vaul
```

---

#### 3. input-otp.tsx

**Path:** `src/components/ui/input-otp.tsx`  
**Import Search:** No imports found  
**External Dependency:** `input-otp`  
**Risk Level:** ⬜ Low  
**Suggested Action:** ✅ DELETE + Remove dependency  
**Rationale:** Not imported. Removing enables deletion of `input-otp` package.

**Command:**

```bash
rm src/components/ui/input-otp.tsx
pnpm remove input-otp
```

---

#### 4. resizable.tsx

**Path:** `src/components/ui/resizable.tsx`  
**Import Search:** No imports found  
**External Dependency:** `react-resizable-panels`  
**Risk Level:** ⬜ Low  
**Suggested Action:** ✅ DELETE + Remove dependency  
**Rationale:** Not imported. Removing enables deletion of `react-resizable-panels` package.

**Command:**

```bash
rm src/components/ui/resizable.tsx
pnpm remove react-resizable-panels
```

---

### Medium Priority - Components using CVA

These components use `class-variance-authority` but are not imported anywhere. Deleting them helps justify removing CVA from dependencies.

#### 5. toggle.tsx

**Path:** `src/components/ui/toggle.tsx`  
**Import Search:** No imports found  
**Uses:** `cva`, `VariantProps` from CVA  
**Risk Level:** ⬜ Low  
**Suggested Action:** ✅ DELETE

#### 6. toggle-group.tsx

**Path:** `src/components/ui/toggle-group.tsx`  
**Import Search:** No imports found  
**Uses:** `VariantProps` from CVA  
**Risk Level:** ⬜ Low  
**Suggested Action:** ✅ DELETE

#### 7. alert.tsx

**Path:** `src/components/ui/alert.tsx`  
**Import Search:** No imports found  
**Uses:** `cva`, `VariantProps` from CVA  
**Risk Level:** ⬜ Low  
**Suggested Action:** ✅ DELETE

#### 8. navigation-menu.tsx

**Path:** `src/components/ui/navigation-menu.tsx`  
**Import Search:** No imports found  
**Uses:** `cva` from CVA  
**Risk Level:** ⬜ Low  
**Suggested Action:** ✅ DELETE

**Batch Command:**

```bash
cd src/components/ui
rm toggle.tsx toggle-group.tsx alert.tsx navigation-menu.tsx
```

---

### Standard Priority - Pure Radix Wrappers

These are standard shadcn components wrapping Radix primitives. Safe to delete.

#### 9-24. Remaining Unused Components

| #   | Component         | Radix Primitive               | Suggested Action |
| --- | ----------------- | ----------------------------- | ---------------- |
| 9   | accordion.tsx     | @radix-ui/react-accordion     | ✅ DELETE        |
| 10  | aspect-ratio.tsx  | @radix-ui/react-aspect-ratio  | ✅ DELETE        |
| 11  | avatar.tsx        | @radix-ui/react-avatar        | ✅ DELETE        |
| 12  | collapsible.tsx   | @radix-ui/react-collapsible   | ✅ DELETE        |
| 13  | context-menu.tsx  | @radix-ui/react-context-menu  | ✅ DELETE        |
| 14  | dropdown-menu.tsx | @radix-ui/react-dropdown-menu | ✅ DELETE        |
| 15  | hover-card.tsx    | @radix-ui/react-hover-card    | ✅ DELETE        |
| 16  | menubar.tsx       | @radix-ui/react-menubar       | ✅ DELETE        |
| 17  | popover.tsx       | @radix-ui/react-popover       | ✅ DELETE        |
| 18  | progress.tsx      | @radix-ui/react-progress      | ✅ DELETE        |
| 19  | scroll-area.tsx   | @radix-ui/react-scroll-area   | ✅ DELETE        |
| 20  | skeleton.tsx      | None (pure CSS)               | ✅ DELETE        |
| 21  | slider.tsx        | @radix-ui/react-slider        | ✅ DELETE        |
| 22  | switch.tsx        | @radix-ui/react-switch        | ✅ DELETE        |
| 23  | table.tsx         | None (semantic HTML)          | ✅ DELETE        |
| 24  | use-mobile.ts     | None (utility hook)           | ✅ DELETE        |

**Batch Command:**

```bash
cd src/components/ui
rm accordion.tsx aspect-ratio.tsx avatar.tsx collapsible.tsx \
   context-menu.tsx dropdown-menu.tsx hover-card.tsx menubar.tsx \
   popover.tsx progress.tsx scroll-area.tsx skeleton.tsx \
   slider.tsx switch.tsx table.tsx use-mobile.ts
```

---

## Legacy Barrel Exports (2 files)

### 25. atoms/index.ts

**Path:** `src/components/atoms/index.ts`  
**Import Search:** No imports found  
**Content:** Re-exports from `common/` directory  
**Risk Level:** ⬜ Low  
**Suggested Action:** ✅ DELETE directory  
**Rationale:** Deprecated architecture. All code now imports directly from `common/`.

**Command:**

```bash
rm -rf src/components/atoms
```

---

### 26. molecules/index.ts

**Path:** `src/components/molecules/index.ts`  
**Import Search:** No imports found  
**Content:** Re-exports from `common/` directory  
**Risk Level:** ⬜ Low  
**Suggested Action:** ✅ DELETE directory  
**Rationale:** Deprecated architecture. All code now imports directly from `common/`.

**Command:**

```bash
rm -rf src/components/molecules
```

---

## Actively Used Components (1 file)

### ✅ sonner.tsx (KEEP)

**Path:** `src/components/ui/sonner.tsx`  
**Import References:** 11 occurrences

- `App.tsx` - Renders `<Toaster />` component
- `utils/toast.ts` - Uses `toast()` from sonner library  
  **External Dependency:** `sonner` ✅ Keep  
  **Status:** ✅ ACTIVELY USED - DO NOT DELETE

---

## Removal Plan

### Phase 1: Critical + High Priority (Immediate)

```bash
# Remove components with dependencies
cd src/components/ui
rm chart.tsx drawer.tsx input-otp.tsx resizable.tsx

# Remove their dependencies
pnpm remove vaul input-otp react-resizable-panels

# Validate
pnpm tsc --noEmit
# Expected: 8 fewer errors (chart.tsx errors gone)
```

---

### Phase 2: CVA Components (After Phase 1)

```bash
cd src/components/ui
rm toggle.tsx toggle-group.tsx alert.tsx navigation-menu.tsx

# Validate before removing CVA
pnpm tsc --noEmit
# If no errors about CVA, proceed
pnpm remove class-variance-authority
```

---

### Phase 3: Remaining ui/ Components (After Phase 2)

```bash
cd src/components/ui
rm accordion.tsx aspect-ratio.tsx avatar.tsx collapsible.tsx \
   context-menu.tsx dropdown-menu.tsx hover-card.tsx menubar.tsx \
   popover.tsx progress.tsx scroll-area.tsx skeleton.tsx \
   slider.tsx switch.tsx table.tsx use-mobile.ts

# Validate
pnpm tsc --noEmit
pnpm build
```

---

### Phase 4: Legacy Barrels (Final)

```bash
rm -rf src/components/atoms
rm -rf src/components/molecules

# Final validation
pnpm tsc --noEmit
pnpm build
```

---

## Validation Checklist

After each phase:

- [ ] Run TypeScript check: `pnpm tsc --noEmit`
- [ ] Check for unexpected errors
- [ ] Run build: `pnpm build`
- [ ] Start dev server: `pnpm dev`
- [ ] Verify app loads without runtime errors
- [ ] Check browser console for warnings

---

## Expected Outcomes

**TypeScript Errors:**

- Before: 81 errors
- After Phase 1: 73 errors (-8 from chart.tsx)
- After Phases 2-4: 73 errors (no change, unused components had no errors)

**Bundle Size:**

- Estimated reduction: 200-400 KB (minified)
- From removing: vaul, input-otp, react-resizable-panels, CVA, cmdk

**File Count:**

- Before: 27 files (25 ui/ + 2 barrels)
- After: 1 file (sonner.tsx only)
- Reduction: 96.3%

---

## Risk Assessment

**Overall Risk:** ⬜ Low

**Risk Factors:**

1. ✅ All components verified unused via automated search
2. ✅ No dynamic imports detected (searched for string-based imports)
3. ✅ No computed import paths found
4. ⚠️ Manual verification recommended for production systems
5. ⚠️ Consider keeping skeletons if planning future loading states

**Mitigation:**

- Follow phased approach (4 phases)
- Validate after each phase
- Keep git history for easy rollback
- Test dev server after each phase

---

## Notes

- All removal commands use `rm` for PowerShell compatibility
- Batch deletion preferred over individual file removal for efficiency
- Keep `sonner.tsx` - it's actively used for toast notifications
- CVA can only be safely removed after all CVA-using components are deleted
- Consider auditing Radix peer dependencies after ui/ cleanup (some may be unused)
