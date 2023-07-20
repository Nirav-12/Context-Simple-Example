import React from "react";

const THEMES = {
  light: {
    backgroundColor: "skyblue",
    textColor: "blue",
    text: "ABCD",
    buttonTextColour: "red",
  },
  dark: {
    backgroundColor: "black",
    textColor: "red",
    text: "XYZ",
    buttonTextColour: "white",
  },
};

const ThemeContext = React.createContext();

const ThemeContextProvider = ({ children }) => {
  const toggleTheme = () =>
    setTheme(theme == THEMES.light ? THEMES.dark : THEMES.light);

  const [theme, setTheme] = React.useState(THEMES.dark);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, THEMES }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };
