# Career Topologies Site - Phase 1 Execution Brief

**Execution ID**: `phase-1-foundation-codebase-setup`  
**Target Phase**: Phase 1 – Foundation and Codebase Setup  
**Status**: Ready for execution  
**Created**: 2025-11-13  

---

## Context

This execution brief implements **Phase 1 – Foundation and Codebase Setup** from the canonical implementation roadmap (`.guided/architecture/site-implementation-phased-plan.md`).

**Current State**: The repository is in its initial state with only `.git/` and `.guided/` directories present. No implementation has been started.

**Target State**: A fully functional Next.js 16 development environment with:
- pnpm monorepo workspace configured
- Next.js App Router application running on localhost:3000
- Tailwind CSS v4 with custom theme
- shadcn/ui component library initialized
- Dark/light theme toggle with persistence via next-themes
- TypeScript strict mode configured and passing

**Overall Site Goal**: Build a 14-page documentation website for the Career Topologies framework—an open-source strategic framework for transparent, equitable technology career development. The site serves technology leaders, HR professionals, engineering managers, and individual contributors with comprehensive guidance on implementing career topologies (Y-shaped, W-shaped, Network), leveling criteria, and progression frameworks.

---

## Goal

Establish the complete technical foundation for the Career Topologies website, transforming an empty repository into a functional development environment where:

1. Engineers can run `pnpm install` and `pnpm dev` to start local development
2. The design system (Tailwind + shadcn/ui) is configured and ready for component development
3. Dark/light theme management works with system preference detection and persistence
4. TypeScript strict mode catches type errors during development
5. The monorepo structure supports separation of concerns (web app, shared UI, config)

This phase focuses exclusively on infrastructure—no content, pages, or business logic beyond a "Hello World" homepage.

---

## Inputs and Dependencies

**Preconditions**:
- Repository initialized with Git (✅ confirmed)
- `.guided/` directory exists with architecture documentation (✅ confirmed)
- Developer has Node.js v20+ and pnpm v9+ installed locally
- No conflicting files exist in the workspace

**Hard Dependencies**:
- None (this is the foundational phase)

**External Dependencies**:
- npm registry access for package installation
- Next.js 16 compatibility with Tailwind CSS v4 and shadcn/ui
- Contentlayer compatibility with Next.js 16 (may require canary version—risk noted in roadmap)

---

## Context References

These `.guided/` documents are the primary context for Phase 1 execution:

1. **`.guided/architecture/site-implementation-phased-plan.md`**  
   - Lines 1-150: Phase 1 definition, scope, exit criteria, steps 1.1-1.4
   - Technology stack specification (Node.js, pnpm, TypeScript, React, Next.js 16, Tailwind v4, shadcn/ui, next-themes)

2. **`.guided/architecture/site-structure-proposal.section9-codebase-architecture.md`**  
   - Lines 1-100: Technology stack rationale
   - Lines 50-150: Monorepo structure (`apps/web/`, `packages/ui/`, `packages/config/`, `content/`)
   - Lines 150-250: Next.js App Router structure and component architecture
   - Component patterns (Server Components vs Client Components)

3. **`.guided/architecture/site-structure-proposal.section11-12-plan-risks.md`**  
   - Lines 1-150: Steps 1-4 detailed descriptions (Repository Init, Next.js Bootstrap, Styling, Theme Management)
   - Validation criteria for each step

4. **`.guided/architecture/site-structure-proposal.section1-2-intro.md`**  
   - Lines 1-100: Project goals, target audiences, and overall vision
   - Context for design system decisions (professional, accessible, open-source)

5. **`.guided/architecture/site-structure-proposal.section6-layout.md`**  
   - Lines 1-200: Header, Footer, Theme Toggle component specifications
   - Design system expectations (dark/light modes, responsive behavior)

**Additional References** (used if needed):
- `.guided/architecture/site-structure-proposal.section10-content-data-model.md` – Content structure preview (for future phases)
- `.guided/architecture/site-structure-proposal.section4-ia-navigation.md` – Navigation requirements (for future phases)

---

## Tasks and Checklist

### Step 1.1 – Initialize Repository and Workspace

**Goal**: Create pnpm workspace structure with monorepo layout.

- [ ] **1.1.1** Create `pnpm-workspace.yaml` at repository root
  - Define workspace globs: `apps/*`, `packages/*`
  
