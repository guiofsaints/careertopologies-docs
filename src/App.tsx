import { Router, useRouter } from "./components/config/Router";
import { Navigation } from "./components/layout/Navigation";
import { HeroSection } from "./components/sections/HeroSection";
import { AudienceSection } from "./components/sections/AudienceSection";
import { FrameworkSection } from "./components/sections/FrameworkSection";
import { Footer } from "./components/layout/Footer";
import { AboutPage } from "./components/pages/AboutPage";
import { FrameworkPage } from "./components/pages/FrameworkPage";
import { TopologiesPage } from "./components/pages/TopologiesPage";
import { ConceptsPage } from "./components/pages/ConceptsPage";
import { ManifestoPage } from "./components/pages/ManifestoPage";
import { ContributingPage } from "./components/pages/ContributingPage";
import { ShapesPage } from "./components/pages/ShapesPage";
import { ManagementPage } from "./components/pages/ManagementPage";
import { ReferencesPage } from "./components/pages/ReferencesPage";
import { LevelingPage } from "./components/pages/LevelingPage";
import { ProgressionPillarsPage } from "./components/pages/ProgressionPillarsPage";
import { GuidelinesPage } from "./components/pages/GuidelinesPage";
import { DevelopingLeadersPage } from "./components/pages/DevelopingLeadersPage";
import { Toaster } from "./components/ui/sonner";
import { ThemeProvider } from "./hooks/useTheme";

function AppContent() {
  const { currentPath } = useRouter();

  const renderPage = () => {
    switch (currentPath) {
      case "/":
        return (
          <>
            <HeroSection />
            <AudienceSection />
            <FrameworkSection />
          </>
        );
      case "/about":
        return <AboutPage />;
      case "/framework":
        return <FrameworkPage />;
      case "/framework/leveling":
        return <LevelingPage />;
      case "/framework/progression":
        return <ProgressionPillarsPage />;
      case "/framework/guidelines":
        return <GuidelinesPage />;
      case "/management/developing-leaders":
        return <DevelopingLeadersPage />;
      case "/topologies":
        return <TopologiesPage />;
      case "/concepts":
        return <ConceptsPage />;
      case "/shapes":
        return <ShapesPage />;
      case "/manifesto":
        return <ManifestoPage />;
      case "/management":
        return <ManagementPage />;
      case "/references":
        return <ReferencesPage />;
      case "/contributing":
        return <ContributingPage />;
      default:
        return (
          <>
            <HeroSection />
            <AudienceSection />
            <FrameworkSection />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navigation />
      <main id="main-content">{renderPage()}</main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}
