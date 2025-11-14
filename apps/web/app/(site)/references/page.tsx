import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/layout/breadcrumbs';
import { PageHero } from '@/components/content/page-hero';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';
import { references, categoryLabels, type ReferenceCategory } from './data/references';

export const metadata: Metadata = {
  title: 'References',
  description: 'Academic and professional citations supporting the Career Topologies framework',
};

export default function ReferencesPage() {
  // Group references by category
  const categorizedRefs = references.reduce((acc, ref) => {
    if (!acc[ref.category]) {
      acc[ref.category] = [];
    }
    acc[ref.category].push(ref);
    return acc;
  }, {} as Record<ReferenceCategory, typeof references>);

  return (
    <>
      <Breadcrumbs />
      <PageHero
        title="References"
        description="Academic and professional citations supporting the Career Topologies framework"
      />
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-slate dark:prose-invert mb-12">
            <p className="lead">
              The Career Topologies framework is grounded in 28 academic and professional references across five categories.
            </p>
            <p>
              These references inform the framework's design principles, leveling criteria, competency models, and implementation guidance. They represent evidence-based practices from leading technology organizations, academic research, and management literature.
            </p>
          </article>

          <div className="space-y-12">
            {(Object.keys(categoryLabels) as ReferenceCategory[]).map((category) => {
              const categoryRefs = categorizedRefs[category] || [];
              if (categoryRefs.length === 0) return null;

              return (
                <section key={category}>
                  <h2 className="text-2xl font-bold mb-6">
                    {categoryLabels[category]}
                  </h2>
                  <div className="space-y-4">
                    {categoryRefs.map((ref, index) => (
                      <Card key={ref.id} className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="shrink-0">
                            <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
                              <span className="text-xs font-bold text-muted-foreground">
                                {index + 1}
                              </span>
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-4 mb-2">
                              <h3 className="font-semibold leading-tight">
                                {ref.url ? (
                                  <a
                                    href={ref.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-primary inline-flex items-center gap-1.5"
                                  >
                                    {ref.title}
                                    <ExternalLink className="w-4 h-4" />
                                  </a>
                                ) : (
                                  ref.title
                                )}
                              </h3>
                              {ref.year && (
                                <Badge variant="secondary" className="shrink-0">
                                  {ref.year}
                                </Badge>
                              )}
                            </div>

                            {(ref.authors || ref.organization) && (
                              <p className="text-sm text-muted-foreground mb-2">
                                {ref.authors && ref.authors.join(', ')}
                                {ref.authors && ref.organization && ' • '}
                                {ref.organization}
                              </p>
                            )}

                            <p className="text-sm leading-relaxed">
                              {ref.description}
                            </p>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>

          <div className="mt-12 prose prose-slate dark:prose-invert">
            <h2>How to Use These References</h2>
            <p>
              These references serve multiple purposes in implementing Career Topologies:
            </p>
            <ul>
              <li>
                <strong>Professional Frameworks</strong> provide real-world examples of how leading companies structure career progression
              </li>
              <li>
                <strong>Articles & Case Studies</strong> offer practical insights and lessons learned from implementation experiences
              </li>
              <li>
                <strong>Frameworks & Structures</strong> introduce conceptual models (like Impact × Autonomy) used in the Career Topologies design
              </li>
              <li>
                <strong>Studies & Principles</strong> ground the framework in evidence-based research on motivation, learning, and development
              </li>
              <li>
                <strong>Leadership Literature</strong> informs management track definitions and leadership development approaches
              </li>
            </ul>
            <p>
              When customizing Career Topologies for your organization, consult these references to understand the reasoning behind design decisions and explore alternative approaches.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
