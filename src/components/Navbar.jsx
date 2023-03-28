import React from "react";

import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
<li >
        <NavLink to="/" >
          <img src="https://www.entrustit.co.uk/wp-content/uploads/2014/10/loaf_logo.jpeg" alt="logo-img" className="nav-logo" />
        </NavLink>
</li>
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
          to="/catalog"
          className={({ isActive }) => (isActive ? "selected" : "")}
        >
          Catalog
        </NavLink>
</li>
<li>
        <NavLink
          to="/cart"
          className={({ isActive }) => (isActive ? "selected" : "")}
        >
          <img src="./cart-icon.svg" alt="cart-icon" />
          Cart
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
      </ul>
    </nav>
  );
}

export default Navbar;
