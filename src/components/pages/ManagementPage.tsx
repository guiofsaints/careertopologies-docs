import { Users, Target, Compass, Building, Clock, Brain, ArrowRight, TrendingUp } from "lucide-react";
import { Link } from "../config/Router";
import { PageHero } from "../media/PageHero";
import { UnifiedRelatedPages } from "../sections/UnifiedRelatedPages";
import { getUnifiedRelatedPages } from "../sections/UnifiedRelatedPagesConfig";

function SharedResponsibilitiesSection() {
  const responsibilities = [
    "Hire and offboard team members",
    "Support performance and deliver results",
    "Give structured feedback and conduct evaluations",
    "Run regular 1:1s",
    "Develop successors and plan capacity",
    "Manage vacations and availability",
    "Prioritize tasks and support internal communication",
    "Foster team health and a safe, inclusive environment"
  ];

  return (
    <section className="bg-muted/30 py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl text-primary mb-8 text-center">
          Shared Responsibilities Across All Managers
        </h2>
        <div className="bg-card border border-border rounded-lg p-8">
          <p className="text-muted-foreground leading-relaxed mb-6 text-center">
            Regardless of level, every manager is expected to:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {responsibilities.map((responsibility, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <p className="text-foreground">{responsibility}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ManagementLevelsSection() {
  const levels = [
    {
      icon: Users,
      title: "Front-line Manager (Operational)",
      scope: "Day-to-day team execution",
      horizon: "1–3 months (short-term)",
      activities: [
        "Monitor team progress and delivery",
        "Remove blockers",
        "Coordinate short-term priorities",
        "Guide individual contributors"
      ],
      knowledge: [
        "Communication and active listening",
        "Agile methodologies",
        "Management 3.0",
        "Team building practices",
        "Tuckman's team development model"
      ]
    },
    {
      icon: Compass,
      title: "Middle Manager (Tactical)",
      scope: "Translate strategy into plans, support leaders",
      horizon: "6–12 months (mid-term)",
      activities: [
        "Build new teams or functions",
        "Coach front-line managers",
        "Align goals with business strategy",
        "Manage budgets and team structure"
      ],
      knowledge: [
        "Strategic communication",
        "OKRs or organizational goal systems",
        "KPI tracking",
        "Roadmapping and capacity planning",
        "Lean principles",
        "Management 3.0"
      ]
    },
    {
      icon: Building,
      title: "Top Manager (Strategic)",
      scope: "Long-term direction and organizational health",
      horizon: "1–5 years (long-term)",
      activities: [
        "Define vision and long-term bets",
        "Design or restructure departments",
        "Oversee business-critical initiatives",
        "Represent the organization externally"
      ],
      knowledge: [
        "Blitzscaling and scale strategy",
        "North Star metrics",
        "Company bets and portfolio management",
        "Organizational design",
        "Executive communication"
      ]
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="space-y-12">
        {levels.map((level, index) => {
          const Icon = level.icon;
          return (
            <div key={index} className="border border-border bg-card rounded-lg p-8">
              <div className="flex items-start gap-6">
                <div className="bg-primary/10 p-4 rounded-lg shrink-0">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl text-foreground mb-4">{level.title}</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <div className="mb-6">
                        <div className="flex items-center gap-2 mb-2">
                          <Target className="w-4 h-4 text-primary" />
                          <h4 className="text-foreground">Scope</h4>
                        </div>
                        <p className="text-muted-foreground">{level.scope}</p>
                      </div>

                      <div className="mb-6">
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="w-4 h-4 text-primary" />
                          <h4 className="text-foreground">Planning Horizon</h4>
                        </div>
                        <p className="text-muted-foreground">{level.horizon}</p>
                      </div>

                      <div>
                        <h4 className="text-foreground mb-3">Common Activities</h4>
                        <ul className="space-y-2">
                          {level.activities.map((activity, activityIndex) => (
                            <li key={activityIndex} className="text-muted-foreground text-sm leading-relaxed">
                              • {activity}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-foreground mb-3">Recommended Knowledge</h4>
                      <ul className="space-y-2">
                        {level.knowledge.map((item, knowledgeIndex) => (
                          <li key={knowledgeIndex} className="text-muted-foreground text-sm leading-relaxed">
                            • {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function FutureConsiderationsSection() {
  return (
    <section className="bg-muted/30 py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl text-primary mb-8 text-center">
          Future Considerations
        </h2>
        <div className="bg-card border border-border rounded-lg p-8">
          <div className="flex items-start gap-6">
            <div className="bg-primary/10 p-4 rounded-lg shrink-0">
              <Brain className="w-8 h-8 text-primary" />
            </div>
            <div className="flex-1">
              <p className="text-muted-foreground leading-relaxed">
                Small companies often require leaders to operate across multiple layers simultaneously. In future versions, this framework will explore adaptive models like <strong>Holacracy</strong> and other distributed leadership approaches to support scalability without rigid hierarchy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DevelopingLeadersSection() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <div className="bg-linear-to-br from-primary/5 via-primary/10 to-primary/5 border border-border rounded-lg p-8">
        <div className="flex items-start gap-6">
          <div className="bg-primary/10 p-4 rounded-lg shrink-0">
            <TrendingUp className="w-8 h-8 text-primary" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl text-primary mb-4">Developing New Leaders</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Growing new leaders requires intentional processes that respect individual timing and interest. Our detailed guide provides a structured approach to identify, prepare, and evaluate individuals for their first formal leadership role.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                <span>Avoid premature promotions</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                <span>Create safe experiments</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                <span>Promote fairness and consistency</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                <span>Support employee agency</span>
              </div>
            </div>
            <Link
              to="/management/developing-leaders"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              View Detailed Guide
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ManagementPage() {
  const relatedConfig = getUnifiedRelatedPages("/management");

  return (
    <>
      <PageHero
        title="Management Levels"
        description="Career Topologies recognizes that management is not a one-size-fits-all role. Effective leadership requires different focus areas depending on whether you're managing day-to-day execution, translating strategy into plans, or setting the overall direction of the organization. This framework distinguishes three distinct layers of management—each with unique responsibilities, planning horizons, and skill sets."
      />
      <SharedResponsibilitiesSection />
      <ManagementLevelsSection />
      <DevelopingLeadersSection />
      <FutureConsiderationsSection />
      <UnifiedRelatedPages
        pages={relatedConfig.pages}
        variant={relatedConfig.variant}
        title={'title' in relatedConfig ? relatedConfig.title : undefined}
      />
    </>
  );
}
