import { Target, Users, Award, TrendingUp, ArrowRight, BookOpen, Network, GitBranch } from "lucide-react";
import { Link } from "../config/Router";
import { PageHero } from "../media/PageHero";

function ShapeTypesSection() {
  const shapes = [
    {
      icon: Target,
      title: "I-Shaped",
      subtitle: "Deep specialists in a single discipline",
      description: "I-Shaped professionals have deep expertise in a specific domain, such as backend engineering or UX design. They are highly focused and valuable in roles that require depth over breadth.",
      commonRoles: ["Backend Developer", "UX Designer", "QA Analyst"],
      strengths: ["Deep technical skill", "Reliability in scoped work"],
      consideration: "May require others to complement cross-functional needs"
    },
    {
      icon: Users,
      title: "T-Shaped",
      subtitle: "Specialists with cross-disciplinary awareness",
      description: "T-Shaped professionals possess strong expertise in one core area and a working understanding of adjacent skills. This allows them to collaborate across functions while maintaining their depth.",
      commonRoles: ["Software Engineer", "Platform Engineer", "Product Designer"],
      strengths: ["Flexibility", "Cross-functional collaboration", "Team integration"],
      consideration: "Recommended for: Agile teams, fast-paced environments"
    },
    {
      icon: Award,
      title: "Pi-Shaped / Comp-Shaped",
      subtitle: "Experts in multiple domains with high autonomy",
      description: "These professionals combine depth in two or more disciplines with strategic thinking and influence. They are rare, highly autonomous, and capable of supporting multiple teams.",
      commonRoles: ["Staff Engineer", "Principal Designer", "Distinguished Engineer"],
      strengths: ["Versatility", "Mentorship", "Complex problem-solving"],
      consideration: "Best used in: Broad-impact roles, architecture, org-wide initiatives"
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl text-primary mb-12 text-center">
        Professional Shapes
      </h2>
      <div className="space-y-8">
        {shapes.map((shape, index) => {
          const Icon = shape.icon;
          return (
            <div key={index} className="border border-border bg-card rounded-lg p-8">
              <div className="flex items-start gap-6 mb-6">
                <div className="bg-primary/10 p-4 rounded-lg">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl text-foreground mb-2">{shape.title}</h3>
                  <p className="text-primary mb-4">{shape.subtitle}</p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {shape.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="text-foreground mb-3">Common roles:</h4>
                      <ul className="space-y-2">
                        {shape.commonRoles.map((role, roleIndex) => (
                          <li key={roleIndex} className="text-muted-foreground text-sm">
                            {role}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-foreground mb-3">Strengths:</h4>
                      <ul className="space-y-2">
                        {shape.strengths.map((strength, strengthIndex) => (
                          <li key={strengthIndex} className="text-muted-foreground text-sm">
                            {strength}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-foreground mb-3">Consideration:</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {shape.consideration}
                      </p>
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

function GrowthTransitionsSection() {
  const principles = [
    {
      icon: BookOpen,
      title: "Offer clarity on expectations",
      description: "Provide clear expectations for each profile to help individuals understand requirements"
    },
    {
      icon: Users,
      title: "Avoid imposing shapes",
      description: "Let individuals align based on their interests and organizational context"
    },
    {
      icon: TrendingUp,
      title: "Encourage learning paths",
      description: "Support evolution across profiles with structured development opportunities"
    }
  ];

  return (
    <section className="bg-muted/30 py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl text-primary mb-8 text-center">
          Growth and Transitions
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Professionals naturally evolve across shapes throughout their careers. Some may start as I-Shaped and grow into T- or Pi-Shaped profiles. Organizations should:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <div key={index} className="bg-card border border-border rounded-lg p-6 text-center">
                <Icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="text-foreground mb-3">{principle.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {principle.description}
                </p>
              </div>
            );
          })}
        </div>
        <div className="bg-card border border-border rounded-lg p-6 text-center">
          <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
          <p className="text-muted-foreground leading-relaxed">
            The framework will expand on shape transitions in future versions, including examples of development paths and mentorship strategies.
          </p>
        </div>
      </div>
    </section>
  );
}

function RelatedSectionsSection() {
  const links = [
    {
      path: "/framework",
      icon: BookOpen,
      title: "Framework",
      description: "Structure and components of the model"
    },
    {
      path: "/topologies",
      icon: Network,
      title: "Topologies",
      description: "Career path models (Y, W, Network)"
    },
    {
      path: "/manifesto",
      icon: GitBranch,
      title: "Manifesto",
      description: "Principles that guide career design"
    }
  ];

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-3xl text-primary mb-12 text-center">
        Explore Related Sections
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {links.map((link, index) => {
          const Icon = link.icon;
          return (
            <Link
              key={index}
              to={link.path}
              className="border border-border bg-card rounded-lg p-6 hover:bg-accent hover:border-primary/30 transition-all duration-200 cursor-pointer group"
            >
              <Icon className="w-8 h-8 text-primary mb-4 group-hover:text-primary transition-colors" />
              <h3 className="text-foreground mb-2 group-hover:text-primary transition-colors">
                {link.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {link.description}
              </p>
              <div className="flex items-center text-primary text-sm">
                Learn more
                <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export function ShapesPage() {
  return (
    <>
      <PageHero
        title="Skill Profiles (Shapes)"
        description="Career Topologies uses the concept of 'shapes' to describe professional skill profiles. These profiles help organizations and individuals understand how a person contributes to a team, how they collaborate, and how they may grow over time."
      />
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="bg-card border border-border rounded-lg p-6 max-w-2xl mx-auto text-center">
          <p className="text-foreground italic">
            There is no ideal shape. Each organization and team should adopt the shapes that best fit their context.
          </p>
        </div>
      </section>
      <ShapeTypesSection />
      <GrowthTransitionsSection />
      <RelatedSectionsSection />
    </>
  );
}
