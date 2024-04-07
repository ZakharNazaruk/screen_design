import React, { createContext, useState, useEffect } from 'react';
import { Appearance } from 'react-native';

export const themes = {
  light: {
    white:"#fff",
    textBlue: "#0097FE",
    textGrey: "#ADBECE",
    viewGrey: "#EDEEF2",
    buttonLightBlue: "#ECF5FE",
    viewGrey2: "#E1E4E9",
    viewLightRed: "#FFDFDF",
    redText: "#DD4C4C",
    text:"#000"
  },
  dark: {
    white:"#1E2734",
    textBlue: "#0097FE",
    textGrey: "#ADBECE",
    viewGrey: "#2A3749",    
    buttonLightBlue: "#2D3D53",
    viewGrey2: "#E1E4E9",
    viewLightRed: "#FFDFDF",
    redText: "#DD4C4C",
    text:"#fff"

  },
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(Appearance.getColorScheme() === 'dark' ? themes.dark : themes.light);

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setTheme(colorScheme === 'dark' ? themes.dark : themes.light);
    });

    return () => subscription.remove();
  }, []);

  const toggleTheme = () => {
    setTheme(theme === themes.light ? themes.dark : themes.light);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};


