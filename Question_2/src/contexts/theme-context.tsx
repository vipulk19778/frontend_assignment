import { useState, useEffect, useContext, createContext } from 'react';

import { useColorScheme } from '@mui/material/styles';

import type { ThemeMode } from '../types/vineyard';

interface ThemeContextType {
  mode: ThemeMode;
  toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function VineyardThemeProvider({ children }: ThemeProviderProps) {
  const [mode, setMode] = useState<ThemeMode>(() => {
    const stored = localStorage.getItem('vineyard-theme-mode');
    return (stored as ThemeMode) || 'light';
  });

  const { setColorScheme } = useColorScheme();

  useEffect(() => {
    localStorage.setItem('vineyard-theme-mode', mode);
    setColorScheme(mode);
  }, [mode, setColorScheme]);

  const toggleMode = () => {
    setMode((prevMode: ThemeMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return <ThemeContext.Provider value={{ mode, toggleMode }}>{children}</ThemeContext.Provider>;
}

export function useVineyardTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useVineyardTheme must be used within a VineyardThemeProvider');
  }
  return context;
}