- [ ] **1.1.2** Create root `package.json`
  - Set `"name": "career-topologies"`
  - Set `"version": "1.0.0"`
  - Mark as private: `"private": true`
  - Add workspace scripts:
    - `"dev": "pnpm --filter web dev"`
    - `"build": "pnpm --filter web build"`
    - `"lint": "pnpm --filter web lint"`
    - `"typecheck": "pnpm --filter web type-check"`
  
- [ ] **1.1.3** Create directory structure
  - `apps/web/`
  - `packages/ui/`
  - `packages/config/`
  - `content/`
  - Confirm `.guided/` already exists

- [ ] **1.1.4** Create root `tsconfig.json`
  - Enable strict mode: `"strict": true`
  - Set compiler options:
    - `"target": "ES2022"`
    - `"lib": ["ES2022", "DOM", "DOM.Iterable"]`
    - `"module": "ESNext"`
    - `"moduleResolution": "bundler"`
    - `"jsx": "preserve"`
    - `"esModuleInterop": true`
    - `"skipLibCheck": true`
  - Configure paths for workspace packages

- [ ] **1.1.5** Create root `.gitignore`
  - Node.js patterns: `node_modules/`, `*.log`, `.pnpm-store/`
  - Next.js patterns: `.next/`, `out/`, `build/`, `.contentlayer/`
  - Environment files: `.env`, `.env.local`, `.env.*.local`
  - OS files: `.DS_Store`, `Thumbs.db`
  - Editor: `.vscode/`, `.idea/`

- [ ] **1.1.6** Run `pnpm install` to validate workspace configuration

**Validation**: `pnpm install` succeeds, workspace structure recognized by pnpm.

---

### Step 1.2 – Bootstrap Next.js 16 Application

**Goal**: Create minimal Next.js app with App Router in `apps/web/`.

- [ ] **1.2.1** Initialize Next.js application
  - Run: `pnpm create next-app@latest apps/web --typescript --app --no-src-dir --tailwind --import-alias "@/*"`
  - Alternatively, manually create `apps/web/package.json` and install dependencies

- [ ] **1.2.2** Configure `apps/web/package.json`
  - Set `"name": "@career-topologies/web"`
  - Add dependencies:
    - `next@^16.0.0` (or latest 16.x)
    - `react@^18.3.0`
    - `react-dom@^18.3.0`
  - Add devDependencies:
    - `@types/node@^20.0.0`
    - `@types/react@^18.3.0`
    - `@types/react-dom@^18.3.0`
    - `typescript@^5.6.0`
  - Add scripts:
    - `"dev": "next dev"`
    - `"build": "next build"`
    - `"start": "next start"`
    - `"lint": "next lint"`
    - `"type-check": "tsc --noEmit"`

- [ ] **1.2.3** Create `apps/web/tsconfig.json`
  - Extend root config: `"extends": "../../tsconfig.json"`
  - Add Next.js specific compiler options:
    - `"plugins": [{ "name": "next" }]`
    - `"paths": { "@/*": ["./*"] }`
  - Include: `["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"]`
  - Exclude: `["node_modules"]`

- [ ] **1.2.4** Create `apps/web/next.config.ts`
  - Export minimal Next.js config
  - Enable strict mode: `reactStrictMode: true`
  - Prepare for MDX: add comment for future Contentlayer integration

- [ ] **1.2.5** Create App Router structure
  - `apps/web/app/layout.tsx` – Root layout with HTML structure
  - `apps/web/app/page.tsx` – Placeholder home page
  - `apps/web/app/globals.css` – Global Tailwind imports

- [ ] **1.2.6** Implement root layout (`apps/web/app/layout.tsx`)
  - Define `RootLayout` component with `<html>`, `<body>` tags
  - Add metadata export: title, description
  - Import `./globals.css`

- [ ] **1.2.7** Implement home page (`apps/web/app/page.tsx`)
  - Simple "Hello World" or "Career Topologies - Coming Soon" placeholder
  - Can include basic styling for visual confirmation

- [ ] **1.2.8** Run development server
  - Execute: `pnpm dev` (from root, using workspace script)
  - Verify: Server starts on `http://localhost:3000`
  - Verify: Page loads in browser

**Validation**: `pnpm dev` launches Next.js, localhost:3000 displays page, no console errors.

---

### Step 1.3 – Configure Tailwind CSS and Design System

**Goal**: Implement Tailwind CSS v4 with custom theme for Career Topologies design system.

