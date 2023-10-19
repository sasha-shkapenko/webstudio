import { Link, NavLink } from "react-router-dom";
import React, { useState } from "react";
import "./AppBar.scss";

const AppBar = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };
  return (
    <div className="container header">
      <nav className="nav">
        <Link className="logo" to="/">
          <span className="accent">Web</span>Studio
        </Link>
        <div
          className="hamburger"
          onClick={() => {
            setMobileMenuVisible(!mobileMenuVisible);
          }}
        >
          <svg className="close__icon" width="11" height="11">
            <use href="./images/symbol-defs.svg#icon-menu"></use>
          </svg>
        </div>
        <ul className={mobileMenuVisible ? "nav-menu open" : "nav-menu"}>
          <li
            className={`nav-item ${
              window.location.pathname === "/" ? "active" : ""
            }`}
          >
            <NavLink className="site-nav__link" to="/">
              Studio
            </NavLink>
          </li>
          <li
            className={`nav-item ${
              window.location.pathname === "/portfolio" ? "active" : ""
            }`}
          >
            <NavLink className="site-nav__link" to="/portfolio">
              Portfolio
            </NavLink>
          </li>
          <li
            className={`nav-item ${
              window.location.pathname === "/contact" ? "active" : ""
            }`}
          >
            <NavLink className="site-nav__link" to="/contact">
              Contacts
            </NavLink>
          </li>
        </ul>
      </nav>
      <ul className="contact-list">
        <li className="contact-item">
          <a className="contact" href="mailto:info@devstudio.com">
            <svg className="contacts-icon" width="16" height="12">
              <use href="./images/symbol-defs.svg#icon-email"></use>
            </svg>
            info@devstudio.com
          </a>
        </li>
        <li className="contact-item">
          <a className="contact" href="tel:+380961111111">
            <svg className="contacts-icon" width="11" height="16">
              <use href="./images/symbol-defs.svg#icon-smartphone"></use>
            </svg>
            +38 096 111 11 11
          </a>
        </li>
      </ul>
    </div>
  );
};
export default AppBar;
