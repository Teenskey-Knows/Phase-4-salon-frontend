import React from "react";
import { NavLink} from "react-router-dom";
import { BrowserRouter, Link, Route } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav">
    <nav>
      
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
                    <button className="btn">SIGNUP</button>
                </NavLink>
                <NavLink 
                  to="/"
                  exact="true"
                  
                >
                    <button className="btn">Home</button>
                </NavLink>
      
      
    </nav>
    </div>
  );
}

export default Navbar;
