import { ArrowRight } from "lucide-react";
import { Link } from "../config/Router";
import { UnifiedRelatedPages } from "../sections/UnifiedRelatedPages";
import { getUnifiedRelatedPages } from "../sections/UnifiedRelatedPagesConfig";
import { PageHero } from "../media/PageHero";

function ConceptsSection() {
  const concepts = [
    {
      number: "1",
      title: "Career Topology",
      description: "A topology defines the structure of career growth within an organization. It determines the possible paths a person can follow over time—vertically, horizontally, or diagonally—based on their role, goals, and organizational context.",
      details: [
        "Y-Model: Classic split between management and technical IC paths",
        "W-Model: Adds a hybrid project/technical leadership path",
        "Network Model: Enables fluid, non-linear transitions across domains"
      ],
      seeMore: "/topologies"
    },
    {
      number: "2",
      title: "Leveling",
      description: "Leveling is the definition of career levels within a discipline or area (e.g., Junior, Mid, Senior, Staff, Principal). Levels guide expectations for impact, responsibility, and scope.",
      details: [
        "Transparent job architecture",
        "Compensation bands",
        "Promotion calibration",
        "Performance assessments"
      ],
      seeMore: "/framework/leveling"
    },
    {
      number: "3",
      title: "Progression Pillars",
      description: "Progression Pillars represent the competencies, skills, and behaviors expected at each level. They serve as a foundation for growth conversations, feedback, and development plans.",
      details: [
        "Technical or domain expertise",
        "Communication and collaboration",
        "Strategic thinking or delivery impact",
        "Mentorship and influence"
      ],
      seeMore: "/framework/progression"
    },
    {
      number: "4",
      title: "Shapes (Skill Profiles)",
      description: "Shapes describe how individuals operate based on the depth and breadth of their skills. Understanding shapes helps with team composition, hiring, and personal development.",
      details: [
        "I-Shaped: Deep expertise in one discipline",
        "T-Shaped: Depth in one area, awareness in others",
        "Pi-Shaped: Strong in two+ areas, with strategic range"
      ],
      seeMore: "/shapes"
    },
    {
      number: "5",
      title: "Role of the Ladder",
      description: "The ladder is a documented structure that combines topology, leveling, and progression pillars to guide a team or discipline's growth path. It is both a tool for individuals and a system for organizations.",
      details: [
        "A defined set of levels",
        "Skill expectations per level",
        "Promotion guidelines",
        "Governance and maintenance rules"
      ]
    },
    {
      number: "6",
      title: "Governance and Roles",
      description: "Career Topologies defines clear ownership and responsibilities to keep the system effective. Governance ensures consistency and trust across the organization.",
      details: [
        "Track Owner: Facilitates definition, rollout, and review of a ladder",
        "Leadership & BPs: Apply guidelines, ensure fairness",
        "HR & Compensation: Align to company policy, compensation structures",
        "Employees: Own their career and participate actively"
      ],
      seeMore: "/framework/guidelines"
    },
    {
      number: "7",
      title: "Evolution & Flexibility",
      description: "Topologies and ladders must evolve. As teams grow, strategies shift, and new skills emerge, the career system should adapt accordingly.",
      details: [
        "Revisit pillars and levels regularly",
        "Welcome input from contributors and leads",
        "Document updates transparently"
      ]
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="space-y-12">
        {concepts.map((concept, index) => {
          return (
            <div key={index} className="border border-border bg-card rounded-lg p-8 flex flex-col">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-primary text-primary-foreground text-sm px-3 py-1 rounded-full">
                    {concept.number}
                  </span>
                  <h3 className="text-2xl text-foreground">{concept.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {concept.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-foreground mb-4">
                    {concept.title === "Leveling" ? "Leveling supports:" :
                      concept.title === "Progression Pillars" ? "Pillars may include:" :
                        concept.title === "Shapes (Skill Profiles)" ? "Types of shapes:" :
                          concept.title === "Role of the Ladder" ? "Each ladder includes:" :
                            concept.title === "Governance and Roles" ? "Key roles:" :
                              concept.title === "Evolution & Flexibility" ? "Best practices:" :
                                "Types of topologies:"}
                  </h4>
                  <ul className="space-y-2">
                    {concept.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="text-muted-foreground text-sm leading-relaxed">
                        • {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {concept.seeMore && (
                <div className="border-t border-border pt-4 mt-auto">
                  <Link
                    to={concept.seeMore}
                    className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                  >
                    See {concept.seeMore} for more →
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

function FoundationSection() {
  return (
    <section className="bg-muted/30 py-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-card border border-border rounded-lg p-8">
          <div className="max-w-2xl mx-auto">
            <p className="text-muted-foreground leading-relaxed">
              These concepts form the foundation of the Career Topologies model. They ensure that career design is not just a document—but a living framework, responsive to real-world complexity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ConceptsPage() {
  const relatedConfig = getUnifiedRelatedPages("/concepts");

  return (
    <>
      <PageHero
        title="Core Concepts"
        description="Career Topologies is built upon a set of key concepts that bring structure, clarity, and adaptability to career development in technology organizations. These concepts create a common language to guide teams, leaders, and individuals."
      />
      <ConceptsSection />
      <FoundationSection />
      <UnifiedRelatedPages
        pages={relatedConfig.pages}
        variant={relatedConfig.variant}
        title={'title' in relatedConfig ? relatedConfig.title : undefined}
      />
    </>
  );
}
