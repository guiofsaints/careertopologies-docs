import { useTheme } from "../../hooks/useTheme";

export function ThemeDebug() {
  const { theme, effectiveTheme, isDark, toggleTheme } = useTheme();

  return (
    <div className="fixed bottom-4 right-4 p-4 bg-card border border-border rounded-lg shadow-lg text-card-foreground">
      <h3 className="font-semibold mb-2">Theme Debug</h3>
      <div className="text-sm space-y-1">
        <div>Selected: {theme}</div>
        <div>Effective: {effectiveTheme}</div>
        <div>isDark: {isDark.toString()}</div>
        <div>HTML Class: {document.documentElement.className}</div>
      </div>
      <button
        onClick={toggleTheme}
        className="mt-2 px-3 py-1 bg-primary text-primary-foreground rounded text-sm"
      >
        Toggle Theme
      </button>
      <div className="mt-2 text-xs">
        <div>Background: <span className="bg-background px-2">test</span></div>
        <div>Card: <span className="bg-card px-2">test</span></div>
        <div>Primary: <span className="bg-primary text-primary-foreground px-2">test</span></div>
      </div>
    </div>
  );
}
