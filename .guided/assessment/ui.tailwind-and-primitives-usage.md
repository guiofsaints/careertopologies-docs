# Tailwind and Primitives Usage Analysis

**Date:** November 6, 2025  
**Project:** CareerTopologies Frontend  
**Purpose:** Document current Tailwind CSS and custom primitives usage

---

## Executive Summary

The CareerTopologies project currently uses **Tailwind CSS 4** extensively across all component layers. There are **16 custom primitive components** in `src/components/foundation/primitives/` that wrap Radix UI primitives with Tailwind styling. Tailwind utilities are heavily used throughout layout, common, sections, and pages components.

**Tailwind Footprint:**

- ✅ **postcss.config.js** - Tailwind PostCSS plugin configured
- ✅ **src/styles/globals.css** - Tailwind directives, custom utilities, dark mode classes
- ✅ **Foundation primitives** (16 components) - All styled with Tailwind
- ✅ **Layout components** (4 components) - Heavy Tailwind usage
- ✅ **Common components** (5 components) - Moderate Tailwind usage
- ✅ **Sections** (multiple) - Heavy Tailwind usage for complex layouts
- ✅ **Pages** - Tailwind-styled containers and layouts
- ✅ **Utilities** - `tailwind-merge` (clsx + tailwind-merge via `cn()`)
- ✅ **Animations** - `tailwindcss-animate` plugin

---

## Tailwind Configuration Files

### postcss.config.js

```javascript
const config = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
};
```

**Tailwind CSS 4** is configured via PostCSS plugin (`@tailwindcss/postcss`).

### src/styles/globals.css

**Tailwind directives:**

```css
@import 'tailwindcss';
@custom-variant dark (&:is(.dark *));
@plugin "tailwindcss-animate";
```

**Custom theme:**

```css
@theme {
  --radius: 0.5rem;
}
```

**Base styles:**

```css
@layer base {
  body {
    @apply bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-200;
  }
}
```

**Component utilities (compatibility layer):**

- `.border-border` - Maps to `border-gray-200 dark:border-gray-800`
- `.bg-background` - Maps to `bg-white dark:bg-gray-900`
- `.text-foreground` - Maps to `text-gray-900 dark:text-white`
- `.bg-card` - Maps to `bg-white dark:bg-gray-800`
- `.text-card-foreground`
- `.text-muted-foreground` - Maps to `text-gray-600 dark:text-gray-400`
- `.bg-accent` - Maps to `bg-gray-100 dark:bg-gray-800`
- `.text-accent-foreground`
- `.bg-primary` - Maps to `bg-blue-600 dark:bg-blue-500`
- `.text-primary` - Maps to `text-blue-600 dark:text-blue-400`
- `.text-primary-foreground` - Maps to `text-white`
- Plus hover and focus variants

**Note:** These semantic class names mimic shadcn/ui's design token approach but are implemented with Tailwind utilities.

### package.json Dependencies

**Tailwind-related:**

```json
{
  "@tailwindcss/postcss": "^4.1.16",
  "tailwind-merge": "^3.3.1",
  "tailwindcss-animate": "^1.0.7",
  "tailwindcss": "^4.1.16"
}
```

**Radix Primitives (low-level):**

```json
{
  "@radix-ui/react-accordion": "^1.2.12",
  "@radix-ui/react-dialog": "^1.1.15",
  "@radix-ui/react-select": "^2.2.6",
  "@radix-ui/react-tabs": "^1.1.13",
  "@radix-ui/react-tooltip": "^1.2.8"
  // ... 20+ more Radix primitives
}
```

**Other styling:**

```json
{
  "class-variance-authority": "^0.7.1", // CVA (not currently used)
  "clsx": "^2.1.1" // Used via cn() utility
}
```

---

## Foundation Primitives Analysis

### Overview

**Location:** `src/components/foundation/primitives/`  
**Count:** 16 components  
**Pattern:** Radix UI primitives + Tailwind CSS styling  
**Barrel Export:** `index.ts` re-exports all primitives

### Component Inventory

