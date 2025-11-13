# Component Mapping: Current → Radix Themes (De-Para)

**Date:** November 6, 2025  
**Project:** CareerTopologies  
**Purpose:** Map existing Tailwind+Primitives components to Radix Themes equivalents

---

## Mapping Strategy

This document provides a **de-para (from-to) mapping** for migrating from the current Tailwind-styled custom primitives to Radix Themes components.

**Mapping Categories:**

1. **Foundation Primitives** - Direct 1:1 replacement
2. **Layout Components** - Architectural replacement with Radix Themes layout primitives
3. **Common Components** - Partial replacement + custom components
4. **Sections & Pages** - Composition using Radix Themes components

---

## 1. Foundation Primitives Mapping

### Button

| Aspect       | Current (Tailwind)                                                | Target (Radix Themes)                                                                            | Migration Notes                       |
| ------------ | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | ------------------------------------- |
| **File**     | `src/components/foundation/primitives/button.tsx`                 | N/A - use `@radix-ui/themes`                                                                     | Delete custom component               |
| **Import**   | `import { Button } from '@/components/foundation/primitives'`     | `import { Button } from '@radix-ui/themes'`                                                      | Update all imports                    |
| **Variants** | `default`, `destructive`, `outline`, `secondary`, `ghost`, `link` | `variant="solid"`, `variant="soft"`, `variant="outline"`, `variant="ghost"`, `variant="surface"` | Map variants                          |
| **Sizes**    | `default`, `sm`, `lg`, `icon`                                     | `size="2"` (default), `size="1"` (sm), `size="3"` (lg)                                           | Map sizes to 1-4 scale                |
| **Loading**  | Custom `loading` prop with Loader2 icon                           | Use `loading` prop (built-in)                                                                    | Radix Themes has native loading state |
| **asChild**  | Supported via Slot                                                | Supported via `asChild` prop                                                                     | Direct compatibility                  |
| **Colors**   | Fixed blue for primary                                            | `color="blue"` (or theme accentColor)                                                            | Use color prop                        |
| **Example**  | `<Button variant="default" size="sm">Click</Button>`              | `<Button variant="solid" size="1" color="blue">Click</Button>`                                   |                                       |

**Variant Mapping:**

- `default` → `variant="solid"` + `color="blue"`
- `destructive` → `variant="solid"` + `color="red"`
- `outline` → `variant="outline"`
- `secondary` → `variant="soft"` + `color="gray"`
- `ghost` → `variant="ghost"`
- `link` → Use `<Link>` or `<Text>` with `asChild`

**Risks:** None - direct replacement

---

### Card

| Aspect          | Current (Tailwind)                                                                                                           | Target (Radix Themes)                                                              | Migration Notes         |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ----------------------- |
| **File**        | `src/components/foundation/primitives/card.tsx`                                                                              | N/A - use `@radix-ui/themes`                                                       | Delete custom component |
| **Import**      | `import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/foundation/primitives'` | `import { Card } from '@radix-ui/themes'`                                          | Update all imports      |
| **Structure**   | Multi-part: Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent, CardFooter                                | Single `<Card>` component                                                          | Simplified structure    |
| **Composition** | Complex grid-based header                                                                                                    | Use Flex/Box within Card                                                           | Need to restructure     |
| **Variants**    | None (single style)                                                                                                          | `variant="surface"`, `variant="classic"`                                           | Choose variant          |
| **Sizes**       | None (fixed)                                                                                                                 | `size="1"` through `size="5"`                                                      | Use size prop           |
| **Example**     | `<Card><CardHeader><CardTitle>Title</CardTitle>...`                                                                          | `<Card size="2" variant="surface"><Box p="4"><Heading size="4">Title</Heading>...` |                         |

**Migration Pattern:**

```tsx
// Current
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    Content here
  </CardContent>
</Card>

// Target
<Card size="2" variant="surface">
  <Box p="4">
    <Heading size="4" mb="2">Title</Heading>
    <Text size="2" color="gray" mb="4">Description</Text>
    <Box>Content here</Box>
  </Box>
</Card>
```

**Risks:** Moderate - need to restructure card internals

---

### Badge

| Aspect       | Current (Tailwind)                                           | Target (Radix Themes)                                                         | Migration Notes         |
| ------------ | ------------------------------------------------------------ | ----------------------------------------------------------------------------- | ----------------------- |
| **File**     | `src/components/foundation/primitives/badge.tsx`             | N/A - use `@radix-ui/themes`                                                  | Delete custom component |
| **Import**   | `import { Badge } from '@/components/foundation/primitives'` | `import { Badge } from '@radix-ui/themes'`                                    | Update all imports      |
| **Variants** | `default`, `secondary`, `destructive`, `outline`             | `variant="solid"`, `variant="soft"`, `variant="surface"`, `variant="outline"` | Direct mapping          |
| **Sizes**    | Fixed (one size)                                             | `size="1"`, `size="2"`, `size="3"`                                            | Use size prop           |
| **Colors**   | Fixed per variant                                            | `color="blue"`, `color="red"`, etc.                                           | Use color prop          |
| **Example**  | `<Badge variant="default">New</Badge>`                       | `<Badge variant="solid" color="blue" size="2">New</Badge>`                    |                         |

