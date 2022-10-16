import React from "react";
import { NavLink} from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  return (
<<<<<<< HEAD
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
=======
    <div className="nav">
    <nav>
        
        <NavLink 
                  to="/login"
                  exact="true"
               >
                    <button className="btn">LOGIN</button>
                </NavLink>

                <NavLink 
                  to="/services"
                  exact="true"
               >
                    <button className="btn">SERVICES</button>
                </NavLink>
                
          <NavLink 
                  to="/about"
                  exact="true"
               >
                    <button className="btn">ABOUT</button>
                </NavLink>
        
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
                    <button className="btn">HOME</button>
                </NavLink>
      
      
>>>>>>> refs/remotes/origin/development
    </nav>
    </div>
  );
}

export default Navbar;