| Component      | File              | Radix Primitive               | Visual Role             | Tailwind Usage                                | Used In                                 |
| -------------- | ----------------- | ----------------------------- | ----------------------- | --------------------------------------------- | --------------------------------------- |
| **Badge**      | `badge.tsx`       | `@radix-ui/react-slot`        | Label/status indicator  | Heavy - variant-based styling                 | Common, Sections, Pages                 |
| **Breadcrumb** | `breadcrumb.tsx`  | None (pure HTML)              | Navigation breadcrumbs  | Moderate - layout classes                     | Layout (BreadcrumbNavigation)           |
| **Button**     | `button.tsx`      | `@radix-ui/react-slot`        | Action trigger          | Heavy - 6 variants, 4 sizes, loading state    | Layout, Common, Sections, Pages         |
| **Card**       | `card.tsx`        | None (pure HTML)              | Content container       | Heavy - grid layouts, semantic classes        | Common (FeatureCard), Sections          |
| **Checkbox**   | `checkbox.tsx`    | `@radix-ui/react-checkbox`    | Boolean input           | Heavy - custom checkbox styling               | (Likely in forms, not heavily used)     |
| **Dialog**     | `dialog.tsx`      | `@radix-ui/react-dialog`      | Modal overlay           | Heavy - animations, overlay, positioning      | (Not heavily used in current pages)     |
| **Input**      | `input.tsx`       | None (pure `<input>`)         | Text input              | Heavy - states (focus, invalid, disabled)     | (Likely in forms, not heavily used)     |
| **Label**      | `label.tsx`       | `@radix-ui/react-label`       | Form label              | Light - basic text styles                     | (With inputs)                           |
| **RadioGroup** | `radio-group.tsx` | `@radix-ui/react-radio-group` | Option selector         | Heavy - custom radio styling                  | (Not heavily used in current pages)     |
| **Select**     | `select.tsx`      | `@radix-ui/react-select`      | Dropdown select         | Heavy - trigger, content, items, animations   | Config (LanguageSelector)               |
| **Separator**  | `separator.tsx`   | `@radix-ui/react-separator`   | Visual divider          | Light - border styling                        | (Not heavily used in current pages)     |
| **Sheet**      | `sheet.tsx`       | `@radix-ui/react-dialog`      | Slide-in panel (drawer) | Heavy - animations, overlay, side positioning | Layout (MobileDrawer)                   |
| **Tabs**       | `tabs.tsx`        | `@radix-ui/react-tabs`        | Tabbed interface        | Heavy - list, trigger, content styling        | (Not heavily used in current pages)     |
| **Textarea**   | `textarea.tsx`    | None (pure `<textarea>`)      | Multiline text input    | Heavy - states (focus, invalid, disabled)     | (Likely in forms, not heavily used)     |
| **Tooltip**    | `tooltip.tsx`     | `@radix-ui/react-tooltip`     | Hover info              | Moderate - content styling                    | Sections (LeadershipReadinessFlowchart) |

### Detailed Component Analysis

#### Button (button.tsx)

**Complexity:** High  
**Tailwind Dependency:** Very Heavy

**Variants:**

- `default` - Blue background, white text
- `destructive` - Red background, white text
- `outline` - Border with background hover
- `secondary` - Gray background
- `ghost` - Transparent with hover
- `link` - Text link styling

**Sizes:**

- `default` - h-9 px-4 py-2
- `sm` - h-8 px-3 text-xs
- `lg` - h-10 px-6
- `icon` - h-9 w-9

**Special Features:**

- Loading state with spinner
- `asChild` pattern (Slot)
- Focus ring, disabled state

**Tailwind Classes Used:**

```tsx
'inline-flex items-center justify-center gap-2';
'rounded-md text-sm font-medium transition-colors';
'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2';
'disabled:pointer-events-none disabled:opacity-50';
// + variant-specific and size-specific classes
```

#### Card (card.tsx)

**Complexity:** Moderate  
**Tailwind Dependency:** Heavy

**Sub-components:**

- `Card` - Root container
- `CardHeader` - Header with grid layout
- `CardTitle` - Heading
- `CardDescription` - Subtitle
- `CardAction` - Action button slot
- `CardContent` - Main content
- `CardFooter` - Footer area

**Tailwind Classes Used:**

