# Radix Themes Documentation Summary

**Date:** November 6, 2025  
**Purpose:** Understand Radix Themes as foundation for migration from Tailwind CSS

---

## Overview

Radix Themes is a pre-styled, comprehensive UI component library built on top of Radix Primitives. It provides a complete design system that works out-of-the-box with minimal configuration, using **vanilla CSS** internally without requiring external styling libraries or utility class systems.

**Key Philosophy:**

- Closed component system: Components are customized through props and theme configuration, not className overrides
- No `css` or `sx` prop
- Styling via component variants and design tokens
- Minimal external dependencies

---

## Installation & Setup

### Package Installation

```bash
pnpm add @radix-ui/themes
```

### Global CSS Import

```tsx
import '@radix-ui/themes/styles.css';
```

**Alternative imports for advanced use:**

```tsx
// Split imports for better control
import '@radix-ui/themes/tokens.css';
import '@radix-ui/themes/components.css';
import '@radix-ui/themes/utilities.css';

// Layout-only mode
import '@radix-ui/themes/layout.css';
```

### App Theme Wrapper

Wrap your root application component with the `<Theme>` component:

```tsx
import { Theme } from '@radix-ui/themes';

export default function App() {
  return (
    <html>
      <body>
        <Theme accentColor="sky" radius="large" scaling="110%">
          <MyApp />
        </Theme>
      </body>
    </html>
  );
}
```

---

## Theming System

The `<Theme>` component is the central configuration point for visual styling.

### Theme Props

| Prop              | Type   | Description          | Example Values                                       |
| ----------------- | ------ | -------------------- | ---------------------------------------------------- |
| `accentColor`     | string | Primary brand color  | `"sky"`, `"blue"`, `"green"`, `"crimson"`, `"mint"`  |
| `grayColor`       | string | Neutral color scale  | `"gray"`, `"slate"`, `"sage"`, `"olive"`             |
| `panelBackground` | string | Background treatment | `"solid"`, `"translucent"`                           |
| `scaling`         | string | Overall size scale   | `"90%"`, `"95%"`, `"100%"`, `"105%"`, `"110%"`       |
| `radius`          | string | Corner radius scale  | `"none"`, `"small"`, `"medium"`, `"large"`, `"full"` |
| `appearance`      | string | Light/dark mode      | `"light"`, `"dark"`, `"inherit"`                     |

### Theme Nesting

Themes can be nested for portals and specific UI regions:

```tsx
<Theme>
  <App />
  <Dialog.Portal>
    <Theme>
      {' '}
      {/* Inherits parent theme config */}
      <Dialog.Content />
    </Theme>
  </Dialog.Portal>
</Theme>
```

---

## Styling Approach

### Component Variant System

Components are styled through **semantic variant props**, not className utilities:

```tsx
<Button variant="solid">Click me</Button>
<Button variant="soft">Click me</Button>
<Button variant="outline">Click me</Button>
<Button variant="ghost">Click me</Button>
```

**Common variant types across components:**

- `variant`: Visual style (`"solid"`, `"soft"`, `"outline"`, `"ghost"`, `"classic"`)
- `size`: Size scale (`"1"`, `"2"`, `"3"`, `"4"`)
- `color`: Accent override
- `weight`: Font weight (typography)
- `radius`: Corner radius override

### Responsive Props

Many props accept responsive object values:

```tsx
<Box size={{ initial: '1', md: '2', lg: '3' }}>
<Text size={{ initial: '2', sm: '3', lg: '4' }}>
```

### Design Tokens (CSS Variables)

Radix Themes exposes CSS variables for custom components:

- Color tokens: `var(--accent-9)`, `var(--gray-12)`, etc.
- Space tokens: `var(--space-1)` through `var(--space-9)`
- Font tokens: `var(--font-size-1)` through `var(--font-size-9)`
- Radius tokens: `var(--radius-1)` through `var(--radius-6)`

---

## Layout Components

Layout components handle **structural concerns** (spacing, sizing, positioning) separate from content.

### Box

**Most fundamental layout primitive.**

