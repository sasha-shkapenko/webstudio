import "./Footer.scss";
import "../../styles/main.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__contacts">
          <a className="logo footer__logo" href="/">
            Web<span className="logo--color-foot">Studio</span>
          </a>
          <address className="address">
            <ul className="address__list">
              <li className="address__item address__item--white">
                <a
                  href="https://goo.gl/maps/r8mxYfeDEWeFVk8H8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  г. Киев, пр-т Леси Украинки, 26
                </a>
              </li>
              <li className="address__item">
                <a className="address__link" href="mailto:info@example.com">
                  info@example.com
                </a>
              </li>
              <li className="address__item">
                <a className="address__link" href="tel:+380991111111">
                  +380991111111
                </a>
              </li>
            </ul>
          </address>
        </div>
        <div className="join">
          <h2 className="join__title">присоединяйтесь</h2>
          <ul className="socials">
            <li className="socials__item">
              <a className="join__link" href="https://www.instagram.com">
                <svg className="join__icon">
                  <use href="./images/symbol-defs.svg#icon-instagram"></use>
                </svg>
              </a>
            </li>
            <li className="socials__item">
              <a className="join__link" href="https://twitter.com">
                <svg className="join__icon">
                  <use href="./images/symbol-defs.svg#icon-twitter"></use>
                </svg>
              </a>
            </li>
            <li className="socials__item">
              <a className="join__link" href="https://www.facebook.com">
                <svg className="join__icon">
                  <use href="./images/symbol-defs.svg#icon-facebook"></use>
                </svg>
              </a>
            </li>
            <li className="socials__item">
              <a className="join__link" href="https://www.linkedin.com">
                <svg className="join__icon">
                  <use href="./images/symbol-defs.svg#icon-linkedin"></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div className="subscribe">
          <h2 className="subscribe__title">Подпишитесь на рассылку</h2>
          <form className="subscribe__form">
            <input
              className="subscribe__email"
              type="text"
              placeholder="E-mail"
            />
            <button className="subscribe__btn" type="submit">
              Подписаться
              <svg className="subscribe__icon" width="24" height="24">
                <use href="./images/symbol-defs.svg#icon-send"></use>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
