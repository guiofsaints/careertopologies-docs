# Radix Primitives Design Guide

**Date:** November 6, 2025  
**Project:** CareerTopologies Frontend  
**Purpose:** Define patterns and APIs for Radix + Tailwind primitives in `foundation/primitives`

---

## Executive Summary

This guide establishes the design patterns for building clean, accessible UI primitives using **Radix Primitives** + **Tailwind CSS 4**, replacing the shadcn-style abstractions with simpler, more maintainable components.

### Core Principles:

1. **Direct Radix composition** - Use Radix primitives as documented, without heavy abstractions
2. **Tailwind for styling** - Apply Tailwind classes directly, minimize CSS-in-JS
3. **Simple variant patterns** - Use props or `cn()` utility instead of CVA
4. **Accessibility first** - Leverage Radix's built-in ARIA and keyboard navigation
5. **Type-safe APIs** - Full TypeScript support with clear prop interfaces
6. **className passthrough** - Allow consumers to override/extend styles

---

## Radix Primitives Philosophy

From the [Radix Primitives documentation](https://www.radix-ui.com/primitives/docs/overview/introduction):

### Key Features:

- **Accessible**: Adheres to WAI-ARIA design patterns
- **Unstyled**: Ships without styles for complete customization
- **Composable**: Granular component parts for flexibility
- **Uncontrolled by default**: Works out-of-the-box, controllable when needed
- **Consistent API**: Similar patterns across all primitives
- **`asChild` prop**: Control over rendered element

### Installation Pattern:

Each primitive is installed individually from npm:

```bash
npm install @radix-ui/react-dialog
npm install @radix-ui/react-tooltip
npm install @radix-ui/react-select
```

### Import Pattern:

```tsx
import * as Dialog from '@radix-ui/react-dialog';
import * as Tooltip from '@radix-ui/react-tooltip';
```

---

## Installed Radix Primitives

Based on `package.json`, the following primitives are available:

| Primitive                       | Version | Priority   | Notes                                 |
| ------------------------------- | ------- | ---------- | ------------------------------------- |
| `@radix-ui/react-dialog`        | 1.1.15  | **High**   | Used for modals, sheets               |
| `@radix-ui/react-tooltip`       | 1.2.8   | **High**   | Used in Navigation, Footer, Flowchart |
| `@radix-ui/react-select`        | 2.2.6   | **High**   | Likely for LanguageSelector           |
| `@radix-ui/react-tabs`          | 1.1.13  | **High**   | Common UI pattern                     |
| `@radix-ui/react-dropdown-menu` | 2.1.16  | **Medium** | Common UI pattern                     |
| `@radix-ui/react-popover`       | 1.1.15  | **Medium** | Common UI pattern                     |
| `@radix-ui/react-accordion`     | 1.2.12  | **Medium** | Common UI pattern                     |
| `@radix-ui/react-alert-dialog`  | 1.1.15  | **Medium** | For confirmations                     |
| `@radix-ui/react-checkbox`      | 1.3.3   | **Medium** | Form input                            |
| `@radix-ui/react-radio-group`   | 1.3.8   | **Medium** | Form input                            |
| `@radix-ui/react-switch`        | 1.2.6   | **Medium** | Form input                            |
| `@radix-ui/react-slider`        | 1.3.6   | **Low**    | Less common                           |
| `@radix-ui/react-progress`      | 1.1.8   | **Low**    | Progress bars                         |
| `@radix-ui/react-scroll-area`   | 1.2.10  | **Low**    | Custom scrollbars                     |
| `@radix-ui/react-separator`     | 1.1.8   | **Low**    | Dividers                              |
| `@radix-ui/react-label`         | 2.1.8   | **High**   | Form labels                           |
| `@radix-ui/react-slot`          | 1.2.4   | **High**   | Composition utility                   |
| Others                          | Various | **Low**    | Install as needed                     |

---

## Design Patterns for Core Primitives

### Pattern 1: Dialog (Modal)

**Radix Component**: `@radix-ui/react-dialog`  
**Purpose**: Modals, sheets, drawers  
**Complexity**: Medium

#### API Design:

```tsx
// foundation/primitives/dialog.tsx
import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { XIcon } from 'lucide-react';
import { cn } from '@/utils';

// Root component
export function Dialog(
  props: React.ComponentProps<typeof DialogPrimitive.Root>
) {
  return <DialogPrimitive.Root {...props} />;
}

// Trigger
export function DialogTrigger(
  props: React.ComponentProps<typeof DialogPrimitive.Trigger>
) {
  return <DialogPrimitive.Trigger {...props} />;
}

// Portal (for overlay/content)
export function DialogPortal(
  props: React.ComponentProps<typeof DialogPrimitive.Portal>
) {
  return <DialogPrimitive.Portal {...props} />;
}

// Overlay
export function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      className={cn(
        'fixed inset-0 z-50 bg-black/50',
        'data-[state=open]:animate-in data-[state=closed]:animate-out',
        'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        className
      )}
      {...props}
    />
  );
}

// Content
export function DialogContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content>) {
  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        className={cn(
          'fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2',
          'rounded-lg border border-gray-200 dark:border-gray-800',
          'bg-white dark:bg-gray-900 p-6 shadow-lg',
          'data-[state=open]:animate-in data-[state=closed]:animate-out',
          'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
          'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
          'data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]',
          'data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]',
          'duration-200',
          className
        )}
        {...props}
      >
        {children}
        <DialogPrimitive.Close
          className={cn(
            'absolute right-4 top-4 rounded-sm opacity-70',
            'transition-opacity hover:opacity-100',
            'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
            'disabled:pointer-events-none'
          )}
        >
          <XIcon className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPortal>
  );
}

// Header (layout helper)
export function DialogHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'flex flex-col space-y-2 text-center sm:text-left',
        className
      )}
      {...props}
    />
  );
}

// Footer (layout helper)
export function DialogFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
        className
      )}
      {...props}
    />
  );
}

// Title
export function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      className={cn(
        'text-lg font-semibold leading-none tracking-tight',
        className
      )}
      {...props}
    />
  );
}

// Description
export function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      className={cn('text-sm text-gray-600 dark:text-gray-400', className)}
      {...props}
    />
  );
}
```

#### Usage Example:

```tsx
<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Confirm Action</DialogTitle>
      <DialogDescription>Are you sure you want to proceed?</DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button variant="outline">Cancel</Button>
      <Button>Continue</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

---

### Pattern 2: Tooltip

**Radix Component**: `@radix-ui/react-tooltip`  
**Purpose**: Contextual help text on hover  
**Complexity**: Low

#### API Design:

```tsx
// foundation/primitives/tooltip.tsx
import * as React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { cn } from '@/utils';

// Provider (required at app root)
export function TooltipProvider({
  delayDuration = 200,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return <TooltipPrimitive.Provider delayDuration={delayDuration} {...props} />;
}

// Root
export function Tooltip(
  props: React.ComponentProps<typeof TooltipPrimitive.Root>
) {
  return <TooltipPrimitive.Root {...props} />;
}

// Trigger
export function TooltipTrigger(
  props: React.ComponentProps<typeof TooltipPrimitive.Trigger>
) {
  return <TooltipPrimitive.Trigger {...props} />;
}

// Content
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

#### Usage Example:

```tsx
<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="outline">Hover me</Button>
  </TooltipTrigger>
  <TooltipContent>
    <p>Helpful tooltip text</p>
  </TooltipContent>
</Tooltip>
```

---

### Pattern 3: Select

**Radix Component**: `@radix-ui/react-select`  
**Purpose**: Dropdown selection  
**Complexity**: Medium

#### API Design:

```tsx
// foundation/primitives/select.tsx
import * as React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import { cn } from '@/utils';

// Root
export function Select(
  props: React.ComponentProps<typeof SelectPrimitive.Root>
) {
  return <SelectPrimitive.Root {...props} />;
}

// Trigger
export function SelectTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger>) {
  return (
    <SelectPrimitive.Trigger
      className={cn(
        'flex h-9 w-full items-center justify-between',
        'rounded-md border border-gray-200 dark:border-gray-800',
        'bg-white dark:bg-gray-900 px-3 py-2',
        'text-sm placeholder:text-gray-500 dark:placeholder:text-gray-400',
        'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className="h-4 w-4 opacity-50" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
}

// Content
export function SelectContent({
  className,
  children,
  position = 'popper',
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        position={position}
        className={cn(
          'relative z-50 min-w-[8rem] overflow-hidden',
          'rounded-md border border-gray-200 dark:border-gray-800',
          'bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-md',
          'data-[state=open]:animate-in data-[state=closed]:animate-out',
          'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
          'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
          'data-[side=bottom]:slide-in-from-top-2',
          'data-[side=left]:slide-in-from-right-2',
          'data-[side=right]:slide-in-from-left-2',
          'data-[side=top]:slide-in-from-bottom-2',
          position === 'popper' &&
            'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
          className
        )}
        {...props}
      >
        <SelectPrimitive.Viewport
          className={cn(
            'p-1',
            position === 'popper' &&
              'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]'
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
}

// Item
export function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      className={cn(
        'relative flex w-full cursor-default select-none items-center',
        'rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none',
        'focus:bg-gray-100 dark:focus:bg-gray-800',
        'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        className
      )}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="h-4 w-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
}

// Value
export const SelectValue = SelectPrimitive.Value;
```

#### Usage Example:

```tsx
<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
    <SelectItem value="option3">Option 3</SelectItem>
  </SelectContent>
</Select>
```

---

### Pattern 4: Tabs

**Radix Component**: `@radix-ui/react-tabs`  
**Purpose**: Tabbed content sections  
**Complexity**: Low

#### API Design:

```tsx
// foundation/primitives/tabs.tsx
import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cn } from '@/utils';

// Root
export function Tabs(props: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return <TabsPrimitive.Root {...props} />;
}

// List (tab buttons container)
export function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      className={cn(
        'inline-flex h-9 items-center justify-center',
        'rounded-lg bg-gray-100 dark:bg-gray-800 p-1',
        'text-gray-600 dark:text-gray-400',
        className
      )}
      {...props}
    />
  );
}

// Trigger (individual tab button)
export function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap',
        'rounded-md px-3 py-1 text-sm font-medium',
        'ring-offset-white transition-all',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2',
        'disabled:pointer-events-none disabled:opacity-50',
        'data-[state=active]:bg-white dark:data-[state=active]:bg-gray-900',
        'data-[state=active]:text-gray-900 dark:data-[state=active]:text-white',
        'data-[state=active]:shadow',
        className
      )}
      {...props}
    />
  );
}

// Content (panel content)
export function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      className={cn(
        'mt-2',
        'ring-offset-white',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2',
        className
      )}
      {...props}
    />
  );
}
```

#### Usage Example:

```tsx
<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
    <TabsTrigger value="tab3">Tab 3</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content for Tab 1</TabsContent>
  <TabsContent value="tab2">Content for Tab 2</TabsContent>
  <TabsContent value="tab3">Content for Tab 3</TabsContent>
</Tabs>
```

---

### Pattern 5: Button (Non-Radix, Tailwind-only)

**Radix Component**: Uses `@radix-ui/react-slot` for composition  
**Purpose**: Primary interactive element  
**Complexity**: Low

#### API Design (Simplified without CVA):

```tsx
// foundation/primitives/button.tsx
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

#### Usage Example:

```tsx
<Button>Default Button</Button>
<Button variant="outline" size="sm">Small Outline</Button>
<Button variant="destructive" loading>Loading...</Button>
<Button asChild>
  <Link to="/about">Link Button</Link>
</Button>
```

---

## Tailwind Integration Patterns

### Focus States

Radix components manage focus internally. Style focus with Tailwind:

```tsx
'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2';
```

### Dark Mode

Use Tailwind's `dark:` prefix:

```tsx
'bg-white dark:bg-gray-900 text-gray-900 dark:text-white';
```

### Animations

Use `tailwindcss-animate` for Radix data-state transitions:

```tsx
'data-[state=open]:animate-in data-[state=closed]:animate-out';
'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0';
```

### Responsive Design

Apply responsive Tailwind classes:

```tsx
'flex-col sm:flex-row gap-2 sm:gap-4';
```

---

## Accessibility Best Practices

1. **Always include `sr-only` labels** for icon-only buttons:

   ```tsx
   <button>
     <XIcon />
     <span className="sr-only">Close</span>
   </button>
   ```

2. **Use `asChild` for semantic HTML**:

   ```tsx
   <Button asChild>
     <a href="/page">Link as Button</a>
   </Button>
   ```

3. **Provide `aria-label` for interactive elements without text**:

   ```tsx
   <button aria-label="Toggle theme">
     <MoonIcon />
   </button>
   ```

4. **Leverage Radix's built-in ARIA attributes** - don't override unless necessary

5. **Test keyboard navigation** - Tab, Enter, Escape, Arrow keys

---

## Component Composition Guidelines

### Good Practices:

✅ Export individual Radix parts for flexibility  
✅ Use `cn()` utility for className merging  
✅ Pass `...props` to allow extension  
✅ Provide sensible defaults (e.g., `delayDuration`, `sideOffset`)  
✅ Keep components simple and predictable

### Avoid:

❌ Over-abstracting simple components  
❌ Hiding Radix API behind custom abstractions  
❌ Using CVA when simple props suffice  
❌ Complex variant logic in primitives  
❌ Mixing presentation and business logic

---

## Next Steps

1. ✅ **Patterns defined** - This document
2. 🔄 **Create mapping table** - Full old→new paths (Step 3)
3. 🔄 **Implement primitives** - Build foundation/primitives (Step 4)
4. 🔄 **Migration guide** - Step-by-step refactor plan (Step 5)

---

**Design guide completed by:** GitHub Copilot  
**Review status:** Ready for implementation planning