```tsx
// Card
'bg-card text-card-foreground flex flex-col gap-6 rounded-xl border';

// CardHeader (complex grid)
'@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6';

// CardTitle
'leading-none';

// CardDescription
'text-muted-foreground';

// CardAction
'col-start-2 row-span-2 row-start-1 self-start justify-self-end';

// CardContent
'px-6 last:pb-6';

// CardFooter
'flex items-center px-6 pb-6 [.border-t]:pt-6';
```

#### Badge (badge.tsx)

**Complexity:** Moderate  
**Tailwind Dependency:** Heavy

**Variants:**

- `default` - Primary color background
- `secondary` - Secondary color background
- `destructive` - Destructive color (red)
- `outline` - Outline only

**Tailwind Classes Used:**

```tsx
// Base
'inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 overflow-hidden';

// SVG support
'[&>svg]:size-3 [&>svg]:pointer-events-none';

// States
'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]';
'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive';

// Transition
'transition-[color,box-shadow]';

// Variant-specific classes
```

#### Select (select.tsx)

**Complexity:** High  
**Tailwind Dependency:** Very Heavy

**Sub-components:**

- `Select` (Root)
- `SelectTrigger` - Button to open dropdown
- `SelectValue` - Display selected value
- `SelectContent` - Dropdown panel
- `SelectItem` - Option item
- `SelectLabel` - Group label
- `SelectSeparator` - Divider
- `SelectScrollUpButton` - Scroll button
- `SelectScrollDownButton` - Scroll button

**Tailwind Classes Used:**

```tsx
// SelectTrigger
'flex w-full items-center justify-between gap-2 rounded-md border border-input bg-input-background px-3 py-2 text-sm whitespace-nowrap outline-none transition-[color,box-shadow]';
'dark:bg-input/30 dark:hover:bg-input/50';
'data-placeholder:text-muted-foreground';
'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]';
'aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40';
'disabled:cursor-not-allowed disabled:opacity-50';
'data-[size=default]:h-9 data-[size=sm]:h-8';

// SelectContent (with animations)
'relative z-50 max-h-(--radix-select-content-available-height) min-w-32 origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border bg-popover text-popover-foreground shadow-md';
'data-[state=open]:animate-in data-[state=closed]:animate-out';
'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0';
'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95';
// ... plus side-specific slide animations
```

#### Sheet (sheet.tsx)

**Complexity:** High  
**Tailwind Dependency:** Very Heavy

**Usage:** Mobile drawer navigation in MobileDrawer.tsx

**Sub-components:**

- `Sheet` (Root - Dialog primitive)
- `SheetTrigger`
- `SheetClose`
- `SheetOverlay` - Semi-transparent backdrop
- `SheetContent` - Slide-in panel (left/right/top/bottom)
- `SheetHeader`
- `SheetFooter`
- `SheetTitle`
- `SheetDescription`

**Tailwind Classes Used:**

```tsx
// SheetOverlay
'fixed inset-0 z-50 bg-black/80';
'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0';

// SheetContent (side variants with animations)
'fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out';

// Side-specific classes (top/right/bottom/left with slide animations)
```

#### Tabs (tabs.tsx)

**Complexity:** Moderate  
**Tailwind Dependency:** Heavy

**Sub-components:**

- `Tabs` (Root)
- `TabsList` - Tab button container
- `TabsTrigger` - Individual tab button
- `TabsContent` - Tab panel content

**Tailwind Classes Used:**

```tsx
// Tabs
'flex flex-col gap-2';

// TabsList
'inline-flex h-9 w-fit items-center justify-center rounded-xl bg-muted p-[3px] text-muted-foreground';

// TabsTrigger (complex states)
'inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow]';
'text-foreground dark:text-muted-foreground';
'data-[state=active]:bg-card dark:data-[state=active]:text-foreground dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30';
'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] focus-visible:outline-ring focus-visible:outline-1';
'disabled:pointer-events-none disabled:opacity-50';
```

#### Input (input.tsx)

**Complexity:** Moderate  
**Tailwind Dependency:** Heavy

**Tailwind Classes Used:**

