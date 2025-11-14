import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/layout/breadcrumbs';
import { PageHero } from '@/components/content/page-hero';

export const metadata: Metadata = {
  title: 'About Career Topologies',
  description: 'Comprehensive framework overview, project background, and development philosophy for transparent, equitable career development',
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs />
      <PageHero
        title="About Career Topologies"
        description="Comprehensive framework overview, project background, and development philosophy for transparent, equitable career development"
      />
      <div className="container mx-auto px-4 py-8 md:py-12">
        <article className="prose prose-slate dark:prose-invert max-w-4xl mx-auto">
          <p className="lead">
            Career Topologies is an open-source strategic framework designed to transform how technology organizations approach career development.
          </p>

          <h2>What This Framework Provides</h2>
          <p>
            The site delivers a comprehensive, modular framework that organizations can adopt and customize to their unique context. Unlike rigid corporate ladders or vague seniority titles, Career Topologies offers structured flexibility through:
          </p>
          <ul>
            <li>Multiple career topology models (Y-shaped, W-shaped, and Network)</li>
            <li>Clear leveling criteria based on Impact and Autonomy</li>
            <li>Six concrete Progression Pillars that translate abstract expectations into actionable competencies</li>
          </ul>

          <h2>Why It Exists</h2>
          <p>
            Traditional career frameworks fail to address the multidimensional nature of professional growth in modern technology companies. Career Topologies addresses these failures by providing:
          </p>
          <ul>
            <li>Evidence-based structures grounded in 28 academic and professional references</li>
            <li>Visual tools that make concepts tangible</li>
            <li>Detailed implementation guidance spanning governance, processes, and timelines</li>
          </ul>

          <h2>How to Use This Framework</h2>
          <ol>
            <li>
              <strong>Explore</strong> the foundational concepts to understand the philosophy
            </li>
            <li>
              <strong>Select</strong> a topology model that fits your organization
            </li>
            <li>
              <strong>Customize</strong> the leveling and progression frameworks
            </li>
            <li>
              <strong>Implement</strong> using our detailed guidelines
            </li>
          </ol>
        </article>
      </div>
    </>
  );
}
