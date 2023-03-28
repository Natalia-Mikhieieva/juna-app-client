import React from "react";

import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="Navbar">
      <ul>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "selected" : "")}
        >
          Home
        </NavLink>

        <NavLink to="/">
          <img src="../logo.svg" alt="logo-img" />
        </NavLink>

        <NavLink
          to="/catalog"
          className={({ isActive }) => (isActive ? "selected" : "")}
        >
          Catalog
        </NavLink>

        <NavLink
          to="/cart"
          className={({ isActive }) => (isActive ? "selected" : "")}
        >
          <img src="./cart-icon.svg" alt="cart-icon" />
          Cart
        </NavLink>

        <NavLink
          to="/signup"
          className={({ isActive }) => (isActive ? "selected" : "")}
        >
          Signup
        </NavLink>

        <NavLink
          to="/login"
          className={({ isActive }) => (isActive ? "selected" : "")}
        >
          Login
        </NavLink>
      </ul>
    </nav>
  );
}

export default Navbar;
