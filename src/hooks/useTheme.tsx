import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'dark' | 'light' | 'system'

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
  effectiveTheme: 'dark' | 'light'
}

const initialState: ThemeProviderState = {
  theme: 'system',
  setTheme: () => null,
  effectiveTheme: 'light',
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'careertopologies-ui-theme',
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return defaultTheme
    return (localStorage.getItem(storageKey) as Theme) || defaultTheme
  })

  const [effectiveTheme, setEffectiveTheme] = useState<'dark' | 'light'>('light')

  useEffect(() => {
    const root = window.document.documentElement

    const applyTheme = (newTheme: 'dark' | 'light') => {
      root.classList.remove('light', 'dark')
      root.classList.add(newTheme)
      setEffectiveTheme(newTheme)
    }

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      applyTheme(systemTheme)

      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      const handleChange = (e: MediaQueryListEvent) => {
        applyTheme(e.matches ? 'dark' : 'light')
      }

      mediaQuery.addEventListener('change', handleChange)
      return () => mediaQuery.removeEventListener('change', handleChange)
    } else {
      applyTheme(theme)
    }
  }, [theme])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(storageKey, theme)
    }
  }, [theme, storageKey])

  const value = {
    theme,
    effectiveTheme,
    setTheme: (newTheme: Theme) => {
      setTheme(newTheme)
    },
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider')

  const toggleTheme = () => {
    const { theme, effectiveTheme, setTheme } = context

    if (theme === 'system') {
      // Se está em modo system, muda para o oposto do tema efetivo atual
      setTheme(effectiveTheme === 'dark' ? 'light' : 'dark')
    } else {
      // Se já está em modo manual, alterna
      setTheme(theme === 'dark' ? 'light' : 'dark')
    }
  }

  return {
    ...context,
    toggleTheme,
    isDark: context.effectiveTheme === 'dark'
  }
}
