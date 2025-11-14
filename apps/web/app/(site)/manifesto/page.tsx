import { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/layout/breadcrumbs';
import { PageHero } from '@/components/content/page-hero';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { principles } from './data/principles';

export const metadata: Metadata = {
  title: 'Career Manifesto',
  description: 'Eight foundational principles establishing the philosophy behind Career Topologies framework',
};

export default function ManifestoPage() {
  return (
    <>
      <Breadcrumbs />
      <PageHero
        title="Career Manifesto"
        description="Eight foundational principles establishing the philosophy behind Career Topologies framework"
      />
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-slate dark:prose-invert mb-12">
            <p className="lead">
              Career development in technology organizations should be guided by clear principles that promote transparency, fairness, and growth. These eight principles inform every aspect of the Career Topologies framework.
            </p>
            <p>
              Traditional career frameworks often suffer from opacity, political maneuvering, and rigid hierarchies that limit professional growth. The Career Manifesto establishes a different foundation—one built on evidence-based decisions, multiple advancement paths, and continuous evolution.
            </p>
          </article>

          <div className="grid gap-6 md:gap-8 mb-12">
            {principles.map((principle) => {
              const Icon = principle.icon;
              return (
                <Card key={principle.id} className="p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-semibold text-muted-foreground">
                          {principle.order.toString().padStart(2, '0')}
                        </span>
                        <h3 className="text-xl font-bold">{principle.title}</h3>
                      </div>
                      <p className="text-muted-foreground mb-3">
                        {principle.description}
                      </p>
                      <p className="text-sm leading-relaxed">
                        {principle.details}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="prose prose-slate dark:prose-invert mb-8">
            <h2>Living the Manifesto</h2>
            <p>
              These principles are not abstract ideals—they translate directly into the framework's design:
            </p>
            <ul>
              <li>
                <strong>Transparency</strong> manifests in documented leveling criteria and progression pillars
              </li>
              <li>
                <strong>Fair Recognition</strong> drives the evidence-based Impact × Autonomy leveling model
              </li>
              <li>
                <strong>Equality of Opportunity</strong> enables multiple topology models (IC, management, hybrid tracks)
              </li>
              <li>
                <strong>Growth Mindset</strong> informs proficiency scales that show learning progression
              </li>
              <li>
                <strong>Evidence-Based</strong> decisions require concrete examples and demonstrated competencies
              </li>
              <li>
                <strong>Continuous Feedback</strong> supports regular calibration and career conversations
              </li>
              <li>
                <strong>Flexibility & Experimentation</strong> allows lateral moves and role exploration
              </li>
              <li>
                <strong>Open & Evolving</strong> makes the framework open-source and community-driven
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t">
            <Button asChild size="lg">
              <Link href="/framework">Explore the Framework</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contributing">Contribute to the Project</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