**Reference**: [Tailwind CSS v4 Next.js Installation Guide](https://tailwindcss.com/docs/installation/framework-guides/nextjs)

- [ ] **1.3.1** Install Tailwind CSS v4 packages
  - Add to `apps/web/package.json` devDependencies:
    - `tailwindcss@^4.1.0` (latest v4.x stable)
    - `@tailwindcss/postcss@^4.1.0`
    - `postcss@^8.4.0`
  - Run: `pnpm install` to install packages

- [ ] **1.3.2** Configure PostCSS
  - Create `apps/web/postcss.config.mjs`:
    - Add `@tailwindcss/postcss` plugin configuration
    - Export PostCSS config object

- [ ] **1.3.3** Import Tailwind CSS in globals.css
  - Update `apps/web/app/globals.css`:
    - Replace `@tailwind` directives with `@import "tailwindcss"`
    - This is the v4 CSS-first approach
  - Define CSS variables for light/dark themes:
    - `--background`, `--foreground`, `--primary`, `--secondary`, etc.
  - Set up theme-specific color values using `@theme` directive

- [ ] **1.3.4** Define custom theme in CSS (v4 approach)
  - Use `@theme` directive in `globals.css` for customizations:
    - Custom colors (can reference CSS variables)
    - Typography settings
    - Spacing scale
    - Border radius values
  - **Note**: Tailwind v4 uses CSS-first configuration instead of JS config files
  - `tailwind.config.ts` is optional and only needed for advanced JS-based customization

- [ ] **1.3.5** Set up theme tokens for shadcn/ui compatibility
  - **Colors** (as CSS variables for shadcn/ui):
    - Primary: Professional blue palette
    - Secondary: Complementary accent
    - Neutral: Grayscale (50-900)
    - Semantic: Success, warning, error, info
    - Special: border, input, ring, background, foreground
  - **Typography**:
    - Font families: Sans-serif system stack (Inter, -apple-system, etc.)
    - Font sizes: Responsive scale
  - **Spacing**: Consistent 0.5rem scale
  - **Radius**: Custom border radius variable

- [ ] **1.3.6** Test Tailwind classes
  - Add styled elements to `apps/web/app/page.tsx`
  - Verify: Classes apply correctly, responsive breakpoints work
  - Test: Mobile (375px), tablet (768px), desktop (1280px)
  - Verify: CSS variables resolve correctly

**Validation**: Tailwind classes render correctly, custom theme colors apply, responsive breakpoints functional, no build warnings.

---

### Step 1.4 – Initialize shadcn/ui and Theme Management

**Goal**: Add shadcn/ui component library and implement dark/light theme switching.

- [ ] **1.4.1** Initialize shadcn/ui
  - Run: `npx shadcn@latest init` in `apps/web/`
  - Configure:
    - Style: Default
    - Base color: Slate (or custom)
    - CSS variables: Yes
    - Components directory: `apps/web/components/ui/`
    - Utils path: `apps/web/lib/utils.ts`

- [ ] **1.4.2** Install core shadcn components
  - Run: `npx shadcn@latest add button card alert badge separator sheet dialog`
  - Verify: Components copied to `apps/web/components/ui/`

- [ ] **1.4.3** Install next-themes
  - Add to `apps/web/package.json` dependencies:
    - `next-themes@^0.4.0` (or latest stable)

- [ ] **1.4.4** Create theme provider component
  - File: `apps/web/components/providers/theme-provider.tsx`
  - Wrap `next-themes` ThemeProvider
  - Configure:
    - `attribute="class"` (use class-based dark mode)
    - `defaultTheme="system"` (respect system preference)
    - `enableSystem={true}` (detect OS preference)
    - `storageKey="career-topologies-theme"` (unique localStorage key)

- [ ] **1.4.5** Integrate theme provider in root layout
  - Update `apps/web/app/layout.tsx`:
    - Import ThemeProvider
    - Wrap `{children}` with `<ThemeProvider>...</ThemeProvider>`
    - Add `suppressHydrationWarning` to `<html>` tag to prevent theme flash

- [ ] **1.4.6** Build theme toggle component
  - File: `apps/web/components/layout/theme-toggle.tsx`
  - Use `useTheme()` hook from next-themes
  - Render button with:
    - Sun icon (light mode active)
    - Moon icon (dark mode active)
    - System icon (system preference active)
  - Add accessible label: "Toggle theme"

- [ ] **1.4.7** Add theme toggle to placeholder page
  - Import and render `<ThemeToggle />` in `apps/web/app/page.tsx`
  - Position in top-right corner for testing

- [ ] **1.4.8** Configure dark mode styles
  - Update `apps/web/app/globals.css`:
    - Define `.dark` class styles for CSS variables
    - Ensure background and text colors invert correctly
  - Test: Toggle should change background from light to dark

- [ ] **1.4.9** Test theme persistence
  - Toggle theme, reload page → Verify theme persists
  - Change OS/browser theme → Verify "system" mode follows preference
  - Check localStorage → Confirm `career-topologies-theme` key set

- [ ] **1.4.10** Test shadcn components in both themes
  - Add `<Button>`, `<Card>`, `<Alert>` to `apps/web/app/page.tsx`
  - Verify: Components render correctly in light and dark modes
  - Verify: No visual glitches or contrast issues

**Validation**: 
- Dark/light theme toggle functional with smooth transitions
- Theme preference persists across page reloads
- System preference detection works
- shadcn/ui components (Button, Card, Alert) render correctly in both themes
- No hydration mismatches or console warnings

---

## Proposed File Changes

### Root Workspace Files

#### `pnpm-workspace.yaml`
```yaml
packages:
  - 'apps/*'
  - 'packages/*'
```

#### `package.json` (root)
```json
{
  "name": "career-topologies",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "pnpm --filter web dev",
    "build": "pnpm --filter web build",
    "lint": "pnpm --filter web lint",
    "typecheck": "pnpm --filter web type-check"
  },
  "engines": {
    "node": ">=20.0.0",
    "pnpm": ">=9.0.0"
  }
}
```

#### `tsconfig.json` (root)
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "moduleResolution": "bundler",
    "jsx": "preserve",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "incremental": true,
    "paths": {
      "@career-topologies/ui": ["./packages/ui"],
      "@career-topologies/config": ["./packages/config"]
    }
  }
}
```

#### `.gitignore`
```gitignore
# Dependencies
node_modules/
.pnpm-store/