**Purpose:**

- Provide spacing to child elements
- Impose sizing constraints
- Control layout behavior in flex/grid containers
- Responsive visibility

**Common Props:**

```tsx
<Box
  p="4" // padding
  m="2" // margin
  width="200px"
  height="100px"
  display={{ initial: 'block', md: 'flex' }}
  position="relative"
/>
```

**Padding props:** `p`, `px`, `py`, `pt`, `pr`, `pb`, `pl`  
**Margin props:** `m`, `mx`, `my`, `mt`, `mr`, `mb`, `ml`  
**Sizing:** `width`, `minWidth`, `maxWidth`, `height`, `minHeight`, `maxHeight`  
**Positioning:** `position`, `inset`, `top`, `right`, `bottom`, `left`  
**Flex child:** `flexBasis`, `flexShrink`, `flexGrow`  
**Grid child:** `gridArea`, `gridColumn`, `gridRow`

### Flex

**Everything Box can do + flexbox layout.**

**Purpose:**

- Organize items along an axis (row or column)
- Provide convenient flexbox properties

**Common Props:**

```tsx
<Flex
  direction="column" // flex-direction
  align="center" // align-items
  justify="between" // justify-content
  gap="4" // gap
  wrap="wrap" // flex-wrap
>
  {children}
</Flex>
```

**Flexbox props:** `direction`, `align`, `justify`, `wrap`, `gap`, `gapX`, `gapY`

### Grid

**Everything Box can do + CSS grid layout.**

**Purpose:**

- Organize content in columns and rows
- Provide convenient grid properties

**Common Props:**

```tsx
<Grid
  columns="3" // grid-template-columns (repeat)
  rows="2" // grid-template-rows (repeat)
  gap="4" // gap
  flow="row" // grid-auto-flow
>
  {children}
</Grid>
```

**Grid props:** `columns`, `rows`, `gap`, `gapX`, `gapY`, `flow`, `areas`

### Container

**Provides consistent max-width for content.**

**Purpose:**

- Limit content width for readability
- Center content horizontally
- Responsive max-width

**Common Props:**

```tsx
<Container
  size="2" // predefined max-width scale
>
  {children}
</Container>
```

**Size scale:**

- `"1"`: ~448px
- `"2"`: ~688px
- `"3"`: ~880px
- `"4"`: ~1136px

### Section

**Provides consistent vertical spacing between page sections.**

**Purpose:**

- Create hierarchy and separation
- Consistent vertical rhythm
- Simplify page layout

**Common Props:**

```tsx
<Section
  size="2" // predefined vertical spacing
>
  {children}
</Section>
```

**Size scale:**

- `"1"`: Small spacing
- `"2"`: Medium spacing
- `"3"`: Large spacing

---

## Main UI Components

### Typography

#### Heading

```tsx
<Heading
  as="h1" // Semantic HTML tag
  size="8" // Size scale 1-9
  weight="bold" // Font weight
  align="center"
  color="blue"
>
  Title
</Heading>
```

#### Text

```tsx
<Text
  as="p" // Semantic HTML tag
  size="3" // Size scale 1-9
  weight="medium"
  color="gray"
  align="left"
>
  Body text
</Text>
```

### Form Components

#### Button

```tsx
<Button
  variant="solid" // solid | soft | outline | ghost
  size="2" // 1 | 2 | 3 | 4
  color="blue"
  radius="medium"
  loading={isLoading}
  disabled={isDisabled}
>
  Click me
</Button>
```

#### TextField

```tsx
<TextField.Root
  size="2"
  variant="surface" // surface | classic | soft
  color="blue"
  placeholder="Enter text..."
>
  <TextField.Slot>
    <MagnifyingGlassIcon />
  </TextField.Slot>
</TextField.Root>
```

#### TextArea

```tsx
<TextArea
  size="2"
  variant="surface"
  placeholder="Enter description..."
  resize="vertical" // none | vertical | horizontal | both
/>
```

#### Select

