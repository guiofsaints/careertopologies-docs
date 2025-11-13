import { Moon, Sun } from "lucide-react";
import { useState } from "react";
import { Link, useRouter } from "../config/Router";
import { navigationLinks } from "../config/NavigationConstants";
import { LanguageSelector } from "../config/LanguageSelector";
import { MobileDrawer } from "./MobileDrawer";
import { Tooltip } from "@radix-ui/themes";
import logoBlack from "/assets/logo-placeholder.svg";
import logoWhite from "/assets/logo-placeholder.svg";
import { useTheme } from "../../hooks/useTheme";

export function Navigation() {
  const { toggleTheme, isDark } = useTheme();
  const { currentPath } = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Skip to Content Link for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-md focus:ring-2 focus:ring-ring focus:outline-none"
      >
        Skip to content
      </a>

      <nav className="w-full border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-gray-900 dark:text-white hover:opacity-80 transition-opacity">
            <img
              src={isDark ? logoWhite : logoBlack}
              alt="Career Topologies"
              className="h-7 w-auto"
            />
            <span className="text-lg font-medium">Career Topologies</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigationLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm transition-colors hover:text-gray-900 dark:hover:text-white ${currentPath === link.href
                  ? 'text-gray-900 dark:text-white'
                  : 'text-gray-600 dark:text-gray-400'
                  }`}
              >
                {link.label}
              </Link>
            ))}

            <LanguageSelector />

            <Tooltip content={isDark ? 'Switch to light mode' : 'Switch to dark mode'}>
              <button
                type="button"
                onClick={toggleTheme}
                className="inline-flex items-center justify-center p-2 bg-transparent text-gray-900 dark:text-white border border-transparent rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                aria-label="Toggle dark mode"
              >
                {isDark ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </button>
            </Tooltip>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden flex items-center gap-2">
            <LanguageSelector />

            <Tooltip content={isDark ? 'Switch to light mode' : 'Switch to dark mode'}>
              <button
                type="button"
                onClick={toggleTheme}
                className="inline-flex items-center justify-center p-2 bg-transparent text-gray-900 dark:text-white border border-transparent rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                aria-label="Toggle dark mode"
              >
                {isDark ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </button>
            </Tooltip>

            <MobileDrawer
              isMobileMenuOpen={isMobileMenuOpen}
              setIsMobileMenuOpen={setIsMobileMenuOpen}
            />
          </div>
        </div>
      </nav>
    </>
  );
}
