import { Link } from "react-router-dom";
import s from "./AppBar.module.css";
const AppBar = () => (
  <div className={s.header}>
    <nav className={s.nav}>
      <Link to="/">
        {" "}
        <span class={s.accent}>Web</span>Studio
      </Link>
      <Link to="/">Studio</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/contact">Contacts</Link>
    </nav>
    <ul>
      <li class="contacts__item">
        <a
          class="contacts__link contacts__link--email"
          href="mailto:info@devstudio.com"
        >
          <svg class="contacts__icon" width="16" height="12">
            <use href="./images/symbol-defs.svg#icon-email"></use>
          </svg>
          info@devstudio.com
        </a>
      </li>
      <li class="contacts__item">
        <a
          class="contacts__link contacts__link--phone"
          href="tel:+380961111111"
        >
          <svg class="contacts__icon" width="11" height="16">
            <use href="./images/symbol-defs.svg#icon-smartphone"></use>
          </svg>
          +38 096 111 11 11
        </a>
      </li>
    </ul>
  </div>
);
export default AppBar;
