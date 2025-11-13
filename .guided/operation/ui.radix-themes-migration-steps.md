# Radix Themes Migration: Step-by-Step Operational Guide

**Date:** November 6, 2025  
**Project:** CareerTopologies Frontend  
**Purpose:** Detailed, executable steps for migrating from Tailwind + Primitives to Radix Themes

---

## Overview

This document provides concrete, step-by-step instructions for executing the Radix Themes migration. Each step includes:

- Exact commands to run
- File-level changes to make
- Testing checkpoints
- Rollback procedures

**Prerequisites:**

- ✅ Git repository is clean (commit or stash changes)
- ✅ `pnpm install` has been run
- ✅ `pnpm dev` works (current state)
- ✅ You have reviewed the migration plan (`ui.radix-themes-migration-plan.md`)
- ✅ You have reviewed the component mapping (`ui.radix-themes-component-mapping.md`)

**Working Branch:**

```powershell
git checkout -b feat/radix-themes-migration
git push -u origin feat/radix-themes-migration
```

---

## Phase 0: Setup Radix Themes

**Duration:** 1 hour  
**Goal:** Install Radix Themes and wrap app with Theme component (without breaking current build)

### Step 0.1: Install Radix Themes Package

```powershell
# Install Radix Themes
pnpm add @radix-ui/themes

# Verify installation
cat package.json | Select-String "@radix-ui/themes"
```

**Expected Output:**

```
"@radix-ui/themes": "^3.1.0" (or latest version)
```

### Step 0.2: Import Radix Themes CSS

**File:** `src/main.tsx`

**Change:**

```tsx
// At the top of the file, BEFORE other CSS imports
import '@radix-ui/themes/styles.css';
```

**Full file should look like:**

```tsx
import '@radix-ui/themes/styles.css'; // NEW
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/globals.css'; // Tailwind CSS (will be removed in Phase 5)
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

### Step 0.3: Wrap App with Theme Component

**File:** `src/main.tsx`

**Change:**

```tsx
import '@radix-ui/themes/styles.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/globals.css';
import App from './App.tsx';
import { Theme } from '@radix-ui/themes'; // NEW

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Theme accentColor="sky" grayColor="gray" radius="large" scaling="110%">
      <App />
    </Theme>
  </StrictMode>
);
```

### Step 0.4: Test Phase 0

**Checkpoint 1: Type Check**

```powershell
pnpm tsc --noEmit
```

**Expected:** No errors

**Checkpoint 2: Build**

```powershell
pnpm build
```

**Expected:** Build succeeds (may see warnings about unused CSS)

**Checkpoint 3: Run Dev Server**

```powershell
pnpm dev
```

**Expected:** Server starts, app loads in browser

**Checkpoint 4: Visual Inspection**

- Open http://localhost:5173
- App should render (may look slightly different - both Tailwind and Radix Themes CSS are loaded)
- No console errors
- All pages accessible

### Step 0.5: Commit Phase 0

```powershell
git add .
git commit -m "Phase 0: Install Radix Themes and wrap app with Theme component"
git push
```

**Rollback (if needed):**

```powershell
git reset --hard HEAD~1
pnpm install
```

---

## Phase 1: Core Layout & Typography

**Duration:** 3-4 hours  
**Goal:** Replace layout components (Navigation, Footer, Breadcrumb) and typography (Heading, Text)

### Step 1.1: Migrate App.tsx Root Structure

**File:** `src/App.tsx`

**Current Pattern:**

```tsx
<div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
  <Navigation />
  <main id="main-content">{renderPage()}</main>
  <Footer />
  <Toaster />
</div>
```

**Target Pattern:**

```tsx
import { Box } from '@radix-ui/themes';

<Box minHeight="100vh">
  <Navigation />
  <Box asChild>
    <main id="main-content">{renderPage()}</main>
  </Box>
  <Footer />
  <Toaster />
</Box>;
```

**Note:** Background color and text color are now controlled by Theme component (light/dark mode).

### Step 1.2: Migrate Navigation.tsx

**File:** `src/components/layout/Navigation.tsx`

**Major Changes:**

1. Replace `<nav className="...">` with `<Box as="nav" position="sticky">`
2. Replace container div with `<Container>` + `<Flex>`
3. Replace logo wrapper with `<Flex>`
4. Replace menu div with `<Flex>` (responsive)
5. Update theme toggle button

**Before (sample):**

```tsx
<nav className="w-full border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 sticky top-0 z-50">
  <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
    <Link to="/" className="flex items-center gap-2">
      <span className="text-lg font-medium">Career Topologies</span>
    </Link>
    <div className="hidden lg:flex items-center gap-8">
      {navigationLinks.map(...)}
    </div>
  </div>
</nav>
```

**After:**

```tsx
import {
  Box,
  Container,
  Flex,
  Text,
  Link as RadixLink,
  Button,
} from '@radix-ui/themes';

