import { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/layout/breadcrumbs';
import { PageHero } from '@/components/content/page-hero';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Callout } from '@/components/mdx/callout';
import { CodeBlock } from '@/components/mdx/code-block';
import { MessageSquare, FileText, BookOpen, Code, Search } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contributing',
  description: 'How to contribute to the Career Topologies open-source project',
};

const contributionMethods = [
  {
    icon: MessageSquare,
    title: 'Feedback & Discussion',
    description: 'Share your experience implementing the framework, suggest improvements, or ask questions',
    examples: [
      'Report challenges encountered during implementation',
      'Suggest new features or improvements',
      'Ask clarifying questions about the framework',
    ],
  },
  {
    icon: FileText,
    title: 'Documentation',
    description: 'Improve clarity, fix errors, add examples, or expand explanations',
    examples: [
      'Fix typos or grammatical errors',
      'Add concrete examples to abstract concepts',
      'Improve clarity of existing documentation',
    ],
  },
  {
    icon: BookOpen,
    title: 'Case Studies',
    description: 'Contribute real-world implementation stories and lessons learned',
    examples: [
      'Document your organization\'s framework customization',
      'Share metrics and outcomes from implementation',
      'Describe challenges and how you overcame them',
    ],
  },
  {
    icon: Code,
    title: 'Code & Tools',
    description: 'Enhance the website, build tools, or create visualizations',
    examples: [
      'Improve website UI/UX',
      'Add interactive components or diagrams',
      'Build implementation calculators or assessment tools',
    ],
  },
  {
    icon: Search,
    title: 'Research',
    description: 'Add academic references, evidence, or new research findings',
    examples: [
      'Cite relevant academic research',
      'Add case studies from technology companies',
      'Document evidence for specific design decisions',
    ],
  },
];

export default function ContributingPage() {
  return (
    <>
      <Breadcrumbs />
      <PageHero
        title="Contributing to Career Topologies"
        description="How to contribute to the Career Topologies open-source project"
      />
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-slate dark:prose-invert mb-12">
            <p className="lead">
              Career Topologies is an open-source project, and we welcome contributions from the community.
            </p>
            <p>
              Whether you're implementing the framework in your organization, researching career development practices, or building tools for the community, your contributions help make Career Topologies better for everyone.
            </p>
          </article>

          <Callout type="info" title="First Time Contributing?">
            Welcome! Start by reading through the documentation, exploring the{' '}
            <a href="https://github.com/guiofsaints/careertopologies-docs" target="_blank" rel="noopener noreferrer">
              GitHub repository
            </a>
            , and joining discussions in Issues. No contribution is too small.
          </Callout>

          <div className="my-12">
            <h2 className="text-2xl font-bold mb-6">Ways to Contribute</h2>
            <div className="grid gap-6">
              {contributionMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <Card key={method.title} className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                        <p className="text-muted-foreground mb-3">{method.description}</p>
                        <ul className="text-sm space-y-1">
                          {method.examples.map((example, i) => (
                            <li key={i}>{example}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          <div className="prose prose-slate dark:prose-invert mb-12">
            <h2>GitHub Workflow</h2>
            <p>
              We follow a standard fork-and-pull-request workflow. Here's how to contribute code or documentation:
            </p>

            <h3>1. Fork the Repository</h3>
            <p>
              Visit the{' '}
              <a href="https://github.com/guiofsaints/careertopologies-docs" target="_blank" rel="noopener noreferrer">
                Career Topologies GitHub repository
              </a>{' '}
              and click the "Fork" button to create your own copy.
            </p>

            <h3>2. Clone and Create a Branch</h3>
          </div>

          <CodeBlock
            language="bash"
            filename="terminal"
          >
            {`# Clone your fork
git clone https://github.com/YOUR_USERNAME/careertopologies-docs.git
cd careertopologies-docs

# Create a feature branch
git checkout -b feat/your-feature-name

# Install dependencies
pnpm install`}
          </CodeBlock>

          <div className="prose prose-slate dark:prose-invert my-8">
            <h3>3. Make Your Changes</h3>
            <p>
              Edit the relevant files. For documentation changes, look in the <code>apps/web/app/</code> directory.
              Ensure your changes follow the existing code style and conventions.
            </p>

            <h3>4. Test Your Changes</h3>
          </div>

          <CodeBlock
            language="bash"
            filename="terminal"
          >
            {`# Run the development server
pnpm dev

# Open http://localhost:3000 and verify your changes

# Run type checking
pnpm typecheck

# Run linter
pnpm lint`}
          </CodeBlock>

          <div className="prose prose-slate dark:prose-invert my-8">
            <h3>5. Commit and Push</h3>
          </div>

          <CodeBlock
            language="bash"
            filename="terminal"
          >
            {`# Stage your changes
git add .

# Commit with a descriptive message
git commit -m "feat: add example to progression pillars page"

# Push to your fork
git push origin feat/your-feature-name`}
          </CodeBlock>

          <div className="prose prose-slate dark:prose-invert my-8">
            <h3>6. Create a Pull Request</h3>
            <p>
              Go to the original repository on GitHub and click "New Pull Request". Select your fork and branch,
              then provide a clear description of your changes:
            </p>
            <ul>
              <li>What problem does this solve?</li>
              <li>What changes did you make?</li>
              <li>How can reviewers test it?</li>
              <li>Any relevant screenshots or examples?</li>
            </ul>

            <h3>7. Collaborate on Review</h3>
            <p>
              Maintainers will review your pull request and may suggest changes. Be responsive to feedback and
              make requested updates. Once approved, your contribution will be merged!
            </p>
          </div>

          <Callout type="success" title="Contribution Tips">
            <ul>
              <li>Start small - fix a typo, add an example, or improve a description</li>
              <li>Read existing documentation to understand the tone and style</li>
              <li>Ask questions in GitHub Issues before starting large contributions</li>
              <li>Be patient and collaborative during the review process</li>
            </ul>
          </Callout>

          <div className="prose prose-slate dark:prose-invert my-12">
            <h2>Code of Conduct</h2>
            <p>
              We are committed to providing a welcoming and inclusive environment for all contributors.
              All participants are expected to:
            </p>
            <ul>
              <li>Be respectful and considerate in all interactions</li>
              <li>Welcome newcomers and help them get started</li>
              <li>Accept constructive criticism gracefully</li>
              <li>Focus on what is best for the community</li>
              <li>Show empathy towards other community members</li>
            </ul>
            <p>
              Unacceptable behavior includes harassment, discrimination, personal attacks, or any conduct that
              creates an intimidating or hostile environment. Violations will not be tolerated.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t">
            <Button asChild size="lg">
              <a
                href="https://github.com/guiofsaints/careertopologies-docs"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a
                href="https://github.com/guiofsaints/careertopologies-docs/issues"
                target="_blank"
                rel="noopener noreferrer"
              >
                Browse Issues
              </a>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
