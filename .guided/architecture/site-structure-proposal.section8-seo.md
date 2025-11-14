## 8. SEO and Content Strategy

### URL Strategy

#### URL Structure Patterns

**Top-Level Pages** (Foundational and Community):
- Pattern: `/{slug}`
- Examples: `/about`, `/manifesto`, `/concepts`, `/topologies`, `/shapes`, `/references`, `/contributing`
- Characteristics: Short, memorable, single-word or hyphenated slugs

**Framework Section** (Hierarchical Nesting):
- Pattern: `/framework/{component}`
- Examples: `/framework/leveling`, `/framework/progression`, `/framework/guidelines`
- Characteristics: Clear parent-child relationship, `/framework` serves as hub

**Management Section** (Specialized Nesting):
- Pattern: `/management/{topic}`
- Examples: `/management/developing-leaders`
- Characteristics: Limited depth (max 2 levels), focused sub-topics

#### URL Conventions

- **Lowercase**: All URLs use lowercase letters (`/manifesto`, not `/Manifesto`)
- **Hyphens for Spaces**: Multi-word slugs use hyphens (`/developing-leaders`, not `/developing_leaders` or `/developingLeaders`)
- **No Trailing Slashes**: Canonical URLs omit trailing slash (`/framework`, not `/framework/`)
- **Descriptive and Readable**: URLs reflect page content (`/progression` vs. `/pillars` or `/comp-model`)
- **Avoid Deep Nesting**: Maximum 2 levels (`/framework/leveling`, not `/framework/structure/leveling`)

#### Consistency Rules

- Framework components always under `/framework/` prefix
- Management topics always under `/management/` prefix
- Top-level pages for broad concepts (Topologies, Shapes, Manifesto)
- No versioning in URLs (v1.0.0 badge visible on site, not in paths)

---

### Page Title Patterns

**Template Structure**: `{Page Title} | Career Topologies`

#### Pattern Examples

**Home Page**:
- Title: `Career Topologies | Transparent Career Frameworks for Technology Organizations`
- Pattern: Brand name + value proposition

**Top-Level Pages**:
- Title: `{Concept Name} | Career Topologies`
- Examples:
  - `Career Manifesto | Career Topologies`
  - `Core Concepts | Career Topologies`
  - `Professional Shapes | Career Topologies`

**Framework Pages**:
- Title: `{Component Name} – Career Topologies Framework`
- Examples:
  - `Leveling – Career Topologies Framework`
  - `Progression Pillars – Career Topologies Framework`
  - `Guidelines – Career Topologies Framework`
- Note: En dash (–) differentiates from pipe separator

**Specialized Pages**:
- Title: `{Topic} | Career Topologies`
- Examples:
  - `Management Levels | Career Topologies`
  - `Developing New Leaders | Career Topologies`
  - `References | Career Topologies`

#### Title Optimization

- **Length**: 50-60 characters (Google displays ~50-60 chars)
- **Keywords Front-Loaded**: Most important terms early in title
- **Brand Consistency**: "Career Topologies" in every title for recognition
- **Descriptive**: Clear indication of page content without clicking

---

### Meta Description Patterns

**Template Structure**: `{Action-oriented summary highlighting value and audience}`

#### Pattern Examples

**Home Page**:
```
Discover Career Topologies: open-source career frameworks for technology organizations. 
Choose from Y, W, or Network models with clear leveling, progression pillars, and 
transparent criteria. Free to use and customize.
```
(~150 characters)

**Framework Pages**:
```
{Component} defines {what it does}. Learn {key benefit} through {method/tool}. 
Part of the Career Topologies framework.
```

Examples:
- **Leveling**: "Define career levels using Impact×Autonomy dimensions. Create transparent progression criteria for technology roles. Interactive tools and topology alignment diagrams included."
- **Progression Pillars**: "Six competency dimensions (Delivery, Technical Domain, Collaboration, Autonomy, Initiative, Mentoring) with proficiency scales. Assess growth and plan development."

**Concept Pages**:
```
{Concept explanation}: {what it is and why it matters}. {Audience benefit}.
```

Examples:
- **Manifesto**: "Eight foundational principles for transparent, fair career development: Transparency, Fair Recognition, Equality, Growth Mindset, Evidence-Based, Continuous Feedback, Flexibility, Open Source."
- **Topologies**: "Compare Y-shaped, W-shaped, and Network career models. Choose the topology that fits your organizational culture, maturity stage, and team structure."

#### Meta Description Guidelines

- **Length**: 150-160 characters (Google displays ~155-160 chars)
- **Actionable**: Use verbs like "Discover", "Learn", "Compare", "Define", "Assess"
- **Audience-Focused**: Address user needs and pain points
- **Keyword-Rich**: Include primary search terms naturally
- **Unique**: Each page has distinct description, not duplicates

---

### Open Graph Metadata

**Purpose**: Optimize social media sharing (LinkedIn, Twitter/X, Slack previews)

#### Default OG Pattern

Every page includes:
```html
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Career Topologies" />
<meta property="og:title" content="{Page Title}" />
<meta property="og:description" content="{Meta Description}" />
<meta property="og:url" content="{Canonical URL}" />
<meta property="og:image" content="{Share Image URL}" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
```

