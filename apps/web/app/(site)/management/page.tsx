import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/layout/breadcrumbs';
import { PageHero } from '@/components/content/page-hero';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Callout } from '@/components/mdx/callout';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import { managementLayers } from './data/layers';

export const metadata: Metadata = {
  title: 'Management Levels',
  description: 'Three management layers with responsibilities and expectations',
};

export default function ManagementPage() {
  return (
    <>
      <Breadcrumbs />
      <PageHero
        title="Management Levels"
        description="Three management layers with responsibilities and expectations"
      />
      
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Introduction */}
        <div className="prose prose-neutral dark:prose-invert max-w-4xl mx-auto mb-12">
          <p className="lead">
            The framework defines three distinct management layers, each with specific responsibilities, 
            time horizons, and skill requirements. Understanding these layers helps you navigate the 
            management track and prepare for transitions.
          </p>
          
          <Callout type="info">
            Management is a craft that requires different skills at each level. Success as a Front-line 
            Manager does not automatically translate to success as a Middle or Top Manager—each transition 
            requires significant learning and adaptation.
          </Callout>
        </div>

        {/* Management Layers */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-6">Three Management Layers</h2>
          
          <div className="space-y-8">
            {managementLayers.map((layer) => (
              <Card key={layer.id}>
                <CardHeader>
                  <div className="space-y-3">
                    <div>
                      <CardTitle className="text-2xl mb-2">{layer.title}</CardTitle>
                      <div className="flex flex-wrap gap-2">
                        {layer.alternativeTitles.map((title, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {title}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4 text-sm pt-3 border-t">
                      <div>
                        <span className="font-semibold">Scope:</span>{' '}
                        <span className="text-muted-foreground">{layer.scope}</span>
                      </div>
                      <div>
                        <span className="font-semibold">Time Horizon:</span>{' '}
                        <span className="text-muted-foreground">{layer.timeHorizon}</span>
                      </div>
                      <div>
                        <span className="font-semibold">Team Size:</span>{' '}
                        <span className="text-muted-foreground">{layer.typicalTeamSize}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-sm">Responsibilities</h4>
                      <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                        {layer.responsibilities.map((resp, idx) => (
                          <li key={idx}>{resp}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-sm">Key Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          {layer.keySkills.map((skill, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 text-sm">Common Challenges</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                          {layer.challenges.map((challenge, idx) => (
                            <li key={idx}>{challenge}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-6">Quick Comparison</h2>
          
          <div className="rounded-lg border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="p-4 text-left font-semibold border-b">Aspect</th>
                    {managementLayers.map((layer) => (
                      <th key={layer.id} className="p-4 text-left font-semibold border-b border-l">
                        {layer.title}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4 font-medium border-b">Focus</td>
                    <td className="p-4 border-b border-l text-sm">Operational execution</td>
                    <td className="p-4 border-b border-l text-sm">Tactical coordination</td>
                    <td className="p-4 border-b border-l text-sm">Strategic vision</td>
                  </tr>
                  <tr className="bg-muted/20">
                    <td className="p-4 font-medium border-b">Primary Activity</td>
                    <td className="p-4 border-b border-l text-sm">1-on-1s, team meetings</td>
                    <td className="p-4 border-b border-l text-sm">Manager coaching, planning</td>
                    <td className="p-4 border-b border-l text-sm">Executive meetings, vision</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium border-b">Decision Authority</td>
                    <td className="p-4 border-b border-l text-sm">Team-level</td>
                    <td className="p-4 border-b border-l text-sm">Department-level</td>
                    <td className="p-4 border-b border-l text-sm">Organization-level</td>
                  </tr>
                  <tr className="bg-muted/20">
                    <td className="p-4 font-medium">Typical Transition</td>
                    <td className="p-4 border-l text-sm">Senior IC → EM (2-5 years IC exp)</td>
                    <td className="p-4 border-l text-sm">EM → Director (2-4 years EM exp)</td>
                    <td className="p-4 border-l text-sm">Director → VP (3-7 years Director exp)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Transition Guidance */}
        <div className="max-w-4xl mx-auto prose prose-neutral dark:prose-invert">
          <h2>Navigating Management Transitions</h2>
          
          <p>
            Each management layer transition requires letting go of what made you successful at the previous 
            level and developing new muscles. Here are common transition challenges:
          </p>
          
          <h3>IC → Front-line Manager</h3>
          <ul>
            <li>Let go of being the best individual contributor</li>
            <li>Learn to get work done through others</li>
            <li>Develop patience for mentoring and coaching</li>
            <li>Accept that you'll ship less code (or equivalent IC work)</li>
          </ul>
          
          <h3>Front-line → Middle Manager</h3>
          <ul>
            <li>Stop managing people directly for most of your time</li>
            <li>Learn to coach other managers</li>
            <li>Think in systems and processes, not individual tasks</li>
            <li>Develop strategic planning and multi-team coordination skills</li>
          </ul>
          
          <h3>Middle → Top Manager</h3>
          <ul>
            <li>Shift from execution to vision and culture</li>
            <li>Operate at high levels of ambiguity</li>
            <li>Master executive communication and presence</li>
            <li>Balance competing stakeholder interests (board, investors, employees)</li>
          </ul>
          
          <Callout type="success">
            Considering a transition to management? Read{' '}
            <Link href="/management/developing-leaders">Developing Leaders</Link> for readiness assessment 
            and decision frameworks.
          </Callout>
        </div>
      </div>
    </>
  );
}
