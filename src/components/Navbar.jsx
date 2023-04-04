import React from "react";
import "../styles/Navbar.css";

import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navigation">
      <div className="brand">
        <a href="/" className="brand-name">
          JUNA
        </a>
        <NavLink to="/">
          <img
            src="https://www.svgrepo.com/show/323714/abstract-039.svg"
            alt="logo-img"
            className="nav-logo"
          />
        </NavLink>
      </div>

      <div className="navigation-menu">
        <ul className="navbar-list">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "selected" : "")}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/allcatalogs"
              className={({ isActive }) => (isActive ? "selected" : "")}
            >
              All Collections
            </NavLink>
          </li>

      

          <li>
            <NavLink
              to="/signup"
              className={({ isActive }) => (isActive ? "selected" : "")}
            >
              Signup
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? "selected" : "")}
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) => (isActive ? "selected" : "")}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/60/60992.png"
                alt="cart-icon"
                className="cart-logo"
              />
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
