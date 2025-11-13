import { Users, Target, CheckCircle, AlertTriangle, Compass, Heart } from "lucide-react";
import { UnifiedRelatedPages } from "../sections/UnifiedRelatedPages";
import { getUnifiedRelatedPages } from "../sections/UnifiedRelatedPagesConfig";
import { PageHero } from "../media/PageHero";
import { LeadershipReadinessFlowchart } from "../sections/LeadershipReadinessFlowchart";

function WhyItMattersSection() {
  const reasons = [
    {
      icon: AlertTriangle,
      title: "Avoid premature promotions",
      description: "Based solely on performance as IC"
    },
    {
      icon: Target,
      title: "Create safe experiments",
      description: "Before someone formally transitions into management"
    },
    {
      icon: CheckCircle,
      title: "Promote fairness and consistency",
      description: "In leadership selection"
    },
    {
      icon: Heart,
      title: "Support employee agency",
      description: "Leadership is an option, not a default"
    }
  ];

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <div className="flex items-center gap-3 mb-8">
        <Compass className="w-8 h-8 text-primary" />
        <h2 className="text-3xl text-primary">Why It Matters</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reasons.map((reason, index) => {
          const Icon = reason.icon;
          return (
            <div key={index} className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg shrink-0">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-foreground mb-2">{reason.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}





function BestPracticesSection() {
  const practices = [
    {
      icon: Target,
      text: "Treat the interim as low-risk, high-learning"
    },
    {
      icon: Heart,
      text: "Never force someone into leadership — autonomy matters"
    },
    {
      icon: CheckCircle,
      text: "Provide psychological safety to exit or pivot without stigma"
    },
    {
      icon: Users,
      text: "Use this process in calibration, succession planning, or growth conversations"
    }
  ];

  return (
    <section className="bg-muted/30 py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-12 justify-center">
          <Target className="w-8 h-8 text-primary" />
          <h2 className="text-3xl text-primary text-center">Best Practices for Application</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {practices.map((practice, index) => {
            const Icon = practice.icon;
            return (
              <div key={index} className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {practice.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function DevelopingLeadersPage() {
  const relatedConfig = getUnifiedRelatedPages("/management/developing-leaders");

  return (
    <>
      <PageHero
        title="Developing New Leaders"
        description="This guide introduces a simple and effective process to identify, prepare, and evaluate individuals for their first formal leadership role. It is designed to create intentional and transparent pathways for growing leaders while respecting individual timing and interest."
      />

      <WhyItMattersSection />
      <LeadershipReadinessFlowchart />
      <BestPracticesSection />

      <UnifiedRelatedPages
        pages={relatedConfig.pages}
        variant={relatedConfig.variant}
        title={'title' in relatedConfig ? relatedConfig.title : undefined}
      />
    </>
  );
}
