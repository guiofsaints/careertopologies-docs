## 9. Codebase and Architecture Proposal

### Technology Stack

**Foundation**:
- **Runtime**: Node.js (LTS, v20+)
- **Package Manager**: pnpm (v9+) with workspace support
- **Language**: TypeScript (strict mode)

**Framework**:
- **React**: v18+ (Server and Client Components)
- **Next.js**: v16 (App Router, not Pages Router)
- **Routing**: File-system based routing with route groups

**Styling**:
- **Tailwind CSS**: v4+ with custom theme configuration
- **Component Library**: shadcn/ui (copy-paste components, not npm package)
- **Dark Mode**: next-themes for theme persistence

**Content Management**:
- **Content Format**: Markdown/MDX for documentation pages
- **Content Loading**: next-mdx-remote or Contentlayer for MDX processing
- **Frontmatter**: YAML metadata for page titles, descriptions, navigation

---

### Repository Structure

**Monorepo Layout** (pnpm workspace):

```
career-topologies/
├── apps/
│   └── web/                          # Main Next.js application
│       ├── app/                      # Next.js App Router directory
│       ├── components/               # React components
│       ├── lib/                      # Utilities and helpers
│       ├── public/                   # Static assets
│       ├── styles/                   # Global styles
│       └── package.json
│
├── packages/
│   ├── ui/                           # Shared shadcn/ui components
│   │   ├── components/               # Button, Card, Alert, etc.
│   │   ├── lib/                      # Component utilities
│   │   └── package.json
│   │
│   └── config/                       # Shared configuration
│       ├── tailwind/                 # Tailwind config
│       ├── typescript/               # TS config
│       └── package.json
│
├── content/                          # Markdown/MDX content files
│   ├── pages/                        # Documentation pages
│   │   ├── about.mdx
│   │   ├── manifesto.mdx
│   │   ├── concepts.mdx
│   │   ├── topologies.mdx
│   │   ├── shapes.mdx
│   │   ├── references.mdx
│   │   └── contributing.mdx
│   │
│   ├── framework/                    # Framework section pages
│   │   ├── index.mdx
│   │   ├── leveling.mdx
│   │   ├── progression.mdx
│   │   └── guidelines.mdx
│   │
│   ├── management/                   # Management section pages
│   │   ├── index.mdx
│   │   └── developing-leaders.mdx
│   │
│   └── config/                       # Content configuration
│       ├── navigation.json           # Nav menu structure
│       ├── related-pages.json        # Related content mappings
│       └── metadata.json             # SEO defaults
│
├── .guided/                          # Project documentation (this blueprint)
│   ├── architecture/                 # Architecture proposals
│   ├── assessment/                   # Content analysis
│   └── schema/                       # Prompt schemas
│
├── pnpm-workspace.yaml              # Workspace configuration
├── package.json                      # Root package
├── tsconfig.json                     # Root TypeScript config
└── README.md
```

**Rationale**:
- **Monorepo**: Separates concerns (web app, UI components, content) while maintaining single repo
- **Content Separation**: Markdown files outside `apps/web` for easy editing without code navigation
- **Shared Packages**: `@career-topologies/ui` and `@career-topologies/config` for reusability
- **`.guided/` Directory**: Preserves this blueprint and assessment for future reference

---

### Next.js App Router Structure

**`apps/web/app/` Directory**:

```
apps/web/app/
├── layout.tsx                        # Root layout (Header, Footer, Providers)
├── page.tsx                          # Home page (/)
├── globals.css                       # Global Tailwind styles
│
├── (docs)/                           # Route group for documentation pages
│   ├── layout.tsx                    # Docs layout (Breadcrumbs, TOC sidebar)
│   ├── about/
│   │   └── page.tsx
│   ├── manifesto/
│   │   └── page.tsx
│   ├── concepts/
│   │   └── page.tsx
│   ├── topologies/
│   │   └── page.tsx
│   ├── shapes/
│   │   └── page.tsx
│   ├── references/
│   │   └── page.tsx
│   └── contributing/
│       └── page.tsx
│
├── framework/                        # Framework section
│   ├── layout.tsx                    # Framework layout (shared for sub-pages)
│   ├── page.tsx                      # Framework overview (/framework)
│   ├── leveling/
│   │   └── page.tsx
│   ├── progression/
│   │   └── page.tsx
│   └── guidelines/
│       └── page.tsx
│
├── management/                       # Management section
│   ├── layout.tsx                    # Management layout
│   ├── page.tsx                      # Management overview (/management)
│   └── developing-leaders/
│       └── page.tsx
│
└── api/                              # API routes (optional)
    └── search/
        └── route.ts                  # Search endpoint (if server-side)
```

