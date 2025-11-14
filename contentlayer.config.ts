import { defineDocumentType, makeSource } from 'contentlayer/source-files';

// Generic Page type for documentation pages
export const Page = defineDocumentType(() => ({
  name: 'Page',
  filePathPattern: `pages/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the page',
      required: true,
    },
    description: {
      type: 'string',
      description: 'The description of the page',
      required: true,
    },
    slug: {
      type: 'string',
      description: 'The URL slug',
      required: true,
    },
    category: {
      type: 'string',
      description: 'Content category',
      required: false,
    },
    section: {
      type: 'string',
      description: 'Pillar grouping',
      required: false,
    },
    layout: {
      type: 'string',
      description: 'Layout pattern',
      required: false,
      default: 'documentation',
    },
    publishedAt: {
      type: 'date',
      description: 'Publication date',
      required: false,
    },
    updatedAt: {
      type: 'date',
      description: 'Last update date',
      required: false,
    },
    showTOC: {
      type: 'boolean',
      description: 'Show table of contents',
      required: false,
      default: true,
    },
    showBreadcrumbs: {
      type: 'boolean',
      description: 'Show breadcrumbs',
      required: false,
      default: true,
    },
    relatedPages: {
      type: 'list',
      of: { type: 'string' },
      description: 'Related page slugs',
      required: false,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (page) => `/${page.slug}`,
    },
    slugAsParams: {
      type: 'string',
      resolve: (page) => page.slug,
    },
  },
}));

// Topology entity type
export const Topology = defineDocumentType(() => ({
  name: 'Topology',
  filePathPattern: `topologies/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    slug: {
      type: 'string',
      required: true,
    },
    entityType: {
      type: 'string',
      required: false,
      default: 'topology',
    },
    order: {
      type: 'number',
      required: false,
      default: 0,
    },
    summary: {
      type: 'string',
      required: false,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (topology) => `/topologies/${topology.slug}`,
    },
  },
}));

// Shape entity type
export const Shape = defineDocumentType(() => ({
  name: 'Shape',
  filePathPattern: `shapes/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    slug: {
      type: 'string',
      required: true,
    },
    entityType: {
      type: 'string',
      required: false,
      default: 'shape',
    },
    order: {
      type: 'number',
      required: false,
      default: 0,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (shape) => `/shapes/${shape.slug}`,
    },
  },
}));

// Principle entity type
export const Principle = defineDocumentType(() => ({
  name: 'Principle',
  filePathPattern: `principles/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    slug: {
      type: 'string',
      required: true,
    },
    order: {
      type: 'number',
      required: false,
      default: 0,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (principle) => `/manifesto#${principle.slug}`,
    },
  },
}));

// Career Level entity type
export const CareerLevel = defineDocumentType(() => ({
  name: 'CareerLevel',
  filePathPattern: `levels/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    slug: {
      type: 'string',
      required: true,
    },
    order: {
      type: 'number',
      required: false,
      default: 0,
    },
    level: {
      type: 'number',
      required: false,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (level) => `/framework/leveling#${level.slug}`,
    },
  },
}));

// Progression Pillar entity type
export const ProgressionPillar = defineDocumentType(() => ({
  name: 'ProgressionPillar',
  filePathPattern: `pillars/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    slug: {
      type: 'string',
      required: true,
    },
    order: {
      type: 'number',
      required: false,
      default: 0,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (pillar) => `/framework/progression#${pillar.slug}`,
    },
  },
}));

// Framework Page type (for framework/* pages)
export const FrameworkPage = defineDocumentType(() => ({
  name: 'FrameworkPage',
  filePathPattern: `framework/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    slug: {
      type: 'string',
      required: true,
    },
    showTOC: {
      type: 'boolean',
      required: false,
      default: true,
    },
    showBreadcrumbs: {
      type: 'boolean',
      required: false,
      default: true,
    },
    relatedPages: {
      type: 'list',
      of: { type: 'string' },
      required: false,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (page) => `/framework/${page.slug === 'index' ? '' : page.slug}`,
    },
  },
}));

// Management Page type
export const ManagementPage = defineDocumentType(() => ({
  name: 'ManagementPage',
  filePathPattern: `management/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    slug: {
      type: 'string',
      required: true,
    },
    showTOC: {
      type: 'boolean',
      required: false,
      default: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (page) => `/management/${page.slug === 'index' ? '' : page.slug}`,
    },
  },
}));

export default makeSource({
  contentDirPath: './content',
  documentTypes: [
    Page,
    Topology,
    Shape,
    Principle,
    CareerLevel,
    ProgressionPillar,
    FrameworkPage,
    ManagementPage,
  ],
  disableImportAliasWarning: true,
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [],
    esbuildOptions: (options) => {
      options.platform = 'node';
      options.target = 'es2020';
      options.external = ['react', 'react-dom', 'react/jsx-runtime', 'react/jsx-dev-runtime'];
      return options;
    },
  },
});