<Box asChild position="sticky" style={{ top: 0, zIndex: 50 }}>
  <nav>
    <Container size="4">
      <Flex
        align="center"
        justify="between"
        p="4"
        style={{ borderBottom: '1px solid var(--gray-6)' }}
      >
        {/* Logo */}
        <Link to="/" asChild>
          <RadixLink asChild>
            <Flex align="center" gap="2">
              <img
                src={isDark ? logoWhite : logoBlack}
                alt="Career Topologies"
                style={{ height: '1.75rem' }}
              />
              <Text size="4" weight="medium">
                Career Topologies
              </Text>
            </Flex>
          </RadixLink>
        </Link>

        {/* Desktop Menu */}
        <Flex align="center" gap="6" display={{ initial: 'none', lg: 'flex' }}>
          {navigationLinks.slice(1).map((link) => (
            <Link key={link.href} to={link.href} asChild>
              <RadixLink
                size="2"
                weight="medium"
                color={currentPath === link.href ? 'blue' : 'gray'}
              >
                {link.label}
              </RadixLink>
            </Link>
          ))}

          <LanguageSelector />

          <Button variant="ghost" size="2" onClick={toggleTheme}>
            {isDark ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </Button>
        </Flex>

        {/* Mobile Menu */}
        <Flex align="center" gap="2" display={{ initial: 'flex', lg: 'none' }}>
          <LanguageSelector />
          <Button variant="ghost" size="2" onClick={toggleTheme}>
            {isDark ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </Button>
          <MobileDrawer
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
          />
        </Flex>
      </Flex>
    </Container>
  </nav>
</Box>;
```

**Note:** You'll need to handle the `Link` component routing. Radix Themes `Link` can use `asChild` to wrap your custom router Link.

### Step 1.3: Migrate Footer.tsx

**File:** `src/components/layout/Footer.tsx`

**Major Changes:**

1. Replace footer div with `<Box as="footer">`
2. Replace container with `<Container>`
3. Replace grid with `<Grid columns="...">`
4. Replace headings with Radix Themes `<Heading>`
5. Replace text with Radix Themes `<Text>`
6. Replace links with Radix Themes `<Link>`

**Before (sample):**

```tsx
<footer className="border-t border-border bg-background">
  <div className="max-w-6xl mx-auto px-6 py-12">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
      <div>
        <h3 className="text-sm font-semibold">About</h3>
        <p className="text-sm text-muted-foreground">...</p>
      </div>
    </div>
  </div>
</footer>
```

**After:**

```tsx
import {
  Box,
  Container,
  Grid,
  Heading,
  Text,
  Link,
  Flex,
} from '@radix-ui/themes';

<Box asChild style={{ borderTop: '1px solid var(--gray-6)' }}>
  <footer>
    <Container size="4">
      <Box p="6">
        <Grid columns={{ initial: '1', md: '2', lg: '4' }} gap="6">
          <Box>
            <Heading size="2" mb="3">
              About
            </Heading>
            <Text size="2" color="gray">
              ...
            </Text>
          </Box>
          {/* Repeat for other sections */}
        </Grid>
      </Box>
    </Container>
  </footer>
</Box>;
```

### Step 1.4: Migrate BreadcrumbNavigation.tsx

**File:** `src/components/layout/BreadcrumbNavigation.tsx`

**Current:** Uses custom Breadcrumb primitive  
**Target:** Custom composition with Flex/Link/Text

**Before:**

```tsx
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
```

**After:**

```tsx
import { Container, Box, Flex, Link, Text } from '@radix-ui/themes';

<Container size="3">
  <Box pt="6" px="6">
    <Flex align="center" gap="2" style={{ fontSize: '0.75rem' }}>
      <Link
        href="/"
        size="1"
        color="gray"
        style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}
      >
        <Home className="w-3 h-3" />
        Home
      </Link>
      <Text size="1" color="gray">
        /
      </Text>
      <Text size="1" weight="medium">
        Current
      </Text>
    </Flex>
  </Box>
</Container>;
```

### Step 1.5: Replace All Heading Component Usages

**Search Pattern:**

```powershell
# Find all files importing custom Heading
Get-ChildItem -Path src -Recurse -Include *.tsx,*.ts | Select-String "from '@/components/common/Heading'" -List
```

**For each file:**

1. **Replace import:**

   ```tsx
   // Before
   import { Heading } from '@/components/common/Heading';

   // After
   import { Heading } from '@radix-ui/themes';
   ```

2. **Update prop mappings:**

   - `level="1"` → `as="h1"`
   - `level="2"` → `as="h2"`
   - Custom `size` → Radix Themes `size` (1-9 scale)
   - `variant="primary"` → `color="blue"` (or remove for default)
   - `variant="muted"` → `color="gray"`
   - `align="center"` → `align="center"` (same)

   **Example:**

   ```tsx
   // Before
   <Heading level="2" variant="primary" align="center">
     Title
   </Heading>

   // After
   <Heading as="h2" size="7" color="blue" align="center">
     Title
   </Heading>
   ```

3. **Size mapping guide:**
   - H1 (page titles): `size="9"` or `size="8"`
   - H2 (section titles): `size="7"` or `size="6"`
   - H3 (subsection): `size="5"` or `size="4"`
   - H4 (card headings): `size="4"` or `size="3"`

**Affected Files (estimate ~20-25):**

- All pages (`src/components/pages/*`)
- All sections (`src/components/sections/*`)
- Common components (FeatureCard, EmptyState)

### Step 1.6: Replace All Text Component Usages

**Search Pattern:**

```powershell
# Find all files importing custom Text
Get-ChildItem -Path src -Recurse -Include *.tsx,*.ts | Select-String "from '@/components/common/Text'" -List
```

**For each file:**

1. **Replace import:**

   ```tsx
   // Before
   import { Text } from '@/components/common/Text';

   // After
   import { Text } from '@radix-ui/themes';
   ```

2. **Update prop mappings:**

   - `variant="body"` → `size="3"`
   - `variant="caption"` → `size="2"`
   - `variant="small"` → `size="1"`
   - `variant="muted"` → `color="gray"` + `size="3"`
   - `as="p"` → `as="p"` (same)

   **Example:**

   ```tsx
   // Before
   <Text variant="caption" color="muted">
     Caption text
   </Text>

   // After
   <Text size="2" color="gray">
     Caption text
   </Text>
   ```

**Affected Files (estimate ~30-40):**

- All pages
- All sections
- Common components
- Layout components (Footer)

### Step 1.7: Test Phase 1

**Checkpoint 1: Type Check**

```powershell
pnpm tsc --noEmit
```

**Expected:** No errors (check for missing imports)

**Checkpoint 2: Build**

```powershell
pnpm build
```

**Expected:** Build succeeds

**Checkpoint 3: Run Dev Server**

```powershell
pnpm dev
```

**Checkpoint 4: Visual Inspection**
Open http://localhost:5173 and check:

- ✅ Navigation displays correctly (logo, links, theme toggle)
- ✅ Navigation is sticky
- ✅ Desktop menu works
- ✅ Mobile menu trigger shows on mobile
- ✅ Footer displays correctly (grid layout)
- ✅ Footer links work
- ✅ Breadcrumbs display (if on subpage)
- ✅ All headings render correctly (sizes appropriate)
- ✅ All text renders correctly (sizes appropriate)
- ✅ No broken layouts
- ✅ No console errors

**Checkpoint 5: Interaction Test**

- Click all navigation links
- Click all footer links
- Toggle theme (light/dark)
- Resize browser (test responsive)

### Step 1.8: Commit Phase 1

```powershell
git add .
git commit -m "Phase 1: Migrate layout components and typography to Radix Themes"
git push
```

**Rollback (if needed):**

```powershell
git reset --hard HEAD~1
```

---

## Phase 2: Form Inputs & Buttons

**Duration:** 2-3 hours  
**Goal:** Replace Button, TextField, TextArea, Select, Checkbox, RadioGroup with Radix Themes

### Step 2.1: Replace Button Component Usages

**Search Pattern:**

```powershell
# Find all files importing Button from primitives
Get-ChildItem -Path src -Recurse -Include *.tsx,*.ts | Select-String "from '@/components/foundation/primitives'" | Select-String "Button"
```

**For each file:**

1. **Replace import:**

   ```tsx
   // Before
   import { Button } from '@/components/foundation/primitives';

   // After
   import { Button } from '@radix-ui/themes';
   ```

2. **Update prop mappings:**

   **Variant mapping:**

   ```tsx
   // default → solid + blue
   <Button variant="default">Click</Button>
   // becomes
   <Button variant="solid" color="blue">Click</Button>

   // destructive → solid + red
   <Button variant="destructive">Delete</Button>
   // becomes
   <Button variant="solid" color="red">Delete</Button>

   // outline → outline
   <Button variant="outline">Cancel</Button>
   // becomes
   <Button variant="outline">Cancel</Button>

   // secondary → soft + gray
   <Button variant="secondary">Secondary</Button>
   // becomes
   <Button variant="soft" color="gray">Secondary</Button>

   // ghost → ghost
   <Button variant="ghost">Ghost</Button>
   // becomes
   <Button variant="ghost">Ghost</Button>

   // link → use Link or Text asChild
   <Button variant="link">Link</Button>
   // becomes
   <Link size="2" href="...">Link</Link>
   ```

   **Size mapping:**

   ```tsx
   size="sm" → size="1"
   size="default" → size="2"
   size="lg" → size="3"
   size="icon" → size="2" (or custom styling)
   ```

   **Loading state:**

   ```tsx
   // Before
   <Button loading={isLoading}>Submit</Button>

   // After (Radix Themes has native loading)
   <Button loading={isLoading}>Submit</Button>
   ```

**Affected Files (estimate ~30-40):**

- All pages
- All sections
- Layout (Navigation, Footer, MobileDrawer)
- Common (EmptyState)

### Step 2.2: Replace TextField (Input) Usages

**Search Pattern:**

```powershell
Get-ChildItem -Path src -Recurse -Include *.tsx,*.ts | Select-String "from '@/components/foundation/primitives'" | Select-String "Input"
```

**For each file:**

1. **Replace import:**

   ```tsx
   // Before
   import { Input } from '@/components/foundation/primitives';

   // After
   import { TextField } from '@radix-ui/themes';
   ```

2. **Update component:**

   ```tsx
   // Before
   <Input type="email" placeholder="Email" />

   // After
   <TextField.Root type="email" size="2" variant="surface" placeholder="Email" />
   ```

3. **With icon (optional):**
   ```tsx
   <TextField.Root size="2" variant="surface" placeholder="Search...">
     <TextField.Slot>
       <MagnifyingGlassIcon />
     </TextField.Slot>
   </TextField.Root>
   ```

**Affected Files:** Forms (if present), LanguageSelector (if uses input)

### Step 2.3: Replace TextArea Usages

**Search Pattern:**

```powershell
Get-ChildItem -Path src -Recurse -Include *.tsx,*.ts | Select-String "from '@/components/foundation/primitives'" | Select-String "Textarea"
```

**For each file:**

1. **Replace import:**

   ```tsx
   // Before
   import { Textarea } from '@/components/foundation/primitives';

   // After
   import { TextArea } from '@radix-ui/themes';
   ```

2. **Update component:**

   ```tsx
   // Before
   <Textarea placeholder="Description..." />

   // After
   <TextArea size="2" variant="surface" placeholder="Description..." resize="vertical" />
   ```

**Affected Files:** Forms (if present), Contributing page (if has feedback form)

### Step 2.4: Replace Select Usages (LanguageSelector)

**File:** `src/components/config/LanguageSelector.tsx` (if exists)

**Before (estimate):**

```tsx
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/foundation/primitives';

<Select value={language} onValueChange={setLanguage}>
  <SelectTrigger>
    <SelectValue placeholder="Language" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="en">English</SelectItem>
    <SelectItem value="pt">Português</SelectItem>
  </SelectContent>
</Select>;
```

**After:**

```tsx
import { Select } from '@radix-ui/themes';

<Select.Root value={language} onValueChange={setLanguage} size="2">
  <Select.Trigger variant="soft" />
  <Select.Content>
    <Select.Item value="en">English</Select.Item>
    <Select.Item value="pt">Português</Select.Item>
  </Select.Content>
</Select.Root>;
```

### Step 2.5: Replace Checkbox Usages (if present)

**Search Pattern:**

```powershell
Get-ChildItem -Path src -Recurse -Include *.tsx,*.ts | Select-String "from '@/components/foundation/primitives'" | Select-String "Checkbox"
```

**For each file:**

1. **Replace import:**

   ```tsx
   // Before
   import { Checkbox } from '@/components/foundation/primitives';

   // After
   import { Checkbox } from '@radix-ui/themes';
   ```

2. **Update component:**

   ```tsx
   // Before
   <Checkbox checked={isChecked} onCheckedChange={setIsChecked} />

   // After
   <Checkbox size="2" variant="surface" checked={isChecked} onCheckedChange={setIsChecked} />
   ```

### Step 2.6: Replace RadioGroup Usages (if present)

**Search Pattern:**

```powershell
Get-ChildItem -Path src -Recurse -Include *.tsx,*.ts | Select-String "from '@/components/foundation/primitives'" | Select-String "RadioGroup"
```

**For each file:**

1. **Replace import:**

   ```tsx
   // Before
   import {
     RadioGroup,
     RadioGroupItem,
   } from '@/components/foundation/primitives';

   // After
   import { RadioGroup } from '@radix-ui/themes';
   ```

2. **Update component:**

   ```tsx
   // Before
   <RadioGroup value={value} onValueChange={setValue}>
     <RadioGroupItem value="1" id="r1" />
     <RadioGroupItem value="2" id="r2" />
   </RadioGroup>

   // After
   <RadioGroup.Root value={value} onValueChange={setValue} size="2" variant="surface">
     <RadioGroup.Item value="1" />
     <RadioGroup.Item value="2" />
   </RadioGroup.Root>
   ```

### Step 2.7: Test Phase 2

**Checkpoint 1: Type Check**

```powershell
pnpm tsc --noEmit
```

**Checkpoint 2: Build**

```powershell
pnpm build
```

**Checkpoint 3: Run Dev Server**

```powershell
pnpm dev
```

**Checkpoint 4: Visual & Interaction Test**

- ✅ All buttons render correctly
- ✅ All buttons clickable
- ✅ Button variants look appropriate (solid, outline, ghost)
- ✅ Button sizes appropriate
- ✅ Loading buttons show spinner
- ✅ Language selector works (if present)
- ✅ All inputs render (if present)
- ✅ All textareas render (if present)
- ✅ Checkboxes/radios render (if present)
- ✅ No console errors

### Step 2.8: Commit Phase 2

```powershell
git add .
git commit -m "Phase 2: Migrate buttons and form inputs to Radix Themes"
git push
```

---

## Phase 3: Cards, Badges, and Common Components

**Duration:** 2-3 hours  
**Goal:** Replace Card, Badge, FeatureCard, EmptyState, LoadingSpinner

### Step 3.1: Replace Badge Usages

**Search Pattern:**

```powershell
Get-ChildItem -Path src -Recurse -Include *.tsx,*.ts | Select-String "from '@/components/foundation/primitives'" | Select-String "Badge"
```

**For each file:**

1. **Replace import:**

   ```tsx
   // Before
   import { Badge } from '@/components/foundation/primitives';

   // After
   import { Badge } from '@radix-ui/themes';
   ```

2. **Update props:**

   ```tsx
   // default → solid + blue
   <Badge variant="default">New</Badge>
   // becomes
   <Badge variant="solid" color="blue" size="2">New</Badge>

   // secondary → soft + gray
   <Badge variant="secondary">Beta</Badge>
   // becomes
   <Badge variant="soft" color="gray" size="2">Beta</Badge>

   // destructive → solid + red
   <Badge variant="destructive">Error</Badge>
   // becomes
   <Badge variant="solid" color="red" size="2">Error</Badge>

   // outline → outline
   <Badge variant="outline">Draft</Badge>
   // becomes
   <Badge variant="outline" size="2">Draft</Badge>
   ```

**Affected Files:** HeroSection, other pages/sections with badges

### Step 3.2: Replace Card Usages

**Search Pattern:**

```powershell
Get-ChildItem -Path src -Recurse -Include *.tsx,*.ts | Select-String "from '@/components/foundation/primitives'" | Select-String "Card"
```

**For each file:**

1. **Replace import:**

   ```tsx
   // Before
   import {
     Card,
     CardHeader,
     CardTitle,
     CardDescription,
     CardContent,
     CardFooter,
   } from '@/components/foundation/primitives';

   // After
   import { Card, Box, Heading, Text, Flex } from '@radix-ui/themes';
   ```

2. **Restructure Card:**

   ```tsx
   // Before
   <Card>
     <CardHeader>
       <CardTitle>Title</CardTitle>
       <CardDescription>Description</CardDescription>
     </CardHeader>
     <CardContent>
       Content here
     </CardContent>
     <CardFooter>
       Footer
     </CardFooter>
   </Card>

   // After
   <Card size="2" variant="surface">
     <Box p="4">
       <Heading size="4" mb="2">Title</Heading>
       <Text size="2" color="gray" mb="4">Description</Text>
       <Box mb="4">
         Content here
       </Box>
       <Flex justify="between">
         Footer
       </Flex>
     </Box>
   </Card>
   ```

**Affected Files (estimate ~20-30):** All sections with cards, pages with cards

**Note:** This is tedious - each Card needs manual restructuring. Be patient!

### Step 3.3: Migrate FeatureCard Component

**File:** `src/components/common/FeatureCard.tsx`

**Before (estimate):**

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/foundation/primitives';

export function FeatureCard({
  icon: Icon,
  title,
  description,
  iconColor,
}: Props) {
  return (
    <Card>
      <CardHeader>
        <Icon className={`w-8 h-8 ${iconColor}`} />
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}
```

**After:**

```tsx
import { Card, Box, Flex, Heading, Text } from '@radix-ui/themes';
import { LucideIcon } from 'lucide-react';

export interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconColor?: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  iconColor = 'var(--accent-9)',
}: FeatureCardProps) {
  return (
    <Card size="2" variant="surface">
      <Flex direction="column" gap="4" p="4">
        <Box>
          <Icon className="w-8 h-8" style={{ color: iconColor }} />
        </Box>
        <Box>
          <Heading size="4" mb="2">
            {title}
          </Heading>
          <Text size="2" color="gray">
            {description}
          </Text>
        </Box>
      </Flex>
    </Card>
  );
}
```

### Step 3.4: Migrate EmptyState Component

**File:** `src/components/common/EmptyState.tsx`

**Before (estimate):**

```tsx
import { Heading } from './Heading';
import { Text } from './Text';
import { Button } from '@/components/foundation/primitives';

export function EmptyState({ icon: Icon, title, description, action }: Props) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
      <Icon className="w-16 h-16 text-muted-foreground mb-6" />
      <Heading level="3" className="mb-3">
        {title}
      </Heading>
      <Text variant="muted" className="mb-6">
        {description}
      </Text>
      {action && <div className="mb-6">{action}</div>}
    </div>
  );
}
```

**After:**

```tsx
import { Flex, Box, Heading, Text } from '@radix-ui/themes';
import { LucideIcon } from 'lucide-react';

export interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  action?: React.ReactNode;
}

export function EmptyState({
  icon: Icon,
  title,
  description,
  action,
}: EmptyStateProps) {
  return (
    <Flex direction="column" align="center" justify="center" gap="4" p="8">
      <Icon className="w-16 h-16" style={{ color: 'var(--gray-9)' }} />
      <Heading size="5" align="center">
        {title}
      </Heading>
      <Text size="3" color="gray" align="center">
        {description}
      </Text>
      {action && <Box>{action}</Box>}
    </Flex>
  );
}
```

### Step 3.5: Update LoadingSpinner Component (optional)

**File:** `src/components/common/LoadingSpinner.tsx`

**Option 1: Keep custom implementation**

```tsx
// Keep as-is, just update color to use Radix Themes token
<Loader2 className="animate-spin" style={{ color: 'var(--accent-9)' }} />
```

**Option 2: Use Radix Themes Spinner (if available)**

```tsx
import { Spinner } from '@radix-ui/themes';

<Spinner size="3" />;
```

### Step 3.6: Test Phase 3

**Checkpoint 1: Type Check**

```powershell
pnpm tsc --noEmit
```

**Checkpoint 2: Build**

```powershell
pnpm build
```

**Checkpoint 3: Run Dev Server**

```powershell
pnpm dev
```

**Checkpoint 4: Visual Inspection**

- ✅ All cards render correctly
- ✅ Card content properly structured
- ✅ Badges display correctly (colors, sizes)
- ✅ FeatureCard works
- ✅ EmptyState works (if present on any page)
- ✅ LoadingSpinner works
- ✅ No broken layouts
- ✅ No console errors

### Step 3.7: Commit Phase 3

```powershell
git add .
git commit -m "Phase 3: Migrate cards, badges, and common components to Radix Themes"
git push
```

---

## Phase 4: Sections, Overlays, and Complex Components

**Duration:** 3-4 hours  
**Goal:** Migrate sections, Dialog, Tooltip, Sheet, Tabs, Separator, and complex layouts

### Step 4.1: Migrate HeroSection.tsx

**File:** `src/components/sections/HeroSection.tsx`

**Major Changes:**

- Replace section wrapper with `<Section>`
- Replace grid with `<Grid>`
- Use Heading, Text, Button (already migrated)
- Keep ImageWithFallback

**Before (sample):**

```tsx
<section className="bg-muted/30 py-16">
  <div className="max-w-6xl mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="text-4xl lg:text-5xl font-bold mb-6">Title</h1>
        <p className="text-lg text-muted-foreground mb-8">Description</p>
        <Button>Get Started</Button>
      </div>
      <ImageWithFallback ... />
    </div>
  </div>
</section>
```

**After:**

```tsx
import { Section, Container, Grid, Box, Heading, Text, Button, Flex } from '@radix-ui/themes';

<Section size="3" style={{ backgroundColor: 'var(--gray-a2)' }}>
  <Container size="4">
    <Grid columns={{ initial: '1', lg: '2' }} gap="6" align="center">
      <Box>
        <Heading size="9" mb="4">Title</Heading>
        <Text size="4" color="gray" mb="6" style={{ lineHeight: '1.6' }}>Description</Text>
        <Button size="3" variant="solid" color="blue">Get Started</Button>
      </Box>
      <Box>
        <ImageWithFallback ... />
      </Box>
    </Grid>
  </Container>
</Section>
```

### Step 4.2: Migrate UnifiedRelatedPages.tsx

**File:** `src/components/sections/UnifiedRelatedPages.tsx`

**Major Changes:**

- Replace section with `<Section>`
- Replace grid with `<Grid>`
- Replace cards with Radix Themes Card
- Use Heading, Text

**Before (sample):**

```tsx
<section className="py-16">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-3xl text-primary mb-12 text-center">Related Pages</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {pages.map((page) => (
        <div className="border border-border bg-card rounded-lg p-6 hover:bg-accent">
          <Icon className="w-8 h-8 text-primary mb-4" />
          <h3>{page.title}</h3>
          <p className="text-muted-foreground text-sm">{page.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>
```

**After:**

```tsx
import {
  Section,
  Container,
  Grid,
  Card,
  Box,
  Flex,
  Heading,
  Text,
} from '@radix-ui/themes';

<Section size="3">
  <Container size="4">
    <Heading size="7" align="center" color="blue" mb="6">
      Related Pages
    </Heading>
    <Grid columns={{ initial: '1', md: '2', lg: '3' }} gap="4">
      {pages.map((page) => (
        <Card key={page.href} size="2" variant="surface" asChild>
          <a
            href={page.href}
            style={{
              textDecoration: 'none',
              color: 'inherit',
              cursor: 'pointer',
            }}
          >
            <Flex direction="column" gap="3" p="4">
              <page.icon
                className="w-8 h-8"
                style={{ color: 'var(--accent-9)' }}
              />
              <Heading size="4">{page.title}</Heading>
              <Text size="2" color="gray">
                {page.description}
              </Text>
            </Flex>
          </a>
        </Card>
      ))}
    </Grid>
  </Container>
</Section>;
```

### Step 4.3: Migrate LeadershipReadinessFlowchart.tsx (Complex)

**File:** `src/components/sections/LeadershipReadinessFlowchart.tsx`

**This is the most complex component. It may require custom CSS for flowchart connectors.**

**Strategy:**

1. Replace section with `<Section>`
2. Replace grid layouts with `<Grid>` or `<Flex>`
3. Replace step cards with Radix Themes Card
4. Use Tooltip from Radix Themes
5. **Keep custom CSS for connectors** (absolute positioning, lines)

**Custom CSS (create if needed):**

```css
/* src/styles/custom.css */

.flowchart-connector-vertical {
  position: absolute;
  background: var(--gray-6);
  width: 2px;
  height: 40px;
}

.flowchart-connector-horizontal {
  position: absolute;
  background: var(--gray-6);
  height: 2px;
  width: 40px;
}

.flowchart-step-badge {
  position: absolute;
  top: -12px;
  left: -12px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  font-weight: 600;
  box-shadow: var(--shadow-3);
}
```

**Component structure:**

- Use `<Grid>` or `<Flex>` for step layout
- Use `<Card>` for each step
- Use Radix Themes Tooltip (replace custom Tooltip)
- Use custom CSS classes for connectors

**Note:** This component may need significant rework. Visual differences are acceptable as long as functionality is preserved.

### Step 4.4: Replace Dialog Usages (if present)

**Search Pattern:**

```powershell
Get-ChildItem -Path src -Recurse -Include *.tsx,*.ts | Select-String "from '@/components/foundation/primitives'" | Select-String "Dialog"
```

**For each file:**

1. **Replace import:**

   ```tsx
   // Before
   import {
     Dialog,
     DialogTrigger,
     DialogContent,
     DialogTitle,
     DialogDescription,
   } from '@/components/foundation/primitives';

   // After
   import { Dialog } from '@radix-ui/themes';
   ```

2. **Update structure:**

   ```tsx
   // Before
   <Dialog>
     <DialogTrigger asChild>
       <Button>Open</Button>
     </DialogTrigger>
     <DialogContent>
       <DialogHeader>
         <DialogTitle>Title</DialogTitle>
         <DialogDescription>Description</DialogDescription>
       </DialogHeader>
       {/* content */}
     </DialogContent>
   </Dialog>

   // After
   <Dialog.Root>
     <Dialog.Trigger>
       <Button>Open</Button>
     </Dialog.Trigger>
     <Dialog.Content>
       <Dialog.Title>Title</Dialog.Title>
       <Dialog.Description>Description</Dialog.Description>
       {/* content */}
     </Dialog.Content>
   </Dialog.Root>
   ```

**Note:** Remove `<DialogHeader>` wrapper (not in Radix Themes).

### Step 4.5: Replace Tooltip Usages

**Search Pattern:**

```powershell
Get-ChildItem -Path src -Recurse -Include *.tsx,*.ts | Select-String "from '@/components/foundation/primitives'" | Select-String "Tooltip"
```

**For each file:**

1. **Replace import:**

   ```tsx
   // Before
   import {
     Tooltip,
     TooltipTrigger,
     TooltipContent,
     TooltipProvider,
   } from '@/components/foundation/primitives';

   // After
   import { Tooltip } from '@radix-ui/themes';
   ```

2. **Update structure:**

   ```tsx
   // Before
   <TooltipProvider>
     <Tooltip>
       <TooltipTrigger asChild>
         <Button>Hover me</Button>
       </TooltipTrigger>
       <TooltipContent>
         Tooltip text
       </TooltipContent>
     </Tooltip>
   </TooltipProvider>

   // After
   <Tooltip content="Tooltip text">
     <Button>Hover me</Button>
   </Tooltip>
   ```

**Note:** Radix Themes Tooltip is simpler (no provider needed).

**Affected Files:** Navigation.tsx, LeadershipReadinessFlowchart.tsx, others

### Step 4.6: Handle MobileDrawer (Sheet) - Custom Solution

**File:** `src/components/layout/MobileDrawer.tsx`

**Sheet is NOT in Radix Themes. Options:**

**Option 1: Keep Radix Primitive + Themes Tokens**

```tsx
import * as Dialog from '@radix-ui/react-dialog';
import { Box, Flex, Heading, Text } from '@radix-ui/themes';

// Keep Dialog primitive for Sheet functionality
// Style overlay and content with Radix Themes tokens

<Dialog.Root open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
  <Dialog.Portal>
    <Dialog.Overlay
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 50,
      }}
    />
    <Dialog.Content
      style={{
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        width: '320px',
        backgroundColor: 'var(--color-background)',
        zIndex: 50,
        padding: 'var(--space-4)',
      }}
    >
      <Box>{/* Mobile menu content */}</Box>
    </Dialog.Content>
  </Dialog.Portal>
