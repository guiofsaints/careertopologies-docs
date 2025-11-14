import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/layout/breadcrumbs';
import { PageHero } from '@/components/content/page-hero';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Callout } from '@/components/mdx/callout';
import { Badge } from '@/components/ui/badge';
import { CheckCircle } from 'lucide-react';
import { readinessIndicators, interimExperiences } from './data/readiness';

export const metadata: Metadata = {
  title: 'Developing Leaders',
  description: 'Leadership readiness assessment and decision framework for transitioning to management',
};

export default function DevelopingLeadersPage() {
  return (
    <>
      <Breadcrumbs />
      <PageHero
        title="Developing Leaders"
        description="Leadership readiness assessment and decision framework for transitioning to management"
      />
      
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Introduction */}
        <div className="prose prose-neutral dark:prose-invert max-w-4xl mx-auto mb-12">
          <p className="lead">
            Transitioning to management is a significant career decision. This guide helps individuals 
            and organizations assess leadership readiness and provides frameworks for making informed 
            decisions about management transitions.
          </p>
          
          <Callout type="warning">
            Management is not a promotion—it's a career change. You'll trade hands-on technical work 
            for people development, team coordination, and organizational problem-solving. Make sure 
            this aligns with your interests and strengths.
          </Callout>
        </div>

        {/* Leadership Readiness Assessment */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="prose prose-neutral dark:prose-invert max-w-4xl mb-8">
            <h2>Leadership Readiness Assessment</h2>
            <p>
              Strong management candidates typically demonstrate behaviors across these four categories. 
              No one is perfect in all areas, but you should see consistent patterns in most.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {readinessIndicators.map((category) => (
              <Card key={category.category}>
                <CardHeader>
                  <CardTitle className="text-lg">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.indicators.map((indicator, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm">
                        <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{indicator}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="prose prose-neutral dark:prose-invert max-w-4xl mt-8">
            <Callout type="info">
              Self-assess honestly and seek feedback from peers and managers. Strong IC contributors 
              don't always make great managers—and that's okay! Both tracks are valuable.
            </Callout>
          </div>
        </div>

        {/* Interim Management Experiences */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="prose prose-neutral dark:prose-invert max-w-4xl mb-8">
            <h2>Test Before You Commit: Interim Experiences</h2>
            <p>
              Before making a full commitment to management, try interim experiences that give you a 
              taste of management responsibilities without permanently leaving the IC track.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {interimExperiences.map((experience) => (
              <Card key={experience.id}>
                <CardHeader>
                  <div className="space-y-2">
                    <CardTitle className="text-lg">{experience.title}</CardTitle>
                    <CardDescription>{experience.description}</CardDescription>
                    <Badge variant="outline" className="text-xs">
                      {experience.duration}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div>
                    <h4 className="font-semibold mb-3 text-sm">What You'll Learn</h4>
                    <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                      {experience.learnings.map((learning, idx) => (
                        <li key={idx}>{learning}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Decision Framework */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="prose prose-neutral dark:prose-invert max-w-4xl mb-8">
            <h2>Should You Become a Manager? Decision Framework</h2>
            <p>
              Use this flowchart to guide your decision. Answer honestly—there are no "right" answers, 
              only answers that are right for you.
            </p>
          </div>

          <Card>
            <CardContent className="pt-6">
              <div className="space-y-6">
                {/* Question 1 */}
                <div className="p-4 border rounded-lg bg-muted/20">
                  <h4 className="font-semibold mb-2">1. Do you enjoy helping others grow more than your own technical work?</h4>
                  <div className="grid md:grid-cols-2 gap-4 mt-4 text-sm">
                    <div className="p-3 border rounded bg-green-50 dark:bg-green-950/20">
                      <strong>Yes:</strong> Good sign for management. Proceed to question 2.
                    </div>
                    <div className="p-3 border rounded bg-yellow-50 dark:bg-yellow-950/20">
                      <strong>No or Unsure:</strong> Consider staying IC or trying hybrid roles (Tech Lead, Staff Engineer).
                    </div>
                  </div>
                </div>

                {/* Question 2 */}
                <div className="p-4 border rounded-lg bg-muted/20">
                  <h4 className="font-semibold mb-2">2. Are you comfortable with reduced hands-on technical work?</h4>
                  <div className="grid md:grid-cols-2 gap-4 mt-4 text-sm">
                    <div className="p-3 border rounded bg-green-50 dark:bg-green-950/20">
                      <strong>Yes:</strong> Good fit. Proceed to question 3.
                    </div>
                    <div className="p-3 border rounded bg-yellow-50 dark:bg-yellow-950/20">
                      <strong>No:</strong> Consider W-shaped topology with Technical Leadership track or high-autonomy IC roles.
                    </div>
                  </div>
                </div>

                {/* Question 3 */}
                <div className="p-4 border rounded-lg bg-muted/20">
                  <h4 className="font-semibold mb-2">3. Have you tested management through interim experiences?</h4>
                  <div className="grid md:grid-cols-2 gap-4 mt-4 text-sm">
                    <div className="p-3 border rounded bg-green-50 dark:bg-green-950/20">
                      <strong>Yes, and I enjoyed it:</strong> Strong candidate for management. Proceed to question 4.
                    </div>
                    <div className="p-3 border rounded bg-yellow-50 dark:bg-yellow-950/20">
                      <strong>No or Mixed feelings:</strong> Try 1-2 interim experiences before committing.
                    </div>
                  </div>
                </div>

                {/* Question 4 */}
                <div className="p-4 border rounded-lg bg-muted/20">
                  <h4 className="font-semibold mb-2">4. Are you ready to invest 6-12 months learning management skills?</h4>
                  <div className="grid md:grid-cols-2 gap-4 mt-4 text-sm">
                    <div className="p-3 border rounded bg-green-50 dark:bg-green-950/20">
                      <strong>Yes:</strong> Ready for management transition. Talk to your manager about opportunities.
                    </div>
                    <div className="p-3 border rounded bg-yellow-50 dark:bg-yellow-950/20">
                      <strong>No:</strong> Wait until you have bandwidth for the transition. Management requires significant learning investment.
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Transition Support */}
        <div className="max-w-4xl mx-auto prose prose-neutral dark:prose-invert">
          <h2>Supporting New Managers</h2>
          
          <p>
            Organizations play a critical role in setting up new managers for success. Provide:
          </p>
          
          <h3>Training & Resources</h3>
          <ul>
            <li>Management fundamentals training (1-on-1s, feedback, performance reviews)</li>
            <li>Access to management books, courses, and communities</li>
            <li>Budget for executive coaching or management programs</li>
          </ul>
          
          <h3>Mentorship & Support</h3>
          <ul>
            <li>Pair with experienced manager mentor for first 6-12 months</li>
            <li>Regular skip-level check-ins with their manager's manager</li>
            <li>Peer support group with other new managers</li>
          </ul>
          
          <h3>Realistic Expectations</h3>
          <ul>
            <li>Reduce IC work expectations during first 6 months</li>
            <li>Smaller initial team size (4-6 people max)</li>
            <li>Patience for mistakes and learning curve</li>
            <li>Clear success criteria for first 90 days</li>
          </ul>
          
          <Callout type="success">
            The transition to management is hard—even for naturally talented people leaders. Set new 
            managers up for success with training, mentorship, and realistic expectations. Poor support 
            leads to burnout and high manager turnover.
          </Callout>

          <h3>Returning to IC Track</h3>
          <p>
            Some people try management and realize it's not for them—and that's completely okay! 
            Organizations should support "boomerang" transitions back to IC work without stigma:
          </p>
          <ul>
            <li>Frame it as valuable learning, not failure</li>
            <li>Preserve level and compensation when returning to IC track</li>
            <li>Value the management skills they developed (coordination, communication, empathy)</li>
            <li>Create space for future re-entry to management if interests change</li>
          </ul>

          <p>
            Learn more about management expectations at each level: <Link href="/management">Management Levels</Link>.
          </p>
        </div>
      </div>
    </>
  );
}
