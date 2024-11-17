// src/components/Navbar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css"; // Import CSS file for styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink
            to="/"
            className="nav-link"
            end // Ensures "/" matches only the home page
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
