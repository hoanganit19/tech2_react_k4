import React, { useContext } from "react";

import { ThemeContext } from "./Theme";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <button type="button" onClick={handleToggleTheme}>
        {theme === "light" ? "Dark" : "Light"}
      </button>
    </div>
  );
};

export default Header;
