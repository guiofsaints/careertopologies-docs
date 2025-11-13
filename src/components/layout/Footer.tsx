import { Link } from "../config/Router";
import { ExternalLink, Github, Heart, Instagram, Linkedin, Youtube } from "lucide-react";
import { Tooltip } from "@radix-ui/themes";
// import GitHubButton from "react-github-btn";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Career Topologies</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A strategic framework for building fair, transparent, and sustainable career paths in technology organizations.
            </p>
            <div className="space-y-4">
              <div className="flex flex-col gap-2">
                {/*
                <GitHubButton
                  href="https://github.com/careertopologies/careertopologies"
                  data-color-scheme="no-preference: light; light: light; dark: dark;"
                  data-icon="octicon-star"
                  data-size="large"
                  data-show-count="true"
                  aria-label="Star careertopologies/careertopologies on GitHub"
                >
                  Star
                </GitHubButton>
                <GitHubButton
                  href="https://github.com/sponsors/guiofsaints"
                  data-color-scheme="no-preference: light; light: light; dark: dark;"
                  data-icon="octicon-heart"
                  data-size="large"
                  aria-label="Sponsor @guiofsaints on GitHub"
                >
                  Sponsor
                </GitHubButton>
                */}
              </div>

              {/* Social Media Icons */}
              <div className="space-y-2">
                <h4 className="text-xs font-semibold text-foreground uppercase tracking-wide">Follow</h4>
                <div className="flex gap-3">
                  <Tooltip content="Follow on Instagram">
                    <a
                      href="https://www.instagram.com/platformrocks/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="Follow on Instagram"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                  </Tooltip>
                  <Tooltip content="Connect on LinkedIn">
                    <a
                      href="https://www.linkedin.com/in/guilherme-dos-santos/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="Follow on LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </Tooltip>
                  <Tooltip content="Subscribe on YouTube">
                    <a
                      href="https://www.youtube.com/@platformrocks"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="Subscribe on YouTube"
                    >
                      <Youtube className="w-5 h-5" />
                    </a>
                  </Tooltip>
                  <Tooltip content="Follow on GitHub">
                    <a
                      href="https://github.com/guiofsaints"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="Follow on GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </Tooltip>
                </div>
              </div>
            </div>
          </div>

          {/* Framework Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Framework</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                to="/framework"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
              >
                Overview
              </Link>
              <Link
                to="/manifesto"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
              >
                Manifesto
              </Link>
              <Link
                to="/concepts"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
              >
                Core Concepts
              </Link>
              <Link
                to="/topologies"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
              >
                Career Topologies
              </Link>
              <Link
                to="/shapes"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
              >
                Career Shapes
              </Link>
              <Link
                to="/management"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
              >
                Management Levels
              </Link>
            </nav>
          </div>

          {/* Resources Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Resources</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                to="/about"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
              >
                About
              </Link>
              <Link
                to="/references"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
              >
                References
              </Link>
              <Link
                to="/contributing"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
              >
                Contributing
              </Link>
              <a
                href="https://github.com/careertopologies/careertopologies/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
              >
                Issues & Feedback
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="https://github.com/careertopologies/careertopologies/discussions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
              >
                Discussions
                <ExternalLink className="w-3 h-3" />
              </a>
            </nav>
          </div>

          {/* Community & Development */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Community</h3>
            <nav className="flex flex-col space-y-2">
              <a
                href="https://github.com/careertopologies/careertopologies"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
              >
                <Github className="w-3 h-3" />
                GitHub Repository
              </a>
              <a
                href="https://github.com/careertopologies/careertopologies/blob/main/LICENSE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
              >
                MIT License
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="https://github.com/careertopologies/careertopologies/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
              >
                Releases
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="https://github.com/sponsors/guiofsaints"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
              >
                <Heart className="w-3 h-3" />
                Sponsor Project
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="text-sm text-muted-foreground">
              <p>© 2024 Career Topologies. Open source framework under MIT License.</p>
              <p className="mt-1">
                Created by{" "}
                <a
                  href="https://github.com/guiofsaints"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:underline inline-flex items-center gap-1"
                >
                  @guiofsaints
                  <ExternalLink className="w-3 h-3" />
                </a>
              </p>
            </div>
            <div className="text-sm text-muted-foreground">
              <p>
                Built for the technology community with ❤️
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