```tsx
<Select.Root defaultValue="1">
  <Select.Trigger />
  <Select.Content>
    <Select.Group>
      <Select.Label>Options</Select.Label>
      <Select.Item value="1">Option 1</Select.Item>
      <Select.Item value="2">Option 2</Select.Item>
    </Select.Group>
  </Select.Content>
</Select.Root>
```

#### Checkbox

```tsx
<Checkbox size="2" variant="surface" color="blue" defaultChecked />
```

#### RadioGroup

```tsx
<RadioGroup.Root defaultValue="1">
  <RadioGroup.Item value="1">Option 1</RadioGroup.Item>
  <RadioGroup.Item value="2">Option 2</RadioGroup.Item>
</RadioGroup.Root>
```

### Content Components

#### Card

```tsx
<Card
  size="2" // 1 | 2 | 3 | 4 | 5
  variant="surface" // surface | classic
>
  <Text>Card content</Text>
</Card>
```

#### Badge

```tsx
<Badge
  variant="solid" // solid | soft | surface | outline
  color="blue"
  size="2"
  radius="full"
>
  New
</Badge>
```

#### Separator

```tsx
<Separator
  size="4"
  orientation="horizontal" // horizontal | vertical
  decorative // ARIA role
/>
```

### Navigation

#### Tabs

```tsx
<Tabs.Root defaultValue="tab1">
  <Tabs.List>
    <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
    <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="tab1">Content 1</Tabs.Content>
  <Tabs.Content value="tab2">Content 2</Tabs.Content>
</Tabs.Root>
```

### Overlays

#### Dialog

```tsx
<Dialog.Root>
  <Dialog.Trigger>
    <Button>Open Dialog</Button>
  </Dialog.Trigger>
  <Dialog.Content>
    <Dialog.Title>Dialog Title</Dialog.Title>
    <Dialog.Description>Dialog description</Dialog.Description>
    {/* Content */}
  </Dialog.Content>
</Dialog.Root>
```

#### Tooltip

```tsx
<Tooltip>
  <Tooltip.Trigger>
    <Button>Hover me</Button>
  </Tooltip.Trigger>
  <Tooltip.Content>Tooltip content</Tooltip.Content>
</Tooltip>
```

---

## Compatibility Notes

### Tailwind Incompatibility

**From Radix docs:**

> "Tailwind is a different styling paradigm, which may not mix well with the idea of a closed component system where customization is achieved through props, tokens, and creating new components on top of a shared set of building blocks."

**Known issues:**

- Tailwind's `@tailwind base` can interfere with Radix Themes button styles
- Import order issues in Next.js
- Utility classes can reach into component internals without friction

**Recommendation:** Do not use Tailwind with Radix Themes.

### When to Override Styles

Most components have `className` and `style` props, but if you find yourself overriding many styles:

1. Try to achieve with existing props and theme configuration
2. Tweak the underlying token system
3. Create custom components using Radix Primitives + Colors
4. Reconsider if Radix Themes is the right fit

---

## Migration Strategy

### Recommended Approach

1. **Install Radix Themes** and import global CSS
2. **Wrap app with `<Theme>`** component
3. **Replace layout structures** with Box/Flex/Grid/Container/Section
4. **Replace typography** with Heading/Text components
5. **Replace buttons/forms/cards** with Radix Themes equivalents
6. **Remove custom primitives** layer
7. **Remove Tailwind** configuration and dependencies

### Standalone Layout Usage

If only layout components are needed:

```tsx
import '@radix-ui/themes/layout.css';
```

Must still wrap with `<Theme>` for space scale and scaling settings.

---

## Key Takeaways

✅ **Radix Themes is a complete design system** - no external styling needed  
✅ **Prop-based customization** - variants, sizes, colors  
✅ **CSS variables for custom components** - design tokens  
✅ **Layout separation** - Box/Flex/Grid for structure  
✅ **Responsive by default** - object notation for breakpoints  
❌ **Not compatible with Tailwind** - different paradigm  
❌ **Limited className overrides** - by design

---

**Next Steps:**

1. Analyze current Tailwind usage patterns
2. Map existing components to Radix Themes equivalents
3. Define migration phases
