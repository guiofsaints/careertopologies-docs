import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/layout/breadcrumbs';
import { PageHero } from '@/components/content/page-hero';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Callout } from '@/components/mdx/callout';
import { ArrowRight, Network, Layers, TrendingUp, BookOpen } from 'lucide-react';
import { frameworkElements, governanceRoles, implementationPhases } from './data/framework';

export const metadata: Metadata = {
  title: 'Career Framework Overview',
  description: 'Core structural elements, governance model, and implementation lifecycle for the Career Topologies framework',
};

const elementIcons = {
  topologies: Network,
  leveling: Layers,
  'progression-pillars': TrendingUp,
  guidelines: BookOpen,
};

export default function FrameworkPage() {
  return (
    <>
      <Breadcrumbs />
      <PageHero
        title="Career Framework Overview"
        description="Core structural elements, governance model, and implementation lifecycle"
      />
      
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Framework Elements */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="prose prose-neutral dark:prose-invert max-w-4xl mb-8">
            <h2>Four Core Elements</h2>
            <p>
              The Career Topologies framework consists of four interconnected elements that work 
              together to create transparent, equitable career paths aligned with your organizational context.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            {frameworkElements.map((element) => {
              const Icon = elementIcons[element.id as keyof typeof elementIcons];
              return (
                <Link key={element.id} href={element.learnMorePath}>
                  <Card className="h-full hover:border-primary transition-colors group">
                    <CardHeader>
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-lg group-hover:text-primary transition-colors">
                            {element.name}
                          </CardTitle>
                          <CardDescription className="mt-1">
                            {element.description}
                          </CardDescription>
                        </div>
                        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{element.purpose}</p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Governance Model */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="prose prose-neutral dark:prose-invert max-w-4xl mb-8">
            <h2>Governance Model</h2>
            <p>
              Effective framework implementation requires clear ownership and decision-making processes. 
              Different roles have specific responsibilities and authority levels.
            </p>
          </div>

          <div className="rounded-lg border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="p-4 text-left font-semibold border-b w-48">Role</th>
                    <th className="p-4 text-left font-semibold border-b border-l">Responsibilities</th>
                    <th className="p-4 text-left font-semibold border-b border-l w-64">Decision Authority</th>
                  </tr>
                </thead>
                <tbody>
                  {governanceRoles.map((role, idx) => (
                    <tr key={role.role} className={idx % 2 === 0 ? '' : 'bg-muted/20'}>
                      <td className="p-4 font-medium border-b align-top">{role.role}</td>
                      <td className="p-4 border-b border-l align-top">
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          {role.responsibilities.map((resp, ridx) => (
                            <li key={ridx}>{resp}</li>
                          ))}
                        </ul>
                      </td>
                      <td className="p-4 border-b border-l align-top text-sm">
                        {role.decisionAuthority}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Implementation Lifecycle */}
        <div className="max-w-6xl mx-auto">
          <div className="prose prose-neutral dark:prose-invert max-w-4xl mb-8">
            <h2>Implementation Lifecycle</h2>
            <p>
              The framework follows an 8-phase implementation process spanning 52+ weeks. 
              Each phase builds on the previous one to ensure thoughtful, sustainable adoption.
            </p>
            
            <Callout type="info">
              Timeline is a guideline. Adjust based on organization size, complexity, and existing 
              career infrastructure. Smaller companies may compress phases; larger enterprises may extend them.
            </Callout>
          </div>

          <div className="space-y-6">
            {implementationPhases.map((phase) => (
              <Card key={phase.phase}>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg shrink-0">
                      {phase.phase}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl">{phase.name}</CardTitle>
                      <CardDescription className="text-sm font-medium mt-1">
                        {phase.weeks}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-sm">Objectives</h4>
                      <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                        {phase.objectives.map((obj, idx) => (
                          <li key={idx}>{obj}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-sm">Key Deliverables</h4>
                      <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                        {phase.keyDeliverables.map((del, idx) => (
                          <li key={idx}>{del}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="prose prose-neutral dark:prose-invert max-w-4xl mt-8">
            <Callout type="success">
              For detailed implementation templates, calibration guides, and promotion workflows, 
              see the <Link href="/framework/guidelines">Implementation Guidelines</Link>.
            </Callout>
          </div>
        </div>
      </div>
    </>
  );
}
