import { ExternalLink } from "lucide-react";
import { UnifiedRelatedPages } from "../sections/UnifiedRelatedPages";
import { getUnifiedRelatedPages } from "../sections/UnifiedRelatedPagesConfig";
import { PageHero } from "../media/PageHero";

export function ReferencesPage() {
  return (
    <>
      <PageHero
        title="References"
        description="Academic and professional foundation that shaped the development of the Career Topologies framework. This collection of studies, articles, and resources serves as a reference to understand the principles and concepts that structure the framework."
      />

      <div className="min-h-screen bg-background py-12">
        <div className="max-w-4xl mx-auto px-6">

          <div className="space-y-12">
            {/* Professional Profile */}
            <section>
              <h2 className="text-2xl font-semibold mb-6 text-foreground">
                Professional Profile
              </h2>
              <div className="space-y-4">
                <div className="border border-border rounded-lg p-6 bg-card">
                  <h3 className="text-lg font-medium mb-2 text-foreground">
                    <a
                      href="https://jchyip.medium.com/how-to-develop-t-shaped-people-993349932f90"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 hover:text-primary transition-colors"
                    >
                      How to develop T-shaped people
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </h3>
                  <p className="text-muted-foreground">
                    Article on how to develop T-shaped people, fundamental for understanding generalist profiles with specializations.
                  </p>
                </div>

                <div className="border border-border rounded-lg p-6 bg-card">
                  <h3 className="text-lg font-medium mb-2 text-foreground">
                    <a
                      href="https://jchyip.medium.com/why-t-shaped-people-e8706198e437"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 hover:text-primary transition-colors"
                    >
                      Why T-shaped people?
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </h3>
                  <p className="text-muted-foreground">
                    Explanation about the importance of T-shaped people in developing multidisciplinary teams.
                  </p>
                </div>

                <div className="border border-border rounded-lg p-6 bg-card">
                  <h3 className="text-lg font-medium mb-2 text-foreground">
                    <a
                      href="https://netflixtechblog.com/full-cycle-developers-at-netflix-a08c31f83249"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 hover:text-primary transition-colors"
                    >
                      Full Cycle Developers at Netflix
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </h3>
                  <p className="text-muted-foreground">
                    How Netflix implements the full cycle developer concept, influencing complete responsibility models.
                  </p>
                </div>

                <div className="border border-border rounded-lg p-6 bg-card">
                  <h3 className="text-lg font-medium mb-2 text-foreground">
                    <a
                      href="https://charity.wtf/2017/05/11/the-engineer-manager-pendulum/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 hover:text-primary transition-colors"
                    >
                      The Engineer/Manager Pendulum
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </h3>
                  <p className="text-muted-foreground">
                    Seminal article about the transition between engineer and manager roles, foundational for understanding track changes.
                  </p>
                </div>

                <div className="border border-border rounded-lg p-6 bg-card">
                  <h3 className="text-lg font-medium mb-2 text-foreground">
                    <a
                      href="https://slack.engineering/technical-leadership-getting-started/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 hover:text-primary transition-colors"
                    >
                      Technical Leadership: Getting Started
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </h3>
                  <p className="text-muted-foreground">
                    Slack's guide on how to start in technical leadership, reference for Staff Engineer tracks.
                  </p>
                </div>

                <div className="border border-border rounded-lg p-6 bg-card">
                  <h3 className="text-lg font-medium mb-2 text-foreground">
                    <a
                      href="https://staffeng.com/guides/staff-archetypes"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 hover:text-primary transition-colors"
                    >
                      Staff archetypes
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </h3>
                  <p className="text-muted-foreground">
                    Stories and archetypes of people who reached Staff Engineer positions, foundation for senior levels.
                  </p>
                </div>

                <div className="border border-border rounded-lg p-6 bg-card">
                  <h3 className="text-lg font-medium mb-2 text-foreground">
                    <a
                      href="https://sijinjoseph.netlify.app/programmer-competency-matrix/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 hover:text-primary transition-colors"
                    >
                      Programmer Competency Matrix
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </h3>
                  <p className="text-muted-foreground">
                    Competency matrix for programmers, fundamental for defining technical levels.
                  </p>
                </div>
              </div>
            </section>

            {/* News and Articles */}
            <section>
              <h2 className="text-2xl font-semibold mb-6 text-foreground">
                News and Articles
              </h2>
              <div className="space-y-4">
                <div className="border border-border rounded-lg p-6 bg-card">
                  <h3 className="text-lg font-medium mb-2 text-foreground">
                    <a
                      href="https://g1.globo.com/tecnologia/noticia/ex-funcionarias-processam-google-por-discriminacao-salarial-contra-mulheres.ghtml"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 hover:text-primary transition-colors"
                    >
                      Ex-employees sue Google for salary discrimination
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </h3>
                  <p className="text-muted-foreground">
                    News about lawsuit against Google for salary discrimination, highlighting the importance of transparent frameworks.
                  </p>
                </div>

                <div className="border border-border rounded-lg p-6 bg-card">
                  <h3 className="text-lg font-medium mb-2 text-foreground">
                    <a
                      href="https://adrenaline.com.br/noticias/v/70131/atualizado-california-processa-activision-por-assedio-a-mulheres-e-condicoes-desiguais-de-trabalho"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 hover:text-primary transition-colors"
                    >
                      California sues Activision for unequal conditions
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </h3>
                  <p className="text-muted-foreground">
                    Activision case demonstrating the need for fair and transparent structures in corporate environments.
                  </p>
                </div>

                <div className="border border-border rounded-lg p-6 bg-card">
                  <h3 className="text-lg font-medium mb-2 text-foreground">
                    <a
                      href="https://g1.globo.com/dia-das-mulheres/noticia/2022/03/08/mulheres-ganham-em-media-205percent-menos-que-homens-no-brasil.ghtml"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 hover:text-primary transition-colors"
                    >
                      Women earn 20.5% less than men in Brazil
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </h3>
                  <p className="text-muted-foreground">
                    Data on gender pay gap in Brazil, context for the need of career equity.
                  </p>
                </div>
              </div>
            </section>

            {/* Structures and Frameworks */}
            <section>
              <h2 className="text-2xl font-semibold mb-6 text-foreground">
                Structures and Frameworks
              </h2>
              <div className="space-y-4">
                <div className="border border-border rounded-lg p-6 bg-card">
                  <h3 className="text-lg font-medium mb-2 text-foreground">
                    <a
                      href="https://career-ladders.dev/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 hover:text-primary transition-colors"
                    >
                      Career Ladders for Tech, Open Sourced
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </h3>
                  <p className="text-muted-foreground">
                    Open source examples of career ladders for technology, reference for practical structures.
                  </p>
                </div>

                <div className="border border-border rounded-lg p-6 bg-card">
                  <h3 className="text-lg font-medium mb-2 text-foreground">
                    <a
                      href="https://roadmap.sh/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 hover:text-primary transition-colors"
                    >
                      Developer Roadmaps
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </h3>
                  <p className="text-muted-foreground">
                    Development roadmaps for different technology areas, foundation for technical competencies.
                  </p>
                </div>

                <div className="border border-border rounded-lg p-6 bg-card">
                  <h3 className="text-lg font-medium mb-2 text-foreground">
                    <a
                      href="https://progression.fyi/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 hover:text-primary transition-colors"
                    >
                      progression.fyi
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </h3>
                  <p className="text-muted-foreground">
                    Open source frameworks for building career progression, inspiration for open structures.
                  </p>
                </div>

                <div className="border border-border rounded-lg p-6 bg-card">
                  <h3 className="text-lg font-medium mb-2 text-foreground">
                    <a
                      href="https://www.levels.fyi/?compare=Google,Facebook,Microsoft&track=Software%20Engineer"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 hover:text-primary transition-colors"
                    >
                      Levels.fyi
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </h3>
                  <p className="text-muted-foreground">
                    Comparison of levels and salaries between technology companies, reference for benchmarking.
                  </p>
                </div>

                <div className="border border-border rounded-lg p-6 bg-card">
                  <h3 className="text-lg font-medium mb-2 text-foreground">
                    <a
                      href="https://dropbox.github.io/dbx-career-framework/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 hover:text-primary transition-colors"
                    >
                      Dropbox Career Framework
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </h3>
                  <p className="text-muted-foreground">
                    Dropbox's career framework, example of practical implementation in a technology company.
                  </p>
                </div>

                <div className="border border-border rounded-lg p-6 bg-card">
                  <h3 className="text-lg font-medium mb-2 text-foreground">
                    <a
                      href="https://sfia-online.org/en/sfia-8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 hover:text-primary transition-colors"
                    >
                      SFIA 8
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </h3>
                  <p className="text-muted-foreground">
                    Global skills and competency framework for the digital world, international reference standard.
                  </p>
                </div>
              </div>
            </section>

            {/* Studies, Laws and Principles */}
            <section>
              <h2 className="text-2xl font-semibold mb-6 text-foreground">
                Studies, Laws and Principles
              </h2>
              <div className="space-y-4">
                <div className="border border-border rounded-lg p-6 bg-card">
                  <h3 className="text-lg font-medium mb-2 text-foreground">
                    <a
                      href="https://www.bbc.com/portuguese/geral-57305027"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 hover:text-primary transition-colors"
                    >
                      What is the Peter Principle
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </h3>
                  <p className="text-muted-foreground">
                    Explanation of the principle that positions tend to be filled by 'incompetents', foundation for avoiding inadequate promotions.
                  </p>
                </div>

                <div className="border border-border rounded-lg p-6 bg-card">
                  <h3 className="text-lg font-medium mb-2 text-foreground">
                    <a
                      href="https://corporate-rebels.com/metcalfe-law/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 hover:text-primary transition-colors"
                    >
                      Solve Communication Complexity With Networks Of Small Teams
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </h3>
                  <p className="text-muted-foreground">
                    Application of Metcalfe's Law in teams, foundation for efficient organizational structures.
                  </p>
                </div>

                <div className="border border-border rounded-lg p-6 bg-card">
                  <h3 className="text-lg font-medium mb-2 text-foreground">
                    <a
                      href="https://www.bbc.com/future/article/20191001-dunbars-number-why-we-can-only-maintain-150-relationships"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 hover:text-primary transition-colors"
                    >
                      Dunbar's number: Why we can only maintain 150 relationships
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </h3>
                  <p className="text-muted-foreground">
                    Theory about cognitive limits of relationships, applied in organizational structures and spans of control.
                  </p>
                </div>

                <div className="border border-border rounded-lg p-6 bg-card">
                  <h3 className="text-lg font-medium mb-2 text-foreground">
                    <a
                      href="https://pt.wikipedia.org/wiki/Hierarquia_de_necessidades_de_Maslow"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 hover:text-primary transition-colors"
                    >
                      Maslow's Hierarchy of Needs
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </h3>
                  <p className="text-muted-foreground">
                    Psychology theory about human motivation, foundation for understanding motivational aspects in career.
                  </p>
                </div>

                <div className="border border-border rounded-lg p-6 bg-card">
                  <h3 className="text-lg font-medium mb-2 text-foreground">
                    <a
                      href="https://codecapsule.com/2021/07/15/the-skills-map-of-senior-tech-career-progression/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 hover:text-primary transition-colors"
                    >
                      The Skills Map of Senior Tech Career Progression
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </h3>
                  <p className="text-muted-foreground">
                    Skills map for senior tech career progression, guide for advanced competencies.
                  </p>
                </div>
              </div>
            </section>

            {/* Leadership, Management and Teams */}
            <section>
              <h2 className="text-2xl font-semibold mb-6 text-foreground">
                Leadership, Management and Teams
              </h2>
              <div className="space-y-4">
                <div className="border border-border rounded-lg p-6 bg-card">
                  <h3 className="text-lg font-medium mb-2 text-foreground">
                    <a
                      href="https://buffer.com/resources/career-framework/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 hover:text-primary transition-colors"
                    >
                      How Individuals Advance at Buffer, Without Becoming Managers
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </h3>
                  <p className="text-muted-foreground">
                    Buffer's career framework with multiple growth paths, example of non-managerial tracks.
                  </p>
                </div>

                <div className="border border-border rounded-lg p-6 bg-card">
                  <h3 className="text-lg font-medium mb-2 text-foreground">
                    <a
                      href="https://www.holloway.com/s/trh-job-titles-levels-fundamentals-for-software-engineering#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 hover:text-primary transition-colors"
                    >
                      Job Titles & Levels: What Every Software Engineer Needs to Know
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </h3>
                  <p className="text-muted-foreground">
                    Comprehensive guide about titles and levels in software engineering, reference for nomenclatures.
                  </p>
                </div>

                <div className="border border-border rounded-lg p-6 bg-card">
                  <h3 className="text-lg font-medium mb-2 text-foreground">
                    <a
                      href="https://teamtopologies.com/key-concepts"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 hover:text-primary transition-colors"
                    >
                      Team Topologies
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </h3>
                  <p className="text-muted-foreground">
                    Key concepts about team topologies, inspiration for effective organizational structures.
                  </p>
                </div>

                <div className="border border-border rounded-lg p-6 bg-card">
                  <h3 className="text-lg font-medium mb-2 text-foreground">
                    <a
                      href="https://hbr.org/2013/12/how-google-sold-its-engineers-on-management"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 hover:text-primary transition-colors"
                    >
                      How Google Sold Its Engineers on Management
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </h3>
                  <p className="text-muted-foreground">
                    How Google convinced its engineers about the importance of management, case of cultural change.
                  </p>
                </div>

                <div className="border border-border rounded-lg p-6 bg-card">
                  <h3 className="text-lg font-medium mb-2 text-foreground">
                    <a
                      href="https://www.whatmatters.com/get-examples"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 hover:text-primary transition-colors"
                    >
                      OKR Examples & Resources
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </h3>
                  <p className="text-muted-foreground">
                    Guide and examples for writing good OKRs, management tool for career tracking.
                  </p>
                </div>

                <div className="border border-border rounded-lg p-6 bg-card">
                  <h3 className="text-lg font-medium mb-2 text-foreground">
                    <a
                      href="https://rework.withgoogle.com/subjects/managers/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 hover:text-primary transition-colors"
                    >
                      re:Work - Managers
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </h3>
                  <p className="text-muted-foreground">
                    Google's resources about management and leadership development, reference practices.
                  </p>
                </div>

                <div className="border border-border rounded-lg p-6 bg-card">
                  <h3 className="text-lg font-medium mb-2 text-foreground">
                    <a
                      href="https://www.edsisolutions.com/blog/career-ladders-vs-career-lattices-tools-for-employee-development"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 hover:text-primary transition-colors"
                    >
                      Career Ladders vs. Career Lattices
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </h3>
                  <p className="text-muted-foreground">
                    Comparison between linear vs. matrix career progression models, conceptual foundation for topologies.
                  </p>
                </div>
              </div>
            </section>
          </div>

          <div className="mt-12 p-6 bg-muted rounded-lg">
            <h3 className="text-lg font-medium mb-3 text-foreground">
              About the References
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              This collection represents years of research and analysis of industry practices, academic studies
              and real experiences from technology organizations. Each reference contributed to the formation
              of the principles and concepts of the Career Topologies framework, providing a solid and
              evidence-based foundation for fairer and more effective career structures.
            </p>
          </div>
        </div>

        <UnifiedRelatedPages
          pages={getUnifiedRelatedPages("/references").pages}
          variant="related"
        />
      </div>
    </>
  );
}
