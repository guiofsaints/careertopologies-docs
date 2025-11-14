## 6. Global Layout and Components

### Header Component

**Location**: Persistent global header across all pages  
**Technology**: Next.js App Router layout, Tailwind CSS, shadcn/ui components

#### Header Structure

**Left Section - Branding**:
- **Logo**: "Career Topologies" wordmark with optional icon (topology symbol)
- **Version Badge**: "v1.0.0" displayed next to logo on desktop (hidden on mobile)
- **Link**: Logo links to home page (`/`)

**Center Section - Primary Navigation**:
- Six primary navigation items (horizontal menu bar):
  - **Home** (`/`)
  - **About** (`/about`)
  - **Framework** (`/framework`)
  - **Concepts** (`/concepts`)
  - **Manifesto** (`/manifesto`)
  - **Contributing** (`/contributing`)
- Active page indicated with underline or color accent
- Hover states for interactive feedback

**Right Section - Utilities**:
- **Search Entry Point**: Search icon button opening search modal (if implemented) or linking to search page
- **Theme Toggle**: Dark/light mode switcher using `next-themes`
  - Moon icon (dark mode) / Sun icon (light mode)
  - Persists preference to localStorage
  - System preference detection on first visit
- **GitHub Icon**: Direct link to repository (optional, can also be in footer)

#### Responsive Behavior

**Desktop (≥1024px)**:
- Full horizontal navigation displayed
- All utilities visible

**Tablet (768px - 1023px)**:
- Condensed navigation (shorter labels or icons)
- Utilities remain visible

**Mobile (<768px)**:
- Hamburger menu icon replacing navigation items
- Slide-out drawer/sheet menu (shadcn/ui Sheet component)
- Theme toggle and search remain accessible in header or drawer
- Full navigation items displayed vertically in drawer

---

### Footer Component

**Location**: Global footer on all pages  
**Layout**: Four-column grid (desktop) collapsing to single column (mobile)

#### Footer Structure

**Column 1 - About Career Topologies**:
- **Project Description**: 2-3 sentence summary of framework purpose
- **Social Media Links**:
  - Instagram (icon + link)
  - LinkedIn (icon + link)
  - YouTube (icon + link)
  - GitHub (icon + link)
- **Sponsorship Link**: "Sponsor this project" (GitHub Sponsors or similar)

**Column 2 - Framework**:
- Overview (`/framework`)
- Manifesto (`/manifesto`)
- Core Concepts (`/concepts`)
- Career Topologies (`/topologies`)
- Career Shapes (`/shapes`)
- Management Levels (`/management`)

**Column 3 - Resources**:
- About (`/about`)
- References (`/references`)
- Contributing (`/contributing`)
- GitHub Issues & Feedback (external link)
- GitHub Discussions (external link)

**Column 4 - Community**:
- GitHub Repository (external link)
- MIT License (link to LICENSE file or license page)
- Releases & Changelog (GitHub releases)
- Sponsor Project (duplicate of sponsorship link for prominence)

#### Footer Bottom Bar

- **Copyright**: "© 2025 Career Topologies. Open source under MIT License."
- **Legal Links** (if applicable): Privacy Policy, Terms of Use (optional for open-source docs)
- **Built With**: "Built with Next.js, Tailwind CSS, and shadcn/ui" (optional attribution)

#### Responsive Behavior

**Desktop**: Four-column grid with adequate spacing  
**Tablet**: Two-column grid (2x2 layout)  
**Mobile**: Single column, collapsible accordion sections for each category (optional for space efficiency)

---

### Search Functionality

**Current Status**: Not implemented in initial version (navigation and cross-links provide discovery)

**Future Implementation Considerations**:

#### Search Indexing

**Indexed Content**:
- All page titles and descriptions
- Core concepts definitions (7 concepts)
- Framework component names and descriptions
- Progression pillar names and definitions
- Reference titles and categories
- Heading text from all pages

**Not Indexed**:
- External reference URLs (listed but not searchable content)
- Visual component alt text (unless specifically descriptive)

#### Search UX Pattern

**Option 1 - Modal Search** (Recommended):
- Search icon in header opens modal overlay
- Type-ahead suggestions as user types
- Results categorized by page type (Framework, Concepts, Resources)
- Click result navigates to page with relevant section highlighted
- Keyboard shortcuts: `Cmd/Ctrl + K` to open, `Esc` to close

**Option 2 - Dedicated Search Page**:
- Search icon links to `/search` page
- Full-page search interface with filters
- More suitable if extensive content volume

**Technology Options**:
- **Client-side**: Lunr.js or Fuse.js for static search index
- **Server-side**: Algolia or similar for more advanced features
- **Next.js**: Route handlers for API-based search

---

### Breadcrumb Component

**Location**: Below header on second-level and third-level pages  
**Pattern**: `Home > Section > Page`

#### Structure

- **Home Icon** or "Home" text linking to `/`
- **Separator**: `>` or `/` character
- **Section Link**: Links to parent page (e.g., "Framework" for `/framework/leveling`)
- **Current Page**: Non-clickable, plain text showing current location

#### Examples

- `/framework/leveling` → `Home > Framework > Leveling`
- `/management/developing-leaders` → `Home > Management > Developing Leaders`
- `/topologies` → No breadcrumbs (top-level page)

#### Responsive Behavior

**Desktop**: Full breadcrumb path displayed  
**Mobile**: Truncate middle sections with ellipsis if path is long, or show "Back to [Parent]" button instead

