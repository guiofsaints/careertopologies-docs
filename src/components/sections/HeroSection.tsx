// import GitHubButton from "react-github-btn";
import { Badge, Heading, Text } from "@radix-ui/themes";
import {
  SectionContainer,
  GridContainer,
  ContentContainer,
  FlexContainer
} from "../design-system/StandardLayouts";
import careerTopologiesImage from "/placeholder-career-topologies.svg";

export function HeroSection() {
  return (
    <SectionContainer variant="default" padding="lg">
      <GridContainer
        cols={{ default: 1, lg: 2 }}
        gap="xl"
        align="center"
      >
        {/* Left Column - Content */}
        <div className="text-center lg:text-left">
          <Heading
            as="h1"
            size={{ initial: '7', md: '8', lg: '9' }}
            mb="6"
            style={{
              fontWeight: 'bold',
              textAlign: 'center'
            }}
            className="lg:text-left"
          >
            Career Topologies
          </Heading>

          <Text
            as="p"
            size={{ initial: '3', lg: '4' }}
            color="gray"
            mb="6"
            style={{
              lineHeight: '1.6',
              textAlign: 'center'
            }}
            className="lg:text-left"
          >
            A strategic framework for building fair, transparent, and sustainable career paths in technology organizations.
          </Text>

          <FlexContainer
            direction="row"
            align="center"
            justify="center"
            gap="sm"
            wrap
            className="lg:justify-start mb-8"
          >
            {/*
            <GitHubButton
              href="https://github.com/careertopologies/careertopologies"
              data-color-scheme="no-preference: light; light: light; dark: dark;"
              data-icon="octicon-star"
              data-size="large"
              data-show-count="true"
              aria-label="Star careertopologies/careertopologies on GitHub"
            >
              Star
            </GitHubButton>

            <GitHubButton
              href="https://github.com/sponsors/guiofsaints"
              data-color-scheme="no-preference: light; light: light; dark: dark;"
              data-icon="octicon-heart"
              data-size="large"
              aria-label="Sponsor @guiofsaints on GitHub"
            >
              Sponsor
            </GitHubButton>
            */}

            <Badge
              variant="soft"
              color="gray"
              size="2"
              className="h-7 px-3 text-sm font-medium border border-border"
            >
              v1.0.0
            </Badge>
          </FlexContainer>

          {/* Description of the framework patterns */}
          <ContentContainer size="lg" center={false} align="left" className="lg:max-w-none">
            <Text size="2" color="gray" style={{ lineHeight: '1.6' }}>
              The three fundamental career topology patterns: <Text weight="medium">Y-shaped</Text> (traditional dual-track),
              <Text weight="medium"> W-shaped</Text> (multi-track convergence), and
              <Text weight="medium"> N-shaped</Text> (networked progression) - each designed for different organizational contexts and growth philosophies.
            </Text>
          </ContentContainer>
        </div>

        {/* Right Column - Image */}
        <FlexContainer
          direction="col"
          align="center"
          justify="center"
          className="lg:justify-end"
        >
          <div className="relative max-w-md lg:max-w-lg xl:max-w-xl">
            <div className="relative">
              <img
                src={careerTopologiesImage}
                alt="Visual representation of the three career topology models: Y-shaped (traditional dual-track), W-shaped (multi-track convergence), and N-shaped (networked progression) showing different organizational career path structures"
                className="w-full h-auto object-contain"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/20 via-transparent to-transparent pointer-events-none"></div>
            </div>
            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-primary/5 rounded-lg blur-3xl scale-110 -z-10"></div>
          </div>
        </FlexContainer>
      </GridContainer>
    </SectionContainer>
  );
}
