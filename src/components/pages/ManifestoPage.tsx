import { Key, Award, Users, Clock, Handshake, Heart, User, ArrowUpDown } from "lucide-react";
import { UnifiedRelatedPages } from "../sections/UnifiedRelatedPages";
import { getUnifiedRelatedPages } from "../sections/UnifiedRelatedPagesConfig";
import { PageHero } from "../media/PageHero";

function PrinciplesSection() {
  const principles = [
    {
      icon: Key,
      number: "1",
      title: "Transparency",
      description: "Growth opportunities must be openly accessible to everyone, with clearly defined expectations for each role and level."
    },
    {
      icon: Award,
      number: "2",
      title: "Fair Recognition",
      description: "Promotions and recognition should be based on tangible contributions, not favoritism. Everyone must have access to the tools and environment needed to succeed."
    },
    {
      icon: Users,
      number: "3",
      title: "Equality",
      description: "There must be equal conditions regarding compensation, benefits, and treatment for all people in the same position—regardless of background or identity."
    },
    {
      icon: Clock,
      number: "4",
      title: "Consistency",
      description: "Career progression should value consistent, long-term contributions, rather than isolated achievements."
    },
    {
      icon: Handshake,
      number: "5",
      title: "Cooperation",
      description: "Career development is not a zero-sum game. Fostering collaboration over competition helps reduce anxiety and builds collective success."
    },
    {
      icon: Heart,
      number: "6",
      title: "Diversity",
      description: "Companies must actively promote inclusion and support underrepresented groups, especially in leadership and decision-making positions."
    },
    {
      icon: User,
      number: "7",
      title: "Ownership",
      description: "Career growth is a shared responsibility. While the company offers structure and support, each person should define their own path and drive their development."
    },
    {
      icon: ArrowUpDown,
      number: "8",
      title: "Flexibility",
      description: "Organizations must support movement between roles, specialties, and disciplines, enabling both vertical and lateral transitions based on individual goals."
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl text-primary mb-12 text-center">
        The 8 Principles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {principles.map((principle, index) => {
          const Icon = principle.icon;
          return (
            <div key={index} className="border border-border bg-card rounded-lg p-8">
              <div className="flex items-start gap-6">
                <div className="bg-primary/10 p-4 rounded-lg shrink-0">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-primary text-primary-foreground text-sm px-3 py-1 rounded-full">
                      {principle.number}
                    </span>
                    <h3 className="text-xl text-foreground">{principle.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {principle.description}
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

function CompassSection() {
  return (
    <section className="bg-muted/30 py-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-card border border-border rounded-lg p-8">
          <div className="max-w-2xl mx-auto">
            <p className="text-muted-foreground leading-relaxed">
              These principles serve as a compass for organizations implementing the Career Topologies framework. They ensure that growth paths are aligned not only with business goals but also with fairness, personal agency, and long-term sustainability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ManifestoPage() {
  const relatedConfig = getUnifiedRelatedPages("/manifesto");

  return (
    <>
      <PageHero
        title="Career Manifesto"
        description="The Career Topologies Manifesto defines the foundational principles for building fair, transparent, and sustainable career paths in technology organizations. It acknowledges the dual responsibility between individuals and organizations: while professionals are accountable for their growth, companies must provide clear expectations and equal opportunities."
      />
      <PrinciplesSection />
      <CompassSection />
      <UnifiedRelatedPages
        pages={relatedConfig.pages}
        variant={relatedConfig.variant}
        title={'title' in relatedConfig ? relatedConfig.title : undefined}
      />
    </>
  );
}