# Next.js
.next/
out/
build/
dist/

# Contentlayer
.contentlayer/

# Environment
.env
.env.local
.env.*.local

# Logs
*.log
npm-debug.log*
pnpm-debug.log*

# OS
.DS_Store
Thumbs.db

# Editors
.vscode/
.idea/
*.swp
*.swo
```

---

### Next.js Application (`apps/web/`)

#### `apps/web/package.json`
```json
{
  "name": "@career-topologies/web",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "type-check": "tsc --noEmit"
  },
  "dependencies": {
    "next": "^16.0.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "next-themes": "^0.4.0",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.5.0",
    "lucide-react": "^0.460.0"
  },
  "devDependencies": {
    "@types/node": "^20.17.0",
    "@types/react": "^18.3.0",
    "@types/react-dom": "^18.3.0",
    "typescript": "^5.6.0",
    "tailwindcss": "^4.1.0",
    "@tailwindcss/postcss": "^4.1.0",
    "postcss": "^8.4.0",
    "eslint": "^9.0.0",
    "eslint-config-next": "^16.0.0"
  }
}
```

#### `apps/web/tsconfig.json`
```json
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

#### `apps/web/next.config.ts`
```typescript
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Future: Contentlayer integration will be added here
};

export default nextConfig;
```

#### `apps/web/postcss.config.mjs`
```javascript
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
```

#### `apps/web/tailwind.config.ts` (Optional - for JS-based customization)
```typescript
import type { Config } from 'tailwindcss';

// Note: Tailwind v4 uses CSS-first configuration via @theme directive in CSS files.
// This file is OPTIONAL and only needed for advanced JavaScript-based customization.
// For this project, theme customization will be done in globals.css using @theme.

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  // Most theme customization should be done in globals.css using @theme directive
  theme: {
    extend: {
      // Only add JS-based extensions here if they cannot be expressed in CSS
    },
  },
  plugins: [],
};

export default config;
```

#### `apps/web/app/globals.css`
```css
@import "tailwindcss";

/* Tailwind v4 CSS-first theme configuration */
@theme {
  /* Custom CSS variables will be used by shadcn/ui components */
  --color-border: hsl(var(--border));
  --color-input: hsl(var(--input));
  --color-ring: hsl(var(--ring));
  --color-background: hsl(var(--background));
  --color-foreground: hsl(var(--foreground));
}

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 221.2 83.2% 53.3%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 221.2 83.2% 53.3%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --primary: 217.2 91.2% 59.8%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 224.3 76.3% 48%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```

