import React from "react";
import { NavLink} from "react-router-dom";
import { BrowserRouter, Link, Route } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <NavLink 
                  to="/signup"
                  exact="true"
                >
                    <button className="btn">Posts</button>
                </NavLink>
                
      
      </ul>
    </nav>
  );
}

export default Navbar;
