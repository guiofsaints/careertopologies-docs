import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';

export default function HomePage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Hero Section */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Career Topologies
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A transparent, equitable framework for career development in technology organizations
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/about">Get Started</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/framework">View Framework</Link>
          </Button>
        </div>

        {/* Info Alert */}
        <Alert>
          <AlertDescription>
            Phase 2 Complete – Content infrastructure and navigation system are now in place. Ready for content population.
          </AlertDescription>
        </Alert>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <Card>
            <CardHeader>
              <CardTitle>Topologies</CardTitle>
              <CardDescription>
                Organizational structures and career patterns
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="link" className="px-0">
                <Link href="/topologies">Explore Topologies →</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Framework</CardTitle>
              <CardDescription>
                Career levels and progression pillars
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="link" className="px-0">
                <Link href="/framework">View Framework →</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Management</CardTitle>
              <CardDescription>
                Guidance for developing leaders
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="link" className="px-0">
                <Link href="/management">Learn More →</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