</Dialog.Root>;
```

**Option 2: Use Radix Themes Dialog with Custom CSS**

```tsx
import { Dialog } from '@radix-ui/themes';

<Dialog.Root open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
  <Dialog.Content className="mobile-drawer">
    {/* content */}
  </Dialog.Content>
</Dialog.Root>

// CSS
.mobile-drawer {
  position: fixed !important;
  top: 0 !important;
  right: 0 !important;
  bottom: 0 !important;
  left: auto !important;
  width: 320px !important;
  transform: none !important;
  animation: slideInRight 0.3s ease-out;
}

@keyframes slideInRight {
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
}
```

**Recommendation:** Option 1 (keep primitive) is cleaner.

### Step 4.7: Replace Tabs Usages (if present)

**Search Pattern:**

```powershell
Get-ChildItem -Path src -Recurse -Include *.tsx,*.ts | Select-String "from '@/components/foundation/primitives'" | Select-String "Tabs"
```

**For each file:**

1. **Replace import:**

   ```tsx
   // Before
   import {
     Tabs,
     TabsList,
     TabsTrigger,
     TabsContent,
   } from '@/components/foundation/primitives';

   // After
   import { Tabs } from '@radix-ui/themes';
   ```

2. **Update structure:**

   ```tsx
   // Before
   <Tabs defaultValue="tab1">
     <TabsList>
       <TabsTrigger value="tab1">Tab 1</TabsTrigger>
       <TabsTrigger value="tab2">Tab 2</TabsTrigger>
     </TabsList>
     <TabsContent value="tab1">Content 1</TabsContent>
     <TabsContent value="tab2">Content 2</TabsContent>
   </Tabs>

   // After
   <Tabs.Root defaultValue="tab1">
     <Tabs.List>
       <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
       <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
     </Tabs.List>
     <Tabs.Content value="tab1">Content 1</Tabs.Content>
     <Tabs.Content value="tab2">Content 2</Tabs.Content>
   </Tabs.Root>
   ```

### Step 4.8: Replace Separator Usages (if present)

**Search Pattern:**

```powershell
Get-ChildItem -Path src -Recurse -Include *.tsx,*.ts | Select-String "from '@/components/foundation/primitives'" | Select-String "Separator"
```

**For each file:**

1. **Replace import:**

   ```tsx
   // Before
   import { Separator } from '@/components/foundation/primitives';

   // After
   import { Separator } from '@radix-ui/themes';
   ```

2. **Update component:**

   ```tsx
   // Before
   <Separator orientation="horizontal" />

   // After
   <Separator size="4" orientation="horizontal" />
   ```

### Step 4.9: Test Phase 4

**Checkpoint 1: Type Check**

```powershell
pnpm tsc --noEmit
```

**Checkpoint 2: Build**

```powershell
pnpm build
```

**Checkpoint 3: Run Dev Server**

```powershell
pnpm dev
```

**Checkpoint 4: Visual & Interaction Test**

- ✅ HeroSection renders correctly
- ✅ UnifiedRelatedPages renders correctly (card grid)
- ✅ LeadershipReadinessFlowchart renders (visual differences acceptable)
- ✅ All other sections render
- ✅ Dialogs work (if present)
- ✅ Tooltips work (hover to test)
- ✅ MobileDrawer works (open/close on mobile)
- ✅ Tabs work (if present)
- ✅ Separators display (if present)
- ✅ Responsive design works
- ✅ No console errors

### Step 4.10: Commit Phase 4

```powershell
git add .
git commit -m "Phase 4: Migrate sections, overlays, and complex components to Radix Themes"
git push
```

---

## Phase 5: Cleanup - Remove Tailwind and Primitives

**Duration:** 1-2 hours  
**Goal:** Delete all Tailwind dependencies, config files, and custom primitives

### Step 5.1: Verify No More Primitive Imports

**Check for remaining imports:**

```powershell
# Should return NO results
Get-ChildItem -Path src -Recurse -Include *.tsx,*.ts | Select-String "from '@/components/foundation/primitives'" | Select-String -NotMatch "// "
```

**Check for remaining custom Heading/Text imports:**

```powershell
# Should return NO results
Get-ChildItem -Path src -Recurse -Include *.tsx,*.ts | Select-String "from '@/components/common/Heading'"
Get-ChildItem -Path src -Recurse -Include *.tsx,*.ts | Select-String "from '@/components/common/Text'"
```

**If any imports remain:** Go back and replace them (missed in previous phases).

### Step 5.2: Delete Primitives Directory

```powershell
Remove-Item -Path "src/components/foundation/primitives" -Recurse -Force
```

**Verify deletion:**

```powershell
# Should return error (path not found)
Test-Path "src/components/foundation/primitives"
```

### Step 5.3: Delete Custom Heading and Text Components

```powershell
Remove-Item -Path "src/components/common/Heading.tsx" -Force
Remove-Item -Path "src/components/common/Text.tsx" -Force
```

### Step 5.4: Update Common Components Barrel Export

**File:** `src/components/common/index.ts`

**Remove exports:**

```tsx
// Before
export { Heading } from './Heading';
export { Text } from './Text';
export { FeatureCard } from './FeatureCard';
export { EmptyState } from './EmptyState';
export { LoadingSpinner } from './LoadingSpinner';

