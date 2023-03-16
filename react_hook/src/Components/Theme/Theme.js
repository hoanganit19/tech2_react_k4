import React, { createContext, useState } from "react";
import Content from "./Content";
import Header from "./Header";
import "./Theme.css";

export const ThemeContext = createContext();

const Theme = () => {
  const [theme, setTheme] = useState("light");

  return (
    <div className={`theme-${theme}`}>
      <ThemeContext.Provider
        value={{
          theme,
          setTheme,
        }}
      >
        <Header />
        <Content />
      </ThemeContext.Provider>
    </div>
  );
};

export default Theme;
