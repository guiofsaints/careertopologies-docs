import { Network, BookOpen, FileText, Grid, GitPullRequest, Users } from "lucide-react";
import { Heading, Text } from "@radix-ui/themes";
import { Link } from "../config/Router";
import {
  SectionContainer,
  GridContainer,
  Card,
  SectionHeader
} from "../design-system/StandardLayouts";

export function FrameworkSection() {
  const frameworks = [
    {
      icon: Grid,
      title: "Framework",
      description: "Dive into the complete strategic framework and implementation guide",
      href: "/framework"
    },
    {
      icon: FileText,
      title: "Manifesto",
      description: "Read our principles for fair and transparent career development",
      href: "/manifesto"
    },
    {
      icon: BookOpen,
      title: "Concepts",
      description: "Understand the core principles and terminology of career frameworks",
      href: "/concepts"
    },
    {
      icon: Network,
      title: "Topologies",
      description: "Explore different career path structures and organizational models",
      href: "/topologies"
    },
    {
      icon: Users,
      title: "Management",
      description: "Understand the three distinct levels of management in technology organizations",
      href: "/management"
    },
    {
      icon: GitPullRequest,
      title: "Contributing",
      description: "Learn how to contribute to and improve the Career Topologies project",
      href: "/contributing"
    }
  ];

  return (
    <SectionContainer variant="default" align="center">
      <SectionHeader
        title="Explore the Framework"
        size="md"
        align="center"
      />

      <GridContainer
        cols={{ default: 1, md: 2, lg: 3 }}
        gap="md"
        justify="center"
      >
        {frameworks.map((framework, index) => {
          const Icon = framework.icon;
          return (
            <Link
              key={index}
              to={framework.href}
              className="block group w-full"
            >
              <Card
                hover
                align="center"
                className="h-full cursor-pointer"
              >
                <Icon className="w-8 h-8 text-primary mb-4 mx-auto group-hover:text-primary transition-colors" />
                <Heading
                  as="h3"
                  size="4"
                  mb="2"
                  className="group-hover:text-primary transition-colors"
                >
                  {framework.title}
                </Heading>
                <Text size="2" color="gray" style={{ lineHeight: '1.6' }}>
                  {framework.description}
                </Text>
              </Card>
            </Link>
          );
        })}
      </GridContainer>
    </SectionContainer>
  );
}
