import {
  Target,
  Users,
  TrendingUp,
  Award,
  CheckCircle,
  Layers,
  GitBranch,
  Network,
  Code,
  BookOpen,
  ArrowRight,
} from 'lucide-react';
import { Heading, Text } from '@radix-ui/themes';
import { Link } from '../config/Router';
import { UnifiedRelatedPages } from '../sections/UnifiedRelatedPages';
import { getUnifiedRelatedPages } from '../sections/UnifiedRelatedPagesConfig';
import { PageHero } from '../media/PageHero';
import { FeatureCard, FeatureCardGrid } from '../common';


function PurposeSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <Heading as="h2" size="6" className="mb-8 text-center">
        Purpose
      </Heading>
      <div className="bg-card border border-border rounded-lg p-8 text-center">
        <Target className="w-12 h-12 text-primary mx-auto mb-6" />
        <Text as="p" size="3" color="gray" className="leading-relaxed max-w-2xl mx-auto">
          The framework was created to address a common challenge in the tech industry: building career systems that are clear, inclusive, and aligned with business needs. Career Topologies aims to empower individuals and organizations by offering a shared language and strategy for career development.
        </Text>
      </div>
    </section>
  );
}

function DifferenceSection() {
  const values = [
    "Transparency in expectations and opportunities",
    "Merit-based growth without favoritism",
    "Equity in compensation and recognition",
    "Consistency in evaluations and promotions",
    "Collaboration over competition",
    "Diversity and inclusion across all levels",
    "Shared ownership of career development",
    "Flexibility to grow through different paths"
  ];

  return (
    <section className="bg-muted/30 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <Heading as="h2" size="6" className="mb-8 text-center">
          What Makes It Different?
        </Heading>
        <Text as="p" size="3" color="gray" className="text-center mb-8 max-w-2xl mx-auto">
          Career Topologies is not just a ladder—it's a multidimensional model that adapts to different contexts, roles, and organizational cultures. It emphasizes:
        </Text>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {values.map((value, index) => (
            <div key={index} className="flex items-center gap-3 bg-card border border-border rounded-lg p-4">
              <CheckCircle className="w-5 h-5 text-primary shrink-0" />
              <Text as="span" size="3">{value}</Text>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Text as="p" size="3" color="gray">
            These values are expressed in the{" "}
            <Link to="/manifesto" className="text-primary hover:underline">
              Career Manifesto
            </Link>
            , which underpins all decisions in the framework.
          </Text>
        </div>
      </div>
    </section>
  );
}

function CoreComponentsSection() {
  const components = [
    {
      icon: Layers,
      title: 'Leveling',
      description: 'Defines job titles and seniority levels across areas',
    },
    {
      icon: TrendingUp,
      title: 'Progression Pillars',
      description: 'Guides knowledge, skills, and behavior expectations',
    },
    {
      icon: Award,
      title: 'Ladder Principles',
      description: 'Establishes rules for fair promotions and movement',
    },
    {
      icon: BookOpen,
      title: 'Guidelines',
      description:
        'Offers best practices for applying and maintaining the model',
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <Heading as="h2" size="6" className="mb-12 text-center">
        Core Components
      </Heading>
      <Text
        as="p"
        size="3"
        color="gray"
        className="text-center mb-12 max-w-2xl mx-auto"
      >
        The structure of Career Topologies is built upon four pillars:
      </Text>
      <FeatureCardGrid>
        {components.map((component) => (
          <FeatureCard
            key={component.title}
            icon={component.icon}
            title={component.title}
            description={component.description}
          />
        ))}
      </FeatureCardGrid>
    </section>
  );
} function GovernanceSection() {
  return (
    <section className="bg-muted/30 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <Heading as="h2" size="6" className="mb-8 text-center">
          Governance & Roles
        </Heading>
        <div className="bg-card border border-border rounded-lg p-8 text-center">
          <Users className="w-12 h-12 text-primary mx-auto mb-6" />
          <Text as="p" size="3" color="gray" className="leading-relaxed max-w-2xl mx-auto">
            The framework also outlines the roles and responsibilities of people involved in career development—from ICs and managers to HR, business partners, and compensation teams. Everyone has a part in ensuring the model is applied fairly and evolves with the organization.
          </Text>
        </div>
      </div>
    </section>
  );
}

function ManagementModelSection() {
  const layers = [
    {
      title: "Front-line Managers",
      description: "Handle daily execution and team support"
    },
    {
      title: "Middle Managers",
      description: "Translate strategy into structure and planning"
    },
    {
      title: "Top Managers",
      description: "Set long-term vision and business direction"
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <Heading as="h2" size="6" className="mb-8 text-center">
        Management Model
      </Heading>
      <Text as="p" size="3" color="gray" className="text-center mb-12 max-w-2xl mx-auto">
        Career Topologies recognizes that management operates at different layers:
      </Text>
      <div className="space-y-6">
        {layers.map((layer, index) => (
          <div key={index} className="border border-border bg-card rounded-lg p-6">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                {index + 1}
              </div>
              <div>
                <Heading as="h3" size="4" className="mb-1">{layer.title}</Heading>
                <Text as="p" size="3" color="gray">{layer.description}</Text>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Text as="p" size="3" color="gray" className="text-center mt-8">
        Each layer has its own focus, impact, and recommended competencies.
      </Text>
    </section>
  );
}

function ProfessionalShapesSection() {
  const shapes = [
    {
      icon: "I",
      title: "I-Shaped",
      description: "Deep specialists"
    },
    {
      icon: "T",
      title: "T-Shaped",
      description: "Specialists with broad collaboration capability"
    },
    {
      icon: "π",
      title: "Pi-Shaped (Comp-Shaped)",
      description: "Multidisciplinary experts with high autonomy"
    }
  ];

  return (
    <section className="bg-muted/30 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <Heading as="h2" size="6" className="mb-8 text-center">
          Professional Shapes
        </Heading>
        <Text as="p" size="3" color="gray" className="text-center mb-12 max-w-2xl mx-auto">
          Not all professionals grow in the same way. The framework includes three key skill profiles:
        </Text>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {shapes.map((shape, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-medium mx-auto mb-4">
                {shape.icon}
              </div>
              <Heading as="h3" size="4" className="mb-3">{shape.title}</Heading>
              <Text as="p" size="3" color="gray" className="leading-relaxed">
                {shape.description}
              </Text>
            </div>
          ))}
        </div>
        <Text as="p" size="3" color="gray" className="text-center mt-8">
          These profiles help teams design the right mix of talent and support individual aspirations.
        </Text>
      </div>
    </section>
  );
}

function TopologyModelsSection() {
  const models = [
    {
      icon: GitBranch,
      title: "Y-Model",
      description: "Split between leadership and technical growth"
    },
    {
      icon: Network,
      title: "W-Model",
      description: "Adds a hybrid path (e.g. project/technical leadership or consulting)"
    },
    {
      icon: Code,
      title: "Network Model",
      description: "Encourages fluid transitions between roles and domains"
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <Heading as="h2" size="6" className="mb-8 text-center">
        Career Topologies
      </Heading>
      <Text as="p" size="3" color="gray" className="text-center mb-12 max-w-2xl mx-auto">
        The name "topologies" refers to the flexible career structures the framework supports. Different models can be adopted depending on the nature of the work and company culture:
      </Text>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {models.map((model, index) => {
          const Icon = model.icon;
          return (
            <div key={index} className="border border-border bg-card rounded-lg p-6 text-center">
              <Icon className="w-8 h-8 text-primary mx-auto mb-4" />
              <Heading as="h3" size="4" className="mb-3">{model.title}</Heading>
              <Text as="p" size="3" color="gray" className="leading-relaxed">
                {model.description}
              </Text>
            </div>
          );
        })}
      </div>
      <Text as="p" size="3" color="gray" className="text-center mt-8">
        Each model is supported with visual diagrams and structured role mappings.
      </Text>
    </section>
  );
}

function DevelopmentSection() {
  const futureItems = [
    "More detailed use cases",
    "Evolution strategies for shape and path transitions",
    "Lightweight governance models (e.g. Holacracy)"
  ];

  return (
    <section className="bg-muted/30 py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <Heading as="h2" size="6" className="mb-8">
          Ongoing Development
        </Heading>
        <Text as="p" size="3" color="gray" className="mb-8">
          This is version 1.0 of the framework. Future iterations will expand on:
        </Text>
        <div className="space-y-4 mb-8">
          {futureItems.map((item, index) => (
            <div key={index} className="flex items-center justify-center gap-3 bg-card border border-border rounded-lg p-4">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <Text as="span" size="3">{item}</Text>
            </div>
          ))}
        </div>
        <Text as="p" size="3" color="gray" className="mb-8">
          Career Topologies is open and community-driven. Contributions, adaptations, and discussions are welcome via GitHub.
        </Text>
        <Link
          to="/contributing"
          className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
        >
          Contribute on GitHub
          <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}

export function AboutPage() {
  const relatedConfig = getUnifiedRelatedPages("/about");

  return (
    <>
      <PageHero
        title="About Career Topologies"
        description="Career Topologies is an open framework designed to help technology organizations create fair, transparent, and sustainable career paths. Developed by Guilherme (Gui Santos), this model provides a structured yet flexible foundation to support professional growth in both technical and leadership tracks."
      />
      <PurposeSection />
      <DifferenceSection />
      <CoreComponentsSection />
      <GovernanceSection />
      <ManagementModelSection />
      <ProfessionalShapesSection />
      <TopologyModelsSection />
      <DevelopmentSection />
      <UnifiedRelatedPages
        pages={relatedConfig.pages as any}
        variant={relatedConfig.variant}
        title={'title' in relatedConfig ? relatedConfig.title : undefined}
      />
    </>
  );
}
