# Radix Themes Migration Assessment - Summary

**Date:** November 6, 2025  
**Project:** CareerTopologies Frontend  
**Purpose:** Complete assessment and migration plan for Radix Themes migration

---

## Assessment Complete

This assessment provides comprehensive documentation for migrating the CareerTopologies frontend from **Tailwind CSS + Custom Radix Primitives** to **Radix Themes only**.

---

## Documents Created

### 1. Documentation Notes

**File:** `.guided/assessment/ui.radix-themes-doc-notes.md`

**Contents:**

- Radix Themes installation and setup
- Theme configuration (accentColor, radius, scaling, appearance)
- Styling philosophy (prop-based, no utility classes)
- Layout components (Box, Flex, Grid, Container, Section)
- UI components (Button, Card, Text, Heading, TextField, etc.)
- Common patterns and pitfalls
- Responsive design with object notation
- CSS variable access for custom components

**Key Insights:**

- Radix Themes is a **closed component system** (customization via props, not className)
- **No mixing with Tailwind** - different paradigms
- Uses **vanilla CSS** under the hood
- **Responsive props** use object notation: `{{ initial: '1', md: '2', lg: '3' }}`
- Access to **design tokens** (CSS variables) for custom components

---

### 2. Current State Analysis

**File:** `.guided/assessment/ui.tailwind-and-primitives-usage.md`

**Contents:**

- Complete Tailwind footprint analysis
- 16 custom primitive components inventory
- Usage intensity by component layer
- High-risk areas for migration
- Dependencies to remove/keep

**Key Findings:**

- **16 custom primitives** in `foundation/primitives/` (100% Tailwind-styled)
- **4 layout components** (heavy Tailwind usage)
- **5 common components** (80% Tailwind usage)
- **Multiple sections** (90% Tailwind usage)
- **LeadershipReadinessFlowchart.tsx** is the most complex component (extreme Tailwind usage)
- **4 Tailwind-related packages** to remove
- **All Radix primitives** can be removed (Radix Themes includes them)

**High-Risk Components:**

1. LeadershipReadinessFlowchart - complex layout, may need custom CSS
2. Navigation - sticky, responsive, glass effects
3. MobileDrawer - Sheet component not in Radix Themes (need custom solution)

---

### 3. Component Mapping (De-Para)

**File:** `.guided/assessment/ui.radix-themes-component-mapping.md`

**Contents:**

- Complete mapping of all 16 primitives to Radix Themes equivalents
- Layout component migration patterns
- Common component replacements
- Section/page migration strategies
- Components NOT in Radix Themes (Sheet, Breadcrumb)

**Key Mappings:**

| Current               | Target Radix Themes      | Complexity | Notes                         |
| --------------------- | ------------------------ | ---------- | ----------------------------- |
| Button                | ✅ Button                | Low        | Direct replacement            |
| Card                  | ✅ Card (simplified)     | Moderate   | Restructure multi-part        |
| Badge                 | ✅ Badge                 | Low        | Direct replacement            |
| Input                 | ✅ TextField.Root        | Low        | Name change                   |
| Textarea              | ✅ TextArea              | Low        | Casing change                 |
| Select                | ✅ Select                | Low        | Similar API                   |
| Checkbox              | ✅ Checkbox              | Low        | Direct replacement            |
| RadioGroup            | ✅ RadioGroup            | Low        | Similar API                   |
| Tabs                  | ✅ Tabs                  | Low        | Nearly identical API          |
| Dialog                | ✅ Dialog                | Low        | Remove DialogHeader wrapper   |
| Tooltip               | ✅ Tooltip (simplified)  | Low        | No provider needed            |
| Label                 | ✅ Text as="label"       | Low        | Use Text component            |
| Separator             | ✅ Separator             | Low        | Direct replacement            |
| Sheet                 | ❌ Custom solution       | Moderate   | Keep primitive + Themes style |
| Breadcrumb            | ❌ Custom composition    | Moderate   | Build with Flex/Link/Text     |
| custom Heading        | ✅ Heading               | Low        | Direct replacement            |
| custom Text           | ✅ Text                  | Low        | Direct replacement            |
| Tailwind layout       | ✅ Box/Flex/Grid/Section | Moderate   | Use layout components         |
| Tailwind utilities    | ❌ Remove                | -          | Use component props           |
| tailwind-merge (cn()) | ❌ Remove or simplify    | -          | Use clsx only if needed       |

