import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface RouterContextType {
  currentPath: string;
  navigate: (path: string) => void;
}

const RouterContext = createContext<RouterContextType | null>(null);

export function Router({ children }: { children: ReactNode }) {
  const [currentPath, setCurrentPath] = useState(() => {
    // Initialize with actual browser pathname
    return window.location.pathname;
  });

  useEffect(() => {
    // Handle browser back/forward buttons
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const navigate = (path: string) => {
    setCurrentPath(path);
    window.history.pushState({}, '', path);
    window.scrollTo(0, 0);
  };

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a Router');
  }
  return context;
}

export function Link({ to, children, className = "", onClick, variant = "ghost" }: {
  to: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
}) {
  const { navigate } = useRouter();

  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 border rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring disabled:opacity-50 disabled:cursor-not-allowed';

  const variantStyles = {
    primary: 'bg-foreground text-background border-foreground hover:opacity-90 focus:ring-foreground px-4 py-2 text-sm',
    secondary: 'bg-background text-foreground border-border hover:bg-accent hover:text-accent-foreground focus:ring-border px-4 py-2 text-sm',
    ghost: 'bg-transparent text-foreground border-transparent hover:bg-accent hover:text-accent-foreground focus:ring-accent px-2 py-1 text-sm'
  };

  const combinedClassName = className || `${baseStyles} ${variantStyles[variant]}`;

  return (
    <a
      href={to}
      className={combinedClassName}
      onClick={(e) => {
        e.preventDefault();
        navigate(to);
        onClick?.();
      }}
    >
      {children}
    </a>
  );
}
