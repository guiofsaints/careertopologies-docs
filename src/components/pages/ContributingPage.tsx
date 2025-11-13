import { Card, Box } from "@radix-ui/themes";
import { Button } from "@radix-ui/themes";
import { ExternalLink, Github, Users, FileText, Lightbulb, Globe, MessageSquare, GitBranch } from "lucide-react";
import { UnifiedRelatedPages } from "../sections/UnifiedRelatedPages";
import { getUnifiedRelatedPages } from "../sections/UnifiedRelatedPagesConfig";
import { PageHero } from "../media/PageHero";

export function ContributingPage() {
  return (
    <>
      <PageHero
        title="Contributing"
        description="Career Topologies is an open, community-driven framework. Contributions are welcome across documentation, design, implementation tools, and case studies. Whether you're part of an HR team, a tech leader, or a contributor from another organization, your insights can help improve the model for everyone."
      />

      <div className="min-h-screen bg-background">
        {/* GitHub Repository Section */}
        <section className="py-16 bg-muted/50">
          <div className="max-w-4xl mx-auto px-6">
            <Card className="border-primary/20 bg-primary/5">
              <Box className="p-8 text-center">
                <Github className="w-12 h-12 text-primary mx-auto mb-4" />
                <h2 className="text-foreground mb-4">GitHub Repository</h2>
                <p className="text-muted-foreground mb-6">
                  All source files, documentation, and issue tracking are hosted publicly at:
                </p>
                <a
                  href="https://github.com/careertopologies/careertopologies"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="3" variant="solid" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <Github className="w-5 h-5" />
                    Visit Repository
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </a>
              </Box>
            </Card>
          </div>
        </section>

        {/* Ways to Contribute */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-foreground mb-4">Ways to Contribute</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                There are many ways to get involved and help improve Career Topologies for everyone.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-md transition-shadow">
                <Box className="p-6">
                  <Lightbulb className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-foreground mb-3">Suggest Improvements</h3>
                  <ul className="text-muted-foreground space-y-2 text-sm">
                    <li>• Propose edits to core documents (framework, shapes, topologies)</li>
                    <li>• Open issues to suggest new pages, examples, or diagrams</li>
                    <li>• Submit FAQs or lessons from your organization</li>
                  </ul>
                </Box>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <Box className="p-6">
                  <FileText className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-foreground mb-3">Add Case Studies</h3>
                  <ul className="text-muted-foreground space-y-2 text-sm">
                    <li>• Share your implementation story</li>
                    <li>• Highlight what worked (or didn't)</li>
                    <li>• Help others learn from your experience</li>
                  </ul>
                </Box>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <Box className="p-6">
                  <Users className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-foreground mb-3">Build Tools</h3>
                  <ul className="text-muted-foreground space-y-2 text-sm">
                    <li>• Create templates (Mermaid, Notion, Miro, FigJam)</li>
                    <li>• Submit tooling ideas (e.g., assessment generators, ladder designers)</li>
                  </ul>
                </Box>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <Box className="p-6">
                  <Globe className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-foreground mb-3">Translate Content</h3>
                  <ul className="text-muted-foreground space-y-2 text-sm">
                    <li>• Help make the framework accessible in more languages</li>
                  </ul>
                </Box>
              </Card>

              <Card className="hover:shadow-md transition-shadow md:col-span-2">
                <Box className="p-6">
                  <MessageSquare className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-foreground mb-3">Join the Discussion</h3>
                  <ul className="text-muted-foreground space-y-2 text-sm">
                    <li>• Use GitHub Discussions or open an issue to collaborate</li>
                    <li>• Help triage issues or respond to others' questions</li>
                  </ul>
                </Box>
              </Card>
            </div>
          </div>
        </section>

        {/* Maintainers Section */}
        <section className="py-16 bg-muted/50">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-8">
              <h2 className="text-foreground mb-4">Maintainers</h2>
              <p className="text-muted-foreground">
                Career Topologies was created and is maintained by:
              </p>
            </div>

            <Card className="max-w-md mx-auto">
              <Box className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-foreground mb-2">Guilherme (Gui Santos)</h3>
                <p className="text-muted-foreground mb-4">Creator and core maintainer</p>
                <a
                  href="https://github.com/guiofsaints"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="2">
                    <Github className="w-4 h-4" />
                    @guiofsaints
                    <ExternalLink className="w-3 h-3" />
                  </Button>
                </a>
                <p className="text-sm text-muted-foreground mt-4">
                  Feel free to mention @guiofsaints in issues or discussions for feedback.
                </p>
              </Box>
            </Card>
          </div>
        </section>

        {/* Code of Conduct */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-foreground mb-4">Code of Conduct</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              All contributors are expected to follow our Code of Conduct. We are committed to creating a welcoming, respectful, and inclusive space for collaboration.
            </p>
          </div>
        </section>

        {/* Start Contributing */}
        <section className="py-16 bg-linear-to-br from-primary/5 via-background to-background">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-foreground mb-4">Start Contributing</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Ready to get involved? Follow these steps to make your first contribution.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <Box className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm">
                      1
                    </div>
                    <h3 className="text-foreground">Fork the repository</h3>
                  </div>
                </Box>
              </Card>

              <Card>
                <Box className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm">
                      2
                    </div>
                    <h3 className="text-foreground">Create a branch (feat/my-contribution)</h3>
                  </div>
                </Box>
              </Card>

              <Card>
                <Box className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm">
                      3
                    </div>
                    <h3 className="text-foreground">Commit your changes with clear messages</h3>
                  </div>
                </Box>
              </Card>

              <Card>
                <Box className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm">
                      4
                    </div>
                    <h3 className="text-foreground">Open a pull request with context on your change</h3>
                  </div>
                </Box>
              </Card>
            </div>

            <div className="text-center">
              <Card className="border-primary/20 bg-primary/5 max-w-2xl mx-auto">
                <Box className="p-6">
                  <GitBranch className="w-8 h-8 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground mb-4">
                    If you're unsure where to start, look for issues labeled <span className="bg-primary/10 text-primary px-2 py-1 rounded text-sm">good first issue</span> or open a discussion to ask questions.
                  </p>
                  <a
                    href="https://github.com/careertopologies/careertopologies/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="solid" size="2">
                      Find Good First Issues
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </a>
                </Box>
              </Card>
            </div>
          </div>
        </section>

        {/* Thank You */}
        <section className="py-16 bg-muted/50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-foreground mb-4">Thank You</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Thank you for supporting the mission of creating fair, transparent, and sustainable career paths in tech.
            </p>
          </div>
        </section>

        <UnifiedRelatedPages
          pages={getUnifiedRelatedPages("/contributing").pages as any}
          variant="related"
        />
      </div>
    </>
  );
}
