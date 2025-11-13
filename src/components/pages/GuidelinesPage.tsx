import * as React from "react";
import { Users, Target, Clock, CheckCircle, ArrowRight, Building, UserCheck, FileText } from "lucide-react";
import { UnifiedRelatedPages } from "../sections/UnifiedRelatedPages";
import { getUnifiedRelatedPages } from "../sections/UnifiedRelatedPagesConfig";
import { PageHero } from "../media/PageHero";

const FrameworkFlowDiagram = () => {
  const steps = [
    { id: 1, name: "Topology", description: "Choose career structure", icon: Building },
    { id: 2, name: "Ladder", description: "Define progression framework", icon: Target },
    { id: 3, name: "Levels", description: "Set career levels", icon: Users },
    { id: 4, name: "Pillars", description: "Build progression criteria", icon: CheckCircle }
  ];

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 p-8 bg-muted/30 rounded-lg">
      {steps.map((step, index) => {
        const Icon = step.icon;
        return (
          <React.Fragment key={step.id}>
            <div className="flex flex-col items-center text-center max-w-48">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                <Icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h4 className="font-medium text-primary mb-2">{step.name}</h4>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
            {index < steps.length - 1 && (
              <ArrowRight className="w-6 h-6 text-muted-foreground hidden lg:block" />
            )}
            {index < steps.length - 1 && (
              <ArrowRight className="w-6 h-6 text-muted-foreground rotate-90 lg:hidden" />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

const RolesMatrix = () => {
  const roles = ["HR", "Team Leads", "Managers", "Employees"];
  const responsibilities = [
    "Framework Governance",
    "Performance Reviews",
    "Career Development",
    "Feedback & 1:1s",
    "Promotion Process",
    "Calibration"
  ];

  const matrix = {
    "HR": [3, 2, 2, 1, 3, 3],
    "Team Leads": [1, 3, 3, 3, 2, 3],
    "Managers": [1, 3, 3, 3, 3, 2],
    "Employees": [0, 1, 3, 2, 1, 0]
  };

  const getResponsibilityLevel = (level: number) => {
    switch (level) {
      case 3: return { text: "Primary", bg: "bg-primary", color: "text-primary-foreground" };
      case 2: return { text: "Secondary", bg: "bg-secondary", color: "text-secondary-foreground" };
      case 1: return { text: "Support", bg: "bg-muted", color: "text-muted-foreground" };
      default: return { text: "None", bg: "bg-background", color: "text-muted-foreground" };
    }
  };

  return (
    <div className="overflow-x-auto">
      <div className="min-w-full grid grid-cols-[150px_repeat(6,1fr)] gap-2">
        {/* Header */}
        <div className="p-3 font-medium text-primary"></div>
        {responsibilities.map((resp) => (
          <div key={resp} className="p-3 font-medium text-primary text-center text-sm">
            {resp}
          </div>
        ))}

        {/* Matrix rows */}
        {roles.map((role) => (
          <React.Fragment key={role}>
            <div className="p-3 font-medium text-primary text-right">
              {role}
            </div>
            {matrix[role as keyof typeof matrix].map((level, index) => {
              const config = getResponsibilityLevel(level);
              return (
                <div
                  key={`${role}-${index}`}
                  className={`p-3 rounded text-center text-sm font-medium ${config.bg} ${config.color}`}
                >
                  {config.text}
                </div>
              );
            })}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

const ImplementationTimeline = () => {
  const phases = [
    { id: 1, name: "Kickoff & Alignment", duration: 2, start: 0 },
    { id: 2, name: "Select Topology", duration: 1, start: 2 },
    { id: 3, name: "Define Leveling & Pillars", duration: 3, start: 3 },
    { id: 4, name: "Align Ladder Principles", duration: 2, start: 6 },
    { id: 5, name: "Pilot in Small Teams", duration: 4, start: 8 },
    { id: 6, name: "Organization-wide Rollout", duration: 6, start: 12 },
    { id: 7, name: "Embed in People Ops", duration: 4, start: 18 },
    { id: 8, name: "Maintain & Evolve", duration: 2, start: 22 }
  ];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-[200px_1fr] gap-4 text-sm">
        <div className="font-medium text-primary">Implementation Phase</div>
        <div className="grid grid-cols-12 gap-1">
          {Array.from({ length: 12 }, (_, i) => (
            <div key={i} className="text-center text-muted-foreground">
              W{(i + 1) * 2}
            </div>
          ))}
        </div>
      </div>

      {phases.map((phase) => (
        <div key={phase.id} className="grid grid-cols-[200px_1fr] gap-4 items-center">
          <div className="text-sm font-medium">{phase.name}</div>
          <div className="grid grid-cols-12 gap-1 h-8">
            {Array.from({ length: 12 }, (_, i) => {
              const weekStart = i * 2;
              const weekEnd = (i + 1) * 2;
              const phaseStart = phase.start;
              const phaseEnd = phase.start + phase.duration;

              const isActive = weekStart < phaseEnd && weekEnd > phaseStart;

              return (
                <div
                  key={i}
                  className={`h-full rounded ${isActive
                    ? "bg-primary"
                    : "bg-muted"
                    }`}
                />
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export function GuidelinesPage() {
  return (
    <>
      <PageHero
        title="Guidelines"
        description="Comprehensive guide to operationalizing the Career Topologies framework inside an organization. It translates the philosophy of leveling, progression, principles, and topology into practical workflows, responsibilities, and communication strategies."
      />

      <div className="container mx-auto px-6 py-12 max-w-4xl">

        {/* Framework Flow Diagram */}
        <section className="mb-16">
          <h2 className="mb-8 text-center">Framework Implementation Flow</h2>
          <FrameworkFlowDiagram />
        </section>

        {/* Content Sections */}
        <div className="space-y-16">
          {/* How to Use the Framework */}
          <section>
            <h2 className="mb-8">How to Use the Framework</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Ownership and Roles
                </h3>
                <ul className="space-y-3 text-sm">
                  <li><strong>HR:</strong> Responsible for overall governance, coordination of review cycles, and integration into compensation.</li>
                  <li><strong>Team Leads / Managers:</strong> Responsible for applying the framework in feedback, 1:1s, leveling discussions, and performance assessments.</li>
                  <li><strong>Employees:</strong> Empowered to understand the framework and use it to guide their career path.</li>
                </ul>
              </div>

              <div className="bg-card rounded-lg p-6 border">
                <h3 className="mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Integration Points
                </h3>
                <ul className="space-y-3 text-sm">
                  <li><strong>Onboarding:</strong> Include overview in onboarding materials.</li>
                  <li><strong>Feedback cycles:</strong> Use progression pillars as reference.</li>
                  <li><strong>Calibration:</strong> Align team leads on evaluation criteria and maturity expectations.</li>
                </ul>
              </div>
            </div>

            {/* Roles and Responsibilities Matrix */}
            <div className="mb-8">
              <h3 className="mb-6">Roles and Responsibilities Matrix</h3>
              <RolesMatrix />
            </div>
          </section>

          {/* Communication Best Practices */}
          <section>
            <h2 className="mb-6">Communication Best Practices</h2>
            <div className="bg-muted/30 rounded-lg p-6">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <strong>Be explicit about expectations:</strong> Share ladder levels, pillars, and criteria in internal documentation.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <strong>Frame feedback using the structure:</strong> Instead of vague phrases like "be more senior", say "develop more autonomy in cross-team initiatives as expected for level 3."
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <strong>Discuss progression in 1:1s:</strong> Create individual development plans linked to progression pillars.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <strong>During calibration:</strong> Anchor discussions in the ladder and avoid subjective comparisons.
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Promotion Process Guide */}
          <section>
            <h2 className="mb-6">Promotion Process Guide</h2>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  Promotion Proposal Flow
                </h3>
                <ol className="space-y-2 text-sm list-decimal list-inside">
                  <li>Manager drafts promotion justification aligned to the ladder.</li>
                  <li>Peer or partner reviewer validates consistency.</li>
                  <li>Calibration group reviews cases together.</li>
                  <li>HR validates consistency across teams.</li>
                  <li>Final approval by leadership (VP/Director).</li>
                </ol>
              </div>

              <div className="bg-card rounded-lg p-6 border">
                <h3 className="mb-4 flex items-center gap-2">
                  <UserCheck className="w-5 h-5 text-primary" />
                  Requirements
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• Demonstration of sustained performance at the next level.</li>
                  <li>• Maturity across most progression pillars.</li>
                  <li>• Peer feedback, delivery records, and mentorship evidence.</li>
                </ul>
              </div>

              <div className="bg-card rounded-lg p-6 border">
                <h3 className="mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Timeline
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• Biannual or quarterly promotion windows.</li>
                  <li>• Defined deadlines for proposal submission, review, and outcome communication.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Compensation and Titles */}
          <section>
            <h2 className="mb-6">Compensation and Titles (Optional but Recommended)</h2>
            <div className="bg-card rounded-lg p-6 border">
              <ul className="space-y-3">
                <li>• Each level can be mapped to a compensation band, either visible or internal.</li>
                <li>• Distinguish between internal levels and external-facing titles.</li>
                <li>• Ensure fairness and internal equity in how titles and compensation are assigned.</li>
              </ul>
            </div>
          </section>

          {/* Governance and Updates */}
          <section>
            <h2 className="mb-6">Governance and Updates</h2>
            <div className="bg-card rounded-lg p-6 border">
              <ul className="space-y-3">
                <li>• Annual review cycle for updating the framework.</li>
                <li>• Collect feedback from ICs, managers, and HR.</li>
                <li>• Track version changes and improvement history.</li>
                <li>• Create an advisory group (HR + ICs + managers) to own the evolution.</li>
              </ul>
            </div>
          </section>

          {/* Implementation Roadmap */}
          <section>
            <h2 className="mb-6">Implementation Roadmap</h2>

            <div className="mb-8">
              <h3 className="mb-6">8-Step Implementation Plan</h3>
              <ImplementationTimeline />
            </div>

            <div className="bg-muted/30 rounded-lg p-6">
              <h4 className="mb-4">Implementation Steps Detail:</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div><strong>1. Kickoff & Alignment</strong> – define purpose and success metrics.</div>
                  <div><strong>2. Select Topology</strong> – Y, W, or Network model.</div>
                  <div><strong>3. Define Leveling & Pillars</strong> – adapt per discipline.</div>
                  <div><strong>4. Align Ladder Principles</strong> – validate with leadership.</div>
                </div>
                <div className="space-y-2">
                  <div><strong>5. Pilot in Small Teams</strong> – test communication and feedback.</div>
                  <div><strong>6. Organization-wide Rollout</strong> – include in onboarding and reviews.</div>
                  <div><strong>7. Embed in People Ops</strong> – integrate into performance and compensation.</div>
                  <div><strong>8. Maintain & Evolve</strong> – establish review cycle and governance.</div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <UnifiedRelatedPages
          pages={getUnifiedRelatedPages("/framework/guidelines").pages}
          variant="related"
        />
      </div>
    </>
  );
}
