# Career Topologies

Transparent, equitable career development framework for technology organizations.

## 📋 Project Status

**Phase 1 - Foundation and Codebase Setup**: ✅ **COMPLETE**

- ✅ pnpm monorepo workspace configured
- ✅ Next.js 16 App Router application running
- ✅ Tailwind CSS v4 with custom theme
- ✅ shadcn/ui component library initialized
- ✅ Dark/light theme toggle with persistence
- ✅ TypeScript strict mode configured

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

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui
- **Theme**: next-themes
- **Package Manager**: pnpm (monorepo)

## 📁 Project Structure

```
career-topologies/
├── apps/
│   └── web/                    # Main Next.js application
│       ├── app/                # Next.js App Router
│       ├── components/         # React components
│       └── lib/                # Utilities
├── packages/
│   ├── ui/                     # Shared UI components (future)
│   └── config/                 # Shared configuration (future)
├── content/                    # MDX content files (Phase 2)
└── .guided/                    # Project documentation
```

## 🎯 Implementation Roadmap

This project follows a phased implementation approach:

### ✅ Phase 1: Foundation and Codebase Setup (COMPLETE)
- Repository initialization
- Next.js application bootstrap
- Tailwind CSS configuration
- shadcn/ui setup
- Theme management

### 🔄 Phase 2: Content Infrastructure and Navigation MVP (NEXT)
- Contentlayer configuration
- Content directory structure
- Global layout components (Header, Footer, Breadcrumbs)
- Navigation system
- App Router routing for 14 pages

### 📅 Phase 3: Page Implementation and Content Population
- 14 documentation pages
- Interactive visualizations
- MDX custom components

### 📅 Phase 4: Interactivity, SEO, and Search
- Search functionality
- SEO optimization
- Analytics integration

### 📅 Phase 5: Performance and Production Deployment
- Performance optimization
- Production deployment
- CI/CD pipeline

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