```tsx
'flex h-9 w-full min-w-0 rounded-md border border-input bg-input-background px-3 py-1 text-base outline-none transition-[color,box-shadow]';
'dark:bg-input/30';
'file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground';
'placeholder:text-muted-foreground';
'selection:bg-primary selection:text-primary-foreground';
'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]';
'aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40';
'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50';
'md:text-sm';
```

#### Dialog (dialog.tsx)

**Complexity:** High  
**Tailwind Dependency:** Very Heavy

**Sub-components:**

- `Dialog` (Root)
- `DialogTrigger`
- `DialogPortal`
- `DialogClose`
- `DialogOverlay` - Backdrop
- `DialogContent` - Modal content
- `DialogHeader`
- `DialogFooter`
- `DialogTitle`
- `DialogDescription`

**Tailwind Classes Used:**

```tsx
// DialogOverlay
'fixed inset-0 z-50 bg-black/50';
'data-[state=open]:animate-in data-[state=closed]:animate-out';
'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0';

// DialogContent (complex positioning and animations)
'fixed left-[50%] top-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 sm:max-w-lg sm:rounded-lg';
'data-[state=open]:animate-in data-[state=closed]:animate-out';
'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0';
'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95';
```

---

## Layout Components

### Navigation.tsx

**Tailwind Usage:** Very Heavy  
**Complexity:** High

**Key Features:**

- Sticky navigation with glass effect
- Desktop menu (hidden on mobile)
- Theme toggle button
- Accessibility skip link
- Responsive design

**Heavily Tailwind-dependent patterns:**

```tsx
// Skip link
'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-md focus:ring-2 focus:ring-ring focus:outline-none';

// Navigation bar
'w-full border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 sticky top-0 z-50';

// Container
'max-w-6xl mx-auto px-6 py-4 flex items-center justify-between';

// Desktop menu
'hidden lg:flex items-center gap-8';

// Theme toggle button
'inline-flex items-center justify-center p-2 bg-transparent text-gray-900 dark:text-white border border-transparent rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500';
```

### MobileDrawer.tsx

**Tailwind Usage:** Very Heavy  
**Complexity:** High

**Key Features:**

- Sheet component (slide-in drawer)
- Language selector
- Theme toggle
- Mobile menu items

**Heavily Tailwind-dependent patterns:**

```tsx
// Sheet content
'w-80 p-0 bg-white dark:bg-gray-900';

// Header
'px-6 py-4 border-b border-gray-200 dark:border-gray-800';

// Menu items
'block px-3 py-2 rounded-lg text-sm transition-colors hover:bg-gray-100 dark:hover:bg-gray-800';

// Active state
'font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20';

// Language buttons
'w-full text-left inline-flex items-center justify-start px-3 py-2 bg-transparent border border-transparent rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 text-sm';
```

### Footer.tsx

**Tailwind Usage:** Heavy  
**Complexity:** Moderate

**Key Features:**

- Multi-column grid layout
- Social media links
- Navigation links
- Copyright info

**Heavily Tailwind-dependent patterns:**

```tsx
// Footer container
'border-t border-border bg-background';
'max-w-6xl mx-auto px-6 py-12';

// Grid layout
'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12';

// Link styling
'text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1';

// Social icons
'text-muted-foreground hover:text-foreground transition-colors';
```

### BreadcrumbNavigation.tsx

**Tailwind Usage:** Moderate  
**Complexity:** Low

**Key Features:**

- Uses Breadcrumb primitive
- Responsive breadcrumb trail
- Home icon

**Tailwind patterns:**

```tsx
// Container
'max-w-4xl mx-auto px-6 pt-8';

// List
'text-xs';

// Items
'text-muted-foreground/80 font-medium';
'text-muted-foreground/60 hover:text-muted-foreground transition-colors flex items-center gap-1';

// Separator
'mx-1';
'w-3 h-3 text-muted-foreground/40';
```

---

## Common Components

### Heading.tsx

**Tailwind Usage:** Heavy  
**Complexity:** Moderate

**Custom component (not using Radix)**

**Levels:** h1, h2, h3, h4, h5, h6  
**Variants:** default, primary, secondary, muted

**Tailwind Classes Used:**

