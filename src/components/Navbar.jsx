import React from "react";
import "../styles/Navbar.css";
import { NavLink, Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function Navbar() {
  const {
    isLoggedIn,
    user, // <== UPDATE
    logOutUser, // <== UPDATE
  } = useContext(AuthContext);

  return (
    <nav className="navigation">
      <div className="brand">
        <NavLink to="/" className="brand-name">
          <h5 className="nav-name-juna">JUNA</h5>
        </NavLink>
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
          {/* HOME */}
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

          {/* ALL COLLECTIONS */}
          <li className="nav-text">
            {/* <NavLink
              to=""
              className={({ isActive }) => (isActive ? "selected" : "")}
            > </NavLink> */}
              <div className="dropdown">
                <Link to="/allcatalogs"><button className="btn dropbtn"> All Collections </button></Link> 
                <div className="dropdown-content">
                  <Link to="/wholecatalog">All</Link>
                  <Link to="/allcatalogs">Sofas</Link>
                  <Link to="/allcatalogs">Tables</Link>
                  <Link to="/allcatalogs">Beds</Link>
                  <Link to="/allcatalogs">Chairs</Link>
                </div>
              </div>
           
          </li>

          {/* MY SPACE = only logged users can see it */}
          {isLoggedIn && (
            <>
              <li className="nav-text">
                <NavLink
                  to="/myspace"
                  className={({ isActive }) => (isActive ? "selected" : "")}
                >
                  <div className="dropdown">
                    <button className="btn ">
                      {" "}
                      {user && user.name}' Account
                    </button>
                  </div>
                </NavLink>
              </li>
            </>
          )}

          {/* LOG OUT = only logged users can see it */}
          {isLoggedIn && (
            <>
              <li className="nav-text">
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "selected" : "")}
                >
                  <div className="dropdown">
                    <button onClick={logOutUser} className="btn ">
                      Log Out
                    </button>
                  </div>
                </NavLink>
              </li>
            </>
          )}

          {/* SIGNUP = only not logged users can see it*/}
          {!isLoggedIn && (
            <>
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
            </>
          )}

          {/* LOGIN = only not logged users can see it*/}
          {!isLoggedIn && (
            <>
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
            </>
          )}

          {/* CART */}
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
                />
              </button>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
