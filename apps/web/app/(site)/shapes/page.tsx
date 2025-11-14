import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/layout/breadcrumbs';
import { PageHero } from '@/components/content/page-hero';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Callout } from '@/components/mdx/callout';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';
import { skillShapes, shapeTransitions } from './data/shapes';

export const metadata: Metadata = {
  title: 'Professional Skill Shapes',
  description: 'I-shaped, T-shaped, and Pi-shaped skill profiles and growth transitions',
};

export default function ShapesPage() {
  return (
    <>
      <Breadcrumbs />
      <PageHero
        title="Professional Skill Shapes"
        description="I-shaped, T-shaped, and Pi-shaped skill profiles and growth transitions"
      />
      
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Introduction */}
        <div className="prose prose-neutral dark:prose-invert max-w-4xl mx-auto mb-12">
          <p className="lead">
            Skill shapes describe the breadth and depth of an individual's professional capabilities. 
            Understanding your current shape helps you make intentional decisions about skill development 
            and career direction.
          </p>
          
          <Callout type="info">
            There is no "best" shape—each has value at different career stages and in different contexts. 
            The goal is to choose the shape that aligns with your interests and career aspirations.
          </Callout>
        </div>

        {/* The Three Shapes */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-6">The Three Shapes</h2>
          
          <div className="grid gap-8 md:grid-cols-3">
            {skillShapes.map((shape) => (
              <Card key={shape.id} className="h-full flex flex-col">
                <CardHeader>
                  <div className="text-5xl font-bold text-primary mb-3 text-center">
                    {shape.visual}
                  </div>
                  <CardTitle className="text-xl text-center">{shape.name}</CardTitle>
                  <CardDescription className="text-center">
                    {shape.description}
                  </CardDescription>
                  <div className="flex justify-center mt-3">
                    <Badge variant="secondary">{shape.careerPhase}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 space-y-4 text-sm">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Strengths
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      {shape.strengths.slice(0, 3).map((strength, idx) => (
                        <li key={idx}>{strength}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-yellow-600" />
                      Challenges
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      {shape.challenges.slice(0, 3).map((challenge, idx) => (
                        <li key={idx}>{challenge}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Examples</h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      {shape.examples.map((example, idx) => (
                        <li key={idx}>{example}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Shape Characteristics Detail */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-6">Understanding Each Shape</h2>
          
          <div className="space-y-6">
            {skillShapes.map((shape) => (
              <Card key={shape.id}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="text-3xl font-bold text-primary">
                      {shape.visual}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{shape.name}</CardTitle>
                      <CardDescription>{shape.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div>
                    <h4 className="font-semibold mb-3 text-sm">Key Characteristics</h4>
                    <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                      {shape.characteristics.map((char, idx) => (
                        <li key={idx}>{char}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Growth Transitions */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="prose prose-neutral dark:prose-invert max-w-4xl mb-8">
            <h2>Growth Transitions</h2>
            <p>
              Most professionals evolve through shapes over their careers: starting as I-shaped specialists, 
              developing into T-shaped generalists, and sometimes becoming Pi-shaped multi-domain experts.
            </p>
          </div>

          <div className="space-y-6">
            {shapeTransitions.map((transition) => (
              <Card key={`${transition.from}-${transition.to}`}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <CardTitle className="text-lg">
                      {transition.from} → {transition.to}
                    </CardTitle>
                    <ArrowRight className="w-5 h-5 text-muted-foreground" />
                    <Badge variant="outline">{transition.timeline}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-sm">Common Triggers</h4>
                    <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                      {transition.triggers.map((trigger, idx) => (
                        <li key={idx}>{trigger}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-sm">Growth Strategies</h4>
                    <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                      {transition.strategies.map((strategy, idx) => (
                        <li key={idx}>{strategy}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Choosing Your Shape */}
        <div className="max-w-4xl mx-auto prose prose-neutral dark:prose-invert">
          <h2>Choosing Your Shape Journey</h2>
          
          <p>
            Your ideal skill shape depends on your career goals, interests, and the opportunities available to you:
          </p>
          
          <h3>Stay I-Shaped If...</h3>
          <ul>
            <li>You love deep technical work and want to be a domain expert</li>
            <li>Your specialty is in high demand and well-compensated</li>
            <li>You prefer focused work over broad collaboration</li>
            <li>You're early in your career and building foundational depth</li>
          </ul>
          
          <h3>Evolve to T-Shaped If...</h3>
          <ul>
            <li>You want to lead projects requiring cross-functional coordination</li>
            <li>You're frustrated by dependencies and want more autonomy</li>
            <li>You value versatility and career resilience</li>
            <li>You're considering roles like Staff Engineer, Product Manager, or Tech Lead</li>
          </ul>
          
          <h3>Grow to Pi-Shaped If...</h3>
          <ul>
            <li>You have strong interest in a second domain (e.g., technical + management)</li>
            <li>You want to pursue hybrid roles or create a unique career path</li>
            <li>You thrive at the intersection of disciplines</li>
            <li>You're targeting Principal+ or executive leadership roles</li>
          </ul>
          
          <Callout type="success">
            Shape evolution is not linear or mandatory. Many successful careers are built on deep I-shaped 
            expertise. The key is to choose consciously based on your values and goals, not external pressure.
          </Callout>
        </div>
      </div>
    </>
  );
}
