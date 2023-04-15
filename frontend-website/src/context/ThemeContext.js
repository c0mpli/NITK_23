import React, { createContext,useContext } from 'react'

export const ThemeContext = createContext(null);


export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
      throw new Error("Context must be used within a Provider");
    }
    return context;
  }