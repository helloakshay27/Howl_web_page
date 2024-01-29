import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <img
        className="howl_logo"
        src="./Assets/HOWL-Color-Digital-New-Breed-Logo-1.png"
        alt="Howl Digital"
      />
      <nav className="hamburger_menu">
        <div className="nav-1"></div>
        <div className="nav-2"></div>
      </nav>
    </header>
  );
};

export default Navbar;