**Variant Mapping:**

- `default` → `variant="solid"` + use accent color
- `secondary` → `variant="soft"` + `color="gray"`
- `destructive` → `variant="solid"` + `color="red"`
- `outline` → `variant="outline"`

**Risks:** Low - direct replacement

---

### Input

| Aspect        | Current (Tailwind)                                           | Target (Radix Themes)                                                  | Migration Notes         |
| ------------- | ------------------------------------------------------------ | ---------------------------------------------------------------------- | ----------------------- |
| **File**      | `src/components/foundation/primitives/input.tsx`             | N/A - use `@radix-ui/themes`                                           | Delete custom component |
| **Import**    | `import { Input } from '@/components/foundation/primitives'` | `import { TextField } from '@radix-ui/themes'`                         | Note: Different name!   |
| **Structure** | Single `<input>` element                                     | `<TextField.Root>` with optional `<TextField.Slot>`                    | Wrap in .Root           |
| **Variants**  | None (single style)                                          | `variant="surface"`, `variant="classic"`, `variant="soft"`             | Choose variant          |
| **Sizes**     | Fixed height                                                 | `size="1"`, `size="2"`, `size="3"`                                     | Use size prop           |
| **Example**   | `<Input type="text" placeholder="Enter..." />`               | `<TextField.Root size="2" variant="surface" placeholder="Enter..." />` |                         |

**Migration Pattern:**

```tsx
// Current
<Input type="email" placeholder="Email" />

// Target
<TextField.Root type="email" size="2" variant="surface" placeholder="Email" />

// With icon
<TextField.Root size="2" variant="surface" placeholder="Search...">
  <TextField.Slot>
    <MagnifyingGlassIcon />
  </TextField.Slot>
</TextField.Root>
```

**Risks:** Low - API change but straightforward

---

### Textarea

| Aspect        | Current (Tailwind)                                              | Target (Radix Themes)                                                  | Migration Notes         |
| ------------- | --------------------------------------------------------------- | ---------------------------------------------------------------------- | ----------------------- |
| **File**      | `src/components/foundation/primitives/textarea.tsx`             | N/A - use `@radix-ui/themes`                                           | Delete custom component |
| **Import**    | `import { Textarea } from '@/components/foundation/primitives'` | `import { TextArea } from '@radix-ui/themes'`                          | Note: Different casing! |
| **Structure** | Single `<textarea>` element                                     | `<TextArea>` component                                                 | Direct replacement      |
| **Variants**  | None (single style)                                             | `variant="surface"`, `variant="classic"`, `variant="soft"`             | Choose variant          |
| **Sizes**     | Fixed                                                           | `size="1"`, `size="2"`, `size="3"`                                     | Use size prop           |
| **Resize**    | Not controlled                                                  | `resize="vertical"`, `resize="both"`, `resize="none"`                  | Use resize prop         |
| **Example**   | `<Textarea placeholder="Description..." />`                     | `<TextArea size="2" variant="surface" placeholder="Description..." />` |                         |

**Risks:** Low - direct replacement

---

### Select

| Aspect        | Current (Tailwind)                                                                                                   | Target (Radix Themes)                                      | Migration Notes         |
| ------------- | -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- | ----------------------- |
| **File**      | `src/components/foundation/primitives/select.tsx`                                                                    | N/A - use `@radix-ui/themes`                               | Delete custom component |
| **Import**    | `import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/foundation/primitives'` | `import { Select } from '@radix-ui/themes'`                | Simplified import       |
| **Structure** | Multi-part with primitive names                                                                                      | Similar multi-part structure                               | API similar             |
| **Variants**  | None (single style)                                                                                                  | `variant="surface"`, `variant="classic"`, `variant="soft"` | Choose variant          |
| **Sizes**     | `default`, `sm`                                                                                                      | `size="1"`, `size="2"`, `size="3"`                         | Use size prop           |
| **Example**   | See below                                                                                                            | See below                                                  |                         |

**Migration Pattern:**

```tsx
// Current
<Select>
  <SelectTrigger>
    <SelectValue placeholder="Choose..." />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="1">Option 1</SelectItem>
    <SelectItem value="2">Option 2</SelectItem>
  </SelectContent>
</Select>

// Target
<Select.Root defaultValue="1" size="2">
  <Select.Trigger variant="surface" />
  <Select.Content>
    <Select.Item value="1">Option 1</Select.Item>
    <Select.Item value="2">Option 2</Select.Item>
  </Select.Content>
</Select.Root>
```

**Risks:** Low - similar API

---