#### `apps/web/app/layout.tsx`
```typescript
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/providers/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Career Topologies',
  description: 'Transparent, equitable career development framework for technology organizations',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          storageKey="career-topologies-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

#### `apps/web/app/page.tsx`
```typescript
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { ThemeToggle } from '@/components/layout/theme-toggle';

export default function HomePage() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header with theme toggle */}
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold">Career Topologies</h1>
          <ThemeToggle />
        </div>

        {/* Welcome message */}
        <Alert>
          <AlertDescription>
            Phase 1 Foundation Complete – Next.js 16, Tailwind CSS v4, shadcn/ui, and dark/light theme management are now functional.
          </AlertDescription>
        </Alert>

        {/* Component showcase */}
        <Card>
          <CardHeader>
            <CardTitle>Welcome to Career Topologies</CardTitle>
            <CardDescription>
              Transparent, equitable career development framework for technology organizations
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              This is a placeholder page demonstrating the design system. Future phases will implement:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Content infrastructure with Contentlayer and MDX</li>
              <li>Global layout components (Header, Footer, Navigation)</li>
              <li>14 documentation pages across 4 content pillars</li>
              <li>Interactive visualizations and career progression tools</li>
            </ul>
            <div className="flex gap-4">
              <Button variant="default">Primary Action</Button>
              <Button variant="outline">Secondary Action</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
```

#### `apps/web/components/providers/theme-provider.tsx`
```typescript
'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { ThemeProviderProps } from 'next-themes';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
```

#### `apps/web/components/layout/theme-toggle.tsx`
```typescript
'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" disabled>
        <Sun className="h-5 w-5" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
```

#### `apps/web/lib/utils.ts`
```typescript
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

---

### shadcn/ui Components

These will be auto-generated by running `npx shadcn@latest add <component>`:

- `apps/web/components/ui/button.tsx`
- `apps/web/components/ui/card.tsx`
- `apps/web/components/ui/alert.tsx`
- `apps/web/components/ui/badge.tsx`
- `apps/web/components/ui/separator.tsx`
- `apps/web/components/ui/sheet.tsx`
- `apps/web/components/ui/dialog.tsx`

**Note**: These components are copied directly from shadcn/ui library and customized as needed. No manual implementation required—rely on the `shadcn` CLI.

---

## Validation

### Automated Checks

Run these commands to confirm Phase 1 completion:

- [ ] **Install succeeds**: `pnpm install` completes with zero errors
- [ ] **TypeScript compilation**: `pnpm typecheck` passes with zero errors
- [ ] **Development server starts**: `pnpm dev` launches without errors
- [ ] **Build succeeds**: `pnpm build` completes successfully (production build)
- [ ] **Linting passes**: `pnpm lint` runs without critical errors

### Manual Checks

Perform these visual/functional tests:

- [ ] **Browser access**: Navigate to `http://localhost:3000` and page loads
- [ ] **Theme toggle works**: Click theme toggle button
  - Light mode → Dark mode transition smooth
  - Dark mode → Light mode transition smooth
  - Background and text colors invert correctly
- [ ] **Theme persistence**: 
  - Toggle to dark mode, reload page → Dark mode persists
  - Change system preference → Theme follows (if set to "system")
  - Check localStorage → `career-topologies-theme` key present
- [ ] **shadcn components render**:
  - Button displays with correct styling
  - Card displays with border and padding
  - Alert displays with background color
  - Components look correct in both light and dark modes
- [ ] **Responsive behavior**:
  - Test mobile viewport (375px width) → Layout adapts
  - Test tablet viewport (768px) → Layout adapts
  - Test desktop viewport (1280px+) → Layout optimal
- [ ] **No console errors**: Browser DevTools console shows zero errors
- [ ] **No hydration mismatches**: No React hydration warnings in console

### Exit Criteria (from Roadmap)

Confirm these conditions from the canonical Phase 1 exit criteria:

- [x] ✅ `pnpm install` succeeds across workspace
- [x] ✅ `pnpm dev` launches Next.js on localhost:3000
- [x] ✅ Dark/light theme toggle functional with persistence
- [x] ✅ shadcn/ui components (Button, Card, Alert) render correctly
- [x] ✅ TypeScript compilation passes with zero errors

---

## Notes / Next Actions

### Risk Mitigation

