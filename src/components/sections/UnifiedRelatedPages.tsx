import { Link } from '../config/Router';
import { ArrowRight } from "lucide-react";
import { LucideIcon } from "lucide-react";
import { Heading, Text, Box } from "@radix-ui/themes";
import { SectionContainer, GridContainer } from "../design-system/StandardLayouts";

interface RelatedPageLink {
  title: string;
  path: string;
  description: string;
  icon?: LucideIcon;
}

interface UnifiedRelatedPagesProps {
  pages: readonly RelatedPageLink[];
  title?: string;
  description?: string;
  variant?: "explore" | "related" | "learn" | "links";
  autoDetectVariant?: boolean;
}

// Auto-detect variant based on page content and context
function detectVariant(title: string, pages: readonly RelatedPageLink[]): "explore" | "related" | "learn" | "links" {
  // If pages have icons, prefer explore variant
  if (pages.some(page => page.icon)) {
    return "explore";
  }

  // If title contains "Explore", use explore variant
  if (title.toLowerCase().includes("explore")) {
    return "explore";
  }

  // If title contains "Learn", use learn variant
  if (title.toLowerCase().includes("learn")) {
    return "learn";
  }

  // If title contains "Links", use links variant
  if (title.toLowerCase().includes("links")) {
    return "links";
  }

  // Default to related for most cases
  return "related";
}

export function UnifiedRelatedPages({
  pages,
  title,
  description,
  variant,
  autoDetectVariant = true
}: UnifiedRelatedPagesProps) {
  // Auto-detect variant if not provided
  const finalVariant = variant || (autoDetectVariant ? detectVariant(title || "", pages) : "related");

  // Set default title and description based on variant
  const defaultTitle = {
    explore: "Explore Related Sections",
    related: "Related Pages",
    learn: "Learn More",
    links: "Related Links"
  }[finalVariant];

  const defaultDescription = {
    explore: "Dive deeper into related topics and concepts:",
    related: "Explore related topics and learn more about the Career Topologies framework:",
    learn: "Visit the following pages to explore related topics:",
    links: "Explore these related resources:"
  }[finalVariant];

  const finalTitle = title || defaultTitle;
  const finalDescription = description || defaultDescription;

  // Variant-specific styling
  const getGridCols = () => {
    switch (finalVariant) {
      case "explore":
        return { default: 1, md: 2, lg: 4 };
      case "related":
        return { default: 1, md: 2, lg: 3 };
      case "learn":
        return { default: 1, md: 2, lg: 3 };
      case "links":
        return { default: 1, md: 2 };
      default:
        return { default: 1, md: 2, lg: 3 };
    }
  };

  const getContainerVariant = (): 'default' | 'narrow' | 'wide' => {
    switch (finalVariant) {
      case "explore":
        return "default"; // max-w-6xl equivalent
      case "related":
      case "learn":
      case "links":
        return "narrow";  // max-w-4xl equivalent
      default:
        return "narrow";
    }
  };

  const renderExploreCard = (page: RelatedPageLink, index: number) => {
    const Icon = page.icon;
    return (
      <Link
        key={index}
        to={page.path}
        className="border border-border bg-card rounded-lg p-6 hover:bg-accent hover:border-primary/30 transition-all duration-200 cursor-pointer group"
      >
        {Icon && (
          <Icon className="w-8 h-8 text-primary mb-4 group-hover:text-primary transition-colors" />
        )}
        <Heading
          as="h3"
          size="4"
          mb="2"
          className="group-hover:text-primary transition-colors"
        >
          {page.title}
        </Heading>
        <Text size="2" color="gray" mb="4" style={{ lineHeight: '1.6', display: 'block' }}>
          {page.description}
        </Text>
        <div className="flex items-center text-primary text-sm">
          Learn more
          <ArrowRight className="w-4 h-4 ml-2" />
        </div>
      </Link>
    );
  };

  const renderStandardCard = (page: RelatedPageLink, index: number) => {
    const Icon = page.icon;
    return (
      <Link
        key={index}
        to={page.path}
        className="border border-border bg-card rounded-lg p-6 hover:bg-accent hover:border-primary/30 transition-all duration-200 cursor-pointer group"
      >
        <div className="flex items-center justify-between">
          <div className="flex-1">
            {Icon && (
              <Icon className="w-6 h-6 text-primary mb-3 group-hover:text-primary transition-colors" />
            )}
            <Heading
              as="h3"
              size="4"
              mb="2"
              className="group-hover:text-primary transition-colors"
            >
              {page.title}
            </Heading>
            <Text size="2" color="gray" style={{ lineHeight: '1.6' }}>
              {page.description}
            </Text>
          </div>
          <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors ml-4 shrink-0" />
        </div>
      </Link>
    );
  };

  const renderCard = (page: RelatedPageLink, index: number) => {
    if (finalVariant === "explore") {
      return renderExploreCard(page, index);
    }
    return renderStandardCard(page, index);
  };

  return (
    <SectionContainer variant={getContainerVariant()} align="center">
      <Heading as="h2" size="6" mb="6" align="center">
        {finalTitle}
      </Heading>
      {finalDescription && (
        <Box style={{
          maxWidth: '672px',
          margin: '0 auto 3rem auto'
        }}>
          <Text size="3" color="gray" align="center" style={{
            lineHeight: '1.6',
            display: 'block'
          }}>
            {finalDescription}
          </Text>
        </Box>
      )}
      <GridContainer cols={getGridCols()} gap="md">
        {pages.map((page, index) => renderCard(page, index))}
      </GridContainer>
    </SectionContainer>
  );
}
