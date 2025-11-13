import { Layers, TrendingUp, Award, Users, RotateCcw, AlertTriangle, Target, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "../config/Router";
import { UnifiedRelatedPages } from "../sections/UnifiedRelatedPages";
import { getUnifiedRelatedPages } from "../sections/UnifiedRelatedPagesConfig";
import { PageHero } from "../media/PageHero";
import { ImageWithFallback } from "../media/ImageWithFallback";
import wizardImage from '/placeholder-wizard.svg';
import scrollImage from '/placeholder-scroll.svg';
import pillarImage from '/placeholder-pillar.svg';
import topologyTerrainImage from '/placeholder-terrain.svg';

function CoreStructureSection() {
  const elements = [
    {
      number: "1",
      icon: Layers,
      title: "Leveling",
      description: "Defines clear career levels and expectations for each role, providing a structured pathway for professional growth and transparent criteria for advancement.",
      details: [
        "Transparent progression criteria",
        "Compensation alignment",
        "Performance calibration standards",
        "Role expectations and responsibilities"
      ],
      note: "Creates clear understanding of what it takes to advance to the next level.",
      buttonText: "Explore Leveling",
      buttonLink: "/framework/leveling",
      image: wizardImage,
      imageAlt: "Leveling system illustration"
    },
    {
      number: "2",
      icon: TrendingUp,
      title: "Progression Pillars",
      description: "Core competencies and skills that define growth within each track, serving as the foundation for feedback, development plans, and career conversations.",
      details: [
        "Technical expertise and domain knowledge",
        "Collaboration and communication skills",
        "Impact and delivery capabilities",
        "Leadership and mentoring abilities"
      ],
      note: "Pillars can be weighted differently based on role requirements and organizational priorities.",
      buttonText: "View Pillars",
      buttonLink: "/framework/progression",
      image: pillarImage,
      imageAlt: "Wireframe pillar representing progression foundations"
    },
    {
      number: "3",
      icon: Award,
      title: "Topologies",
      description: "Organizational structures that define possible career paths, from traditional Y-models to flexible network approaches that support diverse growth trajectories.",
      details: [
        "Y-Model: Management vs IC tracks",
        "W-Model: Hybrid leadership paths",
        "Network Model: Fluid lateral movement",
        "Custom models for unique contexts"
      ],
      buttonText: "Learn Topologies",
      buttonLink: "/topologies",
      image: topologyTerrainImage,
      imageAlt: "Wireframe terrain with pathways representing career topologies"
    },
    {
      number: "4",
      icon: Users,
      title: "Governance",
      description: "Clear roles, responsibilities, and processes that ensure the framework remains effective, fair, and responsive to organizational change.",
      details: [
        "Track owners for each career path",
        "Regular review and update cycles",
        "Calibration and fairness processes",
        "Feedback collection and integration"
      ],
      note: "Good governance prevents the framework from becoming outdated or ineffective over time.",
      buttonText: "Implementation Guide",
      buttonLink: "/framework/guidelines",
      image: scrollImage,
      imageAlt: "Governance and guidelines illustration"
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl text-primary mb-12 text-center">
        Core Structure
      </h2>
      <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
        The framework is organized into <strong>four foundational elements</strong> that guide the creation of ladders and career maps:
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {elements.map((element, index) => {
          const Icon = element.icon;
          return (
            <div key={index} className="border border-border bg-card rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full">
              {/* Image Header */}
              <div className="relative h-48 bg-linear-to-br from-primary/5 via-primary/10 to-primary/5 flex items-center justify-center overflow-hidden">
                <ImageWithFallback
                  src={element.image}
                  alt={element.imageAlt}
                  className="h-48 w-48 object-cover opacity-80"
                />
                <div className="absolute top-4 left-4 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                  {element.number}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                  <h3 className="text-foreground">{element.title}</h3>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {element.description}
                </p>

                {element.details && (
                  <div className="mb-6">
                    <ul className="space-y-2">
                      {element.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center gap-2 text-muted-foreground text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full shrink-0"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Footer with button - fixed to bottom */}
                <div className="mt-auto">
                  <Link
                    to={element.buttonLink}
                    className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-medium"
                  >
                    {element.buttonText}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function GovernanceSection() {
  const roles = [
    {
      title: "Track Owner",
      description: "Responsible for defining, maintaining, and evolving a specific career track or discipline.",
      responsibilities: [
        "Define progression criteria and expectations",
        "Facilitate calibration sessions",
        "Collect feedback and iterate on the track",
        "Support managers with guidance and resources"
      ]
    },
    {
      title: "Leadership & Business Partners",
      description: "Ensure framework alignment with business strategy and provide managerial support.",
      responsibilities: [
        "Apply framework consistently in decisions",
        "Provide regular feedback using progression pillars",
        "Support career development conversations",
        "Escalate systemic issues to track owners"
      ]
    },
    {
      title: "HR & Compensation Teams",
      description: "Integrate framework with broader HR systems and ensure policy compliance.",
      responsibilities: [
        "Align compensation bands with levels",
        "Ensure legal and policy compliance",
        "Support recruitment and onboarding",
        "Maintain system documentation"
      ]
    },
    {
      title: "Individual Contributors",
      description: "Take ownership of their career development within the framework structure.",
      responsibilities: [
        "Understand their current level and expectations",
        "Seek feedback and identify development opportunities",
        "Participate actively in career conversations",
        "Provide input on framework effectiveness"
      ]
    }
  ];

  return (
    <section className="bg-muted/30 py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl text-primary mb-12 text-center">
          Governance & Roles
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Clear ownership and responsibilities ensure the framework remains effective and responsive to change:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {roles.map((role, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-foreground mb-3">{role.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{role.description}</p>
              <ul className="space-y-2">
                {role.responsibilities.map((responsibility, respIndex) => (
                  <li key={respIndex} className="flex items-start gap-2 text-muted-foreground text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    {responsibility}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LifecycleSection() {
  const phases = [
    {
      phase: "Design",
      description: "Define the framework structure, gather stakeholder input, and create initial documentation.",
      duration: "2-4 months",
      activities: ["Stakeholder interviews", "Topology selection", "Pillar definition", "Level mapping"]
    },
    {
      phase: "Pilot",
      description: "Test the framework with a small group to identify issues and gather feedback.",
      duration: "3-6 months",
      activities: ["Select pilot teams", "Train managers", "Run feedback cycles", "Iterate on content"]
    },
    {
      phase: "Rollout",
      description: "Gradually expand the framework across the organization with proper support.",
      duration: "6-12 months",
      activities: ["Phased team onboarding", "Manager training", "System integration", "Communication plan"]
    },
    {
      phase: "Maintain",
      description: "Continuously improve the framework based on usage and organizational evolution.",
      duration: "Ongoing",
      activities: ["Regular reviews", "Feedback collection", "Level adjustments", "Process improvements"]
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl text-primary mb-12 text-center">
        Implementation Lifecycle
      </h2>
      <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
        A thoughtful, phased approach ensures successful adoption and long-term sustainability:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {phases.map((phase, index) => (
          <div key={index} className="relative">
            <div className="bg-card border border-border rounded-lg p-6 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                  {index + 1}
                </div>
                <h3 className="text-foreground">{phase.phase}</h3>
              </div>
              <p className="text-muted-foreground text-sm mb-4">{phase.description}</p>
              <div className="mb-4">
                <span className="text-primary text-sm font-medium">Duration: {phase.duration}</span>
              </div>
              <ul className="space-y-2">
                {phase.activities.map((activity, actIndex) => (
                  <li key={actIndex} className="flex items-center gap-2 text-muted-foreground text-sm">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full shrink-0"></div>
                    {activity}
                  </li>
                ))}
              </ul>
            </div>
            {/* Arrow connector */}
            {index < phases.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                <ArrowRight className="w-6 h-6 text-primary" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function CriticalConsiderationsSection() {
  const considerations = [
    {
      title: "Avoid Over-Engineering",
      description: "Start simple and evolve. Complex frameworks can become difficult to maintain and use.",
      icon: AlertTriangle
    },
    {
      title: "Cultural Fit",
      description: "Ensure the chosen topology and pillars align with your organization's values and working style.",
      icon: Target
    },
    {
      title: "Manager Training",
      description: "Invest heavily in manager training. The framework is only as good as its implementation.",
      icon: Users
    },
    {
      title: "Regular Evolution",
      description: "Plan for regular reviews and updates. Organizations and needs change over time.",
      icon: RotateCcw
    }
  ];

  return (
    <section className="bg-muted/30 py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl text-primary mb-12 text-center">
          Critical Considerations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {considerations.map((consideration, index) => {
            const Icon = consideration.icon;
            return (
              <div key={index} className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-destructive/10 rounded-full flex items-center justify-center">
                    <Icon className="w-5 h-5 text-destructive" />
                  </div>
                  <h3 className="text-foreground">{consideration.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {consideration.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function FrameworkPage() {
  const relatedConfig = getUnifiedRelatedPages("/framework");

  return (
    <>
      <PageHero
        title="Career Topologies Framework"
        description="A strategic model for creating transparent, fair, and scalable career development systems in technology organizations. The framework provides structure without rigidity, allowing teams to adapt growth paths to their unique context and culture."
      />
      <CoreStructureSection />
      <GovernanceSection />
      <LifecycleSection />
      <CriticalConsiderationsSection />
      <UnifiedRelatedPages
        pages={relatedConfig.pages}
        variant={relatedConfig.variant}
        title={'title' in relatedConfig ? relatedConfig.title : undefined}
      />
    </>
  );
}
