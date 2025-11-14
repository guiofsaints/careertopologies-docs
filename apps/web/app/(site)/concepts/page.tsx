import { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/layout/breadcrumbs';
import { PageHero } from '@/components/content/page-hero';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { concepts } from './data/concepts';

export const metadata: Metadata = {
  title: 'Core Concepts',
  description: 'Essential terminology and definitions for understanding the Career Topologies framework',
};

export default function ConceptsPage() {
  return (
    <>
      <Breadcrumbs />
      <PageHero
        title="Core Concepts"
        description="Essential terminology and definitions for understanding the Career Topologies framework"
      />
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-slate dark:prose-invert mb-12">
            <p className="lead">
              Understanding these seven core concepts is essential for implementing the Career Topologies framework effectively.
            </p>
            <p>
              These concepts form a shared vocabulary that enables clear communication about career development, progression expectations, and organizational structures. Each concept interconnects with others to create a comprehensive framework.
            </p>
          </article>

          <div className="space-y-6 mb-12">
            {concepts.map((concept) => (
              <Card key={concept.id} className="p-6 md:p-8">
                <div className="flex items-start gap-4 mb-3">
                  <div className="shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <span className="text-lg font-bold text-primary">
                        {concept.order}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{concept.term}</h3>
                    <p className="text-muted-foreground font-medium mb-3">
                      {concept.definition}
                    </p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed mb-4 ml-14">
                  {concept.details}
                </p>
                <div className="ml-14 flex flex-wrap items-center gap-4">
                  {concept.relatedTo.length > 0 && (
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="font-medium">Related:</span>
                      {concept.relatedTo.map((relatedId) => {
                        const related = concepts.find((c) => c.id === relatedId);
                        return related ? (
                          <span key={relatedId} className="px-2 py-1 bg-muted rounded">
                            {related.term}
                          </span>
                        ) : null;
                      })}
                    </div>
                  )}
                  {concept.learnMorePath && (
                    <Link
                      href={concept.learnMorePath}
                      className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                    >
                      Learn more
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </Card>
            ))}
          </div>

          <div className="prose prose-slate dark:prose-invert">
            <h2>How Concepts Interconnect</h2>
            <p>
              These concepts form an interconnected system where understanding one helps illuminate the others:
            </p>
            <ul>
              <li>
                <strong>Topology</strong> determines the available career paths, which are composed of sequential <strong>Levels</strong>
              </li>
              <li>
                <strong>Levels</strong> are defined by increasing <strong>Impact</strong> and <strong>Autonomy</strong> expectations
              </li>
              <li>
                Progression between <strong>Levels</strong> is evaluated across six <strong>Pillars</strong>
              </li>
              <li>
                Each <strong>Pillar</strong> has <strong>Proficiency</strong> scales that map to specific levels
              </li>
              <li>
                An individual's <strong>Shape</strong> describes their proficiency distribution across technical and functional domains
              </li>
            </ul>

            <h2>Applying Concepts in Practice</h2>
            <p>
              Use these concepts to structure career conversations, performance reviews, and promotion decisions:
            </p>
            <ul>
              <li>
                <strong>Career Conversations</strong>: Discuss desired topology track, target level, and required pillar proficiencies
              </li>
              <li>
                <strong>Performance Reviews</strong>: Assess current proficiency levels across all six pillars and demonstrated impact/autonomy
              </li>
              <li>
                <strong>Promotion Decisions</strong>: Verify that proficiency levels meet or exceed next level requirements across all pillars
              </li>
              <li>
                <strong>Skill Development</strong>: Identify gaps between current and target proficiency, create learning plans to develop specific shapes
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