// After
export { FeatureCard } from './FeatureCard';
export { EmptyState } from './EmptyState';
export { LoadingSpinner } from './LoadingSpinner';
```

### Step 5.5: Remove Tailwind PostCSS Config

```powershell
Remove-Item -Path "postcss.config.js" -Force
```

### Step 5.6: Remove Tailwind Globals CSS

```powershell
Remove-Item -Path "src/styles/globals.css" -Force
```

**Update main.tsx to remove import:**

**File:** `src/main.tsx`

**Before:**

```tsx
import '@radix-ui/themes/styles.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/globals.css'; // REMOVE THIS LINE
import App from './App.tsx';
import { Theme } from '@radix-ui/themes';
```

**After:**

```tsx
import '@radix-ui/themes/styles.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { Theme } from '@radix-ui/themes';
```

### Step 5.7: Uninstall Tailwind Dependencies

```powershell
pnpm remove tailwindcss @tailwindcss/postcss tailwind-merge tailwindcss-animate
```

**Verify removal:**

```powershell
cat package.json | Select-String "tailwind"
# Should return NO results
```

### Step 5.8: Remove Unused Radix Primitives (Optional)

**Check which primitives are still imported:**

```powershell
Get-ChildItem -Path src -Recurse -Include *.tsx,*.ts | Select-String "@radix-ui/react-"
```

**If MobileDrawer uses `@radix-ui/react-dialog` primitive:** Keep it.  
**Otherwise:** Remove unused primitives.

**Example (if no primitives used):**

```powershell
pnpm remove @radix-ui/react-accordion @radix-ui/react-alert-dialog @radix-ui/react-avatar @radix-ui/react-checkbox @radix-ui/react-collapsible @radix-ui/react-context-menu @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-hover-card @radix-ui/react-label @radix-ui/react-menubar @radix-ui/react-navigation-menu @radix-ui/react-popover @radix-ui/react-progress @radix-ui/react-radio-group @radix-ui/react-scroll-area @radix-ui/react-select @radix-ui/react-separator @radix-ui/react-slider @radix-ui/react-slot @radix-ui/react-switch @radix-ui/react-tabs @radix-ui/react-toggle @radix-ui/react-toggle-group @radix-ui/react-tooltip
```

**Note:** Keep `@radix-ui/react-slot` if any components use `asChild` pattern.  
**Note:** Keep `@radix-ui/react-dialog` if MobileDrawer uses it.

### Step 5.9: Simplify or Remove cn() Utility

**File:** `src/utils/utils.ts`

**Before:**

```tsx
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

