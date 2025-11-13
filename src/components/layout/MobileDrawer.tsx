import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "../../hooks/useTailwindTheme";
import { useLanguage } from "../../hooks/useLanguage";
import { Link, useRouter } from "../config/Router";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetDescription } from "@/components/foundation/primitives";
import { navigationLinks } from "../config/NavigationConstants";
import logoBlack from "/assets/logo-placeholder.svg";
import logoWhite from "/assets/logo-placeholder.svg";

interface MobileDrawerProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

export function MobileDrawer({ isMobileMenuOpen, setIsMobileMenuOpen }: MobileDrawerProps) {
  const { toggleTheme, isDark } = useTheme();
  const { currentLanguage, changeLanguage, languages } = useLanguage();
  const { currentPath } = useRouter();

  return (
    <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
      <SheetTrigger asChild>
        <button
          className="inline-flex items-center justify-center p-2 bg-transparent text-gray-900 dark:text-white border border-transparent rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          aria-label="Toggle menu"
          type="button"
        >
          <Menu className="w-5 h-5" />
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="w-80 p-0 bg-white dark:bg-gray-900">
        <SheetHeader className="sr-only">
          <SheetTitle>Navigation Menu</SheetTitle>
          <SheetDescription>Navigate through Career Topologies site sections</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-800">
            <Link
              to="/"
              className="flex items-center gap-2 text-gray-900 dark:text-white hover:opacity-80 transition-opacity"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <img
                src={isDark ? logoWhite : logoBlack}
                alt="Career Topologies"
                className="h-7 w-auto"
              />
              <span className="text-lg font-medium">Career Topologies</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 overflow-y-auto">
            <div className="px-6 py-4 space-y-1">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`block px-3 py-2 rounded-lg text-sm transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 ${currentPath === link.href
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                    }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Footer Controls */}
          <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-800">
            <div className="space-y-3">
              {/* Language Selector in Drawer */}
              <div>
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">Language</p>
                <div className="space-y-1">
                  {languages.map((language) => (
                    <button
                      type="button"
                      key={language.code}
                      onClick={() => {
                        changeLanguage(language);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`w-full text-left inline-flex items-center justify-start px-3 py-2 bg-transparent border border-transparent rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 text-sm ${currentLanguage.code === language.code
                        ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
                        }`}
                    >
                      {language.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Theme Toggle in Drawer */}
              <div>
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">Theme</p>
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="inline-flex items-center gap-3 w-full px-3 py-2 bg-transparent text-gray-900 dark:text-white border border-transparent rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  {isDark ? (
                    <Sun className="w-4 h-4" />
                  ) : (
                    <Moon className="w-4 h-4" />
                  )}
                  <span className="text-sm">
                    {isDark ? 'Light Mode' : 'Dark Mode'}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
