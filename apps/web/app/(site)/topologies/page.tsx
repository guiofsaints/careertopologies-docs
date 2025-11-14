import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/layout/breadcrumbs';
import { PageHero } from '@/components/content/page-hero';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Callout } from '@/components/mdx/callout';
import { topologies } from './data/topologies';

export const metadata: Metadata = {
  title: 'Career Topologies',
  description: 'Different organizational structures and career progression patterns: Y-shaped, W-shaped, and Network models',
};

export default function TopologiesPage() {
  return (
    <>
      <Breadcrumbs />
      <PageHero
        title="Career Topologies"
        description="Different organizational structures and career progression patterns"
      />
      
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="prose prose-neutral dark:prose-invert max-w-4xl mx-auto mb-12">
          <p className="lead">
            Career topologies define how organizations structure career progression paths. 
            The choice of topology significantly impacts employee growth, organizational 
            flexibility, and the ability to retain technical talent.
          </p>
          
          <Callout type="info">
            Most organizations use variations or hybrids of these models. The best choice 
            depends on company size, culture, industry, and strategic priorities.
          </Callout>
        </div>

        {/* Topology Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto mb-16">
          {topologies.map((topology) => (
            <Card key={topology.id} className="h-full flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl">{topology.name}</CardTitle>
                <CardDescription className="text-sm font-medium">
                  {topology.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 space-y-4 text-sm">
                <div>
                  <h4 className="font-semibold mb-2">Structure</h4>
                  <p className="text-muted-foreground">{topology.structure}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Decision Making</h4>
                  <p className="text-muted-foreground">{topology.decisionMaking}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Key Characteristics</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {topology.keyCharacteristics.slice(0, 3).map((char, idx) => (
                      <li key={idx}>{char}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-6">Model Comparison</h2>
          
          <div className="rounded-lg border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="p-4 text-left font-semibold border-b">Aspect</th>
                    {topologies.map((topology) => (
                      <th key={topology.id} className="p-4 text-left font-semibold border-b border-l">
                        {topology.shortName}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4 font-medium border-b">Autonomy</td>
                    {topologies.map((topology) => (
                      <td key={topology.id} className="p-4 border-b border-l text-sm">
                        {topology.autonomy}
                      </td>
                    ))}
                  </tr>
                  <tr className="bg-muted/20">
                    <td className="p-4 font-medium border-b">Best For</td>
                    {topologies.map((topology) => (
                      <td key={topology.id} className="p-4 border-b border-l text-sm">
                        <ul className="list-disc list-inside space-y-1">
                          {topology.bestFor.slice(0, 2).map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 font-medium border-b">Challenges</td>
                    {topologies.map((topology) => (
                      <td key={topology.id} className="p-4 border-b border-l text-sm">
                        <ul className="list-disc list-inside space-y-1">
                          {topology.challenges.slice(0, 2).map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Choosing a Topology */}
        <div className="prose prose-neutral dark:prose-invert max-w-4xl mx-auto">
          <h2>Choosing the Right Topology</h2>
          
          <p>
            When selecting or evolving your career topology, consider these factors:
          </p>
          
          <ul>
            <li><strong>Company Stage:</strong> Startups often benefit from Network models, while mature enterprises may prefer Y or W shapes</li>
            <li><strong>Technical Talent Retention:</strong> W-shaped and Network models provide more flexibility for senior engineers who want leadership without full management</li>
            <li><strong>Organizational Complexity:</strong> Simpler topologies (Y-shaped) are easier to administer at scale</li>
            <li><strong>Culture &amp; Values:</strong> Your topology should reinforce your cultural values around autonomy, learning, and career growth</li>
          </ul>
          
          <Callout type="info">
            Many successful companies use hybrid approaches, adapting topology by department or 
            evolving their model as they scale. There's no single "right" answer—the best topology 
            is one that aligns with your specific organizational context and goals.
          </Callout>
        </div>
      </div>
    </>
  );
}