**Route Groups**:
- **`(docs)/`**: Groups documentation pages sharing same layout (Documentation Pattern)
- No prefix in URL (e.g., `/about`, not `/(docs)/about`)
- Allows different layouts for different page types

**Layout Hierarchy**:
1. **Root Layout** (`app/layout.tsx`): Global Header, Footer, Theme Provider, metadata
2. **Docs Layout** (`app/(docs)/layout.tsx`): Adds Breadcrumbs, TOC sidebar (if enabled)
3. **Section Layouts** (`app/framework/layout.tsx`): Section-specific navigation or context

---

### Component Architecture

**`apps/web/components/` Directory**:

```
apps/web/components/
├── layout/                           # Layout components
│   ├── header.tsx                    # Global header with nav
│   ├── footer.tsx                    # Global footer
│   ├── breadcrumbs.tsx               # Breadcrumb navigation
│   ├── mobile-nav.tsx                # Hamburger menu drawer
│   └── theme-toggle.tsx              # Dark/light mode switcher
│
├── navigation/                       # Navigation components
│   ├── nav-menu.tsx                  # Primary nav menu
│   ├── related-pages.tsx             # Related pages cards
│   ├── next-previous.tsx             # Sequential navigation
│   └── toc.tsx                       # Table of contents sidebar
│
├── content/                          # Content components
│   ├── page-hero.tsx                 # Page title + description
│   ├── callout.tsx                   # Info/Tip/Warning callouts
│   ├── mdx-components.tsx            # Custom MDX component overrides
│   └── diagram-container.tsx         # Wrapper for interactive diagrams
│
├── interactive/                      # Interactive components (Client Components)
│   ├── leveling-table.tsx            # Expandable leveling table
│   ├── radar-chart.tsx               # Proficiency radar chart
│   ├── progression-matrix.tsx        # Progression heat map
│   ├── impact-autonomy-matrix.tsx    # Impact×Autonomy scatter plot
│   └── leadership-flowchart.tsx      # Leadership readiness flowchart
│
├── home/                             # Home page specific
│   ├── hero.tsx                      # Landing hero section
│   ├── audience-cards.tsx            # Audience identification cards
│   ├── framework-cards.tsx           # Framework component cards
│   └── cta-section.tsx               # Call-to-action section
│
└── search/                           # Search functionality (future)
    ├── search-modal.tsx              # Search overlay
    └── search-results.tsx            # Results display
```

**Component Patterns**:
- **Server Components** (default): Layout, navigation, static content
- **Client Components** (`'use client'`): Interactive charts, theme toggle, search modal
- **Composition**: Small, focused components composed into larger layouts
- **shadcn/ui**: Base components in `packages/ui/`, imported as needed

---

### Content Management

#### MDX File Structure

**Frontmatter Example** (`content/pages/manifesto.mdx`):

```yaml
---
title: Career Manifesto
description: Eight foundational principles for transparent, fair career development
category: docs
layout: documentation
showTOC: false
relatedPages:
  - about
  - concepts
  - framework
seo:
  keywords:
    - career principles
    - transparent careers
    - fair recognition
---
```

**Content Body**:
```markdown
# Career Manifesto

The Career Topologies framework is built on eight foundational principles...

## 1. Transparency

Career expectations should be clear, documented, and accessible to everyone.

<Callout type="principle">
This principle ensures that all team members understand what is expected...
</Callout>
```

#### Content Loading Strategy

**Option 1: Contentlayer** (Recommended):
- Transforms content files into type-safe data
- Automatic content validation
- Fast incremental builds
- Generates TypeScript types from frontmatter

**Option 2: next-mdx-remote**:
- Load MDX at request time
- More flexible for dynamic content
- No build-time processing

**Implementation** (`apps/web/lib/content.ts`):

```typescript
import { allPages } from 'contentlayer/generated';

export function getPageBySlug(slug: string) {
  return allPages.find(page => page.slug === slug);
}

export function getAllPages() {
  return allPages.sort((a, b) => a.title.localeCompare(b.title));
}
```

#### Content-to-Route Mapping

- **Content Path**: `content/pages/about.mdx`
- **Route**: `app/(docs)/about/page.tsx`
- **Page Component**:

