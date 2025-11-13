import { useState } from "react";
import { Layers, TrendingUp, Target, ChevronRight, Circle } from "lucide-react";
import { UnifiedRelatedPages } from "../sections/UnifiedRelatedPages";
import { getUnifiedRelatedPages } from "../sections/UnifiedRelatedPagesConfig";
import { PageHero } from "../media/PageHero";

// Componente para tabela interativa
function InteractiveLevelingTable() {
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null);

  const levels = [
    {
      level: 1,
      title: "Junior",
      impact: "Team",
      autonomy: "High supervision",
      complexity: "Well-defined tasks",
      expectations: ["Learns basic tools", "Executes tasks with guidance", "Participates in team ceremonies"]
    },
    {
      level: 2,
      title: "Mid-level",
      impact: "Squad / Project",
      autonomy: "Supervised autonomy",
      complexity: "Medium complexity problems",
      expectations: ["Solves problems independently", "Contributes to technical decisions", "Mentors junior people"]
    },
    {
      level: 3,
      title: "Senior",
      impact: "Tribe / Domain",
      autonomy: "High autonomy",
      complexity: "Complex and ambiguous problems",
      expectations: ["Leads technical initiatives", "Influences architecture", "Develops other people"]
    },
    {
      level: 4,
      title: "Staff / Principal",
      impact: "Product / Platform",
      autonomy: "Technical leadership",
      complexity: "Organizational problems",
      expectations: ["Defines technical strategy", "Influences multiple teams", "Resolves complex trade-offs"]
    },
    {
      level: 5,
      title: "Lead / Head",
      impact: "Unit / Business",
      autonomy: "Organizational influence",
      complexity: "High-impact decisions",
      expectations: ["Aligns technical and business strategy", "Develops leaders", "Manages resources and priorities"]
    },
    {
      level: 6,
      title: "Director / VP / C-Level",
      impact: "Company / Market",
      autonomy: "Strategic direction",
      complexity: "Organizational transformation",
      expectations: ["Defines long-term vision", "Influences market", "Leads cultural changes"]
    }
  ];

  return (
    <div className="space-y-6">
      <div className="grid gap-4">
        {levels.map((level) => (
          <div
            key={level.level}
            className={`border rounded-lg transition-all cursor-pointer ${selectedLevel === level.level
              ? "border-primary bg-primary/5"
              : "border-border bg-card hover:border-primary/50"
              }`}
            onClick={() => setSelectedLevel(selectedLevel === level.level ? null : level.level)}
          >
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                  {level.level}
                </div>
                <div>
                  <h4 className="text-primary font-medium">{level.title}</h4>
                  <p className="text-muted-foreground text-sm">{level.impact}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right hidden md:block">
                  <p className="text-sm text-foreground">{level.autonomy}</p>
                  <p className="text-xs text-muted-foreground">{level.complexity}</p>
                </div>
                <ChevronRight
                  className={`w-5 h-5 text-muted-foreground transition-transform ${selectedLevel === level.level ? "rotate-90" : ""
                    }`}
                />
              </div>
            </div>

            {selectedLevel === level.level && (
              <div className="px-4 pb-4 border-t border-border/50 pt-4 mt-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="text-sm font-medium text-primary mb-2">Degree of Autonomy</h5>
                    <p className="text-sm text-muted-foreground">{level.autonomy}</p>
                  </div>
                  <div>
                    <h5 className="text-sm font-medium text-primary mb-2">Complexity</h5>
                    <p className="text-sm text-muted-foreground">{level.complexity}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <h5 className="text-sm font-medium text-primary mb-2">Key Expectations</h5>
                  <ul className="space-y-1">
                    {level.expectations.map((expectation, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Circle className="w-1.5 h-1.5 fill-primary text-primary" />
                        {expectation}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// Componente para matriz de impacto x autonomia
function ImpactAutonomyMatrix() {
  const levels = [
    { level: 1, title: "Júnior", impact: 1, autonomy: 1 },
    { level: 2, title: "Pleno", impact: 2, autonomy: 2 },
    { level: 3, title: "Sênior", impact: 3, autonomy: 4 },
    { level: 4, title: "Staff", impact: 4, autonomy: 5 },
    { level: 5, title: "Lead", impact: 5, autonomy: 5 },
    { level: 6, title: "Director", impact: 6, autonomy: 6 }
  ];

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="relative h-80 w-full">
        {/* Eixos */}
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-border"></div>
        <div className="absolute bottom-0 left-0 w-0.5 h-full bg-border"></div>

        {/* Axis labels */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm text-foreground font-medium">
          Scope of Impact
        </div>
        <div className="absolute top-1/2 -left-16 transform -translate-y-1/2 -rotate-90 text-sm text-foreground font-medium">
          Autonomy
        </div>

        {/* Grid background */}
        <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-0">
          {Array.from({ length: 36 }).map((_, i) => (
            <div key={i} className="border-r border-t border-border/30"></div>
          ))}
        </div>

        {/* Pontos dos níveis */}
        {levels.map((level) => {
          const x = ((level.impact - 1) / 5) * 100;
          const y = 100 - ((level.autonomy - 1) / 5) * 100;

          return (
            <div
              key={level.level}
              className="absolute transform -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              <div className="relative group">
                <div className="w-3 h-3 bg-primary rounded-full border-2 border-background shadow-sm"></div>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-foreground text-background text-xs px-2 py-1 rounded whitespace-nowrap">
                    {level.title}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Componente para diagramas de topologia
function TopologyAlignmentDiagram() {
  const topologies = [
    {
      name: "Y-Shape",
      description: "Bifurcation between technical and management career",
      levels: [
        { level: 1, paths: ["Junior Developer"] },
        { level: 2, paths: ["Mid Developer"] },
        { level: 3, paths: ["Senior Developer"] },
        { level: 4, paths: ["Staff Engineer", "Tech Lead"] },
        { level: 5, paths: ["Principal Engineer", "Engineering Manager"] },
        { level: 6, paths: ["Distinguished Engineer", "Director"] }
      ]
    },
    {
      name: "W-Shape",
      description: "Multiple specializations with interchange",
      levels: [
        { level: 1, paths: ["Junior"] },
        { level: 2, paths: ["Mid-level"] },
        { level: 3, paths: ["Senior Backend", "Senior Frontend", "Senior Mobile"] },
        { level: 4, paths: ["Staff Backend", "Staff Frontend", "Product Lead"] },
        { level: 5, paths: ["Principal Architect", "Engineering Manager", "Product Manager"] },
        { level: 6, paths: ["CTO", "Head of Product", "VP Engineering"] }
      ]
    },
    {
      name: "Network",
      description: "Flexible connections between different domains",
      levels: [
        { level: 1, paths: ["Entry Level"] },
        { level: 2, paths: ["Individual Contributor"] },
        { level: 3, paths: ["Domain Expert"] },
        { level: 4, paths: ["Cross-functional Lead"] },
        { level: 5, paths: ["Strategic Contributor"] },
        { level: 6, paths: ["Organizational Leader"] }
      ]
    }
  ];

  return (
    <div className="grid lg:grid-cols-3 gap-6">
      {topologies.map((topology, idx) => (
        <div key={idx} className="bg-card border border-border rounded-lg p-6">
          <div className="mb-4">
            <h4 className="text-primary font-medium mb-2">{topology.name}</h4>
            <p className="text-sm text-muted-foreground">{topology.description}</p>
          </div>

          <div className="space-y-3">
            {topology.levels.map((level) => (
              <div key={level.level} className="flex items-center gap-3">
                <div className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xs font-medium shrink-0">
                  {level.level}
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap gap-1">
                    {level.paths.map((path, pathIdx) => (
                      <span
                        key={pathIdx}
                        className="inline-block px-2 py-1 bg-muted text-muted-foreground text-xs rounded"
                      >
                        {path}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export function LevelingPage() {
  return (
    <>
      <PageHero
        title="Career Topologies – Leveling"
        description="The Leveling system should offer clarity and consistency for team members, leadership, and HR. This structure should reflect complexity, scope of impact, and degree of autonomy for each level, promoting transparency and fair progression."
      />

      <div className="min-h-screen bg-background">

        {/* Leveling Objectives */}
        <section className="max-w-4xl mx-auto px-6 py-12">
          <h2 className="text-3xl text-primary mb-12 text-center">Leveling Objectives</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <Target className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="text-primary mb-3">Common Language</h3>
              <p className="text-muted-foreground text-sm">Establish a common language about seniority</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <Layers className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="text-primary mb-3">Clear Criteria</h3>
              <p className="text-muted-foreground text-sm">Define evaluation criteria and expectations for each level</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <TrendingUp className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="text-primary mb-3">Fair Paths</h3>
              <p className="text-muted-foreground text-sm">Support the design of fair and transparent career paths</p>
            </div>
          </div>
        </section>

        {/* Guiding Principles */}
        <section className="bg-muted/30 py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl text-primary mb-12 text-center">Guiding Principles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-primary mb-3">Consistency</h3>
                <p className="text-muted-foreground">The system should be applicable to different areas and profiles.</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-primary mb-3">Flexibility</h3>
                <p className="text-muted-foreground">Allows customization by organizational context, without losing reference.</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-primary mb-3">Transparency</h3>
                <p className="text-muted-foreground">Everyone should understand where they are and what is expected for the next level.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Typical Levels - Interactive Table */}
        <section className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="text-3xl text-primary mb-12 text-center">Typical Levels</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Explore levels interactively. Click on each level to see details about expectations,
            autonomy and complexity. These levels can be adapted according to the adopted career topology.
          </p>
          <InteractiveLevelingTable />
        </section>

        {/* Evaluation Elements */}
        <section className="bg-muted/30 py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl text-primary mb-12 text-center">Evaluation Elements</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Each level is evaluated based on progression pillars:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Work complexity",
                "Scope of impact (who and what it affects)",
                "Autonomy and decision making",
                "Collaboration and influence",
                "Technical or management evolution",
                "Contribution to culture and mentoring"
              ].map((element, idx) => (
                <div key={idx} className="bg-card border border-border rounded-lg p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-medium">
                      {idx + 1}
                    </div>
                    <h4 className="text-primary text-sm">{element}</h4>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground text-center mt-8">
              These aspects can be crossed with the <strong>Progression Pillars</strong> defined in the track
              (e.g.: Technology, Product, Design).
            </p>
          </div>
        </section>

        {/* Impact × Autonomy Matrix */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="text-3xl text-primary mb-12 text-center">Impact × Autonomy Matrix</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Visualize how levels relate in terms of scope of impact and degree of autonomy.
            Hover over the points to see details of each level.
          </p>
          <ImpactAutonomyMatrix />
        </section>

        {/* Alignment with Topologies */}
        <section className="bg-muted/30 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl text-primary mb-12 text-center">Alignment with Career Topologies</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              See how levels align with different career topology models:
            </p>
            <TopologyAlignmentDiagram />
          </div>
        </section>

        {/* Integration with Career System */}
        <section className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="text-3xl text-primary mb-12 text-center">Integration with Career System</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Leveling is one of the four pillars of Career Topologies:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { number: 1, title: "Leveling", description: "definition of levels" },
              { number: 2, title: "Progression Pillars", description: "what is evaluated" },
              { number: 3, title: "Ladder Principles", description: "what guides evolution" },
              { number: 4, title: "Guidelines", description: "how to communicate and apply" }
            ].map((pillar) => (
              <div key={pillar.number} className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                    {pillar.number}
                  </div>
                  <h4 className="text-primary">{pillar.title}</h4>
                </div>
                <p className="text-muted-foreground">{pillar.description}</p>
              </div>
            ))}
          </div>

          <p className="text-muted-foreground text-center mt-8">
            These elements together form a cohesive career topology, with growth routes adapted to
            the organization's culture.
          </p>
        </section>

        <UnifiedRelatedPages
          pages={getUnifiedRelatedPages("/framework/leveling").pages}
          variant="related"
        />
      </div>
    </>
  );
}
