import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { ThemeToggle } from '@/components/layout/theme-toggle';

export default function HomePage() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header with theme toggle */}
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold">Career Topologies</h1>
          <ThemeToggle />
        </div>

        {/* Welcome message */}
        <Alert>
          <AlertDescription>
            Phase 1 Foundation Complete – Next.js 16, Tailwind CSS v4, shadcn/ui, and dark/light theme management are now functional.
          </AlertDescription>
        </Alert>

        {/* Component showcase */}
        <Card>
          <CardHeader>
            <CardTitle>Welcome to Career Topologies</CardTitle>
            <CardDescription>
              Transparent, equitable career development framework for technology organizations
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              This is a placeholder page demonstrating the design system. Future phases will implement:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Content infrastructure with Contentlayer and MDX</li>
              <li>Global layout components (Header, Footer, Navigation)</li>
              <li>14 documentation pages across 4 content pillars</li>
              <li>Interactive visualizations and career progression tools</li>
            </ul>
            <div className="flex gap-4">
              <Button variant="default">Primary Action</Button>
              <Button variant="outline">Secondary Action</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
