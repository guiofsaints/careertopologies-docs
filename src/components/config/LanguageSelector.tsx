import { Globe, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../../hooks/useLanguage";

export function LanguageSelector() {
  const { currentLanguage, changeLanguage, languages } = useLanguage();
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
        className="inline-flex items-center gap-2 p-2 bg-transparent text-foreground border border-transparent rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
        aria-label="Select language"
      >
        <Globe className="w-4 h-4" />
        <ChevronDown className="w-3 h-3" />
      </button>

      {isLanguageDropdownOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsLanguageDropdownOpen(false)}
          />
          <div className="absolute right-0 top-full mt-2 w-48 bg-card border border-border rounded-lg shadow-lg z-20">
            {languages.map((language) => (
              <button
                type="button"
                key={language.code}
                onClick={() => {
                  changeLanguage(language);
                  setIsLanguageDropdownOpen(false);
                }}
                className={`w-full text-left inline-flex items-center justify-start px-4 py-2 bg-transparent border border-transparent rounded-none transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent text-sm first:rounded-t-lg last:rounded-b-lg ${currentLanguage.code === language.code ? 'text-primary bg-accent' : 'text-foreground hover:bg-accent hover:text-accent-foreground'
                  }`}
              >
                {language.name}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