**Option 1: Remove cn() entirely (if not used)**

```powershell
# Check if cn() is still used
Get-ChildItem -Path src -Recurse -Include *.tsx,*.ts | Select-String "\bcn\("

# If no results, delete the function from utils.ts
```

**Option 2: Simplify to use only clsx**

```tsx
import { clsx, type ClassValue } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
```

**Note:** If cn() is not used anywhere, remove it. If used for conditional classes (e.g., dynamic styling), keep simplified version.

### Step 5.10: Remove class-variance-authority (if not used)

```powershell
# Check if CVA is used
Get-ChildItem -Path src -Recurse -Include *.tsx,*.ts | Select-String "class-variance-authority"

# If no results, remove
pnpm remove class-variance-authority
```

### Step 5.11: Final Type Check and Build

**Type Check:**

```powershell
pnpm tsc --noEmit
```

**Expected:** No errors

**Build:**

```powershell
pnpm build
```

**Expected:** Build succeeds

**Check bundle size:**

```powershell
ls dist/assets/*.js | Measure-Object -Property Length -Sum
```

**Expected:** Smaller bundle size compared to before migration (15-25% reduction)

### Step 5.12: Final Dev Server Test

```powershell
pnpm dev
```

### Step 5.13: Comprehensive Smoke Test