---

### Table of Contents (TOC) Component

**Location**: Right sidebar on content-heavy pages (Leveling, Progression, Guidelines, About)  
**Purpose**: Jump navigation to major page sections

#### Structure

- **Heading**: "On This Page" or "Contents"
- **Section Links**: Clickable list of H2 and H3 headings from page content
- **Active Section Highlighting**: Current scroll position indicated with accent color or bold text
- **Smooth Scroll**: Click link scrolls smoothly to section

#### Responsive Behavior

**Desktop (≥1280px)**: Fixed right sidebar, sticky positioning as user scrolls  
**Tablet/Mobile (<1280px)**: Collapsible accordion at top of content, or hidden entirely to save space

---

### Related Pages Component

**Location**: Bottom of each content page  
**Purpose**: Context-aware navigation suggestions

#### Variants

**Explore Variant** (Conceptual/Landing Pages):
- Grid of 4-6 cards with icons, titles, and short descriptions
- Encourages broad exploration
- Used on: Home, About, Concepts

**Learn Variant** (Framework Pages):
- Emphasizes progression through framework components
- Title: "Next Steps" or "Learn More"
- Used on: Framework, Leveling, Progression

**Related Variant** (Specialized Pages):
- Compact grid of 3-6 related pages
- Algorithm: Category matching + manual curation
- Used on: Shapes, Management, Topologies

#### Structure Per Card

- **Icon**: Visual representing page topic (optional)
- **Page Title**: Clickable heading linking to page
- **Description**: 1-2 sentence summary of page purpose
- **CTA**: "Learn more" or arrow icon

#### Responsive Behavior

**Desktop**: 2-3 column grid  
**Tablet**: 2 column grid  
**Mobile**: Single column stack

---

### Callout Components

**Purpose**: Highlight important information, principles, warnings, or tips

#### Callout Types

**Info Callout** (Blue):
- General information, context, or explanations
- Icon: Information circle
- Use: Clarifying concepts, providing examples

**Principle Callout** (Purple):
- Framework principles from the Manifesto
- Icon: Star or principle icon
- Use: Highlighting alignment with eight principles

**Tip Callout** (Green):
- Best practices, recommendations, optimization suggestions
- Icon: Lightbulb
- Use: Implementation guidance, practical advice

**Warning Callout** (Yellow/Orange):
- Common pitfalls, considerations, caveats
- Icon: Alert triangle
- Use: Change management challenges, governance warnings

**Note Callout** (Gray):
- Supplementary information, asides, future considerations
- Icon: Note or document icon
- Use: Additional context without disrupting flow

#### Structure

- **Icon**: Left-aligned visual indicator
- **Title**: Optional callout heading (e.g., "Best Practice", "Important")
- **Content**: Paragraph or list of callout content
- **Styling**: Background color tint, left border accent (shadcn/ui Alert component)

---

### Next/Previous Navigation

**Location**: Bottom of content pages (above Related Pages)  
**Purpose**: Linear progression through related content

#### Structure

- **Previous Link**: Left-aligned, shows previous page title with arrow `← Previous: [Title]`
- **Next Link**: Right-aligned, shows next page title with arrow `Next: [Title] →`
- **Logic**: Based on content hierarchy or manual sequencing
  - Example: Leveling → Progression → Guidelines
  - Example: Management → Developing Leaders

#### Responsive Behavior

**Desktop**: Side-by-side layout (Previous left, Next right)  
**Mobile**: Stacked vertically (Previous above, Next below)

---

### Page Hero Component

**Location**: Top of each content page (below breadcrumbs)  
**Purpose**: Establish page context with title, description, and optional visual

#### Structure

- **Page Title** (H1): Large, prominent heading
- **Page Description**: 1-2 sentence summary of page purpose
- **Optional Badge**: Category label (Framework, Concepts, Resources)
- **Optional Visual**: Relevant illustration or icon representing page topic

#### Examples

- **Leveling Page**: Title "Career Topologies – Leveling", Description "Define clear progression paths using Impact×Autonomy dimensions"
- **Manifesto Page**: Title "Career Manifesto", Description "Eight foundational principles guiding transparent, fair career development"

---

### Diagram Placeholder Component

**Purpose**: Consistent container for visual components (charts, matrices, flowcharts)

#### Structure

- **Container**: Responsive wrapper with max-width and centering
- **Title**: Optional diagram title or caption
- **Diagram Area**: SVG, Canvas, or image element
- **Legend** (if applicable): Color coding or symbol explanations
- **Interaction Hints**: Hover tooltips, click instructions

#### Responsive Behavior

- **Desktop**: Full-width diagram with optimal sizing
- **Tablet**: Scaled-down diagram, may require horizontal scroll if complex
- **Mobile**: Further scaled or vertical orientation for flowcharts

---

### Technology Implementation Notes

**Next.js 16 App Router**:
- Layout component (`app/layout.tsx`) wraps all pages with Header and Footer
- Server Components for static content, Client Components for interactivity (theme toggle, search modal)

**Tailwind CSS**:
- Utility-first styling for responsive design
- Custom theme configuration for brand colors (purple/blue accent, dark mode support)

**shadcn/ui Components**:
- Button, Sheet (mobile menu), Alert (callouts), Card (navigation cards)
- Dropdown Menu (potential for Framework sub-navigation)
- Theme provider for dark/light mode

**next-themes**:
- Seamless dark mode implementation
- System preference detection
- No flash of unstyled content (FOUC)

---

