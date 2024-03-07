import { createContext, useState } from "react";

export const ThemeContext = createContext();
if (typeof window !== undefined) {
  const getFromLocalStorage = () => {
    const value = localStorage.getItem("theme");
    return value || "light";
  };
}
export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return getFromLocalStorage();
  });
  return (
    <ThemeContext.Provider value={{ theme }}>
        {children}
    </ThemeContext.Provider>
  );
};
