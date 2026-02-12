import { useContext, createContext, useState, useEffect } from "react";

// initialize context
const ThemeContext = createContext();

//hook
// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("Dark");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "Dark" ? "Light" : "Dark"));
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const providerObject = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={providerObject}>
      {children}
    </ThemeContext.Provider>
  );
};
