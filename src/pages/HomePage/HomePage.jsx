import "./styles/main.scss";

const HomePage = () => {
  return (
    <>
      <section className="hero">
        <div>
          <h1 className="hero__title">
            Эффективные решения <br /> для вашего бизнеcа
          </h1>
          <button className="hero__button" data-modal-open type="button">
            Заказать услугу
          </button>
        </div>
      </section>

      <section className="section section--no-paddind">
        <div className="container">
          <h2 className="visually-hidden">Особенности</h2>
          <ul className="features">
            <li className="features__item">
              <div className="features__icon-box">
                <svg className="features__icon">
                  <use href="./images/symbol-defs.svg#icon-antenna"></use>
                </svg>
              </div>
              <h3 className="features__title">Внимание к деталям</h3>
              <p className="features__text">
                Идейные соображения, а также начало повседневной работы по
                формированию позиции.
              </p>
            </li>

            <li className="features__item">
              <div className="features__icon-box">
                <svg className="features__icon">
                  <use href="./images/symbol-defs.svg#icon-clock"></use>
                </svg>
              </div>
              <h3 className="features__title">Пунктуальность</h3>
              <p className="features__text">
                Задача организации, в особенности же рамки и место обучения
                кадров влечет за собой.
              </p>
            </li>

            <li className="features__item">
              <div className="features__icon-box">
                <svg className="features__icon">
                  <use href="./images/symbol-defs.svg#icon-diagram"></use>
                </svg>
              </div>
              <h3 className="features__title">Планирование</h3>
              <p className="features__text">
                Равным образом консультация с широким активом в значительной
                степени обуславливает.
              </p>
            </li>

            <li className="features__item">
              <div className="features__icon-box">
                <svg className="features__icon">
                  <use href="./images/symbol-defs.svg#icon-astronaut"></use>
                </svg>
              </div>
              <h3 className="features__title">Современные технологии</h3>
              <p className="features__text">
                Значимость этих проблем настолько очевидна, что реализация
                плановых заданий.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="section we-do">
        <div className="container">
          <h2 className="section__title">Чем мы занимаемся</h2>
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
                <h3 className="we-do__descr-text">Десктопные приложения</h3>
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
                <h3 className="we-do__descr-text">Мобильные приложения</h3>
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
                <h3 className="we-do__descr-text">Дизайнерские решения</h3>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="section section--grey-bg">
        <div className="container">
          <h2 className="section__title">Наша команда</h2>
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
                <h3 className="team__title">Игорь Демьяненко</h3>
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
                <h3 className="team__title">Ольга Репина</h3>
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
                <h3 className="team__title">Николай Тарасов</h3>
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
                <h3 className="team__title">Михаил Ермаков</h3>
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
    </>
  );
};
export default HomePage;