---

### 4. Target Architecture

**File:** `.guided/architecture/ui.radix-themes-migration-plan.md`

**Contents:**

- Target theme configuration
- Component structure (no primitives layer)
- Deleted components list
- Dependencies before/after
- 5 migration phases with scope, exit criteria, and risks
- Dark mode strategy
- Custom CSS strategy
- Testing strategy per phase
- Risk mitigation

**Target Structure:**

```
src/
├── main.tsx                 # Theme wrapper here
├── App.tsx
├── components/
│   ├── layout/              # Box/Flex/Grid-based
│   ├── sections/            # Radix Themes components
│   ├── pages/               # Composition
│   ├── config/              # Router, Language
│   ├── media/               # Custom (ImageWithFallback)
│   └── design-system/       # Optional docs
├── hooks/
│   └── useTheme.tsx         # Dark mode (Radix Themes)
├── styles/
│   └── custom.css           # Minimal (if needed)
└── utils/
    └── utils.ts             # Remove cn() or simplify
```

**Dependencies After Migration:**

```json
{
  "@radix-ui/themes": "^3.1.0", // All-in-one
  "clsx": "^2.1.1", // Optional
  "react": "^19.2.0",
  "react-dom": "^19.2.0"
}
```

**Phases:**

- **Phase 0:** Setup Radix Themes (1 hour)
- **Phase 1:** Layout & Typography (3-4 hours)
- **Phase 2:** Buttons & Forms (2-3 hours)
- **Phase 3:** Cards & Badges (2-3 hours)
- **Phase 4:** Sections & Overlays (3-4 hours)
- **Phase 5:** Cleanup (1-2 hours)

**Total:** 12-17 hours

---

### 5. Step-by-Step Operational Guide

**File:** `.guided/operation/ui.radix-themes-migration-steps.md`

**Contents:**

- Exact PowerShell commands for each step
- File-level changes with before/after code samples
- Testing checkpoints after each phase
- Rollback procedures
- Troubleshooting guide
- Success metrics

**Example Step (Phase 0):**

```powershell
# Step 0.1: Install Radix Themes
pnpm add @radix-ui/themes

# Step 0.2: Import CSS in main.tsx
import '@radix-ui/themes/styles.css';

# Step 0.3: Wrap App with Theme
<Theme accentColor="sky" radius="large" scaling="110%">
  <App />
</Theme>

# Step 0.4: Test
pnpm tsc --noEmit
pnpm build
pnpm dev
```

**Rollback Strategy:**

```powershell
# Per phase
git reset --hard HEAD~1

# Full rollback
git reset --hard <pre-migration-commit>
```

---

## Migration Strategy Summary

### Incremental Approach

**Why Incremental:**

- Keeps build working at all times
- Easy to test and validate each phase
- Easy to rollback if issues arise
- Reduces risk

**Phase Dependencies:**

```
Phase 0 (Setup)
   ↓
Phase 1 (Layout & Typography)
   ↓
Phase 2 (Buttons & Forms)
   ↓
Phase 3 (Cards & Badges)
   ↓
Phase 4 (Sections & Overlays)
   ↓
Phase 5 (Cleanup - Remove Tailwind)
```

### Testing After Each Phase

**Required Tests:**

1. ✅ Type check (`pnpm tsc --noEmit`)
2. ✅ Build (`pnpm build`)
3. ✅ Dev server (`pnpm dev`)
4. ✅ Visual inspection (browser)
5. ✅ Interaction testing (click, hover, resize)

**Commit After Each Phase:**

```powershell
git add .
git commit -m "Phase X: <description>"
git push
```

---

## Key Decisions

### 1. Complete Tailwind Removal

**Decision:** Remove Tailwind CSS completely  
**Rationale:** Radix Themes and Tailwind are incompatible paradigms  
**Impact:** Must use component props for styling

### 2. Delete Custom Primitives

**Decision:** Delete all 16 custom primitives  
**Rationale:** Radix Themes provides all needed components  
**Impact:** Update ~120-150 import statements

### 3. Replace Custom Heading/Text

**Decision:** Use Radix Themes Heading/Text  
**Rationale:** Better consistency with Radix Themes design system  
**Impact:** Update ~50-70 component usages

### 4. Custom Solution for Sheet (Drawer)

**Decision:** Keep Radix Primitive for Sheet, style with Themes tokens  
**Rationale:** Sheet not available in Radix Themes  
**Impact:** Custom implementation needed for MobileDrawer

