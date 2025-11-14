import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal tracking-tight">
                Career Topologies
              </h1>
              <p className="text-xl text-muted-foreground">
                A transparent, equitable framework for career development in technology organizations
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/framework">Explore Framework</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Core Components
            </h2>
            <p className="text-muted-foreground">
              A comprehensive framework built on transparent principles and proven practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Link href="/topologies" className="group">
              <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50">
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      Topologies
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Organizational structures and career patterns
                    </p>
                  </div>
                  <div className="text-sm font-medium text-primary">
                    Explore →
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/framework" className="group">
              <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50">
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      Framework
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Career levels and progression pillars
                    </p>
                  </div>
                  <div className="text-sm font-medium text-primary">
                    View Framework →
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/management" className="group">
              <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50">
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      Management
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Guidance for developing leaders
                    </p>
                  </div>
                  <div className="text-sm font-medium text-primary">
                    Learn More →
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Built on Core Principles
              </h2>
              <p className="text-muted-foreground">
                Transparency, equity, and growth at every level
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3 p-6 rounded-lg border bg-card">
                <h3 className="text-lg font-semibold">Transparent Progression</h3>
                <p className="text-sm text-muted-foreground">
                  Clear expectations and criteria at every career level
                </p>
              </div>

              <div className="space-y-3 p-6 rounded-lg border bg-card">
                <h3 className="text-lg font-semibold">Equitable Opportunities</h3>
                <p className="text-sm text-muted-foreground">
                  Fair evaluation and advancement for all team members
                </p>
              </div>

              <div className="space-y-3 p-6 rounded-lg border bg-card">
                <h3 className="text-lg font-semibold">Flexible Paths</h3>
                <p className="text-sm text-muted-foreground">
                  Multiple career trajectories beyond traditional hierarchies
                </p>
              </div>

              <div className="space-y-3 p-6 rounded-lg border bg-card">
                <h3 className="text-lg font-semibold">Continuous Growth</h3>
                <p className="text-sm text-muted-foreground">
                  Ongoing development aligned with organizational goals
                </p>
              </div>
            </div>

            <div className="text-center pt-8">
              <Button asChild size="lg" variant="outline">
                <Link href="/manifesto">Read Our Manifesto →</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-serif font-normal">
                Ready to get started?
              </h2>
              <p className="text-lg text-muted-foreground">
                Explore our comprehensive framework and start building transparent career paths
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/framework">View Framework</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contributing">Contribute</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
