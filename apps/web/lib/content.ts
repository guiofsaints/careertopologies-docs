import { allPages, allFrameworkPages, allManagementPages, allTopologies, allShapes } from 'contentlayer/generated';

// Get all pages
export function getAllPages() {
  return allPages.sort((a, b) => a.title.localeCompare(b.title));
}

// Get page by slug
export function getPageBySlug(slug: string) {
  return allPages.find((page) => page.slug === slug);
}

// Get all framework pages
export function getAllFrameworkPages() {
  return allFrameworkPages.sort((a, b) => {
    const order = ['index', 'leveling', 'progression', 'guidelines'];
    return order.indexOf(a.slug) - order.indexOf(b.slug);
  });
}

// Get framework page by slug
export function getFrameworkPageBySlug(slug: string) {
  return allFrameworkPages.find((page) => page.slug === slug);
}

// Get all management pages
export function getAllManagementPages() {
  return allManagementPages.sort((a, b) => {
    if (a.slug === 'index') return -1;
    if (b.slug === 'index') return 1;
    return a.title.localeCompare(b.title);
  });
}

// Get management page by slug
export function getManagementPageBySlug(slug: string) {
  return allManagementPages.find((page) => page.slug === slug);
}

// Get all topologies
export function getAllTopologies() {
  return allTopologies.sort((a, b) => (a.order || 0) - (b.order || 0));
}

// Get topology by slug
export function getTopologyBySlug(slug: string) {
  return allTopologies.find((topology) => topology.slug === slug);
}

// Get all shapes
export function getAllShapes() {
  return allShapes.sort((a, b) => (a.order || 0) - (b.order || 0));
}

// Get shape by slug
export function getShapeBySlug(slug: string) {
  return allShapes.find((shape) => shape.slug === slug);
}

// Get related pages
export function getRelatedPages(pageSlug: string, relatedSlugs?: string[]) {
  if (!relatedSlugs || relatedSlugs.length === 0) {
    return [];
  }

  const allContent = [
    ...allPages,
    ...allFrameworkPages,
    ...allManagementPages,
    ...allTopologies,
    ...allShapes,
  ];

  return relatedSlugs
    .map((slug) => allContent.find((page) => page.slug === slug))
    .filter(Boolean);
}
