import React from "react";
import { NavLink} from "react-router-dom";
import { BrowserRouter, Link, Route } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav">
    <nav>
        
        <NavLink 
                  to="/services"
                  exact="true"
               >
                    <button className="btn">SERVICES</button>
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
      
      
    </nav>
    </div>
  );
}

export default Navbar;