```tsx
// Base
'font-medium text-foreground mb-4';

// Level-specific
'text-4xl lg:text-5xl'; // h1
'text-3xl lg:text-4xl'; // h2
'text-2xl lg:text-3xl'; // h3
'text-xl lg:text-2xl'; // h4
'text-lg lg:text-xl'; // h5
'text-base lg:text-lg'; // h6

// Variant-specific
'text-foreground'; // default
'text-primary'; // primary
'text-secondary'; // secondary
'text-muted-foreground'; // muted
```

### Text.tsx

**Tailwind Usage:** Heavy  
**Complexity:** Moderate

**Custom component (not using Radix)**

**Variants:** body, caption, small, muted

**Tailwind Classes Used:**

```tsx
// Base
'text-foreground';

// Variant-specific
'text-base'; // body
'text-sm'; // caption
'text-xs'; // small
'text-muted-foreground'; // muted
```

### FeatureCard.tsx

**Tailwind Usage:** Heavy  
**Complexity:** Moderate

**Uses Card primitive**

**Props:** title, description, icon, iconColor, variant

**Tailwind patterns:**

```tsx
// Wrapper
'h-full transition-all hover:shadow-md';
'border-border'; // (when variant="outline")

// Icon container
'flex justify-center mb-4';

// Icon color classes
'text-blue-600';
'text-green-600';
'text-purple-600';
'text-orange-600';
```

### LoadingSpinner.tsx

**Tailwind Usage:** Light  
**Complexity:** Low

**Tailwind Classes Used:**

```tsx
'animate-spin text-primary';
'w-4 h-4'; // sm
'w-6 h-6'; // md
'w-8 h-8'; // lg
```

### EmptyState.tsx

**Tailwind Usage:** Moderate  
**Complexity:** Low

**Tailwind patterns:**

```tsx
// Container
'flex flex-col items-center justify-center py-16 px-6 text-center';

// Icon
'mb-6';
'w-16 h-16';

// Heading
'mb-3 max-w-md';

// Description
'mb-6 max-w-lg';
```

---

## Sections Components

### HeroSection.tsx

**Tailwind Usage:** Very Heavy  
**Complexity:** High

**Tailwind patterns:**

```tsx
// Container
'text-center lg:text-left';

// Heading
'text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 text-foreground';

// Description
'text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed';

// Layout
'lg:justify-start mb-8';
'lg:justify-end';

// Image container
'relative max-w-md lg:max-w-lg xl:max-w-xl';

// Effects
'absolute inset-0 bg-linear-to-t from-background/20 via-transparent to-transparent pointer-events-none';
'absolute inset-0 bg-primary/5 rounded-lg blur-3xl scale-110 -z-10';
```

### UnifiedRelatedPages.tsx

**Tailwind Usage:** Very Heavy  
**Complexity:** High

**Tailwind patterns:**

```tsx
// Card
'border border-border bg-card rounded-lg p-6 hover:bg-accent hover:border-primary/30 transition-all duration-200 cursor-pointer group';

// Icon
'w-8 h-8 text-primary mb-4 group-hover:text-primary transition-colors';

// Heading
'text-foreground mb-2 group-hover:text-primary transition-colors';

// Description
'text-muted-foreground text-sm leading-relaxed mb-4';

// Grid
'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6';
```

### LeadershipReadinessFlowchart.tsx

**Tailwind Usage:** Extreme  
**Complexity:** Very High

**Most complex component in the project**

**Tailwind patterns (sample):**

```tsx
// Section background
'bg-muted/30 py-16';

// Step card
'relative bg-card border border-border rounded-lg p-4 hover:border-primary/30 transition-all duration-200 cursor-help group'// Step number badge
`absolute -top-3 -left-3 w-8 h-8 ${step.color} text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium shadow-lg`;

// Icon container
('bg-primary/10 p-3 rounded-lg');

// Flow connectors
('absolute top-1/2 -right-3 transform -translate-y-1/2 z-10');
('absolute top-0 left-3/4 transform -translate-x-1/2 w-px h-12 bg-muted-foreground/30');
('absolute top-12 left-1/4 right-1/4 h-px bg-muted-foreground/30');

// Responsive layouts
('hidden lg:block');
('lg:hidden space-y-6');
('grid grid-cols-4 gap-6');
('grid grid-cols-3 gap-6');
```

