import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <nav>
        <ul>
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Acceuil</li>
          </NavLink>
          <NavLink
            to="/galerie"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Galerie</li>
          </NavLink>
          <NavLink
            to="/prestation"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Prestation</li>
          </NavLink>
          <NavLink
            to="/contact"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Contact</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