#### Share Image Strategy

**Default Share Image**: Career Topologies logo + tagline + topology visualization (1200×630px)

**Page-Specific Images** (Optional):
- **Home**: Three topologies side-by-side (Y, W, Network)
- **Leveling**: Impact×Autonomy Matrix preview
- **Progression**: Proficiency Radar Chart preview
- **Manifesto**: Eight principles icon grid

**Image Requirements**:
- Dimensions: 1200×630px (LinkedIn/Facebook optimal)
- Format: PNG or JPG
- File size: <1MB for fast loading
- Text: Large, readable on mobile previews (minimum 60px font)

#### Twitter Card Metadata

```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="{Page Title}" />
<meta name="twitter:description" content="{Meta Description}" />
<meta name="twitter:image" content="{Share Image URL}" />
```

---

### Internal Linking Strategy

#### Cross-Linking Patterns

**Contextual In-Content Links**:
- Link key concepts to their definition pages on first mention
- Example: "Learn more about the Y-shaped topology" → links to `/topologies`
- Example: "Six progression pillars" → links to `/framework/progression`

**Related Pages Component**:
- 3-6 algorithmically or manually curated suggestions at page bottom
- Category-based matching (Framework pages link to other Framework pages)
- Journey-based suggestions (Leveling → Progression → Guidelines)

**Breadcrumb Navigation**:
- Automatic internal links showing hierarchy
- Example: `Home > Framework > Leveling` (each segment clickable)

**Next/Previous Navigation**:
- Sequential progression through related content
- Example: Framework → Leveling → Progression → Guidelines

**Footer Navigation**:
- Comprehensive site map with all 14 pages
- Organized by content pillar (Framework, Resources, Community)

#### Link Anchor Text Guidelines

- **Descriptive**: "View Progression Pillars" not "Click here"
- **Keyword-Rich**: Use page titles or concept names as anchor text
- **Consistent**: Same page referenced with same anchor text across site
- **Natural**: Integrate links smoothly into prose, not forced

#### Internal Link Density

- **High-Value Pages**: Framework, Leveling, Progression (10-15 internal links)
- **Medium-Value Pages**: Topologies, Shapes, Management (6-10 links)
- **Low-Value Pages**: References, Contributing (3-6 links, mostly external)

---

### Schema.org Structured Data

**Implementation Approach**: Minimal, high-value structured data for enhanced search results

#### Breadcrumb Schema

Applied to: All pages with breadcrumbs

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://careertopologies.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Framework",
      "item": "https://careertopologies.com/framework"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Leveling",
      "item": "https://careertopologies.com/framework/leveling"
    }
  ]
}
```

#### Organization Schema

Applied to: Home page only

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Career Topologies",
  "url": "https://careertopologies.com",
  "logo": "https://careertopologies.com/logo.png",
  "sameAs": [
    "https://github.com/career-topologies/career-topologies",
    "https://linkedin.com/company/career-topologies",
    "https://instagram.com/career-topologies"
  ],
  "description": "Open-source career frameworks for technology organizations"
}
```

#### Article/WebPage Schema (Optional)

Applied to: Framework documentation pages

```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "{Page Title}",
  "description": "{Meta Description}",
  "url": "{Canonical URL}",
  "publisher": {
    "@type": "Organization",
    "name": "Career Topologies"
  }
}
```

---

### Content Strategy Principles

#### Keyword Strategy

**Primary Keywords** (High Volume, High Intent):
- "career framework"
- "career leveling"
- "career progression"
- "engineering career ladder"
- "IC vs manager track"

**Secondary Keywords** (Medium Volume, Specific Intent):
- "Y-shaped career path"
- "progression pillars"
- "impact autonomy matrix"
- "T-shaped skills"
- "leadership readiness"

**Long-Tail Keywords** (Low Volume, High Conversion):
- "how to implement career framework"
- "career development for software engineers"
- "transparent promotion criteria"
- "engineering manager vs IC track"

#### Content Update Cadence

- **Framework Pages**: Review quarterly, update for framework version changes
- **References**: Update annually as new research emerges
- **Community Pages**: Update as contribution patterns evolve
- **Blog/News** (Future): Weekly or monthly for ongoing engagement

#### Canonical URL Management

- Set canonical tags to avoid duplicate content issues
- Example: `/framework` canonical, `/framework/` redirects to `/framework`
- Ensure consistent domain usage (www vs non-www)

---

### Performance and Technical SEO

**Next.js Advantages**:
- Server-side rendering (SSR) for fast initial page load
- Static generation where possible (Framework pages, Concepts, References)
- Automatic code splitting for optimal bundle sizes
- Image optimization with Next.js Image component

**Core Web Vitals Targets**:
- Largest Contentful Paint (LCP): <2.5s
- First Input Delay (FID): <100ms
- Cumulative Layout Shift (CLS): <0.1

**Mobile Optimization**:
- Responsive design (Tailwind CSS)
- Touch-friendly navigation (hamburger menu, large tap targets)
- Fast mobile load times (optimized images, minimal JavaScript)

---

