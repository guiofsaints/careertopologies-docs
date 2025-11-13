import { Users, UserCheck, TrendingUp, Building } from "lucide-react";
import { Text } from "@radix-ui/themes";
import {
  SectionContainer,
  GridContainer,
  SectionHeader,
  FlexContainer
} from "../design-system/StandardLayouts";

export function AudienceSection() {
  const audiences = [
    {
      icon: Users,
      text: "HR professionals and People teams"
    },
    {
      icon: UserCheck,
      text: "Engineering managers and team leaders"
    },
    {
      icon: TrendingUp,
      text: "Individual contributors planning growth"
    },
    {
      icon: Building,
      text: "Organizations designing structured paths"
    }
  ];

  return (
    <SectionContainer variant="default" align="center">
      <SectionHeader
        title="Who is this for?"
        size="md"
        align="center"
      />

      <GridContainer
        cols={{ default: 1, sm: 2 }}
        gap="lg"
        justify="center"
      >
        {audiences.map((audience, index) => {
          const Icon = audience.icon;
          return (
            <FlexContainer
              key={index}
              direction="row"
              align="start"
              justify="start"
              gap="md"
              className="text-left max-w-md mx-auto"
            >
              <Icon className="w-6 h-6 text-primary mt-1 shrink-0" />
              <Text size="4" style={{ lineHeight: '1.6' }}>
                {audience.text}
              </Text>
            </FlexContainer>
          );
        })}
      </GridContainer>
    </SectionContainer>
  );
}