### Checkbox

| Aspect        | Current (Tailwind)                                              | Target (Radix Themes)                                      | Migration Notes         |
| ------------- | --------------------------------------------------------------- | ---------------------------------------------------------- | ----------------------- |
| **File**      | `src/components/foundation/primitives/checkbox.tsx`             | N/A - use `@radix-ui/themes`                               | Delete custom component |
| **Import**    | `import { Checkbox } from '@/components/foundation/primitives'` | `import { Checkbox } from '@radix-ui/themes'`              | Update import path      |
| **Structure** | Wraps Radix primitive                                           | Radix Themes component                                     | Direct replacement      |
| **Variants**  | None (single style)                                             | `variant="surface"`, `variant="classic"`, `variant="soft"` | Choose variant          |
| **Sizes**     | Fixed                                                           | `size="1"`, `size="2"`, `size="3"`                         | Use size prop           |
| **Example**   | `<Checkbox checked={true} />`                                   | `<Checkbox size="2" variant="surface" defaultChecked />`   |                         |

**Risks:** Low - direct replacement

---

### Radio Group

| Aspect        | Current (Tailwind)                                                                | Target (Radix Themes)                                      | Migration Notes         |
| ------------- | --------------------------------------------------------------------------------- | ---------------------------------------------------------- | ----------------------- |
| **File**      | `src/components/foundation/primitives/radio-group.tsx`                            | N/A - use `@radix-ui/themes`                               | Delete custom component |
| **Import**    | `import { RadioGroup, RadioGroupItem } from '@/components/foundation/primitives'` | `import { RadioGroup } from '@radix-ui/themes'`            | Update import           |
| **Structure** | Multi-part: RadioGroup, RadioGroupItem                                            | `<RadioGroup.Root>` + `<RadioGroup.Item>`                  | Similar API             |
| **Variants**  | None (single style)                                                               | `variant="surface"`, `variant="classic"`, `variant="soft"` | Choose variant          |
| **Sizes**     | Fixed                                                                             | `size="1"`, `size="2"`, `size="3"`                         | Use size prop           |
| **Example**   | See below                                                                         | See below                                                  |                         |

**Migration Pattern:**

```tsx
// Current
<RadioGroup defaultValue="1">
  <RadioGroupItem value="1" id="r1" />
  <RadioGroupItem value="2" id="r2" />
</RadioGroup>

// Target
<RadioGroup.Root defaultValue="1" size="2" variant="surface">
  <RadioGroup.Item value="1" />
  <RadioGroup.Item value="2" />
</RadioGroup.Root>
```

**Risks:** Low - similar API

---

### Tabs

