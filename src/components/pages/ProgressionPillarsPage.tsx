import { useState } from "react";
import * as React from "react";
import { Target, Users, Lightbulb, Gauge, Brain, Heart, Circle } from "lucide-react";
import { UnifiedRelatedPages } from "../sections/UnifiedRelatedPages";
import { getUnifiedRelatedPages } from "../sections/UnifiedRelatedPagesConfig";
import { PageHero } from "../media/PageHero";

// Radar Chart Component
function ProficiencyRadarChart() {
  const [selectedLevel, setSelectedLevel] = useState("Senior");

  const pillars = [
    "Delivery & Execution",
    "Technical Domain",
    "Collaboration",
    "Autonomy",
    "Initiative",
    "Mentoring"
  ];

  const levelData = {
    "Junior": [2, 2, 2, 1, 1, 1],
    "Mid-level": [3, 3, 3, 2, 2, 2],
    "Senior": [4, 4, 4, 4, 3, 3],
    "Staff": [5, 5, 4, 5, 4, 4],
    "Principal": [5, 5, 5, 5, 5, 4],
    "Distinguished": [5, 5, 5, 5, 5, 5]
  };

  const levels = Object.keys(levelData);
  const currentData = levelData[selectedLevel as keyof typeof levelData];

  // Convert data to polar coordinates for radar chart
  const centerX = 150;
  const centerY = 150;
  const maxRadius = 120;

  const points = currentData.map((value, index) => {
    const angle = (index * 2 * Math.PI) / pillars.length - Math.PI / 2;
    const radius = (value / 5) * maxRadius;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    return { x, y, value, label: pillars[index] };
  });

  // Create path for filled area
  const pathData = points.map((point, index) =>
    `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`
  ).join(' ') + ' Z';

  // Grid circles
  const gridCircles = [1, 2, 3, 4, 5].map(level => (
    <circle
      key={level}
      cx={centerX}
      cy={centerY}
      r={(level / 5) * maxRadius}
      fill="none"
      stroke="rgb(var(--muted-foreground))"
      strokeWidth="1"
      opacity="0.6"
    />
  ));

  // Axis lines
  const axisLines = pillars.map((_, index) => {
    const angle = (index * 2 * Math.PI) / pillars.length - Math.PI / 2;
    const endX = centerX + maxRadius * Math.cos(angle);
    const endY = centerY + maxRadius * Math.sin(angle);
    return (
      <line
        key={index}
        x1={centerX}
        y1={centerY}
        x2={endX}
        y2={endY}
        stroke="rgb(var(--muted-foreground))"
        strokeWidth="1"
        opacity="0.6"
      />
    );
  });

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="mb-6">
        <h3 className="text-primary mb-4">Proficiency Radar Chart</h3>
        <div className="flex flex-wrap gap-2">
          {levels.map((level) => (
            <button
              key={level}
              onClick={() => setSelectedLevel(level)}
              className={`px-3 py-1 rounded text-sm transition-colors ${selectedLevel === level
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-accent"
                }`}
            >
              {level}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-8">
        <div className="relative">
          <svg width="300" height="300" className="overflow-visible">
            {gridCircles}
            {axisLines}

            {/* Filled area */}
            <path
              d={pathData}
              fill="rgb(var(--primary))"
              fillOpacity="0.25"
              stroke="rgb(var(--primary))"
              strokeWidth="2"
            />

            {/* Data points */}
            {points.map((point, index) => (
              <circle
                key={index}
                cx={point.x}
                cy={point.y}
                r="4"
                fill="rgb(var(--primary))"
                className="drop-shadow-sm"
              />
            ))}

            {/* Labels */}
            {pillars.map((pillar, index) => {
              const angle = (index * 2 * Math.PI) / pillars.length - Math.PI / 2;
              const labelRadius = maxRadius + 30;
              const x = centerX + labelRadius * Math.cos(angle);
              const y = centerY + labelRadius * Math.sin(angle);

              return (
                <text
                  key={index}
                  x={x}
                  y={y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="text-xs fill-foreground font-medium"
                >
                  {pillar}
                </text>
              );
            })}
          </svg>
        </div>

        <div className="flex-1">
          <h4 className="text-primary mb-4">{selectedLevel} Level Profile</h4>
          <div className="space-y-3">
            {points.map((point, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">{point.label}</span>
                <div className="flex items-center gap-2">
                  <div className="w-20 bg-muted rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(point.value / 5) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-foreground w-6">{point.value}/5</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Level Examples Cards Component
function LevelExamplesCards() {
  const levels = [
    {
      level: "Junior",
      examples: {
        "Delivery & Execution": "Completes assigned tasks with guidance and meets basic quality standards",
        "Technical Domain": "Learning fundamental tools and technologies of the role",
        "Collaboration": "Participates actively in team meetings and ceremonies",
        "Autonomy": "Requires regular check-ins and clear direction",
        "Initiative": "Asks good questions and shows willingness to learn",
        "Mentoring": "Focuses on personal learning and development"
      }
    },
    {
      level: "Mid-level",
      examples: {
        "Delivery & Execution": "Delivers features independently with consistent quality",
        "Technical Domain": "Proficient in core technologies and can troubleshoot issues",
        "Collaboration": "Contributes to technical discussions and code reviews",
        "Autonomy": "Works independently on well-defined tasks",
        "Initiative": "Proposes improvements to existing processes",
        "Mentoring": "Helps onboard new team members informally"
      }
    },
    {
      level: "Senior",
      examples: {
        "Delivery & Execution": "Leads critical deliveries and ensures team quality standards",
        "Technical Domain": "Expert in architecture and best practices in used stack",
        "Collaboration": "Acts as bridge between teams, participates in RFCs and cross-team discussions",
        "Autonomy": "Solves complex problems independently with proper justification",
        "Initiative": "Introduces new solutions that generate efficiency or product gains",
        "Mentoring": "Acts as formal and informal mentor, leads knowledge sharing rituals"
      }
    },
    {
      level: "Staff",
      examples: {
        "Delivery & Execution": "Defines and executes multi-team technical initiatives",
        "Technical Domain": "Influences technical strategy across multiple domains",
        "Collaboration": "Facilitates alignment across engineering organization",
        "Autonomy": "Makes complex architectural decisions with organizational impact",
        "Initiative": "Drives innovation that impacts multiple products or teams",
        "Mentoring": "Develops other senior engineers and technical leaders"
      }
    }
  ];

  return (
    <div className="space-y-6">
      {levels.map((levelData, index) => (
        <div key={index} className="bg-card border border-border rounded-lg p-6">
          <h4 className="text-primary mb-4 flex items-center gap-3">
            <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
              {index + 1}
            </div>
            {levelData.level} Level Examples
          </h4>
          <div className="grid md:grid-cols-2 gap-4">
            {Object.entries(levelData.examples).map(([pillar, example]) => (
              <div key={pillar} className="p-4 bg-muted/50 rounded-lg">
                <h5 className="text-sm font-medium text-primary mb-2">{pillar}</h5>
                <p className="text-sm text-muted-foreground">{example}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// Progression Matrix Component
function ProgressionMatrix() {
  const pillars = [
    "Delivery & Execution",
    "Technical Domain",
    "Collaboration",
    "Autonomy",
    "Initiative",
    "Mentoring"
  ];

  const levels = ["Junior", "Mid-level", "Senior", "Staff", "Principal"];

  const matrixData = {
    "Junior": [1, 1, 1, 1, 1, 1],
    "Mid-level": [2, 2, 2, 2, 2, 1],
    "Senior": [3, 3, 3, 3, 3, 2],
    "Staff": [4, 4, 4, 4, 4, 3],
    "Principal": [5, 5, 5, 5, 5, 4]
  };

  const getColorIntensity = (value: number) => {
    const intensities = [
      "bg-muted",
      "bg-primary/20",
      "bg-primary/40",
      "bg-primary/60",
      "bg-primary/80",
      "bg-primary"
    ];
    return intensities[value] || "bg-muted";
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 overflow-x-auto">
      <h3 className="text-primary mb-6">Progression Matrix</h3>
      <div className="min-w-[600px]">
        <div className="grid grid-cols-7 gap-2">
          {/* Header */}
          <div className="p-3 font-medium text-primary"></div>
          {pillars.map((pillar) => (
            <div key={pillar} className="p-3 text-xs font-medium text-primary text-center">
              {pillar}
            </div>
          ))}

          {/* Matrix rows */}
          {levels.map((level) => (
            <React.Fragment key={level}>
              <div className="p-3 font-medium text-primary text-right">
                {level}
              </div>
              {matrixData[level as keyof typeof matrixData].map((value, index) => (
                <div
                  key={`${level}-${index}`}
                  className={`p-3 rounded text-center text-sm font-medium transition-colors ${getColorIntensity(value)} ${value >= 4 ? "text-primary-foreground" : "text-foreground"
                    }`}
                >
                  {value}
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-4 text-xs text-muted-foreground">
          <span>1 = Basic</span>
          <span>2 = Developing</span>
          <span>3 = Proficient</span>
          <span>4 = Advanced</span>
          <span>5 = Expert</span>
        </div>
      </div>
    </div>
  );
}

export function ProgressionPillarsPage() {
  return (
    <>
      <PageHero
        title="Career Topologies – Progression Pillars"
        description="The Progression Pillars are the heart of growth evaluation within the Career Topologies framework. They answer the question: 'What defines a person's evolution within their career track?'"
      />

      <div className="min-h-screen bg-background">

        {/* Objectives */}
        <section className="max-w-4xl mx-auto px-6 py-12">
          <h2 className="text-3xl text-primary mb-12 text-center">Pillar Objectives</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <Target className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="text-primary mb-3">Objective Criteria</h3>
              <p className="text-muted-foreground text-sm">Make growth criteria objective and measurable</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <Users className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="text-primary mb-3">Consistent Feedback</h3>
              <p className="text-muted-foreground text-sm">Help leaders give consistent and actionable feedback</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <Lightbulb className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="text-primary mb-3">Self-Development</h3>
              <p className="text-muted-foreground text-sm">Empower team members in their self-development journey</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <Gauge className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="text-primary mb-3">Development Plans</h3>
              <p className="text-muted-foreground text-sm">Support the design of individual development plans (IDPs)</p>
            </div>
          </div>
        </section>

        {/* Pillar Structure */}
        <section className="bg-muted/30 py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl text-primary mb-12 text-center">Pillar Structure</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Each career track (e.g., Engineering, Product, Design) can define its own pillars, but all should be anchored
              in a common structure that considers:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Target,
                  title: "Delivery & Execution",
                  description: "Ability to deliver value with quality, consistency and efficiency"
                },
                {
                  icon: Brain,
                  title: "Technical Domain / Specialization",
                  description: "Depth in the core knowledge of the function"
                },
                {
                  icon: Users,
                  title: "Collaboration & Influence",
                  description: "Team contribution, effective communication, influence without authority"
                },
                {
                  icon: Gauge,
                  title: "Autonomy & Decision Making",
                  description: "Ability to act with increasing independence"
                },
                {
                  icon: Lightbulb,
                  title: "Initiative & Innovation",
                  description: "Proposes solutions, improvements, experiments and learns"
                },
                {
                  icon: Heart,
                  title: "Mentoring & Multiplication",
                  description: "Develops other people, shares knowledge, contributes to culture"
                }
              ].map((pillar, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-6">
                  <pillar.icon className="w-8 h-8 text-primary mb-4" />
                  <h4 className="text-primary mb-3">{pillar.title}</h4>
                  <p className="text-muted-foreground text-sm">{pillar.description}</p>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground text-center mt-8">
              These pillars can be combined in a "shape" model (e.g., T-shaped: broad execution + deep specialization).
            </p>
          </div>
        </section>

        {/* Software Engineering Example */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="text-3xl text-primary mb-12 text-center">Software Engineering Example</h2>
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left p-4 text-primary font-medium">Pillar</th>
                    <th className="text-left p-4 text-primary font-medium">Senior Level Example</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      pillar: "Delivery & Execution",
                      example: "Leads critical and iterative deliveries with quality and measurable impact"
                    },
                    {
                      pillar: "Technical Domain",
                      example: "Reference in architecture and best practices in the used stack"
                    },
                    {
                      pillar: "Collaboration & Influence",
                      example: "Acts as bridge between teams, participates in RFCs and cross-team discussions"
                    },
                    {
                      pillar: "Autonomy & Decision",
                      example: "Solves complex problems independently with proper justification"
                    },
                    {
                      pillar: "Initiative & Innovation",
                      example: "Introduces new solutions that generate efficiency or product gains"
                    },
                    {
                      pillar: "Mentoring & Multiplication",
                      example: "Acts as formal and informal mentor, leads knowledge sharing rituals"
                    }
                  ].map((row, index) => (
                    <tr key={index} className="border-b border-border">
                      <td className="p-4 font-medium text-primary">{row.pillar}</td>
                      <td className="p-4 text-muted-foreground">{row.example}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Visual Components */}
        <section className="bg-muted/30 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl text-primary mb-12 text-center">Interactive Visualizations</h2>

            {/* Disclaimer */}
            <div className="max-w-3xl mx-auto mb-12">
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  <strong>Disclaimer:</strong> These are visual examples of how to provide visibility into progression and expectations.
                  Each company should develop their own leveling system tailored to their specific organizational context, culture, and business needs.
                </p>
              </div>
            </div>

            {/* Radar Chart */}
            <div className="mb-16">
              <ProficiencyRadarChart />
            </div>

            {/* Progression Matrix */}
            <div className="mb-16">
              <ProgressionMatrix />
            </div>
          </div>
        </section>

        {/* Level Examples */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="text-3xl text-primary mb-12 text-center">Examples by Level</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Explore concrete examples of how each pillar manifests across different career levels:
          </p>
          <LevelExamplesCards />
        </section>

        {/* Applicability */}
        <section className="bg-muted/30 py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl text-primary mb-12 text-center">Applicability</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Continuous Feedback",
                  description: "Each pillar serves as a basis for qualitative feedback"
                },
                {
                  title: "Promotions & Leveling",
                  description: "Progression in each pillar indicates readiness for the next level"
                },
                {
                  title: "IDPs",
                  description: "Pillar with less maturation can be the focus of development"
                },
                {
                  title: "Comparability",
                  description: "Different teams with common evaluation standards"
                }
              ].map((item, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Circle className="w-2 h-2 fill-primary text-primary" />
                    <h4 className="text-primary">{item.title}</h4>
                  </div>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <UnifiedRelatedPages
          pages={getUnifiedRelatedPages("/framework/progression").pages}
          variant="related"
        />
      </div>
    </>
  );
}
