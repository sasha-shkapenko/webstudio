import "./styles/main.scss";
import React, { useState } from "react";
import ModalWindow from "../../components/ModalWindow/ModalWindow";

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section className="hero">
        <div>
          <h1 className="hero__title">
            Effective solutions <br /> for your business
          </h1>
          <button
            className="hero__button"
            data-modal-open
            type="button"
            onClick={openModal}
          >
            Order service
          </button>
          <ModalWindow isOpen={isModalOpen} onClose={closeModal} />
        </div>
      </section>

      <section className="section section--no-paddind">
        <div className="container">
          <h2 className="visually-hidden">Features</h2>
          <ul className="features">
            <li className="features__item">
              <div className="features__icon-box">
                <svg className="features__icon">
                  <use href="./images/symbol-defs.svg#icon-antenna"></use>
                </svg>
              </div>
              <h3 className="features__title">Attention to detail</h3>
              <p className="features__text">
                Ideological considerations, as well as the beginning of the
                daily work of forming a position.
              </p>
            </li>

            <li className="features__item">
              <div className="features__icon-box">
                <svg className="features__icon">
                  <use href="./images/symbol-defs.svg#icon-clock"></use>
                </svg>
              </div>
              <h3 className="features__title">Punctuality</h3>
              <p className="features__text">
                The task of the organization, in particular the scope and
                location of personnel training, entails.
              </p>
            </li>

            <li className="features__item">
              <div className="features__icon-box">
                <svg className="features__icon">
                  <use href="./images/symbol-defs.svg#icon-diagram"></use>
                </svg>
              </div>
              <h3 className="features__title">Planning</h3>
              <p className="features__text">
                Equally, consultation with a broad assistanse positively affects
                the result of the company.
              </p>
            </li>

            <li className="features__item">
              <div className="features__icon-box">
                <svg className="features__icon">
                  <use href="./images/symbol-defs.svg#icon-astronaut"></use>
                </svg>
              </div>
              <h3 className="features__title">Modern technologies</h3>
              <p className="features__text">
                The significance of these problems is so obvious that the
                implementation of planned targets.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="section we-do">
        <div className="container">
          <h2 className="section__title">What we do</h2>
          <ul className="we-do__list">
            <li className="we-do__item">
              <picture>
                <source
                  srcSet="
                            ./images/studio/img1.jpg    1x,
                            ./images/studio/img1@2x.jpg 2x
                            "
                  media="(min-width: 1200px)"
                />
                <img
                  src="./images/studio/img1.jpg"
                  alt="Руки на клавиатуре"
                  width="370"
                />
              </picture>
              <div className="we-do__descr-thumb">
                <h3 className="we-do__descr-text">Desktop applications</h3>
              </div>
            </li>
            <li className="we-do__item">
              <picture>
                <source
                  srcSet="
                            ./images/studio/img2.jpg    1x,
                            ./images/studio/img2@2x.jpg 2x
                            "
                  media="(min-width: 1200px)"
                />
                <img
                  src="./images/studio/img2.jpg"
                  alt="Человек за компьютером с телефоном"
                  width="370"
                />
              </picture>
              <div className="we-do__descr-thumb">
                <h3 className="we-do__descr-text">Mobile applications</h3>
              </div>
            </li>
            <li className="we-do__item">
              <picture>
                <source
                  srcSet="
                            ./images/studio/img3.jpg    1x,
                            ./images/studio/img3@2x.jpg 2x
                            "
                  media="(min-width: 1200px)"
                />
                <img
                  src="./images/studio/img3.jpg"
                  alt="Держит планшет в руках"
                  width="370"
                />
              </picture>
              <div className="we-do__descr-thumb">
                <h3 className="we-do__descr-text">Design solutions</h3>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="section section--grey-bg">
        <div className="container">
          <h2 className="section__title">Our team</h2>
          <ul className="team">
            <li className="team__item">
              <picture>
                <source
                  srcSet="
                        ./images/studio/mob-igor.jpg    1x,
                        ./images/studio/mob-igor@2x.jpg 2x
                        "
                  media="(max-width: 767px)"
                />
                <source
                  srcSet="
                        ./images/studio/tablet-igor.jpg    1x,
                        ./images/studio/tablet-igor@2x.jpg 2x
                        "
                  media="(max-width: 1199px)"
                />
                <source
                  srcSet="
                                                ./images/studio/desktop-igor.jpg    1x,
                                                ./images/studio/desktop-igor@2x.jpg 2x
                                                "
                  media="(min-width: 1200px)"
                />
                <img
                  src="./images/studio/igor.jpg"
                  alt="Фото Игоря Демьяненко"
                  width="270"
                />
              </picture>

              <div className="team__thumb">
                <h3 className="team__title">Igor Demyanenko</h3>
                <p className="team__description">Product Designer</p>
                <ul className="socials">
                  <li className="socials__item">
                    <a
                      className="socials__link"
                      href="https://www.instagram.com"
                    >
                      <svg className="socials__icon">
                        <use href="./images/symbol-defs.svg#icon-instagram"></use>
                      </svg>
                    </a>
                  </li>
                  <li className="socials__item">
                    <a className="socials__link" href="https://twitter.com">
                      <svg className="socials__icon">
                        <use href="./images/symbol-defs.svg#icon-twitter"></use>
                      </svg>
                    </a>
                  </li>
                  <li className="socials__item">
                    <a
                      className="socials__link"
                      href="https://www.facebook.com"
                    >
                      <svg className="socials__icon">
                        <use href="./images/symbol-defs.svg#icon-facebook"></use>
                      </svg>
                    </a>
                  </li>
                  <li className="socials__item">
                    <a
                      className="socials__link"
                      href="https://www.linkedin.com"
                    >
                      <svg className="socials__icon">
                        <use href="./images/symbol-defs.svg#icon-linkedin"></use>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li className="team__item">
              <picture>
                <source
                  srcSet="
                        ./images/studio/mob-olga.jpg    1x,
                        ./images/studio/mob-olga@2x.jpg 2x
                          "
                  media="(max-width: 767px)"
                />
                <source
                  srcSet="
                            ./images/studio/tablet-olga.jpg    1x,
                            ./images/studio/tablet-olga@2x.jpg 2x
                            "
                  media="(max-width: 1199px)"
                />
                <source
                  srcSet="
                        ./images/studio/desktop-olga.jpg    1x,
                        ./images/studio/desktop-olga@2x.jpg 2x
                         "
                  media="(min-width: 1200px)"
                />
                <img
                  src="./images/studio/olga.jpg"
                  alt="Фото Ольги Репиной"
                  width="270"
                />
              </picture>

              <div className="team__thumb">
                <h3 className="team__title">Olga Repina</h3>
                <p className="team__description">Frontend Developer</p>
                <ul className="socials">
                  <li className="socials__item">
                    <a
                      className="socials__link"
                      href="https://www.instagram.com"
                    >
                      <svg className="socials__icon">
                        <use href="./images/symbol-defs.svg#icon-instagram"></use>
                      </svg>
                    </a>
                  </li>
                  <li className="socials__item">
                    <a className="socials__link" href="https://twitter.com">
                      <svg className="socials__icon">
                        <use href="./images/symbol-defs.svg#icon-twitter"></use>
                      </svg>
                    </a>
                  </li>
                  <li className="socials__item">
                    <a
                      className="socials__link"
                      href="https://www.facebook.com"
                    >
                      <svg className="socials__icon">
                        <use href="./images/symbol-defs.svg#icon-facebook"></use>
                      </svg>
                    </a>
                  </li>
                  <li className="socials__item">
                    <a
                      className="socials__link"
                      href="https://www.linkedin.com"
                    >
                      <svg className="socials__icon">
                        <use href="./images/symbol-defs.svg#icon-linkedin"></use>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li className="team__item">
              <picture>
                <source
                  srcSet="
                        ./images/studio/mob-nikolai.jpg    1x,
                        ./images/studio/mob-nikolai@2x.jpg 2x
                        "
                  media="(max-width: 767px)"
                />
                <source
                  srcSet="
                        ./images/studio/tablet-nikolai.jpg    1x,
                        ./images/studio/tablet-nikolai@2x.jpg 2x
                        "
                  media="(max-width: 1199px)"
                />
                <source
                  srcSet="
                        ./images/studio/desktop-nikolai.jpg    1x,
                        ./images/studio/desktop-nikolai@2x.jpg 2x
                        "
                  media="(min-width: 1200px)"
                />

                <img
                  src="./images/studio/nikolai.jpg"
                  alt="Фото Николая Тарасова"
                  width="270"
                />
              </picture>

              <div className="team__thumb">
                <h3 className="team__title">Nikolai Tarasov</h3>
                <p className="team__description">Marketing</p>
                <ul className="socials">
                  <li className="socials__item">
                    <a
                      className="socials__link"
                      href="https://www.instagram.com"
                    >
                      <svg className="socials__icon">
                        <use href="./images/symbol-defs.svg#icon-instagram"></use>
                      </svg>
                    </a>
                  </li>
                  <li className="socials__item">
                    <a className="socials__link" href="https://twitter.com">
                      <svg className="socials__icon">
                        <use href="./images/symbol-defs.svg#icon-twitter"></use>
                      </svg>
                    </a>
                  </li>
                  <li className="socials__item">
                    <a
                      className="socials__link"
                      href="https://www.facebook.com"
                    >
                      <svg className="socials__icon">
                        <use href="./images/symbol-defs.svg#icon-facebook"></use>
                      </svg>
                    </a>
                  </li>
                  <li className="socials__item">
                    <a
                      className="socials__link"
                      href="https://www.linkedin.com"
                    >
                      <svg className="socials__icon">
                        <use href="./images/symbol-defs.svg#icon-linkedin"></use>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li className="team__item">
              <picture>
                <source
                  srcSet="
                                                ./images/studio/mob-mikhail.jpg    1x,
                                                ./images/studio/mob-mikhail@2x.jpg 2x
                                              "
                  media="(max-width: 767px)"
                />
                <source
                  srcSet="
                                                ./images/studio/tablet-mikhail.jpg    1x,
                                                ./images/studio/tablet-mikhail@2x.jpg 2x
                                              "
                  media="(max-width: 1199px)"
                />
                <source
                  srcSet="
                                                                        ./images/studio/desktop-mikhail.jpg    1x,
                                                                        ./images/studio/desktop-mikhail@2x.jpg 2x
                                                                      "
                  media="(min-width: 1200px)"
                />

                <img
                  src="./images/studio/mikhail.jpg"
                  alt="Фото Михаила Ермакова"
                  width="270"
                />
              </picture>
              <div className="team__thumb">
                <h3 className="team__title">Mykhail Ermakov</h3>
                <p className="team__description">UI Designer</p>
                <ul className="socials">
                  <li className="socials__item">
                    <a
                      className="socials__link"
                      href="https://www.instagram.com"
                    >
                      <svg className="socials__icon">
                        <use href="./images/symbol-defs.svg#icon-instagram"></use>
                      </svg>
                    </a>
                  </li>
                  <li className="socials__item">
                    <a className="socials__link" href="https://twitter.com">
                      <svg className="socials__icon">
                        <use href="./images/symbol-defs.svg#icon-twitter"></use>
                      </svg>
                    </a>
                  </li>
                  <li className="socials__item">
                    <a
                      className="socials__link"
                      href="https://www.facebook.com"
                    >
                      <svg className="socials__icon">
                        <use href="./images/symbol-defs.svg#icon-facebook"></use>
                      </svg>
                    </a>
                  </li>
                  <li className="socials__item">
                    <a
                      className="socials__link"
                      href="https://www.linkedin.com"
                    >
                      <svg className="socials__icon">
                        <use href="./images/symbol-defs.svg#icon-linkedin"></use>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="section ">
        <div className="container">
          <h2 className="section__title">Regular customers</h2>
          <ul className="clients">
            <li className="clients__item">
              <a className="clients__link" href="/">
                <svg className="clients__logo">
                  <use href="./images/symbol-defs.svg#icon-Logo"></use>
                </svg>
              </a>
            </li>
            <li className="clients__item">
              <a className="clients__link" href="/">
                <svg className="clients__logo">
                  <use href="./images/symbol-defs.svg#icon-Logo-2"></use>
                </svg>
              </a>
            </li>
            <li className="clients__item">
              <a className="clients__link" href="/">
                <svg className="clients__logo">
                  <use href="./images/symbol-defs.svg#icon-Logo-3"></use>
                </svg>
              </a>
            </li>
            <li className="clients__item">
              <a className="clients__link" href="/">
                <svg className="clients__logo">
                  <use href="./images/symbol-defs.svg#icon-Logo-4"></use>
                </svg>
              </a>
            </li>
            <li className="clients__item">
              <a className="clients__link" href="/">
                <svg className="clients__logo">
                  <use href="./images/symbol-defs.svg#icon-Logo-5"></use>
                </svg>
              </a>
            </li>
            <li className="clients__item">
              <a className="clients__link" href="/">
                <svg className="clients__logo">
                  <use href="./images/symbol-defs.svg#icon-Logo-6"></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};
export default HomePage;