| Aspect        | Current (Tailwind)                                                                              | Target (Radix Themes)                                               | Migration Notes         |
| ------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- | ----------------------- |
| **File**      | `src/components/foundation/primitives/tabs.tsx`                                                 | N/A - use `@radix-ui/themes`                                        | Delete custom component |
| **Import**    | `import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/foundation/primitives'` | `import { Tabs } from '@radix-ui/themes'`                           | Update import           |
| **Structure** | Multi-part: Tabs, TabsList, TabsTrigger, TabsContent                                            | `<Tabs.Root>` + `<Tabs.List>` + `<Tabs.Trigger>` + `<Tabs.Content>` | Same structure          |
| **Variants**  | None (single style)                                                                             | N/A (tabs don't have variants)                                      |                         |
| **Sizes**     | Fixed                                                                                           | N/A (tabs auto-size)                                                |                         |
| **Example**   | See below                                                                                       | See below                                                           |                         |

**Migration Pattern:**

```tsx
// Current
<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content 1</TabsContent>
  <TabsContent value="tab2">Content 2</TabsContent>
</Tabs>

// Target
<Tabs.Root defaultValue="tab1">
  <Tabs.List>
    <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
    <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="tab1">Content 1</Tabs.Content>
  <Tabs.Content value="tab2">Content 2</Tabs.Content>
</Tabs.Root>
```

**Risks:** Low - nearly identical API

---

### Dialog

| Aspect        | Current (Tailwind)                                                                                                          | Target (Radix Themes)                                                                                 | Migration Notes         |
| ------------- | --------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------- |
| **File**      | `src/components/foundation/primitives/dialog.tsx`                                                                           | N/A - use `@radix-ui/themes`                                                                          | Delete custom component |
| **Import**    | `import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from '@/components/foundation/primitives'` | `import { Dialog } from '@radix-ui/themes'`                                                           | Update import           |
| **Structure** | Multi-part with primitives                                                                                                  | `<Dialog.Root>` + `<Dialog.Trigger>` + `<Dialog.Content>` + `<Dialog.Title>` + `<Dialog.Description>` | Same structure          |
| **Variants**  | None                                                                                                                        | N/A                                                                                                   |                         |
| **Sizes**     | Fixed                                                                                                                       | N/A (responsive by default)                                                                           |                         |
| **Example**   | See below                                                                                                                   | See below                                                                                             |                         |

**Migration Pattern:**

```tsx
// Current
<Dialog>
  <DialogTrigger asChild>
    <Button>Open</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
      <DialogDescription>Description</DialogDescription>
    </DialogHeader>
    {/* Content */}
  </DialogContent>
</Dialog>

// Target
<Dialog.Root>
  <Dialog.Trigger>
    <Button>Open</Button>
  </Dialog.Trigger>
  <Dialog.Content>
    <Dialog.Title>Title</Dialog.Title>
    <Dialog.Description>Description</Dialog.Description>
    {/* Content */}
  </Dialog.Content>
</Dialog.Root>
```

**Risks:** Low - similar API, remove DialogHeader wrapper

---

### Sheet (Mobile Drawer)

| Aspect            | Current (Tailwind)                                                                       | Target (Radix Themes)                                      | Migration Notes                  |
| ----------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------- | -------------------------------- |
| **File**          | `src/components/foundation/primitives/sheet.tsx`                                         | **NOT AVAILABLE in Radix Themes**                          | Need alternative                 |
| **Import**        | `import { Sheet, SheetTrigger, SheetContent } from '@/components/foundation/primitives'` | Use `Dialog` or keep custom implementation                 |                                  |
| **Alternative 1** |                                                                                          | Use Radix Themes `Dialog` with custom positioning          | Requires custom CSS for slide-in |
| **Alternative 2** |                                                                                          | Keep Radix Primitive `@radix-ui/react-dialog` + custom CSS | Use Themes tokens for styling    |
| **Alternative 3** |                                                                                          | Use third-party library like `vaul`                        | Already in dependencies          |
| **Example**       | See below                                                                                | See below                                                  |                                  |

**Migration Pattern (using Dialog):**

```tsx
// Current
<Sheet>
  <SheetTrigger>
    <Button>Open</Button>
  </SheetTrigger>
  <SheetContent side="left">
    Content
  </SheetContent>
</Sheet>

// Target (Option 1: Dialog with custom positioning)
<Dialog.Root>
  <Dialog.Trigger>
    <Button>Open</Button>
  </Dialog.Trigger>
  <Dialog.Content className="custom-sheet-left">
    Content
  </Dialog.Content>
</Dialog.Root>

// Target (Option 2: Keep primitive + Themes styling)
// Keep existing Sheet implementation but use Radix Themes tokens
```

**Recommendation:** Keep custom Sheet implementation using Radix Primitives + Radix Themes design tokens (CSS variables).

**Risks:** Moderate - no direct Radix Themes equivalent, need custom solution

---

### Tooltip

| Aspect        | Current (Tailwind)                                                                                              | Target (Radix Themes)                                                        | Migration Notes         |
| ------------- | --------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ----------------------- |
| **File**      | `src/components/foundation/primitives/tooltip.tsx`                                                              | N/A - use `@radix-ui/themes`                                                 | Delete custom component |
| **Import**    | `import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@/components/foundation/primitives'` | `import { Tooltip } from '@radix-ui/themes'`                                 | Update import           |
| **Structure** | Multi-part: TooltipProvider, Tooltip, TooltipTrigger, TooltipContent                                            | `<Tooltip>` + `<Tooltip.Trigger>` + `<Tooltip.Content>` (no provider needed) | Simplified              |
| **Provider**  | Requires TooltipProvider wrapper                                                                                | Built-in to Theme component                                                  | Remove provider         |
| **Example**   | See below                                                                                                       | See below                                                                    |                         |

**Migration Pattern:**

```tsx
// Current
<TooltipProvider>
  <Tooltip>
    <TooltipTrigger>
      <Button>Hover</Button>
    </TooltipTrigger>
    <TooltipContent>
      Tooltip text
    </TooltipContent>
  </Tooltip>
</TooltipProvider>

// Target
<Tooltip>
  <Tooltip.Trigger>
    <Button>Hover</Button>
  </Tooltip.Trigger>
  <Tooltip.Content>
    Tooltip text
  </Tooltip.Content>
</Tooltip>
```

**Risks:** Low - simpler API

---

### Label

| Aspect          | Current (Tailwind)                                           | Target (Radix Themes)                                                    | Migration Notes         |
| --------------- | ------------------------------------------------------------ | ------------------------------------------------------------------------ | ----------------------- |
| **File**        | `src/components/foundation/primitives/label.tsx`             | N/A - use `@radix-ui/themes`                                             | Delete custom component |
| **Import**      | `import { Label } from '@/components/foundation/primitives'` | `import { Text } from '@radix-ui/themes'` or use native `<label>`        |                         |
| **Alternative** |                                                              | Use `<Text as="label" size="2" weight="medium">Label</Text>`             | Use Text component      |
| **Example**     | `<Label htmlFor="email">Email</Label>`                       | `<Text as="label" size="2" weight="medium" htmlFor="email">Email</Text>` |                         |

**Risks:** Low - simple replacement

---

### Separator

| Aspect          | Current (Tailwind)                                               | Target (Radix Themes)                             | Migration Notes         |
| --------------- | ---------------------------------------------------------------- | ------------------------------------------------- | ----------------------- |
| **File**        | `src/components/foundation/primitives/separator.tsx`             | N/A - use `@radix-ui/themes`                      | Delete custom component |
| **Import**      | `import { Separator } from '@/components/foundation/primitives'` | `import { Separator } from '@radix-ui/themes'`    | Update import path      |
| **Structure**   | Single component                                                 | Single component                                  | Direct replacement      |
| **Sizes**       | Fixed                                                            | `size="1"` through `size="4"`                     | Use size prop           |
| **Orientation** | Supported                                                        | `orientation="horizontal"` or `"vertical"`        | Same prop               |
| **Example**     | `<Separator orientation="horizontal" />`                         | `<Separator size="4" orientation="horizontal" />` |                         |

**Risks:** None - direct replacement

---

### Breadcrumb

| Aspect          | Current (Tailwind)                                                                                | Target (Radix Themes)                     | Migration Notes    |
| --------------- | ------------------------------------------------------------------------------------------------- | ----------------------------------------- | ------------------ |
| **File**        | `src/components/foundation/primitives/breadcrumb.tsx`                                             | **NOT AVAILABLE in Radix Themes**         | Need alternative   |
| **Import**      | `import { Breadcrumb, BreadcrumbList, BreadcrumbItem } from '@/components/foundation/primitives'` | Build custom using Box/Flex + Text + Link |                    |
| **Alternative** |                                                                                                   | Use Radix Themes layout components        | Custom composition |
| **Example**     | See below                                                                                         | See below                                 |                    |

**Migration Pattern:**

```tsx
// Current
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Current</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>

// Target (custom composition)
<Flex align="center" gap="2">
  <Link href="/" size="2">Home</Link>
  <Text size="2" color="gray">/</Text>
  <Text size="2" weight="medium">Current</Text>
</Flex>
```

**Recommendation:** Create custom Breadcrumb component using Radix Themes primitives.

**Risks:** Moderate - need custom implementation

---

## 2. Layout Components Mapping

### Navigation.tsx

| Aspect           | Current (Tailwind)                                                                | Target (Radix Themes)                                                     | Migration Notes                |
| ---------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------ |
| **File**         | `src/components/layout/Navigation.tsx`                                            | Keep but refactor internals                                               | Rewrite with Themes components |
| **Structure**    | `<nav>` + Tailwind utilities                                                      | `<Box as="nav">` + layout props                                           | Use Box for structure          |
| **Container**    | `<div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">` | `<Container size="4"><Flex align="center" justify="between" p="4">`       | Use Container + Flex           |
| **Logo**         | `<Link to="/" className="flex items-center gap-2">`                               | `<Link href="/" asChild><Flex align="center" gap="2">`                    | Use Flex for logo              |
| **Menu**         | `<div className="hidden lg:flex items-center gap-8">`                             | `<Flex align="center" gap="6" display={{ initial: 'none', lg: 'flex' }}>` | Responsive Flex                |
| **Links**        | Conditional Tailwind classes                                                      | `<Link size="2" weight="medium" color={isActive ? 'blue' : 'gray'}>`      | Use Link component             |
| **Theme Toggle** | Custom button with Tailwind                                                       | `<Button variant="ghost" size="2">` or custom IconButton                  | Use Button                     |
| **Example**      | See below                                                                         | See below                                                                 |                                |

**Migration Pattern:**

```tsx
// Current
<nav className="w-full border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 sticky top-0 z-50">
  <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
    <Link to="/" className="flex items-center gap-2">
      <span className="text-lg font-medium">Career Topologies</span>
    </Link>
    <div className="hidden lg:flex items-center gap-8">
      {links.map(link => (
        <Link key={link.href} to={link.href} className={...}>
          {link.label}
        </Link>
      ))}
    </div>
  </div>
</nav>

// Target
<Box asChild position="sticky" style={{ top: 0, zIndex: 50 }}>
  <nav>
    <Container size="4">
      <Flex align="center" justify="between" p="4">
        <Link href="/" asChild>
          <Flex align="center" gap="2">
            <Text size="4" weight="medium">Career Topologies</Text>
          </Flex>
        </Link>
        <Flex align="center" gap="6" display={{ initial: 'none', lg: 'flex' }}>
          {links.map(link => (
            <Link key={link.href} href={link.href} size="2" weight="medium">
              {link.label}
            </Link>
          ))}
        </Flex>
      </Flex>
    </Container>
  </nav>
</Box>
```

**Risks:** Moderate - complex responsive behavior, sticky positioning

---

### Footer.tsx

| Aspect        | Current (Tailwind)                                                       | Target (Radix Themes)                                         | Migration Notes                |
| ------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------- | ------------------------------ |
| **File**      | `src/components/layout/Footer.tsx`                                       | Keep but refactor internals                                   | Rewrite with Themes components |
| **Structure** | `<footer>` + grid layout                                                 | `<Box as="footer">` + Grid                                    | Use Grid for columns           |
| **Container** | `<div className="max-w-6xl mx-auto px-6 py-12">`                         | `<Container size="4"><Box p="6">`                             | Use Container                  |
| **Grid**      | `<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">` | `<Grid columns={{ initial: '1', md: '2', lg: '4' }} gap="6">` | Responsive Grid                |
| **Headings**  | `<h3 className="text-sm font-semibold">`                                 | `<Heading size="2" weight="bold">`                            | Use Heading                    |
| **Links**     | `<a className="text-sm text-muted-foreground hover:text-foreground">`    | `<Link size="2" color="gray">`                                | Use Link                       |
| **Text**      | `<p className="text-sm text-muted-foreground">`                          | `<Text size="2" color="gray">`                                | Use Text                       |

**Risks:** Low - straightforward grid layout

---

### MobileDrawer.tsx

| Aspect         | Current (Tailwind)                       | Target (Radix Themes)                                | Migration Notes             |
| -------------- | ---------------------------------------- | ---------------------------------------------------- | --------------------------- |
| **File**       | `src/components/layout/MobileDrawer.tsx` | Keep but refactor internals                          | Need custom Sheet or Dialog |
| **Structure**  | Uses Sheet primitive                     | Keep Sheet primitive OR use Dialog                   | Sheet not in Themes         |
| **Content**    | Tailwind-styled drawer                   | Use Box/Flex for layout                              | Use layout components       |
| **Menu Items** | Tailwind button classes                  | `<Button variant="ghost" justify="start">` or custom | Use Button or Link          |

**Recommendation:** Keep Sheet primitive from `@radix-ui/react-dialog`, style with Radix Themes tokens.

**Risks:** Moderate - Sheet not in Themes, need custom solution

---

### BreadcrumbNavigation.tsx

| Aspect        | Current (Tailwind)                               | Target (Radix Themes)                      | Migration Notes         |
| ------------- | ------------------------------------------------ | ------------------------------------------ | ----------------------- |
| **File**      | `src/components/layout/BreadcrumbNavigation.tsx` | Keep but refactor internals                | Custom breadcrumb       |
| **Structure** | Uses Breadcrumb primitive                        | Custom composition with Flex + Link + Text | No Breadcrumb in Themes |
| **Container** | `<div className="max-w-4xl mx-auto px-6 pt-8">`  | `<Container size="3"><Box pt="6">`         | Use Container           |
| **Example**   | See Breadcrumb mapping above                     | See Breadcrumb mapping above               |                         |

**Risks:** Moderate - need custom implementation

---

## 3. Common Components Mapping

### Heading.tsx

| Aspect       | Current (Tailwind)                                     | Target (Radix Themes)                                    | Migration Notes    |
| ------------ | ------------------------------------------------------ | -------------------------------------------------------- | ------------------ |
| **File**     | `src/components/common/Heading.tsx`                    | **DELETE - use Radix Themes Heading**                    | Replace everywhere |
| **Import**   | `import { Heading } from '@/components/common'`        | `import { Heading } from '@radix-ui/themes'`             | Update imports     |
| **Levels**   | `level={1-6}` prop → `<h1>` through `<h6>`             | `as="h1"` through `as="h6"`                              | Change prop name   |
| **Variants** | `default`, `primary`, `secondary`, `muted`             | Use `color` prop                                         | Map variants       |
| **Sizes**    | Responsive Tailwind classes                            | `size={1-9}` prop + responsive objects                   | Use size scale     |
| **Example**  | `<Heading level="2" variant="primary">Title</Heading>` | `<Heading as="h2" size="6" color="blue">Title</Heading>` |                    |

**Variant Mapping:**

- `default` → No color prop (uses foreground)
- `primary` → `color="blue"` (or accent color)
- `secondary` → `color="gray"`
- `muted` → `color="gray"` + lower opacity

**Risks:** Low - direct replacement

---

### Text.tsx

| Aspect       | Current (Tailwind)                                          | Target (Radix Themes)                             | Migration Notes    |
| ------------ | ----------------------------------------------------------- | ------------------------------------------------- | ------------------ |
| **File**     | `src/components/common/Text.tsx`                            | **DELETE - use Radix Themes Text**                | Replace everywhere |
| **Import**   | `import { Text } from '@/components/common'`                | `import { Text } from '@radix-ui/themes'`         | Update imports     |
| **Variants** | `body`, `caption`, `small`, `muted`                         | Use `size` and `color` props                      | Map to size/color  |
| **Sizes**    | Fixed per variant                                           | `size={1-9}` prop                                 | Use size scale     |
| **Example**  | `<Text variant="caption" color="muted">Caption text</Text>` | `<Text size="2" color="gray">Caption text</Text>` |                    |

**Variant Mapping:**

- `body` → `size="3"`
- `caption` → `size="2"`
- `small` → `size="1"`
- `muted` → `color="gray"`

**Risks:** Low - direct replacement

---

### FeatureCard.tsx

| Aspect          | Current (Tailwind)                      | Target (Radix Themes)                 | Migration Notes          |
| --------------- | --------------------------------------- | ------------------------------------- | ------------------------ |
| **File**        | `src/components/common/FeatureCard.tsx` | Keep but refactor internals           | Rewrite with Themes Card |
| **Structure**   | Uses custom Card primitive              | Use Radix Themes Card                 | Replace Card             |
| **Icon**        | Lucide icon with Tailwind color classes | Icon with `color` prop or Box wrapper | Use color prop           |
| **Title**       | Custom Heading component                | Radix Themes Heading                  | Replace Heading          |
| **Description** | Custom Text component                   | Radix Themes Text                     | Replace Text             |
| **Example**     | See below                               | See below                             |                          |

**Migration Pattern:**

```tsx
// Current
<FeatureCard
  icon={BookOpen}
  iconColor="blue"
  title="Documentation"
  description="Comprehensive guides..."
  variant="outline"
/>

// Target
<Card size="2" variant="surface">
  <Flex direction="column" gap="4" p="4">
    <Box>
      <BookOpen className="w-8 h-8" color="var(--accent-9)" />
    </Box>
    <Box>
      <Heading size="4" mb="2">Documentation</Heading>
      <Text size="2" color="gray">Comprehensive guides...</Text>
    </Box>
  </Flex>
</Card>
```

**Risks:** Low - straightforward refactor

---

### LoadingSpinner.tsx

| Aspect             | Current (Tailwind)                         | Target (Radix Themes)                        | Migration Notes         |
| ------------------ | ------------------------------------------ | -------------------------------------------- | ----------------------- |
| **File**           | `src/components/common/LoadingSpinner.tsx` | Keep OR use Button loading state             | Custom component        |
| **Alternative**    |                                            | Use `<Spinner>` if available OR keep custom  | Check Radix Themes docs |
| **Implementation** | Lucide Loader2 + Tailwind animate-spin     | Use Radix Themes Spinner component OR custom |                         |

**Note:** Radix Themes has a `<Spinner>` component (undocumented in excerpts). If available, use it. Otherwise, keep custom implementation with Themes colors.

**Risks:** Low - simple component

---

### EmptyState.tsx

| Aspect        | Current (Tailwind)                       | Target (Radix Themes)                | Migration Notes       |
| ------------- | ---------------------------------------- | ------------------------------------ | --------------------- |
| **File**      | `src/components/common/EmptyState.tsx`   | Keep but refactor internals          | Custom composition    |
| **Structure** | Tailwind flex layout + custom components | Flex + Box + Heading + Text + Button | Use Themes components |
| **Example**   | See below                                | See below                            |                       |

**Migration Pattern:**

```tsx
// Current
<EmptyState
  icon={Inbox}
  title="No items found"
  description="Try adjusting your filters"
  action={
    <Button onClick={reset}>Reset Filters</Button>
  }
/>

// Target
<Flex direction="column" align="center" justify="center" gap="4" p="8">
  <Inbox className="w-16 h-16" color="var(--gray-9)" />
  <Heading size="5" align="center">No items found</Heading>
  <Text size="3" color="gray" align="center">Try adjusting your filters</Text>
  <Button onClick={reset}>Reset Filters</Button>
</Flex>
```

**Risks:** Low - simple composition

---

## 4. Sections & Pages Mapping

### General Pattern

Most sections and pages use composition of primitives and common components. The migration strategy is:

1. **Replace layout divs** with Box/Flex/Grid/Container
2. **Replace custom Heading/Text** with Radix Themes equivalents
3. **Replace custom Card/Button** with Radix Themes equivalents
4. **Preserve complex layouts** using Box/Flex/Grid composition

**Example: Section Container**

```tsx
// Current
<section className="bg-muted/30 py-16">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-3xl text-primary mb-12 text-center">
      Section Title
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Cards */}
    </div>
  </div>
</section>

// Target
<Section size="3" style={{ backgroundColor: 'var(--gray-a2)' }}>
  <Container size="4">
    <Heading size="7" align="center" mb="6" color="blue">
      Section Title
    </Heading>
    <Grid columns={{ initial: '1', md: '2', lg: '3' }} gap="4">
      {/* Cards */}
    </Grid>
  </Container>
</Section>
```

---

### HeroSection.tsx

| Migration Area  | Current                                | Target                                 | Notes                        |
| --------------- | -------------------------------------- | -------------------------------------- | ---------------------------- |
| **Container**   | Tailwind grid + responsive classes     | `<Grid columns="2">` with responsive   | Complex responsive grid      |
| **Heading**     | Custom Heading + Tailwind size classes | `<Heading size="9">`                   | Large heading                |
| **Description** | Custom Text + Tailwind classes         | `<Text size="4" color="gray">`         | Body text                    |
| **Buttons**     | Custom Button primitive                | Radix Themes Button                    | Replace buttons              |
| **Image**       | Custom ImageWithFallback               | Keep custom OR use `<img>`             | No Image component in Themes |
| **Effects**     | Tailwind gradients/blur                | CSS custom properties or inline styles | Custom styling               |

**Risks:** Moderate - complex responsive layout, visual effects

---

### UnifiedRelatedPages.tsx

| Migration Area    | Current                        | Target                                                | Notes               |
| ----------------- | ------------------------------ | ----------------------------------------------------- | ------------------- |
| **Section**       | `<section className="...">`    | `<Section size="3">`                                  | Vertical spacing    |
| **Grid**          | Tailwind responsive grid       | `<Grid columns={{ initial: '1', md: '2', lg: '3' }}>` | Card grid           |
| **Cards**         | Tailwind-styled divs           | `<Card>` with Box/Flex internals                      | Use Card component  |
| **Icons**         | Lucide icons + Tailwind colors | Icons with color vars                                 | Use CSS vars        |
| **Hover Effects** | Tailwind group-hover           | CSS custom or data attributes                         | May need custom CSS |

**Risks:** Low - straightforward Card grid

---

### LeadershipReadinessFlowchart.tsx

| Migration Area | Current                         | Target                                       | Notes                 |
| -------------- | ------------------------------- | -------------------------------------------- | --------------------- |
| **Section**    | Complex Tailwind background     | `<Section>` with custom background           | Custom styling        |
| **Flowchart**  | Absolute positioning + Tailwind | Box/Flex with absolute positioning           | Complex layout        |
| **Step Cards** | Heavily Tailwind-styled         | Card with custom internals                   | Use Card + custom CSS |
| **Connectors** | Tailwind positioning + borders  | Custom CSS or SVG                            | Complex visual        |
| **Tooltips**   | Custom Tooltip primitive        | Radix Themes Tooltip                         | Replace Tooltip       |
| **Responsive** | lg:hidden, lg:block patterns    | `display={{ initial: 'block', lg: 'none' }}` | Responsive props      |

**Risks:** High - most complex component, may need significant custom CSS

---

## 5. Components NOT in Radix Themes

These components require custom implementations:

| Component                | Current Implementation        | Recommended Approach                 | Complexity |
| ------------------------ | ----------------------------- | ------------------------------------ | ---------- |
| **Sheet (Drawer)**       | Radix Primitive + Tailwind    | Keep Radix Primitive + Themes tokens | Moderate   |
| **Breadcrumb**           | Custom HTML + Tailwind        | Custom Flex/Link/Text composition    | Low        |
| **ImageWithFallback**    | Custom React component        | Keep custom component                | Low        |
| **Flowchart Connectors** | Tailwind absolute positioning | Custom CSS with Themes tokens        | Moderate   |
| **Theme Toggle**         | Custom button                 | Custom IconButton with Themes Button | Low        |

---

## Summary Table: Migration Complexity

| Category        | Components                                      | Radix Themes Equivalent                | Complexity | Risk     |
| --------------- | ----------------------------------------------- | -------------------------------------- | ---------- | -------- |
| **Buttons**     | Button                                          | ✅ Direct                              | Low        | Low      |
| **Forms**       | Input, Textarea, Select, Checkbox, Radio, Label | ✅ Direct (TextField, TextArea, etc.)  | Low        | Low      |
| **Cards**       | Card (multi-part)                               | ✅ Card (simplified)                   | Moderate   | Moderate |
| **Typography**  | Heading, Text                                   | ✅ Heading, Text                       | Low        | Low      |
| **Badges**      | Badge                                           | ✅ Badge                               | Low        | Low      |
| **Navigation**  | Tabs                                            | ✅ Tabs                                | Low        | Low      |
| **Overlays**    | Dialog, Tooltip                                 | ✅ Dialog, Tooltip                     | Low        | Low      |
| **Separators**  | Separator                                       | ✅ Separator                           | Low        | Low      |
| **Drawers**     | Sheet                                           | ❌ Custom needed                       | Moderate   | Moderate |
| **Breadcrumbs** | Breadcrumb                                      | ❌ Custom composition                  | Moderate   | Low      |
| **Layout**      | div/flex/grid                                   | ✅ Box, Flex, Grid, Container, Section | Moderate   | Moderate |
| **Sections**    | Complex layouts                                 | ✅ Composition                         | High       | Moderate |

---

**Next Steps:**

1. Define target architecture
2. Create phased migration plan
3. Write detailed migration steps
