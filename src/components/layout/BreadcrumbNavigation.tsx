import { ChevronRight, Home } from "lucide-react";
import { Link } from "../config/Router";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/foundation/primitives";

interface BreadcrumbConfig {
  path: string;
  label: string;
  parent?: string;
}

const breadcrumbConfig: BreadcrumbConfig[] = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/framework", label: "Framework" },
  { path: "/framework/leveling", label: "Leveling", parent: "/framework" },
  { path: "/framework/progression", label: "Progression", parent: "/framework" },
  { path: "/framework/guidelines", label: "Guidelines", parent: "/framework" },
  { path: "/concepts", label: "Concepts" },
  { path: "/topologies", label: "Topologies" },
  { path: "/shapes", label: "Shapes" },
  { path: "/manifesto", label: "Manifesto" },
  { path: "/management", label: "Management" },
  { path: "/references", label: "References" },
  { path: "/contributing", label: "Contributing" },
];

interface BreadcrumbNavigationProps {
  currentPath: string;
}

export function BreadcrumbNavigation({ currentPath }: BreadcrumbNavigationProps) {
  // Don't show breadcrumbs on homepage
  if (currentPath === "/") {
    return null;
  }

  const buildBreadcrumbs = (path: string): BreadcrumbConfig[] => {
    const current = breadcrumbConfig.find(config => config.path === path);
    if (!current) return [];

    const breadcrumbs: BreadcrumbConfig[] = [];

    // Add home
    breadcrumbs.push(breadcrumbConfig[0]);

    // Add parent if exists
    if (current.parent) {
      const parent = breadcrumbConfig.find(config => config.path === current.parent);
      if (parent) {
        breadcrumbs.push(parent);
      }
    }

    // Add current (only if it's not home)
    if (current.path !== "/") {
      breadcrumbs.push(current);
    }

    return breadcrumbs;
  };

  const breadcrumbs = buildBreadcrumbs(currentPath);

  if (breadcrumbs.length <= 1) {
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto px-6 pt-8">
      <Breadcrumb>
        <BreadcrumbList className="text-xs">
          {breadcrumbs.map((breadcrumb, index) => {
            const isLast = index === breadcrumbs.length - 1;

            return (
              <div key={breadcrumb.path} className="flex items-center">
                <BreadcrumbItem>
                  {isLast ? (
                    <span className="text-muted-foreground/80 font-medium">
                      {breadcrumb.label}
                    </span>
                  ) : (
                    <BreadcrumbLink asChild>
                      <Link
                        to={breadcrumb.path}
                        className="text-muted-foreground/60 hover:text-muted-foreground transition-colors flex items-center gap-1"
                      >
                        {breadcrumb.path === "/" && (
                          <Home className="w-3 h-3" />
                        )}
                        {breadcrumb.path !== "/" && breadcrumb.label}
                      </Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
                {!isLast && (
                  <BreadcrumbSeparator className="mx-1">
                    <ChevronRight className="w-3 h-3 text-muted-foreground/40" />
                  </BreadcrumbSeparator>
                )}
              </div>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
