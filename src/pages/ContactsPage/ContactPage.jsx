import s from "./ContactPage.module.css";

const ContactPage = () => {
  return (
    <>
      <div className="container">
        <section class="section">
          <address className="address">
            <ul className="address__list">
              <li className="address__item">
                <a
                  href="https://goo.gl/maps/r8mxYfeDEWeFVk8H8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  26 Lesi Ukrainki prospect, Kyiv
                </a>
              </li>
              <li className="address__item">
                <a className="address__link" href="mailto:info@example.com">
                  info@example.com
                </a>
              </li>
              <li className="address__item">
                <a className="address__link" href="tel:+380991111111">
                  +38 099 111 11 11
                </a>
              </li>
            </ul>
          </address>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.7794512657106!2d30.535810876341216!3d50.42658067158759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf0e033ecbe9%3A0x57a4dffefec77da0!2z0LHRg9C7LiDQm9C10YHQuCDQo9C60YDQsNC40L3QutC4LCAyNiwg0JrQuNC10LIsINCj0LrRgNCw0LjQvdCwLCAwMjAwMA!5e0!3m2!1sru!2suk!4v1697920162106!5m2!1sru!2suk"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </div>
    </>
  );
};
export default ContactPage;
