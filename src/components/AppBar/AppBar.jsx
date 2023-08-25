import { Link } from "react-router-dom";
import "./AppBar.scss";

const AppBar = () => (
  <div className="header">
    <nav className="nav">
      <Link className="logo" to="/">
        <span className="accent">Web</span>Studio
      </Link>
      <Link className="nav-item" to="/">
        Studio
      </Link>
      <Link className="nav-item" to="/portfolio">
        Portfolio
      </Link>
      <Link className="nav-item" to="/contact">
        Contacts
      </Link>
    </nav>
    <ul className="contact-list">
      <li class="contact-item">
        <a class="contact" href="mailto:info@devstudio.com">
          <svg class="contacts-icon" width="16" height="12">
            <use href="./images/symbol-defs.svg#icon-email"></use>
          </svg>
          info@devstudio.com
        </a>
      </li>
      <li class="contact-item">
        <a class="contact" href="tel:+380961111111">
          <svg class="contacts-icon" width="11" height="16">
            <use href="./images/symbol-defs.svg#icon-smartphone"></use>
          </svg>
          +38 096 111 11 11
        </a>
      </li>
    </ul>
  </div>
);
export default AppBar;