**Risk from Roadmap**: "Ensure Next.js 16 compatibility with Contentlayer (may require canary version)"

- **Action**: Monitor Contentlayer releases during Phase 2 setup
- **Mitigation**: If incompatible, consider alternatives:
  - `next-mdx-remote` for runtime MDX processing
  - `@next/mdx` for build-time MDX compilation
  - Wait for Contentlayer Next.js 16 support

**Risk from Roadmap**: "Tailwind v4 CSS-first configuration differs from v3; follow latest docs"

- **Status**: ✅ **ADDRESSED** - Step 1.3 updated to follow official Tailwind CSS v4 Next.js guide
- **Key Changes from v3 to v4**:
  - Package: Now uses `@tailwindcss/postcss` plugin instead of standalone Tailwind
  - Configuration: PostCSS config required (`postcss.config.mjs`)
  - CSS Import: Use `@import "tailwindcss"` instead of `@tailwind` directives
  - Theme: CSS-first approach with `@theme` directive (JS config optional)
  - No autoprefixer: Tailwind v4's PostCSS plugin handles prefixing automatically
- **Reference**: https://tailwindcss.com/docs/installation/framework-guides/nextjs
- **Impact**: shadcn/ui components still work with CSS variables; no breaking changes to component usage

**Risk from Roadmap**: "Monorepo structure may be overkill for MVP; reassess in Phase 4"

- **Decision Point**: Phase 1 establishes monorepo. If complexity outweighs benefits by Phase 4, can consolidate into single-package structure.

### Handoff to Phase 2

Once Phase 1 validation passes, proceed to **Phase 2 – Content Infrastructure and Navigation MVP**:

**Phase 2 Preview**:
- Install and configure Contentlayer
- Define content types (Page, Topology, Shape, etc.)
- Create `content/` directory structure with placeholder MDX files
- Build global layout components (Header, Footer, Breadcrumbs, TOC)
- Implement App Router routing for all 14 pages
- Create navigation configuration JSON

**Dependencies**: Phase 1 must be 100% complete before starting Phase 2.

**Context References for Phase 2**:
- `.guided/architecture/site-structure-proposal.section10-content-data-model.md`
- `.guided/architecture/site-structure-proposal.section6-layout.md`
- `.guided/architecture/site-structure-proposal.section4-ia-navigation.md`

### Technical Debt / Future Improvements

- **Performance**: Next.js 16 provides automatic partial prerendering (PPR) and React Server Components optimizations—no action needed in Phase 1, but leverage in future phases
- **Accessibility**: shadcn/ui components are accessible by default (ARIA labels, keyboard navigation)—validate with automated tools in later phases
- **SEO**: Metadata API already configured in root layout—expand per-page metadata in Phase 2+

### Development Workflow

For engineers executing this phase:

1. **Create a new branch**: `git checkout -b phase-1-foundation`
2. **Work through checklist sequentially**: Complete Step 1.1 fully before moving to Step 1.2
3. **Commit incrementally**: Commit after each step completion (e.g., "Step 1.1: Initialize workspace", "Step 1.2: Bootstrap Next.js")
4. **Run validation after each step**: Don't wait until end of phase to test
5. **Document blockers**: If stuck, note the issue and refer to context references
6. **Open PR when complete**: All validation checks must pass before merging

### Estimated Time

Based on typical development pace:

- **Step 1.1** (Workspace setup): 30-60 minutes
- **Step 1.2** (Next.js bootstrap): 30-60 minutes
- **Step 1.3** (Tailwind config): 45-90 minutes
- **Step 1.4** (shadcn + themes): 60-90 minutes

**Total**: 3-5 hours for experienced Next.js developer, 6-8 hours for learning curve.

---

## Execution Summary

**What Gets Built**: A functional Next.js 16 development environment with dark/light theme support and a basic design system.

**What Doesn't Get Built**: No content pages, no navigation components, no MDX processing, no business logic. This is purely infrastructure.

**Success Indicator**: An engineer can clone the repo, run `pnpm install && pnpm dev`, see a styled page in the browser, toggle the theme, and see it persist—all with zero console errors.

**Blocker Resolution**: If any validation check fails, revisit the corresponding step, cross-reference the context documents, and debug incrementally. Do not proceed to Phase 2 with unresolved issues.

---

**End of Phase 1 Execution Brief**

*For Phase 2 execution, create a new brief following the same structure, targeting Phase 2 steps and context references.*