### 5. Minimal Custom CSS

**Decision:** Allow custom CSS with Radix Themes tokens  
**Rationale:** Some complex layouts (flowchart) need custom CSS  
**Impact:** Create `custom.css` file using CSS variables

### 6. Dark Mode with Radix Themes

**Decision:** Use Radix Themes `appearance` prop  
**Rationale:** Built-in dark mode support  
**Impact:** Update theme toggle to control appearance state

---

## Risk Assessment

### Low Risk (Easy Migration)

| Component      | Why Low Risk         | Strategy                    |
| -------------- | -------------------- | --------------------------- |
| Button         | Direct replacement   | Map variants/sizes          |
| Badge          | Direct replacement   | Map variants/colors         |
| TextField      | Direct replacement   | Wrap in TextField.Root      |
| TextArea       | Direct replacement   | Simple rename               |
| Select         | Similar API          | Update structure            |
| Checkbox       | Direct replacement   | Add size/variant props      |
| RadioGroup     | Similar API          | Update structure            |
| Tabs           | Nearly identical API | Minimal changes             |
| Dialog         | Similar API          | Remove DialogHeader wrapper |
| Tooltip        | Simpler API          | Remove provider             |
| Separator      | Direct replacement   | Add size prop               |
| Heading (Text) | Direct replacement   | Map props                   |
| Footer         | Grid layout          | Use Grid component          |

### Moderate Risk (Some Complexity)

| Component      | Why Moderate Risk            | Mitigation                              |
| -------------- | ---------------------------- | --------------------------------------- |
| Navigation     | Sticky, responsive, complex  | Use Box/Flex/Container, test thoroughly |
| Card           | Multi-part restructuring     | Restructure with Box/Heading/Text       |
| Sheet (Drawer) | Not in Radix Themes          | Keep primitive + Themes tokens          |
| Breadcrumb     | Not in Radix Themes          | Custom Flex/Link/Text composition       |
| HeroSection    | Complex responsive grid      | Use Grid with responsive props          |
| UnifiedPages   | Card grid with hover effects | Use Card + Grid                         |

### High Risk (Significant Complexity)

| Component                    | Why High Risk                     | Mitigation                                     |
| ---------------------------- | --------------------------------- | ---------------------------------------------- |
| LeadershipReadinessFlowchart | Extreme complexity, custom layout | May need custom CSS, accept visual changes     |
| Responsive Breakpoints       | Tailwind → Radix Themes mapping   | Use responsive object notation, test all sizes |

---

## Expected Outcomes

### Positive Outcomes

✅ **Simpler architecture** - No custom primitives layer  
✅ **Smaller bundle** - 15-25% reduction (no Tailwind)  
✅ **Better consistency** - Single design system  
✅ **Easier maintenance** - Fewer abstractions  
✅ **Better props API** - Semantic props vs utility classes  
✅ **Built-in accessibility** - Radix Themes is accessible by default

### Potential Challenges

⚠️ **Visual regressions** - Some layouts may look different (document and accept)  
⚠️ **Custom CSS needed** - Complex components may need custom styling  
⚠️ **Sheet component** - No direct replacement, need custom solution  
⚠️ **Breadcrumb** - No direct replacement, need custom composition  
⚠️ **Learning curve** - Team needs to learn Radix Themes props API

### Acceptable Compromises

👍 **Minor visual differences** - Acceptable if functionality preserved  
👍 **Custom CSS with tokens** - Acceptable for complex layouts  
👍 **Custom Sheet implementation** - Acceptable using primitive + tokens  
👍 **Custom Breadcrumb** - Acceptable simple composition

---

## Success Criteria

### Must Have (Critical)

✅ All pages load without errors  
✅ All navigation functional  
✅ All buttons clickable  
✅ All forms work (if present)  
✅ Theme toggle works (light/dark)  
✅ No console errors  
✅ TypeScript compiles  
✅ Build succeeds  
✅ No Tailwind dependencies  
✅ No custom primitives

### Should Have (Important)

✅ Bundle size reduced 15-25%  
✅ Visual quality maintained  
✅ Responsive design works  
✅ Accessibility maintained  
✅ Performance maintained  
✅ Code is clean and maintainable

### Nice to Have (Optional)

✅ Better performance than before  
✅ Improved code organization  
✅ Documentation updated  
✅ Team trained on Radix Themes

---

## Next Steps

### Immediate Actions

