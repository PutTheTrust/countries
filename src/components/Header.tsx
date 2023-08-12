import { Moon } from "lucide-react";

import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" style={{ textDecoration: "none", color: "black" }}>
        <h1 className="header__logo">Where in the world?</h1>
      </Link>

      <button className="header__button">
        <Moon className="header__button-icon" />
        <span className="header__button-text">Dark mode</span>
      </button>
    </header>
  );
};

export default Header;
