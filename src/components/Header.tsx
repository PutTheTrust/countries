import { Moon } from "lucide-react";

import "./Header.scss";
import { Link } from "react-router-dom";
// import { useTheme } from "./theme-provider";
import { useState } from "react";

const Header = () => {
  const [isLight, setLight] = useState(true);
  // const { setTheme } = useTheme();

  const toggleTheme = () => {
    setLight(!isLight);
    if (isLight) {
      document.querySelector("body")?.setAttribute("data-theme", "dark");
    } else {
      document.querySelector("body")?.setAttribute("data-theme", "light");
    }
  };
  return (
    <header className="con">
      <div className="header">
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <h1 className="header__logo">Where in the world?</h1>
        </Link>

        <button className="header__button" onClick={toggleTheme}>
          <Moon className="header__button-icon" />
          <span className="header__button-text">Dark mode</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
