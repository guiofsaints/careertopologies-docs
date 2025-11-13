import { BreadcrumbNavigation } from "../layout/BreadcrumbNavigation";
import { useRouter } from "../config/Router";
import { SectionContainer, ContentContainer } from "../design-system/StandardLayouts";
import { Heading, Text } from '@radix-ui/themes';

interface PageHeroProps {
  title: string;
  description: string;
}

export function PageHero({ title, description }: PageHeroProps) {
  const { currentPath } = useRouter();
  const hasBreadcrumbs = currentPath !== "/";

  return (
    <>
      <BreadcrumbNavigation currentPath={currentPath} />
      <SectionContainer
        variant="default"
        padding={hasBreadcrumbs ? "sm" : "default"}
        align="center"
      >
        <Heading as="h1" size="8" mb="6" align="center">
          {title}
        </Heading>
        <ContentContainer size="lg" center align="center">
          <Text size="3" color="gray" style={{ lineHeight: '1.6' }}>
            {description}
          </Text>
        </ContentContainer>
      </SectionContainer>
    </>
  );
}
