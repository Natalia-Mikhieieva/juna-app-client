import React from "react";
import "../styles/Navbar.css";

import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navigation">
      <div className="brand">
        <a href="/" className="brand-name">
          
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
          <li className="nav-text">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "selected" : "")}
            >
              <div className="dropdown">
             <button className="btn "> Home</button>
             </div>
            </NavLink>
          </li>

          <li className="nav-text">
            <NavLink
              to="/allcatalogs"
              className={({ isActive }) => (isActive ? "selected" : "")}
            >
              <div className="dropdown">
             <button className="btn dropbtn">All Collections </button> 
             <div className="dropdown-content">
                <a href="#">All</a>
                <a href="#">Sofas</a>
                <a href="#">Tables</a>
                <a href="#">Beds</a>
             </div></div>
            </NavLink>
          </li>

      

          <li className="nav-text">
            <NavLink
              to="/signup"
              className={({ isActive }) => (isActive ? "selected" : "")}
            >
              <div className="dropdown">
               <button className="btn ">Signup</button>
               </div>
            </NavLink>
          </li>

          <li className="nav-text">
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? "selected" : "")}
            >
              <div className="dropdown">
               <button className="btn ">Login</button>
               </div>
            </NavLink>
          </li>
          <li className="nav-text">
            <NavLink
              to="/cart"
              className={({ isActive }) => (isActive ? "selected" : "")}
            >
               <button className="btn ">
              <img
                src="https://cdn-icons-png.flaticon.com/512/60/60992.png"
                alt="cart-icon"
                className="cart-logo"
              /></button>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