```typescript
import { getPageBySlug } from '@/lib/content';
import { MDXContent } from '@/components/mdx-content';

export default async function AboutPage() {
  const page = getPageBySlug('about');
  
  return (
    <article>
      <PageHero title={page.title} description={page.description} />
      <MDXContent content={page.body.code} />
      <RelatedPages pages={page.relatedPages} />
    </article>
  );
}
```

---

### Navigation Configuration

**`content/config/navigation.json`**:

```json
{
  "primary": [
    { "label": "Home", "href": "/" },
    { "label": "About", "href": "/about" },
    { "label": "Framework", "href": "/framework" },
    { "label": "Concepts", "href": "/concepts" },
    { "label": "Manifesto", "href": "/manifesto" },
    { "label": "Contributing", "href": "/contributing" }
  ],
  "framework": [
    { "label": "Overview", "href": "/framework" },
    { "label": "Leveling", "href": "/framework/leveling" },
    { "label": "Progression Pillars", "href": "/framework/progression" },
    { "label": "Guidelines", "href": "/framework/guidelines" }
  ],
  "footer": {
    "framework": [
      { "label": "Overview", "href": "/framework" },
      { "label": "Manifesto", "href": "/manifesto" },
      { "label": "Core Concepts", "href": "/concepts" },
      { "label": "Career Topologies", "href": "/topologies" },
      { "label": "Career Shapes", "href": "/shapes" },
      { "label": "Management Levels", "href": "/management" }
    ],
    "resources": [
      { "label": "About", "href": "/about" },
      { "label": "References", "href": "/references" },
      { "label": "Contributing", "href": "/contributing" }
    ]
  }
}
```

**Usage**:

```typescript
import navigation from '@/content/config/navigation.json';

export function Header() {
  return (
    <nav>
      {navigation.primary.map(item => (
        <Link key={item.href} href={item.href}>{item.label}</Link>
      ))}
    </nav>
  );
}
```

---

### Search Implementation

**Basic Client-Side Search** (Initial Implementation):

**`apps/web/lib/search.ts`**:

```typescript
import Fuse from 'fuse.js';
import { allPages } from 'contentlayer/generated';

const searchIndex = new Fuse(allPages, {
  keys: ['title', 'description', 'headings', 'keywords'],
  threshold: 0.3,
  includeScore: true
});

export function searchContent(query: string) {
  return searchIndex.search(query);
}
```

**Search Modal Component**:

```typescript
'use client';

import { useState } from 'react';
import { searchContent } from '@/lib/search';

export function SearchModal() {
  const [query, setQuery] = useState('');
  const results = searchContent(query);
  
  return (
    <Dialog>
      <Input value={query} onChange={e => setQuery(e.target.value)} />
      <Results items={results} />
    </Dialog>
  );
}
```

**Future Enhancement**: Algolia or Meilisearch for advanced search features

---

### Metadata and SEO

**Root Layout** (`app/layout.tsx`):

```typescript
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Career Topologies',
    default: 'Career Topologies | Transparent Career Frameworks'
  },
  description: 'Open-source career frameworks for technology organizations',
  openGraph: {
    type: 'website',
    siteName: 'Career Topologies',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }]
  }
};
```

**Page-Level Metadata** (`app/(docs)/manifesto/page.tsx`):

```typescript
export const metadata: Metadata = {
  title: 'Career Manifesto',
  description: 'Eight foundational principles for transparent, fair career development',
  openGraph: {
    images: [{ url: '/og-manifesto.png' }]
  }
};
```

---

### Build and Deployment

**Scripts** (`apps/web/package.json`):

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "type-check": "tsc --noEmit"
  }
}
```

**Environment Variables** (`.env.local`):

```bash
NEXT_PUBLIC_SITE_URL=https://careertopologies.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX  # Google Analytics (optional)
```

**Deployment Target**: Vercel (recommended for Next.js) or any Node.js hosting

**Build Output**: Static where possible, dynamic for interactive components

---

### Key Architectural Decisions

1. **App Router over Pages Router**: Leverage React Server Components, nested layouts, streaming
2. **MDX for Content**: Allows custom components (callouts, interactive charts) within markdown
3. **Contentlayer**: Type-safe content management with build-time validation
4. **Route Groups**: Clean URLs while maintaining logical code organization
5. **Monorepo**: Separation of concerns, shared UI components, scalable for future growth
6. **Client-Side Search**: Simple initial implementation, upgradable to server-side as needed

---