### FrameworkSection.tsx

**Tailwind Usage:** Moderate  
**Complexity:** Moderate

**Tailwind patterns:**

```tsx
// Link wrapper
'block group w-full';

// Card
'h-full cursor-pointer';
```

---

## Utility Functions

### cn() utility (src/utils/utils.ts)

**Implementation:**

```tsx
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

**Purpose:** Merge Tailwind classes with deduplication  
**Usage:** Every component uses this for className composition

**Dependencies:**

- `clsx` - Conditional class name composition
- `tailwind-merge` - Tailwind-aware class merging (handles conflicts)

---

## Tailwind Usage Intensity by Layer

| Layer                     | Tailwind Intensity    | Complexity | Migration Difficulty                      |
| ------------------------- | --------------------- | ---------- | ----------------------------------------- |
| **Foundation/Primitives** | ⭐⭐⭐⭐⭐ Very Heavy | High       | Medium (1:1 Radix Themes mapping)         |
| **Layout**                | ⭐⭐⭐⭐⭐ Very Heavy | High       | Medium (use Box/Flex/Grid)                |
| **Common**                | ⭐⭐⭐⭐ Heavy        | Moderate   | Medium (use Heading/Text/Card)            |
| **Sections**              | ⭐⭐⭐⭐⭐ Very Heavy | Very High  | High (complex layouts, custom components) |
| **Pages**                 | ⭐⭐⭐ Moderate       | Moderate   | Low (mostly composition)                  |
| **Config**                | ⭐⭐ Light            | Low        | Low                                       |
| **Media**                 | ⭐⭐ Light            | Low        | Low                                       |

---

## High-Risk Areas for Migration

### 1. LeadershipReadinessFlowchart.tsx

- **Extreme Tailwind usage** for visual flowchart
- Complex grid layouts, positioning, connectors
- **Recommendation:** May need custom CSS or advanced Box/Flex composition

### 2. Navigation.tsx & MobileDrawer.tsx

- Sticky navigation, glass effects, responsive behavior
- **Recommendation:** Use Radix Themes layout components + custom Theme config

### 3. UnifiedRelatedPages.tsx

- Complex card grids with hover effects
- **Recommendation:** Use Radix Themes Card + Box/Grid

### 4. Foundation Primitives

- 16 components to replace
- **Recommendation:** 1:1 replacement with Radix Themes components

---

## Custom Styling Patterns to Preserve

### Dark Mode

- Currently using `.dark` class variant
- **Migration:** Radix Themes uses `appearance="dark"` prop on Theme

### Semantic Color Classes

- `.bg-primary`, `.text-muted-foreground`, etc.
- **Migration:** Radix Themes has `color` prop and CSS variables

### Animations

- `tailwindcss-animate` plugin
- **Migration:** Radix Themes includes animations; may need custom CSS for complex animations

### Responsive Design

- Tailwind breakpoints: `sm:`, `md:`, `lg:`, `xl:`
- **Migration:** Radix Themes uses responsive object notation

---

## Dependencies to Remove

After migration:

- ✅ `tailwindcss`
- ✅ `@tailwindcss/postcss`
- ✅ `tailwind-merge`
- ✅ `tailwindcss-animate`

Maybe remove (if not used elsewhere):

- ⚠️ `class-variance-authority` (CVA) - not currently used, but useful for custom components

Keep:

- ✅ `clsx` - Still useful for conditional classes even without Tailwind
- ✅ All Radix primitives (will be replaced by `@radix-ui/themes`)

---

## Summary

**Total Tailwind Footprint:**

- 16 primitive components (100% Tailwind-styled)
- 4 layout components (100% Tailwind-styled)
- 5 common components (80% Tailwind-styled)
- Multiple section components (90% Tailwind-styled)
- Multiple page components (60% Tailwind-styled)
- 1 global stylesheet with Tailwind directives
- 1 PostCSS config
- 4 Tailwind-related npm packages

**Migration Scope:** Complete replacement of styling system  
**Estimated Effort:** High (but systematic with clear mapping)

---

**Next Steps:**

1. Create de-para mapping from current components to Radix Themes
2. Design target architecture
3. Define migration phases
