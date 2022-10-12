import React from "react";
import "./Navbar.css";

function Header() {
  return (
    <header className="container">
      <nav className="nav">
        <ul className="nav_items items-flex">
          <li className="nav_item">Suka</li>
          <li className="nav_item">SERVICES</li>
          <li className="nav_item">Log In </li>
          <li className="nav_item">Sign Up</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
