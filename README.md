# Career Topologies

Transparent, equitable career development framework for technology organizations.

## 📋 Project Status

**Current Phase**: ✅ **Phase 3 Complete - CloudX Design System Applied**

### Completed Milestones

- ✅ **Phase 1**: Foundation and Codebase Setup (Next.js 16 + Tailwind v4)
- ✅ **Phase 2**: Content Infrastructure and Navigation MVP (14 pages)
- ✅ **Phase 3**: MDX to TSX Migration (13 content pages migrated)
- ✅ **CloudX Design Tokens**: Typography, colors, spacing applied
- ✅ **Home Page Redesign**: Professional, consistent design

### Latest Updates (November 2025)

**CloudX Design System Integration:**
- ✅ Custom typography: Aeonik (sans), STK Bureau Serif (serif), Ubuntu Mono (mono)
- ✅ CloudX color palette (#f6f5f2 background, deep blue-black primary)
- ✅ Consistent spacing (0.8rem radius, 86rem max container)
- ✅ Professional home page with card-based navigation
- ✅ Standardized h1 typography (font-serif across all pages)
- ✅ Container alignment fixes (mx-auto px-4 pattern)

**Production Status:**
- ✅ Build passing (Next.js 16 + Turbopack)
- ✅ 14 routes fully functional
- ✅ Dark/light theme working
- ✅ Zero build errors

## 🚀 Quick Start

### Prerequisites

- Node.js v20+ (LTS recommended)
- pnpm v9+

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The application will be available at `http://localhost:3000`.

### Available Scripts

```bash
pnpm dev        # Start development server
pnpm build      # Build for production
pnpm typecheck  # Run TypeScript type checking
pnpm lint       # Run ESLint
```

## 🏗️ Technology Stack

- **Framework**: Next.js 16 (App Router + Turbopack)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4 (CSS-first configuration)
- **Components**: shadcn/ui
- **Typography**: CloudX Design System
  - Aeonik (sans-serif) - 148KB
  - STK Bureau Serif (serif) - 90KB  
  - Ubuntu Mono (monospace) - 80KB
- **Theme**: next-themes (dark/light mode)
- **Package Manager**: pnpm (monorepo)

## 📁 Project Structure

```
careertopologies.com/
├── apps/
│   └── web/                    # Main Next.js application
│       ├── app/                # Next.js App Router
│       │   ├── (site)/         # 13 content pages
│       │   ├── fonts/          # CloudX typography (318KB WOFF2)
│       │   ├── globals.css     # Tailwind v4 + design tokens
│       │   ├── layout.tsx      # Root layout with fonts
│       │   └── page.tsx        # Home page
│       ├── components/         # React components
│       │   ├── content/        # Page hero, callouts
│       │   ├── layout/         # Header, footer, breadcrumbs
│       │   ├── mdx/            # Custom MDX components
│       │   ├── providers/      # Theme provider
│       │   └── ui/             # shadcn/ui components
│       └── lib/                # Utilities
├── packages/
│   ├── ui/                     # Shared UI (future)
│   └── config/                 # Shared config (future)
└── .guided/                    # Project documentation
    ├── architecture/           # Design proposals
    ├── assessment/             # Content analysis
    └── operation/              # Implementation logs
```

## 📄 Implemented Pages (14 routes)

**Main Pages:**
- `/` - Home (CloudX-styled hero + features)
- `/about` - Project overview
- `/manifesto` - 8 core principles
- `/contributing` - GitHub workflow

**Framework Section:**
- `/framework` - Career framework overview
- `/framework/leveling` - Career levels (5 levels)
- `/framework/progression` - Progression pillars (4 pillars)
- `/framework/guidelines` - Guidelines and best practices

**Topologies & Patterns:**
- `/topologies` - Organizational structures (3 models)
- `/shapes` - Career shapes (4 paths)
- `/concepts` - Core concepts (7 concepts)

**Management:**
- `/management` - Management layers overview
- `/management/developing-leaders` - Leadership readiness

**Resources:**
- `/references` - 28 references in 5 categories

## 🎯 Implementation Roadmap

This project follows a phased implementation approach:

### ✅ Phase 1: Foundation and Codebase Setup (COMPLETE)
- Repository initialization
- Next.js 16 + App Router
- Tailwind CSS v4 configuration
- shadcn/ui setup
- Theme management

### ✅ Phase 2: Content Infrastructure and Navigation MVP (COMPLETE)
- Global layout components (Header, Footer, Breadcrumbs)
- Navigation system with route groups
- App Router routing for 14 pages
- MDX custom components library

### ✅ Phase 3: MDX to TSX Migration (COMPLETE)
- Migrated all 13 content pages from MDX to TSX
- Created TypeScript data modules for structured content
- Eliminated Contentlayer dependency
- Full Next.js 16 + Turbopack compatibility
- **Commits:** `49b034f` → `7eff47a`

### ✅ CloudX Design System Integration (COMPLETE)
- Downloaded and configured CloudX fonts (Aeonik, STK Bureau, Ubuntu Mono)
- Applied CloudX color palette and spacing tokens
- Redesigned home page with professional card-based layout
- Standardized typography (h1 uses font-serif)
- Fixed container alignment across all pages
- **Status:** All changes in working directory (ready to commit)

### 📅 Phase 4: Interactivity, SEO, and Search (NEXT)
- Search functionality
- SEO optimization (metadata, OG images)
- Analytics integration
- Interactive visualizations

### 📅 Phase 5: Performance and Production Deployment
- Performance optimization
- Production deployment (Vercel)
- CI/CD pipeline
- Monitoring and analytics

## 🎨 Design System

**CloudX Design Tokens Applied:**

**Typography:**
- Sans: Aeonik (Regular, Medium, SemiBold)
- Serif: STK Bureau Serif (Regular, Medium) - Used for all h1-h6
- Mono: Ubuntu Mono - Used for code blocks

**Colors:**
- Background: `#f6f5f2` (warm off-white)
- Primary: Deep blue-black (`222.2 47.4% 11.2%`)
- Secondary: Light purple-gray (`255deg 9.52% 91.76%`)
- Accent: Deep purple (`254 50% 38%`)
- Muted Foreground: Medium gray (`0deg 0% 47.84%`)

**Layout:**
- Border radius: `0.8rem`
- Max container: `86rem` (1376px)
- Container padding: `1rem` (16px)

## 🚧 Pending Work

**Immediate (Ready to Commit):**
- [ ] Commit CloudX design system changes
- [ ] Remove emoji icons from "Get Started" section
- [ ] Add proper icons or remove icon section entirely

**Next Phase:**
- [ ] Implement search functionality
- [ ] Add SEO metadata and OG images
- [ ] Create interactive visualizations
- [ ] Set up analytics

## 📚 Documentation

- **Architecture**: See `.guided/architecture/` for design proposals
- **Migration**: See `.guided/migration-complete-summary.md` for MDX→TSX details
- **CloudX Implementation**: See `.guided/operation/cloudx-design-tokens-implementation.md`

## 🤝 Contributing

See `/contributing` page or the GitHub workflow documentation in the app.

## 📄 License

To be determined - This is a framework for career development in technology organizations.

## 📚 Documentation

Detailed architecture and implementation documentation is available in `.guided/`:

- [Site Implementation Roadmap](.guided/architecture/site-implementation-phased-plan.md)
- [Phase 1 Execution Brief](.guided/operation/site-implementation-execution.md)
- [Site Structure Proposal](.guided/architecture/site-structure-proposal.section1-2-intro.md)

## 🤝 Contributing

This project is under active development. Contribution guidelines will be available in future phases.

## 📄 License

MIT License - Open source for the community.

---

**Built with Next.js, Tailwind CSS, and shadcn/ui**