**Test Checklist:**

**Navigation:**

- [ ] Homepage loads
- [ ] All navigation links work (desktop)
- [ ] Mobile menu opens/closes
- [ ] Theme toggle works (light/dark)
- [ ] Breadcrumbs display (on subpages)

**Pages:**

- [ ] About page loads
- [ ] Framework page loads
- [ ] Topologies page loads
- [ ] Concepts page loads
- [ ] Manifesto page loads
- [ ] Management page loads
- [ ] Contributing page loads
- [ ] Shapes page loads
- [ ] References page loads
- [ ] Leveling page loads
- [ ] Progression page loads
- [ ] Guidelines page loads
- [ ] Developing Leaders page loads

**Components:**

- [ ] All buttons clickable
- [ ] All cards render
- [ ] All badges render
- [ ] Forms work (if present)
- [ ] Tooltips work (hover)
- [ ] Dialogs work (if present)
- [ ] Loading spinners work (if present)
- [ ] Empty states display (if present)

**Responsive:**

- [ ] Mobile layout works (< 640px)
- [ ] Tablet layout works (640px - 1024px)
- [ ] Desktop layout works (> 1024px)

**Accessibility:**

- [ ] Keyboard navigation works (Tab key)
- [ ] Skip to content link works
- [ ] ARIA labels present (check inspector)

