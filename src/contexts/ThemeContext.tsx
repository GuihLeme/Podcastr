import { createContext, useState, ReactNode, useContext } from 'react';

interface ThemeContextData {
  isDarkTheme: boolean,
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: ReactNode,
}

export const ThemeContext = createContext({} as ThemeContextData);

export function ThemeContextProvider({ children }: ThemeProviderProps) {
  const [isDarkTheme, SetIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    SetIsDarkTheme(!isDarkTheme)
  }

  return (
    <ThemeContext.Provider 
      value = {{ isDarkTheme, toggleTheme}}
    > 
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  return useContext(ThemeContext)
}