1. **Review this assessment** with team/stakeholders
2. **Get approval** to proceed with migration
3. **Create feature branch** `feat/radix-themes-migration`
4. **Begin Phase 0** (Setup Radix Themes)

### During Migration

1. **Follow step-by-step guide** in `ui.radix-themes-migration-steps.md`
2. **Test after each phase** (type check, build, visual, interaction)
3. **Commit after each phase** (enable easy rollback)
4. **Document visual differences** (screenshots before/after)
5. **Ask for help** if stuck (especially on LeadershipReadinessFlowchart)

### After Migration

1. **Create Pull Request** with detailed description
2. **Request code review** from team
3. **Perform final testing** (comprehensive smoke test)
4. **Monitor performance** after merge
5. **Update documentation** (README, contributing guide)
6. **Celebrate!** 🎉

---

## Questions & Answers

### Q: Can we keep Tailwind for some components?

**A:** No. Radix Themes and Tailwind represent incompatible paradigms. Mixing them creates confusion and maintenance burden. Either commit fully to Radix Themes or stay with Tailwind.

### Q: What if Radix Themes doesn't have a component we need?

**A:** Build custom components using Radix Themes layout primitives (Box, Flex, Grid) and design tokens (CSS variables). Examples: Sheet (drawer), Breadcrumb.

### Q: Will the app look different after migration?

**A:** Yes, minor visual differences are expected and acceptable. Document significant changes with screenshots. Focus on functionality preservation.

### Q: How long will this take?

**A:** 12-17 hours estimated for full migration. Can be spread over multiple days. Don't rush - test thoroughly at each phase.

### Q: What if we encounter issues?

**A:** Each phase can be rolled back independently. Use `git reset --hard HEAD~1` to undo the last commit. If stuck, consult the troubleshooting section or ask for help.

### Q: Do we need to update tests?

**A:** If you have component tests, yes - they'll need updates for new imports and props. Integration/E2E tests should largely still work (testing functionality, not implementation).

### Q: What about existing custom CSS?

**A:** Most custom CSS can be removed. For truly custom patterns (like flowchart connectors), keep minimal custom CSS using Radix Themes design tokens (`var(--accent-9)`, `var(--gray-6)`, etc.).

### Q: Can we pause migration mid-way?

**A:** Yes, each phase leaves the codebase in a working state. You can pause after any phase, test, and resume later. Commit frequently to save progress.

---

## Resources

### Documentation

- **Radix Themes Docs:** https://www.radix-ui.com/themes/docs/overview/getting-started
- **Radix Themes Components:** https://www.radix-ui.com/themes/docs/components/overview
- **Radix Themes Playground:** https://www.radix-ui.com/themes/playground

### Internal Documents

- **Doc Notes:** `.guided/assessment/ui.radix-themes-doc-notes.md`
- **Current State:** `.guided/assessment/ui.tailwind-and-primitives-usage.md`
- **Component Mapping:** `.guided/assessment/ui.radix-themes-component-mapping.md`
- **Migration Plan:** `.guided/architecture/ui.radix-themes-migration-plan.md`
- **Step-by-Step Guide:** `.guided/operation/ui.radix-themes-migration-steps.md`

### Support

- **Radix UI Discord:** https://discord.com/invite/7Xb99uG
- **GitHub Issues:** https://github.com/radix-ui/themes/issues

---

## Conclusion

This comprehensive assessment provides everything needed to successfully migrate from Tailwind + custom primitives to Radix Themes only. The migration is well-planned, incremental, and testable at each phase.

**Key Success Factors:**

1. ✅ **Incremental approach** - small, testable phases
2. ✅ **Comprehensive documentation** - detailed guides
3. ✅ **Clear component mappings** - de-para tables
4. ✅ **Risk mitigation** - rollback strategy
5. ✅ **Realistic expectations** - visual differences acceptable
6. ✅ **Custom CSS allowed** - with Radix Themes tokens

**Estimated Timeline:** 12-17 hours  
**Risk Level:** Moderate (mitigated by incremental approach)  
**Expected Outcome:** Simpler, more maintainable architecture with smaller bundle size

**Ready to Begin?** Start with Phase 0 in the step-by-step guide!

---

**Assessment Completed:** November 6, 2025  
**Documents Created:** 5 (notes, usage, mapping, plan, steps)  
**Total Lines:** ~5000+ lines of documentation  
**Ready for Migration:** ✅ Yes
