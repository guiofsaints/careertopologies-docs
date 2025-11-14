import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/layout/breadcrumbs';
import { PageHero } from '@/components/content/page-hero';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Callout } from '@/components/mdx/callout';
import { Badge } from '@/components/ui/badge';
import { progressionPillars } from './data/pillars';

export const metadata: Metadata = {
  title: 'Progression Pillars',
  description: 'Six competency dimensions for evaluating professional growth with proficiency scales',
};

export default function ProgressionPage() {
  return (
    <>
      <Breadcrumbs />
      <PageHero
        title="Progression Pillars"
        description="Six competency dimensions for evaluating professional growth"
      />
      
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Introduction */}
        <div className="prose prose-neutral dark:prose-invert max-w-4xl mx-auto mb-12">
          <p className="lead">
            Progression Pillars translate abstract level expectations into concrete, observable behaviors. 
            Each pillar has a proficiency scale from 1-5, aligned with career levels.
          </p>
          
          <h2>The Six Pillars</h2>
          
          <p>
            These six dimensions work together to create a holistic view of professional growth:
          </p>
          
          <ul>
            <li><strong>Delivery:</strong> Getting work done and shipping results</li>
            <li><strong>Technical Domain:</strong> Depth and breadth of expertise</li>
            <li><strong>Collaboration:</strong> Working effectively with others</li>
            <li><strong>Autonomy:</strong> Independence in problem-solving</li>
            <li><strong>Initiative:</strong> Proactive identification of opportunities</li>
            <li><strong>Mentoring:</strong> Supporting and developing others</li>
          </ul>
          
          <Callout type="info">
            Not everyone progresses uniformly across all pillars. It's common to be stronger in some areas 
            than others—this creates your unique "skill profile" and helps identify growth opportunities.
          </Callout>
        </div>

        {/* Pillars with Proficiency Scales */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="space-y-12">
            {progressionPillars.map((pillar) => (
              <div key={pillar.id} id={pillar.id}>
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-2">{pillar.name}</h2>
                  <p className="text-muted-foreground">{pillar.description}</p>
                </div>
                
                <div className="space-y-4">
                  {pillar.proficiencyLevels.map((proficiency) => (
                    <Card key={proficiency.level}>
                      <CardHeader>
                        <div className="flex items-start gap-3">
                          <Badge variant="outline" className="text-base px-3 py-1 shrink-0">
                            L{proficiency.level}
                          </Badge>
                          <div className="flex-1">
                            <CardTitle className="text-lg">{proficiency.title}</CardTitle>
                            <CardDescription className="mt-1">
                              {proficiency.description}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div>
                          <h4 className="font-semibold mb-3 text-sm">Observable Behaviors</h4>
                          <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                            {proficiency.behaviors.map((behavior, idx) => (
                              <li key={idx}>{behavior}</li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Using the Pillars */}
        <div className="max-w-4xl mx-auto prose prose-neutral dark:prose-invert">
          <h2>Using Progression Pillars</h2>
          
          <h3>For Self-Assessment</h3>
          <p>
            Use the pillars to evaluate your current proficiency and identify growth areas:
          </p>
          <ol>
            <li>Read each pillar's proficiency levels honestly</li>
            <li>Identify which level best describes your current performance</li>
            <li>Note areas where you're between levels (developing competency)</li>
            <li>Discuss your assessment with your manager in 1-on-1s</li>
          </ol>
          
          <h3>For Career Planning</h3>
          <p>
            Pillars help you plan targeted growth:
          </p>
          <ul>
            <li><strong>Identify gaps:</strong> Which pillars are holding you back from the next level?</li>
            <li><strong>Play to strengths:</strong> Which pillars can you leverage for outsized impact?</li>
            <li><strong>Seek projects:</strong> Find work that develops your target pillars</li>
            <li><strong>Request feedback:</strong> Ask for specific feedback on pillar behaviors</li>
          </ul>
          
          <h3>For Managers</h3>
          <p>
            Use pillars to guide development conversations and promotion decisions:
          </p>
          <ul>
            <li>Provide specific, behavior-based feedback tied to pillar proficiencies</li>
            <li>Identify projects and stretch assignments that develop target pillars</li>
            <li>Calibrate assessments with other managers using shared pillar language</li>
            <li>Ensure promotion decisions are grounded in demonstrated pillar proficiency</li>
          </ul>
          
          <Callout type="success">
            The most effective career development happens when individuals, managers, and organizations 
            align on expectations using shared language. Progression Pillars provide that common vocabulary.
          </Callout>
        </div>
      </div>
    </>
  );
}
