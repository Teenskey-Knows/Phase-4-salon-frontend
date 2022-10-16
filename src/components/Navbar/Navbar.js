import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  return (
    <nav id="navbar">
      <div className="navbar-wrapper">
        {/* Salon Logo */}
        <div className="logo">
          <a href="#">Suka</a>
        </div>
        {/* Navbar Links */}
        <ul id="menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
