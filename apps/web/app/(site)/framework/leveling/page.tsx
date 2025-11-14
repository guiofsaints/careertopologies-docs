import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/layout/breadcrumbs';
import { PageHero } from '@/components/content/page-hero';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Callout } from '@/components/mdx/callout';
import { Badge } from '@/components/ui/badge';
import { careerLevels, topologyAlignments } from './data/levels';

export const metadata: Metadata = {
  title: 'Career Leveling',
  description: 'Career level definitions using Impact × Autonomy dimensions with topology alignment',
};

export default function LevelingPage() {
  return (
    <>
      <Breadcrumbs />
      <PageHero
        title="Career Leveling"
        description="Career level definitions using Impact × Autonomy dimensions"
      />
      
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Introduction */}
        <div className="prose prose-neutral dark:prose-invert max-w-4xl mx-auto mb-12">
          <p className="lead">
            Career levels represent distinct stages of professional growth, defined primarily by 
            <strong> Impact</strong> (the scope and significance of your work) and <strong>Autonomy</strong> 
            (your independence in defining and solving problems).
          </p>
          
          <h2>Impact × Autonomy Matrix</h2>
          
          <p>
            The foundation of our leveling system is the two-dimensional Impact × Autonomy matrix. 
            As you progress in your career:
          </p>
          
          <ul>
            <li><strong>Impact</strong> grows from individual tasks → team → organization → industry</li>
            <li><strong>Autonomy</strong> evolves from close supervision → independent work → strategic vision</li>
          </ul>
          
          <Callout type="info">
            This model recognizes that seniority is not just about technical skill—it's about the scope 
            of problems you can identify and solve independently, and the breadth of influence your work has.
          </Callout>
        </div>

        {/* Career Levels */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-6">Six Career Levels</h2>
          
          <div className="space-y-6">
            {careerLevels.map((level) => (
              <Card key={level.level}>
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="outline" className="text-base px-3 py-1">
                          L{level.level}
                        </Badge>
                        <CardTitle className="text-xl">{level.title}</CardTitle>
                      </div>
                      <CardDescription className="grid md:grid-cols-2 gap-4 mt-3">
                        <div>
                          <span className="font-semibold text-foreground">Impact:</span>{' '}
                          <span className="text-muted-foreground">{level.impact}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-foreground">Autonomy:</span>{' '}
                          <span className="text-muted-foreground">{level.autonomy}</span>
                        </div>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-sm">Typical Roles</h4>
                      <div className="flex flex-wrap gap-2">
                        {level.typicalExamples.map((example, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {example}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-sm">Key Expectations</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        {level.keyExpectations.map((expectation, idx) => (
                          <li key={idx}>{expectation}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Topology Alignment */}
        <div className="max-w-6xl mx-auto">
          <div className="prose prose-neutral dark:prose-invert max-w-4xl mb-8">
            <h2>Topology Alignment</h2>
            <p>
              Different topology models may interpret these levels differently, particularly at Senior+ levels 
              where IC, Manager, and Technical Leadership tracks diverge.
            </p>
          </div>

          <div className="space-y-6">
            {topologyAlignments.map((alignment) => (
              <Card key={alignment.topology}>
                <CardHeader>
                  <CardTitle className="text-lg">{alignment.topology}</CardTitle>
                  <CardDescription>{alignment.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {alignment.levelNotes.map((note) => {
                      const level = careerLevels.find((l) => l.level === note.level);
                      return (
                        <div key={note.level} className="flex items-start gap-3 text-sm">
                          <Badge variant="outline" className="shrink-0">
                            L{note.level}
                          </Badge>
                          <div>
                            <span className="font-medium">{level?.title}:</span>{' '}
                            <span className="text-muted-foreground">{note.note}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="prose prose-neutral dark:prose-invert max-w-4xl mt-8">
            <Callout type="success">
              Levels provide the "what" (scope of responsibility). Progression Pillars define the "how" 
              (competencies to demonstrate at each level). See <a href="/framework/progression">Progression Pillars</a> 
              to understand how to grow within and across levels.
            </Callout>
          </div>
        </div>
      </div>
    </>
  );
}