**Performance:**

- [ ] No console errors
- [ ] No console warnings (acceptable: minor warnings)
- [ ] Page load feels fast
- [ ] Interactions feel responsive

### Step 5.14: Create Custom CSS File (if needed)

**If custom CSS was needed for LeadershipReadinessFlowchart or other components:**

**Create file:**

```powershell
New-Item -Path "src/styles/custom.css" -ItemType File
```

**Import in main.tsx:**

```tsx
import '@radix-ui/themes/styles.css';
import './styles/custom.css'; // Custom CSS using Radix Themes tokens
```

**Example custom.css:**

```css
/* Custom CSS using Radix Themes design tokens */

.flowchart-connector {
  position: absolute;
  background: var(--gray-6);
  width: 2px;
  height: 40px;
}

.mobile-drawer {
  /* Custom styles for mobile drawer */
  position: fixed !important;
  top: 0 !important;
  right: 0 !important;
  bottom: 0 !important;
  left: auto !important;
  width: 320px !important;
  transform: none !important;
}

/* Add any other custom styles needed */
```

### Step 5.15: Final Commit

```powershell
git add .
git commit -m "Phase 5: Remove Tailwind CSS and custom primitives - migration complete"
git push
```

### Step 5.16: Create Pull Request

```powershell
# Create PR for review
# Title: "feat: Migrate from Tailwind + Primitives to Radix Themes"
# Description: Include summary of changes, testing performed, visual differences
```

