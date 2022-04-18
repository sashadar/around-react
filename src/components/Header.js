import React from "react";
import logo from "../images/logo/header-logo.svg";

function Header() {
  return (
    <header className="header">
      <img class="header__logo" src={logo} alt="Around the U.S. logo" />
    </header>
  );
}

export default Header;
