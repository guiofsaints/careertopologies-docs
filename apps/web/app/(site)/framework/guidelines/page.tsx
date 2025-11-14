import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/layout/breadcrumbs';
import { PageHero } from '@/components/content/page-hero';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Callout } from '@/components/mdx/callout';
import { Badge } from '@/components/ui/badge';
import { CodeBlock } from '@/components/mdx/code-block';
import { implementationPhases } from '../data/framework';

export const metadata: Metadata = {
  title: 'Implementation Guidelines',
  description: 'Detailed implementation roadmap, roles matrix, and promotion processes for the Career Topologies framework',
};

export default function GuidelinesPage() {
  return (
    <>
      <Breadcrumbs />
      <PageHero
        title="Implementation Guidelines"
        description="Detailed implementation roadmap, roles matrix, and promotion processes"
      />
      
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Introduction */}
        <div className="prose prose-neutral dark:prose-invert max-w-4xl mx-auto mb-12">
          <p className="lead">
            A comprehensive roadmap for implementing the Career Topologies framework in your organization. 
            This guide covers the full lifecycle from discovery through iteration.
          </p>
          
          <Callout type="warning">
            Framework implementation is organizational change management, not just documentation. 
            Budget time for stakeholder alignment, communication, and cultural adaptation.
          </Callout>
        </div>

        {/* 8-Phase Timeline */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-6">8-Phase Implementation Process</h2>
          
          <div className="space-y-6">
            {implementationPhases.map((phase, idx) => (
              <Card key={phase.phase}>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg shrink-0">
                      {phase.phase}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <CardTitle className="text-xl">{phase.name}</CardTitle>
                        <Badge variant="outline">{phase.weeks}</Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-sm">Objectives</h4>
                      <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                        {phase.objectives.map((obj, oidx) => (
                          <li key={oidx}>{obj}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-sm">Key Deliverables</h4>
                      <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                        {phase.keyDeliverables.map((del, didx) => (
                          <li key={didx}>{del}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Promotion Processes */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-6">Promotion Processes</h2>
          
          <div className="prose prose-neutral dark:prose-invert max-w-4xl mb-8">
            <p>
              Structured promotion workflows ensure fairness, transparency, and alignment across the organization. 
              The process varies by level, with more rigor and broader input for senior+ promotions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Junior → Senior (L1-L3)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-sm">Process</h4>
                  <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                    <li>Manager proposes promotion during calibration cycle</li>
                    <li>Writes promotion packet with pillar evidence</li>
                    <li>Discusses with skip-level manager</li>
                    <li>Presents in calibration meeting for approval</li>
                  </ol>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-sm">Timeline</h4>
                  <p className="text-sm text-muted-foreground">
                    2-4 weeks from proposal to decision
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Staff+ (L4-L6)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-sm">Process</h4>
                  <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                    <li>Candidate and manager draft promotion packet</li>
                    <li>Collect peer and cross-functional feedback</li>
                    <li>Review by Staff+ promotion committee</li>
                    <li>Present to executive leadership for final approval</li>
                  </ol>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-sm">Timeline</h4>
                  <p className="text-sm text-muted-foreground">
                    6-12 weeks from packet draft to decision
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Callout type="info">
            Promotion packets should reference specific behaviors from Progression Pillars and demonstrate 
            sustained performance at the target level for 6-12 months (the "operating at next level" principle).
          </Callout>
        </div>

        {/* Calibration Best Practices */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-6">Calibration Best Practices</h2>
          
          <div className="prose prose-neutral dark:prose-invert max-w-4xl mb-8">
            <p>
              Calibration sessions ensure consistent application of level definitions across teams. 
              They're critical for fairness and preventing "level inflation."
            </p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Before Calibration</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                  <li>Managers complete assessments for all direct reports</li>
                  <li>Identify promotions, level adjustments, and performance concerns</li>
                  <li>Prepare evidence (examples, artifacts, feedback) for discussion</li>
                  <li>Review pillar proficiency definitions for alignment</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">During Calibration</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                  <li>Discuss each promotion and level adjustment proposal</li>
                  <li>Compare evidence across candidates at same level</li>
                  <li>Challenge assessments that seem inflated or deflated</li>
                  <li>Document decisions and rationale for transparency</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">After Calibration</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                  <li>Communicate decisions to affected individuals</li>
                  <li>Provide context for "no" decisions with growth roadmap</li>
                  <li>Update career ladder documentation based on learnings</li>
                  <li>Track calibration outcomes for future consistency</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Getting Started */}
        <div className="max-w-4xl mx-auto prose prose-neutral dark:prose-invert">
          <h2>Getting Started</h2>
          
          <p>
            Ready to implement the Career Topologies framework? Here's a minimal starting checklist:
          </p>

          <Callout type="success">
            Start small. Pilot with 1-2 teams before rolling out organization-wide. Learn, iterate, 
            and build confidence in the framework before scaling.
          </Callout>

          <h3>Week 1-2: Foundation</h3>
          <ul>
            <li>Review all framework documentation (<Link href="/framework">Framework Overview</Link>, <Link href="/framework/leveling">Leveling</Link>, <Link href="/framework/progression">Pillars</Link>)</li>
            <li>Choose your <Link href="/topologies">topology model</Link> (Y, W, or Network)</li>
            <li>Identify pilot teams (10-20 people)</li>
            <li>Schedule kickoff with pilot managers</li>
          </ul>

          <h3>Week 3-6: Customization</h3>
          <ul>
            <li>Adapt level definitions to your context (if needed)</li>
            <li>Customize pillar proficiency scales for your domain</li>
            <li>Create self-assessment template</li>
            <li>Draft initial promotion process</li>
          </ul>

          <h3>Week 7-12: Pilot</h3>
          <ul>
            <li>Launch with pilot teams</li>
            <li>Conduct self-assessments and 1-on-1s</li>
            <li>Run first calibration session</li>
            <li>Collect feedback and refine</li>
          </ul>

          <h3>Week 13+: Scale</h3>
          <ul>
            <li>Document learnings and update framework</li>
            <li>Plan organization-wide rollout</li>
            <li>Train all managers</li>
            <li>Launch and support</li>
          </ul>

          <div className="not-prose mt-8">
            <CodeBlock language="bash">
{`# Example: Create a new career framework repository
mkdir career-framework
cd career-framework

# Document your chosen topology
echo "# Our Career Topology: W-Shaped Model" > topology.md

# Customize level definitions
cp templates/level-definitions.md levels.md

# Create pillar proficiency scales
cp templates/pillars.md pillars.md

# Start with pilot
echo "Pilot teams: Platform, Product Core" > pilot-plan.md`}
            </CodeBlock>
          </div>
        </div>
      </div>
    </>
  );
}