**PR Checklist:**

- [ ] All phases completed
- [ ] All tests passing
- [ ] Build successful
- [ ] Bundle size reduced
- [ ] Visual regression documented (screenshots)
- [ ] No console errors
- [ ] Accessibility maintained
- [ ] Documentation updated (if applicable)

---

## Rollback Procedure

### Rollback Phase 5 Only

```powershell
git reset --hard HEAD~1
pnpm install
```

### Rollback Entire Migration

```powershell
# Find commit before Phase 0
git log --oneline

# Reset to commit before migration started
git reset --hard <commit-hash>
pnpm install
```

### Rollback with Branch Preservation

```powershell
# Create rollback branch
git checkout -b feat/radix-themes-migration-rollback

# Revert all commits
git revert <phase-5-commit> <phase-4-commit> <phase-3-commit> <phase-2-commit> <phase-1-commit> <phase-0-commit>
git push -u origin feat/radix-themes-migration-rollback
```

---

## Post-Migration Tasks

### Documentation Updates

1. **README.md:** Update styling section
2. **Contributing guide:** Update component creation guide
3. **Design system docs:** Update with Radix Themes info

### Monitoring

1. **Bundle size:** Track over time
2. **Performance:** Monitor Lighthouse scores
3. **User feedback:** Collect feedback on visual changes

### Optimization

1. **Code splitting:** Review if Radix Themes can be code-split
2. **Performance:** Profile runtime performance
3. **Accessibility:** Run accessibility audit

---

## Troubleshooting

### Issue: Import errors after deleting primitives

**Symptom:** `Module not found: '@/components/foundation/primitives'`

**Solution:**

```powershell
# Find remaining imports
Get-ChildItem -Path src -Recurse -Include *.tsx,*.ts | Select-String "from '@/components/foundation/primitives'"

# Replace each import with Radix Themes import
```

### Issue: Visual regressions

**Symptom:** Components look different

**Solution:**

- Document visual differences (take screenshots)
- Verify functionality is intact
- Adjust sizes/colors using Radix Themes props
- Use custom CSS if needed (with Themes tokens)

### Issue: Build fails

**Symptom:** `pnpm build` fails

**Solution:**

```powershell
# Type check
pnpm tsc --noEmit

# Fix type errors
# Common issues:
# - Missing imports
# - Wrong prop names
# - Missing components
```

### Issue: Dark mode doesn't work

**Symptom:** Theme toggle doesn't switch colors

**Solution:**

- Verify Theme component has `appearance` prop
- Check theme toggle updates appearance state
- Verify Radix Themes CSS is imported

### Issue: Layout shifts

**Symptom:** Responsive layouts broken

**Solution:**

- Check responsive props: `{{ initial: '...', md: '...', lg: '...' }}`
- Verify Grid/Flex columns are correct
- Use browser DevTools to inspect layout

---

## Success Metrics

### Functional Metrics

- ✅ 100% of pages load without errors
- ✅ 100% of buttons functional
- ✅ 100% of forms functional (if present)
- ✅ 100% of navigation functional
- ✅ 0 console errors in production build
- ✅ 0 TypeScript errors

### Performance Metrics

- ✅ Bundle size reduced by 15-25%
- ✅ Build time comparable or improved
- ✅ Runtime performance maintained

### Code Quality Metrics

- ✅ 0 Tailwind dependencies
- ✅ 0 custom primitives
- ✅ All components use Radix Themes
- ✅ Minimal custom CSS (< 100 lines)

---

## Conclusion

Following these step-by-step instructions, you can successfully migrate from Tailwind + custom primitives to Radix Themes only. The migration is incremental, tested at each phase, and allows for easy rollback if issues arise.

**Key Takeaways:**

1. Test thoroughly at each phase
2. Commit frequently
3. Document visual changes
4. Don't force Radix Themes patterns - use custom CSS with Themes tokens when needed
5. Be patient - this is a significant refactor

**Timeline Estimate:** 12-17 hours total

**Next Steps:** Begin Phase 0 when ready to start migration.
