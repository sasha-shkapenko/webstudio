import { Link, NavLink } from "react-router-dom";
import React, { useState } from "react";
import "./AppBar.scss";

const AppBar = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  return (
    <header className="header">
      <div className="container header__container">
        <div className="header-mobile">
          <Link className="logo" to="/">
            <span className="accent">Web</span>Studio
          </Link>

          <button
            type="button"
            className="header__btn"
            aria-expanded="false"
            aria-controls="mobile-menu"
            onClick={() => {
              setMobileMenuVisible(!mobileMenuVisible);
            }}
          >
            <svg width="40" height="40" aria-label="mobile menu switcher">
              <use
                className="icon icon--menu"
                href="./images/symbol-defs.svg#icon-menu"
              ></use>
            </svg>
          </button>
        </div>
      </div>

      <div
        className={mobileMenuVisible ? "menu open" : "menu"}
        id="mobile-menu"
      >
        <button
          className="menu__btn"
          onClick={() => {
            setMobileMenuVisible(!mobileMenuVisible);
          }}
        >
          <svg width="40" height="40">
            <use
              className="icon icon--cross"
              href="./images/symbol-defs.svg#icon-cross"
            ></use>
          </svg>
        </button>
        <nav className="nav">
          <ul className="nav-list">
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
        <ul
          className={
            mobileMenuVisible ? "contact-list visible" : "contact-list"
          }
        >
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
    </header>
  );
};
export default AppBar;
