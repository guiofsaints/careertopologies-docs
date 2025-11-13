import { Brain, Target, Clock, CheckCircle, ArrowRight, ArrowDown, RotateCcw, Info } from "lucide-react";
import { Tooltip } from "@radix-ui/themes";

interface FlowchartStep {
  number: string;
  title: string;
  shortTitle: string;
  icon: React.ComponentType<any>;
  description: string;
  details: string[];
  color: string;
}

interface Outcome {
  emoji: string;
  title: string;
  description: string;
  action: string;
  color: string;
  textColor: string;
}

const steps: FlowchartStep[] = [
  {
    number: "1",
    title: "Knowledge & Contribution Analysis",
    shortTitle: "Analysis",
    icon: Brain,
    description: "Assess skills, mindset, and delivery for leadership role",
    details: [
      "Technical mastery evaluation",
      "Behavioral signs assessment",
      "Past performance review",
      "Peer feedback collection"
    ],
    color: "bg-primary"
  },
  {
    number: "2",
    title: "Development Plan",
    shortTitle: "Planning",
    icon: Target,
    description: "Create clear growth path with training and mentoring",
    details: [
      "Motivation reflection",
      "Skill-building areas",
      "Measurable goals",
      "Time-bound checkpoints"
    ],
    color: "bg-primary"
  },
  {
    number: "3",
    title: "Interim Experience",
    shortTitle: "Experience",
    icon: Clock,
    description: "3-6 months time-boxed leadership opportunity",
    details: [
      "Clear scope assignment",
      "Team/project leadership",
      "Coaching support",
      "Structured check-ins"
    ],
    color: "bg-primary"
  },
  {
    number: "4",
    title: "Evaluation",
    shortTitle: "Evaluation",
    icon: CheckCircle,
    description: "Assess growth, motivation, and team perception",
    details: [
      "Impact delivered?",
      "Personal motivation?",
      "Team perception?",
      "Growth demonstrated?"
    ],
    color: "bg-primary"
  }
];

const outcomes: Outcome[] = [
  {
    emoji: "🟢",
    title: "Promotion",
    description: "Assume formal leadership role",
    action: "Onboarding into management",
    color: "bg-green-50 border-green-200",
    textColor: "text-green-700"
  },
  {
    emoji: "🟡",
    title: "Further Development",
    description: "Revisit and adjust the plan",
    action: "Loop back to step 2",
    color: "bg-yellow-50 border-yellow-200",
    textColor: "text-yellow-700"
  },
  {
    emoji: "🔴",
    title: "No Longer Interested",
    description: "Pause or exit leadership path respectfully",
    action: "Process ends respectfully",
    color: "bg-red-50 border-red-200",
    textColor: "text-red-700"
  }
];

function StepCard({ step }: { step: FlowchartStep }) {
  const Icon = step.icon;

  const tooltipContent = (
    <div className="p-2">
      <h4 className="font-medium mb-2">{step.title}</h4>
      <ul className="space-y-1">
        {step.details.map((detail, detailIndex) => (
          <li key={detailIndex} className="text-xs flex items-start gap-2">
            <div className="w-1 h-1 bg-primary rounded-full mt-1.5 shrink-0"></div>
            <span>{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <Tooltip content={tooltipContent}>
      <div className="relative bg-card border border-border rounded-lg p-4 hover:border-primary/30 transition-all duration-200 cursor-help group">
        {/* Step Number */}
        <div className={`absolute -top-3 -left-3 w-8 h-8 ${step.color} text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium shadow-lg`}>
          {step.number}
        </div>

        {/* Icon */}
        <div className="flex justify-center mb-3">
          <div className="bg-primary/10 p-3 rounded-lg">
            <Icon className="w-6 h-6 text-primary" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-center text-foreground mb-2 group-hover:text-primary transition-colors">
          {step.shortTitle}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm text-center leading-relaxed">
          {step.description}
        </p>

        {/* Info Icon */}
        <div className="absolute top-2 right-2">
          <Info className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
        </div>
      </div>
    </Tooltip>
  );
}

function OutcomeCard({ outcome }: { outcome: Outcome }) {
  return (
    <Tooltip content={outcome.action}>
      <div className={`${outcome.color} rounded-lg p-4 text-center cursor-help hover:shadow-md transition-all duration-200`}>
        <div className="text-2xl mb-2">{outcome.emoji}</div>
        <h4 className={`${outcome.textColor} mb-2`}>{outcome.title}</h4>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {outcome.description}
        </p>
      </div>
    </Tooltip>
  );
}

export function LeadershipReadinessFlowchart() {
  return (
    <section className="bg-muted/30 py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl text-primary mb-4">Leadership Readiness Flowchart</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Interactive guide showing the complete process from assessment to final evaluation with all possible outcomes
          </p>
        </div>

        {/* Desktop Flow */}
        <div className="hidden lg:block">
          {/* Steps Flow */}
          <div className="relative mb-16">
            <div className="grid grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <StepCard step={step} />

                  {/* Arrow connector */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-5 h-5 text-muted-foreground" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Evaluation to Outcomes Flow */}
          <div className="relative">
            {/* Central connecting line */}
            <div className="absolute top-0 left-3/4 transform -translate-x-1/2 w-px h-12 bg-muted-foreground/30"></div>
            <div className="absolute top-12 left-1/4 right-1/4 h-px bg-muted-foreground/30"></div>

            {/* Outcome branches */}
            <div className="grid grid-cols-3 gap-6 pt-16">
              {outcomes.map((outcome, index) => (
                <div key={index} className="relative">
                  {/* Vertical line to outcome */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-6 bg-muted-foreground/30"></div>
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2">
                    <ArrowDown className="w-4 h-4 text-muted-foreground" />
                  </div>

                  {/* Loop back arrow for yellow outcome */}
                  {index === 1 && (
                    <div className="absolute -top-12 right-0">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <RotateCcw className="w-4 h-4" />
                        <span>Back to Step 2</span>
                      </div>
                    </div>
                  )}

                  <div className="pt-10">
                    <OutcomeCard outcome={outcome} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Flow */}
        <div className="lg:hidden space-y-6">
          {/* Steps */}
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <StepCard step={step} />

              {/* Mobile arrow */}
              {index < steps.length - 1 && (
                <div className="flex justify-center py-3">
                  <ArrowDown className="w-5 h-5 text-muted-foreground" />
                </div>
              )}
            </div>
          ))}

          {/* Outcomes */}
          <div className="pt-6">
            <div className="text-center mb-6">
              <h3 className="text-xl text-primary">Possible Outcomes</h3>
            </div>
            <div className="space-y-4">
              {outcomes.map((outcome, index) => (
                <OutcomeCard key={index} outcome={outcome} />
              ))}
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-12 bg-card border border-border rounded-lg p-6">
          <h3 className="text-lg text-foreground mb-4 text-center">Legend</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            <div className="flex items-center justify-center gap-2">
              <Info className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Hover for details</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <ArrowRight className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Sequential flow</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <RotateCcw className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Loop back</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-4 h-4 bg-primary rounded-full"></div>
              <span className="text-sm text-muted-foreground">Step number</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
