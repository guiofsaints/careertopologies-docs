import { GitBranch, Users, Network, BarChart3, Target, Compass } from "lucide-react";
import { UnifiedRelatedPages } from "../sections/UnifiedRelatedPages";
import { getUnifiedRelatedPages } from "../sections/UnifiedRelatedPagesConfig";
import { PageHero } from "../media/PageHero";
import { ImageWithFallback } from "../media/ImageWithFallback";
import yModelDiagramImage from "/placeholder-diagram-y.svg";
import wModelDiagramImage from "/placeholder-diagram-w.svg";
import networkModelDiagramImage from "/placeholder-diagram-network.svg";

function TopologyModelsSection() {
  const models = [
    {
      icon: GitBranch,
      title: "Y-Model",
      subtitle: "Split Path: Management or Technical",
      description: "This is a classic bifurcation model where professionals grow in either a leadership or a technical individual contributor (IC) track.",
      tracks: [
        "Leadership: People management, business ownership",
        "IC: Technical depth, architecture, mentoring, innovation"
      ],
      useCases: "Best for organizations that want to clearly separate people management from technical growth",
      recommendedFor: "Mid-to-large organizations with stable hierarchies and traditional HR practices",
      strengths: [
        "Simple to implement and communicate",
        "Empowers specialists to grow without switching to management"
      ],
      image: yModelDiagramImage,
      imageAlt: "Y-Model career topology diagram showing progression from Intern through Junior, Mid, Senior levels, then bifurcating at Assessment point into technical track (Staff, Principal, Distinguished, Fellow) and management track (Manager I, Manager II, Sr Manager/Head/Director, VP), both converging to C-Level"
    },
    {
      icon: Users,
      title: "W-Model",
      subtitle: "Hybrid Leadership and Technical Paths",
      description: "The W-Model builds upon the Y-Model by adding a third path that blends project ownership with technical depth.",
      tracks: [
        "Leadership: People and strategy",
        "IC: Deep technical expertise",
        "Project/Tech Management: Hybrid delivery, technical influence, and coordination"
      ],
      useCases: "Ideal for tech leads, program managers, or staff engineers who lead without formal people management",
      recommendedFor: "Consulting firms, product companies with matrix structures, and growing tech orgs",
      strengths: [
        "Encourages hybrid skill sets",
        "Offers a more flexible growth path"
      ],
      image: wModelDiagramImage,
      imageAlt: "W-Model career topology diagram showing progression from Intern through Junior, Mid, Senior levels, then three distinct paths from Assessment point: technical track (Staff, Principal, Distinguished, Fellow), management track (Manager I, Manager II, Sr Manager/Head/Director, VP), and hybrid project/tech management path with additional VP track, all converging to C-Level"
    },
    {
      icon: Network,
      title: "Network Model",
      subtitle: "Fluid and Lateral Growth",
      description: "The Network Model allows professionals to move laterally across roles, functions, or domains based on interest, opportunity, and performance.",
      tracks: [
        "Not predefined; driven by individual agency and organizational flexibility"
      ],
      useCases: "Great for startups, creative industries, or evolving organizations with flatter hierarchies",
      recommendedFor: "Early-stage startups, innovation labs, learning organizations",
      strengths: [
        "Promotes exploration and adaptability",
        "Supports multidisciplinary growth"
      ],
      image: networkModelDiagramImage,
      imageAlt: "Network Model career topology diagram showing fluid lateral movement paths with multiple interconnected roles (Engineer, Product, Agilist) at various levels, demonstrating flexible transitions between technical tracks (Staff, Principal, Distinguished, Fellow), management tracks (Manager I, Manager II, Sr Manager/Head/Director, VP), and specialized roles, all starting from Intern and potentially reaching C-Level"
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl text-primary mb-12 text-center">
        Topology Models
      </h2>

      <div className="space-y-8">
        {models.map((model, index) => {
          return (
            <div key={index} className="border border-border bg-card rounded-lg overflow-hidden">
              {/* Mobile Image - Top */}
              <div className="md:hidden">
                <div className="relative h-72 bg-linear-to-br from-primary/5 via-primary/10 to-primary/5 flex items-center justify-center" style={{ padding: '5px' }}>
                  <ImageWithFallback
                    src={model.image}
                    alt={model.imageAlt}
                    className="h-full w-auto object-contain"
                  />
                </div>
              </div>

              {/* Desktop Layout - Side by Side */}
              <div className="flex flex-col md:flex-row">
                {/* Desktop Image - Left Side */}
                <div className="hidden md:flex md:w-1/2 md:shrink-0 bg-linear-to-br from-primary/5 via-primary/10 to-primary/5 items-center justify-center" style={{ padding: '5px' }}>
                  <ImageWithFallback
                    src={model.image}
                    alt={model.imageAlt}
                    className="w-full h-auto object-contain max-h-96"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 p-8">
                  <div className="mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl text-foreground mb-2">{model.title}</h3>
                      <p className="text-primary mb-4">{model.subtitle}</p>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {model.description}
                      </p>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-foreground mb-3">Tracks:</h4>
                            <ul className="space-y-2">
                              {model.tracks.map((track, trackIndex) => (
                                <li key={trackIndex} className="text-muted-foreground text-sm leading-relaxed">
                                  • {track}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="text-foreground mb-3">Use Cases:</h4>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              {model.useCases}
                            </p>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <h4 className="text-foreground mb-3">Recommended For:</h4>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              {model.recommendedFor}
                            </p>
                          </div>

                          <div>
                            <h4 className="text-foreground mb-3">Key Strengths:</h4>
                            <ul className="space-y-2">
                              {model.strengths.map((strength, strengthIndex) => (
                                <li key={strengthIndex} className="text-muted-foreground text-sm leading-relaxed">
                                  • {strength}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
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

function ComparativeSummarySection() {
  const comparisonData = [
    {
      aspect: "Career Tracks",
      yModel: "2 (Leadership, Technical)",
      wModel: "3 (Leadership, Technical, Tech/Project Management)",
      networkModel: "Multiple, fluid transitions"
    },
    {
      aspect: "Flexibility",
      yModel: "Low",
      wModel: "Medium",
      networkModel: "High"
    },
    {
      aspect: "Structure",
      yModel: "Hierarchical",
      wModel: "Matrix, structured hybrid paths",
      networkModel: "Horizontal, network-based"
    },
    {
      aspect: "Best For",
      yModel: "Traditional organizations",
      wModel: "Matrix orgs, consultancies",
      networkModel: "Agile/startup environments"
    },
    {
      aspect: "Recommended Companies",
      yModel: "Mid/large tech companies",
      wModel: "Product orgs, hybrid teams",
      networkModel: "Startups, creative orgs"
    }
  ];

  return (
    <section className="bg-muted/30 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl text-primary mb-12 text-center">
          Comparative Summary
        </h2>
        <div className="bg-card border border-border rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="text-left p-4 text-foreground">Aspect</th>
                  <th className="text-left p-4 text-foreground">Y-Model</th>
                  <th className="text-left p-4 text-foreground">W-Model</th>
                  <th className="text-left p-4 text-foreground">Network Model</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="border-b border-border last:border-b-0">
                    <td className="p-4 text-foreground">{row.aspect}</td>
                    <td className="p-4 text-muted-foreground text-sm">{row.yModel}</td>
                    <td className="p-4 text-muted-foreground text-sm">{row.wModel}</td>
                    <td className="p-4 text-muted-foreground text-sm">{row.networkModel}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChoosingTopologySection() {
  const considerations = [
    {
      icon: Target,
      title: "Nature of work",
      description: "Consider the type of projects and collaboration patterns"
    },
    {
      icon: BarChart3,
      title: "Growth phase",
      description: "Align with company stage and maturity level"
    },
    {
      icon: Users,
      title: "Balance needs",
      description: "Find the right mix of specialization and versatility"
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl text-primary mb-8 text-center">
        Choosing a Topology
      </h2>
      <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
        There is no universal answer. Many organizations begin with a Y-Model and evolve to W or Network models as they mature. Teams may adopt different topologies based on:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {considerations.map((consideration, index) => {
          const Icon = consideration.icon;
          return (
            <div key={index} className="bg-card border border-border rounded-lg p-6 text-center">
              <Icon className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="text-foreground mb-3">{consideration.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {consideration.description}
              </p>
            </div>
          );
        })}
      </div>
      <div className="bg-card border border-border rounded-lg p-6 text-center">
        <Compass className="w-12 h-12 text-primary mx-auto mb-4" />
        <p className="text-muted-foreground leading-relaxed">
          A thoughtful topology choice ensures alignment between people development and business evolution.
        </p>
      </div>
    </section>
  );
}

export function TopologiesPage() {
  const relatedConfig = getUnifiedRelatedPages("/topologies");

  return (
    <>
      <PageHero
        title="Career Topologies"
        description="In Career Topologies, the term 'topology' refers to the structural models used to organize career progression within an organization. These models define the possible directions a career can take based on individual choices, organizational strategy, and structure."
      />
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="bg-card border border-border rounded-lg p-6 max-w-2xl mx-auto text-center">
          <p className="text-foreground">
            There is no single ideal model—organizations may adopt one or multiple topologies depending on their size, maturity, or cultural needs.
          </p>
        </div>
      </section>
      <TopologyModelsSection />
      <ComparativeSummarySection />
      <ChoosingTopologySection />
      <UnifiedRelatedPages
        pages={relatedConfig.pages}
        variant={relatedConfig.variant}
        title={'title' in relatedConfig ? relatedConfig.title : undefined}
      />
    </>
  );
}
